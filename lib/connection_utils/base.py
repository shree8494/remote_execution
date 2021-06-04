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
        #self.commands = single_device_params['commands']
        self.conn_type = single_device_params['deviceConnectionType']
