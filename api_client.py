# -*- coding: utf-8 -*-
"""
Created on Mon Dec  3 22:58:54 2018

@author: Shubha.KS
"""

import requests
response = requests.post('http://127.0.0.1:5000/api/convert')
response.ok
print(response.status_code)
