import paramiko
import time
import traceback
import telnetlib

class Connection(object):

    def __init__(self, single_device_params):
        
        self.jmp_server = single_device_params['jmpServerIp']
        self.js_user = single_device_params["jmpServerUsername"]
        self.js_password = single_device_params["jmpServerPassword"]
        self.oem = single_device_params['OEM'].lower()
        self.user = single_device_params['deviceUsername']
        self.password = single_device_params['devicePassword']
        self.is_jmp = single_device_params['isJumpServer']
        self.device = single_device_params['device']
        self.commands = single_device_params['commands']
        self.conn_type = single_device_params['deviceConnectionType']
        self.execution_output = {}
        self.log = ''

class SSHConnection(Connection):

    PROMPT = {'linux': '~$',
              'cisco': '#', 'cisco ios':'#'}
    PW_PROMPT = {'linux': 'password:',
                 'cisco': 'Password:', 'cisco ios': 'Password:'}
    MAX_BUFF = 65535
    USER_TIMEOUT = 10

    def __init__(self, single_device_params):
        super().__init__(single_device_params)
        
    def get_prompt(self,
                   deviceType=None,
                   enterPassword=False,
                   password='',
                   prompt=None,
                   timeout=None):

        #print("Getting prompt")
        MAX_BUFF = self.MAX_BUFF
        out, buff = '',''
        if not deviceType:
            deviceType = self.oem
        if not prompt:
            prompt = self.PROMPT[deviceType]
        if not timeout:
            timeout = self.USER_TIMEOUT
        if enterPassword:
            buff = self.connection.recv(MAX_BUFF).decode('ascii')
            #print(f"Device login: {buff}\n")
            out += buff
            password_prompt = self.PW_PROMPT[deviceType]

            time_max = time.time() + timeout
            while not (buff.endswith(password_prompt + ' ') 
                       or buff.endswith(password_prompt)):
                #print(f"Device login not ending with prompt, last few characters are {buff[-8:-1]}\n")
                if self.connection.recv_ready():
                    #print("receive ready")
                    buff = self.connection.recv(MAX_BUFF).decode('ascii')
                    #print(f"Length of buffer: {len(buff)}")
                    out += buff
                if time.time() > time_max:
                    print("TIMEOUT")
                    raise Exception("Password prompt timeout")
                
            print("Got device prompt now, sending password\n")
            self.connection.send(password + '\n')
            time.sleep(1)
        buff = self.connection.recv(MAX_BUFF).decode('ascii')

        time_max = time.time() + timeout
        while not (buff.endswith(prompt + ' ') or buff.endswith(prompt)):
            #print(f"Not getting prompt, last few characters are {buff[-10:-1]}\n")
            #time.sleep(1)
            if self.connection.recv_ready():
                buff = self.connection.recv(MAX_BUFF).decode('ascii')
                out += buff
            if time.time() > time_max:
                print("TIMEOUT")
                raise Exception("Prompt timeout")
                #raise Exception("Password prompt timeout")
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
        tmp = self.get_prompt()
        self.log += tmp
        out_dict = {'prompt': tmp}

        for command in self.commands:
            self.log += f"\r\n------------{command} Output-------------\r\n"
            #print(f"Sending command: {command}")
            self.connection.send(command + '\n')
            tmp = self.get_prompt()
            self.log += tmp
            out_dict[command] = '\n'.join(tmp.split('\n')[1:-1])
            #print(f"Received for command {command}:\n{out}")
            #output[command] = '\n'.join(out.split('\n')[1:-1])
        self.connection.send('exit\n')
        return out_dict

    def execute_jmp_ssh(self):

        self.log += f"\r\n-------------------JumpServer--------------\r\n"
        try:
            tmp = self.get_connection(host=self.jmp_server,
                                    username=self.js_user,
                                    password=self.js_password,
                                    type=self.js_type) + "\r\n"
            self.log += tmp
            self.execution_output['Jump Server'] = tmp
            
            #self.execution_output[device] = {}
            self.log += f"\r\n-------------------{self.device}--------------\r\n"
            #output = {}
            #print(f"Connecting to {self.device}\n")
            self.connection.send(f"ssh -o \"StrictHostKeyChecking=no\" \
            {self.user}@{self.device}\n")

            time.sleep(1)
            self.log += self.get_prompt(enterPassword=True,
                                    password=self.password) + "\r\n"
            #print(f"Log:\n{self.log}")
            self.execution_output['output'] = self.run_commands_ssh()
            time.sleep(1)
            self.client.close()
        except:
            error = "Internal error " + traceback.format_exc()
            self.execution_output['error'] = error
            self.log += error
        finally:
            self.execution_output['progress'] = 100
        return None

    def execute_direct_ssh(self):

        #self.execution_output[device] = {}
        self.log += f"\r\n-------------------{self.device}--------------\r\n"
        try:
            self.log += self.get_connection(host=self.device,
                                username=self.user,
                                password=self.password,
                                type=self.oem) + "\r\n"
            self.execution_output['output'] = self.run_commands_ssh()
            self.client.close()
        except:
            error = "Internal error" + traceback.format_exc()
            self.execution_output['error'] = error
            self.log += error
        finally:
            self.execution_output['progress'] = 100
        return None

    def execute(self):

        if self.is_jmp:
            self.js_type='linux'
            self.execute_jmp_ssh()
        else:
            self.execute_direct_ssh()
        return None
    
    def load_image(self, access_server, file_path, filename):
        if file_path:
            full_path = file_path + '/' + filename
        else:
            full_path = filename
        try:
            if self.is_jmp:
                self.log += self.get_connection(host=self.jmp_server,
                                                username=self.js_user,
                                                password=self.js_password,
                                                type='linux')
                #print("Received jumpbox prompt\n")
                self.connection.send(f"ssh -o \"StrictHostKeyChecking=no\" \
                {self.user}@{self.device}\n")
                time.sleep(1)
                self.log += self.get_prompt(deviceType=self.oem,
                                            enterPassword=True,
                                            password=self.password) + "\r\n"
                #print("login to device")
            else:
                self.log += self.get_connection(host=self.device,
                                    username=self.user,
                                    password=self.password,
                                    type=self.oem) + "\r\n"
            #print("Sending tftp command")
            self.connection.send('copy tftp: flash: vrf MGMT\n')
            self.log += self.get_prompt(prompt=']?')
            #print(f"Entering access server: {access_server}")
            self.connection.send(access_server + '\n')
            self.log += self.get_prompt(prompt=']?')
            #print(f"Entering path now: {full_path}")
            self.connection.send(full_path + '\n')
            self.log += self.get_prompt(prompt=']?')
            #print("Enter many times")
            self.connection.send('\n\n\n')
            buff = self.get_prompt(timeout=180)
            #print(f"Received final: {buff}")
            self.log += buff
            if not r'%Error' in buff:
                self.execution_output['status'] = True
                #print(f"Sending command: 'show flash: | i {filename}'")
                self.connection.send(f"show flash: | i {filename}\n")
                self.execution_output['file_found'] = self.get_prompt()
                #print("Received prompt after file_found")
                self.log += self.execution_output['file_found']
            else:
                self.execution_output['status'] = False
                self.execution_output['error'] = f"File not loaded\nLogs:\n{self.log}"
            self.client.close()
        except:
            self.execution_output['error'] = "Internal error\n" + traceback.format_exc()

