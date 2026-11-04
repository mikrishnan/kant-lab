/* ─────────────────────────────────────────────────────────────────────────────
   The kinds of nothing — starting points.

   Every passage in the corpus that names the nihil negativum, found by searching the
   portal's texts for the words "nihil negativum" (any inflection, and the OCR's
   "nihil o negativum" at AA 2:171) on 4 November 2026, plus Baumgarten's §§ 13 and 54,
   which § 7 points to. 20 passages.

   These are NOT the dossier. A search found them; nobody has yet decided that they
   belong. A passage enters the dossier (dossier.js) only when a participant asks for it,
   with their reason. The page shows these with a dashed "found by search" tag for that
   reason.

   Fields
     ref      the passage's address in the Logic Portal, textKey:id, as in a #p= link
              and in a class session's items
     work     the text, as the portal names it
     cite     its citation: § and AA page, Refl. number and AA page, or the edition's page
     date     the date the portal gives the text; empty for a Reflexion, which is dated
              only by its phase
     phRaw    Adickes' phase expression, verbatim, query marks and parentheses included;
              empty for anything that is not a Reflexion
     how      why it is here: "names the term", or "§ 7 points to it"
     excerpt  the words around the first match, as the data had them on 4 November 2026.
              The portal's text is the authority; open it there before quoting. The
              AA II, AA XXIX and B texts are OCR.
   ───────────────────────────────────────────────────────────────────────────── */

