#!/usr/bin/env python3
"""Set the class password the handouts are locked with.

    python3 make-lock.py

It asks for the password twice, and writes into lock.js, beside this file, a new random salt
and the password's fingerprint: 600,000 rounds of PBKDF2-SHA256 over the password and the
salt, hashed once more. The password itself is written nowhere, here or in the repository, and
cannot be read back from what is written.

The handouts already published stay locked with the password they were published with: after
a change, publish each again from the Handouts page, and tell the class the new password.
"""
import base64, getpass, hashlib, os, re, sys, unicodedata

ITER = 600_000
HERE = os.path.dirname(os.path.abspath(__file__))
LOCK = os.path.join(HERE, 'lock.js')

pw = getpass.getpass('The class password: ')
if pw != getpass.getpass('Again: '):
    sys.exit('The two did not match. Nothing was changed.')
pw = unicodedata.normalize('NFC', pw.strip())
if len(pw) < 6:
    sys.exit('Use at least six characters. Nothing was changed.')
salt = os.urandom(16)
bits = hashlib.pbkdf2_hmac('sha256', pw.encode('utf-8'), salt, ITER, 32)
check = hashlib.sha256(b'kantlab-handouts-check' + bits).digest()
line = "  const L = { v: 1, salt: '%s', iter: %d, check: '%s' };" % (
    base64.b64encode(salt).decode(), ITER, base64.b64encode(check).decode())
src = open(LOCK, encoding='utf-8').read()
new, n = re.subn(r"^  const L = \{ v: 1, salt: '[^']*', iter: \d+, check: '[^']*' \};$", line, src, flags=re.M)
if n != 1:
    sys.exit('Could not find the line to change in lock.js. Nothing was changed.')
open(LOCK, 'w', encoding='utf-8').write(new)
print('lock.js now holds the new lock. Publish the handouts again, and bump lock.js?v= in ../index.html.')
