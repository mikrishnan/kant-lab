/* ─────────────────────────────────────────────────────────────────────────────
   The kinds of nothing: where the one shared board is kept (read by board.html).

   The board is the same for everyone in the seminar. It is not kept in kant-lab, which is
   public, but in a private repository of its own, as one file, board.json, with its
   photographs in photos/. Every save is a commit there, so that repository's history is
   the board's history.

   The page reaches it with a GitHub token that can touch that repository and nothing else.
   The token is not here in the clear: `key` is the token encrypted with the seminar's
   board password (PBKDF2-SHA-256, then AES-GCM), so the page can use it only once someone
   types the password. The password itself is written nowhere: not here, not in a commit,
   not in the README. It is told in the seminar.

   `expires` is when the token runs out. From six weeks before, the page warns everyone who
   opens the board, weekly, then daily, then every time; after it, nobody can open the board
   until a new key is made.

   `key` is null until the board is set up. board.html#setup makes it: paste the token and
   the password there, and it writes the starting board into the repository if it is empty
   and gives back this file with `key` filled in. Make a new key the same way when the token
   expires, or to change the password.

   `site` is the address the board saves from. Anywhere else (a preview link, a copy on
   someone's computer) the page shows the shared board but saves nothing to it, unless the
   person there chooses to let it.
   ───────────────────────────────────────────────────────────────────────────── */

const STUDY_BOARD_SHARED = {
  owner: 'mikrishnan',
  repo: 'kant-lab-board',
  branch: 'main',
  path: 'board.json',
  site: 'mikrishnan.github.io',
  pollSeconds: 5,      // how often the page asks GitHub whether anyone has saved
  saveSeconds: 2.5,    // how long after the last change the page saves
  expires: '2027-02-11T17:03:20Z',   // when the token, and so the key, stops working: the page warns before
  key: {"v":1,"iter":310000,"salt":"wSp7kocp5N8u2HbSqKcpkQ==","iv":"a4KY/1zWAbGx3iMq","data":"V35uPsggNhLGIE/5lB3hDRry1/BzeFpeejzPv2bdthxyjykOBV+uq33O+AhyWG0A9wWaAAjzkr3pRFTCd5gHal2SG5qWLovYsa9qBvTaxM4Z6yXhtW+4XsVjpyHtrAlOaESGyQ/ZYapigaeZCw=="},
};
