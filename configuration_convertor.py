# -*- coding: utf-8 -*-
"""
Created on Sun Dec  2 20:51:50 2018

@author: Shubha.KS
"""
import psycopg2
import dbconstants


#conversion_map1 = []
#conversion_map1 = [
#    {
#      "subcategory":"Local User ID and Password",
#      "provision": {
#          "regex": r"\s*password[ ]+manager[ ]+user-name[ ]+(?P<username>\S+)[ ]+plaintext[ ]+(?P<password>\S+)[ ]*\r?\n",
#          "template": "password manager user-name ${username} plaintext ${password}\n"
#          },
#      "comware5": {
#          "regex": r"\s*local-user[ ]+(?P<username>\S+)[ ]*\r?\n\s*password[ ]+simple[ ]+(?P<password>\S+)[ ]*\r?\n\s*authorizationattribute[ ]+level[ ]+3[ ]*\r?\n",
#          "template": "local-user ${username}\npassword simple ${password}\nauthorizationattribute level 3\n"
#          }
#    },
#    {
#      "subcategory":"Console Access—Baud Rate",
#      "provision":{
#          "regex":r"\s*console[ ]+baud-rate[ ]+(?P<speed>speed-sense|1200|2400|4800|9600|19200|38400|57600|115200)[ ]*\r?\n",
#          "template":
#'''\
#<%
#if speed not in ('speed-sense', '1200', '2400', '4800', '9600', '19200', '38400', '57600', '115200'):
#  raise Exception('Invalid value for speed')
#%>\
#console baud-rate ${speed}
#'''
#          },
#      "comware5":{
#          "regex":r"\s*user-interface[ ]+aux[ ]+0[ ]*\r?\n\s*speed[ ]+(?P<speed>300|600|1200|2400|4800|9600|19200|38400|57600|115200)[ ]*\r?\n",
#          "template":
#'''\
#<%
#if speed not in ('300','600','1200','2400','4800','9600','19200','38400','57600','115200'):
#  raise Exception('Invalid Value for Speed')
#%>\
#user-interface aux 0\nspeed ${speed}
#'''
#          }
#    },
#    {
#      "subcategory":"Source Interface for Management Communications",
#      "provision":{
#          "regex":r"\s*ip[ ]+sourceinterface[ ]+radius[ ]+(?P<ipaddress>\S+)[ ]*\r?\n",
#          "template":"ip sourceinterface radius ${ipaddress}\n"
#          },
#      "comware5":{
#          "regex":r"\s*radius[ ]+nas-ip[ ]+(?P<ipaddress>\S+)[ ]*\r?\n",
#          "template":"radius nas-ip ${ipaddress}\n"
#          }
#    }
#]

conversion_map={}
#this is the format the refresh will set up the conversion map
#conversion_map = {
#  1: {
#      "commandid":1,
#      "oemid": {   }
#    },
#   2: {
#      "commandid":2,
#      "oemid": {   }
#    }
#    }

import re
from mako.template import Template

def convert(source_device, target_device, input_text):
  refresh_conversion_map()
  #input_text=listconvert(input_text)
  input_text=input_text+"\n"
  #print(type(input_text))
  out_text = ""
  errors_text = ""
  while(True):
    for conversion_data in conversion_map.values():
      #print(conversion_data)
      if conversion_data[source_device] is None or conversion_data[target_device] is None:
        continue
      #print(conversion_data[source_device]["regex"])
      print(conversion_data[source_device]["regex"], input_text)
      result = re.search(conversion_data[source_device]["regex"], input_text)
      #result = re.match(conversion_data[source_device]["regex"], input_text) #old line of code for matching regex
      print(result)
      if result:
        template = Template(conversion_data[target_device]["template"])#+ Template(conversion_data[source_device]["template"])
        try:
          out_text +=template.render(**result.groupdict())  #** will convert dict to key=name paramerters. it will unpack the dictionary key=name
        except Exception as err:
          errors_text += '\n>>>Cannot Convert:\n{0}\n>>>Reason:{1}\n'.format(
              input_text[result.start():result.end()].strip(),
              str(err)
            )
        input_text =input_text[:result.start()] + input_text[result.end():]
        #input_text =input_text[result.end():] #old line of code for match function in regex which pops whole string
        break
    else:
      break
  return out_text, input_text, errors_text


def refresh_conversion_map():
  global conversion_map
  conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)
  cur=conn.cursor()
  cur.execute("select * from public.command_conversion")
  commandid_index=1
  oemid_index=2
  meta_index=6
  conversion_map = {}
  for row in cur.fetchall():
    cmd_map = eval(row[meta_index]) if row[meta_index] else None
    if row[commandid_index] not in conversion_map:
      conversion_map[row[commandid_index]]=  {
     "command_id":row[commandid_index],
     row[oemid_index]: cmd_map
     }
    else:
      conversion_map[row[commandid_index]][row[oemid_index]] = cmd_map



if __name__=="__main__":

  refresh_conversion_map()
  in1 = '''
  reload 
  show
  show system fan
  some
  kill 3

  '''
  out1, residual_text, errors_text = convert('provision', 'comware5', in1)
  print("---Converted text----")
  print(out1)
  print("---Errors ----- ")
  print(errors_text)
  print("---Text not converted due to input not found command----")
  print(residual_text)
  print("-------")


