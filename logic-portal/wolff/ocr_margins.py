"""ocr_margins.py BSBID WORKDIR [columns | narrow]

With "columns", the text column itself instead: cropped from just outside the column's edges, and
read as one column, so that a margin note cannot run into a text line and the lines beside an
ornamental initial are not taken for a picture (Tesseract's page layout skips them). Written to
tsv/<model>-b/BSBID_NNNNN_body.tsv, offsets in tsv/columns.json.

Without it, the margin notes (written to tsv/<model>-m/, margins.json); with "narrow", the
margin notes again on a crop stopping just short of the text (tsv/<model>-mn/,
margins_narrow.json). The default crop reaches a little into the text; wolff_ocr.py drops its
words beyond the gutter and merges the two crops' readings by vote: each clips or fuses
different words.

The marginal notes, read again on their own. Reading a whole page, Tesseract runs a margin note
into the text line beside it and reads the note's small type badly. So, for each page whose
full-page readings found words in a margin, the margin column (from the page's edge to just short
of the text column found by merge_pages.column) is cropped from the page image, upscaled 2x and
read by both models as a single column (--psm 4):

  WORKDIR/tsv/<model>-m/BSBID_NNNNN_<side>.tsv   side: ml (left) or mr (right)
  WORKDIR/tsv/margins.json   { "NNNNN_side": [x, y] }: where the crop stands, in the 2x page's pixels"""
import json, os, subprocess, sys
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, os.path.dirname(__file__))
from merge_pages import load_tsv, body_height, column, place, LETTER

B, W = sys.argv[1], sys.argv[2]
COLS = len(sys.argv) > 3 and sys.argv[3] == "columns"
NARROW = len(sys.argv) > 3 and sys.argv[3] == "narrow"
TESS = os.environ.get("TESSDATA")
MODELS = ["frak2021", "german_print"]
canv = json.load(open(os.path.join(W, "canvases.json")))
SUF = "-b" if COLS else "-mn" if NARROW else "-m"
for m in MODELS: os.makedirs(os.path.join(W, "tsv", m + SUF), exist_ok=True)
OFF = os.path.join(W, "tsv", "columns.json" if COLS else "margins_narrow.json" if NARROW else "margins.json")
offs = json.load(open(OFF)) if os.path.exists(OFF) else {}
FIX = os.path.join(W, "tsv", "colfix.json")
colfix = json.load(open(FIX)) if os.path.exists(FIX) else {}
GUT = {}


