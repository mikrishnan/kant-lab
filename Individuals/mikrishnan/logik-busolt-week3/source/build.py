import re, sys, html
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter, landscape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.colors import HexColor

import os
WD = os.path.dirname(os.path.abspath(__file__)) + '/'
OUT = sys.argv[1] if len(sys.argv) > 1 else WD + 'out.pdf'
FD = os.environ.get('CALADEA_DIR', '/usr/share/fonts/truetype/crosextra/')  # Caladea-*.ttf; any serif with ß ä ö ü works
pdfmetrics.registerFont(TTFont('Cal', FD + 'Caladea-Regular.ttf'))
pdfmetrics.registerFont(TTFont('Cal-B', FD + 'Caladea-Bold.ttf'))
pdfmetrics.registerFont(TTFont('Cal-I', FD + 'Caladea-Italic.ttf'))
pdfmetrics.registerFont(TTFont('Cal-BI', FD + 'Caladea-BoldItalic.ttf'))
pdfmetrics.registerFontFamily('Cal', normal='Cal', bold='Cal-B', italic='Cal-I', boldItalic='Cal-BI')

# palette (parchment / sienna, after the repo's design language)
INK = HexColor('#241c14'); ACCENT = HexColor('#5c3d1e'); PILL = HexColor('#8a4a22')
GREY = HexColor('#8c8374'); RULE = HexColor('#cdbf9f'); PAPER = HexColor('#fcf9f1')
TINT = HexColor('#f3ead6'); HLC = HexColor('#ffe27a')

W, H = landscape(letter)
ML = MR = 44
GUT = 18
GAP = 28
TOTW = W - ML - MR
GW = 318
EW = TOTW - GUT - GAP - GW
X_DE = ML + GUT
X_EN = X_DE + GW + GAP
BODY_TOP = H - 98
BODY_BOT = 46
HB = BODY_TOP - BODY_BOT


def spaced(c, x, y, s, font, size, cs, color):
    t = c.beginText(x, y); t.setFont(font, size); t.setCharSpace(cs); t.setFillColor(color)
    t.textOut(s); t.setCharSpace(0); c.drawText(t)

def spaced_w(s, font, size, cs):
    return pdfmetrics.stringWidth(s, font, size) + cs * len(s)

# ---------- data ----------
def parse(paths):
    pages = []; cur = blk = None; mode = None
    for p in paths:
        for line in open(p, encoding='utf8').read().split('\n'):
            if line.startswith('=== '):
                parts = [x.strip() for x in line[4:].split('|')]
                meta = {}
                for x in parts[2:]:
                    k, v = x.split('=', 1); meta[k] = v
                cur = {'no': parts[0], 'head': parts[1], 'meta': meta, 'blocks': []}
                pages.append(cur)
            elif re.fullmatch(r'\[(P|C|H|L|L2)\]', line):
                blk = {'kind': line[1:-1], 'de': [], 'en': ''}
                cur['blocks'].append(blk); mode = 'de'
            elif line.startswith('>>> '):
                blk['en'] = line[4:]; mode = 'en'
            elif line.strip():
                if mode == 'de': blk['de'].append(line)
                else: blk['en'] += ' ' + line
    return pages

TOK = re.compile(r'(\{\d+\}|<<|>>)')

def tokens(line, hl):
    """-> list of (kind, value, hl) ; returns new hl state"""
    out = []
    for t in TOK.split(line):
        if not t: continue
        if t == '<<': hl = True
        elif t == '>>': hl = False
        elif t[0] == '{': out.append(('m', t[1:-1], hl))
        else: out.append(('t', t, hl))
    return out, hl

def en_markup(s, ms):
    s = s.replace('&', '&amp;')
    s = re.sub(r'\{(\d+)\}', lambda m: '<font name="Cal-B" size="%.2f" color="#ffffff" backColor="#8a4a22">&nbsp;%s&nbsp;</font>' % (ms, m.group(1)), s)
    s = s.replace('<<', '<span backColor="#ffe27a">').replace('>>', '</span>')
    return s

# ---------- layout ----------
KIND = {  # indent first, indent rest, space before, space after
    'P': (13, 0, 2.5, 0), 'C': (0, 0, 1.5, 0), 'H': (0, 0, 8, 3),
    'L': (13, 24, 1.2, 0), 'L2': (26, 36, 1.0, 0)}

def styles(k):
    de = 9.15 * k; en = 9.6 * k; lead = 11.7 * k
    return de, en, lead

