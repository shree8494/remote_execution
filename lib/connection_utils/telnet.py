import time
import traceback
import telnetlib
from .base import Connection

class TelnetConnection(Connection):

    USER_TIMEOUT = 10
    PROMPT = {'linux': '~$',
              'cisco': '#', 'cisco ios':'#'}
    PW_PROMPT = {'linux': 'password:',
                 'cisco': 'Password:', 'cisco ios': 'Password:'}

    def __init__(self, single_device_params):
        super().__init__(single_device_params)

    def initialize(self):

        self.execution_output = {}
        self.log = ''

        self.log += f"\r\n-------------------{self.device}--------------\r\n"
        timeout = self.USER_TIMEOUT
        try:
            if self.is_jmp:
                self.tn = telnetlib.Telnet(self.jmp_server,timeout=timeout)
                self.log += self.get_prompt(prompt="login:")
                #self.log += self.tn.read_until(b"login:",timeout=timeout).decode('ascii')    
                self.tn.write(self.js_user.encode('ascii') + b"\n")

                self.log += self.get_prompt(prompt="Password:")
                #self.log += self.tn.read_until(b"Password:",timeout=timeout).decode('ascii')
                self.tn.write(self.js_password.encode('ascii') + b"\n") 

                self.log += self.get_prompt(prompt="~$")
                #self.log += self.tn.read_until(b"~$",timeout=timeout).decode('ascii')
                #print(f"Connecting to {device}")

                self.tn.write(f"telnet {self.device}\n".encode('ascii'))

                self.log += self.get_prompt(prompt="Username:")
                #self.log += self.tn.read_until(b"Username:",timeout=timeout).decode('ascii')
                self.tn.write(self.user.encode('ascii') + b"\n")

                self.log += self.get_prompt(prompt="Password:")
                #self.log += self.tn.read_until(b"Password:",timeout=timeout).decode('ascii')
                self.tn.write(self.password.encode('ascii') + b"\n")

                self.log += self.get_prompt()
                #self.log += self.tn.read_until(b"#",timeout=timeout).decode('ascii')
                #print("Got prompt\n")
            else:
                self.tn = telnetlib.Telnet(self.device,timeout=timeout)

                self.log += self.get_prompt(prompt="Username:")
                #self.log += self.tn.read_until(b"Username:",timeout=timeout).decode('ascii')
                self.tn.write(self.user.encode('ascii') + b"\n")

                self.log += self.get_prompt(prompt="Password:")
                #self.log += self.tn.read_until(b"Password:",timeout=timeout).decode('ascii')
                self.tn.write(self.password.encode('ascii') + b"\n")

                self.log += self.get_prompt()
                #self.log += self.tn.read_until(b"#",timeout=timeout).decode('ascii')
        except:
            error = f"Error connecting to {self.device}" + traceback.format_exc()
            self.execution_output['error'] = error
            self.log += error

    def get_prompt(self, prompt=None, timeout=None):

        if not prompt:
            prompt = self.PROMPT[self.oem]
        if not timeout:
            timeout = self.USER_TIMEOUT
        prompt_bin = prompt.encode('ascii')
        out = self.tn.read_until(prompt_bin, timeout=self.USER_TIMEOUT).decode('ascii')
        if not out.endswith(prompt):
            raise Exception("Prompt timeout")
        else:
            return out

    def run_commands(self, commands):
        out_dict = {}
        self.tn.write(b"terminal length 0\n")
        self.log += self.get_prompt()
        #self.log += self.tn.read_until(b"#",timeout=self.USER_TIMEOUT).decode('ascii')          
        for command in commands:
            #print(f"Sending command {command}")
            self.log += f"\r\n------------{command} Output-------------\r\n"
            self.tn.write(command.encode('ascii')+b"\n")
            tmp = self.get_prompt()
            #tmp = self.tn.read_until(b"#",timeout=self.USER_TIMEOUT).decode('ascii')
            self.log += tmp
            out_dict[command] = '\n'.join(tmp.split('\n')[1:-1])
            time.sleep(1)
        
        return out_dict

    def load_image(self, access_server, file_path, filename):

        if file_path:
            full_path = file_path + '/' + filename
        else:
            full_path = filename
        try:
            #print("Sending tftp command")
            self.tn.write(b"copy tftp: flash: vrf MGMT\n")
            self.log += self.get_prompt(prompt=']?')
            #print(f"Entering access server: {access_server}")
            self.tn.write(access_server.encode('ascii') + b"\n")
            self.log += self.get_prompt(prompt=']?')
            #print(f"Entering path now: {full_path}")
            self.tn.write(full_path.encode('ascii') + b"\n")
            self.log += self.get_prompt(prompt=']?')
            #print("Enter many times")
            self.tn.write(b"\n\n\n")
            buff = self.get_prompt(timeout=180)
            #print(f"Received final: {buff}")
            self.log += buff
            if not r'%Error' in buff:
                self.execution_output['load_image_status'] = True
                #print(f"Sending command: 'show flash: | i {filename}'")
                command = f"show flash: | i {filename}\n"
                self.tn.write(command.encode('ascii') + b"\n")
                self.execution_output['file_found'] = self.get_prompt()
                #print("Received prompt after file_found")
                self.log += self.execution_output['file_found']
            else:
                self.execution_output['status'] = False
                self.execution_output['error'] = f"File not loaded\nLogs:\n{self.log}"
        except:
            self.execution_output['status'] = False
            self.execution_output['error'] = "Internal error\n" + traceback.format_exc()

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

    def reload(self):
        self.tn.write(b"reload\n\n\n")
        self.log += self.tn.read_all().decode('ascii')
    
    def terminate(self):
        self.tn.close()