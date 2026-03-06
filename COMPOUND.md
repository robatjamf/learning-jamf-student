# COMPOUND.md

Session history for Wadzie's branch. Read this alongside CLAUDE.md at the start of each session.

---

## Session 1 — 2026-03-06

### What Happened

Two distinct activities this session:

1. **Esther Quiz page** — Built `day-3/site/one-shot/esther-quiz.html`, a two-phase friendship quiz. Phase 1 lets a user enter facts about their friend Esther; Phase 2 quizzes them on those facts and scores them. This was a one-shot build (no planning phase).

2. **Swift Functions Quiz** — Wadzie asked to be quizzed on Swift functions conversationally. Claude asked one question at a time and gave immediate feedback on each answer.

3. **Self-Knowledge Quiz** — Wadzie asked to be assessed on how well they know themselves. Claude ran a 10-question personal reflection quiz.

---

### Swift Functions Quiz — Progress & State

**Covered:**
- Q1: Defining a basic function (syntax, `func` keyword, body in `{}`)
- Q2: Calling a function (`sayHello()` — name + parentheses)
- Q3: Functions with parameters (`func greet(name: String)` + string interpolation `\(name)`)
- Q4: Functions with return values — **left off mid-question**

**Where Q4 stalled:**
Wadzie wrote `func add(age: Int, number: Int) -> Int` (correct structure, wrong capitalisation `int` vs `Int`), then answered `return sum` without defining `sum` first. Session diverged before resolving this.

**Next session should:**
- Re-ask Q4 or prompt Wadzie to complete the `add` function with a proper body
- Then continue to: default parameter values, multiple return values (tuples), argument labels vs parameter names, variadic parameters, `inout` parameters

---

### Self-Knowledge Quiz — Wadzie's Profile

| Dimension | Answer |
|---|---|
| Biggest strength | Fun to be with, always up to something |
| Biggest weakness | Lack of confidence |
| Under stress | Sulks / goes quiet |
| Hidden enjoyment | Music and reading the Bible |
| Deepest current want | To know her purpose |
| Energy drains | Negative people |
| Proudest recent moment | Encouraging someone to pray |
| "Someday" dream | A lovely family |
| How others see her | Good |
| Still figuring out | Her purpose |

**Pattern observed:** Wadzie gives a lot to others (energy, encouragement, goodness) but is in a season of searching for personal direction. The confidence gap likely connects to the unresolved purpose question.

---

### Decisions Made

- Swift quiz format: conversational one-question-at-a-time, not a written test — chosen because it mimics how you'd actually explain concepts to someone and surfaces gaps in real time
- Self-knowledge quiz: unscripted, open-ended — chosen to get honest answers rather than structured checkbox responses
- Esther quiz: two-phase (setup then quiz) because the app has no database — the user IS the source of truth

### Dead Ends / Interruptions

- Session started with a plan for the Esther quiz but was interrupted mid-plan twice
- Swift quiz was interrupted by the self-knowledge quiz request
- Q4 of Swift quiz was never fully resolved

---

## What to Carry Forward (from Session 1)

- Resume Swift functions from Q4 (`add` function with return value)
- Wadzie is a reflective learner — she engages well with personal/contextual framing
- She responds to honest feedback and doesn't need hand-holding, but needs encouragement

---

## Session 2 — 2026-03-06

### What Happened

Two activities this session:

1. **Project orientation** — Wadzie asked "tell me about this project" and then "more." Claude walked through the full repo structure, Day 3 exercise design, the 7 Transferable Principles, and Wadzie's current branch state. No code written — this was context-building.

2. **Site update** — Wadzie said she'd updated her 3-day learning logs and asked for the site to be updated. Claude read all three logs, found Day 2 and Day 3 had just been filled in, and added two new sections to `day-3/site/one-shot/index.html`.

---

### What Was Built

**`day-3/site/one-shot/index.html`** — updated with two new sections inserted before the existing Key Concepts section:

- **Day 2 section** — Tart VM commands used, plain-English VM explanation, Postman API calls (POST for bearer token, GET for inventory), push vs pull distinction, webhook payload description
- **Day 3 section** — One-shot page observations, planned vs one-shot comparison, review step findings, most time spent on the compound process, AI reflection (specificity requirement)

All content sourced directly from Wadzie's own words in her learning logs — not paraphrased generically.

---

### Decisions Made

- **Content source**: Used Wadzie's exact learning log answers as source material rather than generic workshop content. This keeps the site personal — the goal of the exercise.
- **Placement**: New sections inserted between Day 1 takeaways and Key Concepts — logical chronological flow.
- **No Day 2 log content initially visible**: First read showed Day 2 and Day 3 logs as empty. User confirmed file was saved on second attempt — content appeared. No code was changed between reads; this was a save-timing issue.

---

### Tradeoffs

