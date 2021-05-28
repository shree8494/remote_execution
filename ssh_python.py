# -*- coding: utf-8 -*-
"""
Created on Thu Dec 20 20:47:11 2018

@author: Shubha.KS
"""

import paramiko
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.MissingHostKeyPolicy)
client.connect('lab.sharontools.com', port=22, username='lab', password='123456')
remote_connection = client.invoke_shell()

if(remote_connection.recv_ready()):
  data = remote_connection.recv(10000)
  data_decoded = data.decode()
  print(data_decoded )

if(remote_connection.recv_stderr_ready()):
  data = remote_connection.recv_stderr(10000)
  data_decoded = data.decode()
  print(data_decoded )


remote_connection.send('1\n')

remote_connection.send('262962\n')

remote_connection.send('show ip arp\n')
remote_connection.send('show ip\n')

client.close()