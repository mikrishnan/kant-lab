/* ════════════════════════════════════════════════════════════════════════
   READING: Maria's sentence-by-sentence translation, across the portal

   A layer over the passages the portal draws, so that nothing in the portal's own drawing changes:
   once a passage is on the page, its words are matched back to the passage's text and wrapped in
   spans that carry what Maria's reader knows about them. All of it is behind one switch in the header,
   German learning mode, off unless the reader turns it on (or the address has ?learn=1); with it off the
   portal is untouched. In learning mode, three ways to read:

     German only   the German alone; hovering an underlined glossary term shows the glossary's English
                   and its modern spelling, and clicking it opens the glossary entry
     Interlinear   each phrase over its own short English gloss; a click on a sentence shows its English
     With English  try the German first: hovering a phrase gives that phrase's gloss, and the whole
                   sentence's English comes on a click, or when the pointer rests on the sentence

   and a grammar switch that colours every phrase by its role in the sentence, tints subordinate
   clauses and arcs the verb brackets of the sentence in view.

   What it reads, all from Individuals/maria/ (her README and translations/README.md say how each was
   made; all of it is unreviewed machine work, and the portal says so):
     translations/logik-units.js   LOGIK_UNITS: Busolt and Blomberg, sentence by sentence, with phrases
     translations/meier-aligned.js MEIER_ALIGNED: Meier's §§, sentence by sentence
     translations/meier-phrases.js MEIER_PHRASES: the phrases of Meier's sentences
     translations/grammar.js       GRAMMAR: each phrase's role, and the verb brackets
     glossary/kant-glossary.js     KANT_GLOSSARY, and its spellings.js and examples.js
   The sentence layer covers Busolt, Blomberg and Meier, the texts Maria's translation has reached; the
   glossary layer covers every German text in the portal, matched here by the rules of glossary.py.
   ════════════════════════════════════════════════════════════════════════ */

// The portal's own script keeps to itself; what this layer needs of it, it gives through window.PORTAL.
const { P, TEXTS, loadScript, getGlobal, esc, openModal, closeModal, ask, enRefresh } = window.PORTAL;

const RD_FILES = {
  glossary: ['../Individuals/maria/glossary/kant-glossary.js', '../Individuals/maria/glossary/spellings.js', '../Individuals/maria/glossary/examples.js'],
  units: ['../Individuals/maria/translations/logik-units.js', '../Individuals/maria/translations/meier-aligned.js',
          '../Individuals/maria/translations/meier-phrases.js', '../Individuals/maria/translations/grammar.js'],
};
const RD_TEXTS = new Set(['busolt', 'blomberg', 'meier']);          // the texts with Maria's sentences
const RD_GLOSSARY_PAGE = '../Individuals/maria/glossary/index.html';
const RD_ROLE = { S: 'subject', V: 'finite verb', O: 'object', G: 'genitive', P: 'predicative', A: 'adverbial',
                  E: 'verb part at the end', K: 'clause opener', C: 'conjunction', X: 'other' };
const RD_DEPTH = ['main clause', 'subordinate clause', 'clause within a subordinate clause', 'deeply nested clause'];
const RD_PAUSE = 4000;
const RD_SKIP = '.pbm, .gloss, .misnote, .fen, .enb, .rd-il, sup';   // drawn by the portal, but not words of the passage

// Off unless the reader switches German learning mode on (or the address asks for it, ?learn=1): with it off the
// portal is exactly the portal, with nothing of this layer drawn.
let RD = { on: new URLSearchParams(location.search).get('learn') === '1', mode: 'de', gram: false, glossary: 'idle', units: 'idle', pin: null, hov: null, hovPh: null, hovTerm: null, timer: 0 };

/* ── loading, on first need ── */
function rdLoad(which) {
  if (RD[which] !== 'idle') return;
  RD[which] = 'loading';
  Promise.all(RD_FILES[which].map(f => loadScript(f))).then(oks => {
    RD[which] = oks.every(Boolean) ? 'ready' : 'failed';
    if (which === 'glossary' && RD.glossary === 'ready') rdMatcherBuild();
    rdRedraw();
  });
}

/* ── the glossary matcher: glossary.py's rules, in JavaScript, so that every text can be underlined
   without a file of positions for each. A term's key folds the period's spellings onto the modern
   lemma (ß/ss, th/t, ey/ei, zz/tz, -zion/-tion, ae/oe/ue, c/k, ck/k, a lengthening h, doubled letters);
   nouns must be capitalised; endings are allowed on a term's last word. ── */
