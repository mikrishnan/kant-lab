#!/usr/bin/env python3
"""The Kant Lab glossary tool: find the glossary's terms in the corpus and hold translations to it.

    python3 glossary.py validate   check kant-glossary.js itself (ids, fields, duplicate keys)
    python3 glossary.py count      count every term in every text; writes counts.js for index.html
    python3 glossary.py check      how often existing English translations used each term's rendering
    python3 glossary.py missing    frequent nouns and compounds the glossary does not cover yet
    python3 glossary.py index      where each term stands in the texts the reader shows; writes
                                   terms-index.js for ../busolt-reader.html
    python3 glossary.py slice      read German on stdin; print the rules for just the terms in it,
                                   ready to put in a translation prompt
    python3 glossary.py examples   one example sentence per entry from each text the reader shows,
                                   with its existing English; writes examples.js

Nothing here calls a language model. Matching works on a normalised key, so that the
transcripts' period spellings meet the glossary's modern lemma: ß/ss, th/t, ey/ei, zz/tz,
-zion/-tion, ae/oe/ue, c/k, ck/k, a lengthening h before l/m/n/r, and doubled consonants are
folded. Umlauts are not folded (schön is not schon), so plurals with an umlaut go in the
entry's `f`. Nouns must begin with a capital, as German nouns do, so the verb "folgen" is not
the noun "Folgen". Endings (-e, -en, -es, -s, -n, -er, -ern) are allowed on the last word of
a term.
"""
import json, os, re, subprocess, sys
from collections import Counter, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
TEXTS = ['meier', 'busolt', 'blomberg', 'wiener', 'refl16', 'refl17']
TRANSLATIONS = {'meier': 'meier-en.json', 'busolt': 'busolt-en.json', 'blomberg': 'blomberg-en.json'}
NOUN_END = ['', 'e', 'en', 'n', 'es', 's', 'er', 'ern', 'ns', 'nen']
ADJ_END = ['', 'e', 'er', 'es', 'en', 'em']
WORD = re.compile(r"[A-Za-zÄÖÜäöüß]+")


def key(w):
    """The matching key of one word. Lossy on purpose; it is never displayed."""
    w = w.lower().replace('ß', 'ss').replace('th', 't').replace('ey', 'ei').replace('y', 'i')
    w = w.replace('zz', 'tz').replace('zion', 'tion').replace('qv', 'qu')
    w = re.sub(r'(?<!q)ue', 'u', w).replace('ae', 'a').replace('oe', 'o')
    w = w.replace('ck', 'k')
    w = re.sub(r'c(?=[aoulrt]|$)', 'k', w)
    w = re.sub(r'c(?=[ei])', 'z', w)
    w = re.sub(r'([aeiou])h(?=[lmnr])', r'\1', w)
    w = re.sub(r'(.)\1+', r'\1', w)
    w = w.replace('tz', 'z').replace('ntz', 'nz')
    return w


def load():
    raw = subprocess.run(['node', os.path.join(HERE, 'corpus-dump.js')], capture_output=True, text=True, check=True).stdout
    d = json.loads(raw)
    return d['corpus'], d['glossary'], d['meta']


class Matcher:
    """Every surface form of every entry, as sequences of word keys, longest first."""

    def __init__(self, glossary):
        self.patterns = []                     # (keys tuple, entry id, pos)
        for e in glossary:
            forms = [e['de']] + e.get('v', []) + e.get('f', [])
            for form in forms:
                ks = tuple(key(w) for w in WORD.findall(form))
                if ks:
                    self.patterns.append((ks, e['id'], e['pos'], form in e.get('f', [])))
        self.patterns.sort(key=lambda p: -len(p[0]))
        self.by_first = defaultdict(list)
        for p in self.patterns:
            self.by_first[p[0][0][:3]].append(p)

    def find(self, text):
        """[(entry id, start, end)] for every term in text, longest match first, no overlaps."""
        toks = [(m.group(), m.start(), m.end()) for m in WORD.finditer(text)]
        keys = [key(t[0]) for t in toks]
        hits, taken = [], set()
        for i in range(len(toks)):
            if i in taken:
                continue
            for ks, eid, pos, exact in self.by_first.get(keys[i][:3], []):
                n = len(ks)
                if i + n > len(toks) or any(j in taken for j in range(i, i + n)):
                    continue
                if any(keys[i + j] != ks[j] for j in range(n - 1)):
                    continue
                last, want = keys[i + n - 1], ks[-1]
                ends = [''] if exact else (NOUN_END if pos in ('n',) else ADJ_END if pos == 'a' else [''])
                if not any(last == want + e for e in ends):
                    continue
                if pos == 'n' and n == 1 and not toks[i][0][0].isupper():
                    continue
                hits.append((eid, toks[i][1], toks[i + n - 1][2]))
                taken.update(range(i, i + n))
                break
        return hits


