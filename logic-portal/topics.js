/* ═══════════════════════════════════════════════════════════════════════════
   MY TOPICS

   Passages a reader keeps for their own research, filed under topics of their own. A topic
   works like a label, not a folder: one passage can stand under several topics at once, as
   one passage with one note. Each passage keeps its portal address ('textKey:id') beside a
   short copy of its words and its citation, so that it opens where it stands in the reader,
   and the list still reads if a text is later re-extracted.

   Each topic can have a board of its own, topic-board.html, where its passages are cards to
   lay out, join with arrows and annotate. The board is kept here, in the same store, so it goes
   wherever the topics go: it is saved, filed, locked and merged with them. The board page
   writes into this browser's store itself; this file sends that change to GitHub as it sends
   its own.

   The topics are their owner's alone. They are kept in this browser's localStorage, under
   one key, and nothing is sent anywhere unless their owner turns on "Keep on GitHub". Then a
   copy goes, a few seconds after each change, to one file of their own in the seminar's
   private repository (GH below), <dir>/<login>.json, saved with their own GitHub token and
   locked in the browser first with a passphrase only they know (PBKDF2-SHA-256, then
   AES-GCM). Everyone in the organisation can open that repository, which is why the file is
   locked: they can see that it exists and when it changed, never what is in it. The browser's
   copy is still the one worked on, and GitHub's is kept the same, so that the same topics
   appear on every computer their owner uses.

   When two copies meet (GitHub's and this browser's, or a file opened), they are merged: the
   same passage is one passage, the later change wins, deletions are remembered (gone) so that
   an older copy can't bring them back, two topics of the same name become one, and where both
   copies changed a note since they last matched, both versions are kept. The page says so
   only when a merge did one of the last three.

   My topics is off until a reader turns it on, as handout mode is, so that nobody meets
   buttons they did not ask for. The portal is a closed IIFE: this file reads it only through
   window.PORTAL, and draws nothing inside the portal's own markup but one button beside the
   passage open on the right, and the header's button. Every data- attribute here starts
   data-mt, because the portal's own click handler acts on its data- attributes wherever they
   are.
   ═══════════════════════════════════════════════════════════════════════════ */
