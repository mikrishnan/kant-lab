/* ─────────────────────────────────────────────────────────────────────────────
   The Logic Portal's catalogue: every text it reads, and every layer of the seminar's
   work it draws connections from. Hand-written: edit it directly.

   ADDING A TEXT
     1. Put the text in a .js data file that declares one global, in one of the shapes
        below. A further transcript of AA XXIV comes out of scripts/parse_logik.py in the
        `logik` shape already; anything else can use the plain `passages` shape.
     2. Add an entry to PORTAL_TEXTS. Nothing else changes: the search, the phrasing and
        frequency tables and the reading pane all pick it up on the next load.

   Text fields
     key      short stable id, used in the portal's links (#p=key:passageId)
     title    the work as the seminar cites it
     short    a label for tight spaces
     layer    textbook | notes | lecture | compilation | published
     date     the date as the sources give it, verbatim ("ca. 1771", "1780ff.")
     year     a number to put the texts in order: the earliest year the date allows
     vol      the Academy Edition volume, as a number (passages are cited `AA <vol>:<page>`)
     file     the data file, relative to this folder
     global   the name the file declares (for `refl`, the entries array)
     shape    logik | refl | meier | metaphysica | passages (below)
     on       the key of the text that notes are written in (Reflexionen) or that a lecture
              comments on, so "Where is this in …?" knows which textbook to name
     source   where the transcription came from, and how clean it is
     credit   whose work brought the text into the repository, for the Texts page

   Shapes
     logik        { meta: { volume }, sections: [{ title, blocks: [{ id, kind, aa, aaEnd, text }] }] }
                  The AA XXIV transcripts and Alex's Jäsche, which adds
                  paras: [{ n, blocks: [id] }] for its §§.
     refl         an array of Reflexionen as data/ has them: { r, ph, phRaw, aa, vol?, paras,
                  src, interp, text }. `byPara` names the file's { §: [entry index] } global.
     meier        MEIER_AUSZUG: { paras: { n: text }, hierarchy, citations: { n: 'AA 16:5' } }
     metaphysica  MET_PARAGRAPHS: [{ num, section, aa, text }], with MET_SECTIONS for titles
     passages     the plain shape for anything new:
                  { meta: { work, volume }, passages: [{ id, cite, aa, text, year }] }
   ───────────────────────────────────────────────────────────────────────────── */

