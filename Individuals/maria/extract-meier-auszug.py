#!/usr/bin/env python3
"""Lift Meier's Auszug (the MEIER and CITATIONS literals) out of
meier-reader/meier-reading-guide.html into meier-auszug.js, so that a page in this
folder can load it with a <script src>. A one-off copy, because the text exists in
the repository only inline in that reader; if it ever moves to data/, delete both.

    python3 extract-meier-auszug.py
"""
import json, os

here = os.path.dirname(os.path.abspath(__file__))
src = os.path.join(here, '..', '..', 'meier-reader', 'meier-reading-guide.html')

lit = {}
with open(src, encoding='utf8') as f:
    for line in f:
        for name in ('MEIER', 'CITATIONS'):
            if line.startswith('const %s = ' % name):
                lit[name] = json.loads(line[line.index('=') + 1:].strip().rstrip(';'))

meier, cites = lit['MEIER'], lit['CITATIONS']
assert len(meier['paras']) == 563, len(meier['paras'])
out = {'nav': meier['nav'], 'paras': meier['paras'], 'citations': cites}

header = """/* G. F. Meier, Auszug aus der Vernunftlehre (1752), the text Kant lectured from.
   Copied by extract-meier-auszug.py from the MEIER and CITATIONS literals inline in
   meier-reader/meier-reading-guide.html — do not hand-edit; correct the reader's
   text and run the script again.

   MEIER_AUSZUG.nav        the 17 sections: part_num, part_title_de/en, sec_num,
                           sec_title_de/en, paras (the §§ in it)
   MEIER_AUSZUG.paras      { "§ number": text }, 563 of them
   MEIER_AUSZUG.citations  { "§ number": "AA 16:5" } — where the AA's Reflexionen
                           volume prints the § (as the reader gives it)
*/
"""
with open(os.path.join(here, 'meier-auszug.js'), 'w', encoding='utf8') as f:
    f.write(header + 'const MEIER_AUSZUG = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
print('paras', len(out['paras']), 'sections', len(out['nav']), 'citations', len(cites))