(() => {
'use strict';
const PT = window.PORTAL;
if (!PT || !PT.P || !PT.TEXTS) return;
const { S, P, TEXTS } = PT;

/* ── Where a copy can be kept on GitHub ──────────────────────────────────────
   The seminar's private repository that the kinds-of-nothing queue keeps its flags in, so
   that a token made for the queue serves here too. Each person's file is <dir>/<login>.json.
   Change these if the topics move to a repository of their own. */
const GH = { owner: 'kant-lab-seminar', repo: 'queues', branch: 'main', dir: 'topics' };
const API = 'https://api.github.com';                 // the only place the token is ever sent
const REPO = '/repos/' + GH.owner + '/' + GH.repo;
const HOWTO = 'https://github.com/mikrishnan/kant-lab/blob/main/logic-portal/README.md#my-topics';
const TOKEN_HOWTO = 'https://github.com/mikrishnan/kant-lab/blob/main/logic-portal/studies/kinds-of-nothing/README.md#joining-once';

/* ── This browser's keys ─────────────────────────────────────────────────── */
const KEY = 'kantlab-topics-v1';               // the topics themselves
const BASE_KEY = 'kantlab-topics-base';        // the copy as it last stood on GitHub, to tell who changed what
const MODE_KEY = 'kantlab-topics-mode';        // 'on', or absent for off
const FILED_KEY = 'kantlab-topics-filed';      // when they were last saved to a file
const GH_KEY = 'kantlab-topics-github';        // { login, at } while GitHub is on in this browser
const TOKEN_KEY = 'kantlab-topics-token';      // in sessionStorage, or in localStorage with "remember"
const QUEUE_TOKEN_KEY = 'kantlab-queue-token'; // the queue's, offered if it is here
const IDB_NAME = 'kantlab-topics';             // the remembered key, which can't be copied out
const ROUNDS = 600000;                         // PBKDF2's rounds, as lock.js has for the class password
const SAVE_MS = 3000;                          // how long after the last change the copy goes to GitHub
const NOTE_SEP = '\n\n— from another copy —\n';
const HOVER = '.hit[data-open], .fp[data-fp], .frow[data-fp], .ncard[data-note]';
const TEXT_SEL = '.fpt, .ptext, .kw, .preview, .pcell, .tt, .fen, .frow, .ncard';

/* ── Small helpers ───────────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const flat = s => String(s || '').replace(/\s+/g, ' ').trim();
const clip = (s, n) => s.length > n ? s.slice(0, n - 1) + '…' : s;
const norm = s => flat(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss').toLowerCase();
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const now = () => new Date().toISOString();
const plural = (n, w, ws) => n + ' ' + (n === 1 ? w : (ws || w + 's'));
const cap = s => s ? s[0].toUpperCase() + s.slice(1) : s;
const el = (tag, id, cls) => { const e = document.createElement(tag); if (id) e.id = id; if (cls) e.className = cls; return e; };
const nodeEl = n => n && (n.nodeType === 1 ? n : n.parentElement);
const get = (store, k) => { try { return store.getItem(k); } catch (e) { return null; } };
const put = (store, k, v) => { try { if (v == null) store.removeItem(k); else store.setItem(k, v); return true; } catch (e) { return false; } };
const dayWords = iso => {
  const d = new Date(iso);
  if (isNaN(d)) return '';
  return d.toLocaleDateString('en-GB', d.getFullYear() === new Date().getFullYear() ? { day: 'numeric', month: 'long' } : { day: 'numeric', month: 'long', year: 'numeric' });
};
const timeWords = iso => {
  const d = new Date(iso);
  if (isNaN(d)) return '';
  const t = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return d.toDateString() === new Date().toDateString() ? t : dayWords(iso) + ', ' + t;
};
const refOf = i => TEXTS[P[i].t].key + ':' + P[i].id;
const idxOf = ref => PT.BYID ? PT.BYID.get(ref) : undefined;
// The texts are in once the portal has hidden its loading screen.
const ready = () => TEXTS.length > 0 && !!$('loading') && $('loading').hidden;

/* ── The store: { v, topics: [{ id, name, note, made, at, order }],
   items: [{ id, ref, topics, cite, work, date, words, excerpt, en, note, added, at }],
   gone: { id: when deleted }, alias: { id of a topic merged away: id it went into },
   boards: { topic id: its board }, annotations: [{ id, kind, on, text, date, at, … }] }.
   `order` is a topic's own arrangement, ids of its passages; passages not in it follow, in
   the order they were kept. A board is topic-board.html's, in the shape of the kinds-of-nothing
   board: { at, models, items, arrows, views, photos }, its passage cards naming the passage
   kept here by its id (mt). Annotations belong to a passage, not to a board, so they are kept
   once, beside the boards, and show on every board where their passage stands. Both are kept
   here as they come, so long as they have the shape the board page reads.
   ─────────────────────────────────────────────────────────────────────────── */
const blank = () => ({ v: 1, topics: [], items: [], gone: {}, alias: {}, boards: {}, annotations: [] });
const clone = o => JSON.parse(JSON.stringify(o));
const isObj = x => !!x && typeof x === 'object' && !Array.isArray(x);
const withId = a => Array.isArray(a) ? a.filter(x => isObj(x) && typeof x.id === 'string') : [];
function cleanBoard(b) {
  if (!isObj(b) || !Array.isArray(b.items)) return null;
  const out = Object.assign({}, b);
  ['models', 'items', 'arrows', 'views', 'photos'].forEach(k => { out[k] = withId(b[k]); });
  out.views.forEach(v => { if (!isObj(v.pos)) v.pos = {}; if (!Array.isArray(v.hidden)) v.hidden = []; if (!Array.isArray(v.ink)) v.ink = []; });
  out.at = typeof b.at === 'string' ? b.at : '';
  return out;
}
// Anything that reads, in one fixed shape, so that two copies of the same topics compare equal.
function clean(d) {
  if (!d || typeof d !== 'object' || !Array.isArray(d.topics) || !Array.isArray(d.items)) return null;
  const out = blank();
  const str = x => typeof x === 'string' ? x : '';
  d.topics.forEach(t => {
    if (!t || typeof t.id !== 'string' || typeof t.name !== 'string') return;
    out.topics.push({ id: t.id, name: t.name.slice(0, 200), note: str(t.note), made: str(t.made) || str(t.at), at: str(t.at) || str(t.made),
      order: Array.isArray(t.order) ? t.order.filter(x => typeof x === 'string') : [] });
  });
  d.items.forEach(x => {
    if (!x || typeof x.id !== 'string' || typeof x.ref !== 'string') return;
    out.items.push({ id: x.id, ref: x.ref, topics: Array.isArray(x.topics) ? [...new Set(x.topics.filter(t => typeof t === 'string'))] : [],
      cite: str(x.cite), work: str(x.work), date: str(x.date), words: str(x.words), excerpt: typeof x.excerpt === 'string' && x.excerpt ? x.excerpt : null,
      en: !!x.en, note: str(x.note), added: str(x.added) || str(x.at), at: str(x.at) || str(x.added) });
  });
  [['gone', out.gone], ['alias', out.alias]].forEach(([k, o]) => {
    if (d[k] && typeof d[k] === 'object') Object.keys(d[k]).forEach(id => { if (typeof d[k][id] === 'string') o[id] = d[k][id]; });
  });
  if (isObj(d.boards)) Object.keys(d.boards).forEach(id => { const b = cleanBoard(d.boards[id]); if (b) out.boards[id] = b; });
  out.annotations = withId(d.annotations);
  return out;
}
const byMade = (a, b) => a.made < b.made ? -1 : a.made > b.made ? 1 : a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
const byAdded = (a, b) => a.added < b.added ? -1 : a.added > b.added ? 1 : a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
const sortKeys = o => Object.keys(o).sort().reduce((r, k) => { r[k] = o[k]; return r; }, {});
// Keys in one order all the way down, for the boards and annotations, which come from another page.
const deep = x => Array.isArray(x) ? x.map(deep) : isObj(x) ? Object.keys(x).sort().reduce((r, k) => { r[k] = deep(x[k]); return r; }, {}) : x;
function canonObj(d) {
  const c = clean(d) || blank();
  c.topics.sort(byMade);
  c.items.forEach(x => x.topics.sort());
  c.items.sort(byAdded);
  c.gone = sortKeys(c.gone); c.alias = sortKeys(c.alias);
  c.boards = deep(c.boards);
  c.annotations = deep(c.annotations.slice().sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  return c;
}
const canon = d => JSON.stringify(canonObj(d));

function load() {
  const raw = get(localStorage, KEY);
  if (!raw) return blank();
  try { const d = clean(JSON.parse(raw)); if (d) return d; } catch (e) { /* kept aside below */ }
  // Never write over a store that would not read: keep it aside under its own key.
  put(localStorage, KEY + '-unreadable-' + Date.now(), raw);
  return blank();
}
let DB = load();
let saveWarned = false;
function save(quiet) {
  if (!put(localStorage, KEY, JSON.stringify(DB)) && !saveWarned) {
    saveWarned = true;
    toast('This browser would not keep the change (its storage is full or switched off). Use Save to file.');
  }
  marks();
  if (!quiet) pushSoon();
}
// Another tab of the portal saved, or a topic's board: take its copy, since every change is
// saved as it is made, and send it to GitHub, since the board page can't.
window.addEventListener('storage', e => {
  if (e.key !== KEY || e.newValue == null) return;
  try { const d = clean(JSON.parse(e.newValue)); if (d) { DB = d; marks(); if (!page.hidden) render(); pushSoon(); } } catch (err) { /* not ours to read */ }
});
// Back to this page by the browser's Back button, from a store that may have changed meanwhile.
window.addEventListener('pageshow', e => {
  if (!e.persisted) return;
  DB = load(); marks(); if (!page.hidden) render();
  if (ghReady()) sync();
});

/* ── Topics and passages ─────────────────────────────────────────────────── */
const topicOf = id => DB.topics.find(t => t.id === id);
const itemOf = id => DB.items.find(x => x.id === id);
const wholeOf = ref => DB.items.find(x => x.ref === ref && !x.excerpt);
const keptAt = ref => DB.items.filter(x => x.ref === ref);
const countIn = id => DB.items.filter(x => x.topics.includes(id)).length;
const sortedTopics = () => DB.topics.slice().sort((a, b) => a.name.localeCompare(b.name, 'de', { sensitivity: 'base' }));
const topicNames = x => x.topics.map(id => topicOf(id)).filter(Boolean).map(t => t.name).sort((a, b) => a.localeCompare(b, 'de'));

function itemFor(i, excerpt, en) {
  const p = P[i], T = TEXTS[p.t], t = now();
  return { id: 'i-' + uid(), ref: refOf(i), topics: [], cite: p.cite || '', work: T.short || T.title || T.key, date: p.dateLabel || T.date || '',
    words: clip(flat(p.text), 300), excerpt: excerpt || null, en: !!en, note: '', added: t, at: t };
}
function newTopic(name) {
  const n = flat(name).slice(0, 120);
  if (!n) return null;
  const same = DB.topics.find(t => norm(t.name) === norm(n));
  if (same) return same;
  const t = now(), topic = { id: 't-' + uid(), name: n, note: '', made: t, at: t, order: [] };
  DB.topics.push(topic);
  return topic;
}
function dropItem(it) {
  const k = DB.items.indexOf(it);
  if (k < 0) return;
  DB.items.splice(k, 1);
  DB.gone[it.id] = now();
}
function restoreItem(it) {
  delete DB.gone[it.id];
  it.at = now();               // later than the deletion, wherever that has gone already
  if (!itemOf(it.id)) DB.items.push(it);
}
// A topic's passages as arranged: its own order first, then the rest as they were kept.
function arranged(t) {
  const under = DB.items.filter(x => x.topics.includes(t.id));
  const pos = new Map(t.order.map((id, k) => [id, k]));
  return under.sort((a, b) => {
    const pa = pos.has(a.id) ? pos.get(a.id) : Infinity, pb = pos.has(b.id) ? pos.get(b.id) : Infinity;
    return pa !== pb ? pa - pb : byAdded(a, b);
  });
}
// By the date of the text, and within one text in the corpus' own order.
function byText(a, b) {
  const ia = idxOf(a.ref), ib = idxOf(b.ref);
  const ya = ia != null && P[ia] ? (TEXTS[P[ia].t].year || 0) : Infinity, yb = ib != null && P[ib] ? (TEXTS[P[ib].t].year || 0) : Infinity;
  if (ya !== yb) return ya - yb;
  if (ia != null && ib != null && ia !== ib) return ia - ib;
  return byAdded(a, b);
}

/* ── When two copies meet ───────────────────────────────────────────────────
   merge(A, B, base): A is this browser's copy, B the other; base is how both last stood, when
   it is known (GitHub's copy, as last synced), and null for a file. With a base, a passage
   changed in one copy only takes that change, and one changed in both takes both: its
   topics are those added in either and not removed in either, and two different new notes
   are both kept. Without one, the later change wins. */
function sameItem(x) { return JSON.stringify([x.topics.slice().sort(), x.note]); }
function mergeItem(a, b, o, rep) {
  const win = a.at >= b.at ? a : b, lose = win === a ? b : a;
  const copy = x => Object.assign({}, x, { topics: x.topics.slice() });
  if (sameItem(a) === sameItem(b) || !o) return copy(win);
  const ca = sameItem(a) !== sameItem(o), cb = sameItem(b) !== sameItem(o);
  if (ca && !cb) return copy(a);
  if (cb && !ca) return copy(b);
  const it = copy(win), add = new Set(), rem = new Set();
  [a, b].forEach(x => {
    x.topics.forEach(t => { if (!o.topics.includes(t)) add.add(t); });
    o.topics.forEach(t => { if (!x.topics.includes(t)) rem.add(t); });
  });
  it.topics = [...new Set(o.topics.concat([...add]))].filter(t => !rem.has(t));
  if (a.note !== o.note && b.note !== o.note && a.note !== b.note) {
    it.note = [win.note, lose.note].filter(Boolean).join(NOTE_SEP);
    if (win.note && lose.note) rep.notes++;
  } else it.note = a.note !== o.note ? a.note : b.note;
  return it;
}
function merge(A, B, base) {
  const rep = { topics: [], dupes: 0, notes: 0 };
  const t0 = now();
  const gone = Object.assign({}, A.gone);
  Object.keys(B.gone).forEach(k => { if (!gone[k] || B.gone[k] > gone[k]) gone[k] = B.gone[k]; });
  const alias = Object.assign({}, B.alias, A.alias);
  const real = id => { let k = id, n = 0; while (alias[k] && n++ < 50) k = alias[k]; return k; };

  // Topics: the later change wins, and what was deleted after its last change stays deleted.
  const tmap = new Map();
  [A.topics, B.topics].forEach(list => list.forEach(t => {
    const o = tmap.get(t.id);
    if (!o || t.at > o.at) tmap.set(t.id, Object.assign({}, t, { order: t.order.slice() }));
  }));
  const topics = [...tmap.values()].filter(t => !alias[t.id] && !(gone[t.id] && gone[t.id] >= t.at)).sort(byMade);
  // Two topics of one name, made on two computers: the older keeps its id, the other's
  // passages come to it, and the name is spelt as it was last chosen.
  const byName = new Map(), kept = [];
  topics.forEach(t => {
    const o = byName.get(norm(t.name));
    if (!o) { byName.set(norm(t.name), t); kept.push(t); return; }
    alias[t.id] = o.id; gone[t.id] = t0;
    if (t.at > o.at) o.name = t.name;          // the spelling last chosen
    o.order = o.order.concat(t.order.filter(x => !o.order.includes(x)));
    if (t.note && norm(t.note) !== norm(o.note)) o.note = o.note ? o.note + NOTE_SEP + t.note : t.note;
    o.at = t0;
    if (!rep.topics.includes(o.name)) rep.topics.push(o.name);
  });
  const live = new Set(kept.map(t => t.id));

  // Passages: one per id, then one per passage and words.
  const am = new Map(A.items.map(x => [x.id, x])), bm = new Map(B.items.map(x => [x.id, x]));
  const bi = base ? new Map(base.items.map(x => [x.id, x])) : null;
  const items = [];
  new Set([...am.keys(), ...bm.keys()]).forEach(id => {
    const a = am.get(id), b = bm.get(id);
    const it = a && b ? mergeItem(a, b, bi && bi.get(id), rep) : Object.assign({}, a || b, { topics: (a || b).topics.slice() });
    if (gone[id] && gone[id] >= it.at) return;
    it.topics = [...new Set(it.topics.map(real))].filter(t => live.has(t));
    items.push(it);
  });
  items.sort(byAdded);
  const seen = new Map(), out = [];
  items.forEach(it => {
    const k = it.ref + '\u0000' + (it.excerpt ? flat(it.excerpt) : '');
    const o = seen.get(k);
    if (!o) { seen.set(k, it); out.push(it); return; }
    // The same passage, kept on two computers before their copies met: one entry, under the
    // topics of both, with both notes.
    o.topics = [...new Set(o.topics.concat(it.topics))];
    if (it.note && norm(it.note) !== norm(o.note)) { if (o.note) rep.notes++; o.note = o.note ? o.note + NOTE_SEP + it.note : it.note; }
    o.at = t0; gone[it.id] = t0;
    rep.dupes++;
  });
  // Boards: one per topic still here. A topic merged into another brings its board to it.
  const boards = {}, ob = base ? base.boards : {};
  new Set([...Object.keys(A.boards), ...Object.keys(B.boards)]).forEach(id => {
    const to = real(id);
    if (!live.has(to)) return;
    const m = mergeBoard(ob[id] || null, A.boards[id], B.boards[id]);
    boards[to] = boards[to] ? mergeBoard(null, boards[to], m) : m;
  });
  const annotations = mergeAnns(A.annotations, B.annotations, gone);
  return { db: { v: 1, topics: kept, items: out, gone, alias, boards, annotations }, report: rep };
}
/* Boards. Three copies of one board: as both last stood (o, when known), here (a), and the
   other (b). What only one changed, that one's version stands; where both changed the same
   card, arrow or view, the version of the board saved later does. As the kinds-of-nothing
   board merges two people's saves, and in its shape. */
function merge3(base, mine, theirs) {
  const S = x => x === undefined ? '\u0000' : JSON.stringify(x);
  const pick = (b, m, t) => S(m) === S(b) ? t : m;
  const byId = a => new Map((a || []).filter(x => x && x.id != null).map(x => [x.id, x]));
  const list = (b, m, t, sub) => {
    const Bm = byId(b), M = byId(m), T = byId(t), ids = [...T.keys()], out = [];
    M.forEach((x, id) => { if (!T.has(id)) ids.push(id); });
    ids.forEach(id => { const bb = Bm.get(id), mm = M.get(id), tt = T.get(id), v = sub && mm && tt ? sub(bb, mm, tt) : pick(bb, mm, tt); if (v !== undefined) out.push(v); });
    return out;
  };
  const map = (b, m, t) => { b = b || {}; m = m || {}; t = t || {}; const out = {}; new Set([...Object.keys(t), ...Object.keys(m)]).forEach(k => { const v = pick(b[k], m[k], t[k]); if (v !== undefined) out[k] = v; }); return out; };
  const set = (b, m, t) => { const Bs = new Set(b || []), Ms = new Set(m || []), Ts = new Set(t || []); return [...new Set([...Ts, ...Ms])].filter(x => Ms.has(x) === Bs.has(x) ? Ts.has(x) : Ms.has(x)); };
  const view3 = (b, m, t) => {
    b = b || {};
    const v = Object.assign({}, t);
    Object.keys(m).forEach(k => { if (k !== 'pos' && k !== 'hidden' && k !== 'ink') { const x = pick(b[k], m[k], t[k]); if (x === undefined) delete v[k]; else v[k] = x; } });
    v.pos = map(b.pos, m.pos, t.pos); v.hidden = set(b.hidden, m.hidden, t.hidden); v.ink = list(b.ink, m.ink, t.ink);
    return v;
  };
  const out = Object.assign({}, theirs);
  ['models', 'items', 'arrows', 'photos'].forEach(k => { out[k] = list(base[k] || [], mine[k] || [], theirs[k] || []); });
  out.views = list(base.views, mine.views, theirs.views, view3);
  const have = new Set(out.items.map(i => i.id));
  out.arrows = out.arrows.filter(a => have.has(a.from) && have.has(a.to));   // an arrow whose card has gone goes too
  if (!out.views.length) out.views = (theirs.views || []).length ? theirs.views : mine.views || [];
  return out;
}
// Compared with their keys in one order, since a copy back from GitHub has them sorted and one made here does not.
const bare = b => { const c = Object.assign({}, b); delete c.at; return JSON.stringify(deep(c)); };
function mergeBoard(o, a, b) {
  if (!a || !b) return clone(a || b);
  const sa = bare(a), sb = bare(b);
  if (sa === sb) return clone(a.at >= b.at ? a : b);
  if (o) { const so = bare(o); if (so === sa) return clone(b); if (so === sb) return clone(a); }
  const later = (b.at || '') > (a.at || '') ? b : a, other = later === a ? b : a;
  const m = cleanBoard(clone(merge3(o ? deep(o) : {}, deep(later), deep(other))));
  m.at = later.at;
  const sh = [a.shared, b.shared].filter(isObj).sort((x, y) => String(y.at || '').localeCompare(String(x.at || '')))[0];
  if (sh) m.shared = sh;
  return m;
}
// Annotations: one per id, the one changed later standing, and none that was deleted after it.
const annAt = a => String(a.at || a.edited || a.date || '');
function mergeAnns(A, B, gone) {
  const m = new Map();
  A.concat(B).forEach(a => { const o = m.get(a.id); if (!o || annAt(a) > annAt(o)) m.set(a.id, a); });
  return [...m.values()].filter(a => !(gone[a.id] && gone[a.id] >= annAt(a))).map(clone)
    .sort((x, y) => String(x.date || '').localeCompare(String(y.date || '')) || (x.id < y.id ? -1 : 1));
}
function tellMerge(rep, from) {
  if (!rep) return;
  const parts = rep.topics.map(n => 'two topics called “' + n + '” are now one');
  if (rep.dupes) parts.push(plural(rep.dupes, 'passage') + ' kept in both copies ' + (rep.dupes === 1 ? 'is' : 'are') + ' now one');
  if (rep.notes) parts.push(plural(rep.notes, 'note') + ' changed in both copies ' + (rep.notes === 1 ? 'keeps' : 'keep') + ' both versions, marked “from another copy”');
  if (parts.length) toast('Merged with ' + from + ': ' + parts.join('; ') + '.');
}

/* ── The lock ────────────────────────────────────────────────────────────────
   PBKDF2-SHA-256 makes a key of the passphrase and a random salt kept in the file; AES-GCM
   locks the topics with it, with a new IV at every save. The login is bound in as additional
   data, so that a file can't be passed off as someone else's. The key is made non-extractable,
   and kept past this visit only with "remember", in IndexedDB, as lock.js keeps the class's. */
const te = new TextEncoder(), td = new TextDecoder();
const b64e = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
const b64d = s => { const bin = atob(String(s).replace(/\s/g, '')); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; };
const b64encode = str => b64e(te.encode(str));
const b64decode = s => td.decode(b64d(s));
const canLock = () => !!(window.crypto && crypto.subtle);
async function deriveKey(pass, salt, iter) {
  const raw = await crypto.subtle.importKey('raw', te.encode(String(pass).normalize('NFC')), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: iter }, raw, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
const aad = () => te.encode('kantlab-topics:' + gh.login);
async function lockText(text) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: aad() }, gh.key, te.encode(text));
  return { kdf: 'PBKDF2-SHA-256', iter: ROUNDS, salt: b64e(gh.salt), iv: b64e(iv), data: b64e(new Uint8Array(ct)) };
}
async function openLock(lk, key) {
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64d(lk.iv), additionalData: aad() }, key, b64d(lk.data));
  return td.decode(pt);
}
function idb(mode, fn) {
  return new Promise((res, rej) => {
    if (!window.indexedDB) { rej(new Error('no IndexedDB')); return; }
    const r = indexedDB.open(IDB_NAME, 1);
    r.onupgradeneeded = () => r.result.createObjectStore('keys');
    r.onerror = () => rej(r.error);
    r.onsuccess = () => {
      const db = r.result, tx = db.transaction('keys', mode), q = fn(tx.objectStore('keys'));
      tx.oncomplete = () => { db.close(); res(q && q.result); };
      tx.onerror = () => { db.close(); rej(tx.error); };
    };
  });
}
const keepKey = () => idb('readwrite', s => s.put({ key: gh.key, salt: b64e(gh.salt) }, gh.login)).catch(() => {});
const recallKey = login => idb('readonly', s => s.get(login)).catch(() => null);
const dropKey = login => login ? idb('readwrite', s => s.delete(login)).catch(() => {}) : Promise.resolve();

