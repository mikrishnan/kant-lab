/* ─────────────────────────────────────────────────────────────────────────────
   Examples in immediate-inference-examples.js that readers have flagged as
   miscategorised. immediate-inferences.html reads this file on load, so the
   flags show on the cards. It is written in two ways:
     - on the live site, "Send to GitHub" files an issue, and the workflow
       .github/workflows/sync-inference-flags.yml adds the flags here in a
       pull request;
     - opened from disk, "Update the flag files" writes this file directly.
   It can also be edited by hand. diagram-flags.js holds the flags on the
   diagrams, in the same shape.

   An entry is one flagged example, holding the categorisation as it stood
   when it was first flagged. A flag does not change the example:
   immediate-inference-examples.js is untouched until someone applies a
   replacement there.

   Fields of an entry
     id           the example's id in immediate-inference-examples.js
     src          blomberg | wiener | busolt | refl16, as on the example
     block | r    where the example is, as on the example
     old          the categorisation that was flagged, copied from the example:
                    kinds       the kinds it was filed under
                    named       whether the passage itself names the kind
                    sub         the species, or absent
                    judgements  the judgements, as the example gave them
     reports      one per time it was flagged, oldest first:
                    flaggedOn   the date, YYYY-MM-DD
                    problem     what the reader said is wrong, any of:
                                  kind       the kind of inference
                                  named      whether the passage names it
                                  form       a judgement's form (A E I O)
                                  judgements which judgements are marked
                                  quote      the quotation or its page
                                  other
                    details     the reader's own description
                    reportedBy  their GitHub name, and issue the issue's
                    issue       number, where the flag came through GitHub
     replacement  the categorisation that should stand instead, in the same
                  shape as `old`. Left empty for now: no replacement has been
                  decided on, and nothing fills it in.
   ───────────────────────────────────────────────────────────────────────────── */

const MISCATEGORISATIONS = [
  {
    "id": "wie-aeq-01",
    "src": "wiener",
    "block": "wiener-s12-002",
    "old": {
      "kinds": [
        "aequipollentia"
      ],
      "named": true,
      "judgements": [
        {
          "t": "einige Menschen sind nicht7 ° tugendhaft",
          "role": "premise",
          "form": "O",
          "formStated": false
        },
        {
          "t": "sind nicht alle Menschen tugendhaft",
          "role": "conclusion",
          "form": "O",
          "formStated": false,
          "supply": "nicht alle Menschen sind tugendhaft"
        }
      ]
    },
    "reports": [
      {
        "flaggedOn": "2026-10-16",
        "problem": [],
        "details": ""
      }
    ],
    "replacement": {
      "kinds": [],
      "named": null,
      "sub": null,
      "judgements": []
    }
  },
  {
    "id": "refl-contr-02",
    "src": "refl16",
    "r": 3177,
    "old": {
      "kinds": [
        "contrary",
        "subalternation"
      ],
      "named": false,
      "judgements": [
        {
          "t": "alle Menschen können irren",
          "role": "member",
          "form": "A",
          "formStated": false
        },
        {
          "t": "kein Mensch kann irren",
          "role": "member",
          "form": "E",
          "formStated": false
        },
        {
          "t": "einige Menschen können nicht irren",
          "role": "member",
          "form": "O",
          "formStated": false
        }
      ]
    },
    "reports": [
      {
        "flaggedOn": "2026-10-16",
        "problem": [],
        "details": ""
      }
    ],
    "replacement": {
      "kinds": [],
      "named": null,
      "sub": null,
      "judgements": []
    }
  }
];