const RD_NOUN_END = ['', 'e', 'en', 'n', 'es', 's', 'er', 'ern', 'ns', 'nen'], RD_ADJ_END = ['', 'e', 'er', 'es', 'en', 'em'];
const RD_WORD = /[A-Za-zÄÖÜäöüß]+/g;
function rdKey(w) {
  w = w.toLowerCase().replace(/ß/g, 'ss').replace(/th/g, 't').replace(/ey/g, 'ei').replace(/y/g, 'i')
    .replace(/zz/g, 'tz').replace(/zion/g, 'tion').replace(/qv/g, 'qu')
    .replace(/(?<!q)ue/g, 'u').replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ck/g, 'k')
    .replace(/c(?=[aoulrt]|$)/g, 'k').replace(/c(?=[ei])/g, 'z')
    .replace(/([aeiou])h(?=[lmnr])/g, '$1').replace(/(.)\1+/g, '$1');
  return w.replace(/tz/g, 'z').replace(/ntz/g, 'nz');
}
let RD_MATCH = null;
const RD_ENTRY = new Map();
function rdMatcherBuild() {
  const G = getGlobal('KANT_GLOSSARY') || [], byFirst = new Map(), pats = [];
  G.forEach(e => {
    RD_ENTRY.set(e.id, e);
    [e.de].concat(e.v || [], e.f || []).forEach(form => {
      const ks = (form.match(RD_WORD) || []).map(rdKey);
      if (ks.length) pats.push({ ks, id: e.id, pos: e.pos, exact: (e.f || []).includes(form) });
    });
  });
  pats.sort((a, b) => b.ks.length - a.ks.length);
  pats.forEach(p => { const k = p.ks[0].slice(0, 3); if (!byFirst.has(k)) byFirst.set(k, []); byFirst.get(k).push(p); });
  RD_MATCH = byFirst;
}
const RD_TERMS = new Map();          // passage index → [[start, end, id]]
function rdTerms(text) {
  if (!RD_MATCH) return [];
  const toks = [...text.matchAll(RD_WORD)].map(m => [m[0], m.index, m.index + m[0].length]), keys = toks.map(t => rdKey(t[0]));
  const out = [], taken = new Set();
  for (let i = 0; i < toks.length; i++) {
    if (taken.has(i)) continue;
    for (const p of RD_MATCH.get(keys[i].slice(0, 3)) || []) {
      const n = p.ks.length;
      if (i + n > toks.length) continue;
      let ok = true;
      for (let j = 0; j < n; j++) if (taken.has(i + j)) { ok = false; break; }
      for (let j = 0; ok && j < n - 1; j++) if (keys[i + j] !== p.ks[j]) ok = false;
      if (!ok) continue;
      const last = keys[i + n - 1], want = p.ks[n - 1];
      const ends = p.exact ? [''] : p.pos === 'n' ? RD_NOUN_END : p.pos === 'a' ? RD_ADJ_END : [''];
      if (!ends.some(e => last === want + e)) continue;
      if (p.pos === 'n' && n === 1 && toks[i][0][0] !== toks[i][0][0].toUpperCase()) continue;
      out.push([toks[i][1], toks[i + n - 1][2], p.id]);
      for (let j = 0; j < n; j++) taken.add(i + j);
      break;
    }
  }
  return out;
}
const rdTermsOf = p => { if (!RD_TERMS.has(p.i)) RD_TERMS.set(p.i, rdTerms(p.text)); return RD_TERMS.get(p.i); };

/* ── Maria's sentences for a passage: [{ o: [start, end), en, p: [[start, end, gloss]], gr }] or null ── */
function rdUnits(p) {
  const T = TEXTS[p.t];
  if (!RD_TEXTS.has(T.key) || RD.units !== 'ready') return null;
  const G = getGlobal('GRAMMAR') || {};
  if (T.key === 'meier') {
    const al = (getGlobal('MEIER_ALIGNED') || {})[p.para], ph = (getGlobal('MEIER_PHRASES') || {})[p.para] || [], gr = (G.meier || {})['meier-para-' + p.para] || [];
    return al ? al.map((u, k) => ({ o: u.o, en: u.en, p: ph[k] || [], gr: gr[k] || null })) : null;
  }
  const us = ((getGlobal('LOGIK_UNITS') || {})[T.key] || {})[p.id], gr = (G[T.key] || {})[p.id] || [];
  return us && us.length ? us.map((u, k) => ({ o: u.o, en: u.en, p: u.p || [], gr: gr[k] || null })) : null;
}

/* ── wrapping a drawn passage: its text nodes are lined up with the passage's text, cut where a sentence,
   phrase, term or bracket word begins or ends, and each piece wrapped in the spans it falls in ── */
