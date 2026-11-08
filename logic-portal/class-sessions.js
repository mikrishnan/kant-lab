/* Class sessions and investigations, for the Logic Portal.

   A session is the record of one class: the passages the class looked at, in order, with the
   notes and questions it came up with. An investigation is a question the class wants to look
   into, with the passages and notes that bear on it, bundled together. It outlives the session
   that started it: a later session can add to it, and its page gathers everything every session
   gave it, by date.

   In class, the header's Session button opens a small capture panel at the bottom right. With
   recording on, + Session on a search hit, a paragraph of a full text, or the passage open on
   the right adds it to the session; + Note adds a note or a question. "Organize and save" opens
   the session page, as the Handouts page opens over the portal. There the items are ticked and
   bundled into investigations, new ones or ones begun in earlier sessions; there are notes on
   passages, links to the class's discussions in Canvas, Copy for Canvas, Export to Word (also in
   the panel), and Save for the class. Each passage there folds open (▸) to the whole text, and its
   citation, like each passage in the panel, links to it in the portal.

   Saving publishes the session as a file in sessions/, through GitHub's own new-file page, as
   handouts are published. Students then have, inside the portal, every passage drawn live:
     ?session=<name>          one session, numbered, with its investigations and its discussion
     ?investigation=<name>    one investigation, with what each session added to it
     ?investigate             every investigation, newest first
   and under Read, the sessions and investigations. Each page copies for Canvas, as rich text with
   citations and links back into the portal, for the class's forum. The portal keeps no comments
   and cannot post to Canvas, which would need a Canvas login: the site is public.

   A cluster is a named group of passages on one topic ("error"), kept to use again: it goes into
   any session as one item, and a session holds it by name, so a passage added to the cluster is in
   every session that has it. In the Session panel, "Add passages to" sends + Session to a cluster
   instead of the session; on the session page, ticked passages become a cluster, and the Clusters
   list puts one into the session. Clusters are saved for the class as files in clusters/.

   The class screen (teaching/class-screen/) shows a session on the room's screen, from this
   browser or a saved one; the panel and the session page open it in a window of its own.

   Until it is saved, a session is kept in this browser (localStorage), and so are its clusters.
   It reads the portal only through window.PORTAL. sessions/README.md gives a session file's
   shape, clusters/README.md a cluster's. */
