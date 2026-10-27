/* ─────────────────────────────────────────────────────────────────────────────
   Logik Herder, Academy Edition XXIV (1762–64) — AA 24:1–6
   UNCORRECTED OCR. Machine-extracted from the Internet Archive's OCR of the
   printed volume (item kantsgesammeltes241imma) by
   Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py — do not hand-edit.

   Every word here is the OCR engine's reading of the AA's printed page. Letters
   are misread in places (`Tbat`, `rnüße`); nothing has been added, reworded or
   filled in. Before quoting, check the passage against the page image: AA 24:P
   is https://archive.org/details/kantsgesammeltes241imma/page/n<P+7>/mode/1up

   Same shape as data/logik-busolt-24.js (read the field list there), plus:

   meta.ocr          true: the text is a machine reading, not a transcription
   meta.scan         where the page images are, and how to get from an AA page
                     to one
   meta.contentsRefer what the page numbers in `contents` refer to
   meta.editorialNote the edition's own note on its sigla, verbatim (Dohna)
   block.ocrConf     the OCR engine's mean word confidence for the block, 0–100;
                     low values mark passages to check first
   block.dehyphenated how many printer's line-end hyphens were removed
   block.joined      "layout": the paragraph runs on across a page, read off the
                     AA's typesetting (the next page's first line not indented)
   block.kind        text | heading | table. A `heading` is the section's
                     heading again, kept in the text so that nothing the page
                     prints drops out of it. A `table` has empty `text` and the
                     OCR's lines as read in `lines`, its columns not reliable:
                     see the page image (`note` says so)
   block.ms          as in the other files, plus: `inferred: true` where the
                     number was not read but follows exactly from the numbers
                     read on either side; `p: null` with `unresolved: true`
                     where it does not; the OCR's reading kept in `raw` wherever
                     it is not the number; `approx: true` where the number had
                     no `/` in its line and is placed at the line's start
   ───────────────────────────────────────────────────────────────────────── */

