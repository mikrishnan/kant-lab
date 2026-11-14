/* ═══════════════════════════════════════════════════════════════════════════
   THE HANDOUT TRAY

   Collect passages, or excerpts of them, while reading in the portal; keep them in
   named handouts, each passage with its English beside it unless its maker turns that
   off (English mode); write notes, the points to make to students, with passages under
   them, each passage with a label of its maker's own ("against X"); reorder, annotate
   and prune; export a handout as Word (which Pages opens), as a PDF by way of the
   browser's Print, or as plain text in the Handout tool's markup.

   Everything is kept in this browser's localStorage, under one key, and nothing is sent
   anywhere: the repository is public, and a handout is its maker's own. "Save to file"
   writes the lot to a .json file, and "Open file" reads one back.

   Each passage keeps its portal address ('textKey:id') beside its words, so that it opens
   where it stands in the reader, and a later handout builder can bring
   passages in by reference, as the Handout tool's passage bank does with {{Q13}}.

   Handout mode is off until a reader turns it on, so that nobody meets buttons they did
   not ask for. The header's Handouts button turns it on and opens the Handouts page, and
   the page's switch turns it off (or, where the header has a Modes menu, its switch there).
   Off, the handouts are kept and nothing of the tray shows but that button; the choice is
   remembered in this browser. The Handouts page has two views. Class view, for the class and on
   whenever the page opens, shows the words left out of a passage as … rather than struck through
   and puts away everything that would add to or change a handout. Instructor view is for making
   and changing them.

   The handouts are the class's: nothing of them opens without the class password, which
   handouts/lock.js checks (KANTLAB_LOCK).
   Handout mode stays off until the password is given; Lock, on the Handouts page, forgets it.

   The portal is a closed IIFE. This file reads it only through window.PORTAL, and it
   draws nothing inside the portal's own markup except one button beside the passage open
   on the right, and the header's buttons.
   ═══════════════════════════════════════════════════════════════════════════ */
