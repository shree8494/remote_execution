# -*- coding: utf-8 -*-
"""
Created on Fri Dec  7 14:55:26 2018

@author: pompa
"""

import asyncio, asyncssh, sys

passwords = {'guest': '',                 # guest account with no password
             'user123': 'qV2iEadIGV2rw'   # password of 'secretpw'
            }

async def handle_client(process):

    prompt = '\n{0}>'.format(process.get_extra_info('username'))
    process.stdout.write('Welcome'+prompt)

    try:
      async for line in process.stdin:
        line = line.rstrip('\n')
        if line == 'set baudrate 1200':
            process.stderr.write('Baudrate set to 1200')
        else:
            process.stderr.write('unknown command')
        process.stderr.write(prompt)
    except asyncssh.BreakReceived:
        pass

    process.stdout.write('Done!\n')
    process.exit(0)

class MySSHServer(asyncssh.SSHServer):
    def connection_made(self, conn):
        print('SSH connection received from %s.' %
                  conn.get_extra_info('peername')[0])

    def connection_lost(self, exc):
        if exc:
            print('SSH connection error: ' + str(exc), file=sys.stderr)
        else:
            print('SSH connection closed.')

    def begin_auth(self, username):
        # If the user's password is the empty string, no auth is required
        return passwords.get(username) != ''

    def password_auth_supported(self):
        return True

    def validate_password(self, username, password):
        pw = passwords.get(username, '*')
        return True
        #return crypt.crypt(password, pw) == pw

async def start_server():
    await asyncssh.create_server(MySSHServer, None, 8022,
                                 server_host_keys=['ssh_host_key_private_openssh'],
                                 passphrase="shubha",      
                                 process_factory=handle_client)

loop = asyncio.get_event_loop()

try:
    loop.run_until_complete(start_server())
except (OSError, asyncssh.Error) as exc:
    sys.exit('Error starting server: ' + str(exc))

loop.run_forever()