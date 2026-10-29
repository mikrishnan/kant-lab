/* ─────────────────────────────────────────────────────────────────────────────
   Assignations suggested by readers of logik-concordance.html: a stretch of one of
   the logic lectures, and the paragraph of Meier or of Jäsche it should go with.
   Written by that page ("Suggest an assignation" → "Save"), which also reads this
   file back on load, so the suggestions show beside the concordance's own links,
   marked as suggested. It can be edited by hand.

   A suggestion does not change the concordance: logik-concordance.js is generated
   by build_logik_concordance.py and is untouched. This file is the record of what
   readers proposed, for whoever decides what goes into the extractor or the table.

   Fields of an entry
     id      a short unique id
     on      the date it was suggested, YYYY-MM-DD
     by      who, as typed; may be empty
     note    why; may be empty
     src     the lecture passage:
               k      bl | wi | bu, for Blomberg, Wiener, Busolt
               g0, g1 first and last block of the passage, as positions in that work's
                      flat list of blocks in reading order, rules included
               aa     the AA XXIV pages, as a string, for the human reader
               title  the section's title, for the same
               text   the passage's opening words, for the same
     to      what it is assigned to:
               kind   meier | jaesche
               ns     (meier) the Meier §§
               id     (jaesche) the id of the stretch in logik-concordance.js
                      (p021 for § 21; s05-03 for the third stretch of section s05)
               label  the stretch as the page labels it, for the human reader
   ───────────────────────────────────────────────────────────────────────────── */

const CONCORD_SUGGESTIONS = [
];
