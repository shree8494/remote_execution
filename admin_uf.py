# -*- coding: utf-8 -*-
"""
Created on Thu Jun  6 12:06:51 2019

@author: shubha.ks
"""

# -*- coding: utf-8 -*-
"""
Created on Sun Mar  3 17:13:34 2019

@author: shubha.ks
"""

import psycopg2
import dbconstants
import datetime
def fun_admin_uf(execution_params):

    OEM = execution_params["OEM"]
    Series = execution_params["Series"]
    Model = execution_params["Model"]
    Type_of_Device = execution_params["TypeOfDevice"]
    Image_Version = execution_params["ImageVersion"]
    Upgrade_Compatible_Version = execution_params["UpgradeCompatibleVersion"]
    FTP_Server_IP = execution_params["FTPServerIP"]
    Physical_File = execution_params["FileName"]
    Path="C:\\network_automation\\python\\uploads\\firmwares"

    conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
    cur=conn.cursor()
    sql_Insert_Mapping = """INSERT INTO public.netauto_uf_firmware_mapping("OEM","Series","Model","Type_of_Device","Image_Version","Upgrade_Compatible_version","FTP_Server_IP","Path","Physical_File","Submitted_Date")
             		   VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);"""
    Insert_Values_Mapping = (OEM,Series,Model,Type_of_Device,Image_Version,Upgrade_Compatible_Version,FTP_Server_IP,Path,Physical_File,datetime.datetime.now())
    cur=conn.cursor()
    cur.execute(sql_Insert_Mapping, Insert_Values_Mapping)
    conn.commit()
    cur.close()
    conn.close()






    return("Successfull")
if __name__=="__main__":
    in1={
       "FTPServerIP": "192.168.198.80",
       "FileName": "4e291cc08ff045ccbf382dc07160287c__test.bin",
       "ImageVersion": "15.1(4)M10",
       "Model": 850,
       "OEM": "Cisco",
       "Series": 1.23,
       "TypeOfDevice": "Switch",
       "UpgradeCompatibleVersion": ["v1","v2"]
        }
    out=fun_admin_uf(in1)
    print(out)