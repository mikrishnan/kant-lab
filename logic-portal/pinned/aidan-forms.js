/* ─────────────────────────────────────────────────────────────────────────────
   Aidan Chong's forms of judgment, with the terms that name them
   PINNED COPY for the Logic Portal, made by build-pins.py on 2026-10-25
   from Individuals/Aidan/judgment-finder.html (its `B`, `JF_FORMS`).
   The declarations verbatim, wrapped in a function so their names stay private.
   Do not hand-edit: change the source, then rerun build-pins.py.
   ───────────────────────────────────────────────────────────────────────────── */
const PORTAL_PIN_AIDAN = (() => {
const B = '(?<![\\p{L}])';
const JF_FORMS = [
  { id: 'universal', group: 'Quantity', axis: 1, de: 'allgemeine', la: 'universale', en: 'universal',
    def: 'The predicate holds of the whole sphere of the subject — “All men are mortal.”',
    term: new RegExp(B + '(?:allgemein\\p{L}*|universal\\p{L}*|generalia)', 'iu') },
  { id: 'particular', group: 'Quantity', axis: 1, de: 'besondere', la: 'particulare', en: 'particular',
    def: 'The predicate holds of part of the sphere — “Some men are learned.”',
    term: new RegExp(B + '(?:besonder\\p{L}*|particul\\p{L}*|partikular\\p{L}*|specialia)', 'iu') },
  { id: 'singular', group: 'Quantity', axis: 1, de: 'einzelne', la: 'singulare', en: 'singular',
    def: 'The subject is a single thing — “Caius is mortal.”',
    term: new RegExp(B + '(?:singular\\p{L}*|einzel\\p{L}*|individual\\p{L}*)', 'iu') },
  { id: 'affirmative', group: 'Quality', axis: 2, de: 'bejahende', la: 'affirmativum', en: 'affirmative',
    def: 'The predicate is attributed to the subject — “The soul is mortal.”',
    term: new RegExp(B + '(?:bejah\\p{L}*|affirmat\\p{L}*)', 'iu') },
  { id: 'negative', group: 'Quality', axis: 2, de: 'verneinende', la: 'negativum', en: 'negative',
    def: 'The predicate is denied of the subject — “The soul is not mortal.”',
    term: new RegExp(B + '(?:verneinen\\p{L}*|verneinung\\p{L}*|negativ\\p{L}*|negat\\p{L}*)', 'iu') },
  { id: 'infinite', group: 'Quality', axis: 2, de: 'unendliche', la: 'infinitum', en: 'infinite',
    def: 'An affirmation with a negated predicate — “The soul is non-mortal.”',
    term: new RegExp(B + '(?:unendlich\\p{L}*|infinit\\p{L}*|limitativ\\p{L}*)', 'iu') },
  { id: 'categorical', group: 'Relation', axis: 3, de: 'kategorische', la: 'categoricum', en: 'categorical',
    def: 'A predicate is related to a subject, unconditionally.',
    term: new RegExp(B + '(?:kategorisch\\p{L}*|categorisch\\p{L}*|categoric\\p{L}*)', 'iu') },
  { id: 'hypothetical', group: 'Relation', axis: 3, de: 'hypothetische', la: 'hypotheticum', en: 'hypothetical',
    def: 'One judgment is related to another as ground to consequence — “If … then …”.',
    term: new RegExp(B + '(?:hypothetisch\\p{L}*|hypothetic\\p{L}*)', 'iu') },
  { id: 'disjunctive', group: 'Relation', axis: 3, de: 'disjunktive', la: 'disjunctivum', en: 'disjunctive',
    def: 'Judgments related as parts of one divided sphere — “Either … or …”, and equally a divided predicate without it: “A is b or c”, “A is b or non-b”.',
    term: new RegExp(B + '(?:disjunctiv\\p{L}*|disjunkt\\p{L}*|disjunct\\p{L}*)', 'iu') },
  { id: 'problematic', group: 'Modality', axis: 4, de: 'problematische', la: 'problematicum', en: 'problematic',
    def: 'Affirmation or denial taken as merely possible.',
    term: new RegExp(B + '(?:problematisch\\p{L}*|problematic\\p{L}*)', 'iu') },
  { id: 'assertoric', group: 'Modality', axis: 4, de: 'assertorische', la: 'assertoricum', en: 'assertoric',
    def: 'Affirmation or denial taken as actual.',
    term: new RegExp(B + '(?:assertorisch\\p{L}*|assertoric\\p{L}*|assertor\\p{L}*)', 'iu') },
  { id: 'apodictic', group: 'Modality', axis: 4, de: 'apodiktische', la: 'apodicticum', en: 'apodictic',
    def: 'Affirmation or denial taken as necessary.',
    term: new RegExp(B + '(?:apodictisch\\p{L}*|apodiktisch\\p{L}*|apodict\\p{L}*|apodikt\\p{L}*)', 'iu') }
];
return JF_FORMS;
})();
