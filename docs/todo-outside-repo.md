# Outside-the-repo tasks for the working-group rollout

The settings, decisions and conversations that a pull request cannot do. The in-repo
half of the rollout is done, except for R9 in [todo-in-repo.md](todo-in-repo.md),
which waits on O12 below. Unless noted otherwise, each task needs the repository owner
(**@mikrishnan**), because only the owner can change the settings.

## Decisions — before anything else

- [ ] **O2. Published PDFs.** `Individuals/Ramsey/Andre Laks, Glenn Most_ Parmenides
  Poem.pdf`, a published book, and `Individuals/Feng/Week 2 lecture note passages.pdf`
  were removed in #3 and are gone from the site, but they are still in the history
  (commits `1238671` and `e64b874`), so github.com still serves them at old-commit URLs.
  Decide whether to purge them from history as well. Purging means rewriting history:
  `git filter-repo` and a force-push, after which every local clone must be re-cloned.
  GitHub may go on showing cached views until GitHub Support clears them.
- [ ] **O3. Names in public.** Every participant's name and work is on a public site.
  Make sure the students know that, and check the university's guidance if unsure.
  Anyone who prefers can use a pseudonymous folder name for their own folder and their
  group's.

## Claude access

- [ ] **O4. Ask the university's Claude Enterprise admin:**
  - Do students' seats include **Claude Code on the web** (claude.ai/code)?
  - Can students connect their own GitHub accounts to it, and is any repository or
    organisation restriction set?
  - Is any setting blocking it, such as a cloud-sessions or network toggle?

  Visiting professors without a seat can use the web-editor route in the README, or a
  personal plan.
- [ ] **O5. Install the Claude GitHub app on the repository.** As the owner, open
  claude.ai/code, connect GitHub, and install the app on **mikrishnan/kant-lab only**.
- [ ] **O6. Dry run, from a non-owner account.** Done as #2: a session pushed a branch
  and opened a pull request, which shows the human account as author. Still to note:
  - the exact buttons and wording;
  - whether the cloud session has `node`, which the root `CLAUDE.md`'s syntax-check advice
    lists first.

  If the wording differs from the README's step 3, fix the README.

## GitHub settings — after the rollout branch is merged

The ruleset depends on `.github/CODEOWNERS` being on `main`. Without it, "require review
from Code Owners" has nothing to enforce.

- [ ] **O7. A ruleset on `main`.** Go to Settings → Rules → Rulesets → New ruleset →
  New branch ruleset, and set:
  - Name `main`, Enforcement status **Active**, target: **Default branch**;
  - Bypass list: **Repository admin**, and the maintainers on the `*` line of `.github/CODEOWNERS`;
  - ☑ Restrict deletions;
  - ☑ Require a pull request before merging, with:
    - Required approvals **0**;
    - ☑ Dismiss stale pull request approvals when new commits are pushed;
    - ☑ Require review from Code Owners;
  - ☑ Block force pushes.
- [ ] **O8. General settings and access.**
  - In Settings → General → Pull Requests, allow **squash merging** only, with the
    default commit message set to *Pull request title*.
  - Turn on **Automatically delete head branches**.
  - In Settings → Collaborators, confirm every participant has **Write**. All of them
    pushed in session 1, so they should.
- [ ] **O10. Test the protections** with throwaway pull requests from a non-admin
  account, then close them:
  - [ ] a pull request touching only `Individuals/<name>/` can be merged by its author
    at once;
  - [ ] a pull request touching `groups/<test>/` is blocked until a member listed on
    that group's `CODEOWNERS` line approves it. To test this, add a temporary group line
    first;
  - [ ] a pull request touching `data/` or `index.html` is blocked until a maintainer
    approves it;
  - [ ] a direct push to `main` from a non-admin is rejected.

  **If "0 approvals + code owners" does not behave as above,** set required approvals to
  1. That costs `Individuals/` its self-merge, since any collaborator's approval is then
  needed. Update the README's table to match.

