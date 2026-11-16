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
reaches the students within five minutes. **Stop showing it**, or deleting the handout, takes it
away. Margin notes and the trash are left out.

The copy is one file, `class.json`, encrypted with the class password, as the class's handouts
were before. It is kept on a branch of this repository of its own, `class-handouts`, which is
never merged, so that its many small changes never touch `main` or the site. The class password
is all anyone needs to read it: the page fetches it from GitHub without any token, through
GitHub's API the first time and from GitHub's raw file server after that. That server can be up to
five minutes behind, which is why a change takes that long to reach the students.

Changing it needs a GitHub token of its maker's own, for this repository, with **Contents: Read and
write**. The first time a handout is shown, Instructor view says how to make one and asks for it.
It is kept in that browser only, encrypted with the class password, and never in the repository.
If that browser's data is cleared, it is asked for again, so keep a copy in a password manager.
**Forget my GitHub key here**, in Instructor view, removes it. The class's copy changes only from
the live site.

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
`../index.html` and `../teaching/class-screen/index.html`, and tell the class. Then show each
handout to the class again, and paste the GitHub key again when asked: both were encrypted
with the old password.