const STUDY_STARTING_POINTS = [
  {"ref": "baumgarten:p7", "work": "Baumgarten, Metaphysica", "cite": "§ 7, AA 17:24", "date": "1757", "phRaw": "", "how": "names the term", "excerpt": "Nihil negativum, cf. §. 54, irrepraesentabile, impossibile, repugnans, (absurdum, cf. §. 13,) contradictionem involvens, …"},
  {"ref": "baumgarten:p13", "work": "Baumgarten, Metaphysica", "cite": "§ 13, AA 17:25", "date": "1757", "phRaw": "", "how": "§ 7 points to it", "excerpt": "Posito A et non-A oritur contradictio, §. 9, 12. Posito A et B, quo posito ponitur non-A, ponitur impossibile, §. 9, hinc oritur contradictio, §. 12, prior patens (directa, immediata et explicita), …"},
  {"ref": "baumgarten:p54", "work": "Baumgarten, Metaphysica", "cite": "§ 54, AA 17:38", "date": "1757", "phRaw": "", "how": "§ 7 points to it", "excerpt": "Possibile praeter essentiam, §. 53, aut est determinatum, qua omnes affectiones etiam in ipso compossibiles, aut minus, §. 34, 10. Illud est actuale, hoc non ens (nihil, cf. §. 7) privativum (mere …"},
  {"ref": "refl-meta:r3711", "work": "Reflexionen zur Metaphysik", "cite": "Refl. 3711, AA 17:252", "date": "", "phRaw": "δ? ε2?", "how": "names the term", "excerpt": "Nihil negativum ist gantz und gar nichts. non A ist auch nichts und an sich selbst nicht denklich, aber alles andere läßt …"},
  {"ref": "refl-meta:r3720", "work": "Reflexionen zur Metaphysik", "cite": "Refl. 3720, AA 17:267", "date": "", "phRaw": "ε2? ι2? κ3? (µ? ρ2? ψ?)", "how": "names the term", "excerpt": "… contradictorie i.e. logice opponirten praedicate in einem subiect, und sein resultat ist nihil negativum: a und non a zugleich. Der reale Widerstreit ist die Verbindung zweyer realgründe in einem Subiekt, deren …"},
  {"ref": "refl-meta:r3754", "work": "Reflexionen zur Metaphysik", "cite": "Refl. 3754, AA 17:283", "date": "", "phRaw": "ζ", "how": "names the term", "excerpt": "… in posteriori utrumqve est positivum. in priori (s utroqve posito) rationatum est nihil negativum (s sive impossibile); in posteriori (s utroqve posito) rationatum est nihil privativum =0."},
  {"ref": "refl-meta:r4658", "work": "Reflexionen zur Metaphysik", "cite": "Refl. 4658, AA 17:627", "date": "", "phRaw": "ο", "how": "names the term", "excerpt": "… Ding nicht ist, so ists =0A. Wenn ein nothwendig Ding nicht ist, so ists =0û, d.i. nihil negativum; durchs nihil negativum ist immer alles aufgehoben d bricht ab."},
  {"ref": "refl-meta:r5552", "work": "Reflexionen zur Metaphysik", "cite": "Refl. 5552, AA 18:217", "date": "", "phRaw": "χ? (θ1?)", "how": "names the term", "excerpt": "… Anschauung ohne Gegenstand. ens imaginarium. Raum. 4. Leerer Gegenstand ohne Begrif. nihil negativum. n. 1. und n. 2 ist Gedankending vom Unding unterschieden. axiom, anticipation, analogie, postulat. Die synthetische …"},
  {"ref": "metaphysik-mrongovius:metaphysik-mrongovius-s06-008", "work": "Metaphysik Mrongovius (OCR)", "cite": "AA 29:792", "date": "1782/83", "phRaw": "", "how": "names the term", "excerpt": "Der Autor sagt, nihil negativum ist soviel als impoßibile, das ist so gewöhnlich, und recht gut. Es wird unterschieden vom nihil privativum, …"},
  {"ref": "metaphysik-mrongovius:metaphysik-mrongovius-s06-027", "work": "Metaphysik Mrongovius (OCR)", "cite": "AA 29:806", "date": "1782/83", "phRaw": "", "how": "names the term", "excerpt": "… principium contradictionis — real auch ohne das — logische opposita, simul sumta dant nihil negativum, d. i. das Unmögliche, realiter opposita simul sumta dant nihil privativum, d. i. Mangel, und der läßt sich …"},
  {"ref": "metaphysik-mrongovius:metaphysik-mrongovius-s06-028", "work": "Metaphysik Mrongovius (OCR)", "cite": "AA 29:809", "date": "1782/83", "phRaw": "", "how": "names the term", "excerpt": "… Contradiction. Zwey logische opposita heben sich ganz auf, und es bleibt nichts (nihil negativum). Zwey real opposita heben sich nicht auf, sondern die Folgen heben sich auf, und was durch ihre Verbindung …"},
  {"ref": "metaphysik-mrongovius:metaphysik-mrongovius-s06-032", "work": "Metaphysik Mrongovius (OCR)", "cite": "AA 29:812", "date": "1782/83", "phRaw": "", "how": "names the term", "excerpt": "… relative in Beziehung und Verknüpfung mit andern Dingen. (Das interne impoßibile ist nihil negativum; Nichts durch einen bloßen Mangel woran, nennt man nichts. — Interne ist manches möglich, was externe in …"},
  {"ref": "metaphysik-k3:metaphysik-k3-s03-022", "work": "Metaphysik K3 (OCR)", "cite": "AA 29:961", "date": "1794/95", "phRaw": "", "how": "names the term", "excerpt": "… erheben, und in einen andern, den er für beßer hält, zu versetzen. Also differiren nihil negativum et privativum unter einander, wie Gedanke und Sache : eins oder das andere correspondiren nicht der Vorstellung. …"},
  {"ref": "aa02:negative-groessen-0018", "work": "Versuch, den Begriff der negativen Größen …", "cite": "AA 2:171", "date": "1763", "phRaw": "", "how": "names the term", "excerpt": "… bejaht und verneint wird. Die Folge dieser logischen Verknüpfung ist gar nichts (nihil o negativum irrepraesentabile), wie der Satz des Widerspruchs es aussagt. Ein Körper in Bewegung ist Etwas, ein Körper, …"},
  {"ref": "aa02:negative-groessen-0019", "work": "Versuch, den Begriff der negativen Größen …", "cite": "AA 2:172", "date": "1763", "phRaw": "", "how": "names the term", "excerpt": "… ist bei der Aufhebung durch den Widerspruch schlechthin Nichts. Demnach kann das nihil negativum nicht durch Zero = 0 ausgedrückt? werden, denn dieses enthält keinen Widerspruch. Es läßt sich denken, daß …"},
  {"ref": "krv-a:krv-a-0490", "work": "Critik der reinen Vernunft, A", "cite": "A 291", "date": "1781", "phRaw": "", "how": "names the term", "excerpt": "… Begriff nichts ist, das Unmögliche, wie etwa die geradlinigte Figur von zwey Seiten (nihil negativum)."},
  {"ref": "krv-a:krv-a-0491", "work": "Critik der reinen Vernunft, A", "cite": "A 291", "date": "1781", "phRaw": "", "how": "names the term", "excerpt": "… Leere Anschauung ohne Gegenstand ens imaginarium 4. Leerer Gegenstand ohne Begriff nihil negativum."},
  {"ref": "krv-b:krv-b-0897", "work": "Kritik der reinen Vernunft, B (OCR)", "cite": "B 348 (AA 3:232)", "date": "1787", "phRaw": "", "how": "names the term", "excerpt": "gradlinige Figur von zwei Seiten (nihil negativum)."},
  {"ref": "krv-b:krv-b-0901", "work": "Kritik der reinen Vernunft, B (OCR)", "cite": "B 348 (AA 3:233)", "date": "1787", "phRaw": "", "how": "names the term", "excerpt": "… Gegenstand, nihil privativum. ens imaginarium. 4. Leerer Gegenstand ohne Begriff, nihil negativum."},
  {"ref": "krv-b:krv-b-1783", "work": "Kritik der reinen Vernunft, B (OCR)", "cite": "B 624 (AA 3:399)", "date": "1787", "phRaw": "", "how": "names the term", "excerpt": "… ist das logische Merkmal der Möglichkeit, und dadurch wird sein Gegenstand vom i nihil negativum unterschieden. Allein er kann nichts destoweniger ein leerer Begriff begriffen: also liegt das Dasein in …"},
];