## On a Mac — anyone who has one

- [ ] **O12. Commit the text conversions, which unblocks R9.** Every extractor starts from
  `textutil`, which only macOS has. Committing its output lets the rest of the pipeline
  run anywhere, including in students' cloud sessions. From the repository root, on a
  branch:

  ```sh
  mkdir -p Textfiles/txt
  textutil -convert txt -output Textfiles/txt/Baumgarten.txt             Textfiles/Baumgarten.rtfd/TXT.rtf
  textutil -convert txt -output Textfiles/txt/Meier.txt                  Textfiles/Meier.rtf
  textutil -convert txt -output Textfiles/txt/Vol9Logic.txt              Textfiles/Vol9Logic.rtfd/TXT.rtf
  textutil -convert txt -output Textfiles/txt/vol14Adickes.txt           Textfiles/vol14Adickes.rtf
  textutil -convert txt -output Textfiles/txt/Vol16reflexionenMeier.txt  Textfiles/Vol16reflexionenMeier.rtfd/TXT.rtf
  textutil -convert txt -output Textfiles/txt/Vol17erlauterungenBaum.txt Textfiles/Vol17erlauterungenBaum.rtf
  textutil -convert txt -output Textfiles/txt/Vol17reflexionenBaum.txt   Textfiles/Vol17reflexionenBaum.rtfd/TXT.rtf
  textutil -convert txt -output Textfiles/txt/vol18reflexionenBaum.txt   Textfiles/vol18reflexionenBaum.rtfd/TXT.rtf
  ```

  Then prove that the files are a faithful substitute. Rerun the three pipelines in
  "Regenerating the generated data" in the root `CLAUDE.md`, but point each `parse_*`
  step at the matching `Textfiles/txt/` file instead of `/tmp`. Then:

  ```sh
  git diff --exit-code data/    # must print nothing
  ```

  Read each extractor's report as you go; `parse_baum.py`'s should end in `clean`. If
  `data/` comes out different, do not commit anything; record the difference in
  `works.md`. Otherwise commit only `Textfiles/txt/`, and open a pull request.

## In class — the first session under the new model

- [ ] **O13. Connect accounts.** Each student signs in at claude.ai/code, connects
  GitHub, and opens a session on mikrishnan/kant-lab. Fifteen minutes, with the O6 dry
  run's notes on hand.
- [ ] **O14. A zero-risk first exercise: check the Baumgarten reader.**
  - Before class, open and pin one issue, *"Check the Baumgarten reader"*, holding the
    checklist from `works.md` § 1b:
    - the lemma chips at §§ 11–12 — § 12's `»Posito — quod«` is the hard case;
    - a phase chip;
    - the panel's resizer, `×` and *Reflexionen* button;
    - the "belong to no §" view;
    - the undiagnosed scroll problem — *which* scroll misbehaves, and how;
    - the console.
  - Students work through it and file what they find with the **Bug** and
    **Text error** forms. This teaches issues and clears a real backlog.
- [ ] **O15. Form groups.** Students file **New working group** issues. Set each group up
  as in "Setting up a working group" in [maintaining.md](maintaining.md). The likely
  first candidates:
  - the 11 or more independent Porphyrian trees in `Individuals/`, consolidated into
    one spec;
  - the Jäsche *Logik* as a dataset;
  - annotating the Meier reader's `TRADITION` map, which is now in
    `data/tradition-meier.js`, so passages can be added without touching the reader.
- [ ] **O16. Each group's first pull request is its `SPEC.md`,** reviewed within the
  group before anyone asks Claude for code. A group starting from a prototype in
  `Individuals/` instead brings it in and drafts the spec from it in that first pull
  request.

## After that

Ongoing upkeep — the weekly routine, reviews, promotions and data changes — is in
[maintaining.md](maintaining.md).
