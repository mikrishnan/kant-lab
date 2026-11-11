"""wolff_ocr.py BOOK WORKDIR OUT.js

Christian Wolff's logics, from Munich's page images read by two Tesseract models and merged
(merge_pages.py), made into the Logic Portal's `passages` shape.

  BOOK  dl      Vernünfftige Gedancken von den Kräfften des menschlichen Verstandes (the German
                Logik), Halle 1754: Bayerische Staatsbibliothek, Ph.sp. 953 (bsb10044809)
        logica  Philosophia rationalis sive Logica, Frankfurt and Leipzig 1732: Bayerische
                Staatsbibliothek, 4 Ph.sp. 204 (bsb10008294)

WORKDIR holds what ocr_pages.py and ocr_margins.py made (img/, tsv/, canvases.json).

What is done to the machine reading, and nothing else:
  - running heads, catchwords and signatures are left out (they are the printer's, and repeat
    the text); the page numbers come from Munich's pagination of the scan, checked against the
    running heads;
  - lines are joined into paragraphs, a paragraph starting where the print indents a line after
    a short one, or at a §; a word broken at a line's end is rejoined (a hyphen before a capital
    is kept: Grund⸗Urtheil);
  - marginal notes become passages of their own (kind "margin"), set before the paragraph they
    stand beside;
  - spelling, long s and punctuation are the reading's own; the e written over a vowel is printed
    as the umlaut (aͤ as ä), the Fraktur hyphen ⸗ as -, and ꝛc. as etc., as in the portal's 1781
    Critique, the portal's typefaces having no glyph for them.
Where the readings disagreed, `alt` keeps the one not chosen, with the vote: [[offset, length,
reading, votes for the text kept, readings]]; an empty reading means the others read nothing there."""
import json, os, re, statistics, sys
from collections import Counter, defaultdict
sys.path.insert(0, os.path.dirname(__file__))
from merge_pages import build_lexicon, edges, load_tsv, printable, merge, merge_n, to_lines, agreed_tokens, body_height, column, place, bare, SECT, LETTER

