# -*- coding: utf-8 -*-
"""
Created on Wed Mar 20 19:01:56 2019

@author: shubha.ks
"""

import dbconstants
import re
import telnetlib
import time
import traceback
import datetime
import uuid
import socket #this import is to handle socket error in the exception
user_timeout=5

class ConnectionRefusedException(Exception):
    def __init__(self, out):
        self.out = out

class ReplyTimedoutException(Exception):
    def __init__(self, out):
        self.out = out

def expect(telnet_connection, re_strings, timeout):
    #re_objects = [re.compile(re_string, re.MULTILINE | re.DOTALL) for re_string in re_strings]

    re_objects = []
    for re_string in re_strings:
        re_objects.append(re.compile(re_string, re.MULTILINE | re.DOTALL))

    #result is a tuple , because expect returns tuple
    # tupel contains 3 elements
    #result[0] => Index of the regualr expression that matched other wise -1 if timedout
    #result[1] => matched Regular expression object
    #result[2] =>output from the device console
    result = telnet_connection.expect(re_objects, timeout)


    if(result[0] == -1):
        raise ReplyTimedoutException(result[2] + b'\n!!!Timedout waiting for response')
    return (result[0], result[2])


def run_single_device(device_address,execution_params,output_que):


    HOST = execution_params["jmpServerIp"]
    js_user = execution_params["jmpServerUsername"]
    js_password =execution_params["jmpServerPassword"]
    device_user = execution_params["deviceUsername"]
    device_password = execution_params["devicePassword"]
    commands = execution_params["commands"]

    execution_output={'output':b"",'error':b"",'progress':0}

    #print(device_address)

    tn = None
    try:
        #cisco network lab will take biinary stream.so we are conveting to binary.
        out_dict = {}
        tn = telnetlib.Telnet(HOST,timeout=user_timeout)
        #execution_output['output'] +=b"\r\n-------------------"+device_address.encode('ascii')+b"--------------"
        username_prompt = b".*Username:"
        password_prompt = b".*Password:"
        device_prompt = b".*"+device_address.encode('ascii')+b".*#"
        ping_device_cmd="ping "+device_address
        jumpserver_prompt = b".*access-Router#"
        confirm_prompt = b".*\[confirm\]"
        connection_open_status = b".*Open"
        connection_refused_status = b".*% Connection refused by remote host"
        ping_success_status=b".*Success rate is 100 percent.*"
        ping_failure_status=b".*% Unrecognized host or address.*"
        nocmds_exit_prompt=b".*Connection to host"
        re_index, output = expect(tn, [username_prompt], user_timeout)
        execution_output['output'] += output

        tn.write(js_user.encode('ascii') + b"\n")
        re_index, output = expect(tn, [password_prompt], user_timeout)
        execution_output['output'] += output

        tn.write(js_password.encode('ascii') + b"\n")
        re_index, output = expect(tn, [jumpserver_prompt], user_timeout)
        execution_output['output'] += output

        #checking ping here
        tn.write(ping_device_cmd.encode('ascii') + b"\n")
        re_index, output = expect(tn,[ping_failure_status,ping_success_status], user_timeout)
        execution_output['ping'] = True
        execution_output['output'] += output
        if re_index == 0:
            execution_output['ping'] = False
            raise ConnectionRefusedException(b"Connection Refused") #Connection refused so move to next hostname


        #expecting jumserver prompt
        re_index, output = expect(tn, [jumpserver_prompt], user_timeout)
        execution_output['output'] += output
        if len(commands)>0:
            tn.write(device_address.encode('ascii') + b"\n")
            re_index, output = expect(tn, [connection_refused_status, connection_open_status], user_timeout)
            execution_output['output'] += output

            if re_index == 0:
                raise ConnectionRefusedException(b"Connection Refused") #Connection refused so move to next hostname

            tn.write(b"\n")
            #            print("Connected----")
            re_index, output = expect(tn, [device_prompt], user_timeout)

            execution_output['output'] += output

            tn.write(b"terminal length 0 \n")
            re_index, output = expect(tn, [device_prompt, jumpserver_prompt], user_timeout)

            execution_output['output'] += output
            for command in commands:
                tn.write(command.encode('ascii')+b"\n")
                re_index, output = expect(tn, [device_prompt, jumpserver_prompt], user_timeout)

                execution_output['output'] += output
                out_dict[command] = output.decode('ascii', 'ignore')
                if re_index == 1:
                    #Got jumpserver prompt when we were expecting device_prompt
                    execution_output['output'] +="Error! Got jumpserver prompt when expecting device prompt"
                    break

            else:
                tn.write((chr(30) + 'x').encode('ascii'))
                re_index, output = expect(tn, [jumpserver_prompt], user_timeout)
                execution_output['output'] += output

        tn.write(b'exit\n')
        if len(commands)>0:
            re_index, output = expect(tn, [confirm_prompt], user_timeout)
            execution_output['output'] += output
            tn.write(b'y')


    except ReplyTimedoutException as replyTimeoutException:
        execution_output['output'] += replyTimeoutException.out
        execution_output['error'] = replyTimeoutException.out
    except ConnectionRefusedException as connectionRefusedException:
        execution_output['output'] += connectionRefusedException.out
        execution_output['error'] = connectionRefusedException.out
    except ConnectionRefusedError:
        execution_output['output'] += b"Jump server refused connection:"+HOST.encode('ascii')
        execution_output['error'] = b"Jump server refused connection:"+HOST.encode('ascii')
    except socket.timeout:
        execution_output['output'] += b"Timeout while connecting to Jump Server:"+HOST.encode('ascii')
        execution_output['error'] = b"Timeout while connecting to Jump Server:"+HOST.encode('ascii')
    except:
        execution_output['output'] += b"Internal error" +traceback.format_exc().encode('ascii')
        execution_output['error'] =  b"Internal error" +traceback.format_exc().encode('ascii')


    finally:
        try:
            if tn:
                tn.close()
        except:
            execution_output['output'] += b"Internal error" +traceback.format_exc().encode('ascii')
            execution_output['error'] = b"Internal error" +traceback.format_exc().encode('ascii')

        if execution_output['output'].find(b"% Ambiguous command") >=0:
            execution_output['error'] =b"% Ambiguous command"
        elif execution_output['output'].find(b"% Incomplete command") >=0:
            execution_output['error'] =b"% Incomplete command"
        elif execution_output['output'].find(b"% Connection refused by remote host") >=0:
            execution_output['error'] =b"% Connection refused by remote host"

        execution_output['progress'] =100
        execution_output['output']= execution_output['output'].decode('ascii', 'ignore')
        execution_output['error']=execution_output['error'].decode('ascii', 'ignore')
    #print("end",device_address,time.time())

    output_que.put((device_address,execution_output,out_dict))
    return
