/* ─────────────────────────────────────────────────────────────────────────────
   Adickes' chronology of the phases of Kant's handwriting
   Erich Adickes, introduction to AA XIV, pp. XXXV–XLIII.

   Adickes distinguished 33 phases in Kant's hand, labelled with the letters of
   the lower-case Greek alphabet. Because the alphabet did not reach, and using
   capitals would have invited confusion, he used only two letters for the 1750s
   (α and β) and two for the period from 1780 on (θ for the 1780s, ω for
   1790–1804), adding arabic exponents to divide those spans into phases.

   Consequences for reading a phase label, in Adickes' own terms:

   - For α, β, θ and ω the exponent IS the phase division: α¹ and α² are
     different phases and are listed separately below.
   - For the other letters (ε, η, ι, κ, ν, ρ, ψ, φ, χ …) an exponent marks
     only "kleinerer Unterschiede in Schrift und Tinte, die nicht ausreichen,
     um die betreffenden Phasen noch weiter zu theilen" (AA XIV:XXXVI). Such a
     variant therefore inherits the base letter's dating; `phaseYears()` below
     implements exactly that fallback.
   - Bare θ and bare ω (no exponent) mean a more precise dating was not
     possible, and stand for the whole span the letter covers.
   - A hyphenated pair (κ−ξ, β¹−ω) means, in general, that every phase between
     the two is possible. Adickes allowed the hyphen for very widely separated
     letters too, where only the great majority of intervening phases can come
     into question (AA XIV:XLIII).

   Three phases (ε, ο, π) are given by Adickes with NO absolute date, only a
   relative position. Their `years` is null and must not be rendered as a date.

   `note` is Adickes' entry verbatim, so a reader can always get back to what he
   actually wrote; `aa` is its page in AA XIV.
   ───────────────────────────────────────────────────────────────────────────── */

const ADICKES_PREAMBLE = {
  aa: 'AA 14:XXXV–XXXVI',
  text: 'In ihrer Gesammtheit ermöglichten die auf den letzten Seiten (von S. XXVIII ab) kurz skizzirten Untersuchungen, in Kants Handschrift 33 verschiedene Phasen zu unterscheiden, die der Kürze wegen durchweg mit den Buchstaben des kleinen griechischen Alphabets bezeichnet sind. Da die letzteren nicht reichten und die Heranziehung des großen Alphabets leicht Verwirrung zur Folge gehabt hätte, sind für die 50er Jahre wie für die Zeit von 1780 ab nur zwei Buchstaben verwendet: dort α und β, hier θ für die 80er Jahre, ω für die Jahre von 1790–1804. Zu ihnen sind dann arabische Ziffern als Exponenten gesetzt, um die einzelnen Phasen in diesen Zeiträumen zu bezeichnen. […] κ (1769) bringt die Wendung zur kritischen Philosophie, λ spiegelt den Standpunkt der Inauguraldissertation von 1770 wieder.\n\nθ und ω für sich allein (ohne Exponenten) zeigen an, dass eine genauere Datirung nicht möglich ist, und repräsentiren dann den ganzen Zeitraum, für den sie gelten. Auch bei andern Buchstaben, wie ε, η, ι, κ, ν, ρ, ψ, φ und χ, sind häufig arabische Ziffern als Exponenten hinzugesetzt, hier aber nur zur Bezeichnung kleinerer Unterschiede in Schrift und Tinte, die nicht ausreichen, um die betreffenden Phasen noch weiter zu theilen.'
};

const ADICKES_HYPHEN_NOTE = {
  aa: 'AA 14:XLIII',
  text: 'Wo zwei im Alphabet nicht unmittelbar auf einander folgende griechische Buchstaben, durch einen Bindestrich verbunden, zur chronologischen Bestimmung benutzt sind, da sind im Allgemeinen alle zwischen ihnen liegenden Phasen möglich […]. Nur bei sehr weit aus einander stehenden Buchstaben […] ist der Bindestrich der Kürze wegen auch dann zugelassen, wenn nur die grosse Mehrzahl der Phasen in Betracht kommen kann.'
};

/* Ordered as Adickes lists them, which is also chronological order.

   The two bare-letter rows for α and β are not Adickes' own: the AA apparatus
   occasionally prints α or β without an exponent, but Adickes extends the
   "bare letter = the whole span" convention only to θ and ω. These rows
   therefore carry no date, only the span the letter covers, and are marked
   `notInAdickesTable`. */
