# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 16:24:52 2019

@author: shubha.ks
"""

'''

{

"jmpServerIp":"192.168.198.80",
"jmpServerUserName":"kneel",
"jmpServerPassword":"kneel",
"OEM":"cisco",
"deviceUsername":"test",
"devicePassword":"test",
"deviceAddresses":["r3","r4"],
"commands":["show flash","show version",
"show run","show start"]

}
'''
#import queue
#from  run_single_device import run_single_device
#import psycopg2
#import dbconstants
#import re
#import telnetlib
#import time
#import traceback
#import datetime
#import uuid
from lib.connection_utils import SSHConnection, TelnetConnection
#from threading import Thread

def remote_execution(execution_params):
    if execution_params['deviceConnectionType'] == 'telnet':
        c = TelnetConnection(execution_params)
    elif execution_params['deviceConnectionType'] == 'ssh':
        c = SSHConnection(execution_params)
    else:
        raise Exception("Invalid connection type")
    return c.execute()

if __name__=="__main__":
    in1={
        "jmpServerIp":"192.168.0.30",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "OEM":"cisco",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["10.1.1.20","10.1.1.21"],
        "commands":["show version"],
        "deviceConnectionType":"ssh",
        "isJumpserver":True
        }
    out=remote_execution(in1)
    #print(out)



