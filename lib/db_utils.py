#!/usr/bin/env python

import psycopg2
import dbconstants

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