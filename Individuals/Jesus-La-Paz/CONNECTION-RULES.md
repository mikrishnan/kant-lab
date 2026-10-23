# How Meier's §§ and Kant's passages are connected

The rules behind the **Connections** view of the [Meier–Kant Comparison](meier-kant-comparison.html).
The links themselves are in `meier-kant-concordance.js`, made by `build-concordance.py`.

## What a connection is

Kant lectured on logic from G. F. Meier's *Auszug aus der Vernunftlehre* (1752) for some forty years.
A **connection** joins one passage of Kant's logic to the § of Meier's book it is lecturing on. The
passages are every paragraph of the Blomberg, Wiener and Busolt transcripts (AA 24), of the Jäsche
*Logik* (AA 9), and every Reflexion Kant wrote in his own copy of Meier (AA 16). Because all of them
point into the same book, any two Kant passages connected to the same § are connected to each other,
so Meier's §§ work as an index to the whole of Kant's logic.

Every connection says how it is known. Stated connections come from the texts or the Academy
Edition. Inferred connections come from the rule below, and they carry a measured confidence.

## 1. Stated connections (taken as they stand)

| Mark | Source | Passages |
|---|---|---|
| **stated** | The Blomberg transcript heads its paragraphs with Meier's § numbers, a single § or a range ("§ 341- 346"). | 1,838 of 1,916 Blomberg paragraphs |
| **AA** (Jäsche) | Over each group of Reflexionen on Meier, the Academy Edition names the Jäsche pages that run parallel ("IX 21-33"). A Jäsche passage on such a page, aligned to one of the §§ the header names, is marked AA. | 444 of 1,034 Jäsche paragraphs |
| **AA** (Reflexionen) | A Reflexion's § is where Kant wrote it in his copy, as the AA's locus note or block header records. The few that the AA cannot place are marked *interpolated*. | all 1,870 Reflexionen on Meier |

## 2. Inferred connections: the rule

Everything else is inferred by reading the lecture against Meier the way a scholar would. Three kinds
of evidence are weighed together.

1. **Order.** Kant lectured through Meier's book from front to back. A lecture is therefore read in
   sequence against Meier's §§: staying on a § or moving forward is cheap, moving forward far costs a
   little more, and going back is costly. The Blomberg transcript shows how strong this is. Of 1,837
   consecutive pairs of headed paragraphs, 1,658 stay on the same §, 177 move forward, and 2 go back.
2. **Section titles.** Each lecture section is held to the Meier *Abschnitt* its own title names. For
   example, Busolt's "Von der Wahrheit" goes to Meier's fourth Abschnitt, "Von der Wahrheit der
   gelehrten Erkenntniss" (§§ 92–114). The table below gives the full concordance of titles, read off
   both texts. Where Meier's arrangement is not the obvious one, the table follows Meier: he treats
   immediate inference (*Verstandesschlüsse*: *aequipollentia*, *subalternatio*, the oppositions,
   conversion, contraposition) in **§§ 341–352, at the close of his ninth Abschnitt on judgments**,
   not in the tenth on inferences of reason.
3. **Wording.** Within that frame each passage is compared with every § on its vocabulary, as two
   profiles:
   - Meier's own text of the §, and
   - **Kant's own Reflexionen on that §**. These are his words about Meier's words, so they bridge the
     two vocabularies. Adding them raised exact matches from 18% to 22% on their own.

   Before comparing, the period's spellings are evened out (*Warheit/Wahrheit*, *Urtheil/Urteil*,
   *Erkenntniß/Erkenntniss*, *bey/bei*, *Wiederspruch/Widerspruch*, doubled consonants) and common
   function words are set aside. Rare, technical words count for more than common ones.

These three are combined in one pass over each lecture (a Viterbi alignment). The pass finds the
sequence of §§ that best fits the wording of every passage while respecting the order and the
titles. Neither the order nor the wording decides on its own. Wording alone finds the right § only
23% of the time; with order it finds it 58% of the time, and within ±2 §§ 78% of the time.

4. **Runs of §§.** Where a passage's wording fits the neighbouring §§ of the same section at least
   four-fifths as well as its own §, up to six §§ away, the passage is marked as running over them
   ("runs over §§ 341–343"), the way Blomberg's own headings sometimes cover a range.

### The concordance of titles

| Lecture section (its own title) | Meier §§ |
|---|---|
| **Blomberg**: Einleitung (both) | 1–9 |
| Erster Haupttheil / Abschnitt 1–10 (each by its title) | 10–40, 41–65, 66–91, 92–114, 115–154, 155–215, 216–248, 249–291, 292–352, 353–413 |
| Andere Haupttheil (Lehrart) | 414–438 |
| Dritte Haupttheil, Abschnitte 1–4 (Vortrag) | 439–463, 464–478, 479–517, 518–526 |
| 4te Haupttheil (Charakter eines Gelehrten) | 527–563 |
| **Busolt**: Prolegomena, Geschichte, Nuzzen der Logic | 1–9 |
| Abhandlung der Logic; Vollkommenheit; Mängel der Erkenntniß | 10–40 |
| Horizont; Mißbrauch oder Mangel; Eintheilung der Gelehrten | 41–65 |
| Größe · Wahrheit · Klarheit | 66–91 · 92–114 · 115–154 |
| Gewißheit; Hypothesen; Ueberredung; Mathematische Gewißheit | 155–215 |
| Praktische Erkentniße | 216–248 |
| Begriffe; Definizionen; Philosophische Definizion; Logische Eintheilung | 249–291 |
| Urtheile; Eintheilung der Urtheile; Kategorische Urtheile | 292–352 |
| Hypothetische und Disiunktive Urtheile (runs on into the inferences) | 292–413 |
| Regeln der Vernunftschlüße; Figuren; Fortsezzung | 353–413 |
| Praktische Logic · Meditiren · Gebrauch der Wörter | 414–563 · 414–438 · 439–463 |
| **Wiener**: Prolegomena; Geschichte der Logik | 1–9 |
| Tractatio Logices | 10–154 |
| Vom Beyfall …; Von der wahrscheinlichen Erkenntniß | 155–215 |
| Von den Begriffen; Eintheilung aller definitionen; logische Eintheilung | 249–291 |
| Von den Urtheilen | 292–352 |
| **Von den Verstandes-Schlüssen** | **341–353** |
| Von den Vernunft-Schlüssen | 353–413 |
| **Jäsche**: Einleitung I–IV · V · VI · VII · VIII · IX–X · Anhang | 1–9 · 10–40 · 41–91 · 92–114 · 115–154 · 155–215 · 216–248 |
| Jäsche §§ 1–16 · 17–40 · 41–43 · **44–55** · 56–93 | 249–291 · 292–352 · 341–360 · **341–353** · 353–413 |
| Jäsche §§ 94–98, 114–120 · 99–113 | 414–438 · 249–291 |

