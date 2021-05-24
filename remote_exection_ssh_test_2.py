# -*- coding: utf-8 -*-


import paramiko
import psycopg2
#import dbconstants
import traceback
import datetime
import uuid
import time
from threading import Thread

def remote_execution_ssh(execution_params):
    
    #conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
    HOST = execution_params["jmpServerIp"]
    js_user = execution_params["jmpServerUsername"]
    js_password =execution_params["jmpServerPassword"]
    #oem = execution_params["OEM"]
    device_addresses = execution_params["deviceAddresses"]
    device_user = execution_params["deviceUsername"]
    device_password = execution_params["devicePassword"]
    commands = execution_params["commands"]
    #device_conn_type=execution_params["deviceConnectionType"]

    '''
    execution_output={
                    'r3':{'output':"",
                          'error':"",
                          'progress':""
                          },
                    'r4':{....}
                    }
    '''
    execution_output={}
    ip_hostname=""
    for device_address in device_addresses:
        execution_output[device_address]={'output':b"",'error':b"",'progress':0}
        ip_hostname+=device_address +","
        try:
            execution_output[device_address]['output'] +=b"\r\n-------------------"+device_address.encode('ascii')+b"--------------"
            client = paramiko.SSHClient()
            client.set_missing_host_key_policy(paramiko.MissingHostKeyPolicy)
            client.connect(device_address, port=22, username=device_user, password=device_password)
            #client.connect(HOST, port=22, username=js_user, password=js_password)
            remote_connection = client.invoke_shell()

            for command in commands:

                #execution_output[device_address]['output'] += remote_connection.send(f'{command}\n')
                execution_output[device_address]['output'] += bytes([remote_connection.send(command+"\n")])
                time.sleep(.5)
                
                if(remote_connection.recv_ready()):
                    data_decoded = remote_connection.recv(10000)


                if(remote_connection.recv_stderr_ready()):
                    data_decoded = remote_connection.recv_stderr(10000)
                execution_output[device_address]['output']+=data_decoded
        except:
            execution_output[device_address]['output'] += b"Internal error" +traceback.format_exc().encode('ascii')
            execution_output[device_address]['error'] =  b"Internal error" +traceback.format_exc().encode('ascii')
        finally:
            execution_output[device_address]['progress'] =100
            execution_output[device_address]['output']= execution_output[device_address]['output'].decode('ascii', 'ignore')
            execution_output[device_address]['error']=execution_output[device_address]['error'].decode('ascii', 'ignore')


    out=""
    for device_address in device_addresses:
        out+= execution_output[device_address]['output']+"\n"

    client.close()
    #return out
    #return data_decoded
    return execution_output

if __name__=="__main__":
    in1={
        "jmpServerIp":"10.1.1.20",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "OEM":"cisco",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["10.1.1.20","10.1.1.21"],
        "commands":["show run","show flash","show version","show start"]
        
        }
    out=remote_execution_ssh(in1)
print(out)
