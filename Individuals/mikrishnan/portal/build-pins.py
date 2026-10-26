#!/usr/bin/env python3
"""Build the Logic Portal's pinned files from the students' own data.

    python3 Individuals/mikrishnan/portal/build-pins.py

Run it from anywhere; paths are worked out from this file's place in the repository.
Rerun it whenever one of the sources below changes. Nothing in pinned/ is edited by hand.

Some things the portal needs are not yet in files a page can load on its own:

* Sophia Wyatt's mediate inferences live as one JSON object (`const MI = {...}`)
  inside Individuals/Sophia Wyatt/mediate-inferences.html. This copies that object out,
  unchanged, into pinned/sophia-mediate-inferences.js as `PORTAL_PIN_SOPHIA`.

* Jesus La Paz's Meier–Kant concordance links the Jäsche *Logik* to Meier's §§, but by the
  block ids of his own parse of AA IX (jaesche-logik-data.js), while the portal reads Alex Li's
  parse (logik-jasche-9.js), whose blocks are cut differently. Both come from the same
  transcription, so each of Jesus's blocks is found in Alex's text by its opening letters,
  and his link is carried over to the Alex block it falls in. The link itself, its code and
  its range are Jesus's, unchanged; only the block it is attached to is re-keyed. Where
  several of his blocks fall in one of Alex's, the first one's link is kept and the others
  are listed in `also`. The run reports how many blocks it could not place.

* Jesus's English translations of the Jäsche *Logik* (translations/jaesche-guyer.js and
  -kemp.js) are keyed by the same blocks of his own parse. This writes no translation: it
  writes pinned/jaesche-translation-map.js, `PORTAL_PIN_JAESCHE_TR`, which says for each of
  Alex's blocks which of Jesus's blocks make it up, so that the portal can read Jesus's files
  as they are. Each of Jesus's blocks is placed where it starts, searching only forward from
  the last one placed, and runs to where the next one starts. An Alex block that begins and
  ends where Jesus's blocks do is `exact`; one that Alex divides where Jesus does not is
  `part`, and the portal says that its English runs past the passage.

* Jin's concepts (`const L` and `const CONCEPTS`, in Individuals/Jin/logik-transcripts.html),
  his stopwords (`const STOP_RAW`, the words his parallel passages leave out of the comparison)
  and Aidan's forms of judgment (`const B` and `const JF_FORMS`, in
  Individuals/Aidan/judgment-finder.html) are JavaScript, regular expressions included.
  Their declarations are copied verbatim into pinned/jin-concepts.js and
  pinned/aidan-forms.js, each wrapped in a function so that their names cannot clash with
  anything else on the portal's page, as `PORTAL_PIN_JIN` and `PORTAL_PIN_AIDAN`.

When both students' data reach data/, this script and pinned/ can go.
"""
import json
import os
import re
import sys
from datetime import date

HERE = os.path.dirname(os.path.abspath(__file__))
IND = os.path.normpath(os.path.join(HERE, "..", ".."))
OUT = os.path.join(HERE, "pinned")
_dec = json.JSONDecoder()


def js_const(path, name):
    s = open(path, encoding="utf-8").read()
    m = re.search(r"(?m)^\s*(?:const|let|var)\s+" + re.escape(name) + r"\s*=\s*", s)
    if not m:
        sys.exit(f"{path}: no `{name} =` found")
    v, _ = _dec.raw_decode(s, m.end())
    return v


def header(title, source, how):
    return (
        "/* ─────────────────────────────────────────────────────────────────────────────\n"
        f"   {title}\n"
        f"   PINNED COPY for the Logic Portal, made by build-pins.py on {date.today().isoformat()}\n"
        f"   from {source}.\n"
        f"   {how}\n"
        "   Do not hand-edit: change the source, then rerun build-pins.py.\n"
        "   ───────────────────────────────────────────────────────────────────────────── */\n"
    )


