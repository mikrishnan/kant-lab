# Class handouts

Each `.json` file here is a handout published for students from the Logic Portal's
handout tray (**Publish for students** on the Handouts page). The portal shows one at
`../?handout=<file name without .json>`, and lists them all under **Read**, as class
handouts.

**The handouts are the class's.** The Handouts page, a published handout and the class
screen all ask for the class password first. A published file is encrypted with a key made
from that password, so here, in the public repository, it reads as nothing:

```json
{ "kind": "kantlab-handout-locked", "v": 1, "iv": "…", "ct": "…" }
```

Inside, once opened with the class password, is the handout's title, its headings and notes
as written, and each passage by its portal address (`textKey:id`), with its label and note if
it has them. An excerpt also keeps its words. A note keeps its `title`, if it has one. `english: true`, on the handout and on a
passage, says that the passage's English is shown beneath it, drawn live from the portal's
translations; an excerpt keeps the English of its own sentences, as `en`. A passage's
`marks` are its highlights and underlines, and the words left out of it (`"k": "cut"`), each
kept as its words and a little of what stands either side, so that they are found in the live
text and shown as […]. A passage joined from several also lists every
part's address and citation (`refs`, `cites`); its `ref` is the first part's. So students
read every passage live, from the portal's own texts.

To take a handout down, delete its file. To change one, publish it again from the tray: the
new file replaces the old. A file's name comes from the handout's title, and is not
encrypted.

## The class password

[lock.js](lock.js) checks it and does the encrypting. The password itself is written nowhere,
in the site or in this repository: `lock.js` holds only a random salt and the password's
fingerprint (600,000 rounds of PBKDF2-SHA256, hashed once more), from which it cannot be read
back. A password typed in is put through the same rounds; if it matches, the key it makes
opens the handouts. That key stays in the browser and cannot be exported.

What this cannot do: the site is public and runs in the reader's browser, so someone can
change the page in their own browser to skip the prompt. That gets them an empty Handouts
page of their own, and nothing of the class's, since the published handouts stay
encrypted. The encryption is only as strong as the password: a word anyone might guess can
be guessed, each guess costing a fraction of a second. A longer password is stronger.

**Remember on this computer**, in the prompt, keeps the key in that browser, so the
password is not asked again there. **Lock**, on the Handouts page, forgets it.

**To change the password**, run `python3 make-lock.py` here. It asks for the new password
twice and writes a new salt and fingerprint into `lock.js`; then raise `lock.js?v=` in
`../index.html` and `../teaching/class-screen/index.html`, publish every handout again
(those already published stay locked with the old password), and tell the class.