/* ── GitHub ──────────────────────────────────────────────────────────────── */
const gh = { on: false, token: null, login: null, key: null, salt: null, prev: null, remember: false,
  state: 'off', msg: '', why: '', at: '', busy: false, again: false, lastPull: 0 };
const ghReady = () => gh.on && !!gh.token && !!gh.key;
const myPath = () => GH.dir + '/' + gh.login + '.json';
const queueToken = () => GH.repo === 'queues' ? (get(sessionStorage, QUEUE_TOKEN_KEY) || get(localStorage, QUEUE_TOKEN_KEY)) : null;
async function api(method, path, body) {
  const headers = { Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + gh.token };
  if (body) headers['Content-Type'] = 'application/json';
  let r;
  try { r = await fetch(API + path, { method, headers, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' }); }
  catch (e) { const err = new Error('offline'); err.status = 0; throw err; }
  let data = null;
  try { data = await r.json(); } catch (e) { data = null; }
  return { status: r.status, ok: r.ok, data, left: r.headers.get('x-ratelimit-remaining') };
}
function apiError(r) {
  const e = new Error('GitHub ' + r.status);
  e.status = r.status; e.gh = r.data && r.data.message; e.left = r.left;
  return e;
}
function messageFor(e) {
  if (!e || e.status === 0) return 'GitHub can’t be reached';
  if (e.status === -1) return 'your file on GitHub can’t be read';
  if (e.status === 401) return 'GitHub didn’t accept the token. It may have expired or been revoked';
  if (e.status === 403 && e.left === '0') return 'GitHub’s limit on requests is used up for the moment';
  if (e.status === 403) return 'the token can see ' + GH.repo + ' but not save to it. It needs “Contents: Read and write”, and the organisation may still be approving it';
  if (e.status === 404) return 'the token can’t see ' + GH.owner + '/' + GH.repo + '. Its resource owner must be ' + GH.owner + ', with the repository ' + GH.repo;
  if (e.status === 409) return 'another computer kept saving at the same moment';
  return 'GitHub answered ' + e.status + (e.gh ? ': “' + e.gh + '”' : '');
}
async function readMine() {
  const r = await api('GET', REPO + '/contents/' + myPath() + '?ref=' + encodeURIComponent(GH.branch));
  if (r.status === 404) return null;
  if (!r.ok) throw apiError(r);
  let file = null, content = r.data.content;
  // Past 1 MB, which a board with drawing and photographs can reach, GitHub leaves a file's
  // contents out of this answer, and gives them only as the blob.
  if (!content && r.data.sha) {
    const b = await api('GET', REPO + '/git/blobs/' + r.data.sha);
    if (!b.ok) throw apiError(b);
    content = b.data.content;
  }
  try { file = JSON.parse(b64decode(content)); } catch (e) { file = null; }
  return { sha: r.data.sha, file };
}
async function writeMine(text, sha) {
  const file = { v: 1, what: 'My topics, from the Kant Lab Logic Portal, locked with its owner’s passphrase', login: gh.login, saved: now(), lock: await lockText(text) };
  const body = { message: 'My topics: ' + gh.login + ', saved from the Logic Portal', content: b64encode(JSON.stringify(file, null, 2) + '\n'), branch: GH.branch };
  if (sha) body.sha = sha;
  return api('PUT', REPO + '/contents/' + myPath(), body);
}
function loadBase() {
  try { const b = JSON.parse(get(localStorage, BASE_KEY) || 'null'); return b && b.login === gh.login ? clean(JSON.parse(b.text)) : null; } catch (e) { return null; }
}
const setBase = text => put(localStorage, BASE_KEY, JSON.stringify({ login: gh.login, text }));
function keepToken(tok, remember) {
  if (remember) { put(localStorage, TOKEN_KEY, tok); put(sessionStorage, TOKEN_KEY, null); }
  else { put(sessionStorage, TOKEN_KEY, tok); put(localStorage, TOKEN_KEY, null); }
}
const noteOn = () => put(localStorage, GH_KEY, JSON.stringify({ login: gh.login, at: gh.at || '' }));

// Read GitHub's copy, merge it with this one, and save the result there if it is not the
// same. A file changed in between (another computer, saving at that moment) is read again.
let pushT = 0;
async function sync() {
  clearTimeout(pushT);
  if (!ghReady()) return;
  if (gh.busy) { gh.again = true; return; }
  gh.busy = true; gh.state = 'saving'; gh.lastPull = Date.now(); renderStatus();
  let locked = '';
  try {
    for (let tries = 0; ; tries++) {
      if (tries > 3) { const e = new Error('conflict'); e.status = 409; throw e; }
      const f = await readMine();
      let remote = null;
      if (f) {
        const lk = f.file && f.file.lock;
        if (!lk || !lk.salt || !lk.iv || !lk.data) { const e = new Error('unreadable'); e.status = -1; throw e; }
        const k = lk.salt === b64e(gh.salt) ? gh.key : gh.prev && lk.salt === b64e(gh.prev.salt) ? gh.prev.key : null;
        let text = null;
        if (k) { try { text = await openLock(lk, k); } catch (e) { text = null; } }
        if (text == null) { locked = 'Your passphrase was changed on another computer. Give the new one to sync.'; break; }
        try { remote = clean(JSON.parse(text)); } catch (e) { remote = null; }
        if (!remote) { const e = new Error('unreadable'); e.status = -1; throw e; }
        const was = canon(DB), r = merge(DB, remote, loadBase());
        if (canon(r.db) !== was) { DB = r.db; save(true); if (!page.hidden) render(); }
        tellMerge(r.report, 'your copy on GitHub');
        const theirs = canon(remote);
        if (!gh.prev && theirs === canon(DB)) { setBase(theirs); break; }   // nothing to send
      }
      const text = canon(DB);                 // exactly what goes, which is what the base must be
      const w = await writeMine(text, f && f.sha);
      if (w.ok) { setBase(text); gh.prev = null; break; }
      if (w.status === 409 || w.status === 422) continue;
      throw apiError(w);
    }
    if (locked) {
      gh.key = null; gh.prev = null; dropKey(gh.login);
      gh.state = 'locked'; gh.why = locked;
    } else { gh.state = 'ok'; gh.at = now(); gh.why = ''; noteOn(); refreshShared(); }   // and, GitHub reached, the boards shared with you
  } catch (e) {
    gh.state = e.status === 0 ? 'offline' : 'error'; gh.msg = messageFor(e); gh.err = e.status;
  } finally {
    gh.busy = false;
    renderStatus();
    if (gh.again) { gh.again = false; pushSoon(800); }
  }
}
function pushSoon(ms) {
  if (!ghReady()) return;
  clearTimeout(pushT);
  pushT = setTimeout(sync, ms == null ? SAVE_MS : ms);
  if (!gh.busy && gh.state !== 'offline' && gh.state !== 'error') { gh.state = 'pending'; renderStatus(); }
}
// Back in view, or back online: GitHub may have a newer copy from another computer.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && ghReady() && Date.now() - gh.lastPull > 15000) sync();
});
window.addEventListener('online', () => { if (ghReady()) sync(); });

async function ghStart() {
  let info = null;
  try { info = JSON.parse(get(localStorage, GH_KEY) || 'null'); } catch (e) { info = null; }
  if (!info || !info.login) return;
  gh.on = true; gh.login = info.login; gh.at = info.at || '';
  gh.token = get(sessionStorage, TOKEN_KEY) || get(localStorage, TOKEN_KEY);
  gh.remember = !!get(localStorage, TOKEN_KEY);
  if (!gh.token) { gh.state = 'locked'; gh.why = ''; renderStatus(); return; }
  const k = await recallKey(gh.login);
  if (k && k.key && k.salt) { gh.key = k.key; gh.salt = b64d(k.salt); }
  if (!gh.key) { gh.state = 'locked'; gh.why = ''; renderStatus(); return; }
  sync();
}
function ghOff() {
  const login = gh.login;
  clearTimeout(pushT);
  Object.assign(gh, { on: false, token: null, key: null, salt: null, prev: null, state: 'off', why: '', msg: '' });
  put(localStorage, GH_KEY, null); put(localStorage, TOKEN_KEY, null); put(sessionStorage, TOKEN_KEY, null); put(localStorage, BASE_KEY, null);
  dropKey(login);
  marks(); drawMenu();
  toast('GitHub is off on this computer. Your topics stay here, and your locked file stays on GitHub as it was.');
}

/* ── Styles ──────────────────────────────────────────────────────────────── */
const css = el('style');
css.textContent = `
  #mtbtn .mtn { display: inline-block; min-width: 1.25rem; margin-left: 0.35rem; padding: 0 0.35rem; border-radius: 999px; background: var(--parchment-dark); color: var(--accent); font-size: 0.8rem; text-align: center; }
  #mtbtn.full .mtn { background: var(--accent); color: var(--parchment); }
  #mtbtn.warn::after { content: ''; display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #9a3b1e; margin-left: 0.35rem; vertical-align: 1px; }
  .mtrail { display: none; }
  body.mtmode .mtrail { display: inline-block; }
  .pmeta .mtrail { margin-left: 0.6rem; padding: 0 0.55rem; font-size: 0.8rem; }
  .mtrail.on { color: var(--faded); }
  .mtfloat { position: fixed; z-index: 46; border: 1px solid var(--accent-light); background: var(--card); color: var(--accent); border-radius: 999px; padding: 0.08rem 0.65rem; font-size: 0.8rem; cursor: pointer; box-shadow: 0 1px 5px rgba(60, 40, 20, 0.15); white-space: nowrap; }
  .mtfloat:hover { background: var(--accent); color: var(--parchment); }
  .mtfloat.in { background: var(--parchment-dark); }
  .mtfloat.in:hover { background: var(--accent); }
  #mtpick { position: fixed; z-index: 56; width: 19rem; max-width: calc(100vw - 16px); max-height: 62vh; overflow: auto; background: var(--card); border: 1px solid var(--accent-light); border-radius: 8px; box-shadow: 0 4px 16px rgba(60, 40, 20, 0.2); padding: 0.55rem 0.7rem 0.5rem; font-size: 0.93rem; }
  #mtpick .t { font-family: 'Cinzel', serif; font-size: 0.74rem; letter-spacing: 0.07em; text-transform: uppercase; color: var(--accent); }
  #mtpick .c { color: var(--faded); font-size: 0.84rem; margin: 0.1rem 0 0.4rem; }
  #mtpick label { display: flex; gap: 0.45rem; align-items: baseline; padding: 0.12rem 0.1rem; cursor: pointer; border-radius: 4px; }
  #mtpick label:hover { background: var(--parchment); }
  #mtpick label input { accent-color: var(--accent); margin: 0; }
  #mtpick label span { margin-left: auto; color: var(--faded); font-size: 0.8rem; }
  #mtpick input[type=text] { width: 100%; margin: 0.35rem 0 0.1rem; font: inherit; font-size: 0.9rem; padding: 0.2rem 0.45rem; border: 1px solid var(--line); border-radius: 5px; background: var(--paper); }
  #mtpick .acts { display: flex; flex-wrap: wrap; gap: 0.2rem 0.9rem; margin-top: 0.45rem; padding-top: 0.4rem; border-top: 1px solid var(--line-soft); }
  #mtpick .acts button, #mtpage .mtlink { background: none; border: none; padding: 0; font: inherit; font-size: 0.86rem; color: var(--accent); cursor: pointer; text-decoration: underline; text-decoration-color: var(--line); text-underline-offset: 2px; }
  #mttoast { position: fixed; z-index: 61; left: 50%; bottom: 1.4rem; transform: translateX(-50%); background: #3b2a17; color: var(--parchment); border-radius: 6px; padding: 0.5rem 0.9rem; font-size: 0.92rem; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25); display: flex; gap: 0.9rem; align-items: baseline; max-width: 90vw; }
  #mttoast button { background: none; border: none; color: #f1d98c; cursor: pointer; padding: 0; font: inherit; text-decoration: underline; }
  #mtpage { position: fixed; inset: 0; z-index: 31; background: var(--parchment); display: flex; flex-direction: column; }
  #mtpage .mtbar { display: flex; align-items: center; gap: 0.5rem 0.9rem; padding: 0.6rem 1.6rem; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
  #mtpage .mtbar .cz { font-family: 'Cinzel', serif; color: var(--accent); font-size: 1.05rem; letter-spacing: 0.05em; }
  #mtpage .mtsp { flex: 1; }
  #mtpage .mtstat { font-size: 0.9rem; color: var(--faded); }
  #mtpage .mtstat .dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 0.4rem; vertical-align: 1px; background: var(--faded); }
  #mtpage .mtstat .dot.ok { background: #3f6b3a; }
  #mtpage .mtstat .dot.bad { background: #9a3b1e; }
  #mtpage .mtstat .bad { color: #9a3b1e; }
  #mtpage .mtmodesw { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.9rem; color: var(--faded); cursor: pointer; }
  #mtpage .mtmodesw input { accent-color: var(--accent); margin: 0; }
  #mtpage .mtmenuwrap { position: relative; }
  #mtpage .mtmenu { position: absolute; right: 0; top: calc(100% + 4px); z-index: 5; width: 21rem; background: var(--card); border: 1px solid var(--accent-light); border-radius: 8px; box-shadow: 0 4px 16px rgba(60, 40, 20, 0.2); padding: 0.4rem 0; }
  #mtpage .mtmenu button, #mtpage .mtmenu a { display: block; width: 100%; text-align: left; background: none; border: none; font: inherit; font-size: 0.95rem; color: var(--accent); padding: 0.3rem 0.9rem 0; cursor: pointer; text-decoration: none; }
  #mtpage .mtmenu small { display: block; padding: 0 0.9rem 0.3rem; color: var(--faded); font-size: 0.82rem; line-height: 1.3; }
  #mtpage .mtmenu button:hover, #mtpage .mtmenu a:hover { text-decoration: underline; }
  #mtpage .mtmenu hr { border: none; border-top: 1px solid var(--line-soft); margin: 0.3rem 0; }
  #mtpage .mtbody { flex: 1; display: flex; min-height: 0; }
  #mtpage aside { width: 16.5rem; flex: none; border-right: 1px solid var(--line); overflow: auto; padding: 0.9rem 0.8rem; }
  #mtpage aside .mtopic { display: flex; gap: 0.4rem; width: 100%; text-align: left; background: none; border: none; padding: 0.28rem 0.55rem; border-radius: 5px; font: inherit; color: var(--ink); cursor: pointer; }
  #mtpage aside .mtopic:hover { background: var(--parchment-dark); }
  #mtpage aside .mtopic.on { background: var(--accent); color: var(--parchment); }
  #mtpage aside .mtopic span { margin-left: auto; color: var(--faded); font-size: 0.85rem; }
  #mtpage aside .mtopic.on span { color: var(--parchment-dark); }
  #mtpage aside .mtall { font-family: 'Cinzel', serif; font-size: 0.82rem; letter-spacing: 0.05em; }
  #mtpage aside hr { border: none; border-top: 1px solid var(--line-soft); margin: 0.45rem 0.4rem; }
  #mtpage aside input { width: 100%; margin-top: 0.6rem; font: inherit; font-size: 0.92rem; padding: 0.25rem 0.5rem; border: 1px dashed var(--accent-light); border-radius: 5px; background: var(--paper); }
  #mtpage main { flex: 1; overflow: auto; padding: 1.1rem 1.8rem 3rem; }
  #mtpage .mtwrap { max-width: 52rem; }
  #mtpage .mthead { display: flex; gap: 0.8rem; align-items: baseline; }
  #mtpage .mtbrd { flex: none; background: var(--accent); color: var(--parchment); border-color: var(--accent); }
  #mtpage .mtshh { font-family: 'Cinzel', serif; font-size: 0.68rem; letter-spacing: 0.08em; color: var(--accent); margin: 0.2rem 0 0.25rem 0.3rem; }
  #mtpage .mtsh span, #mtpick .mtpshb span { color: var(--faded); font-size: 0.8rem; }
  #mtpage .mtshtag { font-size: 0.72rem; color: #3f6b2a; font-style: italic; }
  #mtpick .mtpsh { margin-top: 0.6rem; }
  #mtpick .mtpshb { display: block; width: 100%; text-align: left; background: none; border: 1px solid var(--line-soft); border-radius: 5px; padding: 0.15rem 0.45rem; margin: 0.2rem 0; font: inherit; font-size: 0.9rem; color: var(--accent); cursor: pointer; }
  #mtpick .mtpshb:hover { background: var(--parchment); }
  #mtpage .mtbrd:hover { background: var(--accent-light); border-color: var(--accent-light); }
  #mtpage .mtlinked { margin: 0.15rem 0 0.45rem; font-size: 0.88rem; color: var(--faded); }
  #mtpage .mtlinked button { background: none; border: none; padding: 0; font: inherit; color: var(--accent); text-decoration: underline; cursor: pointer; }
  #mtpage .mtlinked span { font-style: italic; }
  #mtpage .mthead h2, #mtpage .mthead input { flex: 1; margin: 0; font-family: 'EB Garamond', serif; font-size: 1.45rem; font-weight: 600; color: var(--accent); background: transparent; border: none; border-bottom: 1px dashed transparent; padding: 0; min-width: 0; }
  #mtpage .mthead input:hover, #mtpage .mthead input:focus { border-bottom-color: var(--accent-light); outline: none; }
  #mtpage textarea { display: block; width: 100%; font: inherit; background: var(--card); border: 1px solid var(--line-soft); border-radius: 5px; padding: 0.35rem 0.55rem; resize: vertical; min-height: 2.3rem; color: var(--ink); }
  #mtpage textarea:placeholder-shown { background: transparent; border-style: dashed; }
  #mtpage .mttnote { margin: 0.45rem 0 0; }
  #mtpage .mttools { display: flex; flex-wrap: wrap; gap: 0.3rem 1.1rem; align-items: center; margin: 0.65rem 0 0.9rem; font-size: 0.9rem; color: var(--faded); }
  #mtpage .mttools select { font: inherit; font-size: 0.9rem; color: var(--accent); background: var(--paper); border: 1px solid var(--line); border-radius: 5px; padding: 0 0.3rem; }
  #mtpage .mtcard { background: var(--card); border: 1px solid var(--line); border-radius: 7px; padding: 0.65rem 0.9rem 0.6rem; margin: 0 0 0.8rem; }
  #mtpage .mtch { display: flex; gap: 0.3rem 0.6rem; align-items: baseline; flex-wrap: wrap; }
  #mtpage .mtcite { font-weight: 600; color: var(--accent); text-decoration: none; cursor: pointer; }
  #mtpage .mtcite:hover { text-decoration: underline; }
  #mtpage .mtwork { color: var(--faded); font-size: 0.88rem; }
  #mtpage .mttag { font-size: 0.74rem; color: var(--accent); border: 1px solid var(--accent-light); border-radius: 999px; padding: 0 0.45rem; }
  #mtpage .mtbtns { margin-left: auto; display: flex; gap: 0.2rem; opacity: 0.3; }
  #mtpage .mtcard:hover .mtbtns, #mtpage .mtcard:focus-within .mtbtns { opacity: 1; }
  #mtpage .mtbtns button { background: none; border: 1px solid var(--line); border-radius: 4px; color: var(--accent); cursor: pointer; font-size: 0.8rem; padding: 0 0.42rem; }
  #mtpage .mtbtns button:disabled { opacity: 0.35; cursor: default; }
  #mtpage .mtwords { margin: 0.4rem 0 0.35rem; line-height: 1.5; white-space: pre-wrap; overflow-wrap: anywhere; }
  #mtpage .mtwords.ex { border-left: 3px solid var(--hl-strong); padding-left: 0.6rem; }
  #mtpage .mtlost { color: #9a3b1e; font-size: 0.85rem; font-style: italic; margin: 0 0 0.35rem; }
  #mtpage .mtchips { display: flex; flex-wrap: wrap; gap: 0.3rem; align-items: center; margin: 0.35rem 0 0.45rem; }
  #mtpage .mtchip { display: inline-flex; align-items: baseline; border: 1px solid var(--accent-light); border-radius: 999px; background: var(--paper); font-size: 0.84rem; }
  #mtpage .mtchip button { background: none; border: none; font: inherit; color: var(--accent); cursor: pointer; padding: 0 0.15rem 0 0.6rem; }
  #mtpage .mtchip button + button { padding: 0 0.45rem 0 0.25rem; color: var(--faded); }
  #mtpage .mtchip button + button:hover { color: #9a3b1e; }
  #mtpage .mtaddt { background: none; border: 1px dashed var(--line); border-radius: 999px; font: inherit; font-size: 0.84rem; color: var(--faded); padding: 0 0.6rem; cursor: pointer; }
  #mtpage .mtaddt:hover { color: var(--accent); border-color: var(--accent-light); }
  #mtpage .mtempty { color: var(--faded); font-style: italic; max-width: 40rem; }
  #mtpage .mthint { color: var(--faded); font-size: 0.86rem; margin: 0.8rem 0.3rem 0; line-height: 1.35; }
  #mtdlg { position: fixed; inset: 0; z-index: 70; background: rgba(40, 28, 14, 0.35); display: flex; align-items: center; justify-content: center; }
  #mtdlg[hidden] { display: none; }
  #mtdlg .box { background: var(--parchment); border: 1px solid var(--accent-light); border-radius: 9px; width: min(35rem, 92vw); max-height: 88vh; overflow: auto; padding: 1.1rem 1.35rem 1rem; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25); }
  #mtdlg h3 { margin: 0 0 0.55rem; font-family: 'Cinzel', serif; font-size: 1.05rem; letter-spacing: 0.04em; color: var(--accent); }
  #mtdlg p { margin: 0 0 0.6rem; line-height: 1.45; }
  #mtdlg code { font-size: 0.86em; background: var(--parchment-dark); padding: 0 0.25rem; border-radius: 3px; }
  #mtdlg input[type=password] { display: block; width: 100%; font: inherit; padding: 0.35rem 0.55rem; border: 1px solid var(--line); border-radius: 5px; background: var(--card); margin: 0.2rem 0 0.5rem; }
  #mtdlg label { display: flex; gap: 0.45rem; align-items: baseline; margin: 0.2rem 0; cursor: pointer; }
  #mtdlg label input { accent-color: var(--accent); }
  #mtdlg .small { font-size: 0.86rem; color: var(--faded); }
  #mtdlg .err { color: #9a3b1e; min-height: 1.3em; font-size: 0.92rem; margin: 0.3rem 0 0; }
  #mtdlg .acts { display: flex; gap: 0.6rem; justify-content: flex-end; margin-top: 0.5rem; }
  @media (max-width: 760px) {
    #mtpage .mtbar { padding: 0.5rem 0.8rem; }
    #mtpage .mtbody { flex-direction: column; }
    #mtpage aside { width: auto; max-height: 32vh; border-right: none; border-bottom: 1px solid var(--line); }
    #mtpage main { padding: 0.8rem 0.9rem 3rem; }
  }
`;
document.head.appendChild(css);

/* ── The header's button, the floating buttons, the picker and the message line ── */
const tb = el('button', 'mtbtn', 'btn');
tb.type = 'button';
const share = $('share');
if (share && share.parentNode) share.parentNode.insertBefore(tb, share); else document.body.appendChild(tb);
const hov = el('button', 'mtadd', 'mtfloat');     // on the passage under the pointer
const sb = el('button', 'mtsel', 'mtfloat');      // under a selection of words
const pk = el('div', 'mtpick');
const tst = el('div', 'mttoast');
[hov, sb].forEach(b => { b.type = 'button'; b.hidden = true; b.addEventListener('mousedown', e => e.preventDefault()); });
pk.hidden = true; tst.hidden = true;
document.body.append(hov, sb, pk, tst);

function toast(msg, acts) {
  tst._acts = acts || [];
  tst.innerHTML = '<span>' + esc(msg) + '</span>' + tst._acts.map((a, k) => '<button type="button" data-mtk="' + k + '">' + esc(a[0]) + '</button>').join('');
  tst.hidden = false;
  clearTimeout(tst._t);
  tst._t = setTimeout(() => { tst.hidden = true; }, msg.length > 110 ? 10000 : 6500);
}
tst.addEventListener('click', e => {
  const b = e.target.closest('button[data-mtk]');
  if (!b) return;
  tst.hidden = true;
  const a = tst._acts[+b.dataset.mtk];
  if (a) a[1]();
});

/* My topics is off until turned on: the header's button turns it on and opens the page, and
   the page's switch turns it off again. The topics are kept either way. */
let mode = get(localStorage, MODE_KEY) === 'on';
function setMode(on, quiet) {
  mode = on;
  put(localStorage, MODE_KEY, on ? 'on' : null);
  document.body.classList.toggle('mtmode', on);
  const mi = page.querySelector('.mtmodein');
  if (mi) mi.checked = on;
  if (!on) { hideHover(); sb.hidden = true; closePicker(); }
  // ask the browser to keep this site's storage rather than clear it when it runs short
  if (on && navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  marks();
  if (!quiet) toast(on ? 'My topics is on. Point at a passage and press ☆ Topic.' : 'My topics is off. Your topics are kept.');
}

// The count in the header, and every ☆ label, kept in step with the store.
function marks() {
  const n = DB.items.length;
  tb.innerHTML = 'My topics' + (n ? '<span class="mtn">' + n + '</span>' : '');
  tb.classList.toggle('full', n > 0);
  tb.classList.toggle('warn', gh.on && (gh.state === 'locked' || gh.state === 'error'));
  tb.title = 'My topics: the passages you keep, under topics of your own. Only you see them.' + (n ? ' ' + plural(n, 'passage') + ' kept.' : '');
  document.querySelectorAll('.mtrail').forEach(railLabel);
  if (!hov.hidden && hovEl && hovEl.isConnected) placeHover();
  renderStatus();
}
function labelFor(ref) {
  const x = wholeOf(ref);
  if (!x) return { text: '☆ Topic', on: false, title: 'Keep this passage under a topic of your own' };
  const names = topicNames(x);
  return { text: '★ ' + (names.length === 0 ? 'Unsorted' : names.length === 1 ? clip(names[0], 22) : names.length + ' topics'), on: true,
    title: names.length ? 'Kept under ' + names.join(', ') + '. Click to change.' : 'Kept, under no topic yet. Click to give it one.' };
}

/* A passage under the pointer, in the search results, in a full text or among Kant's notes,
   gets ☆ Topic at its top right, left of the handout tray's buttons when they show too. */
let hovEl = null, hovI = null, hideT = 0;
const hideHover = () => { hov.hidden = true; hovEl = null; hovI = null; };
const trayFull = () => { const h = $('hpage'); return !!(h && !h.hidden && !h.classList.contains('docked')); };
const covered = () => !page.hidden || trayFull() || !dlg.hidden;
document.addEventListener('mouseover', e => {
  if (!mode || covered()) return;
  if (e.target === hov) { clearTimeout(hideT); return; }
  const box = e.target.closest && e.target.closest(HOVER);
  if (!box || box.closest('#mtpage, #hpage')) { if (hovEl) { clearTimeout(hideT); hideT = setTimeout(hideHover, 300); } return; }
  clearTimeout(hideT);
  if (box === hovEl) { placeHover(); return; }
  const d = box.dataset, i = +(d.open != null ? d.open : d.fp != null ? d.fp : d.note);
  if (!P[i]) return;
  hovEl = box; hovI = i;
  placeHover();
});
function placeHover() {
  if (!hovEl || hovI == null || !P[hovI]) return;
  const r = hovEl.getBoundingClientRect(), l = labelFor(refOf(hovI));
  hov.textContent = l.text; hov.title = l.title; hov.classList.toggle('in', l.on);
  // A long passage that starts above its pane keeps the button at the top of what shows of it.
  const sc = hovEl.closest('#left, #railbody'), bar = sc && sc.querySelector('.readbar');
  const floor = Math.max(52, sc ? sc.getBoundingClientRect().top + 4 : 0, bar && bar.getBoundingClientRect().bottom > 0 ? bar.getBoundingClientRect().bottom + 4 : 0);
  const top = Math.max(r.top + 4, floor);
  if (top > r.bottom - 18 || top > window.innerHeight - 24) { hov.hidden = true; return; }
  hov.hidden = false;
  hov.style.top = top + 'px';
  let right = r.right - 8;
  ['hadd', 'hmore'].forEach(id => {
    const t = $(id);
    if (t && !t.hidden && Math.abs(parseFloat(t.style.top) - top) < 3) right = Math.min(right, t.getBoundingClientRect().left - 6);
  });
  hov.style.left = Math.max(8, right - hov.offsetWidth) + 'px';
}
document.addEventListener('scroll', e => {
  if (pk.contains(e.target)) return;
  sb.hidden = true;
  if (!pk.hidden) closePicker();
  if (hovEl && hovEl.isConnected) placeHover(); else hideHover();
}, true);
hov.addEventListener('click', e => {
  e.stopPropagation();
  if (hovI == null) return;
  if (!pk.hidden && pick && pick.i === hovI && !pick.excerpt) { closePicker(); return; }
  openPicker({ i: hovI }, hov);
});

/* The Connections tab's row of actions, or the passage's date line on the other tabs, gets
   ☆ Topic too. */
function railLabel(b) {
  const i = S.sel;
  if (i == null || !P[i]) return;
  const l = labelFor(refOf(i));
  b.textContent = l.text; b.title = l.title; b.classList.toggle('on', l.on);
}
function railButton() {
  const pa = document.querySelector('#railbody .pactions') || document.querySelector('#railhead .pmeta');
  if (!pa || pa.querySelector('.mtrail')) return;
  const b = el('button', null, 'btn mtrail');
  b.type = 'button';
  if (pa.classList.contains('pmeta')) pa.appendChild(b); else pa.insertBefore(b, pa.querySelector('a'));
  railLabel(b);
}
['railbody', 'railhead'].forEach(id => { const x = $(id); if (x) new MutationObserver(railButton).observe(x, { childList: true, subtree: true }); });
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('.mtrail');
  if (!b || S.sel == null || !P[S.sel]) return;
  e.preventDefault();
  if (!pk.hidden && pick && pick.anchor === b) { closePicker(); return; }
  openPicker({ i: S.sel, fixed: true }, b);
});

