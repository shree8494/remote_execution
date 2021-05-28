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
import queue
from  run_single_device import run_single_device
import psycopg2
import dbconstants
import re
import telnetlib
import time
import traceback
import datetime
import uuid
from threading import Thread



class ThreadWithReturnValue(Thread):
    def __init__(self, group=None, target=None, name=None,
                 args=(), kwargs={}, Verbose=None):
        Thread.__init__(self, group, target, name, args, kwargs)
        self._return = None
    def run(self):
        if self._target is not None:
            self._return = self._target(*self._args,**self._kwargs)
    def join(self, *args):
        Thread.join(self, *args)
        return self._return




def upgrade_firmware_telnet(execution_params):
    conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
    cur=conn.cursor()


    oem = execution_params["OEM"]
    device_addresses = execution_params["deviceAddresses"]
    device_conn_type=execution_params["deviceConnectionType"]
    button_action=execution_params["action"]
    if button_action=="PreDeployment":
        cur.execute('select \"Pre_deployment_commands\" from public.netauto_uf_commands_master ')

        for row in cur.fetchall():
            cmds = row[0]
        cmds = cmds.split('\n')
        execution_params["commands"]=cmds

    elif button_action=="PostDeployment":
        cur.execute('select \"Post_deployment_commands\" from public.netauto_uf_commands_master ')

        for row in cur.fetchall():
            cmds = row[0]
        cmds = cmds.split('\n')
        execution_params["commands"]=cmds
    elif button_action=="Ping":
         execution_params["commands"]=[]





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
    thread_list={}
    output_que = queue.Queue()
    for device_address in device_addresses:
        thread_object=Thread(target=run_single_device,args=(device_address,execution_params,output_que))
        #print("start",device_address,time.time())
        thread_object.start()
        time.sleep(1)


        thread_list[device_address]=thread_object
        #thread_list[device_address].join()

    for device_address in device_addresses:
        execution_output[device_address]=thread_list[device_address].join()

    while not output_que.empty():
        #out_dict contains only commands dictionary.
        single_device_address,single_execution_output,out_dict = output_que.get()
        if single_execution_output["error"]=="":
            if button_action=="PreDeployment":
                version_cmd_output = out_dict["show version"]

                #regex code start for version
                #gouping is done using round bracket in regex and two groups
                regex = r".*Software \(([a-zA-Z0-9-]+)\),.*Version ([0-9]+\.[0-9])+"

                test_str = version_cmd_output

                matches = re.finditer(regex, test_str, re.MULTILINE)
                version=[]
                for matchNum, match in enumerate(matches, start=1):
                    for groupNum in range(0, len(match.groups())):
                        groupNum = groupNum + 1
                        version.append("{group}".format(group = match.group(groupNum)))

                #regex code end for version
                vernameconcat=""
                for vername in version:
                    vernameconcat=vernameconcat + vername + " "

                cur.execute("""SELECT * FROM public.netauto_uf_firmware_mapping where "Image_Version" = %s;""", (vernameconcat.strip(),))
                comp_version=[]
                for row in cur.fetchall():
                    comp_version.extend(row[11])
                    print(comp_version)

                single_execution_output["versionNo"] = version
                single_execution_output["compVersion"]=comp_version

        execution_output[single_device_address]=single_execution_output

    #for device_address in device_addresses:
        #print("start",device_address,time.time())
        #execution_output[device_address]=run_single_device(device_address,execution_params)







    out=""
    ping_out=""
    postdeployment_out=""
    predeployment_out=""

    for device_address in device_addresses:
        out+="\r\n\r\n-------------------"+device_address+"--------------\r\n"
        out+= execution_output[device_address]['output']
        ip_hostname+=device_address +","
    if button_action=="PreDeployment":
        predeployment_out=out
        unique_uuid=execution_params["transactionID"]
        sql_update_log = """UPDATE public.netauto_uf_log SET "PreDeployment_log" = %s WHERE "Run_ID" = %s"""
        Update_EachIP_log  = (predeployment_out, unique_uuid)
    elif button_action=="PostDeployment":
        postdeployment_out=out
        unique_uuid=execution_params["transactionID"]
    elif button_action=="Ping":
        ping_out=out
        unique_uuid=uuid.uuid4().hex
        sql_update_log = """INSERT INTO public.netauto_uf_log("Run_ID","Netauto_Module","IP_Hostname","OEM","Executed_Date","Executed_By","Ping_log","PreDeployment_log","PostDeployment_log","Connection_type")
             		   VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);"""
        Update_EachIP_log = (unique_uuid,"Upgrade_firmware",ip_hostname,oem,datetime.datetime.now(),"Admin",ping_out,predeployment_out,postdeployment_out,device_conn_type)





    cur=conn.cursor()
    cur.execute(sql_update_log, Update_EachIP_log)
    conn.commit()
    cur.close()
    conn.close()
    final_output={
            "transactionID" : unique_uuid,
            "devices" :execution_output
            }

    print(final_output)
    return final_output

def fun_upgrade_firmware(execution_params):

    if execution_params["deviceConnectionType"]=="telnet":
        return upgrade_firmware_telnet(execution_params)
    elif execution_params["deviceConnectionType"]=="ssh":
        return upgrade_firmware_ssh(execution_params)
    else:
        raise Exception("This connection type not  implemeted")

if __name__=="__main__":
    in1={
        "jmpServerIp":"192.168.198.80",
        "jmpServerUsername":"kneel",
        "jmpServerPassword":"kneel",
        "OEM":"cisco",
        "deviceUsername":"test",
        "devicePassword":"test",
        "deviceAddresses":["r3"],
        "deviceConnectionType":"telnet",
        "isJumpserver":True,
        "action":"PreDeployment",
        "transactionID" : "38eb2de06a2a48b2be698b92d9c57af3"
        }
    out=fun_upgrade_firmware(in1)
    #print(out)