(function () {
'use strict';
const PT = window.PORTAL;
if (!PT || !PT.P || !PT.TEXTS) return;
const { S, P, TEXTS } = PT;

const KEY = 'kantlab-session-draft-v2', OLD_KEY = 'kantlab-session-draft-v1', KNOWN_KEY = 'kantlab-investigations-known', CL_KEY = 'kantlab-clusters-v1';
const REPO = 'mikrishnan/kant-lab';
const DIR = 'logic-portal/sessions', CL_DIR = 'logic-portal/clusters';
const SCREEN = 'teaching/class-screen/index.html';
const SITE_DIR = (PT.SITE_PORTAL || 'https://mikrishnan.github.io/kant-lab/logic-portal/index.html').replace(/index\.html$/, '');

const $ = id => document.getElementById(id);
const el = (tag, id, cls) => { const x = document.createElement(tag); if (id) x.id = id; if (cls) x.className = cls; return x; };
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clip = (s, n) => s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + ' …' : s;
const flat = s => String(s || '').replace(/\s+/g, ' ').trim();
const rich = s => esc(s).replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>').replace(/\*([^*\n]+)\*/g, '<i>$1</i>');
const today = () => new Date().toISOString().slice(0, 10);
const longDate = iso => { const d = new Date(iso + 'T12:00:00'); return isNaN(d) ? iso : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); };
const slugOf = s => flat(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'session';
const authorOf = T => T.shape === 'meier' ? 'Meier' : T.shape === 'metaphysica' ? 'Baumgarten' : 'Kant';
const refOf = p => TEXTS[p.t].key + ':' + p.id;
const isNote = x => x.kind === 'note';
const isCluster = x => x.kind === 'cluster';
// A passage as an item: its address in the portal, and enough to cite it without the portal
const itemOf = p => { const T = TEXTS[p.t], author = authorOf(T); return { ref: refOf(p), cite: p.cite, author, work: T.title.replace(new RegExp('^' + author + ',\\s*'), '') }; };
const pOf = ref => { const q = PT.BYID ? PT.BYID.get(ref) : null; return q != null ? P[q] : null; };
const passageUrl = ref => (PT.SITE_PORTAL || SITE_DIR + 'index.html') + '#p=' + encodeURIComponent(ref) + '&rt=conn';
const citeOf = x => x.author + ', ' + x.work + ', ' + x.cite;
const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');

/* ── The session being recorded ─────────────────────────────────────────────
   { title, date, discussion, items: [{ id, kind, ref, cite, author, work, note } | { id, kind: 'note', text }],
     invs: [{ id, title, about, discussion, items: [item ids], cont }], saved, next }
   `cont` marks an investigation begun in an earlier session, which this one adds to. */
function blank() { return { title: 'Class, ' + longDate(today()), date: today(), discussion: '', items: [], invs: [], saved: null, next: 1 }; }
let D = (() => {
  try { const x = JSON.parse(localStorage.getItem(KEY) || 'null'); if (x && Array.isArray(x.items)) return x; } catch (e) { /* a new one */ }
  try {   // a session begun with the first version of the tool: its items, numbered
    const o = JSON.parse(localStorage.getItem(OLD_KEY) || 'null');
    if (o && Array.isArray(o.items)) { const d = Object.assign(blank(), { title: o.title, date: o.date, discussion: o.discussion || '' }); o.items.forEach(x => d.items.push(Object.assign({}, x, { id: 'i' + d.next++, q: undefined }))); return d; }
  } catch (e) { /* a new one */ }
  return blank();
})();
let rec = localStorage.getItem(KEY + '-rec') === 'on';
let open = false, pageOpen = false, picked = new Set(), newInv = false, newCl = '';   // newCl: where a cluster is being named, 'panel' or 'page'
const unfolded = new Set();   // passages shown whole, and clusters open, on the session page (the view only, not saved)
// what can fold on the session page: each passage, each cluster, and each passage in a cluster (as "<item id>|<ref>")
const foldKeys = () => [].concat(...D.items.filter(x => !isNote(x)).map(x => [x.id].concat(isCluster(x) ? cItems(x).map(y => x.id + '|' + y.ref) : [])));
const refOfKey = k => k.includes('|') ? k.slice(k.indexOf('|') + 1) : (itemById(k) || {}).ref;
function save() { try { localStorage.setItem(KEY, JSON.stringify(D)); } catch (e) { toast('This browser would not keep the session. Use Save to file.'); } }
function setRec(on) { rec = on; try { if (on) localStorage.setItem(KEY + '-rec', 'on'); else localStorage.removeItem(KEY + '-rec'); } catch (e) { /* this visit only */ } document.body.classList.toggle('csrec', on); redraw(); railLabel(); }
const itemById = id => D.items.find(x => x.id === id);
const numOf = id => D.items.findIndex(x => x.id === id) + 1;
const invsOf = id => D.invs.filter(v => v.items.includes(id));

/* ── Clusters: groups of passages, kept to use again ────────────────────────
   In this browser: { id: { id, title, items: [{ ref, cite, author, work, note, added }], made,
   saved: null | { at }, changed } }, `added` the day a passage went in. A session holds a cluster
   as { id, kind: 'cluster', cluster: <its id> }: by name, not a copy, so that a change to the
   cluster is a change in every session that has it. A saved session also keeps the passages its
   clusters had when it was saved, so that it reads whole before they are saved, and so that
   students can see what was added after the class. */
let CL = (() => { try { const x = JSON.parse(localStorage.getItem(CL_KEY) || 'null'); if (x && typeof x === 'object' && !Array.isArray(x)) return x; } catch (e) { /* none yet */ } return {}; })();
function saveCl() { try { localStorage.setItem(CL_KEY, JSON.stringify(CL)); } catch (e) { toast('This browser would not keep the cluster.'); } }
let PUBCL = null;   // the clusters saved for the class, from clusters/ (once a visit): id → cluster
const clOf = id => CL[id] || (PUBCL && PUBCL[id]) || null;
// A cluster's passages: in a session file, those it had (or, for students, has now); in this session, as it is now
const cItems = x => x.items || ((clOf(x.cluster) || {}).items) || [];
const clTitle = x => (x.items ? x.title : (clOf(x.cluster) || {}).title) || x.title || x.cluster;
const nPass = items => items.reduce((a, x) => a + (isNote(x) ? 0 : isCluster(x) ? cItems(x).length : 1), 0);
const clAll = () => { const m = Object.assign({}, PUBCL || {}, CL); return Object.values(m).sort((a, b) => a.title.localeCompare(b.title)); };
const clInSession = id => D.items.findIndex(x => isCluster(x) && x.cluster === id);
// a cluster saved from another browser becomes this browser's own before it is changed here
function own(id) { if (!CL[id] && PUBCL && PUBCL[id]) { CL[id] = JSON.parse(JSON.stringify(PUBCL[id])); CL[id].saved = { at: '0' }; CL[id].changed = null; saveCl(); } return CL[id]; }
function touched(c) { c.changed = new Date().toISOString(); saveCl(); }
const unsaved = c => !c.saved || (!!c.changed && c.changed > c.saved.at);
function newCluster(title, items) {
  const taken = new Set([...Object.keys(CL), ...Object.keys(PUBCL || {})]), base = slugOf(title).slice(0, 44);
  let id = base, n = 2;
  while (taken.has(id)) id = base + '-' + n++;
  CL[id] = { id, title: flat(title), items: items || [], made: today(), saved: null, changed: new Date().toISOString() };
  saveCl();
  return CL[id];
}
// Where + Session puts a passage: '' for the session, or the id of a cluster in this browser
let target = localStorage.getItem(KEY + '-to') || '';
if (!CL[target]) target = '';
function setTarget(id) {
  target = id && CL[id] ? id : '';
  try { if (target) localStorage.setItem(KEY + '-to', target); else localStorage.removeItem(KEY + '-to'); } catch (e) { /* this visit only */ }
  redraw(); railLabel(); placeHover();
}
const toName = () => target && CL[target] ? '❖ ' + clip(CL[target].title || 'the cluster', 22) : '';
const inSession = ref => D.items.find(x => x.ref === ref || (isCluster(x) && cItems(x).some(y => y.ref === ref)));
const has = i => { const ref = refOf(P[i]); return target && CL[target] ? CL[target].items.some(y => y.ref === ref) : !!inSession(ref); };
function add(i) {
  if (target && CL[target]) { addToCluster(CL[target], i); return; }
  const p = P[i], T = TEXTS[p.t], x0 = inSession(refOf(p));
  if (x0) { toast('Already in this session, ' + (isCluster(x0) ? 'in the cluster “' + clTitle(x0) + '”, item ' : 'as item ') + (D.items.indexOf(x0) + 1) + '.'); return; }
  D.items.push(Object.assign({ id: 'i' + D.next++, kind: 'passage' }, itemOf(p)));
  save(); redraw(); placeHover(); railLabel();
  toast('Item ' + D.items.length + ' of the session: ' + T.short + ', ' + p.cite, [['Undo', () => { const x = D.items.pop(); D.invs.forEach(v => { v.items = v.items.filter(id => id !== x.id); }); save(); redraw(); railLabel(); }]]);
}
function addToCluster(c, i) {
  const p = P[i], T = TEXTS[p.t], ref = refOf(p);
  if (c.items.some(y => y.ref === ref)) { toast('Already in the cluster “' + c.title + '”.'); return; }
  c.items.push(Object.assign(itemOf(p), { added: today() }));
  touched(c); redraw(); placeHover(); railLabel();
  toast('In the cluster “' + c.title + '”, now ' + plural(c.items.length, 'passage') + ': ' + T.short + ', ' + p.cite,
    [['Undo', () => { c.items = c.items.filter(y => y.ref !== ref); touched(c); redraw(); railLabel(); }]]);
}
function putCluster(id) {
  const c = clOf(id);
  if (!c) return;
  if (clInSession(id) >= 0) { toast('“' + c.title + '” is already item ' + (clInSession(id) + 1) + ' of this session.'); return; }
  D.items.push({ id: 'i' + D.next++, kind: 'cluster', cluster: id });
  save(); redraw(); railLabel();
  toast('Item ' + D.items.length + ' of the session: the cluster “' + c.title + '”, ' + plural(c.items.length, 'passage') + '.',
    [['Undo', () => { const x = D.items.pop(); D.invs.forEach(v => { v.items = v.items.filter(k => k !== x.id); }); save(); redraw(); railLabel(); }]]);
}
// The ticked passages become one cluster, which takes the first one's place in the session and in its investigations
function clusterOfTicked(title) {
  const its = D.items.filter(x => picked.has(x.id) && !isNote(x) && !isCluster(x));
  if (!its.length) return;
  const before = JSON.stringify(D);
  const c = newCluster(title, its.map(x => Object.assign({ ref: x.ref, cite: x.cite, author: x.author, work: x.work }, flat(x.note) ? { note: x.note } : {}, { added: today() })));
  const y = { id: 'i' + D.next++, kind: 'cluster', cluster: c.id }, gone = new Set(its.map(x => x.id));
  D.items.splice(D.items.indexOf(its[0]), 0, y);
  D.items = D.items.filter(x => !gone.has(x.id));
  D.invs.forEach(v => { if (v.items.some(k => gone.has(k))) { v.items = v.items.filter(k => !gone.has(k)); if (!v.items.includes(y.id)) v.items.push(y.id); } });
  its.forEach(x => picked.delete(x.id)); newCl = ''; unfolded.add(y.id);
  save(); redraw(); railLabel();
  toast('The cluster “' + c.title + '”, ' + plural(its.length, 'passage') + ', is item ' + (D.items.indexOf(y) + 1) + '. Put it into any later session from the Clusters list.',
    [['Undo', () => { D = JSON.parse(before); delete CL[c.id]; saveCl(); save(); redraw(); railLabel(); }]]);
}
/* A cluster as it is saved, in clusters/<id>.json */
function clData(c) {
  return { kind: 'kantlab-cluster', v: 1, id: c.id, title: c.title, made: c.made || '',
    items: c.items.map(y => Object.assign({ ref: y.ref, cite: y.cite, author: y.author, work: y.work }, flat(y.note) ? { note: y.note.trim() } : {}, y.added ? { added: y.added } : {})) };
}
function clPublication(c) {
  const json = JSON.stringify(clData(c), null, 1) + '\n';
  const newUrl = 'https://github.com/' + REPO + '/new/main/' + CL_DIR + '?filename=' + encodeURIComponent(c.id + '.json') + '&value=' + encodeURIComponent(json);
  return { json, newUrl, viaNew: !c.saved && newUrl.length < 7500 };
}
function markClSaved(c) {
  c.saved = { at: new Date().toISOString() }; saveCl();
  PUBCL = null; try { sessionStorage.removeItem('kantlab-clusters-saved-v1'); } catch (e) { /* fine */ }
  setTimeout(redraw, 300);
}
function openScreen(q) { const w = window.open(SCREEN + (q || ''), 'kantlab-class-screen', 'popup,width=1280,height=800'); if (w) w.focus(); }
function addNote(text) { const x = { id: 'i' + D.next++, kind: 'note', text: text || '' }; D.items.push(x); save(); return x; }

/* Investigations this browser knows of: those in saved sessions (from GitHub, once a visit), and
   those begun here, which a later session may continue before GitHub has caught up. */
const known = () => { try { return JSON.parse(localStorage.getItem(KNOWN_KEY) || '{}'); } catch (e) { return {}; } };
function remember(v) { const k = known(); k[v.id] = { title: v.title }; try { localStorage.setItem(KNOWN_KEY, JSON.stringify(k)); } catch (e) { /* fine */ } }
let PUBLISHED = null;   // investigations in saved sessions: id → { title, n }
async function published() {
  if (PUBLISHED) return PUBLISHED;
  const m = {};
  aggregate(await sessions()).forEach(v => { m[v.id] = { title: v.title, n: v.count }; });
  return (PUBLISHED = m);
}
function invChoices() {
  const out = new Map();
  Object.entries(known()).forEach(([id, v]) => out.set(id, v.title));
  Object.entries(PUBLISHED || {}).forEach(([id, v]) => out.set(id, v.title));
  D.invs.forEach(v => out.delete(v.id));
  return [...out.entries()].sort((a, b) => a[1].localeCompare(b[1]));
}
function uniqueId(title) {
  const taken = new Set([...Object.keys(known()), ...Object.keys(PUBLISHED || {}), ...D.invs.map(v => v.id)]);
  let id = slugOf(title).slice(0, 48) || 'investigation', n = 2;
  while (taken.has(id)) id = slugOf(title).slice(0, 44) + '-' + n++;
  return id;
}

/* ── The header button, the capture panel and the toast ─────────────────── */
const btn = el('button', 'csbtn', 'btn');
btn.type = 'button';
btn.title = 'Collect the passages a class looks at, bundle what raised questions, and save it for students';
const anchor = document.querySelector('header .more') || $('share');
if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(btn, anchor); else document.body.appendChild(btn);
btn.addEventListener('click', () => { if (pageOpen) { closePage(); return; } open = !open; redraw(); });

const panel = el('div', 'cspanel'); panel.hidden = true; document.body.appendChild(panel);
const page = el('div', 'cspage'); page.hidden = true; document.body.appendChild(page);
const tst = el('div', 'cstoast'); tst.hidden = true; document.body.appendChild(tst);
function toast(msg, acts) {
  tst._acts = acts || [];
  tst.innerHTML = '<span>' + esc(msg) + '</span>' + tst._acts.map((a, k) => '<button type="button" data-t="' + k + '">' + esc(a[0]) + '</button>').join('');
  tst.hidden = false;
  clearTimeout(tst._t);
  tst._t = setTimeout(() => { tst.hidden = true; }, 6500);
}
tst.addEventListener('click', e => { const b = e.target.closest('button[data-t]'); if (!b) return; tst.hidden = true; const a = tst._acts[+b.dataset.t]; if (a) a[1](); });

function redraw() { drawButton(); drawPanel(); if (pageOpen) drawPage(); }
function drawButton() {
  const n = D.items.length;
  btn.innerHTML = (rec ? '● ' : '') + 'Session' + (n ? ' <span class="csn">' + n + '</span>' : '');
  btn.classList.toggle('on', rec);
}
const itemLine = x => {
  if (isNote(x)) return '<span class="csnl">' + esc(clip(flat(x.text), 90) || 'An empty note') + '</span>';
  if (isCluster(x)) return '<span class="cscln">❖ <b>' + esc(clTitle(x)) + '</b>, ' + plural(cItems(x).length, 'passage') + '</span>';
  const p = pOf(x.ref);
  const name = p ? TEXTS[p.t].short : x.work;
  return '<b>' + esc(x.author === 'Kant' || name.startsWith(x.author) ? '' : x.author + ', ') + esc(name) + '</b>, ' + esc(x.cite);
};
// The capture panel: small, for clicking passages in while the class reads.
function drawPanel() {
  panel.hidden = !open || pageOpen;
  if (panel.hidden) return;
  const n = D.items.length, c = target && CL[target], list = c ? c.items : D.items, last = list.slice(-4);
  const link = x => '<a href="#p=' + encodeURIComponent(x.ref) + '&amp;rt=conn" title="Open it in the portal">' + itemLine(x) + '</a>';
  panel.innerHTML = '<div class="csbar"><b class="cz">Session</b><span class="muted small">' + esc(D.title) + '</span><span class="spacer"></span>' +
    '<button type="button" class="linkish" data-c="close" title="Hide the panel; the session is kept">Hide</button></div>' +
    '<label class="csrow"><input type="checkbox" data-c="rec"' + (rec ? ' checked' : '') + '> <b>Recording</b> <span class="muted small">' + (rec ? 'press + ' + (c ? toName() : 'Session') + ' on a passage' : 'turn on to add passages') + '</span></label>' +
    '<label class="csrow csto"><span class="muted small">Add passages to</span><select data-c="to" title="Where + Session puts a passage: the session, or a cluster kept to use again">' +
      '<option value="">this session</option>' + Object.values(CL).sort((a, b) => a.title.localeCompare(b.title)).map(k => '<option value="' + esc(k.id) + '"' + (k.id === target ? ' selected' : '') + '>❖ ' + esc(clip(k.title, 30)) + ' (' + k.items.length + ')</option>').join('') +
      '<option value="+">a new cluster…</option></select></label>' +
    (newCl === 'panel' ? '<form class="csquick" data-c="newcl"><input data-f="clname" placeholder="Name the cluster, e.g. Error" spellcheck="true"><button type="submit" class="btn">Make it</button></form>' : '') +
    (c ? '<div class="csclhead">❖ <b>' + esc(c.title) + '</b> <span class="muted small">' + plural(c.items.length, 'passage') +
        (clInSession(c.id) >= 0 ? ' · item ' + (clInSession(c.id) + 1) + ' of this session' : ' · <button type="button" class="linkish" data-c="clput" data-cl="' + esc(c.id) + '">put it in this session</button>') + '</span></div>' : '') +
    (list.length ? '<ol class="cslast" start="' + (list.length - last.length + 1) + '">' + last.map(x => '<li>' + (isNote(x) || isCluster(x) ? itemLine(x) : link(x)) + '</li>').join('') + '</ol>'
      : c ? '<p class="muted small">Nothing in it yet. ' + (rec ? 'Press' : 'Turn on recording, then press') + ' <b>+ ' + esc(toName()) + '</b> on a passage.</p>'
      : '<p class="muted small">No passages yet. Turn on recording, then press <b>+ Session</b> on a passage: a search hit, a paragraph of a text, or the passage open on the right.</p>') +
    '<form class="csquick" data-c="quick"><input data-f="quick" placeholder="A note or question, then Enter…" spellcheck="true"><button type="submit" class="btn">+ Note</button></form>' +
    '<p class="csopen"><button type="button" class="btn solid" data-c="page">Organize and save ›</button><span class="muted small">' + plural(n, 'item') + (D.invs.length ? ' · ' + plural(D.invs.length, 'investigation') : '') + '</span>' +
      '<span class="spacer"></span><button type="button" class="linkish" data-c="screen" title="Show this session on the room’s screen, in a window of its own">Screen ↗</button>' +
      (n ? '<button type="button" class="linkish" data-c="word" title="Download the session as a Word file">Word</button>' : '') + '</p>';
}
panel.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.c === 'rec') setRec(t.checked);
  if (t.dataset.c === 'to') {
    if (t.value === '+') { newCl = 'panel'; drawPanel(); const i = panel.querySelector('[data-f="clname"]'); if (i) i.focus(); return; }
    newCl = ''; setTarget(t.value);
  }
});
panel.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.dataset.c === 'newcl') {
    const j = panel.querySelector('[data-f="clname"]'), title = flat(j && j.value);
    if (!title) { if (j) j.focus(); return; }
    pubClusters().then(() => {   // first the names saved for the class, so that the new one takes none of them
      const c = newCluster(title, []);
      newCl = ''; setTarget(c.id);
      toast('The cluster “' + c.title + '” is made. ' + (rec ? '' : 'With recording on, ') + '+ ' + toName() + ' on a passage adds it there.');
    });
    return;
  }
  const i = panel.querySelector('[data-f="quick"]'), t = flat(i.value);
  if (!t) return;
  addNote(i.value.trim()); redraw();
  toast('Note ' + D.items.length + ' added. Bundle it into an investigation on the session page.');
  const j = panel.querySelector('[data-f="quick"]'); if (j) j.focus();
});
panel.addEventListener('click', e => {
  const b = e.target.closest('[data-c]');
  if (!b || b.dataset.c === 'rec' || b.dataset.c === 'quick') return;
  if (b.dataset.c === 'close') { open = false; redraw(); }
  if (b.dataset.c === 'page') openPage();
  if (b.dataset.c === 'word') exportWord();
  if (b.dataset.c === 'screen') openScreen();
  if (b.dataset.c === 'clput') putCluster(b.dataset.cl);
});

/* ── The session page: tick items, bundle them into investigations, and save ── */
function openPage() {
  pageOpen = true; open = false; page.hidden = false; hideHover(); drawPanel(); drawPage();
  published().then(() => { if (pageOpen) drawPage(); });
  pubClusters().then(() => { if (pageOpen) drawPage(); });
}
function closePage() { pageOpen = false; page.hidden = true; open = true; redraw(); }
/* A passage opened on the session page, as an accordion: the whole text, and its English when
   the English is on (filled in where it is still loading, without redrawing what is typed). */
