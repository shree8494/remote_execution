# -*- coding: utf-8 -*-
"""
Created on Mon May 13 22:16:33 2019

@author: shubha.ks
"""

import re

regex = r".*Software \(([a-zA-Z0-9-]+)\),.*Version ([0-9]+\.[0-9])+"

test_str = "Cisco IOS Software, C2600 Software (C2600-IPBASEK9-M), Version 12.4(5a), RELEASE SOFTWARE (fc3)"

matches = re.finditer(regex, test_str, re.MULTILINE)
version=""
for matchNum, match in enumerate(matches, start=1):

    print ("Match {matchNum} was found at {start}-{end}: {match}".format(matchNum = matchNum, start = match.start(), end = match.end(), match = match.group()))

    for groupNum in range(0, len(match.groups())):
        groupNum = groupNum + 1
        print ()
        version=version + " " + "{group}".format(group = match.group(groupNum))
print(version)
# Note: for Python 2.7 compatibility, use ur"" to prefix the regex and u"" to prefix the test string and substitution.