const PHASES = [
  { sym: 'α', key: 'α', years: null, from: null, to: null, aa: 'AA 14:XXXV–XXXVI',
    notInAdickesTable: true, covers: 'die 1750er Jahre (α¹ etwa 1753–54, α² etwa 1754–55)',
    editorial: 'Adickes tables only α¹ and α². Where the apparatus prints a bare α, the phase is one of those two but is not further determined; unlike θ and ω, a bare α is not licensed by Adickes to stand for the whole span, so no date is given here.' },

  { sym: 'β', key: 'β', years: null, from: null, to: null, aa: 'AA 14:XXXV–XXXVI',
    notInAdickesTable: true, covers: 'die 1750er Jahre (β¹ ca. 1752–1756, β² etwa 1758–59)',
    editorial: 'Adickes tables only β¹ and β². Where the apparatus prints a bare β, the phase is one of those two but is not further determined; unlike θ and ω, a bare β is not licensed by Adickes to stand for the whole span, so no date is given here.' },

  { sym: 'α¹', key: 'α1', years: 'etwa 1753–54', from: 1753, to: 1754, aa: 'AA 14:XXXVI',
    note: 'etwa 1753-4. Hierher gehören die losen Blätter D 32, 33 und E 69 S. I, die sich mit einer 1753 von der Berliner Akademie für das Jahr 1755 gestellten Preisaufgabe beschäftigen. Tinte: röthlich-braun.' },

  { sym: 'α²', key: 'α2', years: 'etwa 1754–55', from: 1754, to: 1755, aa: 'AA 14:XXXVI',
    note: 'etwa 1754-5. Hierher gehört der Entwurf zu der Vorrede der »Allgemeinen Naturgeschichte und Theorie des Himmels« auf S. II-IV des losen Blattes E 69, sowie einige vor der Phase β¹ geschriebene Bemerkungen auf S. 1 von Meiers »Auszug aus der Vernunftlehre«. Tinte: sehr blass.' },

  { sym: 'β¹', key: 'β1', years: 'ca. 1752 – W.S. 1755/56', from: 1752, to: 1756, aa: 'AA 14:XXXVI',
    note: 'diese Phase zieht sich (sieht man von den wenigen Bemerkungen aus α² ab) als älteste Schicht durch das ganze Meier’sche Compendium hindurch. Es erschien 1752: dies Jahr bildet also den Terminus a quo für Kants Aufzeichnungen. Der Terminus ad quem dürfte das W.S. 1755-6 sein, in dem Kant zum ersten Mal über Logik las. Vermuthlich schrieb er in diesem Semester als Vorbereitung für das Colleg die Bemerkungen der Phase β¹ nieder; doch ist nicht ausgeschlossen, dass er sein »Heft« schon einige Semester oder gar Jahre früher fertiggestellt hatte. Hierher gehört auch ein Doppelblatt mit Vorarbeiten für die »Meditationes de igne«, ferner das lose Blatt J 2, und wahrscheinlich auch D 31. Tinte: röthlich-braun.' },

  { sym: 'β²', key: 'β2', years: 'etwa 1758–59', from: 1758, to: 1759, aa: 'AA 14:XXXVI',
    note: 'etwa 1758-9. Die losen Blätter J 3 und J 4 stammen sehr wahrscheinlich aus dem Frühjahr 1758 (vgl. XIV 626-9). Tinte: schwarz. Dazu tritt der mir nur in Photographie vorliegende Brief Kants an J.G. Lindner vom 28. Oct. 1759.' },

  { sym: 'γ', key: 'γ', years: '1760–64', from: 1760, to: 1764, aa: 'AA 14:XXXVI–XXXVII',
    note: '1760-64. Das lose Blatt Nr. 5 aus dem v. Duisburg’schen Nachlass steht zu der Preisaufgabe der Berliner Akademie für das Jahr 1763 in Beziehung und stammt aus den Jahren 1761 (2. Hälfte) oder 1762 (vgl. II 492-3). Da sonst (abgesehn von Briefen) keinerlei festdatirtes mit schwarzer Tinte geschriebenes Material aus den Jahren 1760-4 vorliegt, kommen für die der Phase γ angehörenden Aufzeichnungen diese ganzen Jahre als Entstehungszeit in Betracht. Tinte: schwarz-braun bis schwarz.' },

  { sym: 'δ', key: 'δ', years: 'um 1762–63', from: 1762, to: 1763, aa: 'AA 14:XXXVII',
    note: 'um 1762-3. Diese Phase bildet die älteste Schicht in dem Handexemplar von Baumgartens »Metaphysica« und ist inhaltlich der Schriftengruppe von 1762-3 eng verwandt. Tinte: röthlich-braun.' },

  { sym: 'ε', key: 'ε', years: null, from: null, to: null, aa: 'AA 14:XXXVII',
    relative: 'sicher vor ζ; Verhältnis zu δ nicht sicher bestimmbar',
    note: 'sicher vor ζ (Stellungsindicien), Verhältniss zu δ nicht sicher bestimmbar. In Baumgartens »Initia philosophiae practicae primae« stellt ε (abgesehn möglicher Weise von einigen wenigen Bemerkungen aus δ) die ursprünglichste Phase dar. Tinte: schwarz, bräunlich-schwarz, röthlich-braun.' },

  { sym: 'ζ', key: 'ζ', years: 'um 1764–66', from: 1764, to: 1766, aa: 'AA 14:XXXVII',
    note: 'um 1764-66, sowohl wegen des Inhalts als auf Grund von Stellungsindicien (nach δ, ε, vor κ). Tinte: schwarz.' },

  { sym: 'η', key: 'η', years: '1764–68', from: 1764, to: 1768, aa: 'AA 14:XXXVII',
    note: '1764-68. Diese Phase umfasst, wenn nicht alle, so doch sicher den bei weitem grössten Theil der Aufzeichnungen in dem Handexemplar der »Beobachtungen«. Sie können frühestens 1764 geschrieben sein und entstammen in ihrer grossen Mehrzahl vielleicht wirklich diesem und dem darauf folgenden Jahr. Tinte: schwarz bis röthlich-braun.' },

  /* Adickes' table sets this row between η and ι. The transcription renders the
     letter with the Greek phi symbol ϕ (U+03D5), which is also the character
     used for it in the AA XVI corpus, so it is kept as-is rather than silently
     normalised to the theta-variant the alphabetical sequence would suggest. */
  { sym: 'ϕ', key: 'ϕ', years: 'etwa 1766–68', from: 1766, to: 1768, aa: 'AA 14:XXXVII',
    note: 'etwa 1766-8, sicher nach ζ (Stellungsindicien), vor κ (wegen des Inhalts). Tinte: schwarz.',
    editorial: 'Adickes places this phase between η and ι. The transcription writes it with the Greek phi symbol ϕ (U+03D5) rather than a theta-variant; the character is reproduced as transcribed. Distinguish it from φ, which Adickes dates um 1776–78.' },

  { sym: 'ι', key: 'ι', years: 'etwa 1766–68', from: 1766, to: 1768, aa: 'AA 14:XXXVII–XXXVIII',
    note: 'etwa 1766-8, sicher nach ζ (Stellungsindicien), vor κ (wegen des Inhalts). In Achenwalls »Ius naturale« (1763) bildet ι die älteste Schicht. Kant kündigte für das W.S. 1766-67 zum ersten Mal Ius naturae an, las es aber nicht; wohl aber las er es im S.S. 1767 im Anschluss an Achenwall, wurde nicht fertig und erbot sich dann, das noch nicht durchgenommene Ius publicum universale (ganz? theilweise?) und Ius gentium im W.S. 1767-68 zu behandeln (vgl. E. Arnoldt: Gesammelte Schriften 1909 V 208ff.). Die Bemerkungen aus ι in Achenwalls Compendium stammen also vermuthlich aus den Jahren 1766-8, je nachdem ob Kant sein »Collegheft« vor Beginn der Vorlesungen fertigstellte (dann käme Sommer und Herbst 1766 in Betracht) oder ob er die Bemerkungen während der Vorbereitung für die einzelnen Vorlesungen niederschrieb (dann handelte es sich um das S.S. 1767 und den ersten Theil des W.S. 1767-68). Nicht ausgeschlossen ist aber auch, dass Kant gleich nach Erscheinen des Compendiums, bei der ersten Lectüre, Bemerkungen eintrug: diese wären dann der Phase ε zuzuweisen, deren Schriftzüge oft grosse Ähnlichkeit mit denen von ι haben. Tinte: röthlich-braun bis schwarz (meistens mit bräunlichem Schimmer).' },

  { sym: 'κ', key: 'κ', years: '1769', from: 1769, to: 1769, aa: 'AA 14:XXXVIII',
    significance: 'die Wendung zur kritischen Philosophie',
    note: '1769. Eine grössere Zahl von Reflexionen aus dieser Phase kann ihres Inhalts wegen nur zwischen dem Aufsatz »Von dem ersten Grunde des Unterschiedes der Gegenden im Raume« (Anfang 1768) und der Inauguraldissertation vom Jahre 1770 entstanden sein: Raum und Zeit sind nicht mehr etwas Objectives, aber auch noch nicht Formen der Sinnlichkeit, sondern »reine Begriffe der Anschauungen«, »conceptus intellectus puri«. Auf Grund des Briefes an Lambert vom 2. Sept. 1770 kann man den Terminus ad quem mit grosser Wahrscheinlichkeit noch genauer auf October 1769 bestimmen. […] Es bleibt also für die Phase κ nur das Jahr 1769 übrig (vgl. meine Kant-Studien 1895 S. 109ff.). Tinte: theils schwarz, theils röthlich-braun.' },

  { sym: 'λ', key: 'λ', years: 'Ende 1769 – Herbst 1770', from: 1769, to: 1770, aa: 'AA 14:XXXIX',
    significance: 'spiegelt den Standpunkt der Inauguraldissertation von 1770 wieder',
    note: 'Ende 1769 - Herbst 1770. Eine Anzahl von Bemerkungen aus λ spiegelt den Standpunkt der Inauguraldissertation (am 21. August 1770 von Kant vertheidigt) wieder. Fest datirt sind ausserdem der Entwurf zum Brief an Suckow vom 15. December 1769 (X 78-9) auf dem losen Blatt Nr. 4 aus dem v. Duisburg’schen Nachlass und auf S. 432b der »Metaphysica« die Abschrift einer Preisfrage, die am 15. Februar 1770 vom Stolpischen Legat in Leyden gestellt und im Februar 1770 im »Journal des Sçavans«, am 17. März 1770 in den »Göttingischen Anzeigen von gelehrten Sachen« veröffentlicht wurde. […] Tinte: schwarz-braun oder schwarz mit bräunlichem Schimmer.' },

  { sym: 'µ', key: 'µ', years: 'etwa 1770–71', from: 1770, to: 1771, aa: 'AA 14:XXXIX',
    note: 'etwa 1770-71, sicher später als κ, λ, früher als ν, ξ, ο. Tinte: röthlich-braun, bald blass, bald satter.',
    editorial: 'The transcription writes this letter with the micro sign µ (U+00B5) rather than Greek mu μ (U+03BC); the character is reproduced as transcribed.' },

  { sym: 'ν', key: 'ν', years: 'etwa 1771', from: 1771, to: 1771, aa: 'AA 14:XXXIX',
    note: 'etwa 1771, sicher später als κ, λ, µ, früher als ξ, ο. Tinte: schwarz bis röthlich-braun.' },

  { sym: 'ξ', key: 'ξ', years: 'etwa 1772', from: 1772, to: 1772, aa: 'AA 14:XXXIX',
    note: 'etwa 1772, sicher später als κ-ν, früher als ψ, φ. Der Inhalt einiger Bemerkungen (»Metaphysica« S. XIX-XX) berührt sich eng mit dem Brief an M. Herz vom 21. Febr. 1772, der auch in der Schrift und theilweise auch in der Tinte grosse Ähnlichkeit mit ihnen hat. Tinte: schwarz-bräunlich.' },

  { sym: 'ο', key: 'ο', years: null, from: null, to: null, aa: 'AA 14:XXXIX',
    relative: 'später als κ–ν und in vielen Fällen als ξ; früher als ψ und φ',
    note: 'sicher früher als ψ und φ, später als κ-ν und in vielen Fällen auch als ξ; anderswo mögen ξ und ο gleichzeitig sein und die Verschiedenheiten in der Schrift nur daher rühren, dass Kant sich bei ο einer sehr spitzen Feder bediente. Tinte: schwarz-bräunlich.' },

  { sym: 'π', key: 'π', years: null, from: null, to: null, aa: 'AA 14:XXXIX–XL',
    relative: 'wahrscheinlich zwischen ξ und ρ',
    note: 'wahrscheinlich zwischen den Phasen ξ und ρ, an deren Schrift die von π theilweise stark erinnert. π nimmt hauptsächlich eine Reihe zusammenhängender Textseiten und Durchschussblätter in der Psychologia rationalis von Baumgartens »Metaphysica« ein (S. 295′-309′, 321′-325), die Kant als Magazin für seine anthropologischen Bemerkungen dienen mussten, als in der Psychologia empirica kein Platz mehr für sie war. Tinte: schwarz, oft mit bräunlichem Schimmer.' },

  { sym: 'ρ', key: 'ρ', years: 'um 1773–75', from: 1773, to: 1775, aa: 'AA 14:XL',
    note: 'um 1773-5. Kant benutzte in dieser Zeit zur Niederschrift seiner Bemerkungen unter anderm vier Briefe: von seinem Bruder Johann Heinrich (3. Juli 1773; X 133-5), von E.T. v. Kortum (18. Nov. 1773; XII 358), von D.F. v. Lossow (28. Apr. 1774; XII 358-9) und von Bertram (20. Mai 1775; X 173) […]. Ausserdem fällt in diese Phase noch der Entwurf eines Briefes an Lavater aus dem Jahre 1775 (nach dem 28. April; X 171-2). Tinte: theils schwarz, theils röthlich-braun […].' },

  { sym: 'σ', key: 'σ', years: 'etwa 1775–77', from: 1775, to: 1777, aa: 'AA 14:XL',
    note: 'etwa 1775-7. Festdatirt ist der Entwurf zum I. Philanthropin-Aufsatz (II 447-9), der am 28. März 1776 erschien, sowie eine Subscribenten-Liste aus dem Anfang des Jahres 1777 auf dem losen Blatt M 8. Die Schrift von σ ist meistens flott und grosszügig und ähnelt dann der in den Briefen an Herz aus der 2. Hälfte der 70er Jahre. […] So ist σ oftmals gegen χ nur schwer oder gar nicht abzugrenzen, und auch nach rückwärts mag σ sich noch bis in das Jahr 1774 hinein erstrecken (vgl. XIV 576, 583). Tinte: theils ganz schwarz, theils schwarz mit bräunlichem Timbre, theils röthlich-braun.' },

  { sym: 'τ', key: 'τ', years: 'um 1775–76', from: 1775, to: 1776, aa: 'AA 14:XL',
    note: 'um 1775-6. Sicher nach κ, µ, vor ψ, φ, θ (Stellungsindicien). In der Schrift ganz ähnlich wie ψ, φ, aber die Tinte hat durchgehends einen ganz besonderen röthlich-braunen, etwas ins Violette spielenden Schimmer.' },

  { sym: 'ψ', key: 'ψ', years: 'um 1776–78', from: 1776, to: 1778, aa: 'AA 14:XL–XLI',
    pairedWith: 'φ',
    note: 'ψ u. φ: um 1776-8, sicher später als κ-τ, früher als θ (Stellungsindicien). Eine Bemerkung auf S. VII der »Metaphysica« stammt aus der Zeit des Briefes an Herz vom 24. Nov. 1776 (X 186), eine andere (ebenda auf S. XXXIV) muss vor dem Tode Lamberts (25. Sept. 1777) geschrieben sein. Eine Reihe weiterer Reflexionen weisen durch ihren Inhalt auf dieselbe Zeit. Die Schrift ist in ψ wie in φ klein, eng, gedrängt, oft recht flüchtig. Der Buchstabe φ ist, vor allem in den Praefationes und der Synopsis der »Metaphysica«, verwandt, um die Bemerkungen zu kennzeichnen, die zwischen den Textzeilen stehn; ψ füllt hier, allein oder in Verbindung mit andern Phasen, die Ränder […]. Die Tinte ist röthlich-braun (theils dunkel, theils hell), mitunter auch blass-braun.' },

  { sym: 'φ', key: 'φ', years: 'um 1776–78', from: 1776, to: 1778, aa: 'AA 14:XL–XLI',
    pairedWith: 'ψ',
    note: 'ψ u. φ: um 1776-8, sicher später als κ-τ, früher als θ (Stellungsindicien). […] Da es aber ohne Zweifel auch Ausnahmen von dieser Regel giebt […] so sind auch da, wo (wie in der Metaphysik) phasenweiser Abdruck der Reflexionen erfolgt, ψ und φ als eine Phase behandelt: von je zwei einander gegenüber stehenden Seiten werden in solchen Fällen zunächst die Randbemerkungen (ψ), darauf die Aufzeichnungen zwischen den Textzeilen (φ) zum Abdruck gebracht. […] Bei φ kommt ausserdem in den Praefationes und der Synopsis der »Metaphysica« nicht selten Tinte vor, die ganz schwarz ist oder von einem Braunschwarz, das sich dem Schwarz sehr nähert, während sich ebenda bei ψ diese Färbung nicht findet.',
    editorial: 'Adickes treats ψ and φ as one phase where the Reflexionen are printed phase by phase: ψ marks the marginalia, φ the notes written between the printed lines. Not to be confused with ϕ (etwa 1766–68).' },

  { sym: 'χ', key: 'χ', years: '1778–79', from: 1778, to: 1779, aa: 'AA 14:XLII',
    note: '1778-9. Meistens flotte grosszügige Schrift, wie in den gleichzeitigen Briefen an Herz und Mendelssohn. Bei manchen Bemerkungen ist die Abgrenzung nach σ, bei anderen die nach θ hin (wo auch flotte, freie, grosszügige Schrift vorherrscht) schwer oder gar unmöglich. Tinte schwarz, röthlich-braun (theils dunkel, theils hell), blass-braun.' },

  { sym: 'θ', key: 'θ', years: 'die 1780er Jahre', from: 1780, to: 1789, aa: 'AA 14:XXXV–XXXVI',
    bare: true,
    note: 'θ für sich allein (ohne Exponenten) zeigt an, dass eine genauere Datirung nicht möglich ist, und repräsentirt dann den ganzen Zeitraum, für den es gilt — die 80er Jahre.' },

  { sym: 'θ¹', key: 'θ1', years: 'etwa 1780–83', from: 1780, to: 1783, aa: 'AA 14:XLII',
    note: 'etwa 1780-3. In diese Zeit fallen die losen Blätter B 12 (nach dem 20. 1. 1780), C 8 (nach dem 22. 3. 1780), M 21 (nach dem 25. 3. 1780), B 2 (Ende 1780).' },

  { sym: 'θ²', key: 'θ2', years: 'etwa 1783–84', from: 1783, to: 1784, aa: 'AA 14:XLII',
    note: 'etwa 1783-4. Hierher gehört das lose Blatt B 11 (nach dem 7. 2. 1784), sowie die ältere in der Vorlesung des W.S. 1783-4 über Theologia naturalis von Kant benutzte Schicht in Eberhards »Vorbereitung zur natürlichen Theologie«.' },

  { sym: 'θ³', key: 'θ3', years: 'etwa 1785–88', from: 1785, to: 1788, aa: 'AA 14:XLII',
    note: 'etwa 1785-8. Hierher gehören die losen Blätter D 1 (nach dem 13. 2. 1786), M 18 (Sept. 1786), D 29 (Auszug aus einem Buch von 1786; vgl. XIV 482-3), C 5 (1787), D 5 und 9 (vor dem 25. 4. 1788), D 22 (nach dem 15. 3. 1788), sowie die spätere Schicht in Eberhards »Vorbereitung zur natürlichen Theologie«.' },

  { sym: 'θ⁴', key: 'θ4', years: 'etwa 1788–89', from: 1788, to: 1789, aa: 'AA 14:XLII',
    note: 'etwa 1788-9. Von festdatirten losen Blättern kommen D 7 (nach dem 13. 10. 1788), M 20 (1789), C 6, 12-4, D 15 (sämmtlich Vorarbeiten aus dem Jahre 1789 zu Kants Schrift gegen Eberhard) in Betracht.' },

  { sym: 'ω', key: 'ω', years: '1790–1804', from: 1790, to: 1804, aa: 'AA 14:XXXV–XXXVI',
    bare: true,
    note: 'ω für sich allein (ohne Exponenten) zeigt an, dass eine genauere Datirung nicht möglich ist, und repräsentirt dann den ganzen Zeitraum, für den es gilt — die Jahre von 1790–1804.' },

  { sym: 'ω¹', key: 'ω1', years: '1790–91', from: 1790, to: 1791, aa: 'AA 14:XLII',
    note: '1790-1. Aus dem Sommer 1790 stammen die losen Blätter A 1 und A 4, aus dem Jahr 1791 (vor September) G 13 S. 1.' },

  { sym: 'ω²', key: 'ω2', years: '1792 – 1794 (1. Drittel)', from: 1792, to: 1794, aa: 'AA 14:XLII',
    note: '1792-4 (1. Drittel). Von hier ab bieten die losen Blätter ein ausserordentlich reiches, fast lückenloses Material von festdatirten Aufzeichnungen […]. Für ω² kommen vor Allem in Betracht: G 2, E 48, 49, 43, C 7, 15, F 21, 7, 2, M 12, F 19, G 15-17, 27, C 1, M 15, D 14, F 23, A 15, D 6.' },

  { sym: 'ω³', key: 'ω3', years: '1794–95', from: 1794, to: 1795, aa: 'AA 14:XLIII',
    note: '1794-95. Hierher gehören: G 11, B 4, M 19, F 9, F 4, E 19, E 17, F 12, 20, 8, G 22, E 18.' },

  { sym: 'ω⁴', key: 'ω4', years: '1796–98', from: 1796, to: 1798, aa: 'AA 14:XLIII',
    note: '1796-8. Aus dieser Zeit stammen: E 23, A 2, 3, E 37, M 27, G 10, M 11, 13, F 22, K 1, 5, 3, C 2.' },

  { sym: 'ω⁵', key: 'ω5', years: 'Sommer 1798 – 1804', from: 1798, to: 1804, aa: 'AA 14:XLIII',
    note: 'Sommer 1798-1804. Aus dieser Zeit sind viele Dutzende festdatirbarer Blätter und Merkzettel erhalten, von denen nur die in diesem Bande (S. 52, 536, 618, 621) theilweise abgedruckten losen Blätter L 50, 21, 46, 36 erwähnt seien.' },
];