function rdTextNodes(el) {
  const out = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.parentElement.closest(RD_SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  let n;
  while ((n = walk.nextNode())) out.push(n);
  return out;
}
// The passage offset of every character of the drawn text, matched character by character; whitespace may
// differ, and a character the passage does not have (drawn by the portal) maps to -1.
function rdAlign(nodes, text) {
  let j = 0;
  return nodes.map(nd => {
    const s = nd.data, map = new Int32Array(s.length).fill(-1);
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      while (j < text.length && /\s/.test(text[j]) && !/\s/.test(c)) j++;
      if (j < text.length && (text[j] === c || (/\s/.test(c) && /\s/.test(text[j])))) { map[i] = j; j++; }
      else if (!/\s/.test(c)) {                              // the passage has a character or two the drawing leaves out
        const k2 = text.indexOf(c, j);
        if (k2 > j && k2 - j <= 3) { j = k2; map[i] = j; j++; }
      }
    }
    return map;
  });
}
function rdWrap(el, p) {
  const units = rdUnits(p), terms = rdTermsOf(p);
  if (!units && !terms.length) return;
  const ranges = [];                                     // [start, end, kind, data]
  (units || []).forEach((u, k) => {
    ranges.push([u.o[0], u.o[1], 's', k]);
    u.p.forEach((ph, pi) => ranges.push([ph[0], ph[1], 'p', [k, pi]]));
    (u.gr && u.gr.b || []).forEach((br, bn) => {
      ranges.push([br[0][0], br[0][1], 'b', [k, bn, 'l']]);
      br[1].forEach(r => ranges.push([r[0], r[1], 'b', [k, bn, 'r']]));
    });
  });
  terms.forEach(t => ranges.push([t[0], t[1], 't', t[2]]));
  const nodes = rdTextNodes(el), maps = rdAlign(nodes, p.text);
  const cuts = new Set();
  ranges.forEach(r => { cuts.add(r[0]); cuts.add(r[1]); });
  nodes.forEach((nd, ni) => {
    const map = maps[ni];
    // split this text node wherever a range begins or ends, then wrap each piece
    const at = [];
    for (let i = 1; i < map.length; i++) if (map[i] >= 0 && cuts.has(map[i])) at.push(i);
    let cur = nd, off = 0;
    const pieces = [];
    at.forEach(i => { const rest = cur.splitText(i - off); pieces.push([cur, off]); cur = rest; off = i; });
    pieces.push([cur, off]);
    pieces.forEach(([piece, from]) => {
      let a = -1;
      for (let i = from; i < from + piece.data.length; i++) if (map[i] >= 0) { a = map[i]; break; }
      if (a < 0) return;
      const inS = ranges.find(r => r[2] === 's' && r[0] <= a && a < r[1]);
      const inP = ranges.find(r => r[2] === 'p' && r[0] <= a && a < r[1]);
      const inT = ranges.find(r => r[2] === 't' && r[0] <= a && a < r[1]);
      const inB = ranges.find(r => r[2] === 'b' && r[0] <= a && a < r[1]);
      if (!inS && !inT) return;
      let node = piece, wrap = (cls, attrs) => {
        const sp = document.createElement('span'); sp.className = cls;
        Object.entries(attrs).forEach(([k, v]) => { sp.dataset[k] = v; });
        node.parentNode.insertBefore(sp, node); sp.appendChild(node); node = sp;
      };
      if (inB) wrap('rd-b', { rb: p.i + ':' + inB[3][0] + ':' + inB[3][1], side: inB[3][2] });
      if (inT) wrap('rd-t', { g: inT[3], pr: p.text.slice(inT[0], inT[1]) });
      if (inP) {
        const [k, pi] = inP[3], gr = units[k].gr;
        const role = gr && gr.r.length === 2 * units[k].p.length ? gr.r.substr(2 * pi, 2) : '';
        wrap('rd-p' + (role ? ' r' + role[0] + (role[1] !== '0' ? ' d' + role[1] : '') : ''), { rp: p.i + ':' + k + ':' + pi, role });
      }
      if (inS) wrap('rd-s', { rs: p.i + ':' + inS[3] });
    });
  });
}

/* ── interlinear: the passage drawn anew, each phrase over its gloss (the portal's marks and page markers
   are not drawn in this mode; the other modes keep them) ── */