/* Words selected inside one passage, in the original or in its English, can be kept on their
   own. The handout tray's button for the same words sits just below the selection; this one
   below that. */
function passageAt(n) {
  const x = nodeEl(n);
  if (!x || !x.closest || !x.closest(TEXT_SEL) || x.closest('#mtpage, #hpage, #mtpick')) return null;
  const f = x.closest('.fen[data-for]'); if (f) return +f.dataset.for;
  const b = x.closest('.fp[data-fp], .frow[data-fp]'); if (b) return +b.dataset.fp;
  const h = x.closest('.hit[data-open]'); if (h) return +h.dataset.open;
  const c = x.closest('.ncard[data-note]'); if (c) return +c.dataset.note;
  if (x.closest('#railbody')) return S.sel;
  return null;
}
const inEnglish = n => { const x = nodeEl(n), l = x && x.closest && x.closest('[lang]'); return !!(l && l !== document.documentElement && l.lang === 'en'); };
document.addEventListener('mouseup', e => {
  if (!mode || e.target === sb || covered() || pk.contains(e.target)) return;
  setTimeout(() => {
    const sel = window.getSelection();
    const t = sel && sel.rangeCount ? flat(String(sel)) : '';
    if (t.length < 2) { sb.hidden = true; return; }
    const a = passageAt(sel.anchorNode), b = passageAt(sel.focusNode);
    if (a == null || !P[a]) { sb.hidden = true; return; }
    if (b !== a || inEnglish(sel.anchorNode) !== inEnglish(sel.focusNode)) { sb.textContent = 'Select within one passage to keep its words'; sb._i = null; }
    else { sb.textContent = '☆ Keep these words'; sb._i = a; sb._en = inEnglish(sel.anchorNode); sb._text = t; }
    const r = sel.getRangeAt(0).getBoundingClientRect();
    sb.hidden = false;
    let top = r.top > 44 ? r.bottom + 8 : r.bottom + 44;
    const hs = $('hsel');
    if (hs && !hs.hidden) top = hs.getBoundingClientRect().bottom + 6;
    if (top > window.innerHeight - 36) top = Math.max(52, r.top - 72);
    sb.style.top = top + 'px';
    sb.style.left = Math.max(8, Math.min(r.left, window.innerWidth - sb.offsetWidth - 10)) + 'px';
  }, 0);
});
sb.addEventListener('click', () => {
  if (sb._i == null) { sb.hidden = true; return; }
  openPicker({ i: sb._i, excerpt: sb._text, en: sb._en, fixed: true }, sb);
  sb.hidden = true;
});

