# -*- coding: utf-8 -*-
"""
Created on Wed Dec 12 23:03:00 2018

@author: Shubha.KS
"""

import psycopg2
import json
conn=psycopg2.connect(host="localhost",dbname="netauto",user="postgres",password="networkautomation")
cur=conn.cursor()

meta={"regex":r"\s*enable[]*\r?\n",
      "template":"enable"}

sl_no=1

cur.execute("INSERT INTO book (oem_id, command,command_id, date_of_publication) VALUES ('HTML01', 'HTML Unleashed', 19.00, '08-07-2010')"

cur.execute("update netauto.command_conversion set meta=%s where sl_no=%s ",(str(meta),sl_no))

conn.commit()

cur.close()
conn.close()