function rdInterlinear(el, p, units) {
  const t = p.text, esc2 = s => esc(s);
  const termed = (a, b) => {                              // the German of [a, b) with its glossary terms
    let h = '', at = a;
    rdTermsOf(p).filter(x => x[0] >= a && x[1] <= b).forEach(x => {
      h += esc2(t.slice(at, x[0])) + '<span class="rd-t" data-g="' + esc(x[2]) + '" data-pr="' + esc(t.slice(x[0], x[1])) + '">' + esc2(t.slice(x[0], x[1])) + '</span>'; at = x[1];
    });
    return h + esc2(t.slice(at, b));
  };
  let h = '', at = 0;
  units.forEach((u, k) => {
    if (u.o[0] > at) h += esc2(t.slice(at, u.o[0]));
    h += '<span class="rd-s" data-rs="' + p.i + ':' + k + '">';
    let pa = u.o[0];
    u.p.forEach((ph, pi) => {
      if (ph[0] > pa) h += esc2(t.slice(pa, ph[0]));
      const gr = u.gr, role = gr && gr.r.length === 2 * u.p.length ? gr.r.substr(2 * pi, 2) : '';
      h += '<span class="rd-p rd-ilp' + (role ? ' r' + role[0] + (role[1] !== '0' ? ' d' + role[1] : '') : '') + '" data-rp="' + p.i + ':' + k + ':' + pi + '" data-role="' + role + '">' +
        '<span class="rd-ild">' + termed(ph[0], ph[1]) + '</span><span class="rd-il">' + esc(ph[2]) + '</span></span>';
      pa = ph[1];
    });
    if (pa < u.o[1]) h += esc2(t.slice(pa, u.o[1]));
    h += '</span>';
    at = u.o[1];
  });
  if (at < t.length) h += esc2(t.slice(at));
  el.innerHTML = h;
  el.classList.add('rd-ilm');
}

/* ── finding and treating every passage the portal draws ── */
function rdTreat(el) {
  if (!RD.on || el.dataset.rd === rdToken()) return;
  const host = el.closest('[data-fp]');
  if (!host || host.classList.contains('frow')) return;
  const p = P[+host.dataset.fp];
  if (!p) return;
  el.dataset.rd = rdToken();
  if (RD.mode === 'il') { const u = rdUnits(p); if (u) { rdInterlinear(el, p, u); return; } }
  rdWrap(el, p);
}
const rdToken = () => RD.mode + (RD.gram ? 'g' : '') + RD.glossary[0] + RD.units[0];
let RD_QUEUE = new Set(), RD_RAF = 0;
function rdSchedule(els) {
  els.forEach(e => RD_QUEUE.add(e));
  if (!RD_RAF) RD_RAF = requestAnimationFrame(() => { RD_RAF = 0; const q = [...RD_QUEUE]; RD_QUEUE.clear(); q.forEach(e => { if (e.isConnected) rdTreat(e); }); rdPopRefresh(); });
}
new MutationObserver(muts => {
  const found = [];
  muts.forEach(m => m.addedNodes.forEach(n => {
    if (n.nodeType !== 1) return;
    if (n.matches && n.matches('.fpt')) found.push(n);
    if (n.querySelectorAll) n.querySelectorAll('.fpt').forEach(x => found.push(x));
  }));
  if (found.length) rdSchedule(found);
}).observe(document.body, { childList: true, subtree: true });
// After a change of mode, the portal draws its passages again (as for the English switch), and they are treated afresh.
function rdRedraw() {
  document.body.classList.toggle('rd-on', RD.on);
  const lb = document.getElementById('rdlearn');
  if (lb) { lb.classList.toggle('on', RD.on); lb.setAttribute('aria-pressed', RD.on ? 'true' : 'false'); lb.textContent = RD.on ? 'German learning mode ✓' : 'German learning mode'; }
  if (!RD.on) { RD.pin = null; RD.hov = RD.hovPh = RD.hovTerm = null; rdPop().hidden = true; }
  document.body.classList.toggle('rdm-de', RD.mode === 'de');
  document.body.classList.toggle('rdm-il', RD.mode === 'il');
  document.body.classList.toggle('rdm-en', RD.mode === 'en');
  document.body.classList.toggle('rd-gram', RD.gram);
  document.querySelectorAll('#rdmode [data-rdm]').forEach(b => b.classList.toggle('on', b.dataset.rdm === RD.mode));
  enRefresh();
  setTimeout(() => rdSchedule([...document.querySelectorAll('.fpt')]), 150);
}