const PORTAL_TEXTS = [
  { key: 'meier', title: 'Meier, Auszug aus der Vernunftlehre', short: 'Meier', layer: 'textbook',
    date: '1752', year: 1752, vol: 16, shape: 'meier',
    file: '../../Jesus-La-Paz/meier-auszug-data.js', global: 'MEIER_AUSZUG',
    source: 'AA XVI, from the InteLex transcription in Textfiles/; the text of the Meier Reader',
    credit: 'Meier Reader (Sophia & Maria); copied into a data file by Jesus' },

  { key: 'baumgarten', title: 'Baumgarten, Metaphysica (4th ed., 1757)', short: 'Baumgarten', layer: 'textbook',
    date: '1757', year: 1757, vol: 17, shape: 'metaphysica',
    file: '../../../data/metaphysica-17.js', global: 'MET_PARAGRAPHS',
    source: 'AA XVII, from Textfiles/Baumgarten.rtfd by scripts/parse_baum.py; §§ 504–699 are in AA XV and not here',
    credit: 'Baumgarten Reader (Sophia & Maria)' },

  { key: 'refl-logik', title: 'Kant, Reflexionen zur Logik (on Meier)', short: 'Refl. Logik', layer: 'notes',
    date: 'ca. 1752–1800', year: 1752, vol: 16, shape: 'refl', on: 'meier',
    file: '../../../data/reflexionen-16-meier.js', global: 'REFL_ENTRIES', byPara: 'REFL_BY_PARA',
    source: 'AA XVI, from Textfiles/ by scripts/parse_refl.py; dated by Adickes’ phases',
    credit: 'shared data (Sophia & Maria)' },

  { key: 'refl-meta', title: 'Kant, Reflexionen zur Metaphysik (on Baumgarten)', short: 'Refl. Metaphysik', layer: 'notes',
    date: 'ca. 1752–1800', year: 1752, vol: 17, shape: 'refl', on: 'baumgarten',
    file: '../../../data/reflexionen-17-18-baumgarten.js', global: 'REFLM_ENTRIES', byPara: 'REFLM_BY_PARA',
    source: 'AA XVII–XVIII, from Textfiles/ by scripts/parse_refl.py; dated by Adickes’ phases',
    credit: 'shared data (Sophia & Maria)' },

  { key: 'blomberg', title: 'Logik Blomberg', short: 'Blomberg', layer: 'lecture',
    date: 'ca. 1771', year: 1771, vol: 24, shape: 'logik', on: 'meier',
    file: '../../../data/logik-blomberg-24.js', global: 'LOGIK_BLOMBERG',
    source: 'AA 24:7–301, from Textfiles/ by scripts/parse_logik.py; a student transcript',
    credit: 'shared data (Sophia & Maria)' },

  { key: 'wiener', title: 'Wiener Logik', short: 'Wiener', layer: 'lecture',
    date: '1780ff.', year: 1780, vol: 24, shape: 'logik', on: 'meier',
    file: '../../../data/logik-wiener-24.js', global: 'LOGIK_WIENER',
    source: 'AA 24:785–940, from Textfiles/ by scripts/parse_logik.py; a student transcript',
    credit: 'shared data (Sophia & Maria)' },

  { key: 'busolt', title: 'Logik Busolt', short: 'Busolt', layer: 'lecture',
    date: 'ca. 1789/90', year: 1789, vol: 24, shape: 'logik', on: 'meier',
    file: '../../../data/logik-busolt-24.js', global: 'LOGIK_BUSOLT',
    source: 'AA 24:603–686, from Textfiles/ by scripts/parse_logik.py; a student transcript',
    credit: 'shared data (Sophia & Maria)' },

  // Four more AA XXIV transcripts, read off the printed volume by OCR and not corrected:
  // about 98% of words right, checked on Busolt. See ../aa24-ocr/README.md before quoting.
  { key: 'herder', title: 'Logik Herder (uncorrected OCR)', short: 'Herder (OCR)', layer: 'lecture',
    date: '1762–64', year: 1762, vol: 24, shape: 'logik', on: 'meier',
    file: '../aa24-ocr/logik-herder-24-ocr.js', global: 'LOGIK_HERDER',
    source: 'AA 24:3–6, Herder’s notes, a fragment; uncorrected OCR of the Internet Archive’s scan of AA XXIV, by aa24-ocr/parse_aa24_ocr.py. Check quotations against the page image',
    credit: 'mikrishnan (OCR import)' },

  { key: 'philippi', title: 'Logik Philippi (uncorrected OCR)', short: 'Philippi (OCR)', layer: 'lecture',
    date: '1772', year: 1772, vol: 24, shape: 'logik', on: 'meier',
    file: '../aa24-ocr/logik-philippi-24-ocr.js', global: 'LOGIK_PHILIPPI',
    source: 'AA 24:311–496, a student transcript; uncorrected OCR of the Internet Archive’s scan of AA XXIV, by aa24-ocr/parse_aa24_ocr.py. Check quotations against the page image',
    credit: 'mikrishnan (OCR import)' },

  { key: 'poelitz', title: 'Logik Pölitz (uncorrected OCR)', short: 'Pölitz (OCR)', layer: 'lecture',
    date: '1780–82', year: 1780, vol: 24, shape: 'logik', on: 'meier',
    file: '../aa24-ocr/logik-poelitz-24-ocr.js', global: 'LOGIK_POELITZ',
    source: 'AA 24:502–602, a student transcript (its title page says 1789; dated 1780–82 by Naragon); uncorrected OCR of the Internet Archive’s scan of AA XXIV, by aa24-ocr/parse_aa24_ocr.py. Check quotations against the page image',
    credit: 'mikrishnan (OCR import)' },

  { key: 'dohna', title: 'Logik Dohna-Wundlacken (uncorrected OCR)', short: 'Dohna (OCR)', layer: 'lecture',
    date: '1792', year: 1792, vol: 24, shape: 'logik', on: 'meier',
    file: '../aa24-ocr/logik-dohna-24-ocr.js', global: 'LOGIK_DOHNA',
    source: 'AA 24:693–784, a student transcript, as AA XXIV reprints it from Kowalewski (1924); uncorrected OCR of the Internet Archive’s scan of AA XXIV, by aa24-ocr/parse_aa24_ocr.py. Check quotations against the page image',
    credit: 'mikrishnan (OCR import)' },

  { key: 'jaesche', title: 'Jäsche Logik', short: 'Jäsche', layer: 'compilation',
    date: '1800', year: 1800, vol: 9, shape: 'logik', on: 'meier',
    file: '../../Alex%20Li/logik-jasche-9.js', global: 'LOGIK_JASCHE',
    source: 'AA 9:3–150, from Textfiles/Vol9Logic.rtfd by Alex’s parse_jasche.py; compiled by G. B. Jäsche from Kant’s notes',
    credit: 'Alex' },
];