(() => {
'use strict';
const PT = window.PORTAL;
if (!PT || !PT.P || !PT.TEXTS) return;
const { S, P, TEXTS } = PT;

const KEY = 'kantlab-handouts-v1';
const MODE_KEY = 'kantlab-handouts-mode';      // 'on', or absent for off
const modeWas = localStorage.getItem(MODE_KEY) === 'on';   // on when last left, so on again once the password is given
let mode = false;
const LOCK = window.KANTLAB_LOCK || null;                  // handouts/lock.js: the class password
// Before anything of the handouts opens: the class password, unless given already on this page
// or remembered on this computer. Without lock.js nothing opens.
const gate = (text) => !LOCK ? Promise.resolve(false) : LOCK.key() ? Promise.resolve(true) : LOCK.ask(text ? { text } : undefined);
const REPO = 'mikrishnan/kant-lab';
const SITE = PT.SITE_PORTAL || 'https://mikrishnan.github.io/kant-lab/logic-portal/index.html';
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rich = s => esc(s).replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>').replace(/\*([^*\n]+)\*/g, '<i>$1</i>');
const clip = (s, n) => s.length > n ? s.slice(0, n - 1) + '…' : s;
const flat = s => String(s || '').replace(/\s+/g, ' ').trim();
const paras = s => String(s || '').trim().split(/\n\s*\n/).map(flat).filter(Boolean);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const today = () => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');
const el = (tag, id, cls) => { const e = document.createElement(tag); if (id) e.id = id; if (cls) e.className = cls; return e; };
const slugOf = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'handout';

/* ── The store: { v, current, collect, handouts: [{ id, name, made, items, trash, published }] }
   A handout's items are headings, notes and passages; a note's own items are the passages
   under it. `collect` is the note that new passages go under, if any. ───────────────── */
function blank(name) { return { id: uid(), name, made: new Date().toISOString(), items: [] }; }
function load() {
  const raw = localStorage.getItem(KEY);
  try {
    const d = JSON.parse(raw || 'null');
    if (d && Array.isArray(d.handouts) && d.handouts.length) return d;
  } catch (e) {
    // Never write over a store that would not read: keep it aside under its own key.
    try { localStorage.setItem(KEY + '-unreadable-' + Date.now(), raw); } catch (e2) { /* nothing more to do */ }
  }
  const h = blank('My handout');
  return { v: 1, current: h.id, handouts: [h] };
}
let DB = load();
let touched = null;   // the linked passage being changed, whose copies follow it when it is saved (syncLinked)
const cur = () => DB.handouts.find(h => h.id === DB.current) || DB.handouts[0];
function save() {
  syncLinked();
  try { localStorage.setItem(KEY, JSON.stringify(DB)); }
  catch (e) { toast('This browser would not keep the change (its storage is full or switched off). Use Save to file.'); }
  marks();
  backupSoon();
}

/* Backups to a file, when the portal is served from this computer by
   Projects/Kant Lab/tools/serve-with-backups.py: a second or so after every change, the
   whole store goes to that server, which writes it to Projects/Kant Lab/Handout backups/
   (the latest, and one file per minute). On the live site there is no such server, and
   nothing is sent. */
const LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
let backupT = 0, backup = { ok: null, at: '' }, backupWarned = false;
// Each browser backs up to files of its own ("chrome-k3x9"), so that two browsers on this
// computer never write over each other's work; and a tray with nothing in it is not backed up.
const DEVICE = (() => {
  try {
    let d = localStorage.getItem('kantlab-handouts-device');
    if (!d) {
      const ua = navigator.userAgent, b = /Edg\//.test(ua) ? 'edge' : /Firefox\//.test(ua) ? 'firefox' : /Chrome\//.test(ua) ? 'chrome' : /Safari\//.test(ua) ? 'safari' : 'browser';
      d = b + '-' + Math.random().toString(36).slice(2, 6);
      localStorage.setItem('kantlab-handouts-device', d);
    }
    return d;
  } catch (e) { return 'browser'; }
})();
const isEmpty = () => DB.handouts.every(h => !h.items.length && !(h.trash || []).length);
const backupBody = () => JSON.stringify(Object.assign({ device: DEVICE }, DB));
function backupSoon() { if (!LOCAL) return; clearTimeout(backupT); backupT = setTimeout(backupNow, 1200); }
async function backupNow() {
  if (isEmpty()) return;
  try {
    const r = await fetch('/__handout-backup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: backupBody() });
    if (!r.ok) throw new Error(String(r.status));
    backup = { ok: true, at: (await r.json()).saved };
  } catch (e) {
    backup = { ok: false, at: '' };
    if (!backupWarned) { backupWarned = true; toast('Your handouts could not be backed up to a file on this computer. Use Save to file to keep a copy.'); }
  }
  backupMark();
}
function backupMark() {
  const b = page && page.querySelector('.hback');
  if (b) b.outerHTML = backupHtml();
}
function backupHtml() {
  if (!LOCAL) return '<p class="hback muted small">Kept in this browser on this computer, and nowhere else. Save to file to keep a copy or move it.</p>';
  if (backup.ok) return '<p class="hback small ok">✓ Backed up to a file on this computer at ' + esc(backup.at) + ', in <i>Kant Lab/Handout backups</i>.</p>';
  if (backup.ok === false) return '<p class="hback small bad">⚠ Not backed up to a file. Use <b>Save to file</b> to keep a copy.</p>';
  return '<p class="hback muted small">Backing up to a file on this computer…</p>';
}
if (LOCAL) {
  window.addEventListener('pagehide', () => { if (isEmpty()) return; try { navigator.sendBeacon('/__handout-backup', new Blob([backupBody()], { type: 'application/json' })); } catch (e) { /* the last timed backup stands */ } });
  setTimeout(backupNow, 1500);
}
window.addEventListener('storage', e => { if (e.key === KEY) { DB = load(); marks(); if (!page.hidden) render(); } });

/* ── Walking a handout ──────────────────────────────────────────────────── */
const isPass = x => x.kind === 'passage' || x.kind === 'excerpt';
const kids = n => n.items || (n.items = []);
const passagesOf = h => [].concat(...h.items.map(x => x.kind === 'note' ? kids(x) : [x])).filter(isPass);
const countOf = h => passagesOf(h).length;
const notesOf = h => h.items.filter(x => x.kind === 'note');
const findNote = (h, id) => h.items.find(x => x.kind === 'note' && x.id === id) || null;
const noteName = n => clip(flat(n.title) || flat(String(n.text || '').trim().split('\n')[0]) || 'Untitled note', 48);
// A key names an item's place: '3' at the top, '3.1' the second passage under the note at 3.
function at(h, key) {
  const [a, b] = String(key).split('.').map(Number);
  const n = h.items[a], r = isNaN(b) ? { list: h.items, i: a, it: n, note: null } : { list: kids(n), i: b, it: kids(n)[b], note: n };
  touch(r.it);
  return r;
}
/* Linked copies: a passage shown in more than one place in a handout (⧉ Show it twice…). Each
   copy is an item of its own, with a place of its own, and the copies share a link. Whatever is
   changed in one (its label, its note, its marks, what is left out of it, its English) is copied
   to the others as it is saved: touch() names the passage being changed, and every way of
   changing one comes through it (at(), markAt(), the marking bar). Moving or deleting a copy
   moves or deletes that copy alone. */
const touch = it => { if (it && it.link) touched = it; return it; };
const linkedOf = (h, it) => it && it.link ? passagesOf(h).filter(x => x !== it && x.link === it.link) : [];
const OWN = ['id', 'added', 'link'];   // what each copy keeps of its own
function copyInto(to, from) {
  Object.keys(to).forEach(k => { if (!OWN.includes(k) && !(k in from)) delete to[k]; });
  Object.keys(from).forEach(k => { if (!OWN.includes(k)) to[k] = JSON.parse(JSON.stringify(from[k])); });
}
function syncLinked() {
  const it = touched;
  touched = null;
  if (it) DB.handouts.forEach(h => linkedOf(h, it).forEach(x => copyInto(x, it)));
}
const collecting = () => { const c = DB.collect; return c && c.h === cur().id ? findNote(cur(), c.note) : null; };
// Or a section: "Add passages here" on a heading sends new passages to the end of its section,
// in the order they are added ({ h, section: the heading's id } in DB.collect).
const collectingSection = () => { const c = DB.collect; return c && c.h === cur().id && c.section ? cur().items.find(x => x.kind === 'heading' && x.id === c.section) || null : null; };
// The end of the section the heading at k opens: the place of the next heading, or the handout's end.
function sectionEnd(h, k) { let e = k + 1; while (e < h.items.length && h.items[e].kind !== 'heading') e++; return e; }

/* ── A passage, as an item ───────────────────────────────────────────────── */
// Meier and Baumgarten wrote the textbooks; everything else in the portal is Kant's.
const authorOf = T => T.layer === 'textbook' ? T.title.split(',')[0].trim() : 'Kant';
const workOf = T => { const w = T.title.replace(/\s*\((?:uncorrected )?OCR\)\s*$/i, ''); return T.layer === 'textbook' ? w.replace(/^[^,]+,\s*/, '') : w; };
// Kant's published works: a passage of an AA volume names its own work (Nova dilucidatio, not
// the volume), and the Critique is the Critique, its citation saying which edition (A 51 / B 75).
const workOfPassage = (p, T) => {
  if (T.layer === 'published') {
    const w = p.work && (T.works || []).find(x => x.key === p.work);
    if (w) return w.short;
    if (T.cite) return 'Kritik der reinen Vernunft';
  }
  return workOf(T);
};
const refOf = i => TEXTS[P[i].t].key + ':' + P[i].id;
const styleKey = () => S.en || S.enStyle || 'guyer';
function styleLabel(k) {
  const L = typeof PORTAL_TR_STYLES === 'undefined' ? [] : PORTAL_TR_STYLES;
  const st = L.find(x => x.key === k);
  return st ? st.label : k;
}
// The passage's English in the style now chosen: { text, style, part }, 'loading', or null.
function englishOf(p) {
  const tr = PT.trFor && PT.trFor(TEXTS[p.t]);
  if (!tr) return null;
  const k = styleKey(), st = PT.trState(tr, k);
  if (st === 'loading') return 'loading';
  if (st !== 'ready') return null;
  const e = PT.trEntry(tr, k, p);
  return e ? { text: e.text, style: k, part: !!e.part } : null;
}
function itemFor(i, excerpt, fromEn) {
  const p = P[i], T = TEXTS[p.t], got = englishOf(p), e = got && got !== 'loading' ? got : null;
  const it = {
    id: uid(), kind: excerpt ? 'excerpt' : 'passage', ref: refOf(i),
    author: authorOf(T), work: workOfPassage(p, T), cite: p.cite, date: p.dateLabel || T.date,
    text: excerpt || p.text, from: 'original', label: '',
    // A whole passage brings its English along when the English is on.
    en: e ? e.text : null, enStyle: e ? e.style : null, enPart: !!(e && e.part), enOn: !!(e && S.en),
    note: '', added: new Date().toISOString(),
  };
  if (excerpt) Object.assign(it, snippetOf(p, excerpt, fromEn, e));
  return it;
}

/* A Reflexion's dating, shown with it on the handout and in every export: Adickes' phase as he
   prints it, and the years his chronology gives it (ca.), just as the portal shows it beside the
   note. A passage keeps it from when it was added (date); one added before it was shown, or
   without it, has it read from the portal. Nothing in the handout is changed by showing it. */
const isRefl = x => /^refl-(?:meta|logik):/.test(String((x && x.ref) || ''));
function reflDateOf(x) {
  if (!isRefl(x)) return '';
  if (x.date && /phase|undated|\d/.test(x.date)) return x.date;
  const i = PT.BYID ? PT.BYID.get(x.ref) : null;
  return i != null && P[i] && P[i].dateLabel ? P[i].dateLabel : '';
}
function adickesOf(it) {
  const ds = [...new Set(partsOf(it).filter(isRefl).map(reflDateOf).filter(Boolean))];
  return ds.length ? 'Adickes: ' + ds.join('; ') : '';
}

/* ── English mode ────────────────────────────────────────────────────────
   One switch, English, at the top of the Handouts page, in either view: on, every passage shows
   its English, beside it where there is room and beneath it where not, for students who read no
   German or Latin; off, none does. It is this browser's choice, kept in VIEW_EN, not the
   handout's, so Class view can use it and it changes no handout. (A handout's english: false and a
   passage's enHide, from when each could be switched alone, are kept but no longer read.)
   A handout made before English mode has it on. A passage added while the portal's English was
   off, or still loading, has no English kept with it: it is fetched from the portal's
   translations and kept with the passage, the passage's own words, label, note and marks
   untouched. (enOn, from before, is kept but no longer read.) */
const VIEW_EN = 'kantlab-handouts-english';   // 'off' where the English switch was turned off
let showEn = (() => { try { return localStorage.getItem(VIEW_EN) !== 'off'; } catch (e) { return true; } })();
const enMode = () => showEn;
const enWanted = (h, it) => showEn && isPass(it) && it.from !== 'english';
const enShown = (h, it) => enWanted(h, it) && !!it.en;
// Fetch an item's English: true once it has it, false where the portal has none, 'loading' meanwhile.
function fillEn(it) {
  if (it.en) return true;
  if (it.parts) {   // a joined passage: each part's, then the lot, with […] where the portal has passages between
    const got = it.parts.map(fillEn);
    if (got.includes('loading')) return 'loading';
    if (!it.parts.every(q => q.en)) return false;
    it.en = it.parts.map((q, k) => (k && gapBetween(it.parts[k - 1].ref, q.ref) ? '[…]\n\n' : '') + q.en).join('\n\n');
    Object.assign(it, { enStyle: it.parts[0].enStyle, enPart: it.parts.some(q => q.enPart) });
    return true;
  }
  const k = idxOf(it.ref), got = k == null ? null : englishOf(P[k]);
  if (got === 'loading') return 'loading';
  if (!got) return false;
  if (it.kind === 'excerpt') { const s = snippetOf(P[k], it.text, false, got); Object.assign(it, { en: s.en, enSnippet: s.enSnippet, enApprox: s.enApprox }); }
  else it.en = got.text;
  Object.assign(it, { enStyle: got.style, enPart: !!got.part });
  return true;
}
// Whether an item's English, not kept with it yet, is on its way ('loading') or not to be had (null).
const enState = it => it.parts ? (it.parts.some(q => !q.en && enState(q) === 'loading') ? 'loading' : null)
  : (k => k != null && englishOf(P[k]) === 'loading' ? 'loading' : null)(idxOf(it.ref));
// Every handout in English mode gets the English its passages lack, kept as it arrives.
let fillT = 0;
function fillAll(tries) {
  fillT = 0;
  let changed = false, waiting = false;
  DB.handouts.filter(() => showEn).forEach(h => passagesOf(h).forEach(it => {
    if (!enWanted(h, it) || it.en) return;
    const r = fillEn(it);
    if (r === 'loading') waiting = true; else if (r) changed = true;
  }));
  if (changed) { save(); if (!page.hidden) render(); }
  if (waiting && tries < 40) fillT = setTimeout(() => fillAll(tries + 1), 600);
}
const fillSoon = () => { if (!fillT) fillT = setTimeout(() => fillAll(0), 0); };

/* ── A few sentences of a passage, with their English ─────────────────────
   An excerpt is the words selected in a passage. Its English is the same sentences of the
   passage's English, found by counting sentences, since the translations keep sentences whole:
   exact where the passage and its English have as many sentences, otherwise roughly the same
   stretch, and then marked so (enApprox). Words selected in the English get the matching German
   sentences the same way. The English is shown with an excerpt from the start, since a snippet
   is for students who may not read German. Where the words stand in a text that marks its pages
   (Kant's published works), the citation narrows to the pages they are on. */
const SENT_END = /[.?!:;](?=\s+[A-ZÄÖÜ„"»“(\[*])/g;
function sentences(t) {
  const out = [];
  let s = 0, m;
  SENT_END.lastIndex = 0;
  while ((m = SENT_END.exec(t))) { out.push([s, m.index + 1]); s = m.index + 1; while (/\s/.test(t[s] || '')) s++; }
  if (s < t.length) out.push([s, t.length]);
  return out;
}
// Where the selected words stand in a text, spaces aside: [start, end], or null.
function locate(text, words) {
  const f = flat(words);
  if (!f) return null;
  let i = text.indexOf(f);
  if (i >= 0) return [i, i + f.length];
  const chars = [], map = [];
  let sp = false;
  for (let k = 0; k < text.length; k++) {
    if (/\s/.test(text[k])) { if (!sp && chars.length) { chars.push(' '); map.push(k); } sp = true; }
    else { chars.push(text[k]); map.push(k); sp = false; }
  }
  i = chars.join('').indexOf(f);
  return i < 0 ? null : [map[i], map[i + f.length - 1] + 1];
}
// The sentences of `to` answering to [a, b] of `from`, where both have as many sentences.
function sameSentences(from, to, a, b) {
  const S1 = sentences(from), S2 = sentences(to);
  const hit = S1.map((x, k) => x[1] > a && x[0] < b ? k : -1).filter(k => k >= 0);
  return S1.length === S2.length && hit.length ? to.slice(S2[hit[0]][0], S2[hit[hit.length - 1]][1]).trim() : null;
}
// Roughly the same stretch of `to`, by position, to whole words: for when the sentences differ.
function roughStretch(from, to, a, b) {
  const L = from.length || 1, n = to.length;
  let x = Math.max(0, Math.floor(n * a / L) - 30), y = Math.min(n, Math.ceil(n * b / L) + 30);
  if (x > 0) { const k = to.lastIndexOf(' ', x); x = k > 0 ? k + 1 : 0; }
  if (y < n) { const k = to.indexOf(' ', y); y = k > 0 ? k : n; }
  return (x > 0 ? '… ' : '') + to.slice(x, y).trim() + (y < n ? ' …' : '');
}
// The pages [a, b] of a passage stand on, where it marks its pages inside it.
function snippetCite(p, at) {
  if (!p.pbm || !p.pbm.length) return p.cite;
  const pageAt = o => { let l = p.edl ? p.edl + ' ' + p.edPg : String(p.aa); p.pbm.forEach(([x, lab]) => { if (x <= o) l = lab; }); return l; };
  const a = pageAt(at[0]), b = pageAt(Math.max(at[0], at[1] - 1));
  if (p.edl) { const other = p.cite.split(' / ')[1]; return (a === b ? a : a + '–' + b.replace(/^[AB] /, '')) + (other ? ' / ' + other : ''); }
  return 'AA ' + p.vol + ':' + (a === b ? a : a + '–' + b);
}
function snippetOf(p, words, fromEn, e) {
  if (!fromEn) {
    const at = locate(p.text, words), o = { text: words, from: 'original' };
    if (at) o.cite = snippetCite(p, at);
    if (e) {
      const m = at && sameSentences(p.text, e.text, at[0], at[1]);
      Object.assign(o, { en: m || (at ? roughStretch(p.text, e.text, at[0], at[1]) : e.text), enSnippet: !!at, enApprox: !m, enOn: true });
    }
    return o;
  }
  // Selected in the English: the matching German sentences, with the words selected as their English.
  const plain = e ? e.text.replace(/\*+/g, '') : '', at = e && locate(plain, words);
  const de = at && sameSentences(plain, p.text, at[0], at[1]);
  if (de) {
    const g = locate(p.text, de);
    return Object.assign({ text: de, from: 'original', en: words, enStyle: e.style, enPart: !!e.part, enSnippet: true, enApprox: false, enOn: true, pickedIn: 'english' },
      g ? { cite: snippetCite(p, g) } : {});
  }
  // The German cannot be matched: the English words alone, as before.
  return { text: words, from: 'english', en: null, enStyle: styleKey(), enPart: false, enOn: false };
}
// A snippet added while its English was still loading gets it when it arrives.
function englishLater(it, i, tries) {
  if (it.en || it.from === 'english' || tries > 30) return;
  const got = englishOf(P[i]);
  if (got === 'loading' || !got) { if (got === 'loading') setTimeout(() => englishLater(it, i, tries + 1), 600); return; }
  Object.assign(it, { enStyle: got.style, enPart: !!got.part }, snippetOf(P[i], it.text, false, got));
  save();
  if (!page.hidden) render();
}
const has = i => passagesOf(cur()).some(x => x.kind === 'passage' && refsOf(x).includes(refOf(i)));

/* ── Joining passages ──────────────────────────────────────────────────────
   Passages that follow one another in a text, which the portal divides but the handout's
   maker reads as one, can be joined into one passage of the handout. The portal's texts are
   not touched. A joined item keeps every part's address (refs) and the parts themselves, as
   they were (parts), so that Split gives them back; its own ref is the first part's, so that
   "Read it where it stands" goes to where it begins. Each part keeps a small marker in the text,
   its own citation, which opens that part in the portal. */
const refsOf = x => x.refs || [x.ref];
const partsOf = x => x.parts || [x];
const idxOf = ref => PT.BYID ? PT.BYID.get(ref) : undefined;
/* Back to where a passage stands: its text open in the reader at that paragraph, however the
   handout's copy has been changed (words left out, an excerpt, a joined passage), since the
   passage keeps its address. A note of Kant's opens beside the textbook § it is on, picked out
   among the notes there. Where the portal offers no openRead, its address does what it can. */
function goRead(ref) {
  const k = idxOf(ref);
  if (k == null) return false;
  const T = TEXTS[P[k].t];
  // a lecture or a published work opens with the passage on the right too; a textbook or a
  // note of Kant's opens beside its § with the notes, as openRead does by itself
  if (PT.openRead) { if (!['meier', 'metaphysica', 'refl'].includes(T.shape)) { S.sel = k; S.quote = null; } PT.openRead(T.key, k); }
  else location.hash = readHref(ref).slice(1);
  return true;
}
function readHref(ref) {
  const k = idxOf(ref), p = k != null ? P[k] : null, T = p && TEXTS[p.t];
  if (!p) return '#p=' + encodeURIComponent(ref) + '&rt=conn';
  if (T.shape === 'refl' && /^r\d+$/.test(p.id)) return '#refl=' + p.id.slice(1);
  return '#read=' + encodeURIComponent(T.key) + '&at=' + encodeURIComponent(p.id);
}
const textOfRef = ref => String(ref).split(':')[0];
// Can a take b, the item just after it, into itself? Both whole passages of one text, and b later in it.
function joinable(a, b) {
  if (!a || !b || a.kind !== 'passage' || b.kind !== 'passage' || a.from === 'english' || b.from === 'english') return false;
  const ra = refsOf(a), rb = refsOf(b);
  if (textOfRef(ra[0]) !== textOfRef(rb[0])) return false;
  const ia = idxOf(ra[ra.length - 1]), ib = idxOf(rb[0]);
  return ia != null && ib != null && ib > ia;
}
// Does the portal have passages between these two (a gap the joined text marks with […])?
const gapBetween = (ra, rb) => { const ia = idxOf(ra), ib = idxOf(rb); return ia != null && ib != null && ib !== ia + 1; };
/* The citation of a joined passage, from its first and last parts': "AA 1:392–393" and "AA 1:394"
   give "AA 1:392–394", "A 50–51 / B 74–75" and "A 52 / B 76" give "A 50–52 / B 74–76", "§ 55, AA 9:119"
   and "§ 56, AA 9:120" give "§§ 55–56, AA 9:119–120". Where the two do not line up, both, with a dash. */
function joinCite(c1, c2) {
  if (c1 === c2) return c1;
  const split = c => String(c).split(/(, | \/ )/), a = split(c1), b = split(c2);
  const both = c1 + ' – ' + c2;
  if (a.length !== b.length) return both;
  const RX = /^(.*?)([\divxlc]+\??)(?:–([\divxlc]+\??))?$/;
  const out = [];
  for (let k = 0; k < a.length; k++) {
    if (k % 2) { if (a[k] !== b[k]) return both; out.push(a[k]); continue; }
    const m = RX.exec(a[k]), n = RX.exec(b[k]);
    if (!m || !n || m[1].replace(/^§§/, '§') !== n[1].replace(/^§§/, '§')) return both;
    const lo = m[2], hi = n[3] || n[2];
    out.push(lo === hi ? a[k] : m[1].replace(/^§ /, '§§ ') + lo + '–' + hi);
  }
  return out.join('');
}
const joinedLabel = ps => (ps.find(p => flat(p.label)) || {}).label || '';
const joinedNote = ps => ps.map(p => p.note).filter(n => flat(n)).join('\n\n');
function joinNext(h, key) {
  const a = at(h, key), x = a.it, y = a.list[a.i + 1];
  if (!joinable(x, y)) { toast('Only a whole passage can be joined, to the next one in the handout, and only if that one comes later in the same text.'); return; }
  const parts = partsOf(x).concat(partsOf(y));
  const gap = gapBetween(refsOf(x)[refsOf(x).length - 1], refsOf(y)[0]);
  const j = {
    id: uid(), kind: 'passage', ref: parts[0].ref, refs: parts.map(p => p.ref), parts,
    author: x.author, work: x.work, cite: joinCite(x.cite, y.cite), date: x.date,
    text: x.text + (gap ? '\n\n[…]' : '') + '\n\n' + y.text, from: 'original',
    label: flat(x.label) ? x.label : (y.label || ''), note: [x.note, y.note].filter(n => flat(n)).join('\n\n'),
    en: x.en && y.en ? x.en + (gap ? '\n\n[…]' : '') + '\n\n' + y.en : null, enStyle: x.enStyle || y.enStyle,
    enPart: !!(x.enPart || y.enPart), enOn: !!(x.en && y.en && (x.enOn || y.enOn)), added: x.added,
  };
  a.list.splice(a.i, 2, j);
  save(); render();
  toast('Joined into one passage, ' + j.cite + '. In the portal it opens at the first part.', [
    ['Undo', () => { const k = a.list.indexOf(j); if (k >= 0) { a.list.splice(k, 1, x, y); save(); render(); } }]]);
}
// Split a joined passage back into its parts. If its label and note are still those it was
// joined with, the parts get theirs back as they were; if they were changed since, the first
// part takes them, so that nothing written is lost.
function splitPassage(h, key) {
  const a = at(h, key), it = a.it;
  if (!it.parts) return;
  const ps = it.parts.map(p => Object.assign({}, p));
  if (!(flat(it.label) === flat(joinedLabel(ps)) && flat(it.note) === flat(joinedNote(ps)))) {
    ps.forEach((p, k) => { p.label = k ? '' : it.label; p.note = k ? '' : it.note; });
  }
  a.list.splice(a.i, 1, ...ps);
  save(); render();
  toast('Split into ' + plural(ps.length, 'passage') + '.', [['Undo', () => { const k = a.list.indexOf(ps[0]); if (k >= 0) { a.list.splice(k, ps.length, it); save(); render(); } }]]);
}
// A joined passage's words, part by part, each opening on its own citation, with […] where the
// portal has passages between.
function partsHtml(it, partTag) {
  const ps = partsOf(it);
  return ps.map((p, k) => (k && gapBetween(ps[k - 1].ref, p.ref) ? '<span class="hgap">[…]</span>\n\n' : '') +
    partTag(p) + esc(p.text)).join('\n\n');
}

function add(i, excerpt, fromEn) {
  const h = cur(), n = collecting(), sec = !n && collectingSection();
  if (!excerpt && has(i)) { toast('Already in “' + h.name + '”.', [['Open it', () => openPage()]]); return; }
  const it = itemFor(i, excerpt, fromEn);
  if (excerpt && !it.en) englishLater(it, i, 0);
  const list = n ? kids(n) : h.items;
  if (sec) list.splice(sectionEnd(h, h.items.indexOf(sec)), 0, it);
  else list.push(it);
  save();
  if (!it.en) fillSoon();
  if (!page.hidden) { render(); const card = page.querySelector('.hcard[data-id="' + it.id + '"]'); if (card) card.scrollIntoView({ block: 'nearest' }); }
  toast((excerpt ? 'Excerpt added ' : 'Added ') + (n ? 'under “' + noteName(n) + '”' : sec ? 'to the end of “' + sectionName(sec) + '”' : 'to “' + h.name + '”'), [
    ['Undo', () => { const k = list.indexOf(it); if (k >= 0) { list.splice(k, 1); save(); } }],
    ['Label it', () => openPage(it.id)],
  ]);
}

// Sent to a chosen place, from the ▾ beside "+ Handout": the end of a section, a new heading at the
// handout's end, or the end of the handout. A passage already in the handout, at its top level, moves there.
function addTo(i, target) {
  const h = cur();
  let sec = null, made = null;
  if (target.newHeading != null) { made = { id: uid(), kind: 'heading', text: target.newHeading }; h.items.push(made); sec = made; }
  else if (target.section) sec = h.items.find(x => x.kind === 'heading' && x.id === target.section) || null;
  const where = sec ? '“' + sectionName(sec) + '”' + (made ? ', a new heading' : '') : 'the end of “' + h.name + '”';
  const dropMade = () => { if (made && sectionEnd(h, h.items.indexOf(made)) === h.items.indexOf(made) + 1) h.items.splice(h.items.indexOf(made), 1); };
  const there = h.items.find(x => x.kind === 'passage' && refsOf(x).includes(refOf(i)));
  if (there) {
    const from = h.items.indexOf(there);
    h.items.splice(from, 1);
    h.items.splice(sec ? sectionEnd(h, h.items.indexOf(sec)) : h.items.length, 0, there);
    save();
    if (!page.hidden) render();
    toast('Moved to ' + where + '.', [['Undo', () => { const k = h.items.indexOf(there); if (k >= 0) { h.items.splice(k, 1); h.items.splice(Math.min(from, h.items.length), 0, there); dropMade(); save(); if (!page.hidden) render(); } }]]);
    return;
  }
  if (has(i)) { if (made) h.items.splice(h.items.indexOf(made), 1); toast('It is under a note in “' + h.name + '”. Move it in the handout itself.', [['Open it', () => openPage()]]); return; }
  const it = itemFor(i, false, false);
  h.items.splice(sec ? sectionEnd(h, h.items.indexOf(sec)) : h.items.length, 0, it);
  save();
  if (!it.en) fillSoon();
  if (!page.hidden) { render(); const card = page.querySelector('.hcard[data-id="' + it.id + '"]'); if (card) card.scrollIntoView({ block: 'nearest' }); }
  toast('Added to ' + where + '.', [
    ['Undo', () => { const k = h.items.indexOf(it); if (k >= 0) { h.items.splice(k, 1); dropMade(); save(); if (!page.hidden) render(); } }],
    ['Label it', () => openPage(it.id)],
  ]);
}

/* ── Styles ──────────────────────────────────────────────────────────────── */
const css = el('style');
css.textContent = `
  #htray, #hcoll, .pactions .hrail, .pmeta .hrail { display: none; }
  body.hmode #htray, body.hnomenu #htray, body.hmode .pactions .hrail, body.hmode .pmeta .hrail { display: inline-block; }
  .pmeta .hrail { margin-left: 0.6rem; padding: 0 0.55rem; font-size: 0.8rem; }
  .pmeta .hrail.on { color: var(--faded); }
  #hpage .hmodesw { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.9rem; color: var(--faded); cursor: pointer; }
  #hpage .hmodesw input { accent-color: var(--accent); margin: 0; }
  #hpage .henswitch { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.92rem; color: var(--accent); cursor: pointer; }
  #hpage .henswitch input { accent-color: var(--accent); margin: 0; }
  body.hmode #hcoll.on { display: inline-block; }
  #menu-ho .linkish { margin: 0.15rem 0 0.25rem; }
  #htray .hn { display: inline-block; min-width: 1.25rem; margin-left: 0.35rem; padding: 0 0.35rem; border-radius: 999px; background: var(--parchment-dark); color: var(--accent); font-size: 0.8rem; text-align: center; }
  #htray.full .hn { background: var(--accent); color: var(--parchment); }
  #hcoll { font-size: 0.82rem; max-width: 16rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; border-style: dashed; }
  .hfloat { position: fixed; z-index: 45; border: 1px solid var(--accent-light); background: var(--card); color: var(--accent); border-radius: 999px; padding: 0.08rem 0.65rem; font-size: 0.8rem; cursor: pointer; box-shadow: 0 1px 5px rgba(60, 40, 20, 0.15); }
  .hfloat:hover { background: var(--accent); color: var(--parchment); }
  .hfloat.in { border-color: var(--line); color: var(--faded); }
  .hfloat.hmore { padding: 0.08rem 0.45rem; }
  #hpage .hcite .hdate { color: var(--faded); font-size: 0.86rem; margin-left: 0.45rem; white-space: nowrap; }
  .pmeta .hrail.hrailmore, .pactions .hrail.hrailmore { margin-left: 0.2rem; padding: 0 0.4rem; }
  #hfmenu { position: fixed; z-index: 46; background: var(--card); border: 1px solid var(--accent-light); border-radius: 8px; box-shadow: 0 4px 16px rgba(60, 40, 20, 0.2); padding: 0.3rem; min-width: 14rem; max-width: 22rem; max-height: 60vh; overflow-y: auto; font-size: 0.88rem; }
  #hfmenu .t { color: var(--faded); font-size: 0.78rem; padding: 0.15rem 0.5rem 0.3rem; }
  #hfmenu button { display: block; width: 100%; text-align: left; background: none; border: 0; border-radius: 5px; padding: 0.25rem 0.5rem; cursor: pointer; color: var(--accent); font: inherit; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  #hfmenu button:hover, #hfmenu button:focus { background: var(--parchment-dark); outline: none; }
  #hfmenu button.here { font-weight: 600; }
  #hfmenu hr { border: 0; border-top: 1px solid var(--line); margin: 0.25rem 0.3rem; }
  #hfmenu input { width: 100%; box-sizing: border-box; border: 1px solid var(--accent-light); border-radius: 5px; padding: 0.25rem 0.45rem; font: inherit; margin: 0.15rem 0; }
  #hsel { background: var(--accent); color: var(--parchment); border-color: var(--accent); font-size: 0.86rem; padding: 0.2rem 0.8rem; }
  .pactions .hrail.on { color: var(--faded); }
  #htoast { position: fixed; z-index: 60; left: 50%; bottom: 1.4rem; transform: translateX(-50%); background: #3b2a17; color: var(--parchment); border-radius: 6px; padding: 0.5rem 0.9rem; font-size: 0.92rem; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25); display: flex; gap: 0.9rem; align-items: baseline; max-width: 90vw; }
  #htoast button { background: none; border: none; color: #f1d98c; cursor: pointer; padding: 0; font: inherit; text-decoration: underline; }
  #hpage { position: fixed; inset: 0; z-index: 30; background: var(--parchment); display: flex; flex-direction: column; }
  #hpage .hdockgrip { display: none; }
  #hpage.docked { inset: auto; top: var(--hdock-top, 0); right: 0; bottom: 0; left: auto; width: var(--hdock-w, 42vw); border-left: 1px solid var(--line); box-shadow: -6px 0 14px rgba(60, 40, 20, 0.08); z-index: 25; }
  #hpage.docked .hdockgrip { display: block; position: absolute; left: -5px; top: 0; bottom: 0; width: 10px; cursor: col-resize; z-index: 2; }
  #hpage.docked .hbar { padding: 0.45rem 0.8rem; gap: 0.5rem; }
  #hpage.docked .hbody { flex-direction: column; }
  #hpage.docked aside { width: auto; max-height: 26vh; border-right: none; border-bottom: 1px solid var(--line); padding: 0.6rem 0.8rem; }
  body.hdock #app { margin-right: var(--hdock-w, 42vw); }
  body.hdragging, body.hdragging * { cursor: col-resize !important; user-select: none !important; }
  #hpage .hbar { display: flex; align-items: center; gap: 0.8rem; padding: 0.6rem 1.6rem; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
  #hpage .hbar .cz { color: var(--accent); font-size: 1.05rem; }
  #hpage .hbar .spacer { flex: 1; }
  #hpage .hbar .lab { color: var(--faded); font-size: 0.86rem; }
  #hpage .hbody { flex: 1; display: flex; min-height: 0; }
  #hpage aside { width: 15.5rem; border-right: 1px solid var(--line); padding: 1rem; overflow-y: auto; }
  #hpage aside .hl { display: block; width: 100%; text-align: left; background: none; border: 1px solid transparent; border-radius: 6px; padding: 0.4rem 0.6rem; margin-bottom: 0.25rem; cursor: pointer; }
  #hpage aside .hl:hover { background: var(--card); }
  #hpage aside .hl.on { background: var(--card); border-color: var(--line); }
  #hpage aside .hl .n { display: block; color: var(--faded); font-size: 0.8rem; }
  #hpage aside .hl.on .n::after { content: ' · adding here'; color: var(--accent); }
  #hpage aside details.htrash { margin-top: 1.3rem; border-top: 1px solid var(--line); padding-top: 0.75rem; }
  #hpage aside details.htrash summary { cursor: pointer; color: var(--accent); list-style: none; user-select: none; }
  #hpage aside details.htrash summary::-webkit-details-marker { display: none; }
  #hpage aside details.htrash summary::before { content: '▸'; display: inline-block; width: 1rem; color: var(--faded); }
  #hpage aside details.htrash[open] summary::before { content: '▾'; }
  #hpage aside .tn { margin-left: 0.4rem; padding: 0 0.4rem; border-radius: 999px; background: var(--parchment-dark); color: var(--accent); font-size: 0.78rem; }
  #hpage aside .trow { display: block; width: 100%; text-align: left; background: none; border: 1px solid transparent; border-radius: 6px; padding: 0.35rem 0.5rem; margin: 0.25rem 0; cursor: pointer; font-size: 0.84rem; line-height: 1.3; }
  #hpage aside .trow:hover { background: var(--card); border-color: var(--line); }
  #hpage aside .trow .tl { display: block; color: var(--accent); }
  #hpage aside .trow .tx { display: block; color: var(--faded); }
  #hpage main { flex: 1; overflow-y: auto; padding: 1.2rem 2rem 4rem; }
  #hpage .hwrap { max-width: 46rem; margin: 0 0 0 1rem; }   /* to the left, a little in from the panel */
  #hpage .hwrap > .hcard.top.insec { margin-left: 1.6rem; }   /* what stands under a heading */
  #hpage .hname { width: 100%; font-family: 'Cinzel', serif; font-size: 1.4rem; color: var(--accent); background: transparent; border: none; border-bottom: 1px dashed var(--line); padding: 0.2rem 0; }
  #hpage .hname:focus { outline: none; border-bottom-color: var(--accent-light); }
  #hpage .hrow { display: flex; gap: 0.6rem; align-items: center; margin: 0.6rem 0 1.1rem; flex-wrap: wrap; }
  #hpage .hrow .spacer { flex: 1; }
  #hpage .hname::placeholder { color: var(--accent-light); opacity: 0.55; }
  #hpage .hrow { margin: 0.7rem 0 0.3rem; gap: 0.5rem 0.8rem; }
  #hpage .hhint { margin: 0 0 1rem; }
  #hpage .hrow .hdel { color: var(--faded); }
  #hpage .hrow .hdel:hover { color: #9a3b1e; }
  /* The bar: the three exports as one piece, Save and Open quiet at the end. */
  #hpage .hseg { display: inline-flex; align-items: center; }
  #hpage .hseg .lab { margin-right: 0.5rem; }
  #hpage .hseg .btn { border-radius: 0; margin-left: -1px; }
  #hpage .hseg .btn:first-of-type { border-radius: 999px 0 0 999px; margin-left: 0; }
  #hpage .hseg .btn:last-of-type { border-radius: 0 999px 999px 0; }
  #hpage .hseg .btn:hover { position: relative; }
  #hpage .hfile { display: inline-flex; gap: 0.8rem; padding-left: 0.9rem; border-left: 1px solid var(--line); font-size: 0.9rem; }
  #hpage aside .hnew { margin-top: 0.5rem; }
  /* Quiet cards: a card's move and trash buttons, and the buttons on headings and notes, stay
     faint until the card is pointed at or worked in, and an empty label or note field shows only
     then. Nothing moves when they appear. (Not on a touch screen, which cannot point.) */
  @media (hover: hover) {
    .hcard .hbtns { opacity: 0.28; transition: opacity 0.15s; }
    .hcard:is(:hover, :focus-within):not(:has(.hcard:is(:hover, :focus-within))) > .hbtns,
    .hcard:is(:hover, :focus-within):not(:has(.hcard:is(:hover, :focus-within))) > .hcite > .hbtns { opacity: 1; }
    .hcard :is(.hsecadd, .hsecnote, .ncoll, .nadd):not(.on) { border-color: transparent; color: var(--faded); transition: border-color 0.15s, color 0.15s; }
    .hcard:is(:hover, :focus-within):not(:has(.hcard:is(:hover, :focus-within))) :is(.hsecadd, .hsecnote, .ncoll, .nadd):not(.on) { border-color: var(--line); color: var(--accent); }
    .hcard .hlab:placeholder-shown:not(:focus) { border-bottom-color: transparent; }
    .hcard .hlab:placeholder-shown:not(:focus)::placeholder { color: var(--line); opacity: 1; }
    .hcard:hover:not(:has(.hcard:hover)) > .hlab:placeholder-shown { border-bottom-color: var(--line-soft); }
    .hcard:hover:not(:has(.hcard:hover)) > .hlab:placeholder-shown::placeholder { color: var(--faded); }
    .hcard .hnote:placeholder-shown:not(:focus) { background: transparent; border-color: transparent; }
    .hcard .hnote:placeholder-shown:not(:focus)::placeholder { color: var(--line); }
    .hcard:hover:not(:has(.hcard:hover)) > .hnote:placeholder-shown { background: var(--parchment); border-color: var(--line-soft); }
    .hcard:hover:not(:has(.hcard:hover)) > .hnote:placeholder-shown::placeholder { color: var(--faded); }
  }
  /* A heading takes the room its words need; too long for the line, it ends in "…" until it is
     clicked, and in a narrow column its buttons go to the next line rather than off the edge. */
  .hcard.hhead { flex-wrap: wrap; row-gap: 0.3rem; }
  #hpage .hcard.hhead input { flex: 1 1 9rem; field-sizing: content; min-width: 8rem; max-width: max-content; text-overflow: ellipsis; }
  #hpage.docked .hcard.hhead:not(.folded) input { flex-basis: calc(100% - 4.5rem); max-width: none; }
  #hpage .hcard.hhead > .hbtns { margin-left: auto; }
  /* Side by side: the bar in two lines (Save and Open beside the title, the exports below), and
     the list of handouts, the trash and the backup in a line or two, not a column. */
  #hpage.docked .hbar .spacer { display: none; }
  #hpage.docked .hbar .hfile { order: 1; margin-left: auto; border-left: none; padding-left: 0; }
  #hpage.docked .hbar .hseg, #hpage.docked .hbar .hviews { order: 2; }
  #hpage.docked aside { display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem 0.6rem; max-height: 30vh; padding: 0.5rem 0.8rem; }
  #hpage.docked aside .hl { width: auto; margin: 0; padding: 0.15rem 0.6rem; }
  #hpage.docked aside .hl .n { display: inline; margin-left: 0.4rem; }
  #hpage.docked aside .hnew { margin-top: 0; font-size: 0.85rem; padding: 0.08rem 0.7rem; }
  #hpage.docked aside details.htrash { margin: 0; border: none; padding: 0; }
  #hpage.docked aside details.htrash[open] { flex-basis: 100%; }
  #hpage.docked aside .hback { margin: 0; flex-basis: 100%; font-size: 0.78rem; }
  #hpage .hempty { border: 1px dashed var(--line); border-radius: 8px; padding: 1.4rem; color: var(--faded); text-align: center; }
  .hcard { background: var(--card); border: 1px solid var(--line-soft); border-radius: 8px; padding: 0.7rem 0.9rem 0.6rem; margin-bottom: 0.7rem; }
  .hcard.drag { opacity: 0.45; }
  .hcard.before { box-shadow: 0 -3px 0 var(--accent-light); }
  .hcard.after { box-shadow: 0 3px 0 var(--accent-light); }
  .hcard .hcite { display: flex; align-items: baseline; gap: 0.45rem; font-size: 0.92rem; }
  .hcard .hcite .w { flex: 1; }
  .hcard .grip { cursor: grab; color: var(--faded); user-select: none; padding: 0 0.15rem; }
  .hcard .htag { font-size: 0.74rem; border: 1px solid var(--line); border-radius: 999px; padding: 0 0.4rem; color: var(--faded); margin-left: 0.3rem; white-space: nowrap; }
  .hcard .hbtns { display: flex; gap: 0.15rem; }
  .hcard .hbtns button { background: none; border: none; color: var(--faded); cursor: pointer; font-size: 0.9rem; padding: 0 0.3rem; }
  .hcard .hbtns button:hover { color: var(--accent); }
  .hcard .hbtns button:disabled { opacity: 0.3; cursor: default; }
  .hcard .hlab { display: block; width: calc(100% - 1.3rem); margin: 0.4rem 0 0 1.3rem; font: inherit; font-style: italic; color: var(--accent); background: transparent; border: none; border-bottom: 1px dashed var(--line-soft); padding: 0.1rem 0; }
  .hcard .hlab:focus { outline: none; border-bottom-color: var(--accent-light); }
  .hcard .hlab::placeholder { color: var(--faded); opacity: 0.8; }
  .hcard .htext { margin: 0.45rem 0 0.35rem 1.3rem; white-space: pre-wrap; }
  .hcard .hpart { font: inherit; font-size: 0.74rem; color: var(--accent); background: none; border: 1px solid var(--line); border-radius: 999px; padding: 0 0.4rem; margin-right: 0.15rem; cursor: pointer; text-decoration: none; white-space: nowrap; vertical-align: 0.1em; }
  .hcard .hpart:hover { background: var(--card); }
  .hcard .hgap { color: var(--faded); }
  .hcard .htext.en { color: #4b4034; border-left: 2px solid var(--line); padding-left: 0.7rem; font-size: 0.96rem; }
  .hcard .hen { display: block; margin-left: 1.3rem; font-size: 0.86rem; color: var(--accent); cursor: pointer; }
  .hcard div.hen { color: var(--faded); font-style: italic; cursor: default; }
  .hcard .hnote { display: block; width: calc(100% - 1.3rem); margin: 0.35rem 0 0 1.3rem; resize: vertical; min-height: 1.9rem; font: inherit; font-size: 0.94rem; background: var(--parchment); border: 1px solid var(--line-soft); border-radius: 5px; padding: 0.25rem 0.5rem; }
  .hcard .hfoot { margin: 0.3rem 0 0 1.3rem; font-size: 0.84rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: baseline; }
  .hcard .hunder { color: var(--faded); }
  .hcard .hunder select { font-size: 0.84rem; max-width: 15rem; }
  .hcard.hhead { background: transparent; border-style: dashed; display: flex; align-items: center; gap: 0.45rem; }
  .hcard.hhead input { flex: 1; font-family: 'Cinzel', serif; font-size: 1.02rem; color: var(--accent); background: transparent; border: none; padding: 0.15rem 0; }
  .hcard.hhead input:focus { outline: none; }
  .hcard.hhead .hsecnote, .hcard.hhead .hsecadd { font-size: 0.8rem; padding: 0.05rem 0.5rem; white-space: nowrap; }
  .hcard .hfold { background: none; border: none; color: var(--accent); cursor: pointer; font-size: 0.95rem; width: 1.3rem; padding: 0; flex: none; }
  .hcard .hnotefold { display: block; width: calc(100% - 1.3rem); margin: 0.3rem 0 0 1.3rem; text-align: left; background: none; border: none; padding: 0; font: inherit; font-size: 0.94rem; color: var(--ink); cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .hcard .hnotefold:hover { color: var(--accent); }
  .hcard.hnotecard.folded { padding-bottom: 0.5rem; }
  .hcard .hcite { cursor: grab; }
  .hcard .hcite button, .hcard .hcite select { cursor: pointer; }
  .hcard .hcite .hgo { background: none; border: none; padding: 0; font: inherit; color: inherit; text-decoration: underline; text-decoration-color: var(--line); text-underline-offset: 2px; }
  .hcard .hcite .hgo:hover { color: var(--accent); text-decoration-color: currentColor; }
  .hcard.into { outline: 2px solid var(--accent-light); outline-offset: 1px; background: #f7ecc8; }
  .hcard.child.before { box-shadow: 0 -3px 0 var(--accent-light); }
  .hcard.child.after { box-shadow: 0 3px 0 var(--accent-light); }
  .hcard.hhead .hfoldn { background: none; border: none; color: var(--faded); cursor: pointer; font-size: 0.8rem; font-style: italic; white-space: nowrap; padding: 0; }
  .hcard.hhead .hfoldn:hover { color: var(--accent); }
  .hcard.hhead.folded { border-style: solid; background: var(--card); }
  .hcard.hhead .hsecadd.on { background: var(--accent); color: var(--parchment); border-color: var(--accent); }
  .hcard.hhead.collecting { border-color: var(--accent-light); box-shadow: 0 0 0 2px var(--hl); }
  .hcard .hsec { font-size: 0.78rem; color: var(--faded); margin-right: 0.6rem; font-style: italic; }
  .hcard.hnotecard { background: var(--parchment); border-color: var(--line); border-left: 3px solid var(--accent-light); }
  .hcard.hnotecard.collecting { border-color: var(--accent-light); box-shadow: 0 0 0 2px var(--hl); }
  .hcard.hnotecard .nlab { font-family: 'Cinzel', serif; letter-spacing: 0.05em; color: var(--accent); margin-right: 0.6rem; }
  .hcard.hnotecard input.nlab { font-size: inherit; font-weight: 700; background: transparent; border: none; border-bottom: 1px dashed transparent; padding: 0; min-width: 3.2rem; max-width: 26rem; field-sizing: content; }
  .hcard.hnotecard input.nlab::placeholder { color: var(--accent); opacity: 1; }
  .hcard.hnotecard input.nlab:hover, .hcard.hnotecard input.nlab:focus { border-bottom-color: var(--accent-light); outline: none; }
  .hcard.hnotecard .ncoll { font-size: 0.8rem; padding: 0 0.6rem; }
  .hcard.hnotecard .ncoll.on { background: var(--accent); color: var(--parchment); border-color: var(--accent); }
  .hcard .hnotetext { display: block; width: 100%; margin: 0.45rem 0 0.2rem; resize: vertical; min-height: 3rem; font: inherit; background: var(--card); border: 1px solid var(--line-soft); border-radius: 5px; padding: 0.35rem 0.55rem; }
  .mk-hl { background: #f6e07c; color: inherit; border-radius: 2px; padding: 0 1px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .mk-ul { text-decoration: underline; text-decoration-color: #9a3b1e; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
  .mk-mn { border-bottom: 1.5px dotted var(--accent); cursor: pointer; }
  #hpage .mk-cut { text-decoration: line-through; text-decoration-color: var(--accent-light); color: var(--faded); opacity: 0.6; cursor: pointer; }
  /* Class view: what is left out shows as …, as the room should see it */
  #hpage.hcv .mk-cut { text-decoration: none; opacity: 1; cursor: default; }
  #hpage .hviews { display: inline-flex; border: 1px solid var(--accent-light); border-radius: 999px; overflow: hidden; }
  #hpage .hview { background: transparent; border: none; padding: 0.15rem 0.75rem; font: inherit; font-size: 0.92rem; color: var(--accent); cursor: pointer; }
  #hpage .hview + .hview { border-left: 1px solid var(--accent-light); }
  #hpage .hview i { font-size: 0.82rem; color: var(--faded); margin-left: 0.15rem; }
  #hpage .hview.on { background: var(--accent); color: var(--parchment); }
  #hpage .hview.on i { color: var(--parchment-dark); }
  #hpage.hcv .hbar [data-h="open"], #hpage.hcv .hbar .hmodesw { display: none; }
  body.hclassview #hadd, body.hclassview #hsel, body.hclassview .hrail, body.hclassview #hcoll, body.hclassview #hmore, body.hclassview #hfmenu { display: none !important; }
  /* The class's handouts, to read: everything that would change them is put away */
  #hpage.hro .hwrap button:not([data-h="go"]):not([data-h="gopart"]):not([data-h="fold"]):not([data-h="foldall"]):not([data-h="foldnotes"]):not([data-h="unfoldall"]),
  #hpage.hro .hwrap select, #hpage.hro .hwrap .hunder, #hpage.hro .hwrap .hcopysel, #hpage.hro .hwrap .grip, #hpage.hro .hwrap .hbtns,
  #hpage.hro .hwrap .hhint { display: none; }
  #hpage.hro .hwrap :is(.hlab, .hnote, .nlab):placeholder-shown { display: none; }
  #hpage.hro .hwrap :is(input, textarea) { border-color: transparent; background: transparent; resize: none; }
  #hpage.hro .hcard .hcite { cursor: default; }
  #hpage .mk-cut.approx { text-decoration-style: dashed; }
  .mk-n { color: var(--accent); font-size: 0.68em; font-weight: 600; margin-left: 1px; cursor: pointer; }
  .hcard.has-mn { position: relative; }
  .hcard.has-mn.mn-wide { padding-right: 15rem; }
  .hcard .hmargin { margin: 0.5rem 0 0.2rem 1.3rem; }
  .hcard.mn-wide > .hmargin { position: absolute; top: 0; right: 0.8rem; width: 13.2rem; margin: 0; }
  .hcard.mn-wide > .hmargin .hmn { position: absolute; left: 0; right: 0; }
  .hmn { font-family: 'Noteworthy', 'Bradley Hand', 'Segoe Print', cursive; color: #6b3d1e; font-size: 0.92rem; line-height: 1.3; border-left: 2px solid var(--accent-light); padding: 0 1.1rem 0 0.5rem; margin-bottom: 0.4rem; position: relative; }
  .hmn .n { float: left; margin: 0.12rem 0.3rem 0 0; font-family: system-ui, sans-serif; font-size: 0.68rem; font-weight: 600; color: var(--accent); }
  .hmn textarea { display: block; width: calc(100% - 0.9rem); background: transparent; border: none; resize: none; overflow: hidden; font: inherit; color: inherit; padding: 0; }
  .hmn textarea:focus { outline: none; background: rgba(255, 255, 255, 0.55); }
  .hmn .x { position: absolute; right: 0; top: 0; background: none; border: none; color: var(--faded); cursor: pointer; font-size: 0.75rem; opacity: 0; }
  .hmn:hover .x, .hmn:focus-within .x { opacity: 1; }
  .hmn .lost { display: block; font-family: system-ui, sans-serif; font-size: 0.72rem; color: #9a3b1e; font-style: italic; }
  #hmkbar { position: fixed; z-index: 55; display: flex; gap: 0.15rem; background: var(--card); border: 1px solid var(--accent-light); border-radius: 999px; padding: 0.15rem 0.3rem; box-shadow: 0 2px 9px rgba(60, 40, 20, 0.2); }
  #hmkbar[hidden] { display: none; }
  #hmkbar button { background: none; border: none; font: inherit; font-size: 0.85rem; color: var(--accent); cursor: pointer; padding: 0.1rem 0.5rem; border-radius: 999px; white-space: nowrap; }
  #hmkbar button:hover { background: var(--parchment-dark); }
  #hpage aside .hback { margin-top: 1.2rem; line-height: 1.35; }
  #hpage aside .hback.ok { color: #3f6b3a; }
  #hpage aside .hback.bad { color: #9a3b1e; }
  .hcard .hkids { margin: 0.6rem 0 0.2rem 2.2rem; padding-left: 0.9rem; border-left: 2px solid var(--accent-light); }
  .hcard .hpick { margin: 0.5rem 0 0.3rem 2.2rem; padding: 0.55rem 0.8rem; background: var(--card); border: 1px dashed var(--accent-light); border-radius: 6px; font-size: 0.9rem; }
  .hcard .hpick label { display: flex; gap: 0.5rem; align-items: baseline; margin: 0.25rem 0; cursor: pointer; }
  .hcard .hpick label span { color: var(--faded); font-size: 0.84rem; }
  .hcard .hpick .acts { margin-top: 0.45rem; display: flex; gap: 0.8rem; align-items: center; }
  .hcard.hnotecard .nadd { font-size: 0.8rem; padding: 0 0.6rem; margin-left: 0.3rem; }
  .hcard .hkids > p { margin: 0.2rem 0 0.3rem; }
  .hcard.child { background: var(--card); margin-bottom: 0.5rem; padding: 0.55rem 0.8rem 0.5rem; }
  /* The German (or Latin) and its English side by side, where there is room; notes keep their width */
  #hpage .hwrap.duo { max-width: 74rem; }
  .hcard .hduo { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 0 1.4rem; align-items: start; }
  .hcard .hduo .hen { margin-left: 0; }
  #hpage.docked .hcard .hduo { display: block; }
  #hpage.docked .hcard .hduo .hen { margin-left: 1.3rem; }
  @media (max-width: 1100px) { .hcard .hduo { display: block; } .hcard .hduo .hen { margin-left: 1.3rem; } }
  .hcard .hsecsel select { font: inherit; font-size: 0.78rem; font-style: italic; color: var(--faded); background: transparent; border: 1px solid transparent; border-radius: 4px; padding: 0 0.15rem; margin-right: 0.6rem; max-width: 15rem; cursor: pointer; }
  .hcard .hsecsel select:hover, .hcard .hsecsel select:focus { border-color: var(--line); color: var(--accent); outline: none; }
  .hcard .hsecsel option, .hcard .hsecsel optgroup { font-style: normal; color: var(--ink); }
  .hcard .hcopysel select { font: inherit; font-size: 0.86rem; color: var(--accent); background: transparent; border: 1px solid transparent; border-radius: 4px; padding: 0 0.1rem; margin-right: 0.6rem; max-width: 12rem; cursor: pointer; }
  .hcard .hcopysel select:hover, .hcard .hcopysel select:focus { border-color: var(--line); outline: none; }
  .hcard .hcopysel option, .hcard .hcopysel optgroup { color: var(--ink); }
  .hcard .htag.hlinked { border-style: solid; }
  #hback { position: fixed; z-index: 46; left: 50%; top: 0.55rem; transform: translateX(-50%); }
  #hprint { display: none; }
  @media print {
    body { display: block !important; background: #fff !important; }
    body > * { display: none !important; }
    body > #hprint { display: block !important; }
    #hprint { font-family: 'EB Garamond', 'Hoefler Text', Georgia, serif; font-size: 11.5pt; line-height: 1.38; color: #000; }
    #hprint h1 { font-size: 17pt; text-align: center; margin: 0 0 1.2em; font-weight: 600; }
    #hprint h2 { font-size: 13pt; margin: 1.3em 0 0.5em; font-weight: 600; }
    #hprint .lab { margin: 0.6em 26pt 0.1em; font-style: italic; }
    #hprint .q { margin: 0 26pt 0.15em; white-space: pre-wrap; }
    #hprint .en { margin: 0.35em 26pt 0.15em; white-space: pre-wrap; color: #333; }
    #hprint .c { margin: 0 26pt 0.9em; font-size: 9.5pt; color: #444; }
    #hprint .nt { margin: 0 0 1em; }
    #hprint .pn { margin: 0 26pt 1em; }
    #hprint .note p { margin: 1em 0 0.4em; }
    #hprint .note h3 { font-size: 11.5pt; font-style: italic; font-weight: 600; margin: 1.2em 0 0; }
    #hprint .note h3 + p { margin-top: 0.3em; }
    #hprint .item { break-inside: avoid; }
  }
`;
document.head.appendChild(css);

/* ── The header buttons, the floating buttons and the message line ──────── */
// None of these carries a data- attribute: the portal's own click handler acts on its
// data- attributes wherever they are (a data-en="" turns the English off).
const hb = el('button', 'htray', 'btn');      // "Handout 3": opens the Handouts page
const hc = el('button', 'hcoll', 'btn');      // "Under: …": the note being collected into
hb.type = hc.type = 'button';
const anchor = document.querySelector('header .more') || $('share');
if (anchor && anchor.parentNode) { anchor.parentNode.insertBefore(hc, anchor); anchor.parentNode.insertBefore(hb, hc); }
else document.body.append(hb, hc);
hb.addEventListener('click', () => {
  if (!page.hidden && docked) { closePage(); return; }
  gate().then(ok => {
    if (!ok) { if (!LOCK) toast('The handouts’ lock did not load. Reload the page and try again.'); return; }
    if (!mode && !$('moremenu')) setMode(true);
    openPage();
  });
});
hc.addEventListener('click', () => { DB.collect = null; save(); if (!page.hidden) render(); toast('Passages you add now go to the end of the handout, under no note.'); });

const hov = el('button', 'hadd', 'hfloat');   // on the passage under the pointer
const hmore = el('button', 'hmore', 'hfloat hmore');   // beside it: which heading it goes under
const hmenu = el('div', 'hfmenu');
const sb = el('button', 'hsel', 'hfloat');    // under a selection of words
const tst = el('div', 'htoast');
[hov, hmore, sb].forEach(b => { b.type = 'button'; b.hidden = true; b.addEventListener('mousedown', e => e.preventDefault()); });
hmore.textContent = '▾'; hmore.title = 'Choose the heading it goes under, or start a new one';
hmenu.hidden = true;
tst.hidden = true;
document.body.append(hov, hmore, hmenu, sb, tst);

/* The heading menu: the current handout's headings, a new one, or its end. */
let menuI = null;
const closeMenu = () => { hmenu.hidden = true; menuI = null; };
function openMenu(i, anchor) {
  if (i == null || !P[i] || locked()) return;
  const h = cur(), inn = has(i), top = h.items.some(x => x.kind === 'passage' && refsOf(x).includes(refOf(i)));
  const c = collecting(), sec = !c && collectingSection();
  menuI = i;
  const heads = h.items.filter(x => x.kind === 'heading');
  hmenu.innerHTML = '<div class="t">' + (inn ? (top ? 'Move it, in “' : 'It is under a note in “') : 'Add it to “') + esc(clip(h.name, 34)) + '”</div>' +
    (inn && !top ? '' :
      heads.map(x => '<button type="button" data-to="' + esc(x.id) + '"' + (sec && sec.id === x.id ? ' class="here"' : '') + '>→ ' + esc(clip(sectionName(x), 40)) + '</button>').join('') +
      (heads.length ? '<hr>' : '') +
      '<button type="button" data-to="new">+ Under a new heading…</button>' +
      '<button type="button" data-to="end">At the end of the handout</button>');
  if (inn && !top) hmenu.innerHTML += '<button type="button" data-to="open">Open the handout</button>';
  hmenu.hidden = false;
  const r = anchor.getBoundingClientRect();
  hmenu.style.top = Math.min(r.bottom + 4, window.innerHeight - hmenu.offsetHeight - 8) + 'px';
  hmenu.style.left = Math.max(8, Math.min(r.right - hmenu.offsetWidth, window.innerWidth - hmenu.offsetWidth - 8)) + 'px';
}
hmore.addEventListener('click', e => { e.stopPropagation(); if (!hmenu.hidden && menuI === hovI) { closeMenu(); return; } openMenu(hovI, hmore); });
hmenu.addEventListener('mousedown', e => { if (!e.target.closest('input')) e.preventDefault(); });
hmenu.addEventListener('click', e => {
  e.stopPropagation();
  const b = e.target.closest('button[data-to]'); if (!b || menuI == null) return;
  const i = menuI, to = b.dataset.to;
  if (to === 'open') { closeMenu(); openPage(); return; }
  if (to === 'new') {
    b.outerHTML = '<input type="text" placeholder="The new heading, then Enter" spellcheck="false">';
    const inp = hmenu.querySelector('input'); inp.focus();
    inp.addEventListener('keydown', ev => {
      ev.stopPropagation();
      if (ev.key === 'Escape') { closeMenu(); return; }
      if (ev.key === 'Enter') { ev.preventDefault(); const t = inp.value.trim(); if (!t) return; closeMenu(); addTo(i, { newHeading: t }); }
    });
    return;
  }
  closeMenu();
  addTo(i, to === 'end' ? { end: true } : { section: to });
});
document.addEventListener('mousedown', e => { if (!hmenu.hidden && !hmenu.contains(e.target) && e.target !== hmore && !e.target.closest('.hrailmore')) closeMenu(); }, true);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !hmenu.hidden) closeMenu(); });

function toast(msg, acts) {
  tst._acts = acts || [];
  tst.innerHTML = '<span>' + esc(msg) + '</span>' + tst._acts.map((a, k) => '<button type="button" data-t="' + k + '">' + esc(a[0]) + '</button>').join('');
  tst.hidden = false;
  clearTimeout(tst._t);
  tst._t = setTimeout(() => { tst.hidden = true; }, 6500);
}
tst.addEventListener('click', e => {
  const b = e.target.closest('button[data-t]');
  if (!b) return;
  tst.hidden = true;
  const a = tst._acts[+b.dataset.t];
  if (a) a[1]();
});

// The count in the header, the note being collected into, and every "+ Handout" label,
// kept in step with the store.
function marks() {
  const h = cur(), n = countOf(h), c = collecting(), sec = !c && collectingSection();
  // "Handouts" until there is something to count, or handout mode is on
  hb.innerHTML = n || mode ? 'Handout<span class="hn">' + n + '</span>' : 'Handouts';
  hb.classList.toggle('full', n > 0);
  hb.title = n || mode ? '“' + h.name + '”: ' + plural(n, 'passage') + '. Open it to arrange and export.'
    : 'Handouts: collect passages as you read, arrange them, and show them to the class';
  hc.classList.toggle('on', !!(c || sec));
  if (c) { hc.textContent = 'Under: ' + noteName(c) + ' ✕'; hc.title = 'Passages you add go under this note. Click to stop.'; }
  else if (sec) { hc.textContent = 'Into: ' + clip(sectionName(sec), 30) + ' ✕'; hc.title = 'Passages you add go to the end of this section. Click to stop.'; }
  document.querySelectorAll('.hrail:not(.hrailmore)').forEach(railLabel);
  if (!hov.hidden && hovEl && hovEl.isConnected) placeHover();
  menuDraw();
}

/* Handout mode, switched in the header's Modes menu where there is one, under the English; here, by the Handouts button and the page's switch. */
const msec = el('div', 'menu-ho', 'msec');
const moremenu = $('moremenu'), shareItem = $('share');
if (moremenu) { if (shareItem && shareItem.parentNode === moremenu) moremenu.insertBefore(msec, shareItem); else moremenu.appendChild(msec); }
function menuDraw() {
  if (!moremenu) return;
  const n = DB.handouts.reduce((a, h) => a + countOf(h), 0);
  msec.innerHTML = '<label class="msw"><input type="checkbox" class="hmode"' + (mode ? ' checked' : '') + '> Handout mode</label>' +
    '<div class="det"><p>' + (mode ? 'Point at a passage and press <b>+ Handout</b>, or select some of its words to add an excerpt.'
      : 'Collect passages for a handout as you read, then arrange and export them.') + '</p>' +
    (mode || n ? '<button type="button" class="linkish hopen">Open my handouts' + (n ? ' (' + plural(n, 'passage') + ')' : '') + '</button>' : '') + '</div>';
}
function setMode(on, quiet) {
  mode = on;
  try { if (on) localStorage.setItem(MODE_KEY, 'on'); else localStorage.removeItem(MODE_KEY); } catch (e) { /* the switch still works for this visit */ }
  document.body.classList.toggle('hmode', on);
  const mi = page.querySelector('.hmodein');
  if (mi) mi.checked = on;
  if (!on) { hideHover(); sb.hidden = true; }
  marks();
  if (!quiet) toast(on ? 'Handout mode is on. Point at a passage and press + Handout.' : 'Handout mode is off. Your handouts are kept.');
}
msec.addEventListener('change', e => {
  if (!e.target.classList.contains('hmode')) return;
  const t = e.target;
  if (!t.checked) { setMode(false); return; }
  gate().then(ok => { if (ok) setMode(true); else t.checked = false; });
});
msec.addEventListener('click', e => {
  if (!e.target.closest('.hopen')) return;
  moremenu.hidden = true;
  const mb = $('morebtn');
  if (mb) { mb.setAttribute('aria-expanded', 'false'); mb.classList.remove('on'); }
  gate().then(ok => { if (ok) openPage(); });
});

/* A passage under the pointer, in the search results or in a full text, gets "+ Handout"
   at its top right. */
let hovEl = null, hovI = null, hideT = 0;
const hideHover = () => { hov.hidden = true; hmore.hidden = true; hovEl = null; hovI = null; };
const overlayOpen = () => !page.hidden && !docked;
document.addEventListener('mouseover', e => {
  if (!mode || overlayOpen()) return;
  if (e.target === hov || e.target === hmore || hmenu.contains(e.target)) { clearTimeout(hideT); return; }
  const box = e.target.closest && e.target.closest('.hit[data-open], .fp[data-fp]');
  if (!box) { if (hovEl) { clearTimeout(hideT); hideT = setTimeout(hideHover, 300); } return; }
  clearTimeout(hideT);
  if (box === hovEl) return;
  const i = +(box.dataset.open != null ? box.dataset.open : box.dataset.fp);
  if (!P[i]) return;
  hovEl = box; hovI = i;
  placeHover();
});
function placeHover() {
  const r = hovEl.getBoundingClientRect(), inn = has(hovI), c = collecting();
  hov.textContent = inn ? '✓ In handout' : '+ Handout';
  hov.classList.toggle('in', inn);
  const sec = !c && collectingSection();
  hov.title = inn ? 'Already in “' + cur().name + '”. Click to open it.' : c ? 'Add this passage under “' + noteName(c) + '”' : sec ? 'Add this passage to the end of “' + sectionName(sec) + '”' : 'Add this passage to “' + cur().name + '”';
  // A long passage that starts above the pane keeps its button at the top of what shows of it,
  // below the pane's own bar (the full text's title and contents, say).
  const sc = hovEl.closest('#left, #railbody'), bar = sc && sc.querySelector('.readbar');
  const floor = Math.max(52, sc ? sc.getBoundingClientRect().top + 4 : 0, bar && bar.getBoundingClientRect().bottom > 0 ? bar.getBoundingClientRect().bottom + 4 : 0);
  const top = Math.max(r.top + 4, floor);
  if (top > r.bottom - 18 || top > window.innerHeight - 24) { hov.hidden = true; hmore.hidden = true; return; }
  hov.hidden = false; hmore.hidden = false;
  hov.style.top = top + 'px'; hmore.style.top = top + 'px';
  hmore.style.left = Math.max(8, r.right - hmore.offsetWidth - 8) + 'px';
  hov.style.left = Math.max(8, r.right - hmore.offsetWidth - hov.offsetWidth - 12) + 'px';
}
document.addEventListener('scroll', e => { if (hmenu.contains(e.target)) return; sb.hidden = true; closeMenu(); if (hovEl && hovEl.isConnected) placeHover(); else hideHover(); }, true);
hov.addEventListener('click', e => {
  e.stopPropagation();
  if (hovI == null) return;
  if (has(hovI)) openPage(); else add(hovI);
});

/* The Connections tab's row of actions gets "+ Add to handout" beside "Report a text error". */
function railLabel(b) {
  const i = S.sel;
  if (i == null || !P[i]) return;
  const inn = has(i), c = collecting(), sec = !c && collectingSection();
  b.textContent = inn ? '✓ In “' + clip(cur().name, 26) + '”' : c ? '+ Add under “' + clip(noteName(c), 22) + '”' : sec ? '+ Add to “' + clip(sectionName(sec), 22) + '”' : '+ Add to handout';
  b.classList.toggle('on', inn);
}
function railButton() {
  // the Connections tab has a row of actions for it; the other tabs, the passage's date line above
  const pa = document.querySelector('#railbody .pactions') || document.querySelector('#railhead .pmeta');
  if (!pa || pa.querySelector('.hrail')) return;
  const b = el('button', null, 'btn hrail');
  b.type = 'button';
  b.title = 'Add this passage, with its English';
  const m = el('button', null, 'btn hrail hrailmore');
  m.type = 'button'; m.textContent = '▾'; m.title = 'Choose the heading it goes under, or start a new one';
  if (pa.classList.contains('pmeta')) { pa.appendChild(b); pa.appendChild(m); } else { pa.insertBefore(b, pa.querySelector('a')); pa.insertBefore(m, pa.querySelector('a')); }
  railLabel(b);
}
['railbody', 'railhead'].forEach(id => { const x = $(id); if (x) new MutationObserver(railButton).observe(x, { childList: true, subtree: true }); });
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('.hrail');
  if (!b || S.sel == null || !P[S.sel]) return;
  e.preventDefault();
  if (b.classList.contains('hrailmore')) { if (!hmenu.hidden && menuI === S.sel) closeMenu(); else openMenu(S.sel, b); return; }
  if (has(S.sel)) openPage(); else add(S.sel);
});

