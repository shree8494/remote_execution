# -*- coding: utf-8 -*-
"""
Created on Sun Dec  2 15:31:08 2018

@author: Shubha.KS
"""

import re
comware_username_regex=r"\s*local-user\s+(?P<name>\S+)\s*\r?\n\s*password\s+simple\s+(?P<password>\S+)\s*\r?\n\s*authorizationattribute\r?\n"
comware_system_regex=r"\s*system\s*\r?\n"
comware_enable_regex=r"\s*enable\s*\r?\n"
intext='''local-user shubha 
password simple mypassword

authorizationattribute
enable
system


'''

intext2='''
system
system
enable
local-user shubha 
password simple mypassword
authorizationattribute
system
enable
enable
'''

regexs = [comware_username_regex,comware_enable_regex,comware_system_regex]


input_text = intext2
while( True ):
    for index, regex in enumerate(regexs):
        result = re.match(regex, input_text)
        if result:
            print(index, result.groupdict())
            input_text = input_text[result.end():]
            break
    else:
        break
print("----residual text----")
print(input_text)
        