def cmd_validate(glossary, meta):
    problems, seen, keys = [], set(), defaultdict(list)
    for e in glossary:
        for f in ('id', 'de', 'pos', 'en', 'd', 'b'):
            if not e.get(f):
                problems.append('%s: missing %s' % (e.get('id', '?'), f))
        if e['id'] in seen:
            problems.append('duplicate id ' + e['id'])
        seen.add(e['id'])
        if e['pos'] not in ('n', 'v', 'a', 'p', 'l'):
            problems.append('%s: pos %r' % (e['id'], e['pos']))
        for form in [e['de']] + e.get('v', []):
            keys[tuple(key(w) for w in WORD.findall(form))].append(e['id'])
    clashes = {k: v for k, v in keys.items() if len(set(v)) > 1}
    for k, v in sorted(clashes.items()):
        problems.append('same key %s for %s' % (' '.join(k), ', '.join(sorted(set(v)))))
    bases = Counter(e['b'] for e in glossary)
    print('glossary v%s (%s): %d entries; basis %s' % (meta['version'], meta['status'], len(glossary), dict(bases)))
    print('\n'.join(problems) if problems else 'clean')
    return not [p for p in problems if not p.startswith('same key')]


def count_all(corpus, glossary):
    m = Matcher(glossary)
    counts = {e['id']: Counter() for e in glossary}
    hits_by_block = {}
    for t in TEXTS:
        for bid, text in corpus[t]:
            hs = m.find(text)
            hits_by_block[(t, bid)] = hs
            for eid, _, _ in hs:
                counts[eid][t] += 1
    return counts, hits_by_block


def cmd_count(corpus, glossary, meta):
    counts, _ = count_all(corpus, glossary)
    out = {eid: dict(c, total=sum(c.values())) for eid, c in counts.items()}
    zero = [eid for eid, c in out.items() if not c['total']]
    with open(os.path.join(HERE, 'counts.js'), 'w', encoding='utf8') as f:
        f.write('/* Generated by glossary.py count — do not hand-edit. Occurrences of each glossary entry\n'
                '   per text: meier, busolt, blomberg, wiener, refl16 (AA XVI), refl17 (AA XVII–XVIII). */\n')
        f.write('const KANT_GLOSSARY_COUNTS = ' + json.dumps(out, separators=(',', ':')) + ';\n')
    total = sum(c['total'] for c in out.values())
    top = sorted(out.items(), key=lambda kv: -kv[1]['total'])[:15]
    print('%d term occurrences tagged across %d texts' % (total, len(TEXTS)))
    print('most frequent: ' + ', '.join('%s %d' % (k, v['total']) for k, v in top))
    print('entries with no occurrence (%d): %s' % (len(zero), ', '.join(zero)))
    return out