def gutters(n):
    """The page's text column and, on each side with margin notes, where to split note from text:
    just short of where the text lines begin (or just past where they end), as the full-page
    readings place them. The gutter is often a few pixels wide, and the notes run up to it; a
    split any further in clips their letters, any further out takes a note's word into the text."""
    A = load_tsv(os.path.join(W, "tsv", "frak2021", "%s_%05d.tsv" % (B, n)))
    Bw = load_tsv(os.path.join(W, "tsv", "german_print", "%s_%05d.tsv" % (B, n)))
    H = body_height(A + Bw)
    col = column(A, H) or column(Bw, H)
    if str(n) in colfix: col = (colfix[str(n)][0], colfix[str(n)][1], colfix[str(n)][1] - colfix[str(n)][0])
    if not col: return None
    place(A, col, H); place(Bw, col, H)
    L, R, _ = col
    starts, ends = [], []
    lines = {}
    for w in A + Bw:
        if w["reg"] == "body" and not w.get("fused") and w["c"] > 50 and LETTER.search(w["t"]):
            lines.setdefault((id(A) if w in A else id(Bw), w["ln"]), []).append(w)
    for ws in lines.values():
        x0 = min(w["x0"] for w in ws); x1 = max(w["x1"] for w in ws)
        if abs(x0 - L) < 0.6 * H: starts.append(x0)
        if abs(x1 - R) < 0.8 * H: ends.append(x1)
    starts.sort(); ends.sort()
    bl = starts[len(starts) // 10] if starts else L
    br = ends[(len(ends) * 9) // 10] if ends else R
    g = {"L": L, "R": R, "H": H}
    for side in ("ml", "mr"):
        ws = [w for w in A + Bw if w["reg"] == side and len(LETTER.findall(w["t"])) >= 2 and w["c"] > 20]
        if not ws: continue
        if side == "ml":
            mr_ = max(w["x1"] for w in ws)
            split = min(bl, L) - 0.06 * H     # the notes run up to within a few pixels of the text
            g["ml"] = {"split": split, "x0": max(0, min(w["x0"] for w in ws) - H),
                       "y0": min(w["y0"] for w in ws), "y1": max(w["y1"] for w in ws)}
        else:
            ml_ = min(w["x0"] for w in ws)
            split = max(br, R) + 0.06 * H
            g["mr"] = {"split": split, "x1": max(w["x1"] for w in ws) + H,
                       "y0": min(w["y0"] for w in ws), "y1": max(w["y1"] for w in ws)}
    g["body_y"] = [min((w["y0"] for w in A + Bw if w["reg"] == "body" and w["c"] > 20), default=0),
                   max((w["y1"] for w in A + Bw if w["reg"] == "body" and w["c"] > 20), default=0)]
    return g


def regions(n):
    g = gutters(n)
    if not g: return []
    GUT[str(n)] = g
    H, L, R = g["H"], g["L"], g["R"]
    w2, h2 = 2 * canv[n - 1]["w"], 2 * canv[n - 1]["h"]
    if COLS:
        y0 = max(0, g["body_y"][0] - 2 * H); y1 = min(h2, g["body_y"][1] + 2 * H)
        x0 = g["ml"]["split"] if "ml" in g else max(0, L - 0.6 * H)
        x1 = g["mr"]["split"] if "mr" in g else min(w2, R + 0.6 * H)
        return [("body", int(x0) // 2, int(y0) // 2, int(x1 - x0) // 2, int(y1 - y0) // 2)]
    out = []
    for side in ("ml", "mr"):
        if side not in g: continue
        m = g[side]
        y0 = max(0, m["y0"] - 2 * H); y1 = min(h2, m["y1"] + 2 * H)
        # reaching a little into the text: the scans are skewed, and a note runs up to within a
        # few pixels of it; wolff_ocr.py drops whatever stands beyond the split
        reach = 0 if NARROW else 0.6 * H
        x0, x1 = (m["x0"], m["split"] + reach) if side == "ml" else (m["split"] - reach, min(w2, m["x1"]))
        if x1 - x0 < 2 * H: continue
        out.append((side, int(x0) // 2, int(y0) // 2, int(x1 - x0) // 2, int(y1 - y0) // 2))
    return out


def work(n):
    res = {}
    img = os.path.join(W, "img", "%s_%05d.jpg" % (B, n))
    for side, x, y, w, h in regions(n):
        key = "%05d_%s" % (n, side)
        outs = [os.path.join(W, "tsv", m + SUF, "%s_%s" % (B, key)) for m in MODELS]
        res[key] = [2 * x, 2 * y]
        if all(os.path.exists(o + ".tsv") for o in outs): continue
        c1 = os.path.join(W, "tmpm_%s.jpg" % key); c2 = os.path.join(W, "tmpm_%s.png" % key)
        try:
            subprocess.run(["sips", "--cropToHeightWidth", str(h), str(w), "--cropOffset", str(y), str(x), img, "--out", c1], check=True, capture_output=True)
            subprocess.run(["sips", "--resampleWidth", str(2 * w), c1, "--out", c2], check=True, capture_output=True)
            env = dict(os.environ, OMP_THREAD_LIMIT="1")
            for m, o in zip(MODELS, outs):
                subprocess.run(["tesseract", c2, o + ".part", "--tessdata-dir", TESS, "-l", m, "--psm", "4",
                                "-c", "thresholding_method=2", "tsv"], check=True, capture_output=True, env=env)
                os.replace(o + ".part.tsv", o + ".tsv")
        finally:
            for c in (c1, c2):
                if os.path.exists(c): os.remove(c)
    return res


with ThreadPoolExecutor(max_workers=int(os.environ.get("JOBS", "6"))) as ex:
    for i, r in enumerate(ex.map(work, range(1, len(canv) + 1))):
        offs.update(r)
        if (i + 1) % 50 == 0: print("%d/%d" % (i + 1, len(canv)), flush=True)
json.dump(offs, open(OFF, "w"), indent=0, sort_keys=True)
json.dump(GUT, open(os.path.join(W, "tsv", "gutters.json"), "w"))
print("%s: %d regions" % ("columns" if COLS else "narrow margins" if NARROW else "margins", len(offs)))