BOOK, W, OUT = sys.argv[1:4]
CONF = {
    "dl": dict(bsb="bsb10044809", shelf="Ph.sp. 953", glob="WOLFF_DEUTSCHE_LOGIK", edges="gutter", idp="wolff-dl", first=9, last=276, front=6,
               # where each part begins (scan: section, cite label, chapter number or None, "top" of the page
               # or at the first "head"ing on it), from the page images
               parts={9: ("Vorrede", "Vorrede", None, "top"),
                      22: ("Erinnerung wegen der andern Auflage", "Vorrede", None, "head"),
                      24: ("Erinnerung wegen der dritten Auflage", "Vorrede", None, "head"),
                      27: ("Erinnerung wegen der vierdten und fuͤnften Auflage", "Vorrede", None, "head"),
                      29: ("Inhalt des gantzen Werckes", "Inhalt", None, "head"),
                      31: ("Vorbericht von der Welt⸗Weisheit", "Vorb.", 0, "top"),
                      264: ("Das erſte Regiſter, uͤber einige Kunſt⸗Woͤrter", "Register", None, "top"),
                      266: ("Das andere Regiſter, darinnen die vornehmſten Sachen zu finden", "Register", None, "head")},
               # the chapters, their first pages and titles as the book's contents list prints them
               # (scans 29-30, "Inhalt des gantzen Werckes"), transcribed from its page images
               chapters=[(11, "Cap. 1: Von den Begriffen der Dinge.", "Cap. 1", True),
                         (60, "Cap. 2: Von dem Gebrauche der Woͤrter.", "Cap. 2", True),
                         (68, "Cap. 3: Von den Saͤtzen.", "Cap. 3", True),
                         (79, "Cap. 4: Von den Schluͤſſen, und wie wir dadurch der Wahrheit verſichert werden.", "Cap. 4", True),
                         (110, "Cap. 5: Von der Erfahrung, und wie dadurch die Saͤtze gefunden werden.", "Cap. 5", True),
                         (126, "Cap. 6: Von Erfindung der Saͤtze aus den Erklaͤrungen und von Aufloͤſung der Aufgaben.", "Cap. 6", True),
                         (144, "Cap. 7: Von der Wiſſenſchaft, dem Glauben, den Meinungen und Irrthuͤmern.", "Cap. 7", True),
                         (153, "Cap. 8: Wie man ſo wohl ſeine eigene, als die Kraͤfte anderer unterſuchen ſoll, ob ſie zureichen eine Wahrheit zu unterſuchen, oder nicht.", "Cap. 8", True),
                         (162, "Cap. 9: Wie man ſowohl ſeine eigene, als fremde Erfindungen beurtheilen ſoll.", "Cap. 9", True),
                         (176, "Cap. 10: Wie man von Schriften urtheilen ſoll.", "Cap. 10", True),
                         (188, "Cap. 11: Wie man Buͤcher recht mit Nutzen leſen ſoll.", "Cap. 11", True),
                         (191, "Cap. 12: Von Erklaͤrung einer mit Verſtande geſchriebenen, und inſonderheit der Heil. Schrift.", "Cap. 12", True),
                         (197, "Cap. 13: Wie man einen uͤberfuͤhren ſoll.", "Cap. 13", True),
                         (206, "Cap. 14: Wie man einen widerlegen ſoll.", "Cap. 14", True),
                         (214, "Cap. 15: Wie man diſputiren ſoll.", "Cap. 15", True),
                         (217, "Cap. 16: Wie man eine Fertigkeit in Ausuͤbung der Logick erhalten ſoll.", "Cap. 16", True)],
               work="Vernünfftige Gedancken von den Kräfften des menschlichen Verstandes und ihrem richtigen Gebrauche in Erkäntniß der Wahrheit",
               edition="Halle: Renger, 1754 (“Neue Auflage hin und wieder vermehret”, its title page says)", lang="de"),
    "logica": dict(bsb="bsb10008294", shelf="4 Ph.sp. 204", glob="WOLFF_LOGICA", edges="fitted", idp="wolff-logica", first=11, last=890, front=8,
                   work="Philosophia rationalis sive Logica, methodo scientifica pertractata et ad usum scientiarum atque vitae aptata. Praemittitur discursus praeliminaris de philosophia in genere",
                   edition="Frankfurt and Leipzig: Renger, 1732 (“Editio altera emendatior”, its title page says)", lang="la",
                   parts={11: ("Dedicatio", "Dedicatio", None, "top"), 17: ("Præfatio", "Præfatio", None, "top")},
                   # (first page, section, cite label, whether the §§ start again at 1), from the
                   # book's Conspectus totius operis (scans 891-892), transcribed from its page images
                   chapters=[(1, "Diſcurſus præliminaris de Philoſophia in genere · Cap. 1: De triplici cognitione humana, hiſtorica, philoſophica & mathematica", "Disc. prael.", True),
                             (13, "Diſcurſus præliminaris · Cap. 2: De Philoſophia in genere", "Disc. prael.", False),
                             (28, "Diſcurſus præliminaris · Cap. 3: De Partibus philoſophiæ", "Disc. prael.", False),
                             (53, "Diſcurſus præliminaris · Cap. 4: De Methodo philoſophica", "Disc. prael.", False),
                             (71, "Diſcurſus præliminaris · Cap. 5: De Stylo philoſophico", "Disc. prael.", False),
                             (79, "Diſcurſus præliminaris · Cap. 6: De libertate philoſophandi", "Disc. prael.", False),
                             (107, "Philoſophia Rationalis ſive Logica · Prolegomena", "", True),
                             (125, "Pars I. ſive Theoretica · Sectio I. De Logicæ principiis · Cap. 1: De tribus mentis Operationibus in genere", "", False),
                             (142, "Pars I · Sectio I · Cap. 2: De notitiis quibusdam generalibus entis", "", False),
                             (155, "Pars I · Sectio II. De Notionibus in Specie · Cap. 1: De Notionum differentia formali", "", False),
                             (165, "Pars I · Sectio II · Cap. 2: De differentia notionum materiali", "", False),
                             (169, "Pars I · Sectio II · Cap. 3: De uſu Vocum ſive Terminorum circa notiones", "", False),
                             (189, "Pars I · Sectio II · Cap. 4: De Definitionibus", "", False),
                             (216, "Pars I · Sectio III. De Judicio in ſpecie · Cap. 1: De Judiciorum differentia", "", False),
                             (253, "Pars I · Sectio III · Cap. 2: De Diviſione Propoſitionum in Matheſi uſitata", "", False),
                             (262, "Pars I · Sectio III · Cap. 3: De variis judiciorum affectionibus", "", False),
                             (284, "Pars I · Sectio III · Cap. 4: De uſu vocum ſeu Terminorum circa judicia", "", False),
                             (289, "Pars I · Sectio IV. De Ratiocinatione ſeu Diſcurſu in ſpecie · Cap. 1: De Syllogiſmo in genere", "", False),
                             (302, "Pars I · Sectio IV · Cap. 2: De Figuris & Modis Syllogiſmorum", "", False),
                             (328, "Pars I · Sectio IV · Cap. 3: De Syllogiſmis compoſitis", "", False),
                             (340, "Pars I · Sectio IV · Cap. 4: De Syllogiſmis Crypticis", "", False),
                             (353, "Pars I · Sectio IV · Cap. 5: De Conſequentiis immediatis", "", False),
                             (363, "Pars I · Sectio IV · Cap. 6: De aliis nonnullis argumentandi generibus", "", False),
                             (376, "Pars I · Sectio IV · Cap. 7: De Ratiocinatione polyſyllogiſtica & mixtim compoſita", "", False),
                             (387, "Pars II. ſive Practica · Sectio I. De uſu Logicæ in vero a falſo, certoque ab incerto dijudicando · Cap. 1: De Veritatis criterio", "", False),
                             (412, "Pars II · Sectio I · Cap. 2: De Demonſtratione", "", False),
                             (430, "Pars II · Sectio I · Cap. 3: De certo, incerto atque probabili", "", False),
                             (444, "Pars II · Sectio I · Cap. 4: De ſcientia, opinione, fide atque errore", "", False),
                             (480, "Pars II · Sectio II. De uſu Logicæ in veritate inveſtiganda · Cap. 1: De experientia in genere", "", False),
                             (484, "Pars II · Sectio II · Cap. 2: De formandis judiciis intuitivis & notionibus a poſteriori", "", False),
                             (511, "Pars II · Sectio II · Cap. 3: De formandis judiciis diſcurſivis & definitionibus a priori", "", False),
                             (537, "Pars II · Sectio III. De uſu Logicæ in libris conſcribendis, dijudicandis & legendis · Cap. 1: De Librorum differentia", "", False),
                             (541, "Pars II · Sectio III · Cap. 2: De conſcribendis libris hiſtoricis", "", False),
                             (565, "Pars II · Sectio III · Cap. 3: De conſcribendis libris dogmaticis", "", False),
                             (579, "Pars II · Sectio III · Cap. 4: De dijudicandis libris hiſtoricis", "", False),
                             (585, "Pars II · Sectio III · Cap. 5: De dijudicandis libris dogmaticis", "", False),
                             (641, "Pars II · Sectio III · Cap. 6: De legendis libris tum hiſtoricis, tum dogmaticis", "", False),
                             (692, "Pars II · Sectio III · Cap. 7: De interpretatione Scripturæ ſacræ", "", False),
                             (706, "Pars II · Sectio IV. De uſu Logicæ in veritate cum aliis communicanda · Cap. 1: De modo alios convincendi", "", False),
                             (733, "Pars II · Sectio IV · Cap. 2: De modo alios refutandi", "", False),
                             (757, "Pars II · Sectio IV · Cap. 3: De modo ſeſe defendendi", "", False),
                             (771, "Pars II · Sectio IV · Cap. 4: De Methodo diſputandi", "", False),
                             (788, "Pars II · Sectio IV · Cap. 5: De Methodo docendi", "", False),
                             (798, "Pars II · Sectio V. De uſu Logicæ in æſtimandis viribus ad rerum cognitionem requiſitis · Cap. 1: De æſtimandis viribus ad verum inveniendum & dijudicandum requiſitis", "", False),
                             (815, "Pars II · Sectio V · Cap. 2: De æſtimandis viribus ad libros conſcribendos, dijudicandos & legendos neceſſariis", "", False),
                             (831, "Pars II · Sectio V · Cap. 3: De æſtimandis viribus in convincendo, controvertendo, diſputando & docendo", "", False),
                             (846, "Pars II · Sectio VI. De uſu Logicæ in praxi vitæ & methodo eam ſtudendi · Cap. 1: De uſu Logicæ in praxi vitæ", "", False),
                             (857, "Pars II · Sectio VI · Cap. 2: De methodo Logicam diſcendi", "", False)]),
}[BOOK]
B = CONF["bsb"]
canv = json.load(open(os.path.join(W, "canvases.json")))
COLS = json.load(open(os.path.join(W, "tsv", "columns.json")))
MARG = json.load(open(os.path.join(W, "tsv", "margins.json")))
_mn = os.path.join(W, "tsv", "margins_narrow.json")
MARGN = json.load(open(_mn)) if os.path.exists(_mn) else {}
_gp = os.path.join(W, "tsv", "gaps.json")
GAPS = json.load(open(_gp)) if os.path.exists(_gp) else {}
_gx = os.path.join(W, "tsv", "gutters.json")
GUTTERS = json.load(open(_gx)) if os.path.exists(_gx) else {}
_fx = os.path.join(W, "tsv", "colfix.json")
COLFIX = json.load(open(_fx)) if os.path.exists(_fx) else {}
MODELS = ["frak2021", "german_print"]
HY = ("⸗", "-", "=", "¬")
report = Counter(); notes_out = defaultdict(list)