def en_para(blk, k, ms):
    de, en, lead = styles(k)
    kind = blk['kind']; fi, ri, sb, sa = KIND[kind]
    if kind == 'H':
        st = ParagraphStyle('h', fontName='Cal-B', fontSize=en * 0.98, leading=lead, alignment=TA_CENTER,
                            textColor=ACCENT, charSpace=0.5 * k)
        txt = en_markup(blk['en'], ms)
        return Paragraph(txt, st)
    left = 0 if kind in ('P', 'C') else ri * k * 0.8 + 3 * k
    first = (fi * k) if kind == 'P' else (0 if kind == 'C' else -(ri * k * 0.8 - fi * k * 0.8) if False else 0)
    if kind == 'L': left, first = 24 * k * 0.8, -(24 - 13) * k * 0.8
    if kind == 'L2': left, first = 36 * k * 0.8, -(36 - 26) * k * 0.8
    if kind == 'P': left, first = 0, 13 * k
    st = ParagraphStyle('e', fontName='Cal', fontSize=en, leading=lead, textColor=INK, alignment=TA_LEFT,
                        leftIndent=left, firstLineIndent=first, allowWidows=1, allowOrphans=1)
    return Paragraph(en_markup(blk['en'], en * 0.66), st)

def de_width(line, fs, kind, first):
    """pixel width of a German line incl. indent and markers"""
    fi, ri, _, _ = KIND[kind]
    x = fi if first else ri
    for knd, v, hl in tokens(line, False)[0]:
        if knd == 't': x += pdfmetrics.stringWidth(v, 'Cal', fs)
        else: x += pdfmetrics.stringWidth(v, 'Cal-B', fs * 0.62) + 4.2
    return x

def layout(page, k):
    de, en, lead = styles(k)
    y = 0; items = []; maxw = 0
    for blk in page['blocks']:
        kind = blk['kind']; fi, ri, sb, sa = KIND[kind]
        y += sb * k
        n = len(blk['de'])
        hde = n * lead
        for i, l in enumerate(blk['de']):
            if kind != 'H':
                maxw = max(maxw, de_width(l, de, kind, i == 0) * 1.0)
        p = en_para(blk, k, en * 0.66)
        w, h = p.wrap(EW, 10000)
        bh = max(hde, h)
        items.append((blk, y, bh, p, h))
        y += bh + sa * k
    return y, items, maxw

def best_k(page):
    k = 1.08
    while k > 0.6:
        total, items, maxw = layout(page, k)
        if total <= HB and maxw <= GW: return k
        k -= 0.005
    return k

# ---------- drawing ----------
def draw_pill(c, x, y, num, fs):
    ms = fs * 0.62
    w = pdfmetrics.stringWidth(num, 'Cal-B', ms) + 4.2
    c.setFillColor(PILL)
    c.roundRect(x + 0.6, y - 1.2, w - 1.2, ms + 2.6, 1.4, stroke=0, fill=1)
    c.setFillColor(HexColor('#ffffff')); c.setFont('Cal-B', ms)
    c.drawString(x + 2.1, y + 0.6, num)
    return w

def draw_de_line(c, x, y, line, fs, hl):
    toks, hl = tokens(line, hl)
    for knd, v, h in toks:
        if knd == 't':
            w = pdfmetrics.stringWidth(v, 'Cal', fs)
            if h:
                c.setFillColor(HLC); c.rect(x - 0.4, y - fs * 0.24, w + 0.8, fs * 1.05, stroke=0, fill=1)
            c.setFillColor(INK); c.setFont('Cal', fs); c.drawString(x, y, v)
            x += w
        else:
            x += draw_pill(c, x, y, v, fs)
    return hl

