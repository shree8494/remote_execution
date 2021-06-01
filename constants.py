get_version = {
    'Cisco IOS': 'show version',
    'Cisco NXOS': 'show version'
}

show_version = {
    'Cisco IOS': r"(?P<version>Version\s\d+\.\d+)"
    }