def tsv(m, n, kind=None):
    if kind is None: return load_tsv(os.path.join(W, "tsv", m, "%s_%05d.tsv" % (B, n)))
    suf, side = kind
    p = os.path.join(W, "tsv", m + suf, "%s_%05d_%s.tsv" % (B, n, side))
    off = {"-b": COLS, "-m": MARG, "-mn": MARGN}[suf]["%05d_%s" % (n, side)]
    ws = load_tsv(p)
    for w in ws:
        w["x0"] += off[0]; w["x1"] += off[0]; w["y0"] += off[1]; w["y1"] += off[1]
    return ws


def label_page(n):
    m = re.match(r"\s*(\d+)\s*\(", canv[n - 1]["label"] or "")
    return m.group(1) if m else None


def body_words(n):
    """The page's body readings: the text column read on its own where there is one."""
    if "%05d_body" % n in COLS:
        return tsv(MODELS[0], n, ("-b", "body")), tsv(MODELS[1], n, ("-b", "body")), True
    return tsv(MODELS[0], n), tsv(MODELS[1], n), False


# the clean texts of the period in the repository, to break ties between readings
ROOT = os.environ.get("KANTLAB_ROOT") or os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
LEX = build_lexicon(CONF["lang"], ROOT)
print("lexicon: %d word forms from the repository's clean %s texts" % (len(LEX), CONF["lang"]))

# ── pass 1: the book's own vocabulary, from every spot where the two readings agreed ──────────
vocab = Counter()
for c in canv:
    n = c["n"]
    A, Bw, crop = body_words(n)
    for w in A + Bw: w["reg"] = "body"
    vocab.update(agreed_tokens(A, Bw))
    for side in ("ml", "mr"):
        if "%05d_%s" % (n, side) in MARG:
            vocab.update(agreed_tokens(tsv(MODELS[0], n, ("-m", side)), tsv(MODELS[1], n, ("-m", side))))

first = CONF["first"] or 1
last = CONF["last"] or len(canv)


EDGES = {}