- The `planned/` directory still has no `index.html` — only `one-shot/` was built. The planned build (Round 2) hasn't been started yet. This is the "real" build according to the course structure.
- Day 3 learning log answer for "which principle will you remember" is practical/procedural ("how to delete and resume work and create another page"). Included as-is to stay authentic.

---

### Dead Ends

- First attempt to read Day 2 and Day 3 logs returned empty templates. Told user to check saves. No code changes made in between — confirmed as a timing issue, not a file path issue.

---

### Current State of Wadzie's Site

| File | Status |
|---|---|
| `day-3/site/one-shot/index.html` | Complete — Days 1, 2, 3 content + Key Concepts + Glossary + Quiz + 7 Principles |
| `day-3/site/planned/index.html` | Not started — only `.gitkeep` placeholder |
| `day-3/site/one-shot/esther-quiz.html` | Built in Session 1, unchanged |

---

### What to Carry Forward

- **Planned build is the next logical step** — `day-3/site/planned/` is empty. If Wadzie wants to do the full Compound Engineering loop as designed, the planned build is where it happens.
- Wadzie engages with her own words well — keep pulling from her actual log answers, not generic content.
- She notices details: she flagged that the Day 3 log file wasn't updating, suggesting she checks her work carefully.
- The one-shot site is solid. Any planned build should be genuinely different in structure or approach — not just a copy with minor edits.

---

## Session 3 — 2026-03-06

### What Happened

One focused activity: **color scheme overhaul** of `day-3/site/one-shot/index.html`.

Wadzie opened the site, said it didn't feel unique to her, and asked to change the colors. Claude asked what she had in mind — she said "a mood: warm, bright, soft." Claude replaced the entire CSS color palette and also fixed an inline color on the Security Analyst card that would have clashed with the new scheme.

---

### What Was Changed

**Full CSS color palette replaced** — every color token swapped from cold dark navy to warm cream/amber/terracotta:

| Element | Before | After |
|---|---|---|
| Page background | `#0d0d0d` dark charcoal | `#fdf6ef` warm cream |
| Hero gradient | dark navy blues | soft peach `#f9e4d0 → #f9c9a8` |
| Cards | `#111827` near-black | `#fff8f3` warm off-white |
| Accent / labels | `#4b83c0` cool blue | `#c9623f` terracotta |
| Card text | `#cbd5e1` cool grey | `#5c4033` warm brown |
| Concept pills | dark navy | `#fef0e6` warm peach |
| Accordion | dark backgrounds | warm cream with terracotta highlights |
| Quiz correct | green on dark | green on `#eef7ee` warm light green |
| Quiz wrong | red on dark | soft red on `#fdf0ee` warm blush |
| Score number | `#60a5fa` blue | `#c9623f` terracotta |
| Section dividers | `#1f1f1f` | `#f0ddd0` warm sand |
| Footer text | `#334155` cool slate | `#c4a898` warm dusty rose |

Also fixed: inline `style="color:#dbeafe"` on the Security Analyst card — changed to `#c9623f` to match the new palette.

---

### Decisions Made

- **Mood-first approach**: Asked Wadzie for a mood rather than specific hex codes — she said "warm, bright, soft." Translated that into a terracotta/cream palette rather than asking her to pick colors she likely doesn't have names for.
- **Terracotta as the accent**: Warm orange-red (`#c9623f`) chosen as the primary accent — it's bright and warm without being harsh, sits well on cream backgrounds, and feels personal rather than corporate.
- **Kept all structure**: Only colors changed — no layout, content, or section changes. The goal was identity, not a rebuild.

---

### Tradeoffs

- Didn't offer multiple palette options to choose from — went straight to one interpretation of "warm, bright, soft." This was faster but she might have wanted to compare options. She accepted the result without changes.
- Light background means the page now reads differently at night vs. a dark theme. Dark theme had more contrast; this palette is softer and may be harder to read in low light. Not flagged to the user.

---

### Current State of Wadzie's Site

| File | Status |
|---|---|
| `day-3/site/one-shot/index.html` | Complete — warm cream/terracotta palette, Days 1–3 content, Key Concepts, Glossary, Quiz, 7 Principles |
| `day-3/site/planned/index.html` | Not started — only `.gitkeep` placeholder |
| `day-3/site/one-shot/esther-quiz.html` | Built in Session 1, unchanged, still uses dark theme |

---

### What to Carry Forward

- **Wadzie's aesthetic**: warm, bright, soft — terracotta/cream palette is confirmed. Use this as the baseline if the planned build is started.
- **Planned build still hasn't been started** — three sessions in and `day-3/site/planned/` is still empty. If it comes up, the contrast with the one-shot should be structural/content-driven, not just color.
- `esther-quiz.html` still uses the old dark theme — if Wadzie notices the inconsistency, it may need updating to match.
- She expresses feedback simply ("it doesn't feel unique", "warm, bright, soft") — respond to the feeling, not just the literal request. Ask one clarifying question, then act.
