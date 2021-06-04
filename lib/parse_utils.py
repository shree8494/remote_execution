import re
import constants

def get_version(show_version_raw, oem):

    pattern = re.compile(constants.show_version[oem])
    result = re.search(pattern, show_version_raw)
    if result:
        version = result.group('version')
    else:
        raise Exception('Version not found')
    return version

def get_boot(show_boot_raw, oem):

    pattern = re.compile(constants.show_boot[oem])
    result = re.search(pattern, show_boot_raw)
    if result:
        boot = result.group('boot')
    else:
        raise Exception('boot variable not found')
    return boot