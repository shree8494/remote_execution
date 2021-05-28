# -*- coding: utf-8 -*-
from mako.template import Template
import re

cisco_pattern = re.compile('[ ]*username[ ]+([^ ]*)[ ]+privilege[ ]+15[ ]+password[ ]+([^ ]*)[ ]*')
cisco_template = Template('username ${name} privilege 15 password ${password}')

comware_pattern = re.compile('[ ]*local-user[ ]+([^ ]*)[ ]*\r?\n'
                             '[ ]*password[ ]+simple[ ]+([^ ]*)[ ]*\r?\n'
                             '[ ]*authorizationattribute[ ]*')
comware_template = Template(
'''local-user ${name}
password simple ${password}
authorizationattribute
''')

provision_pattern = re.compile('[ ]*password[ ]+manager[ ]+user-name[ ]+([^ ]*)[ ]+plaintext[ ]+([^ ]*)[ ]*')
provision_template = Template('password manager user-name ${name} plaintext ${password}')

class PatternNotFound(Exception):
    pass

def cisco2comware(commands):
    match = cisco_pattern.match(commands)
    if match:
        name, password = match.groups()
        return comware_template.render(name=name, password=password)
    raise PatternNotFound()

def comware2cisco(commands):
    match = comware_pattern.match(commands)
    if match:
        name, password = match.groups()
        return cisco_template.render(name=name, password=password)
    raise PatternNotFound()


cisco_output = cisco_template.render(name="networkadmin", password="NewYor1234")
comware_output = comware_template.render(name="networkadmin", password="NewYor1234")
provision_output = provision_template.render(name="networkadmin", password="NewYor1234")

print(cisco_output)
print(comware_output)
print(provision_output)