/* The picker: your topics, ticked where the passage stands under them, and a line for a new
   one. The first tick keeps the passage; unticking the last leaves it kept, under no topic,
   except when it was kept just now in this picker and has no note, when it goes again. */
let pick = null;   // { i, id, excerpt, en, fixed, anchor, made }
const pickItem = () => pick.id ? itemOf(pick.id) : pick.excerpt ? null : (pick.i != null && P[pick.i] ? wholeOf(refOf(pick.i)) : null);
function openPicker(p, anchor) {
  refreshShared();
  pick = Object.assign({ i: null, id: null, excerpt: null, en: false, fixed: false, made: false }, p, { anchor });
  drawPicker();
  pk.hidden = false;
  placePicker();
  const inp = pk.querySelector('input[type=text]');
  if (inp && !DB.topics.length) inp.focus();
}
function closePicker() { pk.hidden = true; pick = null; }
function placePicker() {
  if (!pick || !pick.anchor) return;
  const r = pick.anchor.getBoundingClientRect();
  pk.style.top = Math.max(8, Math.min(r.bottom + 4, window.innerHeight - pk.offsetHeight - 8)) + 'px';
  pk.style.left = Math.max(8, Math.min(r.right - pk.offsetWidth, window.innerWidth - pk.offsetWidth - 8)) + 'px';
}
function drawPicker() {
  const it = pickItem(), on = new Set(it ? it.topics : []), list = sortedTopics();
  const cite = it ? it.cite : pick.i != null && P[pick.i] ? P[pick.i].cite : '';
  pk.innerHTML = '<div class="t">' + (pick.excerpt || (it && it.excerpt) ? 'Keep these words under' : 'Keep this passage under') + '</div>' +
    '<div class="c">' + esc(cite) + (pick.excerpt ? ' · “' + esc(clip(pick.excerpt, 60)) + '”' : '') + '</div>' +
    list.map(t => '<label><input type="checkbox" data-mtt="' + esc(t.id) + '"' + (on.has(t.id) ? ' checked' : '') + '> ' + esc(t.name) + ' <span>' + countIn(t.id) + '</span></label>').join('') +
    '<input type="text" placeholder="' + (list.length ? 'A new topic, then Enter' : 'Name your first topic, then Enter') + '" spellcheck="false" maxlength="120">' +
    '<div class="acts">' +
      (it ? '' : '<button type="button" data-mta="keep">Keep it, under no topic</button>') +
      (it ? '<button type="button" data-mta="remove">Remove from My topics</button>' : '') +
      '<button type="button" data-mta="open">Open My topics</button></div>' +
    (() => { const sh = sharedList().filter(x => x.push && !x.archived); return sh.length ? '<div class="t mtpsh">Add to a board shared with me</div>' + sh.map(x => '<button type="button" class="mtpshb" data-mta="toshared" data-mtr="' + esc(x.repo) + '">+ ' + esc(x.topic) + ' <span>@' + esc(x.owner) + '</span></button>').join('') : ''; })();
}
function ensureItem() {
  let it = pickItem();
  if (it) return it;
  if (pick.i == null || !P[pick.i]) return null;
  it = itemFor(pick.i, pick.excerpt, pick.en);
  DB.items.push(it);
  pick.id = it.id; pick.made = true;
  return it;
}
function setTopic(tid, on) {
  const it = ensureItem();
  if (!it) return;
  const had = it.topics.includes(tid);
  if (on && !had) it.topics.push(tid);
  if (!on && had) it.topics = it.topics.filter(x => x !== tid);
  it.at = now();
  if (!on && !it.topics.length && pick.made && !it.note) { dropItem(it); pick.id = null; pick.made = false; }
  save();
  if (!page.hidden) render();
}
pk.addEventListener('mousedown', e => { if (!e.target.closest('input')) e.preventDefault(); });
pk.addEventListener('change', e => {
  const c = e.target.closest('input[type=checkbox][data-mtt]');
  if (!c || !pick) return;
  setTopic(c.dataset.mtt, c.checked);
  drawPicker();
});
pk.addEventListener('keydown', e => {
  e.stopPropagation();
  if (e.key === 'Escape') { closePicker(); return; }
  const inp = e.target.closest('input[type=text]');
  if (!inp) return;
  if (e.key !== 'Enter') return;
  e.preventDefault();
  const t = newTopic(inp.value);
  if (!t) return;
  setTopic(t.id, true);
  drawPicker();
  const ni = pk.querySelector('input[type=text]');
  if (ni) ni.focus();
  placePicker();
});
pk.addEventListener('click', e => {
  e.stopPropagation();
  const b = e.target.closest('button[data-mta]');
  if (!b || !pick) return;
  const a = b.dataset.mta;
  if (a === 'open') { closePicker(); openPage(); return; }
  if (a === 'toshared') { addToShared(b.dataset.mtr); return; }
  if (a === 'keep') { if (ensureItem()) { pick.made = false; save(); toast('Kept, under no topic yet. It is under Unsorted in My topics.'); } closePicker(); if (!page.hidden) render(); return; }
  if (a === 'remove') {
    const it = pickItem();
    closePicker();
    if (!it) return;
    dropItem(it); save();
    if (!page.hidden) render();
    toast('Removed from My topics.', [['Undo', () => { restoreItem(it); save(); if (!page.hidden) render(); }]]);
  }
});
document.addEventListener('mousedown', e => {
  if (!pk.hidden && !pk.contains(e.target) && !(pick && pick.anchor && pick.anchor.contains(e.target)) && e.target !== hov) closePicker();
}, true);

/* ── Boards shared with you ───────────────────────────────────────────────────
   A topic's board can be shared (topic-board.html): it is then a private repository of its own in
   the organisation, kant-lab-seminar/board-…, and GitHub lets in only those it is shared with.
   Those shared with you are listed under Shared with me, as GitHub shows them to your token, with
   any this browser has opened beside them. ☆ Topic offers the ones you may change, and a passage
   given to one is added to that board's passages, where it waits to be put on the board. */
