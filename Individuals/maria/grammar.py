#!/usr/bin/env python3
"""The grammar layer: every phrase of Busolt, Blomberg and Meier tagged with its role in the sentence,
and every verb bracket (the finite verb or clause opener, and the verb parts sent to the clause's end)
linked word to word.

    python3 grammar.py prepare OUTDIR   write the phrases, sentence by sentence, as tagging chunks to OUTDIR/in
    python3 grammar.py build OUTDIR     validate the tagged chunks in OUTDIR/out and write
                                        translations/grammar.json and translations/grammar.js

The phrases are the reader's own (translations/logik-units.js, translations/meier-phrases.js), so a tag
belongs to a phrase by construction. The tags are a model's analysis, not the AA's, and the reader
says so wherever it shows them.

Roles, one per phrase, with the depth of the clause it stands in (0 main clause, 1 subordinate, 2 a
clause inside that, 3 deeper):
    S subject · V finite verb · O object · G genitive attribute · P predicative · A adverbial or
    prepositional phrase · E verb part at the clause's end (infinitive, participle, separable particle,
    or a subordinate clause's finite verb) · K clause opener (subordinating conjunction, relative or
    interrogative word, "um … zu") · C coordinating conjunction · X other (Latin, a reference, an
    enumerator)

Checked on build: one role per phrase, from the set above; every bracket word stands in the phrase it
names; a bracket runs left to right.
"""
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
TEXTS = ['busolt', 'blomberg', 'meier']
ROLES = set('SVOGPAEKCX')
CHUNK_PHRASES = 1800
ROLE_NAMES = {'S': 'subject', 'V': 'finite verb', 'O': 'object', 'G': 'genitive', 'P': 'predicative',
              'A': 'adverbial', 'E': 'verb part at the end', 'K': 'clause opener', 'C': 'conjunction', 'X': 'other'}

DUMP_JS = r"""
const fs = require('fs'), path = require('path'), g = globalThis, root = path.resolve('..', '..');
const L = f => (0, eval)(fs.readFileSync(f, 'utf8').replace(/^const /mg, 'var '));
L(path.join(root, 'data/logik-busolt-24.js')); L(path.join(root, 'data/logik-blomberg-24.js'));
L('meier-auszug.js'); L('translations/logik-units.js'); L('translations/meier-phrases.js'); L('translations/meier-aligned.js');
const out = { busolt: [], blomberg: [], meier: [] };
for (const [t, W] of [['busolt', g.LOGIK_BUSOLT], ['blomberg', g.LOGIK_BLOMBERG]])
  W.sections.forEach(s => s.blocks.forEach(b => (g.LOGIK_UNITS[t][b.id] || []).forEach((u, k) =>
    out[t].push({ b: b.id, k, text: b.text, o: u.o, p: u.p.map(x => [x[0], x[1]]) }))));
Object.keys(g.MEIER_AUSZUG.paras).map(Number).sort((a, b) => a - b).forEach(n => {
  const text = g.MEIER_AUSZUG.paras[String(n)];
  (g.MEIER_ALIGNED[n] || []).forEach((u, k) =>
    out.meier.push({ b: 'meier-para-' + n, k, text, o: u.o, p: ((g.MEIER_PHRASES[n] || [])[k] || []).map(x => [x[0], x[1]]) }));
});
process.stdout.write(JSON.stringify(out));
"""


def dump():
    return json.loads(subprocess.run(['node', '-e', DUMP_JS], capture_output=True, text=True, check=True, cwd=HERE).stdout)


def cmd_prepare(outdir):
    d = dump()
    os.makedirs(os.path.join(outdir, 'in'), exist_ok=True)
    os.makedirs(os.path.join(outdir, 'out'), exist_ok=True)
    names = []
    for t in TEXTS:
        chunk, n, size = [], 1, 0

        def flush():
            nonlocal chunk, n, size
            if chunk:
                name = '%s-%02d' % (t, n)
                with open(os.path.join(outdir, 'in', name + '.jsonl'), 'w', encoding='utf8') as f:
                    for row in chunk:
                        f.write(json.dumps(row, ensure_ascii=False) + '\n')
                names.append((name, len(chunk), size))
                chunk, n, size = [], n + 1, 0

        for u in d[t]:
            if not u['p']:
                continue
            ph = [re.sub(r'\s+', ' ', u['text'][a:z]).strip() for a, z in u['p']]
            if size and size + len(ph) > CHUNK_PHRASES:
                flush()
            chunk.append({'id': '%s|%s|%d' % (t, u['b'], u['k']), 'ph': ph})
            size += len(ph)
        flush()
    for x in names:
        print(*x)
    print(len(names), 'chunks')


