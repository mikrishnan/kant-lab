#!/usr/bin/env python3
"""English for Baumgarten's Metaphysica and Kant's Reflexionen on it, for the Logic Portal's English mode.

    python3 Individuals/mikrishnan/portal/baum-translate.py prepare OUTDIR   cut both texts into translation chunks (OUTDIR/in) and write the
                                               brief the translator follows (OUTDIR/BRIEF.md)
    python3 Individuals/mikrishnan/portal/baum-translate.py build OUTDIR     validate the translated chunks in OUTDIR/out and write
                                               translations/metaphysica-guyer.js and translations/reflm-guyer.js

The English follows the same brief as the portal's other English: Jesus's statement of the Guyer–Wood method
(Individuals/Jesus-La-Paz/translation-briefs.js, `guyer`), read from that file rather than copied, so the
two stay one method. One style only, Guyer–Wood; the portal shows it whichever style is chosen and says so.

The files take the shape of Jesus's translation files, so the portal reads them as it reads his:
KANT_TR['met/guyer']['met:N'] and KANT_TR['reflm/guyer']['reflm:N'] = [English, [notes]], with N the §
or the Reflexion's number. The passages are the portal's own: a § of the Metaphysica is its Latin with
Baumgarten's German equivalents taken out (the portal shows them beside the Latin), and the translator sees
them, marked, so that the English can keep them; a Reflexion is its text as data/ has it.

Checked on build, for every passage: it has English; every bracket and | of the Academy Edition's apparatus in
the source is in the English as often; the English is not wildly shorter or longer than the source.
"""
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
CHUNK_CHARS = 14000

DUMP_JS = r"""
const fs = require('fs'), path = require('path'), g = globalThis, root = path.resolve('..', '..', '..');
const L = f => (0, eval)(fs.readFileSync(path.join(root, f), 'utf8').replace(/^const /mg, 'var '));
L('data/metaphysica-17.js'); L('data/reflexionen-17-18-baumgarten.js');
L('Individuals/Jesus-La-Paz/translation-briefs.js');
const met = g.MET_PARAGRAPHS.map(m => {
  let src = '', text = '', last = 0;          // src: the Latin with ⟦German⟧ where Baumgarten gives it; text: the portal's
  m.text.replace(/@@(\d+)@@/g, (all, n, at) => { const piece = m.text.slice(last, at); src += piece; text += piece; last = at + all.length;
    const de = (m.glosses || [])[+n - 1]; if (de) src += ' ⟦' + de + '⟧'; return all; });
  src += m.text.slice(last); text += m.text.slice(last);
  return { key: 'met:' + m.num, src, text };
});
const reflm = g.REFLM_ENTRIES.filter(e => !e.vacat && e.text).map(e => ({ key: 'reflm:' + e.r, src: e.text, text: e.text }));
process.stdout.write(JSON.stringify({ met, reflm, brief: g.TRANSLATION_BRIEFS.guyer.system }));
"""

TASK = """# Task: English for Baumgarten's Metaphysica and Kant's notes on it

You are translating one chunk of passages for the Kant Lab's Logic Portal. Follow the METHOD below exactly: it
is the brief every English text in the portal was made with (Jesus La Paz's statement of the Guyer–Wood method),
so the new English must read as the same translation.

Your chunk is `in/<name>.jsonl` in {DIR}. Read it completely first (use offset/limit for long files). Each line is
one passage:

    {"key": "met:12", "src": "<the passage>"}

- `met:N` is § N of Baumgarten's *Metaphysica* (Latin, 4th ed., 1757). Where Baumgarten gives a German equivalent
  of a term, the source shows it as ⟦German⟧ right after the Latin. Translate the Latin; keep each German
  equivalent in the English, unchanged, in parentheses right after the English term: "a being (ein Ding)". Do not
  translate it. § numbers in the text (§. 14) stay as they are.
- `reflm:N` is Kant's Reflexion N, written in his copy of the Metaphysica (German and Latin, often fragmentary).
  The AA's apparatus — square brackets, angle brackets, | and || — is carried over exactly, where it stands.

Write `out/<name>.jsonl`: exactly one line per input line, same order, each a valid JSON object

    {"key": "<same key>", "en": "<the English>", "notes": ["<note>", …]}

- `en` is the translation alone, under the method's rules (*asterisks* for italics, nothing else).
- `notes`: at most THREE short linguistic notes, as the method describes (the Latin or German behind a term
  where it matters, a preserved ambiguity, a doubtful reading). Use [] when there is nothing worth noting;
  most passages need none. Never interpretation.
- Translate every passage, however short or broken. Never leave `en` empty, never summarise, never skip.

Write the whole file with the Write tool in one call. If it is too long for one call, write the first part with
Write and append the rest with Bash: `cat >> out/<name>.jsonl <<'EOF' … EOF` (each line one complete JSON object).
Then check it from that directory: `python3 check.py <name>`, and fix every line it reports.

When finished, reply with ONE line only: "<name>: N lines written". Do not paste the output.

---

METHOD

{BRIEF}
"""


