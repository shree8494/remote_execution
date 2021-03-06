import time
import traceback
import paramiko
from .base import Connection

class SSHConnection(Connection):

    PROMPT = {'linux': '~$',
              'cisco': '#', 'cisco ios':'#'}
    PW_PROMPT = {'linux': 'password:',
                 'cisco': 'Password:', 'cisco ios': 'Password:'}
    MAX_BUFF = 65535
    USER_TIMEOUT = 20

    def __init__(self, single_device_params):
        super().__init__(single_device_params)

    def initialize(self):

        self.execution_output = {}
        self.log = ''
        self.log += f"\r\n-------------------{self.device}--------------\r\n"
        try:
            if self.is_jmp:
                self.js_type='linux'
                tmp = self.get_connection(host=self.jmp_server,
                                    username=self.js_user,
                                    password=self.js_password,
                                    type=self.js_type) + "\r\n"
                self.log += tmp
                self.execution_output['Jump Server'] = tmp
                self.connection.send(f"ssh -o \"StrictHostKeyChecking=no\" \
                    {self.user}@{self.device}\n")
                time.sleep(1)
                self.log += self.get_prompt(enterPassword=True,
                                            password=self.password) + "\r\n"
            else:
                self.log += self.get_connection(host=self.device,
                                            username=self.user,
                                            password=self.password,
                                            type=self.oem) + "\r\n"
        except:
            error = f"Error connecting to {self.device}" \
                    + traceback.format_exc()
            self.execution_output['error'] = error
        return
        
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
                
            #print("Got device prompt now, sending password\n")
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

    def run_commands(self, commands):

        self.connection.send("terminal length 0\n")
        tmp = self.get_prompt()
        self.log += tmp
        out_dict = {'prompt': tmp}

        for command in commands:
            self.log += f"\r\n------------{command} Output-------------\r\n"
            #print(f"Sending command: {command}")
            self.connection.send(command + '\n')
            tmp = self.get_prompt()
            self.log += tmp
            out_dict[command] = '\n'.join(tmp.split('\n')[1:-1])
            #print(f"Received for command {command}:\n{out}")
            #output[command] = '\n'.join(out.split('\n')[1:-1])
        #self.connection.send('exit\n')
        return out_dict

    def execute(self, commands):

        try:
            output = self.run_commands(commands)
            self.execution_output['output'] = output
        except:
            error = "Internal error\n" + traceback.format_exc()
            self.execution_output['error'] = error
            self.log += error
        finally:
            self.execution_output['progress'] = 100
        return   
    
    def load_image(self, access_server, file_path, filename):
        if file_path:
            full_path = file_path + '/' + filename
        else:
            full_path = filename
        try:
            #print("Sending tftp command")
            self.connection.send('copy tftp: flash:\n')
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
                tmp = self.get_prompt()
                self.execution_output['file_found'] = tmp
                self.log += tmp

                #print("Received prompt after file_found")
                self.connection.send(f"verify /md5 flash:{filename}\n")
                tmp = self.get_prompt()
                #print("Got prompt after verify")
                self.execution_output['md5_check'] = tmp
                self.log += tmp
                #self.log += self.execution_output['file_found']
            else:
                self.execution_output['status'] = False
                self.execution_output['error'] = f"File not loaded\nLogs:\n{self.log}"
        except:
            self.execution_output['error'] = "Internal error\n" + traceback.format_exc()

    def add_boot(self, old_file, new_file):

        self.connection.send("conf t\n")
        self.log += self.get_prompt()
        self.connection.send("no boot system\n")
        self.log += self.get_prompt()
        self.connection.send(f"boot system {new_file}\n")
        self.log += self.get_prompt()
        self.connection.send(f"boot system {old_file}\n")
        self.log += self.get_prompt()
        self.connection.send(f"exit\n")
        self.log += self.get_prompt()
        self.connection.send("wr mem\n\n")
        self.log += self.get_prompt(timeout=30)
        return

    def reload(self):
        #print("Reloading now")
        self.connection.send("reload\n\n\n")
        self.log += self.connection.recv(1000).decode('ascii')

    def terminate(self):
        self.client.close()