/* Words selected inside one passage, in the original or in its English, can be added as an
   excerpt. The portal's own "Search for …" button sits above a short selection; this one
   sits below. */
const TEXT_SEL = '.fpt, .ptext, .kw, .preview, .pcell, .tt, .fen';
const nodeEl = n => n && (n.nodeType === 1 ? n : n.parentElement);
function passageAt(n) {
  const x = nodeEl(n);
  if (!x || !x.closest || !x.closest(TEXT_SEL)) return null;
  const f = x.closest('.fen[data-for]'); if (f) return +f.dataset.for;
  const b = x.closest('.fp[data-fp]'); if (b) return +b.dataset.fp;
  const h = x.closest('.hit[data-open]'); if (h) return +h.dataset.open;
  if (x.closest('#railbody')) return S.sel;
  return null;
}
// The nearest lang attribute decides: the page itself is lang="en", the German and Latin lang="de".
const inEnglish = n => { const x = nodeEl(n), l = x && x.closest && x.closest('[lang]'); return !!(l && l !== document.documentElement && l.lang === 'en'); };
document.addEventListener('mouseup', e => {
  if (!mode || e.target === sb || overlayOpen()) return;
  setTimeout(() => {
    const sel = window.getSelection();
    const t = sel && sel.rangeCount ? String(sel).replace(/\s+/g, ' ').trim() : '';
    if (t.length < 2) { sb.hidden = true; return; }
    const a = passageAt(sel.anchorNode), b = passageAt(sel.focusNode);
    if (a == null || !P[a]) { sb.hidden = true; return; }
    if (b !== a || inEnglish(sel.anchorNode) !== inEnglish(sel.focusNode)) {
      sb.textContent = 'Select within one passage to add an excerpt';
      sb._i = null;
    } else {
      sb.textContent = '+ Add these words to handout';
      sb._i = a; sb._en = inEnglish(sel.anchorNode); sb._text = t;
    }
    const r = sel.getRangeAt(0).getBoundingClientRect();
    sb.hidden = false;
    let top = r.top > 44 ? r.bottom + 8 : r.bottom + 44;
    if (top > window.innerHeight - 36) top = Math.max(52, r.top - 72);
    sb.style.top = top + 'px';
    sb.style.left = Math.max(8, Math.min(r.left, window.innerWidth - sb.offsetWidth - 10)) + 'px';
  }, 0);
});
sb.addEventListener('click', () => {
  sb.hidden = true;
  if (sb._i == null) return;
  add(sb._i, sb._text, sb._en);
  window.getSelection().removeAllRanges();
});

