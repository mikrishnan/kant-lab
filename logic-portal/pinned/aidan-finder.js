/* ─────────────────────────────────────────────────────────────────────────────
   Aidan's judgment finder: the rules by which it finds the judgments the lectures give as examples
   PINNED COPY for the Logic Portal, made by build-pins.py on 2026-10-26
   from Individuals/Aidan/judgment-finder.html (its script from `const JF_WORKS` up to `let curWork`).
   The code verbatim, wrapped in a function so its names stay private. It reads the lectures from data/.
   Do not hand-edit: change the source, then rerun build-pins.py.
   ───────────────────────────────────────────────────────────────────────────── */
const PORTAL_PIN_AIDAN_FINDER = (() => {
const JF_WORKS = [
  { key: 'blomberg', label: 'Blomberg', year: 'ca. 1771',   data: LOGIK_BLOMBERG },
  { key: 'busolt',   label: 'Busolt',   year: 'ca. 1789/90', data: LOGIK_BUSOLT },
  { key: 'wiener',   label: 'Wiener',   year: '1780ff.',    data: LOGIK_WIENER }
];

const B = '(?<![\\p{L}])';
/* The table of judgments (KrV A70/B95). */
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
const JF_BY_ID = Object.fromEntries(JF_FORMS.map(f => [f.id, f]));
const JF_GROUPS = ['Quantity', 'Quality', 'Relation', 'Modality'];

/* Names a reader might type, beyond the German, Latin and English above. */
const JF_ALIASES = {
  universal: ['allgemein', 'general', 'universalis'],   particular: ['besonder', 'partikular', 'particularis', 'some'],
  singular: ['einzeln', 'individual', 'singularis'],     affirmative: ['bejahend', 'affirmativ'],
  negative: ['verneinend', 'negativ'],                   infinite: ['unendlich', 'limitativ', 'limitative', 'infinitum'],
  categorical: ['kategorisch', 'categorisch'],           hypothetical: ['hypothetisch', 'conditional', 'wenn so', 'if then'],
  disjunctive: ['disjunktiv', 'disjunctiv', 'entweder oder', 'either or'],
  problematic: ['problematisch', 'possible', 'moeglich', 'möglich'], assertoric: ['assertorisch', 'actual'],
  apodictic: ['apodiktisch', 'apodictisch', 'necessary', 'notwendig', 'nothwendig']
};

/* ── finding the examples ──────────────────────────────────────────────────────
   Marker: the lecturer's own signal that an example follows. */
const EX_MARK = new RegExp(B + '(?:[zZ]\\.\\s?[EeBb]\\.?|[zZ]um\\s+(?:Beyspiel|Beispiel|Exempel)|exempli\\s+gratia|e\\.\\s?g\\.)(?![\\p{L}])', 'gu');
/* A clause counts as a judgment only if it has a finite verb we know. */
const VERB = new RegExp(B + '(ist|sind|war|waren|seyn|sey|sei|bin|bist|hat|haben|hatte|ists|kann|können|könnte|kan|muß|müßen|müssen|muss|soll|sollen|wird|werden|wurde|mag|darf|gilt|steht|stehet|liegt|folgt|nennt|nennen|heißt|heißen|bedeutet|bedeuten|macht|machen|giebt|gibt|geschieht|bleibt|bleiben|läßt|laßen|lassen|besteht|bestehet|enthält|enthalten|kommt|kommen|gehört|gehören|entspringt|hängt|wirkt|gelten|dient|dienen|fordert|erfordert|braucht|brauchen|zeigt|zeigen|sagt|sagen|bezieht|beziehen|gründet|lebt|leben|stirbt|sterben|denkt|denken|erkennt|erkennen|urtheilt|schließt|schließen|est|sunt|sit|sint|esse|erat|potest|possunt|habet|habent|debet)(?![\\p{L}])', 'iu');
const MAX_EX_CHARS = 320;

function sentencesOf(text) {
  // Split after . ! ? ; : — but not after the abbreviations the lectures lean on (z.E., z.B., d.i.)
  const out = [];
  let start = 0;
  const re = /[.!?;:»](?=\s+[\p{Lu}„"“(]|\s*$)/gu;
  let m;
  while ((m = re.exec(text))) {
    const before = text.slice(Math.max(0, m.index - 4), m.index + 1);
    if (/(?:z\.[EeBb]|d\.i|u\.s|\bz)\.$/.test(before) || /(?<![\p{L}])\p{L}\.$/u.test(before)) continue;
    out.push({ s: start, e: m.index + 1 });
    start = m.index + 1;
  }
  if (start < text.length) out.push({ s: start, e: text.length });
  return out;
}

/* Trim a span of `text` (leading space, quotes, a framing "ich sage:") and return it, or null. */
function tidy(text, s, e) {
  let t = text.slice(s, e);
  const lead = t.match(/^[\s:,„"“»«(]+/);
  if (lead) s += lead[0].length;
  t = text.slice(s, e);
  const bars = t.match(/^\|\|\s*\S\s+/);   // the Wiener Logik's "|| V"
  if (bars) { s += bars[0].length; t = text.slice(s, e); }
  const frame = t.match(/^.{0,40}?\b(?:ich sage|sage ich|man sagt|sagt man|heißt es|spricht man)\s*[:,]\s*/i);
  if (frame) { s += frame[0].length; t = text.slice(s, e); }
  const trail = t.match(/[\s"“”«»),]+$/);
  if (trail) e -= trail[0].length;
  return e > s ? { s, e } : null;
}

/* A span can hold a whole syllogism ("Alle Menschen sind sterblich, Caius ist ein Mensch, also …").
   Split it into its judgments at a comma before a new capitalised subject + verb, or before a conclusion
   word, and record which parts the text itself draws as a conclusion. */
const CONCL = new RegExp('^(?:also|folglich|mithin|demnach|ergo|igitur)(?![\\p{L}])', 'iu');
function splitJudgments(text, s, e) {
  const seg = text.slice(s, e);
  const cut = [0];
  const re = /[,;]\s+(?=(?:\p{Lu}\p{L}+\s+(?:ist|sind|hat|haben|kann|muß|est|sunt)(?![\p{L}]))|(?:also|folglich|mithin|demnach|ergo|igitur)(?![\p{L}]))/gu;
  let m;
  while ((m = re.exec(seg))) cut.push(m.index + m[0].length);
  cut.push(seg.length);
  const parts = [];
  for (let i = 0; i < cut.length - 1; i++) {
    const t = tidy(text, s + cut[i], s + cut[i + 1]);
    if (t) parts.push({ ...t, concl: CONCL.test(text.slice(t.s, t.e)) });
  }
  return parts;
}

function isJudgment(t) {
  const words = t.split(/\s+/).length;
  return words >= 3 && words <= 45 && VERB.test(t);
}

/* ── does the sentence function as an example? ────────────────────────────────
   A sentence is an example of a form when its content carries no weight of its own in the lecture: Kant
   is not telling us that men are mortal, he is showing what a universal judgment looks like. So a
   sentence whose subject matter IS the lecture's — cognition, reason, judgment, truth, science, proof,
   method — is making the point, not illustrating it, however neatly it fits a form. Expounding voices
   ("man nennt", "wir sehen", "ich sage") go the same way. */
const DOCTRINE = new RegExp(B + '(?:erkenntni\\p{L}*|erkenn\\p{L}*|vernunft\\p{L}*|vernünftig\\p{L}*|verstand\\p{L}*|verstandes\\p{L}*|urthei\\p{L}*|urtei\\p{L}*|judic\\p{L}*|begrif\\p{L}*|satz|sätze|säzze|sazze|saz|proposition\\p{L}*|wahrheit\\p{L}*|irrthum\\p{L}*|irrtum\\p{L}*|wißenschaft\\p{L}*|wissenschaft\\p{L}*|logi[ck]\\p{L}*|philosoph\\p{L}*|gelehrsamkeit\\p{L}*|gelahrtsamkeit\\p{L}*|gelehrt\\p{L}*|vorstellung\\p{L}*|merkmahl\\p{L}*|merkmal\\p{L}*|merckmahl\\p{L}*|definition\\p{L}*|erklärung\\p{L}*|beweis\\p{L}*|beweisen|regel\\p{L}*|reguln|methode\\p{L}*|schluß\\p{L}*|schlüße\\p{L}*|schließ\\p{L}*|gewißheit\\p{L}*|gewissheit\\p{L}*|meinung\\p{L}*|zweifel\\p{L}*|deutlich\\p{L}*|klarheit\\p{L}*|verworren\\p{L}*|anschauung\\p{L}*|hypothes\\p{L}*|wahrscheinlich\\p{L}*|vollkommenheit\\p{L}*|eintheilung\\p{L}*|sphaer\\p{L}*|subject\\p{L}*|subiect\\p{L}*|praedicat\\p{L}*|prädicat\\p{L}*|terminus|termin\\p{L}*|kenntni\\p{L}*|lehre\\p{L}*|autor|verfasser|dogma\\p{L}*|kritik\\p{L}*|skeptisch\\p{L}*|critic\\p{L}*|analytisch\\p{L}*|synthetisch\\p{L}*)', 'iu');
const EXPOUNDING = new RegExp('^(?:man|wir|ich|uns|unser\\p{L}*|du|hier|dieses|dies|daher|deswegen)(?![\\p{L}])|' +
  B + '(?:nennt|nennen|nennet|heißt|heißen|bedeutet|bedeuten|sagt|sagen|verstehet|versteht|erklär\\p{L}*)(?![\\p{L}])', 'iu');
/* The furniture of school-logic examples: men and bodies, souls and God, gold, iron, triangles, Caius.
   The list is the subjects of the text's OWN marked examples (Mensch 18×, Triangel, Körper, Gott, Eisen,
   Tugend, Seele, Metall, Caius, Künstler, Haus, Buch, Welt …) with the rest of the stock joined to them.
   A sentence about one of these is not telling us anything the lecture needs: it is showing a form. */
const EXAMPLE_SUBJECT = new RegExp(B + '(?:' + [
  'mensch',
  'körper',
  'seele',
  'geist',
  'engel',
  'teufel',
  'triangel',
  'zirkel',
  'quadrat',
  'linie',
  'zahl',
  'gold',
  'eisen',
  'metall',
  'stein',
  'silber',
  'holz',
  'baum',
  'birnbaum',
  'pflanze',
  'blume',
  'rose',
  'gras',
  'thier',
  'tier',
  'vogel',
  'fisch',
  'pferd',
  'hund',
  'löwe',
  'wurm',
  'wasser',
  'feuer',
  'luft',
  'erde',
  'sonne',
  'mond',
  'stern',
  'himmel',
  'welt',
  'haus',
  'kleid',
  'uhr',
  'schiff',
  'vestung',
  'barometer',
  'tugend',
  'laster',
  'reichthum',
  'reichtum',
  'nothlüge',
  'notlüge',
  'künstler',
  'medicus',
  'richter',
  'könig',
  'fürst',
  'einwohner',
  'nichtsterbliche',
  'jemand',
  'niemand',
  'caius',
  'cajus',
  'socrates',
  'sokrates',
  'titius',
  'sempronius',
  'petrus',
  'alexander',
  'cäsar',
  'caesar'
].join('|') + ')(?:e|en|es|er|n|s|ne|nen)?(?![\\p{L}])', 'iu');

/* The subject phrase: what stands before the finite verb. */
function subjectOf(t) {
  const i = t.search(VERB);
  return (i > 0 ? t.slice(0, i) : t).trim();
}
function functionsAsExample(t, setOff) {
  const head = subjectOf(t);
  if (EXPOUNDING.test(t) || DOCTRINE.test(head)) return false;
  return setOff || EXAMPLE_SUBJECT.test(head);
}

/* Which forms the text itself names, in the run-up to an example: the sentence before it in the block,
   and the block before that. A form counts only if the example's own wording agrees — where Kant names
   two ("einem allgemein bejahenden ein allgemein verneinendes") only the one that fits is kept. */
const NAME_BEFORE = 500, NAME_AFTER = 260;
function namedForms(sec, bi, b, start, labels, end) {
  const prev = (sec.blocks[bi - 1] && sec.blocks[bi - 1].text) || '';
  const win = (prev + ' ' + b.text.slice(0, start)).slice(-NAME_BEFORE) + ' ‖ ' +
    b.text.slice(end == null ? start : end, (end == null ? start : end) + NAME_AFTER);
  return labels.filter(id => JF_BY_ID[id].term.test(win));
}

/* Does the inference go through? Only then is a premise's form fixed by its place in it. The classical
   rules for quantity and quality, with Kant's own proviso that a singular judgment counts as universal
   ("Die Judicia singularia können betrachtet werden als Judicia vniversalia", Logik Busolt, AA 24:665).
   Relation and modality are not settled by these rules, so they stay inferred from the wording. */
function inferenceHolds(parts) {
  const n = parts.length;
  if (n < 2 || n > 3 || !parts[n - 1].concl || parts.slice(0, -1).some(p => p.concl)) return false;
  const uni = p => p.labels.includes('universal') || p.labels.includes('singular');
  const par = p => p.labels.includes('particular');
  const neg = p => p.labels.includes('negative');
  const prem = parts.slice(0, -1), con = parts[n - 1];
  if (prem.filter(neg).length > 1) return false;                 // two negative premises prove nothing
  if (neg(con) !== (prem.filter(neg).length === 1)) return false; // the conclusion follows the weaker part
  if (prem.length === 2) {
    if (!prem.some(uni)) return false;                            // two particular premises prove nothing
    if (prem.some(par) && !par(con)) return false;
  } else if (!uni(prem[0]) && uni(con)) return false;             // an enthymeme cannot widen its premise
  return true;
}
const FIXED_BY_INFERENCE = ['universal', 'particular', 'singular', 'affirmative', 'negative', 'infinite'];

/* A passage "concerns a judgment" if it, or the block before or after it, says so. */
const JF_JUDGMENT = new RegExp(B + '(Urtheil\\p{L}*|Urteil\\p{L}*|judic\\p{L}*|Satz|Sätze|Säzze|Sazze|Saz|propositio\\p{L}*|proposition\\p{L}*|Subject\\p{L}*|Subiect\\p{L}*|Praedicat\\p{L}*|Prädicat\\p{L}*)', 'iu');
const VERB_G = new RegExp(VERB.source, 'giu');
const SUBORD = new RegExp(B + '(daß|dass|weil|ob|indem|damit|obgleich|obwohl|obschon|wiewohl|nachdem|bevor|sobald|solange|welche|welcher|welches|welchen|welchem|welch|dessen|deren|wobei|wodurch|womit|denn|quod|quia|cum|qui|quae|quo)(?![\\p{L}])|,\\s+(da|wo|wie|als)\\s', 'iu');

/* A simple sentence: one subject and predicate, no subordinate clause, no heading debris or enumeration.
   Only a hypothetical (ground–consequence) or disjunctive (division) may have two clauses. */
function isSimple(t, labels) {
  if (/[\[\]<>?\d:;]|Abschnitt|etc\.|(?<![\p{L}])[zZ]\.\s?[EeBb]\b/u.test(t)) return false;
  if (/(?<![\p{L}])(entweder|nehmlich|und|oder|als|aber|auch|so|wenn)\s*[,.]?$/iu.test(t)) return false;   // cut off mid-sentence
  const compound = labels.includes('hypothetical') || labels.includes('disjunctive');
  if (/^(wenn|wann|falls|si)(?![\p{L}])/iu.test(t) && !labels.includes('hypothetical')) return false;   // a wenn-clause with no consequence
  if (!/^(?:\p{Lu}|alle|aller|allen|alles|jeder|jede|jedes|jeden|kein|keine|keiner|keines|einige|etliche|manche|wenn|wann|falls|si|entweder|also|folglich|mithin|demnach|ergo|der|die|das|den|ein|eine|einer|ein\s)/u.test(t)) return false;   // begins mid-clause
  if (/^(wie|als|wo|nicht|von|vom|zwischen|mit|durch|für|in|auf|an|zu|bey|bei|aus|nach|über|unter|ohne|um)\s/iu.test(t)) return false;   // starts mid-sentence
  if (!compound && VERB.test(t.split(/\s+/).pop().replace(/[.!,]+$/, ''))) return false;   // verb-final: a subordinate clause, not a simple sentence
  const words = t.split(/\s+/).length;
  if (words < 3 || words > (compound ? 30 : 14)) return false;
  const verbs = (t.match(VERB_G) || []).length;
  if (verbs < 1 || verbs > (compound ? 2 : 1)) return false;
  if ((t.match(/,/g) || []).length > 2) return false;
  if (/,\s+(und|aber|doch|deshalb|daher|also|folglich|mithin|sondern|denn|weswegen)(?![\p{L}])/iu.test(t)) return false;
  const sub = SUBORD.exec(t);
  if (sub) {
    const w = (sub[1] || sub[2] || '').toLowerCase();
    // a ground–consequence "weil … so" is allowed, but not when it is nested inside a wenn-clause
    if (!(compound && (w === 'weil' || w === 'da') && !/(?<![\p{L}])(wenn|wann|falls|si)(?![\p{L}])/iu.test(t))) return false;
  }
  return true;
}

/* The wording that makes an unmarked sentence read as a demonstration of a form: a quantifier or an
   individual's name opening the sentence, a wenn…so, an entweder…oder, a negated predicate. */
const IMPLICIT_START = new RegExp('^(?:' + [
  '(?:Alle|Aller|Jeder|Jede|Jedes|Jeden|Ein jeder|Omnis|Omne|Omnes|Omnia|Kein|Keine|Keiner|Keines|Nullus|Nulla|Nullum)\\s+\\p{L}+',
  '(?:Einige|Etliche|Manche|Mancher|Manches|Quidam|Quaedam|Quoddam|Aliqui|Aliquis|Aliquod|Nonnulli)\\s+\\p{L}+',
  '(?:Caius|Cajus|Socrates|Sokrates|Titius|Petrus|Sempronius)\\s+(?:ist|sind|war|hat|est)',
  '(?:Wenn|Wann|Falls|Si)\\s'
].join('|') + ')', 'iu');
function isImplicitExample(t, labels) {
  return IMPLICIT_START.test(t) || labels.includes('disjunctive') || labels.includes('infinite');
}

/* ── labelling a judgment with its forms ──────────────────────────────────────
   Inferred from wording alone, on Kant's four heads. Returns form ids. */
function classify(t) {
  const labels = [];
  const hyp = /(?:^|[\s,;:])(?:wenn|wann|falls|si)(?![\p{L}])[^]*?(?:^|[\s,;:])(?:so|dann|ita|tum|ergo)(?![\p{L}])/iu.test(t);
  /* A divided sphere, however it is written: "entweder … oder", or a bare disjunct — "A ist b oder c",
     "A ist b oder nicht-b" — which the lectures set down without "entweder" as often as with it. */
  const disj = /(?<![\p{L}])(?:oder|vel|aut|sive|seu)(?![\p{L}])/iu.test(t);
  // quantity
  let quant = null;
  if (/(?<![\p{L}])(alle|aller|allen|alles|jeder|jede|jedes|jeden|jedem|omnis|omne|omnes|omnia|kein|keine|keiner|keines|keinen|keinem|nullus|nulla|nullum)(?![\p{L}])/iu.test(t)) quant = 'universal';
  else if (/(?<![\p{L}])(einige|einiger|etliche|manche|mancher|manches|quidam|quaedam|quoddam|aliqui|aliquis|aliquod|nonnulli|ein\s+theil)(?![\p{L}])/iu.test(t)) quant = 'particular';
  else if (/(?<![\p{L}])(caius|cajus|socrates|sokrates|titius|petrus|sempronius|hic|haec|hoc)(?![\p{L}])|^(dieser|diese|dieses|dies)(?![\p{L}])/iu.test(t)) quant = 'singular';
  if (quant) labels.push(quant);
  // quality
  const infinite = /(?<![\p{L}])(ist|sind|sey|seyn|est|sunt)\s+(nicht-?(?!s(?![\p{L}]))\p{L}{4,}|un(?!ser|ter|mittel|d(?![\p{L}]))\p{L}{4,}|non-\p{L}+)/iu.test(t);
  const neg = /(?<![\p{L}])(nicht|kein\p{L}*|nullus|nulla|nullum|non|nie|niemals|nichts|niemand|nimmermehr)(?![\p{L}-])/iu.test(t);
  if (infinite && !neg) labels.push('infinite');
  else if (neg) labels.push('negative');
  else labels.push('affirmative');
  // relation
  labels.push(hyp ? 'hypothetical' : disj ? 'disjunctive' : 'categorical');
  // modality
  if (/(?<![\p{L}])(muß|müßen|müssen|muss|nothwendig\p{L}*|notwendig\p{L}*|unmöglich\p{L}*|schlechterdings|necesse|necessario|apodic\p{L}*)(?![\p{L}])/iu.test(t)) labels.push('apodictic');
  else if (/(?<![\p{L}])(kann|kan|können|könnte|mag|möchte|möglich\p{L}*|vielleicht|potest|possunt|problematisch\p{L}*)(?![\p{L}])/iu.test(t)) labels.push('problematic');
  else labels.push('assertoric');
  return labels;
}

/* Every example in the three works. A sentence is an example when it works as one (above) and is simple;
   what it is worth as evidence of a form is a further question, and gets one of three answers:
     named       the text names that form within a few lines of it;
     premise /
     conclusion  it stands in a syllogism that goes through, which is what fixes its quantity and quality;
     speculated  neither — the form is read off its wording alone, and may be wrong.
   Built once, on first use. */
let EXAMPLES = null;
function buildExamples() {
  if (EXAMPLES) return EXAMPLES;
  const found = new Map();                       // block id + offset → the example
  const add = x => {
    const k = x.b.id + ':' + x.s, old = found.get(k);
    if (!old) { found.set(k, x); return; }
    if (!old.named.length) old.named = x.named;
    old.inferred = old.inferred || x.inferred;
    old.role = old.role || x.role;
    old.marker = old.marker || x.marker;
  };

  JF_WORKS.forEach((w, wi) => w.data.sections.forEach((sec, si) => sec.blocks.forEach((b, bi) => {
    const text = b.text;
    if (!text) return;
    const sents = sentencesOf(text);

    /* The spans a judgment may be cut from: what follows an example marker, every sentence on its own,
       and a conclusion joined to the sentence before it, where its premises stand there. */
    const spans = [];
    EX_MARK.lastIndex = 0;
    let m;
    while ((m = EX_MARK.exec(text))) {
      const i = m.index + m[0].length;
      const se = sents.find(x => i >= x.s && i < x.e);
      if (se) spans.push({ s: i, e: se.e, marker: m[0].replace(/\s+/g, '') });
    }
    sents.forEach((se, i) => {
      const own = splitJudgments(text, se.s, se.e);
      if (own.length && own[0].concl && i > 0) spans.push({ s: sents[i - 1].s, e: se.e, marker: '' });
      spans.push({ s: se.s, e: se.e, marker: '' });
    });

    spans.forEach(sp => {
      if (sp.e - sp.s > MAX_EX_CHARS) return;
      const parts = splitJudgments(text, sp.s, sp.e).map(p => {
        const t = text.slice(p.s, p.e), labels = classify(t);
        return { ...p, text: t, labels, simple: isJudgment(t) && isSimple(t, labels) };
      });
      /* A syllogism's premises are examples whatever they are about — only their form is at work. */
      const holds = parts.length > 1 && parts.every(p => p.simple && !EXPOUNDING.test(p.text)) && inferenceHolds(parts);
      parts.forEach(p => {
        if (!p.simple || !functionsAsExample(p.text, !!sp.marker || holds)) return;
        add({ wi, si, bi, b, s: p.s, e: p.e, text: p.text, labels: p.labels, marker: sp.marker,
              named: namedForms(sec, bi, b, p.s, p.labels, p.e),
              inferred: holds, role: holds ? (p.concl ? 'conclusion' : 'premise') : '' });
      });
    });
  })));

  EXAMPLES = [...found.values()].sort((a, c) => a.wi - c.wi || a.si - c.si || a.bi - c.bi || a.s - c.s);
  return EXAMPLES;
}

/* Why a sentence in the transcript is, or is not, among the examples. */
function exampleStatus(sec, bi, b, s, e) {
  const text = b.text.slice(s, e);
  if (!VERB.test(text)) return { labels: null, why: 'Not a judgment: no finite verb in it.' };
  const labels = classify(text);
  const hit = buildExamples().find(x => x.b.id === b.id && x.s < e && x.e > s);
  if (hit) return { labels: hit.labels, hit, why: '' };
  if (!isSimple(text, labels)) return { labels, why: 'Not an example: not a simple sentence — a subordinate clause, a second verb, or too long.' };
  if (!functionsAsExample(text, EX_MARK.test(b.text.slice(Math.max(0, s - 6), s)))) return { labels, why: 'Not an example: its content carries the point Kant is making, rather than illustrating a form. The lecture is not out to tell us this.' };
  return { labels, why: 'It works as an example, but it is part of a longer judgment that is shown instead.' };
}

/* Every sentence that could be a judgment, marker or none. Scanned on demand; classified only if kept. */
function* allSentences() {
  for (let wi = 0; wi < JF_WORKS.length; wi++) {
    const secs = JF_WORKS[wi].data.sections;
    for (let si = 0; si < secs.length; si++) for (let bi = 0; bi < secs[si].blocks.length; bi++) {
      const b = secs[si].blocks[bi];
      if (!b.text) continue;
      for (const se of sentencesOf(b.text)) {
        const t = tidy(b.text, se.s, se.e);
        if (!t) continue;
        const text = b.text.slice(t.s, t.e);
        if (isJudgment(text)) yield { wi, si, bi, sec: secs[si], b, s: t.s, e: t.e, text };
      }
    }
  }
}

/* ── state ─────────────────────────────────────────────────────────────────── */
return { forms: JF_FORMS, byId: JF_BY_ID, groups: JF_GROUPS, build: buildExamples };
})();
