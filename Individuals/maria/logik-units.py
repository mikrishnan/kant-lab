#!/usr/bin/env python3
"""Sentence units and phrase glosses for Logik Busolt and Logik Blomberg — the Meier translator,
for the lecture transcripts.

    python3 logik-units.py prepare OUTDIR   cut every block into sentences (with offsets), write
                                            translation chunks + each chunk's glossary rules to OUTDIR/in
    python3 logik-units.py build OUTDIR     validate the translated chunks in OUTDIR/out and write
                                            translations/logik-units.json and translations/logik-units.js

Unlike the Meier alignment (align-meier.py), nothing here is inferred: the German is split into
sentences first, and the translator returns one English sentence per German sentence, so a
sentence's English belongs to it by construction. The translator starts from the earlier block
translation (translations/{busolt,blomberg}-en.json) and changes it only where the shared
glossary (glossary/kant-glossary.js) requires.

Checked on build, for every unit: the German phrases, concatenated, reproduce the sentence exactly
(ignoring whitespace); every unit has English; editorial brackets survive into the English.
"""
import importlib.util, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
TEXTS = ['busolt', 'blomberg']
CHUNK_CHARS = 15000

ABBR = {'z.e.', 'z.b.', 'd.i.', 'u.s.w.', 'u.s.f.', 'bzw.', 'etc.', 'e.g.', 'i.e.', 'cf.', 'viz.',
        'ff.', 'nr.', 'vgl.', 'd.h.', 'usw.', 'sc.', 'v.g.', 'p.', 'pp.', 'vol.', 'no.'}


def sentences(t):
    """Sentence spans [start, end) in t, by the rules of align-meier.py, as offsets into t itself."""
    spans, start = [], 0
    for m in re.finditer(r'[.!?]["”’)\]]*(\s+)(?=\S)', t):
        end = m.start(1)                    # the sentence ends before the whitespace
        nxt_at = m.end()
        before = t[start:m.start() + 1]
        words = before.split()
        tok = words[-1] if words else ''
        low = tok.lower().lstrip('(["“‘')
        if low in ABBR or re.search(r'\b[a-z]\.[a-z]\.$', low):    # z.E.  d.i.
            continue
        if re.fullmatch(r'\(?\d+\.', tok):                        # enumerator "1." / "1.)"
            continue
        if re.fullmatch(r'[A-Za-z]\.', tok):                       # lone letter: "Z. E.", "a.)"
            continue
        if t[nxt_at].islower() and not re.search(r'[?!]["”’)\]]*$', t[start:end]):
            continue                                                 # "§ 21. und": a reference, not an end
        spans.append([start, end])
        start = nxt_at
    if t[start:].strip():
        spans.append([start, len(t.rstrip())])
    return [[a + len(t[a:b]) - len(t[a:b].lstrip()), b] for a, b in spans if t[a:b].strip()]


def glossary_module():
    spec = importlib.util.spec_from_file_location('glossary', os.path.join(HERE, 'glossary', 'glossary.py'))
    g = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(g)
    return g


def rules(g, matcher, ent, text):
    """The glossary rules for the terms in text, as glossary.py slice prints them."""
    seen, lines = set(), []
    for eid, s0, s1 in matcher.find(text):
        if eid in seen:
            continue
        seen.add(eid)
        e = ent[eid]
        line = '- %s → %s' % (e['de'], e['en'])
        if e.get('senses'):
            line += '; but ' + '; '.join('“%s” when %s' % (s['en'], s['when']) for s in e['senses'])
        if e.get('avoid'):
            line += '. Never: ' + ', '.join(e['avoid'])
        lines.append(line + '.')
    return lines


def cmd_prepare(outdir):
    g = glossary_module()
    corpus, glossary, meta = g.load()
    m, ent = g.Matcher(glossary), {e['id']: e for e in glossary}
    os.makedirs(os.path.join(outdir, 'in'), exist_ok=True)
    os.makedirs(os.path.join(outdir, 'out'), exist_ok=True)
    manifest = []
    for t in TEXTS:
        en = json.load(open(os.path.join(HERE, 'translations', t + '-en.json'), encoding='utf8'))['blocks']
        chunk, size, n = [], 0, 1

        def flush():
            nonlocal chunk, size, n
            if not chunk:
                return
            name = '%s-%02d' % (t, n)
            with open(os.path.join(outdir, 'in', name + '.jsonl'), 'w', encoding='utf8') as f:
                for row in chunk:
                    f.write(json.dumps(row, ensure_ascii=False) + '\n')
            text = ' '.join(s['de'] for row in chunk for s in row['sentences'])
            with open(os.path.join(outdir, 'in', name + '.glossary.txt'), 'w', encoding='utf8') as f:
                f.write('Glossary v%s — the rules for the terms in this chunk:\n' % meta['version'])
                f.write('\n'.join(rules(g, m, ent, text)) + '\n')
            manifest.append((name, len(chunk), size))
            chunk, size, n = [], 0, n + 1

        for bid, text in corpus[t]:
            sents = sentences(text)
            row = {'id': bid, 'sentences': [{'k': k, 'de': text[a:b]} for k, (a, b) in enumerate(sents)],
                   'reference_en': en.get(bid, '')}
            L = len(text)
            if chunk and size + L > CHUNK_CHARS:
                flush()
            chunk.append(row)
            size += L
        flush()
    for name, nb, sz in manifest:
        print(name, nb, sz)
    print(len(manifest), 'chunks')


