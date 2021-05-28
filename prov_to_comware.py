# -*- coding: utf-8 -*-
"""
Created on Sun Dec  2 20:51:50 2018

@author: Shubha.KS
"""

conversion_map = [
    {
      "subcategory":"Local User ID and Password",
      "provision": {
          "regex": r"\s*password[ ]+manager[ ]+user-name[ ]+(?P<username>\S+)[ ]+plaintext[ ]+(?P<password>\S+)[ ]*\r?\n"
          },
      "comware5": {
          "template": "local-user ${username}\npassword simple ${password}\nauthorizationattribute level 3\n"
          }
    },
    {
      "subcategory":"Console Access—Baud Rate",
      "provision":{
          "regex":r"\s*console[ ]+baud-rate[ ]+(?P<speed>speed-sense|1200|2400|4800|9600|19200|38400|57600|115200)[ ]*\r?\n"
          },
      "comware5":{
          "template":"user-interface aux 0\nspeed ${speed}\n"
          }
    },
    {
      "subcategory":"Source Interface for Management Communications",
      "provision":{
          "regex":r"\s*ip[ ]+sourceinterface[ ]+radius[ ]+(?P<ipaddress>\S+)[ ]*\r?\n"
          },
      "comware5":{
          "template":"radius nas-ip ${ipaddress}\n"
          }
    }
]

import re
from mako.template import Template

def convert(input_text):
  out_text = ""
  while(True):
    for conversion_data in conversion_map:
      result = re.match(conversion_data["provision"]["regex"], input_text)
      if result:
        template = Template(conversion_data["comware5"]["template"])
        out_text += template.render(**result.groupdict())  #** will convert dict to key=name paramerters. it will unpack the dictionary key=name
        input_text = input_text[result.end():]
        break
    else:
      break
  return out_text, input_text

in1 = '''
console baud-rate 1200
password manager user-name shubha plaintext 1234

ip sourceinterface radius 10.0.100.24
password manager user-name ravy plaintext 1e

console baud-rate 115200
password manager user-name ravy plaintext 1e


'''

out1, residual_text = convert(in1)
print("---converted text----")
print(out1)

print("---text not converted due to first not found command----")
print(residual_text)
print("-------")
