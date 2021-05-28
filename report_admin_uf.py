# -*- coding: utf-8 -*-
"""
Created on Sun Mar  3 17:13:34 2019

@author: shubha.ks
"""

import psycopg2
import dbconstants

UUID_LEN_WITH_UNDERSCORES = 34

def report():
    report_data = []

    conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
    cur=conn.cursor()
    cur.execute('select * from public.netauto_uf_firmware_mapping ORDER BY "Sl_No" DESC LIMIT 50')
    colname2index = {c.name:i for i,c in enumerate(cur.description)}

    for row in cur.fetchall():
        data = {col_name: row[index] for col_name,index in colname2index.items()}
        data["Physical_File"] = data["Physical_File"][UUID_LEN_WITH_UNDERSCORES:]

        '''
        data = {"Sl_No":row[colname2index['Sl_No']],
                "OEM":row[1],
                "Series": row[2],
                "Model":row[3],
                "Type_of_Device":row[4],
                "Image_Version":row[5],
                "Upgrade_Compatible_version":row[6],
                "FTP_Server_IP":row[7],
                "Path":row[8],
                "Physical_File":row[9][34:]
                }
        '''
        report_data.append(data)

    cur.close()
    conn.close()

    return(report_data)
if __name__=="__main__":
    report()