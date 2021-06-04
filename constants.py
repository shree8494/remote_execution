get_version = {
    'Cisco IOS': 'show version',
    'Cisco NXOS': 'show version'
}

get_boot_cmd = {
    'cisco ios': 'show run | i boot'
}

get_dir = {
    'Cisco IOS': 'show flash:',
    'Cisco NXOS': ''
}

predeployment_cmds={
    'switch':
        {'Cisco IOS': ['show interface status','show ip interface brief'],
         'Cisco NXOS': []},
    'router':
        {'Cisco IOS': ['show ip interface brief','show ip route'],
         'Cisco NXOS': ['show ip interface brief','show ip route']}
}

show_version = {
    'Cisco IOS': r"(?P<version>Version\s\S[^,|\r|\n|\r\n]+)"
    }

show_boot = {
    'cisco ios': r"boot system (?P<boot>\S[^,|\r|\n|\r\n]+)"
}