/* ── the popover ── */
function rdPop() { let el = document.getElementById('rdpop'); if (!el) { el = document.createElement('div'); el.id = 'rdpop'; el.hidden = true; document.body.appendChild(el); } return el; }
function rdUnitOf(key) {                                   // 'pi:k' → { p, u, k }
  const [pi, k] = key.split(':').map(Number), p = P[pi], us = p && rdUnits(p);
  return us && us[k] ? { p, u: us[k], k } : null;
}
function rdPlace(target, em) {
  const pop = rdPop(), r0 = target.getClientRects()[0];
  if (!r0) { pop.hidden = true; return; }
  pop.style.maxWidth = Math.min(em * 16, innerWidth - 16) + 'px';
  pop.hidden = false;
  const pw = pop.offsetWidth, ph = pop.offsetHeight;
  let top = r0.top - ph - 6;
  if (top < 4) { const rs = target.getClientRects(); top = rs[rs.length - 1].bottom + 6; }
  pop.style.top = top + 'px';
  pop.style.left = Math.max(4, Math.min(r0.left, innerWidth - pw - 8)) + 'px';
}
function rdTermLine(els) {
  const seen = new Set(), bits = [];
  els.forEach(t => {
    const e = RD_ENTRY.get(t.dataset.g);
    if (!e || seen.has(e.id)) return;
    seen.add(e.id);
    bits.push(esc(t.dataset.pr) + (t.dataset.pr !== e.de ? ' (modern ' + esc(e.de) + ')' : '') + ' → <b>' + esc(e.en) + '</b>');
  });
  return bits.length ? '<div class="gl">Glossary: ' + bits.join(' · ') + '</div>' : '';
}
function rdShowTerm(t) {
  const e = RD_ENTRY.get(t.dataset.g);
  if (!e) return;
  rdPop().innerHTML = '<div class="g">' + esc(t.dataset.pr) + ' → <b>' + esc(e.en) + '</b></div>' +
    (t.dataset.pr !== e.de ? '<div class="sn">modern spelling: <b>' + esc(e.de) + '</b></div>' : '') +
    (e.senses || []).map(s => '<div class="sn">“' + esc(s.en) + '” when ' + esc(s.when) + '</div>').join('') +
    '<div class="gl">Maria’s glossary (proposed) · click for the full entry</div>';
  rdPlace(t, 24);
}
function rdShowUnit(sp, ph, whole) {
  const x = rdUnitOf(sp.dataset.rs);
  if (!x) return;
  let h = '';
  if (ph) {
    const pi = +ph.dataset.rp.split(':')[2], g = x.u.p[pi];
    if (g) h += '<div class="g">' + esc(g[2]) + '</div>';
  }
  if (whole || !ph) h += '<div class="' + (ph ? 's' : 'g') + '">' + esc(x.u.en) + '</div>';
  if (ph) h += rdTermLine([...ph.querySelectorAll('.rd-t')]);
  if (ph && RD.gram && ph.dataset.role) h += '<div class="rl">' + RD_ROLE[ph.dataset.role[0]] + ' · ' + RD_DEPTH[+ph.dataset.role[1]] + '</div>';
  if (ph && !whole) h += '<div class="hint">Click, or rest here, for the whole sentence</div>';
  h += '<div class="who">Maria’s translation · machine-made, unreviewed</div>';
  rdPop().innerHTML = h;
  rdPlace(ph || sp, 34);
}
const rdFirst = key => document.querySelector('.rd-s[data-rs="' + key + '"]');
function rdPopRefresh() {
  document.querySelectorAll('.rd-s.on').forEach(x => x.classList.remove('on'));
  document.querySelectorAll('.rd-p.hot').forEach(x => x.classList.remove('hot'));
  if (RD.pin) document.querySelectorAll('.rd-s[data-rs="' + RD.pin + '"]').forEach(x => x.classList.add('on'));
  rdArcs();
  const pop = rdPop();
  if (RD.hovTerm && RD.hovTerm.isConnected && (RD.mode !== 'en' || !RD.hov)) return rdShowTerm(RD.hovTerm);
  if (RD.mode === 'en' && RD.hov && RD.hovPh) {
    document.querySelectorAll('.rd-p[data-rp="' + RD.hovPh.dataset.rp + '"]').forEach(x => x.classList.add('hot'));
    return rdShowUnit(RD.hov, RD.hovPh, RD.pin === RD.hov.dataset.rs);
  }
  if (RD.pin && RD.mode !== 'de') { const sp = rdFirst(RD.pin); if (sp) return rdShowUnit(sp, null, true); }
  pop.hidden = true;
}

/* ── the verb brackets of the sentence in view, as arcs on a sheet over the page ── */
function rdArcs() {
  let svg = document.getElementById('rdarcs');
  if (!svg) { svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.id = 'rdarcs'; document.body.appendChild(svg); }
  svg.textContent = '';
  document.querySelectorAll('.rd-b.lit').forEach(x => x.classList.remove('lit', 'k'));
  if (!RD.gram) return;
  const key = (RD.hov && RD.hov.dataset.rs) || RD.pin;
  if (!key) return;
  const groups = {};
  document.querySelectorAll('.rd-b[data-rb^="' + key + ':"]').forEach(x => (groups[x.dataset.rb] = groups[x.dataset.rb] || []).push(x));
  Object.values(groups).forEach((ws, i) => {
    const l = ws.find(x => x.dataset.side === 'l'), rs = ws.filter(x => x.dataset.side === 'r');
    if (!l || !rs.length) return;
    const opener = !!l.closest('.rK');
    ws.forEach(x => { x.classList.add('lit'); if (opener) x.classList.add('k'); });
    const a = l.getClientRects()[0], cr = rs[rs.length - 1].getClientRects(), c = cr[cr.length - 1];
    if (!a || !c) return;
    const ax = a.left + a.width / 2, ay = a.top - 2, cx = c.left + c.width / 2, cy = c.top - 2, lift = 3 * (i % 3);
    const path = d => { const e = document.createElementNS('http://www.w3.org/2000/svg', 'path'); e.setAttribute('d', d); if (opener) e.setAttribute('class', 'k'); svg.appendChild(e); return e; };
    if (Math.abs(ay - cy) < 4) { const h = Math.min(16, 6 + Math.abs(cx - ax) / 12) + lift; path(`M${ax},${ay} C${ax},${ay - h} ${cx},${cy - h} ${cx},${cy}`); }
    else { const h = 8 + lift, t = 34; path(`M${ax},${ay} C${ax},${ay - h} ${ax + 10},${ay - h} ${ax + t},${ay - h}`).classList.add('cont'); path(`M${cx - t},${cy - h} C${cx - 10},${cy - h} ${cx},${cy - h} ${cx},${cy}`).classList.add('cont'); }
  });
}

