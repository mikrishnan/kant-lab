#!/usr/bin/env python3
"""Turn the Cambridge Edition's concordance tables into cambridge-concordance.js.

    python3 "Individuals/Nik Land/import_cambridge_concordance.py"

The source is "Logic Concordance (Cambridge Edition).pdf", which stands beside this file:
Appendices C and D of the Cambridge *Lectures on Logic* (ed. J. M. Young, 1992, pp. 655-673).
The PDF is a scan with no text layer, so the two tables below were TRANSCRIBED BY HAND from
its pages, as printed, and this script only expands and checks them. It is therefore the
one place to correct a misreading, and the output says nothing the PDF does not.

  TABLE_C   Appendix C: Meier's Auszug, by section, against the pages of AA 16 (Kant's
            Reflexionen on it) and of AA 9 (the Jaesche Logik). Columns: label | Meier
            paragraphs | AA 16 pages | AA 9 pages. The printed abbreviations (`33-9`, `91-3`,
            `812-13`) are expanded to full ranges (33-39, 91-93, 812-813).
  TABLE_D   Appendix D: for every one of Meier's 563 paragraphs, the AA 16 pages and the
            pages of Blomberg and of the Wiener Logik (both AA 24) that treat it. Columns:
            paragraph | AA 16 | Blomberg | Wiener. `-` is the table's dash. The table's other two
            columns (Hechsel, Dohna-Wundlacken) are not in this repository's data and were
            not transcribed. Busolt is not in the table at all.

Read the report. It checks that Table D has all 563 paragraphs, that its AA 16 pages never
run backwards down the table, that Blomberg's and Wiener's pages lie inside the volumes' ranges,
that Table C's AA 9 pages lie inside the Logik, and that each paragraph's AA 16 pages fall inside
the row of Table C it belongs to (which is what catches a misread digit in either table). It
cannot catch a misreading that stays inside all of those; the two tables are worth a second
reading against the PDF wherever a link looks wrong.
"""
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "cambridge-concordance.js")

