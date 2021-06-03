#!/usr/bin/env python

#import psycopg2
#import dbconstants
import constants
import re
import time
#import traceback
#import datetime
#import uuid
import remote_execution
import threading
import queue
from lib.connection_utils import SSHConnection, TelnetConnection
from lib.db_utils import get_firmware_path, get_compatible_versions
from lib.parse_utils import get_version

def ping_handler(request):
    
    request['commands'] = []
    out = remote_execution.remote_execution(request, update_db=False)
    print(f"Output:\n{out}")
    response = {}
    for device,output in out.items():
        response[device] = 'output' in output
    print(f"Response:\n{response}")
    return response

def predeployment_handler(request):

    command = constants.get_version[request['OEM']]
    request['commands'] = [command]
    out = remote_execution.remote_execution(request, update_db=False)
    #print(f"Output:\n{out}")
    response = {}
    for device,output in out.items():
        current_version_raw = output['output'][command]
        try:
            current_version = get_version(current_version_raw, request['OEM'])
            compatible_versions = get_compatible_versions(current_version,
                                                          request['OEM'])
            response[device] = dict(current_version=current_version,
                                    compatible_versions=compatible_versions)
            response[device]['status'] = len(compatible_versions) != 0
        except Exception as e:
            print(e)
            response[device] = dict(current_version='',
                                    compatible_versions=[],
                                    status=False)
    return response

def deploy_single_device(request, output_q):

    upgrade_version = request['upgrade_version']
    access_server, file_path, filename = get_firmware_path(upgrade_version,
                                                           request['OEM'])
    request['access_server'] = access_server
    request['file_path'] = file_path
    request['filename'] = filename
    tftp_execution_output, tftp_log = load_image(request,
                                                (access_server,file_path,filename))
    configure_boot(request)
    pass



def load_image(request):

    request['commands'] = []
    if request['deviceConnectionType'] == 'ssh':
        c = SSHConnection(request)
    elif request['deviceConnectionType'] == 'telnet':
        c = TelnetConnection(request)
    else:
        raise Exception("Invalid device connection type")
    c.load_image(request['access_server'],
                 request['file_path'],
                 request['filename'])
    return c.execution_output, c.log

def deployment_handler(request):

    output_q = queue.Queue()
    thread_list = []
    out,log = {},''

    for device in request['deviceAddresses']:
        single_device_request = request.copy()
        single_device_request['device'] = device
        device_thread = threading.Thread(target=deploy_single_device,
                                         args=(single_device_request, output_q))
        device_thread.start()
        thread_list.append(device_thread)
    
    for device_thread in thread_list:
        device_thread.join()

    while not output_q.empty():
        device, device_output, device_log = output_q.get()
        log += device_log
        out[device] = device_output
    
    #c.config_boot()
    #c.reload()
    print(f"logs:\n\n{log}")
    print(f"output:\n\n{out}")

def upgrade_firmware(request):

    print(f"request:\n{request}")
    if request['action'] == 'Ping':
        return ping_handler(request)
    elif request['action'] == 'PreDeployment':
        return predeployment_handler(request)
    elif request['action'] == 'Deployment':
        return deployment_handler(request)
    return None


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
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["10.1.1.20","10.1.1.21"],
        "deviceConnectionType":"ssh",
        "isJumpServer":True,
        "upgrade_version": "Version 15.3",
        "action": "PreDeployment"
        }
    
    aws_request = {
        "jmpServerIp":"192.168.0.30",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "OEM":"Cisco IOS",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["18.209.224.60"],
        "deviceConnectionType":"ssh",
        "isJumpServer":False,
        "upgrade_version": "Version 15.3",
        "action": "PreDeployment"
    }
    #oem = 'Cisco IOS'
    #current_version = get_version(in2, oem)
    #print(current_version)
    #print(get_compatible_versions(current_version, oem))
    #print(get_firmware_path('Version 15.3','Cisco IOS'))
    #print(ping_handler(request))
    print(upgrade_firmware(aws_request))