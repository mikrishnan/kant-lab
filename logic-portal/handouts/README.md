# Class handouts

This folder holds the class password's lock, [lock.js](lock.js), the script that makes it,
[make-lock.py](make-lock.py), and [class-share.js](class-share.js), which says where the handouts
shown to the class are kept. The handouts themselves are kept in the browser they are made in
(see the portal's README, *Handouts*), and shown to the class there in **Class view**, or on
everyone's own Handouts page by **Show this handout to the class**.

## Showing a handout to the class

In Instructor view, **Show this handout to the class** puts a copy of the handout where everyone
with the class password finds it, on their own Handouts page under **Shown to the class**, to read
but not to change. What its maker changes afterwards is sent on by itself a few seconds later, and
an open Handouts page asks for it every twenty seconds. **Stop showing it**, or deleting the
handout, takes it away. Margin notes and the trash are left out.

The copy is not kept here, since this repository is public. It is one file, `handouts/class.json`,
in the seminar's private board repository (`mikrishnan/kant-lab-board`), encrypted with the class
password as well. The page reaches it through GitHub's API with the board's token, which can touch
that repository and nothing else. The token reaches the page in one of two ways:

- **`key` in [class-share.js](class-share.js)**: the token, encrypted with the class password, so
  that the class password is all anyone needs.
- **The board's own**, in a browser where someone has opened the board with its password.

`key` is made by the page. The first time a handout is shown to the class with the board's own
token, the page writes `handouts/class-key.json` into the board repository and says so in
Instructor view. Copy that file's contents, as they stand, into `key` in `class-share.js`, and
raise `class-share.js?v=` in `../index.html`. Do the same when the board's token is renewed
(`board.html#setup`): the old key stops working, the page falls back on the board's token, and
writes a new `class-key.json`.

What this means: anyone with the class password can get the board's token out of `key`, as anyone
with the board's password can get it out of the board. The class's copy changes only from the live
site, and only from Instructor view, which is for Maya. Anyone there who presses it can show a
handout to the class, and Maya can take it away again with **Stop showing it**.

Two older files are still here: [class.json](class.json), from **Share with the class** as it
was until 13 November 2026, which uploaded every handout to this repository by hand, and a
handout published on its own for `?handout=<name>`. Both are encrypted with the class password.
Nothing in the portal reads them now, and they can be deleted.

## The class password

[lock.js](lock.js) checks it and does the encrypting. The password itself is written nowhere,
in the site or in this repository: `lock.js` holds only a random salt and the password's
fingerprint (600,000 rounds of PBKDF2-SHA256, hashed once more), from which it cannot be read
back. A password typed in is put through the same rounds; if it matches, the key it makes
opens the handouts. That key stays in the browser and cannot be exported.

What this cannot do: the site is public and runs in the reader's browser, so someone can
change the page in their own browser to skip the prompt. That gets them an empty Handouts
page of their own, and nothing of anyone else's: a handout shown to the class stays
encrypted. The encryption is only as strong as the password: a word anyone might guess can
be guessed, each guess costing a fraction of a second. A longer password is stronger.

**Remember on this computer**, in the prompt, keeps the key in that browser, so the
password is not asked again there. **Lock**, on the Handouts page, forgets it.

**To change the password**, run `python3 make-lock.py` here. It asks for the new password
twice and writes a new salt and fingerprint into `lock.js`; then raise `lock.js?v=` in
`../index.html` and `../teaching/class-screen/index.html`, and tell the class. Then make the
key in `class-share.js` again, as above, and show each handout to the class again: the old
copy and the old key were encrypted with the old password.