def cmd_check(corpus, glossary, meta):
    """For blocks with an English translation: does the English contain the term's rendering?"""
    ent = {e['id']: e for e in glossary}
    _, hits = count_all(corpus, glossary)
    stats = defaultdict(lambda: [0, 0])          # eid -> [blocks with the term, blocks whose English has it]
    misses = defaultdict(list)
    for t, fname in TRANSLATIONS.items():
        tr = json.load(open(os.path.join(HERE, '..', 'translations', fname), encoding='utf8'))['blocks']
        for bid, text in corpus[t]:
            en = (tr.get(bid) or '').lower()
            if not en:
                continue
            for eid in {h[0] for h in hits[(t, bid)]}:
                e = ent[eid]
                stems = [s.lower() for s in (e.get('match') or [e['en']] + [s['en'] for s in e.get('senses', [])])]
                stems = [st[:-1] if st.endswith('y') else st for st in stems]   # property/properties, necessary/necessarily
                if e['pos'] == 'l':
                    stems += [e['de'].lower()] + [x.lower() for x in e.get('la', [])]   # Latin left as Latin is fine
                stats[eid][0] += 1
                if any(s in en for s in stems):
                    stats[eid][1] += 1
                elif len(misses[eid]) < 3:
                    misses[eid].append((bid, en[:110]))
    tot = [sum(v[0] for v in stats.values()), sum(v[1] for v in stats.values())]
    print('Existing translations (translations/*-en.json) against the glossary:')
    print('  %d term occurrences in translated blocks; the agreed rendering present in %d (%.1f%%)' % (tot[0], tot[1], 100.0 * tot[1] / max(1, tot[0])))
    rows = sorted(((v[0] - v[1], eid, v) for eid, v in stats.items() if v[0] >= 10), reverse=True)
    print('  terms most often rendered otherwise (blocks with the term ≥ 10):')
    for miss, eid, (n, ok) in rows[:25]:
        e = ent[eid]
        print('   %-24s %-26s %4d/%-4d agreed  (%3.0f%%)' % (e['de'], '→ ' + e['en'], ok, n, 100.0 * ok / n))
    with open(os.path.join(HERE, 'check-report.txt'), 'w', encoding='utf8') as f:
        f.write('glossary.py check — glossary v%s against translations/*-en.json\n\n' % meta['version'])
        f.write('%d term occurrences in translated blocks; agreed rendering present in %d (%.1f%%)\n\n' % (tot[0], tot[1], 100.0 * tot[1] / max(1, tot[0])))
        for miss, eid, (n, ok) in rows:
            e = ent[eid]
            f.write('%s → %s: %d of %d (%.0f%%)\n' % (e['de'], e['en'], ok, n, 100.0 * ok / n))
            for bid, s in misses[eid]:
                f.write('    %s: %s…\n' % (bid, s))
    with open(os.path.join(HERE, 'check.js'), 'w', encoding='utf8') as f:
        f.write('/* Generated by glossary.py check — do not hand-edit. Per entry: [blocks in the existing\n'
                '   translations whose German has the term, blocks whose English uses its agreed rendering]. */\n')
        f.write('const KANT_GLOSSARY_CHECK = ' + json.dumps({k: v for k, v in stats.items()}, separators=(',', ':')) + ';\n')


def cmd_missing(corpus, glossary, meta):
    m = Matcher(glossary)
    covered = Counter(); nouns = Counter(); show = {}
    lemma_keys = {key(e['de'].split()[-1]): e['id'] for e in glossary if e['pos'] in ('n', 'a')}
    compounds = Counter()
    for t in TEXTS:
        for bid, text in corpus[t]:
            spans = [(s, e) for _, s, e in m.find(text)]
            for mt in WORD.finditer(text):
                w = mt.group()
                if not w[0].isupper() or len(w) < 5:
                    continue
                if any(s <= mt.start() < e for s, e in spans):
                    continue
                k = re.sub(r'(en|es|e|n|s)$', '', key(w))
                nouns[k] += 1; show.setdefault(k, w)
                for lk in lemma_keys:
                    if len(lk) >= 5 and k.endswith(lk) and k != lk:
                        compounds[(k, lemma_keys[lk])] += 1
                        break
    stop = {'diese', 'diese', 'welche', 'denn', 'wenn', 'aber', 'also', 'daher', 'ferner', 'eine', 'alle', 'alles', 'dieser', 'dieses', 'durch', 'nicht', 'nach', 'weil', 'jene', 'jenes', 'folglich', 'demnach', 'allein', 'unter', 'etwas', 'nichts', 'hieraus', 'dagegen', 'sonst', 'beide', 'einige', 'viele', 'andere', 'andern', 'selbst', 'dadurch', 'entweder', 'derjenige', 'diejenige', 'keine', 'einen', 'einem', 'unsere', 'unser', 'sind', 'ohne', 'oder', 'auch', 'doch', 'beim', 'eben', 'hier', 'über', 'neben', 'menschen', 'mensch'}
    print('Frequent capitalised words the glossary does not cover (candidates to review):')
    print('  ' + ', '.join('%s %d' % (show[k], n) for k, n in nouns.most_common(160) if k not in stop)[:4000])
    print('\nFrequent compounds whose head is a glossary term (each may need its own entry):')
    print('  ' + ', '.join('%s (%s) %d' % (show.get(k, k), eid, n) for (k, eid), n in compounds.most_common(40)))


READER_TEXTS = ['busolt', 'blomberg', 'meier']       # the texts ../busolt-reader.html shows


