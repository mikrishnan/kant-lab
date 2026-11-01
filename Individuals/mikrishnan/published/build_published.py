#!/usr/bin/env python3
"""Kant's published works for the Logic Portal: AA I, AA II and the Critique of Pure Reason
in its two editions, each as a data file in the portal's `passages` shape.

    python3 build_published.py aa01 <telota-kant/db>           kant-aa01.js
    python3 build_published.py aa02 <gesammelteschrif0002kant_djvu.xml>  kant-aa02-ocr.js
    python3 build_published.py krv  <kant_rvernunft_1781.TEI-P5.xml> <kant_rvernunft_1787.TEI-P5.xml>  <out folder>

Where each source comes from, its licence and how good it is: README.md beside this file.

What every file holds (see catalogue.js for the shape):

    { meta: { work, volume, edition, source, licence, works: [...] },
      passages: [{ id, work, kind, sec, aa, aaEnd, pb, text }] }          AA I, AA II
    passages: [{ id, kind, sec, pg, pgEnd, pb, other, otherEnd, text }]  the Critique

  kind   p (a paragraph), head, note (Kant's footnote), margin (Kant's marginal note),
         title (a title page, its lines kept)
  aa     the page of the old Academy edition the passage begins on, aaEnd the one it ends on
  pb     the pages that begin inside the passage: [[character offset, page], ...]
  pg     for the Critique, the page of this edition (A or B), as printed: '51', or 'xvi' for the
         prefaces' Roman numbers
  other  the other edition's page there, found by matching the two texts word for word
         (attested in neither print); null where the other edition has no such text
"""
import collections, json, os, re, sys, unicodedata
import xml.etree.ElementTree as ET

TEI = '{http://www.tei-c.org/ns/1.0}'
XML_ID = '{http://www.w3.org/XML/1998/namespace}id'


def local(tag):
    return tag.split('}', 1)[1] if '}' in tag else tag


# ─────────────────────────────────────────────────────────────────────────────
# A block of running text, built from text and page breaks, then made into one line
# ─────────────────────────────────────────────────────────────────────────────

class Block:
    """Text gathered for one passage, with the page breaks that fall inside it."""

    def __init__(self, kind, page):
        self.kind = kind
        self.page = page          # the page in force when the block opened
        self.parts = []           # strings, and ('pb', page) markers

    def text(self, s):
        if s:
            self.parts.append(s)

    def pb(self, page):
        self.parts.append(('pb', page))

    def finish(self, sep=' '):
        """(text, start page, end page, [[offset, page]]): whitespace collapsed to single
        spaces (newlines kept where sep is '\\n' and a part is the newline marker), and each page
        break placed before the first character of the next word. A break before any text
        opens the block on that page; one after all of it belongs to the next block."""
        out, pbs, pending, space = [], [], [], False
        aas, aa_pending = [], []
        start = self.page
        self.aa_start = getattr(self, 'aa_page', None)
        for part in self.parts:
            if isinstance(part, tuple):
                if part[0] == 'nl':
                    if out:
                        space = '\n'
                    continue
                if part[0] == 'aa':           # a second pagination, kept beside the first
                    aa_pending.append(part[1])
                    continue
                pending.append(part[1])
                continue
            for ch in part:
                if ch.isspace():
                    if out and not space:
                        space = ' '
                    continue
                if space:
                    if space == '\n' and out[-1] in '-¬' and ch.islower():
                        out.pop()             # a word broken over two lines of a heading
                    else:
                        out.append(space)
                    space = False
                if pending:
                    if not out:
                        start = pending[-1]
                    else:
                        for n in pending:
                            pbs.append([len(out), n])
                    pending = []
                if aa_pending:
                    if not out:
                        self.aa_start = aa_pending[-1]
                    else:
                        for n in aa_pending:
                            aas.append([len(out), n])
                    aa_pending = []
                out.append(ch)
        text = ''.join(out)
        # a break inside a word goes to the word's start, where a reader can see it
        for b in pbs:
            k = b[0]
            while k > 0 and k < len(text) and text[k - 1].isalpha() and text[k].isalpha():
                k -= 1
            b[0] = k
        end = pbs[-1][1] if pbs else start
        self.aas = aas
        return text, start, end, pbs, pending


def js_dump(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':'))


def write_js(path, header, glob, data):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(header.rstrip() + '\n')
        f.write('const ' + glob + ' = {\n  meta: ' + js_dump(data['meta']) + ',\n  passages: [\n')
        for p in data['passages']:
            f.write('    ' + js_dump(p) + ',\n')
        f.write('  ],\n};\n')


# ─────────────────────────────────────────────────────────────────────────────
# AA I: the Berlin Academy's new edition of Abteilung I, Band 1 (TEI, CC BY-NC-SA 4.0),
# which marks every page of the old Academy edition where it begins: <pb ed="oldAA" n="17"/>
# ─────────────────────────────────────────────────────────────────────────────

# The eleven works of AA I, in the order the volume prints them. `start` is the old AA page of
# the work's title page, from the volume's contents. The new edition marks no old page on the
# title page or the front matter after it, so anything before its first marked page is put on
# `start` + 2 (the title page's verso is blank) up to the page before that first mark: a
# dedication, as AA 1:217–220. Checked against the Bonner Kant-Korpus (korpora.org).
AA01_WORKS = [
    ('B01P01', 'lebendige-kraefte', 'Gedanken von der wahren Schätzung der lebendigen Kräfte', 'Lebendige Kräfte', 1747, 1),
    ('B01P02', 'achsendrehung', 'Untersuchung der Frage, ob die Erde in ihrer Umdrehung um die Achse … einige Veränderung … erlitten habe', 'Achsendrehung der Erde', 1754, 183),
    ('B01P03', 'erde-veralte', 'Die Frage, ob die Erde veralte, physikalisch erwogen', 'Ob die Erde veralte', 1754, 193),
    ('B01P04', 'naturgeschichte', 'Allgemeine Naturgeschichte und Theorie des Himmels', 'Naturgeschichte des Himmels', 1755, 215),
    ('B01P05', 'de-igne', 'Meditationum quarundam de igne succincta delineatio', 'De igne', 1755, 369),
    ('B01P06', 'nova-dilucidatio', 'Principiorum primorum cognitionis metaphysicae nova dilucidatio', 'Nova dilucidatio', 1755, 385),
    ('B01P07', 'erdbeben-ursachen', 'Von den Ursachen der Erderschütterungen bei Gelegenheit des Unglücks, welches die westliche Länder von Europa gegen das Ende des vorigen Jahres betroffen hat', 'Ursachen der Erderschütterungen', 1756, 417),
    ('B01P08', 'erdbeben-geschichte', 'Geschichte und Naturbeschreibung der merkwürdigsten Vorfälle des Erdbebens', 'Geschichte des Erdbebens', 1756, 429),
    ('B01P09', 'erdbeben-fortgesetzt', 'Fortgesetzte Betrachtung der seit einiger Zeit wahrgenommenen Erderschütterungen', 'Fortgesetzte Betrachtung', 1756, 463),
    ('B01P10', 'monadologia', 'Metaphysicae cum geometria iunctae usus in philosophia naturali, cuius specimen I. continet monadologiam physicam', 'Monadologia physica', 1756, 473),
    ('B01P11', 'winde', 'Neue Anmerkungen zur Erläuterung der Theorie der Winde', 'Theorie der Winde', 1756, 489),
]
# Part-title pages inside a work, on which the new edition marks no old page either: (work,
# kind, the passage's opening words, old AA page).
AA01_PAGE_FIXES = [
    ('naturgeschichte', 'title', r'Allgemeine\s+Naturgeschichte\s+und\s+Theorie des Himmels\.\s+Erster Theil', 241),
    ('naturgeschichte', 'head', r'Allgemeine\s+Naturgeschichte\s+und\s+Theorie des Himmels\.\s+Zweyter Theil,\s+von dem\s+ersten', 259),
    ('naturgeschichte', 'head', r'Allgemeine\s+Naturgeschichte\s+und\s+Theorie des Himmels\.\s+Dritter Theil,\s+Welcher', 349),
]

BLOCK_TAGS = {'p', 'head', 'salute', 'item', 'dateline', 'signed', 'byline', 'docAuthor', 'trailer', 'l'}
SKIP_TAGS = {'figure', 'graphic', 'milestone', 'space', 'anchor', 'teiHeader', 'fw'}
TYPE_LABEL = {'titlePage': 'Title page', 'dedication': 'Dedication', 'contents': 'Contents'}


def clean_head(s, n=70):
    s = re.sub(r'\s+', ' ', s).strip().rstrip(',;:')
    return s if len(s) <= n else s[:n].rsplit(' ', 1)[0] + ' …'


