#!/usr/bin/env python

import psycopg2
import dbconstants
import uuid
import datetime

def db_select(table, args_list, where=None):
    '''
    Input:
        table: (str) Name of table
        args_list: (list) List of columns to be selected
        where: (Optional)(str) Condition to match
    Output:
        output: (list) List of dictionaries with results
    '''
    pass

def db_update(table, args_dict):
    '''
    Input:
        table: (str) Name of table
        args_dict: (dict) Dictionary where key is column
    Output:
        output: (list) Updated table converted to dict
    '''
    column_list,values_list = [],[]
    for key,value in args_dict.items():
        column_list.append(key)
        if type(value) == str:
            values_list.append("'" + value + '"')
        else:
            values_list.append(value)
        #column_list.append('"' + key + '"')
    values = tuple(values_list)
    
    conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
    cur=conn.cursor()
    command = f"""INSERT INTO {table}({','.join(column_list)})
        VALUES({','.join(['%s']*len(column_list))});"""
    print(f"command:\n{command}")
    print(f"values:\n{values}")
    cur.execute(
        command,
        values)
    cur.close()
    conn.close()
    return "pass"
    '''
    return f"""INSERT INTO {table}({','.join(column_list)})
        VALUES({','.join(['%s']*len(column_tuple))})"""
    '''

def get_firmware_path(upgrade_version, oem):
    
    query = f"""SELECT ftp_server,ftp_path,ftp_filename
                FROM netauto_uf_version_master
                WHERE compatible_version = '{upgrade_version}'
                    AND oem = '{oem}';"""
    try:
        with psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS) as conn:
            with conn.cursor() as cur:
                cur.execute(query)
                out = cur.fetchall()
            conn.commit()
        return out[0]
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

def update_uf_log(log, request, action):

    if action == 'ping':
        ip_hostname = ','.join(request['deviceAddresses'])
        unique_uuid = uuid.uuid4().hex
        oem = request['OEM']
        conn_type = request['deviceConnectionType']
        psql_command = """INSERT INTO netauto_uf_log
                        ("Run_ID","Netauto_Module","IP_Hostname","OEM","Executed_Date","Executed_By","Ping_log","Connection_type")
                        VALUES
                        (%s,%s,%s,%s,%s,%s,%s,%s);"""
        data = (unique_uuid,"Upgrade_firmware",ip_hostname,oem,datetime.datetime.now(),"Admin",log,conn_type)
    elif action == 'predeployment':
        psql_command = """UPDATE netauto_uf_log
                        set "PreDeployment_log" = %s
                        where "ID" in(
                            select max("ID") from netauto_uf_log
                        );"""
        data = (log,)
    elif action == 'postdeployment':
        psql_command = """UPDATE netauto_uf_log
                        set "PostDeployment_log" = %s
                        where "ID" in(
                            select max("ID") from netauto_uf_log
                        );"""
        data = (log,)
    with psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS) as conn:
        with conn.cursor() as cur:
            cur.execute(psql_command, data)
        conn.commit()
    return None