/* ─────────────────────────────────────────────────────────────────────────────
   Nik's figures for the immediate inferences: every passage drawn, premise and conclusion on one figure, and checked
   PINNED COPY for the Logic Portal, made by build-pins.py on 2026-10-26
   from Individuals/Nik Land/immediate-inferences-drawn.html (its script from `const SOURCES = {` up to `/* ── Cards`).
   The code verbatim, wrapped in a function so its names stay private. It reads the lectures from data/.
   Do not hand-edit: change the source, then rerun build-pins.py.
   ───────────────────────────────────────────────────────────────────────────── */
const PORTAL_PIN_NIK_FIGURES = (() => {
const SOURCES = {
  blomberg: { label: 'Logik Blomberg', short: 'Blomberg', date: 'ca. 1771',    order: 0, data: () => LOGIK_BLOMBERG },
  wiener:   { label: 'Wiener Logik',   short: 'Wiener',   date: '1780ff.',     order: 1, data: () => LOGIK_WIENER },
  busolt:   { label: 'Logik Busolt',   short: 'Busolt',   date: 'ca. 1789/90', order: 2, data: () => LOGIK_BUSOLT },
  refl16:   { label: 'Reflexionen on Meier', short: 'Reflexionen', date: 'AA 16', order: 3 }
};
const SOURCE_KEYS = Object.keys(SOURCES);

// The kinds, in the order of the map: what it is; Kant's four heads (Refl. 3170); equipollence apart.
const KINDS = {
  general: { label: 'What it is', title: 'What an immediate inference is', de: 'Verstandesschluß · consequentia immediata',
    text: 'A judgement drawn from another with no middle term (“absque medio termino”). A Vernunftschluß needs one. The passages offered as counter-examples are drawn with their middle term marked, to show what makes them mediate.' },
  subalternation: { label: 'Subalternation', title: 'Subalternation', de: 'iudicia subalternata', head: 'quantity',
    text: 'From the universal to the particular under it: the quality is kept and only the quantity changes. Kant adds a caution in Refl. 3171: one cannot infer the falsity of the particulars from the falsity of the universal, nor the universal from the particulars.' },
  contradictory: { label: 'Contradictory', title: 'Opposition: contradictory', de: 'iudicia opposita · contradictorie', head: 'quality', edge: 'contradictorie',
    text: 'A against O, or E against I. Exactly one of the two is true, so the truth of one gives the falsity of the other, and conversely. The Wiener transcript calls it “die eigentliche Opposition”.' },
  contrary: { label: 'Contrary', title: 'Opposition: contrary', de: 'iudicia opposita · contrarie', head: 'quality', edge: 'contrarie',
    text: 'A against E. Both can be false, not both true, because each says too much (Refl. 3177: “zuviel zum Wiederstreit”).' },
  subcontrary: { label: 'Subcontrary', title: 'Opposition: subcontrary', de: 'iudicia opposita · subcontrarie', head: 'quality', edge: 'subcontrarie',
    text: 'I against O. Both can be true, not both false, because each says too little (Refl. 3175: “nicht genug zum Wiederstreit”).' },
  conversion: { label: 'Conversion', title: 'Conversion', de: 'conversio · Umkehrung', head: 'relation',
    text: 'The terms change places and the quality is kept. As the transcripts give the rule, a universal affirmative converts per accidens, to a particular; universal negatives and particulars convert simpliciter. Busolt notes that an A whose subject and predicate have equal spheres converts simply.' },
  contraposition: { label: 'Contraposition', title: 'Contraposition', de: 'contrapositio · Entgegenstellung', head: 'modality',
    text: 'The terms change places and the quality changes, the quantity kept: from “Alle Menschen sind sterblich” to “was nicht sterblich ist, ist kein Mensch”. In Refl. 3170 it is the inference by modality, which makes an assertoric judgement apodictic.' },
  aequipollentia: { label: 'Equipollence', title: 'Equipollence', de: 'iudicia aequipollentia',
    text: 'Two judgements that say the same in different words. Kant does not list it in Refl. 3170. Blomberg and Busolt deny that it is an inference at all (“gar kein Schluß”), and the Wiener transcript calls such pairs substitutions.' }
};
const KIND_ORDER = ['general', 'subalternation', 'contradictory', 'contrary', 'subcontrary', 'conversion', 'contraposition', 'aequipollentia'];
const OPPOSITION = ['contradictory', 'contrary', 'subcontrary', 'subalternation'];

// Refl. 3170, AA 16:692, verbatim, one line per head.
const HEADS = [
  { key: 'quantity', title: 'Quantität', kinds: ['subalternation'], icon: 'sub',
    q: 'Die per iudicia subalternata gehören zur qvantitaet.' },
  { key: 'quality', title: 'Qualität', kinds: ['contradictory', 'contrary', 'subcontrary'], icon: 'square',
    q: 'Die per iudicia opposita gehören zur qvalitaet.' },
  { key: 'relation', title: 'Relation', kinds: ['conversion'], icon: 'conv',
    q: 'Die per conversionem iudicii gehören zur relation.' },
  { key: 'modality', title: 'Modalität', kinds: ['contraposition'], icon: 'contrap',
    q: 'Die per contrapositionem iudicii gehören zur modalitaet: aus einem assertorischen ein apodictisch Urtheil zu machen.' }
];

const FORM_NAME = { A: 'universal affirmative', E: 'universal negative', I: 'particular affirmative', O: 'particular negative',
                    'S+': 'singular affirmative', 'S-': 'singular negative' };
const ROLE_LABEL = { premise: 'Premise', conclusion: 'Conclusion', member: 'One of the pair', intermediate: 'Intermediate step',
                     rejected: 'Rejected by the passage', major: 'Major premise', minor: 'Minor premise' };
const VIA = { aequipollentia: 'equipollence', conversion: 'conversion', contraposition: 'contraposition', subalternation: 'subalternation' };

// Report a problem: the same problem keys, and the same payload, as immediate-inferences.html.
const PROBLEMS = {
  categorisation: [['kind', 'the kind of inference'], ['named', 'whether the passage names it'], ['form', 'a judgement’s form'],
                   ['judgements', 'which judgements are marked'], ['quote', 'the quotation or its page']],
  diagram: [['terms', 'the concept names'], ['reading', 'how a judgement is read'], ['drawing', 'what is shaded, or where'],
            ['type', 'the wrong kind of figure']]
};
const REPO = 'mikrishnan/kant-lab';
const FLAGS_FORMAT = 'kant-lab-flags-v1';
const URL_MAX = 7500;

/* ── State ────────────────────────────────────────────────────────────────── */

let kind = 'all';
let sources = new Set(SOURCE_KEYS);   // sources shown
let onlyJudgements = false;
let query = '';
let examples = [];                    // IMMEDIATE_EXAMPLES, each resolved against its source
let blocksByWork = {};
let reflByNumber = {};
let uid = 0;                          // for ids inside the SVGs
let reporting = null;                 // the example the report dialog is open on

/* ── Resolving an example against its source ──────────────────────────────── */

// As in immediate-inferences.html. A block's `aa` is documented as the page it
// starts on, but where its first page break falls inside it the extractor records
// the page it ENDS on, so the start page is worked out here: the first marker's
// page if it stands at character 0, else the page the previous block ended on.
function indexWork(key) {
  const byId = {};
  let curAA = null, curMS = null;
  SOURCES[key].data().sections.forEach(sec => sec.blocks.forEach(b => {
    const pg = b.pages || [], ms = b.ms || [];
    if (pg.length && pg[0].i === 0) b._aa0 = pg[0].p;
    else if (pg.length) b._aa0 = curAA != null ? curAA : b.aa;
    else b._aa0 = b.aa;
    b._ms0 = curMS;
    curAA = pg.length ? pg[pg.length - 1].p : b.aa;
    if (ms.length) curMS = ms[ms.length - 1].p;
    byId[b.id] = b;
  }));
  return byId;
}

function pageAt(markers, off, first) {
  let found = first;
  (markers || []).forEach(m => { if (m.i <= off) found = m.p; });
  return found;
}

function resolve(raw) {
  const ex = Object.assign({}, raw);
  ex.judgements = raw.judgements.map((j, n) => Object.assign({ n }, j));
  let cursor = 0;
  ex.judgements.forEach(j => {
    let at = raw.quote.indexOf(j.t, cursor);
    if (at < 0) at = raw.quote.indexOf(j.t);
    j.at = at;
    if (at >= 0) cursor = at + j.t.length;
  });
  const judgementsFound = ex.judgements.every(j => j.at >= 0);

  if (raw.src === 'refl16') {
    const e = reflByNumber[raw.r];
    ex.entry = e;
    ex.ok = !!e && e.text.indexOf(raw.quote) >= 0 && judgementsFound;
    if (e) {
      ex.pageFrom = e.aa != null ? e.aa : e.aaEnd;
      ex.pageTo = e.aaEnd != null ? e.aaEnd : ex.pageFrom;
    }
    return ex;
  }
  const b = (blocksByWork[raw.src] || {})[raw.block];
  const start = b ? b.text.indexOf(raw.quote) : -1;
  ex.ok = start >= 0 && judgementsFound;
  if (start < 0) return ex;
  ex.pageFrom = pageAt(b.pages, start, b._aa0);
  ex.pageTo = pageAt(b.pages, start + raw.quote.length - 1, b._aa0);
  ex.msFrom = pageAt(b.ms, start, b._ms0);
  ex.msTo = pageAt(b.ms, start + raw.quote.length - 1, b._ms0);
  return ex;
}

function loadExamples() {
  ['blomberg', 'wiener', 'busolt'].forEach(w => { blocksByWork[w] = indexWork(w); });
  REFL_ENTRIES.forEach(e => { reflByNumber[e.r] = e; });
  examples = IMMEDIATE_EXAMPLES.map(resolve);
  examples.forEach((ex, n) => { ex.n = n; ex.fig = planFigure(ex); });
  examples.sort((a, b) => SOURCES[a.src].order - SOURCES[b.src].order || (a.pageFrom || 0) - (b.pageFrom || 0) || a.n - b.n);
}

/* ── The logic of the figures ─────────────────────────────────────────────── */

// A figure is drawn from the premise, and every other judgement is checked on
// the same drawing, since the inference changes the form and not the matter.
// The drawing divides the frame into cells, one per combination of in and out of
// each sphere. Each cell is 'given' (the premise says something is there),
// 'open' (drawn, but the premise says nothing of it) or 'empty' (not drawn).
// Cells are keyed by one bit per term, in the order of `terms`.
const CONFIGS = {
  A:   { terms: ['S', 'P'], cells: { '11': 'given', '10': 'empty', '01': 'open', '00': 'open' } },
  EQ:  { terms: ['S', 'P'], cells: { '11': 'given', '10': 'empty', '01': 'empty', '00': 'open' } },
  E:   { terms: ['S', 'P'], cells: { '11': 'empty', '10': 'given', '01': 'given', '00': 'open' } },
  I:   { terms: ['S', 'P'], cells: { '11': 'given', '10': 'open', '01': 'open', '00': 'open' } },
  O:   { terms: ['S', 'P'], cells: { '11': 'open', '10': 'given', '01': 'open', '00': 'open' } },
  PT:  { terms: ['S', 'P'], point: true, cells: { '11': 'given', '10': 'empty', '01': 'open', '00': 'open' } },
  PTN: { terms: ['S', 'P'], point: true, cells: { '11': 'empty', '10': 'given', '01': 'open', '00': 'open' } },
  MED: { terms: ['S', 'M', 'P'], cells: { '111': 'given', '011': 'open', '001': 'open', '000': 'open',
                                          '100': 'empty', '101': 'empty', '110': 'empty', '010': 'empty' } },
  MEDPT: { terms: ['S', 'M', 'P'], point: true, cells: { '111': 'given', '011': 'open', '001': 'open', '000': 'open',
                                          '100': 'empty', '101': 'empty', '110': 'empty', '010': 'empty' } }
};

// Which cells a term covers: S, P, M a sphere; nonP what lies outside P; SP what is both.
function termTest(cfg, term) {
  const ix = t => cfg.terms.indexOf(t);
  if (term === 'nonP') return k => k[ix('P')] === '0';
  if (term === 'SP') return k => k[ix('S')] === '1' && k[ix('P')] === '1';
  return k => k[ix(term)] === '1';
}

// Obversion, to normalise a judgement onto S and P: A(S, nonP) = E(S, P), and so on.
const OBVERT = { A: 'E', E: 'A', I: 'O', O: 'I', 'S+': 'S-', 'S-': 'S+' };

// The drawing for a set of judgements: from the premise, else the first judgement.
function configFor(ex) {
  const d = ex.diagram || {};
  if (d.config === 'S=P') return 'EQ';
  if (d.config === 'S<P') return 'A';
  if (d.config === 'mediate') {
    const con = ex.judgements.filter(j => j.role === 'conclusion')[0];
    return con && con.form.charAt(0) === 'S' ? 'MEDPT' : 'MED';
  }
  const J = ex.judgements;
  const base = J.filter(j => j.role === 'premise')[0] || J.filter(j => j.role === 'member' && j.form === 'A')[0] || J[0];
  let form = base.form, sp = base.sp || ['S', 'P'];
  if (sp[1] === 'nonP') { form = OBVERT[form]; sp = [sp[0], 'P']; }
  if (sp[0] === 'P' && sp[1] === 'S' && (form === 'E' || form === 'I')) sp = ['S', 'P'];
  return { A: 'A', E: 'E', I: 'I', O: 'O', 'S+': 'PT', 'S-': 'PTN' }[form] || 'I';
}

// What the figure says of one judgement drawn on it.
//   ok     the figure bears it out
//   more   it says something is in a region the premise leaves open
//   empty  it says something is in a region with nothing in it
//   fails  it says a region is empty that the figure leaves open, or fills
function verdict(cfgKey, form, sp) {
  const cfg = CONFIGS[cfgKey];
  const inX = termTest(cfg, sp[0]), inY = termTest(cfg, sp[1]);
  const keys = Object.keys(cfg.cells);
  const f = form.charAt(0) === 'S' ? (form === 'S-' ? 'E' : 'A') : form;
  const region = keys.filter(k => inX(k) && (f === 'A' || f === 'O' ? !inY(k) : inY(k)));
  const states = region.map(k => cfg.cells[k]);
  if (f === 'A' || f === 'E') {
    if (states.indexOf('given') >= 0) return { v: 'fails', region };
    if (states.indexOf('open') >= 0) return { v: 'fails', open: true, region };
    return { v: 'ok', region };
  }
  if (states.indexOf('given') >= 0) return { v: 'ok', region };
  if (states.indexOf('open') >= 0) return { v: 'more', region };
  return { v: 'empty', region };
}

function termName(ex, t) {
  const T = (ex.diagram && ex.diagram.terms) || {};
  if (t === 'SP') return (T.P || 'P') + ' ' + (T.S || 'S');
  if (t === 'nonP') return T.nonP || 'nicht ' + (T.P || 'P');
  return T[t] || t;
}

function verdictText(ex, j, res) {
  const X = '“' + termName(ex, j.sp[0]) + '”', Y = '“' + termName(ex, j.sp[1]) + '”';
  const f = j.form.charAt(0);
  if (res.v === 'ok') return j.role === 'premise' ? '' : 'The figure bears this out.';
  if (res.v === 'more') return 'The figure shows more than the premise says. Nothing in the premise says there is anything ' +
    X + ' that is ' + (f === 'O' ? 'not ' : '') + Y + '; the figure has room for it only because one sphere is drawn larger than the other.';
  if (res.v === 'empty') return 'This picks out an empty region: on the premise there is nothing ' + X + ' that is ' +
    (f === 'O' ? 'not ' : '') + Y + '.' + (j.role === 'rejected' ? ' Hence the passage rejects it.' : '');
  return res.open ? 'Does not follow from the figure: it leaves room for something ' + X + ' that is ' + (f === 'A' ? 'not ' : '') + Y + '.'
                  : 'The figure contradicts this.';
}

// Which figure a passage gets, and what goes in it.
function planFigure(ex) {
  const J = ex.judgements, d = ex.diagram || {};
  if (!J.length) return { type: 'schema', families: schemaFamilies(ex) };
  if (d.config === 'mediate') return { type: 'mediate', cfg: configFor(ex) };
  const square = ex.kinds.some(k => OPPOSITION.indexOf(k) >= 0) || d.type === 'square';
  if (J.length === 1 && J[0].form.charAt(0) === 'S') return { type: 'singular', cfg: configFor(ex) };
  if (square && J.every(j => 'AEIO'.indexOf(j.form) >= 0 && j.sp[0] === 'S' && j.sp[1] === 'P')) return { type: 'square' };
  return { type: 'spheres', cfg: configFor(ex) };
}

function schemaFamilies(ex) {
  if ((ex.diagram || {}).type === 'square') return ['vowels'];
  const fam = [];
  ex.kinds.forEach(k => {
    const f = OPPOSITION.indexOf(k) >= 0 ? 'square' : k;
    if (fam.indexOf(f) < 0) fam.push(f);
  });
  return fam.length > 1 ? fam.filter(f => f !== 'general') : fam;
}

// Corner of the square for a form, and the relation two corners stand in.
const CORNER = { A: 0, E: 1, I: 2, O: 3 };
function relationOf(a, b) {
  const p = [a, b].sort().join('');
  return { AE: 'contrary', IO: 'subcontrary', AO: 'contradictory', EI: 'contradictory', AI: 'subalternation', EO: 'subalternation' }[p];
}

/* ── Drawing: the spheres ─────────────────────────────────────────────────── */

const NS = 'http://www.w3.org/2000/svg';
const PW = 240, PH = 150;                       // a panel's drawing
const FRAME = { x: 4, y: 4, width: 232, height: 142, rx: 10 };

// Where each sphere stands in each drawing, where its name goes, and where a
// mark of "something is here" goes in each cell. The geometry repeats from
// panel to panel, so that figures can be compared across the sources.
const GEO = {
  A:   { S: { cx: 104, cy: 90, r: 30 }, P: { cx: 128, cy: 78, r: 60 },
         lab: { S: [104, 90, 54], P: [152, 38, 74] }, non: [12, 138],
         dot: { '11': [114, 110], '01': [166, 100], '00': [22, 22] } },
  EQ:  { S: { cx: 120, cy: 76, r: 56 }, P: { cx: 120, cy: 76, r: 56 },
         lab: { S: [120, 50, 96], P: [120, 104, 96] }, non: [12, 138], eq: [120, 79],
         dot: { '11': [120, 122], '00': [22, 22] } },
  E:   { S: { cx: 64, cy: 74, r: 44 }, P: { cx: 176, cy: 74, r: 44 },
         lab: { S: [64, 70, 78], P: [176, 70, 78] }, non: [120, 140],
         dot: { '10': [64, 98], '01': [176, 98], '00': [120, 24] } },
  I:   { S: { cx: 92, cy: 74, r: 50 }, P: { cx: 148, cy: 74, r: 50 },
         lab: { S: [66, 52, 56], P: [174, 52, 56] }, non: [120, 140],
         dot: { '11': [120, 92], '10': [64, 96], '01': [176, 96], '00': [20, 22] } },
  PT:  { S: { pt: [106, 92] }, P: { cx: 128, cy: 78, r: 60 },
         lab: { S: [116, 96, 70, 'start'], P: [152, 38, 74] }, non: [12, 138],
         dot: { '11': [106, 92], '01': [168, 108], '00': [22, 22] } },
  PTN: { S: { pt: [34, 78] }, P: { cx: 152, cy: 78, r: 58 },
         lab: { S: [26, 98, 60, 'start'], P: [152, 78, 90] }, non: [12, 138],
         dot: { '10': [34, 78], '01': [152, 104], '00': [22, 22] } },
  MED: { S: { cx: 100, cy: 100, r: 21 }, M: { cx: 110, cy: 88, r: 42 }, P: { cx: 124, cy: 77, r: 64 },
         lab: { S: [100, 100, 38], M: [116, 63, 60], P: [160, 31, 64] }, non: [12, 138],
         dot: { '111': [100, 112], '011': [136, 104], '001': [168, 72], '000': [22, 22] } }
};
GEO.O = GEO.I;
GEO.MEDPT = Object.assign({}, GEO.MED, { S: { pt: [98, 102] }, lab: { S: [106, 106, 50, 'start'], M: [116, 63, 60], P: [160, 31, 64] } });

function S(tag, attrs, parent) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
function flat(t) { return t.replace(/\s*\|?\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim(); }

// A label on a shape: wrapped onto two lines, and shrunk, if it is long.
function label(svg, x, y, text, cls, maxw, anchor, big) {
  let size = big && text.length <= 7 ? (text.length <= 2 ? 30 : 22) : 15, lines = [text];
  const fits = (ls, s) => ls.every(l => l.length * s * 0.5 <= maxw);
  if (!fits(lines, size)) {
    const w = text.split(' ');
    if (w.length > 1) {
      let best = null;
      for (let i = 1; i < w.length; i++) {
        const ls = [w.slice(0, i).join(' '), w.slice(i).join(' ')];
        const m = Math.max(ls[0].length, ls[1].length);
        if (!best || m < best.m) best = { ls, m };
      }
      lines = best.ls;
    }
    while (size > 11 && !fits(lines, size)) size -= 0.5;
  }
  const t = S('text', { x, y: y - (lines.length - 1) * size * 0.55 + size * 0.35, class: 'lbl' + (cls ? ' ' + cls : ''),
                        'text-anchor': anchor || 'middle', 'font-size': size }, svg);
  lines.forEach((l, i) => { const ts = S('tspan', { x, dy: i ? size * 1.1 : 0 }, t); ts.textContent = l; });
  S('title', {}, t).textContent = text;
  return t;
}

// Fill one cell of a drawing: inside its own spheres, outside the others.
function fillCell(svg, defs, geo, cfg, key, cls) {
  const id = 'c' + (++uid);
  const ins = [], outs = [];
  cfg.terms.forEach((t, i) => {
    const c = geo[t];
    if (!c || c.pt) return;
    (key[i] === '1' ? ins : outs).push(c);
  });
  let parent = svg;
  ins.slice(1).forEach((c, n) => {
    const cp = S('clipPath', { id: id + 'k' + n }, defs);
    S('circle', { cx: c.cx, cy: c.cy, r: c.r }, cp);
    parent = S('g', { 'clip-path': 'url(#' + id + 'k' + n + ')' }, parent);
  });
  let mask = null;
  if (outs.length) {
    mask = S('mask', { id: id + 'm' }, defs);
    S('rect', { x: 0, y: 0, width: PW, height: PH, fill: '#fff' }, mask);
    outs.forEach(c => S('circle', { cx: c.cx, cy: c.cy, r: c.r, fill: '#000' }, mask));
  }
  const shape = ins.length ? S('circle', { cx: ins[0].cx, cy: ins[0].cy, r: ins[0].r }) : S('rect', FRAME);
  shape.setAttribute('class', cls);
  if (mask) shape.setAttribute('mask', 'url(#' + id + 'm)');
  parent.appendChild(shape);
}

// Normalise a judgement's form for drawing: a singular counts as a universal.
function drawForm(form) { return form.charAt(0) === 'S' ? (form === 'S-' ? 'E' : 'A') : form; }

// Draw one judgement on its figure.
//   j      { form, sp: [X, Y] }
//   names  term -> concept name
//   opts   { supplied, small, nonP: whether to name what lies outside P }
function sphereSVG(cfgKey, j, names, opts) {
  opts = opts || {};
  const cfg = CONFIGS[cfgKey], geo = GEO[cfgKey];
  const svg = S('svg', { viewBox: '0 0 ' + PW + ' ' + PH, role: 'img' });
  const defs = S('defs', {}, svg);
  S('rect', Object.assign({ class: 'u' }, FRAME), svg);
  const body = S('g', { class: opts.supplied ? 'sup' : null }, svg);
  const f = drawForm(j.form), X = j.sp[0], Y = j.sp[1];
  const inX = termTest(cfg, X);
  const res = verdict(cfgKey, j.form, j.sp);
  const live = k => cfg.cells[k] !== 'empty';
  const cells = Object.keys(cfg.cells);
  const pointX = cfg.point && X === 'S';

  // What is shaded: the whole subject for A and E, the region claimed for I and O.
  const shaded = (f === 'A' || f === 'E') ? cells.filter(k => inX(k) && live(k)) : res.region.filter(live);
  if (!pointX) shaded.forEach(k => fillCell(body, defs, geo, cfg, k, 'emph'));

  // The spheres, the one the judgement turns on drawn heavier.
  const keyTerm = (f === 'A' || f === 'E') ? Y : X;
  const keySphere = keyTerm === 'nonP' ? 'P' : keyTerm === 'SP' ? null : keyTerm;
  cfg.terms.slice().reverse().forEach(t => {
    const c = geo[t];
    if (c.pt) return;
    if (cfgKey === 'EQ' && t === 'S') return;    // one circle for two equal spheres
    const cls = 'sph' + (t === 'M' ? ' mid' : t === keySphere || (cfgKey === 'EQ' && keySphere) ? ' key' : '');
    S('circle', { cx: c.cx, cy: c.cy, r: c.r, class: cls }, body);
  });
  if (cfg.point) {
    const p = geo.S.pt;
    if (pointX) S('circle', { cx: p[0], cy: p[1], r: 9, class: 'emph' }, body);
    S('circle', { cx: p[0], cy: p[1], r: 4.5, class: 'pt' }, body);
  }

  // A mark of "something is here", for I and O: solid where the premise puts it
  // there, hollow with a query where the figure only leaves room for it.
  if ((f === 'I' || f === 'O') && !pointX) {
    const given = res.region.filter(k => cfg.cells[k] === 'given')[0];
    const open = res.region.filter(k => cfg.cells[k] === 'open')[0];
    const k = given || open;
    if (k && geo.dot[k]) {
      const d = geo.dot[k];
      S('circle', { cx: d[0], cy: d[1], r: opts.small ? 8 : 4.5, class: given ? 'dot' : 'dot open' }, body);
      if (!given) S('text', { x: d[0] + 7, y: d[1] + 4, class: 'qmark' }, body).textContent = '?';
    }
    if (!k) {
      S('rect', { x: 62, y: 6, width: 116, height: 17, rx: 8.5, class: 'void' }, svg);
      S('text', { x: 120, y: 19, 'text-anchor': 'middle', class: 'voidt' }, svg).textContent = '∅ no such region';
    }
  }

  // Names on the shapes.
  cfg.terms.forEach(t => {
    const L = geo.lab[t];
    if (!L) return;
    label(svg, L[0], L[1], names[t] || t, t === keyTerm ? 'key' : t === 'M' ? 'key' : null, L[2], L[3], opts.small);
  });
  if (cfgKey === 'EQ') S('text', { x: geo.eq[0], y: geo.eq[1] + 4, 'text-anchor': 'middle', class: 'lbl soft' }, svg).textContent = '=';
  if (opts.nonP) label(svg, geo.non[0], geo.non[1] - (opts.small ? 6 : 0), names.nonP, 'soft' + (keyTerm === 'nonP' ? ' key' : ''), 120,
                       geo.non[0] < 60 ? 'start' : 'middle', opts.small);

  svg.setAttribute('aria-label', describe(cfgKey, names) + ' Shaded: ' + describeShade(f, X, Y, names) + '.');
  return { svg, res };
}

function describe(cfgKey, n) {
  const s = n.S, p = n.P;
  return {
    A: 'The sphere of ' + s + ' lies inside the sphere of ' + p + '.',
    EQ: 'The spheres of ' + s + ' and ' + p + ' coincide.',
    E: 'The spheres of ' + s + ' and ' + p + ' lie apart.',
    I: 'The spheres of ' + s + ' and ' + p + ' overlap.',
    O: 'The spheres of ' + s + ' and ' + p + ' overlap.',
    PT: s + ' is a point inside the sphere of ' + p + '.',
    PTN: s + ' is a point outside the sphere of ' + p + '.',
    MED: 'The sphere of ' + s + ' lies inside that of ' + n.M + ', which lies inside that of ' + p + '.',
    MEDPT: s + ' is a point inside the sphere of ' + n.M + ', which lies inside that of ' + p + '.'
  }[cfgKey];
}
function describeShade(f, X, Y, n) {
  const x = X === 'SP' ? n.P + ' ' + n.S : n[X], y = n[Y];
  return f === 'A' || f === 'E' ? 'all of ' + x + (f === 'A' ? ', within ' : ', apart from ') + y
       : 'what is ' + x + ' and ' + (f === 'O' ? 'not ' : '') + y;
}

// The names to draw: the example's terms, else the bare letters.
function namesOf(ex) {
  const T = (ex && ex.diagram && ex.diagram.terms) || {};
  return { S: T.S || 'S', P: T.P || 'P', M: T.M || 'M', nonP: T.nonP || (T.P ? 'nicht ' + T.P : 'nicht-P') };
}

/* ── Drawing: the square of opposition ────────────────────────────────────── */

const SQ = { w: 360, h: 252, c: [[104, 82], [256, 82], [104, 178], [256, 178]] };   // A E I O
const SCHEMA_TEXT = { A: 'alle S sind P', E: 'kein S ist P', I: 'einige S sind P', O: 'einige S sind nicht P' };

// A small Euler figure for a form, at a corner.
function miniEuler(svg, x, y, form, k) {
  const g = S('g', { transform: 'translate(' + x + ',' + y + ')' + (k ? ' scale(' + k + ')' : '') }, svg);
  const c = (cx, cy, r, cls) => S('circle', { cx, cy, r, class: cls || 'sph' }, g);
  if (form === 'A') { c(0, 0, 15); S('circle', { cx: -4, cy: 3, r: 7, class: 'emph' }, g); c(-4, 3, 7); }
  if (form === 'E') { c(-11, 0, 9); c(11, 0, 9); }
  if (form === 'I' || form === 'O') { c(-6, 0, 11); c(6, 0, 11); S('circle', { cx: form === 'I' ? 0 : -11, cy: 2, r: 2.6, class: 'dot' }, g); }
  S('title', {}, g).textContent = FORM_NAME[form] + ': ' + SCHEMA_TEXT[form];
}

function wrapLines(text, max) {
  const words = text.split(' '), lines = [''];
  words.forEach(w => {
    const cur = lines[lines.length - 1];
    if (cur && (cur + ' ' + w).length > max) lines.push(w); else lines[lines.length - 1] = cur ? cur + ' ' + w : w;
  });
  if (lines.length > 2) { lines.length = 2; lines[1] = lines[1].replace(/\s*\S*$/, '') + ' …'; }
  return lines;
}

// spec: { at: { A: [judgement...], ... }, on: [relation keys], no: [relation keys],
//         arrow: [fromCorner, toCorner], schematic, actual }
function squareSVG(spec) {
  const svg = S('svg', { viewBox: '0 0 ' + SQ.w + ' ' + SQ.h, role: 'img' });
  const P = SQ.c, F = ['A', 'E', 'I', 'O'];
  const defs = S('defs', {}, svg);
  const mk = 'a' + (++uid);
  const m = S('marker', { id: mk, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto' }, defs);
  S('path', { d: 'M1 1L8 5L1 9', fill: 'none', stroke: '#5c3d1e', 'stroke-width': 1.8, 'stroke-linecap': 'round' }, m);

  const EDGES = [
    ['contrary', 0, 1, 'contrarie', [180, 74]],
    ['subcontrary', 2, 3, 'subcontrarie', [180, 196]],
    ['contradictory', 0, 3, 'contradictorie', [180, 126]],
    ['contradictory', 1, 2, null, null],
    ['subalternation', 0, 2, 'subalternae', [88, 132, 'end']],
    ['subalternation', 1, 3, 'subalternae', [272, 132, 'start']]
  ];
  EDGES.forEach(([rel, a, b, text, at]) => {
    const pair = F[a] + F[b];
    const on = spec.on.indexOf(pair) >= 0 || spec.on.indexOf(rel) >= 0;
    const no = spec.no.indexOf(pair) >= 0;
    const pa = P[a], pb = P[b];
    const shrink = (p, q, d) => { const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy); return [p[0] + dx * d / L, p[1] + dy * d / L]; };
    const s = shrink(pa, pb, 17), e = shrink(pb, pa, 17);
    const line = S('line', { x1: s[0], y1: s[1], x2: e[0], y2: e[1], class: 'edge' + (no ? ' no' : on ? ' on' : '') }, svg);
    const arrow = spec.arrow && ((spec.arrow[0] === a && spec.arrow[1] === b) || (spec.arrow[0] === b && spec.arrow[1] === a));
    if (arrow) {
      if (spec.arrow[0] === b) { line.setAttribute('x1', e[0]); line.setAttribute('y1', e[1]); line.setAttribute('x2', s[0]); line.setAttribute('y2', s[1]); }
      line.setAttribute('marker-end', 'url(#' + mk + ')');
    }
    if (no) {
      const mx = (pa[0] + pb[0]) / 2, my = (pa[1] + pb[1]) / 2;
      const g = S('g', { stroke: '#8a2b1c', 'stroke-width': 2.4, 'stroke-linecap': 'round' }, svg);
      S('line', { x1: mx - 6, y1: my - 6, x2: mx + 6, y2: my + 6 }, g);
      S('line', { x1: mx + 6, y1: my - 6, x2: mx - 6, y2: my + 6 }, g);
    }
    if (text && rel !== 'contradictory') {
      const t = S('text', { x: at[0], y: at[1], 'text-anchor': at[2] || 'middle', class: 'elab' + (no ? ' no' : on ? ' on' : '') }, svg);
      t.textContent = no ? 'no inference' : text;
    }
  });
  // The diagonals share one label, at the crossing; left out when another relation is the point.
  const dOn = ['AO', 'EI'].some(p => spec.on.indexOf(p) >= 0) || spec.on.indexOf('contradictory') >= 0;
  const dNo = ['AO', 'EI'].some(p => spec.no.indexOf(p) >= 0);
  if (dOn || dNo || spec.schematic || !spec.on.length) {
    S('rect', { x: 136, y: 115, width: 88, height: 15, fill: '#fbf8ef' }, svg);
    S('text', { x: 180, y: 126, 'text-anchor': 'middle', class: 'elab' + (dNo ? ' no' : dOn ? ' on' : '') }, svg)
      .textContent = dNo ? 'no inference' : 'contradictorie';
  }

  F.forEach((form, i) => {
    const [x, y] = P[i];
    const js = spec.at[form] || [];
    const g = S('g', { class: 'corner' + (js.length ? '' : ' empty') }, svg);
    if (js.length) g.dataset.n = js.map(j => j.n).join(' ');
    S('rect', { x: x - 14, y: y - 14, width: 28, height: 28, rx: 3, class: 'cbox' + (js.length || spec.schematic ? '' : ' blank') }, g);
    S('text', { x, y: y + 5.5, 'font-size': 15, class: 'cletter' + (js.length || spec.schematic ? '' : ' blank') }, g).textContent = form;
    miniEuler(svg, x + (i % 2 ? 42 : -42), y, form);
    // The passage's own judgement at its corner; or, in a schematic square, the bare form.
    let lines = [], cls = 'ctext';
    if (js.length) lines = wrapLines(js.map(j => flat(j.t)).join(' / '), 25);
    else if (spec.schematic) { lines = [SCHEMA_TEXT[form]]; cls = 'ctext none'; }
    // A truth value the passage states goes on a line of its own.
    const tv = js.filter(j => j.tv)[0];
    const n = lines.length + (tv ? 1 : 0);
    const y0 = i < 2 ? y - 31 - 15 * (n - 1) : y + 36;
    const tx = S('text', { x, y: y0, 'text-anchor': 'middle', class: cls }, g);
    lines.forEach((l, k) => { const ts = S('tspan', { x, dy: k ? 15 : 0 }, tx); ts.textContent = l; });
    if (tv) {
      const ts = S('tspan', { x, dy: lines.length ? 15 : 0, class: 'tvtag' }, tx);
      ts.textContent = tv.tv === 'false' ? '— said to be false' : '— said to be true';
    }
    if (js.length) S('title', {}, g).textContent = js.map(j => flat(j.t) + ' (' + FORM_NAME[j.form] + ')').join('; ');
  });
  return svg;
}

// The square for a passage: its judgements at their corners, and its relation drawn.
function squareFigure(ex) {
  const at = {};
  ex.judgements.forEach(j => { (at[j.form] = at[j.form] || []).push(j); });
  const forms = Object.keys(at);
  const on = [], actual = [];
  for (let a = 0; a < forms.length; a++) for (let b = a + 1; b < forms.length; b++) {
    const pair = [forms[a], forms[b]].sort().join('');     // as the edges are named: AE IO AO EI AI EO
    const rel = relationOf(forms[a], forms[b]);
    actual.push({ rel, pair });
    if (ex.kinds.indexOf(rel) >= 0) on.push(pair);
  }
  // The passage's kinds pick the relation; where the judgements written out stand
  // in another one, the square shows the one they stand in, and says so.
  let mismatch = null;
  if (!on.length && actual.length) { actual.forEach(r => on.push(r.pair)); mismatch = actual.map(r => r.rel); }
  const no = ex.invalid ? on.splice(0) : [];
  const pre = ex.judgements.filter(j => j.role === 'premise')[0], con = ex.judgements.filter(j => j.role === 'conclusion')[0];
  // An arrow only where the passage goes down from a universal to its particular:
  // between opposites the square says what is compatible, not what follows.
  const arrow = pre && con && relationOf(pre.form, con.form) === 'subalternation' ? [CORNER[pre.form], CORNER[con.form]] : null;
  const svg = squareSVG({ at, on, no, arrow, schematic: false });
  svg.setAttribute('aria-label', 'Square of opposition. ' + forms.map(f => f + ': ' + at[f].map(j => flat(j.t)).join(' / ')).join('. ') +
    '. Relation drawn: ' + (mismatch || ex.kinds.filter(k => OPPOSITION.indexOf(k) >= 0)).join(', ') + '.');
  return { svg, mismatch };
}

/* ── Figures for a passage ────────────────────────────────────────────────── */

const ROLE_ORDER = { premise: 0, member: 0, major: 0, minor: 1, intermediate: 1, conclusion: 2, rejected: 3 };
const STEP = { conversion: ['→', 'per conversionem'], contraposition: ['→', 'per contra­positionem'],
               aequipollentia: ['≡', 'gleich­geltend'], subalternation: ['↓', 'subalternatio'] };
const PROV = 'Solid: in the passage. Dashed: supplied here. The concept names, and which judgement is read as subject and predicate, are the annotator’s.';

function stepEl(sym, words) {
  const s = el('div', 'step', sym);
  s.setAttribute('aria-hidden', 'true');
  if (words) s.append(el('small', null, words));
  return s;
}

function formBadge(form, stated) {
  const f = el('span', 'form' + (stated ? '' : ' inferred'), form);
  f.title = FORM_NAME[form] + (stated ? ', as the passage says' : ', read off the sentence; the passage does not say');
  return f;
}

// The caption under one panel: who it is, what it says, and what the figure says of it.
function panelCaption(ex, it, res, isBase) {
  const j = it.j, cap = el('div', 'pcap');
  cap.append(el('span', 'role', it.supplied ? 'Supplied · not in the passage' : (ROLE_LABEL[j.role] || j.role) + (j.via ? ' · by ' + VIA[j.via] : '')));
  if (it.supplied) {
    cap.append(formBadge(j.form, false), el('span', 'gloss', it.supplied));
    return cap;
  }
  cap.append(formBadge(j.form, j.formStated), el('q', null, flat(j.t)));
  if (j.tv) cap.append(el('span', 'tv', j.tv === 'false' ? 'said to be false' : 'said to be true'));
  if (j.supply) cap.append(el('span', 'gloss', 'read as “' + j.supply + '”'));
  if (!isBase && res) {
    let text = verdictText(ex, j, res);
    if (res.v === 'ok' && ex.kinds.indexOf('aequipollentia') >= 0) text = 'Same figure, same claim: the two say the same thing.';
    if (text) cap.append(el('div', 'verdict ' + res.v, text));
  }
  return cap;
}

function panelFor(ex, cfgKey, it, names, nonP, isBase) {
  const out = sphereSVG(cfgKey, it.j, names, { supplied: !!it.supplied, nonP });
  const p = el('div', 'panel' + (it.supplied ? ' supplied' : ''));
  if (!it.supplied && it.j.n != null) p.dataset.n = it.j.n;
  p.append(out.svg, panelCaption(ex, it, out.res, isBase));
  return { p, res: out.res };
}

// Conversion, contraposition, equipollence: one drawing, a panel per judgement.
function spheresFigure(ex, fig) {
  const names = namesOf(ex), d = ex.diagram || {};
  const J = ex.judgements.slice().sort((a, b) => ROLE_ORDER[a.role] - ROLE_ORDER[b.role] || a.n - b.n);
  const base = J.filter(j => j.role === 'premise')[0] || J.filter(j => j.role === 'member' && j.form === 'A')[0] || J[0];
  const nonP = J.some(j => j.sp.indexOf('nonP') >= 0);
  const items = [];
  if (d.config === 'S<P' && !J.some(j => j.role === 'premise'))
    items.push({ j: { form: 'A', sp: ['S', 'P'], role: 'premise' },
                 supplied: 'The premise the figure assumes, which this passage does not repeat: every “' + names.S + '” is “' + names.P + '”.' });
  J.forEach(j => items.push({ j }));
  if (ex.kinds.indexOf('conversion') >= 0 && J.length === 1 && J[0].role === 'premise') {
    const p = J[0], conv = { A: 'I', E: 'E', I: 'I' }[p.form];
    if (conv) items.push({ j: { form: conv, sp: [p.sp[1], p.sp[0]], role: 'conclusion' },
                           supplied: 'The converse, which the passage does not write out.' });
  }
  const kindKey = ex.kinds.filter(k => STEP[k])[0];
  const box = el('div', 'panels');
  const verdicts = [];
  items.forEach((it, i) => {
    const isBase = it.j === base || (it.supplied && it.j.role === 'premise');
    const { p, res } = panelFor(ex, fig.cfg, it, names, nonP, isBase);
    if (!isBase && !it.supplied) verdicts.push({ id: ex.id, n: it.j.n, role: it.j.role, v: res.v });
    if (!i) { box.append(p); return; }
    // The step travels with the panel it leads to, so a wrapped row never ends on an arrow.
    const j = it.j;
    const step = j.role === 'rejected' ? stepEl('↛', 'rejected')
               : j.via ? stepEl(STEP[j.via] ? STEP[j.via][0] : '→', STEP[j.via] ? STEP[j.via][1] : '')
               : kindKey ? stepEl(STEP[kindKey][0], STEP[kindKey][1]) : stepEl('→');
    const w = el('div', 'pstep');
    w.append(step, p);
    box.append(w);
  });
  fig.verdicts = verdicts;
  if (items.length <= 2) box.classList.add('few');
  return { body: box, title: 'Spheres', caption: 'One drawing for every panel; only the shading moves: “der Materie nach eins, nur Form verschieden” (Wiener Logik, AA 24:938).' };
}

// A counter-example: nested spheres, the middle term marked.
function mediateFigure(ex, fig) {
  const names = namesOf(ex), d = ex.diagram || {};
  const con = ex.judgements.filter(j => j.role === 'conclusion')[0] || ex.judgements[0];
  const out = sphereSVG(fig.cfg, { form: con.form, sp: ['S', 'P'] }, names, {});
  const L = GEO[fig.cfg].lab.M;
  S('text', { x: L[0], y: L[1] + 15, 'text-anchor': 'middle', class: 'lbl soft', 'font-size': 11.5 }, out.svg).textContent = 'middle term';
  const p = el('div', 'panel wide');
  p.dataset.n = con.n;
  p.append(out.svg);
  const rows = ex.judgements.map(j => ({ j, role: j.role === 'premise' ? (j.sp.indexOf('M') >= 0 && j.sp.indexOf('P') >= 0 ? 'major' : 'minor') : j.role }))
    .concat((d.supplied || []).map(s => ({ j: s, role: s.role, supplied: true })));
  rows.sort((a, b) => ROLE_ORDER[a.role] - ROLE_ORDER[b.role]);
  const ul = el('ul', 'syllogism');
  rows.forEach(r => {
    const li = el('li', r.supplied ? 'supplied' : '');
    li.append(el('span', 'rl', ROLE_LABEL[r.role] || r.role));
    if (r.supplied) { li.append(el('i', null, r.j.t), el('span', 'sup', 'supplied, not in the passage')); }
    else { li.dataset.n = r.j.n; li.append(el('q', null, flat(r.j.t))); if (r.j.supply) li.append(el('span', 'sup', 'read as “' + r.j.supply + '”')); }
    ul.append(li);
  });
  const box = el('div', 'panels');
  const right = el('div');
  right.style.flex = '1 1 220px';
  right.append(ul);
  box.append(p, right);
  return { body: box, title: 'Spheres, with a middle term',
           caption: 'Not immediate: to reach “' + flat(con.supply || con.t) + '” the figure needs a third sphere, “' + names.M + '”, between “' + names.S + '” and “' + names.P + '”.' };
}

// A singular judgement: its subject is one thing, drawn as a point.
function singularFigure(ex, fig) {
  const names = namesOf(ex), j = ex.judgements[0];
  const box = el('div', 'panels');
  box.append(panelFor(ex, fig.cfg, { j }, names, false, true).p);
  if (ex.kinds.indexOf('contradictory') >= 0) {
    const w = el('div', 'pstep');
    box.append(w);
    w.append(stepEl('⟷', 'contra­dictorie'));
    const neg = { form: j.form === 'S+' ? 'S-' : 'S+', sp: j.sp, role: 'member' };
    w.append(panelFor(ex, j.form === 'S+' ? 'PTN' : 'PT', { j: neg,
      supplied: 'Its contradictory, which the passage does not write out: the same subject, “' + names.S + '”, ' + (j.form === 'S+' ? 'outside' : 'inside') + ' “' + names.P + '”.' },
      names, false, true).p);
  }
  box.classList.add('few');
  return { body: box, title: 'Spheres, singular', caption: 'A singular judgement: its subject is one thing, drawn as a point. Its contradictory keeps the same subject.' };
}

function squareFigureBox(ex) {
  const { svg, mismatch } = squareFigure(ex);
  const box = el('div', 'fig-square');
  box.append(svg);
  const rels = ex.kinds.filter(k => OPPOSITION.indexOf(k) >= 0);
  let cap = 'The passage’s own judgements at their corners, universals above and particulars below; the ' +
            (mismatch || rels).join(' and ') + ' relation drawn heavy.';
  if (mismatch) cap += ' The judgements written out stand in this relation, though the passage is filed under ' + rels.join(' and ') +
                       '; the square shows the relation they actually stand in.';
  if (ex.invalid) cap += ' Crossed: the inference the passage rules out.';
  return { body: box, title: 'Square of opposition', caption: cap };
}

// No instance: the kind in general, with bare letters, all of it supplied.
function schemaFigure(ex, fig) {
  const box = el('div');
  const L = { S: 'S', P: 'P', M: 'M', nonP: 'nicht-P' };
  const row = (label, pairs, sym, words) => {
    const r = el('div', 'schema-row');
    const lab = el('div', 'rl');
    lab.innerHTML = label;
    r.append(lab);
    pairs.forEach((pr, i) => {
      if (i) r.append(stepEl(sym, words));
      const p = el('div', 'panel supplied');
      p.append(sphereSVG(pr[0], { form: pr[1], sp: pr[2] }, L, { supplied: true, nonP: pr[3], small: true }).svg);
      r.append(p);
    });
    box.append(r);
  };
  fig.families.forEach(f => {
    if (f === 'square' || f === 'vowels') {
      const on = f === 'square' ? ex.kinds.filter(k => OPPOSITION.indexOf(k) >= 0) : [];
      const sq = el('div', 'fig-square');
      const svg = squareSVG({ at: {}, on, no: [], schematic: true });
      svg.setAttribute('aria-label', 'Schematic square of opposition, ' + (on.length ? on.join(', ') + ' drawn heavy' : 'the four forms'));
      sq.append(svg);
      box.append(sq);
    }
    if (f === 'conversion') {
      row('<b>A → I</b><br>per accidens', [['A', 'A', ['S', 'P']], ['A', 'I', ['P', 'S']]], '→');
      row('<b>E → E</b><br>simpliciter', [['E', 'E', ['S', 'P']], ['E', 'E', ['P', 'S']]], '→');
      row('<b>I → I</b><br>simpliciter', [['I', 'I', ['S', 'P']], ['I', 'I', ['P', 'S']]], '→');
    }
    if (f === 'contraposition') row('<b>A → E</b><br>alle S sind P; was nicht P ist, ist nicht S', [['A', 'A', ['S', 'P'], true], ['A', 'E', ['nonP', 'S'], true]], '→');
    if (f === 'aequipollentia') row('<b>A ≡ E</b><br>alle S sind P; kein S ist nicht-P', [['A', 'A', ['S', 'P'], true], ['A', 'E', ['S', 'nonP'], true]], '≡');
    if (f === 'general') {
      row('<b>unmittelbar</b><br>absque medio termino', [['A', 'A', ['S', 'P']], ['A', 'I', ['P', 'S']]], '→');
      row('<b>mittelbar</b><br>per terminum medium', [['MED', 'A', ['S', 'P']]], '');
    }
  });
  return { body: box, title: 'Schematic',
           caption: 'The passage writes out no instance, so the letters stand for any concepts. This is the kind in general, not a reading of the passage.' };
}

function buildFigure(ex) {
  const fig = ex.fig;
  const fe = el('figure', 'card-fig');
  let made;
  try {
    made = fig.type === 'spheres' ? spheresFigure(ex, fig) : fig.type === 'square' ? squareFigureBox(ex)
         : fig.type === 'mediate' ? mediateFigure(ex, fig) : fig.type === 'singular' ? singularFigure(ex, fig) : schemaFigure(ex, fig);
  } catch (err) {
    fig.error = err.message;
    fe.append(el('p', 'broken', 'The figure could not be drawn: ' + err.message));
    return fe;
  }
  const head = el('div', 'fig-head');
  head.append(el('span', 'ft', made.title));
  const T = (ex.diagram && ex.diagram.terms) || null;
  if (T && fig.type !== 'schema') {
    const t = el('span', 'terms');
    t.title = 'The concept names are the annotator’s short forms';
    ['S', 'M', 'P', 'nonP'].forEach((k, i) => {
      if (!T[k]) return;
      if (t.childNodes.length) t.append(' · ');
      t.append((k === 'nonP' ? 'nicht-P' : k) + ' = ', el('i', null, T[k]));
    });
    head.append(t);
  }
  fe.append(head, made.body);
  const cap = el('figcaption', null, made.caption);
  cap.append(el('span', 'prov', fig.type === 'schema' ? 'Dashed throughout: nothing in this figure is from the passage.' : PROV));
  fe.append(cap);
  return fe;
}
return { load: () => { if (!examples.length) loadExamples(); return examples; }, figure: buildFigure };
})();