def page(n):
    """The page's body lines and margin notes, merged."""
    A, Bw, crop = body_words(n)
    if crop:
        # four readings of the text column: both models, on the column cropped and on the whole page
        Af, Bf = tsv(MODELS[0], n), tsv(MODELS[1], n)
        Hf = body_height(Af + Bf)
        col = column(Af, Hf) or column(Bf, Hf)
        if str(n) in COLFIX: col = (COLFIX[str(n)][0], COLFIX[str(n)][1], 0)
        place(Af, col, Hf); place(Bf, col, Hf)
        for w in A + Bw: w["reg"] = "body"
        # the text column's edges, sloping with the scan; on a side with margin notes, a word whose
        # middle stands beyond the edge is the note's, not the text's
        for w in Af: w["src"] = 0
        for w in Bf: w["src"] = 1
        g = GUTTERS.get(str(n), {})
        eL, eR = edges(Af + Bf, col[0], col[1], Hf)
        EDGES[n] = (eL, eR, Hf)
        def inside(w):
            c, y = (w["x0"] + w["x1"]) / 2, (w["y0"] + w["y1"]) / 2
            if CONF["edges"] == "gutter":
                # the German Logik: its notes stand so close to the text that some of their words
                # pass for text, and pull a fitted edge out; the gutters measured per page hold
                lo = g["ml"]["split"] if "ml" in g else -1e9
                hi = g["mr"]["split"] if "mr" in g else 1e9
                return (w["reg"] == "body" or w in A or w in Bw) and lo < c < hi
            lo = eL(y) - (0.06 if "ml" in g else 1.0) * Hf
            hi = eR(y) + (0.06 if "mr" in g else 1.0) * Hf
            return lo < c < hi
        # a word of the column crop cut off at the crop's edge, where the text runs on beyond it
        # (a skewed page), does not vote: the whole-page readings have the whole word
        cx0 = COLS["%05d_body" % n][0]
        def whole(w):
            if CONF["edges"] == "gutter": return True
            y = (w["y0"] + w["y1"]) / 2
            return not (w["x0"] < cx0 + 0.15 * Hf and eL(y) < cx0 + 0.1 * Hf)
        kept, H, st = merge_n([[w for w in A if inside(w) and whole(w)], [w for w in Bw if inside(w) and whole(w)],
                               [w for w in Af if inside(w)], [w for w in Bf if inside(w)]], vocab, lex=LEX)
    else:
        kept, col, H, st = merge(A, Bw, vocab, lex=LEX)
        kept = [w for w in kept if w["reg"] == "body"]
    report.update({"how:" + k: v for k, v in st.items()})
    lines = to_lines(kept, H)
    # §'s headings found only by reading the gaps between lines on their own (ocr_gaps.py): kept
    # where they read as a heading and no line already stands there
    k = 0
    while "%05d_g%d" % (n, k) in GAPS:
        key = "%05d_g%d" % (n, k); off = GAPS[key]; k += 1
        rd = []
        for m in MODELS:
            ws = load_tsv(os.path.join(W, "tsv", m + "-g", "%s_%s.tsv" % (B, key)))
            for w in ws:                     # read at 3x the scan, placed at 2x
                for a in ("x0", "x1"): w[a] = off[0] + w[a] * 2 / 3
                for a in ("y0", "y1"): w[a] = off[1] + w[a] * 2 / 3
            rd.append(ws)
        km, _, Hg, _ = merge(rd[0], rd[1], vocab, reg="body", lex=LEX)
        for gl in to_lines(km, H):
            t = text_of(gl)
            if not SECT_LINE_LA.fullmatch(t) and not re.fullmatch(r"\(?[§5698SFHGg]\.?\s*[0-9IlOr]{1,4}[.,]?", t): continue
            if any(min(gl["y1"], x["y1"]) - max(gl["y0"], x["y0"]) > 0.3 * H for x in lines): continue
            lines.append(gl); report["§ headings read only in a gap between lines"] += 1
    lines.sort(key=lambda l: l["yc"])
    notes = []
    for side in ("ml", "mr"):
        if "%05d_%s" % (n, side) not in MARG: continue
        sp = GUTTERS.get(str(n), {}).get(side, {}).get("split")
        def beside(w):                       # a note's word, not the start or end of a text line
            if CONF["edges"] == "gutter":
                if sp is None: return True
                c = (w["x0"] + w["x1"]) / 2
                return c < sp if side == "ml" else c > sp
            if n not in EDGES: return True
            eL, eR, He = EDGES[n]
            c, y = (w["x0"] + w["x1"]) / 2, (w["y0"] + w["y1"]) / 2
            return c < eL(y) - 0.06 * He if side == "ml" else c > eR(y) + 0.06 * He
        # the notes read on two crops: one reaching a little into the text (its words beyond the
        # split dropped), and, where there is one, one stopping just short of it. Each clips or
        # fuses different words; merged by vote, the lexicon breaking ties
        rds = [[w for w in tsv(m, n, ("-m", side)) if beside(w)] for m in MODELS]
        if "%05d_%s" % (n, side) in MARGN:
            rds += [tsv(m, n, ("-mn", side)) for m in MODELS]
            for r in rds:
                for w in r: w["reg"] = side
            km, Hm, stm = merge_n(rds, vocab, lex=LEX)
        else:
            km, _, Hm, stm = merge(rds[0], rds[1], vocab, reg=side, lex=LEX)
        report.update({"mhow:" + k: v for k, v in stm.items()})
        ml = [l for l in to_lines(km, Hm) if real_line(l)]
        cur = None
        for l in ml:
            if cur and l["y0"] - cur[-1]["y1"] < 0.9 * Hm: cur.append(l)
            else:
                cur = [l]; notes.append(cur)
    L, R = (col[0], col[1]) if col else (min((l["x0"] for l in lines), default=0), max((l["x1"] for l in lines), default=1))
    return {"n": n, "lines": lines, "notes": notes, "L": L, "R": R, "H": H}


# a line that is only a § number, its sign misread or lost: "§. 15.", "—522.", "86. 5.", "C. 6."
SECT_LINE_LA = re.compile(r"[^\w§]{0,3}(?:[§\w]{1,3}[.,]?\s*)?([0-9IlO]{2,4}|[0-9])[.,]?[^\w]{0,2}")


def real_line(l):
    """A line with at least one word the book knows, or read with some confidence: not the noise an
    ornament, a stain or the binding makes. In the Logica a line that is only a number (with the §
    sign misread or lost: "—522.") is a §'s heading, and is kept."""
    if BOOK == "logica" and SECT_LINE_LA.fullmatch(" ".join(w["t"] for w in l["w"])): return True
    toks = [w for w in l["w"] if len(LETTER.findall(w["t"])) >= 2]
    if not toks:
        return any(re.search(r"\d", w["t"]) and w["c"] > 70 for w in l["w"]) or any(SECT.match(w["t"]) for w in l["w"])
    known = sum(1 for w in toks if vocab.get(bare(w["t"]), 0) >= 2)
    return known > 0 or statistics.mean(w["c"] for w in toks) >= 75


def text_of(l):
    return " ".join(w["t"] for w in l["w"])


def hkey(t):
    t = re.sub(r"[^a-zäöüſ]", "", t.lower().replace("ſ", "s"))
    return t[:14]


PAGES = [page(n) for n in range(first, last + 1)]