function wholeOf(p, id) {
  const e = englishOf(p);
  if (e === 'loading') setTimeout(fillEnglish, 600);
  return '<div class="cswhole" lang="de" data-c="fold" data-i="' + esc(id) + '" title="Fold the passage">' + esc(p.text) + '</div>' +
    (e === 'loading' ? '<div class="csen muted" data-enwait="' + esc(id) + '">English loading…</div>' : e ? '<div class="csen" lang="en">' + rich(e) + '</div>' : '');
}
function fillEnglish() {
  page.querySelectorAll('[data-enwait]').forEach(d => {
    const ref = refOfKey(d.dataset.enwait), p = ref && pOf(ref), e = p ? englishOf(p) : null;
    if (e === 'loading') { setTimeout(fillEnglish, 600); return; }
    if (!e) { d.remove(); return; }
    d.removeAttribute('data-enwait'); d.classList.remove('muted'); d.lang = 'en'; d.innerHTML = rich(e);
  });
}
function drawPage() {
  const n = D.items.length, pub = publication(), choices = invChoices();
  const body = page.querySelector('.cspbody'), scrolled = body ? body.scrollTop : 0;   // kept across the redraw
  const keys = foldKeys(), np = keys.length, nOpen = keys.filter(k => unfolded.has(k)).length;
  const ticked = D.items.filter(x => picked.has(x.id)).length, tickedP = D.items.filter(x => picked.has(x.id) && !isNote(x) && !isCluster(x)).length;
  const others = clAll().filter(c => clInSession(c.id) < 0);
  // a cluster in the session: its name, and folded open, its passages, each to fold open, move or take out
  const clusterMain = x => {
    const c = clOf(x.cluster), its = cItems(x), on = unfolded.has(x.id);
    const head = '<div class="cshead"><button type="button" class="csfold" data-c="fold" data-i="' + esc(x.id) + '" title="' + (on ? 'Fold the cluster' : 'Show its passages') + '">' + (on ? '▾' : '▸') + '</button>' +
      '<span class="csclt" data-c="fold" data-i="' + esc(x.id) + '">❖ ' + esc(c ? c.title : x.cluster) + '</span><span class="muted small">' + (c ? 'a cluster of ' + plural(its.length, 'passage') : 'a cluster neither in this browser nor saved for the class') + '</span></div>';
    if (!c) return head;
    if (!on) return head + (its.length ? '<div class="csword" data-c="fold" data-i="' + esc(x.id) + '" title="Show its passages">' +
      esc(its.slice(0, 4).map(y => { const p = pOf(y.ref); return (p ? TEXTS[p.t].short : y.work) + ', ' + y.cite; }).join(' · ') + (its.length > 4 ? ' …' : '')) + '</div>' : '');
    return head + '<ol class="csclits">' + its.map((y, j) => {
      const key = x.id + '|' + y.ref, p = pOf(y.ref), o = unfolded.has(key);
      return '<li><div class="cshead"><button type="button" class="csfold" data-c="fold" data-i="' + esc(key) + '" title="' + (o ? 'Fold the passage' : 'Show the whole passage') + '">' + (o ? '▾' : '▸') + '</button>' +
        '<button type="button" class="linkish cscite" data-c="cgo" data-r="' + esc(y.ref) + '" title="Open it in the portal, in its full text">' + itemLine(y) + ' ›</button>' +
        '<span class="csb"><button type="button" data-c="cpnote" data-cl="' + esc(c.id) + '" data-j="' + j + '" title="A note on this passage, wherever the cluster goes">✎</button>' +
          '<button type="button" data-c="cup" data-cl="' + esc(c.id) + '" data-j="' + j + '" title="Move up in the cluster"' + (j ? '' : ' disabled') + '>↑</button>' +
          '<button type="button" data-c="cdown" data-cl="' + esc(c.id) + '" data-j="' + j + '" title="Move down in the cluster"' + (j < its.length - 1 ? '' : ' disabled') + '>↓</button>' +
          '<button type="button" data-c="cdel" data-cl="' + esc(c.id) + '" data-j="' + j + '" title="Take it out of the cluster, in every session that has it">✕</button></span></div>' +
        (!p ? '<div class="muted small">(not in the portal)</div>' : o ? wholeOf(p, key) : '<div class="csword" lang="de" data-c="fold" data-i="' + esc(key) + '" title="Show the whole passage">' + esc(clip(flat(p.text), 140)) + '</div>') +
        (y.note != null ? '<textarea data-f="clnote" data-cl="' + esc(c.id) + '" data-j="' + j + '" rows="2" placeholder="Why it matters, wherever the cluster goes…">' + esc(y.note) + '</textarea>' : '') + '</li>';
    }).join('') + (its.length ? '' : '<li class="muted small">No passages in it.</li>') + '</ol>' +
      '<div class="muted small cshint">A change here is a change to the cluster, in every session that has it. <button type="button" class="linkish" data-c="clto" data-cl="' + esc(c.id) + '">Add passages to it ›</button></div>';
  };
  const itemRow = (x, k) => {
    const vs = invsOf(x.id);
    const chips = vs.map(v => '<span class="cschip" title="In the investigation “' + esc(v.title) + '”">' + esc(clip(v.title || 'Untitled investigation', 34)) + '<button type="button" data-c="unbundle" data-i="' + esc(x.id) + '" data-v="' + esc(v.id) + '" title="Take it out of this investigation">✕</button></span>').join('');
    const tools = '<span class="csb">' + (isNote(x) || isCluster(x) ? '' : '<button type="button" data-c="pnote" data-i="' + esc(x.id) + '" title="A note on this passage">✎</button>') +
      '<button type="button" data-c="up" data-k="' + k + '" title="Move up"' + (k ? '' : ' disabled') + '>↑</button>' +
      '<button type="button" data-c="down" data-k="' + k + '" title="Move down"' + (k < n - 1 ? '' : ' disabled') + '>↓</button>' +
      '<button type="button" data-c="del" data-k="' + k + '" title="' + (isCluster(x) ? 'Take the cluster out of this session; it is kept, to use again' : 'Take it out of the session') + '">✕</button></span>';
    const p = !isNote(x) && !isCluster(x) && pOf(x.ref);
    return '<li class="csit' + (picked.has(x.id) ? ' on' : '') + (isNote(x) ? ' note' : '') + (isCluster(x) ? ' cl' : '') + '"><label class="cstick"><input type="checkbox" data-c="tick" data-i="' + esc(x.id) + '"' + (picked.has(x.id) ? ' checked' : '') + '><span class="csnum">' + (k + 1) + '</span></label>' +
      '<div class="csmain">' + (isNote(x)
        ? '<textarea data-f="ntext" data-i="' + esc(x.id) + '" rows="2" placeholder="A note or a question…">' + esc(x.text) + '</textarea>'
        : isCluster(x) ? clusterMain(x)
        : '<div class="cshead"><button type="button" class="csfold" data-c="fold" data-i="' + esc(x.id) + '" title="' + (unfolded.has(x.id) ? 'Fold the passage' : 'Show the whole passage') + '">' + (unfolded.has(x.id) ? '▾' : '▸') + '</button>' +
            '<button type="button" class="linkish cscite" data-c="go" data-i="' + esc(x.id) + '" title="Open it in the portal, in its full text">' + itemLine(x) + ' ›</button></div>' +
          (!p ? '<div class="muted small">(not in the portal)</div>'
            : unfolded.has(x.id) ? wholeOf(p, x.id)
            : '<div class="csword" lang="de" data-c="fold" data-i="' + esc(x.id) + '" title="Show the whole passage">' + esc(clip(flat(p.text), 180)) + '</div>') +
          (x.note != null ? '<textarea data-f="pnote" data-i="' + esc(x.id) + '" rows="2" placeholder="Why it matters, or the question it raises…">' + esc(x.note) + '</textarea>' : '')) +
      (chips ? '<div class="cschips">' + chips + '</div>' : '') + '</div>' + tools + '</li>';
  };
  const invCard = v => {
    const its = v.items.map(itemById).filter(Boolean), before = v.cont && PUBLISHED && PUBLISHED[v.id] ? PUBLISHED[v.id].n : 0;
    return '<section class="csinv" data-v="' + esc(v.id) + '">' +
      '<input class="csvtitle" data-f="vtitle" data-v="' + esc(v.id) + '" value="' + esc(v.title) + '" placeholder="The question, in a line" spellcheck="true">' +
      (v.cont ? '<div class="muted small">Begun in an earlier session' + (before ? ', with ' + plural(before, 'item') : '') + '. What you bundle here is added to it. <a href="?investigation=' + esc(v.id) + '" target="_blank" rel="noopener">See it so far ↗</a></div>' : '') +
      '<textarea data-f="vabout" data-v="' + esc(v.id) + '" rows="2" placeholder="What the question is, and what would settle it (optional)">' + esc(v.about || '') + '</textarea>' +
      '<ol class="csvits">' + (its.length ? its.map(x => '<li><span class="csnum">' + numOf(x.id) + '</span> ' + itemLine(x) + '<button type="button" class="csx" data-c="unbundle" data-i="' + esc(x.id) + '" data-v="' + esc(v.id) + '" title="Take it out of this investigation">✕</button></li>').join('')
        : '<li class="muted small">Nothing from this session yet. Tick items on the left, then press <b>Add the ticked</b>.</li>') + '</ol>' +
      '<input class="csvdisc" data-f="vdisc" data-v="' + esc(v.id) + '" type="url" value="' + esc(v.discussion || '') + '" placeholder="Its own Canvas discussion, if it has one: https://…" spellcheck="false">' +
      '<div class="csvacts"><button type="button" class="btn" data-c="bundle" data-v="' + esc(v.id) + '"' + (ticked ? '' : ' disabled') + '>Add the ticked' + (ticked ? ' (' + ticked + ')' : '') + '</button>' +
      '<button type="button" class="linkish" data-c="vcopy" data-v="' + esc(v.id) + '">Copy for Canvas</button>' +
      '<button type="button" class="linkish" data-c="vdrop" data-v="' + esc(v.id) + '">Drop from this session</button></div></section>';
  };
  // a cluster in the Clusters list: every one this browser has or the class has saved
  const clCard = c => {
    const mine = !!CL[c.id], k = clInSession(c.id), pub = mine && clPublication(c);
    const state = !mine ? 'saved for the class' : !c.saved ? 'not saved for the class yet' : unsaved(c) ? 'changed since it was saved' : 'saved for the class';
    return '<section class="cscl' + (c.id === target ? ' to' : '') + '">' +
      (mine ? '<input class="csvtitle" data-f="cltitle" data-cl="' + esc(c.id) + '" value="' + esc(c.title) + '" aria-label="Name of the cluster" spellcheck="true">' : '<div class="csvtitle">' + esc(c.title) + '</div>') +
      '<div class="muted small">' + plural(c.items.length, 'passage') + ' · ' +
        (k >= 0 ? 'item ' + (k + 1) + ' of this session' : '<button type="button" class="linkish" data-c="clput" data-cl="' + esc(c.id) + '">put it in this session</button>') +
        ' · <span class="' + (state.startsWith('saved') ? '' : 'cswarn') + '">' + state + '</span></div>' +
      '<div class="csvacts">' + (c.id === target ? '<span class="small">+ Session adds passages to it now.</span><button type="button" class="linkish" data-c="clto" data-cl="">Add to the session instead</button>'
          : '<button type="button" class="linkish" data-c="clto" data-cl="' + esc(c.id) + '">Add passages to it ›</button>') +
        (mine && unsaved(c) ? (pub.viaNew ? '<a class="btn solid" href="' + esc(pub.newUrl) + '" target="_blank" rel="noopener" data-c="clpubgo" data-cl="' + esc(c.id) + '">Save for the class</a>'
          : '<button type="button" class="btn solid" data-c="clpubfile" data-cl="' + esc(c.id) + '">' + (c.saved ? 'Save again' : 'Save for the class') + '</button>') : '') +
        (mine ? '<button type="button" class="linkish" data-c="cldrop" data-cl="' + esc(c.id) + '">Remove from this browser</button>' : '') + '</div></section>';
  };
  page.innerHTML = '<div class="cspbar"><button type="button" class="btn" data-c="back">← Back to the portal</button><b class="cz">Class session</b>' +
    '<label class="csrow inbar"><input type="checkbox" data-c="rec"' + (rec ? ' checked' : '') + '> Recording</label><span class="spacer"></span>' +
    (n ? (pub.viaNew && !D.saved ? '<a class="btn solid" href="' + esc(pub.newUrl) + '" target="_blank" rel="noopener" data-c="pubgo">Save for the class</a>'
      : '<button type="button" class="btn solid" data-c="pubfile">' + (D.saved ? 'Save again' : 'Save for the class') + '</button>') : '') +
    '<button type="button" class="linkish" data-c="copyall"' + (n ? '' : ' disabled') + '>Copy for Canvas</button>' +
    '<button type="button" class="btn" data-c="word"' + (n ? '' : ' disabled') + ' title="Download the session as a Word file, to keep or rework">Export to Word</button>' +
    '<button type="button" class="btn" data-c="screen" title="Show this session on the room’s screen, in a window of its own">Class screen ↗</button>' +
    '<button type="button" class="linkish" data-c="file">Save to file</button><button type="button" class="linkish" data-c="new">New session</button>' +
    '<a class="linkish" href="teaching/index.html" target="_blank" rel="noopener" title="The small tools made for teaching with the portal">Teaching tools ↗</a></div>' +
    '<div class="cspbody"><div class="cspcol">' +
      '<input class="cstitle" data-f="title" value="' + esc(D.title) + '" aria-label="Title of the session" spellcheck="false">' +
      '<div class="csmeta"><span class="muted">' + esc(longDate(D.date)) + '</span><input class="csdisc" data-f="discussion" type="url" value="' + esc(D.discussion) + '" placeholder="The class’s Canvas discussion, for comments: https://…" spellcheck="false"></div>' +
      '<h3 class="csh">In this session <span class="muted small">' + plural(n, 'item') + (ticked ? ' · ' + ticked + ' ticked <button type="button" class="linkish" data-c="untick">untick</button>' : '') +
        (np ? ' · ' + (nOpen < np ? '<button type="button" class="linkish" data-c="openall">open all</button>' : '') + (nOpen && nOpen < np ? ' · ' : '') +
          (nOpen ? '<button type="button" class="linkish" data-c="foldall">fold all</button>' : '') : '') + '</span></h3>' +
      '<ol class="csitems">' + (n ? D.items.map(itemRow).join('') : '<li class="muted">Nothing yet. Turn on recording and press <b>+ Session</b> on passages in the portal, or add a note below.</li>') + '</ol>' +
      '<p class="csadd"><button type="button" class="btn" data-c="addnote">+ Note or question</button>' +
        (others.length ? '<select data-c="cladd" title="Put a cluster into this session, as one item"><option value="">+ A cluster…</option>' +
          others.map(c => '<option value="' + esc(c.id) + '">❖ ' + esc(c.title) + ' (' + c.items.length + ')</option>').join('') + '</select>' : '') +
        (tickedP && newCl !== 'page' ? '<button type="button" class="btn" data-c="clmake" title="Make the ticked passages a cluster, kept to use again in later sessions">Make a cluster of the ticked (' + tickedP + ')</button>' : '') + '</p>' +
      (newCl === 'page' && tickedP ? '<form class="csnewform" data-c="newcl"><input data-f="clname" placeholder="Name the cluster, e.g. Error" spellcheck="true"><button type="submit" class="btn solid">Make it of the ticked (' + tickedP + ')</button><button type="button" class="linkish" data-c="nocl">Cancel</button></form>' : '') +
    '</div><div class="cspcol inv"><h3 class="csh">Investigations <span class="muted small">questions to look into, bundled with what bears on them</span></h3>' +
      D.invs.map(invCard).join('') +
      '<div class="csnew">' + (newInv
        ? '<form class="csnewform" data-c="newinv"><input data-f="newtitle" placeholder="The question, in a line" spellcheck="true"><button type="submit" class="btn solid">Start it' + (ticked ? ' with the ticked (' + ticked + ')' : '') + '</button><button type="button" class="linkish" data-c="nonew">Cancel</button></form>'
        : '<button type="button" class="btn" data-c="startnew">+ New investigation' + (ticked ? ' from the ticked (' + ticked + ')' : '') + '</button>') +
        (choices.length ? '<label class="cscont"><span class="muted small">or add to one begun earlier</span><select data-c="cont"><option value="">Choose an investigation…</option>' +
          choices.map(([id, t]) => '<option value="' + esc(id) + '">' + esc(t) + '</option>').join('') + '</select></label>' : '') + '</div>' +
      '<h3 class="csh cshcl">Clusters <span class="muted small">groups of passages, kept to use again; a session holds one as a single item</span></h3>' +
      (clAll().length ? clAll().map(clCard).join('') +
        '<p class="cshelp muted small">A session holds a cluster by its name, so a passage added to the cluster, here or in a later session, is in every session that has it once the cluster is saved again. ' +
          '<b>Save for the class</b> opens GitHub with the cluster as a file; there, press <b>Commit changes</b>. Saving it again downloads the file: drop it into <a href="https://github.com/' + REPO + '/upload/main/' + CL_DIR + '" target="_blank" rel="noopener">GitHub’s upload page for clusters</a>.</p>'
        : '<p class="muted small">None yet. Tick passages on the left and press <b>Make a cluster of the ticked</b>, or in the Session panel set <b>Add passages to</b> to a new cluster.</p>') +
      (n ? '<p class="cshelp muted small">' + (pub.viaNew && !D.saved
          ? '<b>Save for the class</b> opens GitHub with the session as a file; there, press <b>Commit changes</b>.'
          : 'Download the file, then on <a href="https://github.com/' + REPO + '/upload/main/' + DIR + '" target="_blank" rel="noopener">GitHub’s upload page</a> drop it in and press <b>Commit changes</b>' + (D.saved ? '; it replaces the version saved before.' : '.')) +
        ' A minute or two later students find the session and its investigations under <b>Read</b>, or at <a href="' + esc(pub.link) + '" target="_blank" rel="noopener">' + esc(pub.link.replace(/^https?:\/\//, '')) + '</a>. ' +
        'The repository is public, so put no student’s name in a title or note.</p>' : '') +
    '</div></div>';
  const b2 = page.querySelector('.cspbody'); if (b2 && scrolled) b2.scrollTop = scrolled;
}
page.addEventListener('input', e => {
  const t = e.target, f = t.dataset.f;
  if (f === 'title') D.title = t.value;
  else if (f === 'discussion') D.discussion = t.value.trim();
  else if (f === 'ntext') itemById(t.dataset.i).text = t.value;
  else if (f === 'pnote') itemById(t.dataset.i).note = t.value;
  else if (f === 'vtitle') { const v = D.invs.find(x => x.id === t.dataset.v); v.title = t.value; if (!v.cont) remember(v); }
  else if (f === 'vabout') D.invs.find(x => x.id === t.dataset.v).about = t.value;
  else if (f === 'vdisc') D.invs.find(x => x.id === t.dataset.v).discussion = t.value.trim();
  else if (f === 'cltitle') { const c = CL[t.dataset.cl]; c.title = t.value; touched(c); drawPanel(); return; }
  else if (f === 'clnote') { const c = own(t.dataset.cl); c.items[+t.dataset.j].note = t.value; touched(c); return; }
  else return;
  save(); drawButton();
});
page.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.c === 'rec') { setRec(t.checked); return; }
  if (t.dataset.c === 'cladd' && t.value) { putCluster(t.value); return; }
  if (t.dataset.c === 'tick') { if (t.checked) picked.add(t.dataset.i); else picked.delete(t.dataset.i); drawPage(); return; }
  if (t.dataset.c === 'cont' && t.value) {
    const id = t.value, title = (PUBLISHED && PUBLISHED[id] && PUBLISHED[id].title) || (known()[id] || {}).title || id;
    D.invs.push({ id, title, about: '', discussion: '', items: [...picked], cont: true });
    picked.clear(); save(); drawPage();
  }
});
page.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.dataset.c === 'newcl') {
    const j = page.querySelector('[data-f="clname"]'), name = flat(j && j.value);
    if (!name) { if (j) j.focus(); return; }
    clusterOfTicked(name); return;
  }
  const i = page.querySelector('[data-f="newtitle"]'), title = flat(i && i.value);
  if (!title) { if (i) i.focus(); return; }
  const v = { id: uniqueId(title), title, about: '', discussion: '', items: D.items.filter(x => picked.has(x.id)).map(x => x.id), cont: false };
  D.invs.push(v); remember(v); picked.clear(); newInv = false; save(); drawPage();
});
page.addEventListener('click', e => {
  const b = e.target.closest('[data-c]');
  if (!b || ['rec', 'tick', 'cont', 'newinv', 'cladd', 'newcl'].includes(b.dataset.c)) return;
  const k = +b.dataset.k, v = b.dataset.v && D.invs.find(x => x.id === b.dataset.v);
  switch (b.dataset.c) {
    case 'back': closePage(); return;
    case 'go': { const x = itemById(b.dataset.i); closePage(); location.hash = 'p=' + encodeURIComponent(x.ref) + '&rt=conn'; return; }
    case 'pnote': { const x = itemById(b.dataset.i); if (x.note == null) x.note = ''; save(); drawPage(); const t = page.querySelector('[data-f="pnote"][data-i="' + x.id + '"]'); if (t) t.focus(); return; }
    case 'addnote': { const x = addNote(''); drawPage(); drawButton(); const t = page.querySelector('[data-f="ntext"][data-i="' + x.id + '"]'); if (t) t.focus(); return; }
    case 'up': if (k > 0) { D.items.splice(k - 1, 0, D.items.splice(k, 1)[0]); save(); drawPage(); } return;
    case 'down': if (k < D.items.length - 1) { D.items.splice(k + 1, 0, D.items.splice(k, 1)[0]); save(); drawPage(); } return;
    case 'del': {
      const x = D.items.splice(k, 1)[0], was = D.invs.filter(w => w.items.includes(x.id)).map(w => [w, w.items.indexOf(x.id)]);
      was.forEach(([w, j]) => w.items.splice(j, 1)); picked.delete(x.id);
      save(); redraw(); railLabel();
      toast(isCluster(x) ? 'Taken out of the session. The cluster “' + clTitle(x) + '” is kept, to use again.' : 'Taken out of the session.',
        [['Undo', () => { D.items.splice(k, 0, x); was.forEach(([w, j]) => w.items.splice(j, 0, x.id)); save(); redraw(); railLabel(); }]]);
      return;
    }
    case 'untick': picked.clear(); drawPage(); return;
    case 'fold': { if (window.getSelection && String(window.getSelection()).length && b.matches('.cswhole, .csword')) return;   // selecting words, not folding
      const id = b.dataset.i; if (unfolded.has(id)) unfolded.delete(id); else unfolded.add(id); drawPage(); return; }
    case 'openall': foldKeys().forEach(k2 => unfolded.add(k2)); drawPage(); return;
    case 'screen': openScreen(); return;
    case 'clput': putCluster(b.dataset.cl); return;
    case 'clmake': newCl = 'page'; drawPage(); { const t = page.querySelector('[data-f="clname"]'); if (t) t.focus(); } return;
    case 'nocl': newCl = ''; drawPage(); return;
    case 'clto': {
      const id = b.dataset.cl;
      if (id) own(id);
      setTarget(id);
      if (id && CL[id]) { closePage(); toast('+ Session now adds passages to the cluster “' + CL[id].title + '”' + (rec ? '.' : '. Turn on recording to add them.')); }
      return;
    }
    case 'cgo': closePage(); location.hash = 'p=' + encodeURIComponent(b.dataset.r) + '&rt=conn'; return;
    case 'cpnote': {
      const c = own(b.dataset.cl), y = c.items[+b.dataset.j];
      if (y.note == null) y.note = '';
      touched(c); drawPage();
      const t = page.querySelector('[data-f="clnote"][data-cl="' + c.id + '"][data-j="' + b.dataset.j + '"]'); if (t) t.focus();
      return;
    }
    case 'cup': case 'cdown': {
      const c = own(b.dataset.cl), j = +b.dataset.j, to = b.dataset.c === 'cup' ? j - 1 : j + 1;
      if (to < 0 || to >= c.items.length) return;
      c.items.splice(to, 0, c.items.splice(j, 1)[0]); touched(c); drawPage(); return;
    }
    case 'cdel': {
      const c = own(b.dataset.cl), j = +b.dataset.j, y = c.items.splice(j, 1)[0];
      touched(c); redraw(); railLabel();
      toast('Taken out of the cluster “' + c.title + '”, in every session that has it.', [['Undo', () => { c.items.splice(j, 0, y); touched(c); redraw(); railLabel(); }]]);
      return;
    }
    case 'clpubfile': {
      const c = CL[b.dataset.cl];
      download(clPublication(c).json, c.id + '.json'); markClSaved(c);
      toast('Downloaded as ' + c.id + '.json: drop it into GitHub’s upload page for clusters, then press Commit changes.');
      return;
    }
    case 'clpubgo': {   // the link is drawn with the page: fill it with the cluster as it is now
      const c = CL[b.dataset.cl], pub = clPublication(c);
      if (!pub.viaNew) { e.preventDefault(); download(pub.json, c.id + '.json'); toast('Too long for a link: the file is downloaded. Drop it into GitHub’s upload page for clusters.'); }
      else b.href = pub.newUrl;
      markClSaved(c); return;
    }
    case 'cldrop': {
      const id = b.dataset.cl, c = CL[id], k2 = clInSession(id);
      if (k2 >= 0 && !(PUBCL && PUBCL[id])) { toast('It is item ' + (k2 + 1) + ' of this session and not saved for the class: take it out of the session first.'); return; }
      delete CL[id]; saveCl();
      if (target === id) setTarget(''); else redraw();
      toast('“' + c.title + '” is removed from this browser' + (c.saved ? '; the copy saved for the class stays.' : '.'), [['Undo', () => { CL[id] = c; saveCl(); redraw(); }]]);
      return;
    }
    case 'foldall': unfolded.clear(); drawPage(); return;
    case 'startnew': newInv = true; drawPage(); { const t = page.querySelector('[data-f="newtitle"]'); if (t) t.focus(); } return;
    case 'nonew': newInv = false; drawPage(); return;
    case 'bundle': D.items.filter(x => picked.has(x.id) && !v.items.includes(x.id)).forEach(x => v.items.push(x.id)); picked.clear(); save(); drawPage(); return;
    case 'unbundle': { const w = D.invs.find(x => x.id === b.dataset.v); w.items = w.items.filter(id => id !== b.dataset.i); save(); drawPage(); return; }
    case 'vdrop': { const j = D.invs.indexOf(v); D.invs.splice(j, 1); save(); drawPage(); toast('“' + (v.title || 'The investigation') + '” is no longer in this session.', [['Undo', () => { D.invs.splice(j, 0, v); save(); drawPage(); }]]); return; }
    case 'vcopy': copyForCanvas(invBlock(v, D)); return;
    case 'copyall': if (D.items.length) copyForCanvas(sessionBlock(sessionData(), D.saved && D.saved.slug)); return;
    case 'word': exportWord(); return;
    case 'file': download(publication().json, publication().slug + '.json'); return;
    case 'pubfile': download(publication().json, publication().slug + '.json'); markSaved(); return;
    case 'pubgo': {   // the link is drawn with the page: fill it with what is there now, typed since included
      const pub = publication();
      if (!pub.viaNew) { e.preventDefault(); download(pub.json, pub.slug + '.json'); toast('Too long for a link: the file is downloaded. Drop it into GitHub’s upload page.'); }
      else b.href = pub.newUrl;
      markSaved(); return;
    }
    case 'new': {
      const old = D; D = blank(); picked.clear(); save(); redraw(); railLabel();
      toast('A new session. Its investigations can be continued from this one.', [['Undo', () => { D = old; save(); redraw(); railLabel(); }]]);
      return;
    }
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && pageOpen && !e.target.closest('input, textarea, select')) closePage(); });
function markSaved() { D.saved = { slug: publication().slug, at: new Date().toISOString() }; D.invs.forEach(remember); PUBLISHED = null; save(); setTimeout(redraw, 300); }
function download(text, name) {
  const a = el('a');
  a.href = URL.createObjectURL(text instanceof Blob ? text : new Blob([text], { type: 'application/json' }));
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
}
/* The saved file: items numbered by their place, and each investigation naming its items by number. */
function sessionData() {
  const items = D.items.map(x => isNote(x) ? { kind: 'note', text: (x.text || '').trim() }
    : isCluster(x) ? { kind: 'cluster', cluster: x.cluster, title: clTitle(x), items: clOf(x.cluster) ? clData(clOf(x.cluster)).items : [] }
    : Object.assign({ ref: x.ref, cite: x.cite, author: x.author, work: x.work }, flat(x.note) ? { note: x.note.trim() } : {}));
  const invs = D.invs.filter(v => flat(v.title)).map(v => Object.assign({ id: v.id, title: v.title.trim(), items: v.items.map(numOf).filter(n => n > 0).sort((a, b) => a - b) },
    flat(v.about) ? { about: v.about.trim() } : {}, /^https?:\/\//.test(v.discussion || '') ? { discussion: v.discussion } : {}, v.cont ? { continues: true } : {}));
  return { kind: 'kantlab-session', v: 2, title: D.title, date: D.date, discussion: D.discussion || '', items, investigations: invs };
}
function publication() {
  const slug = (D.saved && D.saved.slug) || (D.date + '-' + slugOf(D.title.replace(/^class,?\s*/i, '') === longDate(D.date) ? 'class' : D.title)).replace(/-+/g, '-');
  const json = JSON.stringify(sessionData(), null, 1) + '\n';
  const newUrl = 'https://github.com/' + REPO + '/new/main/' + DIR + '?filename=' + encodeURIComponent(slug + '.json') + '&value=' + encodeURIComponent(json);
  return { slug, json, newUrl, link: SITE_DIR + '?session=' + slug, viaNew: newUrl.length < 7500 };
}

/* ── + Session on the passage under the pointer, and in the passage pane ─── */
const hov = el('button', 'cshov', 'csfloat');
hov.type = 'button'; hov.hidden = true;
hov.addEventListener('mousedown', e => e.preventDefault());
document.body.appendChild(hov);
let hovEl = null, hovI = null, hideT = 0;
const hideHover = () => { hov.hidden = true; hovEl = null; hovI = null; };
const covered = () => pageOpen || (view && !view.hidden);
document.addEventListener('mouseover', e => {
  if (!rec || covered()) return;
  if (e.target === hov) { clearTimeout(hideT); return; }
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
  if (!hovEl || !hovEl.isConnected || !rec) { hideHover(); return; }
  const r = hovEl.getBoundingClientRect(), inn = has(hovI), to = toName();
  hov.textContent = inn ? '✓ In ' + (to || 'session') : '+ ' + (to || 'Session');
  hov.classList.toggle('in', inn);
  hov.title = inn ? 'Already in the ' + (to ? 'cluster' : 'session') : to ? 'Add this passage to the cluster “' + CL[target].title + '”' : 'Add this passage to the class session';
  const sc = hovEl.closest('#left, #railbody'), bar = sc && sc.querySelector('.readbar');
  const floor = Math.max(52, sc ? sc.getBoundingClientRect().top + 4 : 0, bar && bar.getBoundingClientRect().bottom > 0 ? bar.getBoundingClientRect().bottom + 4 : 0);
  const top = Math.max(r.top + 4, floor) + (document.body.classList.contains('hmode') ? 26 : 0);   // below the handout's own button
  if (top > r.bottom - 18 || top > window.innerHeight - 24) { hov.hidden = true; return; }
  hov.hidden = false;
  hov.style.top = top + 'px';
  hov.style.left = Math.max(8, r.right - hov.offsetWidth - 8) + 'px';
}
document.addEventListener('scroll', () => { if (hovEl && hovEl.isConnected) placeHover(); else hideHover(); }, true);
hov.addEventListener('click', e => { e.stopPropagation(); if (hovI != null && !has(hovI)) add(hovI); else if (hovI != null) { open = true; redraw(); } });

function railLabel() {
  const b = document.querySelector('#rail .csrail');
  if (!b) return;
  const i = S.sel;
  b.hidden = !rec || i == null || !P[i];
  if (b.hidden) return;
  const inn = has(i), to = toName(), label = inn ? '✓ In ' + (to || 'the session') : '+ ' + (to || 'Session');
  if (b.textContent !== label) b.textContent = label;   // only when it changes: the pane is watched for changes, this one included
  const tip = to ? 'Add this passage to the cluster “' + CL[target].title + '”' : 'Add this passage to the class session';
  if (b.title !== tip) b.title = tip;
  b.classList.toggle('on', inn);
}
function railButton() {
  // the Connections tab has a row of actions for it; the other tabs, the passage's date line above
  const pa = document.querySelector('#railbody .pactions') || document.querySelector('#railhead .pmeta');
  if (!pa) return;
  let b = pa.querySelector('.csrail');
  if (!b) {
    b = el('button', null, 'btn csrail');
    b.type = 'button';
    b.title = 'Add this passage to the class session';
    if (pa.classList.contains('pmeta')) pa.appendChild(b); else pa.insertBefore(b, pa.querySelector('a'));
    b.addEventListener('click', () => { if (S.sel != null && !has(S.sel)) add(S.sel); else { open = true; redraw(); } });
  }
  railLabel();
}
['railbody', 'railhead'].forEach(id => { const x = $(id); if (x) new MutationObserver(railButton).observe(x, { childList: true, subtree: true }); });

/* ── Copy for Canvas ────────────────────────────────────────────────────────
   Rich text, which Canvas's editor keeps, with plain text beside it: each passage cited, with
   its opening words, its note, and a link to it in the portal; each note as written. */
function itemParts(x, k) {
  const pre = (k != null ? k + '. ' : '');
  if (isNote(x)) return { h: '<li>' + esc(flat(x.text) || '(an empty note)') + '</li>', t: pre + (flat(x.text) || '(an empty note)') };
  if (isCluster(x)) {   // its passages beneath it, numbered 3.1, 3.2 …
    const its = cItems(x), sub = its.map((y, j) => itemParts(y, (k != null ? k + '.' : '') + (j + 1))), what = clTitle(x) + ' (a cluster of ' + plural(its.length, 'passage') + ')';
    return { h: '<li><b>' + esc(what) + '</b><ol>' + sub.map(s => s.h).join('') + '</ol></li>', t: pre + what + (sub.length ? '\n' + sub.map(s => '   ' + s.t.replace(/\n/g, '\n   ')).join('\n') : '') };
  }
  const p = pOf(x.ref), url = passageUrl(x.ref), words = p ? clip(flat(p.text), 260) : '';
  return { h: '<li><b>' + esc(citeOf(x)) + '</b> · <a href="' + esc(url) + '">read it in the portal</a>' + (words ? '<br><span lang="de">' + esc(words) + '</span>' : '') + (flat(x.note) ? '<br>Note: ' + esc(x.note.trim()) : '') + '</li>',
    t: pre + citeOf(x) + '\n   ' + url + (words ? '\n   ' + words : '') + (flat(x.note) ? '\n   Note: ' + x.note.trim() : '') };
}
function listParts(items, start) {
  const ps = items.map((x, j) => itemParts(x, (start || 1) + j));
  return { h: '<ol' + (start > 1 ? ' start="' + start + '"' : '') + '>' + ps.map(p => p.h).join('') + '</ol>', t: ps.map(p => p.t).join('\n') };
}
// A session: its items, then its investigations, each naming its items by number
function sessionBlock(d, slug) {
  const link = slug ? SITE_DIR + '?session=' + slug : '';
  const title = d.title + (d.title.includes(longDate(d.date)) ? '' : ' (' + longDate(d.date) + ')');
  const l = listParts(d.items, 1);
  const iv = (d.investigations || []).map(v => ({ h: '<li><a href="' + esc(SITE_DIR + '?investigation=' + v.id) + '">' + esc(v.title) + '</a>' + (v.items.length ? ': items ' + v.items.join(', ') : '') + '</li>',
    t: '- ' + v.title + (v.items.length ? ': items ' + v.items.join(', ') : '') + '\n  ' + SITE_DIR + '?investigation=' + v.id }));
  return { html: '<p><b>' + esc(title) + '</b>' + (link ? ' · <a href="' + esc(link) + '">the session in the Logic Portal</a>' : '') + '</p>' + l.h +
      (iv.length ? '<p><b>To investigate</b></p><ul>' + iv.map(x => x.h).join('') + '</ul>' : ''),
    text: title + (link ? '\n' + link : '') + '\n\n' + l.t + (iv.length ? '\n\nTo investigate\n' + iv.map(x => x.t).join('\n') : '') };
}
// An investigation: in the session page, its items here; on its own page, every session's
function invBlock(v, d) {
  const link = SITE_DIR + '?investigation=' + v.id;
  if (d) {   // from the session page
    const l = listParts(v.items.map(itemById).filter(Boolean), 1);
    return { html: '<p><b>To investigate: ' + esc(v.title) + '</b> · <a href="' + esc(link) + '">in the Logic Portal</a></p>' + (flat(v.about) ? '<p>' + esc(v.about.trim()) + '</p>' : '') + l.h,
      text: 'To investigate: ' + v.title + '\n' + link + (flat(v.about) ? '\n' + v.about.trim() : '') + '\n\n' + l.t };
  }
  const parts = v.from.map(c => ({ c, l: listParts(c.items, 1) }));
  return { html: '<p><b>To investigate: ' + esc(v.title) + '</b> · <a href="' + esc(link) + '">in the Logic Portal</a></p>' + (v.about ? '<p>' + esc(v.about) + '</p>' : '') +
      parts.map(x => '<p><i>From ' + esc(x.c.title) + '</i></p>' + x.l.h).join(''),
    text: 'To investigate: ' + v.title + '\n' + link + (v.about ? '\n' + v.about : '') + '\n\n' + parts.map(x => 'From ' + x.c.title + '\n' + x.l.t).join('\n\n') };
}
async function copyForCanvas(c) {
  try {
    if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write)
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([c.html], { type: 'text/html' }), 'text/plain': new Blob([c.text], { type: 'text/plain' }) })]);
    else await navigator.clipboard.writeText(c.text);
    toast('Copied for Canvas: paste it into the class discussion.');
  } catch (e) { window.prompt('Copy this, then paste it into the class discussion:', c.text); }
}