def apparatus(s):
    return [s.count(c) for c in '[]<>|']


def cmd_prepare(outdir):
    d = json.loads(subprocess.run(['node', '-e', DUMP_JS], capture_output=True, text=True, check=True, cwd=HERE).stdout)
    os.makedirs(os.path.join(outdir, 'in'), exist_ok=True)
    os.makedirs(os.path.join(outdir, 'out'), exist_ok=True)
    names = []
    for kind in ['met', 'reflm']:
        keys = [x['key'] for x in d[kind]]
        assert len(keys) == len(set(keys)), 'duplicate keys in ' + kind
        chunk, size, n = [], 0, 1
        for x in d[kind] + [None]:
            if x is None or (chunk and size + len(x['src']) > CHUNK_CHARS):
                name = '%s-%03d' % (kind, n)
                with open(os.path.join(outdir, 'in', name + '.jsonl'), 'w', encoding='utf8') as f:
                    for y in chunk:
                        f.write(json.dumps({'key': y['key'], 'src': y['src']}, ensure_ascii=False) + '\n')
                names.append((name, len(chunk), size))
                chunk, size, n = [], 0, n + 1
                if x is None:
                    break
            chunk.append(x)
            size += len(x['src'])
    with open(os.path.join(outdir, 'BRIEF.md'), 'w', encoding='utf8') as f:
        f.write(TASK.replace('{DIR}', os.path.abspath(outdir)).replace('{BRIEF}', d['brief']))
    for x in names:
        print(*x)
    print(len(names), 'chunks')


def cmd_build(outdir):
    d = json.loads(subprocess.run(['node', '-e', DUMP_JS], capture_output=True, text=True, check=True, cwd=HERE).stdout)
    got = {}
    for fn in sorted(os.listdir(os.path.join(outdir, 'out'))):
        for line in open(os.path.join(outdir, 'out', fn), encoding='utf8'):
            if line.strip():
                o = json.loads(line)
                got[o['key']] = o
    problems, files = [], {'met': 'metaphysica-guyer.js', 'reflm': 'reflm-guyer.js'}
    for kind in ['met', 'reflm']:
        out = {}
        for x in d[kind]:
            o = got.get(x['key'])
            if not o or not (o.get('en') or '').strip():
                problems.append((x['key'], 'missing'))
                continue
            en = o['en'].strip()
            if apparatus(x['src']) != apparatus(en):
                problems.append((x['key'], 'apparatus [ ] < > | %s in the source, %s in the English' % (apparatus(x['src']), apparatus(en))))
            src_len = len(re.sub(r'⟦[^⟧]*⟧', '', x['src']))
            if src_len > 80 and not (0.45 < len(en) / src_len < 2.6):
                problems.append((x['key'], 'length %d for a source of %d' % (len(en), src_len)))
            out[x['key']] = [en, [n for n in (o.get('notes') or [])[:3] if n.strip()]]
        with open(os.path.join(HERE, 'translations', files[kind]), 'w', encoding='utf8') as f:
            f.write('/* Machine translations of %s in the manner of Guyer and Wood, made with the brief in\n'
                    '   Individuals/Jesus-La-Paz/translation-briefs.js (guyer) by portal/baum-translate.py. Not the translators\' own work;\n'
                    '   unreviewed. Shape as Jesus\'s translation files: KANT_TR[\'%s/guyer\'][key] = [English, [notes]]. */\n'
                    % ('Baumgarten\'s Metaphysica' if kind == 'met' else 'Kant\'s Reflexionen on Baumgarten', kind))
            f.write('window.KANT_TR = window.KANT_TR || {};\n')
            f.write("KANT_TR['%s/guyer'] = " % kind + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
        print('%s: %d of %d passages translated' % (kind, len(out), len(d[kind])))
    print('%d problems' % len(problems))
    for p in problems[:40]:
        print('  ', *p)
    return not problems


if __name__ == '__main__':
    cmd, outdir = sys.argv[1], sys.argv[2]
    if cmd == 'prepare':
        cmd_prepare(outdir)
    else:
        sys.exit(0 if cmd_build(outdir) else 1)
