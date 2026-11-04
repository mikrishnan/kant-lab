/* ─────────────────────────────────────────────────────────────────────────────
   The kinds of nothing — where the queue keeps its flags.

   The queue (queue.html) does not keep its flags in kant-lab. They are in a private
   repository of their own, in a GitHub organisation for the seminar, so that each
   participant's token can be one that reaches nothing else, and so that readers' names
   and notes stay off this public site. The README's "The queue" says how that
   repository was set up and how a participant joins.

   In that repository, one queue is one folder:

     queues/<queue>/queue.json            the queue: its passages in order, and the
                                          searches that put them there
     queues/<queue>/flags/<login>.json    one reader's flags, written only by that reader

   The page reads and writes them through GitHub's API (api.github.com) and nowhere
   else. Change `owner` or `repo` here if the organisation or repository is renamed.
   ───────────────────────────────────────────────────────────────────────────── */

const STUDY_QUEUE_CONFIG = {
  owner: 'kant-lab-seminar',    // the organisation
  repo: 'queues',               // its private repository for the flags
  branch: 'main',
  queue: 'nihil-negativum',     // the folder under queues/ for this study's queue
  title: 'The kinds of nothing',
  pollSeconds: 20,              // how often the page asks GitHub whether anyone has saved
  saveSeconds: 2.5,             // how long after the last tick the page saves
  blind: true,                  // a reader sees what others ticked only after giving their own
};