/* ── Word: the session as a .docx, to keep or rework without saving it for the class ──
   Written here with no library, as the handout tray writes one. Every paragraph names a style,
   and Normal is the default style, so that Pages does not carry one paragraph's look into the
   next. Each passage comes whole, with its English when the portal's English is on. */
const xml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const runOf = (t, pr) => String(t).split('\n').map((line, j) => '<w:r>' + (pr ? '<w:rPr>' + pr + '</w:rPr>' : '') + (j ? '<w:br/>' : '') + '<w:t xml:space="preserve">' + xml(line) + '</w:t></w:r>').join('');
// with marks, *italic* and **bold** (as the English has them) become real italics and bold
const runs = (s, marks, base) => (marks ? String(s).split(/(\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g) : [String(s)]).filter(Boolean).map(part =>
  marks && /^\*\*[^*]+\*\*$/.test(part) ? runOf(part.slice(2, -2), (base || '') + '<w:b/>')
    : marks && /^\*[^*]+\*$/.test(part) ? runOf(part.slice(1, -1), (base || '') + '<w:i/>') : runOf(part, base || '')).join('');
const para = (style, body) => '<w:p><w:pPr><w:pStyle w:val="' + style + '"/></w:pPr>' + body + '</w:p>';
const paras = s => String(s || '').split(/\n\s*\n/).map(x => x.trim()).filter(Boolean);
const citeRuns = x => runs(x.author + ', ') + runs(x.work, false, '<w:i/>') + runs(', ' + x.cite);
function docxBlob() {
  const d = sessionData(), state = { waiting: 0 };
  const B = [para('Title', runs(d.title)), para('Subtitle', runs(longDate(d.date) + (d.discussion ? ' · Class discussion: ' + d.discussion : '')))];
  B.push(para('Heading1', runs('In this session')));
  const passage = (x, num) => {
    const p = pOf(x.ref), e = p ? englishOf(p) : null;
    if (e === 'loading') state.waiting++;
    const en = e && e !== 'loading';
    B.push(para('Label', runs(num + ' ', false, '<w:b/>') + citeRuns(x) + (en ? runs(' · English: machine translation') : '')));
    B.push(para('Passage', p ? runs(p.text) : runs('(This passage is no longer in the portal.)', false, '<w:i/>')));
    if (en) B.push(para('PassageEnglish', runs(e, true)));
    paras(x.note).forEach(t => B.push(para('PassageNote', runs(t))));
  };
  d.items.forEach((x, k) => {
    if (isNote(x)) { (paras(x.text).length ? paras(x.text) : ['(an empty note)']).forEach((t, j) => B.push(para('Note', (j ? '' : runs((k + 1) + '. ', false, '<w:b/>')) + runs(t)))); return; }
    if (isCluster(x)) {
      B.push(para('Heading2', runs((k + 1) + '. ' + x.title) + runs(' · a cluster of ' + plural(x.items.length, 'passage'), false, '<w:b w:val="0"/><w:i/>')));
      x.items.forEach((y, j) => passage(y, (k + 1) + '.' + (j + 1) + '.'));
      return;
    }
    passage(x, (k + 1) + '.');
  });
  if (d.investigations.length) {
    B.push(para('Heading1', runs('To investigate')));
    d.investigations.forEach(v => {
      B.push(para('Heading2', runs(v.title)));
      if (v.continues) B.push(para('Small', runs('Continues an investigation begun in an earlier session.')));
      paras(v.about).forEach(t => B.push(para('Normal', runs(t))));
      v.items.forEach(n => { const x = d.items[n - 1]; if (x) B.push(para('ListItem', runs(n + '. ', false, '<w:b/>') + (isNote(x) ? runs(clip(flat(x.text), 140) || '(an empty note)', false, '<w:i/>')
        : isCluster(x) ? runs(x.title + ', a cluster of ' + plural(x.items.length, 'passage')) : citeRuns(x)))); });
      if (v.discussion) B.push(para('Small', runs('Its discussion: ' + v.discussion)));
    });
  }
  const W = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
  const font = '<w:rFonts w:ascii="Hoefler Text" w:hAnsi="Hoefler Text" w:cs="Hoefler Text" w:eastAsia="Hoefler Text"/>';
  const style = (id, name, ppr, rpr) => '<w:style w:type="paragraph" w:styleId="' + id + '"><w:name w:val="' + name + '"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/>' +
    (ppr ? '<w:pPr>' + ppr + '</w:pPr>' : '') + (rpr ? '<w:rPr>' + rpr + '</w:rPr>' : '') + '</w:style>';
  const styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles ' + W + '>' +
    '<w:docDefaults><w:rPrDefault><w:rPr>' + font + '<w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="en-US"/></w:rPr></w:rPrDefault>' +
    '<w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>' +
    '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:rPr>' + font + '<w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:style>' +
    style('Title', 'Title', '<w:jc w:val="center"/><w:spacing w:after="80"/>', '<w:b/><w:sz w:val="34"/><w:szCs w:val="34"/>') +
    style('Subtitle', 'Subtitle', '<w:jc w:val="center"/><w:spacing w:after="320"/>', '<w:i/><w:color w:val="555555"/>') +
    style('Heading1', 'heading 1', '<w:keepNext/><w:spacing w:before="320" w:after="140"/><w:outlineLvl w:val="0"/>', '<w:b/><w:sz w:val="26"/><w:szCs w:val="26"/>') +
    style('Heading2', 'heading 2', '<w:keepNext/><w:spacing w:before="240" w:after="80"/><w:outlineLvl w:val="1"/>', '<w:b/>') +
    style('Label', 'Passage Label', '<w:keepNext/><w:spacing w:before="200" w:after="60"/>', '<w:sz w:val="20"/><w:szCs w:val="20"/>') +
    style('Passage', 'Passage', '<w:keepNext/><w:ind w:left="567" w:right="567"/><w:spacing w:after="60"/>', '') +
    style('PassageEnglish', 'Passage English', '<w:keepNext/><w:ind w:left="567" w:right="567"/><w:spacing w:before="60" w:after="60"/>', '<w:color w:val="333333"/><w:sz w:val="21"/><w:szCs w:val="21"/>') +
    style('PassageNote', 'Passage Note', '<w:ind w:left="567" w:right="567"/><w:spacing w:before="60" w:after="120"/>', '<w:i/>') +
    style('Note', 'Note', '<w:spacing w:before="200" w:after="120"/>', '') +
    style('ListItem', 'List Item', '<w:ind w:left="567" w:hanging="340"/><w:spacing w:after="40"/>', '') +
    style('Small', 'Small', '<w:spacing w:after="80"/>', '<w:color w:val="555555"/><w:sz w:val="19"/><w:szCs w:val="19"/>') +
    '</w:styles>';
  const doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ' + W + '><w:body>' + B.join('') +
    '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr></w:body></w:document>';
  const rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
  return { waiting: state.waiting, blob: zip([
    ['[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
      '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'],
    ['_rels/.rels', rels + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'],
    ['word/_rels/document.xml.rels', rels + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'],
    ['word/document.xml', doc],
    ['word/styles.xml', styles],
  ], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') };
}
function exportWord() {
  if (!D.items.length) return;
  const w = docxBlob(), name = publication().slug + '.docx';
  download(w.blob, name);
  toast(w.waiting ? 'Saved as ' + name + ', but the English was still loading for ' + plural(w.waiting, 'passage') + ': export again in a moment to include it.'
    : 'Saved as ' + name + ', in your Downloads.');
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

/* ── For students: a session, an investigation, every investigation ─────── */
let view = null;
const ready = () => new Promise(res => { const t = () => ($('loading') && !$('loading').hidden ? setTimeout(t, 250) : res()); t(); });
const params = new URLSearchParams(location.search);
function openView(label) {
  view = el('div', 'csview');
  view.innerHTML = '<div class="csvbar"><a class="btn" href="' + esc(location.pathname) + '" title="The portal">← The Logic Portal</a><b class="cz">' + esc(label) + '</b>' +
    '<span class="spacer"></span><a class="linkish" href="?investigate">Every investigation</a></div><main><div class="cswrap"><p class="muted">Opening…</p></div></main>';
  document.body.appendChild(view);
  view.addEventListener('click', e => {
    const g = e.target.closest('[data-csgoto]');
    if (g) { const t = view.querySelector('#' + g.dataset.csgoto); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    const c = e.target.closest('[data-cscopy]');
    if (c && view._copy) view._copy(c.dataset.cscopy);
  });
}
function englishOf(p) {
  const tr = PT.trFor && PT.trFor(TEXTS[p.t]);
  if (!tr || !S.en) return null;
  const st = PT.trState(tr, S.en);
  if (st === 'loading') return 'loading';
  if (st !== 'ready') return null;
  const e = PT.trEntry(tr, S.en, p);
  return e ? e.text : null;
}
// One item, for students: a passage drawn live, with its English when the English is on, a note, or a cluster
function itemHtml(it, n, id, state, extra, date) {
  if (isCluster(it)) return clusterHtml(it, n, id, state, extra, date);
  if (isNote(it)) return '<div class="csvpass csvnote" id="' + id + '"><div class="csvn">' + n + '</div><div class="csvbody"><div class="csvntext">' + esc(it.text).replace(/\n/g, '<br>') + '</div>' + (extra || '') + '</div></div>';
  const p = pOf(it.ref);
  let h = '<div class="csvpass" id="' + id + '"><div class="csvn">' + n + '</div><div class="csvbody">';
  h += p ? '<div class="csvtext" lang="de">' + esc(p.text) + '</div>' : '<div class="csvtext muted">(This passage is no longer in the portal.)</div>';
  const e = p ? englishOf(p) : null;
  if (e === 'loading') { state.waiting = true; h += '<div class="csven muted" lang="en">English loading…</div>'; }
  else if (e) h += '<div class="csven" lang="en">' + rich(e) + '</div>';
  if (flat(it.note)) h += '<div class="csvpn">' + esc(it.note) + '</div>';
  h += '<div class="csvcite">' + esc(citeOf(it)) + (e && e !== 'loading' ? ' · English: machine translation' : '') + (p ? '<a href="#p=' + encodeURIComponent(it.ref) + '&rt=conn" class="csvctx">Read it in context ›</a>' : '') + '</div>';
  return h + (extra || '') + '</div></div>';
}
/* A cluster, for students: as it is now, its passages numbered under it. What was added after the
   class (the session's date) says so, and so does what has been taken out since it was saved. */
function clusterHtml(it, n, id, state, extra, date) {
  const its = it.items || [], gone = it.gone || 0;
  return '<div class="csvpass csvcl" id="' + id + '"><div class="csvn">' + n + '</div><div class="csvbody">' +
    '<div class="csvclh">❖ <b>' + esc(it.title || it.cluster) + '</b> <span>a cluster of ' + plural(its.length, 'passage') + '</span></div>' +
    (gone ? '<div class="csvlater">' + (gone === 1 ? 'One passage that was in it at this class has' : gone + ' passages that were in it at this class have') + ' since been taken out of the cluster.</div>' : '') +
    (extra || '') +
    its.map((y, j) => itemHtml(y, n + '.' + (j + 1), id + '-' + (j + 1), state,
      date && y.added && y.added > date ? '<div class="csvlater">Added to the cluster after this class, on ' + esc(longDate(y.added)) + '.</div>' : '')).join('') +
    '</div></div>';
}
/* The clusters saved for the class: GitHub says what is in clusters/ (once a visit). */
async function loadCluster(id) {
  try { const r = await fetch('clusters/' + id + '.json', { cache: 'no-cache' }); if (r.ok) { const c = await r.json(); if (c && Array.isArray(c.items)) return Object.assign(c, { id }); } } catch (e) { /* none */ }
  return null;
}
async function pubClusters() {
  if (PUBCL) return PUBCL;
  try { const c = sessionStorage.getItem('kantlab-clusters-saved-v1'); if (c) return (PUBCL = JSON.parse(c)); } catch (e) { /* ask GitHub */ }
  const m = {};
  try {
    const r = await fetch('https://api.github.com/repos/' + REPO + '/contents/' + CL_DIR + '?ref=main');
    const files = r.ok ? (await r.json()).filter(f => f.type === 'file' && /^[a-z0-9-]+\.json$/.test(f.name)) : [];
    (await Promise.all(files.map(f => loadCluster(f.name.replace(/\.json$/, ''))))).forEach(c => { if (c) m[c.id] = c; });
  } catch (e) { /* none */ }
  PUBCL = m;
  try { sessionStorage.setItem('kantlab-clusters-saved-v1', JSON.stringify(m)); } catch (e) { /* fine */ }
  return PUBCL;
}
// Saved sessions' clusters, as they are now: each keeps the passages it had when saved, in `snap`
async function liven(list) {
  const ids = new Set();
  list.forEach(s => s.items.forEach(x => { if (isCluster(x) && !x.snap) ids.add(x.cluster); }));
  const now = {};
  await Promise.all([...ids].map(async id => { now[id] = await loadCluster(id); }));
  list.forEach(s => s.items.forEach(x => {
    if (!isCluster(x) || x.snap || !now[x.cluster]) return;
    const live = now[x.cluster];
    x.snap = x.items || [];
    x.gone = x.snap.filter(y => !live.items.some(z => z.ref === y.ref)).length;
    x.items = live.items; x.title = live.title || x.title;
  }));
}
const discBtn = (url, label) => /^https?:\/\//.test(url || '') ? '<a class="btn solid" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(label) + ' ↗</a>' : '';
async function load(slug) { try { const r = await fetch('sessions/' + slug + '.json', { cache: 'no-cache' }); if (r.ok) return norm(await r.json()); } catch (e) { /* none */ } return null; }
// A session file of either shape, as version 2: the first version's marked items become one investigation
function norm(d) {
  if (!d || !Array.isArray(d.items)) return null;
  if (!d.investigations) {
    const q = d.items.map((x, k) => x.q ? k + 1 : 0).filter(Boolean);
    d.investigations = q.length ? [{ id: slugOf(d.title) + '-questions', title: 'Questions from ' + d.title, items: q }] : [];
  }
  return d;
}
async function showSession(slug) {
  openView('Class session');
  const d = await load(slug), box = view.querySelector('.cswrap');
  if (!d) { box.innerHTML = '<p>There is no class session called “' + esc(slug) + '” here. If it was saved a minute ago, try again shortly.</p>'; return; }
  document.title = d.title + ' · The Logic Portal';
  await liven([d]);
  await ready();
  drawSession(d, slug, 0);
}
function drawSession(d, slug, tries) {
  const box = view.querySelector('.cswrap'), state = { waiting: false };
  const np = nPass(d.items), nn = d.items.filter(isNote).length, inv = d.investigations || [];
  const tags = n => inv.filter(v => v.items.includes(n)).map(v => '<a class="csvtag" href="?investigation=' + esc(v.id) + '">' + esc(v.title) + '</a>').join('');
  view._copy = () => copyForCanvas(sessionBlock(d, slug));
  box.innerHTML = '<h1>' + esc(d.title) + '</h1><div class="csvdate">' + esc(longDate(d.date)) + ' · ' + plural(np, 'passage') + (nn ? ', ' + plural(nn, 'note') : '') + '</div>' +
    '<p class="csvdisc">' + discBtn(d.discussion, 'Comments: the class discussion') + '<button type="button" class="linkish" data-cscopy="all">Copy the session for Canvas</button>' +
      '<a class="linkish" href="' + esc(SCREEN + '?session=' + slug) + '" target="kantlab-class-screen" title="Show this session on the room’s screen">On the class screen ↗</a>' +
      '<span class="muted small">Name a passage by its number when you comment on it.</span></p>' +
    (inv.length ? '<div class="csvtodo"><b>To investigate</b><ul>' + inv.map(v => '<li><a href="?investigation=' + esc(v.id) + '">' + esc(v.title) + '</a> <span class="muted small">' +
      (v.items.length ? 'items ' + v.items.map(n => '<button type="button" class="linkish" data-csgoto="cs-i-' + n + '">' + n + '</button>').join(', ') : '') + (v.continues ? ' · continued from earlier sessions' : '') + '</span></li>').join('') + '</ul></div>' : '') +
    d.items.map((it, k) => itemHtml(it, k + 1, 'cs-i-' + (k + 1), state, tags(k + 1) ? '<div class="csvtags">' + tags(k + 1) + '</div>' : '', d.date)).join('');
  if (state.waiting && tries < 40) setTimeout(() => drawSession(d, slug, tries + 1), 500);
}

/* Every investigation, from every saved session: what each session added to it, oldest first,
   with its latest title, account and discussion. */
function aggregate(list) {
  const m = new Map();
  list.slice().sort((a, b) => (a.date || '').localeCompare(b.date || '')).forEach(s => (s.investigations || []).forEach(v => {
    const x = m.get(v.id) || { id: v.id, title: v.title, about: '', discussion: '', from: [], count: 0, last: '' };
    x.title = v.title || x.title;
    if (v.about) x.about = v.about;
    if (v.discussion) x.discussion = v.discussion;
    const items = v.items.map(n => s.items[n - 1]).filter(Boolean);
    x.from.push({ slug: s.slug, title: s.title, date: s.date, items, nums: v.items });
    x.count += items.length; x.last = s.date;
    m.set(v.id, x);
  }));
  return [...m.values()].sort((a, b) => (b.last || '').localeCompare(a.last || '') || a.title.localeCompare(b.title));
}
async function showInvestigation(id) {
  openView('Investigation');
  const list = await sessions();
  await liven(list);
  const v = aggregate(list).find(x => x.id === id), box = view.querySelector('.cswrap');
  if (!v) { box.innerHTML = '<p>There is no investigation called “' + esc(id) + '” in the saved sessions yet. If a session was saved a minute ago, try again shortly.</p>'; return; }
  document.title = v.title + ' · The Logic Portal';
  await ready();
  drawInvestigation(v, 0);
}
function drawInvestigation(v, tries) {
  const box = view.querySelector('.cswrap'), state = { waiting: false };
  view._copy = () => copyForCanvas(invBlock(v));
  box.innerHTML = '<div class="csvkind">INVESTIGATION</div><h1>' + esc(v.title) + '</h1><div class="csvdate">' + plural(v.count, 'item') + ' from ' + plural(v.from.length, 'session') + ' · last added to ' + esc(longDate(v.last)) + '</div>' +
    (v.about ? '<p class="csvabout">' + esc(v.about) + '</p>' : '') +
    '<p class="csvdisc">' + discBtn(v.discussion, 'Its discussion') + '<button type="button" class="linkish" data-cscopy="all">Copy it for Canvas</button></p>' +
    v.from.map(c => '<h2 class="csvg"><a href="?session=' + esc(c.slug) + '">' + esc(c.title) + '</a><span>' + esc(longDate(c.date)) + '</span></h2>' +
      c.items.map((it, k) => itemHtml(it, c.nums[k], 'cs-' + c.slug + '-' + k, state, '', c.date)).join('')).join('');
  if (state.waiting && tries < 40) setTimeout(() => drawInvestigation(v, tries + 1), 500);
}
async function showInvestigate() {
  openView('Investigations');
  document.title = 'Investigations · The Logic Portal';
  const all = aggregate(await sessions()), box = view.querySelector('.cswrap');
  await ready();
  view._copy = () => copyForCanvas({
    html: '<p><b>Investigations</b> · <a href="' + esc(SITE_DIR + '?investigate') + '">in the Logic Portal</a></p><ul>' + all.map(v => '<li><a href="' + esc(SITE_DIR + '?investigation=' + v.id) + '">' + esc(v.title) + '</a> (' + plural(v.count, 'item') + ', last added to ' + esc(longDate(v.last)) + ')' + (v.about ? '<br>' + esc(v.about) : '') + '</li>').join('') + '</ul>',
    text: 'Investigations\n' + SITE_DIR + '?investigate\n\n' + all.map(v => '- ' + v.title + ' (' + plural(v.count, 'item') + ')\n  ' + SITE_DIR + '?investigation=' + v.id + (v.about ? '\n  ' + v.about : '')).join('\n') });
  box.innerHTML = '<h1>Investigations</h1><div class="csvdate">The questions the class is looking into, each with the passages and notes bundled with it, from every saved session · newest first</div>' +
    (all.length ? '<p><button type="button" class="linkish" data-cscopy="all">Copy the list for Canvas</button></p><div class="csclist">' + all.map(v =>
      '<a class="csc inv" href="?investigation=' + esc(v.id) + '"><b>' + esc(v.title) + '</b><span>' + plural(v.count, 'item') + ' · ' + plural(v.from.length, 'session') + ' · last added to ' + esc(longDate(v.last)) + '</span>' + (v.about ? '<em>' + esc(clip(v.about, 140)) + '</em>' : '') + '</a>').join('') + '</div>'
      : '<p>No investigation has been saved yet. In a class session, bundle items into an investigation on the session page, then save the session.</p>');
}
const back = el('button', 'csback', 'btn solid');
back.type = 'button'; back.hidden = true; back.textContent = '← Back';
document.body.appendChild(back);
document.addEventListener('click', e => {
  if (!view || !e.target.closest || !e.target.closest('#csview .csvctx')) return;
  view.hidden = true; back.hidden = false; hideHover();
});
back.addEventListener('click', () => { if (view) { view.hidden = false; back.hidden = true; } });

/* ── The saved sessions: GitHub says what is in sessions/ (once a visit), and Read lists them ── */
let LIST = null;
async function sessions() {
  if (LIST) return LIST;
  try { const c = sessionStorage.getItem('kantlab-class-sessions-v3'); if (c) return (LIST = JSON.parse(c)); } catch (e) { /* ask GitHub */ }
  try {
    const r = await fetch('https://api.github.com/repos/' + REPO + '/contents/' + DIR + '?ref=main');
    const files = r.ok ? (await r.json()).filter(f => f.type === 'file' && /^[a-z0-9-]+\.json$/.test(f.name)) : [];
    LIST = (await Promise.all(files.map(async f => { const slug = f.name.replace(/\.json$/, ''), d = await load(slug); return d ? Object.assign({ slug }, d) : null; }))).filter(Boolean);
    LIST.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  } catch (e) { LIST = []; }
  try { sessionStorage.setItem('kantlab-class-sessions-v3', JSON.stringify(LIST)); } catch (e) { /* fine */ }
  return LIST;
}
const readView = $('view-read');
async function readList() {
  const box = readView && readView.querySelector('.explore');
  if (!box || box.querySelector('.cslisted')) return;
  const list = await sessions();
  if (!list.length || box.querySelector('.cslisted') || !box.isConnected) return;
  const inv = aggregate(list);
  const sec = el('section', null, 'cslisted');
  sec.innerHTML = '<div class="ph">CLASS SESSIONS AND INVESTIGATIONS</div><div class="csclist">' +
    (inv.length ? '<a class="csc inv" href="?investigate"><b>Investigations</b><span>' + plural(inv.length, 'question') + ' the class is looking into, with what bears on them</span></a>' : '') +
    list.map(x => { const np = nPass(x.items); return '<a class="csc" href="?session=' + esc(x.slug) + '"><b>' + esc(x.title) + '</b><span>' + esc(longDate(x.date)) + ' · ' + plural(np, 'passage') + '</span></a>'; }).join('') + '</div>';
  const intro = box.querySelector('.intro');
  if (intro) intro.after(sec); else box.prepend(sec);
}
if (readView) new MutationObserver(readList).observe(readView, { childList: true });

/* ── Styles ─────────────────────────────────────────────────────────────── */
const css = el('style');
css.textContent = `
  #csbtn .csn { display: inline-block; min-width: 1.2rem; margin-left: 0.3rem; padding: 0 0.35rem; border-radius: 999px; background: var(--parchment-dark); color: var(--accent); font-size: 0.8rem; text-align: center; }
  #csbtn.on { border-color: #9a3b1e; color: #9a3b1e; }
  #csbtn.on .csn { background: #9a3b1e; color: var(--parchment); }
  #cspanel { position: fixed; z-index: 44; right: 1rem; bottom: 1rem; width: 21rem; max-width: calc(100vw - 2rem); background: var(--card); border: 1px solid var(--accent-light); border-radius: 10px; box-shadow: 0 6px 22px rgba(40, 25, 10, 0.22); padding: 0.55rem 0.8rem 0.65rem; font-size: 0.94rem; }
  #cspanel[hidden], #cspage[hidden], #csview[hidden], #cstoast[hidden], #csback[hidden], .csfloat[hidden], .pactions .csrail[hidden], .pmeta .csrail[hidden] { display: none; }
  #cspanel .csbar { display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.3rem; min-width: 0; }
  #cspanel .csbar .muted { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
  #cspanel .cz, #cspage .cz { color: var(--accent); }
  .csrow { display: flex; align-items: baseline; gap: 0.35rem; margin: 0.1rem 0 0.4rem; cursor: pointer; }
  #cspanel .cslast { margin: 0 0 0.45rem; padding-left: 1.6rem; font-size: 0.88rem; line-height: 1.3; }
  #cspanel .cslast li { margin: 0.1rem 0; }
  #cspanel .cslast a { color: inherit; text-decoration: none; }
  #cspanel .cslast a:hover { color: var(--accent); text-decoration: underline; }
  .csnl { font-style: italic; }
  #cspanel .csquick { display: flex; gap: 0.35rem; margin: 0 0 0.5rem; }
  #cspanel .csquick input { flex: 1; min-width: 0; padding: 0.2rem 0.5rem; border: 1px solid var(--line); border-radius: 999px; background: var(--paper); font-size: 0.88rem; }
  #cspanel .csquick .btn { font-size: 0.84rem; padding: 0.05rem 0.6rem; }
  #cspanel .csopen { display: flex; align-items: baseline; gap: 0.6rem; margin: 0; }
  #cspanel .csopen .spacer { flex: 1; }
  #cspage { position: fixed; inset: 0; z-index: 31; background: var(--parchment); display: flex; flex-direction: column; }
  #cspage .cspbar { display: flex; align-items: center; gap: 0.8rem; padding: 0.6rem 1.6rem; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
  #cspage .cspbar .cz { font-size: 1.05rem; }
  #cspage .cspbar .spacer { flex: 1; }
  #cspage .csrow.inbar { margin: 0; font-size: 0.92rem; color: var(--faded); }
  #cspage a.btn { text-decoration: none; }
  #cspage .cspbody { flex: 1; overflow-y: auto; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); gap: 1.4rem; padding: 1.1rem 1.8rem 3rem; align-content: start; }
  @media (max-width: 900px) { #cspage .cspbody { grid-template-columns: minmax(0, 1fr); } }
  #cspage .cstitle { width: 100%; font-family: 'Cinzel', serif; font-size: 1.3rem; color: var(--accent); background: transparent; border: none; border-bottom: 1px dashed var(--line); padding: 0.15rem 0; }
  #cspage .cstitle:focus, #cspage .csvtitle:focus { outline: none; border-bottom-color: var(--accent-light); }
  #cspage .csmeta { display: flex; gap: 0.8rem; align-items: center; margin: 0.4rem 0 0.9rem; }
  #cspage input[type=url], #cspage textarea, #cspage select, #cspage .csnewform input { font: inherit; font-size: 0.9rem; padding: 0.22rem 0.5rem; border: 1px solid var(--line); border-radius: 6px; background: var(--paper); }
  #cspage .csmeta .csdisc { flex: 1; min-width: 0; }
  #cspage .csh { font-family: 'Cinzel', serif; font-size: 0.82rem; letter-spacing: 0.08em; color: var(--accent); font-weight: 600; margin: 0 0 0.5rem; }
  #cspage .csh .muted { font-family: 'EB Garamond', serif; letter-spacing: 0; font-weight: 400; font-size: 0.86rem; margin-left: 0.4rem; }
  #cspage .csitems { list-style: none; margin: 0 0 0.6rem; padding: 0; }
  #cspage .csit { display: grid; grid-template-columns: 2.6rem minmax(0, 1fr) auto; gap: 0.3rem; align-items: start; background: var(--card); border: 1px solid var(--line-soft); border-radius: 8px; padding: 0.45rem 0.55rem; margin-bottom: 0.45rem; }
  #cspage .csit.on { border-color: var(--accent-light); box-shadow: 0 0 0 2px var(--hl); }
  #cspage .csit.note { background: var(--paper); }
  #cspage .cstick { display: flex; align-items: baseline; gap: 0.3rem; cursor: pointer; }
  .csnum { font-family: 'Cinzel', serif; color: var(--accent-light); font-size: 0.9rem; }
  #cspage .cshead { display: flex; align-items: baseline; gap: 0.25rem; }
  #cspage .csfold { background: none; border: none; color: var(--accent-light); cursor: pointer; padding: 0 0.1rem; font-size: 0.85rem; width: 1rem; flex: none; }
  #cspage .csfold:hover { color: var(--accent); }
  #cspage .cscite { text-align: left; color: var(--accent); font-size: 0.98rem; }
  #cspage .cscite:hover { text-decoration: underline; }
  #cspage .csword { font-size: 0.86rem; color: #4b4034; margin: 0.15rem 0 0 1.25rem; cursor: pointer; }
  #cspage .csword:hover { color: var(--ink); }
  #cspage .cswhole { white-space: pre-wrap; line-height: 1.5; font-size: 0.95rem; margin: 0.25rem 0 0 1.25rem; cursor: pointer; }
  #cspage .csen { margin: 0.4rem 0 0 1.25rem; padding-left: 0.6rem; border-left: 2px solid var(--line); color: #4b4034; font-size: 0.9rem; white-space: pre-wrap; }
  #cspage .csit textarea { display: block; width: 100%; margin-top: 0.25rem; resize: vertical; }
  #cspage .csit.note textarea { margin-top: 0; }
  #cspage .cschips { display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.3rem; }
  .cschip { display: inline-flex; align-items: baseline; gap: 0.2rem; font-size: 0.78rem; color: #8a6417; border: 1px solid #d9bf83; background: #fbf4e2; border-radius: 999px; padding: 0 0.15rem 0 0.5rem; }
  .cschip button, #cspage .csx { background: none; border: none; color: #b8935a; cursor: pointer; font-size: 0.72rem; padding: 0 0.25rem; }
  #cspage .csb { display: flex; gap: 0.05rem; }
  #cspage .csb button { background: none; border: none; color: var(--faded); cursor: pointer; padding: 0 0.22rem; font-size: 0.88rem; }
  #cspage .csb button:hover { color: var(--accent); }
  #cspage .csb button:disabled, #cspage .btn:disabled, #cspage .linkish:disabled { opacity: 0.4; cursor: default; }
  #cspage .csinv { background: #fbf6e8; border: 1px solid #d9bf83; border-left: 3px solid #b8860b; border-radius: 8px; padding: 0.6rem 0.8rem 0.55rem; margin-bottom: 0.8rem; }
  #cspage .csvtitle { width: 100%; font-size: 1.05rem; font-weight: 600; color: var(--accent); background: transparent; border: none; border-bottom: 1px dashed #d9bf83; padding: 0.1rem 0; margin-bottom: 0.3rem; }
  #cspage .csinv textarea, #cspage .csinv .csvdisc { display: block; width: 100%; margin: 0.3rem 0; resize: vertical; }
  #cspage .csvits { margin: 0.3rem 0; padding-left: 0; list-style: none; font-size: 0.92rem; }
  #cspage .csvits li { margin: 0.15rem 0; }
  #cspage .csvacts, #cspage .csnew { display: flex; flex-wrap: wrap; gap: 0.5rem 0.9rem; align-items: center; margin-top: 0.3rem; }
  #cspage .csnewform { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; width: 100%; }
  #cspage .csnewform input { flex: 1; min-width: 12rem; }
  #cspage .cscont { display: flex; flex-direction: column; gap: 0.1rem; }
  #cspage .cshelp { margin-top: 1rem; line-height: 1.4; }
  .csfloat { position: fixed; z-index: 45; border: 1px solid #9a3b1e; background: var(--card); color: #9a3b1e; border-radius: 999px; padding: 0.08rem 0.65rem; font-size: 0.8rem; cursor: pointer; box-shadow: 0 1px 5px rgba(60, 40, 20, 0.15); }
  .csfloat:hover { background: #9a3b1e; color: var(--parchment); }
  .csfloat.in { border-color: var(--line); color: var(--faded); }
  .pactions .csrail { border-color: #9a3b1e; color: #9a3b1e; }
  .pactions .csrail.on { border-color: var(--line); color: var(--faded); }
  .pmeta .csrail { margin-left: 0.6rem; padding: 0 0.55rem; font-size: 0.8rem; border-color: #9a3b1e; color: #9a3b1e; }
  .pmeta .csrail.on { border-color: var(--line); color: var(--faded); }
  #cstoast { position: fixed; z-index: 60; left: 50%; bottom: 1.4rem; transform: translateX(-50%); background: #3b2a17; color: var(--parchment); border-radius: 6px; padding: 0.5rem 0.9rem; font-size: 0.92rem; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25); display: flex; gap: 0.9rem; align-items: baseline; max-width: 90vw; }
  #cstoast button { background: none; border: none; color: #f1d98c; cursor: pointer; padding: 0; font: inherit; text-decoration: underline; }
  #csview { position: fixed; inset: 0; z-index: 30; background: var(--parchment); display: flex; flex-direction: column; }
  #csview .csvbar { display: flex; align-items: center; gap: 0.8rem; padding: 0.6rem 1.6rem; border-bottom: 1px solid var(--line); }
  #csview .csvbar .cz { color: var(--accent); font-size: 1.05rem; }
  #csview .csvbar .spacer { flex: 1; }
  #csview a.btn { text-decoration: none; }
  #csview main { flex: 1; overflow-y: auto; padding: 1.4rem 2rem 4rem; }
  #csview .cswrap { max-width: 46rem; margin: 0 auto; }
  #csview h1 { font-family: 'Cinzel', serif; color: var(--accent); font-weight: 600; font-size: 1.5rem; margin: 0 0 0.2rem; }
  #csview .csvkind { font-family: 'Cinzel', serif; font-size: 0.72rem; letter-spacing: 0.12em; color: #8a6417; }
  #csview .csvdate { color: var(--faded); font-style: italic; margin-bottom: 0.9rem; }
  #csview .csvabout { font-size: 1.04rem; border-left: 3px solid #d9bf83; padding-left: 0.8rem; }
  #csview .csvdisc { display: flex; flex-wrap: wrap; gap: 0.4rem 0.9rem; align-items: center; margin: 0 0 1.2rem; }
  #csview .csvpass { display: grid; grid-template-columns: 2rem minmax(0, 1fr); gap: 0.6rem; padding: 0.8rem 0; border-top: 1px solid var(--line-soft); }
  #csview .csvn { font-family: 'Cinzel', serif; font-size: 1.15rem; color: var(--accent-light); text-align: right; line-height: 1.3; }
  #csview .csvtext { white-space: pre-wrap; line-height: 1.55; }
  #csview .csven { margin-top: 0.4rem; padding-left: 0.7rem; border-left: 2px solid var(--line); color: #4b4034; font-size: 0.96rem; white-space: pre-wrap; }
  #csview .csvnote .csvntext { background: var(--card); border: 1px solid var(--line-soft); border-radius: 6px; padding: 0.5rem 0.7rem; font-style: italic; }
  #csview .csvpn { margin-top: 0.4rem; font-size: 0.94rem; color: #4b3a26; border-left: 2px solid #d9bf83; padding-left: 0.6rem; }
  #csview .csvcite { margin-top: 0.4rem; font-size: 0.86rem; color: var(--faded); }
  #csview .csvctx { margin-left: 0.8rem; }
  #csview .csvtags { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.35rem; }
  .csvtag { font-size: 0.8rem; color: #8a6417; border: 1px solid #d9bf83; background: #fbf4e2; border-radius: 999px; padding: 0 0.55rem; text-decoration: none; }
  .csvtag::before { content: '? '; font-weight: 700; }
  #csview .csvtodo { background: #fbf4e2; border: 1px solid #d9bf83; border-radius: 8px; padding: 0.6rem 0.9rem 0.4rem; margin: 0 0 1.2rem; }
  #csview .csvtodo ul { margin: 0.3rem 0; padding-left: 1.1rem; }
  #csview .csvtodo li { margin: 0.2rem 0; }
  #csview h2.csvg { font-family: 'Cinzel', serif; font-size: 1rem; color: var(--accent); margin: 1.6rem 0 0.2rem; display: flex; gap: 0.6rem; align-items: baseline; }
  #csview h2.csvg a { color: inherit; text-decoration: none; }
  #csview h2.csvg span { font-family: 'EB Garamond', serif; font-size: 0.9rem; color: var(--faded); font-style: italic; letter-spacing: 0; }
  #csback { position: fixed; z-index: 46; left: 50%; bottom: 1.2rem; transform: translateX(-50%); }
  .cslisted { margin: 0 0 1.6rem; }
  .csclist { display: grid; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); gap: 0.6rem; }
  .csc { display: block; background: var(--card); border: 1px solid var(--line-soft); border-left: 3px solid #9a3b1e; border-radius: 8px; padding: 0.6rem 0.8rem; text-decoration: none; color: var(--ink); }
  .csc:hover { border-color: var(--accent-light); }
  .csc b { display: block; font-weight: 500; }
  .csc span { display: block; font-size: 0.84rem; color: var(--faded); font-style: italic; }
  .csc em { display: block; font-size: 0.86rem; color: #4b4034; margin-top: 0.25rem; font-style: normal; }
  .csc.inv { border-left-color: #b8860b; background: #fbf4e2; }
  /* clusters: the accent's lighter brown, beside the session's red-brown and the investigations' gold */
  #cspanel .csto { margin: 0 0 0.45rem; cursor: default; }
  #cspanel .csto select { flex: 1; min-width: 0; font: inherit; font-size: 0.86rem; padding: 0.1rem 0.3rem; border: 1px solid var(--line); border-radius: 6px; background: var(--paper); }
  #cspanel .csclhead { font-size: 0.9rem; margin: 0 0 0.25rem; color: var(--accent); }
  .cscln b { font-weight: 600; }
  #cspage .csit.cl { border-left: 3px solid var(--accent-light); }
  #cspage .csclt { font-weight: 600; color: var(--accent); cursor: pointer; margin-right: 0.4rem; }
  #cspage .csclits { list-style: none; margin: 0.35rem 0 0 0.55rem; padding: 0 0 0 0.6rem; border-left: 1px solid var(--line); }
  #cspage .csclits > li { padding: 0.2rem 0; }
  #cspage .csclits .cshead .csb { margin-left: auto; }
  #cspage .csclits textarea { display: block; width: calc(100% - 1.25rem); margin: 0.25rem 0 0 1.25rem; resize: vertical; }
  #cspage .cshint { margin: 0.35rem 0 0 1.25rem; }
  #cspage .csadd { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
  #cspage .cshcl { margin-top: 1.4rem; }
  #cspage section.cscl { background: var(--card); border: 1px solid var(--line-soft); border-left: 3px solid var(--accent-light); border-radius: 8px; padding: 0.5rem 0.8rem; margin-bottom: 0.6rem; }
  #cspage section.cscl.to { box-shadow: 0 0 0 2px var(--hl); }
  #cspage section.cscl .csvtitle { border-bottom-color: var(--line); }
  #cspage .cswarn { color: #9a3b1e; }
  #csview .csvclh { color: var(--accent); font-size: 1.05rem; margin-bottom: 0.2rem; }
  #csview .csvclh span { color: var(--faded); font-style: italic; font-size: 0.92rem; margin-left: 0.3rem; }
  #csview .csvcl .csvpass { padding: 0.6rem 0 0.4rem; border-top: 1px dashed var(--line-soft); grid-template-columns: 2.4rem minmax(0, 1fr); }
  #csview .csvcl .csvn { font-size: 0.95rem; }
  #csview .csvlater { font-size: 0.85rem; color: #8a6417; font-style: italic; margin: 0.15rem 0 0.3rem; }
`;
document.head.appendChild(css);
document.body.classList.toggle('csrec', rec);
redraw();
// a link to a session, an investigation, or all of them (last, once all of the above is defined)
const wanted = params.get('session'), wantedInv = params.get('investigation');
if (wanted && /^[a-z0-9-]+$/.test(wanted)) showSession(wanted);
else if (wantedInv && /^[a-z0-9-]+$/.test(wantedInv)) showInvestigation(wantedInv);
else if (params.has('investigate')) showInvestigate();
})();