/* ── The Handouts page ────────────────────────────────────────────────────── */
const page = el('div', 'hpage');
page.hidden = true;
page.innerHTML = '<div class="hdockgrip" title="Drag to make the handout wider or narrower"></div>' +
  '<div class="hbar"><button type="button" class="btn" data-h="close">← Back to the portal</button>' +
  '<b class="cz">Handouts</b>' +
  '<button type="button" class="btn hdockbtn" data-h="dock" title="Work with the portal on the left and this handout on the right">⇆ Side by side</button><span class="spacer"></span>' +
  '<span class="hseg" role="group" aria-label="Export this handout"><span class="lab">Export</span>' +
  '<button type="button" class="btn" data-h="docx" title="A Word file. It opens in Pages too.">Word</button>' +
  '<button type="button" class="btn" data-h="pdf" title="Opens the browser’s Print window: choose Save as PDF">PDF</button>' +
  '<button type="button" class="btn" data-h="txt" title="Plain text in the Handout tool’s markup, ready to make into a handout in your house style">Handout tool text</button></span>' +
  '<label class="henswitch" title="The English translation with every passage, or with none, on this computer"><input type="checkbox" class="henall"> English</label>' +
  '<span class="hviews" role="group" aria-label="View">' +
  '<button type="button" class="hview" data-h="classview" aria-pressed="true" title="For the class: the words left out of a passage shown as …, and nothing that adds to or changes a handout">Class view <i>for you</i></button>' +
  '<button type="button" class="hview" data-h="instructorview" aria-pressed="false" title="For making and changing handouts">Instructor view <i>for Maya</i></button></span>' +
  '<button type="button" class="linkish" data-h="lock" title="Forget the class password on this computer: it is asked for again before the handouts open">Lock</button>' +
  ($('moremenu') ? '' : '<label class="hmodesw" title="Off, the portal shows nothing of the handouts but the Handouts button; your handouts are kept"><input type="checkbox" class="hmodein"' + (mode ? ' checked' : '') + '> + Handout on passages</label>') +
  '<span class="hfile"><button type="button" class="linkish" data-h="save" title="Every handout, in one file, to keep or to move to another browser">Save to file</button>' +
  '<button type="button" class="linkish" data-h="open" title="Adds the handouts in a saved file to these">Open file</button></span>' +
  '<input type="file" accept=".json,application/json" hidden></div>' +
  '<div class="hbody"><aside></aside><main><div class="hwrap"></div></main></div>';
document.body.appendChild(page);
const picker = page.querySelector('input[type=file]');

let classView = true;     // Class view, whenever the page opens: the words left out shown as …, and nothing to change
const locked = () => classView;   // nothing on the page may change the handout; Instructor view is for that
/* Side by side: the Handouts page as a column on the right, the portal still in use on the left,
   so that passages can be added, and words selected, with the handout in view. The choice and the
   column's width are remembered in this browser. */
const DOCK_KEY = 'kantlab-handouts-dock';
let docked = localStorage.getItem(DOCK_KEY) === 'on';
function dockPlace() {
  if (!docked || page.hidden) { document.body.classList.remove('hdock'); page.classList.remove('docked'); return; }
  const app = $('app'), top = app ? Math.max(0, app.getBoundingClientRect().top) : 0;
  document.documentElement.style.setProperty('--hdock-top', top + 'px');
  const w = +localStorage.getItem(DOCK_KEY + '-w') || Math.round(window.innerWidth * 0.42);
  document.documentElement.style.setProperty('--hdock-w', Math.max(320, Math.min(w, window.innerWidth - 360)) + 'px');
  document.body.classList.add('hdock');
  page.classList.add('docked');
}
function setDock(on) {
  docked = on;
  try { if (on) localStorage.setItem(DOCK_KEY, 'on'); else localStorage.removeItem(DOCK_KEY); } catch (e) { /* this visit only */ }
  dockPlace(); render();
  toast(on ? 'Side by side: the portal on the left, this handout on the right. Drag the edge to make it wider.' : 'The handout fills the window again.');
}
window.addEventListener('resize', dockPlace);
// The column's left edge, to drag
let dragW = null;
page.addEventListener('mousedown', e => { if (!e.target.closest('.hdockgrip')) return; e.preventDefault(); dragW = true; document.body.classList.add('hdragging'); });
document.addEventListener('mousemove', e => {
  if (!dragW) return;
  const w = Math.max(320, Math.min(window.innerWidth - e.clientX, window.innerWidth - 360));
  document.documentElement.style.setProperty('--hdock-w', w + 'px');
});
document.addEventListener('mouseup', () => {
  if (!dragW) return;
  dragW = null; document.body.classList.remove('hdragging');
  const w = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--hdock-w'), 10);
  try { if (w) localStorage.setItem(DOCK_KEY + '-w', String(w)); } catch (e) { /* fine */ }
});
function openPage(focusId) {
  hideHover(); sb.hidden = true; tst.hidden = true; page.hidden = false; dockPlace(); render();
  if (!focusId) return;
  const c = page.querySelector('.hcard[data-id="' + focusId + '"]');
  if (!c) return;
  c.scrollIntoView({ block: 'center' });
  const lab = c.querySelector('.hlab');
  if (lab) lab.focus();
}
function closePage() { page.hidden = true; dockPlace(); }
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !page.hidden && !docked && !(e.target.matches && e.target.matches('input, textarea, select'))) closePage();
});

