import psycopg2
import dbconstants
import datetime
import uuid
import queue
import threading
from lib.connection_utils import SSHConnection, TelnetConnection

def update_db(out, execution_params):

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
    with psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS) as conn:
        with conn.cursor() as cur:
            cur.execute(sql_update_log, Update_EachIP_log)
        conn.commit()
    '''
    cur=conn.cursor()
    cur.execute(sql_update_log, Update_EachIP_log)
    conn.commit()
    cur.close()
    conn.close()
    '''
    return None

def remote_execution(execution_params, update_db=True, return_log=False):

    output_q = queue.Queue()
    thread_list = []
    log_dict, output = {},{}
    log = ''
    for device in execution_params['deviceAddresses']:
        single_device_params = execution_params.copy()
        single_device_params['device'] = device
        device_thread = threading.Thread(target=remote_execution_device, args=(single_device_params, output_q))
        device_thread.start()
        thread_list.append(device_thread)

    for device_thread in thread_list:
        device_thread.join()

    while not output_q.empty():
        device, device_log, device_output = output_q.get()
        output[device] = device_output
        log_dict[device] = device_log
    for device in sorted(list(log_dict.keys())):
        log += log_dict[device]
    if update_db:
        update_db(log, execution_params)
    if return_log:
        return log, output
    else:
        return output


def remote_execution_device(single_device_params, output_q):
    if single_device_params['deviceConnectionType'] == 'telnet':
        c = TelnetConnection(single_device_params)
    elif single_device_params['deviceConnectionType'] == 'ssh':
        c = SSHConnection(single_device_params)
    else:
        raise Exception("Invalid connection type")
    c.execute()
    #out_dict = {single_device_params['device']: (c.log, c.execution_output)}
    output_q.put((single_device_params['device'], c.log, c.execution_output))
    return None
    #update_db(c.log, single_device_params)
    #return c.execution_output

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
        "jmpServerIp":"192.168.0.30",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "OEM":"cisco",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "deviceAddresses":["10.1.1.20","10.1.1.99"],
        "commands":["show version"],
        "deviceConnectionType":"telnet",
        "isJumpServer":True
        }
    #out = test_all(in1)
    out=remote_execution(in1)
    print(out)