def locate(text, a, z, word):
    """[start, end) of word inside text[a:z], whole word preferred; None if it is not there."""
    seg = text[a:z]
    m = re.search(r'(?<![\wäöüÄÖÜß])' + re.escape(word) + r'(?![\wäöüÄÖÜß])', seg) or (re.search(re.escape(word), seg) if word else None)
    return [a + m.start(), a + m.end()] if m else None


def cmd_build(outdir):
    d = dump()
    got = {}
    for fn in sorted(os.listdir(os.path.join(outdir, 'out'))):
        for line in open(os.path.join(outdir, 'out', fn), encoding='utf8'):
            if line.strip():
                o = json.loads(line)
                got[o['id']] = o
    js, full, problems, n_s, n_br, roles_n = {}, {}, [], 0, 0, {}
    for t in TEXTS:
        js[t], full[t] = {}, {}
        for u in d[t]:
            if not u['p']:
                continue
            sid = '%s|%s|%d' % (t, u['b'], u['k'])
            o = got.get(sid)
            if not o:
                problems.append((sid, 'missing'))
                continue
            r = o.get('r') or []
            if len(r) != len(u['p']) or any(not (len(x) == 2 and x[0] in ROLES and x[1] in '0123') for x in r):
                problems.append((sid, 'roles %r for %d phrases' % (r, len(u['p']))))
                continue
            brs = []
            for br in o.get('b') or []:
                try:
                    (li, lw), rights = br
                    L = locate(u['text'], *u['p'][li], lw)
                    R = [locate(u['text'], *u['p'][ri], rw) for ri, rw in rights]
                except (ValueError, IndexError, TypeError):
                    problems.append((sid, 'bracket malformed %r' % (br,)))
                    continue
                if not L or not R or any(x is None for x in R) or any(x[0] <= L[0] for x in R):
                    problems.append((sid, 'bracket word not found or backwards %r' % (br,)))
                    continue
                brs.append([L, R])
            for x in r:
                roles_n[x[0]] = roles_n.get(x[0], 0) + 1
            n_s += 1
            n_br += len(brs)
            js[t].setdefault(u['b'], [])
            while len(js[t][u['b']]) < u['k']:
                js[t][u['b']].append(None)
            js[t][u['b']].append({'r': ''.join(r), 'b': brs})
            full[t].setdefault(u['b'], {})[u['k']] = {'phrases': [u['text'][a:z] for a, z in u['p']], 'r': r,
                                                      'b': [[u['text'][L[0]:L[1]], [u['text'][a:z] for a, z in R]] for L, R in brs]}
    print('%d sentences tagged, %d verb brackets; %d problems' % (n_s, n_br, len(problems)))
    print('roles: ' + ', '.join('%s %s %d' % (k, ROLE_NAMES[k], v) for k, v in sorted(roles_n.items(), key=lambda kv: -kv[1])))
    for p in problems[:40]:
        print('  ', *p)
    meta = {'roles': ROLE_NAMES, 'depth': '0 main clause, 1 subordinate clause, 2 and 3 clauses inside that',
            'method': 'Phrases from translations/logik-units.js and translations/meier-phrases.js; each sentence tagged by a '
                      'model (grammar.py). Unreviewed analysis, not the Academy Edition\'s.'}
    with open(os.path.join(HERE, 'translations', 'grammar.json'), 'w', encoding='utf8') as f:
        json.dump({'meta': meta, 'sentences': full}, f, ensure_ascii=False, indent=1)
        f.write('\n')
    with open(os.path.join(HERE, 'translations', 'grammar.js'), 'w', encoding='utf8') as f:
        f.write('/* Generated by grammar.py build — do not hand-edit. GRAMMAR[text][blockId][k] = { r: two characters per\n'
                '   phrase of sentence k, role letter then clause depth (S subject, V finite verb, O object, G genitive,\n'
                '   P predicative, A adverbial, E verb part at the end, K clause opener, C conjunction, X other; depth 0 main\n'
                '   clause … 3), b: [ [ [start, end) of the bracket\'s left word, [ [start, end) of each right word ] ] ] },\n'
                '   offsets into the block text. A model\'s analysis, unreviewed. */\n')
        f.write('const GRAMMAR = ' + json.dumps(js, ensure_ascii=False, separators=(',', ':')) + ';\n')
    return not problems


if __name__ == '__main__':
    cmd, outdir = sys.argv[1], sys.argv[2]
    if cmd == 'prepare':
        cmd_prepare(outdir)
    else:
        sys.exit(0 if cmd_build(outdir) else 1)
