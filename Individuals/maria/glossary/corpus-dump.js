// Print the corpus the glossary is checked against, as JSON: { text: [[blockId, German], …] }.
// Reads the shared data files by path; nothing is copied. Used by glossary.py.
const fs = require('fs'), path = require('path'), g = globalThis;
const root = path.resolve(__dirname, '..', '..', '..');
const load = (f, v) => { (0, eval)(fs.readFileSync(path.join(root, f), 'utf8').replace(/^const /mg, 'var ')); return g[v]; };
const out = {};
for (const [k, f, v] of [['busolt', 'data/logik-busolt-24.js', 'LOGIK_BUSOLT'],
                         ['blomberg', 'data/logik-blomberg-24.js', 'LOGIK_BLOMBERG'],
                         ['wiener', 'data/logik-wiener-24.js', 'LOGIK_WIENER']])
  out[k] = load(f, v).sections.flatMap(s => s.blocks.filter(b => b.kind !== 'rule').map(b => [b.id, b.text]));
out.meier = Object.entries(load('Individuals/maria/meier-auszug.js', 'MEIER_AUSZUG').paras).map(([n, t]) => ['meier-para-' + n, t]);
out.refl16 = load('data/reflexionen-16-meier.js', 'REFL_ENTRIES').map(e => ['refl-' + e.r, e.text]);
out.refl17 = load('data/reflexionen-17-18-baumgarten.js', 'REFLM_ENTRIES').map(e => ['refl-' + e.r, e.text]);
(0, eval)(fs.readFileSync(path.join(__dirname, 'kant-glossary.js'), 'utf8').replace(/^const /mg, 'var '));
process.stdout.write(JSON.stringify({ corpus: out, glossary: g.KANT_GLOSSARY, meta: g.KANT_GLOSSARY_META }));
