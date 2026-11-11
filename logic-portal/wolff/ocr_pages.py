"""ocr_pages.py BSBID WORKDIR [FIRST LAST]

Downloads each page image of a Munich (MDZ) digitisation through its IIIF image API, at the
scan's own resolution, upscales it 2x locally (sips), and reads it with two Tesseract models
trained on historical print, frak2021 and german_print, writing each one's word boxes as TSV:

  WORKDIR/img/BSBID_NNNNN.jpg          the page image as Munich serves it (kept, for proofreading)
  WORKDIR/tsv/<model>/BSBID_NNNNN.tsv  Tesseract's words, boxes and confidences

Resumable: a page whose TSVs exist is skipped."""
import json, os, subprocess, sys, time, urllib.request
from concurrent.futures import ThreadPoolExecutor

B, W = sys.argv[1], sys.argv[2]
TESS = os.environ.get("TESSDATA", os.path.join(os.path.dirname(__file__), "..", "..", "tessdata"))
MODELS = ["frak2021", "german_print"]
man = json.load(urllib.request.urlopen("https://api.digitale-sammlungen.de/iiif/presentation/v2/%s/manifest" % B, timeout=120))
canv = man["sequences"][0]["canvases"]
first, last = (int(sys.argv[3]), int(sys.argv[4])) if len(sys.argv) > 4 else (1, len(canv))
os.makedirs(os.path.join(W, "img"), exist_ok=True)
for m in MODELS: os.makedirs(os.path.join(W, "tsv", m), exist_ok=True)
json.dump([{"n": i + 1, "label": c.get("label"), "w": c["width"], "h": c["height"]} for i, c in enumerate(canv)],
          open(os.path.join(W, "canvases.json"), "w"), ensure_ascii=False, indent=0)

def fetch(n):
    p = os.path.join(W, "img", "%s_%05d.jpg" % (B, n))
    if os.path.exists(p) and os.path.getsize(p) > 10000: return p
    url = "https://api.digitale-sammlungen.de/iiif/image/v2/%s_%05d/full/full/0/default.jpg" % (B, n)
    for k in range(5):
        try:
            data = urllib.request.urlopen(url, timeout=120).read()
            if len(data) > 10000 and data[:2] == b"\xff\xd8":
                open(p + ".part", "wb").write(data); os.replace(p + ".part", p); return p
        except Exception as e:
            err = e
        time.sleep(3 * (k + 1))
    raise RuntimeError("could not fetch %s" % url)

def work(n):
    outs = [os.path.join(W, "tsv", m, "%s_%05d" % (B, n)) for m in MODELS]
    if all(os.path.exists(o + ".tsv") for o in outs): return n, "skip"
    img = fetch(n)
    w = canv[n - 1]["width"]
    up = os.path.join(W, "tmp_%05d.png" % n)
    subprocess.run(["sips", "--resampleWidth", str(2 * w), img, "--out", up], check=True, capture_output=True)
    env = dict(os.environ, OMP_THREAD_LIMIT="1")
    try:
        for m, o in zip(MODELS, outs):
            if os.path.exists(o + ".tsv"): continue
            subprocess.run(["tesseract", up, o + ".part", "--tessdata-dir", TESS, "-l", m, "--psm", "3",
                            "-c", "thresholding_method=2", "tsv"], check=True, capture_output=True, env=env)
            os.replace(o + ".part.tsv", o + ".tsv")
    finally:
        if os.path.exists(up): os.remove(up)
    return n, "ok"

t0 = time.time(); done = 0
with ThreadPoolExecutor(max_workers=int(os.environ.get("JOBS", "8"))) as ex:
    for n, st in ex.map(work, range(first, last + 1)):
        done += 1
        if done % 20 == 0 or n == last:
            print("%s %d/%d (%s) %.0fs" % (B, done, last - first + 1, st, time.time() - t0), flush=True)
print("done", B)