class AA01Work:
    def __init__(self, siglum, key, title, short, year, start):
        self.siglum, self.key, self.title, self.short, self.year = siglum, key, title, short, year
        self.start = start
        self.cur = None           # the old AA page in force in the main text
        self.out = []             # passages
        self.chapter = ''
        self.cur_block = None
        self.margins = []         # marginal notes met in the open block, emitted before it
        self.notes = []           # footnotes met in the open block, emitted after it
        self.n = 0

    def label(self):
        return self.short + ' (' + str(self.year) + ')' + (' · ' + self.chapter if self.chapter else '')

    # blocks
    def open(self, kind, join=False):
        """A new block; with join, a further line of the open block of the same kind (the lines
        of a heading, or of a dedication's salutation, are one passage)."""
        if join and self.cur_block is not None and self.cur_block.kind == kind and not self.margins and not self.notes:
            self.cur_block.parts.append(('nl', None))
            return
        self.flush()
        self.cur_block = Block(kind, self.cur)

    def flush(self):
        b = self.cur_block
        self.cur_block = None
        for m in self.margins:
            self.emit(m)
        self.margins = []
        if b is not None:
            self.emit(b)
        for nb in self.notes:
            self.emit(nb)
        self.notes = []

    def emit(self, b):
        text, start, end, pbs, trailing = b.finish()
        if not text:
            return
        self.n += 1
        self.out.append({'id': self.key + '-' + str(self.n).zfill(4), 'work': self.key, 'kind': b.kind,
                         'sec': self.label(), 'aa': start, 'aaEnd': end, 'pb': pbs, 'text': text})

    # the walk
    def walk(self, el, depth, block, note=None):
        """Add el's text to `block` (or open blocks of its own); `note` is the footnote or
        marginal-note block being filled, whose page breaks do not move the main text's page."""
        tag = local(el.tag)
        if tag in SKIP_TAGS:
            return
        if tag == 'pb':
            if el.get('ed') == 'oldAA':
                n = int(el.get('n'))
                if note is not None:
                    note.pb(n)
                else:
                    self.cur = n
                    if self.cur_block is not None:
                        self.cur_block.pb(n)
            return
        if tag == 'note' and el.get('place') in ('foot', 'margin'):
            kind = 'note' if el.get('place') == 'foot' else 'margin'
            nb = Block(kind, note.page if note is not None else self.cur)
            mark = el.get('n') or ''
            if kind == 'note' and mark:
                nb.text(mark + ' ')
                if block is not None:
                    block.text(mark)
            self.inline(el, nb, nb)
            (self.notes if kind == 'note' else self.margins).append(nb)
            return
        if tag == 'note':
            return                       # an editorial note: not the text
        if tag == 'div':
            typ = el.get('type') or ''
            self.flush()                 # a heading never runs on into the next division's
            if depth == 0:
                heads = [h for h in el if local(h.tag) == 'head']
                head = re.sub(r'^Allgemeine\s+Naturgeschichte\s+und\s+Theorie\s+des\s+Himmels\.\s*', '', ' '.join(''.join(h.itertext()) for h in heads))
                self.chapter = TYPE_LABEL.get(typ) or (clean_head(head) if heads else '')
            if typ == 'titlePage':
                self.open('title')
                self.lines(el, self.cur_block)
                self.flush()
                return
            for c in el:
                self.walk(c, depth + 1, None)
            self.flush()
            return
        if tag in BLOCK_TAGS or tag in ('opener', 'closer', 'list', 'cit', 'quote', 'lg') and block is None:
            if tag in BLOCK_TAGS:
                lined = tag in ('head', 'salute', 'signed', 'dateline')
                self.open('head' if tag == 'head' else 'p', join=lined)
                self.inline(el, self.cur_block, None)
                if not lined:
                    self.flush()
            else:
                if el.text and el.text.strip():
                    self.open('p')
                    self.cur_block.text(el.text)
                for c in el:
                    self.walk(c, depth + 1, None)
                    if c.tail and c.tail.strip():
                        if self.cur_block is None:
                            self.open('p')
                        self.cur_block.text(c.tail)
                self.flush()
            return
        # anything else met outside a block (a stray inline element): give it a block
        if block is None:
            self.open('p')
            self.inline(el, self.cur_block, None)
            return
        self.inline(el, block, note)

    def inline(self, el, block, note):
        """el's own text and its children's, into block (el itself already decided)."""
        if el.text:
            block.text(el.text)
        for c in el:
            t = local(c.tag)
            if t == 'lb':
                block.text(' ')
            elif t in SKIP_TAGS:
                pass
            elif t == 'pb' or (t == 'note' and c.get('place') in ('foot', 'margin')) or t == 'note':
                self.walk(c, 9, block, note)
            elif t in BLOCK_TAGS and note is None and block is self.cur_block and t not in ('l',):
                # a paragraph inside a quotation inside a paragraph: keep it in the paragraph
                block.text(' ')
                self.inline(c, block, note)
                block.text(' ')
            else:
                self.inline(c, block, note)
            if c.tail:
                block.text(c.tail)

    def lines(self, el, block):
        """A title page: one line per paragraph, kept as lines."""
        for c in el.iter():
            t = local(c.tag)
            if t == 'pb' and c.get('ed') == 'oldAA':
                self.cur = int(c.get('n'))
                block.pb(self.cur)
            elif t in ('p', 'head', 'docTitle', 'titlePart', 'byline', 'docImprint', 'docAuthor', 'docDate'):
                s = re.sub(r'\s+', ' ', ''.join(x for x in c.itertext())).strip()
                if s:
                    block.parts.append(('nl', None))
                    block.text(s)
                # children already read by itertext; skip them in this loop
        return


def build_aa01(db, out):
    passages, works = [], []
    for siglum, key, title, short, year, start in AA01_WORKS:
        with open(os.path.join(db, siglum + '_Text.xml'), encoding='utf-8') as f:
            src = f.read()
        # The encoding sometimes sets two names with no space after the comma between them
        # (`</persName>,<persName>`: "Leibnitz,Wolfen"), where the print has one.
        src = re.sub(r'(</[A-Za-z]+>)([,;:.])(<[A-Za-z])', r'\1\2 \3', src)
        root = ET.fromstring(src)
        body = root.find('.//' + TEI + 'body')
        olds = [int(p.get('n')) for p in body.iter(TEI + 'pb') if p.get('ed') == 'oldAA']
        first = olds[0]
        w = AA01Work(siglum, key, title, short, year, start)
        for c in body:
            w.walk(c, 0, None)
        w.flush()
        for p in w.out:
            if p['aa'] is None:
                if p['kind'] == 'title':
                    p['aa'] = p['aaEnd'] = start
                else:
                    p['aa'] = min(start + 2, first - 1)
                    p['aaEnd'] = first - 1 if p['aaEnd'] is None else p['aaEnd']
            for wk, kind, rx, page in AA01_PAGE_FIXES:
                if wk == key and p['kind'] == kind and re.match(rx, p['text']):
                    p['aa'] = p['aaEnd'] = page
                    p['fixed'] = True
            if p['aaEnd'] is None:
                p['aaEnd'] = p['aa']
            if not p['pb']:
                del p['pb']
            if p['aaEnd'] == p['aa']:
                del p['aaEnd']
        lo = min(p['aa'] for p in w.out)
        hi = max(p.get('aaEnd', p['aa']) for p in w.out)
        works.append({'key': key, 'siglum': siglum, 'title': title, 'short': short, 'year': year,
                      'aa': [lo, hi], 'passages': len(w.out),
                      'oldPages': len(set(olds)), 'missingPages': sorted(set(range(first, olds[-1] + 1)) - set(olds))})
        passages += w.out
    meta = {
        'work': "Kant's gesammelte Schriften, Bd. I: Vorkritische Schriften I, 1747–1756",
        'volume': 1,
        'edition': 'Text of the new Academy edition (Abt. I, Bd. 1, digital edition v1.5, 2026), cited by the pages of the old Academy edition (1902/1910) it marks',
        'source': 'https://github.com/telota/kant (db/B01P01–B01P11_Text.xml); https://kant-digital.bbaw.de',
        'licence': 'CC BY-NC-SA 4.0, © Berlin-Brandenburgische Akademie der Wissenschaften: https://creativecommons.org/licenses/by-nc-sa/4.0/',
        'works': works,
    }
    header = '''/* AA I, Kant's works of 1747–1756, for the Logic Portal. GENERATED by
   Individuals/mikrishnan/published/build_published.py aa01 from the Berlin-Brandenburg Academy's
   new edition of the Academy edition, Abt. I, Bd. 1 (https://github.com/telota/kant, TEI-XML,
   https://kant-digital.bbaw.de). Do not edit by hand: corrections go in the extractor.

   LICENCE: this file is an adaptation of that dataset and is shared under the same licence,
   CC BY-NC-SA 4.0 (attribution, non-commercial, share-alike), © Berlin-Brandenburgische Akademie
   der Wissenschaften. https://creativecommons.org/licenses/by-nc-sa/4.0/
   What changed: the TEI was reduced to plain paragraphs; editorial notes, the apparatus, the
   new edition's own pagination and the first prints' pagination were left out; the old
   Academy edition's page numbers, which the new edition marks, were kept as `aa`, `aaEnd`, `pb`.

   Shape: see the header of build_published.py and catalogue.js (the `passages` shape). */'''
    write_js(out, header, 'KANT_AA01', {'meta': meta, 'passages': passages})
    report(passages, works, 'AA I')