/* ── the glossary entry, in the portal's own pop-up window ── */
function rdGlossaryCard(id, printed) {
  const e = RD_ENTRY.get(id);
  if (!e) return;
  const sp = (getGlobal('KANT_GLOSSARY_SPELLINGS') || {})[id] || [], ex = ((getGlobal('KANT_GLOSSARY_EXAMPLES') || {})[id] || [])[0];
  const exLink = x => {                                  // the example's sentence, as a portal link
    const m = /^(\w+):(.+)\.(\d+)$/.exec(x.link || ''); if (!m) return '';
    const pid = m[1] === 'meier' ? 'p' + m[2].replace('meier-para-', '') : m[2];
    return '#p=' + encodeURIComponent(m[1] + ':' + pid);
  };
  const bold = (s, at) => at ? esc(s.slice(0, at[0])) + '<b>' + esc(s.slice(at[0], at[1])) + '</b>' + esc(s.slice(at[1])) : esc(s);
  openModal('<div class="mh"><h2>' + esc(e.de) + '</h2><span class="muted">modern spelling' + (printed && printed !== e.de ? ' · printed here: ' + esc(printed) : '') + '</span><button type="button" class="btn" data-close-modal="1">close</button></div>' +
    '<div class="rd-card"><div class="en">' + esc(e.en) + '</div>' +
    (e.senses || []).map(s => '<div class="sn">“' + esc(s.en) + '” <i>when ' + esc(s.when) + '</i></div>').join('') +
    (e.avoid && e.avoid.length ? '<div class="av">Not: ' + esc(e.avoid.join(', ')) + '</div>' : '') +
    (e.la && e.la.length ? '<div class="la">Latin: ' + esc(e.la.join(', ')) + '</div>' : '') +
    (e.note ? '<div class="nt">' + esc(e.note) + '</div>' : '') +
    (sp.some(x => x[0] !== e.de) ? '<div class="sp">Spellings in the texts: ' + sp.map(x => '<span class="' + (x[0] === e.de ? 'mod' : 'old') + '">' + esc(x[0]) + '</span> ' + x[1].toLocaleString('en')).join(' · ') + '</div>' : '') +
    (ex ? '<div class="ex"><div class="lab">EXAMPLE</div><a href="' + exLink(ex) + '" data-close-modal="1">' + esc(ex.cite) + ' →</a><div class="xd">' + bold(ex.de, ex.d) + '</div><div class="xe">' + bold(ex.en, ex.e) + '</div></div>' : '') +
    '<div class="acts"><a href="' + RD_GLOSSARY_PAGE + '#' + esc(id) + '" target="_blank" rel="noopener">Open in Maria’s glossary ↗</a>' +
    '<button type="button" class="btn" data-rdask="' + esc(printed || e.de) + '">Search the texts for “' + esc(printed || e.de) + '”</button></div></div>' +
    '<div class="from">Maria’s shared glossary of Kantian terms, version ' + esc((getGlobal('KANT_GLOSSARY_META') || {}).version || '') + ', proposed</div>');
}