def cmd_index(corpus, glossary, meta):
    """Term positions per block for the reader, so it marks exactly what `count` counts."""
    m = Matcher(glossary)
    ids = [e['id'] for e in glossary]
    ix = {eid: i for i, eid in enumerate(ids)}
    out, n = {}, 0
    for t in READER_TEXTS:
        out[t] = {}
        for bid, text in corpus[t]:
            flat = []
            for eid, s0, s1 in m.find(text):
                flat += [s0, s1, ix[eid]]
            if flat:
                out[t][bid] = flat
                n += len(flat) // 3
    with open(os.path.join(HERE, 'terms-index.js'), 'w', encoding='utf8') as f:
        f.write('/* Generated by glossary.py index — do not hand-edit; re-run after editing kant-glossary.js.\n'
                '   KANT_GLOSSARY_SPANS.spans[text][blockId] = [start, end, i, start, end, i, …]: a glossary term\n'
                '   at [start, end) of the block\'s text, where KANT_GLOSSARY_SPANS.ids[i] is the entry id. */\n')
        f.write('const KANT_GLOSSARY_SPANS = ' + json.dumps({'version': meta['version'], 'ids': ids, 'spans': out}, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print('%d term positions in %s' % (n, ', '.join(READER_TEXTS)))


def cmd_slice(corpus, glossary, meta):
    """The glossary entries a passage needs, as compact rules for a translator (human or model)."""
    text = sys.stdin.read()
    ent = {e['id']: e for e in glossary}
    seen = []
    for eid, s0, s1 in Matcher(glossary).find(text):
        if eid not in [x[0] for x in seen]:
            seen.append((eid, text[s0:s1]))
    print('Glossary v%s: render these terms exactly as given.' % meta['version'])
    for eid, printed in seen:
        e = ent[eid]
        line = '- %s (as printed: %s) → %s' % (e['de'], printed, e['en'])
        if e.get('senses'):
            line += '; but ' + '; '.join('“%s” when %s' % (s['en'], s['when']) for s in e['senses'])
        if e.get('avoid'):
            line += '. Never: ' + ', '.join(e['avoid'])
        if e.get('la'):
            line += '. Latin: ' + ', '.join(e['la'])
        print(line + '.')


EX_TEXTS = ['busolt', 'blomberg', 'meier']
DEFINING = re.compile(r'\b(ist|sind|heißt|heisst|heissen|heißen|nennt|nennet|nennen|bestehet|besteht|bedeutet)\b')


def stems_of(e):
    """The English forms that count as the entry's rendering, as cmd_check accepts them."""
    st = [x.lower() for x in (e.get('match') or [e['en']] + [x['en'] for x in e.get('senses', [])])]
    st = [x[:-1] if x.endswith('y') else x for x in st]
    if e['pos'] == 'l':
        st += [e['de'].lower()] + [x.lower() for x in e.get('la', [])]
    return st


def cmd_examples(corpus, glossary, meta):
    """For every entry and each of Busolt, Blomberg and Meier: one sentence that uses the term, with the
    English it already has (translations/logik-units.json, translations/meier-aligned.js). Chosen by
    rule, not by hand: the English must use the agreed rendering; then whole sentences of middling
    length, without editorial brackets, preferring ones that say what the thing is ("… ist …")."""
    m, ent = Matcher(glossary), {e['id']: e for e in glossary}
    tr = os.path.join(HERE, '..', 'translations')
    units = json.load(open(os.path.join(tr, 'logik-units.json'), encoding='utf8'))['units']
    side = json.loads(subprocess.run(['node', '-e', PAGES_JS], capture_output=True, text=True, check=True, cwd=HERE).stdout)
    pages, meier = side['pages'], side['meier']    # AA pages per Logik block; MEIER_ALIGNED, with its offsets
    texts = dict(corpus)
    best = defaultdict(dict)                       # eid -> text -> (score, example)
    for t in EX_TEXTS:
        for bid, text in texts[t]:
            if t == 'meier':
                n = bid.rsplit('-', 1)[1]
                sents = [(k, g['o'], g['en']) for k, g in enumerate(meier.get(n, []))]
                cite, link = '§ ' + n, 'meier:' + bid
            else:
                sents = [(u['k'], u['o'], u['en']) for u in units[t].get(bid, [])]
                pg = pages[bid]
            hits = m.find(text)
            for k, (a, z), en in sents:
                de = text[a:z]
                if t != 'meier':
                    p = pg['aa']
                    for x in pg['pages']:
                        if x['i'] <= a:
                            p = x['p']
                    cite, link = 'AA 24:%d' % p, '%s:%s.%d' % (t, bid, k)
                else:
                    link = 'meier:%s.%d' % (bid, k)
                low = en.lower()
                for eid, s0, s1 in hits:
                    if not (a <= s0 and s1 <= z):
                        continue
                    found = [(low.find(st), st) for st in stems_of(ent[eid]) if st in low]
                    score, e_at = 0, None
                    if found:
                        i, st = min(found)
                        j = i + len(st)
                        while j < len(en) and en[j].isalpha():
                            j += 1                 # the whole word: cognition → cognitions
                        e_at = [i, j]
                    else:
                        score -= 100               # only if no sentence in this text renders it as agreed
                    L = len(de)
                    score += 30 if 60 <= L <= 220 else 15 if 35 <= L <= 300 else 0
                    score += 10 if de[:1].isupper() and de.rstrip()[-1:] in '.?!' else 0
                    score -= 25 if re.search(r'[\[\]<>|]', de) else 0
                    score += 8 if DEFINING.search(de) else 0
                    score -= 3 * max(0, de.count(',') - 3)
                    ex = {'t': t, 'cite': cite, 'link': link, 'de': de, 'd': [s0 - a, s1 - a], 'en': en, 'e': e_at}
                    if eid not in best or t not in best[eid] or score > best[eid][t][0]:
                        best[eid][t] = (score, ex)
    out = {eid: [best[eid][t][1] for t in EX_TEXTS if t in best[eid]] for eid in ent if eid in best}
    with open(os.path.join(HERE, 'examples.js'), 'w', encoding='utf8') as f:
        f.write('/* Generated by glossary.py examples — do not hand-edit; re-run after editing kant-glossary.js or the\n'
                '   translations. KANT_GLOSSARY_EXAMPLES[id] = [ { t: text, cite, link: the reader\'s #hash for the sentence,\n'
                '   de: the German sentence, d: [start, end) of the term in it, en: its existing English, e: [start, end) of\n'
                '   the rendering in that, or null where no sentence of that text yet renders the term as the glossary does } ],\n'
                '   at most one per text. Chosen by rule; the English is unreviewed machine output. */\n')
        f.write('const KANT_GLOSSARY_EXAMPLES = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
    per = Counter(len(v) for v in out.values())
    print('%d of %d entries have examples: %s; %d examples in all' % (len(out), len(ent),
          ', '.join('%d with %d' % (per[n], n) for n in sorted(per, reverse=True)), sum(len(v) for v in out.values())))
    off = sum(1 for v in out.values() for x in v if x['e'] is None)
    print('%d of them in a text whose English never uses the agreed rendering (marked so)' % off)
    none = [ent[e]['de'] for e in ent if e not in out]
    if none:
        print('not in Busolt, Blomberg or Meier at all: ' + ', '.join(none))


PAGES_JS = r"""
const fs = require('fs'), path = require('path'), root = path.resolve(__dirname, '..', '..', '..'), out = {};
for (const [f, v] of [['data/logik-busolt-24.js', 'LOGIK_BUSOLT'], ['data/logik-blomberg-24.js', 'LOGIK_BLOMBERG']]) {
  (0, eval)(fs.readFileSync(path.join(root, f), 'utf8').replace(/^const /mg, 'var '));
  globalThis[v].sections.forEach(s => s.blocks.forEach(b => { out[b.id] = { aa: b.aa, pages: (b.pages || []).filter(p => p.i > 0) }; }));
}
(0, eval)(fs.readFileSync(path.join(root, 'Individuals/maria/translations/meier-aligned.js'), 'utf8').replace(/^const /mg, 'var '));
process.stdout.write(JSON.stringify({ pages: out, meier: globalThis.MEIER_ALIGNED }));
"""


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'count'
    corpus, glossary, meta = load()
    if cmd == 'validate':
        sys.exit(0 if cmd_validate(glossary, meta) else 1)
    {'count': cmd_count, 'check': cmd_check, 'missing': cmd_missing, 'slice': cmd_slice, 'index': cmd_index, 'examples': cmd_examples}[cmd](corpus, glossary, meta)


if __name__ == '__main__':
    main()
