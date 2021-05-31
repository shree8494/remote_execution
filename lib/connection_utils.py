import paramiko
import time
import traceback
import telnetlib

class Connection(object):

    def __init__(self, execution_params):
        
        self.jmp_server = execution_params['jmpServerIp']
        self.js_user = execution_params["jmpServerUsername"]
        self.js_password = execution_params["jmpServerPassword"]
        self.oem = execution_params['OEM'].lower()
        self.user = execution_params['deviceUsername']
        self.password = execution_params['devicePassword']
        self.is_jmp = execution_params['isJumpserver']
        self.addresses = execution_params['deviceAddresses']
        self.commands = execution_params['commands']
        self.conn_type = execution_params['deviceConnectionType']
        self.execution_output = {}
        self.log = ''

class SSHConnection(Connection):

    PROMPT = {'linux': '~$',
              'cisco': '#', 'cisco ios':'#'}
    PW_PROMPT = {'linux': 'password:',
                 'cisco': 'Password:', 'cisco ios': 'Password:'}
    MAX_BUFF = 65535

    def __init__(self, execution_params):
        super().__init__(execution_params)
        
    def get_prompt(self, deviceType, enterPassword=False, password=''):

        MAX_BUFF = self.MAX_BUFF
        out, buff = '',''
        prompt = self.PROMPT[deviceType]
        if enterPassword:
            buff = self.connection.recv(MAX_BUFF).decode('ascii')
            #print(f"Device login: {buff}\n")
            out += buff
            password_prompt = self.PW_PROMPT[deviceType]
            while not (buff.endswith(password_prompt + ' ') or buff.endswith(password_prompt)):
                #print(f"Device login not ending with prompt, last few characters are {buff[-8:-1]}\n")
                time.sleep(1)
                buff = self.connection.recv(MAX_BUFF).decode('ascii')
                out += buff
            #print("Got device prompt now, sending password\n")
            self.connection.send(password + '\n')
            time.sleep(1)
        buff = self.connection.recv(MAX_BUFF).decode('ascii')
        while not (buff.endswith(prompt + ' ') or buff.endswith(prompt)):
            #print(f"Not getting prompt, last few characters are {buff[-10:-1]}\n")
            time.sleep(1)
            buff = self.connection.recv(MAX_BUFF).decode('ascii')
            out += buff
        #print(f"Returning back:\n{out}")
        return out

    def get_connection(self, host, username, password, type):
        
        #out, buff = '',''
        self.client = paramiko.SSHClient()
        self.client.set_missing_host_key_policy(paramiko.MissingHostKeyPolicy)
        self.client.connect(host,
                port=22,
                username=username,
                password=password)
        self.connection = self.client.invoke_shell()
        return self.get_prompt(type)

    def run_commands_ssh(self):

        self.connection.send("terminal length 0\n")
        tmp = self.get_prompt(deviceType=self.oem)
        self.log += tmp
        out_dict = {'prompt': tmp}

        for command in self.commands:
            self.log += f"\r\n------------{command} Output-------------\r\n"
            #print(f"Sending command: {command}")
            self.connection.send(command + '\n')
            tmp = self.get_prompt(deviceType=self.oem)
            self.log += tmp
            out_dict[command] = '\n'.join(tmp.split('\n')[1:-1])
            #print(f"Received for command {command}:\n{out}")
            #output[command] = '\n'.join(out.split('\n')[1:-1])
        self.connection.send('exit\n')
        return out_dict

    def execute_jmp_ssh(self):

        self.log += f"\r\n-------------------JumpServer--------------\r\n"
        tmp = self.get_connection(host=self.jmp_server,
                                   username=self.js_user,
                                   password=self.js_password,
                                   type=self.js_type) + "\r\n"
        self.log += tmp
        self.execution_output['Jump Server'] = tmp
        for device in self.addresses:
            self.execution_output[device] = {}
            self.log += f"\r\n-------------------{device}--------------\r\n"
            output = {}
            error = ''

            try:
                #print(f"Connecting to {device}\n")
                self.connection.send(f"ssh -o \"StrictHostKeyChecking=no\" \
                {self.user}@{device}\n")

                time.sleep(1)
                self.log += self.get_prompt(deviceType=self.oem,
                                      enterPassword=True,
                                      password=self.password) + "\r\n"
                
                self.execution_output[device]['output'] = self.run_commands_ssh()
                time.sleep(1)

            except:
                error = "Internal error" + traceback.format_exc()
                self.log +=error
            finally:
                self.execution_output[device]['error'] = error
                self.execution_output[device]['progress'] = 100
        self.client.close()
        return None

    def execute_direct_ssh(self):

        for device in self.addresses:
            self.execution_output[device] = {}
            self.log += f"\r\n-------------------{device}--------------\r\n"
            try:
                self.log += self.get_connection(host=device,
                                    username=self.user,
                                    password=self.password,
                                    type=self.oem) + "\r\n"
                error = ""
                self.execution_output[device]['output'] = self.run_commands_ssh()
            except:
                error = "Internal error" + traceback.format_exc()
                self.log += error
            finally:
                self.execution_output[device]['error'] = error
                self.execution_output[device]['progress'] = 100
        self.client.close()
        return None

    def execute(self):

        if self.is_jmp:
            self.js_type='linux'
            self.execute_jmp_ssh()
        else:
            self.execute_direct_ssh()
        return None