Sections whose titles name nothing in Meier, such as title pages or Wiener's "Kurze Wiederhohlung des
Vorigen", are left free and placed by order and wording alone.

## 3. How confident each inferred connection is

| Mark | Meaning | Right within ±2 §§: Blomberg | Wiener |
|---|---|---|---|
| **strong** | the wording points to this § (it is among the three best matches) *and* the passage sits in sequence with its neighbours | 86% | 95% |
| **probable** | one of the two, not both | 72% | 65% |
| **tentative** | neither: placed by its position in the lecture only | 36% | 25% |

## 4. How the rule was tested

No outside concordance was used to build the rule. It was tested three ways.

| Test | Exact § | Within ±2 §§ | Right Meier section |
|---|---|---|---|
| **Blomberg**, against its own § headings, which the rule never sees. Tuned on half the sections, tested on the other half (1,234 paragraphs). | 58% | 78% | 100% |
| **Jäsche**, against the Academy Edition's headers (463 paragraphs) | 96% | 97% | 99% |
| **Wiener**, against the concordance in J. Michael Young's Cambridge *Lectures on Logic* (1992), Appendix D, for a sample of Meier §§ 1–31, 167–211 and 347–391 (146 paragraphs). This was an outside check only. | – | 79% | – |

The Cambridge concordance was used **only to test** the rule. No connection was copied from it. The
parsed sample was kept outside the project and deleted after testing. On the sampled pages, the
Blomberg links stated by the transcript itself agreed with Cambridge in every case. That confirms
the test and the transcript.

**What the Cambridge test changed.** It showed that my first table of titles had put the
*Verstandesschlüsse* in Meier's tenth Abschnitt. The wording-based links had in fact already found
Meier §§ 341–352 for Busolt's rules of immediate inference. That entry of the table was corrected to
follow Meier's own arrangement. It also showed that a long lecture passage often treats several §§ at
once, which led to the "runs over §§" marking.

**What was tried and rejected.** Each of these was tested and left out because the tests did not
support it:

- **A looser order for the later lectures**, letting Wiener and Busolt go back more freely. It made no
  difference.
- **Reading long paragraphs in short windows of 50–70 words.** It made no real difference: 56–59% of
  §§ recovered instead of 54%.
- **Secondary links from single sentences** ("also touches § k"). They were mostly wrong: 0–5% right
  on Blomberg and about 40% on Wiener.
- **Automatic matching of titles.** It did worse than the hand-read concordance of titles.

## 5. Limits: read with care

- **One home per passage.** A long passage that treats several §§ in turn is filed under one of them,
  plus any run it is marked as covering. In the Wiener test only 54% of the §§ the Cambridge
  concordance finds on a page are found there. In the By § view, "also show passages linked to the
  two §§ on either side" widens the net.
- **Busolt could not be tested at all**, since no concordance covers it. Its connections rest on the
  rule's record on Blomberg, Jäsche and Wiener. Spot checks on AA 24:670–672 read well:
  - Busolt's remark on *qualitas occulta* goes to Meier § 338, "Verborgene Eigenschaften (qualitates
    occultae)";
  - his list of the kinds of immediate inference goes to §§ 341–348 (*aequipollentia* to
    contraposition);
  - his contradictory opposition goes to § 343;
  - his account of the inference of reason goes to §§ 353–357.

  The same pages also show the limit. His long paragraph that runs from the rules of conversion into
  mediate inference is filed under § 354, though it begins with conversion (Meier §§ 346–350).
- **Kant did not always follow Meier.** Digressions, examples of his own and later doctrine sit where
  the lecture put them. The nearest § is the best the rule can say, and the mark shows how good that
  is.
- **Exact § versus neighbourhood.** Treat an inferred § as "this § or one beside it". Within ±2 §§ is
  the figure that matters for reading.

## 6. Rebuilding

From the repository root:

```sh
python3 Individuals/Jesus-La-Paz/build-concordance.py
```

It reads `data/logik-{blomberg,busolt,wiener}-24.js`, `data/reflexionen-16-meier.js`, and this
folder's `meier-auszug-data.js` and `jaesche-logik-data.js`, and writes `meier-kant-concordance.js`.
Rebuild after any of those texts changes. The title concordance is the table `M`, `BLOMBERG_H`,
`BUSOLT_H`, `WIENER_H`, `JAESCHE_EINL` near the top of the script. Correct it there if a section is
placed wrongly.