function render() {
  const h = cur(), c = collecting();
  const db = page.querySelector('.hdockbtn'), cb = page.querySelector('[data-h="close"]');
  if (db) { db.textContent = docked ? '⤢ Full page' : '⇆ Side by side'; db.title = docked ? 'Let the handout fill the window again' : 'Work with the portal on the left and this handout on the right'; }
  if (cb) cb.textContent = docked ? '✕ Close' : '← Back to the portal';
  const lk = classView;
  page.classList.toggle('hro', lk);
  page.classList.toggle('hcv', classView);
  document.body.classList.toggle('hclassview', classView);
  const es = page.querySelector('.henall');
  if (es) es.checked = showEn;
  page.querySelectorAll('.hview').forEach(b => { const on = (b.dataset.h === 'classview') === classView; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
  page.querySelector('aside').innerHTML = DB.handouts.map(x =>
      '<button type="button" class="hl' + (x.id === h.id ? ' on' : '') + '" data-pick="' + esc(x.id) + '">' + esc(x.name || 'Untitled handout') +
      '<span class="n">' + plural(countOf(x), 'passage') + '</span></button>').join('') +
    (lk ? backupHtml() : '<button type="button" class="btn hnew" data-h="new">+ New handout</button>' + trashHtml(h) + backupHtml());
  const n = h.items.length, over = viewOf(h), heads = h.items.filter(x => x.kind === 'heading');
  page.querySelector('.hwrap').innerHTML =
    '<input class="hname" value="' + esc(h.name) + '" placeholder="Untitled handout" aria-label="Name of this handout" spellcheck="false"' + (lk ? ' readonly' : '') + '>' +
    '<div class="hrow">' +
    (lk ? '' : '<button type="button" class="btn" data-h="note" title="A note: what you want to say, with passages under it">+ Note</button>' +
    '<button type="button" class="btn" data-h="heading">+ Heading</button>') +
    (heads.some(x => !isFolded(x)) ? '<button type="button" class="linkish" data-h="foldall" title="Fold every section away, to see just the headings">Fold all sections</button>' : '') +
    (notesOf(h).some(x => !noteFolded(x)) ? '<button type="button" class="linkish" data-h="foldnotes" title="Fold every note to its first line">Fold all notes</button>' : '') +
    (heads.some(isFolded) || notesOf(h).some(noteFolded) ? '<button type="button" class="linkish" data-h="unfoldall" title="Open every section and note">Open all</button>' : '') +
    '<span class="spacer"></span><button type="button" class="linkish hdel" data-h="delete">Delete this handout</button></div>' +
    '<p class="hhint muted small">' + (c ? 'Passages you add go under the note “' + esc(noteName(c)) + '”.'
      : collectingSection() ? 'Passages you add go to the end of the section “' + esc(sectionName(collectingSection())) + '”.'
      : 'Passages you add from the portal go to the end of this handout. To send them to a section, press its <b>Add passages here</b>.') + '</p>' +
    (n ? h.items.map((it, k) => over[k] ? '' : cardFor(it, String(k), h)).join('') :
      '<div class="hempty">Nothing here yet. Press <b>+ Note</b> to write the point you want to make. ' +
      'Or, in the portal, point at a passage and press <b>+ Handout</b>, or select some of its words and press <b>+ Add excerpt to handout</b>.</div>');
  page.querySelector('.hwrap').classList.toggle('duo', enMode(h) && passagesOf(h).some(x => enShown(h, x)));   // wider, for the two columns
  let inSec = false;   // what stands under a heading, until the next, sits a little further in
  h.items.forEach((x, k) => {
    if (x.kind === 'heading') { inSec = true; return; }
    const c = inSec && page.querySelector('.hwrap > .hcard.top[data-key="' + k + '"]');
    if (c) c.classList.add('insec');
  });
  if (lk) page.querySelectorAll('.hwrap input, .hwrap textarea, .hwrap select').forEach(x => { if (x.type === 'checkbox' || x.tagName === 'SELECT') x.disabled = true; else x.readOnly = true; });
  page.querySelectorAll('.hnote, .hnotetext').forEach(grow);
  mkbar.hidden = true;
  paintAll();
  if (classView) page.querySelectorAll('.hwrap [data-mf]').forEach(t => collapseCuts(t, '…'));
  if (!lk && pairCuts(h)) { save(); render(); return; }   // German cuts whose English has not followed yet
  if (enMode(h) && passagesOf(h).some(x => enWanted(h, x) && !x.en)) fillSoon();
}
// A text box as tall as its text. Measured only once it has a width, or a box drawn in a
// hidden or squeezed window would come out absurdly tall; drawn again when the window resizes.
function grow(t) { if (t.clientWidth < 80) return; t.style.height = 'auto'; t.style.height = Math.max(30, t.scrollHeight + 2) + 'px'; }
window.addEventListener('resize', () => { if (!page.hidden) page.querySelectorAll('.hnote, .hnotetext').forEach(grow); });
// sec: a folded section's moves (sectionMoves), which take the whole section along.
function moveBtns(k, n, sec) {
  const up = sec ? sec.up != null : k > 0, down = sec ? sec.down != null : k < n - 1, w = sec ? ' the whole section' : '';
  return '<button type="button" data-h="top" title="Move' + w + ' to the top"' + (up ? '' : ' disabled') + '>⤒</button>' +
    '<button type="button" data-h="up" title="Move' + w + ' up"' + (up ? '' : ' disabled') + '>↑</button>' +
    '<button type="button" data-h="down" title="Move' + w + ' down"' + (down ? '' : ' disabled') + '>↓</button>' +
    '<button type="button" data-h="bottom" title="Move' + w + ' to the bottom"' + (down ? '' : ' disabled') + '>⤓</button>' +
    '<button type="button" data-h="del" title="Move to the trash">✕</button>';
}
const GRIP = '<span class="grip" title="Drag to move">⠿</span>';
function cardFor(it, key, h) {
  if (it.kind === 'heading') {
    const on = collectingSection() === it, f = isFolded(it);
    return '<div class="hcard top hhead' + (on ? ' collecting' : '') + (f ? ' folded' : '') + '" data-key="' + key + '" data-id="' + esc(it.id) + '">' + GRIP +
      '<button type="button" class="hfold" data-h="fold" aria-expanded="' + !f + '" title="' + (f ? 'Open this section' : 'Fold this section away') + '">' + (f ? '▸' : '▾') + '</button>' +
      '<input data-f="text" value="' + esc(it.text) + '" placeholder="Section heading" spellcheck="false">' +
      (f ? '<button type="button" class="hfoldn" data-h="fold" title="Open this section">' + foldCount(h, +key) + '</button>' : '') +
      (f && !on ? '' : '<button type="button" class="btn hsecadd' + (on ? ' on' : '') + '" data-h="collectsec" title="' + (on ? 'Stop sending new passages to this section' : 'Passages you add in the portal from now on go to the end of this section') + '">' +
      (on ? '● Adding here · Stop' : 'Add passages here') + '</button>') +
      (f ? '' : '<button type="button" class="btn hsecnote" data-h="secnote" title="A new note at the top of this section, just under its heading">+ Note in this section</button>') +
      '<span class="hbtns">' + moveBtns(+key, h.items.length, f ? sectionMoves(h, +key) : null) + '</span></div>';
  }
  if (it.kind === 'note') return noteCard(it, key, h);
  return passCard(it, key, h, null, h.items.length);
}
/* Sections: a heading and what follows it, up to the next heading. */
function sectionOf(h, k) {
  for (let j = k - 1; j >= 0; j--) if (h.items[j].kind === 'heading') return h.items[j];
  return null;
}
const sectionName = x => flat(x.text) || 'Untitled section';
/* Where a note stands, as a menu: "in “Part one”", and under it every place it can go, the top or
   the end of each section or just after another note there. Choosing one moves the note there,
   its passages with it, without dragging. */
function moveMenu(h, k, sec) {
  const heads = h.items.map((x, j) => x.kind === 'heading' ? j : -1).filter(j => j >= 0);
  if (!heads.length) return '';
  const opt = (v, t) => '<option value="' + esc(v) + '">' + esc(t) + '</option>';
  const after = (a, b) => h.items.slice(a, b).map((x, j) => x.kind === 'note' && a + j !== k ? opt('after:' + x.id, 'After “' + noteName(x) + '”') : '').join('');
  let html = '<option value="" selected>' + esc(sec ? 'in “' + sectionName(sec) + '”' : 'in no section') + '</option>';
  if (heads[0] > 0) html += '<optgroup label="Before the first heading">' + opt('top', 'At the top of the handout') + after(0, heads[0]) + '</optgroup>';
  heads.forEach(j => {
    const x = h.items[j];
    html += '<optgroup label="' + esc(sectionName(x)) + '">' + opt('sec:' + x.id, 'At the top') + after(j + 1, sectionEnd(h, j)) + opt('end:' + x.id, 'At the end') + '</optgroup>';
  });
  return '<label class="hsecsel" title="Move this note, with its passages, to another section, or to just after another note"><select data-f="moveto" aria-label="Move this note">' + html + '</select></label>';
}
function moveNote(h, k, v) {
  const it = h.items[k], was = h.items.slice(), [how, id] = String(v).split(':');
  if (!it || !how) return;
  h.items.splice(k, 1);
  const ix = h.items.findIndex(x => x.id === id);
  const to = how === 'top' ? 0 : ix < 0 ? -1 : how === 'end' ? sectionEnd(h, ix) : ix + 1;
  if (to < 0) { h.items.splice(0, h.items.length, ...was); render(); return; }
  h.items.splice(to, 0, it);
  const sec = sectionOf(h, to);
  if (sec && isFolded(sec)) fold([sec.id], false);
  save(); render();
  const c = page.querySelector('.hcard[data-id="' + it.id + '"]');
  if (c) c.scrollIntoView({ block: 'nearest' });
  toast('Moved ' + (sec ? 'to “' + sectionName(sec) + '”' : 'before the first heading') + ', its passages with it.',
    [['Undo', () => { h.items.splice(0, h.items.length, ...was); save(); render(); }]]);
}
// "+ Note in this section": a new note at the top of the section the heading at k opens.
function sectionNote(h, k) {
  const n = { id: uid(), kind: 'note', text: '', items: [] };
  h.items.splice(k + 1, 0, n);   // at the top of the section, just under its heading
  save(); render();
  const c = page.querySelector('.hcard[data-id="' + n.id + '"]'), t = c && c.querySelector('.hnotetext');
  if (c) c.scrollIntoView({ block: 'center' });
  if (t) t.focus();
  toast('New note in “' + sectionName(h.items[k]) + '”.');
}
/* Folding a section or a note away while working on others: ▾ on its heading or on the note.
   Which are folded is kept apart from the handouts (its own key, by id), so folding never
   changes or saves a handout. Only folding hides a card: anything added to a folded section or
   note, moved into one or put back there opens it again, so nothing goes out of sight unasked
   (except a card dropped onto something folded, which is put away on purpose). */
const FOLD_KEY = 'kantlab-handouts-folded';
const folded = new Set((() => { try { return JSON.parse(localStorage.getItem(FOLD_KEY) || '[]'); } catch (e) { return []; } })());
const isFolded = x => !!x && x.kind === 'heading' && folded.has(x.id);
const noteFolded = x => !!x && x.kind === 'note' && folded.has(x.id);
const FOLD = f => '<button type="button" class="hfold" data-h="fold" aria-expanded="' + !f + '" title="' + (f ? 'Open it' : 'Fold it away') + '">' + (f ? '▸' : '▾') + '</button>';
let foldedNow = false;   // a fold or unfold since the last drawing: only then may cards go out of sight
function fold(ids, on) {
  ids.forEach(id => { if (on) folded.add(id); else folded.delete(id); });
  try { localStorage.setItem(FOLD_KEY, JSON.stringify([...folded])); } catch (e) { /* folded for this visit only */ }
  foldedNow = true;
}
// For each top-level item, the folded heading it sits under (null if it is on view).
function foldedOver(h) { let sec = null; return h.items.map(x => { if (x.kind === 'heading') { sec = x; return null; } return isFolded(sec) ? sec : null; }); }
const idsOf = x => [x.id].concat(x.kind === 'note' ? kids(x).map(y => y.id) : []);
// Every id in the handout, with the folded section and folded note (if any) that hide it.
function hiders(h) {
  const over = foldedOver(h), m = new Map();
  h.items.forEach((x, k) => {
    const sec = over[k] ? [over[k]] : [];
    m.set(x.id, sec);
    if (x.kind === 'note') kids(x).forEach(y => m.set(y.id, noteFolded(x) ? sec.concat([x]) : sec));
  });
  return { over, m };
}
let lastView = null;   // { h, all: every id in the handout, shown: the ids on view } at the last drawing
function viewOf(h) {
  if (lastView && lastView.h === h.id && !foldedNow) {
    const open = new Set();
    hiders(h).m.forEach((hs, id) => { if (hs.length && (lastView.shown.has(id) || !lastView.all.has(id))) hs.forEach(x => open.add(x.id)); });
    if (open.size) fold([...open], false);
  }
  foldedNow = false;
  const { over, m } = hiders(h), all = new Set(), shown = new Set();
  m.forEach((hs, id) => { all.add(id); if (!hs.length) shown.add(id); });
  lastView = { h: h.id, all, shown };
  return over;
}
// What a folded section holds, for its heading: "3 passages, 1 note".
function foldCount(h, k) {
  const xs = h.items.slice(k + 1, sectionEnd(h, k)), notes = xs.filter(x => x.kind === 'note').length;
  const pass = [].concat(...xs.map(x => x.kind === 'note' ? kids(x) : [x])).filter(isPass).length;
  return [pass ? plural(pass, 'passage') : '', notes ? plural(notes, 'note') : ''].filter(Boolean).join(', ') || 'empty';
}
// A folded section moves as a whole, past the section before or after it, or to the first or
// last place among the sections (anything above the first heading stays above it). Each is a
// place in the list as it is now, or null where the section cannot go.
function sectionMoves(h, k) {
  const heads = h.items.map((x, j) => x.kind === 'heading' ? j : -1).filter(j => j >= 0), i = heads.indexOf(k);
  const prev = heads[i - 1], next = heads[i + 1];
  return { up: prev == null ? null : prev, top: prev == null ? null : heads[0],
    down: next == null ? null : sectionEnd(h, next), bottom: next == null ? null : h.items.length };
}
// Dropped at place t, a folded section goes before a heading, or else after the section t is in.
function sectionDrop(h, t) {
  const first = h.items.findIndex(x => x.kind === 'heading');
  if (t <= first) return first;
  while (t < h.items.length && h.items[t].kind !== 'heading') t++;
  return t;
}
function moveSection(h, k, to) {
  const e = sectionEnd(h, k);
  if (to == null || (to >= k && to <= e)) return;
  const block = h.items.splice(k, e - k);
  h.items.splice(to > k ? to - block.length : to, 0, ...block);
  save(); render();
}
function noteCard(it, key, h) {
  const on = collecting() === it, ks = kids(it), sec = sectionOf(h, +key), f = noteFolded(it);
  return '<div class="hcard top hnotecard' + (on ? ' collecting' : '') + (f ? ' folded' : '') + '" data-key="' + key + '" data-id="' + esc(it.id) + '">' +
    '<div class="hcite">' + GRIP + FOLD(f) + '<span class="w"><input class="nlab" data-f="title" value="' + esc(it.title || '') + '" placeholder="Note" size="' + Math.max(4, String(it.title || '').length + 1) + '" spellcheck="false" aria-label="This note’s title" title="Give this note a title: it stands here in place of “Note”, and students see it above the note">' + moveMenu(h, +key, sec) +
    (f ? '<span class="hsec">' + (ks.length ? plural(ks.length, 'passage') : 'no passages') + '</span>' : '') +
    (f && !on ? '' : '<button type="button" class="btn ncoll' + (on ? ' on' : '') + '" data-h="collect" title="' + (on ? 'Stop adding passages under this note' : 'Passages you add in the portal from now on go under this note') + '">' +
    (on ? '● Collecting here · Stop' : 'Collect here') + '</button>') +
    (f ? '' : '<button type="button" class="btn nadd" data-h="pick" title="Put passages that are already in this handout under this note">+ Passages from this handout</button>') + '</span>' +
    '<span class="hbtns">' + moveBtns(+key, h.items.length) + '</span></div>' +
    // Folded: the note's first line, which opens it.
    (f ? '<button type="button" class="hnotefold" data-h="fold" title="Open this note">' + esc(clip(flat(String(it.text || '').trim().split('\n')[0]), 140) || 'Empty note') + '</button></div>' :
    '<textarea class="hnotetext" data-f="text" rows="2" placeholder="What you want to say: your setup, how the passages bear on each other, a question for students.">' + esc(it.text) + '</textarea>' +
    (pickFor === it.id ? pickHtml(it, h) : '') +
    '<div class="hkids">' + (ks.length ? ks.map((x, j) => passCard(x, key + '.' + j, h, it, ks.length)).join('')
      : '<p class="muted small">A note on its own: your setup or commentary. To put passages under it, drag them onto it, press <b>+ Passages from this handout</b>, or <b>Collect here</b> and add them in the portal.</p>') + '</div></div>');
}
/* "+ Passages from this handout": every passage not already under this note, to tick. */
let pickFor = null;
function pickHtml(n, h) {
  const rows = [];
  h.items.forEach((x, k) => {
    if (isPass(x)) rows.push([String(k), x, '']);
    else if (x.kind === 'note' && x !== n) kids(x).forEach((y, j) => rows.push([k + '.' + j, y, 'now under “' + noteName(x) + '”']));
  });
  if (!rows.length) return '<div class="hpick">Every passage in this handout is already under this note. Add more in the portal. <div class="acts"><button type="button" class="linkish" data-h="pickclose">Close</button></div></div>';
  return '<div class="hpick"><b>Which passages go under this note?</b>' + rows.map(([key, x, where]) =>
    '<label><input type="checkbox" data-pk="' + key + '"> <b>' + esc(x.author) + '</b>, ' + esc(x.cite) + (flat(x.label) ? ' · <i>' + esc(x.label) + '</i>' : '') +
    ' <span>' + esc(clip(flat(x.text), 70)) + (where ? ' · ' + esc(where) : '') + '</span></label>').join('') +
    '<div class="acts"><button type="button" class="btn solid" data-h="pickgo">Put them under this note</button><button type="button" class="linkish" data-h="pickclose">Cancel</button></div></div>';
}
// Move the ticked passages, in the handout's order, to the end of the note's own.
function pickMove(h, n, keys) {
  const got = keys.map(k => at(h, k));
  got.forEach(a => { a.removed = a.list.splice(a.list.indexOf(a.it), 1)[0]; });
  got.forEach(a => kids(n).push(a.it));
  pickFor = null;
  save(); render();
  toast(plural(got.length, 'passage') + ' now under “' + noteName(n) + '”');
}
// A passage's English on its card, while the English switch is on.
function enCard(h, it, lab) {
  if (!enMode(h) || it.from === 'english') return '';
  if (!it.en) return '<div class="hen muted small">' + (enState(it) === 'loading' ? 'English loading…' : 'The portal has no English for this passage.') + '</div>';
  return '<div class="hen">' + lab + ' <span class="muted small">machine translation, ' + esc(styleLabel(it.enStyle)) + '</span></div>' +
    '<div class="htext en" data-mf="en" lang="en">' + rich(it.en) + '</div>';
}
// A passage's words and its English, side by side where the English is shown (one above the
// other where the page is narrow, or beside the portal).
const duoCard = (h, it, de, en) => enShown(h, it) ? '<div class="hduo"><div class="hcol">' + de + '</div><div class="hcol">' + en + '</div></div>' : de + en;
// "⧉ Show it twice…": every place a linked copy of a passage can go, the top or the end of a
// section, or under a note, or just after the passage itself.
function copyMenu(h) {
  const opt = (v, t) => '<option value="' + esc(v) + '">' + esc(t) + '</option>';
  const heads = h.items.map((x, j) => x.kind === 'heading' ? j : -1).filter(j => j >= 0);
  const notesIn = (a, b) => h.items.slice(a, b).filter(x => x.kind === 'note').map(x => opt('under:' + x.id, 'Under “' + noteName(x) + '”')).join('');
  let html = '<option value="">⧉ Show it twice…</option>' + opt('after', 'Just after this one');
  if (!heads.length) html += '<optgroup label="In this handout">' + opt('top', 'At the top') + notesIn(0, h.items.length) + opt('endall', 'At the end') + '</optgroup>';
  else {
    if (heads[0] > 0) html += '<optgroup label="Before the first heading">' + opt('top', 'At the top of the handout') + notesIn(0, heads[0]) + '</optgroup>';
    heads.forEach(j => { const x = h.items[j]; html += '<optgroup label="' + esc(sectionName(x)) + '">' + opt('sec:' + x.id, 'At the top') + notesIn(j + 1, sectionEnd(h, j)) + opt('end:' + x.id, 'At the end') + '</optgroup>'; });
  }
  return '<label class="hcopysel" title="Show this passage in a second place as well, linked: what you change in one place changes in the other"><select data-f="copyto" aria-label="Show this passage in a second place">' + html + '</select></label>';
}
function copyPassage(h, key, v) {
  const a = at(h, key), it = a.it, [how, id] = String(v).split(':');
  if (!it || !isPass(it)) return;
  const fresh = !it.link;
  if (fresh) it.link = uid();
  const c = JSON.parse(JSON.stringify(it));
  c.id = uid(); c.added = new Date().toISOString();
  const ix = h.items.findIndex(y => y.id === id);
  let where;
  if (how === 'after') { a.list.splice(a.i + 1, 0, c); where = 'just after it'; }
  else if (how === 'top') { h.items.unshift(c); where = 'at the top'; }
  else if (how === 'endall') { h.items.push(c); where = 'at the end'; }
  else if (how === 'under') { const n = findNote(h, id); if (!n) return; kids(n).push(c); if (noteFolded(n)) fold([n.id], false); where = 'under “' + noteName(n) + '”'; }
  else if (ix >= 0) { h.items.splice(how === 'sec' ? ix + 1 : sectionEnd(h, ix), 0, c); if (isFolded(h.items[ix])) fold([id], false); where = (how === 'sec' ? 'at the top of “' : 'at the end of “') + sectionName(h.items[ix]) + '”'; }
  if (!where) { if (fresh) delete it.link; return; }
  touched = null;
  save(); render();
  const card = page.querySelector('.hcard[data-id="' + c.id + '"]');
  if (card) card.scrollIntoView({ block: 'center' });
  toast('Shown again ' + where + ', linked: what you change in one place changes in the other.', [['Undo', () => {
    [h.items].concat(notesOf(h).map(kids)).forEach(l => { const k = l.indexOf(c); if (k >= 0) l.splice(k, 1); });
    if (fresh) delete it.link;
    touched = null; save(); render();
  }]]);
}
function passCard(it, key, h, parent, len) {
  const i = +String(key).split('.').pop();
  const live = PT.BYID ? PT.BYID.has(it.ref) : true;
  const list = parent ? kids(parent) : h.items, joinNx = joinable(it, list[i + 1]);
  const tag = it.kind === 'excerpt' ? '<span class="htag">excerpt' + (it.from === 'english' ? ' of the English' : '') + '</span>'
    : it.parts ? '<span class="htag" title="Joined in this handout; the portal keeps them apart">' + plural(it.parts.length, 'passage') + ' joined</span>' : '';
  const cuts = (it.marks || []).filter(m => m.k === 'cut').length, places = linkedOf(h, it).length + 1;
  const linked = places > 1 ? '<span class="htag hlinked" title="Shown in ' + places + ' places in this handout: what you change in one changes in all">⧉ shown ' + (places === 2 ? 'twice' : places + ' times') + '</span>' : '';
  const enLab = it.kind !== 'excerpt' ? 'English' : it.enSnippet ? (it.enApprox ? 'English, roughly the matching stretch' : 'English of these sentences') : 'English of the whole passage';
  const notes = notesOf(h);
  const under = notes.length ? '<label class="hunder">Under <select data-f="under"><option value="">no note</option>' +
    notes.map(x => '<option value="' + esc(x.id) + '"' + (parent === x ? ' selected' : '') + '>' + esc(noteName(x)) + '</option>').join('') + '</select></label>' : '';
  return '<div class="hcard ' + (parent ? 'child' : 'top') + '" data-key="' + key + '" data-id="' + esc(it.id) + '"><div class="hcite">' + GRIP +
    '<span class="w"><b>' + esc(it.author) + '</b>, <i>' + esc(it.work) + '</i>, ' +
      (live ? '<button type="button" class="hgo" data-h="go" title="Read it where it stands, in its text">' + esc(it.cite) + '</button>' : esc(it.cite)) +
      (adickesOf(it) ? '<span class="hdate" title="Adickes’ dating of the note: his phase as printed, and the years his chronology (AA XIV) gives it">' + esc(adickesOf(it)) + '</span>' : '') + tag + linked + '</span>' +
    '<span class="hbtns">' + moveBtns(i, len) + '</span></div>' +
    '<input class="hlab" data-f="label" value="' + esc(it.label || '') + '" placeholder="Label (optional), e.g. Against X" spellcheck="false">' +
    duoCard(h, it, '<div class="htext" data-mf="text"' + (it.from === 'english' ? ' lang="en"' : ' lang="de"') + '>' + (it.from === 'english' ? rich(it.text)
      : it.parts ? partsHtml(it, p => '<button type="button" class="hpart" data-h="gopart" data-ref="' + esc(p.ref) + '" title="Read this part where it stands">' + esc(p.cite) + '</button> ')
      : esc(it.text)) + '</div>' +
    (it.from === 'english' ? '<div class="hfoot muted">Machine translation, ' + esc(styleLabel(it.enStyle)) + '</div>' : ''), enCard(h, it, enLab)) +
    '<textarea class="hnote" data-f="note" rows="1" placeholder="A note on this passage (optional)">' + esc(it.note) + '</textarea>' +
    '<div class="hfoot">' + (live ? '<button type="button" class="linkish" data-h="go" title="Its paragraph in the reader, whatever has been changed here">' + (it.parts ? 'Read it where it stands, from the first part ›' : 'Read it where it stands ›') + '</button>'
      : '<span class="muted">This passage is no longer in the portal; its words are kept here.</span>') +
    (joinNx ? '<button type="button" class="linkish" data-h="join" title="Make this passage and the one below it one passage of the handout (the portal keeps them apart)">Join with the next passage ↓</button>' : '') +
    (it.parts ? '<button type="button" class="linkish" data-h="split" title="Back into the passages it was joined from">Split into its ' + it.parts.length + ' passages</button>' : '') +
    (cuts ? '<button type="button" class="linkish" data-h="uncut" title="Students see […] where words are left out; this gives them the passage whole again">Put back all that was left out (' + cuts + ')</button>' : '') +
    copyMenu(h) +
    (places > 1 ? '<button type="button" class="linkish" data-h="unlink" title="Keep this one, but let what you change in it stay here, and not change its other place">Make separate</button>' : '') +
    under + '</div></div>';
}

/* The trash: what ✕ takes out of a handout, newest first, each with the place it came
   from (and the note it was under). Click one to put it back there. Each handout has its own. */
let trashOpen = false;
const trashOf = h => h.trash || (h.trash = []);
function trashLabel(it) {
  if (it.kind === 'heading') return { head: 'Heading', text: flat(it.text) || '(empty)' };
  if (it.kind === 'note') return { head: (flat(it.title) || 'Note') + (kids(it).length ? ' · ' + plural(kids(it).length, 'passage') : ''), text: clip(flat(it.text), 90) || '(empty)' };
  return { head: it.author + ', ' + it.cite + (it.kind === 'excerpt' ? ' · excerpt' : ''), text: clip(flat(it.text), 90) };
}
function trashHtml(h) {
  const T = trashOf(h);
  return '<details class="htrash"' + (trashOpen ? ' open' : '') + '><summary>Trash<span class="tn">' + T.length + '</span></summary>' +
    (T.length ? '<p class="muted small">Click one to put it back where it was.</p>' + T.map((e, j) => {
      const L = trashLabel(e.it);
      return '<button type="button" class="trow" data-tr="' + j + '" title="Put back in “' + esc(h.name) + '”"><span class="tl">↩ ' + esc(L.head) + '</span><span class="tx">' + esc(L.text) + '</span></button>';
    }).join('') + '<button type="button" class="linkish" data-h="emptytrash">Empty the trash</button>'
      : '<p class="muted small">Empty. What you take out of this handout with ✕ waits here.</p>') + '</details>';
}
function trash(h, key) {
  const a = at(h, key);
  const e = { it: a.it, at: a.i, under: a.note ? a.note.id : null, when: new Date().toISOString() };
  a.list.splice(a.i, 1);
  if (a.it.kind === 'note' && DB.collect && DB.collect.note === a.it.id) DB.collect = null;
  if (a.it.kind === 'heading' && DB.collect && DB.collect.section === a.it.id) DB.collect = null;
  trashOf(h).unshift(e);
  save(); render();
  toast('Moved to the trash', [['Undo', () => putBack(h, e)]]);
}
function putBack(h, e) {
  const T = trashOf(h), j = T.indexOf(e);
  if (j < 0) return;
  T.splice(j, 1);
  const n = e.under && findNote(h, e.under), list = n ? kids(n) : h.items;
  list.splice(Math.min(e.at, list.length), 0, e.it);
  const back = e.it.kind === 'note' ? kids(e.it) : [e.it];
  back.filter(x => x.link).forEach(x => { const o = linkedOf(h, x).find(y => !back.includes(y)); if (o) copyInto(x, o); });
  touched = null;
  save(); render();
  toast('Put back in “' + h.name + '”' + (e.under && !n ? ' (its note is gone, so it is at the top level)' : ''));
}
function move(list, k, to) {
  if (to < 0 || to >= list.length || to === k) return;
  const [it] = list.splice(k, 1);
  list.splice(to, 0, it);
  save(); render();
}
// "Under [note]": take a passage from where it is and put it under another note, or at the
// top level just after the note it was under.
function reparent(h, key, noteId) {
  const a = at(h, key), it = a.it;
  a.list.splice(a.i, 1);
  const n = noteId && findNote(h, noteId);
  if (n) kids(n).push(it);
  else h.items.splice(a.note ? h.items.indexOf(a.note) + 1 : h.items.length, 0, it);
  save(); render();
}

page.addEventListener('click', e => {
  e.stopPropagation();   // the portal's handlers are not for this page
  const pick = e.target.closest('[data-pick]');
  if (pick) { DB.current = pick.dataset.pick; save(); render(); return; }
  const tr = e.target.closest('[data-tr]');
  if (tr && !locked()) { const h = cur(); putBack(h, trashOf(h)[+tr.dataset.tr]); return; }
  const b = e.target.closest('[data-h]');
  if (!b) return;
  if (locked() && !RO_OK.has(b.dataset.h)) return;   // Class view: to read
  const h = cur(), c = b.closest('[data-key]'), key = c ? c.dataset.key : null;
  switch (b.dataset.h) {
    case 'close': return closePage();
    case 'dock': return setDock(!docked);
    case 'classview': if (!classView) { classView = true; render(); toast('Class view: what is left out shows as …, and nothing can be added or changed.'); } return;
    case 'instructorview': if (classView) { classView = false; render(); toast('Instructor view: make and change handouts. What is left out is struck through.'); } return;
    case 'lock': { if (LOCK) LOCK.forget().then(() => { setMode(false, true); closePage(); toast('Locked. The class password will be asked for before the handouts open again.'); }); return; }
    case 'new': { const x = blank('Untitled handout'); DB.handouts.push(x); DB.current = x.id; save(); render(); const i = page.querySelector('.hname'); i.focus(); i.select(); return; }
    case 'delete': {
      const n = countOf(h);
      if (!confirm('Delete “' + h.name + '”' + (n ? ' and its ' + plural(n, 'passage') : '') + '? This cannot be undone, except from a saved file.')) return;
      DB.handouts = DB.handouts.filter(x => x.id !== h.id);
      if (!DB.handouts.length) DB.handouts.push(blank('My handout'));
      DB.current = DB.handouts[0].id; save(); render(); return;
    }
    case 'heading': h.items.push({ id: uid(), kind: 'heading', text: '' }); save(); render(); { const ins = page.querySelectorAll('.hhead input'); if (ins.length) ins[ins.length - 1].focus(); } return;
    case 'note': {
      const n = { id: uid(), kind: 'note', text: '', items: [] };
      h.items.push(n); save(); render();
      const ts = page.querySelectorAll('.hnotetext'); if (ts.length) ts[ts.length - 1].focus();
      toast('New note. It stands on its own; to put passages under it, press Collect here.');
      return;
    }
    case 'collect': {
      const n = at(h, key).it;
      DB.collect = collecting() === n ? null : { h: h.id, note: n.id };
      save(); render();
      if (DB.collect) toast('Passages you add in the portal now go under this note.', [['Back to the portal', closePage]]);
      return;
    }
    case 'pick': { const n = at(h, key).it; pickFor = pickFor === n.id ? null : n.id; render(); return; }
    case 'pickclose': pickFor = null; render(); return;
    case 'pickgo': {
      const n = at(h, key).it, keys = [...c.querySelectorAll('.hpick input[data-pk]:checked')].map(x => x.dataset.pk);
      if (!keys.length) { toast('Tick the passages to put under this note first.'); return; }
      return pickMove(h, n, keys);
    }
    case 'up': case 'down': case 'top': case 'bottom': {
      const a = at(h, key), w = b.dataset.h;
      if (!a.note && isFolded(a.it)) return moveSection(h, a.i, sectionMoves(h, a.i)[w]);
      return move(a.list, a.i, w === 'up' ? a.i - 1 : w === 'down' ? a.i + 1 : w === 'top' ? 0 : a.list.length - 1);
    }
    case 'fold': {
      const x = at(h, key).it;
      fold([x.id], !folded.has(x.id)); render();
      const hc = page.querySelector('.hcard[data-id="' + x.id + '"]');
      if (hc) hc.scrollIntoView({ block: 'nearest' });
      return;
    }
    case 'foldall': case 'foldnotes': fold(h.items.filter(x => x.kind === (b.dataset.h === 'foldall' ? 'heading' : 'note')).map(x => x.id), true); render(); return;
    case 'unfoldall': fold(h.items.filter(x => x.kind === 'heading' || x.kind === 'note').map(x => x.id), false); render(); return;
    case 'secnote': return sectionNote(h, +key);
    case 'collectsec': {
      const x = at(h, key).it;
      DB.collect = collectingSection() === x ? null : { h: h.id, section: x.id };
      save(); render();
      if (DB.collect) toast('Passages you add in the portal now go to the end of “' + sectionName(x) + '”.', [['Back to the portal', closePage]]);
      return;
    }
    case 'del': return trash(h, key);
    case 'emptytrash': {
      const n = trashOf(h).length;
      if (!n || !confirm('Empty the trash of “' + h.name + '”? The ' + plural(n, 'item') + ' in it will be gone for good.')) return;
      h.trash = []; save(); render(); return;
    }
    case 'go': {
      const it = at(h, key).it;
      if (!docked) closePage();
      goRead(it.ref);
      return;
    }
    case 'gopart': if (!docked) closePage(); goRead(b.dataset.ref); return;
    case 'join': return joinNext(h, key);
    case 'split': return splitPassage(h, key);
    case 'unlink': {
      const it = at(h, key).it, was = it.link;
      touched = null; delete it.link; save(); render();
      toast('This one is separate now: what you change in it stays here.', [['Undo', () => { it.link = was; touched = null; save(); render(); }]]);
      return;
    }
    case 'uncut': {
      const it = at(h, key).it, before = JSON.stringify(it.marks || []);
      it.marks = (it.marks || []).filter(m => m.k !== 'cut'); save(); render();
      toast('The passage is whole again.', [['Undo', () => { it.marks = JSON.parse(before); touch(it); save(); render(); }]]);
      return;
    }
    case 'docx': return exportDocx(h);
    case 'pdf': return exportPdf(h);
    case 'txt': return download(new Blob([toText(h)], { type: 'text/plain;charset=utf-8' }), fileName(h, 'txt'));
    case 'save': return download(new Blob([JSON.stringify({ kind: 'kantlab-handouts', v: 1, saved: new Date().toISOString(), handouts: DB.handouts }, null, 1)], { type: 'application/json' }),
      'Kant Lab handouts ' + new Date().toISOString().slice(0, 10) + '.json');
    case 'open': picker.value = ''; picker.click(); return;
  }
});
page.addEventListener('toggle', e => { if (e.target.classList && e.target.classList.contains('htrash')) trashOpen = e.target.open; }, true);
page.addEventListener('input', e => {
  if (locked()) return;
  const h = cur();
  if (e.target.classList.contains('hname')) { h.name = e.target.value; save(); const on = page.querySelector('aside .hl.on'); if (on && on.firstChild) on.firstChild.textContent = h.name || 'Untitled handout'; return; }
  const f = e.target.dataset.f, c = e.target.closest('[data-key]');
  if (!f || !c || f === 'under' || f === 'moveto' || f === 'copyto') return;
  at(h, c.dataset.key).it[f] = e.target.value;
  if (e.target.tagName === 'TEXTAREA') grow(e.target);
  if (e.target.classList.contains('nlab')) e.target.size = Math.max(4, e.target.value.length + 1);
  save();
  linkedOf(h, itemById(h, c.dataset.id)).forEach(x => {
    const o = page.querySelector('.hcard[data-id="' + x.id + '"] [data-f="' + f + '"]');
    if (o && o !== e.target) { o.value = e.target.value; if (o.tagName === 'TEXTAREA') grow(o); }
  });
});
page.addEventListener('change', e => {
  if (e.target.classList.contains('hmodein')) { setMode(e.target.checked); return; }
  if (e.target.classList.contains('henall')) {
    showEn = e.target.checked;
    try { if (showEn) localStorage.removeItem(VIEW_EN); else localStorage.setItem(VIEW_EN, 'off'); } catch (x) { /* this visit only */ }
    render();
    toast(showEn ? 'English with every passage.' : 'No English: the passages in the original only.');
    return;
  }
  if (locked()) return;
  const f = e.target.dataset.f, c = e.target.closest('[data-key]');
  if (!c) return;
  if (f === 'under') reparent(cur(), c.dataset.key, e.target.value);
  if (f === 'moveto' && e.target.value) moveNote(cur(), +c.dataset.key, e.target.value);
  if (f === 'copyto' && e.target.value) copyPassage(cur(), c.dataset.key, e.target.value);
});
picker.addEventListener('change', () => {
  const f = picker.files && picker.files[0];
  if (!f) return;
  f.text().then(s => {
    const d = JSON.parse(s);
    const list = d && Array.isArray(d.handouts) ? d.handouts.filter(x => x && Array.isArray(x.items)) : [];
    if (!list.length) throw new Error('no handouts');
    const ids = new Set(DB.handouts.map(x => x.id));
    list.forEach(x => { if (ids.has(x.id)) x.id = uid(); DB.handouts.push(x); });
    DB.current = list[0].id; save(); render();
    toast('Opened ' + plural(list.length, 'handout') + ' from ' + f.name + '.');
  }).catch(() => toast('That file is not a saved set of handouts.'));
});

/* Dragging, as in the Finder: take any card by its ⠿ or its top line and drop it before or after
   another card, onto a note to put a passage under it, or onto a folded section to put it at the
   end of that section. Passages go into notes and out of them; notes and headings stay at the
   top level; a folded section goes whole. A card dropped onto something folded stays out of
   sight, with Undo; ↑ ↓ and the Under list still work as before. */
let drag = null;   // { key, it }: the card being dragged
page.addEventListener('mousedown', e => {
  const c = e.target.closest('.hcard');
  if (!c || locked()) return;
  if (e.target.closest('.grip') || !e.target.closest('button, input, select, textarea, a, label') &&
    (e.target.closest('.hcite') || e.target === c && c.classList.contains('hhead'))) c.draggable = true;
});
page.addEventListener('mouseup', () => { if (!drag) page.querySelectorAll('.hcard[draggable="true"]').forEach(x => { x.draggable = false; }); });
page.addEventListener('dragstart', e => {
  const c = e.target.closest && e.target.closest('.hcard');
  if (!c || !c.draggable) return;
  drag = { key: c.dataset.key, it: at(cur(), c.dataset.key).it };
  c.classList.add('drag');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', flat(drag.it.text || drag.it.cite || ''));
});
const clearMarks = () => page.querySelectorAll('.hcard.before, .hcard.after, .hcard.into').forEach(x => x.classList.remove('before', 'after', 'into'));
// The card nearest the height y among cards cs, and a height on the near side of it.
function nearest(cs, y) {
  for (const c of cs) { const r = c.getBoundingClientRect(); if (y < r.top) return [c, r.top + 1]; if (y <= r.bottom) return [c, y]; }
  const c = cs[cs.length - 1];
  return [c, c.getBoundingClientRect().bottom - 1];
}
// Where a drop at the pointer would put the card being dragged: the card to mark, the mark
// (before, after or into), and the place { note, i } in the list as it is now; null for nowhere.
function spotFor(e) {
  const t = e.target.nodeType === 1 ? e.target : e.target.parentElement, m = page.querySelector('main');
  if (!t || !m.contains(t)) return null;
  const c = t.closest('.hcard'), ks = t.closest('.hkids');
  if (c && ks && c === ks.closest('.hcard') && isPass(drag.it)) {   // between the passages under a note
    const ch = [...ks.children].filter(x => x.classList.contains('hcard'));
    if (ch.length) return spotOn(...nearest(ch, e.clientY));
  }
  if (c) return spotOn(c, e.clientY);
  const tops = [...page.querySelectorAll('.hwrap > .hcard.top')];   // in a gap, or below the last card
  return tops.length ? spotOn(...nearest(tops, e.clientY)) : null;
}
function spotOn(c, y) {
  if (c.closest('.drag')) return null;   // onto itself, or into itself
  const h = cur(), d = drag.it, pass = isPass(d);
  let a = at(h, c.dataset.key);
  if (a.note && !pass) { c = c.parentElement.closest('.hcard'); a = at(h, c.dataset.key); if (c.closest('.drag')) return null; }
  const r = c.getBoundingClientRect(), edge = Math.min(16, r.height / 4), low = y >= r.top + r.height / 2, it = a.it;
  const side = (mark, i) => ({ c, mark, dest: { note: a.note, i } });
  let s;
  if (a.note) s = side(low ? 'after' : 'before', a.i + (low ? 1 : 0));
  else if (it.kind === 'note' && pass)
    s = y < r.top + edge ? side('before', a.i) : y > r.bottom - edge ? side('after', a.i + 1)
      : { c, mark: 'into', dest: { note: it, i: kids(it).length }, into: noteFolded(it) ? it : null };
  else if (isFolded(it))
    s = !low ? side('before', a.i) : d.kind === 'heading' ? side('after', sectionEnd(h, a.i))
      : { c, mark: 'into', dest: { note: null, i: sectionEnd(h, a.i) }, into: it };
  else s = side(low ? 'after' : 'before', a.i + (low ? 1 : 0));
  if (isFolded(d)) {   // a folded section lands only between sections: before a heading, or at the end
    const i = sectionDrop(h, s.dest.i), hc = page.querySelector('.hwrap > .hcard.top[data-key="' + i + '"]');
    const tops = page.querySelectorAll('.hwrap > .hcard.top');
    s = hc ? { c: hc, mark: 'before', dest: { note: null, i } } : { c: tops[tops.length - 1], mark: 'after', dest: { note: null, i } };
    if (s.c.closest('.drag')) return null;
  }
  return s;
}
// Long handouts scroll while a card is held near the top or bottom of the page.
function dragScroll(e) {
  const m = page.querySelector('main'), r = m.getBoundingClientRect();
  if (e.clientY < r.top + 50) m.scrollTop -= 16; else if (e.clientY > r.bottom - 50) m.scrollTop += 16;
}
let spot = null;
page.addEventListener('dragover', e => {
  if (!drag) return;
  dragScroll(e);
  const s = spotFor(e);
  if (!s) { clearMarks(); spot = null; return; }
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  if (!spot || spot.c !== s.c || spot.mark !== s.mark) { clearMarks(); s.c.classList.add(s.mark); }
  spot = s;
});
page.addEventListener('drop', e => {
  if (!drag) return;
  e.preventDefault();
  const s = spotFor(e), d = drag, h = cur();
  drag = null; spot = null; clearMarks();
  if (!s) return;
  if (isFolded(d.it)) return moveSection(h, +d.key, s.dest.i);
  relocate(h, d.key, s.dest, s.into);
});
page.addEventListener('dragend', () => {
  drag = null; spot = null;
  page.querySelectorAll('.hcard').forEach(x => { x.draggable = false; x.classList.remove('drag', 'before', 'after', 'into'); });
});
// Take the card at key to place { note, i } (counted in the list as it was). Into something
// folded (shut: that section or note), it stays out of sight, with Undo and a way to look.
function relocate(h, key, dest, shut) {
  const a = at(h, key), list = dest.note ? kids(dest.note) : h.items;
  let i = dest.i;
  if (list === a.list) { if (i > a.i) i--; if (i === a.i) return; }
  a.list.splice(a.i, 1);
  list.splice(i, 0, a.it);
  if (shut && lastView) idsOf(a.it).forEach(id => lastView.shown.delete(id));
  save(); render();
  if (shut) toast('Moved into “' + (shut.kind === 'note' ? noteName(shut) : sectionName(shut)) + '”, which stays folded.', [
    ['Undo', () => { const j = list.indexOf(a.it); if (j < 0) return; list.splice(j, 1); a.list.splice(Math.min(a.i, a.list.length), 0, a.it); save(); render(); }],
    ['Open it', () => { fold([shut.id], false); render(); }],
  ]);
}

/* ── Marking up the passages ─────────────────────────────────────────────────
   Select words of a passage, or of its English, on the Handouts page: Highlight, Underline, or
   a Margin note beside them. A mark keeps its words and a little of what comes before and after
   them, not their positions, so it finds them wherever the passage is drawn: on this page, in
   the PDF and the Word file, and in Class view. Highlights and underlines go
   everywhere; margin notes are yours and stay on this page. Leave out takes words out of what
   the class sees, which shows […] in the exports and … in Class view, while the passage keeps
   its address and opens in the portal where it stands, whole; on this page they stay, struck
   through, to be put back.
   it.marks holds { id, k: 'hl' | 'ul' | 'mn' | 'cut', f: 'text' | 'en', q: the words, pre, post, note }. */
const marksOf = (it, f) => (it.marks || []).filter(m => m.f === f);
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// How many characters a and b share at their ends (or starts), spaces aside.
function common(a, b, atEnd) {
  a = a.replace(/\s+/g, ''); b = b.replace(/\s+/g, '');
  let n = 0;
  while (n < a.length && n < b.length && (atEnd ? a[a.length - 1 - n] === b[b.length - 1 - n] : a[n] === b[n])) n++;
  return n;
}
// Where mark m's words are in the text s, as [start, end], or null: of several places with the
// same words, the one whose surroundings match best.
function findMark(s, m) {
  const words = String(m.q || '').trim().split(/\s+/).filter(Boolean);
  if (!words.length) return null;
  const re = new RegExp(words.map(reEsc).join('\\s+'), 'g');
  let best = null, score = -1, x;
  while ((x = re.exec(s))) {
    const e = x.index + x[0].length;
    const sc = common(s.slice(Math.max(0, x.index - 40), x.index), m.pre || '', true) + common(s.slice(e, e + 40), m.post || '', false);
    if (sc > score) { score = sc; best = [x.index, e]; }
  }
  return best;
}
const MK = { hl: ['mark', 'mk-hl'], ul: ['u', 'mk-ul'], mn: ['span', 'mk-mn'], cut: ['span', 'mk-cut'] };
// Paint marks ms onto the words of el, wrapping each stretch of text they cover (a joined
// passage's citation markers are left alone). Returns the marks whose words were not found.
function paintMarks(el, ms) {
  const lost = [];
  ms.forEach(m => {
    const r = findMark(el.textContent, m);
    if (!r) { lost.push(m); return; }
    const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), hit = [];
    let pos = 0;
    for (let n; (n = walk.nextNode());) {
      const a = pos, b = pos + n.length;
      pos = b;
      if (b > r[0] && a < r[1] && !n.parentElement.closest('.hpart, .vpart')) hit.push([n, Math.max(0, r[0] - a), Math.min(n.length, r[1] - a)]);
    }
    hit.forEach(([n, s, e]) => {
      if (e < n.length) n.splitText(e);
      const mid = s ? n.splitText(s) : n, w = document.createElement(MK[m.k][0]);
      w.className = MK[m.k][1]; w.dataset.mk = m.id;
      if (m.approx) { w.classList.add('approx'); w.title = 'Left out to match the German, by about the same stretch: click to put it back'; }
      mid.parentNode.insertBefore(w, mid); w.appendChild(mid);
    });
  });
  return lost;
}
/* Leaving words out. A stretch selected is cut within each part of the passage it covers (a
   joined passage's citations stand between its parts), and joined to any cut it touches. A cut
   in the German takes the matching stretch of the English with it (matchStretch), and is
   marked paired; the English cut keeps the German's id (of), so that putting one back puts back
   both, and is marked approx where its ends were placed by position. A German cut made before
   this, or while the English was hidden or loading, is paired the next time its card is drawn. */
function segmentsOf(t) {   // the stretches of a card's text that are the passage's words, as plainOf counts them
  const out = [], walk = document.createTreeWalker(t, NodeFilter.SHOW_TEXT);
  let pos = 0, a = 0;
  for (let n; (n = walk.nextNode());) {
    if (n.parentElement.closest('.mk-n')) continue;
    if (n.parentElement.closest('.hpart')) { if (pos > a) out.push([a, pos]); a = pos + n.length; }
    pos += n.length;
  }
  if (pos > a) out.push([a, pos]);
  return out;
}
const trimRange = (t, s, e) => { while (s < e && /\s/.test(t[s])) s++; while (e > s && /\s/.test(t[e - 1])) e--; return e > s ? [s, e] : null; };
// A cut, joined to any it touches in the same field; returns it. A cut joined from approximate ones stays approximate.
function addCut(it, f, t, s, e) {
  const keep = [];
  let approx = false;
  (it.marks || []).forEach(m => {
    const r = m.k === 'cut' && m.f === f ? findMark(t, m) : null;
    if (r && (r[0] < e && r[1] > s || !t.slice(Math.min(r[1], e), Math.max(r[0], s)).trim())) { s = Math.min(s, r[0]); e = Math.max(e, r[1]); approx = approx || !!m.approx; }
    else keep.push(m);
  });
  const m = { id: uid(), k: 'cut', f, q: t.slice(s, e), pre: t.slice(Math.max(0, s - 30), s), post: t.slice(e, e + 30) };
  if (approx) m.approx = true;
  keep.push(m);
  it.marks = keep;
  return m;
}
/* The stretch of the English answering to [s, e] of the German: { a, b, approx }, or null. The
   translations keep the German's sentences and its clauses whole and in order, so both texts are
   cut into pieces, at a clause's end (. ; : ? ! and a space) or, where those do not agree in
   number, at a sentence's, and a cut that begins or ends at a piece's edge begins or ends at the
   same piece's edge in the English. An end inside a piece, or a text whose pieces agree at
   neither level, is placed by position, to the nearest whole word, and the stretch is approx. */
const CLAUSE_END = /[.?!:;](?=\s)/g;
function piecesOf(t, re) {
  const out = [];
  let s = 0, m;
  re.lastIndex = 0;
  while (/\s/.test(t[s] || '')) s++;
  while ((m = re.exec(t))) { out.push([s, m.index + 1]); s = m.index + 1; while (/\s/.test(t[s] || '')) s++; }
  if (s < t.length) out.push([s, t.length]);
  return out;
}
function matchStretch(de, en, s, e) {
  const lv = [CLAUSE_END, SENT_END].map(re => [piecesOf(de, re), piecesOf(en, re)]).find(([D, E]) => D.length > 1 && D.length === E.length)
    || [[[0, de.length]], [[0, en.length]]];
  const [D, E] = lv;
  let approx = false;
  const word = (y, lo, hi) => {   // the nearest place between two words
    for (let d = 0; d < 60; d++) for (const z of [y - d, y + d]) if (z >= lo && z <= hi && (z === lo || z === hi || (/\s/.test(en[z - 1]) !== /\s/.test(en[z])))) return z;
    return y;
  };
  const end = (x, last) => {
    let k = D.findIndex(d => last ? d[1] >= x - 2 : d[1] > x + 2);
    if (k < 0) k = D.length - 1;
    const [d0, d1] = D[k], [e0, e1] = E[k];
    if (last ? x >= d1 - 2 : x <= d0 + 2) return last ? e1 : e0;
    approx = true;
    return word(Math.round(e0 + (x - d0) / Math.max(1, d1 - d0) * (e1 - e0)), e0, e1);
  };
  const r = trimRange(en, end(s, false), end(e, true));
  return r ? { a: r[0], b: r[1], approx } : null;
}
// The English as drawn, *italic* and **bold** given as their words
const asDrawn = t => String(t || '').replace(/\*\*([^*\n]+)\*\*/g, '$1').replace(/\*([^*\n]+)\*/g, '$1');
// Take out of the English the stretch matching German cut gm, at [s, e] of the German de. In a
// joined passage, segs are its parts' stretches of de, and each part's German is matched with
// that part's own English, so that the citations between do not throw the match out.
function followCut(it, gm, de, en, s, e, segs) {
  gm.paired = true;
  if (it.kind === 'excerpt' && !it.enSnippet) return null;   // its English is the whole passage's
  let D = de, E = en, off = 0, offE = 0;
  if (it.parts && segs && segs.length === it.parts.length) {
    let from = 0;
    const spans = it.parts.map(q => { const t = asDrawn(q.en), i = t ? en.indexOf(t, from) : -1; if (i >= 0) from = i + t.length; return [i, t.length]; });
    const k = segs.findIndex(([a, b]) => s >= a && s < b);
    if (k >= 0 && spans.every(([i]) => i >= 0)) { off = segs[k][0]; D = de.slice(off, segs[k][1]); offE = spans[k][0]; E = en.substr(offE, spans[k][1]); }
  }
  const r = matchStretch(D, E, s - off, Math.min(e, off + D.length) - off);
  if (!r) return null;
  const m = addCut(it, 'en', en, r.a + offE, r.b + offE);
  m.of = gm.id;
  if (r.approx) m.approx = true;
  return { approx: !!m.approx };
}
// The German cuts on the cards drawn whose English has not followed yet: it follows now.
function pairCuts(h) {
  let changed = false;
  page.querySelectorAll('.hwrap .hcard[data-id]').forEach(c => {
    const it = itemById(h, c.dataset.id), de = c.querySelector('[data-mf="text"]'), en = c.querySelector('[data-mf="en"]');
    const todo = it && de && en && isPass(it) ? (it.marks || []).filter(m => m.k === 'cut' && m.f === 'text' && !m.paired) : [];
    if (!todo.length) return;
    const dp = plainOf(de), ep = plainOf(en), segs = segmentsOf(de);
    todo.forEach(m => { const r = findMark(dp, m); if (r) followCut(it, m, dp, ep, r[0], r[1], segs); else m.paired = true; });
    changed = true;
  });
  return changed;
}
function leaveOut(it, p, undo) {
  const t = p.c.querySelector('[data-mf="' + p.f + '"]');
  const made = segmentsOf(t).map(([a, b]) => trimRange(p.plain, Math.max(a, p.s), Math.min(b, p.e))).filter(Boolean).map(([s, e]) => addCut(it, p.f, p.plain, s, e));
  let said = '';
  const en = p.f === 'text' && p.c.querySelector('[data-mf="en"]');
  if (en) {
    const ep = plainOf(en), segs = segmentsOf(t);
    let any = false, approx = false;
    made.forEach(m => { const r = findMark(p.plain, m), x = r && followCut(it, m, p.plain, ep, r[0], r[1], segs); if (x) { any = true; approx = approx || x.approx; } });
    said = !any ? '. The English beside it could not be matched: select its words there and press Leave out'
      : approx ? ', with about the same stretch of the English (struck through with a dashed line: look it over)' : ', with the same words of the English';
  }
  save(); render();
  toast('Left out' + said + '. Students see […] in its place.', [['Undo', undo]]);
}
// What students see, and the PDF: each stretch left out gives way to […], once for each run of
// its words (a joined passage's citations, which stand between, stay).
function collapseCuts(el, mark) {
  const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), ns = [];
  for (let n; (n = walk.nextNode());) ns.push(n);
  let prev = null;
  ns.forEach(n => {
    const c = n.parentElement.closest('.mk-cut'), id = c ? c.dataset.mk : null;
    if (!id) { if (n.data.trim()) prev = null; return; }
    n.data = prev === id ? '' : (mark || '[…]');
    prev = id;
  });
}
// A text with the stretches left out of it as […], for the Word file and the Handout tool's text.
function cutOut(s, ms) {
  s = String(s || '');
  // found in the words as they read, the English's *italic* and **bold** marks aside, and cut with them
  let plain = '';
  const map = [], bare = t => String(t || '').replace(/\*+/g, '');
  for (let i = 0; i < s.length; i++) if (s[i] !== '*') { map.push(i); plain += s[i]; }
  const rs = (ms || []).filter(m => m.k === 'cut').map(m => findMark(plain, Object.assign({}, m, { q: bare(m.q), pre: bare(m.pre), post: bare(m.post) }))).filter(Boolean)
    .map(([a, b]) => { let x = map[a], y = map[b - 1] + 1; while (x > 0 && s[x - 1] === '*') x--; while (y < s.length && s[y] === '*') y++; return [x, y]; })
    .sort((a, b) => a[0] - b[0]);
  let out = '', at = 0;
  rs.forEach(([a, b]) => { if (a < at) { at = Math.max(at, b); return; } out += s.slice(at, a) + '[…]'; at = b; });
  return out + s.slice(at);
}
function itemById(h, id) {
  for (const x of h.items) {
    if (x.id === id) return x;
    if (x.kind === 'note') { const y = kids(x).find(z => z.id === id); if (y) return y; }
  }
  return null;
}
// A passage card's marks, painted, and its margin notes beside them, numbered in reading order.
function paintCard(c) {
  const it = itemById(cur(), c.dataset.id);
  if (!it || !isPass(it) || !(it.marks || []).length) return;
  const lost = [];
  c.querySelectorAll('[data-mf]').forEach(t => lost.push(...paintMarks(t, marksOf(it, t.dataset.mf))));
  const mns = [...c.querySelectorAll('.mk-mn')].map(x => x.dataset.mk).filter((id, j, a) => a.indexOf(id) === j);
  const ms = mns.map(id => it.marks.find(m => m.id === id)).concat(lost.filter(m => m.k === 'mn'));
  if (!ms.length) return;
  ms.forEach((m, j) => {
    const ws = c.querySelectorAll('[data-mk="' + m.id + '"]'), last = ws[ws.length - 1];
    if (last) { const n = el('sup', null, 'mk-n'); n.textContent = j + 1; n.dataset.mk = m.id; last.after(n); }
  });
  const mg = el('div', null, 'hmargin');
  mg.innerHTML = ms.map((m, j) => '<div class="hmn" data-mn="' + esc(m.id) + '"><span class="n">' + (j + 1) + '</span>' +
    '<button type="button" class="x" data-mkx="' + esc(m.id) + '" title="Remove this margin note">✕</button>' +
    (lost.includes(m) ? '<span class="lost">on “' + esc(clip(flat(m.q), 40)) + '”, no longer found in the text</span>' : '') +
    '<textarea data-mnt="' + esc(m.id) + '" rows="1" placeholder="Your note…" spellcheck="false">' + esc(m.note || '') + '</textarea></div>').join('');
  c.classList.add('has-mn');
  c.appendChild(mg);
  mg.querySelectorAll('textarea').forEach(fit);
  placeMargin(c);
}
const fit = t => { t.style.height = 'auto'; t.style.height = Math.max(22, t.scrollHeight + 2) + 'px'; };
// Margin notes sit level with their words in a column on the right, or below the text when the
// card is too narrow for one (as when the handout is side by side with the portal).
function placeMargin(c) {
  const mg = c.querySelector(':scope > .hmargin');
  if (!mg) return;
  const wide = c.clientWidth >= 600;
  c.classList.toggle('mn-wide', wide);
  c.style.minHeight = '';
  const ns = [...mg.querySelectorAll('.hmn')];
  if (!wide) { ns.forEach(x => { x.style.top = ''; }); return; }
  const top = c.getBoundingClientRect().top;
  let y = 0;
  ns.forEach(x => {
    const a = c.querySelector('[data-mk="' + x.dataset.mn + '"]'), t = Math.max(a ? a.getBoundingClientRect().top - top - 3 : y, y);
    x.style.top = t + 'px';
    y = t + x.offsetHeight + 8;
  });
  if (y > c.offsetHeight) c.style.minHeight = y + 'px';
}
function paintAll() {
  page.querySelectorAll('.hwrap .hcard[data-id]').forEach(paintCard);
  requestAnimationFrame(() => page.querySelectorAll('.hcard.has-mn').forEach(placeMargin));   // once the page has its final layout
}
new ResizeObserver(() => { if (!page.hidden) page.querySelectorAll('.hcard.has-mn').forEach(placeMargin); }).observe(page.querySelector('main'));