def draw_page(c, page, idx, total, k, ms_pages):
    de, en, lead = styles(k)
    c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
    # header band
    c.setFillColor(TINT); c.rect(0, H - 74, W, 74, stroke=0, fill=1)
    c.setStrokeColor(ACCENT); c.setLineWidth(1.1); c.line(0, H - 74, W, H - 74)
    c.setStrokeColor(RULE); c.setLineWidth(0.5); c.line(0, H - 77, W, H - 77)
    # left: title
    c.setFillColor(ACCENT); c.setFont('Cal-B', 11.5)
    spaced(c, ML, H - 34, 'LOGIK BUSOLT', 'Cal-B', 11.5, 1.6, ACCENT)
    c.setFillColor(GREY); c.setFont('Cal-I', 8.6)
    c.drawString(ML, H - 47, 'Kant, Vorlesungen über Logik')
    c.drawString(ML, H - 58, 'Kant’s Schriften XXIV')
    # centre: big book-page badge
    bw, bh = 74, 38
    bx = W / 2 - bw / 2; by = H - 63
    c.setFillColor(ACCENT); c.roundRect(bx, by, bw, bh, 5, stroke=0, fill=1)
    c.setFillColor(HexColor('#f3ead6'))
    s = 'BOOK PAGE'; sw = spaced_w(s, 'Cal-B', 6.2, 1.3) - 1.3
    spaced(c, W / 2 - sw / 2, by + bh - 9.5, s, 'Cal-B', 6.2, 1.3, HexColor('#f3ead6'))
    c.setFillColor(HexColor('#ffffff')); c.setFont('Cal-B', 22)
    c.drawCentredString(W / 2, by + 7.5, page['no'])
    # right: manuscript pages
    mp = ms_pages
    c.setFillColor(ACCENT)
    lab = 'MANUSCRIPT PAGE BREAKS ON THIS PAGE'
    lw = spaced_w(lab, 'Cal-B', 7, 1.2) - 1.2
    spaced(c, W - MR - lw, H - 34, lab, 'Cal-B', 7, 1.2, ACCENT)
    if mp:
        widths = [pdfmetrics.stringWidth(n, 'Cal-B', 9 * 0.62 * 1.25) + 6 for n in mp]
        tot = sum(widths) + 5 * (len(mp) - 1)
        x = W - MR - tot
        for n, w in zip(mp, widths):
            fsx = 9 * 1.25
            ms = fsx * 0.62
            c.setFillColor(PILL); c.roundRect(x, H - 58, w, 15, 2.4, stroke=0, fill=1)
            c.setFillColor(HexColor('#ffffff')); c.setFont('Cal-B', ms * 1.0 + 1.6)
            c.drawCentredString(x + w / 2, H - 53.4, n)
            x += w + 5
    else:
        c.setFillColor(GREY); c.setFont('Cal-I', 8.6)
        c.drawRightString(W - MR, H - 52, 'none begins on this page')
    # column headers
    for x0, w0, a, b in ((X_DE, GW, 'DEUTSCH', 'original, as printed'), (X_EN, EW, 'ENGLISH', 'translation')):
        pass
    c.setStrokeColor(RULE); c.setLineWidth(0.6)
    yb = H - 91
    for x0, w0, a, b in ((X_DE, GW, 'DEUTSCH', ' · Original'), (X_EN, EW, 'ENGLISH', ' · Translation')):
        spaced(c, x0, yb, a, 'Cal-B', 8.2, 1.5, ACCENT)
        aw = spaced_w(a, 'Cal-B', 8.2, 1.5)
        c.setFillColor(GREY); c.setFont('Cal-I', 8.2); c.drawString(x0 + aw + 2, yb, b)
        c.line(x0, yb - 4, x0 + w0, yb - 4)
    # column divider
    c.setStrokeColor(RULE); c.setLineWidth(0.5)
    xd = X_DE + GW + GAP / 2
    c.line(xd, BODY_BOT - 2, xd, BODY_TOP + 2)
    # body
    total_h, items, maxw = layout(page, k)
    lineno = 0; hl = False
    for blk, y0, bh, p, ph in items:
        kind = blk['kind']; fi, ri, sb, sa = KIND[kind]
        ytop = BODY_TOP - y0
        # english
        if kind == 'H':
            p.wrapOn(c, EW, 1000); p.drawOn(c, X_EN, ytop - ph + (lead - 0) * 0.0)
        else:
            p.wrapOn(c, EW, 1000); p.drawOn(c, X_EN, ytop - ph)
        # german
        for i, line in enumerate(blk['de']):
            lineno += 1
            base = ytop - (i + 1) * lead + lead * 0.27
            if lineno % 5 == 0:
                c.setFillColor(GREY); c.setFont('Cal', 7.2 * k + 0.2)
                c.drawRightString(X_DE - 5, base, str(lineno))
            if kind == 'H':
                s = re.sub(r'\{\d+\}', '', line)
                ttl = s.upper()
                fs = de * 1.0
                # heading may carry a marker
                toks, _ = tokens(line, False)
                toks, _ = tokens(line, False)
                tw = sum(spaced_w(v, 'Cal-B', fs, 0.5) if kk == 't' else pdfmetrics.stringWidth(v, 'Cal-B', fs * .62) + 4.2 for kk, v, _h in toks)
                x = X_DE + GW / 2 - tw / 2
                for kk, v, _h in toks:
                    if kk == 't':
                        spaced(c, x, base, v, 'Cal-B', fs, 0.5, ACCENT)
                        x += spaced_w(v, 'Cal-B', fs, 0.5)
                    else:
                        x += draw_pill(c, x, base, v, fs)
            else:
                x = X_DE + (fi if i == 0 else ri) * k * (1.0)
                hl = draw_de_line(c, x, base, line, de, hl)
    # footer
    c.setStrokeColor(RULE); c.setLineWidth(0.6); c.line(ML, 34, W - MR, 34)
    c.setFillColor(GREY); c.setFont('Cal-I', 7.8)
    notes = []
    if page['meta'].get('gap'):
        notes.append('Book pages %s are not in the supplied PDF; this page follows the gap.' % page['meta']['gap'])
    if page['meta'].get('sig'):
        notes.append('Printer’s signature at foot of page: “%s”.' % page['meta']['sig'])
    notes.append('Gray numbers = line numbers of the printed page.')
    c.drawString(ML, 22, '  ·  '.join(notes))
    c.setFont('Cal', 8); c.drawRightString(W - MR, 22, '%d / %d' % (idx, total))

