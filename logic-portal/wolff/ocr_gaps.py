"""ocr_gaps.py BSBID WORKDIR

The §'s headings Tesseract's layout skipped. In the Latin Logica each § opens with its number
centred on a line of its own ("§. 15."), small and set apart, and reading a page or a column
Tesseract sometimes takes it for noise and reads nothing there at all. So, wherever two lines of
the column readings stand unusually far apart, the middle of the column between them is cropped,
upscaled 3x and read as a single line (--psm 7) by both models:

  WORKDIR/tsv/<model>-g/BSBID_NNNNN_gK.tsv   K: the gap's number on the page
  WORKDIR/tsv/gaps.json   { "NNNNN_gK": [x, y] }: where the crop stands, in the 2x page's pixels

wolff_ocr.py keeps from these only what reads as a §'s heading."""
import json, os, statistics, subprocess, sys
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, os.path.dirname(__file__))
from merge_pages import load_tsv, line_units

B, W = sys.argv[1], sys.argv[2]
TESS = os.environ.get("TESSDATA")
MODELS = ["frak2021", "german_print"]
canv = json.load(open(os.path.join(W, "canvases.json")))
COLS = json.load(open(os.path.join(W, "tsv", "columns.json")))
GUT = json.load(open(os.path.join(W, "tsv", "gutters.json")))
for m in MODELS: os.makedirs(os.path.join(W, "tsv", m + "-g"), exist_ok=True)


def gaps(n):
    key = "%05d_body" % n
    if key not in COLS or str(n) not in GUT: return []
    off = COLS[key]; g = GUT[str(n)]
    L, R, H = g["L"], g["R"], g["H"]
    ys = []
    for m in MODELS:
        ws = load_tsv(os.path.join(W, "tsv", m + "-b", "%s_%05d_body.tsv" % (B, n)))
        for w in ws: w["reg"] = "body"
        for u in line_units(ws):
            if sum(len(w["t"]) for w in u["w"]) >= 6: ys.append((u["y0"] + off[1], u["y1"] + off[1]))
    if len(ys) < 4: return []
    ys.sort()
    # the lines of both readings, merged where they overlap
    merged = [list(ys[0])]
    for a, b in ys[1:]:
        if a < merged[-1][1] - 0.3 * H: merged[-1][1] = max(merged[-1][1], b)
        else: merged.append([a, b])
    out = []
    for (a0, a1), (b0, b1) in zip(merged, merged[1:]):
        if b0 - a1 > 0.9 * H:                     # room for a line of its own between them
            w = R - L
            out.append((int(L + 0.3 * w) // 2, int(a1 + 0.1 * H) // 2, int(0.4 * w) // 2, int(b0 - a1 - 0.2 * H) // 2))
    return out


def work(n):
    res = {}
    img = os.path.join(W, "img", "%s_%05d.jpg" % (B, n))
    for k, (x, y, w, h) in enumerate(gaps(n)):
        if w < 20 or h < 10: continue
        key = "%05d_g%d" % (n, k)
        outs = [os.path.join(W, "tsv", m + "-g", "%s_%s" % (B, key)) for m in MODELS]
        res[key] = [2 * x, 2 * y]
        if all(os.path.exists(o + ".tsv") for o in outs): continue
        c1 = os.path.join(W, "tmpg_%s.jpg" % key); c2 = os.path.join(W, "tmpg_%s.png" % key)
        try:
            subprocess.run(["sips", "--cropToHeightWidth", str(h), str(w), "--cropOffset", str(y), str(x), img, "--out", c1], check=True, capture_output=True)
            subprocess.run(["sips", "--resampleWidth", str(3 * w), c1, "--out", c2], check=True, capture_output=True)
            env = dict(os.environ, OMP_THREAD_LIMIT="1")
            for m, o in zip(MODELS, outs):
                subprocess.run(["tesseract", c2, o + ".part", "--tessdata-dir", TESS, "-l", m, "--psm", "7",
                                "-c", "thresholding_method=2", "tsv"], check=True, capture_output=True, env=env)
                os.replace(o + ".part.tsv", o + ".tsv")
        finally:
            for c in (c1, c2):
                if os.path.exists(c): os.remove(c)
    return res


offs = {}
with ThreadPoolExecutor(max_workers=int(os.environ.get("JOBS", "8"))) as ex:
    for i, r in enumerate(ex.map(work, range(1, len(canv) + 1))):
        offs.update(r)
        if (i + 1) % 100 == 0: print("%d/%d" % (i + 1, len(canv)), flush=True)
json.dump(offs, open(os.path.join(W, "tsv", "gaps.json"), "w"), indent=0, sort_keys=True)
print("gaps: %d read" % len(offs))
