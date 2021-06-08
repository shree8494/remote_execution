get_version = {
    'cisco ios': 'show version',
    'cisco nxos': 'show version'
}

get_boot_cmd = {
    'cisco ios': 'show run | i boot'
}

get_dir = {
    'cisco ios': 'show flash:',
    'cisco nxos': ''
}

predeployment_cmds={
    'switch':
        {'cisco ios': ['show interface status','show ip interface brief'],
         'cisco nxos': []},
    'router':
        {'cisco ios': ['show ip interface brief','show ip route'],
         'cisco nxos': ['show ip interface brief','show ip route']}
}

postdeployment_cmds={
    'base':
        {'cisco ios': ['show log',
                       'show errdisable detect',
                       'show version',
                       'show file system',
                       'show process cpu',]},
    'switch':
        {'cisco ios': ['show interface status','show ip interface brief']},
    'router':
        {'cisco ios': ['show ip interface brief','show ip route']}
}

show_version = {
    'cisco ios': r"(?P<version>Version\s\S[^,|\r|\n|\r\n]+)"
    }

show_boot = {
    'cisco ios': r"boot system (?P<boot>\S[^,|\r|\n|\r\n]+)"
}