// The words selected within one passage's text on this page: the card, the field, and the words
// with a little on either side; null when the selection is not that.
const plainOf = (root, node, off) => {
  const r = document.createRange();
  r.setStart(root, 0);
  if (node) r.setEnd(node, off); else r.setEnd(root, root.childNodes.length);
  const f = r.cloneContents();
  f.querySelectorAll('.mk-n').forEach(x => x.remove());
  return f.textContent;
};
function picked() {
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount || sel.isCollapsed) return null;
  const r = sel.getRangeAt(0), a = nodeEl(r.startContainer), b = nodeEl(r.endContainer);
  const t = a && a.closest('#hpage [data-mf]');
  if (!t || !b || t !== b.closest('[data-mf]')) return null;
  const plain = plainOf(t);
  let s = plainOf(t, r.startContainer, r.startOffset).length, e = plainOf(t, r.endContainer, r.endOffset).length;
  while (s < e && /\s/.test(plain[s])) s++;
  while (e > s && /\s/.test(plain[e - 1])) e--;
  if (e - s < 1) return null;
  const letter = ch => !!ch && /[\p{L}\p{N}ſ]/u.test(ch);   // whole words, as a word processor takes them
  while (s > 0 && letter(plain[s - 1]) && letter(plain[s])) s--;
  while (e < plain.length && letter(plain[e - 1]) && letter(plain[e])) e++;
  const c = t.closest('.hcard');
  return { c, id: c.dataset.id, f: t.dataset.mf, s, e, plain, q: plain.slice(s, e), pre: plain.slice(Math.max(0, s - 30), s), post: plain.slice(e, e + 30) };
}
const mkbar = el('div', 'hmkbar');
mkbar.hidden = true;
page.appendChild(mkbar);
let mkFor = null;   // what the bar acts on: a selection (picked()) or { id, mk } for a mark clicked
function showBar(rect, html) {
  mkbar.innerHTML = html;
  mkbar.hidden = false;
  let top = rect.bottom + 8;
  if (top > window.innerHeight - 44) top = Math.max(8, rect.top - 44);
  mkbar.style.top = top + 'px';
  mkbar.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - mkbar.offsetWidth - 10)) + 'px';
}
page.addEventListener('mouseup', e => {
  if (e.target.closest('#hmkbar') || locked()) return;
  setTimeout(() => {
    const p = picked();
    if (p) {
      const it = itemById(cur(), p.id), over = marksOf(it, p.f).filter(m => { const r = findMark(p.plain, m); return r && r[0] < p.e && r[1] > p.s; });
      mkFor = p;
      showBar(window.getSelection().getRangeAt(0).getBoundingClientRect(),
        '<button type="button" data-mk="hl"><mark class="mk-hl">Highlight</mark></button>' +
        '<button type="button" data-mk="ul"><u class="mk-ul">Underline</u></button>' +
        '<button type="button" data-mk="mn">✎ Margin note</button>' +
        '<button type="button" data-mk="cut" title="Leave these words out of what students see: […] stands in their place, and the passage still opens where it stands in the portal">✂ Leave out</button>' +
        (over.length ? '<button type="button" data-mk="clear" title="Take the highlights, underlines and margin notes off these words, and put back what was left out of them">Remove marks</button>' : ''));
      return;
    }
    const w = window.getSelection().isCollapsed && e.target.closest && e.target.closest((classView ? '' : '#hpage .mk-cut, ') + '#hpage .mk-hl, #hpage .mk-ul');
    if (w) {
      mkFor = { id: w.closest('.hcard').dataset.id, mk: w.dataset.mk };
      showBar(w.getBoundingClientRect(), '<button type="button" data-mk="rm">' + (w.classList.contains('mk-cut') ? 'Put these words back' : 'Remove ' + (w.classList.contains('mk-hl') ? 'highlight' : 'underline')) + '</button>');
      return;
    }
    mkbar.hidden = true;
  }, 0);
});
mkbar.addEventListener('mousedown', e => e.preventDefault());   // keep the selection
mkbar.addEventListener('click', e => {
  e.stopPropagation();
  const b = e.target.closest('[data-mk]'), p = mkFor;
  mkbar.hidden = true;
  if (!b || !p) return;
  const h = cur(), it = touch(itemById(h, p.id));
  if (!it) return;
  const before = JSON.stringify(it.marks || []), undo = () => { it.marks = JSON.parse(before); touch(it); save(); render(); };
  const ms = it.marks || (it.marks = []), k = b.dataset.mk;
  window.getSelection().removeAllRanges();
  if (k === 'rm') {   // a German cut takes the English that followed it back with it
    const gone = ms.find(m => m.id === p.mk), cut = !!gone && gone.k === 'cut';
    const pair = cut && gone.f === 'text' ? ms.filter(m => m.k === 'cut' && m.of === gone.id) : [];
    it.marks = ms.filter(m => m !== gone && !pair.includes(m)); save(); render();
    toast(!cut ? 'Mark removed.' : 'Put back' + (pair.length ? ', with its English.' : '.'), [['Undo', undo]]);
    return;
  }
  if (k === 'cut') { leaveOut(it, p, undo); return; }
  if (k === 'clear') {
    const off = ms.filter(m => { if (m.f !== p.f) return false; const r = findMark(p.plain, m); return !!(r && r[0] < p.e && r[1] > p.s); });
    it.marks = ms.filter(m => !off.includes(m) && !(m.of && off.some(x => x.id === m.of)));   // and the English that followed a German cut
    save(); render(); toast('Marks removed from those words.', [['Undo', undo]]);
    return;
  }
  const m = { id: uid(), k, f: p.f, q: p.q, pre: p.pre, post: p.post };
  if (k === 'mn') m.note = '';
  ms.push(m);
  save(); render();
  if (k === 'mn') { const t = page.querySelector('.hcard[data-id="' + it.id + '"] [data-mnt="' + m.id + '"]'); if (t) t.focus(); }
});
document.addEventListener('mousedown', e => { if (!mkbar.hidden && !e.target.closest('#hmkbar')) mkbar.hidden = true; });
page.querySelector('main').addEventListener('scroll', () => { mkbar.hidden = true; });
// Margin notes: typed into, kept as typed; one left empty goes when you leave it; ✕ takes one off.
const markAt = t => { const c = t.closest('.hcard'), it = c && touch(itemById(cur(), c.dataset.id)); return it ? { c, it, m: (it.marks || []).find(m => m.id === (t.dataset.mnt || t.dataset.mkx)) } : null; };
page.addEventListener('input', e => {
  if (!e.target.dataset || !e.target.dataset.mnt) return;
  const a = markAt(e.target);
  if (!a || !a.m) return;
  a.m.note = e.target.value;
  fit(e.target); placeMargin(a.c); save();
});
page.addEventListener('focusout', e => {
  if (!e.target.dataset || !e.target.dataset.mnt || e.target.value.trim()) return;
  const a = markAt(e.target);
  if (!a || !a.m) return;
  setTimeout(() => { if (a.m.note && a.m.note.trim()) return; a.it.marks = a.it.marks.filter(m => m !== a.m); touch(a.it); save(); render(); }, 150);
});
page.addEventListener('click', e => {
  const x = e.target.closest('[data-mkx]');
  if (x) {
    const a = markAt(x);
    if (!a || !a.m) return;
    const before = JSON.stringify(a.it.marks);
    a.it.marks = a.it.marks.filter(m => m !== a.m); save(); render();
    toast('Margin note removed.', [['Undo', () => { a.it.marks = JSON.parse(before); touch(a.it); save(); render(); }]]);
    return;
  }
  const w = e.target.closest('#hpage .mk-mn, #hpage .mk-n');   // its words, or its number: to the note
  if (w && window.getSelection().isCollapsed) { const t = w.closest('.hcard').querySelector('[data-mnt="' + w.dataset.mk + '"]'); if (t) t.focus(); }
});

