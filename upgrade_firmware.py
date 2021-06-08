#!/usr/bin/env python

#import psycopg2
#import dbconstants
import constants
#import re
import time
import traceback
#import datetime
#import uuid
import remote_execution
import threading
import queue
from lib.connection_utils import SSHConnection, TelnetConnection
from lib.db_utils import *
from lib.parse_utils import *

def ping_handler(request):
    
    request['commands'] = []
    out, log = remote_execution.remote_execution(request, update_db=False, return_log=True)
    print(f"Output:\n{out}")
    response = {}
    for device,output in out.items():
        response[device] = 'output' in output
    print(f"Response:\n{response}")
    update_uf_log(log=log, request=request, action='ping')
    return response
    #return {'10.1.1.20':True,'10.1.1.21':True,'10.1.1.22':False,}

def predeployment_handler(request):

    oem = request['OEM'].lower()
    device_type = request['deviceType'].lower()
    command = constants.get_version[oem]

    request['commands'] = [command] + constants.predeployment_cmds[device_type][oem]
    out, log = remote_execution.remote_execution(request, update_db=False, return_log=True)
    update_uf_log(log=log, request=request, action='predeployment')
    #print(f"Output:\n{out}")
    response = {}
    for device,output in out.items():
        try:
            current_version_raw = output['output'][command]
            current_version = get_version(current_version_raw, oem)
            print(f"Current version: {current_version}")
            compatible_versions = get_compatible_versions(current_version,request['OEM'])
            response[device] = dict(current_version=current_version,
                                    compatible_versions=compatible_versions)
            response[device]['status'] = len(compatible_versions) != 0
        except Exception as e:
            print(e)
            response[device] = dict(current_version='',
                                    compatible_versions=[],
                                    status=False)
    return response
    '''
    return {'10.1.1.20':
                {'current_version': 'Version 15.2',
                 'compatible_versions': ['Version 15.3', 'Version 15.4'],
                 'status': True},
            '10.1.1.21':
                {'current_version': 'Version 15.2',
                 'compatible_versions': ['Version 15.3', 'Version 15.4'],
                 'status': True}}
    '''

def postdeployment_handler(request):

    response = {}
    oem = request['OEM'].lower()
    device_type = request['deviceType'].lower()
    request['commands'] = constants.postdeployment_cmds['base'][oem] \
                          + constants.postdeployment_cmds[device_type][oem]
    out, log = remote_execution.remote_execution(request, update_db=False, return_log=True)
    update_uf_log(log=log, request=request, action='postdeployment')

    for device, output in out.items():
        response[device] = 'error' not in output
    return response
    #return {'10.1.1.20':True,'10.1.1.21':True,'10.1.1.22':False,}

def initialize_device(c):

    c.initialize()
    if 'error' in c.execution_output:
        raise Exception(f"Unable to initialize {c.device}\n")
    return

def load_image(c, access_server, file_path, filename):

    c.load_image(access_server, file_path, filename)
    if 'error' in c.execution_output:
        raise Exception(f"Unable to load image to {c.device}\n")
    return

def config_boot(c, filename):
    try:
        '''
        command = constants.get_boot_cmd[c.oem]
        c.execute([command])
        boot_raw = c.execution_output['output'][command]
        '''
        boot_raw = 'boot system flash:csr1000v-rpboot.17.03.01a.SPA.pkg'
        old_boot_file = get_boot(boot_raw, c.oem)
        commands=["conf t",
                  "no boot system",
                  f"boot system flash:{filename}",
                  f"boot system {old_boot_file}",
                  "exit",
                  "wr mem"]
        c.execute(commands=commands)
    except Exception as e:
        raise Exception(e)
    return

def reload(c):

    try:
        c.reload()
        c.terminate()
        print(f"Logs before reload\n{c.log}")
        time_max = time.time() + 180
        while True:
            print("Trying connection")
            c.initialize()
            print(f"Log: {c.log}")
            if 'error' not in c.execution_output:
                print("Reachable now")
                break
            if time.time() > time_max:
                print("Timeout waiting for device to load")
                raise Exception("Timeout waiting for device to load")
        c.terminate()
    except Exception as e:
        raise Exception(e)
    finally:
        return

