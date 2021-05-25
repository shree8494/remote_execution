from lib.connection_utils import Connection

if __name__ == "__main__":
    in1={
        "jmpServerIp":"192.168.0.30",
        "jmpServerUsername":"admin",
        "jmpServerPassword":"admin",
        "jmpServerType": "linux",
        "OEM":"cisco",
        "deviceUsername":"admin",
        "devicePassword":"admin",
        "useJmpServer": True,
        #"deviceAddresses":["10.1.1.20"],
        "deviceAddresses":["10.1.1.20", "10.1.1.21"],
        #"commands":["show run", "show version"],
        "commands":["show run","show flash:","show version","show start"],
        "output_filename":"output/remote_execution_output.txt"
        }
    c = Connection(in1)
    c.execute()
    print(c.execution_output)