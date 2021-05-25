import paramiko
import time
import traceback

class Connection(object):

    PROMPT = {'linux': '~$',
              'cisco': '#'}
    PW_PROMPT = {'linux': 'password:',
                       'cisco': 'Password:'}
    

    def __init__(self, execution_params):
        
        self.jmpServerIp = execution_params['jmpServerIp']
        self.jmpServerUsername = execution_params["jmpServerUsername"]
        self.jmpServerPassword = execution_params["jmpServerPassword"]
        self.jmpServerType = execution_params["jmpServerType"]
        self.OEM = execution_params['OEM']
        self.deviceUsername = execution_params['deviceUsername']
        self.devicePassword = execution_params['devicePassword']
        self.useJmpServer = execution_params['isJumpserver']
        self.deviceAddresses = execution_params['deviceAddresses']
        self.commands = execution_params['commands']
        self.output_filename = execution_params['output_filename']
        self.execution_output = {}
    
    def get_prompt(self, deviceType, enterPassword=False, password=''):

        out, buff = '',''
        prompt = self.PROMPT[deviceType]
        if enterPassword:
            buff = self.connection.recv(5000).decode('ascii')
            #print(f"Device login: {buff}\n")
            out += buff
            password_prompt = self.PW_PROMPT[deviceType]
            while not (buff.endswith(password_prompt + ' ') or buff.endswith(password_prompt)):
                #print(f"Device login not ending with prompt, last few characters are {buff[-8:-1]}\n")
                time.sleep(1)
                buff = self.connection.recv(5000).decode('ascii')
                out += buff
            #print("Got device prompt now, sending password\n")
            self.connection.send(password + '\n')
            time.sleep(1)
        buff = self.connection.recv(65535).decode('ascii')
        while not (buff.endswith(prompt + ' ') or buff.endswith(prompt)):
            #print(f"Not getting prompt, last few characters are {buff[-10:-1]}\n")
            time.sleep(1)
            buff = self.connection.recv(65535).decode('ascii')
            out += buff
        #print(f"Returning back:\n{out}")
        return out

    def get_connection(self, host, username, password):
        
        out, buff = '',''
        self.client = paramiko.SSHClient()
        self.client.set_missing_host_key_policy(paramiko.MissingHostKeyPolicy)
        self.client.connect(host,
                port=22,
                username=username,
                password=password)
        self.connection = self.client.invoke_shell()
        return self.get_prompt(deviceType='linux')

        #return out

    def execute_ssh_jmp(self):

        self.execution_output['jmpServer'] = self.get_connection(host=self.jmpServerIp,
                                                    username=self.jmpServerUsername,
                                                    password=self.jmpServerPassword)
        for device in self.deviceAddresses:
            output = {}
            error = ''
            progress = 0

            try:
                self.connection.send(f"ssh -o \"StrictHostKeyChecking=no\" \
                {self.deviceUsername}@{device}\n")

                time.sleep(1)

                out = self.get_prompt(deviceType=self.OEM,
                                      enterPassword=True,
                                      password=self.devicePassword)

                self.connection.send("terminal length 0\n")
                
                out = self.get_prompt(deviceType=self.OEM)

                for command in self.commands:
                    #print(f"Sending command: {command}")

                    self.connection.send(command + '\n')
                    out = self.get_prompt(deviceType=self.OEM)
                    #print(f"Received for command {command}:\n{out}")

                    output[command] = '\n'.join(out.split('\n')[1:-1])
                self.connection.send('exit\n')
                time.sleep(1)

            except:
                error = "Internal error" + traceback.format_exc()

            finally:
                progress = 100
                self.execution_output[device] = {'output': output,
                                                 'error': error,
                                                 'progress': progress}
        self.client.close()

        return None

    def execute(self):
        
        if self.useJmpServer:
            self.execute_ssh_jmp()

    


