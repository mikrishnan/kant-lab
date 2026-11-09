# Class handouts

[class.json](class.json) is the class's copy of the handouts, made in the Logic Portal by
**Share with the class** on the Handouts page and uploaded here. Anyone who opens **Handouts**
in the portal and gives the class password finds them under *The class's handouts*, to read,
open where each passage stands and export, but not to change: only the maker changes them, in
their own browser, and shares again.

**The handouts are the class's.** The file is encrypted with a key made from the class
password, so here, in the public repository, it reads as nothing:

```json
{ "kind": "kantlab-handout-locked", "v": 1, "iv": "…", "ct": "…" }
```

Inside, once opened with the class password, is `{ kind: 'kantlab-class-handouts', v, shared,
handouts }`, each handout as it stands in its maker's browser (`logic-portal/handout-tray.js`
describes the shape), without its maker's margin notes (marks of kind `mn`) or its trash.
Each passage keeps its words, its English if it has some, its label, note and marks, the words
left out of it (`"k": "cut"`), and its portal address (`textKey:id`), by which it opens where it
stands in the reader.

To update the class's copy, press **Share with the class** again and upload the new
`class.json` over the old one. To take it down, delete the file.

Before November 2026 a handout could be published on its own, for students to read at
`?handout=<name>`. That is gone; a file published that way may still be here, and nothing in
the portal reads it now.

## The class password

[lock.js](lock.js) checks it and does the encrypting. The password itself is written nowhere,
in the site or in this repository: `lock.js` holds only a random salt and the password's
fingerprint (600,000 rounds of PBKDF2-SHA256, hashed once more), from which it cannot be read
back. A password typed in is put through the same rounds; if it matches, the key it makes
opens the handouts. That key stays in the browser and cannot be exported.

What this cannot do: the site is public and runs in the reader's browser, so someone can
change the page in their own browser to skip the prompt. That gets them an empty Handouts
page of their own, and nothing of the class's, since the class's copy stays
encrypted. The encryption is only as strong as the password: a word anyone might guess can
be guessed, each guess costing a fraction of a second. A longer password is stronger.

**Remember on this computer**, in the prompt, keeps the key in that browser, so the
password is not asked again there. **Lock**, on the Handouts page, forgets it.

**To change the password**, run `python3 make-lock.py` here. It asks for the new password
twice and writes a new salt and fingerprint into `lock.js`; then raise `lock.js?v=` in
`../index.html` and `../teaching/class-screen/index.html`, press **Share with the class**
again and upload the new `class.json` (the one here stays locked with the old password), and tell
the class.