/* The seminar's annotation layers: connections and classifications the portal shows beside
   a passage. `who` is the Contributors entry the portal credits for it. */
const PORTAL_LAYERS = [
  { key: 'phases', file: '../../../data/phases-adickes.js', global: 'PHASES', who: 'data' },
  { key: 'concordance', file: '../../Jesus-La-Paz/meier-kant-concordance.js', global: 'CONCORDANCE', who: 'jesus' },
  { key: 'jaescheLinks', file: 'pinned/jaesche-meier-links.js', global: 'PORTAL_PIN_JAESCHE_LINKS', who: 'jesus' },
  { key: 'immediate', file: '../../Nik%20Land/immediate-inference-examples.js', global: 'IMMEDIATE_EXAMPLES', who: 'nik' },
  { key: 'nikfig', file: 'pinned/nik-figures.js', global: 'PORTAL_PIN_NIK_FIGURES', who: 'nik' },
  { key: 'judgement', file: '../../Nik%20Land/judgement-examples.js', global: 'JUDGEMENT_EXAMPLES', who: 'nik' },
  { key: 'mediate', file: 'pinned/sophia-mediate-inferences.js', global: 'PORTAL_PIN_SOPHIA', who: 'sophia' },
  { key: 'principles', file: '../../Feng/principles-lexicon.js', global: 'PRINCIPLE_LEXICON', who: 'feng' },
  { key: 'concepts', file: 'pinned/jin-concepts.js', global: 'PORTAL_PIN_JIN', who: 'jin' },
  { key: 'stopwords', file: 'pinned/jin-stopwords.js', global: 'PORTAL_PIN_JIN_STOP', who: 'jin' },
  { key: 'forms', file: 'pinned/aidan-forms.js', global: 'PORTAL_PIN_AIDAN', who: 'aidan' },
  { key: 'finder', file: 'pinned/aidan-finder.js', global: 'PORTAL_PIN_AIDAN_FINDER', who: 'aidan' },
  { key: 'ptrans', file: '../../Feng/principles-translations.js', global: 'PRINCIPLE_TRANSLATIONS', who: 'feng' },
  { key: 'tradition', file: '../../../data/tradition-meier.js', global: 'TRADITION', who: 'readers' },
];

/* English translations the portal shows beside a passage when the reader asks for English.
   They are loaded only then, one text and one style at a time. Each file sets
   KANT_TR['<set>/<style>'] = { entry: [English, [translator's notes]] }.

     text   the PORTAL_TEXTS key it translates
     set    the name its file files its entries under
     file   the file, with STYLE where the style's key goes
     key    how a passage's entry is named: 'ID' for the passage's own block id;
            'meier:N' or 'refl:N', with N the passage's § or Reflexion number
     map    for a text cut differently from the one the translation was made from: a pinned file
            naming, for each of the portal's passages, the entries that make it up (mapGlobal)
     who    the Contributors entry the portal credits for it

   These are machine translations, each following one published translator's stated method;
   neither translator translated these texts. The portal says so wherever it shows one.
   Baumgarten and the Reflexionen on Baumgarten have none yet. */
const PORTAL_TR_STYLES = [
  { key: 'guyer', label: 'Guyer–Wood principles', tag: 'literal; one English word per German term; sentences kept whole' },
  { key: 'kemp', label: 'Kemp Smith principles', tag: 'faithful to the sense; readable English; tangled sentences resolved' },
];
const PORTAL_TRANSLATIONS = [
  { text: 'meier', set: 'meier', key: 'meier:N', file: '../../Jesus-La-Paz/translations/meier-STYLE.js', who: 'jesus' },
  { text: 'refl-logik', set: 'refl', key: 'refl:N', file: '../../Jesus-La-Paz/translations/refl-STYLE.js', who: 'jesus' },
  { text: 'blomberg', set: 'blomberg', key: 'ID', file: '../../Jesus-La-Paz/translations/blomberg-STYLE.js', who: 'jesus' },
  { text: 'wiener', set: 'wiener', key: 'ID', file: '../../Jesus-La-Paz/translations/wiener-STYLE.js', who: 'jesus' },
  { text: 'busolt', set: 'busolt', key: 'ID', file: '../../Jesus-La-Paz/translations/busolt-STYLE.js', who: 'jesus' },
  { text: 'jaesche', set: 'jaesche', key: 'MAP', file: '../../Jesus-La-Paz/translations/jaesche-STYLE.js', who: 'jesus',
    map: 'pinned/jaesche-translation-map.js', mapGlobal: 'PORTAL_PIN_JAESCHE_TR' },
];