const LOGIK_HERDER = {
 "meta": {
  "work": "Logik Herder",
  "label": "I. Logik Herder",
  "volume": 24,
  "date": "1762–64",
  "provenance": "I Logik Herder fonft iÖÄÄ",
  "source": "OCR of the printed AA XXIV (Internet Archive item kantsgesammeltes241imma), by Individuals/mikrishnan/aa24-ocr/parse_aa24_ocr.py",
  "ocr": true,
  "quality": "uncorrected machine reading of the printed page: expect misread letters, never added or reworded text. Check any quotation against the page image (meta.scan).",
  "aa": [
   1,
   6
  ],
  "scan": {
   "item": "kantsgesammeltes241imma",
   "url": "https://archive.org/details/{item}/page/n{n}/mode/1up",
   "n": "AA page + 7",
   "note": "page image of AA 24:P is SCAN_URL with n = P + (7)"
  },
  "counts": {
   "sections": 1,
   "blocks": 24,
   "pages": 4,
   "words": 1318,
   "joinedLayout": 1,
   "dehyphenated": 22,
   "meanOcrConf": 45
  }
 },
 "front": [
  "I",
  "Logik Herder",
  "fonft iÖÄÄ"
 ],
 "contents": [],
 "sections": [
  {
   "id": "s01",
   "title": "Logik Herder",
   "titleSrc": "none",
   "headings": [],
   "provenance": "I Logik Herder fonft iÖÄÄ",
   "blocks": [
    {
     "id": "herder-s01-001",
     "kind": "text",
     "aa": 3,
     "text": "/ Alles geschieht nach Regeln. Stein, Waßer bewegt sich so der Mensch in seinen mechanischen Handlungen. — Die Handlungen des Verstandes sind gewisse Phänomene an der Natur. — Der Mensch folgt diesen Regeln entweder unbewust, blos aus Gewohnheit, ohne Bewustseyn so ists auch mit den Ausübungen des Verstandes, auch oft ohne Regeln, bewustseyn durch Erfahrung ist sehr achtungswürdig Da aber nicht alles durch Erfahrung erkannt seyn kann: so wird ein höherer Gebrauch erfodert selbst in Bewegungen cf . Tanzen : da mußten die Regeln angewandt werden im gelehrten Erkennen. Das ist die logica Aöyos ratio instrumentum sind gleichsam das Modell der logischen Regeln. §. 2 Eine Logik soll vor Menschen geschrieben seyn. Menschen müßen also die logischen Regeln erkennen und befolgen können : folglich muß der Logiker die menschliche Seele kennen, der da schreibt, auch die müssen sie kennen, die sie lehren. Nicht ohne Psychologie.",
     "dehyphenated": 2,
     "ocrConf": 37
    },
    {
     "id": "herder-s01-002",
     "kind": "text",
     "aa": 3,
     "text": "§. 3 Gelehrte Form ist von andern unterschieden. Gelehrsamkeit ist blos in höher m Grad gesunde Vernunft. Gelehrte von Profeßion sind von Gewerbe. Es kann Gelehrte geben ohne Profeßion. so wie es Gelehrte von Profeßion ohne Gelehrsamkeit gibt.",
     "ocrConf": 39
    },
    {
     "id": "herder-s01-003",
     "kind": "text",
     "aa": 3,
     "text": "Historie:",
     "ocrConf": 57
    },
    {
     "id": "herder-s01-004",
     "kind": "text",
     "aa": 3,
     "text": "Griechen: Freiheit, Ehre, Gesundheit, Reichtum.",
     "ocrConf": 50
    },
    {
     "id": "herder-s01-005",
     "kind": "text",
     "aa": 3,
     "text": "Weise denen ein gutes Wort entfuhr: Solon, ein guter Legislator. Thaies war gereist und gelehrt. Pythagoras war auch gereist, stiftete die Italische Secte; loderte einen unterthänigen Verstand durch Stillschweigen und Verborgenheit verdarb, er entdeckte seine wenigen Weisheits Lehren in emblematischen Ausdrücken. Demokrit der erste Naturalphilosoph, System wild, die Schöpfung erklärt er durch eine mechanische Bewegung, und durch Zufall. Leucipp und Demokrit von Abdera",
     "dehyphenated": 1,
     "ocrConf": 41
    },
    {
     "id": "herder-s01-006",
     "kind": "text",
     "aa": 3,
     "aaEnd": 4,
     "pages": [
      {
       "p": 4,
       "i": 390
      }
     ],
     "text": "Epikur trieb die Sittlichkeit bis auf den höchsten Grad, das Vergnügen der Seele so hoch, daß man so gar im grösten Leiden Süßigkeit findet, weil Tugend es überwindet. Principium die Summe des Glücks ist die Summe des Vergnügens und die Tugend befördert es. Aus Sokrates entstand die Schule der Cyniker. Da die Autorität und das Anständige viel Zwang hat etc. so glaubten sie man müsse das abschaffen. Principium der Lust ist schädlich was allen zu thun erlaubt ist, kann man in der gr Osten Gesellschaft thun.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 42
    },
    {
     "id": "herder-s01-007",
     "kind": "text",
     "aa": 4,
     "text": "Pyrrho, an sich ein verdienstvoller Mann, stiftete eine Sekte, einen / andern Weg zu gehen, alles niederzureissen. Pyrrho: daß die allgemeinen Dogmata (ausgenommen der Mathematik) ungewiß wären. Die Nachfolger gingen weiter. Sokrates scheint etwas Pyrrhoniker gewesen zu sein. Das gewiße was glücklich macht, müsse angenommen werden. War Praktischer Philosoph.",
     "dehyphenated": 1,
     "ocrConf": 47
    },
    {
     "id": "herder-s01-008",
     "kind": "text",
     "aa": 4,
     "text": "Plato venerierte den Socrates. Sehr dunkel: Akademische Sekte: noble Weisheit",
     "ocrConf": 47
    },
    {
     "id": "herder-s01-009",
     "kind": "text",
     "aa": 4,
     "text": "Aristoteles wurde von Plato der Undankbarkeit beschuldigt : ein Genie von oberstem Rang: weitläufige Aussichten, Naturgeschichte: Politik Rhetorik gut, aber Logik, Metaphysik von grostem Schaden : Peripatetiker",
     "ocrConf": 46
    },
    {
     "id": "herder-s01-010",
     "kind": "text",
     "aa": 4,
     "text": "ZenoEleates: Die stoischen Philosophen trieben nicht Spekulation sind praktische Weltweise, übertrieben die Tugend: man müsse die Tugend um ihres Werths willen, nicht um der guten Folgen willen lieben, schädliches Exempel Brutus — viele große Leute.",
     "ocrConf": 43
    },
    {
     "id": "herder-s01-011",
     "kind": "text",
     "aa": 4,
     "text": "Römer alles von Griechen: da Freiheit mit Knechtschaft schon conflictierte da entstanden die Wissenschaften, vorher blos Patrioten, wehreten sie sich gegen die Wissenschaften wie Cato Censor gegen Arzte. Darnach die griechischen Sekten — bis die Wanderungen der Völker alles übern Haufen warfen — bis Averroes und Avicenna. — Alle Künste stehen im Banne. — Reform ist seit dem mittleren des 17 Jahrhunderts sehr merklich — Cartesius war insonderheit bekannt seine Methode ist sehr gut. — Er ist ein Muster im selbst denken (wenn wir selbst dächten wir wären methodische Philosophen) Doch nach ihm war wider alles Cartesianismus, dasselbe Verderben des Ansehns ! daß sie bis 1728 den Newton nicht annahmen. Leibnitz breitete sich aber sehr aus. — Die Metaphysik verbeßerte er durch seine Methode — Nach ihm war alles Leibnizianismus. (Die Catholiken aber lieben Scholastik die Subtilitäten zu erklären) Wolf war Ali gegen Mahomet — Crusius geht ganz in der Methode ab",
     "dehyphenated": 3,
     "ocrConf": 41
    },
    {
     "id": "herder-s01-012",
     "kind": "text",
     "aa": 4,
     "text": "Überhaupt, kein Philosoph kann ein Wolfianer etc. sein weil er selbst denken soll. Wolf, Crusius müßen alles definieren, demonstrieren etc. Und da sie Exempel solcher Irrthümer vor sich hatten, behaupteten sie doch ihren eigenen Irrthum.",
     "ocrConf": 46
    },
    {
     "id": "herder-s01-013",
     "kind": "text",
     "aa": 4,
     "text": "/ Wir werden das gute nehmen, woher es komt — der edle Stolz selbst zu denken, selbst unsere Fehler zuerst entdeken",
     "ocrConf": 38
    },
    {
     "id": "herder-s01-014",
     "kind": "text",
     "aa": 5,
     "text": "Logische Historie: Alle Logiken haben Schaden gethan Kästner, denn man muß bei Logiken selbst eine Logik haben.",
     "ocrConf": 48
    },
    {
     "id": "herder-s01-015",
     "kind": "text",
     "aa": 5,
     "text": "Aristoteles, der selbst solche elende Philosophie aufbrachte, konnte von Regeln schreiben. Scholastische Logik zu studiren ist Folter. Mallebranche : Logik durch die Physik. Tschirnhausen abstrahierte die Regeln aus der Mathematik. Locke ist wirklich Metaphysiker. — Regeln aus der gemeinen Erkenntniß zu abstrahiren ist für die Logik — aus der gelehrten Erkenntnis gehört nach der Philosophie.",
     "dehyphenated": 3,
     "ocrConf": 46
    },
    {
     "id": "herder-s01-016",
     "kind": "text",
     "aa": 5,
     "text": "§. 6. Wahrscheinlichkeit dialectica ist schwerer, weil Wahrscheinlichkeit",
     "dehyphenated": 1,
     "ocrConf": 45
    },
    {
     "id": "herder-s01-017",
     "kind": "text",
     "aa": 5,
     "text": "30. Praktisch auf die Direktion des Willens gerichtet : bisher theoretisch",
     "dehyphenated": 1,
     "ocrConf": 39
    },
    {
     "id": "herder-s01-018",
     "kind": "text",
     "aa": 5,
     "text": "Es ist eine hauptvollkommene Erkenntnis. Diese Vollkommenheit aber nicht in der Logik sondern Moral — Thelematologie des Krusius 32. von der Vernunft gegen die Ästhetik logische Vollkommenheit gefordert 1) Da wir unserer Natur nach nicht reine Geister sind — da der überhalbe Theil der Erkenntnis verworren ist : so muß man sich auch der verworrenen d. i. schönen bedienen. Als bloße Geister blos Deutlich in Begriffen, Gründlich in Schlüßen, Weitläufig und Praktisch, keine Schönheit — wir fodern also bey der gesamten Erkenntnis auch Schönheiten (nicht zwar bei jeder z. E. der im höhern Grad deutlichen Erkenntnisse) sonst machen sie Eckel. Doch eher muß man Wahrheit als Schönheit suchen: Eher Tugend als Politeße, erst Dauerhaftigkeit in Gebäuden 2) Das Schöne dient oft mehr dem Praktischen als die Logik — Leidenschaften werden blos durch Leidenschaften bestritten — Zwischen Schönheit und logischer Deutlichkeit ist ein verschiedener Gesichtspunkt, also kein Vergleich welches beßer ist — Ein Mann, mit Frau 36. imperfectio:",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "herder-s01-019",
     "kind": "text",
     "aa": 5,
     "text": "1) contradictorie dicta: des Mangels (Unwissenheit)",
     "ocrConf": 50
    },
    {
     "id": "herder-s01-020",
     "kind": "text",
     "aa": 5,
     "text": "2) contrarie dicta: der Beraubung, Irrthum jene ist logisch : A et non A diese ist real : A et B",
     "ocrConf": 39
    },
    {
     "id": "herder-s01-021",
     "kind": "text",
     "aa": 5,
     "text": "/ 37. Bey jeder Vergleichung muß ich die Sachen in gleiche Umstände setzen. — Vergleichung des Historischen und Philosophischen Erkenntnisses. Historische Erkenntnis muß der Philosophischen data geben",
     "dehyphenated": 1,
     "ocrConf": 43
    },
    {
     "id": "herder-s01-022",
     "kind": "text",
     "aa": 5,
     "text": "38. weil die deutliche Erkenntnis die Verwirrung verhütet 2) das Erkenntnis allgemeiner macht 3) weil es besonderes Vergnügen macht",
     "ocrConf": 50
    },
    {
     "id": "herder-s01-023",
     "kind": "text",
     "aa": 6,
     "text": "Sectio II.",
     "ocrConf": 66
    },
    {
     "id": "herder-s01-024",
     "kind": "text",
     "aa": 6,
     "text": "Es ist ein Grundtrieb der Menschlichen Seele das Feld der Ideen zu erweitern (Sulzer sucht es zum ersten Grundtrieb zu machen) Dies ist von den übrigen Arten der Erkenntnis unterschieden. Es ist kein formale sondern materiale. Das formale der Erkenntnis beruht sehr auf dem materialen. — Mit desto weniger kan einer nichts machen und also fehlen ihm große Unterscheidungsgründe; — Man muß also ceteris paribus auch nach der Weitläufigkeit zu streben. 41. Das Gegentheil ist eine partiale Unwißenheit totale Unwißenheit ist selbst der historischen Erkenntnis Mangel (Die historische Erkenntnis ist die unterste: daher man sie Kindern beibringt) §.42. 2) Ein Kepler erkannte das Gesetz historisch Newton Philosophisch 43 1) aut historisch. Exempel Die Alten wußten von den Sonnenflecken ohne Tubos, aut philosophisch : wir ermangeln der Philosophischen Erkenntnis von Sonnenflecken des Poles, weil wir nicht der Sonne so nah sind und die erste Grundbildung und Triebfeder der Natur nicht durchschauen 2) Einige Kleinigkeiten §. 44. Der Autor betrachtet die Logik aus dem Punkt der Pflicht — Er hält die Mittel gegen den Zweck — Horizont der gemeinen und gelehrten Erkenntnis 45. nothwendig physisch um des Grads seiner Kräfte willen : nicht moralisch. Exempel Die Zukunft zu wißen ist auch über den Horizont der historischen Erkenntnis. Die erste Bewegung des Horizonts ist über die Philosophische Erkenntnis. Regeln: Viele seiende Dinge sind über den Horizont der historischen Erkenntnis erhöht — 1) wegen der Schwäche des Gedächtnisses 2) weil die Dinge nie zu uns kommen Exempel die Sterne. II) Noch mehr Dinge sind über die philosophische Erkenntnis erhöht. Der seine Unwißenheit hierin gesteht, ist nicht deß wegen unwißend. Das Gegentheil Marktschreier. III) So wie wir vieles entdeckt haben, was über den Horizont der Alten war, so ist manches uns (Kindern) überm Horizont, was künftiger (Mannern) Nachwelt nicht sein wird. IV. was über unsern Horizont ist, ist nicht gleich übern Horizont der anderen Verstandes Fähigkeiten gelegt : V nicht ohne Noth etwas über den Horizont setzen, um die Fähigkeiten nicht zu unterdrücken.",
     "dehyphenated": 7,
     "ocrConf": 42
    }
   ]
  }
 ]
};