TABLE_C = """
# label|meier|vol16|vol9   (as printed; abbreviated ranges expand: 33-9 = 33-39)
Introduction to the doctrine of reason|1-9|3-75|11-87
Concept, task, division of logic|1-4|3-50|11-21
Concept and division of logic|5|51-71|21-3
Analytic-dialectic. Theoretical-practical logic. Value|6-9|71-5|16-20
The first main part|10-413|76-775|33-136
First section|10-40|76-169|33-9
Representation. Object. Kinds. Clarity. Distinctness|10-14|76-91|33-5
Ground and consequence|15-16|91-3|
Cognition of reason, historical cognition|17-18|93-9|21-2
Logical and aesthetic perfection|19-35|99-162|35-9
Imperfections of cognition|36|162-6|44-5
Second section|41-65|170-218|40-9
Ignorance. Horizon|41-9|170-90|40-4
Praiseworthy and blameworthy ignorance|50-2|190-5|44-5
Polyhistory, humaniora|53-4|195-202|45-6
Pedantry, gallantry|65|206-18|46-8
Third section|66-91|219-36|49
Fourth section|92-114|237-95|49-57
Nature and criteria of truth and falsity|92-8|237-61|49-54
Logical, aesthetic and practical truth|99-103|262-75|54-5
Dogmatic and historical truths. System|104-5|275-80|
Nature of error|109-10|282-88|53-7
Kinds of error|111-13|288-94|55-7
Fifth section|115-54|296-358|58-65
Mark|115|296-300|58
Analytic and synthetic marks, coordinated and subordinated|116|300-4|58-9
Affirmative and negative marks|117|305-7|59-60
Important and unimportant marks|118|307-9|60
Sufficient and insufficient marks|119|309-310|60
Necessary and contingent marks|120|310|60
External and internal marks|121|311-15|60-1
Clear, distinct and obscure cognition|122-31|315-26|61-2
Degrees of clarity. Distinctness|132-4|327-32|61-4
Liveliness of cognition|135|333-8|62
Analytic and synthetic distinctness|139-40|340-46|63-5
Degrees of distinctness|147-54|349-58|62-3
Sixth section|155-215|359-515|65-86
Certainty of cognition. Opining, believing, knowing|155-67|359-96|65-73
Reservation of judgment. Provisional judgments|168|396-400|73-5
Prejudice in general|168-9|400-12|75-7
Kinds of prejudices|170|412-27|77-81
Probability, plausibility, moral certainty|171-5|427-43|81-2
Doubt, scruple, objection|176|444-6|83
True and false doubts|177|446-51|83
Dogmatism. Skepticism. Skeptical method|178-80|452-61|83-4
Hypothesis|181-3|461-72|84-6
Persuasion|184|473-5|73
Science. System|185|476-8|72
Kinds and degrees of certainty|186-9|479-82|70-1
Arbitrary truths|190|482-3|
Proof|191-200|483-92|71
Experience. Reason. Belief|201-6|493-504|66-71
Witness. Disbelief. Moral belief|207-15|504-15|67-72
Seventh section|216-48|516-32|86-87
Practical, speculative, theoretical|216-17|516-19|86-87
Eighth section|249-91|533-623|91-100, 140-148
Concept in general. Idea|249-53|533-41|91-4
Kinds of concepts. Concepts of experience|254-58|541-9|92-4
Abstraction, comparison, reflection|259-60|549-558|94-5
Contents, extension of concepts. Higher, lower. Genus, species|261-5|559-67|95-100
Arbitrarily made concepts|266-7|568-72|93
Definition, exposition, description|268-9|572-89|140-3
Requirements for a definition|270-9|589-600|144-5
Nominal and real definitions|280-4|601-11|143-5
Logical division of a concept|285-91|612-23|146-8
Ninth section|292-352|624-703|100-19
Nature of judgment. Matter and form|292-3|624-35|101-4
Quality of judgments|294-6|635-41|102-4
Condition, determination, analysis of judgments|297-300|642-6|
Quantity of judgments|301-3|647-51|102-3
Simple and composite judgments|304|651-2|
Hypothetical and disjunctive judgments|305-8|653-62|104-8
Modality of judgments|309|662-3|108-9
Exponible judgments|310|663-4|109
Theoretical and practical judgments|311-12|664-7|110
Provable and unprovable judgments. Axioms, postulates. Analytic and synthetic|313-18|667-74|110-12
Iudicia intuitiva - discursiva|319-322|674-7|
Judgments of perception and of experience|323|678-9|113
Corollaries. Theorems. Problems. Lemmas. Scholia. Qualitates occultae|324-340|679-690|112
Inferences of the understanding|341-352|691-703|114-19
Tenth section|353-413|704-75|114, 120-36
Nature, constituent parts, kinds of inferences|353-6|704-10|114, 120-3, 132
Termini, matter and form of the inference of reason|357-9|710-12|121, 122-3
Universal rules for inferences of reason of all kinds|360-66|712-19|123, 125, 129, 130
Ordinary and extraordinary inferences of reason|367-8|719-20|120, 122
The four figures of inferences|369-73|721-9|125-8
Universal rules for categorical inferences|374-82|729-34|123-5
Particular rules for the various figures|383-91|734-44|126-8
Hypothetical inferences of reason|392-4|745-8|129
Disjunctive inferences of reason|395-6|748-50|129-30
Dilemma|397|750-1|130-1
Immediate deductions. Formal and covert inferences|398-400|751-2|131
Induction and analogy|401|753-61|131-3
Fallacies|402-5|762-7|134-5
Composite inferences of reason|406-9|768-72|133-4
Proofs and mistakes in proof|410-13|773-5|135-6
Second main part|414-38|776-813|139-40, 148-50
Method in general. Various kinds of method|414-21|776-85|139-40, 148-9
Analytic and synthetic method|422-6|786-98|149
Scientific and popular method|427|798-800|148
Further kinds of methods|428-33|800-9|149-50
Doctrine, discipline, science|434|809-10|
Methodical and tumultuous|435|810-11|148-9
Meditation|436-8|811-13|150
"""

