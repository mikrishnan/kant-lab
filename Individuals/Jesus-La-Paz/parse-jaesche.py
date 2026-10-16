import re, json, sys
src = open('jaesche.txt', encoding='utf-8').read().replace('\xa0', ' ')
lines = src.split('\n')

PAGE = re.compile(r'^―\s*(\d+)\s*―\s*$')
PARA = re.compile(r'^§\.\s*(\d+)\.\s*(.*)$')
ROMAN = re.compile(r'^(I|II|III|IV|V|VI|VII|VIII|IX|X)\.\s+(\S.*)$')

# --- locate the body: the first page marker is at the Vorrede
start = next(i for i, l in enumerate(lines) if PAGE.match(l))
front = [l.strip() for l in lines[:start] if l.strip()]

blocks = []          # { id, kind, aa, aaEnd?, text, para?, sec, joined? }
page = int(PAGE.match(lines[start]).group(1))
cur_part = 'vorrede'   # vorrede | einleitung | elementarlehre | methodenlehre
cur_head = 'Vorrede. [Jäsche]'
cur_para = None
pending = None         # paragraph being assembled across | breaks

def flush():
    global pending
    if pending:
        t = ' '.join(pending['parts']).strip()
        t = re.sub(r'\s+', ' ', t)
        if t:
            b = {'kind': pending['kind'], 'aa': pending['aa'], 'text': t, 'part': pending['part'], 'head': pending['head']}
            if pending['aaEnd'] != pending['aa']: b['aaEnd'] = pending['aaEnd']
            if pending['para'] is not None: b['para'] = pending['para']
            if pending['joined']: b['joined'] = ['mark']
            blocks.append(b)
    pending = None

def begin(kind, text):
    global pending
    pending = {'kind': kind, 'aa': page, 'aaEnd': page, 'parts': [], 'para': cur_para, 'part': cur_part, 'head': cur_head, 'joined': False}
    add(text)

def add(text):
    """Add a line; a trailing | means the paragraph runs on, so keep it open."""
    global pending
    t = text.strip()
    cont = t.endswith('|')
    if cont: t = t[:-1].rstrip()
    pending['parts'].append(t)
    pending['aaEnd'] = page
    return cont

hold = False   # last line ended with | : next text line continues the paragraph
for ln in lines[start:]:
    m = PAGE.match(ln.strip())
    if m:
        page = int(m.group(1))
        continue                       # a page marker never ends a paragraph by itself
    s = ln.strip()
    if not s:
        continue
    pm = PARA.match(s)
    if pm and not hold:
        flush()
        cur_part = 'elementarlehre' if int(pm.group(1)) <= 93 else 'methodenlehre'
        cur_para = int(pm.group(1))
        cur_head = s
        begin('heading', s); flush()
        continue
    if not hold:
        if s.startswith('Einleitung'):
            flush(); cur_part = 'einleitung'; cur_head = s; cur_para = None
            begin('heading', s); flush(); continue
        rm = ROMAN.match(s)
        if rm and len(s) < 140 and (cur_part == 'einleitung' or s.startswith(('I. Allgemeine', 'II. Allgemeine'))):
            flush()
            if 'Allgemeine Elementarlehre' in s: cur_part = 'elementarlehre'; cur_para = None
            elif 'Allgemeine Methodenlehre' in s: cur_part = 'methodenlehre'; cur_para = None
            cur_head = s
            begin('heading', s); flush(); continue
    # ordinary text line
    if hold and pending:
        pending['joined'] = True
        hold = add(s)
    else:
        flush(); begin('text', '')   # new paragraph
        pending['parts'].clear()
        hold = add(s)
flush()

# ids and sections
secs = []; idx = {}
names = {'vorrede': 'Vorrede (Jäsche)', 'einleitung': 'Einleitung', 'elementarlehre': 'I. Allgemeine Elementarlehre (§§ 1–93)', 'methodenlehre': 'II. Allgemeine Methodenlehre (§§ 94–120)'}
for b in blocks:
    k = b.pop('part'); b.pop('head')
    if k not in idx:
        idx[k] = len(secs); secs.append({'id': 's%02d' % (len(secs) + 1), 'key': k, 'title': names[k], 'blocks': []})
    s = secs[idx[k]]
    b['id'] = 'jaesche-%s-%03d' % (s['id'], len(s['blocks']) + 1)
    s['blocks'].append(b)

# round-trip check: the words in the source body equal the words in the blocks
def words(t): return re.findall(r'\S+', t)
body = [re.sub(r'\|\s*$', '', l.strip()) for l in lines[start:] if l.strip() and not PAGE.match(l.strip())]
src_words = words(' '.join(body))
out_words = [w for s in secs for b in s['blocks'] for w in words(b['text'])]
ok = src_words == out_words
paras = sorted({b['para'] for s in secs for b in s['blocks'] if 'para' in b})
pages = [b['aa'] for s in secs for b in s['blocks']]
report = {'sections': [(s['title'], len(s['blocks'])) for s in secs], 'blocks': sum(len(s['blocks']) for s in secs),
          'words': len(out_words), 'roundtrip_words_equal': ok, 'src_words': len(src_words),
          'paras': (paras[0], paras[-1], len(paras)), 'missing_paras': [n for n in range(1, 121) if n not in paras],
          'aa': (min(pages), max(pages)), 'joined_at_mark': sum(1 for s in secs for b in s['blocks'] if b.get('joined')),
          'front': front[:3]}
print(json.dumps(report, ensure_ascii=False, indent=1))
json.dump({'front': front, 'sections': secs}, open('jaesche.json', 'w'), ensure_ascii=False)
