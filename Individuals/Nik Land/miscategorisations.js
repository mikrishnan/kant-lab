/* ─────────────────────────────────────────────────────────────────────────────
   Examples in immediate-inference-examples.js that a reader has flagged as
   miscategorised. Written by immediate-inferences.html ("Save
   miscategorisations.js"), which also reads this file back on load, so the
   flags it holds show on the cards. It can be edited by hand.

   An entry is a flag, and holds the categorisation as it stood when the flag
   was set. It does not change the example: immediate-inference-examples.js is
   untouched until someone applies a replacement there.

   Fields of an entry
     id           the example's id in immediate-inference-examples.js
     src          blomberg | wiener | busolt | refl16, as on the example
     block | r    where the example is, as on the example
     flaggedOn    the date the flag was set, YYYY-MM-DD
     old          the categorisation that was flagged, copied from the example:
                    kinds       the kinds it was filed under
                    named       whether the passage itself names the kind
                    sub         the species, or absent
                    judgements  the judgements, each with t, role, form,
                                formStated and whatever else the example gave
     replacement  the categorisation that should stand instead, in the same
                  shape as `old`. Left empty for now: no replacement has been
                  decided on, and the page does not fill it in.
   ───────────────────────────────────────────────────────────────────────────── */

const MISCATEGORISATIONS = [
];
