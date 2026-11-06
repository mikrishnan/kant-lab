/* ─────────────────────────────────────────────────────────────────────────────
   Metaphysik K3 (Arnoldt), Academy Edition XXIX (1794/95) — AA 29:941–1040
   UNCORRECTED OCR. Machine-extracted from the Internet Archive's OCR of the
   printed volume (item kantsgesammeltes0029kant) by
   logic-portal/aa24-ocr/parse_aa24_ocr.py — do not hand-edit.

   Every word here is the OCR engine's reading of the AA's printed page. Letters
   are misread in places (`Tbat`, `rnüße`); nothing has been added, reworded or
   filled in. Before quoting, check the passage against the page image: AA 29:P
   is https://archive.org/details/kantsgesammeltes0029kant/page/n<P-735>/mode/1up

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
                     AA's typesetting (the next page's first line not indented);
                     "inferred" (AA XXIX): a line indented like a paragraph's
                     first was joined to the one before, because that broke off
                     mid-sentence and this opens in lower case — the hanging
                     indent of a list item's second line. The extractor's
                     judgement, not the layout's
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

const METAPHYSIK_K3 = {
 "meta": {
  "work": "Metaphysik K3 (Arnoldt)",
  "label": "Metaphysik Arnoldt (K3)",
  "volume": 29,
  "date": "1794/95",
  "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
  "source": "OCR of the printed AA XXIX (Internet Archive item kantsgesammeltes0029kant), by logic-portal/aa24-ocr/parse_aa24_ocr.py",
  "ocr": true,
  "quality": "uncorrected machine reading of the printed page: expect misread letters, never added or reworded text. Check any quotation against the page image (meta.scan).",
  "aa": [
   941,
   1040
  ],
  "scan": {
   "item": "kantsgesammeltes0029kant",
   "url": "https://archive.org/details/{item}/page/n{n}/mode/1up",
   "n": "AA page + -735",
   "note": "page image of AA 29:P is SCAN_URL with n = P + (-735)"
  },
  "counts": {
   "sections": 10,
   "blocks": 442,
   "pages": 96,
   "words": 33895,
   "joinedLayout": 71,
   "dehyphenated": 747,
   "meanOcrConf": 80
  }
 },
 "front": [
  "Metaphysik Arnoldt",
  "Bemerkungen über Metaphysic",
  "nach Baumgarten",
  "aus dein Vortrage des",
  "Herrn Prof. Kant",
  "pro 1794/95"
 ],
 "contents": [],
 "sections": [
  {
   "id": "s01",
   "title": "Metaphysik K3 (Arnoldt)",
   "titleSrc": "none",
   "headings": [],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s01-001",
     "kind": "text",
     "aa": 945,
     "ms": [
      {
       "p": 1,
       "i": 0,
       "raw": "l",
       "inferred": true
      }
     ],
     "text": "1.) Die Metaphysic gehört zum materiellen Theil der Philosophie, oder begreift ihn vielmehr unter sich, und beruhet daher, da sie wirkliche Objecte voraussetzt, auf Gesetzen, d. i. auf Erkenntniß Gründen (principiis) deßen, und über dasjenige, was zum Daseyn der Dinge gehört. Von ihr scheidet sich daher der blos formelle Theil der philosophie, oder die in der Logic vorgetragene Gesetze des Denkens, ab, da diese von den objecten selbst abstrahiret. Sie unterscheidet sich schon dadurch von der Mathematic, da diese nicht so, wie die philosophie, auf Gesetze der Erkenntniß der Dinge, sondern auf gemachte Begriffe der Dinge durch die Construction derselben beruht.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-002",
     "kind": "text",
     "aa": 945,
     "ms": [
      {
       "p": 2,
       "i": 582
      }
     ],
     "text": "Die metaphysischen Erkenntniße müßen daher schlechthin Vernunft Erkenntniße seyn, so a priori entstehen, durch reine Vernunft Begriffe, d. i. die principia oder Erkenntniß Gründe sind so beschaffen, daß man mit der Erkenntniß selbst die Notwendigkeit deßen verbindet, was man erkennt, und die Begriffe sind auf Gegenstände gerichtet, die nicht nur von aller Erfahrung unabhängig erkannt werden, sondern die auch nie ein Gegenstand der Erfahrung möglicher Weise, werden können. ZE. Gott, Freiheit, Unsterblichkeit. Sie differiren also e diametro allen empirischen Erscheinungen, und daraus abgeleiteten Grundsätzen: die Metaphysic hat also keine principia a posteriori, sondern nur allein a priori : sie sind gegeben und werden durch die Vernunft allein erkannt, nicht aber gemacht.",
     "dehyphenated": 6,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s01-003",
     "kind": "text",
     "aa": 945,
     "text": "Generaliter ist also Metaphysic das System der reinen Philosophie, und also, um den specifischen Unterschied von allen empirischen Erkenntnißen auszudrücken, sowie um sie von der reinen Mathematic abzuscheiden, ist Metaphysic das System der reinen Vernunft-Erkenntniße durch Begriffe. Die Gegenstände derselben sind der materielle Theil der philosophie, nemlich physic und ethic, d. i. die Gesetze der Natur und der Freiheit. Daher theilt sie sich ab in",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s01-004",
     "kind": "text",
     "aa": 945,
     "text": "a. ) Metaphysic der Natur, d. i. die Erkenntniß der Beschaffenheit der Objecte ex principiis a priori.",
     "dehyphenated": 1,
     "ocrConf": 87
    },
    {
     "id": "metaphysik-k3-s01-005",
     "kind": "text",
     "aa": 945,
     "text": "b. ) Metaphysic der Sitten, d. i. die Erkenntniß der Regeln oder Bestimmungs Gründe unserer Handlungen ex principiis a priori.",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s01-006",
     "kind": "text",
     "aa": 946,
     "text": "Man nennt sie auch physicam generalem, weil sie nur aus principiis a priori erkannt wird. Die Erkenntniß der Natur oder Naturlehre überhaupt ist nemlich entweder Körperlehre, so in specie Naturlehre heißt, insofern sie ein Gegenstand des äußern Sinnes ist, oder Seelenlehre, insoweit sie ein Gegenstand des innern Sinnes ist, und mithin von allen körperlichen Veränderungen abstrahirt.",
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s01-007",
     "kind": "text",
     "aa": 946,
     "text": "Sie ist hierbei indeß ganz verschieden von einer empirischen Sittenoder Naturlehre.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s01-008",
     "kind": "text",
     "aa": 946,
     "ms": [
      {
       "p": 3,
       "i": 124
      },
      {
       "p": 4,
       "i": 1484
      }
     ],
     "text": "Hier bestimmen sich die Regeln der Erkenntniß aus der Erfahrung nach Maaßgabe der Erscheinungen, die Sitten oder Natur geliefert haben, um principia daraus abzuleiten: z.E. die Gesetze der Policey sind Sitten Gesetze, so aber pragmatisch, oder vielmehr praktisch, die Gesetze der Sicherheit und der Gemächlichkeit des Lebens bestimmen. Ferner die Naturlehre der Chemisten. Deren principia sind offenbar auf Erfahrung gebauet, und daraus erkannt. So kann auch die Naturlehre ex principiis a posteriori erkannt werden. Aber von allen diesen Arten der Erkenntniße ist das metaphysische Erkenntniß ganz verschieden: es beschäftigt sich gar nicht mit den objecten wie sie sind, da dadurch die Noth wendigkeit der Erfahrung, wenn Metaphysic darauf gebauet wäre, nicht eingesehen werden würde. Ebenso wenig legt sie die Anschauungen a priori zum Grunde, aus welchen die Mathematic allein ihre Vernunft-Erkenntniße bauet: nemlich auf Raum und Zeit. Die definition des Verfassers (§ 1.) die aus dem \\\\ olf genommen ist, ist darin falsch, daß er prima principia cognitionis zur Metaphysic verlangt, denn das kann doch nur bedeuten, die ersten Begriffe in der Abstraction derselben, mithin in der Reihe der Begriffe : hiernach würde die Metaphysic sich aber nur mit dem Begriff von einem Dinge beschäftigen, da dies der höchste Begriff der Vernunft ist, und müßte dann herunter steigen: beym herunter steigen ließe sich aber nicht bestimmen, Anfang und Ende, und welches der erste oder letzte Begriff seyn soll : und dann würde sich damit jeder empirische Begriff verbinden, welches aber fehlerhaft ist, indem er außer den Gränzen der Metaphysic hegt, z. E. ens — Substanz — composition, dagegen Corpus ist schon ein empirischer Begriff im Raume.",
     "dehyphenated": 3,
     "ocrConf": 75
    },
    {
     "id": "metaphysik-k3-s01-009",
     "kind": "text",
     "aa": 946,
     "text": "Es wäre so, als wenn man die Geschichte nach Zeiträumen abschneidt: man könnte dann z.E. die alte Geschichte aufs lste Saeculum oder bis auf den heutigen Tag extendiren.",
     "dehyphenated": 2,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s01-010",
     "kind": "text",
     "aa": 947,
     "text": "Der Begriff — erste Gesetze — ist also zu unbestimmt, indem alle reine Vernunft Erkenntniße durch Begriffe hierher gehören; ohne daß man sie die ersten nennen kann.",
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s01-011",
     "kind": "text",
     "aa": 947,
     "text": "2.) Dem Wortverstande nach ist Metaphysic eine Wißenschaft der Natur, die sich auf den rationalen Theil und darauf einschränkt, insoweit sie ohne Erfahrung erkannt werden kann. Die Meta-physic ist physic über die empirische Erkenntniß der Natur hinaus: hier erwartete man ein großes Feld, ohne es zu bestimmen, oder seinen Grenzen nach bestimmen zu können. Man traf hier drey Objecte, die über die Grenzen der Natur Erkenntniß lagen, und blos a priori, oder durch die menschliche Vernunft allein erfunden und erkannt wurden. Dies sind",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-012",
     "kind": "text",
     "aa": 947,
     "text": "1. ) Gott, d. i. der erste Anfang aller Dinge.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s01-013",
     "kind": "text",
     "aa": 947,
     "ms": [
      {
       "p": 5,
       "i": 124
      }
     ],
     "text": "2. ) Freiheit, d. i. ein von allem Natur Einfluß unabhängiges Vermögen des Menschen, mit Widerstrebung gegen alle sinnliche Antriebe und Kräfte der Natur, der Vernunft gemäß zu handeln.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-014",
     "kind": "text",
     "aa": 947,
     "text": "3. ) Unsterblichkeit, d. i. der Gegenstand der Untersuchung des Verstandes, inwiefern die Seele, als ein eignes Wesen, den physischen Menschen überleben werde.",
     "dehyphenated": 1,
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s01-015",
     "kind": "text",
     "aa": 947,
     "text": "Alle drey sind reine Vernunft Begriffe, die sich in der Erscheinung schlechthin nicht darstellen laßen, die mithin blos gedacht werden können. Sie kann man daher übersinnliche Gegenstände, Noumena d. i. Gegenstände des Verstandes, nennen, und sie den phaenomenis opponiren.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s01-016",
     "kind": "text",
     "aa": 947,
     "aaEnd": 948,
     "pages": [
      {
       "p": 948,
       "i": 985
      }
     ],
     "ms": [
      {
       "p": 6,
       "i": 769,
       "raw": "<",
       "inferred": true
      },
      {
       "p": 7,
       "i": 2077
      }
     ],
     "text": "Der Versuch nun, diese Gegenstände näher zu untersuchen, war die Entstehung der Metaphysic. Nicht war also der Zufall der Grund des Ursprunges. Man giebt vor, daß der Stifter der Metaphysic, Aristoteles, nicht die Absicht gehabt habe, ein System reiner philosophischer Erkenntniße, die über die physic hinausliegen, zu schreiben, auch nicht geschrieben, sondern daß er verordnet habe, etwas meta physicam, i. e. post physicam, zu heften. Es ist dies so leere Erzählung, als die von der Entstehung des termini philosophie, danach Pythagoras sich nicht sophon, sondern nur einen philo-sophon nennen wollte. Es lag wohl in der Natur der Dinge selbst, daß man um nähere Entwicklung dieser übersinnlichen Gegenstände sich bemühte. Nur auffallend ist es, daß der Mensch (und jedem Menschen ist dies angebohren) ein Interesse daran fand, und noch findt. Denn zur Erweiterung der empirischen principia, der Wißenschaft der empirischen physic, trägt die Metaphysic nichts bey. die Kenntniß ist in Ansehung der physic ganz unnöthig, indem die principia der metaphysic ganz beyseite gesetzt, und von ausgemachten Erscheinungen ausgegangen wird, und die daraus abgeleiteten Grundsätze sind hinlänglich um alles daraus zu erklären. Die Erfahrung bestätigt z.E. die rationalen Sätze: bey allen Veränderungen vergeht nie die Substanz, sondern nur die Form der Dinge, oder: jede Veränderung hat ihre Ursache; so sehr, daß man sie blos annimmt, ohne auf ihren Grund zu forschen, und man wird schon durch die Erfahrung von ihrer Wahrheit unter allen Umständen gewiß. Dagegen ist es gewiß, daß alle unsere sinnliche Erkenntniße auch nur sinnlich bedingt sind, mithin so, wie die Dinge selbst veränderlich, und zufällig-gewiß. Darin liegt der Grund, daß der Mensch insofern keine Befriedigung für seine Vernunft dabei findt, als er sein summum bonum, d. i. den höchsten Endzweck aller seiner Zwecke, den höchsten Grad der Würdigkeit glücklich zu seyn, mit der größten Sittlichkeit verbunden, zu erkennen und zu erreichen sich bemüht. Dieser Gegenstand seiner Bemühung liegt über die Natur hinaus, er kann alle seine empirische Kenntniß nicht für hinlänglich dazu finden, er muß ihn blos durch die Vernunft in den Gesetzen derselben finden: er fühlt es als nothwendig, daß dies für die Vernunft allein der höchste Zweck und Bestimmung sey: er mag z.E. seine Untersuchung auf Bestimmung von Pflicht und Recht, auf Belohnung seiner Handlungen in jenem Leben, auf Bestimmung seiner selbst usw. richten; und hierin liegt der Grund, daß Metaphysic schlechthin cultivirt werden muß, weil sonst der ganze Zweck aller theoretischen und practischen Vernunft Erkenntniße nicht erfüllt werden kann. Daher ist es auch gewiß, daß jeder Mensch sich mit seiner eignen Metaphysic beschäftigt, und darüber eigentlich kein Zweifel ist, an metaphysica enucleanda sit; dagegen auf die Methode kommt es an, wornach sie behandelt wird. Daher alle Verächter der Metaphysischen Wißenschaften sich darin selber strafen, daß sie die Wißenschaft selbst verachten, und doch ihre eigne Methode schätzen, über übersinnliche Wahrheiten zu denken. Kurz, ohne Metaphysic kann kein Mensch seyn.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 13,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s01-017",
     "kind": "text",
     "aa": 948,
     "text": "3.) Die ( ritic der reinen Vernunft ist die Propaedeutic zur transzendentalph ilosophie.",
     "dehyphenated": 1,
     "ocrConf": 72
    },
    {
     "id": "metaphysik-k3-s01-018",
     "kind": "text",
     "aa": 948,
     "aaEnd": 949,
     "pages": [
      {
       "p": 949,
       "i": 189
      }
     ],
     "ms": [
      {
       "p": 8,
       "i": 136
      }
     ],
     "text": "Man nennt nemlich eine Wißenschaft, die sich mit der Möglichkeit beschäftigt, ein Erkenntniß a priori einzusehen, die Critic der reinen Vernunft. Alle Erkenntniße der Vernunft, und die unabhängig vor aller Erfahrung a priori gedacht werden, gehören hieher, sie mögen mathematische oder philosophische Gegenstände betreffen, z.E. alle Veränderung muß ihre Ursache haben.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s01-019",
     "kind": "text",
     "aa": 949,
     "ms": [
      {
       "p": null,
       "i": 1054,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "Die erkennende Vernunft steht hier als subject in Ansehung ihres Vermögens vor dem prüfenden Richterstuhl darüber, in wie weit sie sich in Ansehung dergleichen Erkenntniße beschäftigen kann, die critic der reinen Vernunft ist dabei als eine höhere Logic anzusehen, indem sie der Vernunft Regeln an die Hand giebt, wie sie objecte a priori erkennen soll, und diese Regeln sind nichts als principien a priori : sie ist also von der Logic selbst darin verschieden, daß diese von allen Objecten abstrahirt, und die Regeln des Denkens überhaupt angiebt. Sie heißt Critic, weil sie nicht dogmatisch verfährt, sondern sich auf die Untersuchung der Irthümer und Prüfung unserer angemaaßten Urtheile einläßt. In specie ist also diejenige Philosophie, die sich mit der Möglichkeit der Erkenntniße a priori in unserer Vernunft beschäftigt, die Critic der reinen Vernunft; das System derjenigen Erkenntniße selbst aber, welche die elemente der reinen Vernunft enthalten, ist transcendental-Philososphie, die also von der Critic darin differirt, daß diese die Möglichkeit, a priori zu erkennen untersucht, die transcendental Philosophie dagegen den objectiven Inbegriff aller derjenigen Erkenntniße vor Augen hat, die a priori erkannt, und die als elementa oder erste principien unserer Erkenntniß angesehen werden. Man nennt die transcendental Philosophie auch Ontologie, und sie ist das product der Critic der reinen Vernunft.",
     "dehyphenated": 4,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s01-020",
     "kind": "text",
     "aa": 949,
     "text": "4.) Alle Begriffe sind erworben, aber nicht alle von den Sinnen. Das Vermögen dagegen, Begriffe durch Entwicklung der Merkmale zu erwerben, ist angebohren. Z.E. der Haase sucht beym Verfolgen den Hund zu überlisten, der Hund lernt durch Übung die Kunstgriffe des Haasen, und sucht ihm überlegen zu werden. Hier sind freilich keine Begriffe anzunehmen, da Thiere kein Vernunft Vermögen haben, aber der Instinct bildet durch die vielen ähnlichen Fälle eine Erfahrung, die dem Hunde zur Richtschnur dient. Begriffe setzen ja schon Vorstellungen von Objecten voraus, und sind von den Merckmalen abstrahirt, sie können also nicht angebohren seyn, sondern werden erworben, oder gemacht, dies kann aber nicht anders als durch das Vermögen der Seele geschehen, so hiebei operirt.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-021",
     "kind": "text",
     "aa": 949,
     "text": "Es war indeß bey dem allen ein großes Problem:",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s01-022",
     "kind": "text",
     "aa": 949,
     "text": "ob viele Begriffe uns angebohren, oder ob alle Begriffe sive I a priori sive a posteriori erworben wären.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s01-023",
     "kind": "text",
     "aa": 950,
     "text": "Plato nahm die ideas connatas an, Aristoteles dagegen das principium nihil est in intellectu, quod antea non fuerit in sensu, und vertheidigte nach dem Sinn dieses Princips, daß wir alle Begriffe durch die Sinne erwürben. Plato nahm zwar auch sinnliche Vorstellungen an, aber er schied diese Quelle der Erkenntniß als ungewiß ab von den reinen Verstandes Begriffen als den ideis connatis, die er für allein gewis annahm. Plato behauptete nemlich, die Begriffe a priori oder reine Vernunft Begriffe würden blos aus dem fond der Vernnuft producirt, und zu deren Bewußtseyn nicht nöthig, Gegenstände der Sinne zu Hülfe zu nehmen, und die Erfahrung bey ihrer Entstehung vorauszusetzen. Es setzten ihn nemlich die mathematischen Wahrheiten und deren so fruchtreiche Folgen und unumstößliche Gewisheit in Erstaunen, z.E. die Sätze, so man aus der Figur des Zirkels in mathesi pura zog.",
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-024",
     "kind": "text",
     "aa": 950,
     "text": "Im Zirkel geben alle sich durchschneidende Linien richtige Verhältnisse der Linien, Winkel, Dreiecke, z.E.",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 1,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s01-025",
     "kind": "text",
     "aa": 950,
     "text": "a : b : c = b : d : e",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s01-026",
     "kind": "text",
     "aa": 950,
     "ms": [
      {
       "p": 11,
       "i": 353
      }
     ],
     "text": "Er nahm an, daß der menschliche Verstand nicht durch sinnliche Wahrnehmung diese Begriffe und Sätze aufgefunden hätte, sondern, daß in dem Menschen ein übersinnliches Erkenntniß Vermögen vorhanden sey, d. i. ein noumenon, so sich Erkenntniße rein abgezogen bilden konnten, ohne die Sinne zu Hülfe zu nehmen. Man kann dies Vermögen und das Erkenntniß vermöge deßelben wenigstens übersinnlich nennen. Nur seine hypothese war mystisch. Er legte nemlich eine reine Anschauung des nicht sinnlichen oder = eine übersinnliche Anschauung zum Grunde und nahm an, daß die Seele, ehe sie in die körperliche Verfaßung gerathen, das Vermögen zur Anschauung der Gottheit gehabt, und wenn sie gleich deßen in diesem Leben nicht mehr theilhaftig sey, dennoch ein Bewustseyn jener reinen Verstandes Ideen bey den Menschen erweckt werden könne, und daß dieses Bewustseyn die Quelle der Erkenntniß a priori sey.",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s01-027",
     "kind": "text",
     "aa": 950,
     "aaEnd": 951,
     "pages": [
      {
       "p": 951,
       "i": 263
      }
     ],
     "text": "Aristoteles nahm dagegen an, daß wir durch die Vernunft allein gar keine Begriffe erlangen könnten, leugnete die ideas connatas, und behauptete vielmehr, daß alle unsere Begriffe ihre Quelle nur allein in der sinnlichen reception hätten, und mithin durch die Erd fahrung erworben würden, und leugnete die ideas a priori und statuirte nur sensualia; daher der berühmte Streit über die Gewisheit unserer Erkenntniß.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s01-028",
     "kind": "text",
     "aa": 951,
     "ms": [
      {
       "p": 12,
       "i": 253
      }
     ],
     "text": "Die Vertheidiger des noumenon (oder der reinen Verstandes Begriffe, d. i. daß wir durch das reine Vernunft- Vermögen im Stande wären, ohne Erfahrung, Begriffe zu bekommen, die man angebohren nennt) behaupteten: phaenomenorum s. sensibilium non datur scientia (d. i. die Sinne böten keinen Stoff zur Wahrheit oder Gewisheit des Erkenntnißes, phaenomena heißen nemlich alle Erkenntniße a priori, deren Gegenstand möglich ist, noumena dagegen Erkenntniße, oder überschwengliche Begriffe, so keinen Gegenstand in der möglichen Anschauung haben.). Die Vertheidiger der phaenomenorum lehnten dagegen die reinen Verstandes Begriffe ab: es gebe nur Gewisheit und Wahrheit in äußern Dingen.",
     "dehyphenated": 5,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s01-029",
     "kind": "text",
     "aa": 951,
     "text": "Epicur statuirte nur Begriffe, insoweit die Gegenstände derselben sichtbar dargestellt werden konnten — daher er auch eine Gottheit geradehin leugnete.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s01-030",
     "kind": "text",
     "aa": 951,
     "text": "Die Sceptiker nahmen weder bey Verstandes- noch empirischen Erkenntnißen eine Gewisheit, und die existenz an.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s01-031",
     "kind": "text",
     "aa": 951,
     "ms": [
      {
       "p": 13,
       "i": 662
      }
     ],
     "text": "Man muß bey der Frage : an ideae connatae existant, zwischen dem modum acquirendi und modum habendi unterscheiden. Alle Erkenntniß fängt von der Erfahrung an, auch alle Vernunft Erkenntniß kann nicht anders, als aus der Erfahrung erlangt werden. Aber deshalb stammen nicht alle Erkenntniße die wir haben, unmittelbar von der Erfahrung ab. Die Art und Weise, wie uns Erkenntniße beywohnen, oder der modus habendi, kann solche Erkenntniße produciren, die nur in der Vernunft abstrahirt von aller Erfahrung gegründet sind. Etwas ähnliches liegt in der Ableitung der Conceptus originarii — derivativi — ; beyde sind, so wie jeder Begriff, ihrer Natur nach factitii; es ist aber wahr, daß die originarii ihrem Ursprünge nach nicht auf Erfahrung sondern blos auf Vernunft gegründet sind.",
     "dehyphenated": 6,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s01-032",
     "kind": "text",
     "aa": 951,
     "text": "Um das vorhergehende näher zu bestimmen, und zu erläutern, ist gewiß :",
     "ocrConf": 65
    },
    {
     "id": "metaphysik-k3-s01-033",
     "kind": "text",
     "aa": 951,
     "text": "1.) Alle Vorstellungen und Begriffe heben beym Menschen Anfangs von Objecten der Erfahrung an. Dies heißt aber nichts weiter, als: unser Erkenntniß Vermögen muß um Erkenntniße, selbst um Verstandes Begriffe zu erhalten, durch Objecte der Erfahrung erweckt, das receptions Vermögen der Sinne in Tätigkeit gesetzt werden.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-034",
     "kind": "text",
     "aa": 952,
     "text": "2. ) Alle Begriffe sind erworben, und es kann keine idea connata geben. Denn Begriffe setzen ein Denken voraus, werden durch Auffassung der Merkmale, und abstraction des allgemeinen gemacht, oder gedacht. Gedanken entstehen also durch eine vorher vorzunehmende operatio mentis.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s01-035",
     "kind": "text",
     "aa": 952,
     "ms": [
      {
       "p": 14,
       "i": 327
      },
      {
       "p": 15,
       "i": 1366
      }
     ],
     "text": "3. ) Dem ohnerachtet giebt es Begriffe a priori, es giebt intuitus a priori, es giebt Sätze und Urtheile a priori. So ist der Begriff von Ursache und von Caussalitet, d. i. der Beschaffenheit des objects, Ursache zu seyn, ein conceptus a priori, die Vorstellung vom Raum ist ein Begriff von etwas, so nicht aus der Erfahrung abgeleitet werden darf oder daraus entspringt, vielmehr muß man die Vorstellung eines Raumes faßen, ehe man sich ein object innerhalb desselben denkt; diese Vorstellung gründt sich auf eine intuition a priori, so vor aller Erfahrung vorhergeht . Der Satz und das Urtheil : ex nihilo nihil fit oder, bey allen Veränderungen entsteht und vergeht nichts (substantielles), ist ein Urtheil a priori. Das criterium aller Begriffe a priori von Seiten der Quelle derselben liegt darin, daß sie ihren Ursprung nicht aus der Erfahrung, sondern aus dem Erkenntniß Vermögen der Verunft selbst hernehmen, mithin beruht die ganze Aufmerksamkeit nur darauf, zu untersuchen, auf welche Art wir dazu gelangen, und fähig sind, a priori zu erkennen, und dies lehrt, so wie die Schranken des Erkenntnißes, die Critic der reinen Vernunft. Es ändert übrigens bey acquisition der Begriffe a priori der Umstand nichts, daß wir unser Vermögen zu erkennen auf Gegenstände der Erfahrung anwenden : denn daraus folgt noch nicht die Nothwendigkeit, daß die erworbenen Begriffe auch von der Erfahrung und nicht lediglich aus dem Vernunft Vermögen abstammen müßten.",
     "dehyphenated": 5,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s01-036",
     "kind": "text",
     "aa": 952,
     "text": "4. ) Die Art, die Begriffe a priori zu acquiriren kann man sich, analogice wie im Natur Recht, zwiefach denken.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-037",
     "kind": "text",
     "aa": 952,
     "text": "a. ) originarie, d. i. insofern die Begriffe a priori aus der Natur des Erkenntnißvermögens oder aus dem Vermögen zu denken allein hervorgenommen sind. Z.E. Vorstellung vom Raum. Diese Begriffe sind so wenig durch Erfahrung entstanden, daß sie vielmehr vor aller Erfahrung vorhanden sind, ohne daß man sie jedoch ideas connatas nennen kann: vielleicht könnte zu letztem der Begriff von Raum im allgemeinen gehören.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s01-038",
     "kind": "text",
     "aa": 952,
     "text": "Ist außer der Fähigkeit zu erkennen noch",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s01-039",
     "kind": "text",
     "aa": 952,
     "text": "b. ) etwas empirisches beygemischt, der Begriff mithin nicht rein, so ist er derivativus.",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-040",
     "kind": "text",
     "aa": 953,
     "ms": [
      {
       "p": 16,
       "i": 383
      }
     ],
     "text": "5.) Sowie es nun gewiß ist, daß wohl kein Erkenntniß vorhanden seyn könnte, davon nicht, obzwar es seinen Ursprung aus der Erfahrung genommen, dennoch in letzterer ein correspondirender Gegenstand vorhanden seyn sollte, durch den sich der Begriff darstellen ließe, so unterscheiden sich demnach die Erkenntniße a priori a.) in sinnliche Erkenntniße vel phaenomena, d. i. alle Erkenntniße a priori, so bey Gegenständen der Sinne dargestellt und angewandt werden können; von diesen geht man über zu den b.) noumena, oder übersinnliche Erkenntniße, reine Verstandes Erkenntniße, davon sich der Gegenstand in der Erfahrung nicht geben und den Sinnen darstellen läßt.",
     "dehyphenated": 4,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s01-041",
     "kind": "text",
     "aa": 953,
     "ms": [
      {
       "p": 17,
       "i": 919
      }
     ],
     "text": "6.) Aus der Verschiedenheit der Quellen, woraus man die Erkenntniße originarie ableitete, entstand die differenz zwischen a. ) Empirismus d. i. das Prinzip, alle und jede Begriffe, ihrem Ur-Sprunge nach, als aus der Erfahrung abgeleitet, anzusehen. Man beschuldigt den Epicur dieses princips, wenigstens soviel aus den Werken seiner Schüler erhellt, da man von ihm selbst nichts besitzt. Er nahm an, daß man keinem Begriff Gewisheit beymeßen kann, wovon sich das object in der Erfahrung nicht vorzeigen, und er sich dadurch bewähren ließe. Es folgt an sich hieraus nicht, daß er alle Begriffe a priori bestritt, indem sich von sehr vielen der Beweis in der Erfahrung ergiebt. Eine Folge dieses Princips ist, daß man die Metaphysic ganz verwerfen muß, wie man auch den Epicur beschuldigt. Denn die metaphysic muß schlechthin auf reinen Vernunft-Begriffen beruhen, und kann sie, ihrer Quelle nach, daher nie aus der Erfahrung entnehmen; der Irthum des Empirism beruht daher darauf, daß, weil unser Erkenntniß vermögen nur durch Gegenstände der Erfahrung in Thätigkeit gesetzt werden kann, er hieraus folgert, es könne auch kein Begriff existiren und gemacht werden, der nicht seinen Ursprung in der Erfahrung hätte. b. ) Rationalismus, dem princip der Möglichkeit, Erkenntniße a priori sich vorzustellen. Dieses Princip ist der erste Satz aller metaphysischen Wahrheiten.",
     "dehyphenated": 6,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s01-042",
     "kind": "text",
     "aa": 953,
     "aaEnd": 954,
     "pages": [
      {
       "p": 954,
       "i": 359
      }
     ],
     "ms": [
      {
       "p": 18,
       "i": 681
      }
     ],
     "text": "Zwischen beyden principien, dem empirismus und rationalismus, stand gewißermaßen in der Mitte c. ) der Mysticismus, oder die Voraussetzung eines intellectus intuitivi oder intuitus intellectualis, d.i. die Möglichkeit, daß conceptus a priori mere intellectuales auf unmittelbarer Anschauung des Verstandes beruhen. Diese mystische hypothese nahm also an, daß der Verstand wie die Sinne operiren, intuitus puros haben könnte; nun läßt sich aber dem Verstände nicht das Vermögen der Anschauung beylegen, das vielmehr allein den Sinnen zukommt, mithin zerfällt diese hypothese des Plato von selbst. Man sagt zwar, der Verstand Gottes sey lauter Anschauung, dies sind indeß Worte ohne Begriff, den wir Menschen uns wenigstens von einem anschauendem Verstände nicht machen können, und wodurch man wohl nur die Operation des göttlichen Wesens mit dem Denkvermögen des Menschen in Verhältnis hat setzen wollen, es läßt sich aber nicht einmal bey Gott ein analoges Denken annehmen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-043",
     "kind": "text",
     "aa": 954,
     "text": "Das Princip des Plato, daß Menschen nemlich vermöge ihres ehemals besehenen Vermögens eines anschauenden Verstandes, noch jetzt die Kraft hätten, sich der damahls gehabten Begriffe durch ihren Verstand zurück zu erinnern, beruht wohl auf dem Irrthum, wozu ihn die vortreffliche Klarheit und erstaunende Fruchtbarkeit mancher mathematischer Sätze, worin er Meister war, verleitete, und bestand darin, daß er intuitus a priori puros, mit conceptus a priori puros für einerley nahm.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s01-044",
     "kind": "text",
     "aa": 954,
     "ms": [
      {
       "p": 19,
       "i": 298
      }
     ],
     "text": "Aristoteles verbeßerte ihn insoweit, daß er auch intellectualia annahm, aber zugleich per conceptus, und die ideas connatas ex intuitu puro verwarf : indeß zeigt sein Grundsatz : nihil est in intellectu pp. auch hinlänglich seinen Irthum, vermöge deßen seine conceptus nicht intellectuales sondern sensitivi, durch die Sinne aufgefaßt, und durch den \\ erstand allgemein geformt waren — mithin empirisch, z.E. Begriff von Wärme.",
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s01-045",
     "kind": "text",
     "aa": 954,
     "aaEnd": 955,
     "pages": [
      {
       "p": 955,
       "i": 907
      }
     ],
     "ms": [
      {
       "p": 20,
       "i": 1044
      }
     ],
     "text": "4.) Es bedarf unser Erkenntniß Vermögen in Ansehung der übersinnlichen Erkenntniße allerdings einer nähern Prüfung und Bestimmung seiner Kraft und Gränzen. Schon zu den Zeiten der ältesten I hilosophie eines Parmenides, Xenocrates, Pythagoras, wo Begriffe noch in Bildersprache eingekleidet waren, dachte man über die Entwicklung gleicher Begriffe wie jetzt, über Freiheit des Willens im Handeln, über Caußalitaet, über den Anfang der Welt, über deren Entstehung und Urheber von jedermann gebrütet wird. Man sähe diese Gegenstände als solche an, die a priori erkannt werden müßten, d. i. durch die Vernunft: vergaß ganz, daß in der Erfahrung kein Gegenstand war, der möglicher Weise den Begriffen, Urtheilen und Schlüßen correspondiren konnte. Nun sähe man die glücklichen Fortschi itte, die die Mathematic machte, indem sie sich vermöge ihrer Anschauung a priori über die Gränzen der Erfahrung in das Feld der Möglichkeit erhob. Man schloß, da dies eine Art der Erkenntniße a priori sey, und es bey der Mathesi glückte, seine Erkenntniße über sinnliche Gegenstände hinaus zu erweitern, so könne man es bey der Philosophie auch wagen, und nun überließ man sich bey seinen Untersuchungen über übersinnliche Gegenstände einer freien unbeschränkten Bahn.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s01-046",
     "kind": "text",
     "aa": 955,
     "ms": [
      {
       "p": 21,
       "i": 1037
      }
     ],
     "text": "Der Dogmatismus leitete die Untersucher, d. i. derjenige Grundsatz, nach welchem man in Ansehnung des Metaphysischen, d. i. der Vernunft Erkenntniße a priori, glaubte, einer Critic der Vernunft nicht zu bedürfen, um Erkenntniße a priori zu bekommen, und seine sinnlichen Erkenntniße über das sinnliche hinaus zu erweitern. Der Fehler des Dogmatismus lag hier also darin, daß man darauf nicht aufmerksam war, daß man hier von physischen Gegenständen zu metaphysischen überging, (NB und zwar von sinnlichen zu übersinnlichen Gegenständen) daß letztere keinen Gegenstand in der Erfahrung haben können, an dem die Wahrheit der erlangten Vorstellungen, Begriffe und Urtheile, geprüft werden konnten, daß also wegen Mangel des objects in der Anschauung die Begriffe keine also wegen Mangel des objects in der Anschauung die Begriffe keine realitaet hätten, mithin, wenn die Untersuchung weiter ging, als die Begriffe a priori führen konnten, leere Urtheile möglich waren. Auf die Mathematic konnte man sich nicht berufen; denn da diese ihre Begriffe nach Anschauungen a priori construirt und mithin die Begriffe der Objecte sich immer möglicher Weise in der Erfahrung oder Anschauung darstellen müßen, so hat sie immer einen sichern Leitfaden, wodurch sie die Gränzen der Vernunft nicht überschreitet, sie ist sicher, ihre Fehler bey gemachten Versuchen zu entdecken; nicht so aber in der Philosophie, diese hat es hier blos mit Vernunfterkenntnißen aus puren Begriffen zu thun, und es ist nichts, was dem Verstand im Fortschritte der Untersuchung Feßeln anlegt.",
     "dehyphenated": 5,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s01-047",
     "kind": "text",
     "aa": 955,
     "text": "Daher war auch der Erfolg der, daß alle Versuche der Philosophen durch den Scepticismus über den Haufen geworfen wurden, der die Ungewißheit des products der übersinnlichen Erkenntniße darthat, und nunmehro seinerseits alle Erkenntniße für ungewiß erklärte, die auf reinen Vernunft Begriffen beruheten.",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s01-048",
     "kind": "text",
     "aa": 955,
     "aaEnd": 956,
     "pages": [
      {
       "p": 956,
       "i": 259
      }
     ],
     "ms": [
      {
       "p": 22,
       "i": 326
      }
     ],
     "text": "Daher ist der Dogmatismus der Grund der Entstehung des Scepticismus. Dieser ging auch zu weit, weil doch wirklich Begriffe a priori nicht abzustreiten sind. Es war daher allerdings, ehe man die Möglichkeit, dergleichen Vernunft-Erkenntniße zu haben, verwarf, vorher nöthig, das Vermögen des Verstandes, seinen Umfang, Gränzen und Schranken zu prüfen, und einen Maaßstab, oder Citeria der Wahrheit zu finden, nach welchen man die Ächtheit von dergleichen reinen Begriffen prüfen kann, denen kein Gegenstand in der Erfahrung correspondirt : alsdann konnte man mit Grund Zweifel erregen. Dies ist nun das Geschäft des Criticißmus.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 79
    }
   ]
  },
  {
   "id": "s02",
   "title": "Eintheilung der Metaphysic.",
   "titleSrc": "heading",
   "headings": [
    "Eintheilung der Metaphysic."
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s02-001",
     "kind": "heading",
     "aa": 956,
     "text": "Eintheilung der Metaphysic."
    },
    {
     "id": "metaphysik-k3-s02-002",
     "kind": "text",
     "aa": 956,
     "text": "5. ) Die Metaphysic oder das System der reinen Vernunft Erkenntniße theilt sich in 2 Haupt Abschnitte ab: I.) Die transcendental-Metaphysic, oder derjenige Theil der Metaphysic, der die elementar Begriffe darstellt, um objecte a priori zu erkennen, die gegeben werden können: dies System der metaphysischen Erkenntniße heißt ontologie und beruht auf Zergliederung der Vernunft nach allen in ihr enthaltenen elementar Begriffen, zE. Größe, Qualitaet, Substanz, Ursach, Wirkung usw. II ) Die Metaphysica propria, so nennt man die Metaphysic, wenn sie auf objecte selbst angewandt wird: diese Gegenstände sind",
     "dehyphenated": 4,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s02-003",
     "kind": "text",
     "aa": 956,
     "text": "a. ) entweder sinnliche, und dann",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s02-004",
     "kind": "text",
     "aa": 956,
     "ms": [
      {
       "p": 23,
       "i": 58,
       "raw": "S3",
       "inferred": true
      }
     ],
     "text": "1.) betritt das System entweder Objecte des innren Sinnes oder der Seele. Daher Seelenlehre, psychologia rationalis",
     "joined": [
      "inferred"
     ],
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s02-005",
     "kind": "text",
     "aa": 956,
     "text": "2.) oder objecte der äußern Sinne, daher Körperlehre, physica rationalis",
     "joined": [
      "inferred"
     ],
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s02-006",
     "kind": "text",
     "aa": 956,
     "text": "b. ) oder Objecte der bloßen Vernunft, d. i. ideac oder Begriffe der bloßen Vernunft = Erkenntniße, deren objecte durch die Objecte nicht gegeben werden können. Dies sind die Gegenstände der übersinnlichen Erkenntniß, und solche stellt",
     "joined": [
      "inferred"
     ],
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s02-007",
     "kind": "text",
     "aa": 956,
     "text": "1. ) die Cosmologia rationalis, oder Cosmologie der reinen Vernunft und \"",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 1,
     "ocrConf": 69
    },
    {
     "id": "metaphysik-k3-s02-008",
     "kind": "text",
     "aa": 956,
     "text": "2. ) die theologia rationalis vel naturalis, die theologie der reinen",
     "ocrConf": 88
    },
    {
     "id": "metaphysik-k3-s02-009",
     "kind": "text",
     "aa": 956,
     "text": "Vernunft dar.",
     "ocrConf": 85
    }
   ]
  },
  {
   "id": "s03",
   "title": "Geschichte der Metaphysic.",
   "titleSrc": "heading",
   "headings": [
    "Geschichte der Metaphysic."
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s03-001",
     "kind": "heading",
     "aa": 956,
     "text": "Geschichte der Metaphysic."
    },
    {
     "id": "metaphysik-k3-s03-002",
     "kind": "text",
     "aa": 956,
     "aaEnd": 957,
     "pages": [
      {
       "p": 957,
       "i": 250
      }
     ],
     "ms": [
      {
       "p": 24,
       "i": 533
      }
     ],
     "text": "6. ) Es ist auffallend: die Natur beruft uns dazu, Vernunft Erkenntniße zu untersuchen; es hat für den Menschen besonders ein wichtiges Interesse, die Objecte des Übersinnlichen genauer kennen zu lernen, und dennoch hat alles bisherige Bemühen wenig Frucht gebracht, da es zur Zeit noch zweifelhaft ist, was man von den metaphysischen Wahrheiten als gewiß annehmen kann, und soll. Schon in den ältesten Zeiten der Philosophie hat man sich eher mit Metaphysic als mit Physic beschäftigt, und besonders seine Untersuchung eher auf das Übersinnliche als auf das sinnliche gerichtet. Man kann zwar die Lehrsätze und Theorien des Parmenides, Xenocrates, Pythagoras nicht deutlich angeben, da uns von ihnen selbst keine Schriften geblieben sind, sondern nur spätere Schriftsteller, zE. Diogenes Laertius und andere ihre Meinungen aufgestellt, aber nicht bestimmt genug aus einander gesetzt haben ; indeß ist hiernach gewiß, daß sie, auf den Ursprung der Welt, auf die Welt Ursache, als das oberste Wesen, auf die Beschaffenheit der menschlichen Seele, auf ihr Daseyn nach dem Tode, oder auf das künftige Leben, die Untersuchung gerichtet.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-003",
     "kind": "text",
     "aa": 957,
     "text": "Es ist gewiß, daß man, bey der Untersuchung über dergleichen Gegenstände a priori glückliche Fortschritte zu machen, durch die Mathematic verleitet wurde, und glaubte, daß, da diese als eine Gattung der Vernunft -Erkenntniße hierin reußiret sey, es bey der Philosophie auch zutreffen würde, ohne zu bedenken, daß die Mathematic in ihren Untersuchngen auf Anschauungen baute, die durch die Sinne gegeben werden konnten, nemlich Raum und Zeit: hier aber, wo bloße Vernunft Begriffe, ohne Anschauung zum Grunde lagen, sich ein gleicher Erfolg nicht, wenigstens nicht aus gleichen Gründen, erwarten ließ.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-004",
     "kind": "text",
     "aa": 957,
     "ms": [
      {
       "p": 25,
       "i": 0
      }
     ],
     "text": "Plato besonders trug zu diesem Irthum dadurch vorzüglich bey, daß er den reinen Begriffen der Vernunft Anschauungs-Kraft, ebenso wie den sinnlichen receptions Vermögen, beylegte, und daher hier Vernunft Erkenntniße ebenso wie in der Mathematic durch die Construction der Anschauung a priori abieitete.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-005",
     "kind": "text",
     "aa": 957,
     "aaEnd": 958,
     "pages": [
      {
       "p": 958,
       "i": 643
      }
     ],
     "ms": [
      {
       "p": 26,
       "i": 1008
      }
     ],
     "text": "So lange nun die hierauf gebaueten Systeme nicht angefochten wurden, konnte man fortbauen, wurde aber doch nicht über die Wahrheit seiner Voraussetzungen und Folgerungen gewiß, weil es unmöglich war, die durch die Versuche hervorgebrachten Erkenntniße an Objecten zu prüfen, da letztere nicht gegeben werden konnten, und also eine Vergleichung mit denselben nicht statt fand. Es galten alle Urtheile und jedes ganze System, wenn man sich nur consequent blieb und nicht selbst widersprach. Es entstand aber ein Widerstreit der Philosophen unter einander über die behauptete Satze als Folgerungen ihrer Systeme, indem ein Theil klar zu beweisen glaubte, daß sie gegründet waren, und der andere Theil sie eben so klar widerlegte, und zeigte, daß das Gegentheil sich eben so klar begründen ließe. Nemlich dieser Streit betraf die transcendentalen Sätze oder überschwenglichen Aufgaben in der Philosophie, zE. man bewies: ein jeder Raum und die Körper beständen aus den einfachen Theilen der Materie — andere leugneten ebenso klar die Unmöglichkeit der einfachen Theile, weil alle composita aus Theilen und diese wieder aus Theilen beständen — der Satz : die Welt hat einen Anfang, denn das absolute Weltganze sey nur eine idee der Vernunft, die Welt selbst sey aber begränzt — andere leugneten dies und behaupteten: es könne keine letzte Gränze der Welt seyn, nur wir könnten die Gränze nicht bestimmen - — usw.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-006",
     "kind": "text",
     "aa": 958,
     "text": "So bald also der Widerpruch und die existenz ganz widerstreitender Sätze gleich klar war, so entstand die Parthey, welche ander Gewisheit von beyden zweifelte; diese nahm hieraus Gelegenheit, alle Vernunftwahrheiten für ungewiß zu erklären, und nahm zum princip an, daß uns in allen unseren Erkenntnißen die Gewißheit mangele: sie widersprach sich sogar selbst, und gab zu, daß selbst die Frage, ob alles ungewiß wäre, selbst ungewiß sey. Dies tödtete nun alle Fortschritte der Untersuchung, indem der dogmatismus gestürzt war, und der scepticismus keine principia statuirte, von denen man ausgehen konnte. Das Intereße der Menschen litt hierunter und beyde opposita leisteten keinen Nutzen.",
     "dehyphenated": 3,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-007",
     "kind": "text",
     "aa": 958,
     "text": "Es war nöthig, und man hätte, ehe man über die übersinnlichen Objecte selbst Untersuchungen angestellt hätte, davon den Anfang machen sollen:",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-008",
     "kind": "text",
     "aa": 958,
     "ms": [
      {
       "p": 27,
       "i": 0
      }
     ],
     "text": "die Vernunft als das untersuchende subject, wie ein object zu behandeln, das näher erforscht werden müßte, ihr Vermögen, a priori zu erkennen, untersuchen, und deßen Gränze und Umfang bestimmen sollen. Bis zu der nähern Critic der reinen Vernunft kann man nun die herrschend gewesene Principia, worauf man baute, ihrer Gattung und Gestalt nach so classificiren :",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-009",
     "kind": "text",
     "aa": 958,
     "aaEnd": 959,
     "pages": [
      {
       "p": 959,
       "i": 395
      }
     ],
     "ms": [
      {
       "p": 28,
       "i": 883
      }
     ],
     "text": "a.) Aristoteles und später Locke haben eine (so genannte) Physiologie der Vernunft aufgestellt, indem sie das Erkenntniß a priori als ein solches ansahen, so empirisch erworben werden könne; und was wir aus den, aus der Erfahrung gezogenen Bestimmungen der Dinge durch Verallgemeinmachung zu einem Erkenntniß a priori erhoben. Sie nahmen also in Rücksicht, des Ursprungs alle Erkenntniß als sinnlieh an (nihil est etc. sagt Aristoteles) und glaubten, je mehr der Satz durch abstraction in die Höhe gebracht würde, je mehr nähere er sich einem Satz a priori. Aristoteles und Locke nahmen also das systema influens physici oder den Ursprung unserer Vorstellungen aus den Sinnen und deren Einfluß, so wie das princip an, daß wir nur durch abstraction zu den allgemeinen Erkenntnißen a priori gelangten. Der Widerspruch ist klar. Die Vernunft soll das Erkenn tniß hergeben und doch soll es durch die Sinne erworben seyn.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s03-010",
     "kind": "text",
     "aa": 959,
     "text": "b. ) Plato und später Leibnitz scheinen ein systema harmoniae praestabilitae in Ansehung der Vernunft Erkenntniße anzunehmen. Sie legten nemlich anerschaffene Ideen zum Grunde, so in uns gelegt wären, ehe wir mit den objecten selbst bekannt wären, und die eben deshalb, weil der Urheber sie in uns gelegt habe, mit den objecten übereinstimmten. Plato nahm nun als Erwerb Quelle aller reinen Vernunft Ideen an, daß sie aus der Anschauung Gottes abstammten; dies änderte Leibnitz dahin, daß er gewiße angebohrene Anlagen der Vernunft in uns als existirend annahm, die nur den Gebrauch hatten, daß wir, in Vertrauen auf dieselben, die Objecte selbst mit diesen Ideen übereinstimmend fänden.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s03-011",
     "kind": "text",
     "aa": 959,
     "text": "Beyde fanden sich, um dergleichen hypothesen festzustellen, überrascht, durch die Überzeugung, die oft Wahrheiten ihnen so evident aufdrangen.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s03-012",
     "kind": "text",
     "aa": 959,
     "aaEnd": 960,
     "pages": [
      {
       "p": 960,
       "i": 1059
      }
     ],
     "ms": [
      {
       "p": 29,
       "i": 363
      }
     ],
     "text": "c . ) Wolf , und in deßen Alter, sein Antigon , der Crusius . Crusius bestritt zwar eine solche vereinigte Wirkung der Seele auf den Körper, als Leibnitz vermöge der harmonia praestabilita angenommen, statuirte dagegen jedoch, daß das Criterium der Wahrheit nur in den Ideen zu suchen sey, die der Schöpfer deshalb in uns gelegt habe, weil er es unserer Vernunft nicht hätte Zutrauen können, daß sie diese Ideen selbst auffinden würde; er nahm also eine innere Offenbarung bey den Menschen, und dabei die Noth Wendigkeit derselben an, um ihn zur Überzeugung zu bringen. Wolf, den er widerlegte, hatte an sich den Ursprung der Ideen gar nicht untersucht, sondern handelte als Dogmatiker. Er baute auf mathematische Voraussetzungen sein Gelingen in der Philosophie aufs gerathe wohl, und verwechselte durch Anwendung der mathematischen Methode die Erkenntniße a priori ex puris ideis mit den mathematischen Erkenntnißen, indem er mit ihnen durch die Construction der Begriffe aus der Anschauung a priori ebenso wie in der Mathematic operiren zu können glaubte. 1. Theil der transcendental Philosophie, oder Metaphysic, die die Ontologie enthält.",
     "joined": [
      "inferred",
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-013",
     "kind": "text",
     "aa": 960,
     "ms": [
      {
       "p": 30,
       "i": 637,
       "raw": "so",
       "inferred": true
      }
     ],
     "text": "7. ) Es ist auffallend, sich Vorstellungen und Begriffe a priori zu denken, deren Gegenstand selbst nicht durch mögliche Anschauung gegeben werden kann. Z.E. ein Geist ist eine Idee der reinen Vernunft, deßen Object sich schlechthin nicht darstellen läßt: es ist nun zwar wahr, daß dieser Begriff und alle ihm ähnliche, theoretisch genommen, leer sind, indeß ist doch die Idee möglich, und ist dazu qualifiziert, um practischen Nutzen zu leisten: aber diese Ideen, so überschwengliche sind, und die elementar-principien, wodurch wir diese Vorstellungen a priori, von übersinnlicher Art erkennen, von denen aber sich kein object in der Anschauung darstellen läßt, gehören auch nicht hieher, sondern der Vorwurf der ontologie, oder der transcendental Philosophie, insoweit sie hier abgehandelt wird, besteht nur in denjenigen elementar principien von solchen Begriffen a priori, darin die objecte selbst dargestellt, oder erkannt werden können. Sie heißen zwar auch transcendent, aber sie sind zugleich immanent; eben weil die Objecte der Erkenntniße möglich sind.",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 5,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s03-014",
     "kind": "text",
     "aa": 960,
     "text": "8. ) ad Sect 1. §7 — 11 auctoris",
     "ocrConf": 68
    },
    {
     "id": "metaphysik-k3-s03-015",
     "kind": "text",
     "aa": 960,
     "text": "Von einem Gegenstände als obersten Begriff Der oberste Begriff, worunter sich alle übrigen elementar Begriffe unterordnen laßen, ist der",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s03-016",
     "kind": "text",
     "aa": 960,
     "text": "Begriff von einem Gegenstände überhaupt, der bey der Vorstellung zum Grunde liegt. Der Autor dagegen hält den Begriff der Möglichkeit für den ersten Begriff, und opponirt ihm zugleich den Begriff von Nichts. Die Vorstellung aber",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s03-017",
     "kind": "text",
     "aa": 960,
     "text": "— vom possibili impossibili",
     "ocrConf": 56
    },
    {
     "id": "metaphysik-k3-s03-018",
     "kind": "text",
     "aa": 960,
     "text": "— ein — a non - a",
     "ocrConf": 59
    },
    {
     "id": "metaphysik-k3-s03-019",
     "kind": "text",
     "aa": 960,
     "aaEnd": 961,
     "pages": [
      {
       "p": 961,
       "i": 336
      }
     ],
     "ms": [
      {
       "p": 31,
       "i": 146,
       "raw": "81",
       "inferred": true
      }
     ],
     "text": "— ein etwas nichts zeigt offenbar eine Eintheilung an, worin die Glieder auf einen höheren Begriff gegründet seyn müßen, und dies ist der Begriff vom Object überhaupt, der dann ein Etwas, oder ein Nichts, seyn kann. Es scheint aufzufallen, sich ein Object, das ein Nichts einschließt, zu denken: aber ein Nichts, setzt auch nur einen Gedanken voraus, der sich selbst wieder aufhebt, (d. i. der sich selbst widerspricht) und hat daher nie ein existirendes Object zum Grunde.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-020",
     "kind": "text",
     "aa": 961,
     "text": "Das Nichts ist nun entweder",
     "ocrConf": 71
    },
    {
     "id": "metaphysik-k3-s03-021",
     "kind": "text",
     "aa": 961,
     "text": "1.) ein nihilum logice tale s. logicum s. negativum, oder ein solches, dem gar kein Gedancke oder Vorstellung correspondirt. Es ist ordinair so beschaffen, daß es einen innern Widerspruch in der Vorstellung. involvirt.",
     "dehyphenated": 2,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s03-022",
     "kind": "text",
     "aa": 961,
     "ms": [
      {
       "p": 32,
       "i": 581
      }
     ],
     "text": "2.) ein nihilum privativum ist ein solches, dem, ob es sich gleich dencken läßt, dennoch Nichts existirendes correspondirt; z.E. der aether in der Physik ist ein fingirter Begriff, der keine realitaet intuitu objecti hat, der sich aber ohne Widerspruch dencken läßt. Eben so eine positive Kälte, als absolute Ursache der Kälte, enthält nichts widersprechendes, sie sich zu dencken ; hat aber keine existenz. Es gehören hieher alle Erdichtungen, da sie in der Natur sich nicht quoad objectum vorfinden, z.E. völlige Zufriedenheit, wider die die existenz spricht der beständige Hang des Menschen, sich über seinen Zustand zu erheben, und in einen andern, den er für beßer hält, zu versetzen. Also differiren nihil negativum et privativum unter einander, wie Gedanke und Sache : eins oder das andere correspondiren nicht der Vorstellung. Oder",
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s03-023",
     "kind": "text",
     "aa": 961,
     "aaEnd": 962,
     "pages": [
      {
       "p": 962,
       "i": 1059
      }
     ],
     "ms": [
      {
       "p": 33,
       "i": 796,
       "raw": "st",
       "inferred": true
      }
     ],
     "text": "3.) Ein nichts ist auch ein Conceptus inanis, leerer Begriff, d. i. ein Begriff, dem nicht ein object correspondiren kann oder (eigentlicher) = dem man kein Object in der Anschauung geben kann. Man muß sich hüten, einen solchen Begriff deshalb falsch zu nennen, man kann sich nicht bewußt werden, ob dem leeren Begriff ein wirkliches Object correspondiren könne, aber deshalb kann ei doch gedacht werden, d. i. er widerspricht nicht der Möglichkeit der bloßen Vorstellung deßelben: zwischen demjenigen, was gedacht werden und dem, wovon zugleich das object dargestellt d. i. gegeben werden kann, ist (gemäß 1 et 2.) ein Unterschied. Dergleichen Begriffe kommen unter den übersinnlichen Ideen vor. Z.E. Begriff vom Geist hat nichts widersprechendes in der Vorstellung, aber ob es möglich sey, daß ein solches immaterielles Wesen existiren könne, das kann man nicht einsehen. Bey problematischen Sätzen ist nichts von Widerspruc erfindlich, aber dabei macht man es nicht aus, ob der Begriff einen correspondirenden Gegenstand in der Anschauung erhalten, ob ihm ein Fall untergelegt, er in der existenz angedeutet, und angewandt werden könne. Es sind solche conceptus inanes nicht brauchbar, aber deshalb nicht falsch.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-024",
     "kind": "text",
     "aa": 962,
     "text": "4. ) Ein blos formeller Begriff ist das nichts, insoweit der Mangel alles Materiellen in der Anschauung sich dabei findet. Er ist also nur ein nihilum in sensu materiali, aber allerdings ein Etwas in sensu formali, z.E. der Begriff von dem Raum an sich ist der Form nach ein Begriff, der in der Anschauung erkannt werden kann, aber in materiali hat er solange keine Anschauung, als er ohne Ding oder materie gedacht wird; und ist relativ also ein Nichts. Hieraus folgt, daß hieher alle Begriffe gehören, denen alle empirische Anschauung fehlt. Das empirische Anschauen beruht nemlich wesentlich auf Empfindung von dem Object, und mithin giebt die empirische Anschauung allein nur empirische Begriffe.",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-025",
     "kind": "text",
     "aa": 962,
     "ms": [
      {
       "p": 34,
       "i": 123,
       "raw": "84",
       "inferred": true
      }
     ],
     "text": "5. ) Nichts heißt unmöglich weil darauf ganz und gar kein Begriff, auch nicht ein Gedanke beruht. Dieses unmögliche Nichts erkennt man blos am Widerspruch. — Ein Gedanke der sich selbst aufhebt, ein Begriff der durch innren Widerspruch zerfällt. — - Es können indeß objecte an sich unmöglich seyn, die man für möglich annimmt, weil der Begriff davon keinen Widerspruch erfährt : dagegen kann der Gedanke eines wirklichen oder möglichen objects nicht unmöglich seyn, insoweit er ihm correspondirt.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-026",
     "kind": "text",
     "aa": 962,
     "text": "Daher kann man wohl als richtig annehmen :",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-027",
     "kind": "text",
     "aa": 962,
     "text": "alles, was sich widerspricht, ist unmöglich, aber nicht umgekehrt verneinen:",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-028",
     "kind": "text",
     "aa": 962,
     "text": "alles, was sich nicht widerspricht, ist möglich, weil es sich sonst widersprechen müßte. Also beruht nur die Unmöglichkeit, nicht aber die Möglichkeit auf dem Widerspruch.",
     "joined": [
      "inferred"
     ],
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s03-029",
     "kind": "text",
     "aa": 962,
     "aaEnd": 963,
     "pages": [
      {
       "p": 963,
       "i": 583
      }
     ],
     "ms": [
      {
       "p": 35,
       "i": 375,
       "raw": "86",
       "inferred": true
      }
     ],
     "text": "Es kommt ja nur darauf an, daß ich den Widerspruch einsehe und es wird dasjenige unmöglich, was ich für möglich hielt. Der Widerspruch ist nur das Mittel, die Unmöglichkeit zu erkennen. Die Möglichkeit correspondirt aber mit der existenz des objects. Man kann sich daher sehr wohl ohne Widerspruch praedicate eines Dinges denken, aber daraus folgt noch nicht die Möglichkeit des Dinges selbst, weil die Möglichkeit des Gedankens noch nicht die Möglichkeit des Objects in der Anschauung involvirt. Daher ist auch ein leerer Begriff möglich, so lange kein innrer Widerspruch da ist, dagegen kennt man kein Object, so ihm correspondirt, mithin folgt hieraus noch nicht die Möglichkeit oder Umnöglichkeit der Sache selbst.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-030",
     "kind": "text",
     "aa": 963,
     "text": "6.) ad eosd. § phos — Das Principium contradictionis und das gleich herrschende principium identitatis ist das oberste Principium in Ansehung aller analytischen Urtheile, d. i. derjenigen Urtheile, wo der Begriff des praedicats und subjects durch die Zerghederung erkannt werden kann; es ist dagegen nicht für alle und jede Art Urtheile zureichend, z.E. für die synthetischen Urtheile, wo man über den Begriff des subjects hinausgeht, und durch das praedicat mehr sagt, als im subject enthalten war. Die formul, unter der man es faßt, ist:",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-031",
     "kind": "text",
     "aa": 963,
     "text": "nulli subjecto competit praedicatum sibimet ipsi oppositum. Man definirt es gewöhnlich in der Art:",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-032",
     "kind": "text",
     "aa": 963,
     "ms": [
      {
       "p": 36,
       "i": 144
      }
     ],
     "text": "quod idem simul esse et non esse potest: d. i. keinem Dinge kann ein praedicat, und zugleich (eodern tempore) das Gegentheil deßelben zukommen. Man sieht leicht, daß hierin die Bestimmung von einem Zeit-Verhältnis, d. i. von der existenz des Dinges in der Zeit, durch das Wort simul angedeutet wird. Es kann also hiernach nur zwischen subject und praedicat ein Widerspruch herrschen unter gleicher Zeitbedingung: mithin, wenn 2 praedicate demselben subjecte nur nicht zu gleicher Zeit, sondern nach und nach beygelegt werden, so ist es möglich, daß, ob sie sich gleich eodern tempore mit dem subject widersprechen würden, dennoch diverso tempore ihm jedes praedicat allein beygelegt werden könnte, Z.E. ein gelehrter Mann ist nicht gelehrt, hierin ist der Widerspruch klar, weil beydes zugleich nicht seyn kann: gelehrt, und ungelehrt seyn, mithin sich das praedicat durch das subject und vv. aufheben. Allein der gelehrte Mann kann vergeben, was er gewust hat, und dann kann er also wohl nachher als ungelehrt passiren. Es sind also hier 2 cont.radictorische Bestimmungen in Veränderung der Zeit: so auch in den beyden Begriffen des Verstandes: ruhiger — bewegter Mensch zugleich gedacht, enthält einen Widerspruch, aber mit Rücksicht auf Raum und Zeit gar nicht.",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 4,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-033",
     "kind": "text",
     "aa": 963,
     "ms": [
      {
       "p": 37,
       "i": 56
      }
     ],
     "text": "Diese Bestimmung der Begriffe nennt man die Veränderlichkeit des Dinges: wie dies zugeht, soll unten entwickelt werden, und hier wird nur die Folge gezogen, daß die Bestimmung der Zeit nicht zur Formel des Widerspruchs gehöret.",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-034",
     "kind": "text",
     "aa": 964,
     "ms": [
      {
       "p": 38,
       "i": 950
      }
     ],
     "text": "NB. Man muß allerdings bey obiger Formel von dem principium contradictionis auch die Formul gelten laßen: cuidam subjecto compet.it praedicatum praedicato sui ipsius oppositum. Denn das Urtheil hat außer dem subject und praedicat auch ein Verbindungswort. Zeigt dies bloß die copulam an, so gilt obige Formel des principii contradictionis: nulli subjecto competit usw., allgemein; indem die beyden Begriffe sich geradezu aufheben. Zeigt es aber auch die existenz in der Zeit determinirt an, so können 2 opposita nach der 2ten Formel statt finden, Z. E. der gelehrte Cajus ist ungelehrt, ist ein Widerspruch, nicht so aber : der Cajus, der gelehrt ist, ist ungelehrt ; denn dies heißt : Cajus existirt in einer Zeit als gelehrter, existirt aber zu einer andern Zeit als ungelehrter. Daher ist es als ein Fehler anzusehen, daß man im Begriff vom principium contradictionis: nihil est, quod simul usw., einen existential Begriff mit hereingebracht hat. Außer der angeführten negativen formel nulli usw. kann man das principium der analytischen Urtheile auch positiv bestimmen: omni subjecto competit praedicatum ipsi identicum. Man nennt es alsdenn das principium identitatis. Z. E. Ein jeder Gelehrter hat Ixenntniße : es ist ein Widerspruch davon das Gegentheil zu dencken, und Kenntniße liegen geradezu im Begriffe des Gelehrten : es ist also dem Satze gleich: ein Gelehrter ist ein Gelehrter.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-035",
     "kind": "text",
     "aa": 964,
     "text": "Der Autor sucht § 11, dies principium identitatis durch das principium contradictionis zu beweisen, man kann aber den Beweis deshalb nicht führen, weil das principium contradictionis ebenso, wie es das principium identitatis beweisen soll, auch darthun kann, mithin das principium contradictionis durch sich selbst beweiset.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-036",
     "kind": "text",
     "aa": 964,
     "aaEnd": 965,
     "pages": [
      {
       "p": 965,
       "i": 780
      }
     ],
     "ms": [
      {
       "p": 39,
       "i": 661,
       "raw": "89",
       "inferred": true
      }
     ],
     "text": "Leugnet man, daß das praedicat dem subject zukommt, so würde ihm das oppositum zukommen, und dies widersrpäche nicht, sondern bewiese nur, daß das idem nicht idem war : solange, bis die Contradiction an und vor sich erwiesen wäre: es sind beyde principia indemonstrable. Man kann sagen: was sich widerspricht, ist nichtsdies ist ein bejahender identischer Satz. Es sind dies die beyden obersten formellen principia unserer Erkenntniße, jedoch wird das principium contradictionis mehr gebraucht als das principium identitatis. Das hegt daran, weil in dem principium contradictionis die Nothwendigkeit liegt, die die Wahrheit deßen aufdrängt, was erwiesen werden soll. Der Beweis der Wahrheit, dadurch, daß das Gegentheil deßen unmöglich ist, ist indirecte, aber er ist apodictisch und mit dem Begriff der Nothwendigkeit verbunden, statt deßen die bloße Wahrheit nicht den Eindruck bey sich führt; indeß wird das principium identitatis immer mit darunter verstanden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s03-037",
     "kind": "text",
     "aa": 965,
     "text": "Der Autor definirt das impossibile durch das principium contradictionis, dies ist aber deshalb falsch, weil den bey den Begriffen die reciprocitaet fehlt: denn wäre dies, so müßte der Satz: unmöglich ist, was sich widerspricht, per contrapositionem umgekehrt werden können, mithin der Satz : was nicht unmöglich = möglich ist, widerspricht sich nicht; es kann, wie schon erwähnt, wohl etwas möglich im Begriff seyn, was sich als unmöglich zeigt, sobald man den Widerspruch gewahr geworden, mithin ist die definition unrichtig. Es ist nur wahr, daß das principium contradictionis dazu nothwendig ist, um die Unmöglichkeit zu erkennen, aber widerlegt wird dadurch die Unmöglichkeit nicht.",
     "dehyphenated": 4,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-038",
     "kind": "text",
     "aa": 965,
     "ms": [
      {
       "p": 40,
       "i": 461
      }
     ],
     "text": "10.) ad § 12 et 13 autoris: posito impoßibili oritur contradictio. Eine Contradictio in adjecto ist es, wenn in einem und demselben Begriff 2 beygelegte Begriffe sich gerade entgegen laufen, oder in einem Urtheil sich subject und praedicat gerade zu widersprechen. Der Widerspruch ist apparens wie z.E. eine sichtbare Finsterniß, d. i. Annäherung des Lichts an Finsterniß, wie Milton von der Hölle sagt. — Sichtbare Mondfinsterniße : die Negationen des Lichts. Der Widerspruch ist patens (explicita), und latens sive implicita, je nachdem eine Analyse der Begriffe erforderlich ist, um ihn zu erkennen, oder es der Zergliederung nicht bedarf: jedoch muß man in Ansehung des Urtheilenden selbst in beyden fällen annehmen, daß ihm der Widerspruch verborgen war, und er muß ihm daher bewiesen werden.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s03-039",
     "kind": "text",
     "aa": 965,
     "text": "11.) ad § 10 autoris: Es giebt 3 logische Principia aller Urtheile, die die Richtigkeit und Gewisheit der letztem bestimmen, sie sind logische Formeln unserer Urtheile, nicht aber metaphysische principia der objectiven Erkenntniß. Dies sind",
     "dehyphenated": 1,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s03-040",
     "kind": "text",
     "aa": 965,
     "text": "1. ) das principium contradictionis et identitatis",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-041",
     "kind": "text",
     "aa": 965,
     "text": "2. ) principium rationis logicum",
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s03-042",
     "kind": "text",
     "aa": 965,
     "aaEnd": 966,
     "pages": [
      {
       "p": 966,
       "i": 313
      }
     ],
     "ms": [
      {
       "p": 41,
       "i": 531
      }
     ],
     "text": "3. ) principium exclusi intermedii inter duo contradictoria sive principium divisionis sive principium disjunctionis. NB Hierunter werden alle analytische Urtheile verstanden, indem praedicate vorausgesetzt werden, die im Begriff des Subjekts gedacht, durch deßen Erkenntniß Grund bewiesen, und deßen nothwendige Beilegung dargethan werden. Das principium contradictionis und identitatis sind die beyden obersten und allgemeinen principia, denen alle solche Urtheile unterworfen sind, und zwar dem letztem die bejahenden und dem erstern die verneinenden.",
     "joined": [
      "inferred",
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s03-043",
     "kind": "text",
     "aa": 966,
     "text": "Alle 3 principia laufen mit dem principium contradictionis auf einen Begriff hinaus, indem man, ohne sie voraus zu setzen, nicht urtheilen kann, und das principium Contradictionis enthält, so zu sagen, die beyden andern principia. Denn",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-044",
     "kind": "text",
     "aa": 966,
     "text": "a. ) das principium Contradictionis wird bey allen problematischen Urtheilen angewandt. Hier kommt es nur darauf an, daß das praedicat an sich dem subject nicht widerspricht, z.E. eine theilbare Seele: Es liegt im Begriff von Seele ein oppositum, das die Voraussetzung im Urtheil oder Begriff mit dem praedicat theilbar nicht vereinigen kann. Ist dies, so ist das Urtheil gar nicht denkbar. Jeder Gedanke dagegen, der in sich selbst nicht zerfällt, ist diesem principio gemäß, da es insofern noch nicht auf die Wahrheit deßelben ankommt. Diese tritt",
     "dehyphenated": 3,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s03-045",
     "kind": "text",
     "aa": 966,
     "text": "b. ) bey den assertorischen Urtheilen oder propositionen hinzu: denn jeder Satz muß vermöge des hier anzuwendenden principii rationis begründet seyn, welches aber schon voraussetzt, daß er überhaupt denkbar ist, wonächst denn diesem 2ten principio gemäß das praedicat mit dem subject durch den Beweis Grund verknüpft werden muß.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s03-046",
     "kind": "text",
     "aa": 966,
     "ms": [
      {
       "p": 42,
       "i": 72
      }
     ],
     "text": "c. ) das principium disjunctionis kann das Urtheil nur zu einem apodictischen Urtheil machen, und ihm durch die disjunction der Glieder des Begriffs Gewisheit geben. Letztere erfolgt dadurch, daß jeder Begriff in 2 opposita getheilt wird, wovon dem subject nur ein Glied zukommen kann, und bewiesen wird, daß das oppositum ihm nicht zukommen könne, so wie außer beyden Gliedern kein drittes da seyn könne, so ihm zugleich zugeschrieben werden müßte. Dies ist daher das princip aller logischen Eintheilung der Begriffe, weil diese nur dichotomisch sind.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s03-047",
     "kind": "text",
     "aa": 966,
     "text": "12.) Alles unser Erkenntniß besteht aus Begriffen, und aus Anschauung.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-048",
     "kind": "text",
     "aa": 966,
     "aaEnd": 967,
     "pages": [
      {
       "p": 967,
       "i": 261
      }
     ],
     "ms": [
      {
       "p": 43,
       "i": 701
      }
     ],
     "text": "Die Anschauung giebt dem Begriffe die objective Realitaet, d. i. ohne Anschauung geräth jeder Begriff in den Verdacht, daß er leer sey. Ist er daher zwar gedacht, es kann ihm aber das Object in der Anschauung nicht gegeben werden, so sagt man von ihm: es fehle ihm die objective Realitaet: es kommt dabey jedoch nicht darauf als noth wendig an, daß das object sinnlich dargestellt wird, sondern daß deßen Darstellung nur möglich ist. Die Anschauung giebt das Object zu erkennen, und bey ihr liegt unmittelbare Vorstellung deßelben zum Grunde ; die Merkmale, die durch die Anschauung abstrahirt sind, geben mittelbar die Vorstellung, welche der Begriff einschheßt, und wodurch das object erkannt wird. Durch den Begriff wird das object gedacht: könnte ich nun kein object dem Begriff unterlegen, so kann ich zwar den Begriff denken, aber dies Denken allein giebt noch kein Erkenntniß, weil ihm objective Realitaet fehlt, es muß die Anschauung hinzukommen, damit der Begriff ein object habe, was ihm correspondirt, und dann erst hat er objective realitaet, und kann erkannt werden. So wenig also ohne Anschauung das Erkenntniß möglich ist, so wenig wird es schon durch die Anschauung allein erworben. Denn diese enthält nur die unmittelbare Beziehung aufs object.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-049",
     "kind": "text",
     "aa": 967,
     "text": "Beym Erkenntniß ist endlich nicht Beziehung aufs object unmittelbar vorhanden; sondern nur auf die Anschauung von dem object, und in der Beziehung des Begriffs auf die Anschauung wird das Erkenntniß erworben. Alle Anschauung ist sinnlich, und ohne sie etwas erkennen, wäre, wenn es möglich wäre, übersinnliches Erkenntniß, so auch auf übersinnlicher Anschauung beruhen müßte: alle übersinnliche Begriffe sind von der Art, daß ihnen keine Anschauung gegeben werden kann, daß es ihnen also, wenn man sonst wohl Grund haben mag, sie zu denken, doch an objectiver Realitaet fehlt, die directe mit dem Begriff verbunden wäre, z.E. Begriff von Geist.",
     "dehyphenated": 4,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s03-050",
     "kind": "text",
     "aa": 967,
     "aaEnd": 968,
     "pages": [
      {
       "p": 968,
       "i": 711
      }
     ],
     "ms": [
      {
       "p": 44,
       "i": 186
      }
     ],
     "text": "13.) Um nun die principia der transcendental Philosophie selbst aufzustellen, kommt es zuvorderst auf Entwicklung des Unterschiedes zwischen analytischen und synthetischen Urtheilen an. 1. Analytische Urtheile sind diejenigen, bey denen sich das praedicat, als ein subiect gedacht, durch die Zergliederung des Begriffs erkennen läßt. Es liegt das praedicat also implicite im subject oder ist in dem subject enthalten, es darf der Begriff des subject s nur analysirt d. i. explicirt werden, um es zu erkennen, z.E. Ein Körper ist theilbar, wird durch die Zergliederung der Dehnbarkeit erkannt. Es müßen also die analytischen Urtheile allein im Begriff vom subject gedacht und erkannt werden können, hierin distinguiren sie sich schon von den synthetischen wesentlich. Letztere Urtheile zu erkennen, durch das subject allein, ohne einen in ihm nicht liegenden Begriff hinzuzuthun, ist unmöglich. Z.E. alle mathematischen Sätze jeder Art sind synthetisch, es ist selbst in der Algebra unmöglich, auch einen einzigen Satz durch die analyse zu entwicklen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s03-051",
     "kind": "text",
     "aa": 968,
     "text": "Der Satz : alle Körper sind schwer, wird sich nicht aus der analyse vom Begriff des Körpers allein ergeben, ich muß durch die Erfahrung erst erkannt haben, daß er schwer sey, ehe ich dies praedicat dem Körper beylegen kann.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-052",
     "kind": "text",
     "aa": 968,
     "ms": [
      {
       "p": 45,
       "i": 239
      }
     ],
     "text": "Der Satz: 7 -f- 5 gibt die Größe von 12, ist nicht zu entwickeln möglich, wie durch Entwicklung des Begriffs der Größe 7+5 allein. Die Größe 12 aus den beyden andern entsteht aber per synthesin sehr leicht, und ist daher ein synthetischer Satz : nemlich ich habe die Operation, um 12 zu finden, mit den beyden Größen durch die Erfahrung so angestellt, daß ich zu einer Größe, z.E. 7, die andere (5) durch sinnliche Zuzählung der Einheiten verbunden und also hinzugethan habe.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-053",
     "kind": "text",
     "aa": 968,
     "text": "2. Analytische Urtheile kann man Erläutern ngsurt heile nennen. Es dient das Urtheil zum Bewußtsein des Mannigfaltigen, was im Begriffe liegt, und vorher dunckel gedacht, nun aber entwickelt ist. Dagegen sind synthetische Urtheile = Erweiterungsurtheile. Sie gehn über den Begriff des subjects hinaus und enthalten noch ein praedicat, das im Begriff des subjects nicht gedacht worden ist. Es trägt sich nun",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-054",
     "kind": "text",
     "aa": 968,
     "ms": [
      {
       "p": 46,
       "i": 240
      }
     ],
     "text": "3. ) wie und welche von beyden Urtheilsarten sind a priori möglich? Die Möglichkeit der Erkenntniße a priori ist in analytischen Urtheilen klar, da hier das subject nur dem Begriff nach entwickelt werden darf, um das praedicat zu erkennen. Es bedarf also dazu keiner Erfahrung, um das in ihm enthaltne praedicat zu erkennen. Z.E. um die Theilbarkeit des Körpers zu erkennen, ist nur die Entwicklung des Begriffs vom Körper nöthig, so findt man dessen Theilbarkeit, ohne daß man erst nöthig hat, Versuche darüber a posteriori anzustellen und das aus der Erfahrung erforschte product aufzusuchen.",
     "dehyphenated": 3,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-055",
     "kind": "text",
     "aa": 968,
     "aaEnd": 969,
     "pages": [
      {
       "p": 969,
       "i": 330
      }
     ],
     "ms": [
      {
       "p": 47,
       "i": 505
      },
      {
       "p": null,
       "i": 729,
       "raw": "46",
       "unresolved": true
      },
      {
       "p": null,
       "i": 879,
       "raw": "47",
       "unresolved": true
      }
     ],
     "text": "-^agegen synthetische Urtheile können Urtheile a posteriori, auch können sie Urtheile seyn, a priori erkannt. Aber auch a priori muß immer Vernunft etwas hinzuthun, was nicht im Begriffe lag, und dies kann sich auf Erfahrung nicht gründen. Soll das synthetische Urtheil also a priori erkannt werden, so kann dies nur durch eine Anschauung a priori, welche zum Grunde gelegt ist, geschehen, nemlich dadurch, daß dem Begriff, der per synthesin erweitert werden soll, eine Anschauung untergelegt wird. Diesgeschieht entweder durch empirische Anschauung des Objects, so dem Begriff zugesetzt wird, oder durch Anschauung a priori, d. i. formelle Beziehung aufs Object und Bestimmung der Form, wie das subject vom Object afficirt wird , und aus dieser Anschauung wird der zugesetzte Gegenstand hinzugenommen. Hieraus folgt, daß synthetische Urtheile nur mittelst der correspondirenden Anschauung überhaupt und dem daraus formirten und hinzugefügten Begriff möglich sind, und daß diese Anschauung a priori geschehen muß, wenn das Urtheil a priori gestellt werden soll.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-056",
     "kind": "text",
     "aa": 969,
     "ms": [
      {
       "p": 48,
       "i": 852
      }
     ],
     "text": "Z.E. die 3 Winkel der Drei-Ecke sind 2 rechten Winkeln von 180° gleich, ist ein synthetisches Urtheil: denn aus der analyse einer in 3 Linien eingeschloßenen Figur läßt sich dieser Satz nicht herausbringen, sondern es müßen wenigstens in Gedanken Versuche, ihn zu finden, gemacht, und dadurch der Beweis gedacht werden. Eine Anschauung a priori ist aber verschieden von der empirischen Anschauung, wie Form und Materie, d. i. nemlich, wenn nicht blos die Form, sondern auch das Object der Empfindung bey der Anschauung zum Grunde liegt, so ist die Anschauung empirisch, fehlt dagegen bey der Anschauung die Materie, d. i. das Object der Anschauung, und ist blos die Form vorhanden, und das Object möglich, so ist die Anschauung rein. Z.E. Raum an sich ist nichts fühlbares, nichts sinnliches, ist also blos die Form, die angeschaut wird: dagegen etwas im Raum, so widerstand leistet, oder ein ausgefüllter Raum, enthält etwas, so sinnlich empfunden werden kann, und enthält also eine Vorstellung des Sinnes von etwas existirendem. Ein synthetisches Urtheil also, deßen correspondirende Anschauung eine Anschauung a priori ist, hat eine reine Anschauung, ohne vom Object der Sinne begleitet zu sein.",
     "dehyphenated": 5,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-057",
     "kind": "text",
     "aa": 969,
     "text": "14. Man kann zum voraus annehmen, daß 1. alle Erfahrungssätze synthetische Urtheile sind, und per synthesin erkannt werden müßen. Denn in so fern das Urtheil schon durch die analyse begründet wird, lag das Urtheil im Begriff des subjects, und es bedurfte also keiner Erweiterung der Erkenn tniß und des Erkenntniß- Grundes, um ihm das praedicat beylegen zu können. Gründet sich aber das Urtheil auf Erfahrung, so kann das praedicat nur durch letztere erkannt, mithin per synthesin dem subject beygelegt werden.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-058",
     "kind": "text",
     "aa": 970,
     "ms": [
      {
       "p": 49,
       "i": 37
      }
     ],
     "text": "2) daß es aber Sätze a priori giebt, die synthetische Urtheile a priori sind, mithin unabhängig von aller Erfahrung erkannt werden. Wie dies möglich, vide infra. — Auf letzteren beruhet nun die Wissenschaft, die man Metaphysic nennt: sie ist nemlich diejenige Wissenschaft oder System, das alle principien aller möglichen synthetischen Urtheile a priori aufstellt. Die transcendental Philosophie enthält die obersten principien dieser Art und diejenige Wissenschaft, die die Gränzen der Möglichkeit aller synthetischen Erkenntniße a priori bestimmt, d. i. nicht durch Erweiterung, sondern Einschränkung des Erkenntnißvermögens auf die in ihm liegende principien = ist die Critic der reinen Vernunft.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-059",
     "kind": "text",
     "aa": 970,
     "ms": [
      {
       "p": 50,
       "i": 390,
       "raw": "so",
       "inferred": true
      },
      {
       "p": 51,
       "i": 1602
      }
     ],
     "text": "15.) Nur durch reine Form der Sinnlichkeit sind reine Anschauungen = durch letztere nur Erweiterung unserer Erkenntniß vermöge synthetischer Urtheile a priori möglich, und also finden Erweiterungen unserer Erkenntniße a priori auf andere Art nicht, mithin durch übersinnliche Anschauungen gar nicht statt. Diese Sätze werden auf folgende Art deducirt: 1) Was Vorstellung an sich sey, ist unerklärbar. Eine Definition läßt sich darum davon nicht geben, weil sich nur und nicht anders eine Vorstellung erklären läßt, als indem man sich eine Vorstellung wieder vorstellt, mithin es an Erkenntniß Gründen in sensu logico fehlt. Beschreiben läßt sich diese Handlung des Gemüths als etwas in mir, so sich auf etwas anderes bezieht. Diese Beziehung von diesem Etwas Andern in mir ist nun Vorstellung subjective genommen. Die Vorstellung geht teils auf’s Object, auf welches ich mich beziehe, theils auf diejenige Action des Gemüths, wodurch ich etwas in mir mit dem Object vergleiche. Dann beschäftigt man sich mit dem Object an sich und deßen Beschaffenheit, welches ganz von der Vorstellungs Art des subjects unterschieden werden muß, als welches das 2te, die Action des Gemüths, involvirt. Dies letztere heißt das Bewußtsein oder die Vorstellung meiner selbst, insofern ich die Vorstellung meiner Vorstellung mir darstelle. Man ist sich jedoch der Vorstellung nicht immer bewußt, kann sich ihrer jedoch jederzeit bewußt werden. Bewußtseyn heißt auch die apperception, die das vorgestellte object begleitet. 2) Die Vorstellung als Erkenntniß Quelle kann nun nur durch 2 Quellen bewirkt werden, nemlich durchAnschauung und durch Begriffe.",
     "dehyphenated": 7,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-060",
     "kind": "text",
     "aa": 970,
     "text": "Beyde haben in sich eine Beziehung auf einen Gegenstand, nur mit dem Unterschiede, daß in Begriffen der Gegenstand blos gedacht, in der Anschauung derselbe aber gegeben ist.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-061",
     "kind": "text",
     "aa": 971,
     "text": "Anschauung ist nemlich eine unmittelbare Vorstellung eines Gegenstandes, d. i. sie enthält nur einen Gegenstand; denn wären mehrere zugleich vorhanden, so könnten sie nur gemeinsam durch das Merkmal vorgestellt, d. i. durch Begriffe gedacht werden. Dieser Gegenstand kann also nur einzeln seyn. Z.E. eine Sonne (denn mehrere Sonnen läge unter dem Begriff eines selbst erleuchteten Körpers).",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-062",
     "kind": "text",
     "aa": 971,
     "ms": [
      {
       "p": 52,
       "i": 620
      }
     ],
     "text": "Begriff ist mittelbare Anschauung oder Darstellung eines Gegenstandes vermöge des mehreren Gegenständen gemeinsamen Merkmals als Erkenntniß Grundes. Er hat also immer eine Vorstellung zum Grunde, die mehreren Gegenständen gemein ist, und das Erkennen durch dieselbe, als Merkmal, gehört blos zum Denken des Gegenstandes. Beyde Arten von Vorstellungen unterscheiden sich also darin, daß in der Anschauung der Gegenstand vorgestellt werden kann, insofern er gegeben ist, durch den Begriff aber das Object vorstellbar ist, insofern es als gegeben mittelbar gedacht werden kann. Der Begriff hat also nur realitaet, insofern ihm ein Gegenstand untergelegt werden kann. 3) Alle menschliche Anschauung ist sinnlich. Aber Begriffe gehören blos für den denkenden Verstand, und es kann ihnen nur Sinnlichkeit insofern beygemischt seyn, als sie auf Anschauung beruhen, sonst können sie an und für sich kerne Sinnlichkeit haben, wodurch sie wahrgenommen werden.",
     "dehyphenated": 4,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-063",
     "kind": "text",
     "aa": 971,
     "text": "Sinnlich ist das Vorstellen, insofern das Object vom subject als Erscheinung vorgestellt wird.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-064",
     "kind": "text",
     "aa": 971,
     "text": "intellectuell dagegen ist das Vorstellen, insofern das Object durch die Vorstellung, so wie es an sich ist, betrachtet wird.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s03-065",
     "kind": "text",
     "aa": 971,
     "ms": [
      {
       "p": 53,
       "i": 359
      }
     ],
     "text": "Dies ist so zu verstehen: Das Vermögen des Gemüths, dadurch, daß letzteres von den Gegenständen afficirt wird, eine Vorstellung erhalten zu können, ist die Sinnlichkeit. Entsteht nun vom Gegenstände eine Wirkung auf die receptivitaet (d. i. das bemerkte Vermögen der Sinnlichkeit), so entsteht die Empfindung vom Gegenstände, und bewirkt diese eine Beziehung auf den Gegenstand, oder Vorstellung, so entsteht die Anschauung des Gegenstandes, der nun ohne weitere nähere Bestimmung Erscheinung heißt.",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-066",
     "kind": "text",
     "aa": 971,
     "text": "NB Erscheinung kann Wahrheit enthalten, und unterscheidt sich daher vom Schein: d. i. der Irrthum aus Verwechslung der Sache selbst mit der bloßen Erscheinung, oder das für wahr halten aus subjectiver Vorstellung, die man für objective gewiß nimmt.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-067",
     "kind": "text",
     "aa": 972,
     "ms": [
      {
       "p": 54,
       "i": 949
      }
     ],
     "text": "Es ist also klar, daß alle Anschauungen das Object in der Erscheinung vorstellen, d. i. die Anschauung wird von Seiten des subjects so angenommen, als die Art ergiebt, wie es vom Object afficirt worden. Wird nun das object blos als phaenomen betrachtet, d. i. ist die Vorstellung blos sinnlich, so sieht man nur auf dasjenige, was in unserer Vorstellung vom Object blos subjectiv ist, und dies ist die Art, wie wir vom Gegenstand afficirt werden: in der Art erscheint uns auch das Object: es ist aber klar, daß aus der Art, wie das Object erscheint, und mithin wie das subject von ihm afficirt wird, nicht geschloßen werden kann, daß auch das Object an sich selbst so sey; es ist vielmehr gewiß, daß es an sich selbst nicht so ist, da die Sinnlichkeit nur auf die Form des Objects in der Erscheinung Rücksicht nehmen kann. Dagegen giebt es keine intellectuelle Anschauung, der Verstand kann nur denken, er hat nicht die Quelle der Sinnlichkeit oder receptivitaet, sondern nur allein die Fähigkeit, durch Begriffe vorzustellen, oder die spontaneitaet, wodurch er erkennt, und diese Gattung von Vorstellungen, die auf die Objecte an sich gehen, heißen noumena. Hiernach ist also",
     "dehyphenated": 3,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s03-068",
     "kind": "text",
     "aa": 972,
     "text": "4) Die Form des subjects, auf gewiße Weise vom Gegenstand afficirt zu werden, das subjective in der Vorstellung, wodurch wir berechtigt werden, das Object als Erscheinung zu benennen, und die Form der Sinnlichkeit, vom Gegenstände afficirt zu werden, ist phaenomen, indem die Art, wie das subject afficirt wird, doch auf der Form dieses Vermögens (receptivität) beruhet, und dadurch das Object als Materie anschauet. Daß diese verschieden seyn kann, sieht man schon aus der Verschiedenheit der Werkzeuge der äußeren Sinne. Z.E. Die Fliege hat ein Auge, so ein polyedron (vielseitig) ist, der Mensch ein ganz anderes Auge. Der Mensch scheint einfach zu sehen, und nimmt doch den Gegenstand doppelt wahr. Ein gelbsüchtiger sieht anders als ein gesundes Auge.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-069",
     "kind": "text",
     "aa": 972,
     "aaEnd": 973,
     "pages": [
      {
       "p": 973,
       "i": 587
      }
     ],
     "ms": [
      {
       "p": 55,
       "i": 72
      }
     ],
     "text": "5) Sollen wir nun reine Anschauung a priori haben, so muß die besondere borm der Sinnlichkeit dabei zum Grunde liegen, die wir bey der Erscheinung des objects annehmen. Sie soll aber a priori seyn, mithin kann sie nicht durch die Erscheinung selbst bestimmt werden. Es ist aber auch gewiß, daß in unserm innern Sinn eine besondere b orm der Sinnlichkeit liegt, die die Bedingung giebt, wodurch die Objecte der Erscheinung von uns erkannt werden können; dies ist die reine b orm der Sinnlichkeit, welche allen Erscheinungen dei Dinge zuvorgeht, und also, ehe die Gegenstände durch Anschauung erkannt werden, vorhanden ist. Sie ist nothwendig, um die Gegenstände zu erkennen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s03-070",
     "kind": "text",
     "aa": 973,
     "ms": [
      {
       "p": 56,
       "i": 416
      }
     ],
     "text": "6) Erweiterungen unserer Erkenntniße a priori sind nur durch synthetische Urtheile a priori möglich. — Die Möglichkeit der synthetischen Urtheile a posteriori leidet gar kein Bedenken ; alle synthetische Urtheile dieser Art beruhen auf Erfahrung, Erfahrungen auf Erscheinungen, mithin auf Anschauung. Es kann also ein Begriff, der erweitert werden soll, nur durch eine damit verknüpfte Erscheinung erweitert werden. Z.E. der Begriff vom Körper mit der Anschauung und daher abgezogenen Erfahrung der Schwere : aber wie kann man einem Begriff a priori ohne alle Erfahrung mehr zusetzen als in ihm enthalten war? und hierauf ist keine andre Antwort über die Möglichkeit, als daß es vermöge der reinen Form der Sinnlichkeit geschehen muß, und daß nur durch diese Form sinnlicher Anschauung synthetische Urtheile a priori bestimmt werden können. Die Möglichkeit derselben zeigt die Wirklichkeit aller Sätze der Mathematic. Z.E. cordarum maxima est diameter. Aus dem Begriff des diameters läßt sich das Urtheil nicht analysiren, sondern nur durch Hinzutritt neuer Escheinung. Es muß also per synthesin etwas hinzukommen, so nicht im Begriff lag, und dies hängt nicht von der Erfahrung, sondern von der Form ab, die der Anschauung gegeben wird.",
     "dehyphenated": 7,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-071",
     "kind": "text",
     "aa": 973,
     "ms": [
      {
       "p": 57,
       "i": 153
      }
     ],
     "text": "Es können aber synthetische Sätze a priori nicht anders auf Gegenstände bezogen werden, als wie sie sich in der Erscheinung darstellen. Denn sonst wären sie intellectuell, und es wäre keine reine Anschauung. Sie sind daher nur so möglich, daß der Satz a priori nichts anders enthält, als das Object a priori, insoweit es Erscheinung ist; und dies geht nur in der Art an, daß die synthetische Urtheile unsern Begriff erweitern sollen, also mehr enthalten sollen, als in ihm gedacht war, der Begriff mit reiner Anschauung in Verknüpfung gesetzt wird, und vermöge der reinen Form der Sinnlichkeit erkannt werden kann.",
     "dehyphenated": 4,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s03-072",
     "kind": "text",
     "aa": 973,
     "text": "Es giebt dieser Formen sinnlicher reiner Anschauung nur Zwey, nemlich",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-073",
     "kind": "text",
     "aa": 973,
     "text": "a) Raum als die Form für alle äußere Anschauungen,",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-074",
     "kind": "text",
     "aa": 973,
     "text": "b) Zeit als die Form für alle innere Anschauung. Diese Formen reiner Anschauung bedürfen also keines Objects selbst, sondern sind a priori vorstellbar, und synthetische Urtheile a piioii zu bestimmen fähig.",
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s03-075",
     "kind": "text",
     "aa": 974,
     "ms": [
      {
       "p": 58,
       "i": 175
      },
      {
       "p": 59,
       "i": 1158
      }
     ],
     "text": "Daß sie in uns vorhanden sind, lehrt das Bewußtseyn, und sie werden praeexistirend vor aller Anschauung sinnlicher Objecte erkannt, mithin nothwendig und allgemein vorhanden. Sollen nun synthetische Urtheile a jwiori bewirket werden, so ist dies ohne Anschauung a priori nicht möglich (weil kein synthetisches Urtheil ohne Anschauung möglich ist). Die Anschauung setzt aber ein Object voraus, mithin liegt das Vermögen der Sinnlichkeit zum Grunde; diese Sinnlichkeit liegt aber a priori zum Grunde, und mithin kann durch die reine Anschauung zum voraus bestimmt werden, wie Objecte erscheinen werden, ehe sie vorgekommen sind, welches durch die abgeleiteten principien der Formen reiner Anschauung möglich ist. Z.E. Die verschiedenen Eigenschaften des Das princip: jeder Theil des Raumes ist wieder ein Raum etc. Ist nun der Grund der Möglichkeit sämtlicher synthetischer Anschauungen a priori nur in der innren Form unsrer Sinnlichkeit zu suchen, so kann letztere nur auf einen Gegenstand bezogen werden, nach der Art, als er das subject afficirt, d. i. insofern er als phaenomen erscheint; hieraus folgt nun, daß, da wir unsere Erkenntniße nur durch synthetische Urtheile erweitern können, diese aber Anschauungen erfordern, alle Erweiterung des Erkenntnißes phaenomena zum Grunde hat, die durch die Form sinnlicher Anschauung erkannt werden müßen. Ferner können wir daher nicht a priori unsre Erkenntniß erweitern, insofern als wir die Dinge an sich selbst betrachten : denn da hiezu Anschauungen gehören, so müßten dies intellectuclle Anschauungen seyn, dergleichen giebt es aber nicht. Mithin findt bey übersinnlichen Begriffen keine Erweiterung des Erkenntnißes statt.",
     "dehyphenated": 7,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-076",
     "kind": "text",
     "aa": 974,
     "aaEnd": 975,
     "pages": [
      {
       "p": 975,
       "i": 842
      }
     ],
     "ms": [
      {
       "p": 60,
       "i": 508
      }
     ],
     "text": "16) Anschauungen können wir also nur vermöge der Form unserer Sinnlichkeit haben, und es werden die Objecte nach Maaßgabe dieser form, es sey empirisch, oder a priori erscheinen. Die Beschaffenheit der Gegenstände in der Erscheinung beruht also blos auf der subjectiven Form der Anschauung, wodurch sie die Art derselben im Gemüth bestimmt, und nach der Verschiedenheit des Verhältnisses, wie Gegenstände von uns angeschaut werden, und das Gemüth afficiren. So erscheint selbst objective die Cirkel Linie verschieden, selbst als oblongum oder gerade Linie, nach Verschiedenheit der Richtung, in welcher wir sie sehen. Es hat also die Erscheinung des Objects nichts mehr mit der objectiven Beschaffenheit der Sache selbst gemein, und unser Erkenntniß ist nicht fähig, sich über die Grenzen der Erscheinung zu extendiren (d. i. Wahrnehmung und Ort derselben), vielmehr sind wir nur im Stande, die Erscheinung, so wie sie durch die reine Form der Sinnlichkeit bestimmt, ist, auf die Objecte selbst wieder zu übertragen und also unsere Wahrnehmung wieder anzuwenden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s03-077",
     "kind": "text",
     "aa": 975,
     "ms": [
      {
       "p": 61,
       "i": 432
      },
      {
       "p": 62,
       "i": 1159
      }
     ],
     "text": "17) Raum und Zeit sind nun die einzigen reinen Formen sinnlicher Anschauung, nemlich der Raum als die Form aller äußern sinnlichen Anschauungen, und die Zeit als die Form aller innern sinnlichen Anschauungen: mithin gehn sie nur auf die subjective Vorstellungs Art der Dinge a priori, d. i. sie sind die subjektive Bedingung, um Objecte durch die sinnliche Anschauung so erkennen zu können, als die Erscheinung sie darbiethet. Denn alle Dinge in der Sinnlichen Anschauung sind in Raum und Zeit bey der Vorstellung gesetzt, und dadurch wird es möglich, daß wir uns die Gegenstände in der Erscheinung vorstellen oder anschauen können. Sie sind also die Form der Sinnlichkeit, die vor aller Erfahrung von dem Gegenstände in uns als subjective Bedingung der Anschauung vorhanden sind. Sie können daher nicht Dinge an sich selbst seyn, oder mit den objecten coexistiren, denn wäre dies, so müßten wir Raum und Zeit, so wie die Gegenstände an und für sich erkennen, mithin durch den Verstand, mithin wäre die Erkenntniß nur a posteriori und darin Erweiterung möglich, und könnte a priori nie geschehen: wir würden also nie a priori über Vorstellungen urtheilen und die Noth Wendigkeit der Beschaffenheit der Dinge in der Erkenntniß einsehen können. Sie sind also an und für sich nichts objectives.",
     "dehyphenated": 6,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-078",
     "kind": "text",
     "aa": 975,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "6«",
       "approx": true,
       "unresolved": true
      },
      {
       "p": null,
       "i": 94,
       "raw": "61",
       "unresolved": true
      }
     ],
     "text": "I 1. Beydes, Raum und Zeit sind die Formen sinnlicher Anschauungen, oder, welches gleich ist, sie sind formale sinnliche Anschauungen, d. i. es sind Formen eines jeden einzelnen subjects, nach welchen der gegebene Gegenstand nur unter dieser Form und unter keiner andern vorgestellt werden kann. Sie können auch nur Anschauungen seyn, und nie Begriffe: denn es gehört wesentlich die unmittelbare Vorstellung der Objecte, und zwar eines einzelnen Objects ,dazu, und nie kann ein Merkmal eines Begriffs dabei zum Grunde gelegt werden. —",
     "dehyphenated": 4,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s03-079",
     "kind": "text",
     "aa": 975,
     "aaEnd": 976,
     "pages": [
      {
       "p": 976,
       "i": 393
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 623,
       "raw": "62",
       "unresolved": true
      }
     ],
     "text": "Alle Räume, alle Zeiten sind nur Theü eines einzigen Raumes und einer Zeit. Es giebt nur Einen Raum und eine Zeit. Es laßen sich daher wol Theile eines und deßelben Raumes und der Zeit neben und respective nach einander dencken, aber diese Theile laßen sich nicht einem allgemeinen anzunehmenden Raum oder Zeit unterordnen. Raum und Zeit sind daher jedes Vorstellungen von einer re singulär i und nicht communi: wenn man sagt: die Welt habe einen Anfang und ein Ende, so kann dies nur heißen: das object der Welt habe eine Zeit, wo es nicht war, anfängt zu seyn, und nicht mehr seyn wird, aber die Zeit selbst bleibt immer eine vor sich unabänderliche Vorstellung.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-080",
     "kind": "text",
     "aa": 976,
     "ms": [
      {
       "p": 63,
       "i": 1097
      }
     ],
     "text": "2. Raum und Zeit sind reine sinnliche Anschauungen a priori und mithin unabhängig von aller Erfahrung, denn, um eine Erfahrung von demjenigen zu haben, so im Raume ist, so läßt sich diese nicht anders denken, als daß man sich vorher einen Raum gedacht hat. Alle Dinge können als vernichtet gedacht werden, und dennoch bleibt der Raum. Raum und Zeit hängen also nicht von den Dingen im Raume und in der Zeit ab als coexistentia rerum wie Wolf glaubt, sondern sind für sich bestehende Anschauungen, wenn man von allen Dingen abstrahirt hat. Der Raum hat also wesentlich in sich nur die subjective Form äußerer — so wie die Zeit die subjective Form innerer Anschauungen. Man könnte sie aber als etwas formelles nicht annehmen, wenn man für nöthig hält, Raum und Zeit von den Dingen oder der Materie selbst erst zu abstrahiren, um sie als etwas objectives anzusehen, so außer uns als etwas mit den Dingen coexistirendes gedacht werden müßte, sie würden alsdann Begriffe a posteriori seyn, statt deßen sie Anschauungen a priori sind, mithin man, um sie zu denken, nicht erst Dinge annehmen darf, denen sie Bestimmung geben sollen.",
     "dehyphenated": 1,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s03-081",
     "kind": "text",
     "aa": 976,
     "aaEnd": 977,
     "pages": [
      {
       "p": 977,
       "i": 1036
      }
     ],
     "ms": [
      {
       "p": 64,
       "i": 1015
      }
     ],
     "text": "3. Eigenschaften des Raumes und der Zeit sind von der Art, daß sie aus keinen Begriffen sondern unmittelbar aus der Anschauung abgeleitet werden müßen. Wolf z.E. leitet den Raum und deßen Eigenschaften aus objectiven Begriffen ab — er sagt, er sey ordo simultaneorum quatenus extra se positae existunt simul. Allein alsdenn läßt sich nicht erklären, warum der Raum 3 Abmeßungen habe, nemlich . Länge, Breite und Höhe. Aus der Erfahrung laßen sie sich nicht ableiten, vielmehr muß man schon den Raum mit seinen 3 Abmeßungen in Gedanken haben, ehe man sich den Körper in der Erfahrung vorstellen kann. Sie liegen also schon als Bedingung der Vorstellung in der innern Anschauung; sie anzunehmen, wird das Bewußtseyn gezwungen, mithin existiren sie a priori als nothwendig, und von Dingen abstrahirt, können sie den Dingen doch nicht nothwendig bey gelegt werden, wenn sie nicht auf diese höhere Anschauung gebauet, präexistirten. Es wird dadurch die Ordnung der Dinge deutlieh, die Wolf in seiner Definition vom Raum als dunkel bestimmt, wenn er meint, der Raum sey eine confuse Vorstellung von der Ordnung der Dinge, insofern sie aus einander sich befinden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s03-082",
     "kind": "text",
     "aa": 977,
     "text": "Dagegen leidt es keinen Zweifel, daß man aus der reinen Anschauung des Raumes auch Begriffe ziehen und dadurch ableiten könne.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-083",
     "kind": "text",
     "aa": 977,
     "text": "4. Daraus nun, daß Raum und Zeit reine Anschauungen a priori und nicht von den objecten abstrahirte Begriffe sind, folgt es, daß alle Sätze der Geometrie und Arithmetic, oder, die Zahlen und Figuren betreffen, synthetische Urtheile, und zwar a priori und mithin nothwendig und apodictisch gewiß sind, welches nicht seyn würde, wenn sie nicht aus Raum und Zeit als reinen Anschauungen abgeleitet werden könnten. Z.E. Es läßt sich ohne Versuch finden, daß eine gerade Linie auf einen gegebenen Punkt perpendiculär sey.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-084",
     "kind": "text",
     "aa": 977,
     "text": "5. Raum und Zeit sind zwar objectiv in Ansehung der Gegen -stände, d. i. sie stellen die Gegenstände vor; aber nur, wie sie in der Erscheinung sind, nicht aber, wie sie an sich sind.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s03-085",
     "kind": "text",
     "aa": 977,
     "ms": [
      {
       "p": 65,
       "i": 76
      },
      {
       "p": 66,
       "i": 1188
      }
     ],
     "text": "Stellt man sich die Sache an sich selbst vor, so betrachtet man sie als ein Ganzes aus vielen Theilen; betrachtet alle Theile an sich und in ihrem Verhältniß unter einander; dies geschieht durch den Verstand, der dadurch den Begriff des Ganzen formirt, worunter die Theile begriffen werden. Beruhte nun Raum und Zeit auf Begriffen, so müßte man schlechthin nöthig haben, sich erst Theile des Raumes und Zeit vorstellen (und sich dies vorstellen können) , ehe man sich den Raum und die Zeit im Ganzen denken könnte ; die Theile derselben, nemlich einzelne Räume und Zeiten, sind aber als gleichstehende in dem Raum und Zeit, und nicht unter ihm enthalten. Es läßt sich kein Raum, keine Zeit denken, ohne sich einen weit großem Raum oder Zeit zugleich zu denken, und dadurch erhebt sich die Vorstellung zu einem Einzelnen Object, und diese kann nur in der Anschauung gegründet seyn. Ja, wären Raum und Zeit Beschaffenheiten der Dinge an sich, so müßten sie Eigenschaften Gottes seyn. Denn Raum ist unbegränzt, die Dauer der Zeit ist auch ohne Gränzen. Der Raum und Zeit sind einig ; beyde sind nothwendig in Ansehung des Daseyns aller Dinge. Sie sind allumfaßend in Rücksicht aller Objecte die sie sämtlich in sich faßen. Sie sind ewig. Mithin, da die realität der Dinge in Gott als dem Grunde ruht, so würden Beyde auch nur Gott beygelegt werden können, und wircklich bestand die Hypothese des Spinozismus darin, daß man Raum und Zeit für die Dinge an sich und für Eigenschaften Gottes annahm.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-086",
     "kind": "text",
     "aa": 978,
     "aaEnd": 979,
     "pages": [
      {
       "p": 979,
       "i": 2539
      }
     ],
     "ms": [
      {
       "p": 67,
       "i": 627
      },
      {
       "p": 68,
       "i": 1685,
       "raw": "",
       "inferred": true
      },
      {
       "p": 69,
       "i": 2641
      }
     ],
     "text": "19. Geht man nun auf das Erkenntniß der Menschen von den Bingen selbst über, so zeigt sich das Vermögen der Menschen, Binge zu erkennen, als sehr eingeschränkt. Nur den Verstand Gottes nennt man Anschauung: so unerklärbar diese Art des Verstandes uns Menschen ist; so soll es doch anzeigen, daß Gott das Vermögen habe, die Binge zu erkennen, wie sie an sich sind, welches den Menschen ganz fehlt. Ber Mensch kann nur durch Begriffe erkennen, d. i. durch Merkmale, die er sich von den durch Anschauung empfundenen Objecten abstrahirt, aber durch das abstractions Verfahren sehr viele von den Bingen bey Seite setzen muß, um nur etwas von den Bingen einzusehen, mithin geben die dadurch gemachten Merkmale und das Benken der Binge durch dieselben nur eine eingeschränkte Erkenntniß, die nie weiter gehen kann, als ihm die Sinnlichkeit dazu den Stoff darbiethet, daher er auch nur fähig ist, an den Bingen, in der Art, als sie ihm erscheinen, nichts aber von den Bingen selbst, und wie sie an sich sind, zu erkennen. So wie also Sinnlichkeit das Vermögen der Anschauung ist, so ist der Verstand des Menschen das Vermögen der Begriffe. Begriffe können auch a priori gedacht werden, wenn sie nichts, als den Begriff von synthesis, d. i. Zusammensetzung des Mannigfaltigen in der Vorstellung, um ein Erkenntniß auszumachen, enthalten, und diese synthesis Einheit hat, d. i. das Bewußtsein meiner selbst von der Verbindung des Mannigfaltigen in meiner Vorstellung, es mag übrigens diese Verbindung negative oder affirmative Theile der Vorstellung involviren. Unter diesen Bedingungen entsteht ein Begriff, der a priori vom Gegenstände gedacht 6sist; denn die Verbindung des Mannigfaltigen in der Vorstellung und das Bewußtseyn davon, oder die Einheit, sind nicht empirische Begriffe, sondern a priori. Z.E. daß ein Körper zusammengesetzt ist, kann ich aus der Erfahrung nicht wißen, ich kann die Zusammensetzung nicht sehen. Es ist hier ein bloßer Actus des Benkens, ohngeachtet dem ersten Anschein nach der Begriff von dem Zusammengesetzten a posteriori gemacht zu seyn scheint. Ber Verstand hat allein das Mannigfaltige in der Vorstellung verbunden, und durch das Bewußtseyn von der Verbindung entstand der Begriff. Hierauf beruht der reine Verstandes -Begriff: oder Begriff a priori. Bas Bewußtseyn selbst von der Verbindung des Mannigfaltigen erhält das subject oder der Verstand durch die reine Anschauung von Raum und Zeit. Man nennt die reinen Verstandes Begriffe also diejenigen welche synthetische Einheit oder das Bewußtseyn von der Verbindung des Mannigfaltigen in der Vorstellung enthalten, oder Begriffe der Einheit des Mannigfaltigen in der synthetischen Vor-Stellung. Den reinen Verstandes Begriff praedicirt man Categorie — mithin ist diese das Bewußtseyn der synthetischen Einheit des gegebenen Mannigfaltigen in der Vorstellung. Die Categorie an und für sich läßt unausgemacht, und unbestimmt, ob der Begriff, d. i. sie selbst, objective realität habe. Sie ist hierin einer Vorstellung gleich, welche nichts widersprechendes enthält, sich also dencken läßt, aber leer seyn kann. Ob sie also auf sinnlicher synthetischer Einheit — empirischer Einheit — beruhe, oder habe, bleibt bey ihr unbestimmt. Indeß wird nur Anfangs der reine Verstandes Begriff so verstanden, daß es ungewiß ist, ob er realität habe, oder nicht, nachher aber kommt noch durch die Bedingung von Raum und Zeit hinzu, daß ich dadurch inne werde, daß er etwas objectives bedeute.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 15,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-087",
     "kind": "text",
     "aa": 979,
     "ms": [
      {
       "p": 70,
       "i": 156
      }
     ],
     "text": "Z. E. die Categorie von Größe, als ein Vieles gleichartiges, so zusammen Eines ausmacht : diese läßt sich ohne Raum und Zeit nicht begreifen. Es kommt hier übrigens nicht auf empirische Wirklichkeit der Körper an, sondern nur auf die Möglichkeit, nach unserem Verstände zu finden, was Größe sey, und diese Möglichkeit ist, wie gesagt, durch reine Anschauung a priori möglich.",
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s03-088",
     "kind": "text",
     "aa": 979,
     "text": "So ist es auch mit dem Begriff von Ursach, sofern sie in dem Grunde des Daseyns von einem andern nach einer beständigen Regel bestehet. Die Categorie, daß B die Wirkung von A sey, und die Nothwendigkeit der Ursach, eine Wirkung zu seyn, daß ein caußatum eine caußam habe, ist aber so wenig zu begreifen, wenn man nicht die reine Anschauung von Raum und Zeit zu Hülfe nimmt.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-089",
     "kind": "text",
     "aa": 979,
     "text": "18) Auf die Voraussetzung nun, daß wir nur im Stande sind, uns die Objecte in der Erscheinung, und nicht an sich vorzustellen, baut Herr Kant",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s03-090",
     "kind": "text",
     "aa": 979,
     "text": "1.) die Theorie von der Idealität des Raumes und der Zeit, und verwirft",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s03-091",
     "kind": "text",
     "aa": 979,
     "text": "2.) die Theorie der entgegenstehenden Realität des Raumes und der Zeit.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s03-092",
     "kind": "text",
     "aa": 979,
     "aaEnd": 980,
     "pages": [
      {
       "p": 980,
       "i": 379
      }
     ],
     "ms": [
      {
       "p": 71,
       "i": 41
      }
     ],
     "text": "Die Theorie der Idealität nimmt also an, daß Raum und Zeit nichts anders als etwas subjectives sind, oder = blos die Form der sinnlichen Anschauung angehe. Sie beruht also auf dem princip, daß Raum und Zeit nicht reale Bestimmungen der Dinge an sich selbst, sondern bloße Formen sind, so als blos im subject liegende Bedingungen zum Behuf der Anschauung gegeben sind. Die Möglichkeit, solche sinnliche Formen zu haben, erhelle schon z.E. daraus, daß wir in dem Begriff von Gott, ihm nicht das praedicat des Denkens wegen der Eingeschränktheit dieses Begriffs, sondern ein Anschauungs Vermögen der Dinge an sich beylegen können, als welches auf diesem princip beruhe.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s03-093",
     "kind": "text",
     "aa": 980,
     "ms": [
      {
       "p": 72,
       "i": 341
      }
     ],
     "text": "Die Vertheidiger der Theorie der Realität von Raum und Zeit nehmen dagegen an, daß Raum und Zeit eine Beschaffenheit der Dinge an sich selbst wären, und wir Raum und Zeit nicht a priori sondern aus der Erfahrung hätten. Herr Kant widerlegt dies durch die existenz der Erkenntniße a priori von Raum und Zeit, und daß es unmöglich seyn würde, die Beschaffenheit derselben, z.E. die 3 Abmeßungen des Raumes, a priori synthetisch zu erkennen, oder darüber a priori zu urtheilen.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s03-094",
     "kind": "text",
     "aa": 980,
     "text": "Herr Kant bestimmt aber",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s03-095",
     "kind": "text",
     "aa": 980,
     "text": "3. die Theorie der Idealität von Raum und Zeit als etwas blos subjectives, darin genauer, daß wir dadurch nicht blos unser eignes subject zu erkennen fähig würden, sondern wirklich Objecte erkennten; denn, wenn wir uns einmal Objecte als phaenomena vorstellten, so kämen auch alle praedicate, welche wir uns vermöge der subjectiven Form vorgestellt und angeschaut hätten, den Objecten wirklich, nur aber blos als Erscheinung, zu, und insofern hätten die Objecte für uns Realität. Da es also hiernach unmöglich sey, sich das Object an sich selbst vorzustellen, so könnten noumena nur Objecte der nicht sinnlichen Anschauung betreffen.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s03-096",
     "kind": "text",
     "aa": 980,
     "text": "Herr Kant begründet seine Theorie von der Idealität des Raumes und der Zeit näher durch die Eigenschaften beyder.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-097",
     "kind": "text",
     "aa": 980,
     "aaEnd": 981,
     "pages": [
      {
       "p": 981,
       "i": 861
      }
     ],
     "ms": [
      {
       "p": 73,
       "i": 41
      },
      {
       "p": 74,
       "i": 1076
      },
      {
       "p": 75,
       "i": 2056
      }
     ],
     "text": "Ist es nämlich nöthig, daß Raum und Zeit den Dingen selbst als Eigenschaften zukommen, und wir nicht durch die subjective Form unserer Sinne die Dinge als Erscheinung anschauen, so müßen wir Raum und Zeit von den Dingen durch den Verstand erkennen; deßen I orm in Bildung der Begriffe beruht, aber wesentlich darauf, daß er sich ein vieles, d. i. Theile denkt, und diese zu einer Einheit d. i. zu einem Ganzen verbindet, d. i. sich die Dinge durch einen Begriff denkt. Das Object hat also wesentlich Theile: was nun ein Iheil eines andern ist, muß sich auch als für sich bestehend betrachten laßen, und kann nur im Verhältniß zum Ganzen ein Theil genannt werden. Nun läßt sich aber der einzelne Raum nur als ein Theil denken, d. i. ein Abschnitt eines großem, und dieser größere wieder als Theil eines noch großem, und dies bis in’s unendliche fort, daher auch die Unendlichkeit von Raum und Zeit praedicirt werden muß. Er kann also keine Gränze wie Objecte haben, er hat nicht Theile unter sich, welche sich zur Einheit verbinden laßen, er läßt sich daher auch nicht als ein Ganzes denken. Er hat also gar keine Bestimmung, die etwas objectives darstellt, ist also kein Object, und kann also nicht durch Begriffe gedacht werden. Daraus folgt, daß er nur etwas einzelnes sey, mithin die Vorstellung davon auf Anschauung beruhe. Es folgt daraus, daß diese Anschauung nicht empirisch, sondern a priori seyn müße, da sich der Raum eher als das Object im Raume denken läßt. Es hegt also die Vorstellung im subject allein. Nun ist es, da Raum und Zeit a priori gedacht werden, nothwendig, alle Objecte sinnlicher Anschauung in Raum und Zeit zu legen, sie würden aber nicht geordnet werden können, wenn die Sinnlichkeit nicht mit einer dazu ordinirten Form versehen wäre, und diese Form muß in dem Raum und Zeit zu suchen sein. Daher sind sie die einzigen sinnlichen Formen unserer Anschauung, die blos subjectiv sind. Hieraus folgt auch wiederum daß, da wir doch die Objecte selbst nur in einer gewißen Form anschauen, diese Form in unserm subject und nicht im Object hege, und daß wir die Objecte daher nur so erkennen können, als sie uns erscheinen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-098",
     "kind": "text",
     "aa": 981,
     "text": "Consequentiae. Es folgern sich nun aus dem Begriff von Raum und Zeit einige synthetische Sätze a priori.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-099",
     "kind": "text",
     "aa": 981,
     "text": "1.) Es sind nicht zw ey Zeiten zugleich, sondern nach einander, so wie zwey Räume nicht nach einander, sondern zugleich sind.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s03-100",
     "kind": "text",
     "aa": 981,
     "text": "2.) In der Zeit werden alle Gegenstände von mir gedacht, und vorgestellt, wie sie zugleich oder nach einander sind, im Raum aber werden die Gegenstände vorgestellt, wie sie außer mir sind, mithin kann dasjenige, was in mir und nicht außer mir existirt, im Raum nicht angeschaut werden.",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s03-101",
     "kind": "text",
     "aa": 981,
     "aaEnd": 982,
     "pages": [
      {
       "p": 982,
       "i": 576
      }
     ],
     "ms": [
      {
       "p": 76,
       "i": 340
      }
     ],
     "text": "3.) Die Vorstellung von der Zeit ist nemlich in mir, und die Zeit gehört also zum innern Sinn, die Vorstellung vom Raum aber ist außer mir, und gehört zum äußern Sinn. Die Bestimmungen der Vorstellungen in Rücksicht der Zeit geschehen daher alle in mir, in Rücksicht des Raumes aber alle außer mir. Wenn Newton nun in einem scholio der principiorum philosophiae naturalis sagt: die Zeit ist allenthalben und der Raum in aller Zeit, so läßt sich dies nicht dahin verstehen, daß die Zeit einen Ort habe. Die Zeit hat keinen Ort, wohin ich etwas in der Zeit setzen kann, und was ich mir in der Zeit denke, ist garnicht im Raum. Es kann aber ganz sicher heißen: der Zeitbegriff faßt alle Vorstellungen, der Raum aber nur diejenigen Vorstellungen in sich, insofern die Objecte außer mir sind.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s03-102",
     "kind": "text",
     "aa": 982,
     "text": "4.) Alle Dinge außer mir kann ich mir, insofern als ich auf das Verhältnis mit andern Dingen Rücksicht nehme, nicht anders als im Raum denken. D. i. Bestimmungen des Verhältnisses der Dinge außer mir laßen sich nicht anders angeben, als unter Voraussetzung ihrer existenz im Raum.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s03-103",
     "kind": "text",
     "aa": 982,
     "ms": [
      {
       "p": 77,
       "i": 34
      }
     ],
     "text": "Wenn daher Wolf sich die Dinge im Raum denkt, und den Raum in der ordine simultaneorum setzt, so wird der Raum durch einen Verstandes Begriff erkannt, durch das Verhältnis der Dinge. Ebenso wenn er die Zeit bestimmt, durch ordinem succeßivorum, quatenus sunt invicem connexa (quae post invicem essent): Aber man muß sich Raum und Zeit schon voraus gedacht haben, ehe man sich Dinge zugleich oder nach einander denkt.",
     "ocrConf": 83
    }
   ]
  },
  {
   "id": "s04",
   "title": "Anmerkung",
   "titleSrc": "heading",
   "headings": [
    "Anmerkung"
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s04-001",
     "kind": "heading",
     "aa": 982,
     "text": "Anmerkung"
    },
    {
     "id": "metaphysik-k3-s04-002",
     "kind": "text",
     "aa": 982,
     "aaEnd": 983,
     "pages": [
      {
       "p": 983,
       "i": 1296
      }
     ],
     "ms": [
      {
       "p": 78,
       "i": 466
      },
      {
       "p": 79,
       "i": 1404
      }
     ],
     "text": "In der Critic der reinen Vernunft ist durch die Darstellung des Begriffs der Sinnlichkeit (perceptivitaet) als Vermögens, Vorstellungen nach der Art, als das subject afficirt wird, zu erhalten, und des Begriffs des Verstandes (Vermögens zu denken — spontaneitaet) als des Vermögens, nach Maaßgabe dieser Vorstellungen zu erkennen, geschloßen worden, daß das Gemüth sich selbst erscheine, oder daß die Seele ein Gegenstand der Erscheinung von sich selbst seyn könne. Es ist an sich richtig, daß das subject durch sich selbst afficirt werden, und also durch den innern Sinn der Seele Vorstellungen erhalten und daraus erkennen kann, nachdem zuvor das Gemüth von den Objecten afficirt worden, um aber hierüber Zweideutigkeiten zu vermeiden, so schlägt Herr Kant statt deßen die Definition der Sinnlichkeit dahin vor: das bloß subjective in der Vorstellung der Dinge, insofern es den formalen Grund enthält, sich die Objecte darnach zu präsentiren, oder auch = sinnliche Form unserer Anschauung. Denn etwas objectives selbst kann in ihr nicht liegen. Sie bestimmt nach der in ihr liegenden Form die Erscheinung, d. i. sie bestimmt zum Voraus die Art, wie das Object erscheinen wird. Sie liegt für alle Arten sinnlicher Anschauung zum Grunde, und ist also a priori vorhanden, um diese Anschauungen in Raum und Zeit zu bestimmen, hat aber garkeine Verbindung mit dem Object selbst, noch weniger ist sie eine Beschaffenheit des Objects selbst, sondern giebt blos die Erscheinung deßelben zu erkennen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s04-003",
     "kind": "text",
     "aa": 983,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "78",
       "unresolved": true
      }
     ],
     "text": "Es ist hier der Ort, die Distinction einer Vorstellung, die sensitiv ist, von der sensibili anzuzeigen. In Ansehung der Objecte, die vorgestellt werden, sind die Vorstellungen entweder:",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s04-004",
     "kind": "text",
     "aa": 983,
     "text": "sensitive d. i. sinnliche, die auf der Form der Sinnlichkeit allein beruhen, ohne daß die existenz der Materie dabei concurrirt. So sind Raum und Zeit Formen der Sinnlichkeit ohne daß ein Object der Sinne dabei concurrirt und damit verbunden ist.",
     "ocrConf": 87
    },
    {
     "id": "metaphysik-k3-s04-005",
     "kind": "text",
     "aa": 983,
     "ms": [
      {
       "p": null,
       "i": 43,
       "raw": "79",
       "unresolved": true
      }
     ],
     "text": "Diese können aber zugleich mit der Materie oder dem object der Sinne verbunden seyn, und dann werden die sensitiven zu sensibilia oder: empfindbaren, d. i. die zugleich realität enthalten. So kann im Raum und Zeit etwas sein, so ein Gegenstand der Sinne ist, und dies ist das empfindbare, so die realität giebt, mithin ist das empfindbare der Materie, der Sinnlichkeit gleich. — So haben alle empirischen Erkenntniße nicht blos das sensitive rationem der Form, sondern zugleich etwas empfindbares, wogegen in der sinnlichen Erkenntniß überhaupt nichts empirisches, mithin auch nichts empfindbares enthalten ist.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-006",
     "kind": "text",
     "aa": 983,
     "ms": [
      {
       "p": 80,
       "i": 173
      }
     ],
     "text": "Der sinnlichen Erkenntniß in opposito sind aber intellectuelle Vorstellungen, die blos durch den Verstand gedacht werden. Hier ist auch die Form des Denkens und der Materie oder realität ähnlich der Verstandes Begriff als das product.",
     "dehyphenated": 3,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s04-007",
     "kind": "text",
     "aa": 983,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "79",
       "approx": true,
       "unresolved": true
      }
     ],
     "text": "ad § 19. Alles, was bisher von der Möglichkeit, Erkenntniße a priori durch die subjective Form sinnlicher Anschauung zu erhalten, gesagt ist, gehört zur transcendental-Ästhetic, d. i. Sinnen Lehre, dagegen liefert die transcendental-Logic, d. i. Verstandes Lehre eine zweyte Quelle von principien, um möglicher Weise reine Erkenntniße a priori zu erhalten. Diese unterscheidt sich von der allgemeinen reinen Logic darin, daß diese sich mit der bloßen Form des Gebrauchs unsers Verstandes beschäftigt, jene aber auf Bestimmung der reinen Erkenntniß der Objecte durch den bloßen Verstand geht.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s04-008",
     "kind": "text",
     "aa": 983,
     "text": "Ein reiner Verstandes Begriff ist eine reine Erkenntniß des Objects durch den bloßen V erstand, und das völlige Oppositum des empirischen Begriffs, indem er völlig rein a priori gedacht wird, mithin kann man ihn auch einen Begriff des reinen Denckens nennen, um ihn von der Sinnlichkeit zu unterscheiden.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-009",
     "kind": "text",
     "aa": 984,
     "ms": [
      {
       "p": null,
       "i": 118,
       "raw": "80",
       "unresolved": true
      }
     ],
     "text": "Der Begriff a priori von der synthetischen Einheit des mannigfaltigen in der Anschauung ist Categorie. Die Verbindung des Mannigfaltigen und das Bewußtseyn von derselben macht das constitutive der Categorie aus.",
     "dehyphenated": 2,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s04-010",
     "kind": "text",
     "aa": 984,
     "text": "Das Bewußtseyn von der Einheit des Mannigfaltigen nach Begriffen ist logische function.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-011",
     "kind": "text",
     "aa": 984,
     "text": "Alle Gegenstände (sie mögen in der Erscheinung oder durch Begriffe Vorkommen) laßen sich allerdings wahrnehmen, nie aber deren Zusammensetzung. Diese muß der Verstand zur Vorstellung hinzuthun, und sie ist also allein ein Actus des Verstandes, nemlich die Zusammensetzung, um sich das zusammengesetzte dahin vorzustellen damit es eins werde. — Dies nennt Herr Kant synthesis, z.E. die Theile, so zusammen eine Stube ausmachen.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s04-012",
     "kind": "text",
     "aa": 984,
     "text": "Das Bewußtseyn von der synthetischen Einheit des Mannigfaltigen in der Anschauung überhaupt oder (welches =) das Bewußtseyn von dem Begriffe, der die synthetische Einheit enthält, ist = Categorie.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s04-013",
     "kind": "text",
     "aa": 984,
     "ms": [
      {
       "p": 81,
       "i": 177
      }
     ],
     "text": "So nannte die reinen Verstandes Begriffe Aristoteles; die Scholasticer nannten sie prädicamenta und sie waren der Zahl nach gleich ; es sind nemlich 12 überhaupt, und enthalten die elementa der Erkenntniße a priori durch den Verstand. Außer diesen giebt es noch praedicabilien, die theils aus erstem zusammengesetzt sind, z. E. Ursach mit Größe verbunden, theils die praedicamente mit den Begriffen von Raum und Zeit verbunden. Auch diese sind, und vermuthlich ganz vollständig, aufzuzählen möglich. Herr Kant hat sie nicht aufgezählt.",
     "dehyphenated": 4,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s04-014",
     "kind": "text",
     "aa": 984,
     "text": "Zusammengenommen machen Categorien und praedicabilien die sämmtliche elementar-principien aus, um den Unfang aller Erkenntniße a priori zu erkennen.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-015",
     "kind": "text",
     "aa": 984,
     "aaEnd": 985,
     "pages": [
      {
       "p": 985,
       "i": 713
      }
     ],
     "ms": [
      {
       "p": 82,
       "i": 509
      }
     ],
     "text": "20. Es ist sehr merkwürdig, daß es sich möglich machen laße, alle möglichen \\ erstandes- Begriffe auf Classen zu bringen, und aus dem Vermögen des Verstandes so her zu leiten, daß er dadurch seinem Umfang nach eben so erschöpft wird, wie aus der Form von Raum und Zeit sich die principien aller sensibilen Erkenntniße ergeben. Dei Verstand ist das Vermögen der Begriffe. Um nun etwas uns unter einen Begriff zu bringen, ist jedesmal ein Urtheil nothwendig, mithm laufen alle Handlungen des Verstandes auf ein Urtheilen hinaus. Denn Dencken ist ein discursives Erkenntniß ; d. i. das Erkenntmß durch gewiße Merkmale der Dinge. Diese letzteren machen das praedicat aus, so der Vorstellung von dem Dinge als subject beygelegt worden, in dieser Verbindung liegt aber das Urtheil. So wie nun die Logic functionen des Verstandes, d. i. Regeln des Denckens überhaupt, und ohne Rücksicht auf ein Object, enthält, so enthält die transcendental Logic, die jene allgemeine Logic, angewandt auf objective Erkenntniß a priori ist, diese functiones des Denckens oder Formen der Urtheile, mithin laßen sich auch hier die 4 logischen functionen zum Grunde legen, und alle mögliche elementar principien des reinen Denkens auf quantität, qualität, relation und Modalität reduciren. Hiernach läßt sich also die Tafel der reinen Verstandes Begriffe auf die Tafel der 4 logischen functionen zurück führen, also:",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-016",
     "kind": "text",
     "aa": 985,
     "ms": [
      {
       "p": 83,
       "i": 33
      }
     ],
     "text": "1) Der Quantität nach sind unsre logischen Urtheile judicia a singularia einzelne b particularia besondere die man aber, da hier doch immer mehrere Gegenstände voraus gesetzt werden, es doch aber unausgemacht ist, ob das Mehrere nicht Allheit sey, dies aber davon unterschieden seyn muß, beßer pluralia nennen würde.",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s04-017",
     "kind": "text",
     "aa": 985,
     "text": "c universalia — allgemeine",
     "ocrConf": 69
    },
    {
     "id": "metaphysik-k3-s04-018",
     "kind": "text",
     "aa": 985,
     "text": "II) der Qualität nach a affirmativa b negativa c infinita, d. i. affirmative Urtheile in Ansehung der copula, oder negative in Ansehung des prädicats, z. E. anima est nonmortalis. III) der Relation nach (Verhältniße)",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s04-019",
     "kind": "text",
     "aa": 985,
     "ms": [
      {
       "p": 84,
       "i": 197
      }
     ],
     "text": "a Categorische im Verhältniß des prädicats zum Subject b hypothetische im Verhältniß der Folge zum Grunde c disjunctive im Verhältniß eines Gliedes der Eintheilung zur ganzen sphaere des Begriffs. IV) der Modalität nach (Verhältniße)",
     "joined": [
      "inferred"
     ],
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-020",
     "kind": "text",
     "aa": 985,
     "aaEnd": 986,
     "pages": [
      {
       "p": 986,
       "i": 230
      }
     ],
     "text": "a problematische b aßertorische c apodictische Diese enthalten die Verhältniße des praedicats zum subject, nach V erschiedenheit ad a) der logischen Möglichkeit ad b) der logischen Wirklichkeit ad c) der logischen Noth Wendigkeit Nemlich das Urtheil enthält ein praedicat, so ratione subjecti nur unter der Bedingung der Möglichkeit gedacht wird, so ist es blos problematisch gedacht; es wird aber ein Satz oder aßertorisches Urtheil, wenn es dem subject wirklich beygelegt wird, und ist dieser Satz mit der Nothwendigkeit verbunden, so wird das Urtheil apodictisch.",
     "joined": [
      "inferred",
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-021",
     "kind": "text",
     "aa": 986,
     "ms": [
      {
       "p": 85,
       "i": 212
      }
     ],
     "text": "Hierauf beruhen nun ebensoviel Categorien nur mit dem Unterschiede, daß diese auf objecte gerichtet sind, hier alles das von objecten praedicirt wird, was bey den logischen functionen von Begriffen gesagt wurde. Also : I) der Quantität nach",
     "dehyphenated": 3,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s04-022",
     "kind": "text",
     "aa": 986,
     "text": "1 a Einheit",
     "ocrConf": 70
    },
    {
     "id": "metaphysik-k3-s04-023",
     "kind": "text",
     "aa": 986,
     "text": "2 b Vielheit",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-k3-s04-024",
     "kind": "text",
     "aa": 986,
     "text": "3 c Allheit II) der Qualität nach",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-k3-s04-025",
     "kind": "text",
     "aa": 986,
     "text": "4 a Realität",
     "ocrConf": 90
    },
    {
     "id": "metaphysik-k3-s04-026",
     "kind": "text",
     "aa": 986,
     "text": "5 b Negation",
     "ocrConf": 53
    },
    {
     "id": "metaphysik-k3-s04-027",
     "kind": "text",
     "aa": 986,
     "text": "6 c Limitation d. i. der Qualität nach beruht die Categorie auf Voraussetzung entweder von Etwas, so den Begriff von Seyn enthält, z.E. Licht, oder den Begriff von Nichtseyn, z.E. Ruhe, oder den Begriff von Seyn, zugleich verbunden mit Nicht Seyn als Einschränkung. III) der Relation nach, wo immer zwey correspondirende Begriffe concurriren",
     "dehyphenated": 1,
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s04-028",
     "kind": "text",
     "aa": 986,
     "text": "7 a. Substanz — accidens",
     "ocrConf": 56
    },
    {
     "id": "metaphysik-k3-s04-029",
     "kind": "text",
     "aa": 986,
     "text": "8b. Ursach — Wirkung",
     "ocrConf": 52
    },
    {
     "id": "metaphysik-k3-s04-030",
     "kind": "text",
     "aa": 986,
     "text": "9 c. Agens — patiens, oder = die Gemeinschaft, oder = influxus mutuus oder = commercium",
     "joined": [
      "inferred"
     ],
     "ocrConf": 75
    },
    {
     "id": "metaphysik-k3-s04-031",
     "kind": "text",
     "aa": 986,
     "text": "NB ad 9 c. Verhältniß der Gemeinschaft ist darin von der Folge zum Grunde verschieden, daß hier wechselseitig Ursach und Wirkung ist, d. i. es ist etwas im caußato, was Grund von der causa, und etwas in der causa, was Grund vom caußato = beydes zugleich ist. IV) der Modalität nach",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-032",
     "kind": "text",
     "aa": 986,
     "text": "10a. Möglichkeit — (Unmöglichkeit)",
     "ocrConf": 62
    },
    {
     "id": "metaphysik-k3-s04-033",
     "kind": "text",
     "aa": 986,
     "text": "potentialitas",
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s04-034",
     "kind": "text",
     "aa": 987,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "11b. Wirklichkeit actualitas",
     "joined": [
      "inferred"
     ],
     "ocrConf": 66
    },
    {
     "id": "metaphysik-k3-s04-035",
     "kind": "text",
     "aa": 987,
     "text": "(Daseyn) (Nichtseyn)",
     "ocrConf": 58
    },
    {
     "id": "metaphysik-k3-s04-036",
     "kind": "text",
     "aa": 987,
     "text": "12 c. Neceßitas (Zufälligkeit) Hiebei kann man den Begriff von Wirklichkeit nicht mit dem Begriff von existenz gleichstellen; denn die existenz eines Dinges begreift sowohl die Möglichkeit, als Wirklichkeit, als Nothwendigkeit eines Objects in sich, wobei von allen 3en die existenz, von der aetualitas aber die Wirklichkeit nur allein praedicirt wird.",
     "dehyphenated": 3,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s04-037",
     "kind": "text",
     "aa": 987,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "85",
       "unresolved": true
      }
     ],
     "text": "Vergleichung der 4 logischen functionen mit den 12 Categorien ad A. 1 Quantität singularia particularia universalia Einheit Vielheit Allheit",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-k3-s04-038",
     "kind": "text",
     "aa": 987,
     "text": "2 Qualität affirmativa negativa infinita",
     "ocrConf": 91
    },
    {
     "id": "metaphysik-k3-s04-039",
     "kind": "table",
     "aa": 987,
     "text": "",
     "lines": [
      "realität negation",
      "ad B. 1 Delation"
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "metaphysik-k3-s04-040",
     "kind": "text",
     "aa": 987,
     "text": "categorische, hypothetische, disjunctive",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s04-041",
     "kind": "table",
     "aa": 987,
     "text": "",
     "lines": [
      "Substanz Ursach",
      "20 accidens Wirkung",
      "2 Modalität"
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "metaphysik-k3-s04-042",
     "kind": "text",
     "aa": 987,
     "text": "problematische assertorische apodictische Möglichkeit, Wirklichkeit, N othwendigkeit",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-k3-s04-043",
     "kind": "table",
     "aa": 987,
     "text": "",
     "lines": [
      "limitation",
      "Gemeinschaft"
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "metaphysik-k3-s04-044",
     "kind": "text",
     "aa": 987,
     "ms": [
      {
       "p": 86,
       "i": 0,
       "approx": true
      }
     ],
     "text": "I Bemerkungen",
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s04-045",
     "kind": "text",
     "aa": 987,
     "text": "1) Man kann diese 12 Categorien auf 2 Classen reduciren, wovon jede wieder 2 Classen unter sich begreift und",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-046",
     "kind": "text",
     "aa": 987,
     "text": "A. ) die 6 ersten Categorien der Quantität und Qualität die mathematische Classe nennen.",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s04-047",
     "kind": "text",
     "aa": 987,
     "text": "B. ) die 6 letzten Categorien der Relation und Modalität von 7 — 12 die dynamische Classe nennen.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-048",
     "kind": "text",
     "aa": 987,
     "ms": [
      {
       "p": 87,
       "i": 165
      }
     ],
     "text": "2) Aristoteles brachte nur 10 Categorien heraus: es fehlte aber ganz eine Classification nach der Tafel der logischen functionen. Sie waren daher zufällig gefunden, mangelhaft, und sogar die formen von Raum und Zeit darunter, ohnerachtet diese in eine besondere Classe gehören.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-049",
     "kind": "text",
     "aa": 988,
     "text": "3) Merkwürdig ist immer die Erscheinung, daß wir im Stande sind, die functionen des Verstandes vollständig aufzufinden, und daß ebenso viel reine Verstandes Begriffe a priori sind, als sich logische functionen finden, daß erstere den letzteren correspondiren, und so, daß wir hie durch im Stande sind, alle elemente des reinen Denkens über alle Gegenstände zu bestimmen, nemlich vor aller möglichen Erfahrung: jedoch, wie sich von selbst versteht, innerhalb der Gränzen der transcendental Philosophie, d. i. daß die reinen Vernunft-Erkenntniße, deren elemente hier aufgestellt werden, immanent sind, d. i. objective realität haben, mithin diejenige Classe von Vernunft Erkenntnißen, die keinen Gegenstand möglicher Erfahrung haben, hier ausgeschloßen wird.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-050",
     "kind": "text",
     "aa": 988,
     "ms": [
      {
       "p": 88,
       "i": 246
      }
     ],
     "text": "4) Aus den praedicamenten, d. i. diesen von den Scholastikern so genannten Categorien entspringen die praedicabilia, d. i. diejenigen reinen Verstandes-Begriffe, so entweder aus 2 oder mehr Categorien zusammengesetzt sind, oder die aus der Verbindung eines praedicaments mit einer Form der Sinnlichkeit von Raum und Zeit entstehen.",
     "dehyphenated": 2,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s04-051",
     "kind": "text",
     "aa": 988,
     "text": "Z. E. der Begriff der Dauer beruht in Rücksicht der Qualität auf realität oder existenz, auch hat die Dauer Größe eines Dasejms, in Ansehung der existenz in der Zeit. Denn insofern ist die Dauer des Sandkorns mit der Dauer des Sandberges gleich, und diese Größe von der materiellen Quantität verschieden. Mithin concurrirt ein praedicamentum mit der Form der Sinnlichkeit. Der Begriff der Bewegung setzt Daseyn oder Qualität voraus, und wird mit Veränderung des Daseyns mit entgegengesetzter Bestimmung von Zeit und Raum gedacht, also existenz in successiver Form nach einander in Zeit und Raum.",
     "dehyphenated": 2,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s04-052",
     "kind": "text",
     "aa": 988,
     "ms": [
      {
       "p": 89,
       "i": 224
      }
     ],
     "text": "5) In jeder function sind die Categorien so geordnet, daß die 3te aus den zwey vorhergehenden zusammen gesetzt ist, z.E. die Gemeinschaft der Begriffe setzt 2 Substanzen, mit Ursach und Wirkung, voraus, und verbindet sie zu einem dritten, nemlich der Wechsel — Ursache und Wirkung. So giebt realität, mit negation verbunden, die limitation.",
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-053",
     "kind": "text",
     "aa": 988,
     "text": "So ist Allheit = einer Vielheit, so zugleich Einheit ist.",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-k3-s04-054",
     "kind": "text",
     "aa": 988,
     "text": "So ist Nothwendigkeit eine Möglichkeit, aus welcher die Wirklichkeit gefolgert werden kann.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-055",
     "kind": "text",
     "aa": 988,
     "aaEnd": 989,
     "pages": [
      {
       "p": 989,
       "i": 128
      }
     ],
     "text": "6) Nach Maaßgabe der prämittirten Classification der Categorien soll nun auch die Ontologie oder transcendental Philosophie abgehandelt werden, indem dadurch, daß die Categorien gegen einander aufgestellt werden, die Entwicklung dieser elemente unserer Verstandes Begriffe a priori erleichtert, durch deren Vereinigung das Willkührliche, wie dies mit des Baumgartens Methode verbunden ist, vermieden, und diese principien a priori im Ganzen heßer befaßt werden. Diesen zufolge werden auch die 6 Categorien der mathematischen Classe abgehandelt, und unter diesen folgt zuerst:",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-056",
     "kind": "text",
     "aa": 989,
     "ms": [
      {
       "p": 90,
       "i": 0
      }
     ],
     "text": "Die Categorie der Größe oder die Classe der Quantität.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-057",
     "kind": "text",
     "aa": 989,
     "text": "21. Quantität — Größe ist ein reiner Verstandes Begriff, dessen Entwickelung darauf beruht:",
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s04-058",
     "kind": "text",
     "aa": 989,
     "text": "1) In jeder Größe ist der Begriff von vielem enthalten, was verbunden betrachtet, sich als ein Eins darstellt. Ein Vieles gleichartige verbunden, macht Quantität an sich aus. Es liegt also im Begriff von Größe die Vorstellung von Eins und Vielem.",
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s04-059",
     "kind": "text",
     "aa": 989,
     "text": "2) Eines und Viel sind nur als correlata denkbar und können nur in opposito gedacht werden, aber definiren läßt sich keins von beyden, sondern sie laßen sich nur durch einander denken. Daher läuft die definitio autoris S4 § 74 in Circulo herum: er denkt sich ein Eins in der Voraussetzung von Vielem.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-060",
     "kind": "text",
     "aa": 989,
     "text": "3) Die Einheit kann sowohl formaliter als materialiter gedacht werden.",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s04-061",
     "kind": "text",
     "aa": 989,
     "ms": [
      {
       "p": 91,
       "i": 35
      }
     ],
     "text": "Die formale Einheit beruht auf der Verbindung des Mannigfaltigen unter einem Princip. Die materielle Einheit ist Einheit des Objects selbst. Formal ist also nur eine Einheit eines Dinges möglich (in singulari), denn jedes Ding hat nur einen Begriff, unter welchem das Mannigfaltige durch den Verstand gebracht ist. Materiell aber giebt s Einheiten eines und desselben Objects, d. i. so viel in jedem Dinge eines genannt werden kann. Vielheit daher im Object ist jederzeit materiell. Das Mannigfaltige in der Vorstellung des Objects aber an sich, ist formelle Vielheit.",
     "dehyphenated": 2,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s04-062",
     "kind": "text",
     "aa": 989,
     "text": "Daher ein Schauspiel hat Vielheit der Objecte, aber Einheit in der Vorstellung nach den Gesetzen der Zeit, des Orts usw. denn ohne diese würde es zu keinem Zweck verbinden.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-063",
     "kind": "text",
     "aa": 989,
     "aaEnd": 990,
     "pages": [
      {
       "p": 990,
       "i": 259
      }
     ],
     "ms": [
      {
       "p": 92,
       "i": 231,
       "raw": "9-",
       "inferred": true
      }
     ],
     "text": "4) Die Aristotelische Schule betrachtet die formelle Einheit als transcendental, und nimmt, wie auch der Autor in Sect. 4, 6 u. 7 thut, in metaphysischem Sinn das princip an: quodlibet ens est transcendentaliter unum, verum bonum, und praedicirten vom Object a, unum, d. i. daß Ein Ding nicht viel Dinge seyen — Einheit b, verum, d. i. Einem jeden Dinge komme wirklich zu, was ihm eigen ist, oder — gewisse praedicate, die zu dem Begriffe des Dinges gehörten, kommen wircklich dem Dinge zu, mithin könnten die praedicate des Dinges, der Wircklichkeit, nicht der Möglichkeit nach, ihm beygelegt werden, z.E. Jedes A hat Winckel. Dies heißt der Satz: jedes Ding hat in sich Wahrheit oder in jedem Ding ist Wahrheit, jedes Ding hat in sich nichts, was nicht mit ihm selbst iibereinstimmt.",
     "joined": [
      "inferred",
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-064",
     "kind": "text",
     "aa": 990,
     "text": "c) bonum, d. i. jedes Ding hat alles in sich, um dasjenige zu seyn, was es ist, oder — jedes Ding ist transcendentaliter vollkommen.",
     "ocrConf": 75
    },
    {
     "id": "metaphysik-k3-s04-065",
     "kind": "text",
     "aa": 990,
     "ms": [
      {
       "p": 93,
       "i": 293
      }
     ],
     "text": "Es ergiebt sich klar, daß hier jedes Ding nur in Beziehung auf sein eignes Wesen betrachtet wurde, und insofern sind diese Criteria des Dinges richtig, da ein jedes Ding doch das ist, was es ist: aber im metaphysischen Sinn, d. i. im Verhältnis des Dinges außer sich, mithin gegen alle andere mögliche Dinge betrachtet, läßt sich keinem Dinge, exclusive dem ens realißimo, eine Vollkommenheit beylegen, vielmehr hat jedes einen Mangel an realität, mithin negative Vollkommenheit, oder ist unvollkommen.",
     "dehyphenated": 1,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s04-066",
     "kind": "text",
     "aa": 990,
     "text": "In sensu metaphysico sind diese Criteria daher unnutzbar, aber als logische Vorschriften bey Betrachtung eines Objects ist es wichtig, daß man aus deßen Bestimmung sehen muß, ob es Einheit, Wahrheit oder Vollkommenheit habe, z. E. formelle Einheit eines Buchs.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-067",
     "kind": "text",
     "aa": 990,
     "ms": [
      {
       "p": 94,
       "i": 370
      }
     ],
     "text": "5) Dagegen ist transcendentale Einheit in jedem Dinge, insofern vieles verbunden gedacht werden muß, um nach einem princip einen Begriff eines Dinges zu machen. Daraus entsteht die formelle Einheit, aber formaliter kann es nicht Einheiten eines und deßelben Dinges geben. Die formelle Einheit gehört wesentlich zum Verstände, als der das \\ ermögen ist, das mannigfaltige der Vorstellung unter einen Begriff zu bringen.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-068",
     "kind": "text",
     "aa": 990,
     "text": "Der Autor nennt § 74 unitatem categoricam die Einheit des Objects, und darin hat er Recht. Einheit ist objective betrachtet ein Ding, so nicht viel ist, so in Ansehung deßen, was es enthält, der Verschiedenheit und dem Vielen opponirt ist, mithin eine materielle Einheit. Aber formaliter ist sie hypothetisch. Ein Vieles, der Form nach gedacht, kann Einheit seyn, wenngleich die Objecte, materialiter eine Vielheit haben.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s04-069",
     "kind": "text",
     "aa": 990,
     "aaEnd": 991,
     "pages": [
      {
       "p": 991,
       "i": 128
      }
     ],
     "text": "0) Zur Größe gehört Verbindung der Vielheit, und dies ist zum B<‘g> iff des Quanti deßhalb nicht hinlänglich, weil hiernach ein aggregat heterogener Theile gestattet wird: dagegen ist der Begriff des Compositi dadurch bestimmt.",
     "joined": [
      "layout"
     ],
     "ocrConf": 73
    },
    {
     "id": "metaphysik-k3-s04-070",
     "kind": "text",
     "aa": 991,
     "text": "Compositum est unum ex conjunctione plurium, z.E. eine Kleidung, so verschiedenartige Theile sie auch hat.",
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s04-071",
     "kind": "text",
     "aa": 991,
     "ms": [
      {
       "p": 95,
       "i": 136
      }
     ],
     "text": "Soll die Verbindung den Begriff der Größe involviren, so liegt dabei der Begriff der homogeneität zum Grunde, und der Begriff der Größe selbst wird durch das Wort Quantum: bestimmt: est unum ex pluribus homogeneis conjunctum. Er enthält mithin wesentlich",
     "dehyphenated": 1,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s04-072",
     "kind": "text",
     "aa": 991,
     "text": "1.) multitudinem : also, was als Einheit betrachtet wird, kann nicht quantum heißen.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-073",
     "kind": "text",
     "aa": 991,
     "text": "2.) homogeneitatem, d. i. Dinge von einer und derselben Gattung (genus) inde differt compositum vom quanto und das viele würde alsdenn varietaet seyn können, omne quantum continet multitudinem, sed non omnis multitudo est quantum, sondern nur, wenn die Theile gleichartig sind.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s04-074",
     "kind": "text",
     "aa": 991,
     "text": "Diejenige Bestimmung nun eines Dinges, durch welche man eine Sache als ein Quantum erkennt, ist Quantitaet oder Größe.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s04-075",
     "kind": "text",
     "aa": 991,
     "text": "NB Quantitaet ist also nichts weiter als Bestimmung, wie groß etwas sey : es kann also etwas als quantum gedacht werden, ohne sich als quantitaet bestimmen zu laßen, oder dadurch bestimmt zu seyn.",
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s04-076",
     "kind": "text",
     "aa": 991,
     "text": "Formaliter ist quantum ein Mannigfaltiges in der Vorstellung, so gleichartig ist, und die Bestimmung des mannigfaltigen als quantum ist Quantitaet.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s04-077",
     "kind": "text",
     "aa": 991,
     "text": "Hieraus folgt",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s04-078",
     "kind": "text",
     "aa": 991,
     "ms": [
      {
       "p": 96,
       "i": 146,
       "raw": "90",
       "inferred": true
      }
     ],
     "text": "1) es giebt nun mehrere quanta, aber nicht mehrere quantitäten, da die quantitas als Bestimmung nur Eins seyn kann. Quantitas sowie Qualitas sind überhaupt von quantum qualis gemacht und auf eine barbarische Art: man könnte eben so sagen quaeditas, um durch alle 3 die bekannte Frage auszudrücken : quae, qualis, quanta? quidditas, wenn man so sagen soll, würde sich von der Qualitaet unterscheiden, wie die Bestimmung des generis und des specifischen Unterschiedes; z.E. quidditas das generis weßen: aber ob es hart oder weich, gehört zur Qualitaet, mithin in Rücksicht der unter dem genere begriffenen species.",
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s04-079",
     "kind": "text",
     "aa": 992,
     "text": "Die Quaeditas würde das Verhältnis ausdriicken; wenigstens bedeutet es solches in dem Fragewort quae? wo es die verschiedene relation des Begriffs: categorisch, hypothetisch oder disjunctiv anzeigen soll.",
     "dehyphenated": 1,
     "ocrConf": 73
    },
    {
     "id": "metaphysik-k3-s04-080",
     "kind": "text",
     "aa": 992,
     "text": "2) Qualitas differirt von der Quantitaet darin, daß und insofern die letztere bey gleichem Object etwas ungleichartiges andeutet, so sich in Rücksicht anderer Bestimmungen darin findet. Daher ist qualitas diejenige Bestimmung eines Dinges, nach welcher sich dasjenige, was specifisch verschieden ist, unter gleicher Gattung findt, und davon unterschieden werden kann. — Dies ist heterogen in opposito von dem, was nicht specifisch verschieden ist, oder dem homogenen.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-081",
     "kind": "text",
     "aa": 992,
     "ms": [
      {
       "p": 97,
       "i": 69
      }
     ],
     "text": "3) Man kann durch Vergleichung des Dinges mit sich selbst und seinen Theilen wohl erkennen, daß es ein quantum sey, aber nie kann man, ohne Vergleichung eines Dinges mit andern Dingen, bestimmen, was denn für eine Größe es eigentlich habe oder _ wie groß es sey. Z.E. die Erde hat 5400 Meilen — die Meile ist JL eines Grades — Grad ~ des größten Meridians. Dies alles läßt sich auch auf eine Erbse anwenden, und vergebens ist es, die Größe der Erde ohne Vergleichung des Maaßes zu finden. Daher kann die Definition des Wolf und des Autoris § 69 S. 3 quantitas est interna entis determinatio, quae dari quidem sine alio aßumto autem intelligi nequit, nie als Definition gelten, so richtig der Satz ist, und sich erweisen läßt, er ist aber kein mit Größe gleich geltender Begriff, läßt sich auch in der Art nicht herausbringen. Es ist indeß",
     "dehyphenated": 2,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s04-082",
     "kind": "text",
     "aa": 992,
     "ms": [
      {
       "p": 98,
       "i": 256
      }
     ],
     "text": "4) auffallend: der Begriff der Größe oder die Bestimmung eines Dinges, daß es Größe habe, ist gegeben, aber die Größe als Größe, d. 1. wie groß das Object sey, ist aus der Sache selbst zu erkennen unmöglich. Ja, noch mehr. Der Begriff von Größe ist dem Verstände gerade zu eigen, da er sich mit Verbindung des mannigfaltigen gleichartigen beschäftigt. Die Größe wird in der Mathematic durch Hilfe einer reinen Anschauung in der Sinnlichkeit, d. i. durch die lorm von Raum und Zeit bey Bestimmung jeder Figur oder Zahl angewandt. Aber in der Philosophie läßt sich aus dem B.-griff allein nicht bestimmen, ob die Categorie von Größe objective realitaet habe. D. 1. es laßt sich nicht erkennen, daß Vieles zusammen Eins ausmache.",
     "dehyphenated": 3,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s04-083",
     "kind": "text",
     "aa": 992,
     "aaEnd": 993,
     "pages": [
      {
       "p": 993,
       "i": 129
      }
     ],
     "text": "Es ist schlechthin nöthig, die Anschauung a priori wie in der Mathematic zu Hülfe zu nehmen. Alle Categorien sind mit derjenigen von der Größe von der Art, daß sich durch ihren Begriff selbst nicht erweisen läßt, in wiefern es möglich sey, daß der Begriff auch objective realitaet habe. Biesen Beweis muß man aus der sinnlichen Anschauung von Raum und Zeit suchen. Dadurch allein erhält auch die extensive Größe die realitaet.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s04-084",
     "kind": "text",
     "aa": 993,
     "text": "Extensio differt von Größe der Zeit, oder es ist Mannigfaltiges außerhalb einander, z. E. wie gegenwärtige zukünftiger Zeit opponirt.",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s04-085",
     "kind": "text",
     "aa": 993,
     "ms": [
      {
       "p": 99,
       "i": 111,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "5) Nimt man besonders auf die Größe bey Zahlen Rücksicht, so kann man Quantum bestimmen durch aliquoties facta positio ejusdem.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-086",
     "kind": "text",
     "aa": 993,
     "text": "Succeßive unum uni addendo multitudinem cognoscimus, d. i. durchs Zählen erkennen wir eine Menge, bey jeder Zahl ist also eine Menge vorhanden: wenn diese ins unendliche fortgeht, so entsteht multitudo omni numero major: dies kann man wohl eine unendliehe Menge, aber nicht eine Unendliche Zahl nennen. Denn eben ihrer Unendlichkeit wegen läßt sie sich nicht in Zahlen ausdrücken und der Ausdruck involvirt also eine Contradictio in adjecto. Eine solche unendliche Menge ist aber auch multitudo omni cognitione major, denn wir können nur einen Begriff von einer bestimmten Größe haben.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s04-087",
     "kind": "text",
     "aa": 993,
     "text": "Numerus ist ja multitudo numerando (unum uni addendo) cognita, in’s unendliche fortzählen ist unmöglich, alsdann hört etwas auf innerhalb der Grenzen einer Zahl zu liegen, sobald es nicht weiter gezählt werden kann. &",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s04-088",
     "kind": "text",
     "aa": 993,
     "text": "6) Um nun eine Größe zu erkennen, ist es nöthig, daß damit zugleich der Begriff vom Maaße verbunden sey: denn daß etwas ein Quantum sey, drückt bloß etwas aus, so die qualitaet des Dinges bestimmt; dagegen ist es ohne Maaß unmöglich, sich vorzustellen, was für ein Quantum durch die Composition hervorgebracht sey.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-089",
     "kind": "text",
     "aa": 993,
     "text": "Die Categorie der Größe läßt sich, ohne ihr ein Object darzustellen, wodurch ihr Bedeutung gegeben wird, nicht dahin mit Gewißheit erkennen, daß sie auch objective realitaet habe.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s04-090",
     "kind": "text",
     "aa": 994,
     "ms": [
      {
       "p": 100,
       "i": 115
      }
     ],
     "text": "Daher: mensura ist das unum, quod numerando quantitatem reddit cognoscibilem. Ebenso wenig würde man einsehen, daß es dreyfache specifisch verschiedene Arten gäbe, eine Größe zu meßen, wenn man nicht am Raum seiner Länge, Höhe, und Dicke nach ein Beyspiel hätte.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-091",
     "kind": "text",
     "aa": 994,
     "text": "So hat die Zeit dagegen nur Eine Abmeßung (dimensio) und diese stellt man sich in der Länge vor und bildet sie figürlich durch das Zeichen einer Linie. Die Linie selbst stellt alle Punkte gleichzeitig dar, das Zeichen der Linie drückt aber die successive Folge oder die Veränderungen in der Zeit aus.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s04-092",
     "kind": "text",
     "aa": 994,
     "text": "7) Eine Größe ist nun entweder",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-093",
     "kind": "text",
     "aa": 994,
     "text": "a) ein quantum aßignabile, so man auch quantum dabile nennt. Dies ist diejenige Größe, welche ganz (in ihrer totalitaet) anschaulich dargestellt werden kann; jedes Maaß muß so beschaffen seyn, daher eine solche Größe auch durch das Maaß ihrem Verhältnis nach muß bestimmt werden können, oder",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s04-094",
     "kind": "text",
     "aa": 994,
     "text": "b) ein quantum omni assignatione majus, oder",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-095",
     "kind": "text",
     "aa": 994,
     "ms": [
      {
       "p": 101,
       "i": 208
      }
     ],
     "text": "c) minus, d. i. eine unendlich große oder unendlich kleine Größe: daher sie auch quantum infinitum oder infinito-parvum bedeuten, und also, da beyde respective größer, respective kleiner als jede anzugebende Größe sind, so sind beyde nicht quanta assignabilia, und können nicht gegeben werden.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-096",
     "kind": "text",
     "aa": 994,
     "text": "8.) Der Grund, warum eine Größe nicht endlich ist, heißt eine Negation, diejenige Negation, um derentwillen ein Quantum nicht das maximum ist, kann entweder Einschränkung oder Begränzung heißen. Beschränkt nennt man nur einen Gegenstand der Vernunft, begränzt aber einen Gegenstand der Anschauung: eben so auch unbeschränkt und unbegränzt, je nachdem es ein Object bloßer Vernunft oder der Sinne ist.",
     "dehyphenated": 4,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-097",
     "kind": "text",
     "aa": 994,
     "ms": [
      {
       "p": 102,
       "i": 435
      }
     ],
     "text": "Schranken differiren also von Gränzen. Ein Verstandes Wesen (noumenon) hat nur Schranken (limites), d. i. die Negation wird blos nach dem Verstände gedacht; mithin ist hier Einschränkung: also ein Quantum noumenon ist Größe durch den Verstand gedacht, und insofern beschränkt, als sie nicht das maximum ist, und Schranken, limes , heißt die Negation, um derentwillen sie eingeschränkt ist. Z. E. Gränzen oder Schranken des menschlichenVerstandes, Willens. —",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-098",
     "kind": "text",
     "aa": 994,
     "aaEnd": 995,
     "pages": [
      {
       "p": 995,
       "i": 121
      }
     ],
     "text": "Begränzt dagegen ist ein Quantum phaenomenon, wenn die Bestimmung seiner Größe, oder die Negation, zugleich zum intuitus deßelben mitgehört, oder = wenn der Grund der Beschränkung zugleich etwas positives im Raum enthält.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-099",
     "kind": "text",
     "aa": 995,
     "text": "Das positive, wodurch die Schranken der Anschauung determinirt werden, heißt die Gränze — Der Punkt im Raum hat für sich keine Negation, ist auch nicht begränzt, er ist blos positiv, und zeigt den Ort an, wohin etwas sich einschränkt.",
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s04-100",
     "kind": "text",
     "aa": 995,
     "text": "Die Linie erhält ihre Gränze durch den Punkt, die Fläche durch die Linie und der Körper durch die Fläche. Dies sind auch die drei Dimensionen des Raumes, wenn man ihn vollständig als einen Theil eines großem Raumes für sich gedenkt, und dann hat körperlicher Inhalt, Fläche und Länge jedes wieder seinen Raum. Begränzung und Gränze sind also immer etwas positives in der Erscheinung, nicht aber Einschränckung.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s04-101",
     "kind": "text",
     "aa": 995,
     "ms": [
      {
       "p": 103,
       "i": 62
      }
     ],
     "text": "9) Quantum est vel continuum vel discretum. Quantum continuum ist eine stetige Größe, davon alle ihre Theile wiederum Quanta sind, wie klein oder wie groß sie seyn mögen.",
     "dehyphenated": 1,
     "ocrConf": 87
    },
    {
     "id": "metaphysik-k3-s04-102",
     "kind": "text",
     "aa": 995,
     "text": "Sie kann also nicht einfache Theile enthalten. Dagegen ist die Composition so beschaffen: quod sunt partes per se indeterminatae, d. i. an sich selbst, und aus der Größe selbst läßt sich nicht bestimmen, wie viel Theile man annehmen soll, sondern nach unserer Erkenntniß bleibt es willkührlich.",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s04-103",
     "kind": "text",
     "aa": 995,
     "text": "Zu den Quantis continuis gehören nun Raum und Zeit. Denn jeder Theil von Raum und Zeit läßt sich nicht anders, als wie wieder ein Raum oder Zeit gedencken, und die Eintheilung geht bis zum Punkte und Augenblick fort : nur beyde letztere sind nicht Theile des Raumes und der Zeit.",
     "ocrConf": 87
    },
    {
     "id": "metaphysik-k3-s04-104",
     "kind": "text",
     "aa": 995,
     "text": "Ein Punckt ist nur das positive, die Gränze eines Raumes und der Augenblick ist eben daßelbe in Ansehung der Zeit.",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s04-105",
     "kind": "text",
     "aa": 995,
     "ms": [
      {
       "p": 104,
       "i": 176
      }
     ],
     "text": "Hieraus folgt, daß Raum und Zeit nicht aus einfachen Theilen bestehen. Ein Umstand, der wenn das Gegentheil richtig wäre, beweisen würde, daß Raum und Zeit etwas objectives im neben einander und nach einander seyn würde, der aber, da man auf keinen Einfachen Theil treffen kann, beweißt, daß Raum und Zeit nur in dem bloß subjectiven der Form der Anschauung liegen.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s04-106",
     "kind": "text",
     "aa": 995,
     "aaEnd": 996,
     "pages": [
      {
       "p": 996,
       "i": 326
      }
     ],
     "text": "Der Punckt im Raum ist untheilbar und er ist auch nicht, wie gesagt, ein Theil des Raumes : daher ein Raum aus lauter Punkten ein Raum seyn würde, der aus lauter Gränzen bestehen, mithin ein Nichts seyn würde. Der Punckt ist blos eine Stelle im Raum, aber bis dahin ist der Raum, sowie die Zeit, bis zum Augenblick, theilbar, mithin ist es unmöglich, im Raum und Zeit einfache Theile anzunehmen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-107",
     "kind": "text",
     "aa": 996,
     "ms": [
      {
       "p": 105,
       "i": 420
      }
     ],
     "text": "Ein Punkt kann vor der Vorstellung des Raums nicht gedacht werden, woraus folgt, daß der Raum aus Punckten nicht bestehen kann. Der Raum füllt die Materie aus als extensum, extensum. aber ist id, in quo est spatium. Die Begriffe sind also mit der Materie correlata, der Raum selbst macht es, daß die Materie ausgedehnt ist: also kann die Materie aus keinen andern Theilen bestehen als der Raum selbst hat, mithin ist es unmöglich, daß die Materie aus einfachen Theilen bestehen könne.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s04-108",
     "kind": "text",
     "aa": 996,
     "text": "Ein Quantum discretum dagegen ist ein Quantum, so aus Einheiten besteht, d. i. aus einer bestimmten Menge von Theilen, die ich als Einheiten denke. Dies ist der Begriff der Zahl, mithin die Größe durch Zahlen ausgedrückt, ist Quantum discretum. Z.E. Ein Quantum von Gulden: hier läßt sich nicht weiter theilen, ohne daß die Einheit = Gulden, ganz aufhört, mithin enthalten die Theile nicht wieder Quanta. So wie dies von einem Quanto von Silber überhaupt in Schotten, Unzen usw. gedacht seyn würde; letzteres läßt sich in Quanta theilen und ist also Quantum continuum.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s04-109",
     "kind": "text",
     "aa": 996,
     "text": "Das Quantum discretum kann als per se discretum angesehen werden, weil es aus einfachen Theilen besteht, d. i. weil seine Einheiten nicht wieder als Quanta betrachtet werden können, sie müßen aber durch eine Zahl ausgedrückt werden, um die Quantitaet darzustellen, d. i. um zu wißen, wie groß das Quantum sey.",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s04-110",
     "kind": "text",
     "aa": 996,
     "text": "10. ) Quantum 1",
     "ocrConf": 62
    },
    {
     "id": "metaphysik-k3-s04-111",
     "kind": "text",
     "aa": 996,
     "ms": [
      {
       "p": 106,
       "i": 48
      },
      {
       "p": null,
       "i": 429,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "Quantitas j lst Vel rationale> vel irrationale. Rationale ist Quantum computabile, d.i. diejenige Größe, so zu berechnen ist, oder sich in Zahlen ausdrücken läßt ; irrationale dagegen ist das Quantum finitum, aber incommensurabile, d. i. die nicht zu berechnen ist, oder deren Verhältniß zum Maaß nicht durch Zahlen ausgedruckt werden kann. Sie nähert sich nur der Bestimmung, die das Maaß giebt, z.E. das Verhältnis der Wurzel j1 zu |/2, so zwischen der Diagonal Lime gegen die beyden Seiten obwaltet, ist unmeßbar.",
     "dehyphenated": 1,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s04-112",
     "kind": "text",
     "aa": 996,
     "text": "Es sind diese letzteren Größen in Raum und Zeit, der Anschauung nur zwischen den Gränzen von Raum und Zeit gegeben. &",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s04-113",
     "kind": "text",
     "aa": 996,
     "aaEnd": 997,
     "pages": [
      {
       "p": 997,
       "i": 245
      }
     ],
     "ms": [
      {
       "p": 107,
       "i": 395
      }
     ],
     "text": "11. ) Ein Quantum maximum, so wie ein Quantum minimum, läßt sich von einem ente phaenomeno nicht denken, und nur einem ente noumeno — Gott — eine Vorstellung davon beylegen. Denn Quantum maximum wäre die Allheit, die ohne Einschränkung gedachte Größe. Dergleichen ist für den menschlichen Verstand eben so wenig denkbar, als diejenige Größe, deren noch kleineres Maaß gleichsam ein Nichts wäre. Z. E. Allheit des Raumes und der Zeit, welche kein Theil eines noch großem Raumes und der Zeit wären, ist keiner subjectiven Anschauung fähig. Das phaenomenon kann man sich nur als eine Vielheit dencken, und unter diesem Begriff eine Allheit.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s04-114",
     "kind": "text",
     "aa": 997,
     "text": "Für phaenomena giebt es also kein quantum absolute maximum, sondern nur immer relative maximum, z.E. chorda maxima in circulo, und ebenso wenig ein quantum absolute minimuni. Denn alle Theile, auch das kleinste Vorstellbare, haben wieder Quanta, mithin ist auch hier die Vorstellung nur auf eine relation gerichtet.",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-115",
     "kind": "text",
     "aa": 997,
     "text": "Auf dem Begriff vom Verhältniß der Dinge, wonach wir die Größe derselben nur erkennen können, beruht der von dem Quanto verschiedene Begriff von Magnitudo, parvitas. Diese involviren die Bestimmung des quanti oder der Quantitaet, wonach man etwas groß (magnum) oder klein (parvum) nennt.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s04-116",
     "kind": "text",
     "aa": 997,
     "ms": [
      {
       "p": 108,
       "i": 185
      }
     ],
     "text": "Nimt man die Vorstellung an, einige Dinge im Universo würden immer kleiner, und alle übrigen blieben dagegen unverändert, so stellt man sich ein Verhältniß vor, in welchem die kleinern gegen die großem bleiben, z.E. unsere Erde, die man einen globum terraquaeum nennt, würde von Waßer so überschwemmt, daß nur eine Größe der Erbse bliebe, so wäre die Veränderung durch die Vergleichung auch in Ansehung der Größe vorstellbar. Setzt man aber voraus, daß sich das ganze Universum verändert habe, so ist keine Vergleichung weiter möglich, und also auch keine Veränderung der Größe denkbar; es wäre die kleinste Erdkugel der größten in Rücksicht unserer subjectiven Vorstellung gleich groß, weil wir sie nicht mit einem dritten Gegenstände vergleichen könnten.",
     "dehyphenated": 2,
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s04-117",
     "kind": "text",
     "aa": 997,
     "text": "Der Begriff von Größe bliebe also an sich derselbe, mithin ist dieser absolut, aber die magnitudo oder parvitas kann nie absolute erkannt werden, sondern nur durch relation.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s04-118",
     "kind": "text",
     "aa": 997,
     "aaEnd": 998,
     "pages": [
      {
       "p": 998,
       "i": 450
      }
     ],
     "ms": [
      {
       "p": 109,
       "i": 353
      }
     ],
     "text": "Daraus nun, daß wir außer Stande sind, die Größe der Dinge an und vor sich selbst zu bestimmen, folgt nun, daß wir sie uns auch an und vor sich selbst nicht vorstellen können, sondern nur, wie sie uns erscheinen. Raum und die Dinge, die den Raum einnehmen, bestimmen sich also blos nach den Gesetzen der Sinnlichkeit, auf welche sie in Beziehung gesetzt werden. Raum und Zeit sind daher auch nicht durch den Verstand und daher bestimmte Verstandes Begriffen denkbar, sondern sind blos die subjective Form, unter welcher die Dinge uns erscheinen. Sie gehören nicht für die Anschauung durch die Sinnlichkeit und nicht für den Verstand als Verstandes Begriff.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 79
    }
   ]
  },
  {
   "id": "s05",
   "title": "Categorie der Qualitaet",
   "titleSrc": "heading",
   "headings": [
    "Categorie der Qualitaet"
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s05-001",
     "kind": "heading",
     "aa": 998,
     "text": "Categorie der Qualitaet"
    },
    {
     "id": "metaphysik-k3-s05-002",
     "kind": "text",
     "aa": 998,
     "text": "22.) Die Qualitaet, auch auf Objecte angewandt, bezieht sich sowie die correspondirende logische Function der Qualitaet, auf Urtheile, die die Bedingung der zu bestimmenden Qualitaet eines Dinges enthalten. Raum und Zeit enthalten keine Qualitaet eines Dinges in sich, d. i. sie haben keine transcendentale Materie oder ein Object überhaupt in sich; sie sind nur formale Bedingung unsrer Anschauung. Ein Etwas dagegen, so in dem Begriff von Seyn, Daseyn, existenz, liegt, gehört zur Qualitaet des Dinges, die mithin etwas Materielles voraussetzt. Die Qualitaet hat nun als Function einen 3fachen Gegenstand . d. i. die Vorstellung eines Dinges .... . Seyn involvirt",
     "dehyphenated": 4,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s05-003",
     "kind": "text",
     "aa": 998,
     "ms": [
      {
       "p": 110,
       "i": 0
      }
     ],
     "text": "2.) Negation, d. i. die Vorstellung eines Dinges als etwas, so ein Nichtseyn enthält.",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s05-004",
     "kind": "text",
     "aa": 998,
     "text": "3) Limitation, d. i. die Vorstellung eines Dinges, deßen Seyn durch das Nichtseyn deßelben afficirt wird, mithin deßen Begriff ein Seyn und Nichtseyn verbunden enthält. Z.E. Licht ist realitaet; Finsterniß ist negation; Schatten ist Limitation, denn es ist eine Finsterniß die vom Licht begränzt wird. So auch Kenntniße — Unwißenheit — eingeschränktes Wißen.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s05-005",
     "kind": "text",
     "aa": 998,
     "text": "Es ist ein positives Etwas, in opposito mit Negatio. Etwas oder Verbunden.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s05-006",
     "kind": "text",
     "aa": 998,
     "text": "1) Realitaet eines Dinges ist dem Wortverstande nach die Sachheit des Dinges, mithin etwas positives an sich.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s05-007",
     "kind": "text",
     "aa": 998,
     "aaEnd": 999,
     "pages": [
      {
       "p": 999,
       "i": 627
      }
     ],
     "ms": [
      {
       "p": 111,
       "i": 332
      }
     ],
     "text": "2) Um dem Begriff von Realitaet Bedeutung zu geben, muß ihm ein Gegenstand der Sinnlichkeit untergelegt werden, damit er dadurch belegt werden kann, und sowie die Categorie der Größe dem Begriff von Raum und Zeit als ein etwas in der Anschauung correspondirte, um sie zur Quantitaet zu bestimmen, so ist auch in der Vorstellung Quantitaet nothwendig, nur aber als dasjenige was die Empfindung umfaßt, oder das reale ist etwas empfindbares in der Anschauung, mithin ein Gegenstand der Empfindung erforderlich, um sich die Größe des realen vorzustellen: nicht so bey der Quantitaet, wo reine Anschauung, d. i. ohne Gegenstand im Raum oder in der Zeit vorhanden war. So hat z.E. Ein Gedanke Quantitaet als Anschauung in der Zeit, ein heller Kopf aber realitaet, wegen der subjectiven Empfindungen seiner Vorstellungen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s05-008",
     "kind": "text",
     "aa": 999,
     "ms": [
      {
       "p": 112,
       "i": 600
      }
     ],
     "text": "3) Das Reale hat einen Grad der Empfindung — oder in dem empfindbaren der sinnlichen Vorstellung. Die Empfindung wird dem formellen in der Anschauung opponirt, und das empfindbare bedeutet alsdenn das materiale in sensu transcendentali, mithin ist hier dem realen als empfindbaren die formelle Anschauung in Raum und Zeit opponirt. Es kommt also hier zur bloßen Anschauung die Empfindüng hinzu : eine Anschauung mit Empfindung aber ist Wahrnehnehmung. Diese erfordert aber einen Gegenstand der Wahrnehmung. Wahrnehmung eines Gegenstandes ist das Bewußtseyn des Gegenstandes durch Empfindung — in der Art differirt also diese Anschauung des realen ganz von der reinen.",
     "dehyphenated": 4,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s05-009",
     "kind": "text",
     "aa": 999,
     "text": "Man nennt diesen Grad der Empfindung intensive Größe, um sie von der extensiven Größe bey der Quantitaet zu unterscheiden, und sagt : alles Empfindbare hat intensive Größe, oder = einen Grad der Empfindung: das heißt: es läßt sich vorstellen, daß vom Zero = Null = welches gar keine Empfindung hat, die Empfindung steigen, oder von einem gewißen Maaße wieder bis zum = 0 = abnehmen kann. Es wird aber eine Größe verstanden, wobey nicht die Theile vorher erkannt werden, um die Größe zu bestimmen, sondern sie muß als Einheit erkannt, und die Theile aus der Einheit herausgezogen werden. So differirt z.E. eine Linie, die zusammengesetzt werden muß, von einem erlöschenden Licht: bey letzterm ist nur eine Einheit der Empfindung, aber in jedem folgendem Zustande ein anderer Grad derselben.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s05-010",
     "kind": "text",
     "aa": 999,
     "aaEnd": 1000,
     "pages": [
      {
       "p": 1000,
       "i": 801
      }
     ],
     "ms": [
      {
       "p": 113,
       "i": 147
      },
      {
       "p": 114,
       "i": 1261
      }
     ],
     "text": "Der Autor nennt den Grad der Empfindung = die Größe der Qualitaet: es drückt diese Bestimmung zwar aus, daß ein etwas im Dinge als gesetzt gedacht wird, aber beßer bestimmt man den Grad durch: GrößederEinheit,d.i. die Vorstellung von einem Object, insofern ich mir seine Größe (quantitatem) als Einheit denke, giebt der Größe den Grad. Hier ist also die Größe nicht als Vielheit, sondern als Einheit gegeben und unterscheidt sich dann genau von der extensiven Größe (quantitas extensiva, und daher in den Folgen verschieden von der quantitas intensiva). Daher z. E. ist ein Tropfen kochend Waßer zwar weniger als ein Kessel voll, aber beyde sind gleich heiß. Die Einheit, die hier bey der Empfindung des Objects wahrgenommen wird, zeigt also, daß sie auf der Gleichheit des Grundes beruht, und die Einheit des Grundes macht das mannigfaltige gleichartige bey Betrachtung der realitaet ganz entbehrlich. So ist der Winkel gleich groß, so weit die Linien oder Schenkel sich extendiren mögen: es macht die Gleichheit der Inclination, und nur deren Verschiedenheit auch nur eine Verschiedenheit intensiver Größe, da diese sich bloß auf die existenz der Bewegung in großen und kleinen Winkeln reducirt. Ein belebender Gedanke, der aber nach und nach seinen Eindruck verkehrt, hat Einheit, so aber in jedem Schritt der Abnahme verschieden ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s05-011",
     "kind": "text",
     "aa": 1000,
     "text": "4. ) es folgt hieraus nun, daß das reelle, da es in der Empfindung, mithin im Object der Sinne seinen Grund hat, nicht ün blos intellectuellen statt haben könne, mithin also der Grad des realen weder als maximum noch minimum gedacht werden könne. Dagegen ist es gewiß, daß die Abänderung des Grades der intensiven Größe der realen Qualitaet unendlich seyn muß, wenn sie gleich unmerklich seyn kann. Daher zwischen dem bestimmten Grade A bis zum 0 = Zero müßcn sich eine unendliche Menge von Qualitaeten des realen finden, in einem, wenngleich unmerklichen Grade; z.E. das Wißen, Vorstellungen, ja selbst das Bewußtseyn des Menschen haben viele Grade, ohne daß man den kleinsten bestimmen kann.",
     "dehyphenated": 4,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s05-012",
     "kind": "text",
     "aa": 1000,
     "text": "5. ) Man braucht das Wort Realitaet in doppeltem Verstände",
     "ocrConf": 88
    },
    {
     "id": "metaphysik-k3-s05-013",
     "kind": "text",
     "aa": 1000,
     "ms": [
      {
       "p": 115,
       "i": 40
      }
     ],
     "text": "1.) adjective, und dann bedeutet es nur die Form des Objects, wird mithin formaliter angewandt, und zwar läßt es sich dann nur im singulari gebrauchen. Z.E. Vorstellungen, Begriffe haben objective Realitaet. Größe ist hier Realitaet und kommt der Form des Begriffs zu, insofern er ein Object hat,",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s05-014",
     "kind": "text",
     "aa": 1000,
     "text": "2.) oder substantive, und dann bezieht sich die realitaet auf das Materielle des Objects und ist nur in plurali brauchbar, weil die realitaeten des Dinges an sich selbst betrachtet werden.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s05-015",
     "kind": "text",
     "aa": 1000,
     "text": "So verschieden wird auch in der deutschen, griechischen oder lateinischen Sprache das Wort Einheit gebraucht.",
     "dehyphenated": 1,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s05-016",
     "kind": "text",
     "aa": 1000,
     "ms": [
      {
       "p": 116,
       "i": 403
      }
     ],
     "text": "Nämlich adjective, z.E. sagt man: Einheit des Schauspiels, des Vortrages, Wahrheit des Satzes, der Vollkommenheit des Dinges. Es bedeutet den Gesichtspunkt, welchen man in Rücksicht des Objects unterlegt. Substantive dagegen, oder Einheiten der Dinge selbst, d. i. unitates quantitative spectatae werden nur in plurali benannt. So ist quantitas nur formaliter und in singulari brauchbar, quanta dagegen in plurali, denn diese gehen auf die Qualitaet des Objects selbst, jene aber nur auf die Form eines Objects überhaupt.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s05-017",
     "kind": "text",
     "aa": 1001,
     "text": "6.) Man nennt auch alle Realitaeten Vollkommenheiten, d. i. jede einzelne Vollkommenheit im Object selbst, (mithin differirt auch dieser Ausdruck von der Vollkommenheit der Dinge als Gattungs Begriff überhaupt). Objective endlich besteht die Realitaet in der Sachheit oder etwas positivem — und das, was positiv ist, ist vollkommen — und muß ein Object etwas positives, und kann viel positives oder Vollkommenheiten haben. Ein ens mere negativum, d. i. das gar nichts positives hätte, ist ein gerader Widerspruch, denn selbst das Seyn des Dinges involvirt schon etwas positives, sonst wäre es, wenn auch dies negativ wäre, kein Ding, da hier das Object nur materiell betrachtet wird ; denn formaliter läßt sich ein ens mere negativum wenigstens ohne Widerspruch denken. Jedes Ding muß also realitaet haben, und ein ens realissimum, so man auch ens perfectissimum, summum nennt, ist dasjenige, dessen sämtliche determinationes realitaeten sind, mithin worin nichts negatives ist.",
     "dehyphenated": 3,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s05-018",
     "kind": "text",
     "aa": 1001,
     "ms": [
      {
       "p": 117,
       "i": 41
      }
     ],
     "text": "In sensu transcendentali. Die Metaphysic sieht also, daß hier blos der Begriff des Nichtseyns, mithin eine analytische Erkenntniß von dem Dinge, zum Grunde gelegt ist, jedoch so, daß das Ding noch denkbar bleibt, mithin dem principium contradictionis nicht unterworfen ist, Realiter opposita sind indeß contrario opposita und müßen nach synthetischen principiis des Grundes zur Folge, sive rationis ponentis non tollentis, erforscht werden.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s05-019",
     "kind": "text",
     "aa": 1001,
     "ms": [
      {
       "p": 118,
       "i": 610
      }
     ],
     "text": "Die Wolffsche Philosophie nannte, weil die realitaet das Materiale des Dinges ausmacht, die Negation das Formale der Dinge. Die Negation würde auch bey den Dingen selbst nichts mehr als das Formale ausmachen, sie möge aus einem contrarie oder contradictorie opposito entspringen, wenn man die oppositi realitates (nemlich nicht in blos logischem Sinn) auf eine Negation reduciren könnte. Z.E. die Wolffianer sagen, die Sünde besteht blos in der Unterlaßung des Guten, oder Abwesenheit des Guten, mithin sey sie formale das nicht gute, sie betrachten also das contrarie oppositum des letzteren als negation. Es involvirt also die Idee des mali metaphysici. Da bey objecten der Erscheinung realia und negativa gemischt sich finden, eine Negation, quatenus ens non est ens realissimum.",
     "dehyphenated": 2,
     "ocrConf": 81
    }
   ]
  },
  {
   "id": "s06",
   "title": "Categorie der dynamischen Classe",
   "titleSrc": "heading",
   "headings": [
    "Categorie der dynamischen Classe"
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s06-001",
     "kind": "heading",
     "aa": 1001,
     "text": "Categorie der dynamischen Classe"
    },
    {
     "id": "metaphysik-k3-s06-002",
     "kind": "text",
     "aa": 1001,
     "aaEnd": 1002,
     "pages": [
      {
       "p": 1002,
       "i": 132
      }
     ],
     "ms": [
      {
       "p": 119,
       "i": 804
      }
     ],
     "text": "23.) Es zeigt sich in dem logischen Verhältniß der Categorie dieser Classe zu demjenigen der mathematischen Classe darin ein Unter -schied: Die Categorien der relation und modalitaet führen lauter correlata bey sich, die neben einander so gestellt sind, daß posito uno ponitur est alter, z.E. es beziehen sich Substanzen auf accidentia et v. v., Ursach auf Wirkung, so wie die Wechselwirkung directe auf einander: bey der Categorie der Quantitaet und Qualitaet waren 5 sie aber einzeln, sich einander untergeordnet, und konnten nicht neben einander gestellt werden. Z.E. Einheit nimmt keine Beziehung auf Vielheit, sondern in Vielheit liegt Einheit, und machen wieder zusammen die Allheit aus. Ebensowenig vertragen sich neben einander realitaet und negation, so wie dagegen die Modalitaeten in ihren 10 Correlatis sich auf heben: möglich — nicht möglich, wirklich — nicht wirklich, nothwendig — zufällig, contrarie opposita.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 76
    },
    {
     "id": "metaphysik-k3-s06-003",
     "kind": "text",
     "aa": 1002,
     "text": "Die Categorien der relation besonders haben die Erkenntniß der Dinge selbst in ihrem Verhältniß zum Gegenstände, die Categorien der modalitaet dagegen gehen nur auf das Erkenntniß des Begriffs des Dinges zu dem ganzen Erkenntniß Vermögen.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s06-004",
     "kind": "text",
     "aa": 1002,
     "text": "24.) Bey den Categorien der Relation besonders also werden die realitaeten gegen einander als Verhältniße betrachtet, d. i. die Verhältniße der Dinge in Ansehung ihrer existenz, indem ein reale des Dinges doch immer den Begriff des Seyns involvirt, und zwar nach den 3fachen Modis der existenz in der Reihe der logischen Urtheile, nemlich : aßertorische hypothetische disjunctive, gründet sich auf Relation des antecedens zum Verhältniß",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s06-005",
     "kind": "table",
     "aa": 1002,
     "text": "",
     "lines": [
      "subjects zum",
      "praedicat und,",
      "giebt, objective",
      "Substanz — accidens",
      "consequens",
      "causa causatum",
      "der Glieder",
      "der Eintheilung zum",
      "eingetheilten Begriff",
      "mutuum influxum."
     ],
     "note": "a table on the printed page; its cells as the OCR read them, columns not reliable — see the page image"
    },
    {
     "id": "metaphysik-k3-s06-006",
     "kind": "text",
     "aa": 1002,
     "text": "Hierdurch unterscheiden sie sich also von den Categorien der lität oben, wo diese zwar in verschiedener Art verglichen wurde, ohne auf das Verhältniß mehrerer Rücksicht zu nehmen.",
     "ocrConf": 73
    },
    {
     "id": "metaphysik-k3-s06-007",
     "kind": "text",
     "aa": 1002,
     "text": "25.) Die erste Categorie ist das Verhältniß der Substanz zum accidens.",
     "joined": [
      "inferred"
     ],
     "ocrConf": 72
    },
    {
     "id": "metaphysik-k3-s06-008",
     "kind": "text",
     "aa": 1002,
     "aaEnd": 1003,
     "pages": [
      {
       "p": 1003,
       "i": 131
      }
     ],
     "ms": [
      {
       "p": 120,
       "i": 157
      }
     ],
     "text": "Man nennt diese relation in Ansehung der Substanz subsistentia, in Ansehung des accidens inhaerentia. Inhaerentia ist eine interna determinatio substantive, also eine Bestimmung, die der Substanz inhaerendo competirt, mithin ist Substanz mit demjenigen, quod ei inhaeret, einerley. Z.E. der Mensch (substanz) denkt, est id quod homini tamquam substantiae ejus inhaerendo competit. Der Ausdruck dependenz, den man, weil kein beßrer ist, von den caussatis ratione causa bey der relation der Caußalitaet gebraucht, kann nicht mit der inhaerenz verwechselt werden. Die letztere dependirt auch von der Substanz, nun aber als noth wendige innere Bestimmung der Substanz, die causalitaet hat dagegen die dependenz nicht nothwendig in sich. Z.E. der Gedanke im Menschen ist wesentliche Bestimmung, aber die Wärme des Steins vom Sonnenlicht inhaerirt nicht dem letztem, ist auch nicht nothwendige Verknüpfung mit dem Stein, sondern existirt als etwas von der substanz unterschiedenes. Der Laut inhaerirt nicht dem Sprecher, auch nicht dem Zuhörer substantialiter, sondern subsistirt auf eine für sich bestehende Art. So ist es auch bey der Wechselwirkung.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s06-009",
     "kind": "text",
     "aa": 1003,
     "text": "Es sind eigentlich 3 Categorien der relation:",
     "ocrConf": 70
    },
    {
     "id": "metaphysik-k3-s06-010",
     "kind": "text",
     "aa": 1003,
     "text": "1. ) das Verhältniß der inhaerenz zur subsistenz",
     "ocrConf": 73
    },
    {
     "id": "metaphysik-k3-s06-011",
     "kind": "text",
     "aa": 1003,
     "ms": [
      {
       "p": 121,
       "i": 0,
       "approx": true
      }
     ],
     "text": "2. ) das Verhältniß der causalitas zur dependenz",
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s06-012",
     "kind": "text",
     "aa": 1003,
     "text": "3.) der Gemeinschaft, d. i. daß zwey Substanzen der Bestimmung der causae und caußati in sich zugleich haben.",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s06-013",
     "kind": "text",
     "aa": 1003,
     "text": "Mithin legt man bey der Relation die Betrachtung eines Dinges zum Grund, theils als subject, und insofern es nicht ein praedicat eines andern seyn kann, theils als Grund eines andern Dinges, theils insofern es mit einem andern Dinge wechselsweise bestimmt wird.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s06-014",
     "kind": "text",
     "aa": 1003,
     "text": "Der Begriff der substanz erfordert eine vorzügliche Erörterung, da darin eine Erkenntniß Quelle von vielen metaphysischen Wahrheiten liegt.",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s06-015",
     "kind": "text",
     "aa": 1003,
     "text": "Substanz ist dasjenige, was existiren kann, ohne ein praedicat eines andern Dinges zu seyn (quod potest eße, etiam si non existit tan quam determinatio alterius).",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s06-016",
     "kind": "text",
     "aa": 1003,
     "text": "Accidens dagegen ist dasjenige, was nicht existiren kann, ohne ein praedicat eines andern Dinges zu seyn. Daher",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s06-017",
     "kind": "text",
     "aa": 1003,
     "ms": [
      {
       "p": 122,
       "i": 159
      }
     ],
     "text": "1.) Substanz und accidens sind jedes etwas reales, da ihr Begriff ein Seyn enthält und die existenz des Dinges, es sey substanz oder accidens, dazu nothwendig ist. Ein Ding daher, daßen Begriff ein Nicht-seyn enthält (Negation) kann weder substanz noch accidens seyn, eben weil ihm realitaet und existenz mangelt.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s06-018",
     "kind": "text",
     "aa": 1004,
     "text": "Z.E. Körper ist real",
     "ocrConf": 72
    },
    {
     "id": "metaphysik-k3-s06-019",
     "kind": "text",
     "aa": 1004,
     "text": "Bewegung ist real",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s06-020",
     "kind": "text",
     "aa": 1004,
     "text": "Ruhe dagegen ist negation, mithin kann sie kein accidens eines Körpers seyn. Man nennt daher die existenz der Substanz die subsistenz, und die existenz des accidentis derselben inhaerenz, d. i. es kommt das accidens der Substanz als positives reales praedicat in der Art zu, daß es ihm inhaerirt.",
     "ocrConf": 85
    }
   ]
  },
  {
   "id": "s07",
   "title": "S c h o 1 i o n .",
   "titleSrc": "heading",
   "headings": [
    "S c h o 1 i o n ."
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s07-001",
     "kind": "heading",
     "aa": 1004,
     "text": "S c h o 1 i o n ."
    },
    {
     "id": "metaphysik-k3-s07-002",
     "kind": "text",
     "aa": 1004,
     "text": "Die Scholastiker theilten das accidens sive inhaerens ein in 1.) praedicabile, und verstanden darunter das accidens des Wesens ; mithin war accidens praedicabile = dem Zufälligen. Denn Wesen eines Dinges ist dasjenige, was nothwendig zum Begriff eines Dinges gehört: mithin, da das accidens das oppositum insofern war, so war es = dem außerwesentlichen extraeßentiale.",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s07-003",
     "kind": "text",
     "aa": 1004,
     "ms": [
      {
       "p": 123,
       "i": 0,
       "approx": true
      },
      {
       "p": null,
       "i": 81,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "2.) praedicamentale, worunter sie accidens der Substanz verstanden, mithin war esetwas reales positives, der Substanz inhaerirendes ; beyde unterscheiden sich auch dadurch, daß praedicabile accidens nur im Begriff liegt und da war, das praedicamentale aber existirt, und von einem realen praedicirt wird. Z.E. die Figur eines Plazzes war ein accidens praedicabile, sie enthält keine existenz, sondern beruht nur auf bloßer Form oder Vorstellungs Art des Plazzes, bey dem sie in Ansehung der Materie ganz indifferent war.",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s07-004",
     "kind": "text",
     "aa": 1004,
     "text": "Schwere des Körpers dagegen ist accidens praedicamentale, denn sie existirt inhaerendo im Körper. So auch Wärme, Kälte sind auch res existentes inhaerendo als accidentien deßelben, der Körper selbst aber existirt in ihrer Rücksicht subsistendo.",
     "ocrConf": 75
    },
    {
     "id": "metaphysik-k3-s07-005",
     "kind": "text",
     "aa": 1004,
     "aaEnd": 1005,
     "pages": [
      {
       "p": 1005,
       "i": 657
      }
     ],
     "ms": [
      {
       "p": 124,
       "i": 393
      }
     ],
     "text": "2.) Die Substanz, mit Hinweglaßung aller inhaerirenden accidenzien (d. i. Bestimmung derselben) gedacht, heißt substantiale. Es ist dieser Überrest ein bloßer Begriff, der keine Bestimmung hat. Es ist ein Etwas, so blos gedacht, oder vorstellbar ist, denn erkennen läßt sich das substantiale nicht. Man kann nichts erkennen, wenn man nicht vom Objecte praedicate hat, woran man etwas erkennt, indem alle Erkenntniße nur durch Urtheile geschehen. Hier bleibt aber nur das subject absque praedicato übrig, mithin kein Verhältniß zwischen Beyden. Es bleibt also nur eine Vorstellung von einem Etwas übrig, von dem man aber nicht erkennt, was es ist. Z.E. wenn man vom Körper alle accidentia wie Theilbarkeit, Undurchdringbarkeit, Dehnbarkeit absondert, so bleibt eine Figur übrig, so eine Gestalt im Raum ist, die aber nicht existirt, weil ein Raum, dergleichen sie doch ist, für sich (subsistendo) nicht existiren kann, und da der Raum nur durch die Körper als inhaerens gedacht wird, so bleibt nichts substantielles, was existirt, übrig.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s07-006",
     "kind": "text",
     "aa": 1005,
     "text": "So sind das Denken, Wollen, Gefühl der Lust und Unlust praedicate der menschlichen Seele. Läßt man diese weg, und denkt sich die Seele ohne diese inhaerentia, so bleibt ein Etwas übrig, von dem man keinen Begriff hat, ein Gedanke ohne denkende Subjecte, und dies ist substantiale. Man nennt es auch das substratum aller accidenzien. Hieran Objecte zu erkennen, ist dem menschlichen Verstände, wie gesagt, unmöglich, und man führt eine unnütze Klage über seine Eingeschränktheit, vermöge dessen der Verstand nur durch die Wirkungen, nicht aber die Objeckte an sich und in ihrer Substanz erkennen können. Es liegt in der Qualität des Verstandes- Vermögens, daß wir nur durch Prädikate, die aber hier weggelassen werden, erkennen können, und also ist alle Erkenntnis ohne Verbindung der Akzidentien mit der Substanz unmöglich {bricht ab)",
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s07-007",
     "kind": "text",
     "aa": 1005,
     "aaEnd": 1006,
     "pages": [
      {
       "p": 1006,
       "i": 1278
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "117Ar",
       "unresolved": true
      }
     ],
     "text": "phaenomena substantiata, ein Ausdruck des Leibnitz (ad autorem P. 193), heißt überhaupt nichts mehr, als die Substanz als Phaenomen betrachtet, oder Realität als Bestimmung im Raum und in der Zeit. Alle Substanzen werden von uns erkannt, und betrachtet, als sie sich in Raum und Zeit bestimmen lassen ; wir können ihre Prädikate nicht an sich erkennen, sondern nur in sofern, als sie im Verhältnis mit der Form unserer Sinnlichkeit stehen. Daher lassen sich substantiae noumenon nicht erkennen, weil dem Begriff der korrespondierende Gegenstand in der Anschauung fehlt. Daher, da die substantialia an sich nicht existieren, so können wir die Substanzen nicht an ihnen selbst, sondern nur durch ihre inhärierende akzidenzien erkennen; z. E. durch die Vorstellung von Ich läßt sich vom Subjekt, ohne ihm ein Prädikat beizulegen, nichts erkennen. Es dient nur als eine Bezeichnung der Vorstellung über ein Wesen, so sich selbst zum Objekt macht. Durch Beobachtung meiner selbst nur, wenn ich meine Aufmerksamkeit auf den innem Sinn richte, als welcher sich eben so, als der äußere Sinn, als phaenomenon vorstellig machen läßt. Wenn man daher die Substanzen nach ihren Bestimmungen im Raum und in der Zeit erkennt, und hält diese Bestimmungen für die Sache selbst, so vermischt man bei diesem Schein den Begriff der Substanzen mit dem der phaenomenis substantiatis. ( bricht ab)",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s07-008",
     "kind": "text",
     "aa": 1006,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "Ar121",
       "unresolved": true
      }
     ],
     "text": "Da die Welt ein Aggregat von vielen unter sich verknüpften Substanzen, d. i. ein reales Ganze ist, sobald man es in Verhältnis auf die Sinne in Raum und Zeit betrachtet, so kann es der Welten, als mundus phaenomenon, wegen der Einheit des unbegrenzten Raumes nur Eine Welt geben. Der Form nach ist also die Welt ein totum substantiale quod non est pars alterius . . .",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s07-009",
     "kind": "text",
     "aa": 1006,
     "text": ". . . läßt sich actu eine andere Welt als die gegenwärtige nicht als möglich annehmen . . . Denkt man sich nun die Welt als Noumenon, so ist sie nichts weiter als ein absolutes Ganze von Substanzen; aber man ist auch weiter nicht a priori zu bestimmen imstande, was es für Eigenschaften oder Determinationen habe. Denkt man sich aber die Welt als Phänomenon, mithin die Dinge im Raum und Zeit als ihren reellen Verhältnissen, wozu sie gegen einander stehen müssen, so lassen sich folgende vier Prinzipien festsetzen, unter welchen man sich die Bestimmungen der Welt denken muß: In mundo non datur 1. abyssus, 2. saltus, 3. Casus (blindes Ungefähr), fatum (blinde Nothwendigkeit).",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s07-010",
     "kind": "text",
     "aa": 1006,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "123",
       "unresolved": true
      }
     ],
     "text": "Dies war auch die Meinung des Wolf und Leibnitz. Man sieht wohl, daß diese Idee, durch den bloßen Verstand gedacht, an sich als richtig gelten kann, und insofern sich denken läßt: compositum substantiale consistit ex simplicibus. Als Phänomen aber ist hier eine ausgedehnte Substanz, ein Beharrliches im Raum, das sich ohne Teile und ohne Zerteilung ins Unendliche nicht gedenken läßt. Die Monaden können aber im Raum keine Teile vom Körper ausmachen, sondern müssen bloss Punkte sein, weil sie sonst Teile eines Raumes sein würden . . . {bricht ab)",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s07-011",
     "kind": "text",
     "aa": 1006,
     "aaEnd": 1007,
     "pages": [
      {
       "p": 1007,
       "i": 533
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "125Ar",
       "unresolved": true
      },
      {
       "p": null,
       "i": 1449,
       "raw": "m",
       "unresolved": true
      }
     ],
     "text": "Die Substanzen in der Welt müssen auf einander einen wechselseitigen Einfluß haben, d. i. in nexu reali stehen, als welcher nur durch Wechselwirkung auf einander stattfinden kann. Dieser nexus realis per commercium würde unter den Dingen nicht möglich anzunehmen sein, wenn man sie sich durch den Verstand an sich selbst existirend denkt. Die Substanzen würden jede für sich ohne alles Verhältnis und Verbindung unter einander existiren. Daher läßt sich ein Totum reale von nothwendigen Substanzen gar nicht denken. Denn alsdann ist keine von der andern in Ansehung ihres Daseins abhängig, jede existiert für sich, weil jede ihren nothwendig hinreichenden Grund ihrer Existenz in sich selbst hat : viele nothwendige Substanzen hätten also unter sich keine Verbindung, jede kann für sich nur Welt und die Grundursache einer Welt sein, aber mit einer andern Welt und den Dingen in derselben könnten sie nicht in der geringsten Verbindung stehen, z. E. viele Götter. Alle dergleichen Substanzen wären also unbedingt und durch sich selbst bestimmt, aber jede isoliert durch ihre absolute Nothwendigkeit. Da sich also hiernach, geradezu, und ohne ihrer Nothwendigkeit hinderlich zu sein, ihre Verknüpfung untereinander nicht annehmen läßt, so kann man, um diese sich zu denken, nicht anders, als ihr Dasein von einer allgemeinen gemeinschaftlichen Urquelle ableiten, welche die allgemeine Kraft zu der allgemeinen Wirkung aller Dinge ist. Hierdurch aber werden letztere von ihr abhängig, und an sich zufällig, werden sie durch diese allgemeine Ursache unter einander verbunden, und entsteht daher eine wechselseitige Verknüpfung und Gemeinschaft durch die gemeinschaftliche Ursache unter einander, da eine Handlung eines einigen Wesens nötig war, um sie alle zu produzieren, und in der Art entsteht der nexus realis.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s07-012",
     "kind": "text",
     "aa": 1007,
     "text": "Newton nennt den Raum das organon der göttlichen Allgegenwart. Diese Idee ist aber unrichtig, da der Raum an sich nichts ist, und als etwas an sich selbst wirklich Existierendes durch die Verknüpfung der Dinge nicht gedacht werden kann. Dagegen, wenn man den Raum als Symbolum sich denkt, d. i. an die Stelle aller Verhältnisse und Wechselwirkung selbst, so denkt man sich darunter den Inbegriff aller Phaenomena, und zwar als compraesentia, d. i. als einander gegenwärtig, und wechselseitig auf einander wiikend, und das Wesen, so sie enthält, als Symbol.",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s07-013",
     "kind": "text",
     "aa": 1007,
     "aaEnd": 1008,
     "pages": [
      {
       "p": 1008,
       "i": 598
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 50,
       "raw": "131",
       "unresolved": true
      }
     ],
     "text": "I Der Influxus physicus ist a) originarius, d. h. durch ihr Dasein sind die Substanzen schon in commercio ohne einen Grund anzunehmen, b) derivativus (rationalis). Aller Influxus physicus setzt ein derivativum voraus; denn dieser ist nur der wahre. Es versteht sich nicht schon von selbst, daß Substanzen in commercio sind; denn Substanzen sind gerade das, was allein für sich existiert, ohne von einem andern abzuhängen. Bei dem mundo phaenomeno (der in Raum und Zeit ist) ist es eben der Raum, der die Substanzen verbindet, wodurch sie in commercio sind. Aber wie sind die Substanzen in mundo noumeno in commercio? — Die Harmonie der Substanzen soll darin bestehen, daß ihr Zustand auf einander, d. i. nach allgemeinen Gesetzen übereinstimmt. Die Welt wird entweder als totum ideale betrachtet und hier ist dann eine harmonia absque commercio ; oder die Welt ist totum reale und hier ist eine harmonia substantiarum in commercio Dieses letztere Systema heisst das Systema influxus physici. Das Systema aber harmoniae substantiarum absque commercio ist das Systema influxus hyperphysici, d. i. von einer causa extramundana schreibt sich die Welt her; d. h von Gott.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 7,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s07-014",
     "kind": "text",
     "aa": 1008,
     "ms": [
      {
       "p": null,
       "i": 592,
       "raw": "Ar",
       "approx": true,
       "unresolved": true
      },
      {
       "p": null,
       "i": 660,
       "raw": "132",
       "unresolved": true
      }
     ],
     "text": "Dies letztere kann nun sein: 1. Systema adsistentiae — 2. Systema harmoniae praestabilitae. Leibnitz wollte dadurch nicht das Commercium der Substanzen, sondern nur des Commercium zwischen Seele und Körper erklären, weil dies ein paar so heterogene Substanzen sind. Ursache und Wirkung können aber realiter verschieden sein; also kann ich annehmen, daß etwas von etwas ganz Ungleichartigem z. E. Bewegung des Körpers von der Vorstellung der Seele, wie Wirkung von der Ursache von einander abhänge. Dies läßt sich aber nicht weiter erklären, sondern wir nehmen solche Sätze an, weil durch sie die Erfahrung möglich wird. Das systema influxus physici hat wieder eine zwiefache Vorstellungsart, sich dasselbe als möglich zu denken: 1. commercii originarii, wenn Substanzen dadurch, daß sie existieren, in commercio sind; 2. derivativi, wenn noch etwas hinzukommen muß, um dies Commercium zu bewirken. Das commercium originarium ist qualitas occulta ; es wird zu seinem eigenen Erklärungsgrund angenommen. Es bleibt also nichts als das systema influxus physici und zwar in commercio derivativo übrig, wo ich annehme, daß alle Substanzen durch eine Kausalität existieren, wodurch sie alle in commercio sind. Diese Idee hat etwas Erhabenes. Wenn ich alle Substanzen als absolut notwendig annehme, so können sie nicht in der geringsten Gemeinschaft stehen. Nehme ich aber die Substanzen an als existierend in Gemeinschaft, so nehme ich an, daß sie alle durch eine Kausalität existieren, denn dadurch läßt sich nur ihre Gemeinschaft erklären. — Raum selbst ist die Form der göttlichen Allgegenwart, d. h. die Allgegenwart Gottes ist in Form eines Phaenomens ausgedrückt, und durch diese Allgegenwart Gottes sind alle Substanzen in Harmonie. Aber hier kann unsere Vernunft nichts weiter einsehen. _",
     "dehyphenated": 9,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s07-015",
     "kind": "text",
     "aa": 1008,
     "aaEnd": 1009,
     "pages": [
      {
       "p": 1009,
       "i": 203
      }
     ],
     "text": "Diejenigen, welche den Raum für eine Sache an sich selbst oder für eine Beschaffenheit der Dinge an sich annehmen, werden genötigt, Spinozisten zu sein, d. i. sie nehmen die Welt als einen Inbegriff der Bestimmungen von einer einigen notwendigen Substanz, also nur Eine Substanz an. Raum als etwas notwendiges wäre alsdann auch eine Eigenschaft Gottes, und alle Dinge existieren im Raum, also in Gott.",
     "joined": [
      "layout"
     ],
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s07-016",
     "kind": "text",
     "aa": 1009,
     "ms": [
      {
       "p": 125,
       "i": 0
      }
     ],
     "text": "es misfällt. Ist der Grund des Gefallens oder Misfallens blos in der Empfindung durch den Sinn, oder Sinnen=Empfindung (nicht sinnliche, weil dazu auch die hier nicht convenirende Einbildungskraft gehört) zu suchen, so ist es nicht das Object, was gefällt, sondern ein Zustand ist es, der mir gefällt, vermöge der durch den Sinn in mir erregten Empfindung. Diese mere subjective bezogne Beschaffenheit des Einflußes des Objects, der den durch innern oder äußern Sinn erregten Zustand des subjects ausdrückt, ist aber derjenige, von dem man sagen muß: es vergnügt, es schmerzt.",
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s07-017",
     "kind": "text",
     "aa": 1009,
     "aaEnd": 1010,
     "pages": [
      {
       "p": 1010,
       "i": 1641
      }
     ],
     "ms": [
      {
       "p": 126,
       "i": 318
      },
      {
       "p": 127,
       "i": 1203
      }
     ],
     "text": "Mithin Vergnügen und Schmerz entsteht blos durch die unmittelbare Sinnen Empfindung des subjects: das characteristische davon liegt in dem Intereße an der existenz des objects, oder nichtexistenz deßelben; und Vergnügen ist daher das Wohlgefallen und Intereße an der existenz der Sache. Was uns vergnügt, ist uns auch angenehm, und an deßen Daseyn nehmen wir schlechthin jedesmal ein Intereße, indem dieses nur in soweit, und mit ihm das Vergnügen nur in dem Grade statt findet, als und insofern uns die existenz des Objects gefällt, oder (eigentlich) angenehm ist; weil es davon abhängt, uns den subjectiven Zustand länger zu erhalten, in den wir versetzt sind. Ebenso ist es in casu contrario mit dem Schmerz. Es giebt aber auch einen Zustand des Gefallens und nicht Gefallens, der nicht von dem unmittelbaren Einfluß der Sinnen Empfindung, sondern von der reflexion über den Gegenstand abhängt und daraus entsteht. Hier ist nicht Vergnügen, oder Schmerz, oder ein Intereße vorhanden, an der existenz des Objects, und Erhaltung unseres subjectiven Zustandes: vielmehr ist in Rücksicht der existenz des Objects Gleichgültigkeit vorhanden, es ist indifferent, ob der Zustand meiner Empfindung Vergnügen oder Schmerz seyn soll, von der Seite zeigt sich kein vorzüglicher entscheidender Einfluß. Hieraus entsteht das, was Gefallen heißt, d. i. dasjenige Wohlgefallen am Object durch die bloße Anschauung deßelben, mit völliger Gleichgültigkeit (ohne Rücksicht) auf die Existenz deßelben. — Es kann reine oder sinnliche Anschauung zum Grunde liegen. Z.E. Ein schön gebautes Haus gefällt mir seiner Form nach: es ist möglich, daß seine existenz mich schmerzt aus ganz andern Gründen, die der Verstand darbietet, der mit dem Vergnügen und Schmerz zufällig mitwirken kann.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 9,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s07-018",
     "kind": "text",
     "aa": 1010,
     "ms": [
      {
       "p": 128,
       "i": 296
      },
      {
       "p": 129,
       "i": 1206
      }
     ],
     "text": "Dasjenige, was durch die bloße Anschauung gefällt, ist schön, dasjenige, was in der Anschauung mich gleichgültig läßt, ob es gefallen oder misfallen könne, ist nicht-schön; dasjenige, was in der Anschauung misfällt, ist häßlich. Auf diesem Gefallen beruht nun der Begriff des Geschmacks. Nemlich vieles kann gefallen in der Vorstellung durch die Sinne, womit sich der Verstand in seiner Operation verbinden kann, und es entsteht Vergnügen; aber insofern sich mit dem Gefühl der Lust und Unlust die Urtheilskraft verbindet, und sie das erstere in der Anschauung eines Gegenstandes der Sinne, oder überhaupt ihren Eindruck von demselben begleitet, und bestimmt, so entsteht daher Geschmack, der auf aesthetischer Urtheilskraft hiernach beruht, aesthetische (von atulla) schmecken per organa sensuum, Sinn als Quell sinnlicher Vorstellungen) Vorstellung nach den Gesetzen der Sinnlichkeit bestimmt. Aesthetische UAtheilskraft ist daher diejenige Urtheilskraft, welche auf das Wohlgefallen oder Misfallen an Gegenständen gerichtet ist, insofern diese Gegenstände meiner sinnlichen Anschauung sind, so wie die logische Urtheilskraft den Gegenstand nicht als solchen in der Anschauung, sondern durch die Vernunftallein beurtheilt.",
     "dehyphenated": 5,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s07-019",
     "kind": "text",
     "aa": 1010,
     "text": "Alle Gegenstände der Sinnen-Anschauung oder der Einbildungskraft sind auch Gegenstände der aesthetischen Urtheilskraft — und die ist mit dem Begriff vom Geschmack ganz gleich. Sie ist also mit dem Wohlgefallen am Schönen beschäftigt, das sie, ob es schön oder nicht schön sey, bestimmen und mithin ihre Operation auf einem princip des Schönen bauen sollte.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s07-020",
     "kind": "text",
     "aa": 1010,
     "ms": [
      {
       "p": 130,
       "i": 606,
       "raw": "180",
       "inferred": true
      }
     ],
     "text": "Wäre nun die Materie des Objects, d. i. dasjenige, was durch unmittelbare Empfindung deßelben das Gemüth afficirt, der Gegenstand der Beurtheilung, so wäre sie einerley mit Vergnügen und Schmerz. Diese Empfindungen der Sinne, die hier aesthetische Empfindungen seyn würden, laßen sich aber, da sie blos subjectiv sind, nach Regeln nicht bestimmen und beurtheilen. Das Wohlgefallen oder Misfallen daher am Object, wobei die aesthetische Urtheilskraft das Gefühl der Lust oder Unlust betrachtet, betrifft blos die Form des Gegenstandes, der der sinnlichen oder reinen Anschauung unterworfen ist, und von dem sie nur bestimmt, ob er schön oder nicht schön sey.",
     "dehyphenated": 3,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s07-021",
     "kind": "text",
     "aa": 1011,
     "ms": [
      {
       "p": 131,
       "i": 809
      }
     ],
     "text": "Ein besonderes Phaenomen äußert sich bey Beurtheilung des Schönen. Man fordert und setzt voraus, daß, was wir als einen Gegenstand des Geschmacks schön finden, auch jeder andere, der Geschmack hat, gleich uns schön finden werde; und ebenso besonders ist es, daß der Urtheilende sich schlechthin darüber, ob etwas schön sey, nicht anders als durch sein eignes Urtheil bestimmen kann, er müßte denn ein fremdes Urtheil nachäffen wollen, ohne selbst zu urtheilen, woher man denn auch wohl annehmen kann, daß dasjenige, was nach dem Urtheil aller andern ebenso cultivirten Personen den Beifall nicht erhält, wohl am Ende auch nicht schön seyn mag: und es entsteht daher eine sonderbare Antinomie, die zur Zeit ihrem Grunde nach nicht deutlich zu entwickeln ist. Man nimmt an, der andere mtiße etwas schön finden, zugleich fürchtet man sein Misfallen, weil man keine Gründe hat, um ihn zum Beyfall zu zwingen.",
     "dehyphenated": 4,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s07-022",
     "kind": "text",
     "aa": 1011,
     "ms": [
      {
       "p": 132,
       "i": 779
      }
     ],
     "text": "Denn was dem andern schlechthin gefallen soll, muß von ihm a priori erkannt werden können, es muß also eine Regel vorhanden seyn, die ihm vorgeschrieben wird, vermöge welcher er zum Beifall oder Misfallen bestimmt wird: daher nur dann die Nothwendigkeit und allgemeine Gültigkeit des Schönen dargethan werden kann, wenn ein princip des Schönen existirt. Nun ist aber eine demonstration des Schönen umnöglich; es wird nur allein vom Sinnlichen nach Gesetzen des Verstandes abstrahirt, ohne daß man diese Gesetze, die dadurch gefunden werden, allgemein gültig angeben kann, eben wegen des subjectiven im Gefühl. — Muster hatten nun selbst die Griechen, z.E. ihren Doriphoron von Polyclet, welches sie die Regel eines schön gebildeten jungen Menschen in der Bildhauerkunst nannten. Es bleibt daher die Beurtheilung des Schönen, so wie der Grund und die Quelle des Geschmacks überhaupt, die die Seele so sehr zum Grunde legt, ein Gegenstand der schwierigsten Untersuchung.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s07-023",
     "kind": "text",
     "aa": 1011,
     "text": "Schön in der aesthetischen Beurtheilung ist nur dasjenige, was ohne alles Intereße an der existenz des Gegenstandes selbst, blos in der Anschauung deßelben, und zwar in der Form deßelben gefällt, und darum gefällt, weil hierbei ein freies Spiel der Einbildungskraft in Übereinstimmung mit der Gesetzmäßigkeit des Verstandes wirckt.",
     "dehyphenated": 4,
     "ocrConf": 74
    },
    {
     "id": "metaphysik-k3-s07-024",
     "kind": "text",
     "aa": 1011,
     "text": "Hieraus folgt also:",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s07-025",
     "kind": "text",
     "aa": 1011,
     "aaEnd": 1012,
     "pages": [
      {
       "p": 1012,
       "i": 188
      }
     ],
     "ms": [
      {
       "p": 133,
       "i": 324
      }
     ],
     "text": "a) daß alles, was schön seyn soll, wenigstens Ähnlichkeit mit Begriffen, oder mit den Gesetzen des Verstandes haben müße. Es ist jedoch keinesweges das Bewußtseyn der Regeln oder dieser Geschmacksgesetze nöthig, sondern nur ihre existenz im subject soweit erforderlich, als sie zur Unterstützung und Richtung der Einbildungskraft dienen könne: daher diese Begriffe des Verstandes auch nicht bey ihrer Bestimmung vorhanden seyn dürfen;",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s07-026",
     "kind": "text",
     "aa": 1012,
     "text": "b) daß die Einbildungskraft sich nur mit der Form des Gegen-Standes, und nicht mit deßen körperlicher existenz beschäftige, mithin sie nicht in die Schranken der Mängel derselben zurückgewiesen werde, sondern in sich unbegränzten Flug behalte, sich die Form zu bilden; daß aber, damit sie nicht ihren Gesetzen allein nachfolge, und über der Ungemeßenheit des Gegenstandes extravagire, sondern nur dem Verstände eine Mannigfaltigkeit am Gegenstände zum Ganzen schaffe.",
     "dehyphenated": 2,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s07-027",
     "kind": "text",
     "aa": 1012,
     "text": "c. ) der Verstand sie wieder jedesmal zur Ordnung zurückweist, sie in Schranken hält, wornach denn",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s07-028",
     "kind": "text",
     "aa": 1012,
     "text": "d. ) beyde Kräfte sich wechselseitig unterstützen, ein freies Spiel treiben, und sich so mit Wohlgefallen beschäftigen. Ein Gegenstand dieser Art wird geschmackvoll gefunden.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s07-029",
     "kind": "text",
     "aa": 1012,
     "ms": [
      {
       "p": 134,
       "i": 33
      }
     ],
     "text": "Von demjenigen, was vergnügt und gefällt, unterscheidet sich noch dasjenige, was gebilligt wird. Dies ist das Gute, d. i. was in der Vorstellung der Vernunft gefällt.",
     "ocrConf": 87
    },
    {
     "id": "metaphysik-k3-s07-030",
     "kind": "text",
     "aa": 1012,
     "text": "Anmerkung. Man kann die 3fache Arten der Vermögen der Seele mit den 3 Operationen des Verstandes vergleichen, wornach das Erkenntniß Vermögen die Begriffe aufstellt, das, worin die Lust und Unlust durch die Urtheilskraft unter die Begriffe subsumirt wird, und das Begehrungs Vermögen durch die Vernunft bestimmt wird, mithin concludirt, inwiefern das Gefallen oder Misfallen in der Vorstellung stattfindet.",
     "dehyphenated": 2,
     "ocrConf": 80
    }
   ]
  },
  {
   "id": "s08",
   "title": "§• 68 Begehrungs- Vermögen",
   "titleSrc": "heading",
   "headings": [
    "§• 68 Begehrungs- Vermögen"
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s08-001",
     "kind": "heading",
     "aa": 1012,
     "text": "§• 68 Begehrungs- Vermögen"
    },
    {
     "id": "metaphysik-k3-s08-002",
     "kind": "text",
     "aa": 1012,
     "aaEnd": 1013,
     "pages": [
      {
       "p": 1013,
       "i": 479
      }
     ],
     "ms": [
      {
       "p": 135,
       "i": 323
      }
     ],
     "text": "Alle Vorstellungen beziehen sich auf den Gegenstand als Object des Erkenntnißes, sie können aber auch als Handlungen betrachtet werden, und dann liegt in der Vorstellung der Grund der Hervorbringung des Objects derselben. Hiermit correspondirt dann das Vermögen der Seele, durch die Vorstellung eines Gegen-Standes selbst, Ursache der Wirklichkeit des Gegenstandes zu werden, = und dies ist das Begehrungs Vei mögen, welches man auch ebenso gültig bestimmen kann als caußalitaet der Vorstellung in Ansehung ihres Objects. Diejenige Handlung der Seele überhaupt, wodurch die Vorstellung die Wirklichkeit ihres Objects zu erlangen sucht, ist überhaupt die Begierde und Begehren, die sinnlich und intellectuell sind. Man drückt das Gefühl der Lust und Unlust durch voluptas et taedium aus. Beydes ist indeß blos sinnlich: es läßt sich allgemeiner durch complacentia et displicentia,",
     "joined": [
      "inferred",
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s08-003",
     "kind": "text",
     "aa": 1013,
     "text": "Wohlgefallen und Mißfallen nach Herrn Kant bestimmen, und darauf der Begriff von Begehren gründen, nemlich als complacentia respective actualitatis objecti d. i. die",
     "joined": [
      "inferred"
     ],
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s08-004",
     "kind": "text",
     "aa": 1013,
     "text": "Vorstellung vom Object, welche mit dem Wohlgefallen an der Wirklichkeit deßelben verknüpft ist, und welche der Grund zur Hervorbringung deßelben ist.",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s08-005",
     "kind": "text",
     "aa": 1013,
     "ms": [
      {
       "p": 136,
       "i": 0
      }
     ],
     "text": "Es differirt also das Wohlgefallen an der Anschauung des Objects vom Begehren deßelben darin, daß dieses 'dasjenige Verhältniß der Vorstellung zum Object betrifft, sofern sie Ursache von der Wirklichkeit deßelben seyn kann.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s08-006",
     "kind": "text",
     "aa": 1013,
     "aaEnd": 1014,
     "pages": [
      {
       "p": 1014,
       "i": 1282
      }
     ],
     "ms": [
      {
       "p": 137,
       "i": 600
      },
      {
       "p": 138,
       "i": 1599
      },
      {
       "p": 139,
       "i": 2521
      }
     ],
     "text": "Es scheint diesem Begriff der Zweifel zu widerstreiten, daß man sehr oft etwas begehrt, deßen Wirklichkeit hervorzubringen unmöglich ist. Es giebt nemlich zweyerley Arten Begierden: eine appetitio practica d. i. die Vorstellung von der Möglichkeit, es wirklich zu machen, mithin eine Begierde, nach welcher die Vorstellung so qualificirt ist, daß das Object wirklich werden kann, und eine appetitio minus practica, die man Wunsch, optare, nennt, eine Begierde mit dem Bewußtsejm verbunden, daß es nicht in unserer Gewalt stehe, den Gegenstand wirklich hervorbringen zu können. Indeß, beyde Arten von Begierden vereinigen sich doch darin, daß sie auf eine Vorstellung des Objects hinausgehn, vermöge deren sie den Grund der Möglichkeit in sich setzt, den Gegenstand hervorbringen zu können, nur mit dem Unterschiede, daß im erstem Fall der Bestimmungsgrund zureichend, im letztem Fall aber die Caußalitaet unzureichend ist. Dies letztere nennt man conatum oder Wünschen in Ansehung der Begierde, welches dann in Sehnsucht ausartet, wenn dies Wünschen in eine heftige Gemüthsbewegung übergeht, bis zur Ermattung, um oft ganz unnatürliche oder physisch unmögliche Vorstellungen wirklich zu machen, dahin z.E. das: o mihi prateritos referat si Jupiter annos, gehört. Die Ursache dieser Eigenschaft der Menschlichen Natur, da man oft Wünsche hegt und zu realisiren sucht, deren mögliche caußalitaet man bey sich nicht zureichend erkennt, liegt darin. Wollte aber der Mensch, statt Versuche zu wagen, erst prüfen, ob seine Kräfte mit Sicherheit zureichten, zu seinem Zweck zu gelangen, so würde er vieles unterlaßen, und die Mühe sich zu ersparen suchen. So aber liegt in ihm die Aufforderung seiner Natur, sein Bestreben dahin anzuwenden, daß er seine Kräfte versuche; er ist mit der Möglichkeit zufrieden, zum Zweck gelangen zu können, ob er gleich vor jetzt sich als unzureichend fühlt, und es völlig ungewiß ist, ob es ihm gelingen könne; und bey großer Anstrengung entwickeln sich oft Kräfte beym Menschen, die ihm vorher unbekannt waren, nun ihn aber von der Möglichkeit immer mehr überzeugen, er habe nicht Ursache, länger Mistrauen in sich selbst zu setzen, und er werde zulängliche Kräfte haben, seinen Zweck zu erlangen, Sind freilich die Wünsche widernatürlich, so entsteht dann daher das nutzlose Zurücksinken, das sich durch Weinen als Schwäche beym weiblichen, und durch nur vergebliche Versuche beym männlichen Geschlecht äußert. Die Begierden nun in Ansehung solcher Gegenstände, von denen wir uns bewußt sind, dazu hinlängliche Kräfte zu haben, um sie hervorzubringen, ist ein actus der Willkühr, und das Vermögen, so dieser Begierde correspondirt, ist die Willkühr, arbitrium, die also nicht allein Bestimmung zur Caussalitaet, sondern auch zureichende Kraft, das Object wirklich zu machen, involvirt: wo aber das Vermögen der W illkühr in Ansehung der Hervorbringung des Gegenstandes ist, da muß aucli schlechthin begleitet seyn das Vermögen, von der Hervorbringung abzusehen, oder sie zu unterlaßen. Arbitrium oder Willkühr ist daher im eigentlichen Verstände facultas appetendi vel aversandi objectum, i. e. omittendo vel committendo.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 18,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-007",
     "kind": "text",
     "aa": 1014,
     "aaEnd": 1015,
     "pages": [
      {
       "p": 1015,
       "i": 488
      }
     ],
     "ms": [
      {
       "p": 140,
       "i": 355,
       "raw": "ho",
       "inferred": true
      }
     ],
     "text": "Das Arbiti ium hat an sich in Rücksicht des Bestimmungsgrundes eine doppelte Seite. Es liegen nemlich elateres animi oder Bestimmungs Gründe, Quellen der Möglichkeit, das Vorgestellte hervorzubringen, im Menschen, causae determinantes sive impulsivae, und diese liegen entweder im Verstände, als dem Gesetz der Handlung, oder in der Sinnlichkeit, nemlich dem Gefühl der Lust und Unlust, und sind daher vel sensitivae causae sive elateres vel intellectuales causae sive elateres — erstere nennt man Stimuli, letztere motiva. Daher entspringt die Einteilung des Begriffes in arbitrium intellectuale sive superius, die obere oder vernünftige Willkühr, i. e. facultas appetendi per motiva, oder voluntas sive arbitrium ex causa impulsiva intellectuali und arbitrium sensitivum, facultas appetendi per stimulos.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 5,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s08-008",
     "kind": "text",
     "aa": 1015,
     "text": "Die vernünftige Willkühr ist wiederum vel purum vel affectum, je nachdem bey der Willkühr gar keine Stimuli als mitwirkende Ursachen concurriren, oder dergleichen sinnliche Antriebe zugleich das Gemüth afficiren und zur Handlung bestimmen,",
     "dehyphenated": 1,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s08-009",
     "kind": "text",
     "aa": 1015,
     "text": "In der Erscheinung aber läßt sich die menschliche Willkühr nie so annehmen, daß sie, ohne von stimulis afficirt zu seyn, determinirt werde, und eben so wenig, daß sie per stimulos allein determinirt werden könne.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s08-010",
     "kind": "text",
     "aa": 1015,
     "ms": [
      {
       "p": 141,
       "i": 0,
       "raw": "l«",
       "inferred": true
      },
      {
       "p": 142,
       "i": 920
      }
     ],
     "text": "Thiere haben ein arbitrium mere sensitivum, z.E. beym Wählen der Speise — sie werden also allein per stimulos determinirt, mithin kann man ein arbitrium sensitivum auch brutum nennen: das arbitrium humanum dagegen ist nie purum, sondern semper affectum. Die mitwirkende Stimuli können es aber nie determiniren, sondern blos sinnlich afficiren, und es bleibt die concurrenz des Verstandes nöthig, um ihn zu determiniren: aber nie kann man sagen, daß Stimuli ihn nicht afficirt haben sollten, z.E. beym Allmosen geben würden Stimuli schon seyn, wenn er den Allmosen auf Kosten seiner Bequemlichkeit, der er sich entzieht, hingiebt, oder aus Ehrliebe in den Augen seiner Neben Menschen nicht hart geschölten zu werden, oder aus Mitleiden gegen den zerlumpten Bedürftigen, oder seine, die Schwäche des Gebers treffende Bitten, oder auch zu erwartende Belohnung von Gott: oft sind die Stimuli so versteckt, daß man sich genauselbst prüfen muß, ob blos die Liebe zur Befolgung des Gesetzes mich zur Handlung bringt, und ich also aus arbitrio puro handle: aber eben so wahr ist es auch, daß es nie Stimuli allein sind, die mich zur Handlung bestimmen: eine, wenn auch nicht klare, Vorstellung des Pflicht Gesetzes concurrirt jederzeit dabei, und man muß dies schon deshalb annehmen, weil man sonst den Menschen dem Vieh oder dem Teufel gleich machen würde, wenn man voraussetzen könnte, er könne alles aus Eigennutz thun usw. ; sonst ist es wohl möglich, daß Stimuli so gut zum guten als zum bösen anreitzen können.",
     "dehyphenated": 4,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-011",
     "kind": "text",
     "aa": 1015,
     "aaEnd": 1016,
     "pages": [
      {
       "p": 1016,
       "i": 110
      }
     ],
     "ms": [
      {
       "p": 143,
       "i": 400
      }
     ],
     "text": "Hierauf beruht nun der Begriff von Freiheit: nemlich dem Vermögen des Menschen, sich unabhängig von den ihn afficirenden sinnlichen Antrieben durch Motive zur Handlung zu bestimmen, die Willkühr ist daher nur frei, insofern sie nicht per stimulos determinirt wird : welches bey der menschlichen Willkühr durch die Überwindung der stimulorem erfolgt. Mithin ist die freie Willkühr, oder Freiheit, die Independenz der Willkühr a determinatione per stimulos. — So werden und müssen bey der menschlichen Willkühr die Stimuli nicht ausgeschloßen werden, denn sonst wäre sie ein arbitrium purum, das reine selbständige Wesen, so sich nur den Gesetzen gemäß, nicht dagegen bestimmen kann. Der Mensch hat facultates inferiores, die für ihn als sinnliche Antriebe wirken, und allerdings causae impulsivae werden, aber ihn allein afficiren, nie determiniren können, weder zum Guten noch zum Bösen: seine Willkühr ist also partim sensualis, partim intellectualis, wovon die einwirkende Stimuli zwar auch Grund zur Handlung, aber nur als unzureichender Grund anzusehen sind, die motiven dagegen denjenigen Bestimmungs Grund enthalten, der die Handlung nothwendig macht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s08-012",
     "kind": "text",
     "aa": 1016,
     "text": "§69. Alle objectiv nothwendige Regeln und Bestimmungen der Willkühr, insofern sie subjectiv zufällig sind, heißen imperative.",
     "dehyphenated": 1,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s08-013",
     "kind": "text",
     "aa": 1016,
     "text": "a) Objectiv sind sie überhaupt, weil sie ausdrücken, was gethan werden muß.",
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s08-014",
     "kind": "text",
     "aa": 1016,
     "ms": [
      {
       "p": 144,
       "i": 0
      }
     ],
     "text": "b) Jeder imperativ ist objectiv nothwendig, d. i. er enthält in Ansehung der Handlung einen Bestimmungs Grund, der die Handlung nach einer Regel nothwendig macht; zugleich aber ist",
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s08-015",
     "kind": "text",
     "aa": 1016,
     "aaEnd": 1017,
     "pages": [
      {
       "p": 1017,
       "i": 746
      }
     ],
     "ms": [
      {
       "p": 145,
       "i": 797
      }
     ],
     "text": "c) jeder imperativ subjectiv zufällig, d. i. er ist in seiner Bestimmung mit der Möglichkeit für das subject verbunden, von der Regel abzuweichen und das Gegentheil zu thun. Daher entspringt bey einem nach beyden Bedingungen des imperativs eingerichteten Wesen, welches nach imperativen handelt, die Nöthigung zur Handlung: denn es ist solchen Gebothen unterworfen, wobey eine objectiv nothwendige Regel sowohl, als eine Möglichkeit des subjects, von der Regel abzuweichen, vorhanden ist, und mithin ist lüi ihn ein imperativ eine objective Regel insofern sie in Ansehung des subjects neceßitirend ist, und beyde Bedingungen sind bey ihm verbunden, wenn es nach imperativen handeln soll. Ein solches Wesen ist es auch nur, von dem man ein Sollen praediciren kann, d. i. eine Noth wendigkeit, nach einer Regel zu handlen, deren Übertretung subjective möglich bleibt. Daher weder ein Gott noch ein Thier können nach imperativen handeln. Gott ist einer Abweichung vom Gesetz nicht fähig, er bestimmt sich nur durch das Gesetz, d. i. durch sich selbst, bey ihm findet keine Nöthigung, kein Sollen statt. Er hat also auch keine Pflichten, da diese Handlungen auf einem Sollen oder Nöthigung beruhen. Er hat nur Rechte gegen Menschen, so wie diese nur Pflichten gegen ihn, nie aber Rechte haben können. Thiere dagegen handeln nicht nach Regeln, weil sie wegen Mangel des Verstandes dergleichen nicht kennen, sondern haben nur sinnliche Antriebe; sie können daher auch nicht imperativen befolgen, und sich dadurch zur Handlung bestimmen, d. i. nöthigen laßen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s08-016",
     "kind": "text",
     "aa": 1017,
     "ms": [
      {
       "p": 146,
       "i": 186
      }
     ],
     "text": "Imperative haben also Handlungen zum Zweck, und heißen deshalb practische Imperative, d. i. practische Regeln, welche anzeigen, was gethan werden soll. — Oppositum sind physische Regeln nach welchen etwas geschehen soll; practische Imperative können aber entweder technisch practische Imperative seyn, d. i. sie können zur Erreichung eines Zwecks hypothetisch das Mittel gebiethen, sie sind daher Regeln, die bedingte Befolgung verlangen. Dahin gehören alle Mechanische Regeln für eine Kunst oder Geschicklichkeit, wodurch man, um den Zweck zu erreichen, die Regeln derselben befolgt. — Regeln der Klugheit in Rücksicht der Handlung anderer Menschen zu seinem Zweck, welche letztere man indeß piagmatisch nennt. In beyden Fällen kommt es doch zuförderst auf den Willen des Handelnden an, ob er den Zweck will. Hat er dafür nicht Intereße, so kann ihn doch niemand zur Befolgung der Regel zwingen ; sie gebiethen also beyderseits nur bedingt, um des Zwecks willen, oder aber als moralisch practische Regeln.",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 4,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-017",
     "kind": "text",
     "aa": 1017,
     "ms": [
      {
       "p": 147,
       "i": 102
      }
     ],
     "text": "Anmerkung. Man könnte auch einen disjunctiven Imperativ sehr wohl annehmen, der darin bestehen würde, daß die Wahl des subjects in Ansehung mehrerer, disjunctive gebiethenden, Bestimmungen zwar gestattet, aber die Übertretung und contravention gegen alle Bedingung des Gesetzes unerlaubt wäre, z.E. bey einem innern Kriege wäre es unerlaubt, neutral zu bleiben, sondern eine oder die andere Parthei müßte man angreifen.",
     "dehyphenated": 1,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-018",
     "kind": "text",
     "aa": 1018,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "146",
       "unresolved": true
      },
      {
       "p": null,
       "i": 93,
       "raw": "147",
       "unresolved": true
      },
      {
       "p": null,
       "i": 1054,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "Moralisch practische Regeln sind ihrer Natur nach categorisch, weil sie absolute unmittelbar durch die Vernunft, und ohne alle Rücksicht auf die existenz anderer Bestimmungs- oder Bewegungs-Gründe gebiethen : sie sind unbedingte und unmittelbare Bestimmungs Gründe der Handlungen; jeder andere angenommene, andere Bewegungs Grund, als den die Vernunft sich selbst giebt, würde Bedingung und ihr Geboth nur hypothetisch seyn. Z.E. wollte ein Zeuge die Wahrheit nur reden, weil er sich für weltliche oder göttliche Strafe fürchtet, weil sein Freund aber dabei Vortheil hat, so könnten diese und andere Gründe leicht eludirt werden, und es würde die Pflicht zur Wahrheit gar nicht weiter statt haben, wenn sie nur von bedingten Umständen abhänge, da deren Gegentheil eben so gut möglich ist. Die Vernunft allein ist die Gesetzgeberin, und sie soll durch das subject auch das Gesetz befolgen. Soll dies das subject, seiner Neigung sinnlicher Antriebe ungeachtet, können so muß es fähig seyn, dies zu können, es muß ihm möglich seyn, dasjenige auszuüben, was die Vernunft gebiethet. Der categorische Imperativ setzt also beym Menschen eine subjective Möglichkeit zur Befolgung des Gesetzes so wie zur Übertretung deßselben, oder, welches einerley ist, eine independenz a determinationibus per stimulos voraus, mithin die Freiheit; es muß also der Mensch frei seyn, wenn er absolute Gebothe, lediglich und allein weil sie die Vernunft gebiethet, befolgen soll.",
     "dehyphenated": 5,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s08-019",
     "kind": "text",
     "aa": 1018,
     "aaEnd": 1019,
     "pages": [
      {
       "p": 1019,
       "i": 1048
      }
     ],
     "ms": [
      {
       "p": 149,
       "i": 465
      }
     ],
     "text": "Denn wäre dies nicht der Fall, so müßten alle Handlungen des Menschen blos nach Gesetzen der Natur, oder nach NaturNothwendigkeit, bestimmtwerden, undmithinwürde alle Zurechnungsfähigkeit wegfallen. Denn Freiheit wird der Natur Nothwendigkeit contradistinguirt. Handlungen, die nach Gesetzen der Freiheit geschehen, müßen so ausgeübt werden, daß sie nicht durch den vorhergehenden Zustand der Welt determinirt werden, in contrario können Handlungen nach Natur =Nothwendigkeit nicht anders betrachtet werden, als daß sie in der Reihe der Wirkungen und Ursachen als nothwendig vorher bestimmt sind. Wenn sie dies aber sind, so sind sie in der vorigen (vergangenen) Zeit bestimmt, und Handlungen, als in der vorigen Zeit bestimmt betrachtet, stehen nicht in meiner Gewalt, die Handlung auch zu unterlaßen. Es kann also das Gegentheil nicht geschehen, weil sie nach unabänderlichen Gesetzen der Causalitaet in der vorigen Zeit bestimmt, und also blos als Wirckungen erscheinen, wovon die Ursache in der vorigen Zeit vorhanden, mithin nicht in meiner Gewalt sind, weil überhaupt die vorige Zeit nicht in meiner Gewalt ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s08-020",
     "kind": "text",
     "aa": 1019,
     "ms": [
      {
       "p": 150,
       "i": 210
      }
     ],
     "text": "Ein arbitrium also, was durch Natur Gesetze als praedeterminirende Ursachen bestimmt würde, würde arbitrium servum seyn, und das Gegentheil der praedeterminirten Wirkung könnte unmöglich von ihm gethan werden. Dies ist aber der Natur eines Geboths der Vernunft entgegen, welches Möglichkeit der Erfüllung, nicht Nothwendigkeit, mithin auch Möglichkeit fiir’s Gegentheil, gestattet und voraussetzt. Es liegt also die Bestimmung der Befolgung in der freien Willkühr des subjects. Daher ist freie Wiilkühr mit einem Willen begleitet, der seine und zwar hinreichende Bestimmungs Gründe (intellectuelle) nicht aus Zuständen und Bedingungen der vorigen Zeit hernimmt, vielmehr durch Selbstbestimmung (spontaneit-aet) und ohne durch irgend eine Ursach der vorigen Zeit neceßitirt zu seyn, die Handlung ausübt.",
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s08-021",
     "kind": "text",
     "aa": 1019,
     "ms": [
      {
       "p": 151,
       "i": 402
      }
     ],
     "text": "Es wird hieraus klar, daß dasjenige System, oder Grundsatz, den man bisher determinismus nannte, eigentlich praedeterminismus genannt werden muß. Denn, da es schlechthin nothwendig ist, daß jede Handlung durch einen Grund bestimmt seyn muß, selbst diejenige, die eine Gottheit ausübt, so drückt der determinismus nichts aus, worauf es hier ankommt, nemlich auf das princip, nach welchem jede Handlung, selbst eines freien Wesens, durch ihre Bestimmungs Gründe in der vorigen Zeit bestimmt, und also als nicht in der Gewalt des Handelnden gegeben, gedacht wird. Dies sollte man praedeterminismus nach Herrn Kant nennen.",
     "dehyphenated": 3,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-022",
     "kind": "text",
     "aa": 1019,
     "text": "Nun ist aber das auffallende Phaenomen beym Menschen, daß sich in ihm Freiheit mit Natur Nothwendigkeit vereinigt befindet. Beydes hat bey ihm statt, so daß man sagen kann, alles geschehe beym Menschen nach Gesetzen der Natur Nothwendigkeit-, und auch alles geschehe nach dem princip der Freiheit.",
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s08-023",
     "kind": "text",
     "aa": 1019,
     "aaEnd": 1020,
     "pages": [
      {
       "p": 1020,
       "i": 583
      }
     ],
     "ms": [
      {
       "p": 152,
       "i": 515,
       "approx": true
      }
     ],
     "text": "Als Natur Wesen (phaenomen) läßt sich jede neue Handlung als nach Gesetzen der Natur Nothwendigkeit bestimmt erklären. Man thut dies auch oft in Criminalfällen. Z E. man nimmt beym Verbrecher auf seine Erziehung, äußere Umstände, Neigungen oder andre Bewegungs Gründe, die blos subjectiv sind, Rücksicht, um die determination zum Verbrechen davon abzuleiten. Als intelligenz (\"V ernunft Wesen) die jedoch nicht als pure durch die Vernunft selbst bestimmt gedacht werden muß (oder als noumenon). Der Mensch ist sich j selbst bestimmend, unabhängig von allen Gesetzen der Natur, nimmt aus sich selbst den Grund, seine Handlung, die er thun kann, oder soll, zu unterlaßen, welches er, nach Natur Gesetzen bestimmt, nicht vermögend wäre. Wir werden indeß gezwungen, eine Vereinigung beyder in ihm vorhandenen, scheinbar ganz wiedersprechenden Wesen, in seiner Selbst heit anzunehmen, vermöge deren er die nemliche Person ist, die durch die untern Kräfte afficirt wird, durch die independenz der Vernunft aber sich determinirt, und so erscheint er nicht in succeßiver, sondern zu gleicher Zeit als unter Vernunft und Natur geordnet. In Rücksicht seiner Handlungen kann man daher die Freiheit auch benennen (nominaldefinition) :",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s08-024",
     "kind": "text",
     "aa": 1020,
     "text": "die Zurechnungsfähigkeit des Menschen.",
     "ocrConf": 87
    },
    {
     "id": "metaphysik-k3-s08-025",
     "kind": "text",
     "aa": 1020,
     "ms": [
      {
       "p": 153,
       "i": 227
      }
     ],
     "text": "Bios als intelligenz betrachtet, ist der Mensch ein zurechnungsfähiges subject, in dem freilich zugleich ein Natur Wesen vereinigt ist, welches ihn den Natur Gesetzen unterwirft, das jedoch, insoweit die Möglichkeit zu handeln ihm nachgelaßen ist, wo die Bestimmung von der Intelligenz abhängt, daher ist es nur abzuleiten, in wie weit der Mensch Ursach seiner Handlungen genannt und ihm solche zugerechnet werden kann, und ebenso gewiß, daß, wenn er blos nach Natur Gesetzen geleitet würde, es unmöglich wäre, ihm irgend eine Handlung zuzurechnen, da der Grund der Handlung dann nie in seiner Gewalt läge, sondern in der vorigen Zeit bestimmt wäre.",
     "dehyphenated": 2,
     "ocrConf": 86
    },
    {
     "id": "metaphysik-k3-s08-026",
     "kind": "text",
     "aa": 1020,
     "text": "Der Mensch hat also als Noumenon das Vermögen, sich seiner Natur Nothwendigkeit ohnerachtet, zur Handlung zu bestimmen. Hieraus folgt, daß die Freiheit ohne Widerspruch des Begriffs denkbar und also logisch möglich sey.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s08-027",
     "kind": "text",
     "aa": 1020,
     "aaEnd": 1021,
     "pages": [
      {
       "p": 1021,
       "i": 731
      }
     ],
     "ms": [
      {
       "p": 154,
       "i": 343
      },
      {
       "p": 155,
       "i": 1275
      }
     ],
     "text": "Wir können aber die Dinge an sich nicht erkennen, was und wie sie an sich sind, sondern nur in der Erscheinung, mithin kennen wir auch nur den Menschen, wie er sich uns in der Form der Sinnlichkeit als phaenomen darstellt, mithin seine Handlungen, nicht aber seine Bestimmungs Gründe: es ist also unmöglich, die reale Möglichkeit der absolutenSelbst Bestimmung des Menschen, oder wie der Mensch sich frei bestimmen und dennoch zugleich den Natur Gesetzen unterworfen seyn kann, zu beweisen, denn dazu gehörte nothwendig, daß die Freiheit ein object möglicher Anschauung wäre. Dies ist sie so wenig, daß vielmehr alle Handlungen des Menschen als nach dem Gesetz der Causalitaet oder in der vorigen Zeit, ihrem Grunde nach, bestimmt erscheinen, daß der Mensch also es nicht in seiner Gewalt habe, wie er handeln soll, daß er also der Natur Noth Wendigkeit unterworfen sein müße. Allein, eben darum, weil der Mensch sich in der Art nach der Form der Sinnlichkeit darstellt, läßt sich ein möglicher Schluß auf das Übersinnliche machen, als etwas vorhandenes, was mit zu den Bestimmungs Gründen seiner Handlungen gerechnet werden könnte. Es läßt sich bey ihm vielleicht eine übersinnliche Quelle aufsuchen, wo er nicht mehr als Gegenstand der Sinne erscheint, ob wir zwar nicht bestimmen können a priori, wie er da ist. Diese Quelle wäre die Willkühr des Menschen als Noumenon, d.i. der unabhängige, aber uns unbekannte, Grund aller Erscheinungen am sinnlichen Menschen. Insofern kann man ihn als selbsteignen, unabhängigen Grund aller seiner Handlungen voraussetzen, und bey ihm annehmen, daß er jetzt, durch den in ihm vorhandenen Grund der Bestimmung, eine Reihe von Handlungen anfange, und ihn so betrachten, als wenn er nicht in der Zeit wäre : man könnte in diesem Betracht die Freiheit bestimmen durch das Vermögen des Menschen, von selbst eine Reihe von Folgen anzufangen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s08-028",
     "kind": "text",
     "aa": 1021,
     "aaEnd": 1024,
     "pages": [
      {
       "p": 1022,
       "i": 1344
      },
      {
       "p": 1023,
       "i": 3876
      },
      {
       "p": 1024,
       "i": 6441
      }
     ],
     "ms": [
      {
       "p": 156,
       "i": 382
      },
      {
       "p": 157,
       "i": 1298
      },
      {
       "p": 158,
       "i": 2196
      },
      {
       "p": 159,
       "i": 3086
      },
      {
       "p": 160,
       "i": 4122
      },
      {
       "p": 161,
       "i": 5062
      },
      {
       "p": 162,
       "i": 6026
      }
     ],
     "text": "Man sagt in dieser Rücksicht ganz richtig von ihm, daß seine Handlungen dem determinismus unterworfen sind, denn, da er nicht handlen kann, ohne zur Handlung durch einen Grund bestimmt zu sein, so ist hier nur die Voraussetzung, daß er sich selbst zur Handlung determinirt, nicht aber durch eine vorher bestimmende Zeit, d. i. durch das Gesetz der Causalitaet zur Handlung praedeterminirt ist. Diese Verwechselung der Begriffe machte es, daß der Begriff von Freiheit die vera crux philosophorum wurde. Wie soll man es vereinigen, daß der Mensch dem Gesetz der Natur Nothwendigkeit unterworfen und insofern durch eine vorher bestimmende Zeit als Ursache schon zu seinen Handlungen als Wirkungen praedeterminirt ist, und daß der Mensch dem ohnerachtet frei handeln soll können ? Freilich, als Natur Wesen steht er allein unterm praedeterminismo, und sollte also die Willkühr des Menschen blos in der vorigen Zeit bestimmt angenommen werden können, so wäre gar keine Freiheit möglich: aber darf man in dem Menschen ein Noumenon voraussetzen, darf man daher annehmen, daß die Handlungen aus unabhängigen Bestimmungen der Kräfte dieses Wesens in ihm fließen; so ist der Begriff der Freiheit ohne Widerspruch denkbar und möglich. Die realitaet hievon ist freilich zu erweisen unmöglich, da es ein reiner Vernunft Begriff a priori ist, der sich durch die moralischen Handlungen, die vermöge der Vernunft Bestimmung ausgeübt werden und welche das einzige sind, wodurch er sich in der Erscheinung offenbart, nicht begründen läßt. Gesetzt z.E. der Zeuge stellt sich bey Ablegung seines Zeugnisses die Wichtigkeit seiner Pflicht, die Wahrheit zu reden, und seine Handlungen gesetzmäßig darnach einzurichten, ohne alle andern Neben Bewegungs Gründe vor, und er handelte ohne concurrenz irgend einer Natur PTrsache; so bewiese dies doch bey ihm nichts weiter, als die existenz des Bewußtseyns des moralischen Gesetzes, welches ihm gebiethet, mit Übergehung aller Natur Ursachen, das Gesetz zu befolgen. Aus diesem Beispiel ergiebt sich zugleich, daß in uns ein Bewußtse}rn von einem moralischen Gesetz vorhanden sey, wodurch wir zur Handlung genöthigt werden, indem es uns absolute gebiethet, und vermöge der existenz dieses Gesetzes können wir auf die Ereiheit unserer Handlungen schließen, daß wir pflichtig sind, oder genöthigt werden, mit jeder sinnlichen Aufopferung, dem Gesetz gemäß zu handeln. Ganz unrichtig ist indeß die Idee einiger Philosophen (z.E. Rehberg) hiebei, als könne man sich gerade zu und unmittelbar der absoluten Spontaneitaet oder der Einwirkung der Gesetzes Freiheit bey unsern Handlungen bewußt werden, d. i. wir können erkennen, daß das Gesetz allein uns bestimme, und kein in dem Sinne vorkommender Bestimmungs Grund mit dabei verknüpft sey. Dies ist aber unmöglich, wir können wohl gewahr werden, daß sinnliche Antriebe bey der Bestimmung zur Pflichthandlung mit concurriren, aber daraus, daß wir uns ihres Daseyns in casu speciali nicht bewußt sind, können wir keinesweges schließen, daß sie auch gar nicht in uns vorhanden wären, und sich wirksam zeigten, denn, wie will man das Nicht-Daseyn derselben gewahr werden? Unmittelbar ist dies an sich unmöglich; da es kein Merckmal giebt, und, daß es nicht mittelbar statt findt, erhellt daraus: die Pflicht Handlung beruhet auf Nöthigung, in so weit die sinnliche afficirung concurrirt, ohne Nöthigung ist keine freie Willkühr denkbar; wie läßt sich nun erkennen, ob die Bestimmung zur Handlung in den sinnlichen Antrieben oder in der spontaneitaet allein, oder in beyden ihren Grund habe? Z.E. man läßt jemandem die Wahl zwischen 2 Dingen, die an sich ganz gleich sind ? Es ist falsch, daß man versichert, er könne hiebei nicht anders als durch selbst freie Bestimmung seiner Vernunft ohne Concurrenz aller Natur-Ursachen wählen: man kann annehmen, daß er gewiß vorher oft und vielfältig beyde Dinge besieht, es sey aus Mistrauen, oder, weil er einen Vorzug bey einem erwartet, endlich nach fruchtlosem Bemühn übermannt ihn die Ungeduld und er greift zu : ist das letztere nicht ein Bestimmungs Grund, der in seine Vernunft einfließt, damit diese endlich entscheide, wozu sie ihn auffordert? So ist es unentschieden, ob der Zeuge mehr aus Gefühl seines moralischen Gewißens, oder aus Klugheits Regeln sich zur deposition der Wahrheit bestimmt. Man kann also die Freiheit, und daß diese die Bestimmungs Gründe unserer moralischen Handlungen gebiethet, nicht gewahr werden, sondern muß darauf nur aus dem Bewußtseyn der Gesetze der Vernunft auf die existenz derselben schließen. Daraus folgt, daß wir die Gestze der Moral zwar a priori, aber als dogmatisch praktische Gesetze erkennen, zum Unterschiede von den dogmatisch theoretischen Sätzen a priori, die wir nur von Gegenständen möglicher Erfahrung haben können. Diese rnoralische Gesetze sind es nun auch, was eigentlich dem Menschen als Noumenon zukommt, und den Charakter des letztem ausmacht; als welches sich als das subjective princip der Gesetzgebung im Menschen darstellt. Es ist dies uns unbekannte Wesen in uns der erhabenste Gedanke , der sehr fruchtreich an Folgerungen für unsere moralische existenz ist. Man ündt dabei, daß alle diese Gesetze plan und klar in uns gelegt sind, und daß es so wenig auffällt, sie befolgt zu sehen, daß man sich vielmehr wundern muß, daß sie so oft nicht befolgt werden; daß jeder gemeine Menschen Verstand, auf ihren Grund sogleich über die Rechtmäßigkeit der Handlungen entscheidet, und daß wir allein nur jeden Fall der Übertretung selbst verschulden. Wenn man nun in der Prüfung dieses in uns herrschenden Wesens zwar findet, daß es über unsre ganze sinnliche Natur gebiethet, mithin selbst etwas übersinnliches seyn muß, wenn uns nun deßen eigentliche Natur und Beschaffenheit unbekannt bleibt, so versetzt uns dieser Umstand in tiefe Bewunderung : wir wißen nicht, ist in uns ein schaffendes Wesen, das uns diese Gesetze als Wirkungen vorstellt, oder besitzen wir dies schaffende Vermögen? Kurz, was in uns wirkt, können wir nicht erklären. Indeß sind seine Wirkungen über die sinnliche Natur erstaunend. Gegen seine Gebothe ist nichts zu thun. Qual und körperliche Leiden, ja selbst den Tod zu leiden, wiegt es nicht auf : Phalaris licet compert, sagt Juvenal, und andere Dichter theilen ihm die erhabensten Eigenschaften zu. Aber eben diese tiefe Bewunderung über die erhabenen Eigenschaften eines in uns vorhandenen uns unbekannten Wesens ist es eben, was deßen Vortrefflichkeit ausmacht und für Religion und Unterricht ganz vorzüglich genutzt werden sollte.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 30,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s08-029",
     "kind": "text",
     "aa": 1024,
     "text": "§70. Die Betrachtung über die Sinnlichkeit des Menschen zeigt einen merkwürdigen Unterschied in Ansehung des arbitrio und besonders der Moralitaet des Menschen, nemlich zwischen der Vor-Stellung von einer Sinnlichkeit, so blos sinnliches Gefühl einschließt, oder so intellectuelles Gefühl darbiethet, wodurch die Verschiedenheit in Bestimmungs Gründen zu unsern moralischen Handlungen entstehen.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s08-030",
     "kind": "text",
     "aa": 1024,
     "ms": [
      {
       "p": 163,
       "i": 0
      }
     ],
     "text": "Nemlich die Sinnlichkeit afficirt entweder allein unser sinnliches Gefühl, oder zugleich mit demselben unser Begehrungs Vermögen. Im letztem Fall wird es zugleich Bestimmungs Grund unserer Handlungen, im erstem nicht, indem die VVillkühr ohne vorherige Bestimmung des Begehrungs Vermögens nicht zur Handlung gebracht werden kann. Daher distinguirt sich",
     "dehyphenated": 3,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s08-031",
     "kind": "text",
     "aa": 1024,
     "ms": [
      {
       "p": 164,
       "i": 554
      }
     ],
     "text": "a) die sinnliche Lust und Unlust (oder sinnliches Gefühl), d. i. wenn die hervorgebrachte Vorstellung oder die Handlung selbst ihren Grund in einem, durch die Lust oder Lnlust bestimmten, Begehrungs Vermögen hatte. Daher jeder außer mir befindliche Umstand, jedes Vergnügen oder Schmerz, Vortheile oder Vorstellungen von Glückseligkeit, wenn diese in der Art der Grund der Handlung oder Vorstellung werden, daß das Gefühl der Lust oder Unlust an der Vorstellung dem Begehrungs Vermögen vorhergeht, und darauf als Bestimmungs Grund wirkt, so ist die Lust und Unlust, die zugleich Bestimmungs Grund des Begehrungs Vermögens ist, sinn -hohes Gefühl; die jederzeit empirisch ist, und in der Art das Begehrungs Vermögen bestimmt, oder",
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s08-032",
     "kind": "text",
     "aa": 1024,
     "ms": [
      {
       "p": null,
       "i": 588,
       "raw": "",
       "unresolved": true
      }
     ],
     "text": "b) intellectuelles Gefühl, d. i. insofern die Vorstellung des Gesetzes vorhergeht und aus der, auf das Begehrungs Vermögen gewirkten Bestimmung des Gefühls der Lust und Unlust erst entspringt. Der Bestimmungs Grund liegt hier im Gesetz und deßen Bewußtseyn, die Vernunft bestimmt ihm gemäß die Willkühr, und daraus folgt die Lust an meiner Vorstellung oder Handlung, indem dei Anspruch der ’\\ ernunft durch meine Befolgung seiner Vorschrift befriedigt wird, und daher unausbleiblich eine innre Seelenlust gebiert. Diese Lust ist rational, die ihre Quelle allemal in den moralischen Bestimmungs {bricht ab)",
     "dehyphenated": 4,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s08-033",
     "kind": "text",
     "aa": 1025,
     "ms": [
      {
       "p": 165,
       "i": 0
      }
     ],
     "text": "Zuvörderst muß a) wider die Materialisten behauptet werden, daß die Seele so wenig an und vor sich materiell sein, noch ein einfacher Theil der Materie sein könne. Die Seele ist vielmehr ein einfaches Wesen (im negativen Begriff); daher auch: die Seele ist immateriell und unkörperlich. Materie heißt hier nämlich nicht nur was selbst durchweg Materie ist, sondern was auch nur ein Theil einer Materie sein kann, also ein ausgedehntes undurchdringliches Wesen.",
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s08-034",
     "kind": "text",
     "aa": 1025,
     "aaEnd": 1026,
     "pages": [
      {
       "p": 1026,
       "i": 2121
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 502,
       "raw": "165",
       "unresolved": true
      },
      {
       "p": 166,
       "i": 1532
      }
     ],
     "text": "Zuvörderst kann sie aber nicht einfach und dennoch ein Theil der Materie sein. Denn als (auch einfacher) Theil der Materie muß sie mit der letzteren einen Raum einnehmen; der Raum aber besteht wieder aus Räumen, mithin hätte dies Einfache wieder Theile; jeder Theil der Materie ist aber wieder Materie, mithin muß die Seele vel materiell (ganz) oder immateriell (für sich) sein. Eine Materie cogitans aber anzunehmen ist etwas Unmögliches; vielmehr ist die Seele einfach und in keinem Falle zusammen gesetzt. Diese Einfachheit beruht auf der Einheit des Bewußtseyns im Denken oder der Einheit des Mannigfaltigen in der Vorstellung überhaupt. Alle Vorstellungen beziehen sich auf ein Object, vermöge der Bestimmung im Gemüth, vermöge deren wir überhaupt uns nur etwas vorzustellen fähig sind. Der Gegenstand muß aber schlechthin eine Einheit seyn,wozu dasBewußtseyn des Mannigfaltigen verbunden ist, denn sonst müßte der Satz z. E. a. didicisse b. fideliter c. artes d. mollit f. mores usw. so in seinem Ganzen gedacht werden können, daß verschiedene Kräfte: a. b. c. d. e. f. usw. sich jede einen Begriff dächte, und sich dennoch gemeinschaftlich des ganzen Satzes bewußt seyn könnten. — Es kann also, da dies unmöglich ist, keine Vorstellung eines Objects entstehen, ohne daß eine absolute Einheit des sich vorstellenden subjects vorhanden sey, und es ist unmöglich, durch eine körperliche Theilbarkeit das Bewußtseyn der Vorstellung entstehen zu laßen, gleichsam als wenn verschiedene subjecte da wären, die die Vorstellung unter sich vertheilten, weil es dann unmöglich wäre, daß diese Theile, die nur jedem subject für sich bekannt wären, ohne ein Zwischen Mittel zu einem Ganzen, d. i. zur Einheit verbunden werden könnten. Nimmt man nun an, daß die Materia cogitans ein aggregat von substanzen sey, so müßte auch die ihm beygelegte Vorstellung ein aggregat von Vorstellungen, nemlich ihrer Theile, enthalten, die von einander abgesondert wären, wobei von einem Theil dieser eine Theil begriffen, von dem andern ein anderer gedacht würde, und wobei eine Einheit nicht zu erreichen wäre. Damit sie doch aber zu einem Ganzen gebracht würde, so bleibt immer nöthig, ein vereinigendes subject anzunehmen, welches alle diese Theile wieder unter sich und mit einander verbindet. Es kann also dem denkenden subject nicht eine zusammengesetzte Vorstellung, sondern nur eine einfache Vorstellung beygelegt werden: d. i. es verbindet die Vorstellung zu einem einfachen princip oder ist einfach.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 11,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s08-035",
     "kind": "text",
     "aa": 1026,
     "ms": [
      {
       "p": 167,
       "i": 37
      }
     ],
     "text": "Hiedurch ist nun zwar wohl bewiesen, daß das subject denken könne, ohne daß sein princip körperlich sey, die Materialisten sind widerlegt, es folgt aber daraus",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s08-036",
     "kind": "text",
     "aa": 1026,
     "text": "b) noch nicht, daß die Seele denken könne, ohne mit dem Körper verbunden zu seyn, und dies ist es, was die pneumatologie lehrt, deßen Möglichkeit aber nie bewiesen werden kann.",
     "dehyphenated": 1,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s08-037",
     "kind": "text",
     "aa": 1026,
     "ms": [
      {
       "p": 168,
       "i": 645
      }
     ],
     "text": "Wir sind außerstande, die caussalitaet eines solchen für sich bestehenden princips zu erforschen, die Wirkungen und deren Beschaffenheit zu bestimmen, die von ihm als Ursach entstehen könnten, und wißen also a priori nicht, ob ein solches denkendes princip, abgesondert vom Körper, vorhanden sey. Wir könnten es nicht anders als empirisch dadurch erfahren, daß wir eine vom Körper abgesonderte Seele betrachteten. Dies geht nun aber im Leben wegen der Verbindung mit dem Körper nicht an und außer diesem Zustande werden wir von der Seele nichts gewahr, und was die Seele nach dem Tode seyn werde, ist uns ebenso unmöglich aus gleichem Grunde zu wißen: mithin, da wir durch die Erfahrung keinen Gegenstand der Vorstellung hiebei erhalten können, so ist es auch unmöglich, zur Pneumatologie zu gelangen, und ob es irgend einen Geist, selbst einen Gott, im universo gebe, je zu erkennen.",
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s08-038",
     "kind": "text",
     "aa": 1026,
     "aaEnd": 1027,
     "pages": [
      {
       "p": 1027,
       "i": 771
      }
     ],
     "ms": [
      {
       "p": 169,
       "i": 693
      }
     ],
     "text": "Wir wißen nichts weiter, als daß die Seele eine immaterielle Substanz sey, und daß sie nicht als das praedicat eines andern Wesens erkannt werden kann, weil ich ein compositum aus vielen Substanzen nicht denken kann, vielmehr dazu die Einheit des subjects schlechthin vorausgesetzt wird, mithin der Materialismus sich in der Idee contradicirt, und sich daraus nichts erklären läßt; ob aber die Seele ein (spiritus) Geist sey, als ein denkendes Wesen, wie der Autor § 742 meint, folgt aus dem letztem Begriff nicht. Die Thiere haben auch Seelen, die deshalb nicht Geister sind. Geister sind specifice denkende immaterielle Substanzen, so auch ohne Verbindüng mit dem Materiellen denken können, im Fall nur der Körper ein unentbehrliches adminiculum und eine Bedingung zum Denken der Seele wäre, so würde sie als Seele, nicht aber als Geist existiren, da erstere, aber nicht letzterer, in einer nothwendigen Verknüpfung mit dem Körper steht, um actus der Substanz zu bewirken.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s08-039",
     "kind": "text",
     "aa": 1027,
     "text": "§ 82. Im Fall man sich nun dies immaterielle Wesen im Körper, was wir Seele nennen, in Verhältniß gegen die Materie betrachtet, so hat man sich bemühet, den Sitz der Seele, oder den Ort aufzufinden, wo das sensorium commune befindlich sey, d. i. theils den Ort wo die Seele alle Eindrücke von Gegenständen, d. i. die Empfindung davon erhält, theils den dieser Empfindung correspondirenden Ort, der das primum movens des Thiers genannt werden kann, d. i. von dem der ganze Körper in Bewegung gebracht werden kann.",
     "dehyphenated": 4,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s08-040",
     "kind": "text",
     "aa": 1027,
     "ms": [
      {
       "p": 170,
       "i": 136,
       "raw": "",
       "inferred": true
      }
     ],
     "text": "Man nennt diese Fähigkeit der Seele die facultatem locomotivam zum Unterschiede von der facultate cogitandi; beyde Vermögen, nemlich zu empfinden und Bewegung mitzutheilen, setzt man im sensorio communi, von welchem sie beyderseits ausgehen sollen.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-041",
     "kind": "text",
     "aa": 1027,
     "ms": [
      {
       "p": 171,
       "i": 845,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "Einige haben nun die glandulam pinealem, die Zirbeldrüse, als den Ort des sensorii communis angenommen. Es giebt nemlich nur einen isolirten Nerv im menschlichen Gehirn, die Zirbeldrüse, welche in der Mitte des Gehirns liegt, wo zunächst die Spitzen der zum Gehirn gehenden Nerven anstoßen, auf welche von der Seele zurückge wirkt wird, wenn der Körper bewegt werden soll. Im ganzen Körper ist nur eine solche Drüse, und da die Einfachheit der Seele nicht erlaubt, ihr mehr als einen Ort zu gestatten, so hat man diesen Nerv als den gemeinschaftlichen Sitz angenommen, vorzüglich war dies die Meinung des Cartesius. Es ist indeß an sich noch immer möglich, daß es noch in andern Theilen des Körpers noch andere lebende principien geben könne, die nicht Seele oder oberstes princip aller sind, und dann hat man in neuern Zeiten entdeckt, daß die Zirbeldrüse die mehreste Male mit Sand angefüllt sey.",
     "dehyphenated": 3,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s08-042",
     "kind": "text",
     "aa": 1027,
     "text": "Andere, besonders Bonnet, haben daher die Gehirnschwiele, d. i. das corpus callosum, für das sensorium commune ausgegeben, wo dahin die Empfindung, oder daraus die Bewegung hervordringen solle. Betrachtet man aber die Frage, ob die Seele sich selbst wahrnehme und den Ort ihres Aufenthaltes im Körper bestimmen könne? metaphysisch, so muß die Auflösung für unmöglich erklärt werden.",
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s08-043",
     "kind": "text",
     "aa": 1027,
     "aaEnd": 1029,
     "pages": [
      {
       "p": 1028,
       "i": 121
      },
      {
       "p": 1029,
       "i": 2636
      }
     ],
     "ms": [
      {
       "p": 172,
       "i": 454
      },
      {
       "p": 173,
       "i": 1442
      },
      {
       "p": 174,
       "i": 2476
      },
      {
       "p": 175,
       "i": 3612
      }
     ],
     "text": "Einem immateriellen Wesen kann nirgends im Raum ein Oit angewiesen werden, weil das, was object im Raum ist, schlechthin Materie seyn muß, wenn ihm nicht alle Verhältniße einer localen Gegenwart fehlen sollen. Man kann der Seele daher nur ein dynamisches Verhältniß, eine Virtualitaet, gegen den Körper beylegen, und nur vermöge dieses nexus dynamici steht sie mit ihm in Verbindung, und bringt die Veränderungen deßelben durch die und nach der erregten Empfindung hervor, aber wie dies zugehe, ist nicht zu bestimmen. Denn man kann nie erst den Ort denken, von wo aus die Seele auf den Körper wirkt, sondern man muß erst die Empfindung denken, und dann mit dem Ort dasjenige, was unmittelbar die Empfindung hervorbringt. Überhaupt, was Object des äußern Sinnes ist, läßt sich mit dem Object des innern Sinnes in keinem Verhältniß denken; die Seele ist sich zwar der Objecte des äußern Sinnes bewußt, aber so wenig sie in der Seele vorhanden sind, so wenig bestimmt ihr Einfluß auf die Seele den Ort, wo sie hervorgebracht werden. Es ist sowohl, die Seele äußerlich wahrzunehmen unmöglich, als auch nicht möglich, den Ort einer andern Seele wahrzunehmen. Ebenso wenig kann die Seele selbst ihren Ort unmittelbar im Körper bestimmen, auch nicht in der Welt unmittelbar; denn sie kann sich nicht als Object eines äußern Sinnes gewahr werden. Sie müßte dazu äußere Dinge in ihrem Verhältniß zur Seele bestimmen und müßte ihre Gegenwart dem Orte nach wahrnehmen, mithin also sich selbst durch ihren äußern Sinn gewahr werden. Sich aber selbst wahrzunehmen, gehört zum innern Sinn, sich durch den Ort wahrzunehmen, gehört zum äußern Sinn. Also müßte sie sich als Object des innern Sinnes zugleich durch den äußern Sinn wahrnehmen: beyde Sinne haben aber ganz und gar kein Verhältniß, das local wäre. — Die Seele kann sich also alles dessen nicht bewußt werden, weil ihr eine äußere Wahrnehmung von sich selbst mangelt, und sie sich, außer sich, und ihre Verhältniße zu sich selbst, nicht gewahr werden kann, also kann die Seele den Ort nicht bestimmen. Nun frägt sich, wie man es denn verstehen soll, wenn man eine wirkliche Wahrnehmung der Seele behauptet? Die Gemeinschaft der Seele mit dem Körper läßt sich gar nicht denken, sobald bey beyden das, was phaenomenon ist, genommen wird: wie läßt sich auch z. E. in Ansehung der Lust und Unlust, in Ansehung der Einbildungskraft, etwas körperliches bemerkbar machen? Soll der Mensch Vor-Stellungen von äußern Gegenständen haben, so bilden sie sich doch nicht in ihm, gleichsam als im Raum eingeschloßen, ab. Er erkennt die Objecte nicht in materieller Figur, d. i. es fließt nicht die äußere Materie in die Seele über. Aber ein etwas unbekanntes, so nicht Erscheinung ist, ist es, was auf die Seele einfließt, und so erhalten wir eine homogeneitaet in uns mit den Dingen. Hierin liegt die Vorstellung, die ihm nicht das phaenomen selbst des Körpers, sondern das substratum der Materie, das Noumenon in uns erzeugt; sie sondert dies vom Object ab, das noumenon im Körper steht mit jenem noumeno der Seele in Übereinstimmung, und diese Einheit ist der Bestimmungs Grund von beyden, sich das Object vorzustellen, und hierauf beruhet das commercium corporis et animae. So muß man sich auch den angenommenen influxum physicum erklären. Zuförderst muß man ihn sich real denken, d. i. daß die Substanzen außer einander was durch ihre existenz (mithin außerhalb dem Raume, denn im Raume hat der influxus kein bedenken) auf einander in Einfluß seyn können; indeß, materiell diesen influxus zwischen Seele und Körper von einander gedacht, und doch so, daß beyde außer sich, und jede für sich wären, ist etwas an sich unmögliches : und nimt man ihn ideal an, so wäre dies nichts als die harmonia praestabilita, und würde nicht mehr influxus seyn. Er muß also als immaterielle Wirkung des noumenon von beyden gedacht werden, wornach denn dies nichts weiter heißt, als daß etwas auf die Seele einfließt, und dann bleibt keine heterogeneitaet übrig, die hier Zweifel machen könnte, indem sich über die Beschaffenheit dieser Einwirkung nichts weiter sagen läßt. Man kann also nur sagen, die Seele sey mit dem Körper in Verbindung, und wo der Körper ist, da ist die Seele, aber im Körper kann man der Seele keinen Platz anweisen.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 14,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s08-044",
     "kind": "text",
     "aa": 1029,
     "aaEnd": 1030,
     "pages": [
      {
       "p": 1030,
       "i": 832
      }
     ],
     "ms": [
      {
       "p": 176,
       "i": 476
      }
     ],
     "text": "Man sagt ferner dagegen : das Gehirn fühle das Denken. Es ist wahr, daß die Nerven dasjenige Werkzeug sind, wo die Seele nach ihrem deportement durch erregte Reitze ihre Einwirkung exercirt, und daß umgekehrt die Gefühle durch die Nerven auf die Seele fortgepflanzt werden. Virtualiter kann man annehmen, daß die Seele im Gehirn sey, aber localiter läßt sich das nicht hieraus folgern. Anima est tota in toto corpore et tota in quavis parte, sagten vielmehr die Alten. Aber annehmen, daß sie ganz und ungetheilt, aber auch an zwey besondern Orten seyn könne, ist nicht möglich, weil es sonst auch möglich seyn würde, daß sie auch außer mir selbst seyn könnte, und ich mich dann als ein Gegenstand außer mir betrachten würde, welches unmöglich. Wir erkennen blos die Wirkung von dem wechselseitigen Einfluß der Seele auf den Körper, z.E. wir fühlen einen Schmerz, deßen Einwirkung vom Finger herkommt, und redueiren ihn zuletzt auf den Finger. Wie aber hier sensibilitaet und locomotivitaet in ihren Wirckungen Zusammenhängen, oder die Art der Wirckung zu bestimmen, ist so wenig möglich als den Ort der zurückwirkenden Seele zu bestimmen. Die Seele hat keinen bestimmten Ort oder local Verhältniß zum Körper; denn dies wäre ein mathematisches Verhältniß, welches wir schlechthin nicht begreifen, sondern uns nur von dem dynamischen Verhältniß der Seele einen Begriff machen können.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s08-045",
     "kind": "text",
     "aa": 1030,
     "ms": [
      {
       "p": 177,
       "i": 122
      }
     ],
     "text": "§ 83. Der Gegenstand ad b. der Psychologia rationalis: was neralich die Seele vor der Geburt h des Menschen war, oder die Frage de origine animae, so theilen sich die Menschen dahin,",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s08-046",
     "kind": "text",
     "aa": 1030,
     "text": "1. ) daß man sie per ortum physicum entweder als educt oder als product von einer altern Seele entstehen läßt, oder",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s08-047",
     "kind": "text",
     "aa": 1030,
     "text": "2. ) daß man sie als bey der Geburth von Gott erschaffen vorstellt, welches man den ortum hyperphysicum nennt. Das letztere ist das System der Creationen, das System der Schöpfung, wo die Seele als product der Eltern angenommen wird; und den Eltern eine Schöpfungskraft beygelegt wird, zu dem man aber, so lange als man mit dem orto physico auslangen könnte, seine Zuflucht nicht nehmen sollte.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-048",
     "kind": "text",
     "aa": 1030,
     "text": "Der ortus physicus giebt dagegen zwey Systeme zu erkennen, nemlich",
     "dehyphenated": 1,
     "ocrConf": 75
    },
    {
     "id": "metaphysik-k3-s08-049",
     "kind": "text",
     "aa": 1030,
     "ms": [
      {
       "p": 178,
       "i": 611
      }
     ],
     "text": "a.) man nimmt die Seele als ein educt an, d. i. daß die menschliche Seele oder das belebende princip, das Thier, vor seiner Geburth schon (vielleicht als rohe Substanz, die ohnbelebt war) im Körper vorhanden war, und nun durch die Kräfte der Natur zum Leben gebracht wurde. Dies ist das System a praeexistentiae, indem sie doch schon vorher im Körper der Eltern existirt haben mußte; bzw. insofern sie frei im Körper existire, und aus diesem in die Nachkommen übertragen werde, oder wenn sie als Keim der Seele in der Seele der Eltern gelegen, und als Theil derselben abgesondert aus derselben herausgehe. Dies letztere ist das systema per traducem, welches jedoch auch das erstere unter sich begreift, da sie immer aus dem Körper der Eltern komme, wohinein die Keime auch aus der Luft usw. durch Nahrung gekommen seyn konnten.",
     "dehyphenated": 2,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-050",
     "kind": "text",
     "aa": 1030,
     "aaEnd": 1031,
     "pages": [
      {
       "p": 1031,
       "i": 191
      }
     ],
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "177",
       "unresolved": true
      },
      {
       "p": null,
       "i": 107,
       "raw": "178",
       "unresolved": true
      }
     ],
     "text": "b.) oder man nimmt sie als educt, jedoch in der Art an, daß sie durch die Mischung mit andern Materien von den Eltern hervorgebracht und also aus der Seele der Eltern hervorgegangen, wo also Eltern Seelen Kinder Seelen gebähren. Dies letztere ist nun offenbar der Einfachheit der Seelen Substanz entgegen, weil hier vorausgesetzt würde, daß die Eltern Seelen zusammengesetzt seyn müßten, um ihre Kinder Seelen als Theile abzugeben.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 3,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s08-051",
     "kind": "text",
     "aa": 1031,
     "text": "Im Grunde sind diese Systeme, insofern sie auf den ortum physicum Rücksicht nehmen, nach der Analogie der thierischen Erzeugung der Menschen geformt, und gedacht, wo gleichfalls die verschiedenen Systeme darauf hinausgehen",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s08-052",
     "kind": "text",
     "aa": 1031,
     "ms": [
      {
       "p": 179,
       "i": 514
      }
     ],
     "text": "1. ) auf das Systema praeformationis, wornach entweder wie Leeuvenhoeck nach seiner theoria involutionis (das Einschachtelungssystem) annahm, daß im ganzen Thier- und Pflanzenreich von der Schöpfung für jede Art im Saamen derselben schon der Keim für alle künftigen generationen so gelegt wäre, daß ein Keim in dem andern als tote Materie gelegt wäre, und nur einzeln belebt würde. Daher die animalcula spermatica der Thiere: oder wie andere annehmen, daß die Vorsehung die einzelnen Keime, frey liegend und neben einander, vorher geschaffen hätte, z.E. wenn sie in der Luft schweben, frey im Körper sind, und aus diesem educirt werden.",
     "dehyphenated": 1,
     "ocrConf": 85
    }
   ]
  },
  {
   "id": "s09",
   "title": "Das systema praeexistentiae liberae",
   "titleSrc": "heading",
   "headings": [
    "Das systema praeexistentiae liberae"
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s09-001",
     "kind": "heading",
     "aa": 1031,
     "text": "Das systema praeexistentiae liberae"
    },
    {
     "id": "metaphysik-k3-s09-002",
     "kind": "text",
     "aa": 1031,
     "text": "Man hat dies System jetzt ziemlich allgemein verworfen, weil, um eine Art zu erhalten, in jedem individuum eine unendliche Summe von Keimen angenommen, und mit der consumtion eines Saamenkernes gleich millionen verlohren gehn müßten, diese unnütze Aufopferung aber gar nicht dem Zweck der Natur gemäß veranstaltet seyn würde.",
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s09-003",
     "kind": "text",
     "aa": 1031,
     "text": "2. ) Daher das Systema epigenesis jetzt ziemlich angenommen ist, nach welchem die Eltern die hervorbringende Ursache der Zeugung sind, und das junge Thier also aus der Vermischung beyderley Geschlechts als product entsteht. Dies ist wahrscheinlicher, was schon die Paarung verwandter Arten, z.E. Esel und Pferd, schwarzer und weißer Menschen, die Ähnlichkeiten der Abarten, in den Mauleseln und Mulatten usw. usw. zeigen, und so auch die erzeugte Bastardtpflanzen durch verwandten Blumenstaub.",
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s09-004",
     "kind": "text",
     "aa": 1031,
     "aaEnd": 1032,
     "pages": [
      {
       "p": 1032,
       "i": 252
      }
     ],
     "ms": [
      {
       "p": 180,
       "i": 214
      }
     ],
     "text": "Will man diese theorien nun auf die Entstehung einer unendliehen Seele anwenden, so zeigt sich, daß, als educt angenommen, das systema propagationis per traducem vel praeexistentiae richtig seyn müßte, indeß müßte man auch voraussetzen, daß die Seelen der Kinder und deren Nachkommen im Körper der Eltern vorhanden wären, dann wären aber die Elternseelen zusammengesetzt, welches unmöglich ist. Und, als product nach Ähnlichkeit der epigenesis, würde man den Eltern eine Zeugungskraft der Seele zugestehen mäßen ; dann könnte aber die Seele nicht vorher als accidens im Körper der Eltern gewesen seyn. Denn die Seele ist Substanz und kann also als einfache Substanz nicht zugleich als accidens existirt haben, mithin müßten die Eltern eine Schöpfung vorgenommen haben, und darin die Zeugung bestehen, dies wäre also productio ex nihilo, wozu Schöpfungskraft gehört. Nun kann aber diese bey keinem Wesen gedacht werden, was selbst erschaffen ist, es kann die Form und Gestalt des Erschaffenen wohl verändern, trennen, verbinden, aber nichts neues hervorbringen: dazu kann das Vermögen nur allein bey dem Urwesen aller Geschöpfe seyn.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s09-005",
     "kind": "text",
     "aa": 1032,
     "ms": [
      {
       "p": 181,
       "i": 76
      }
     ],
     "text": "Man könnte also schließen, da die Seele weder educt noch product seyn kann, also weder systema per traducem noch creationis statt findet, so muß die Seele als ein einfaches Wesen praeformirt seyn, aber eigentlich haben wir davon keine eigentliche Vorstellung, was es mit dem Ursprünge der Seele für eine Bewandtniß habe.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s09-006",
     "kind": "text",
     "aa": 1032,
     "text": "Man könnte auch als hypothese behaupten, daß vielleicht das noumenon, das substratum materiae, was allen Erscheinungen der Materialien zum Grunde liegt, außerdem daß es sich als Körper äußert, auch zugleich eine andere Erscheinung hervorbringe, was wir Seele nennen, d. i. daß dieses substratum materiae auch zugleich die Stelle der Seele vertrete, ohne freilich eine Seele erzeugen zu können.",
     "dehyphenated": 2,
     "ocrConf": 83
    }
   ]
  },
  {
   "id": "s10",
   "title": "§ 84. Die Einheit der Monaden.",
   "titleSrc": "heading",
   "headings": [
    "§ 84. Die Einheit der Monaden."
   ],
   "provenance": "Metaphysik Arnoldt Bemerkungen über Metaphysic nach Baumgarten aus dein Vortrage des Herrn Prof. Kant pro 1794/95",
   "blocks": [
    {
     "id": "metaphysik-k3-s10-001",
     "kind": "heading",
     "aa": 1032,
     "text": "§ 84. Die Einheit der Monaden."
    },
    {
     "id": "metaphysik-k3-s10-002",
     "kind": "text",
     "aa": 1032,
     "text": "Leibnitz, nach ihm Wolf und andere, nahmen an, daß alle Materie ein Aggregat von Monaden sey, und diese an sich einfache Substanzen, welche Sätze schon oben dahin verneint worden sind, daß es unmöglich ist, daß Materie aus einfachen Theilen bestehen könne, vielmehr in infinitum theilbar, mithin Materie bleibe.",
     "ocrConf": 88
    },
    {
     "id": "metaphysik-k3-s10-003",
     "kind": "text",
     "aa": 1032,
     "ms": [
      {
       "p": 182,
       "i": 103
      }
     ],
     "text": "Äußerlich nun sollten diese Einheiten alle die Verhältniße haben, welche den Dingen im Raum in ihrer Zusammensetzung zukommen, mithin zugleich composita und als solche Berührung, Bewegung usw. componirter Substanzen haben.",
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s10-004",
     "kind": "text",
     "aa": 1032,
     "aaEnd": 1033,
     "pages": [
      {
       "p": 1033,
       "i": 120
      }
     ],
     "ms": [
      {
       "p": 183,
       "i": 962
      },
      {
       "p": 184,
       "i": 2144
      }
     ],
     "text": "Vornemlich aber legte Leibnitz den Monaden eine vis repraesentativa bei, und einer jeden Monade als ihr einziges substantiale die Vorstellungskraft. An sich, da wir außer Stande sind, das innere an andern Dingen zu beobachten, und nur uns selbst beobachten können, alsdann aber nichts gewahr werden, als daß wir Vorstellungen haben, so war es insofern richtig geschloßen, daß die innern Kräfte der Monaden in der Vorstellungskraft und den Folgen der Vorstellung von Lust = Begehrung beständen; indeß ist Substanz und Kraft nicht gleichbedeutend, sondern die Substanz hat nur Kräfte, es ist gar keine nothwendige Folge, daß die Monade quoad substantiam keine andern Kräfte haben könnte, als die Vorstellungskraft, wir kennen sie nur nicht. Nun nahm Leibnitz ferner wegen des Commercii der Dinge in der Welt an, daß alle Monaden mit einander in Verknüpfung ständen, und jede Monade sich aller übrigen Monaden im universo bewußt sey. Er nannte dies das speculum universi, statuirte jedoch, daß wenn gleich alle Monaden leben und vim repraesentativam hätten, dennoch einige als sopita, d. i. schlummernd zu betrachten wären, d. i. entweder gar kein actuelles Bewußtseyn ihrer Vorstellungen oder wenigstens nicht ein Bewußtseyn von dem mannigfaltigen in den Dingen hätten, daher dann kein Erkenntniß sich machen könnten, weil sie außer Stande wären, Vorstellungen zu trennen, zu verbinden, zu vergleichen, und schied diese als bruta ab. Herr Kant nennt diese Abtheilung specula bruta in Verhältniß gegen die verständigen Spiegel, rationalia. Bey den letzteren statuirte er nun Grade und eine Progression von veribus repraesentativis nemlich obscuris, Claris, distinctis, und so in allen Graden bis zur höchsten Vollkommenheit Gottes fort. Es ist dieses eine Fortsetzung des Continuum formarum, so Bonnet ratione physicorum besonders aggregirte, wo er von den Mineralien zu den Schwämmen, Pilzen, Flechten, von hier zu den Gewächsen, von hier zu den Zoophyten, zu den Thieren, Menschen und endlich zu Gott überging, als der allen Ursprung der Dinge in sich faßte, und woher man nachher die emanation annahm. So nahm auch Leibnitz an, daß die Materie den Stoff für alle Seelen in sich enthalte, und baute nun alles bis zu den Stufen der Gottheit hin.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 6,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s10-005",
     "kind": "text",
     "aa": 1033,
     "text": "Es läßt sich zur Begründung dieser Hypothese des Leibnitz so wenig etwas sagen, als Bonnet vielmehr von Blumenbach schon sehr gut widerlegt ist.",
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s10-006",
     "kind": "text",
     "aa": 1033,
     "aaEnd": 1034,
     "pages": [
      {
       "p": 1034,
       "i": 203
      }
     ],
     "text": "§ 85. Nach dem bisher angeführten wissen wir also nichts über den Ursprung der Seele, und eben so, wenn wir auch das Leben der Seele, als immaterielle Substanz (und nicht praedicat einer andern Materie) und als erschaffen (nur nicht durch Zeugungskraft des Menschen und seiner Seele) annehmen, so ist es uns dennoch unmöglich, den Zustand des Lebens, ob es nemlich vita animalis vel spiritualis seyn könne, zu erfahren. Im Leben wißen wir nicht anders, als daß die Seele beym Dencken mit dem Körper in Verbindung sey, und gingen wir mit der Seele aus dem Körper hinaus, so ist es ebenso unmöglich von dem Zustande des denckenden Wesens, das alsdann seyn würde, oder wie es jetzt beschaffen ist, etwas zu erfahren.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s10-007",
     "kind": "text",
     "aa": 1034,
     "ms": [
      {
       "p": 185,
       "i": 69
      }
     ],
     "text": "Indeß scheint es sich doch behaupten zu laßen, daß man ein geistiges Leben, d. i. ein lebendes princip ohne Verbindung mit dem Körper, anehmen könne. Denn",
     "ocrConf": 87
    },
    {
     "id": "metaphysik-k3-s10-008",
     "kind": "text",
     "aa": 1034,
     "text": "a. ) Alle Materie ist leblos. Ein Satz, der zwar den belebten Monaden des Leibnitz widerspricht, den man aber darum annehmen muß, weil Materie seyn, heißt, zusammengesetzt seyn, leben aber, die Ursache der Vorstellung von der Wircklichkeit der Handlung zu seyn. Vorstellen erfordert ein denckendes princip ; ein compositum qua tale kann aber schlechthin nicht dencken, weil dies Mannigfaltige der Vorstellung zur Einheit des subjects vereint seyn muß : soll also ein lebendes princip zum Dencken vorhanden seyn, so muß es einfach seyn.",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s10-009",
     "kind": "text",
     "aa": 1034,
     "ms": [
      {
       "p": 186,
       "i": 396
      }
     ],
     "text": "b. ) Daraus kann man folgern, daß eine Absonderung des lebenden princips im subject von der Materie möglich sey, daß diese Absonderung das Leben so wenig hindere, daß vielmehr, da die Materie leblos ist, mithin nur allein das Dencken des lebenden princips erschweren und hindern kann, das Dencken durch die Absonderung erleichtert und befördert, und ein ungehindertes Leben hergestellt werde. Es würde hiernach also",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s10-010",
     "kind": "text",
     "aa": 1034,
     "text": "c. ) die Verbindung mit der Materie nicht der Grund des Lebens und dazu nothwendig seyn. Dagegen",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s10-011",
     "kind": "text",
     "aa": 1034,
     "text": "d. ) scheint diesem zwar entgegen zu seyn, daß der Körper ein adminiculum zum Dencken ist, wie man nach der Erfahrung annehmen muß; aber es fragt sich, ob es schlechthin nöthig sey, daß der Körper in Verbindung mit der Seele bleibe, um dencken zu können? Uns ist es unmöglich, die Wirkung zu denken, die jede abgesonderte Substanz (Körper und Seele) haben würde, wir nehmen in der Verbindung an, daß der Körper ein adminiculum so gut als ein Hinderniß in Ansehung des Denckens sey; indeß ließe sich doch noch annehmen, daß dem ohnerachtet in der Materie",
     "dehyphenated": 2,
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s10-012",
     "kind": "text",
     "aa": 1034,
     "aaEnd": 1035,
     "pages": [
      {
       "p": 1035,
       "i": 126
      }
     ],
     "text": "e. ) ein überwiegendes Hinderniß liege, welches nach der Absonderung wegfallen, und die Seele um so viel freier wirken würde. Nothwendig aber dürfte ihr die Verbindung mit dem Körper nicht seyn, weil die Materie, wie bemerkt, leblos ist, und das adminiculum sowie das Hinderniß, welches der Körper in Rücksicht der Seele wirkt, zufällig seyn kann. Indeß mit Gewißheit läßt sich auch über diese Frage nichts entscheiden.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s10-013",
     "kind": "text",
     "aa": 1035,
     "ms": [
      {
       "p": 187,
       "i": 126
      }
     ],
     "text": "§ 86. Was nun ad c, den dritten Abschnitt der Psychologia rationalis, betritt was nemlich die Seele nach dem Tode seyn werde, so beruhet alles auf der Frage, ob der Tod (Trennung der Seele und Körper) in einer Auflösung des ganzen Lebens des Menschen, nemlich der Seele und des Körpers, bestehen werde, oder ob das Leben des Menschen auch nach der Trennung vom Körper fortgesetzt werden könne? Zur Entscheidung deßen verdient nun der wesentliche Unterschied der theorien Rücksicht:",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s10-014",
     "kind": "text",
     "aa": 1035,
     "text": "a.) spem vitae futurae concernens",
     "ocrConf": 77
    },
    {
     "id": "metaphysik-k3-s10-015",
     "kind": "text",
     "aa": 1035,
     "text": "b.) de immortalitate animae.",
     "ocrConf": 89
    },
    {
     "id": "metaphysik-k3-s10-016",
     "kind": "text",
     "aa": 1035,
     "text": "Beyde setzen ein künftiges Leben voraus, nur die Immortalitaet involvirt die Annahme deßen, daß aus der Natur der Seele es als nothwendig angesehen wird, daß der Mensch gar nicht sterben könne, mithin ein künftiges Leben nach dem Tode auch nothwendig sey.",
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s10-017",
     "kind": "text",
     "aa": 1035,
     "text": "Von der Immortalitaet ist noch bey weitem die resurrection, ihrer Quelle nach, unterschieden: denn diese besteht darin, daß die Substanz des Menschen (nicht die Verbindung der accidenzien des Körpers mit der Erscheinung so wie der geistige Hauch) auch nach dem Tode zwar bleibe, aber die Belebung derselben lediglich von der göttlichen Willkühr abhänge, und also nur in Folge ihres Beschlußes der Körper mit der Seele wiedererweckt werde.",
     "dehyphenated": 2,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s10-018",
     "kind": "text",
     "aa": 1035,
     "aaEnd": 1036,
     "pages": [
      {
       "p": 1036,
       "i": 650
      }
     ],
     "ms": [
      {
       "p": 188,
       "i": 0
      },
      {
       "p": 189,
       "i": 1024
      }
     ],
     "text": "In Verhältniß der spei vitae futurae unterscheidet sich die immortalitaet gleichfalls als etwas, was nach der Ordnung = nach den Gesetzen der Natur der Seele, folgt. Aus moralischen Gründen nimmt man nämlich das künftige Leben an, um der allgemeinen Zweckmäßigkeit willen, die dann entweder in allgemeinen Natur Zwecken oder in göttlichen Zwecken ihren Grund hat, und hiernach wird der teleologie oder der theologie gemäß das künftige Leben betrachtet. Nun kann man aus der Zweckmäßigkeit in der Natur so wenig, als wenn es der göttlichen Absicht gemäß wäre, sagen, daß ein künftiges Leben seyn sollte, daß es Natur Gesetz der Seele sey, unsterblich zu seyn. Dazu würde gehören, daß die Natur der menschlichen Seele dies nothwendig machte, da die Unmöglichkeit zu sterben Unsterblichkeit ist, und es nur in der Natur der Seele als Bedingung liegen kann, nicht sterben zu können, wenn es nothwendig seyn soll, ein künftiges Leben anzunehmen. Dagegen kann die Bestimmung des göttlichen Willens zum künftigen Leben nur als eineübernatürliche Ursache der Unsterblichkeit angesehen werden. Mithin beruht auch immortalitaet und resurrection auf dem Unterschiede, entweder",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 84
    },
    {
     "id": "metaphysik-k3-s10-019",
     "kind": "text",
     "aa": 1036,
     "text": "a. ) daß das Leben der Seele nach dem Tode nach natürlichen Ursachen, d. i. nach der Beschaffenheit ihrer Natur, oder aus physiologischen Gründen gedacht und angenommen wird, oder",
     "dehyphenated": 1,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s10-020",
     "kind": "text",
     "aa": 1036,
     "text": "b. ) daß es aus übernatürlichen, d. i. hyperphysischen Ursachen angenommen wird. Im ersten Fall Unsterblichkeit, im letztem Resurrection. Leitet man es dagegen aus der Zweckmäßigkeit in der Natur, oder aus dem moralischen Zweck des höchsten Wesens her, so kann man auf keine Noth wendigkeit des künftigen Lebens schließen, sondern nur darauf, daß wir aus moralischen Gründen Ursache haben, ein künftiges Leben zu erwarten, welches spes vitae futurae quam maxime different von der immortalitate animae ist.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s10-021",
     "kind": "text",
     "aa": 1036,
     "text": "§ 87. Soll man nun ein Leben der Seele nach dem Tode annehmen können, so erfordert dies",
     "ocrConf": 88
    },
    {
     "id": "metaphysik-k3-s10-022",
     "kind": "text",
     "aa": 1036,
     "text": "1. ) Fortdauer ihrer Substanz nach dem Tode.",
     "ocrConf": 88
    },
    {
     "id": "metaphysik-k3-s10-023",
     "kind": "text",
     "aa": 1036,
     "ms": [
      {
       "p": 190,
       "i": 82
      }
     ],
     "text": "2. ) Fortdauer ihrer Person, d. i. identitaet ihrer Persönlichkeit, d. i. daß sie sich im Zustande nach dem Tode bewußt sey, ebendaßelbe subject zu seyn, was sie vorher war.",
     "dehyphenated": 1,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s10-024",
     "kind": "text",
     "aa": 1036,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "189",
       "unresolved": true
      },
      {
       "p": null,
       "i": 119,
       "raw": "190",
       "unresolved": true
      }
     ],
     "text": "N.B. Ist das Bewußtseyn seiner selbst memoria intellectualis in sensu psychologico, anderer in sensu morali, wo sie in dem Grunde der Zurechnung, oder der Zurechnungsfähigkeit besteht.",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s10-025",
     "kind": "text",
     "aa": 1036,
     "text": "Beydes muß bewiesen werden aus physiologischen Gründen.",
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s10-026",
     "kind": "text",
     "aa": 1036,
     "aaEnd": 1037,
     "pages": [
      {
       "p": 1037,
       "i": 455
      }
     ],
     "ms": [
      {
       "p": 191,
       "i": 1056
      }
     ],
     "text": "a.) Man stellt nun ad 1. den Beweis dafür gewöhnlich dahin auf: Die Seele ist einfach, also untheilbar, oder welches = anima est incorruptibilis; sie ist keiner Verwesung, d. i. keiner Zertheilung durch Auflösung ihrer Theile unterwarfen, also kann sie nicht vergehen. Dies heißt nach der Analogie des Körpers geschloßen. Holz z.E. verwest zwar, indeß ist es doch auch wahr, daß verschiedene Bestandtheile des Holzes bleiben, die selbst nicht chemisch auflösbar sind, aber doch die Zertheilung möglich machen. Die Seele aber, als eine unkörperliche Substanz, mithin einfach, ist daher nach der Voraussetzung der corruption nicht unterworfen. Mendelssohn (in seinem Phaedon) erkannte ganz recht diesen Beweis für unzureichend, indem keine Nothwendigkeit darin lag, anzunehmen, weil die Seele nicht corruptibilis sey, so könne sie nicht vergehen, indem sie ja auch, ohne Zertheilung, durch Verschwinden vergehen könne. Aber dagegen schloß er durch Annahme deßen, daß er ihre Substanz für unvergänglich annahm, dennoch zu •viel: er folgerte dies so: wäre sie es nicht, so würde sie in dem Einen Zeitpunkt vorhanden seyn, in dem folgenden aber nicht mehr seyn. Da aber zwischen zwey Augenblicken schlechthin eine Zeit seyn muß, wodurch der eine in den andern übergehen kann, so müßten, wenn sie im nächsten Augenblicke nicht mehr seyn soll, ein Seyn und ein Nichtseyn einander folgen, ohne daß eine Zwischen Zeit eines nicht-ganz Seyns, und eines nicht-völligen Nichtseyns bestimmt wäre ; mithin wäre der Übergang durch einen Sprung gedacht, eine einfache Substanz könne aber durch keinen Sprung in Nichts verwandelt, oder annihilirt werden, mithin sey die Seele unsterblich.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 4,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s10-027",
     "kind": "text",
     "aa": 1037,
     "ms": [
      {
       "p": null,
       "i": 0,
       "raw": "190",
       "approx": true,
       "unresolved": true
      },
      {
       "p": null,
       "i": 70,
       "raw": "191",
       "unresolved": true
      }
     ],
     "text": "N.B. Er setzte voraus, ein einfaches Wesen könne nicht wie ein Körper durch succeßive Verminderung seiner Theile vergehen, sondern es müße entweder ganz seyn oder mit einmal auf hören, überhaupt gewesen zu seyn.",
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s10-028",
     "kind": "text",
     "aa": 1037,
     "aaEnd": 1038,
     "pages": [
      {
       "p": 1038,
       "i": 910
      }
     ],
     "ms": [
      {
       "p": 192,
       "i": 533
      }
     ],
     "text": "Es ist richtig, es ist keine Zeit, zwischen welcher nicht immer wieder eine unendliche Reihe von Zeiten ist, es ist kein Zustand, zwischen dem und einem andern nicht wieder ein Zustand wäre, durch den der Übergang geschehe: allein daraus kann man es nicht für unmöglich erklären, daß die Seele nach dem Tode nicht vergehen könne. Theile der Seele können bey ihr, da sie einfach ist, zwar nicht durch Zertheilung untergehen, aber durch eine evanescenz, d. i. eine allmählige Remißion ihrer Kräfte, (opponirt ist intension der Kräfte) So wie die Klarheit einer Vorstellung allmählig sich verdunkeln kann, so daß zuletzt die Seele drüber einschlummert, und also das Bewußtsein davon sich nach und nach verliehrt, so können nach und nach alle Grade der Kräfte der menschlichen Seele nachlaßen, und wenn sie sich durch alle Grade vermindert haben, endlich in ein Nichts übergehen. Hier ist kein saltus, sondern sie befolgt die Gesetze der Continuitaet durch immer kleinere Grade herabsteigend, zwischen welchen immer wieder eine Zeit ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s10-029",
     "kind": "text",
     "aa": 1038,
     "ms": [
      {
       "p": 193,
       "i": 567
      }
     ],
     "text": "Von einem körperlichen Dinge sagt man zwar in sensu cosmologico mit Recht: die Substanz ist beharrlich, indeß ihre Accidenzien wechseln, aber auch nur bey körperlichen Dingen läßt sich die Beharrlichkeit der Substanz bemerken, z.E. an der Schwere, Undurchdringlichkeit usw. Bey einem einfachen Wesen sind wir aber außer Stande, eine Beharrlichkeit zu erkennen, denn selbst das Ich = Selbstbewußtseyn des Menschen = verschwindet. Es läßt sich daher des princip der Beharrlichkeit bey einem Körper, nicht bey einem einfachen Wesen anwenden, und bey der Seele, wo Alles in Fluß ist, und alles vergehn kann, daraus etwas schließen.",
     "dehyphenated": 2,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s10-030",
     "kind": "text",
     "aa": 1038,
     "text": "Was ad 2. die Identitaet der Person der Seele betritt, so wäre dies die memoria intellectuaiis. In wiefern ihr solche nach dem Tode zukommen soll, davon läßt sich die Nothwendigkeit gar nicht einsehen: man kann die Möglichkeit wohl annehmen, aber nicht beweisen, mithin läßt sich a priori nicht darauf schließen. Wir finden psychologisch vielmehr, daß der Mensch vergißt, was er vorher war.",
     "dehyphenated": 2,
     "ocrConf": 85
    },
    {
     "id": "metaphysik-k3-s10-031",
     "kind": "text",
     "aa": 1038,
     "ms": [
      {
       "p": 194,
       "i": 588
      }
     ],
     "text": "Den Zustand der Seele nach dem Tode und ihre existenz überhaupt auf psychologie, da sie aus dem Leben des Menschen in der Erfahrung hergenommen ist, zu gründen, geht also nicht an, und es ist auch von selbst klar, daß sich aus dem commercio der Seele mit dem Körper, aus dem Bewußtseyn von Beyden in der Verbindung und bey der Unmöglichkeit eines Versuchs von einer auch augenblicklichen Trennung mit Fortdauer des Bewußtseyns, schlechthin nichts darüber erkennen läßt, was unsere Seele nach Aufhebung dieser Verbindung seyn werde. Man hat nun außer dem psycho -logischen Beweise aus der Natur der Seele noch ferner einen Beweis a priori, und zwar metaphysischen, aus b., dem Begriff eines Lebensprincips überhaupt, hergenommen.",
     "dehyphenated": 4,
     "ocrConf": 80
    },
    {
     "id": "metaphysik-k3-s10-032",
     "kind": "text",
     "aa": 1038,
     "aaEnd": 1039,
     "pages": [
      {
       "p": 1039,
       "i": 517
      }
     ],
     "text": "Es sey dargethan, daß unser Leben (quoad principium) nicht von einer Verbindung der Seele mit einer Materie abhänge, daß es also ohne dieselbe existire, und der Tod als eine Continuation des Lebens angesehen werden müße. Nemlich da die Materie leblos sey, so sey kein Grund anzunehmen, daß das Leben von einer Verbindung mit derselben abhängig seyn könne, d. i. daß die Materie ein Grund der Möglichkeit des Lebensprincips sey, vielmehr könne dem letztem die Verbindung mit der Materie ein Hinderniß im Leben machen, indem die Seele außer ihrem eigenen Leben, auch die Materie beleben, oder ein thierisches Leben hervorzubringen genöthigt ist.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 1,
     "ocrConf": 81
    },
    {
     "id": "metaphysik-k3-s10-033",
     "kind": "text",
     "aa": 1039,
     "ms": [
      {
       "p": 195,
       "i": 216
      },
      {
       "p": 196,
       "i": 1281,
       "raw": "m",
       "inferred": true
      }
     ],
     "text": "Allein man muß unterscheiden die Fortdauer des Lebensprincips, oder des Vermögens zu leben, von dem actu des Lebens selbst. Ersteres kann möglicherweise auch freier und ungehinderter nach der Trennung vom Körper fortdauern, aber um die actualitaet des Lebens selbst anzunehmen, erfordert es doch eine Erfahrung, ob der Mensch oder deßen Seele ohne Verbindung mit dem Körper actus des Lebens ausüben könne. Da uns die Erfahrung, die wir von unserm Zustande haben, vielmehr im Gegentheil lehrt, daß wir nicht anders als in Verbindung mit dem Körper denken, wollen, begehren usw. können, indem die Mitwirkung des Körpers sich sichtbar durch die Empfindung als Folge von diesen Handlungen des Lebens äußert, z.E bey jedesmaliger Aufopferung der Kräfte; beym Denken empfinden wir Ermattung usw., und es scheint also eben seine Mitwirkung eine Bedingung zu verrathen, die bey der Ausübung des Lebens zum Grunde liegt. Es ist also nicht erwiesen, daß actu die Seele nach dem Tode lebe, wenn das Lebensprincip nach dem Tode fortdauert. Man sieht also, daß auch metaphysisch aus der Natur der Seele sich nichts über die immortaiitaet erweisen laße, mithin alle physiologische Argumente hierüber nichts erweislich machen. Außerdem hat man den Beweis für die Unsterblichkeit der Seele in der Ordnung der Zwecke gesucht, oder von der Zweckmäßigkeit hergenommen, und zwar a. entweder aus den Natur Zwecken nach Gesetzen der Natur abgeleitet. Dies ist der teleologische Beweis, b. oder aus dem göttlichen Zweck nach moralischen (als göttlich betrachteten) Gesetzen abgeleitet. Dies ist der theologische Beweis. Den teleologischen Beweis (NB er ist noch der einzige, der eine Möglichkeit des künftigen Lebens begründet und Beyfall in metaphysischer Rücksicht verdient) nimmt man daher:",
     "joined": [
      "inferred"
     ],
     "dehyphenated": 10,
     "ocrConf": 82
    },
    {
     "id": "metaphysik-k3-s10-034",
     "kind": "text",
     "aa": 1039,
     "aaEnd": 1040,
     "pages": [
      {
       "p": 1040,
       "i": 358
      }
     ],
     "text": "a. Kein organisches Wesen in der Natur ist, deßen Daseyn anders, als durch und vermöge eines durch daßelbe zu bewirkenden Zweckes möglich gedacht werden kann. Man muß damit schlechthin zugleich die Idee eines Wesens verbinden, das das organische Geschöpf zu irgend einem Zwecke geschaffen hat. Man nehme z.E. auf den Umtrieb der Säfte in Bäumen, Stauden und Gewächsen und der Verbindung der Theile der Blumen auf die Art ihrer Befruchtung usw. Rücksicht.",
     "joined": [
      "layout"
     ],
     "dehyphenated": 2,
     "ocrConf": 83
    },
    {
     "id": "metaphysik-k3-s10-035",
     "kind": "text",
     "aa": 1040,
     "text": "b. Es giebt in der Natur keine überflüssige Anlagen. Bey Mineralien ist zwar die Zweckmäßigkeit noch nicht (bricht ab)",
     "ocrConf": 78
    },
    {
     "id": "metaphysik-k3-s10-036",
     "kind": "text",
     "aa": 1040,
     "ms": [
      {
       "p": 197,
       "i": 0
      },
      {
       "p": 198,
       "i": 962
      }
     ],
     "text": "Mittheilung einer angemeßenen Glückseligkeit für das ganze Menschen Geschlecht möglich zu machen, und das Wohlbefinden der Menschen mit ihrem Wohlverhalten in Übereinstimmung zu bringen: nur, wie Gott dies bewirke, wißen wir nicht, sondern nehmen diese Voraussetzung nur deshalb an, weil einerseits das moralische Wohlverhalten dem Menschen Geschlecht zur Pflicht gemacht ist, es aber außer seinen Kräften liegt, sich Glückseligkeit zu verschaffen. Es zeigt sich zwar schon nach Natur gesetzen, daß Beobachtung der moralischen Gesetze bey unserm Verhalten eine Zufriedenheit mit uns selbst, so wie den Beifall anderer gewährt, aber Befriedigung in Ansehung des sinnlich Guten gewährt es nicht aus sich selbst. Man sieht hieraus sehr leicht, wie sehr allen Begriffen die Annahme der Göttlichen unbedingtenRathschlüße oder des decreti divini absolut i entgegen ist. Es ist dies ein actus voluntatis consequentis dei vermöge deßen zwar Gott per voluntatem antecedentem, d. i. casu causa impulsiva erat generalis atqui omnibus subjectis generis humani communis, alle Menschen Selig wißen wollte, per voluntatem consequentem aber sich für eine Classe zur Seligkeit, für die andere zur Verdammnis bey Erschaffung der Welt bestimmte, und demzufolge der erstem die ihr nöthigen Gnaden Mittel ertheilte, der letztem aber schlechthin entzog, mithin, da von Natur der Mensch böse ist, einige absolute die Seligkeit erwarten, andere absolute dagegen der Verdammnis unterworfen werden sollen. Dies ist die Lehre von der praedestination, von welcher sich das hypothetische decretum divinum gänzlich dahin unterscheidt, daß hiernach eine Seligkeit oder Verdammmß von Gott vorher bestimmt wird, nachdem das subject sich dazu durch sein moralisches Verhalten würdig oder unwürdig gemacht hat.",
     "dehyphenated": 9,
     "ocrConf": 79
    },
    {
     "id": "metaphysik-k3-s10-037",
     "kind": "text",
     "aa": 1040,
     "text": "finitum — 20ter febr. 95.",
     "ocrConf": 53
    }
   ]
  }
 ]
};
