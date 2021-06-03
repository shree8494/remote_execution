import re
import constants

def get_version(show_version_raw, oem):

    pattern = re.compile(constants.show_version[oem])
    result = re.search(pattern, show_version_raw)
    if result:
        version = result.group('version')
    else:
        raise Exception('Pattern not matched')
    return version