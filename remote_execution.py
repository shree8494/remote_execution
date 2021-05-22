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


import telnetlib
import time
import traceback

def remote_execution(execution_params):   
    
    HOST = execution_params["jmpServerIp"]
    js_user = execution_params["jmpServerUsername"]    
    js_password =execution_params["jmpServerPassword"]   
    oem = execution_params["OEM"]
    device_addresses = execution_params["deviceAddresses"]
    device_user = execution_params["deviceUsername"]
    device_password = execution_params["devicePassword"]
    commands = execution_params["commands"]
    out=b""
    user_timeout=10
    
    for device_address in device_addresses:
        print(device_address)
        tn = telnetlib.Telnet(HOST,timeout=user_timeout)
        try:            
            out +=b"-------------------"+device_address.encode('ascii')+b"start---------------"
            
            out += tn.read_until(b"ubuntu login:")       
            tn.write(js_user.encode('ascii') + b"\n")
            out += tn.read_until(b"Password:") 
            tn.write(js_password.encode('ascii') + b"\n")    
            out += tn.read_until(b"admin@ubuntu:~$")         
            
            #tn.write(device_address.encode('ascii') + b"\n")        
            
            tn.write(b"ssh admin@10.1.1.20\n")
            tn.write(b"\n") 
            
            #out += tn.read_until(b"\n"+device_address.encode('ascii'),timeout=user_timeout)
            out += tn.read_until(b"Password:")
            tn.write("admin\n")
            out += tn.read_until(b"#",timeout=user_timeout) 
            tn.write(b"terminal length 0 \n")                   
            for command in commands:
                
                tn.write(command.encode('ascii')+b"\n")
                out += tn.read_until(b"\n"+device_address.encode('ascii'),timeout=user_timeout) 
                out += tn.read_until(b"#",timeout=user_timeout) 
                print(command)
            print("done")     
            print(out)    
                
                
            
            #tn.write((chr(30) + 'x').encode('ascii'))
            #out += tn.read_until(b"SNGHQ1-DSTA#")         
            #tn.write(b'exit\n')        
            #out += tn.read_until(b"[confirm]")            
            #tn.write(b'y')
        except:
            print(traceback.format_exc())
        finally:
            try:
                tn.close()
            except:
                print(traceback.format_exc())
    print("done")
    saveoutput=open("output/remote_cmd_output.txt","w")
    saveoutput.write(out.decode('ascii', 'ignore'))
    saveoutput.write("\n")
    saveoutput.close()
    return ""
if __name__=="__main__":
    in1={
        #"jmpServerIp":"192.168.198.80",
        "jmpServerIp":"192.168.0.30",
        #"jmpServerUsername":"kneel",
        #"jmpServerPassword":"kneel",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "OEM":"cisco",
        #"deviceUsername":"test",
        #"devicePassword":"test",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["10.1.1.20"],
        "commands":["show run","show flash","show version","show start"]
        
        }
    out=remote_execution(in1)
    print(out)