class TelnetConnection(Connection):

    USER_TIMEOUT = 10

    def __init__(self, execution_params):
        super().__init__(execution_params)

    def run_commands_telnet(self):
        out_dict = {}
        self.tn.write(b"terminal length 0\n")
        self.log += self.tn.read_until(b"#",timeout=self.USER_TIMEOUT).decode('ascii')          
        for command in self.commands:
            #print(f"Sending command {command}")
            self.log += f"\r\n------------{command} Output-------------\r\n"
            self.tn.write(command.encode('ascii')+b"\n")
            tmp = self.tn.read_until(b"#",timeout=self.USER_TIMEOUT).decode('ascii')
            self.log += tmp
            out_dict[command] = '\n'.join(tmp.split('\n')[1:-1])
            time.sleep(1)
        
        return out_dict

    def execute_jmp_telnet(self):

        timeout = self.USER_TIMEOUT
        error = ""

        self.log += "\r\n-------------------JumpServer--------------\r\n"
        self.tn = telnetlib.Telnet(self.jmp_server,timeout=timeout)
        self.log += self.tn.read_until(b"login:").decode('ascii')    
        self.tn.write(self.js_user.encode('ascii') + b"\n")
        self.log += self.tn.read_until(b"Password:").decode('ascii')
        self.tn.write(self.js_password.encode('ascii') + b"\n")    
        self.log += self.tn.read_until(b"~$").decode('ascii')
        for device in self.addresses:
            self.execution_output[device] = {}
            try:
                #print(f"Connecting to {device}")
                self.log += f"\r\n-------------------{device}--------------\r\n"
                self.tn.write(f"telnet {device}\n".encode('ascii'))
                self.log += self.tn.read_until(b"Username:").decode('ascii')
                
                self.tn.write(self.user.encode('ascii') + b"\n")
                self.log += self.tn.read_until(b"Password:").decode('ascii')
                
                self.tn.write(self.password.encode('ascii') + b"\n")
                self.log += self.tn.read_until(b"#",timeout=timeout).decode('ascii')
                #print("Got prompt\n")
                self.execution_output[device]['output'] = self.run_commands_telnet()
                self.tn.write(b"exit\n")
                time.sleep(1)

            except:
                error = "Internal error" + traceback.format_exc()
                self.log += error
            finally:
                self.execution_output[device]['error'] = error
                self.execution_output[device]['progress'] = 100
        return None

    def execute_direct_telnet(self):

        timeout = self.USER_TIMEOUT
        error = ""
        out = b""
        for device in self.addresses:
            self.execution_output[device] = {}
            try:
                #print(f"connecting to {device}")
                self.log += f"\r\n-------------------{device}--------------\r\n"
                self.tn = telnetlib.Telnet(device,timeout=timeout)
                self.log += self.tn.read_until(b"Username:").decode('ascii')
                self.tn.write(self.user.encode('ascii') + b"\n")
                self.log += self.tn.read_until(b"Password:").decode('ascii')
                self.tn.write(self.password.encode('ascii') + b"\n")
                self.log += self.tn.read_until(b"#",timeout=timeout).decode('ascii')
                self.execution_output[device]['output'] = self.run_commands_telnet()
                self.tn.write(b"exit\n")
                time.sleep(1)

            except:
                error = "Internal error" + traceback.format_exc()
                self.log += error
            finally:
                self.execution_output[device]['error'] = error
                self.execution_output[device]['progress'] = 100
        return None
        
    def execute(self):

        if self.is_jmp:
            self.js_type='linux'
            self.execute_jmp_telnet()
        else:
            self.execute_direct_telnet()
        self.tn.close()
        return None
