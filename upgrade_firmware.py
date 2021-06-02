#!/usr/bin/env python

import psycopg2
import dbconstants
import constants
import re
import time
#import traceback
#import datetime
#import uuid
import remote_execution
from threading import Thread

def get_firmware_path(upgrade_version, oem):
    
    query = f"""SELECT ftp_server||ftp_path||'/'||ftp_filename as file_path
                FROM netauto_uf_version_master
                WHERE compatible_version = '{upgrade_version}'
                    AND oem = '{oem}';"""
    try:
        with psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS) as conn:
            with conn.cursor() as cur:
                cur.execute(query)
                out = cur.fetchall()
            conn.commit()
        return out[0][0]
    except Exception as e:
        raise


def get_compatible_versions(current_version, oem):

    query = f"""SELECT compatible_version
                FROM netauto_uf_version_master
                WHERE current_version = '{current_version}'
                    AND oem = '{oem}';"""
    try:
        with psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS) as conn:
            with conn.cursor() as cur:
                cur.execute(query)
                out = cur.fetchall()
            conn.commit()
        return [i[0] for i in out]
    except Exception as e:
        raise


def get_version(show_version_raw, oem):

    pattern = re.compile(constants.show_version[oem])
    result = re.search(pattern, show_version_raw)
    if result:
        version = result.group('version')
    else:
        raise Exception('Pattern not matched')
    return version

def ping_handler(request):

    request['commands'] = []
    out = remote_execution.remote_execution(request, update_db=False)
    #print(f"Output:\n{out}")
    response = {}
    for device,output in out.items():
        response[device] = 'output' in output
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
        except Exception as e:
            print(e)
            response[device] = {}
    return response

def deployment_handler(request):

    upgrade_version = request['upgrade_version']
    firmware_path = get_firmware_path(upgrade_version, request['OEM'])

    pass

def upgrade_firmware(request):

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



        This product contains cryptographic features and is subject to United
        States and local country laws governing import, export, transfer and
        use. Delivery of Cisco cryptographic products does not imply
        third-party authority to import, export, distribute or use encryption.
        Importers, exporters, distributors and users are responsible for
        compliance with U.S. and local country laws. By using this product you
        agree to comply with applicable laws and regulations. If you are unable
        to comply with U.S. and local laws, return this product immediately.

        A summary of U.S. laws governing Cisco cryptographic products may be found at:
        http://www.cisco.com/wwl/export/crypto/tool/stqrg.html

        If you require further assistance please contact us by sending email to
        export@cisco.com.

        Cisco IOSv () processor (revision 1.0) with 935289K/111616K bytes of memory.
        Processor board ID 9AAF7VLR2TF
        1 Virtual Ethernet interface
        8 Gigabit Ethernet interfaces
        DRAM configuration is 72 bits wide with parity disabled.
        256K bytes of non-volatile configuration memory.
        2097152K bytes of ATA System CompactFlash 0 (Read/Write)
        0K bytes of ATA CompactFlash 1 (Read/Write)
        0K bytes of ATA CompactFlash 2 (Read/Write)
        0K bytes of ATA CompactFlash 3 (Read/Write)

        Configuration register is 0x101"""
    
    request = {
        "jmpServerIp":"192.168.0.30",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "OEM":"Cisco IOS",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["10.1.1.20","10.1.1.21"],
        "deviceConnectionType":"ssh",
        "isJumpserver":True
        }
    #oem = 'Cisco IOS'
    #current_version = get_version(in1, oem)
    #print(get_compatible_versions(current_version, oem))
    #print(get_firmware_path('Version 15.3','Cisco IOS'))
    print(ping_handler(request))
    #print(predeployment_handler(request))