TABLE_D = """
1|5|26-27|790; 792
2|5|28|791-2
3|5|29|-
4|5|-|-
5|51-2|29-31|797-9
6|72|38|793-4
7|72-3|38|794
8|73|38-9|-
9|74|-|-
10|76|39-40|797-8
11|76-7|40|797-8
12|79|40|797-8
13|80|40-1|797-8
14|80-1|41-2|797-8
15|91|42-3|-
16|92|43|-
17|93-4|43|-
18|94|43-9|-
19|99|43-9|808-12
20|100-1|49|-
21|101|49-50|-
22|101-2|50-2|809-10
23|103-4|52-4|813-14
24|104|54-5|-
25|105|55-6|-
26|106|55-6|-
27|106|56|-
28|107|56-7|-
29|107|57|-
30|108|58-9|815
31|109|59-60|-
32|109|60|-
33|109-110|60|-
34|110|61-3|-
35|111|63|-
36|163|63-4|813
37|167-8|64-5|-
38|168|65|-
39|168-9|65|-
40|169|65-6|-
41|170-1|66|-
42|171|66|-
43|172|66-7|-
44|173|67-9|814-17
45|174|67-9|815-16
46|175-6|69-70|816
47|176-7|70|-
48|177|71|-
49|178|-|-
50|190-1|71|-
51|194-5|-|817
52|195|71-2|-
53|195-6|72|818
54|197-8|-|818
55|202|72-3|-
56|202|73|-
57|202|73|-
58|203|73-4|-
59|203|74-5|-
60|203|-|-
61|204|75|-
62|204-5|-|-
63|205|-|819
64|206|-|-
65|206|75-6|820
66|219|76|-
67|219-20|-|-
68|220-1|76-7|822
69|223|77|-
70|223-4|77|-
71|224|77-8|-
72|224-25|77-8|-
73|225|77-8|-
74|225|77-8|-
75|227|77-8|-
76|228|-|-
77|228|-|-
78|228|-|-
79|228-9|-|-
80|229-30|78|-
81|230|-|-
82|231|78|-
83|232|78-9|-
84|233|79|-
85|233|-|-
86|234|79|-
87|234|79|-
88|235|79|-
89|235|79|-
90|236|79|-
91|236|80|-
92|237|80-8|-
93|238|80-8|823
94|238-9|88|823-4
95|239-40|89|823-4
96|241|89-90|823-4
97|242|89-90|823-4
98|243|89-90|823-4
99|262|89-90|823-4
100|262-4|93-96|825f./828
101|264-5|-|-
102|265-6|96-7|829-30
103|267|97-9|-
104|275-6|99-100|830-1
105|277|-|-
106|281|100-1|832
107|282|-|-
108|282|-|-
109|282-3|101-4|832-3
110|287|104|-
111|288-9|104-5|832
112|289|-|-
113|290-1|105-6|832-3
114|295|106|-
115|296-7|106-8|834
116|301|108-10|834-5
117|305|110-11|836-7
118|307-8|111-12|837-8
119|309-10|112-13|838
120|310|113|838
121|311-12|113-18|838-40
122|315|-|-
123|316|-|-
124|316|118-19|840-1
125|316-18|119-22|841-42
126|320-1|-|-
127|321-2|-|-
128|322|-|-
129|323-4|-|-
130|324|-|-
131|324-6|123|-
132|327|123-5|-
133|328|125-6|-
134|329-30|-|-
135|333|126-30|842-3
136|338|-|-
137|338-9|-|-
138|339|-|-
139|340-1|130-4|842-5
140|341-2|134-7|845-7
141|346-47|-|-
142|348|-|-
143|348|-|-
144|349|137|847-8
145|349|-|-
146|349|-|-
147|349-50|137-8|848-9
148|351-2|141-2|847
149|353|138-40|847
150|354|-|-
151|355-6|141-2|849
152|356|-|-
153|357|-|-
154|357-8|142|848
155|359|142-51|849
156|360|142-51|-
157|361|151-2|856-7
158|361-2|152|-
159|362|152|-
160|363-4|-|-
161|364|153|857
162|365|-|-
163|366-7|-|-
164|368|-|-
165|368-9|-|-
166|370-1|-|-
167|371|154-5|859
168|396-401|155-61|859-61
169|401-2|161-94|-
170|412-17|161-94|863-79
171|427-8|194-7|879-84
172|428-9|-|-
173|429|-|-
174|429-30|-|-
175|430-2|198-201|-
176|444|201-3|884
177|446-51|203-4|884
178|452|204-18|-
179|453-4|204-18|-
180|454-5|204-18|-
181|461|218-25|886-9
182|462|225-6|-
183|463-4|225-6|-
184|473-5|226-7|889-90
185|476|227-8|891
186|479|-|-
187|479-80|-|-
188|480|-|-
189|480-1|229-30|892
190|482-3|230|892
191|483-5|230-3|892
192|485-6|230-3|893
193|487|-|-
194|488|-|-
195|488|-|-
196|488-9|233-4|893
197|491|234|893-894
198|492|-|-
199|492|234|-
200|492-3|235|-
201|493|235-6|-
202|493-4|-|-
203|495|236-40|-
204|496|236-40|-
205|496|240-1|-
206|496-7|241-6|895-897
207|504|241-6|898-899
208|505|246-7|900
209|505|-|-
210|506|247-8|900
211|506-7|-|-
212|507|-|-
213|507-8|248-9|900
214|509|249|-
215|509-10|249-50|-
216|516-17|250|900-903
217|517|250-1|900-903
218|-|-|-
219|-|-|-
220|-|-|-
221|-|-|-
222|-|-|-
223|-|-|-
224|-|-|-
225|-|-|-
226|-|-|-
227|-|-|-
228|-|-|-
229|-|-|-
230|-|-|-
231|-|-|-
232|525|-|904
233|-|-|-
234|-|-|-
235|-|-|-
236|-|-|-
237|528|-|904
238|-|-|-
239|-|-|-
240|-|-|-
241|-|-|-
242|-|-|-
243|-|-|-
244|-|-|-
245|-|-|-
246|-|-|-
247|-|-|-
248|-|-|-
249|533|251|-
250|534|252|-
251|534|-|-
252|535|-|-
253|535-6|-|-
254|541|252-4|-
255|542|254-5|905
256|542-3|254-5|-
257|544|255|-
258|545|-|-
259|549-50|255-6|907-9
260|551|256-9|907-9
261|559-60|259-60|910-11
262|560-1|260-1|911-12
263|562|261|-
264|562-3|261|-
265|563|-|-
266|568|261-3|-
267|569|-|-
268|572|263-70|912-13
269|573|270-2|920-1
270|589-90|-|-
271|591|-|-
272|591-2|-|-
273|592|-|-
274|593|-|921
275|594|-|920
276|595|-|-
277|596|265|924
278|597|-|-
279|597-8|-|-
280|601-2|268-72|919-20
281|602-3|-|-
282|603-4|-|-
283|604|-|-
284|605|-|-
285|612-13|272-3|925-8
286|613|272-3|925-8
287|614-15|272-3|925-8
288|615-17|272-3|925-8
289|618|-|-
290|618|-|-
291|619|-|-
292|624-5|273-5|928
293|625-6|273-5|-
294|635-6|273-5|929-30
295|636|-|-
296|636-7|-|-
297|642|275|932
298|642-4|-|-
299|645|-|-
300|646|-|932
301|647-8|275-6|929/31/32
302|648-9|-|-
303|649|-|-
304|651-2|-|-
305|653|276|933-5
306|653|-|-
307|654|276-7|932/933/935
308|654|-|-
309|662-3|-|-
310|663|277-8|936
311|664|-|936
312|665-6|278|936
313|667|278-9|936
314|668|-|936-7
315|668|-|-
316|669|-|-
317|669-70|-|-
318|670|279|-
319|674-5|279-80|-
320|676|-|-
321|676-7|-|-
322|677|-|-
323|678|-|-
324|679|280|-
325|680|280|938
326|680-1|-|-
327|681|-|-
328|681|280|938
329|-|-|-
330|-|-|-
331|-|-|-
332|-|-|-
333|-|-|-
334|-|-|-
335|-|-|-
336|-|-|-
337|-|-|-
338|688-9|-|938
339|690|280|938
340|690|280|938
341|691-2|281|938
342|693|281|938
343|694-5|281|938
344|696|281|939
345|697|281-2|939
346|698-9|282|939
347|699|282|-
348|699|282|-
349|700|282|-
350|700|282|-
351|701|282|-
352|702-3|282|939
353|704|-|-
354|705|282-4|939
355|706|-|-
356|706|284|939
357|710-11|283|939
358|711-12|-|-
359|712|284|939
360|712-13|284|-
361|714|-|-
362|714|-|-
363|715|284|-
364|718|-|-
365|718|-|-
366|719|-|-
367|719|284-5|939-40
368|720|-|-
369|-|-|-
370|-|-|-
371|-|-|-
372|-|-|-
373|-|-|-
374|729-30|284|-
375|-|-|-
376|-|-|-
377|-|-|-
378|-|-|-
379|-|-|-
380|-|-|-
381|-|-|-
382|-|-|-
383|-|-|-
384|-|-|-
385|-|-|-
386|-|-|-
387|-|-|-
388|-|-|-
389|-|-|-
390|-|-|-
391|-|-|-
392|745|284-6|939-40
393|745-6|284-6|-
394|746-7|-|-
395|748-9|286|939-40
396|749-50|286|-
397|750|286|-
398|751|286|-
399|751-2|286-7|-
400|752|287|-
401|752-4|287|-
402|762|287-8|-
403|762-3|-|-
404|763-4|-|-
405|764-5|288|-
406|768|288|-
407|769|288|-
408|769-70|288|-
409|770-3|288|-
410|773|288|-
411|774|289|-
412|775|289|-
413|775|289|-
414|776|289-90|-
415|777|290|-
416|777|-|-
417|777|-|-
418|777-8|-|-
419|778|-|-
420|778|-|-
421|778|290|-
422|786|291|-
423|786-7|291|-
424|788|291|-
425|788|291|-
426|788-9|-|-
427|798|291-2|-
428|800-2|292|-
429|802|292|-
430|802-3|292|-
431|803-4|-|-
432|804-5|292|-
433|805|-|-
434|809-10|293|-
435|810|293|-
436|811-12|293|-
437|812-13|293|-
438|813|-|-
439|814|-|-
440|814-15|294|-
441|815|-|-
442|815|-|-
443|816|-|-
444|816|-|-
445|816|-|-
446|816-19|-|-
447|820|-|-
448|820|-|-
449|820-1|294|-
450|821|294|-
451|821-2|-|-
452|822-3|294|-
453|823|-|-
454|824|294|-
455|824|-|-
456|824-5|-|-
457|825|294|-
458|825|-|-
459|826|-|-
460|826-7|-|-
461|827-8|-|-
462|828-9|-|-
463|829-30|-|-
464|831|294-5|-
465|832|-|-
466|832|-|-
467|832-3|-|-
468|833|-|-
469|833|-|-
470|833-4|-|-
471|834|-|-
472|835|-|-
473|836|295|-
474|837|-|-
475|837|295|-
476|837|-|-
477|837|295|-
478|837|-|-
479|838-9|-|-
480|839|-|-
481|840|-|-
482|?|-|-
483|?|-|-
484|?|-|-
485|?|-|-
486|?|-|-
487|?|-|-
488|?|-|-
489|?|-|-
490|?|295|-
491|?|295|-
492|?|-|-
493|?|295-6|-
494|?|-|-
495|?|-|-
496|?|-|-
497|?|-|-
498|?|-|-
499|?|-|-
500|?|-|-
501|?|296|-
502|?|-|-
503|?|-|-
504|?|296|-
505|?|-|-
506|?|-|-
507|?|-|-
508|?|296|-
509|?|296|-
510|?|-|-
511|?|-|-
512|?|296|-
513|?|-|-
514|?|296|-
515|?|-|-
516|?|-|-
517|?|-|-
518|?|296-7|-
519|?|297|-
520|?|297-8|-
521|?|-|-
522|?|-|-
523|?|-|-
524|?|-|-
525|?|298|-
526|?|298|-
527|?|298|-
528|?|-|-
529|?|-|-
530|?|299|-
531|?|-|-
532|?|-|-
533|?|299|-
534|?|-|-
535|?|-|-
536|?|-|-
537|?|-|-
538|?|-|-
539|?|299|-
540|?|299|-
541|?|300|-
542|?|-|-
543|?|-|-
544|?|300|-
545|?|-|-
546|?|300|-
547|?|-|-
548|?|300|-
549|?|300|-
550|?|-|-
551|?|-|-
552|?|-|-
553|?|300-1|-
554|?|301|-
555|?|301|-
556|?|301|-
557|?|-|-
558|?|-|-
559|?|-|-
560|?|-|-
561|?|-|-
562|?|-|-
563|?|-|-
"""


