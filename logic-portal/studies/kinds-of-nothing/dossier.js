/* ─────────────────────────────────────────────────────────────────────────────
   The kinds of nothing — the dossier.

   The passages the participants have decided belong to the study. Empty to start with:
   a passage comes in only when a participant asks for it, never because a tool found it.
   The starting points in starting-points.js are candidates, not members.

   Adding a passage: ask Claude, in this folder, to add it, giving its address (or its
   citation), your GitHub username and your reason. Claude appends one entry, keeping the
   field order below and ending it with a comma, so the next addition never has to edit a
   line someone else wrote. The repository is public: put your GitHub username here, not
   your name.

   Entry fields
     ref    the passage's address in the Logic Portal, textKey:id (as in starting-points.js,
            or the p= part of a portal link)
     cite   its citation, so the file reads without the portal: "§ 7, AA 17:24"
     added  the date it came in, YYYY-MM-DD
     by     the GitHub username of whoever decided it belongs
     why    the reason, in a few words: "defines it", "gives an example", "real opposition"
     note   optional: anything else worth keeping

   The shape matches the items of a class session (logic-portal/sessions/), so that the
   portal could one day open the dossier as an investigation.
   ───────────────────────────────────────────────────────────────────────────── */

const STUDY_DOSSIER = [
  // { ref: 'baumgarten:p7', cite: '§ 7, AA 17:24', added: '2026-11-05', by: 'github-username', why: 'defines it', note: '' },
];