# ── running heads: the first line of a page, in a form that recurs, or carrying the page number ──
CAPLINE = re.compile(r"(?:\S{1,4}\s+)?Das(?:\s+.{0,8}Cap\s*i?tel[.,]?)?|(?:\S{1,4}\s+)?Das\s+\S{1,4}\s*[.,]?")
firsts = Counter(hkey(text_of(p["lines"][0])) for p in PAGES if p["lines"])
for p in PAGES:
    ls = [l for l in p["lines"] if real_line(l)]
    report["lines dropped as noise"] += len(p["lines"]) - len(ls)
    p["head"] = None
    if ls:
        t = text_of(ls[0]); lp = label_page(p["n"])
        toks = t.split()
        num_end = lp and (toks[0].strip(".,") == lp or toks[-1].strip(".,") == lp)
        opening_page = p["n"] in CONF.get("parts", {}) or any(str(c[0]) == lp for c in CONF.get("chapters", []))
        # on a page where a chapter opens mid-page, its first line can be the running head naming the
        # new chapter, in body type, with the chapter's own heading further down
        rh_named = (opening_page and CAPLINE.fullmatch(t) and ls[0]["h"] < 1.12 * p["H"]
                    and any(CAPLINE.fullmatch(text_of(x)) or x["h"] > 1.45 * p["H"] for x in ls[1:]))
        if ((firsts[hkey(t)] >= 3 and len(hkey(t)) >= 4) and not opening_page) or num_end or rh_named:
            p["head"] = t; ls = ls[1:]
            report["running heads"] += 1
            nums = [x.strip(".,") for x in (toks[0], toks[-1]) if re.fullmatch(r"\d+[.,]?", x)]
            if lp and nums: report["head number agrees with Munich's page" if lp in nums else "head number differs"] += 1
    # catchword, and signature: a short last line that starts right of the column's middle
    p["foot"] = None
    if ls:
        l = ls[-1]
        if len(l["w"]) <= 4 and l["x0"] > p["L"] + 0.3 * (p["R"] - p["L"]):
            p["foot"] = text_of(l); ls = ls[:-1]; report["catchword/signature lines"] += 1
    p["body"] = ls

# catchwords against the next page's first word, a check on both
for a, b in zip(PAGES, PAGES[1:]):
    if a["foot"] and b["body"]:
        cw = a["foot"].split()[-1]; fw = b["body"][0]["w"][0]["t"]
        report["catchword matches next page" if bare(cw) and bare(cw) == bare(fw) else "catchword differs"] += 1

# ── passages ────────────────────────────────────────────────────────────────────────────────
PASS = []
state = {"sec": "", "cap": None, "citeL": None, "capN": None, "par": None, "parInf": False, "titles": [], "inTitle": None,
         "run": -1, "si": None}


def pg_of(n):
    lp = label_page(n)
    if lp: return lp
    first_num = next(c["n"] for c in canv if label_page(c["n"]))
    if CONF["front"] is not None and n < first_num: return "[%d]" % (n - CONF["front"])
    # unnumbered back matter: the count goes on from the last numbered page
    k = n
    while k > 1 and not label_page(k): k -= 1
    return "[%d]" % (int(label_page(k)) + n - k) if label_page(k) else None


def new_passage(kind, n):
    if kind == "p" and state.get("si") is not None: STARTS[state["si"]]["used"] = True
    p = {"id": None, "kind": kind, "sec": state["sec"], "cap": state["cap"], "citeL": state["citeL"], "_si": state.get("si"), "pg": pg_of(n), "scan": n, "text": "", "alt": [], "pb": []}
    PASS.append(p)
    return p


def add_line(p, l, n, head=False):
    """Append a line's words to passage p, rejoining a broken word, and record disagreements."""
    t = p["text"]
    words = l["w"]
    first = words[0]["t"]
    if t:
        if t.endswith(HY) and not t.endswith(" " + t[-1]):
            if first[:1].islower(): t = t[:-1]                    # a word broken at the line's end
            # before a capital the hyphen stays: a compound (Grund⸗Urtheil)
        else:
            t += "\n" if head else " "
    if p["pg"] != pg_of(n) and not any(x[1] == pg_of(n) for x in p["pb"]) and pg_of(n) is not None:
        p["pb"].append([len(t), pg_of(n)]); p["pgEnd"] = pg_of(n)
    for i, w in enumerate(words):
        if i: t += " "
        if w["how"] not in ("same",) and w["span"]:
            span_txt = " ".join(x["t"] for x in words[i:i + w["span"]])
            votes, of = w.get("votes"), w.get("of")
            if votes is None: votes, of = 1, 2            # the margin notes: two readings
            if w["how"] in ("conf", "vocab", "split", "sect", "most", "lex"):
                p["alt"].append([len(t), len(span_txt), w["other"] or "", votes, of])
            elif w["how"] in ("only", "only§"):
                p["alt"].append([len(t), len(span_txt), "", votes, of])
        t += w["t"]
    p["text"] = t


NUMWORD = re.compile(r"^\(?([0-9Il]{1,4})[.,:]?\)?$")


def par_start(l, due):
    """A § opening this line: (number, whether the § sign was read) or None. The sign may be read
    as a digit or letter (5. 6. S. H. F.), or not at all; then the number must be the one due."""
    ws = l["w"]
    if len(ws) < 2: return None
    a, b = ws[0]["t"], ws[1]["t"]
    m = re.fullmatch(r"\(?§\.?(\d{1,3})\.?", a)          # §.4. read as one token
    if m: return int(m.group(1)), True
    if a.startswith("("): return None                  # (§. 2.): a cross-reference
    if SECT.match(a) or re.fullmatch(r"[5698SFHGsgſK$]\.?|[A-Z§$5-9]{1,2}[A-Za-z5-9]?\.", a):
        m = NUMWORD.match(b)
        if m:
            d = int(m.group(1).replace("I", "1").replace("l", "1"))
            if SECT.match(a) or d == due: return d, SECT.match(a) is not None
    m = NUMWORD.match(a)
    if m and re.match(r"[A-ZÄÖÜ]", b):
        d = int(m.group(1).replace("I", "1").replace("l", "1"))
        if d == due: return d, False
    return None