const ORG = 'kant-lab-seminar';
const SHARED_LIST = 'kantlab-shared-boards';   // { at, list: [{ repo, topic, owner, push, archived }] }, as topic-board.html keeps it too
let sharedAt = 0;
function sharedList() {
  let c = null; try { c = JSON.parse(get(localStorage, SHARED_LIST) || 'null'); } catch (e) { c = null; }
  const mine = new Set(Object.keys(DB.boards).map(k => DB.boards[k] && DB.boards[k].shared && DB.boards[k].shared.repo).filter(Boolean));
  return (c && Array.isArray(c.list) ? c.list : []).filter(x => x && x.repo && !mine.has(x.repo) && (!gh.login || x.owner !== gh.login));
}
async function refreshShared() {
  if (!ghReady() || Date.now() - sharedAt < 60000) return;
  sharedAt = Date.now();
  let r; try { r = await api('GET', '/user/repos?affiliation=collaborator,organization_member&per_page=100&sort=updated'); } catch (e) { return; }
  if (!r.ok || !Array.isArray(r.data)) return;
  const list = r.data.filter(x => x && x.owner && x.owner.login === ORG && /^board-/.test(x.name)).map(x => {
    const m = /^(.*) · a topic’s board shared by @([A-Za-z0-9-]+)/.exec(x.description || '');
    return { repo: x.name, topic: m ? m[1] : x.name, owner: m ? m[2] : '', push: !!(x.permissions && x.permissions.push), archived: !!x.archived };
  });
  put(localStorage, SHARED_LIST, JSON.stringify({ at: now(), list }));
  if (!page.hidden) renderAside();
  if (pick && !pk.hidden) drawPicker();
}
function openShared(repo) {
  const url = new URL('topic-board.html#s=' + encodeURIComponent(repo), location.href).href;
  try { (window.top || window).location.href = url; } catch (x) { location.href = url; }
}
// The file of a shared board, one passage, card, arrow, view or annotation to a line, as topic-board.html writes it.
function sharedText(f) {
  const L = (k, a) => JSON.stringify(k) + ':[\n' + (a || []).map(x => JSON.stringify(x)).join(',\n') + '\n]';
  const b = f.board || {};
  const head = { kind: 'kantlab-shared-board', v: 1, owner: f.owner, topic: f.topic, savedBy: f.savedBy || '', savedAt: f.savedAt || '' };
  return JSON.stringify(head).slice(0, -1) + ',\n' + L('passages', f.passages) + ',\n"gone":' + JSON.stringify(f.gone || {}) + ',\n"board":{\n' +
    ['models', 'items', 'arrows', 'views', 'photos'].map(k => L(k, b[k])).join(',\n') + ',\n"removed":' + JSON.stringify(b.removed || []) + '},\n' + L('annotations', f.annotations) + '}\n';
}
// A passage given to a board shared with you: added to its passages, unless it is there already.
async function addToShared(repo) {
  const s = sharedList().find(x => x.repo === repo); if (!s || !pick) return;
  const x = pickItem() || (pick.i != null && P[pick.i] ? itemFor(pick.i, pick.excerpt, pick.en) : null);
  closePicker();
  if (!x) return;
  if (!ghReady()) { toast('Turn on Keep on GitHub in My topics, or open the board itself, to add to a shared board.'); return; }
  const path = '/repos/' + ORG + '/' + encodeURIComponent(repo) + '/contents/board.json';
  try {
    for (let tries = 0; tries < 4; tries++) {
      const r = await api('GET', path);
      if (!r.ok) { toast('That shared board could not be read: ' + messageFor(apiError(r)) + '.'); return; }
      let content = r.data.content;
      if (!content && r.data.sha) { const b = await api('GET', '/repos/' + ORG + '/' + encodeURIComponent(repo) + '/git/blobs/' + r.data.sha); if (!b.ok) { toast('That shared board could not be read.'); return; } content = b.data.content; }
      let f = null; try { f = JSON.parse(b64decode(content)); } catch (e) { f = null; }
      if (!f || f.kind !== 'kantlab-shared-board') { toast('That shared board’s file would not read.'); return; }
      if ((f.passages || []).some(p => p.ref === x.ref && (p.excerpt || '') === (x.excerpt || ''))) { toast('It is among the passages of “' + s.topic + '” already.'); return; }
      f.passages = (f.passages || []).concat([{ id: 's-' + uid(), ref: x.ref, cite: x.cite, work: x.work, date: x.date, words: x.words, excerpt: x.excerpt || null, en: !!x.en, by: gh.login, added: now(), note: '' }]);
      f.savedBy = gh.login; f.savedAt = now();
      const w = await api('PUT', path, { message: 'Board: a passage added by @' + gh.login + ', from the Logic Portal', content: b64encode(sharedText(f)), sha: r.data.sha });
      if (w.ok) { toast('Added to the passages of “' + s.topic + '”, shared by @' + s.owner + '. It waits there to be put on the board.'); return; }
      if (w.status !== 409 && w.status !== 422) { toast('GitHub would not add it: ' + messageFor(apiError(w)) + '.'); return; }
    }
    toast('Someone else was saving that board just then. Try again in a moment.');
  } catch (e) { toast(cap(messageFor(e)) + '.'); }
}

/* ── The My topics page ──────────────────────────────────────────────────── */
const page = el('div', 'mtpage');
page.hidden = true;
page.innerHTML = '<div class="mtbar"><b class="cz">My topics</b><span class="mtstat"></span><span class="mtsp"></span>' +
  '<label class="mtmodesw" title="Show ☆ Topic on the portal’s passages"><input type="checkbox" class="mtmodein"> ☆ Topic on passages</label>' +
  '<span class="mtmenuwrap"><button type="button" class="btn" data-mta="menu" aria-haspopup="true" title="Files, GitHub, and how this works">⋯</button><div class="mtmenu" hidden></div></span>' +
  '<button type="button" class="btn" data-mta="close">Close ✕</button></div>' +
  '<div class="mtbody"><aside></aside><main><div class="mtwrap"></div></main></div>';
document.body.appendChild(page);
const fileIn = el('input');
fileIn.type = 'file'; fileIn.accept = '.json,application/json'; fileIn.hidden = true;
document.body.appendChild(fileIn);

let view = 'all';          // 'all', 'unsorted', or a topic's id
let also = '';             // only the passages also under this topic
let sortBy = 'arranged';   // 'arranged' (a topic as you have arranged it), 'text', or 'newest'
const whole = new Set();   // passages shown whole, not just their opening words