def expand(a, b):
    """33,9 -> 33..39 ; 91,3 -> 91..93 ; 812,13 -> 812..813 ; 76,775 -> 76..775"""
    lo = int(a)
    if b is None:
        return [lo, lo]
    hi = int(b)
    if hi < lo or len(b) < len(a):
        hi = int(a[:len(a) - len(b)] + b)
    return [lo, hi]


def ranges(text):
    """'91-100, 140-148' / '925-8' / '929/31/32' / '825f./828' / '-' -> [[lo, hi], ...]"""
    text = text.strip()
    if text in ("", "-", "?"):
        return []
    out = []
    prev = None
    for part in re.split(r"[;,/]", text):
        part = part.strip()
        if not part:
            continue
        f = part.endswith("f.")
        part = part.rstrip("f.").strip()
        m = re.match(r"^(\d+)(?:-(\d+))?$", part)
        if not m:
            # a bare "31" after "929" means 931
            raise ValueError("cannot read %r in %r" % (part, text))
        a, b = m.group(1), m.group(2)
        if prev is not None and len(a) < len(prev):
            a = prev[:len(prev) - len(a)] + a
        r = expand(a, b)
        if f:
            r[1] = r[0] + 1
        prev = str(r[0])
        out.append(r)
    return out


def main():
    sections = []
    for line in TABLE_C.strip().split("\n"):
        if line.startswith("#"):
            continue
        label, meier, v16, v9 = line.split("|")
        m = re.match(r"^(\d+)(?:-(\d+))?$", meier)
        sections.append(dict(label=label, meier=expand(m.group(1), m.group(2)),
                             v16=ranges(v16), v9=ranges(v9)))
    paras = {}
    for line in TABLE_D.strip().split("\n"):
        n, v16, bl, wi = line.split("|")
        paras[int(n)] = dict(v16=ranges(v16), bl=ranges(bl), wi=ranges(wi))

    problems = []
    # 1. every paragraph present
    missing = [n for n in range(1, 564) if n not in paras]
    if missing:
        problems.append("Table D lacks %s" % missing[:10])
    # 2. AA 16 pages never run backwards
    last = 0
    for n in sorted(paras):
        v = paras[n]["v16"]
        if v:
            if v[0][0] < last - 1:
                problems.append("AA 16 page runs back at Meier %d: %s after %d" % (n, v, last))
            last = max(last, v[-1][1])
    # 3. lecture pages within their volumes
    for n, p in paras.items():
        for r in p["bl"]:
            if not (7 <= r[0] <= r[1] <= 301):
                problems.append("Blomberg page outside AA 24:7-301 at Meier %d: %s" % (n, r))
        for r in p["wi"]:
            if not (785 <= r[0] <= r[1] <= 940):
                problems.append("Wiener page outside AA 24:785-940 at Meier %d: %s" % (n, r))
    # 4. Table C's AA 9 pages inside the Logik
    for s in sections:
        for r in s["v9"]:
            if not (11 <= r[0] <= r[1] <= 150):
                problems.append("AA 9 page outside 11-150 in %r: %s" % (s["label"], r))
    # 5. Table D's AA 16 pages inside Table C's range for the same section
    for s in sections:
        if not s["v16"]:
            continue
        lo, hi = s["v16"][0]
        for n in range(s["meier"][0], s["meier"][1] + 1):
            for r in paras.get(n, {}).get("v16", []):
                if r[0] < lo - 8 or r[1] > hi + 8:
                    problems.append("Meier %d: AA 16 %s outside %r (%d-%d)" % (n, r, s["label"], lo, hi))

    nb = sum(1 for p in paras.values() if p["bl"])
    nw = sum(1 for p in paras.values() if p["wi"])
    print("Table C: %d sections, %d with AA 9 pages" % (len(sections), sum(1 for s in sections if s["v9"])))
    print("Table D: %d paragraphs; Blomberg pages for %d, Wiener pages for %d" % (len(paras), nb, nw))
    for p in problems:
        print("  PROBLEM:", p)
    print("clean" if not problems else "%d problems — see above" % len(problems))

    head = """/* Appendices C and D of the Cambridge Edition's Lectures on Logic (ed. J. M. Young, 1992,
   pp. 655-673): a concordance of Meier's Auszug with the Jaesche Logik, and of Meier's
   paragraphs with the lecture transcripts. Generated by import_cambridge_concordance.py from
   a hand transcription of the scan in "Logic Concordance (Cambridge Edition).pdf"; do not
   hand-edit, correct the transcription in the script.

   CAMBRIDGE.sections   Appendix C, in the table's order, nested as the table nests them:
                        { label, meier: [first, last], v16: [[from, to]...], v9: [[from, to]...] }
                        v9 is AA IX pages (the Jaesche), empty where the table gives none
   CAMBRIDGE.paras      Appendix D: Meier paragraph number -> { v16, bl, wi }, each a list of
                        [from, to] pages: v16 the Reflexionen (AA XVI); bl Blomberg and wi the
                        Wiener Logik (AA XXIV). An empty list is the table's dash.
   ------------------------------------------------------------------------------------- */

"""
    with open(OUT, "w", encoding="utf8") as f:
        f.write(head)
        f.write("const CAMBRIDGE = ")
        f.write(json.dumps(dict(sections=sections, paras={str(k): v for k, v in sorted(paras.items())}),
                           ensure_ascii=False, separators=(",", ":")))
        f.write(";\n")
    print("wrote", OUT)


if __name__ == "__main__":
    main()
