# The Kant Lab Method Log

A record of how the Kant Lab works: one entry per **session** (a class meeting, a lab
meeting, a work session, office hours), and inside it the **ideas discussed**, in the
order they came up, with what was tried, what came of it, and whether it worked. It
exists so that the lab can see, over a term, which ways of working with the Logic Portal
and with AI answer research questions and which do not, and how the lab's method changes.
It began with the *nihil negativum* case study, and was built by Jin in `Individuals/Jin/`.

Open [index.html](index.html).

## What a session holds

- its date, title, type and goal;
- a **summary**, and if there is one a **transcript**;
- **what we changed**, in the tools, the questions or how we work, and **next steps**;
- the **ideas discussed**, each with:
  - the main idea, or the question asked;
  - what we tried, and its kind: search, feature, prompt, discussion, other;
  - the **tool version**: a preview link with its commit ID, which the page reads out,
    so that the idea can be re-checked against the version that was used;
  - the result, the **verdict** (worked, partly, failed, not judged yet), and why;
  - what we changed, and who raised it: the professor, a student, or an AI suggestion;
  - **threads**, short tags that follow one idea from session to session.

**All ideas** lists every idea across sessions, with filters. **Threads** follows each
thread through the sessions in date order.

## From a summary or a transcript

A session's summary can be sorted into ideas in two ways:

- **Sort automatically** splits a written summary by its headings, bullets or paragraphs,
  in the page. Parts headed *Next steps*, *Decisions* or *Goal* go to the session's own
  fields. It does not try a transcript, and says so when it sees one.
- **Sort with Claude** copies a prompt with the summary and transcript, to paste into
  Claude; Claude's answer is pasted back.

Either way the proposed ideas are shown to be ticked before any is added.

**Attested vs. inferred.** Every idea records who wrote it: *me*, *AI-drafted* or
*auto-sorted*. Verdicts are never proposed by the page or by Claude. They are the
student's judgement, and an idea stays *not judged yet* until someone gives one.

## Where the log is kept

- **In the browser.** What is typed in is saved in that browser's local storage, and
  nowhere else. Unlike the lab's other pages this one keeps what is typed in, since a log
  lost on reload would be no use. Another browser, or the preview link beside the
  published site, keeps a log of its own. Clearing the browser's data clears it.
- **In the repository.** [sessions.js](sessions.js) holds the sessions committed here.
  The page adds each one it does not yet have to the browser's log, once. To keep a
  session, use **Copy for Google Docs** on it and ask a Claude session to add it to
  `sessions.js`.
- **In Google Sheets.** **Import & export** copies two sheets, one row per session and
  one row per idea, and reads the ideas sheet back. **Download a backup** saves
  everything as one file, which Import reads back.

A transcript can hold classmates' names and words. Keep it in the browser or a private
document, and never commit it here: the repository is public.

## History

Built in `Individuals/Jin/` in November 2026 and promoted to the top level the same month.
The old address, `Individuals/Jin/method-log.html`, redirects here. A log kept at the old
address on the published site carries over, since the browser keeps one log for the
whole site.
