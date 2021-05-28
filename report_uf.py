# -*- coding: utf-8 -*-
"""
Created on Sun Mar  3 17:13:34 2019

@author: shubha.ks
"""

import psycopg2
import dbconstants
def report():
    report_data = []

    conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
    cur=conn.cursor()
    cur.execute('select * from public.netauto_uf_log ORDER BY "ID" DESC LIMIT 50')
    conn.commit()

    for row in cur.fetchall():
        data = {"ID":row[0],
                "Run_ID":row[1],
                "Netauto_Module": row[2],
                "IP_Hostname":row[3],
                "OEM":row[4],
                "Executed_Date":row[5],
                "Executed_By":row[6],
                "Ping_log":row[7],
                "PreDeploy_log":row[8],
                "Deploy_log":row[9],
                "Device_Conn_Type":row[10]
                }
        report_data.append(data)

    cur.close()
    conn.close()

    return(report_data)
if __name__=="__main__":
    report()