class TelnetConnection(Connection):

    USER_TIMEOUT = 10

    def __init__(self, single_device_params):
        super().__init__(single_device_params)

    def get_prompt(self, expect):
        expect_bin = expect.encode('ascii')
        out = self.tn.read_until(expect_bin, timeout=self.USER_TIMEOUT).decode('ascii')
        if not out.endswith(expect):
            raise Exception("Prompt timeout")
        else:
            return out

    def run_commands_telnet(self):
        out_dict = {}
        self.tn.write(b"terminal length 0\n")
        self.log += self.get_prompt("#")
        #self.log += self.tn.read_until(b"#",timeout=self.USER_TIMEOUT).decode('ascii')          
        for command in self.commands:
            #print(f"Sending command {command}")
            self.log += f"\r\n------------{command} Output-------------\r\n"
            self.tn.write(command.encode('ascii')+b"\n")
            tmp = self.get_prompt("#")
            #tmp = self.tn.read_until(b"#",timeout=self.USER_TIMEOUT).decode('ascii')
            self.log += tmp
            out_dict[command] = '\n'.join(tmp.split('\n')[1:-1])
            time.sleep(1)
        
        return out_dict

    def execute_jmp_telnet(self):

        timeout = self.USER_TIMEOUT
        error = ""

        self.log += "\r\n-------------------JumpServer--------------\r\n"
        

        try:
            self.tn = telnetlib.Telnet(self.jmp_server,timeout=timeout)

            self.log += self.get_prompt("login:")
            #self.log += self.tn.read_until(b"login:",timeout=timeout).decode('ascii')    
            self.tn.write(self.js_user.encode('ascii') + b"\n")

            self.log += self.get_prompt("Password:")
            #self.log += self.tn.read_until(b"Password:",timeout=timeout).decode('ascii')
            self.tn.write(self.js_password.encode('ascii') + b"\n") 

            self.log += self.get_prompt("~$")
            #self.log += self.tn.read_until(b"~$",timeout=timeout).decode('ascii')
            #print(f"Connecting to {device}")

            self.log += f"\r\n-------------------{self.device}--------------\r\n"
            self.tn.write(f"telnet {self.device}\n".encode('ascii'))

            self.log += self.get_prompt("Username:")
            #self.log += self.tn.read_until(b"Username:",timeout=timeout).decode('ascii')
            self.tn.write(self.user.encode('ascii') + b"\n")

            self.log += self.get_prompt("Password:")
            #self.log += self.tn.read_until(b"Password:",timeout=timeout).decode('ascii')
            self.tn.write(self.password.encode('ascii') + b"\n")

            self.log += self.get_prompt("#")
            #self.log += self.tn.read_until(b"#",timeout=timeout).decode('ascii')
            #print("Got prompt\n")

            self.execution_output['output'] = self.run_commands_telnet()
            self.tn.write(b"exit\n")
            time.sleep(1)
            self.tn.close()

        except:
            error = "Internal error" + traceback.format_exc()
            self.execution_output['error'] = error
            self.log += error
        finally:
            self.execution_output['progress'] = 100

        return None

    def execute_direct_telnet(self):

        timeout = self.USER_TIMEOUT
        error = ""
        out = b""
        try:
            #print(f"connecting to {device}")
            self.log += f"\r\n-------------------{self.device}--------------\r\n"
            self.tn = telnetlib.Telnet(self.device,timeout=timeout)

            self.log += self.get_prompt("Username:")
            #self.log += self.tn.read_until(b"Username:",timeout=timeout).decode('ascii')
            self.tn.write(self.user.encode('ascii') + b"\n")

            self.log += self.get_prompt("Password:")
            #self.log += self.tn.read_until(b"Password:",timeout=timeout).decode('ascii')
            self.tn.write(self.password.encode('ascii') + b"\n")

            self.log += self.get_prompt("#")
            #self.log += self.tn.read_until(b"#",timeout=timeout).decode('ascii')

            self.execution_output['output'] = self.run_commands_telnet()
            self.tn.write(b"exit\n")
            time.sleep(1)
            self.tn.close()

        except:
            error = "Internal error" + traceback.format_exc()
            self.execution_output['error'] = error
            self.log += error
        finally:
            self.execution_output['progress'] = 100
        return None
        
    def execute(self):

        if self.is_jmp:
            self.js_type='linux'
            self.execute_jmp_telnet()
        else:
            self.execute_direct_telnet()
        #self.tn.close()
        return None