def report(passages, works, label):
    words = sum(len(re.findall(r'[^\W\d_]+', p['text'])) for p in passages)
    kinds = {}
    for p in passages:
        kinds[p['kind']] = kinds.get(p['kind'], 0) + 1
    print(label + ':', len(passages), 'passages,', words, 'words;', kinds)
    for w in works:
        print('  %-34s %-12s AA %s–%s  %5d passages  missing pages: %s' % (
            w['short'], w.get('siglum', ''), w['aa'][0], w['aa'][1], w['passages'], w.get('missingPages')))


# ─────────────────────────────────────────────────────────────────────────────
# The Critique of Pure Reason, first edition (A, 1781): the Deutsches Textarchiv's double-keyed
# transcription of the print (TEI, DTA-Basisformat, CC BY-SA 4.0)
# ─────────────────────────────────────────────────────────────────────────────

def normalise_print(s):
    """The print's letter forms as a modern reader expects them: long s as s, the e written
    over a vowel as the umlaut, ꝛc. as etc. Spelling is not touched (Erkentniß, seyn, Critik)."""
    s = s.replace('ſ', 's')
    s = unicodedata.normalize('NFC', re.sub(r'([aouAOU])ͤ', lambda m: m.group(1) + '̈', s))
    return s.replace('ꝛc', 'etc')


ROMAN = [(1000, 'm'), (900, 'cm'), (500, 'd'), (400, 'cd'), (100, 'c'), (90, 'xc'), (50, 'l'), (40, 'xl'), (10, 'x'), (9, 'ix'), (5, 'v'), (4, 'iv'), (1, 'i')]


def roman(n):
    out = ''
    for v, r in ROMAN:
        while n >= v:
            out += r
            n -= v
    return out


# A heading that names a part of the work (and so a line of the contents): its own words.
KRV_SECTION = re.compile(r'Vorrede|Einleitung|Inhalt|Elementarlehre|Methodenlehre|Theil|Abtheilung|Buch|Hauptst|Abschnitt|'
                         r'Anhang|Anmerkung|Paralogism|Widerstreit|Betrachtung|Schlußanmerkung|Zueignung', re.I)
LINE_TAGS = {'p', 'head', 'item', 'salute', 'dateline', 'signed', 'byline', 'docTitle', 'titlePart', 'docAuthor', 'docImprint', 'l'}


class DTAEdition:
    """Walks a DTA-Basisformat TEI file into passages, keeping the print's pages.

    `pagefor(pb)` gives the page label of a <pb/> (None to ignore it). Elements split over pages
    are joined back along their next/prev links: a footnote run on to the next page, and in the
    antinomies each Thesis and Antithesis, which the print sets on facing pages, read through
    whole, each page still marked where it begins."""

    def __init__(self, root, ed, pagefor):
        self.ed, self.pagefor = ed, pagefor
        self.body = root.find('.//' + TEI + 'text')
        self.byid = {e.get(XML_ID): e for e in self.body.iter() if e.get(XML_ID)}
        # What continues each paragraph, footnote or heading run over a page: the element whose
        # prev names it. Divisions are not followed: in the antinomies the DTA links every
        # left-hand page into one chain and every right-hand page into another, across all four
        # antinomies; read in print order, with their paragraphs joined, the pages give Thesis,
        # Antithesis, remark on the Thesis, remark on the Antithesis, as the facing pages do.
        self.nextof = {}
        for e in self.body.iter():
            if e.get('prev') and local(e.tag) != 'div':
                self.nextof.setdefault(e.get('prev').lstrip('#'), e)
        self.done = set()
        # the page break in force where each continuation begins (continuations seldom have ids)
        self.pb_before = {}
        last = None
        for e in self.body.iter():
            if local(e.tag) == 'pb':
                last = e
            if e.get('prev'):
                self.pb_before[id(e)] = last
        self.cur = None
        self.out, self.n = [], 0
        self.sec = ''
        self.cur_block, self.notes = None, []

    # blocks
    def open(self, kind, join=False):
        if join and self.cur_block is not None and self.cur_block.kind == kind and not self.notes:
            self.cur_block.parts.append(('nl', None))
            return
        self.flush()
        self.cur_block = Block(kind, self.cur)

    def flush(self):
        b, self.cur_block = self.cur_block, None
        if b is not None:
            self.emit(b)
        for nb in self.notes:
            self.emit(nb)
        self.notes = []

    def emit(self, b):
        text, start, end, pbs, trailing = finish_print(b)
        if not text:
            return
        if b.kind == 'head' and KRV_SECTION.search(text):
            self.sec = clean_head(text.replace('\n', ' '), 90)
        self.n += 1
        p = {'id': 'krv-' + self.ed.lower() + '-' + str(self.n).zfill(4), 'kind': b.kind, 'sec': self.sec or 'Title page',
             'pg': start, 'pgEnd': end, 'pb': pbs, 'text': text}
        self.out.append(p)

    def page(self, el, note):
        n = self.pagefor(el)
        if n is None:
            return
        if note is not None:
            note.pb(n)
            return
        self.cur = n
        if self.cur_block is not None:
            self.cur_block.pb(n)

    # the walk
    def walk(self, el, block=None, note=None):
        tag = local(el.tag)
        if tag in ('fw', 'figure', 'milestone', 'cb', 'teiHeader', 'sic', 'orig'):
            return
        if el.get('prev') and local(el.tag) != 'div':
            return                       # a continuation: read with its first part (chain)
        if tag == 'pb':
            self.page(el, note)
            return
        if tag == 'lb':
            (note or block).parts.append(('lb', None)) if (note or block) is not None else None
            return
        if tag == 'gap':
            if (note or block) is not None:
                (note or block).text('[…]')
            return
        if tag == 'choice':
            for c in el:
                if local(c.tag) in ('corr', 'reg', 'expan'):
                    self.inline(c, note or block, note)
            return
        if tag == 'note':
            if el.get('place') != 'foot':
                return
            nb = Block('note', note.page if note is not None else self.cur)
            mark = el.get('n') or ''
            if mark:
                nb.text(mark + ' ')
                if block is not None:
                    block.text(mark)
            self.chain(el, lambda e: self.inline(e, nb, nb), nb, nb)
            self.notes.append(nb)
            return
        if tag == 'titlePage':
            self.open('title')
            self.sec = 'Title page'
            b = self.cur_block
            for c in el.iter():
                t = local(c.tag)
                if t == 'pb':
                    self.page(c, None)
                elif t in ('docTitle', 'byline', 'docImprint'):
                    txt = re.sub(r'\s+', ' ', ''.join(c.itertext())).strip()
                    if txt:
                        b.parts.append(('nl', None))
                        b.text(txt)
            self.flush()
            return
        if tag in ('div', 'front', 'body', 'back', 'text', 'opener', 'closer', 'list'):
            if tag == 'div':
                self.flush()             # a heading never runs on into the next division's
            if tag == 'div' and el.get('type') == 'dedication':
                self.flush()
                self.sec = 'Dedication'
            if tag == 'div' and el.get('type') == 'contents':
                self.flush()
                self.sec = 'Contents'
            self.chain(el, lambda e: [self.walk(c) for c in e], None)
            if tag == 'div':
                self.flush()
            return
        if tag in LINE_TAGS:
            lined = tag in ('head', 'salute', 'dateline', 'signed')
            self.open('head' if tag == 'head' else 'p', join=lined)
            b = self.cur_block
            self.chain(el, lambda e: self.inline(e, b, None), None, b)
            if not lined:
                self.flush()
            return
        if block is None:
            self.open('p')
            self.inline(el, self.cur_block, None)
            return
        self.inline(el, block, note)

    def chain(self, el, fn, note, blk=None):
        """fn(el), then fn on each continuation of el, each after its page break. The text after
        the element is back on the page el began on, so that page is in force again after it."""
        saved = self.cur
        e, jumped = el, False
        while e is not None:
            fn(e)
            e = self.nextof.get(e.get(XML_ID))
            if e is None or id(e) in self.done:
                break
            self.done.add(id(e))
            if blk is not None:
                blk.parts.append(('lb', None))     # the page's end is a line end
            pb = self.pb_before.get(id(e))
            if pb is not None:
                self.page(pb, note)
            jumped = True
        if jumped and note is None:
            self.cur = saved

    def inline(self, el, block, note):
        if el.text:
            block.text(el.text)
        for c in el:
            t = local(c.tag)
            if t in ('pb', 'lb', 'note', 'gap', 'choice') or t in ('fw', 'figure', 'milestone', 'cb', 'sic', 'orig'):
                self.walk(c, block, note)
            elif t in LINE_TAGS and t != 'l':
                block.text(' ')
                self.inline(c, block, note)
                block.text(' ')
            else:
                self.inline(c, block, note)
            if c.tail:
                block.text(c.tail)