/* Ink colour is not a dating criterion in itself, but Adickes' closing remark on
   it is a useful sanity check on a reading. */
const ADICKES_INK_NOTE = {
  aa: 'AA 14:XLII',
  text: 'Die Tinte ist in den 80er Jahren fast ausnahmslos röthlich-braun (dunkel oder hell) oder blass-braun, in den 90er Jahren dagegen fast ebenso ausnahmslos schwarz, meistens mit mehr oder weniger starkem bräunlichen Timbre.'
};

/* ── lookup ────────────────────────────────────────────────────────────────── */

const PHASE_BY_KEY = {};
PHASES.forEach((p, i) => { PHASE_BY_KEY[p.key] = Object.assign({ order: i }, p); });

/* Letters where an arabic exponent divides the span into distinct phases.
   Everywhere else the exponent marks only differences of hand and ink. */
const EXPONENT_IS_PHASE = new Set(['α', 'β', 'θ', 'ω']);

const SUPERSCRIPT = { '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵' };

/**
 * Resolve a phase label as it appears in the AA apparatus ("β1", "κ3", "θ")
 * into a dated record. Never invents a date: `years` stays null where Adickes
 * gives none, and `inherited` records that the exponent was not itself dated.
 */
function phaseInfo(raw) {
  if (!raw) return null;
  const m = String(raw).trim().match(/^([^\d]+)(\d)?$/);
  if (!m) return null;
  const letter = m[1].trim();
  const exp = m[2] || null;
  const sym = letter + (exp ? (SUPERSCRIPT[exp] || exp) : '');

  const exact = PHASE_BY_KEY[letter + (exp || '')];
  if (exact) return Object.assign({}, exact, { sym, inherited: false });

  const base = PHASE_BY_KEY[letter];
  if (!base) return { sym, key: letter + (exp || ''), years: null, note: null,
                      unknown: true, inherited: false };

  if (exp && !EXPONENT_IS_PHASE.has(letter)) {
    /* Adickes, AA XIV:XXXVI — the exponent marks only smaller differences in
       hand and ink, insufficient to divide the phase further. */
    return Object.assign({}, base, {
      sym, inherited: true,
      inheritedFrom: base.sym,
      inheritedReason: 'Der Exponent bezeichnet nur kleinere Unterschiede in Schrift und Tinte, die nicht ausreichen, um die Phase weiter zu theilen (AA XIV:XXXVI).'
    });
  }
  /* An exponent on α/β/θ/ω that Adickes does not list: do not date it. */
  return { sym, key: letter + (exp || ''), years: null, note: base.note,
           aa: base.aa, unlisted: true, inherited: false };
}

/** Display string for a phase label: "λ · Ende 1769 – Herbst 1770". */
function phaseYears(raw) {
  const p = phaseInfo(raw);
  if (!p) return '';
  return p.years || '(von Adickes nicht datirt)';
}
