#!/usr/bin/env python

import queue
from  run_single_device import run_single_device
import psycopg2
import dbconstants
import re_pattern
import re
#import telnetlib
import time
#import traceback
import datetime
import uuid
from threading import Thread

def upgrade_firmware(in1):
    return in1

def get_version(show_version_raw, oem):

    pattern = re.compile(re_pattern.show_version[oem])
    result = re.search(pattern, show_version_raw)
    if result:
        version = result.group('version')
    else:
        raise Exception('Pattern not matched')
    return version


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
    print(get_version(in1,'Cisco IOS'))