def finish_print(b):
    """Block.finish for a print transcribed line by line: a line-end hyphen before a lower-case
    letter is the printer's and goes; before a capital it stays, with no space (Vernunft-Gesetz);
    any other line end is a space."""
    parts, joined, hyph = [], [], False
    for part in b.parts:
        if isinstance(part, tuple) and part[0] == 'lb':
            parts.append(('lbmark', None))
        else:
            parts.append(part)
    # resolve the line ends on the flat text first, keeping page markers in place
    flat = []
    for part in parts:
        if isinstance(part, tuple):
            flat.append(part)
        else:
            flat.append(normalise_print(part))
    out = []
    pending_lb = False
    for part in flat:
        if isinstance(part, tuple) and part[0] == 'lbmark':
            pending_lb = True
            continue
        if isinstance(part, tuple):
            out.append(part)
            continue
        if pending_lb and not part.strip():
            out.append(part)              # the blank between a catchword's line and the page's
            continue
        if pending_lb:
            # the text before the line end: the last string part in out with any letters in it
            # (past the blanks a dropped catchword leaves at the foot of a page)
            k = len(out) - 1
            while k >= 0 and (isinstance(out[k], tuple) or not out[k].strip()):
                if not isinstance(out[k], tuple):
                    out[k] = ''
                k -= 1
            prev = out[k].rstrip() if k >= 0 else ''
            nxt = part.lstrip()
            if k >= 0:
                out[k] = prev
            if prev.endswith(('-', '¬')) and nxt[:1].islower():
                out[k] = prev[:-1]
                part = nxt
            elif prev.endswith(('-', '¬')) and nxt:
                out[k] = prev[:-1] + '-' if prev.endswith('¬') else prev
                part = nxt
            elif nxt or part:
                part = ' ' + nxt if nxt else part
            pending_lb = False if part.strip() else True
        out.append(part)
    b2 = Block(b.kind, b.page)
    b2.parts = out
    return b2.finish()


def krv_a_page(pb):
    n = pb.get('n')
    f = int(pb.get('facs', '#f0').lstrip('#f') or 0)
    if n:
        return n.strip('[]')
    if 7 <= f <= 30:                 # title page A i, dedication iii–vi, preface vii–xxii, contents xxiii–xxiv
        return roman(f - 6)
    return None


def build_krv_a(src, out):
    root = ET.parse(src).getroot()
    e = DTAEdition(root, 'A', krv_a_page)
    e.walk(e.body)
    e.flush()
    for p in e.out:
        if p['pgEnd'] == p['pg']:
            del p['pgEnd']
        if not p['pb']:
            del p['pb']
    return e.out


# ─────────────────────────────────────────────────────────────────────────────
# AA II (and AA III for the Critique's B pages): the Internet Archive's scans of the old
# Academy edition (1910), in Fraktur, read by the Archive's tesseract OCR. Public domain.
# Only layout is done here; the words are the OCR's, apart from the spelling repairs below.
# ─────────────────────────────────────────────────────────────────────────────

AA02_WORKS = [
    # (key, title, short, year, first AA page) from the volume's contents
    ('physische-geographie', 'Entwurf und Ankündigung eines Collegii der physischen Geographie nebst dem Anhange einer kurzen Betrachtung über die Frage: Ob die Westwinde in unsern Gegenden darum feucht seien, weil sie über ein großes Meer streichen', 'Physische Geographie', 1757, 1),
    ('bewegung-und-ruhe', 'Neuer Lehrbegriff der Bewegung und Ruhe', 'Bewegung und Ruhe', 1758, 13),
    ('optimismus', 'Versuch einiger Betrachtungen über den Optimismus', 'Optimismus', 1759, 27),
    ('funk', 'Gedanken bei dem frühzeitigen Ableben des Herrn Johann Friedrich von Funk', 'Funk', 1760, 37),
    ('falsche-spitzfindigkeit', 'Die falsche Spitzfindigkeit der vier syllogistischen Figuren erwiesen', 'Falsche Spitzfindigkeit', 1762, 45),
    ('beweisgrund', 'Der einzig mögliche Beweisgrund zu einer Demonstration des Daseins Gottes', 'Beweisgrund', 1763, 63),
    ('negative-groessen', 'Versuch den Begriff der negativen Größen in die Weltweisheit einzuführen', 'Negative Größen', 1763, 165),
    ('beobachtungen', 'Beobachtungen über das Gefühl des Schönen und Erhabenen', 'Beobachtungen', 1764, 205),
    ('krankheiten-des-kopfes', 'Versuch über die Krankheiten des Kopfes', 'Krankheiten des Kopfes', 1764, 257),
    ('deutlichkeit', 'Untersuchung über die Deutlichkeit der Grundsätze der natürlichen Theologie und der Moral', 'Deutlichkeit (Preisschrift)', 1764, 273),
    ('nachricht', 'Nachricht von der Einrichtung seiner Vorlesungen in dem Winterhalbenjahre von 1765–1766', 'Nachricht 1765–66', 1765, 303),
    ('traeume', 'Träume eines Geistersehers, erläutert durch Träume der Metaphysik', 'Träume eines Geistersehers', 1766, 315),
    ('gegenden-im-raume', 'Von dem ersten Grunde des Unterschiedes der Gegenden im Raume', 'Gegenden im Raume', 1768, 375),
    ('de-mundi', 'De mundi sensibilis atque intelligibilis forma et principiis', 'De mundi (Dissertation)', 1770, 385),
    ('moscati', 'Recension von Moscatis Schrift: Von dem körperlichen wesentlichen Unterschiede zwischen der Structur der Thiere und Menschen', 'Recension Moscati', 1771, 421),
    ('racen', 'Von den verschiedenen Racen der Menschen', 'Racen der Menschen', 1775, 427),
    ('philanthropin', 'Aufsätze, das Philanthropin betreffend', 'Philanthropin', 1776, 445),
]
AA02_LAST = 452          # AA 2:453 on is the editors' notes


def ocr_leaves(path):
    """[(width, height, [line])] with line = {'w': [(text, x0, top, x1, bottom)], ...}."""
    leaves = []
    for o in ET.parse(path).getroot().iter('OBJECT'):
        W, H = int(o.get('width')), int(o.get('height'))
        lines = []
        for ln in o.iter('LINE'):
            ws = []
            for w in ln.iter('WORD'):
                x0, b, x1, t = (int(v) for v in w.get('coords').split(','))
                ws.append((w.text or '', x0, t, x1, b))
            ws = [w for w in ws if w[0].strip()]
            if ws:
                lines.append(ocr_line(ws))
        lines.sort(key=lambda l: l['top'])
        leaves.append((W, H, lines))
    return leaves


