# -*- coding: utf-8 -*-


import paramiko
#import psycopg2
#import dbconstants
import traceback
#import datetime
#import uuid
import time
#from threading import Thread

def get_prompt(connection, prompt='~$',
               enterPassword=False, password=None, password_prompt=None):
    
    buff, out = ('','')
    #time.sleep(1)
    if enterPassword:
        buff = connection.recv(5000).decode('ascii')
        print(f"Device login: {buff}\n")
        out += buff
        while not (buff.endswith(password_prompt + ' ') or buff.endswith(password_prompt)):
            print(f"Device login not ending with prompt, last few characters are {buff[-8:-1]}\n")
            time.sleep(1)
            buff = connection.recv(5000).decode('ascii')
            out += buff
        print("Got device prompt now, sending password\n")
        connection.send(password + '\n')
        time.sleep(1)
    buff = connection.recv(65535).decode('ascii')
    while not (buff.endswith(prompt + ' ') or buff.endswith(prompt)):
        print(f"Not getting prompt, last few characters are {buff[-10:-1]}\n")
        time.sleep(1)
        buff = connection.recv(65535).decode('ascii')
        out += buff
    print(f"Got prompt: {buff}")
    return connection, out

def get_connection(host='localhost', username='admin', password='admin', prompt='~$'):

    out, buff = ("","")
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.MissingHostKeyPolicy)
    client.connect(host,
                port=22,
                username=username,
                password=password)
    print("Client connected\n")
    remote_connection = client.invoke_shell()
    remote_connection, out = get_prompt(remote_connection, prompt=prompt)
    '''
    print("Invoked shell\n")
    time.sleep(1)
    print("Sleeping for 1 second\n")
    buff = remote_connection.recv(1000).decode('ascii')
    #print(f"Buffer: {buff}\n")
    out += buff
    while not buff.endswith(prompt + ' '):
        #print(f"Buffer doesn't end with prompt, last characters are {buff[-7:-1]}\n")
        time.sleep(1)
        buff = remote_connection.recv(1000).decode('ascii')
        #print(f"Now buffer is: {buff}")
        out += buff
    print("Got prompt")
    '''
    return client, remote_connection, out

def remote_exec_ssh_jump(jmpServerIp, jmpServerUsername, jmpServerPassword,
                         OEM, deviceUsername, devicePassword, useJmpServer,
                         deviceAddresses, commands, output_filename):
    '''
    jmpServerIp = execution_params['jmpServerIp']
    jmpServerUsername = execution_params["jmpServerUsername"]
    jmpServerPassword = execution_params["jmpServerPassword"]
    OEM = execution_params['OEM']
    deviceUsername = execution_params['deviceUsername']
    devicePassword = execution_params['devicePassword']
    useJmpServer = execution_params['useJmpServer']
    deviceAddresses = execution_params['deviceAddresses']
    commands = execution_params['commands']
    output_filename = execution_params['output_filename']
    '''
    execution_output = {}
    #print(f"Connecting to jump server {execution_params['jmpServerIp']}")
    '''
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.MissingHostKeyPolicy)
    client.connect(jmpServerIp,
                   port=22,
                   username=jmpServerUsername,
                   password=jmpServerPassword)
    remote_connection = client.invoke_shell()
    execution_output['jmpServer'] = remote_connection.recv(1000).decode('ascii')
    
    output = execution_output['jmpServer'] + '\n'
    '''
    print("Connecting to jump server")
    client, remote_connection, execution_output['jmpServer'] \
        = get_connection(jmpServerIp, prompt='~$')
    print(f"Jump Server output: {execution_output['jmpServer']}")

    for device_address in deviceAddresses:
        #remote_connection = client.invoke_shell()
        execution_output[device_address] = {'output': "", 'error': "", 'progress': 0}
        execution_output[device_address]['output'] += "\r\n-------------------" \
            + device_address + "--------------\n"
        
        try:
            #out = ""
            print(f"Connecting to {device_address} now")
            remote_connection.send(f"ssh -o \"StrictHostKeyChecking=no\" \
                {deviceUsername}@{device_address}\n")
            time.sleep(1)
            remote_connection, out = get_prompt(remote_connection, prompt='#',
                                                enterPassword=True,
                                                password=devicePassword,
                                                password_prompt='Password:')
            '''
            buff = remote_connection.recv(1000).decode('ascii')
            print(f"Initial Buffer:\n{buff}")
            out = buff
            while not buff.endwith('Password:'):
                time.sleep(1)
                buff = remote_connection.recv(1000).decode('ascii')
                print(f"Next Buffer:\n{buff}")
                out += buff
            #print(f"Device login prompt: {out}")
            #while not out.endswith('Password:'):
            #    time.sleep(1)
            #    out += remote_connection.recv(1000).decode('ascii')
            #print(f"Device login: {out}")
            print("Prompt found, entering password")
            remote_connection.send(devicePassword + '\n')
            execution_output[device_address]['output'] += out + '\n'
            '''
            remote_connection.send('terminal length 0\n')
            time.sleep(1)
            for command in commands:
                print(f"Sending command: {command}")
                remote_connection.send(command + '\n')
                remote_connection, out = get_prompt(remote_connection, prompt='#')
                #if remote_connection.recv_ready():
                execution_output[device_address]['output'] += out + '\n'
            remote_connection.send('exit\n')
            time.sleep(1)
        except:
            execution_output[device_address]['output'] += "Internal error" \
                + traceback.format_exc()
            execution_output[device_address]['error'] =  "Internal error" \
                + traceback.format_exc()
        finally:
            execution_output[device_address]['progress'] = 100
            #output += execution_output[device_address]['output'] + '\n'
            #with open(output_filename, 'a'):
            #    f.write(str(execution_output[device_address]['output']) + '\n')
    client.close()
    #print(output)
    return execution_output
    #with open(output_filename, 'w') as f:
    #    f.write(output)
    

def remote_execution_ssh(execution_params):
    
    #conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
    HOST = execution_params["jmpServerIp"]
    js_user = execution_params["jmpServerUsername"]
    js_password =execution_params["jmpServerPassword"]
    #oem = execution_params["OEM"]
    device_addresses = execution_params["deviceAddresses"]
    #device_user = execution_params["deviceUsername"]
    #device_password = execution_params["devicePassword"]
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
            client.connect(HOST, port=22, username=js_user, password=js_password)
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
        "jmpServerIp":"192.168.0.30",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "OEM":"cisco",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "useJmpServer": True,
        "deviceAddresses":["10.1.1.20", "10.1.1.21"],
        "commands":["show run","show flash:","show version","show start"],
        "output_filename":"output/remote_execution_output.txt"
        }
    out=remote_exec_ssh_jump(**in1)
    #remote_connection, out = get_connection('192.168.0.30', prompt="~$")
print(out)
