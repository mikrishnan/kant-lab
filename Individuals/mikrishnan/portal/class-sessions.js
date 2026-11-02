/* Class sessions for the Logic Portal: the passages a class looks at together, kept as a record
   students can come back to.

   In class, whoever is leading turns on recording with the header's Session button, then
   clicks + Session on each passage the class examines: on a search hit, a paragraph of a full
   text, or the passage open on the right. The session collects them in order, in a panel at
   the bottom right, with a title and, if wanted, the link to the class's discussion in Canvas
   or Teams, where comments are kept (the portal stores no comments: the site is public, and
   it has nowhere to keep them).

   "Save for the class" publishes the session as a file in sessions/, through GitHub's own
   new-file page, as handouts are published. Students then find it under Read, as a class
   session, or at ?session=<name>: every passage drawn live from the portal, numbered so that
   comments can name it, with "Read it in context" and the link to the discussion.

   Until it is saved, a session is kept in this browser only (localStorage, one key). It reads
   the portal only through window.PORTAL. */
(function () {
'use strict';
const PT = window.PORTAL;
if (!PT || !PT.P || !PT.TEXTS) return;
const { S, P, TEXTS } = PT;

const KEY = 'kantlab-session-draft-v1';
const REPO = 'mikrishnan/kant-lab';
const DIR = 'Individuals/mikrishnan/portal/sessions';
const SITE_DIR = (PT.SITE_PORTAL || 'https://mikrishnan.github.io/kant-lab/Individuals/mikrishnan/portal/index.html').replace(/index\.html$/, '');

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

/* ── The session being recorded ─────────────────────────────────────────── */
function blank() { return { title: 'Class, ' + longDate(today()), date: today(), discussion: '', items: [], saved: null }; }
let D = (() => { try { const x = JSON.parse(localStorage.getItem(KEY) || 'null'); if (x && Array.isArray(x.items)) return x; } catch (e) { /* a new one */ } return blank(); })();
let rec = localStorage.getItem(KEY + '-rec') === 'on';
let open = false;
function save() { try { localStorage.setItem(KEY, JSON.stringify(D)); } catch (e) { toast('This browser would not keep the session. Use Save to file.'); } }
function setRec(on) { rec = on; try { if (on) localStorage.setItem(KEY + '-rec', 'on'); else localStorage.removeItem(KEY + '-rec'); } catch (e) { /* this visit only */ } document.body.classList.toggle('csrec', on); draw(); }
const has = i => D.items.some(x => x.ref === refOf(P[i]));
function add(i) {
  const p = P[i], T = TEXTS[p.t];
  if (has(i)) { toast('Already in this session, as passage ' + (D.items.findIndex(x => x.ref === refOf(p)) + 1) + '.'); return; }
  const now = new Date(), author = authorOf(T);
  D.items.push({ ref: refOf(p), cite: p.cite, author, work: T.title.replace(new RegExp('^' + author + ',\\s*'), ''), added: now.toTimeString().slice(0, 5) });
  save(); draw(); placeHover(); railLabel();
  toast('Passage ' + D.items.length + ' of the session: ' + T.short + ', ' + p.cite, [['Undo', () => { D.items.pop(); save(); draw(); railLabel(); }]]);
}

/* ── The header button and the panel ────────────────────────────────────── */
const btn = el('button', 'csbtn', 'btn');
btn.type = 'button';
btn.title = 'Collect the passages a class looks at, and save them for students';
const anchor = document.querySelector('header .more') || $('share');
if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(btn, anchor); else document.body.appendChild(btn);
btn.addEventListener('click', () => { open = !open; draw(); });

const panel = el('div', 'cspanel');
panel.hidden = true;
document.body.appendChild(panel);
const tst = el('div', 'cstoast');
tst.hidden = true;
document.body.appendChild(tst);
function toast(msg, acts) {
  tst._acts = acts || [];
  tst.innerHTML = '<span>' + esc(msg) + '</span>' + tst._acts.map((a, k) => '<button type="button" data-t="' + k + '">' + esc(a[0]) + '</button>').join('');
  tst.hidden = false;
  clearTimeout(tst._t);
  tst._t = setTimeout(() => { tst.hidden = true; }, 6000);
}
tst.addEventListener('click', e => { const b = e.target.closest('button[data-t]'); if (!b) return; tst.hidden = true; const a = tst._acts[+b.dataset.t]; if (a) a[1](); });

function draw() {
  const n = D.items.length;
  btn.innerHTML = rec ? '● Session' + (n ? ' <span class="csn">' + n + '</span>' : '') : 'Session' + (n ? ' <span class="csn">' + n + '</span>' : '');
  btn.classList.toggle('on', rec);
  panel.hidden = !open;
  if (!open) return;
  const pub = publication();
  panel.innerHTML = '<div class="csbar"><b class="cz">Class session</b><span class="spacer"></span>' +
    '<button type="button" class="linkish" data-c="close" title="Hide the panel; the session is kept">Hide</button></div>' +
    '<label class="csrow"><input type="checkbox" data-c="rec"' + (rec ? ' checked' : '') + '> <b>Recording</b> <span class="muted small">' +
      (rec ? 'point at a passage and press + Session' : 'turn on to add passages') + '</span></label>' +
    '<input class="cstitle" data-f="title" value="' + esc(D.title) + '" aria-label="Title of the session" spellcheck="false">' +
    '<ol class="cslist">' + (n ? D.items.map((x, k) => {
      const q = PT.BYID ? PT.BYID.get(x.ref) : null, p = q != null ? P[q] : null;
      return '<li><span class="csl"><button type="button" class="linkish" data-c="go" data-k="' + k + '" title="Open it in the portal"><b>' + esc(x.author === 'Kant' ? '' : x.author + ', ') + esc(p ? TEXTS[p.t].short : x.work) + '</b>, ' + esc(x.cite) + '</button>' +
        (p ? '<span class="muted">' + esc(clip(flat(p.text), 80)) + '</span>' : '') + '</span>' +
        '<span class="csb"><button type="button" data-c="up" data-k="' + k + '" title="Move up"' + (k ? '' : ' disabled') + '>↑</button>' +
        '<button type="button" data-c="down" data-k="' + k + '" title="Move down"' + (k < n - 1 ? '' : ' disabled') + '>↓</button>' +
        '<button type="button" data-c="del" data-k="' + k + '" title="Take it out of the session">✕</button></span></li>';
    }).join('') : '<li class="csempty">No passages yet. Turn on recording, then press <b>+ Session</b> on a passage: a search hit, a paragraph of a text, or the passage open on the right.</li>') + '</ol>' +
    '<label class="csdisc"><span class="muted small">Discussion, for comments (a Canvas or Teams link)</span>' +
      '<input data-f="discussion" type="url" value="' + esc(D.discussion) + '" placeholder="https://…" spellcheck="false"></label>' +
    '<div class="csacts">' +
      (n ? (pub.viaNew && !D.saved ? '<a class="btn solid" href="' + esc(pub.newUrl) + '" target="_blank" rel="noopener" data-c="pubgo">Save for the class</a>'
        : '<button type="button" class="btn solid" data-c="pubfile">' + (D.saved ? 'Save again' : 'Save for the class') + '</button>') : '') +
      '<button type="button" class="linkish" data-c="file">Save to file</button>' +
      '<button type="button" class="linkish" data-c="new">New session</button></div>' +
    (n ? '<p class="cshelp muted small">' + (pub.viaNew && !D.saved
        ? '“Save for the class” opens GitHub with the session as a file; there, press <b>Commit changes</b>.'
        : 'Download the file, then on <a href="https://github.com/' + REPO + '/upload/main/' + DIR + '" target="_blank" rel="noopener">GitHub’s upload page</a> drop it in and press <b>Commit changes</b>' + (D.saved ? ': it replaces the version saved before.' : '.')) +
      ' A minute or two later students find it under <b>Read</b>, or at <a href="' + esc(pub.link) + '" target="_blank" rel="noopener">' + esc(pub.link.replace(/^https?:\/\//, '')) + '</a>. ' +
      'The repository is public: the title and passages are public too, so put no student’s name in the title.</p>' : '');
}
panel.addEventListener('input', e => {
  const f = e.target.dataset.f;
  if (f === 'title') { D.title = e.target.value; save(); }
  if (f === 'discussion') { D.discussion = e.target.value.trim(); save(); }
});
panel.addEventListener('change', e => { if (e.target.dataset.c === 'rec') setRec(e.target.checked); });
panel.addEventListener('click', e => {
  const b = e.target.closest('[data-c]');
  if (!b || b.dataset.c === 'rec') return;
  const k = +b.dataset.k;
  switch (b.dataset.c) {
    case 'close': open = false; draw(); return;
    case 'up': if (k > 0) { D.items.splice(k - 1, 0, D.items.splice(k, 1)[0]); save(); draw(); } return;
    case 'down': if (k < D.items.length - 1) { D.items.splice(k + 1, 0, D.items.splice(k, 1)[0]); save(); draw(); } return;
    case 'del': { const it = D.items.splice(k, 1)[0]; save(); draw(); railLabel(); toast('Taken out of the session.', [['Undo', () => { D.items.splice(k, 0, it); save(); draw(); railLabel(); }]]); return; }
    case 'go': { const it = D.items[k]; location.hash = 'p=' + encodeURIComponent(it.ref) + '&rt=conn'; return; }
    case 'file': download(publication().json, publication().slug + '.json'); return;
    case 'pubfile': download(publication().json, publication().slug + '.json'); markSaved(); return;
    case 'pubgo': markSaved(); return;
    case 'new': {
      const old = D;
      D = blank(); save(); draw(); railLabel();
      toast('A new session. The last one is still on GitHub if you saved it.', [['Undo', () => { D = old; save(); draw(); railLabel(); }]]);
      return;
    }
  }
});
function markSaved() { D.saved = { slug: publication().slug, at: new Date().toISOString() }; save(); setTimeout(draw, 300); }
function download(text, name) {
  const a = el('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
}
function publication() {
  const slug = (D.saved && D.saved.slug) || (D.date + '-' + slugOf(D.title.replace(/^class,?\s*/i, '') === longDate(D.date) ? 'class' : D.title)).replace(/-+/g, '-');
  const json = JSON.stringify({ kind: 'kantlab-session', v: 1, title: D.title, date: D.date, discussion: D.discussion || '',
    items: D.items.map(x => ({ ref: x.ref, cite: x.cite, author: x.author, work: x.work })) }, null, 1) + '\n';
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
const viewOpen = () => view && !view.hidden;
document.addEventListener('mouseover', e => {
  if (!rec || viewOpen()) return;
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
  const r = hovEl.getBoundingClientRect(), inn = has(hovI);
  hov.textContent = inn ? '✓ In session' : '+ Session';
  hov.classList.toggle('in', inn);
  hov.title = inn ? 'Already in the session' : 'Add this passage to the class session';
  const sc = hovEl.closest('#left, #railbody'), bar = sc && sc.querySelector('.readbar');
  const floor = Math.max(52, sc ? sc.getBoundingClientRect().top + 4 : 0, bar && bar.getBoundingClientRect().bottom > 0 ? bar.getBoundingClientRect().bottom + 4 : 0);
  // below the handout's own button, where handout mode shows one
  const top = Math.max(r.top + 4, floor) + (document.body.classList.contains('hmode') ? 26 : 0);
  if (top > r.bottom - 18 || top > window.innerHeight - 24) { hov.hidden = true; return; }
  hov.hidden = false;
  hov.style.top = top + 'px';
  hov.style.left = Math.max(8, r.right - hov.offsetWidth - 8) + 'px';
}
document.addEventListener('scroll', () => { if (hovEl && hovEl.isConnected) placeHover(); else hideHover(); }, true);
hov.addEventListener('click', e => { e.stopPropagation(); if (hovI != null && !has(hovI)) add(hovI); else if (hovI != null) { open = true; draw(); } });

function railLabel() {
  const b = document.querySelector('#railbody .csrail');
  if (!b) return;
  const i = S.sel;
  b.hidden = !rec || i == null || !P[i];
  if (b.hidden) return;
  const inn = has(i), label = inn ? '✓ In the session' : '+ Session';
  if (b.textContent !== label) b.textContent = label;   // only when it changes: the pane is watched for changes, this one included
  b.classList.toggle('on', inn);
}
function railButton() {
  const pa = document.querySelector('#railbody .pactions');
  if (!pa) return;
  let b = pa.querySelector('.csrail');
  if (!b) {
    b = el('button', null, 'btn csrail');
    b.type = 'button';
    b.title = 'Add this passage to the class session';
    pa.insertBefore(b, pa.querySelector('a'));
    b.addEventListener('click', () => { if (S.sel != null && !has(S.sel)) add(S.sel); else { open = true; draw(); } });
  }
  railLabel();
}
const railbody = $('railbody');
if (railbody) new MutationObserver(railButton).observe(railbody, { childList: true, subtree: true });

/* ── The students' view: ?session=<name> ────────────────────────────────── */
let view = null;
const ready = () => new Promise(res => { const t = () => ($('loading') && !$('loading').hidden ? setTimeout(t, 250) : res()); t(); });
const wanted = new URLSearchParams(location.search).get('session');
if (wanted && /^[a-z0-9-]+$/.test(wanted)) showSession(wanted);
async function showSession(slug) {
  view = el('div', 'csview');
  view.innerHTML = '<div class="csvbar"><a class="btn" href="' + esc(location.pathname) + '" title="The portal">← The Logic Portal</a><b class="cz">Class session</b></div><main><div class="cswrap"><p class="muted">Opening the session…</p></div></main>';
  document.body.appendChild(view);
  let d = null;
  try { const r = await fetch('sessions/' + slug + '.json', { cache: 'no-cache' }); if (r.ok) d = await r.json(); } catch (e) { /* d stays null */ }
  const box = view.querySelector('.cswrap');
  if (!d || !Array.isArray(d.items)) { box.innerHTML = '<p>There is no class session called “' + esc(slug) + '” here. If it was saved a minute ago, try again shortly.</p>'; return; }
  document.title = d.title + ' · The Logic Portal';
  await ready();
  drawSession(d, 0);
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
function drawSession(d, tries) {
  const box = view.querySelector('.cswrap');
  let waiting = false;
  const disc = /^https?:\/\//.test(d.discussion || '') ? d.discussion : '';
  box.innerHTML = '<h1>' + esc(d.title) + '</h1><div class="csvdate">' + esc(longDate(d.date)) + ' · ' + d.items.length + ' passage' + (d.items.length === 1 ? '' : 's') + '</div>' +
    (disc ? '<p class="csvdisc"><a class="btn solid" href="' + esc(disc) + '" target="_blank" rel="noopener">Comments: the class discussion ↗</a>' +
      '<span class="muted small">Name a passage by its number when you comment on it.</span></p>' : '') +
    d.items.map((it, k) => {
      const q = PT.BYID ? PT.BYID.get(it.ref) : null, p = q != null ? P[q] : null;
      let h = '<div class="csvpass"><div class="csvn">' + (k + 1) + '</div><div class="csvbody">';
      h += p ? '<div class="csvtext" lang="de">' + esc(p.text) + '</div>' : '<div class="csvtext muted">(This passage is no longer in the portal.)</div>';
      const e = p ? englishOf(p) : null;
      if (e === 'loading') { waiting = true; h += '<div class="csven muted" lang="en">English loading…</div>'; }
      else if (e) h += '<div class="csven" lang="en">' + rich(e) + '</div>';
      h += '<div class="csvcite">' + esc(it.author) + ', <i>' + esc(it.work) + '</i>, ' + esc(it.cite) + (e && e !== 'loading' ? ' · English: machine translation' : '') +
        (p ? '<a href="#p=' + encodeURIComponent(it.ref) + '&rt=conn" class="csvctx">Read it in context ›</a>' : '') + '</div>';
      return h + '</div></div>';
    }).join('');
  if (waiting && tries < 40) setTimeout(() => drawSession(d, tries + 1), 500);
}
const back = el('button', 'csback', 'btn solid');
back.type = 'button'; back.hidden = true; back.textContent = '← Back to the session';
document.body.appendChild(back);
document.addEventListener('click', e => {
  if (!view || !e.target.closest || !e.target.closest('#csview .csvctx')) return;
  view.hidden = true; back.hidden = false; hideHover();
});
back.addEventListener('click', () => { if (view) { view.hidden = false; back.hidden = true; } });

/* ── Read lists the saved sessions, newest first, by asking GitHub what is in sessions/ ── */
let LIST = null;
async function sessions() {
  if (LIST) return LIST;
  try { const c = sessionStorage.getItem('kantlab-class-sessions'); if (c) return (LIST = JSON.parse(c)); } catch (e) { /* ask GitHub */ }
  try {
    const r = await fetch('https://api.github.com/repos/' + REPO + '/contents/' + DIR + '?ref=main');
    const files = r.ok ? (await r.json()).filter(f => f.type === 'file' && /^[a-z0-9-]+\.json$/.test(f.name)) : [];
    LIST = await Promise.all(files.map(async f => {
      const slug = f.name.replace(/\.json$/, '');
      try { const d = await (await fetch('sessions/' + f.name)).json(); return { slug, title: d.title || slug, date: d.date || '', n: (d.items || []).length }; }
      catch (e) { return { slug, title: slug, date: '', n: 0 }; }
    }));
    LIST.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  } catch (e) { LIST = []; }
  try { sessionStorage.setItem('kantlab-class-sessions', JSON.stringify(LIST)); } catch (e) { /* fine */ }
  return LIST;
}
const readView = $('view-read');
async function sessionList() {
  const box = readView && readView.querySelector('.explore');
  if (!box || box.querySelector('.cslisted')) return;
  const list = await sessions();
  if (!list.length || box.querySelector('.cslisted') || !box.isConnected) return;
  const sec = el('section', null, 'cslisted');
  sec.innerHTML = '<div class="ph">CLASS SESSIONS</div><div class="csclist">' + list.map(x =>
    '<a class="csc" href="?session=' + esc(x.slug) + '"><b>' + esc(x.title) + '</b><span>' + esc(x.date ? longDate(x.date) : '') + (x.n ? ' · ' + x.n + ' passage' + (x.n === 1 ? '' : 's') : '') + '</span></a>').join('') + '</div>';
  const intro = box.querySelector('.intro');
  if (intro) intro.after(sec); else box.prepend(sec);
}
if (readView) new MutationObserver(sessionList).observe(readView, { childList: true });

/* ── Styles ─────────────────────────────────────────────────────────────── */
const css = el('style');
css.textContent = `
  #csbtn .csn { display: inline-block; min-width: 1.2rem; margin-left: 0.3rem; padding: 0 0.35rem; border-radius: 999px; background: var(--parchment-dark); color: var(--accent); font-size: 0.8rem; text-align: center; }
  #csbtn.on { border-color: #9a3b1e; color: #9a3b1e; }
  #csbtn.on .csn { background: #9a3b1e; color: var(--parchment); }
  #cspanel { position: fixed; z-index: 44; right: 1rem; bottom: 1rem; width: 23rem; max-width: calc(100vw - 2rem); max-height: 70vh; overflow-y: auto; background: var(--card); border: 1px solid var(--accent-light); border-radius: 10px; box-shadow: 0 6px 22px rgba(40, 25, 10, 0.22); padding: 0.6rem 0.8rem 0.7rem; font-size: 0.95rem; }
  #cspanel[hidden] { display: none; }
  #cspanel .csbar { display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.4rem; }
  #cspanel .csbar .cz { color: var(--accent); font-size: 0.95rem; }
  #cspanel .spacer { flex: 1; }
  #cspanel .csrow { display: flex; align-items: baseline; gap: 0.35rem; margin: 0.1rem 0 0.5rem; cursor: pointer; }
  #cspanel .cstitle { width: 100%; font-family: 'Cinzel', serif; font-size: 1rem; color: var(--accent); background: transparent; border: none; border-bottom: 1px dashed var(--line); padding: 0.15rem 0; margin-bottom: 0.4rem; }
  #cspanel .cstitle:focus { outline: none; border-bottom-color: var(--accent-light); }
  #cspanel .cslist { margin: 0 0 0.5rem; padding-left: 1.4rem; }
  #cspanel .cslist li { margin: 0 0 0.35rem; display: flex; gap: 0.3rem; align-items: flex-start; }
  #cspanel .cslist li.csempty { display: list-item; list-style: none; margin-left: -1.4rem; color: var(--faded); font-size: 0.88rem; }
  #cspanel .csl { flex: 1; min-width: 0; line-height: 1.3; }
  #cspanel .csl .linkish { text-align: left; }
  #cspanel .csl .muted { display: block; font-size: 0.8rem; }
  #cspanel .csb { display: flex; gap: 0.05rem; flex: none; }
  #cspanel .csb button { background: none; border: none; color: var(--faded); cursor: pointer; padding: 0 0.2rem; font-size: 0.85rem; }
  #cspanel .csb button:hover { color: var(--accent); }
  #cspanel .csb button:disabled { opacity: 0.3; cursor: default; }
  #cspanel .csdisc { display: block; margin: 0.3rem 0 0.55rem; }
  #cspanel .csdisc input { display: block; width: 100%; margin-top: 0.15rem; padding: 0.2rem 0.5rem; border: 1px solid var(--line); border-radius: 6px; background: var(--paper); font-size: 0.88rem; }
  #cspanel .csacts { display: flex; flex-wrap: wrap; gap: 0.5rem 0.9rem; align-items: center; }
  #cspanel .csacts a.btn { text-decoration: none; }
  #cspanel .cshelp { margin: 0.5rem 0 0; line-height: 1.35; }
  .csfloat { position: fixed; z-index: 45; border: 1px solid #9a3b1e; background: var(--card); color: #9a3b1e; border-radius: 999px; padding: 0.08rem 0.65rem; font-size: 0.8rem; cursor: pointer; box-shadow: 0 1px 5px rgba(60, 40, 20, 0.15); }
  .csfloat:hover { background: #9a3b1e; color: var(--parchment); }
  .csfloat.in { border-color: var(--line); color: var(--faded); }
  .csfloat[hidden] { display: none; }
  .pactions .csrail { border-color: #9a3b1e; color: #9a3b1e; }
  .pactions .csrail.on { border-color: var(--line); color: var(--faded); }
  .pactions .csrail[hidden] { display: none; }
  #cstoast { position: fixed; z-index: 60; left: 50%; bottom: 1.4rem; transform: translateX(-50%); background: #3b2a17; color: var(--parchment); border-radius: 6px; padding: 0.5rem 0.9rem; font-size: 0.92rem; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25); display: flex; gap: 0.9rem; align-items: baseline; max-width: 90vw; }
  #cstoast[hidden] { display: none; }
  #cstoast button { background: none; border: none; color: #f1d98c; cursor: pointer; padding: 0; font: inherit; text-decoration: underline; }
  #csview { position: fixed; inset: 0; z-index: 30; background: var(--parchment); display: flex; flex-direction: column; }
  #csview[hidden] { display: none; }
  #csview .csvbar { display: flex; align-items: center; gap: 0.8rem; padding: 0.6rem 1.6rem; border-bottom: 1px solid var(--line); }
  #csview .csvbar .cz { color: var(--accent); font-size: 1.05rem; }
  #csview .csvbar a.btn { text-decoration: none; }
  #csview main { flex: 1; overflow-y: auto; padding: 1.4rem 2rem 4rem; }
  #csview .cswrap { max-width: 46rem; margin: 0 auto; }
  #csview h1 { font-family: 'Cinzel', serif; color: var(--accent); font-weight: 600; font-size: 1.5rem; margin: 0 0 0.2rem; }
  #csview .csvdate { color: var(--faded); font-style: italic; margin-bottom: 0.9rem; }
  #csview .csvdisc { display: flex; flex-wrap: wrap; gap: 0.4rem 0.9rem; align-items: center; margin: 0 0 1.2rem; }
  #csview .csvdisc a.btn { text-decoration: none; }
  #csview .csvpass { display: grid; grid-template-columns: 2rem minmax(0, 1fr); gap: 0.6rem; padding: 0.8rem 0; border-top: 1px solid var(--line-soft); }
  #csview .csvn { font-family: 'Cinzel', serif; font-size: 1.15rem; color: var(--accent-light); text-align: right; line-height: 1.3; }
  #csview .csvtext { white-space: pre-wrap; line-height: 1.55; }
  #csview .csven { margin-top: 0.4rem; padding-left: 0.7rem; border-left: 2px solid var(--line); color: #4b4034; font-size: 0.96rem; white-space: pre-wrap; }
  #csview .csvcite { margin-top: 0.4rem; font-size: 0.86rem; color: var(--faded); }
  #csview .csvctx { margin-left: 0.8rem; }
  #csback { position: fixed; z-index: 46; left: 50%; bottom: 1.2rem; transform: translateX(-50%); }
  #csback[hidden] { display: none; }
  .cslisted { margin: 0 0 1.6rem; }
  .csclist { display: grid; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); gap: 0.6rem; }
  .csc { display: block; background: var(--card); border: 1px solid var(--line-soft); border-left: 3px solid #9a3b1e; border-radius: 8px; padding: 0.6rem 0.8rem; text-decoration: none; color: var(--ink); }
  .csc:hover { border-color: var(--accent-light); }
  .csc b { display: block; font-weight: 500; }
  .csc span { display: block; font-size: 0.84rem; color: var(--faded); font-style: italic; }
`;
document.head.appendChild(css);
document.body.classList.toggle('csrec', rec);
draw();
})();