def name_section(h):
    """A heading that opens a part of the front or back matter names it (the German Logik: the
    Vorrede and its Erinnerungen, the contents, the Vorbericht, the registers). Chapters are found
    by their §§ starting again at 1 (new_chapter)."""
    t = " ".join(h["text"].split())
    k = t.lower().replace("ſ", "s")
    if BOOK == "dl":
        if state["capN"] is None or state["cap"] == "Register":
            if "vorrede" in k and len(k) < 30: state.update(sec="Vorrede", cap="Vorrede", par=None)
            elif "erinnerung" in k: state.update(sec=t, cap="Vorrede", par=None)
            elif "inhalt" in k: state.update(sec=t, cap="Inhalt", par=None)
            else: return
        elif state["cap"] == "Register": return
        else:
            state["titles"].append(h)                    # perhaps a chapter's title: see new_chapter
            return
    h["sec"] = state["sec"]


def new_chapter(n, read_one, head=None):
    """A new chapter: its heading line ("Das 5. Capitel.") was read, or the §§ start again at 1.
    Numbered in order, and checked against the running heads afterwards. Its title is the heading
    that follows the chapter line, or, found by its §§, the heading just before."""
    state["capN"] += 1
    c = state["capN"]
    if head is not None:
        state.update(cap=c, titles=[], par=0, inTitle=head, sec="Cap. %d" % c)
        head["sec"] = state["sec"]; head["cap"] = c
        report["chapters, by their heading line"] += 1
        return
    ts = [h for h in state["titles"] if h["scan"] >= n - 1]
    title = " ".join(" ".join(h["text"].split()) for h in ts)
    state["sec"] = ("Cap. %d" % c) + (": " + title if title else "")
    for h in ts: h["sec"] = state["sec"]; h["cap"] = c
    state.update(cap=c, titles=[])
    report["chapters, by § 1" + ("" if read_one else " (not read: by a § number falling back)")] += 1


def num_of(x):
    d = re.sub(r"[^\dIlO]", "", x.replace("§", ""))
    d = d.replace("I", "1").replace("l", "1").replace("O", "0")
    return int(d) if d.isdigit() and len(d) <= 4 and not re.search(r"[A-Za-z]", re.sub(r"[IlO]", "", x)) else None


STARTS = []        # every § opening: {num as read or None, run}


def record_start(num):
    """A § opens here (its heading, or a paragraph beginning "§. 5."). The first opening of a run
    may already stand open, implicitly, from the chapter's start: then this fills it in."""
    cur_s = STARTS[state["si"]] if state.get("si") is not None else None
    if cur_s is not None and cur_s.get("implicit") and not cur_s.get("used") and cur_s["num"] is None:
        cur_s["num"] = num
    else:
        STARTS.append({"num": num, "run": state["run"]})
        state["si"] = len(STARTS) - 1
    take_par(num)


def take_par(num, clean=True):
    """The § a heading or a paragraph opens. A number read in sequence, or a step or two ahead (a
    heading not read), is taken as read; otherwise the § is the one due, and is marked as inferred
    (shown with a query)."""
    due = (state["par"] or 0) + 1
    if num is not None and due <= num <= due + 2:
        state["par"] = num; state["parInf"] = False
    else:
        state["par"] = due; state["parInf"] = True


def emit_note(note, n):
    p = new_passage("margin", n)
    for l in note: add_line(p, l, n)
    p["_si"] = state.get("si"); p["cap"] = state["cap"]; p["citeL"] = state["citeL"]; p["sec"] = state["sec"]
    report["margin notes"] += 1


