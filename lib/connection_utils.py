import paramiko
import time
import psycopg2
import dbconstants
import datetime
import uuid
import traceback
import telnetlib

class Connection(object):

    def __init__(self, execution_params):
        
        self.jmp_server = execution_params['jmpServerIp']
        self.js_user = execution_params["jmpServerUsername"]
        self.js_password = execution_params["jmpServerPassword"]
        #self.jmpServerType = 'linux'
        self.oem = execution_params['OEM'].lower()
        self.user = execution_params['deviceUsername']
        self.password = execution_params['devicePassword']
        self.is_jmp = execution_params['isJumpServer']
        self.addresses = execution_params['deviceAddresses']
        self.commands = execution_params['commands']
        self.conn_type = execution_params['deviceConnectionType']
        #self.output_filename = execution_params['output_filename']
        self.execution_output = {'output':'',
                                 'error':'',
                                 'progress':''}
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
        out = self.get_prompt(deviceType=self.oem)

        for command in self.commands:
            out += f"\r\n------------{command} Output-------------\r\n"
            #print(f"Sending command: {command}")
            self.connection.send(command + '\n')
            out += self.get_prompt(deviceType=self.oem)
            #print(f"Received for command {command}:\n{out}")
            #output[command] = '\n'.join(out.split('\n')[1:-1])
        self.connection.send('exit\n')
        return out

    def execute_jmp_ssh(self):
        conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)

        sql_update_log = """INSERT INTO public.netauto_log("Run_ID","Netauto_Module","IP_Hostname","OEM","Executed_Date","Executed_By","Run_log","Connection_Type")
             		   VALUES(%s,%s,%s,%s,%s,%s,%s,%s);"""
        out = f"\r\n-------------------JumpServer--------------\r\n"
        out += self.get_connection(host=self.jmp_server,
                                   username=self.js_user,
                                   password=self.js_password,
                                   type=self.js_type) + "\r\n"
        unique_uuid=uuid.uuid4().hex
        ip_hostname=""
        for device in self.addresses:
            out += f"\r\n-------------------{device}--------------\r\n"
            #output = {}
            error = ''

            try:
                #print(f"Connecting to {device}\n")
                self.connection.send(f"ssh -o \"StrictHostKeyChecking=no\" \
                {self.user}@{device}\n")

                time.sleep(1)
                out += self.get_prompt(deviceType=self.oem,
                                      enterPassword=True,
                                      password=self.password) + "\r\n"
                
                out += self.run_commands_ssh()
                time.sleep(1)

            except:
                error = "Internal error" + traceback.format_exc()
                out+=error
            finally:
                progress = 100
                self.execution_output[device] = {'output': out,
                                                 'error': error,
                                                 'progress': 100}
                self.log = out
                ip_hostname+=device+","
                Update_EachIP_log = (unique_uuid,"Remote Command Execution" ,ip_hostname,self.oem,datetime.datetime.now(),"Admin",self.log,self.conn_type)
                cur=conn.cursor()
                cur.execute(sql_update_log, Update_EachIP_log)
                conn.commit()
                cur.close()
                conn.close()
        self.client.close()
        return None

    def execute_direct_ssh(self):

        out = ""
        unique_uuid=uuid.uuid4().hex
        ip_hostname=""
        for device in self.addresses:
            out += f"\r\n-------------------{device}--------------\r\n"
            try:
                conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)

                sql_update_log = """INSERT INTO public.netauto_log("Run_ID","Netauto_Module","IP_Hostname","OEM","Executed_Date","Executed_By","Run_log","Connection_Type")
             		   VALUES(%s,%s,%s,%s,%s,%s,%s,%s);"""
                out += self.get_connection(host=device,
                                    username=self.user,
                                    password=self.password,
                                    type=self.oem) + "\r\n"
                error = ""
                out += self.run_commands_ssh()
            except:
                error = "Internal error" + traceback.format_exc()
                out+=error
            finally:
                progress = 100
                self.execution_output[device] = {'output': out,
                                                 'error': error,
                                                 'progress': 100}
                self.log = out
                ip_hostname+=device+","
                Update_EachIP_log = (unique_uuid,"Remote Command Execution" ,ip_hostname,self.oem,datetime.datetime.now(),"Admin",self.log,self.conn_type)
                cur=conn.cursor()
                cur.execute(sql_update_log, Update_EachIP_log)
                conn.commit()
                cur.close()
                conn.close()
        self.client.close()
        return None

    def execute(self):

        if self.is_jmp:
            self.js_type='linux'
            self.execute_jmp_ssh()
        else:
            self.execute_direct_ssh()
        return self.log