def deploy_single_device(request, output_q):

    device = request['device']
    upgrade_version = request['upgrade_version']
    access_server, file_path, filename = get_firmware_path(upgrade_version,
                                                           request['OEM'])
    if request['deviceConnectionType'] == 'ssh':
        c = SSHConnection(request)
    elif request['deviceConnectionType'] == 'telnet':
        c = TelnetConnection(request)
    else:
        output_q.put((request['device'],'Error:Invalid Connection type',{}))
        return
    try:
        initialize_device(c)
        load_image(c, access_server, file_path, filename)
        #config_boot(c, filename)
        reload(c)
        status = True
    except Exception as e:
        status = False
        c.log = "Internal error\n" + traceback.format_exc()
    finally:
        output_q.put((device, c.execution_output, c.log, status))
    return

def deployment_handler(request):

    output_q = queue.Queue()
    thread_list = []
    out,log = {},''
    upgrade_devices,upgrade_versions = [],{}
    response = {}
    for i in range(len(request['deviceAddresses'])):
        device = request['deviceAddresses'][i]
        if request['checkupdatebox'][i]:
            upgrade_devices.append(device)
            upgrade_versions[device] = request['versionUpdate'][i]
        else:
            response[device] = False
            

    for device in upgrade_devices:
        single_device_request = request.copy()
        single_device_request['device'] = device
        single_device_request['upgrade_version'] = upgrade_versions[device]
        device_thread = threading.Thread(target=deploy_single_device,
                                         args=(single_device_request, output_q))
        device_thread.start()
        thread_list.append(device_thread)
    
    for device_thread in thread_list:
        device_thread.join()

    while not output_q.empty():
        device, device_output, device_log, status = output_q.get()
        log += device_log
        out[device] = device_output
        response[device] = status
    
    #c.config_boot()
    #c.reload()
    print(f"logs:\n\n{log}")
    print(f"output:\n\n{out}")
    print(f"response:\n{response}")
    return response

def test_load_image(request):
    access_server = '172.31.61.249'
    file_path = '/files'
    filename = 'text.exe'
    request['device'] = '172.31.61.171'
    c = SSHConnection(request)
    c.initialize()
    c.load_image(access_server, file_path, filename)
    c.terminate()
    return c.log

def test_config_boot(request):

    filename = 'text.exe'
    boot_raw = 'boot system flash:vios_l2-adventerprisek9-m'
    old_boot_file = get_boot(boot_raw, 'cisco ios')
    commands=["conf t",
                "no boot system",
                f"boot system flash:{filename}",
                f"boot system {old_boot_file}",
                "exit",
                "wr mem"]
    request['device'] = '172.31.61.171'
    c = SSHConnection(request)
    c.initialize()
    c.execute(commands=commands)
    c.terminate
    return c.log

def test_reload(request):
    request['device'] = '172.31.61.171'
    c = SSHConnection(request)
    c.initialize()
    time.sleep(2)
    c.reload()
    c.terminate()
    print(f"Logs before reload\n{c.log}")
    time_max = time.time() + 180
    while time.time() < time_max:
        print("Trying connection")
        c.initialize()
        print(f"Log: {c.log}")
        if 'error' not in c.execution_output:
            print("Reachable now")
            break
    c.terminate()
    


def upgrade_firmware(request):
    
    print(f"request:\n{request}")
    if request['action'] == 'Ping':
        return ping_handler(request)
    elif request['action'] == 'PreDeployment':
        return predeployment_handler(request)
    elif request['action'] == 'Deployment':
        return deployment_handler(request)
    elif request['action'] == 'PostDeployment':
        return postdeployment_handler(request)
    else:
        return "Error: Invalid action"
