# -*- coding: utf-8 -*-
"""
Created on Thu Dec 20 20:47:11 2018

@author: Shubha.KS
"""

import paramiko
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.MissingHostKeyPolicy)
client.connect('10.10.20.100', port=22, username='admin', password='ciscopsdt')
cmd="show ip route"

stdin_, stdout_, stderr_ = client.exec_command(cmd)

for line in stdout_.readlines():
  print(line)

print(stdout_.channel.recv_exit_status())

client.close()