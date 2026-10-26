/* ─────────────────────────────────────────────────────────────────────────────
   Jin's concepts of the logic lectures, with their wordings
   PINNED COPY for the Logic Portal, made by build-pins.py on 2026-10-25
   from Individuals/Jin/logik-transcripts.html (its `L`, `CONCEPTS`).
   The declarations verbatim, wrapped in a function so their names stay private.
   Do not hand-edit: change the source, then rerun build-pins.py.
   ───────────────────────────────────────────────────────────────────────────── */
const PORTAL_PIN_JIN = (() => {
const L = '\\p{L}*';
const CONCEPTS = [
  { id: 'kanon',      group: 'What logic is',            label: 'Kanon / Organon', forms: [['Kanon', '[ck]anon' + L], ['Organon', 'organon' + L]] },
  { id: 'gelehrsamkeit', group: 'What logic is',         label: 'Gelehrsamkeit', forms: [['Gelehrsamkeit', 'gel(?:eh|ah)rt?samkeit' + L], ['eruditio', 'erudit' + L]] },
  { id: 'popularitaet', group: 'What logic is',          label: 'Popularität', forms: [['Popularität', 'popul(?:[aä]|ai)r' + L]] },
  { id: 'horizont',   group: 'What logic is',            label: 'Horizont der Erkenntniß', forms: [['Horizont', 'horizont' + L]] },
  { id: 'aesthetik',  group: 'What logic is',            label: 'Geschmack / Ästhetik', forms: [['Geschmack', 'geschmack' + L], ['ästhetisch', '(?:ae|ä)sthet' + L]] },
  { id: 'verstand',   group: 'Faculties and sources',    label: 'Verstand', forms: [['Verstand', 'verstand(?!en(?!\\p{L}))' + L], ['intellectus', 'intellect' + L]] },
  { id: 'vernunft',   group: 'Faculties and sources',    label: 'Vernunft', forms: [['Vernunft', 'vernunft' + L]] },
  { id: 'sinnlichkeit', group: 'Faculties and sources',  label: 'Sinnlichkeit', forms: [['Sinnlichkeit', 'sinnlichkeit' + L], ['sinnlich', 'sinnlich(?!keit)' + L]] },
  { id: 'anschauung', group: 'Faculties and sources',    label: 'Anschauung', forms: [['Anschauung, anschauend', 'anschau' + L], ['intuitus', 'intuit' + L]] },
  { id: 'erfahrung',  group: 'Faculties and sources',    label: 'Erfahrung', forms: [['Erfahrung', 'erfahrung' + L], ['experientia', 'experien' + L]] },
  { id: 'apriori',    group: 'Faculties and sources',    label: 'a priori / a posteriori', forms: [['a priori', 'a\\s+priori'], ['a posteriori', 'a\\s+posteriori']] },
  { id: 'wahrheit',   group: 'Perfections of cognition', label: 'Wahrheit', forms: [['Wahrheit', 'wahrheit' + L], ['veritas', 'verit' + L]] },
  { id: 'irrthum',    group: 'Perfections of cognition', label: 'Irrthum', forms: [['Irrthum', 'irr?th[uü]m' + L], ['error', 'error' + L]] },
  { id: 'klarheit',   group: 'Perfections of cognition', label: 'Klarheit', forms: [['klar', 'klar' + L], ['clarus', 'clar' + L]] },
  { id: 'deutlichkeit', group: 'Perfections of cognition', label: 'Deutlichkeit', forms: [['deutlich', 'deutlich' + L], ['distinctus', 'distinct' + L]] },
  { id: 'gewissheit', group: 'Perfections of cognition', label: 'Gewißheit', forms: [['Gewißheit', 'gewi(?:ß|ss|s)heit' + L], ['certitudo', 'certitud' + L]] },
  { id: 'wahrscheinlichkeit', group: 'Perfections of cognition', label: 'Wahrscheinlichkeit', forms: [['wahrscheinlich', 'wahrscheinlich' + L], ['probabilis', 'probab' + L]] },
  { id: 'meinen',     group: 'Holding-true',             label: 'Meinen, Glauben, Wissen', forms: [['Meinung', 'me[iy]nung' + L], ['Glaube(n)', 'glaube(?:n|ns)?(?!\\p{L})'], ['Wissen', 'wi(?:ß|ss)ens?(?!\\p{L})']] },
  { id: 'beyfall',    group: 'Holding-true',             label: 'Beyfall', forms: [['Beyfall', 'be[iy]fall' + L], ['assensus', 'assens' + L]] },
  { id: 'vorurtheil', group: 'Holding-true',             label: 'Vorurtheil', forms: [['Vorurtheil', 'vorurt?h?eil' + L], ['praejudicium', 'pr(?:ae|ä)judic' + L]] },
  { id: 'zweifel',    group: 'Holding-true',             label: 'Zweifel / Skepsis', forms: [['Zweifel', 'zweifel' + L], ['Scepticismus', '(?:sc|sk)epti' + L]] },
  { id: 'hypothese',  group: 'Holding-true',             label: 'Hypothese', forms: [['Hypothese', 'hypothes' + L]] },
  { id: 'zeugniss',   group: 'Holding-true',             label: 'Zeugniß', forms: [['Zeugniß', 'zeugni(?:ß|ss|s)' + L], ['testimonium', 'testimon' + L]] },
  { id: 'begriff',    group: 'Concepts',                 label: 'Begriff', forms: [['Begriff', 'begrie?f' + L], ['conceptus', 'concept' + L]] },
  { id: 'merkmal',    group: 'Concepts',                 label: 'Merkmal', forms: [['Merkmahl, Merckmahl', 'merc?km[aä]h?l' + L], ['nota', 'not(?:a|ae|am|is)(?!\\p{L})'], ['Kennzeichen', 'kennzeichen' + L]] },
  { id: 'abstraction', group: 'Concepts',                label: 'Abstraction', forms: [['abstrahiren', 'abstra[hck]' + L]] },
  { id: 'reflexion',  group: 'Concepts',                 label: 'Reflexion', forms: [['Reflexion', 'refle[xc]' + L], ['Überlegung', 'überlegung' + L]] },
  { id: 'definition', group: 'Concepts',                 label: 'Definition', forms: [['Definition, definiren', 'defini(?:t|z|r)' + L], ['Erklärung', 'erklärung' + L]] },
  { id: 'urtheil',    group: 'Judgements and inferences', label: 'Urtheil', forms: [['Urtheil', 'urt?h?eil' + L], ['judicium', '[ij]udic' + L]] },
  { id: 'analytisch', group: 'Judgements and inferences', label: 'analytisch / synthetisch', forms: [['analytisch', 'analyt' + L], ['synthetisch', 'synthet' + L]] },
  { id: 'vernunftschluss', group: 'Judgements and inferences', label: 'Vernunftschluß', forms: [['Vernunftschluß', 'vernunft-?\\s?schl[uü]' + L], ['Schluß (any)', 'schl[uü](?:ß|ss)(?!el)' + L], ['syllogismus, ratiocinium', '(?:syllogis|ratiocin)' + L]] },
  { id: 'objectiv',   group: 'Judgements and inferences', label: 'objectiv / subjectiv', forms: [['objectiv, obiectiv', 'ob[ij]e[ck]ti[vu]' + L], ['subjectiv, subiectiv', 'sub[ij]e[ck]ti[vu]' + L]] },
  { id: 'methode',    group: 'Method',                   label: 'Methode', forms: [['Methode', 'method' + L]] },
  { id: 'beweis',     group: 'Method',                   label: 'Beweis / Demonstration', forms: [['Beweis, Beweiß', 'bewei[sß]' + L], ['Demonstration', 'demonstr' + L]] },
  { id: 'philmath',   group: 'Method',                   label: 'Philosophie / Mathematik', forms: [['Philosophie', 'philosoph' + L], ['Mathematik', 'mathemati' + L]] },
  { id: 'genie',      group: 'Method',                   label: 'Genie', forms: [['Genie', 'genie(?:s)?(?!\\p{L})']] },
];
return CONCEPTS;
})();