/* ── events: delegated, so that they reach every passage however it was drawn ── */
document.addEventListener('mouseover', e => {
  const t = e.target.closest && e.target.closest('.rd-t'), s = e.target.closest && e.target.closest('.rd-s'), ph = e.target.closest && e.target.closest('.rd-p');
  const changed = t !== RD.hovTerm || s !== RD.hov || ph !== RD.hovPh;
  if (!changed) return;
  if (s !== RD.hov) { clearTimeout(RD.timer); if (s && RD.mode === 'en') { const key = s.dataset.rs; RD.timer = setTimeout(() => { if (RD.hov && RD.hov.dataset.rs === key) { RD.pin = key; rdPopRefresh(); } }, RD_PAUSE); } }
  RD.hovTerm = t; RD.hov = s; RD.hovPh = ph;
  rdPopRefresh();
});
document.addEventListener('click', e => {
  const ask2 = e.target.closest('[data-rdask]');
  if (ask2) { closeModal(); ask({ q: ask2.dataset.rdask, w: 5, cm: '', co: '', preset: null }); return; }
  const t = e.target.closest('.rd-t');
  if (t && !String(getSelection())) { e.stopPropagation(); e.preventDefault(); rdGlossaryCard(t.dataset.g, t.dataset.pr); return; }
  const s = e.target.closest('.rd-s');
  if (s && RD.mode !== 'de' && !String(getSelection())) { RD.pin = RD.pin === s.dataset.rs ? null : s.dataset.rs; rdPopRefresh(); return; }
  if (!e.target.closest('#rdpop')) { if (RD.pin) { RD.pin = null; rdPopRefresh(); } }
}, true);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && RD.pin) { RD.pin = null; rdPopRefresh(); } });
document.addEventListener('scroll', () => { if (RD.hov || RD.pin || RD.hovTerm) rdPopRefresh(); }, true);

/* ── the switch in the header ── */
function rdControls() {
  const header = document.querySelector('header'), en = document.getElementById('entog');
  if (!header || !en || document.getElementById('rdmode')) return;
  const bar = document.createElement('div');
  bar.id = 'rdbar';
  bar.innerHTML = '<span class="lab">GERMAN LEARNING MODE</span>';
  const box = document.createElement('span');
  box.id = 'rdmode';
  box.title = 'Maria’s sentence-by-sentence translation (Busolt, Blomberg, Meier) and her glossary (every German text)';
  box.innerHTML = '<button type="button" data-rdm="de" class="on" title="The German alone. Hover an underlined term for the glossary’s English; click it for the entry.">German only</button>' +
    '<button type="button" data-rdm="il" title="Each phrase over its short English gloss; click a sentence for its English (Busolt, Blomberg, Meier).">Interlinear</button>' +
    '<button type="button" data-rdm="en" title="Try the German first: hover a phrase for its gloss; click, or rest on, a sentence for its English (Busolt, Blomberg, Meier).">With English</button>' +
    '<label title="Colour each phrase by its role and arc the verb brackets (Busolt, Blomberg, Meier): a model’s analysis, unreviewed"><input type="checkbox" id="rdgram"> grammar</label>';
  const learn = document.createElement('button');
  learn.type = 'button'; learn.id = 'rdlearn'; learn.className = 'btn entog';
  learn.title = 'Maria’s German learning mode: her sentence-by-sentence translation, phrase glosses and grammar (Busolt, Blomberg, Meier), and her glossary (every German text)';
  learn.textContent = 'German learning mode';
  header.insertBefore(learn, en);
  bar.appendChild(box);
  bar.insertAdjacentHTML('beforeend', '<span class="muted">Maria’s sentence translation, phrase glosses and grammar in Busolt, Blomberg and Meier; her glossary underlined in every German text. Machine-made, unreviewed: check it against the German.</span>');
  header.insertAdjacentElement('afterend', bar);
  learn.addEventListener('click', () => {
    RD.on = !RD.on;
    if (RD.on) { rdLoad('glossary'); if (RD.mode !== 'de' || RD.gram) rdLoad('units'); }
    rdRedraw();
  });
  box.addEventListener('click', e => {
    const b = e.target.closest('[data-rdm]');
    if (!b || b.dataset.rdm === RD.mode) return;
    RD.mode = b.dataset.rdm; RD.pin = null;
    if (RD.mode !== 'de') rdLoad('units');
    rdRedraw();
  });
  box.querySelector('#rdgram').addEventListener('change', e => { RD.gram = e.target.checked; if (RD.gram) rdLoad('units'); rdRedraw(); });
}

