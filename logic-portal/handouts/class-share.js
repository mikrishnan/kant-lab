/* ═══════════════════════════════════════════════════════════════════════════
   THE CLASS'S COPY OF THE HANDOUTS: where it is kept (read by handout-tray.js)

   "Show this handout to the class", in Instructor view, puts a copy of the handout where
   everyone with the class password finds it, on their own Handouts page, under "Shown to
   the class", to read but not to change. What its maker changes afterwards follows by
   itself, a few seconds later.

   The copy is not kept in kant-lab, which is public, but in the seminar's private board
   repository, beside the board, as one file, handouts/class.json, encrypted with the class
   password as well (handouts/lock.js). Every change to it is a commit there.

   The page reaches that repository with the board's GitHub token, which can touch that
   repository and nothing else. `key` is that token encrypted with the class password, so
   that the class password is all anyone needs: the page opens it only once someone has
   given the password. Until `key` is filled in, a browser that has opened the board (and
   so has the token from the board's own password) can still reach the copy.

   `key` is made by the page itself: the first time a handout is shown to the class, it
   writes handouts/class-key.json into the board repository, and that file's contents go
   here, as they stand. Make it again the same way when the board's token is renewed
   (board.html#setup): the page notices that the key no longer works and writes a new one.

   `site` is the address the copy is changed from. Anywhere else (a preview link, a copy of
   the portal on someone's computer) the page reads the class's copy but changes nothing.
   ═══════════════════════════════════════════════════════════════════════════ */
Object.defineProperty(window, 'KANTLAB_CLASS_SHARE', { enumerable: true, value: Object.freeze({
  owner: 'mikrishnan',
  repo: 'kant-lab-board',
  branch: 'main',
  path: 'handouts/class.json',
  keyPath: 'handouts/class-key.json',
  site: 'mikrishnan.github.io',
  pollSeconds: 20,     // how often an open Handouts page asks whether the class's copy has changed
  saveSeconds: 4,      // how long after the last change a shown handout is sent on
  key: null,
}) });
