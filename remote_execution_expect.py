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

import psycopg2
import dbconstants
import datetime
import uuid
from lib.connection_utils import SSHConnection, TelnetConnection

def update_db(out, execution_params):

    conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
    sql_update_log = """INSERT INTO public.netauto_log("Run_ID","Netauto_Module","IP_Hostname","OEM","Executed_Date","Executed_By","Run_log","Connection_Type")
             		   VALUES(%s,%s,%s,%s,%s,%s,%s,%s);"""
    ip_hostname = ','.join(execution_params['deviceAddresses'])
    unique_uuid=uuid.uuid4().hex
    Update_EachIP_log = (unique_uuid,
                         "Remote Command Execution",
                         ip_hostname,
                         execution_params['OEM'],
                         datetime.datetime.now(),
                         "Admin",
                         out,
                         execution_params['deviceConnectionType'])
    cur=conn.cursor()
    cur.execute(sql_update_log, Update_EachIP_log)
    conn.commit()
    cur.close()
    conn.close()
    return None

def remote_execution(execution_params):
    if execution_params['deviceConnectionType'] == 'telnet':
        c = TelnetConnection(execution_params)
    elif execution_params['deviceConnectionType'] == 'ssh':
        c = SSHConnection(execution_params)
    else:
        raise Exception("Invalid connection type")
    out = c.execute()
    update_db(out, execution_params)
    return out

def test_all(execution_params):
    print("Case-1: SSH with Jumpbox\n")
    print(remote_execution(execution_params))
    print("-----------------------------------")
    print("Case-2: SSH Direct\n")
    execution_params['isJumpServer'] = False
    print(remote_execution(execution_params))
    print("-----------------------------------")
    print("Case-3: Telnet with Jumpbox\n")
    execution_params['deviceConnectionType'] = 'telnet'
    execution_params['isJumpServer'] = True
    print(remote_execution(execution_params))
    print("-----------------------------------")
    print("Case-4: Telnet Direct\n")
    execution_params['deviceConnectionType'] = 'telnet'
    execution_params['isJumpServer'] = False
    print(remote_execution(execution_params))
    print("-----------------------------------")


if __name__=="__main__":
    in1={
        "jmpServerIp":"34.207.61.121",
        "jmpServerUsername":"ubuntu",
        "jmpServerPassword":"ubuntu",
        "OEM":"cisco",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["172.31.61.171"],
        "commands":["show version", "show ip int br"],
        "deviceConnectionType":"ssh",
        "isJumpserver":True
        }
    #out = test_all(in1)
    out=remote_execution(in1)
    print(out)