function openPage() { closePicker(); hideHover(); sb.hidden = true; page.hidden = false; render(); refreshShared(); }
function closePage() {
  page.hidden = true; page.querySelector('.mtmenu').hidden = true;
  if (/^#mt=[^&]*$/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
}
// An address of My topics' own, #mt=<topic id>, which a topic's board links back with.
function openFromHash() {
  const id = new URLSearchParams(location.hash.slice(1)).get('mt');
  if (!id) return;
  let k = id, n = 0;
  while (DB.alias[k] && n++ < 50) k = DB.alias[k];
  if (!mode) setMode(true, true);
  view = topicOf(k) ? k : 'all'; also = ''; sortBy = topicOf(k) ? 'arranged' : 'newest';
  openPage();
}
tb.addEventListener('click', () => {
  if (!page.hidden) { closePage(); return; }
  if (!mode) setMode(true, true);
  openPage();
});

function render() {
  if (view !== 'all' && view !== 'unsorted' && !topicOf(view)) view = 'all';
  if (also && !topicOf(also)) also = '';
  page.querySelector('.mtmodein').checked = mode;
  renderAside(); renderMain(); renderStatus(); drawMenu();
}
const isShared = id => { const b = DB.boards[id]; return !!(b && isObj(b.shared) && b.shared.repo && !b.shared.stopped); };
function renderAside() {
  const un = DB.items.filter(x => !x.topics.length).length;
  const btn = (id, label, n, cls) => '<button type="button" class="mtopic' + (cls ? ' ' + cls : '') + (view === id ? ' on' : '') + '" data-mta="view" data-mtt="' + esc(id) + '">' + label + ' <span>' + n + '</span></button>';
  page.querySelector('aside').innerHTML =
    btn('all', 'All passages', DB.items.length, 'mtall') + '<hr>' +
    sortedTopics().map(t => btn(t.id, esc(t.name) + (isShared(t.id) ? ' <i class="mtshtag">shared</i>' : ''), countIn(t.id))).join('') +
    (un || view === 'unsorted' ? btn('unsorted', '<i>Unsorted</i>', un) : '') +
    '<input type="text" class="mtnewt" placeholder="+ New topic, then Enter" spellcheck="false" maxlength="120">' +
    (sharedList().length ? '<hr><div class="mtshh">Shared with me</div>' + sharedList().sort((a, b) => a.topic.localeCompare(b.topic, 'de')).map(x =>
      '<button type="button" class="mtopic mtsh" data-mta="openshared" data-mtr="' + esc(x.repo) + '" title="' + esc(x.archived ? 'No longer shared: look only' : x.push ? 'You can work on it' : 'You can look at it') + '">' + esc(x.topic) + ' <span>@' + esc(x.owner || '?') + (x.archived ? ' · ended' : x.push ? '' : ' · look') + '</span></button>').join('') : '') +
    (DB.topics.length ? '' : '<p class="mthint">A topic works like a label: one passage can stand under several, with one note of yours.</p>');
}
function listFor() {
  let list = view === 'all' ? DB.items.slice() : view === 'unsorted' ? DB.items.filter(x => !x.topics.length) : arranged(topicOf(view));
  if (also) list = list.filter(x => x.topics.includes(also));
  if (sortBy === 'text') list.sort(byText);
  else if (sortBy === 'newest' || (sortBy === 'arranged' && view === 'all')) list.sort((a, b) => byAdded(b, a));
  return list;
}
function renderMain() {
  const w = page.querySelector('.mtwrap'), t = topicOf(view);
  if (!DB.items.length && !DB.topics.length) {
    w.innerHTML = '<div class="mthead"><h2>My topics</h2></div><p class="mtempty">Nothing kept yet. Point at a passage anywhere in the portal, in the search results, a full text or among Kant’s notes, and press <b>☆ Topic</b>. To keep only some of its words, select them and press <b>☆ Keep these words</b>. Your topics are kept in this browser, and nobody else sees them.</p>';
    return;
  }
  const list = listFor(), canMove = !!t && sortBy === 'arranged' && !also;
  const others = sortedTopics().filter(x => x.id !== view);
  const head = t
    ? '<div class="mthead"><input type="text" class="mtname" value="' + esc(t.name) + '" maxlength="120" title="Rename this topic" spellcheck="false">' +
      '<button type="button" class="btn mtbrd" data-mta="board" title="' + (DB.boards[t.id] ? 'This topic’s board: its passages as cards, to lay out, join with arrows and annotate' : 'Make a board for this topic: its passages as cards, to lay out, join with arrows and annotate') + '">▦ ' + (isShared(t.id) ? 'Board · shared' : DB.boards[t.id] ? 'Board' : 'Make a board') + '</button>' +
      '<button type="button" class="mtlink" data-mta="deltopic">Delete this topic</button></div>' + linkedWith(t.id) +
      '<textarea class="mttnote" rows="2" placeholder="What this topic is for: a question, a hunch, what to look for next. Only you see it.">' + esc(t.note) + '</textarea>'
    : '<div class="mthead"><h2>' + (view === 'unsorted' ? 'Unsorted' : 'All passages') + '</h2></div>' +
      (view === 'unsorted' ? '<p class="mtempty">Passages kept under no topic. Give each one a topic with <b>+ topic</b>.</p>' : '');
  const tools = '<div class="mttools"><span>' + plural(list.length, 'passage') + '</span>' +
    (others.length ? '<label>Also under <select data-mta="also"><option value="">any topic</option>' + others.map(x => '<option value="' + esc(x.id) + '"' + (also === x.id ? ' selected' : '') + '>' + esc(x.name) + '</option>').join('') + '</select></label>' : '') +
    '<label>Order <select data-mta="sort">' +
      (t ? '<option value="arranged"' + (sortBy === 'arranged' ? ' selected' : '') + '>as you arranged them</option>' : '') +
      '<option value="newest"' + (sortBy === 'newest' || (!t && sortBy === 'arranged') ? ' selected' : '') + '>newest kept first</option>' +
      '<option value="text"' + (sortBy === 'text' ? ' selected' : '') + '>by the date of the text</option></select></label></div>';
  w.innerHTML = head + tools + (list.length ? list.map((x, k) => cardHtml(x, canMove, k, list.length)).join('')
    : '<p class="mtempty">' + (also ? 'No passage here is under both.' : t ? 'No passages under this topic yet. In the portal, press ☆ Topic on a passage and tick “' + esc(t.name) + '”.' : 'Nothing here.') + '</p>');
  w.querySelectorAll('textarea').forEach(grow);
}
function cardHtml(it, canMove, k, n) {
  const i = idxOf(it.ref), live = i != null && !!P[i];
  const showWhole = live && !it.excerpt && whole.has(it.id);
  const words = showWhole ? P[i].text : it.excerpt || it.words;
  const more = live && !it.excerpt && flat(P[i].text).length > flat(it.words).length + 3;
  const chips = it.topics.map(id => topicOf(id)).filter(Boolean).sort((a, b) => a.name.localeCompare(b.name, 'de'))
    .map(t => '<span class="mtchip"><button type="button" data-mta="view" data-mtt="' + esc(t.id) + '" title="Open this topic">' + esc(t.name) + '</button><button type="button" data-mta="untopic" data-mtt="' + esc(t.id) + '" title="Take it off this topic">×</button></span>').join('');
  return '<div class="mtcard" data-mti="' + esc(it.id) + '">' +
    '<div class="mtch"><a class="mtcite" href="#" data-mta="go" title="Read it where it stands">' + esc(it.cite || it.ref) + '</a>' +
      '<span class="mtwork">' + esc([it.work, it.date].filter(Boolean).join(' · ')) + '</span>' +
      (it.excerpt ? '<span class="mttag" title="Only these words of the passage were kept">' + (it.en ? 'words of its English' : 'words kept') + '</span>' : '') +
      '<span class="mtbtns">' + (canMove ? '<button type="button" data-mta="up" title="Move up"' + (k === 0 ? ' disabled' : '') + '>↑</button><button type="button" data-mta="down" title="Move down"' + (k === n - 1 ? ' disabled' : '') + '>↓</button>' : '') +
      '<button type="button" data-mta="del" title="Remove from My topics">✕</button></span></div>' +
    '<div class="mtwords' + (it.excerpt ? ' ex' : '') + '"' + (it.en ? ' lang="en"' : '') + '>' + esc(words) + '</div>' +
    (more ? '<button type="button" class="mtlink" data-mta="whole">' + (showWhole ? '▴ only its opening words' : '▾ the whole passage') + '</button>' : '') +
    (ready() && !live ? '<p class="mtlost">This address no longer opens in the portal. The words above are the copy kept when it was saved.</p>' : '') +
    '<div class="mtchips">' + chips + '<button type="button" class="mtaddt" data-mta="pick">+ topic</button></div>' +
    '<textarea class="mtinote" rows="1" placeholder="Your note">' + esc(it.note) + '</textarea></div>';
}
// The topics a topic's board links to, and those whose boards link to it, by the link cards on them
// (topic-board.html), with how many links there are each way.
function linkedWith(id) {
  const real = k => { let x = k, n = 0; while (DB.alias[x] && n++ < 50) x = DB.alias[x]; return x; };
  const n = new Map(), bump = k => { if (k !== id && topicOf(k)) n.set(k, (n.get(k) || 0) + 1); };
  Object.keys(DB.boards).forEach(k => (DB.boards[k].items || []).forEach(c => {
    if (!c || c.kind !== 'link' || !c.to) return;
    const to = real(c.to.t || ''), fr = real(k);
    if (fr === id) bump(to); else if (to === id) bump(fr);
  }));
  if (!n.size) return '';
  return '<p class="mtlinked">Linked with ' + [...n].sort((a, b) => topicOf(a[0]).name.localeCompare(topicOf(b[0]).name, 'de')).map(([k, c]) =>
    '<button type="button" data-mta="view" data-mtt="' + esc(k) + '">' + esc(topicOf(k).name) + '</button>' + (c > 1 ? ' (' + c + ')' : '')).join(', ') + ' <span>· by links on the boards</span></p>';
}
function grow(t) { t.style.height = 'auto'; t.style.height = Math.min(t.scrollHeight + 2, 320) + 'px'; }

function renderStatus() {
  const s = page.querySelector('.mtstat');
  tb.classList.toggle('warn', gh.on && (gh.state === 'locked' || gh.state === 'error'));
  if (!s) return;
  if (!gh.on) {
    // red once the last file is three weeks old, or with ten passages and no file at all
    const f = get(localStorage, FILED_KEY), old = f ? Date.now() - Date.parse(f) > 21 * 864e5 && DB.items.length > 0 : DB.items.length >= 10;
    s.innerHTML = '<span class="dot' + (old ? ' bad' : '') + '"></span>Saved on this computer · ' +
      '<span' + (old ? ' class="bad"' : '') + '>' + (f ? 'last saved to a file on ' + esc(dayWords(f)) : 'not yet saved to a file') + '</span> <i>(GitHub off)</i>';
    return;
  }
  const st = gh.state;
  if (st === 'ok') s.innerHTML = '<span class="dot ok"></span>Saved · on GitHub at ' + esc(timeWords(gh.at));
  else if (st === 'saving' || st === 'pending' || st === 'starting') s.innerHTML = '<span class="dot"></span>Saved on this computer · ' + (st === 'saving' ? 'saving to GitHub…' : 'to GitHub in a moment');
  else if (st === 'offline') s.innerHTML = '<span class="dot"></span>Saved on this computer · GitHub catches up when you’re back online';
  else if (st === 'locked') s.innerHTML = '<span class="dot bad"></span>Saved on this computer · <button type="button" class="mtlink" data-mta="unlock">locked: give your ' + (gh.token ? 'passphrase' : 'token and passphrase') + ' to sync</button>';
  else if (st === 'error') s.innerHTML = '<span class="dot bad"></span>Saved on this computer · <span class="bad">' + esc(cap(gh.msg)) + '.</span> <button type="button" class="mtlink" data-mta="' + (gh.err === 401 ? 'retoken' : 'syncnow') + '">' + (gh.err === 401 ? 'Give a new token' : 'Try again') + '</button>';
  else s.textContent = 'Saved on this computer';
}
function drawMenu() {
  const m = page.querySelector('.mtmenu');
  m.innerHTML =
    '<button type="button" data-mta="savefile">Save to file</button><small>Everything, in one .json file, to keep or to open in another browser. The file is not locked: keep it somewhere of your own.</small>' +
    '<button type="button" data-mta="openfile">Open file…</button><small>Merges a saved file with what is here. Nothing here is lost.</small><hr>' +
    (gh.on
      ? '<button type="button" data-mta="syncnow">Sync now</button><small>' + (gh.login ? 'Kept on GitHub as ' + esc(gh.login) + ', locked with your passphrase.' : '') + '</small>' +
        '<button type="button" data-mta="rekey"' + (gh.key ? '' : ' disabled') + '>Change passphrase…</button>' +
        '<button type="button" data-mta="ghoff">Stop keeping on GitHub here</button><small>This computer keeps its topics; the file on GitHub stays as it is.</small>'
      : '<button type="button" data-mta="ghon"' + (canLock() ? '' : ' disabled') + '>Keep on GitHub…</button><small>' + (canLock() ? 'The same topics on every computer you use, locked with a passphrase only you know.' : 'This browser can’t lock them, so it can’t keep them on GitHub.') + '</small>') +
    '<hr><a href="' + HOWTO + '" target="_blank" rel="noopener">How My topics works ↗</a>';
}

/* The page's own actions */
let noteT = 0;
page.addEventListener('click', e => {
  const b = e.target.closest('[data-mta]');
  if (!b || b.tagName === 'SELECT') return;
  const a = b.dataset.mta, card = b.closest('.mtcard'), it = card ? itemOf(card.dataset.mti) : null;
  const menu = page.querySelector('.mtmenu');
  if (a !== 'menu') menu.hidden = true;
  if (a === 'menu') { menu.hidden = !menu.hidden; return; }
  if (a === 'close') { closePage(); return; }
  if (a === 'view') { view = b.dataset.mtt; also = ''; if (sortBy === 'arranged' && !topicOf(view)) sortBy = 'newest'; else if (topicOf(view)) sortBy = 'arranged'; render(); page.querySelector('main').scrollTop = 0; return; }
  if (a === 'go') { e.preventDefault(); if (it) goRead(it); return; }
  if (a === 'whole' && it) { whole.has(it.id) ? whole.delete(it.id) : whole.add(it.id); renderMain(); return; }
  if (a === 'pick' && it) { openPicker({ id: it.id, fixed: true }, b); return; }
  if (a === 'untopic' && it) {
    const tid = b.dataset.mtt;
    it.topics = it.topics.filter(x => x !== tid); it.at = now(); save(); render();
    const t = topicOf(tid);
    toast('Taken off “' + (t ? t.name : '') + '”' + (it.topics.length ? '.' : '. It is under Unsorted now.'), [['Undo', () => { const x = itemOf(it.id); if (x && !x.topics.includes(tid)) { x.topics.push(tid); x.at = now(); save(); render(); } }]]);
    return;
  }
  if (a === 'del' && it) {
    dropItem(it); save(); render();
    toast('Removed from My topics.', [['Undo', () => { restoreItem(it); save(); render(); }]]);
    return;
  }
  if ((a === 'up' || a === 'down') && it) {
    const t = topicOf(view);
    if (!t) return;
    const ids = arranged(t).map(x => x.id), k = ids.indexOf(it.id), j = a === 'up' ? k - 1 : k + 1;
    if (k < 0 || j < 0 || j >= ids.length) return;
    [ids[k], ids[j]] = [ids[j], ids[k]];
    t.order = ids; t.at = now(); save(); renderMain();
    const c = page.querySelector('.mtcard[data-mti="' + it.id + '"] [data-mta="' + a + '"]');
    if (c && !c.disabled) c.focus();
    return;
  }
  if (a === 'openshared') { openShared(b.dataset.mtr); return; }
  if (a === 'board') {
    const t = topicOf(view);
    if (!t) return;
    clearTimeout(noteT); save();
    const url = new URL('topic-board.html#t=' + encodeURIComponent(t.id), location.href).href;
    try { (window.top || window).location.href = url; } catch (x) { location.href = url; }   // from the portal inside a board, the board itself goes
    return;
  }
  if (a === 'deltopic') {
    const t = topicOf(view);
    if (!t) return;
    const under = DB.items.filter(x => x.topics.includes(t.id)), board = DB.boards[t.id];
    if (board && !confirm('Delete “' + t.name + '” and its board? Its passages stay in My topics, and Undo brings both back.')) return;
    DB.topics.splice(DB.topics.indexOf(t), 1); DB.gone[t.id] = now(); delete DB.boards[t.id];
    under.forEach(x => { x.topics = x.topics.filter(id => id !== t.id); x.at = now(); });
    const left = under.filter(x => !x.topics.length).length;
    view = 'all'; save(); render();
    toast('Deleted “' + t.name + '”' + (board ? ' and its board' : '') + '.' + (left ? ' ' + plural(left, 'passage') + ' under no other topic ' + (left === 1 ? 'is' : 'are') + ' under Unsorted now.' : ''), [['Undo', () => {
      delete DB.gone[t.id]; t.at = now();
      if (!topicOf(t.id)) DB.topics.push(t);
      if (board && !DB.boards[t.id]) DB.boards[t.id] = board;
      under.forEach(x => { const y = itemOf(x.id); if (y && !y.topics.includes(t.id)) { y.topics.push(t.id); y.at = now(); } });
      view = t.id; save(); render();
    }]]);
    return;
  }
  if (a === 'savefile') { saveFile(); return; }
  if (a === 'openfile') { fileIn.value = ''; fileIn.click(); return; }
  if (a === 'ghon') { openDlg('token', { remember: false }); return; }
  if (a === 'retoken') { openDlg('token', { remember: gh.remember }); return; }
  if (a === 'unlock') { if (gh.token) openDlg('unlock', { why: gh.why }); else openDlg('token', { remember: gh.remember }); return; }
  if (a === 'syncnow') { if (ghReady()) sync(); else if (gh.on) { if (gh.token) openDlg('unlock', { why: gh.why }); else openDlg('token', { remember: gh.remember }); } return; }
  if (a === 'rekey') { if (gh.key) openDlg('new', { change: true }); return; }
  if (a === 'ghoff') { ghOff(); return; }
});
page.addEventListener('change', e => {
  const x = e.target;
  if (x.classList.contains('mtmodein')) { setMode(x.checked); return; }
  if (x.dataset.mta === 'also') { also = x.value; renderMain(); return; }
  if (x.dataset.mta === 'sort') { sortBy = x.value; renderMain(); return; }
  if (x.classList.contains('mtname')) {
    const t = topicOf(view);
    if (!t) return;
    const n = flat(x.value).slice(0, 120);
    const same = DB.topics.find(o => o !== t && norm(o.name) === norm(n));
    if (!n || same) { x.value = t.name; if (same) toast('There is already a topic called “' + same.name + '”.'); return; }
    if (n !== t.name) { t.name = n; t.at = now(); save(); renderAside(); }
  }
});
page.addEventListener('input', e => {
  const x = e.target;
  if (x.tagName !== 'TEXTAREA') return;
  grow(x);
  if (x.classList.contains('mttnote')) { const t = topicOf(view); if (t) { t.note = x.value; t.at = now(); } }
  else if (x.classList.contains('mtinote')) { const it = itemOf(x.closest('.mtcard').dataset.mti); if (it) { it.note = x.value; it.at = now(); } }
  clearTimeout(noteT); noteT = setTimeout(() => save(), 400);
});
// Keys pressed on the page stay on it, so that the portal's J, K and arrows don't move the
// search results behind it.
page.addEventListener('keydown', e => {
  e.stopPropagation();
  const x = e.target;
  if (e.key === 'Escape') {
    const m = page.querySelector('.mtmenu');
    if (!m.hidden) m.hidden = true;
    else if (/^(INPUT|TEXTAREA|SELECT)$/.test(x.tagName)) x.blur();
    else closePage();
    return;
  }
  if (x.classList.contains('mtname') && e.key === 'Enter') { e.preventDefault(); x.blur(); return; }
  if (x.classList.contains('mtnewt') && e.key === 'Enter') {
    e.preventDefault();
    const t = newTopic(x.value);
    if (!t) return;
    save(); view = t.id; sortBy = 'arranged'; also = ''; render();
    const nt = page.querySelector('.mtnewt'); if (nt) nt.focus();
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !pk.hidden) closePicker(); });
document.addEventListener('mousedown', e => {
  const m = page.querySelector('.mtmenu');
  if (!m.hidden && !e.target.closest('.mtmenuwrap')) m.hidden = true;
});

/* Back to where a passage stands: its text open in the reader at that paragraph. A note of
   Kant's opens beside the textbook § it is on, picked out among the notes there, as in the
   handout tray. */
function goRead(it) {
  const k = idxOf(it.ref);
  if (k == null || !P[k]) { toast(ready() ? 'That address no longer opens in the portal.' : 'The portal is still loading its texts. Try again in a moment.'); return; }
  closePage();
  const T = TEXTS[P[k].t];
  if (PT.openRead) {
    if (!['meier', 'metaphysica', 'refl'].includes(T.shape)) { S.sel = k; S.quote = null; }
    PT.openRead(T.key, k);
  } else location.hash = 'p=' + encodeURIComponent(it.ref) + '&rt=conn';
}

/* ── Files ───────────────────────────────────────────────────────────────── */
function saveFile() {
  const d = Object.assign({ what: 'My topics, from the Kant Lab Logic Portal', saved: now() }, canonObj(DB));
  const blob = new Blob([JSON.stringify(d, null, 1) + '\n'], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'my-topics-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  put(localStorage, FILED_KEY, now());
  renderStatus();
  toast('Saved to a file, in your Downloads. It is not locked: keep it somewhere of your own.');
}
fileIn.addEventListener('change', () => {
  const f = fileIn.files && fileIn.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    let d = null;
    try { d = clean(JSON.parse(String(r.result))); } catch (e) { d = null; }
    if (!d) { toast('That file isn’t one of My topics. Nothing was changed.'); return; }
    const n0 = DB.items.length, t0 = DB.topics.length, was = canon(DB);
    const m = merge(DB, d, null);
    DB = m.db; save(); render();
    const ni = DB.items.length - n0, nt = DB.topics.length - t0;
    toast(ni || nt ? 'Opened “' + f.name + '”: ' + plural(Math.max(ni, 0), 'passage') + ' and ' + plural(Math.max(nt, 0), 'topic') + ' came in.'
      : canon(DB) !== was ? 'Opened “' + f.name + '”: what was new in it, in notes, boards or annotations, came in.' : 'Opened “' + f.name + '”: everything in it was here already.');
    if (m.report.topics.length || m.report.dupes || m.report.notes) setTimeout(() => tellMerge(m.report, 'the file'), 6600);
  };
  r.readAsText(f);
});

/* ── Keeping a copy on GitHub: the dialog ───────────────────────────────────
   token: which token, and whether to remember it here; then either unlock (a file is there
   already, from another computer) or new (none yet: choose a passphrase). new also changes
   the passphrase. Nothing is kept, and GitHub isn't turned on, until the last step works. */
const dlg = el('div', 'mtdlg');
dlg.hidden = true;
document.body.appendChild(dlg);
let ds = null;
function openDlg(stage, extra) {
  ds = Object.assign({ stage, err: '', busy: false }, extra || {});
  closePicker();
  drawDlg();
  dlg.hidden = false;
  const f = dlg.querySelector('input[type=password]:not([hidden])');
  if (f) f.focus();
}
function closeDlg() { dlg.hidden = true; ds = null; }
function drawDlg() {
  const s = ds, acts = (go, label) => { s.label = label; return '<div class="err">' + esc(s.err) + '</div><div class="acts"><button type="button" class="btn" data-mtd="cancel">Cancel</button>' +
    '<button type="button" class="btn on" data-mtd="' + go + '">' + esc(label) + '</button></div>'; };
  let h = '';
  if (s.stage === 'token') {
    const q = queueToken();
    h = '<h3>Keep My topics on GitHub</h3>' +
      '<p>A copy of your topics goes to one file of your own, <code>' + esc(GH.dir) + '/&lt;your GitHub name&gt;.json</code>, in the seminar’s private repository <code>' + esc(GH.owner + '/' + GH.repo) + '</code>. It is locked with a passphrase only you know before it leaves this computer. Everyone in the organisation can open that repository: they will see that your file is there and when it changed, never what is in it. This computer keeps its own copy, as now.</p>' +
      (q ? '<label><input type="radio" name="mttok" value="queue" checked> Use the token you joined the queue with</label><label><input type="radio" name="mttok" value="new"> Paste another token</label>' : '') +
      '<input type="password" class="mttok" placeholder="Your GitHub token, github_pat_…" autocomplete="off" spellcheck="false"' + (q ? ' hidden' : '') + '>' +
      '<p class="small">' + (q ? '' : 'A fine-grained token whose resource owner is <b>' + esc(GH.owner) + '</b>, for only the repository <b>' + esc(GH.repo) + '</b>, with <b>Contents: Read and write</b> and nothing else. The one made for the queue does: <a href="' + TOKEN_HOWTO + '" target="_blank" rel="noopener">how to make one</a>. ') + 'The token is sent only to GitHub.</p>' +
      '<label><input type="checkbox" class="mtrem"' + (s.remember ? ' checked' : '') + '> Remember on this computer: the token, and a key made from your passphrase that can’t be copied out of the browser. Only on a computer of your own.</label>' +
      acts('token', 'Next');
  } else if (s.stage === 'unlock') {
    h = '<h3>Your passphrase</h3><p>' + esc(s.why || ('Your topics on GitHub' + (s.saved ? ', last saved on ' + dayWords(s.saved) + ',' : '') + ' are locked with the passphrase you chose when you first kept them there.')) + '</p>' +
      '<input type="password" class="mtp1" placeholder="Your passphrase" autocomplete="off">' + acts('unlock', 'Unlock');
  } else {
    h = '<h3>' + (s.change ? 'A new passphrase' : 'Choose a passphrase') + '</h3>' +
      '<p>It locks your topics before they leave this computer. Nobody can open them without it, the organisation’s owners included, and <b>nobody can recover it</b>, you included. So keep a file as well, now and then: <b>Save to file</b>.</p>' +
      (s.change ? '<p>Your other computers will ask for the new one the next time they sync.</p>' : '') +
      '<p class="small">At least 8 characters. A few words you will remember are stronger than a short word with symbols.</p>' +
      '<input type="password" class="mtp1" placeholder="Passphrase" autocomplete="new-password"><input type="password" class="mtp2" placeholder="The same again" autocomplete="new-password">' +
      acts('new', s.change ? 'Change it' : 'Lock and save');
  }
  dlg.innerHTML = '<div class="box" role="dialog" aria-modal="true">' + h + '</div>';
}
dlg.addEventListener('change', e => {
  if (e.target.name !== 'mttok') return;
  const t = dlg.querySelector('.mttok');
  t.hidden = e.target.value !== 'new';
  if (!t.hidden) t.focus();
});
dlg.addEventListener('mousedown', e => { if (e.target === dlg) closeDlg(); });
dlg.addEventListener('keydown', e => {
  e.stopPropagation();
  if (e.key === 'Escape') { closeDlg(); return; }
  if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type !== 'checkbox' && e.target.type !== 'radio') {
    e.preventDefault();
    const go = dlg.querySelector('.acts .on');
    if (go && !go.disabled) go.click();
  }
});
dlg.addEventListener('click', e => {
  const b = e.target.closest('button[data-mtd]');
  if (!b || !ds) return;
  const a = b.dataset.mtd;
  if (a === 'cancel') { closeDlg(); return; }
  if (ds.busy) return;
  if (a === 'token') dlgToken();
  if (a === 'unlock') dlgUnlock();
  if (a === 'new') dlgNew();
});
// Busy and failing change only the message and the button, so that nothing typed is lost.
function dlgButton(s, text, off) {
  const go = dlg.querySelector('.acts .on'), er = dlg.querySelector('.err');
  if (go) { go.disabled = off; go.textContent = text; }
  if (er) er.textContent = s.err;
}
const busy = (s, text) => { s.busy = true; s.err = ''; dlgButton(s, text, true); };
const fail = (s, msg) => { if (ds !== s) return; s.busy = false; s.err = msg; dlgButton(s, s.label, false); };

