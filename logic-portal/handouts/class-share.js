/* ═══════════════════════════════════════════════════════════════════════════
   THE CLASS'S COPY OF THE HANDOUTS: where it is kept (read by handout-tray.js)

   "Show this handout to the class", in Instructor view, puts a copy of the handout where
   everyone with the class password finds it, on their own Handouts page, under "Shown to
   the class", to read but not to change. What its maker changes afterwards follows by
   itself, a few seconds later.

   The copy is one file, encrypted with the class password (handouts/lock.js), as the class's
   handouts were before: class.json, on a branch of this repository of its own, `branch`,
   which is never merged. So the class password is all anyone needs to read it, and the
   copy's comings and goings never touch main or the site.

   To change it, the page needs a GitHub token of its maker's own, for this repository with
   Contents: Read and write. It is pasted once into Instructor view, the first time a
   handout is shown, and kept in that browser only, encrypted with the class password. It is
   not here, nor anywhere in the repository.

   `site` is the address the copy is changed from. Anywhere else (a preview link, a copy of
   the portal on someone's computer) the page reads the class's copy but changes nothing.
   ═══════════════════════════════════════════════════════════════════════════ */
Object.defineProperty(window, 'KANTLAB_CLASS_SHARE', { enumerable: true, value: Object.freeze({
  owner: 'mikrishnan',
  repo: 'kant-lab',
  branch: 'class-handouts',
  path: 'class.json',
  site: 'mikrishnan.github.io',
  pollSeconds: 60,     // how often an open Handouts page asks whether the class's copy has changed
  saveSeconds: 4,      // how long after the last change a shown handout is sent on
}) });