class TelnetConnection(Connection):

    USER_TIMEOUT = 10

    def __init__(self, execution_params):
        super().__init__(execution_params)

    def run_commands_telnet(self):
        out = b""
        self.tn.write(b"terminal length 0\n")
        out += self.tn.read_until(b"#",timeout=self.USER_TIMEOUT)           
        for command in self.commands:
            #print(f"Sending command {command}")
            out += f"\r\n------------{command} Output-------------\r\n".encode('ascii')
            self.tn.write(command.encode('ascii')+b"\n")
            out += self.tn.read_until(b"#",timeout=self.USER_TIMEOUT)
            time.sleep(1)
        
        return out

    def execute_jmp_telnet(self):
        conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)

        sql_update_log = """INSERT INTO public.netauto_log("Run_ID","Netauto_Module","IP_Hostname","OEM","Executed_Date","Executed_By","Run_log","Connection_Type")
             		   VALUES(%s,%s,%s,%s,%s,%s,%s,%s);"""
        timeout = self.USER_TIMEOUT
        error = ""

        out = b"\r\n-------------------JumpServer--------------\r\n"
        self.tn = telnetlib.Telnet(self.jmp_server,timeout=timeout)
        out += self.tn.read_until(b"login:")     
        self.tn.write(self.js_user.encode('ascii') + b"\n")
        out += self.tn.read_until(b"Password:")
        self.tn.write(self.js_password.encode('ascii') + b"\n")    
        out += self.tn.read_until(b"~$")
        unique_uuid=uuid.uuid4().hex
        ip_hostname="" 
        for device in self.addresses:
            try:
                
                #print(f"Connecting to {device}")
                out += f"\r\n-------------------{device}--------------\r\n".encode('ascii')
                self.tn.write(f"telnet {device}\n".encode('ascii'))
                out += self.tn.read_until(b"Username:")
                
                self.tn.write(self.user.encode('ascii') + b"\n")
                out += self.tn.read_until(b"Password:")
                
                self.tn.write(self.password.encode('ascii') + b"\n")
                out += self.tn.read_until(b"#",timeout=timeout)
                #print("Got prompt\n")
                out += self.run_commands_telnet()
                '''
                self.tn.write(b"terminal length 0\n")
                out += self.tn.read_until(b"#")   
                time.sleep(1)      
                for command in self.commands:
                    print(f"Sending command {command}")
                    out += f"\r\n------------{command} Output-------------\r\n".encode('ascii')
                    self.tn.write(command.encode('ascii')+b"\n")
                    #buff = self.tn.read_until(b"#",timeout=self.USER_TIMEOUT)
                    print("Received:\n")
                    #print(buff.decode('ascii'))
                    out += self.tn.read_until(b"#",timeout=self.USER_TIMEOUT)
                    time.sleep(1)
                '''
                self.tn.write(b"exit\n")
                time.sleep(1)

            except:
                error = "Internal error" + traceback.format_exc()
                out+=error
            finally:
                self.execution_output[device] = {'output': out.decode('ascii'),
                                                 'error': error,
                                                 'progress': 100}
                self.log = out.decode('ascii')
                ip_hostname+=device+","
                Update_EachIP_log = (unique_uuid,"Remote Command Execution" ,ip_hostname,self.oem,datetime.datetime.now(),"Admin",self.log,self.conn_type)
                cur=conn.cursor()
                cur.execute(sql_update_log, Update_EachIP_log)
                conn.commit()
                cur.close()
                conn.close()
        return None

    def execute_direct_telnet(self):

        timeout = self.USER_TIMEOUT
        error = ""
        out = b""
        unique_uuid=uuid.uuid4().hex
        ip_hostname=""
        for device in self.addresses:
            try:
                #print(f"connecting to {device}")
                conn=psycopg2.connect(**dbconstants.DBCONNECTION_PARAMS)

                sql_update_log = """INSERT INTO public.netauto_log("Run_ID","Netauto_Module","IP_Hostname","OEM","Executed_Date","Executed_By","Run_log","Connection_Type")
             		   VALUES(%s,%s,%s,%s,%s,%s,%s,%s);"""
                out += f"\r\n-------------------{device}--------------\r\n".encode('ascii')
                self.tn = telnetlib.Telnet(device,timeout=timeout)
                out += self.tn.read_until(b"Username:")
                self.tn.write(self.user.encode('ascii') + b"\n")
                out += self.tn.read_until(b"Password:")
                self.tn.write(self.password.encode('ascii') + b"\n")
                out += self.tn.read_until(b"#",timeout=timeout)
                out += self.run_commands_telnet()
                self.tn.write(b"exit\n")
                time.sleep(1)

            except:
                error = "Internal error" + traceback.format_exc()
                out+=error
            finally:
                self.execution_output[device] = {'output': out.decode('ascii'),
                                                 'error': error,
                                                 'progress': 100}
                self.log = out.decode('ascii')
                ip_hostname+=device+","
                Update_EachIP_log = (unique_uuid,"Remote Command Execution" ,ip_hostname,self.oem,datetime.datetime.now(),"Admin",self.log,self.conn_type)
                cur=conn.cursor()
                cur.execute(sql_update_log, Update_EachIP_log)
                conn.commit()
                cur.close()
                conn.close()
        return None
        
    def execute(self):

        if self.is_jmp:
            self.js_type='linux'
            self.execute_jmp_telnet()
        else:
            self.execute_direct_telnet()
        self.tn.close()
        return self.log
