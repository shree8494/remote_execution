# -*- coding: utf-8 -*-
"""
Created on Mon Dec  3 22:58:54 2018

@author: Shubha.KS
"""

import requests
in1={

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
response = requests.post('http://127.0.0.1:5000/api/remote-execution',json=in1)
response.ok

print(response.status_code)