/* ── styles, kept in the portal's palette ── */
(function rdStyle() {
  const css = `
  #rdbar { display: none; flex-wrap: wrap; align-items: center; gap: 0.35rem 0.9rem; padding: 0.35rem 1.2rem; background: var(--paper); border-bottom: 1px solid var(--line-soft); font-size: 0.86rem; color: var(--faded); }
  body.rd-on #rdbar { display: flex; }
  #rdbar .lab { font-family: 'Cinzel', serif; font-size: 0.66rem; letter-spacing: 0.08em; color: var(--accent); }
  #rdmode { display: inline-flex; align-items: center; gap: 0; margin-right: 0.4rem; flex: none; border: 1px solid var(--line); border-radius: 999px; overflow: hidden; font-size: 0.82rem; }
  #rdmode button { font: inherit; border: 0; background: transparent; color: var(--faded); padding: 0.22rem 0.55rem; cursor: pointer; white-space: nowrap; }
  #rdlearn { white-space: nowrap; margin-right: 0.4rem; }
  #rdmode label { white-space: nowrap; }
  #rdmode button + button { border-left: 1px solid var(--line); }
  #rdmode button.on { background: var(--accent); color: var(--parchment); }
  #rdmode label { padding: 0 0.6rem; color: var(--faded); border-left: 1px solid var(--line); display: inline-flex; gap: 0.25rem; align-items: center; cursor: pointer; }
  .rd-t { border-bottom: 1px dotted var(--accent-light); cursor: help; }
  body.rdm-en .rd-s, body.rdm-il .rd-s { cursor: pointer; }
  body.rdm-en .rd-s:hover .rd-p { border-bottom: 1px dotted var(--line); }
  .rd-p.hot { background: rgba(139, 94, 60, 0.12); border-radius: 2px; }
  .rd-s.on { background: rgba(243, 217, 138, 0.55); box-shadow: 0 0 0 2px rgba(243, 217, 138, 0.55); }
  .fpt.rd-ilm { line-height: 1.35; }
  .rd-ilp { display: inline-flex; flex-direction: column; vertical-align: top; max-width: 100%; margin: 0 0.12em 0.6em 0; }
  .rd-ild { display: block; }
  .rd-il { display: block; font-size: 0.82em; line-height: 1.25; font-style: italic; color: #2b3a52; border-top: 1px solid var(--line); margin-top: 1px; padding-top: 1px; }
  #rdpop { position: fixed; z-index: 60; max-width: 34em; padding: 0.5rem 0.75rem; background: #2e1a00; color: var(--parchment); border-radius: 5px; box-shadow: 0 3px 12px rgba(0,0,0,.35); font-size: 0.95rem; line-height: 1.4; pointer-events: none; }
  #rdpop[hidden] { display: none; }
  #rdpop .g { font-size: 1.02rem; }
  #rdpop .s { margin-top: 0.3rem; padding-top: 0.3rem; border-top: 1px solid rgba(244,237,224,.3); font-size: 0.85rem; opacity: 0.85; }
  #rdpop .gl, #rdpop .who, #rdpop .hint, #rdpop .sn, #rdpop .rl { font-size: 0.75rem; opacity: 0.8; margin-top: 0.25rem; }
  #rdpop .hint { font-style: italic; } #rdpop .rl { letter-spacing: 0.06em; text-transform: uppercase; font-size: 0.65rem; }
  #rdpop .who { border-top: 1px solid rgba(244,237,224,.2); padding-top: 0.2rem; }
  body.rd-gram .rd-p.rS { color: #1f4e8c; } body.rd-gram .rd-p.rV, body.rd-gram .rd-p.rE { color: #a12a1a; }
  body.rd-gram .rd-p.rO { color: #2f6b2f; } body.rd-gram .rd-p.rG { color: #6b3d8c; } body.rd-gram .rd-p.rP { color: #0f6b6b; }
  body.rd-gram .rd-p.rK { color: #b0600a; } body.rd-gram .rd-p.rC, body.rd-gram .rd-p.rX { color: var(--faded); }
  body.rd-gram .rd-p.d1 { background: rgba(176, 96, 10, 0.07); } body.rd-gram .rd-p.d2 { background: rgba(176, 96, 10, 0.14); } body.rd-gram .rd-p.d3 { background: rgba(176, 96, 10, 0.21); }
  body.rd-gram .rd-b { font-weight: 700; }
  .rd-b.lit { outline: 1.5px solid #a12a1a; outline-offset: 1px; border-radius: 2px; } .rd-b.lit.k { outline-color: #b0600a; }
  #rdarcs { position: fixed; inset: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 55; overflow: visible; }
  #rdarcs path { fill: none; stroke: #a12a1a; stroke-width: 1.6; opacity: 0.8; } #rdarcs path.k { stroke: #b0600a; } #rdarcs path.cont { stroke-dasharray: 4 3; }
  .rd-card .en { font-size: 1.2rem; font-weight: 600; color: #2b3a52; margin-bottom: 0.3rem; }
  .rd-card .sn { color: #2b3a52; } .rd-card .av { color: #a0522d; } .rd-card .la { font-style: italic; color: var(--accent-light); }
  .rd-card .nt, .rd-card .sp { margin-top: 0.4rem; } .rd-card .sp .old { font-weight: 600; } .rd-card .sp .mod { color: #3a5a3a; }
  .rd-card .ex { margin-top: 0.6rem; padding-left: 0.6rem; border-left: 2px solid var(--line); }
  .rd-card .ex .lab { font-size: 0.65rem; letter-spacing: 0.08em; color: var(--faded); }
  .rd-card .ex .xe { font-style: italic; color: #2b3a52; } .rd-card .acts { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 0.7rem; align-items: center; }`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
})();

/* ── start: the glossary at once (it is small), Maria's sentences when a mode or the grammar first needs them ── */
rdControls();
document.body.classList.add('rdm-de');
if (RD.on) { rdLoad('glossary'); rdRedraw(); }