def pin_sophia():
    src = os.path.join(IND, "Sophia Wyatt", "mediate-inferences.html")
    mi = js_const(src, "MI")
    path = os.path.join(OUT, "sophia-mediate-inferences.js")
    with open(path, "w", encoding="utf-8") as f:
        f.write(header("Sophia Wyatt's mediate inferences in the Logik transcripts and Reflexionen",
                       "Individuals/Sophia Wyatt/mediate-inferences.html (its `MI` object)",
                       "Unchanged: the object as Sophia's page declares it."))
        f.write("const PORTAL_PIN_SOPHIA = ")
        json.dump(mi, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")
    n = {k: len(v) for k, v in mi.items() if isinstance(v, list)}
    print(f"sophia: {n}")


def letters(s):
    return re.sub(r"[^a-zäöüß]", "", s.lower())


def pin_jaesche_links():
    conc = js_const(os.path.join(IND, "Jesus-La-Paz", "meier-kant-concordance.js"), "CONCORDANCE")
    jj = js_const(os.path.join(IND, "Jesus-La-Paz", "jaesche-logik-data.js"), "JAESCHE")
    al = js_const(os.path.join(IND, "Alex Li", "logik-jasche-9.js"), "LOGIK_JASCHE")
    links = conc["links"]["jaesche"]

    # Alex's text as one letters-only stream, with each block's span in it.
    stream, spans = [], []
    pos = 0
    for s in al["sections"]:
        for b in s["blocks"]:
            t = letters(b.get("text", ""))
            spans.append((pos, pos + len(t), b["id"]))
            stream.append(t)
            pos += len(t)
    stream = "".join(stream)

    def block_at(i):
        lo, hi = 0, len(spans) - 1
        while lo <= hi:
            mid = (lo + hi) // 2
            a, e, bid = spans[mid]
            if i < a:
                hi = mid - 1
            elif i >= e:
                lo = mid + 1
            else:
                return bid
        return None

    out, missed, cursor = {}, [], 0
    for si, s in enumerate(jj["sections"]):
        for bi, b in enumerate(s["blocks"]):
            jid = b.get("id") or f"jaesche-s{si + 1:02d}-{bi + 1:03d}"
            if jid not in links:
                continue
            t = letters(b.get("text", ""))
            if len(t) < 12:
                missed.append(jid)
                continue
            # The opening letters first; if the two parses differ there (a footnote mark, a
            # heading run in), try stretches further into the block.
            i = -1
            for off in (0, 25, 60, 120):
                key = t[off:off + 30]
                if len(key) < 12:
                    break
                i = stream.find(key, cursor)
                if i < 0:
                    i = stream.find(key)
                if i >= 0:
                    break
            if i < 0:
                missed.append(jid)
                continue
            cursor = i
            aid = block_at(i)
            if aid is None:
                missed.append(jid)
                continue
            if aid in out:
                out[aid].setdefault("also", []).append(jid)
            else:
                out[aid] = {"link": links[jid], "from": jid}

    path = os.path.join(OUT, "jaesche-meier-links.js")
    with open(path, "w", encoding="utf-8") as f:
        f.write(header("Jäsche Logik → Meier §: Jesus La Paz's concordance links, re-keyed to Alex Li's blocks",
                       "Individuals/Jesus-La-Paz/meier-kant-concordance.js, matched through his jaesche-logik-data.js "
                       "to Individuals/Alex Li/logik-jasche-9.js",
                       "PORTAL_PIN_JAESCHE_LINKS[alexBlockId] = { link: [§, code] or [§, code, from, to] as in "
                       "CONCORDANCE.links.jaesche, from: Jesus's block id, also: his further blocks in it }."))
        f.write("const PORTAL_PIN_JAESCHE_LINKS = ")
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")
    print(f"jaesche: {len(links)} links in the concordance; {len(out)} of Alex's "
          f"{len(spans)} blocks linked; {len(missed)} of Jesus's blocks not placed"
          + (f" (e.g. {missed[:5]})" if missed else ""))


def pin_jaesche_translations():
    jj = js_const(os.path.join(IND, "Jesus-La-Paz", "jaesche-logik-data.js"), "JAESCHE")
    al = js_const(os.path.join(IND, "Alex Li", "logik-jasche-9.js"), "LOGIK_JASCHE")

    # Alex's text as one letters-only stream, with the span of each block that has text.
    stream, spans, pos = [], [], 0
    for s in al["sections"]:
        for b in s["blocks"]:
            t = letters(b.get("text", ""))
            if t:
                spans.append((pos, pos + len(t), b["id"]))
                stream.append(t)
                pos += len(t)
    stream = "".join(stream)

    # Where each of Jesus's blocks starts in it. Only forward of the last one placed, and not
    # far: a search of the whole text finds the same words again chapters away. Short blocks
    # (headings, mostly) are matched whole; Alex sets most headings as titles, not text.
    WINDOW = 6000
    starts, missed, cursor = [], [], 0
    for si, s in enumerate(jj["sections"]):
        for bi, b in enumerate(s["blocks"]):
            jid = b.get("id") or f"jaesche-s{si + 1:02d}-{bi + 1:03d}"
            t = letters(b.get("text", ""))
            if not t:
                continue
            i = -1
            if len(t) < 30:
                i = stream.find(t, cursor, cursor + WINDOW + len(t))
            else:
                for off in (0, 25, 60, 120):
                    key = t[off:off + 30]
                    if len(key) < 30:
                        break
                    j = stream.find(key, cursor, cursor + WINDOW + off + 30)
                    if j >= 0:
                        i = max(j - off, cursor)
                        break
            if i < 0:
                missed.append(jid)
                continue
            starts.append((i, jid))
            cursor = i + 1
    at = [a for a, _ in starts]

    def first_at_or_after(x):
        lo, hi = 0, len(at)
        while lo < hi:
            mid = (lo + hi) // 2
            if at[mid] < x:
                lo = mid + 1
            else:
                hi = mid
        return lo

    out, n_exact, n_part, n_none = {}, 0, 0, 0
    for a, e, aid in spans:
        tol = max(12, (e - a) // 25)
        lo, hi = first_at_or_after(a - tol), first_at_or_after(e - tol)
        inside = starts[lo:hi]
        nxt = at[hi] if hi < len(at) else len(stream)
        if inside and abs(inside[0][0] - a) <= tol and abs(nxt - e) <= tol:
            out[aid] = {"ids": [j for _, j in inside], "fit": "exact"}
            n_exact += 1
            continue
        # The block of Jesus's that runs into this one from before it, then any that start in it.
        before = [starts[lo - 1]] if lo > 0 and (not inside or inside[0][0] > a + tol) else []
        cover = before + inside
        if cover:
            out[aid] = {"ids": [j for _, j in cover], "fit": "part"}
            n_part += 1
        else:
            n_none += 1

    path = os.path.join(OUT, "jaesche-translation-map.js")
    with open(path, "w", encoding="utf-8") as f:
        f.write(header("Jäsche Logik: which of Jesus La Paz's blocks make up each of Alex Li's, for his English translations",
                       "Individuals/Jesus-La-Paz/jaesche-logik-data.js, matched to Individuals/Alex Li/logik-jasche-9.js",
                       "PORTAL_PIN_JAESCHE_TR[alexBlockId] = { ids: [Jesus's block ids, in order], fit: 'exact' | 'part' }. "
                       "The translations themselves stay in Individuals/Jesus-La-Paz/translations/."))
        f.write("const PORTAL_PIN_JAESCHE_TR = ")
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")
    print(f"jaesche translations: {len(starts)} of Jesus's blocks placed, {len(missed)} not (headings, mostly); "
          f"of Alex's {len(spans)} blocks with text, {n_exact} exact, {n_part} part, {n_none} without English")


def js_decl(s, name, path):
    """The source text of `const NAME = ...;`, up to the `];` or `';` that closes it."""
    m = re.search(r"(?m)^const\s+" + re.escape(name) + r"\s*=", s)
    if not m:
        sys.exit(f"{path}: no `const {name} =` found")
    if s[m.end():].lstrip().startswith("["):
        e = s.find("\n];", m.end())
        if e < 0:
            sys.exit(f"{path}: `{name}` does not end in a line `];`")
        return s[m.start():e + 3]
    e = s.find(";", m.end())
    return s[m.start():e + 1]


def pin_source(rel, decls, ret, out_name, glob, title):
    path = os.path.join(IND, rel)
    s = open(path, encoding="utf-8").read()
    body = "\n".join(js_decl(s, d, path) for d in decls)
    with open(os.path.join(OUT, out_name), "w", encoding="utf-8") as f:
        f.write(header(title, f"Individuals/{rel} (its `{'`, `'.join(decls)}`)",
                       "The declarations verbatim, wrapped in a function so their names stay private."))
        f.write(f"const {glob} = (() => {{\n{body}\nreturn {ret};\n}})();\n")
    print(f"{out_name}: {', '.join(decls)} ({len(body)} chars)")


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    pin_sophia()
    pin_jaesche_links()
    pin_jaesche_translations()
    pin_source(os.path.join("Jin", "logik-transcripts.html"), ["L", "CONCEPTS"], "CONCEPTS",
               "jin-concepts.js", "PORTAL_PIN_JIN", "Jin's concepts of the logic lectures, with their wordings")
    pin_source(os.path.join("Aidan", "judgment-finder.html"), ["B", "JF_FORMS"], "JF_FORMS",
               "aidan-forms.js", "PORTAL_PIN_AIDAN", "Aidan Chong's forms of judgment, with the terms that name them")
    pin_source(os.path.join("Jin", "logik-transcripts.html"), ["STOP_RAW"], "STOP_RAW",
               "jin-stopwords.js", "PORTAL_PIN_JIN_STOP", "Jin's list of the words his parallel passages leave out of the comparison")
