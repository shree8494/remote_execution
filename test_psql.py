# -*- coding: utf-8 -*-
"""
Created on Wed Dec 12 23:03:00 2018

@author: Shubha.KS
"""

import psycopg2
import json
conn=psycopg2.connect(host="localhost",dbname="netauto",user="postgres",password="networkautomation")
cur=conn.cursor()
cur.execute("select * from netauto.command_conversion")


conversion_map = {
  1: {
      "commandid":1,
      "oemid": {   }
    },
   2: {
      "commandid":2,
      "oemid": {   }     
    }
    }
   
commandid_index=1
oemid_index=2
meta_index=6
conversion_map = {}
for row in cur.fetchall():
  
  if row[commandid_index] not in conversion_map:    
    conversion_map[row[commandid_index]]=  {
   "command_id":row[commandid_index],
   row[oemid_index]:row[meta_index]
   }
  else:
    conversion_map[row[commandid_index]][row[oemid_index]] = row[meta_index]
    

print(conversion_map) 

cur.close()
conn.close()