'''
def upgrade_firmware(request):

    return {'10.1.1.20':
                {'current_version': 'Version 15.2',
                 'compatible_versions': ['Version 15.3', 'Version 15.4'],
                 'status': True},
            '10.1.1.21':
                {'current_version': 'Version 15.2',
                 'compatible_versions': ['Version 15.3', 'Version 15.4'],
                 'status': True}}
'''

'''
{
    "jmpServerIp": this.jumpServerIP,
    "jmpServerUsername": this.jumpServerUserName,
    "jmpServerPassword": this.jumpServerPassword,
    "OEM": this.Provider,
    "deviceUsername": this.deviceUserName,
    "devicePassword": this.devicePassword,
    "deviceAddresses": this.ipAddresses,
    "commands": this.commands,
    "deviceConnectionType": this.upgradeFirmwareForm.controls['deviceConnectionType'].value,
    "isJumpserver": this.upgradeFirmwareForm.controls['isJumpserver'].value,
    "action": this.btn_action
    }
'''

if __name__ == "__main__":
    in1 = r"""
        Cisco IOS Software, vios_l2 Software (vios_l2-ADVENTERPRISEK9-M), Version 15.2(CML_NIGHTLY_20180510)FLO_DSGS7, EARLY DEPLOYMENT DEVELOPMENT BUILD, synced to  V152_6_0_81_E
        Technical Support: http://www.cisco.com/techsupport
        Copyright (c) 1986-2018 by Cisco Systems, Inc.
        Compiled Thu 10-May-18 05:13 by mmen


        ROM: Bootstrap program is IOSv

        DST1 uptime is 1 week, 2 days, 1 hour, 36 minutes
        System returned to ROM by reload
        System image file is "flash0:/vios_l2-adventerprisek9-m"
        Last reload reason: Unknown reason
        """
    in2 = r"""
            Cisco IOS XE Software, Version 17.03.01a\n
            Cisco IOS Software [Amsterdam], Virtual XE Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 17.3.1a, RELEASE SOFTWARE (fc4)
            Technical Support: http://www.cisco.com/techsupport
            Copyright (c) 1986-2020 by Cisco Systems, Inc.
            Compiled Thu 13-Aug-20 22:14 by mcpre


            Cisco IOS-XE software, Copyright (c) 2005-2020 by cisco Systems, Inc.
            All rights reserved.  Certain components of Cisco IOS-XE software are
            licensed under the GNU General Public License ("GPL") Version 2.0.  The
            software code licensed under GPL Version 2.0 is free software that comes
            with ABSOLUTELY NO WARRANTY.  You can redistribute and/or modify such
            GPL code under the terms of GPL Version 2.0.  For more details, see the
            documentation or "License Notice" file accompanying the IOS-XE software,
            or the applicable URL provided on the flyer accompanying the IOS-XE
            software.
            """

    
    request = {
        "jmpServerIp":"192.168.0.30",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "OEM":"Cisco IOS",
        "deviceType": "Switch",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["10.1.1.20","10.1.1.21"],
        "deviceConnectionType":"ssh",
        "isJumpServer":True,
        "upgrade_version": "Version 15.3",
        "action": "PreDeployment"
        }
    
    aws_request = {
        "jmpServerIp":"54.160.126.72",
        "jmpServerUsername":"ubuntu",
        "jmpServerPassword":"ubuntu",
        "OEM":"Cisco IOS",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["172.31.61.171","172.31.56.112"],
        "deviceConnectionType":"ssh",
        "isJumpServer":True,
        "versionUpdate": ["Version 17.03.02","Version 17.03.03"],
        "checkupdatebox": [True, True],
        "action": "Deployment"
    }
    #oem = 'Cisco IOS'
    #current_version = get_version(in2, oem)
    #print(current_version)
    #print(get_compatible_versions(current_version, oem))
    #print(get_firmware_path('Version 15.3','Cisco IOS'))
    #print(ping_handler(request))
    print(upgrade_firmware(request))
    #print(upgrade_firmware(aws_request))
    #print(test_load_image(aws_request))
    #print(test_config_boot(aws_request))
    #print(test_reload(aws_request))