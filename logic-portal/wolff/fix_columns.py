"""fix_columns.py BSBID WORKDIR FIRST LAST

The text column of every page from FIRST to LAST, as merge_pages.column finds it, corrected where
it is plainly wrong: its width strays more than 5% from the book's usual width (a margin note or
the binding's edge taken into it, or a page of indented lines). The edge that strays further from
where it usually stands on that side of the leaf (recto or verso) is moved to the usual width from
the other. Writes WORKDIR/tsv/colfix.json { n: [L, R] }, which ocr_margins.py and wolff_ocr.py use."""
import json, os, statistics, sys
sys.path.insert(0, os.path.dirname(__file__))
from merge_pages import load_tsv, body_height, column

B, W, first, last = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
cols = {}
for n in range(first, last + 1):
    A = load_tsv(os.path.join(W, "tsv", "frak2021", "%s_%05d.tsv" % (B, n)))
    Bw = load_tsv(os.path.join(W, "tsv", "german_print", "%s_%05d.tsv" % (B, n)))
    H = body_height(A + Bw)
    c = column(A, H) or column(Bw, H)
    if c: cols[n] = [c[0], c[1]]
med = statistics.median(R - L for L, R in cols.values())
side = {par: (statistics.median(cols[n][0] for n in cols if n % 2 == par), statistics.median(cols[n][1] for n in cols if n % 2 == par)) for par in (0, 1)}
fixed = {}
for n, (L, R) in cols.items():
    if abs((R - L) - med) > 0.05 * med:
        mL, mR = side[n % 2]
        if abs(L - mL) > abs(R - mR): L = R - med
        else: R = L + med
        fixed[n] = [int(L), int(R)]
        print("page %d: %s -> %s" % (n, cols[n], fixed[n]))
    cols[n] = [int(L), int(R)]
json.dump(cols, open(os.path.join(W, "tsv", "colfix.json"), "w"))
print("usual width %d; %d of %d pages corrected" % (med, len(fixed), len(cols)))