/* What Class view lets a click do: read, fold, open where it stands, export, and switch views. */
const RO_OK = new Set(['close', 'dock', 'classview', 'instructorview', 'lock', 'go', 'gopart', 'fold', 'foldall', 'foldnotes', 'unfoldall', 'docx', 'pdf', 'txt', 'save']);
const ready = () => new Promise(res => { const t = () => ($('loading') && !$('loading').hidden ? setTimeout(t, 250) : res()); t(); });

/* ── Exports ─────────────────────────────────────────────────────────────── */
const fileName = (h, ext) => (h.name || 'Handout').replace(/[\\/:*?"<>|]+/g, '-').trim() + '.' + ext;
function download(blob, name) {
  const a = el('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  toast('Saved “' + name + '” to your Downloads folder.');
}
const citeLine = it => it.work + ', ' + it.cite + (adickesOf(it) ? ' · ' + adickesOf(it) : '') + (it.from === 'english' ? '; English: machine translation' : '');

/* The Handout tool's markup (FORMAT.md in the Handout tool): a title, # headings, a note as
   its paragraphs, and each passage as  > Author: "words" (work, cite), its label in italics
   above it. Passages under a note are nested under it, two spaces in. A %% line, which the
   tool does not print, keeps each passage's portal address. */
// Underlined words as the tool's __underline__ (its yellow, !!…!!, means something to check,
// so highlights are left out here).
function underlined(s, ms) {
  const rs = ms.filter(m => m.k === 'ul').map(m => findMark(s, m)).filter(Boolean).sort((a, b) => b[0] - a[0]);
  let last = Infinity;
  rs.forEach(([a, b]) => { if (b > last) return; s = s.slice(0, a) + '__' + s.slice(a, b) + '__' + s.slice(b); last = a; });
  return s;
}
function toText(h) {
  const L = ['Title: ' + flat(h.name), '%% From the Logic Portal, ' + today() + '. The %% line under each passage is its address in the portal.', ''];
  // A blank line before each passage and before its note, so that the label and the note
  // stay paragraphs of their own (the tool runs a plain line on into the one above it).
  const pass = (it, ind) => {
    if (L[L.length - 1] !== '') L.push('');
    if (flat(it.label)) L.push(ind + '*' + flat(it.label).replace(/\*/g, '') + '*');
    L.push(ind + '> ' + it.author + ': "' + underlined(flat(cutOut(it.text, marksOf(it, 'text'))), marksOf(it, 'text')) + '" (' + citeLine(it) + ')');
    if (enShown(h, it)) L.push(ind + '> "' + underlined(flat(cutOut(it.en, marksOf(it, 'en'))), marksOf(it, 'en')) + '" (English: machine translation' + (it.kind === 'excerpt' && !it.enSnippet ? ', of the whole passage' : it.enApprox ? ', approximate' : '') + ')');
    L.push(ind + '%% ' + SITE + '#p=' + encodeURIComponent(it.ref));
    if (flat(it.note)) L.push('', ind + flat(it.note));
  };
  h.items.forEach(it => {
    if (it.kind === 'heading') { if (flat(it.text)) L.push('# ' + flat(it.text), ''); return; }
    if (it.kind === 'note') {
      if (flat(it.title)) L.push('### ' + flat(it.title), '');   // the Handout tool's third-level heading: in italics, no number
      const ps = paras(it.text);
      (ps.length ? ps : ['']).forEach((t, j) => { if (j) L.push(''); L.push(t); });
      kids(it).forEach(x => pass(x, '  '));
      L.push('');
      return;
    }
    pass(it, '');
    L.push('');
  });
  return L.join('\n');
}

/* PDF: the browser's Print window, showing only the handout. */
function exportPdf(h) {
  let box = $('hprint');
  if (!box) { box = el('div', 'hprint'); document.body.appendChild(box); }
  const its = [];   // each passage, for its highlights and underlines once drawn
  const pass = it => '<div class="item">' + (flat(it.label) ? '<div class="lab">' + esc(it.label) + '</div>' : '') +
    '<div class="q" data-pi="' + (its.push(it) - 1) + '" data-mf="text">' + (it.from === 'english' ? rich(it.text) : esc(it.text)) + '</div>' +
    (enShown(h, it) ? '<div class="en" data-pi="' + (its.length - 1) + '" data-mf="en">' + rich(it.en) + '</div>' : '') +
    '<div class="c">' + esc(it.author) + ', <i>' + esc(it.work) + '</i>, ' + esc(it.cite) + (adickesOf(it) ? ' · ' + esc(adickesOf(it)) : '') +
    (it.from === 'english' || enShown(h, it) ? ' · English: machine translation' : '') + '</div>' +
    (flat(it.note) ? '<p class="pn">' + esc(it.note) + '</p>' : '') + '</div>';
  box.innerHTML = '<h1>' + esc(h.name) + '</h1>' + h.items.map(it => {
    if (it.kind === 'heading') return flat(it.text) ? '<h2>' + esc(it.text) + '</h2>' : '';
    if (it.kind === 'note') return '<div class="note">' + (flat(it.title) ? '<h3>' + esc(it.title) + '</h3>' : '') + paras(it.text).map(t => '<p>' + esc(t) + '</p>').join('') + '</div>' + kids(it).map(pass).join('');
    return pass(it);
  }).join('');
  box.querySelectorAll('[data-pi]').forEach(x => { paintMarks(x, marksOf(its[+x.dataset.pi], x.dataset.mf).filter(m => m.k !== 'mn')); collapseCuts(x); });
  const title = document.title;
  document.title = h.name;
  const done = () => { document.title = title; box.innerHTML = ''; window.removeEventListener('afterprint', done); };
  window.addEventListener('afterprint', done);
  window.print();
}

/* Word: a .docx written here, with no library. Every paragraph names a style, and Normal is
   the default style, so that Pages does not carry one paragraph's look into the next. */
const xml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// The pieces of s with their own look: *italic* and **bold** (in the English) become real
// italics and bold.
function pieces(s, marks, base) {
  const re = marks ? /(\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g : null, out = [];
  (re ? String(s).split(re) : [String(s)]).forEach(part => {
    if (!part) return;
    if (re && /^\*\*[^*]+\*\*$/.test(part)) out.push([part.slice(2, -2), (base || '') + '<w:b/>']);
    else if (re && /^\*[^*]+\*$/.test(part)) out.push([part.slice(1, -1), (base || '') + '<w:i/>']);
    else out.push([part, base || '']);
  });
  return out;
}
const runOf = (t, pr) => t.split('\n').map((line, j) => '<w:r>' + (pr ? '<w:rPr>' + pr + '</w:rPr>' : '') + (j ? '<w:br/>' : '') + '<w:t xml:space="preserve">' + xml(line) + '</w:t></w:r>').join('');
const runs = (s, marks, base) => pieces(s, marks, base).map(([t, pr]) => runOf(t, pr)).join('');
// The same, with a passage's highlights and underlines (ms) on the words they mark.
function markedRuns(s, marks, ms) {
  const ps = pieces(s, marks), plain = ps.map(x => x[0]).join(''), spans = [];
  ms.filter(m => m.k !== 'mn').forEach(m => { const r = findMark(plain, m); if (r) spans.push([r[0], r[1], m.k]); });
  if (!spans.length) return ps.map(([t, pr]) => runOf(t, pr)).join('');
  const out = [];
  let at = 0;
  ps.forEach(([t, pr]) => {
    const cuts = [...new Set([0, t.length].concat(...spans.map(([a, b]) => [a - at, b - at])))].filter(x => x >= 0 && x <= t.length).sort((x, y) => x - y);
    for (let j = 1; j < cuts.length; j++) {
      const a = at + cuts[j - 1], on = k => spans.some(([x, y, kk]) => kk === k && x <= a && a < y);
      out.push(runOf(t.slice(cuts[j - 1], cuts[j]), pr + (on('hl') ? '<w:highlight w:val="yellow"/>' : '') + (on('ul') ? '<w:u w:val="single"/>' : '')));
    }
    at += t.length;
  });
  return out.join('');
}
const para = (style, body) => '<w:p><w:pPr><w:pStyle w:val="' + style + '"/></w:pPr>' + body + '</w:p>';
const exportDocx = h => download(docxBlob(h), fileName(h, 'docx'));
function docxBlob(h) {
  const B = [para('Title', runs(h.name))];
  const pass = it => {
    if (flat(it.label)) B.push(para('Label', runs(flat(it.label))));
    if (it.parts) paras(cutOut(it.text, marksOf(it, 'text'))).forEach(t => B.push(para('Passage', markedRuns(t, false, marksOf(it, 'text')))));   // a joined passage, part by part
    else B.push(para('Passage', markedRuns(cutOut(it.text, marksOf(it, 'text')), it.from === 'english', marksOf(it, 'text'))));
    if (enShown(h, it)) B.push(para('PassageEnglish', markedRuns(cutOut(it.en, marksOf(it, 'en')), true, marksOf(it, 'en'))));
    B.push(para('Citation', runs(it.author + ', ') + runs(it.work, false, '<w:i/>') + runs(', ' + it.cite + (adickesOf(it) ? ' · ' + adickesOf(it) : '') +
      (it.from === 'english' || enShown(h, it) ? ' · English: machine translation' : ''))));
    paras(it.note).forEach(n => B.push(para('PassageNote', runs(n))));
  };
  h.items.forEach(it => {
    if (it.kind === 'heading') { if (flat(it.text)) B.push(para('Heading1', runs(flat(it.text)))); return; }
    if (it.kind === 'note') { if (flat(it.title)) B.push(para('NoteTitle', runs(flat(it.title)))); paras(it.text).forEach(t => B.push(para('Note', runs(t)))); kids(it).forEach(pass); return; }
    pass(it);
  });
  const W = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
  const font = '<w:rFonts w:ascii="Hoefler Text" w:hAnsi="Hoefler Text" w:cs="Hoefler Text" w:eastAsia="Hoefler Text"/>';
  const style = (id, name, ppr, rpr) => '<w:style w:type="paragraph" w:styleId="' + id + '"><w:name w:val="' + name + '"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/>' +
    (ppr ? '<w:pPr>' + ppr + '</w:pPr>' : '') + (rpr ? '<w:rPr>' + rpr + '</w:rPr>' : '') + '</w:style>';
  const styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles ' + W + '>' +
    '<w:docDefaults><w:rPrDefault><w:rPr>' + font + '<w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="en-US"/></w:rPr></w:rPrDefault>' +
    '<w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>' +
    '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:rPr>' + font + '<w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:style>' +
    style('Title', 'Title', '<w:jc w:val="center"/><w:spacing w:after="320"/>', '<w:b/><w:sz w:val="34"/><w:szCs w:val="34"/>') +
    style('Heading1', 'heading 1', '<w:keepNext/><w:spacing w:before="320" w:after="140"/><w:outlineLvl w:val="0"/>', '<w:b/><w:sz w:val="26"/><w:szCs w:val="26"/>') +
    style('NoteTitle', 'Note Title', '<w:keepNext/><w:spacing w:before="240" w:after="60"/>', '<w:b/><w:i/>') +
    style('Note', 'Note', '<w:keepNext/><w:spacing w:before="200" w:after="100"/>', '') +
    style('Label', 'Passage Label', '<w:keepNext/><w:ind w:left="567" w:right="567"/><w:spacing w:before="120" w:after="40"/>', '<w:i/>') +
    style('Passage', 'Passage', '<w:keepNext/><w:ind w:left="567" w:right="567"/><w:spacing w:after="60"/>', '') +
    style('PassageEnglish', 'Passage English', '<w:keepNext/><w:ind w:left="567" w:right="567"/><w:spacing w:before="60" w:after="60"/>', '<w:color w:val="333333"/><w:sz w:val="21"/><w:szCs w:val="21"/>') +
    style('Citation', 'Citation', '<w:ind w:left="567" w:right="567"/><w:spacing w:after="200"/>', '<w:color w:val="555555"/><w:sz w:val="19"/><w:szCs w:val="19"/>') +
    style('PassageNote', 'Passage Note', '<w:ind w:left="567" w:right="567"/><w:spacing w:after="200"/>', '') +
    '</w:styles>';
  const doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ' + W + '><w:body>' + B.join('') +
    '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr></w:body></w:document>';
  const files = [
    ['[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
      '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'],
    ['_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'],
    ['word/_rels/document.xml.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'],
    ['word/document.xml', doc],
    ['word/styles.xml', styles],
  ];
  return zip(files, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
}

/* A .zip with every file stored uncompressed: all a .docx needs. */
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(b) { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function zip(files, type) {
  const enc = new TextEncoder(), parts = [], dir = [];
  let off = 0;
  files.forEach(([name, text]) => {
    const nb = enc.encode(name), db = enc.encode(text), c = crc32(db);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
    lh.setUint16(10, 0, true); lh.setUint16(12, 0x21, true); lh.setUint32(14, c, true); lh.setUint32(18, db.length, true);
    lh.setUint32(22, db.length, true); lh.setUint16(26, nb.length, true); lh.setUint16(28, 0, true);
    parts.push(new Uint8Array(lh.buffer), nb, db);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true);
    ch.setUint16(10, 0, true); ch.setUint16(12, 0, true); ch.setUint16(14, 0x21, true); ch.setUint32(16, c, true);
    ch.setUint32(20, db.length, true); ch.setUint32(24, db.length, true); ch.setUint16(28, nb.length, true);
    ch.setUint16(30, 0, true); ch.setUint16(32, 0, true); ch.setUint16(34, 0, true); ch.setUint16(36, 0, true);
    ch.setUint32(38, 0, true); ch.setUint32(42, off, true);
    dir.push(new Uint8Array(ch.buffer), nb);
    off += 30 + nb.length + db.length;
  });
  const size = dir.reduce((a, b) => a + b.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
  end.setUint32(12, size, true); end.setUint32(16, off, true);
  return new Blob([...parts, ...dir, new Uint8Array(end.buffer)], { type });
}

/* For checking from the console, as window.PORTAL is for the portal. */
window.HANDOUTS = { get db() { return DB; }, toText: () => toText(cur()), docx: () => docxBlob(cur()), open: openPage };

document.body.classList.toggle('hmode', mode);
document.body.classList.toggle('hclassview', classView);
document.body.classList.toggle('hnomenu', !$('moremenu'));
if (LOCK) LOCK.remembered().then(k => { if (k && modeWas) setMode(true, true); });   // no Modes menu: the Handouts button is the switch
// The English that handouts' passages lack, fetched once the portal's texts are in: in the portal's
// own window, not in the copy of it the class screen reads from, so that two never write at once.
if (window === window.top && DB.handouts.some(h => enMode(h) && passagesOf(h).some(x => enWanted(h, x) && !x.en))) ready().then(fillSoon);
marks();
})();