async function dlgToken() {
  const s = ds;
  const useQ = dlg.querySelector('input[name="mttok"]:checked');
  const tok = useQ && useQ.value === 'queue' ? queueToken() : flat(dlg.querySelector('.mttok').value);
  s.remember = dlg.querySelector('.mtrem').checked;
  if (!tok) { fail(s, 'Paste your token first.'); return; }
  busy(s, 'Reaching GitHub…');
  const was = { token: gh.token, login: gh.login };
  try {
    gh.token = tok;
    const u = await api('GET', '/user');
    if (!u.ok) throw apiError(u);
    const r = await api('GET', REPO);
    if (!r.ok) throw apiError(r);
    gh.login = u.data.login;
    const f = await readMine();
    const login = gh.login;
    Object.assign(gh, was);
    if (ds !== s) return;
    const next = { tok, remember: s.remember, login };
    const lk = f && f.file && f.file.lock;
    if (gh.on && gh.key && login === was.login && lk && lk.salt === b64e(gh.salt)) {
      // a new token for the same file, whose key this computer has: nothing more to ask
      turnOn(next); closeDlg(); toast('The new token works. Syncing.'); sync(); return;
    }
    if (f) openDlg('unlock', Object.assign(next, { file: f, saved: f.file && f.file.saved }));
    else openDlg('new', next);
  } catch (e) {
    Object.assign(gh, was);
    fail(s, cap(messageFor(e)) + '.');
  }
}
async function dlgUnlock() {
  const s = ds, pass = dlg.querySelector('.mtp1').value.trim();
  if (!pass) { fail(s, 'Type your passphrase first.'); return; }
  busy(s, 'Unlocking…');
  const was = { token: gh.token, login: gh.login };
  try {
    if (s.tok) { gh.token = s.tok; gh.login = s.login; }
    const f = s.file || await readMine();
    if (!f) { Object.assign(gh, was); openDlg('new', s); return; }
    const lk = f.file && f.file.lock;
    if (!lk || !lk.salt) { const e = new Error('unreadable'); e.status = -1; throw e; }
    const salt = b64d(lk.salt), key = await deriveKey(pass, salt, lk.iter || ROUNDS);
    try { await openLock(lk, key); }
    catch (e) { Object.assign(gh, was); fail(s, 'That passphrase doesn’t open your topics on GitHub. Try again.'); return; }
    if (ds !== s) { Object.assign(gh, was); return; }
    gh.key = key; gh.salt = salt;
    turnOn(s);
    closeDlg();
    toast('Unlocked. Your topics here and on GitHub are being merged.');
    sync();
  } catch (e) {
    Object.assign(gh, was);
    fail(s, cap(messageFor(e)) + '.');
  }
}
async function dlgNew() {
  const s = ds, p1 = dlg.querySelector('.mtp1').value.trim(), p2 = dlg.querySelector('.mtp2').value.trim();
  if (p1.length < 8) { fail(s, 'At least 8 characters, please.'); return; }
  if (p1 !== p2) { fail(s, 'The two aren’t the same.'); return; }
  busy(s, 'Locking…');
  try {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    if (s.change) {
      const key = await deriveKey(p1, salt, ROUNDS);
      if (ds !== s) return;
      gh.prev = { key: gh.key, salt: gh.salt };
      gh.key = key; gh.salt = salt;
      if (gh.remember) keepKey();
      closeDlg();
      toast('Passphrase changed. Your topics on GitHub are being locked again under the new one.');
      sync();
      return;
    }
    const key = await deriveKey(p1, salt, ROUNDS);
    if (ds !== s) return;
    gh.login = s.login; gh.key = key; gh.salt = salt;
    turnOn(s);
    closeDlg();
    toast('Your topics are being locked and saved to GitHub.');
    sync();
  } catch (e) { fail(s, cap(messageFor(e)) + '.'); }
}
function turnOn(s) {
  if (s.tok) { gh.token = s.tok; gh.login = s.login || gh.login; gh.remember = !!s.remember; keepToken(s.tok, s.remember); }
  gh.on = true; gh.state = 'starting'; gh.why = '';
  noteOn();
  if (gh.remember) keepKey(); else dropKey(gh.login);
  renderStatus(); drawMenu(); marks();
}

/* ── Start ───────────────────────────────────────────────────────────────── */
document.body.classList.toggle('mtmode', mode);
marks();
ghStart();
openFromHash();
window.addEventListener('hashchange', openFromHash);
// Once the texts are in, passages can say whether their address still opens.
const waitT = setInterval(() => {
  if (!ready()) return;
  clearInterval(waitT);
  marks();
  if (!page.hidden) render();
}, 400);
})();