def cover(c, pages, total):
    c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
    c.setFillColor(TINT); c.rect(0, H - 142, W, 142, stroke=0, fill=1)
    c.setStrokeColor(ACCENT); c.setLineWidth(1.2); c.line(0, H - 142, W, H - 142)
    c.setStrokeColor(RULE); c.setLineWidth(.5); c.line(0, H - 145, W, H - 145)
    spaced(c, ML, H - 50, 'KANT LAB  ·  READING PACKET  ·  WEEK 3', 'Cal-B', 9, 2.2, ACCENT)
    c.setFillColor(INK); c.setFont('Cal-B', 30); c.drawString(ML, H - 88, 'Logik Busolt')
    c.setFont('Cal-I', 14.5); c.setFillColor(ACCENT)
    c.drawString(ML, H - 112, 'Kant, Vorlesungen über Logik — German text with English translation')
    c.setFont('Cal', 10); c.setFillColor(GREY)
    c.drawString(ML, H - 132, 'Book pages 627–641, 647 and 661–667  (Kant’s Schriften XXIV)  ·  %d pages' % len(pages))

    def para(txt, x, y, w, size=9.4, lead=12.4, font='Cal', color=INK, align=TA_LEFT, **kw):
        st = ParagraphStyle('x', fontName=font, fontSize=size, leading=lead, textColor=color, alignment=align, **kw)
        p = Paragraph(txt, st); pw, ph = p.wrap(w, 1000); p.drawOn(c, x, y - ph); return ph

    colw = 330; x1 = ML; x2 = ML + colw + 44
    y = H - 170
    def h(txt, x, y):
        spaced(c, x, y, txt, 'Cal-B', 9, 1.6, ACCENT)
        c.setStrokeColor(RULE); c.line(x, y - 4, x + colw, y - 4)
    h('HOW TO READ THIS PACKET', x1, y); y -= 20
    pill = lambda n: '<font name="Cal-B" size="7" color="#ffffff" backColor="#8a4a22">&nbsp;%s&nbsp;</font>' % n
    items = [
        '<b>Book page.</b> The large number in the top-centre badge is the page of the printed book (627, 628, …). Each page of this packet is exactly one book page, so you can cite from it directly.',
        '<b>Line numbers.</b> The German is set <i>line for line, exactly as printed</i>, and the gray numbers in the margin (every fifth line) are those of the printed page. A word broken across two lines keeps its hyphen.',
        '<b>Manuscript page breaks.</b> The edition marks the page-breaks of the original manuscript with a slash and a marginal number. Here each appears as a marker such as %s at the exact spot in the German, and again at the matching point in the English; the markers beginning on a page are also listed at its top right.' % pill(38),
        '<b>Facing translation.</b> The English sits beside the German it translates, block by block (paragraph, heading, list item). Where a sentence runs over a page, the English breaks at the same word.',
        '<b>Highlighting.</b> The two yellow passages on book page 638 are the highlighting in the PDF you supplied.',
        '<b>Gaps.</b> Book pages 642–646 and 648–660 are not in the supplied PDF; pages 647 and 661 carry a note saying so.',
    ]
    for it in items:
        ph = para(it, x1, y, colw, size=9.2, lead=12.0); y -= ph + 5
    y2 = H - 170
    h('ABOUT THE TEXT AND TRANSLATION', x2, y2); y2 -= 20
    notes = [
        'The German was transcribed from the scanned pages and checked against them page by page. Spelling, capitalisation and punctuation are the printed ones, irregularities included (<i>Erkentniß</i>/<i>Erkenntniß</i>, <i>seyn</i>, <i>Obiect</i>); only the evident OCR damage was repaired. Emphasis by spacing or type is not reproduced.',
        'The translation is a <b>working draft</b> made for study alongside the German, not a published translation; please check it against the German before quoting. Square brackets are mine: glosses of Latin terms, or a note where the German is garbled.',
        '<b>Terms kept constant:</b> <i>Erkenntniß</i> cognition · <i>Merkmahl</i> mark · <i>Verstand</i> understanding · <i>Vernunft</i> reason · <i>Sinnlichkeit</i> sensibility · <i>Schein</i> semblance · <i>Irrthum</i> error · <i>Fürwahrhalten</i> holding-for-true · <i>Meinen / Glauben / Wissen</i> opining / believing / knowing · <i>Gewißheit</i> certainty · <i>Überredung</i> persuasion · <i>Überzeugung</i> conviction · <i>Deutlichkeit</i> distinctness · <i>Klarheit</i> clarity · <i>Urtheil</i> judgment · <i>Saz</i> proposition.',
    ]
    for it in notes:
        ph = para(it, x2, y2, colw, size=9.2, lead=12.0); y2 -= ph + 5
    # contents
    yy = min(y, y2) - 12
    c.setStrokeColor(RULE)
    spaced(c, ML, yy, 'CONTENTS', 'Cal-B', 9, 1.6, ACCENT)
    c.line(ML, yy - 4, W - MR, yy - 4)
    yy -= 18
    secs = [('627', 'Division of Scholars', 'Eintheilung der Gelehrten'),
            ('627', 'On Truth', 'Von der Wahrheit'),
            ('633', 'On the Clarity of Scholarly Cognition', 'Von der Klarheit der Gelehrten Erkentniß'),
            ('636', 'On the Magnitude of Scholarly Cognition', 'Von der Größe der Gelehrten Erkentniß'),
            ('637', 'On Certainty and the Kinds of Holding-for-True', 'Von der Gewißheit … von den verschiednen Arten des fürwahrhaltens'),
            ('647', 'On Hypotheses', 'Von den Hypothesen'),
            ('647', 'On Persuasion', 'Von der Ueberredung'),
            ('661', 'On Judgments', 'Von den Urtheilen'),
            ('661', 'The Division of Judgments', 'Die Eintheilung der Urtheile'),
            ('664', 'On Categorical Judgments', 'Von den Kategorischen Urtheilen'),
            ('666', 'On Hypothetical and Disjunctive Judgments', 'Von den Hypothetischen und Disiunktiven Urtheilen')]
    ncol = 3; gapc = 22
    cw = (W - ML - MR - gapc * (ncol - 1)) / ncol
    per = -(-len(secs) // ncol)
    for ci in range(ncol):
        xx = ML + ci * (cw + gapc); y0 = yy
        for no, en_t, de_t in secs[ci * per:(ci + 1) * per]:
            c.setFillColor(ACCENT); c.setFont('Cal-B', 8.6); c.drawString(xx, y0, no)
            fs = 8.6
            while pdfmetrics.stringWidth(en_t, 'Cal', fs) > cw - 26 and fs > 6: fs -= 0.2
            c.setFillColor(INK); c.setFont('Cal', fs); c.drawString(xx + 26, y0, en_t)
            fs = 7.8
            while pdfmetrics.stringWidth(de_t, 'Cal-I', fs) > cw - 26 and fs > 5.5: fs -= 0.2
            c.setFillColor(GREY); c.setFont('Cal-I', fs); c.drawString(xx + 26, y0 - 9.2, de_t)
            y0 -= 25

def main():
    pages = parse([WD + 'data1.txt', WD + 'data2.txt', WD + 'data3.txt'])
    c = canvas.Canvas(OUT, pagesize=(W, H))
    c.setTitle('Kant, Logik Busolt (pp. 627–667, selected) — German with English translation')
    c.setAuthor('Kant Lab'); c.setSubject('Vorlesungen über Logik, Logik Busolt: facing German/English reading packet')
    total = len(pages) + 1
    cover(c, pages, total); c.showPage()
    ks = [best_k(p) for p in pages]
    print('k per page:', [(p['no'], round(k, 3)) for p, k in zip(pages, ks)])
    kmin = min(ks)
    for i, p in enumerate(pages, 2):
        k = float(sys.argv[2]) if len(sys.argv) > 2 else ks[i - 2]
        mp = []
        for b in p['blocks']:
            for l in b['de']:
                mp += re.findall(r'\{(\d+)\}', l)
        n = sum(len(b['de']) for b in p['blocks'])
        print(p['no'], 'lines', n, 'markers', mp, 'k', round(k, 3))
        draw_page(c, p, i, total, k, mp); c.showPage()
    c.save()

main()
