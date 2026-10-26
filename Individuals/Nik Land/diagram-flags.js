/* ─────────────────────────────────────────────────────────────────────────────
   Diagrams in immediate-inferences.html that readers have flagged as
   inaccurate. Written and read exactly as miscategorisations.js is: by the
   page's "Send to GitHub" through .github/workflows/sync-inference-flags.yml
   on the live site, by "Update the flag files" from disk, or by hand.

   A diagram depends on the kind the example is viewed under (a passage filed
   under two kinds can be drawn two ways), so an entry is one example under
   one kind.

   Fields of an entry
     id           the example's id in immediate-inference-examples.js
     src          blomberg | wiener | busolt | refl16, as on the example
     block | r    where the example is, as on the example
     drawn        what the diagram was drawn from when it was first flagged:
                    kind        the kind it was drawn for
                    type        spheres | square | mediate | map | schema
                    diagram     the example's `diagram` readings, or null
                    judgements  each judgement's t, role, form and sp
     reports      one per time it was flagged, oldest first, as in
                  miscategorisations.js, except that problem is any of:
                    terms      the concept names
                    reading    how a judgement is read as subject and
                               predicate
                    drawing    what is shaded, or where
                    type       the wrong kind of diagram
                    other
     replacement  what should be drawn instead: { diagram, judgements }, in
                  the shape of `drawn`. Left empty for now.
   ───────────────────────────────────────────────────────────────────────────── */

const DIAGRAM_FLAGS = [
];