prev_body = None   # (line, page, kind) of the last body line, for paragraph joins across pages
cur = None
for P_ in PAGES:
    n, L, R, H = P_["n"], P_["L"], P_["R"], P_["H"]
    body = P_["body"]
    # where a part of the book or a chapter begins: on the page CONF names, at its top or at the
    # first heading on it
    opening = None
    if n in CONF.get("parts", {}): opening = CONF["parts"][n]
    for k, (pg, title, lab, reset) in enumerate(CONF.get("chapters", [])):
        if label_page(n) == str(pg): opening = (title, lab, k + 1 if BOOK == "dl" else None, "head", reset)
    def open_part():
        sec, cap, capN, mode = opening[:4]
        reset = opening[4] if len(opening) > 4 else capN is not None
        state.update(sec=sec, cap=(capN if capN is not None else cap), citeL=cap, titles=[], inTitle=None)
        if reset:
            state["par"] = 0; state["run"] += 1
            STARTS.append({"num": None, "run": state["run"], "implicit": True}); state["si"] = len(STARTS) - 1
        elif opening[1] in ("Vorrede", "Register", "Inhalt", "Dedicatio", "Præfatio") or cap is None:
            state["par"] = None; state["si"] = None
        if capN is not None: state["capN"] = capN
        report["parts and chapters opened"] += 1
    if opening and opening[3] == "top":
        open_part(); opening = None; prev_body = None
    anchors = defaultdict(list)
    for note in P_["notes"]:
        y = note[0]["yc"]
        k = min(range(len(body)), key=lambda i: abs(body[i]["yc"] - y)) if body else -1
        anchors[k].append(note)
    if not body:
        for note in anchors.pop(-1, []): emit_note(note, n)
    for i, l in enumerate(body):
        t = text_of(l)
        centred = l["x0"] > L + 0.12 * (R - L) and l["x1"] < R - 0.12 * (R - L)
        letters = len(LETTER.findall(t))
        sect_line = bool(re.fullmatch(r"\(?[§5698SFHG]\.?\s*[0-9Il]{1,4}\.?", t)) and centred
        inset = l["x0"] > L + 0.04 * (R - L) and l["x1"] < R - 0.04 * (R - L)
        if opening and ((inset and l["h"] > 1.2 * H and letters >= 3) or (l["h"] > 1.45 * H and letters >= 6)
                        or (centred and CAPLINE.fullmatch(t)) or sect_line):
            open_part(); opening = None
            if not sect_line:
                cur = new_passage("head", n)
                add_line(cur, l, n, head=True)
                state["inTitle"] = cur
                prev_body = (l, n, "head")
                anchors[i + 1].extend(anchors.pop(i, []))
                continue
        if state["inTitle"] is not None:
            inset = l["x0"] > L + 0.04 * (R - L) and l["x1"] < R - 0.04 * (R - L)
            if (inset or l["h"] > 1.15 * H) and not sect_line:
                add_line(state["inTitle"], l, n, head=True)
                prev_body = (l, n, "head")
                anchors[i + 1].extend(anchors.pop(i, []))
                continue
            state["inTitle"] = None
        tall = l["h"] > 1.3 * H and (centred or l["h"] > 1.55 * H) and (len(l["w"]) >= 2 or (centred and letters >= 4))
        sect_head = (bool(re.fullmatch(r"\(?[§5698SFHGg]\.?\s*[0-9IlOr]{1,4}[.,]?", t)) or (BOOK == "logica" and SECT_LINE_LA.fullmatch(t))) and centred and state["par"] is not None
        if tall or sect_head:
            if sect_head or cur is None or cur["kind"] != "head" or prev_body is None or prev_body[2] != "head" or cur.get("sect"):
                cur = new_passage("head", n)
                cur["sect"] = sect_head
            add_line(cur, l, n, head=True)
            prev_body = (l, n, "head")
            if sect_head:
                record_start(num_of(t.split()[-1]))
                cur["_si"] = state["si"]; cur["sec"] = state["sec"]
            elif BOOK != "dl":
                name_section(cur)
            anchors[i + 1].extend(anchors.pop(i, []))      # a note beside a heading goes with what follows
            continue
        due = (state["par"] or 0) + 1 if state["par"] is not None else None
        ps = par_start(l, due) if BOOK == "dl" and state["par"] is not None else None
        # indentation against the neighbouring lines: the scans are skewed, and a misread first
        # token's box can reach into the margin
        near = [body[j]["x0"] for j in range(max(0, i - 4), min(len(body), i + 5)) if j != i and body[j]["h"] <= 1.25 * H]
        indent = l["x0"] - (statistics.median(near) if len(near) >= 3 else L)
        if ps is not None and len(l["w"]) > 1:
            indent = max(indent, l["w"][1]["x0"] - (statistics.median(near) if len(near) >= 3 else L) - 2.0 * H)
        pl = prev_body[0] if prev_body else None
        prev_short = False
        if prev_body and prev_body[2] == "p":
            pP = P_ if prev_body[1] == n else next(x for x in PAGES if x["n"] == prev_body[1])
            prev_short = pl["x1"] < pP["R"] - 1.2 * pP["H"]
        start = (cur is None or prev_body is None or prev_body[2] != "p"
                 or (ps is not None and (indent > 0.4 * H or prev_short))
                 or (indent > 0.8 * H and prev_short))
        here = anchors.pop(i, [])
        if start:
            if ps is not None:
                num, clean = ps
                if not clean: report["§ sign misread, number read"] += 1
                record_start(num)
            for note in here: emit_note(note, n)          # a note beside a paragraph's first line goes before it
            cur = new_passage("p", n)
            cur["_si"] = state.get("si"); cur["cap"] = state["cap"]; cur["citeL"] = state["citeL"]; cur["sec"] = state["sec"]
            add_line(cur, l, n)
        else:
            add_line(cur, l, n)
            for note in here: emit_note(note, n)          # beside a later line: after the paragraph
        prev_body = (l, n, "p")
    for k in sorted(anchors):
        for note in anchors[k]: emit_note(note, n)

# ── § numbers: in each run, the longest sequence of numbers read in increasing order is taken as
# read; the openings between are numbered on from it, and marked as inferred ─────────────────────
import bisect
final = {}
for run in sorted(set(x["run"] for x in STARTS)):
    idx = [i for i, x in enumerate(STARTS) if x["run"] == run]
    nums = [STARTS[i]["num"] for i in idx]
    # longest strictly increasing subsequence of the numbers read (patience sorting)
    tails, tail_i, prev = [], [], [None] * len(nums)
    for k, v in enumerate(nums):
        if v is None: continue
        j = bisect.bisect_left(tails, v)
        if j == len(tails): tails.append(v); tail_i.append(k)
        else: tails[j] = v; tail_i[j] = k
        prev[k] = tail_i[j - 1] if j else None
    lis = []
    k = tail_i[-1] if tail_i else None
    while k is not None: lis.append(k); k = prev[k]
    lis = set(lis)
    last_n = 0
    for k in range(len(nums)):
        if k in lis:
            final[idx[k]] = (nums[k], False); last_n = nums[k]; report["§ numbers as read"] += 1
        else:
            nxt = min((nums[j] for j in lis if j > k), default=None)
            n_ = last_n + 1 if nxt is None or last_n + 1 < nxt else last_n
            final[idx[k]] = (max(n_, 1), True); last_n = max(n_, 1)
            report["§ numbers inferred from their neighbours (shown with a query)"] += 1
for p in PASS:
    si = p.pop("_si", None)
    p.pop("par", None); p.pop("parInf", None)
    if si is None or (p["kind"] == "head" and not p.get("sect")): continue
    p["par"], inf = final[si]
    if inf: p["parInf"] = True

heads = [i for i, p in enumerate(PASS) if p["kind"] == "head" and p.get("sect") and p.get("par")]
for a, b in zip(heads, heads[1:]):
    na, nb = PASS[a]["par"], PASS[b]["par"]
    if nb - na > 1 and nb - na < 12:
        # every passage between the two headings read: the missing § begins somewhere in them, and
        # where its heading fell at a page's turn its text has run on into the paragraph before
        for p in PASS[a + 1:b]:
            if p.get("par") != na: continue
            p["parTo"] = nb - 1; p["parInf"] = True
        report["§§ whose heading was not read: passages cited with a range"] += nb - na - 1

