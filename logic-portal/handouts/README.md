# Class handouts

This folder holds the class password's lock, [lock.js](lock.js), and the script that makes it,
[make-lock.py](make-lock.py). The handouts themselves are kept in the browser they are made in
(see the portal's README, *Handouts*), and shown to the class there in **Class view**.

Earlier ways of putting handouts in front of students are gone: a handout published on its own
for `?handout=<name>` (until November 2026), and **Share with the class**, which uploaded every
handout as one locked file, [class.json](class.json). Files made that way may still be here,
encrypted with the class password; nothing in the portal reads them now, and they can be
deleted.

## The class password

[lock.js](lock.js) checks it and does the encrypting. The password itself is written nowhere,
in the site or in this repository: `lock.js` holds only a random salt and the password's
fingerprint (600,000 rounds of PBKDF2-SHA256, hashed once more), from which it cannot be read
back. A password typed in is put through the same rounds; if it matches, the key it makes
opens the handouts. That key stays in the browser and cannot be exported.

What this cannot do: the site is public and runs in the reader's browser, so someone can
change the page in their own browser to skip the prompt. That gets them an empty Handouts
page of their own, and nothing of anyone else's, since handouts stay in the browser they
are made in. The encryption is only as strong as the password: a word anyone might guess can
be guessed, each guess costing a fraction of a second. A longer password is stronger.

**Remember on this computer**, in the prompt, keeps the key in that browser, so the
password is not asked again there. **Lock**, on the Handouts page, forgets it.

**To change the password**, run `python3 make-lock.py` here. It asks for the new password
twice and writes a new salt and fingerprint into `lock.js`; then raise `lock.js?v=` in
`../index.html` and `../teaching/class-screen/index.html`, and tell the class.