def cmd_build(outdir):
    g = glossary_module()
    corpus, glossary, meta = g.load()
    ws = lambda s: re.sub(r'\s+', '', s)
    br = lambda s: re.findall(r'\[[^\]]*\]|<[^>]*>', s)
    got = {}
    for fn in sorted(os.listdir(os.path.join(outdir, 'out'))):
        for line in open(os.path.join(outdir, 'out', fn), encoding='utf8'):
            if line.strip():
                o = json.loads(line)
                got[o['id']] = o['units']
    units, js, problems, n_units, n_ph = {}, {}, [], 0, 0
    for t in TEXTS:
        units[t], js[t] = {}, {}
        for bid, text in corpus[t]:
            sents = sentences(text)
            u = got.get(bid)
            if u is None:
                problems.append((bid, 'missing'))
                continue
            if len(u) != len(sents):
                problems.append((bid, 'unit count %d != %d' % (len(u), len(sents))))
                continue
            rows, jrows = [], []
            for k, ((a, b), unit) in enumerate(zip(sents, u)):
                de = text[a:b]
                phrases = unit.get('phrases') or []
                if ws(''.join(p[0] for p in phrases)) != ws(de):
                    problems.append((bid, 'phrases do not reproduce sentence %d' % k))
                if not (unit.get('en') or '').strip():
                    problems.append((bid, 'no English for sentence %d' % k))
                if br(de) and [x for x in br(de) if x not in unit.get('en', '')]:
                    problems.append((bid, 'bracket lost in sentence %d' % k))
                # phrase offsets into the block text
                idx = [i for i in range(a, b) if not text[i].isspace()]
                flat = ''.join(text[i] for i in idx)
                at, poff = 0, []
                for de_p, en_p in phrases:
                    f = ws(de_p)
                    if not flat.startswith(f, at) or not f:
                        poff = None
                        break
                    poff.append([idx[at], idx[at + len(f) - 1] + 1, en_p])
                    at += len(f)
                rows.append({'k': k, 'o': [a, b], 'de': de, 'en': unit['en'], 'phrases': phrases})
                jrows.append({'o': [a, b], 'en': unit['en'], 'p': poff or []})
                n_units += 1
                n_ph += len(phrases)
            units[t][bid] = rows
            js[t][bid] = jrows
    print('%d units, %d phrases; %d problems' % (n_units, n_ph, len(problems)))
    for p in problems[:40]:
        print('  ', *p)
    doc = {'meta': {'texts': TEXTS, 'glossary': meta['version'],
                    'method': 'German split into sentences by logik-units.py; each sentence translated and broken into '
                              'phrases by a model, starting from translations/{busolt,blomberg}-en.json and following the '
                              'shared glossary. Phrases reproduce the German exactly (checked).',
                    'translation': 'Unreviewed machine translation by Claude.'},
           'units': units}
    with open(os.path.join(HERE, 'translations', 'logik-units.json'), 'w', encoding='utf8') as f:
        json.dump(doc, f, ensure_ascii=False, indent=1)
        f.write('\n')
    with open(os.path.join(HERE, 'translations', 'logik-units.js'), 'w', encoding='utf8') as f:
        f.write('/* Generated by logik-units.py build — do not hand-edit.\n'
                '   LOGIK_UNITS[text][blockId] = [ { o: [start, end) of the sentence in the block text, en: its English,\n'
                '   p: [ [start, end, gloss], … ] its phrases } … ]. Unreviewed machine translation; glossary v%s. */\n' % meta['version'])
        f.write('const LOGIK_UNITS = ' + json.dumps(js, ensure_ascii=False, separators=(',', ':')) + ';\n')
    return not problems


if __name__ == '__main__':
    cmd, outdir = sys.argv[1], sys.argv[2]
    if cmd == 'prepare':
        cmd_prepare(outdir)
    else:
        sys.exit(0 if cmd_build(outdir) else 1)