# ── ids, cites, and the file ─────────────────────────────────────────────────────────────────
out = []
state_cap = None
for p in PASS:
    if not p["text"].strip(): continue
    p["id"] = "%s-%04d" % (CONF["idp"], len(out) + 1)
    out.append(p)
# the chapters against the running heads, which print the chapter's number on every verso
capOf = defaultdict(set)
for p in out:
    if isinstance(p.get("cap"), int): capOf[p["scan"]].add(p["cap"])
for P_ in PAGES:
    h = P_["head"] or ""
    m = re.search(r"Das\s+(\d{1,2})\s*[.,]?\s*(?:—\s*)?C", h)
    if m and capOf.get(P_["n"]):
        ok = int(m.group(1)) in capOf[P_["n"]]
        report["running head's chapter number agrees" if ok else "running head's chapter number differs"] += 1
        if not ok: print("  running head %r on scan %d, chapter here %s" % (h, P_["n"], sorted(capOf[P_["n"]])))


def cite(p):
    pg = p["pg"]; end = p.get("pgEnd")
    pages = ("p. " + pg + ("–" + end if end and end != pg else "")) if pg else ""
    where = p.get("citeL") or ""
    par = p.get("par")
    if par and where not in ("Vorrede", "Register", "Inhalt", "Dedicatio", "Præfatio"):
        rng = "–%d" % p["parTo"] if p.get("parTo") else ""
        where = (where + " " if where else "") + "§ %d%s%s" % (par, rng, "?" if p.get("parInf") else "")
    return ", ".join(x for x in (where, pages) if x)


for p in out:
    p["cite"] = cite(p)
    for k in ("sect", "cap", "citeL"):
        p.pop(k, None)
    if not p["alt"]: p.pop("alt")
    if not p["pb"]: p.pop("pb")
    if p.get("par") is None: p.pop("par", None)
    if not p.get("parInf"): p.pop("parInf", None)

words = sum(len(p["text"].split()) for p in out)
alts = sum(len(p.get("alt", [])) for p in out)
print("passages", len(out), "words", words, "spots where the readings disagreed", alts)
for k, v in sorted(report.items()): print("  %-66s %d" % (k, v))

meta = {
    "work": CONF["work"], "edition": CONF["edition"], "lang": CONF["lang"],
    "source": "Bayerische Staatsbibliothek München, %s, digitised by the Münchener DigitalisierungsZentrum: https://www.digitale-sammlungen.de/en/view/%s" % (CONF["shelf"], B),
    "rights": "The print is in the public domain. Munich's scans carry the rights statement NoC-NC 1.0 (no copyright; non-commercial use only): https://rightsstatements.org/vocab/NoC-NC/1.0/. This text is the seminar's own machine reading of them, for non-commercial scholarly use.",
    "scan": {"item": B, "url": "https://www.digitale-sammlungen.de/en/view/{item}?page={n}"},
    "ocr": "Each page read four times by Tesseract 5 (the models frak2021 and german_print, trained on historical print), on the whole page and on the text column cropped, and merged word by word by vote; the margin notes read twice, on their own. Not corrected by hand.",
    "alt": "Where the readings disagreed: [offset, length, the reading not chosen, how many readings gave the text kept, how many readings there were]; an empty reading means the others had nothing there.",
}
hdr = """/* %s
   %s, for the Logic Portal. GENERATED by logic-portal/wolff/wolff_ocr.py from Munich's page
   images; do not edit by hand. MACHINE READING, NOT CORRECTED: check a quotation against the page
   image (each passage's `scan` is its page in Munich's viewer).

   Shape: the portal's `passages` shape (see ../catalogue.js), with
     kind   head | p | margin (Wolff's marginal summary, set before the paragraph it stands beside)
     sec    the part or chapter, its title as the book's own table of contents prints it
     pg, pgEnd, pb   the print's pages ([n]: an unnumbered page, counted from the title page);
                     pb: [[offset, page]] where a page begins inside the passage
     par    the § (in the German Logik, numbered within each chapter); parInf: true where the
            number was not read cleanly and follows from the §§ around it (cited with a query);
            parTo: where a §'s heading was not read at all, the last § the passage may belong to
            (cited as a range with a query, § 14–15?)
     scan   the page in Munich's scan (meta.scan.url)
     alt    where the readings disagreed: [[offset, length, the reading not chosen, readings
            that gave the text kept, readings in all]]; the portal marks the spots where no
            majority decided
   Spelling, long s (ſ) and punctuation are as read. The e written over a vowel is printed as the
   umlaut (aͤ as ä), the Fraktur hyphen ⸗ as -, and ꝛc. as etc., as in the portal's 1781 Critique:
   the portal's typefaces have no glyph for them. */
""" % (CONF["work"], CONF["edition"])
with open(OUT, "w", encoding="utf-8") as f:
    f.write(hdr)
    f.write("const %s = {\n  meta: %s,\n  passages: [\n" % (CONF["glob"], json.dumps(meta, ensure_ascii=False)))
    for i, p in enumerate(out):
        p.pop("sect", None)
        keep = {k: p[k] for k in ("id", "kind", "sec", "par", "parTo", "parInf", "cite", "pg", "pgEnd", "pb", "scan", "text", "alt") if k in p}
        if "sec" in keep: keep["sec"] = printable(keep["sec"])   # the titles transcribed from the contents list too
        f.write("    " + json.dumps(keep, ensure_ascii=False, separators=(",", ":")) + ("," if i < len(out) - 1 else "") + "\n")
    f.write("  ],\n};\n")
if os.environ.get("WOLFF_JSON"): json.dump(out, open(OUT + ".json", "w"), ensure_ascii=False, indent=0)
