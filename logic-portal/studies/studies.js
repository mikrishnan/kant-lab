/* ─────────────────────────────────────────────────────────────────────────────
   The Logic Portal's studies, as its Studies tab lists them.

   A study is a sandbox for building research tools around one question, in a folder of
   its own here in studies/. The portal loads this file with a <script src> and shows one
   card per entry, in this order. Adding a study: add its folder (as kinds-of-nothing/ is
   set up) and one entry here, and add it to the table in README.md.

   Entry fields
     key       the study's folder name
     title     its name
     question  the question it is built around, in its own words
     begun     the date it was set up, YYYY-MM-DD
     parts     the pages it has, first the study's own page: { label, href, what }.
               href is relative to this folder.
     docs      its Markdown files, opened on GitHub: { label, href }, href relative to
               this folder.
   ───────────────────────────────────────────────────────────────────────────── */

const PORTAL_STUDIES = [
  {
    key: 'kinds-of-nothing',
    title: 'The kinds of nothing',
    question: 'What are the kinds of nothing — the nihil negativum and privativum, the ens rationis and imaginarium — in Baumgarten and in Kant, and how and why does Kant’s account change?',
    begun: '2026-11-04',
    parts: [
      { label: 'The study', href: 'kinds-of-nothing/index.html', what: 'the dossier and the starting points, with the portal beside them' },
      { label: 'The queue', href: 'kinds-of-nothing/queue.html', what: 'passages from the portal’s search, flagged by the seminar against the Critique’s table of nothing; joining needs a GitHub token' },
    ],
    docs: [
      { label: 'About it, and asking for a feature', href: 'kinds-of-nothing/README.md' },
      { label: 'Journal', href: 'kinds-of-nothing/journal.md' },
      { label: 'Puzzles', href: 'kinds-of-nothing/puzzles.md' },
    ],
  },
];