def ocr_line(ws):
    ws = sorted(ws, key=lambda w: w[1])
    hs = sorted(w[4] - w[2] for w in ws if len(w[0]) > 1 and w[0].isalpha()) or sorted(w[4] - w[2] for w in ws)
    return {'w': ws, 'x0': ws[0][1], 'x1': ws[-1][3], 'top': min(w[2] for w in ws), 'bot': max(w[4] for w in ws),
            'h': hs[len(hs) // 2]}


def running_head_page(lines, H):
    """The page number printed in the running head (the top line), or None."""
    if not lines:
        return None
    top = lines[0]
    if top['top'] > 0.14 * H:
        return None
    toks = [w[0] for w in top['w']]
    for t in (toks[0], toks[-1]):
        m = re.fullmatch(r'\d{1,3}', t.strip('.,'))
        if m:
            return int(m.group(0))
    return None


def leaf_pages(leaves):
    """AA page for each leaf, from the running heads; leaves between two read heads are
    numbered in sequence only when their count fits exactly (a plate breaks the sequence)."""
    heads = [running_head_page(l, H) for W, H, l in leaves]
    pages = list(heads)
    known = [k for k, p in enumerate(heads) if p is not None]
    # a head read wrong breaks its neighbours' sequence: keep a head only if one neighbour agrees
    good = set()
    for i, k in enumerate(known):
        for j in (i - 1, i + 1):
            if 0 <= j < len(known) and heads[known[j]] - heads[k] == known[j] - k:
                good.add(k)
    for k in known:
        if k not in good:
            pages[k] = None
    known = sorted(good)
    for a, b in zip(known, known[1:]):
        if pages[b] - pages[a] == b - a:
            for k in range(a + 1, b):
                pages[k] = pages[a] + (k - a)
        elif b - a > 1 and pages[b] - pages[a] < b - a:
            # plates in between: count back from the next head as far as the pages allow
            gap = pages[b] - pages[a] - 1
            for i in range(1, gap + 1):
                pages[b - i] = pages[b] - i
    if known:
        k0 = known[0]
        for k in range(k0 - 1, -1, -1):
            if pages[k0] - (k0 - k) >= 1:
                pages[k] = pages[k0] - (k0 - k)
    return pages


# An AA III editor's note on the first edition's reading, however the OCR gives its number:
# "1) A¹: kann.", ") Al: Grundsatz", "D) A!: was".
EDITORIAL = re.compile(r'^[\dlI!D]{0,2}\)\s*A\s?[!¹²1l?]?\s?:')
MARGIN_JUNK = re.compile(r'^[\divxlIOoSsBb»«>\[\]|!.,:;—\-–=•\'"]{1,4}$')


def column(lines, W):
    """The text column's left and right edges on a page, from its long lines."""
    starts, ends = [], []
    for l in lines:
        ws = l['w']
        if len(ws) < 5 or l['x1'] - l['x0'] < 0.5 * W:
            continue
        a = ws[1] if MARGIN_JUNK.match(ws[0][0]) and ws[1][1] - ws[0][3] > 0.012 * W else ws[0]
        z = ws[-2] if MARGIN_JUNK.match(ws[-1][0]) and ws[-1][1] - ws[-2][3] > 0.012 * W else ws[-1]
        starts.append(a[1])
        ends.append(z[3])
    if not starts:
        return 0, W
    starts.sort()
    ends.sort()
    return starts[len(starts) // 4], ends[(3 * len(ends)) // 4]


class OCRVolume:
    """Lines of the scan into passages: running heads, signatures and margin numbers out, Kant's
    footnotes apart, paragraphs found by their indent, line-end hyphens rejoined."""

    def __init__(self, leaves, pages, first, last, title_pages, margin_hook=None, drop_numbered_notes=False):
        self.drop_numbered_notes = drop_numbered_notes   # AA III: the editor's notes are 1), 2) …
        self.leaves, self.pages = leaves, pages
        self.first, self.last, self.title_pages = first, last, set(title_pages)
        self.margin_hook = margin_hook          # AA III: B page numbers in the outer margin
        self.report = {'pages': 0, 'margin': 0, 'notes': 0, 'heads': 0, 'missing': []}

    def page_lines(self, k):
        """(body lines, note lines) of leaf k, each a (kind, text, line) with margins removed."""
        W, H, lines = self.leaves[k]
        if not lines:
            return [], []
        L, R = column(lines, W)
        body, notes = [], []
        hs = sorted(l['h'] for l in lines if len(l['w']) >= 4) or [1]
        hmed = hs[len(hs) // 2]
        in_notes = False
        for i, l in enumerate(lines):
            if i == 0 and running_head_page(lines, H) is not None:
                continue
            txt_all = ' '.join(w[0] for w in l['w'])
            if l['top'] > 0.88 * H and (re.search(r"Kant.{0,3}\s*S[cdf]?[hb]?riften|Schriften\.?\s*Werke", txt_all) or
                                        (len(l['w']) <= 2 and len(txt_all) <= 4)):
                continue                      # the printer's signature
            ws = list(l['w'])
            # margin tokens: short, standing off the column
            while ws and (ws[0][3] < L - 0.004 * W or (MARGIN_JUNK.match(ws[0][0]) and ws[0][1] < L - 0.012 * W)):
                self.report['margin'] += 1
                if self.margin_hook:
                    self.margin_hook(k, 'left', ws[0], l)
                ws.pop(0)
            while ws and (ws[-1][1] > R + 0.004 * W or (MARGIN_JUNK.match(ws[-1][0]) and ws[-1][3] > R + 0.012 * W)):
                self.report['margin'] += 1
                if self.margin_hook:
                    self.margin_hook(k, 'right', ws[-1], l)
                ws.pop()
            if not ws:
                continue
            x0, x1 = ws[0][1], ws[-1][3]
            text = ' '.join(w[0] for w in ws)
            if not re.search(r'[^\W\d_]{2,}', text) and not re.fullmatch(r'(§\s*)?[\dIVXL]{1,4}\.?', text.strip()):
                continue                      # a line with no word in it: the OCR's noise
            small = l['h'] < 0.84 * hmed and l['top'] > 0.45 * H
            if not in_notes and (small and re.match(r'^\*+\)?|^\d{1,2}\)', text) or
                                 l['top'] > 0.45 * H and re.match(r'^\*+\)', text) or
                                 self.drop_numbered_notes and l['top'] > 0.4 * H and EDITORIAL.match(text)):
                in_notes = True               # Kant's footnotes open on *) (or 1) where numbered)
            if in_notes:
                notes.append((self.kind_of(x0, x1, L, R, W, text), text, l))
                continue
            body.append((self.kind_of(x0, x1, L, R, W, text), text, l))
        return body, notes

    @staticmethod
    def kind_of(x0, x1, L, R, W, text):
        if x0 > L + 0.07 * W and x1 < R - 0.07 * W:
            return 'centre'
        if x0 > L + 0.02 * W:
            return 'indent'
        return 'flush'

    def passages(self, line_marks=None):
        """Blocks in reading order. With line_marks ({(leaf, id(line)): label}), the labels are the
        blocks' pages (the Critique's B pages) and the AA page goes beside them as ('aa', n)."""
        out = []
        cur = None          # the open paragraph: Block
        second = line_marks is not None
        label = 'i' if second else None     # the B page in force: the title page is B i
        def new_block(kind, page):
            b = Block(kind, label if second else page)
            if second:
                b.aa_page = page
            return b
        def close():
            nonlocal cur
            if cur is not None:
                out.append(cur)
            cur = None
        for k, (W, H, lines) in enumerate(self.leaves):
            page = self.pages[k]
            if page is None or page < self.first or page > self.last:
                continue
            self.report['pages'] += 1
            body, notes = self.page_lines(k)
            if second and cur is not None:
                cur.parts.append(('aa', page))
            if page in self.title_pages:
                close()
                b = new_block('title', page)
                for kind, text, l in body:
                    b.parts.append(('nl', None))
                    b.text(text)
                out.append(b)
                continue
            first_line = True
            for kind, text, l in body:
                mark = line_marks.get((k, id(l))) if second else None
                if mark is not None:
                    label = mark
                if kind == 'centre':
                    close()
                    if out and out[-1].kind == 'head' and out[-1].page == (label if second else page) and not getattr(out[-1], 'shut', False) and mark is None:
                        out[-1].parts.append(('nl', None))
                        out[-1].text(text)
                    else:
                        b = new_block('head', page)
                        b.text(text)
                        out.append(b)
                        self.report['heads'] += 1
                    first_line = False
                    continue
                if out and out[-1].kind == 'head':
                    out[-1].shut = True
                if kind == 'indent' or cur is None:
                    if not (kind == 'flush' and cur is not None):
                        close()
                        cur = new_block('p', page)
                        mark = None
                elif first_line and not second:
                    cur.pb(page)
                if mark is not None and cur is not None:
                    cur.pb(mark)
                cur.parts.append(('lb', None))
                cur.text(text)
                first_line = False
            nb, editorial = None, False
            for kind, text, l in notes:
                if re.match(r'^[*]+\)?|^\d\)', text) or EDITORIAL.match(text) or nb is None:
                    if nb is not None and not editorial:
                        self.note_out(out, nb)
                    editorial = self.drop_numbered_notes and bool(re.match(r'^\d{1,2}\)', text) or EDITORIAL.match(text))
                    nb = new_block('note', page)
                    if not editorial:
                        self.report['notes'] += 1
                nb.parts.append(('lb', None))
                nb.text(text)
            if nb is not None and not editorial:
                self.note_out(out, nb)
        close()
        return out

    @staticmethod
    def note_out(out, nb):
        nb.after = True
        out.append(nb)


def ocr_letters(s):
    """The print's letter forms as normalise_print gives them, and the OCR's readings of ꝛc."""
    s = normalise_print(s)
    return re.sub(r'(?<![^\W\d_])[2z]c\.', 'etc.', s)


def finish_ocr(b):
    """Rejoin the lines of an OCR'd block: a line-end hyphen (- or ⸗ or =) before a lower-case
    letter goes, before a capital stays; any other line end is a space."""
    out = []
    pending = False
    for part in [x if isinstance(x, tuple) else ocr_letters(x) for x in b.parts]:
        if isinstance(part, tuple) and part[0] == 'lb':
            pending = bool(out)
            continue
        if isinstance(part, tuple):
            out.append(part)
            continue
        if pending:
            k = len(out) - 1
            while k >= 0 and isinstance(out[k], tuple):
                k -= 1
            prev = out[k].rstrip() if k >= 0 else ''
            nxt = part.lstrip()
            if prev.endswith(('-', '⸗', '=', '¬')) and nxt[:1].islower():
                out[k] = prev[:-1]
                part = nxt
            elif prev.endswith(('⸗', '=', '¬')):
                out[k] = prev[:-1] + '-'
                part = nxt
            else:
                part = ' ' + nxt
            pending = False
        out.append(part)
    b2 = Block(b.kind, b.page)
    b2.parts = out
    b2.aa_page = getattr(b, 'aa_page', None)
    r = b2.finish()
    b.aa_start, b.aas = b2.aa_start, b2.aas
    return r


# ─── Repairing the OCR's spelling: the confusions Fraktur invites, checked against a word list ───
# A word the OCR gives is changed only (1) into what one of the confusions below would make of
# it, (2) when the result is a word of Kant's own texts in the lexicon, and (3) when the OCR's
# word is not (or, for the long-s cases, is far rarer). Each change keeps the OCR's reading
# beside it in the passage's `fix`, so that nothing is replaced silently.

def lexicon(paths):
    """Word frequencies (lower case) from the given data files' text."""
    freq = collections.Counter()
    for path in paths:
        with open(path, encoding='utf-8') as f:
            t = f.read()
        # the text is in the files' string literals with a space in them, not their keys
        for lit in re.findall(r'"((?:[^"\\]|\\.)*)"|\'((?:[^\'\\]|\\.)*)\'', t):
            lit = lit[0] or lit[1]
            if ' ' not in lit:
                continue
            for w in re.findall(r'(?<![\w])[^\W\d_]+(?![\d])', normalise_print(lit)):
                freq[w.lower()] += 1        # not the 'ste' of 1ste
    return freq


SUBS = [('f', 's'), ('j', 's'), ('b', 'd'), ('b', 'v'), ('c', 'e'), ('t', 'i'), ('i', 'l'), ('l', 'i'),
        ('n', 'u'), ('u', 'n'), ('h', 'b'), ('e', 'c'), ('rn', 'm'), ('m', 'w'), ('a', 'ä'), ('o', 'ö'), ('u', 'ü'),
        ('8', 's'), ('d)', 'ch'), ('d)', 'ck'), ('3', 'z'), ('ii', 'ü'), ('fi', 'si'), ('ſ', 's'),
        ('d', 'ch'), ('h', 'ch'), ('b', 'h'), ('f', 't')]
LONG_S = {('f', 's'), ('j', 's'), ('fi', 'si')}


def candidates(w, depth=2):
    """Spellings one or two of the confusions away from w (lower case)."""
    seen = {w: frozenset()}
    frontier = [w]
    for _ in range(depth):
        nxt = []
        for x in frontier:
            for a, b in SUBS:
                i = x.find(a)
                while i >= 0:
                    y = x[:i] + b + x[i + len(a):]
                    if y not in seen:
                        seen[y] = seen[x] | {(a, b)}
                        nxt.append(y)
                    i = x.find(a, i + 1)
        frontier = nxt
    del seen[w]
    return seen


def repair_word(w, lex, cache, core_lex=None):
    """lex: what a word may become (Kant's printed works, his notes and the lectures); core_lex:
    the printed works alone, which decide whether the OCR's word is a word already. The notes'
    abbreviations (ber., ste) would otherwise shield the OCR's commonest misreadings."""
    if w in cache:
        return cache[w]
    core = w.lower()
    best = None
    core_lex = core_lex if core_lex is not None else lex
    known = core_lex.get(core, 0) or (lex.get(core, 0) if len(core) >= 5 and lex.get(core, 0) >= 2 else 0)
    if not re.fullmatch(r'[^\W_]+|[^\W_]*d\)[^\W_]*', core) or len(core) < 2:
        cache[w] = None
        return None
    for y, how in candidates(core).items():
        f = lex.get(y, 0)
        if f == 0:
            continue
        if known:
            # a real word may still be a long s misread: change it only where the s-spelling is
            # far commoner (fein/sein, feine/seine) and only by long-s confusions
            if not how <= LONG_S or f < 25 * known or f < 50:
                continue
        # fewest confusions first, the long s before the others, then the commoner word
        rank = (len(how), not how <= LONG_S, -f)
        if best is None or rank < best[1]:
            best = (y, rank)
    out = None
    if best:
        y = best[0]
        out = y[0].upper() + y[1:] if w[0].isupper() else y
    cache[w] = out
    return out


def repair_text(text, lex, cache, core_lex=None):
    """(text, [[offset, OCR reading], ...]) with the OCR's words repaired where they can be."""
    out, fixes, pos = [], [], 0
    for m in re.finditer(r'[^\W_]+(?:d\)[^\W_]*)?', text):
        w = m.group(0)
        r = repair_word(w, lex, cache, core_lex)
        out.append(text[pos:m.start()])
        if r and r != w:
            fixes.append([sum(len(x) for x in out), w])
            out.append(r)
        else:
            out.append(w)
        pos = m.end()
    out.append(text[pos:])
    return ''.join(out), fixes


# ─── The Critique's B pages, from AA III's outer margin ───────────────────────
# AA III prints the second edition's page number in the outer margin of the line where each B
# page begins (and a | in the line, which the OCR mostly misses). Each margin mark is one B page
# break; the OCR reads its number cleanly about two times in three. The numbers are found by
# the likeliest path through the marks (b_path): each mark is the page after the last, a skipped
# page costing a little, and every reading counting for or against. A break whose number the OCR
# read is `r` (attested); one whose last digits it read, or that sits in a run of read ones, `s`
# (in sequence); the rest `g`, and the portal shows those with a query.

DIG = str.maketrans({'o': '0', 'O': '0', 'l': '1', 'I': '1', 'i': '1', '|': '1', 'S': '5', 's': '5',
                     'B': '8', 'g': '9', 'Z': '2', 'z': '2', 'D': '0'})
ROMAN_RX = re.compile(r'^[ivxlIVXL]{1,7}$')


def roman_value(s):
    v = {'i': 1, 'v': 5, 'x': 10, 'l': 50}
    s = s.lower()
    t = 0
    for k, ch in enumerate(s):
        a, b = v.get(ch, 0), v.get(s[k + 1], 0) if k + 1 < len(s) else 0
        t += -a if a < b else a
    return t


def b_path(readings, lo, hi):
    """Labels for a run of marks. readings[i]: (kind, value) with kind 'full' (digits read whole),
    'tail' (the last digits only) or None. Viterbi over labels lo..hi."""
    INF = float('inf')
    n = len(readings)
    labels = range(lo, hi + 1)
    def emit(i, lab):
        r = readings[i]
        if r is None:
            return 1.2
        kind, val = r
        if kind == 'full':
            return 0.0 if val == lab else (3.0 if len(str(val)) == len(str(lab)) else 2.0)
        return 0.4 if str(lab).endswith(val) else 2.0
    STEP = {1: 0.0, 2: 1.6, 3: 3.2, 4: 4.8, 0: 3.5}
    cost = {lab: emit(0, lab) + 0.002 * (lab - lo) for lab in labels}
    back = []
    for i in range(1, n):
        new, bk = {}, {}
        for lab in labels:
            best, arg = INF, None
            for d, c in STEP.items():
                prev = lab - d
                if prev in cost and cost[prev] + c < best:
                    best, arg = cost[prev] + c, prev
            if arg is not None:
                new[lab], bk[lab] = best + emit(i, lab), arg
        cost = new
        back.append(bk)
    lab = min(cost, key=cost.get)
    path = [lab]
    for bk in reversed(back):
        lab = bk[lab]
        path.append(lab)
    path.reverse()
    out = []
    for i, lab in enumerate(path):
        r = readings[i]
        if r and r[0] == 'full' and r[1] == lab:
            src = 'r'
        elif r and r[0] == 'tail' and str(lab).endswith(r[1]):
            src = 's'
        else:
            near = [j for j in (i - 1, i + 1) if 0 <= j < n and readings[j] and readings[j][0] == 'full' and readings[j][1] == path[j]]
            src = 's' if len(near) == 2 and path[i + 1] - path[i - 1] == 2 else 'g'
        out.append((lab, src))
    return out


def read_mark(raw, front):
    raw = raw.strip('.,;:')
    if front:
        if ROMAN_RX.match(raw) and len(raw) >= 2:
            return ('full', roman_value(raw))
        return None
    d = raw.translate(DIG)
    if re.fullmatch(r'\d{1,3}', d):
        return ('full', int(d))
    tail = re.search(r'(\d{1,2})$', re.sub(r'[^\d]', '', d) if re.search(r'\d$', d) else '')
    return ('tail', tail.group(1)) if tail else None


AA03_LAST = 552          # B 884 ends on AA 3:552; the editors' notes follow
BLANK_B = {32}           # the blank back of a part-title page in B (no text to mark)


def build_krv_b_ocr(xml):
    """(blocks, report) for the B edition from the AA III scan's OCR, with B pages."""
    leaves = ocr_leaves(xml)
    pages = leaf_pages(leaves)
    marks = collections.defaultdict(list)          # leaf -> [(y, x, text)] in the outer margin
    def hook(k, side, w, l):
        p = pages[k]
        if p and ((p % 2 == 1 and side == 'right') or (p % 2 == 0 and side == 'left')):
            marks[k].append((w[2], w[1], w[0]))
    vol = OCRVolume(leaves, pages, 1, AA03_LAST, [], margin_hook=hook, drop_numbered_notes=True)
    bodies = {}
    for k in range(len(leaves)):
        if pages[k] and pages[k] <= AA03_LAST:
            bodies[k] = vol.page_lines(k)[0]
    vol.report['margin'] = 0
    events = []                                     # (AA page, leaf, y, raw)
    for k in sorted(marks, key=lambda k: pages[k]):
        groups = []
        for y, x, t in sorted(marks[k]):
            if groups and abs(groups[-1][0] - y) < 25:
                groups[-1][1].append((x, t))
            else:
                groups.append([y, [(x, t)]])
        for y, ts in groups:
            events.append((pages[k], k, y, ''.join(t for x, t in sorted(ts))))
    # The Introduction (B 1) begins where the first arabic number is read after the front matter.
    intro = next(i for i, e in enumerate(events) if e[0] >= 20 and read_mark(e[3], False) in (('full', 1), ('full', 2), ('full', 3)))
    front, rest = events[:intro], events[intro:]
    labels = [(roman(n), src) for n, src in b_path([read_mark(e[3], True) for e in front], 1, 50)] + \
             [(str(n), src) for n, src in b_path([read_mark(e[3], False) for e in rest], 2, 884)]
    # A part-title page has no mark: where the run jumps over pages and an AA page between the two
    # marks holds only a title, that page is the next B page (with its blank back), and the AA page
    # after it begins the one after: B 31 (title of the Elementarlehre), B 32, B 33 (§ 1).
    by_page = {pages[k]: k for k in bodies}
    extra = []
    for i in range(intro, len(events) - 1):
        n, m = labels[i][0], labels[i + 1][0]
        if not (n.isdigit() and m.isdigit()) or int(m) - int(n) < 2:
            continue
        between = [q for q in range(events[i][0] + 1, events[i + 1][0]) if q in by_page]
        titles = [q for q in between if 0 < len(bodies[by_page[q]]) <= 8 and all(b[0] == 'centre' for b in bodies[by_page[q]])]
        if titles and len(between) == int(m) - int(n) - 1:
            # title page, its blank back and the next page: one B page each, as in AA III
            for j, q in enumerate(between):
                if bodies[by_page[q]]:
                    extra.append((by_page[q], bodies[by_page[q]][0][2], str(int(n) + 1 + j)))
    # each mark goes to the body line it stands beside
    line_marks, srcs = {}, {}
    for k, l, lab in extra:
        line_marks[(k, id(l))] = lab
        srcs[lab] = 's'
    for (page, k, y, raw), (lab, src) in zip(events, labels):
        body = bodies.get(k) or []
        if not body:
            continue
        kind, text, l = min(body, key=lambda b: abs(b[2]['top'] - y))
        line_marks[(k, id(l))] = lab
        srcs[lab] = src
    # B 1 has no mark of its own: it begins at the Introduction's heading
    kp = next(k for k in sorted(bodies, key=lambda k: pages[k]) if pages[k] == events[intro][0])
    for kk in sorted(bodies, key=lambda k: pages[k]):
        if pages[kk] < pages[kp] - 1:
            continue
        hit = next((l for kind, text, l in bodies[kk] if re.match(r'^Einleitung', text)), None)
        if hit is not None:
            line_marks[(kk, id(hit))] = '1'
            srcs['1'] = 's'
            break
    blocks = vol.passages(line_marks)
    counts = collections.Counter(srcs.values())
    rep = {'marks': len(events), 'read': counts['r'], 'sequence': counts['s'], 'query': counts['g'],
           'B pages without a mark': sorted(set(range(1, 885)) - {int(x) for x in srcs if x.isdigit()} - BLANK_B)}
    return blocks, srcs, rep, vol.report


# ─────────────────────────────────────────────────────────────────────────────
# Matching the two editions of the Critique: which A page each B passage has (and back)
# ─────────────────────────────────────────────────────────────────────────────

def norm_word(w):
    """The portal's normWord (index.html), so that 1781's spelling meets AA III's."""
    n = unicodedata.normalize('NFD', w.lower())
    n = re.sub(r'([aou])[̈ͤ]', r'\1e', n)
    n = re.sub(r'[̀-ͯ]', '', n)
    n = n.replace('ſ', 's').replace('ß', 'ss').replace('æ', 'ae').replace('œ', 'oe').replace('th', 't').replace('qv', 'qu')
    n = n.replace('ch', '\x01').replace('ck', 'k')
    n = re.sub(r'c(?=[eiy])', 'z', n).replace('c', 'k').replace('\x01', 'ch')
    n = n.replace('ey', 'ei').replace('y', 'i').replace('j', 'i')
    n = re.sub(r'(?!^)ie', 'i', n).replace('dt', 't').replace('tz', 'z')
    return re.sub(r'(.)\1+', r'\1', n)


def words_of(ps):
    """[(normal form, passage index, page)] over the passages, in order."""
    out = []
    for i, p in enumerate(ps):
        marks = [[0, p['pg']]] + [[o, n] for o, n in p.get('pb', [])]
        for m in re.finditer(r'[^\W\d_]+', p['text']):
            page = marks[0][1]
            for o, n in marks:
                if o <= m.start():
                    page = n
            out.append((norm_word(m.group(0)), i, page))
    return out


def match_editions(A, B, n=5):
    """Pairs (i, j) of word positions in A and B that stand in one shared run: anchored on word
    sequences found exactly once in each, kept in order (longest increasing chain)."""
    def grams(ws):
        c = collections.Counter(tuple(w[0] for w in ws[k:k + n]) for k in range(len(ws) - n + 1))
        return {tuple(w[0] for w in ws[k:k + n]): k for k in range(len(ws) - n + 1) if c[tuple(w[0] for w in ws[k:k + n])] == 1}
    ga, gb = grams(A), grams(B)
    pairs = sorted((ga[g], gb[g]) for g in ga.keys() & gb.keys())
    # longest chain increasing in both (patience sorting on the B positions)
    import bisect
    tails, tails_i, prev = [], [], [None] * len(pairs)
    for idx, (a, b) in enumerate(pairs):
        k = bisect.bisect_left(tails, b)
        if k == len(tails):
            tails.append(b); tails_i.append(idx)
        else:
            tails[k] = b; tails_i[k] = idx
        prev[idx] = tails_i[k - 1] if k else None
    chain, idx = [], tails_i[-1] if tails_i else None
    while idx is not None:
        chain.append(pairs[idx]); idx = prev[idx]
    chain.reverse()
    out = {}
    for a, b in chain:
        for d in range(n):
            out[a + d] = b + d
    return out


def other_pages(ps, own, other, amap):
    """Give each passage of ps the other edition's pages its words were matched to, where at
    least a third of its words were matched."""
    by_p = collections.defaultdict(list)
    for k, (w, i, page) in enumerate(own):
        if k in amap:
            by_p[i].append(other[amap[k]][2])
    counts = collections.Counter(i for w, i, page in own)
    for i, p in enumerate(ps):
        got = by_p.get(i, [])
        if counts[i] and len(got) >= max(3, counts[i] / 3):
            p['other'] = got[0]
            if got[-1] != got[0]:
                p['otherEnd'] = got[-1]


def page_key(lab):
    """Order of a page label: Roman (front matter) before Arabic."""
    lab = str(lab).rstrip('?')
    return (1, int(lab)) if lab.isdigit() else (0, roman_value(lab))


def build_all(db, a_xml, aa02_xml, aa03_xml, outdir):
    here = os.path.dirname(os.path.abspath(__file__))
    repo = os.path.normpath(os.path.join(here, '..', '..', '..'))
    # AA I
    build_aa01(db, os.path.join(outdir, 'kant-aa01.js'))
    # the Critique, A
    A = build_krv_a(a_xml, None)
    # the word list the OCR is repaired against: the printed texts, then the notes and lectures
    core_files = [os.path.join(outdir, 'kant-aa01.js')] + [os.path.join(repo, x) for x in (
        'Individuals/Alex Li/logik-jasche-9.js', 'Individuals/Jesus-La-Paz/meier-auszug-data.js', 'data/metaphysica-17.js')]
    wide_files = core_files + [os.path.join(repo, x) for x in (
        'data/reflexionen-16-meier.js', 'data/reflexionen-17-18-baumgarten.js', 'data/logik-blomberg-24.js',
        'data/logik-wiener-24.js', 'data/logik-busolt-24.js')]
    from_a = collections.Counter(w.lower() for p in A for w in re.findall(r'(?<![\w])[^\W\d_]+(?![\d])', p['text']))
    core, wide = lexicon(core_files) + from_a, lexicon(wide_files) + from_a
    cache = {}

    def repaired(b, primary):
        text, start, end, pbs, trail = finish_ocr(b)
        if not text:
            return None
        marks = [[0, start]] + pbs
        aas = getattr(b, 'aas', [])
        new, newpb, fixes = '', [], []
        cuts = sorted(set([0, len(text)] + [o for o, n in pbs] + [o for o, n in aas]))
        omap = {}
        for a, z in zip(cuts, cuts[1:]):
            seg, f = repair_text(text[a:z], wide, cache, core)
            omap[a] = len(new)
            fixes += [[len(new) + o, w] for o, w in f]
            new += seg
        omap[len(text)] = len(new)
        p = {'kind': b.kind, primary: start, primary + 'End': end, 'pb': [[omap[o], n] for o, n in pbs], 'text': new}
        if aas or getattr(b, 'aa_start', None) is not None:
            p['aa'] = b.aa_start
            p['aapb'] = [[omap[o], n] for o, n in aas]
        if fixes:
            p['fix'] = fixes
        return p

    # AA II
    leaves = ocr_leaves(aa02_xml)
    vol = OCRVolume(leaves, leaf_pages(leaves), 1, AA02_LAST, [w[4] for w in AA02_WORKS])
    ps2, works, counter = [], [], collections.Counter()
    for b in vol.passages():
        p = repaired(b, 'aa')
        if not p:
            continue
        w = [x for x in AA02_WORKS if x[4] <= p['aa']][-1]
        counter[w[0]] += 1
        p = {'id': w[0] + '-' + str(counter[w[0]]).zfill(4), 'work': w[0], 'kind': p['kind'], 'sec': w[2] + ' (' + str(w[3]) + ')',
             'aa': p['aa'], 'aaEnd': p['aaEnd'], 'pb': p['pb'], 'text': p['text'], **({'fix': p['fix']} if 'fix' in p else {})}
        ps2.append(p)
    for p in ps2:
        if p['aaEnd'] == p['aa']:
            del p['aaEnd']
        if not p['pb']:
            del p['pb']
    for key, title, short, year, first in AA02_WORKS:
        mine = [p for p in ps2 if p['work'] == key]
        works.append({'key': key, 'title': title, 'short': short, 'year': year,
                      'aa': [min(p['aa'] for p in mine), max(p.get('aaEnd', p['aa']) for p in mine)], 'passages': len(mine)})
    meta2 = {
        'work': "Kant's gesammelte Schriften, Bd. II: Vorkritische Schriften II, 1757–1777",
        'volume': 2,
        'edition': 'The old Academy edition (1905; 2nd printing 1912), read by OCR from the Internet Archive scan gesammelteschrif0002kant; spelling repaired by rule (see fix)',
        'source': 'https://archive.org/details/gesammelteschrif0002kant (tesseract OCR by the Internet Archive)',
        'licence': 'Public domain: the 1905/1912 printing and Kant’s text are out of copyright; this extraction is offered under CC0',
        'scan': 'https://archive.org/details/gesammelteschrif0002kant',
        'works': works,
    }
    header2 = """/* AA II, Kant's works of 1757–1777, for the Logic Portal. GENERATED by
   Individuals/mikrishnan/published/build_published.py from the Internet Archive's OCR of the
   old Academy edition (Fraktur). Do not edit by hand.

   THIS IS OCR, REPAIRED BY RULE, NOT A CLEAN TEXT: about 96% of its words agree with the Bonner
   Kant-Korpus. Check any quotation against the page image (meta.scan). Each passage's `fix` lists
   the words the extractor changed, [offset, the OCR's reading], so that every repair can be seen.

   LICENCE: public domain (the 1905/1912 printing); the extraction is CC0.
   Shape: see build_published.py and catalogue.js (the `passages` shape). */"""
    write_js(os.path.join(outdir, 'kant-aa02-ocr.js'), header2, 'KANT_AA02', {'meta': meta2, 'passages': ps2})
    report(ps2, works, 'AA II')
    print('  repaired words:', sum(len(p.get('fix', [])) for p in ps2))

    # the Critique, B, from AA III
    blocks, srcs, brep, vrep = build_krv_b_ocr(aa03_xml)
    Bp, sec = [], 'Title page'
    for b in blocks:
        p = repaired(b, 'pg')
        if not p:
            continue
        if p['kind'] == 'head' and KRV_SECTION.search(p['text']) and p['pg'] != 'i':
            sec = clean_head(p['text'].replace('\n', ' '), 90)
        p['sec'] = sec
        Bp.append(p)
    unmarked = set(brep['B pages without a mark'])
    for i, p in enumerate(Bp):
        p['id'] = 'krv-b-' + str(i + 1).zfill(4)
        last = (p.get('pb') or [[0, p['pg']]])[-1][1]
        if last and str(last).isdigit() and int(last) + 1 in unmarked:
            # the next page's mark was not read: this passage may run onto it
            n = int(last) + 1
            while n + 1 in unmarked:
                n += 1
            p['pgMay'] = str(n)
    # A ↔ B
    wa, wb = words_of(A), words_of(Bp)
    amap = match_editions(wa, wb)
    bmap = {v: k for k, v in amap.items()}
    other_pages(A, wa, wb, amap)
    other_pages(Bp, wb, wa, bmap)
    def tidy(ps, keys):
        for p in ps:
            for k in keys:
                if k + 'End' in p and p[k + 'End'] == p.get(k):
                    del p[k + 'End']
            for k in ('pb', 'aapb'):
                if k in p and not p[k]:
                    del p[k]
    tidy(A, ['pg', 'other'])
    tidy(Bp, ['pg', 'other'])
    query = sorted((l for l, s in srcs.items() if s == 'g'), key=page_key)
    seq = sorted((l for l, s in srcs.items() if s == 's'), key=page_key)
    metaA = {'work': 'Critik der reinen Vernunft (1781)', 'edition': 'A', 'cite': 'A',
             'source': 'Deutsches Textarchiv, kant_rvernunft_1781 (https://www.deutschestextarchiv.de/kant_rvernunft_1781), from the core corpus download of 2026-02-10',
             'licence': 'CC BY-SA 4.0 (Deutsches Textarchiv, BBAW): https://creativecommons.org/licenses/by-sa/4.0/',
             'otherFrom': 'krv-b', 'otherNote': 'B pages found by matching the two editions word for word; attested in neither print'}
    metaB = {'work': 'Kritik der reinen Vernunft, 2nd edition (1787), as AA III prints it', 'edition': 'B', 'cite': 'B', 'volume': 3,
             'source': 'https://archive.org/details/gesammelteschrif0003kant (AA III, 1904/1911; tesseract OCR by the Internet Archive)',
             'scan': 'https://archive.org/details/gesammelteschrif0003kant',
             'licence': 'Public domain (the 1904/1911 printing); the extraction is CC0',
             'pageNote': 'B pages from AA III’s outer margin, read by OCR: read, or numbered in sequence (seq); a query (query) where neither holds',
             'seq': seq, 'query': query, 'unmarked': brep['B pages without a mark'],
             'otherFrom': 'krv-a', 'otherNote': 'A pages found by matching the two editions word for word; attested in neither print'}
    headA = """/* The Critique of Pure Reason, first edition (A, Riga 1781), for the Logic Portal. GENERATED by
   Individuals/mikrishnan/published/build_published.py from the Deutsches Textarchiv's
   double-keyed transcription of the print (DTA-Basisformat TEI). Do not edit by hand.

   LICENCE: an adaptation of the DTA's text, shared under the same licence, CC BY-SA 4.0
   (Deutsches Textarchiv, Berlin-Brandenburgische Akademie der Wissenschaften).
   https://creativecommons.org/licenses/by-sa/4.0/
   What changed: long s printed as s, the e over a vowel as the umlaut, ꝛc. as etc.; line-end
   hyphens rejoined; the DTA's corrections (<corr>) taken for its misprints (<sic>); running
   heads, catchwords and signatures left out; split paragraphs and footnotes joined. Spelling,
   punctuation and the A pages (pg, pgEnd, pb; Roman for the front matter) are the print's.
   `other`, `otherEnd`: the B pages of the same words, found by matching the editions (inferred). */"""
    headB = """/* The Critique of Pure Reason, second edition (B, 1787), as the old Academy edition prints it
   (AA III, 1904/1911), for the Logic Portal. GENERATED by build_published.py from the Internet
   Archive's OCR of the AA III scan (Fraktur). Do not edit by hand.

   THIS IS OCR, REPAIRED BY RULE, NOT A CLEAN TEXT. Check quotations against the page image
   (meta.scan). `fix` lists every repaired word with the OCR's reading. B pages (pg, pgEnd, pb)
   come from AA III's margin as the OCR read it; meta.seq lists those numbered in sequence and
   meta.query those that are uncertain. `aa`, `aapb`: AA III's own pages. `other`, `otherEnd`: the
   A pages of the same words, found by matching the editions (inferred).

   LICENCE: public domain (the 1904/1911 printing); the extraction is CC0. */"""
    for ps, glob, name, meta, head in ((A, 'KANT_KRV_A', 'kant-krv-a.js', metaA, headA), (Bp, 'KANT_KRV_B', 'kant-krv-b-ocr.js', metaB, headB)):
        write_js(os.path.join(outdir, name), head, glob, {'meta': meta, 'passages': ps})
        words = sum(len(re.findall(r'[^\W\d_]+', p['text'])) for p in ps)
        print(meta['edition'] + ':', len(ps), 'passages,', words, 'words;', sum(1 for p in ps if 'other' in p), 'with the other edition\'s page')
    print('  B pages: marks', brep['marks'], 'read', brep['read'], 'in sequence', brep['sequence'], 'query', brep['query'],
          'without a mark', len(brep['B pages without a mark']))
    print('  matched words', len(amap), 'of', len(wa), '(A) and', len(wb), '(B)')


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'aa01':
        build_aa01(sys.argv[2], sys.argv[3])
    elif cmd == 'all':
        build_all(*sys.argv[2:7])
    elif cmd == 'krv-a-test':
        ps = build_krv_a(sys.argv[2], None)
        json.dump(ps, open(sys.argv[3], 'w', encoding='utf-8'), ensure_ascii=False)
        print(len(ps), 'passages', sum(len(re.findall(r'[^\W\d_]+', p['text'])) for p in ps), 'words')
    else:
        sys.exit('unknown command ' + cmd)
