# -*- coding: utf-8 -*-
"""
Created on Sun Dec  2 16:33:48 2018

@author: Shubha.KS
"""

from mako.template import Template

comware_baudrate_template = Template('''local-user ${name}
password simple ${password}
authorizationattribute level 3''')

values = {"name": "aaaa", "password": "123" }

final_string = comware_baudrate_template.render(**values)
print(final_string)