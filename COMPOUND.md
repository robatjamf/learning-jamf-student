# COMPOUND.md

Session history for Sarah's branch (`sarah2`). Each entry captures decisions, tradeoffs, and reasoning — not just outcomes. Read this alongside CLAUDE.md at the start of any new session.

---

## Session 1 — Day 3 Planned Page Build

**Branch:** `sarah2`
**What was built:** `day-3/site/planned/index.html` — complete, works offline, no CDN dependencies.

---

### What We Built

A full single-page review site for Sarah Chidzanga covering all 3 days of the Jamf Pro workshop. Pure HTML/CSS/JS. Sections:

1. **Hero** — name, subtitle, three day badges (lavender/green/blue), animated horizontal timeline
2. **Day 1 Recap** — four expandable blocks: Duck exercise, Global Tech Traditions, Jamf intro, Persona mapping (Help Desk Technician pain points + Sarah's build idea)
3. **Day 2 Recap** — four expandable blocks: Claude Code setup, VMs & snapshots, API Bootcamp (with relatable callout boxes), Webhooks. Plus two inline SVG diagrams (API waiter flow, Webhook vs Polling side-by-side).
4. **Command Cheat Sheet** — three plain-English intro callouts (what curl is, what `\` means, what `| jq .` does), grouped commands with click-to-copy buttons. Groups: Claude Code Setup, Jamf Auth, Jamf API Queries, Token Cleanup.
5. **Glossary Flashcards** — 15 cards with CSS 3D flip, filterable by Day 1–2 / Day 3. Front = term + day chip. Back = definition + everyday analogy.
6. **Knowledge Quiz** — 8 multiple-choice questions with instant feedback, animated SVG score ring that fills and changes colour (green/yellow/red) based on score.
7. **Compound Engineering Loop** — animated SVG circular flow diagram (Plan/Work/Review/Compound), phase cards, 7 Principles as an accordion.
8. **My Reflections** — Sarah's actual quotes from day-1/sarah-log.md and day-2/sarah-log.md, each with a contextual callout explaining why the insight matters.

---

### Planning Decisions (and Why)

**Colour palette: lavender (#c084fc) on dark (#1e1e2e)**
Chosen by Sarah in the planning interview. Deliberately different from the one-shot page (blue on black) so there's a visible contrast between Round 1 and Round 2.

**Relatable analogies on every technical term, applied consistently**
Sarah identified "the terminal and scripting" as her fuzziest topic from Day 2. We chose to add plain-English callouts everywhere technical terms appear — in flashcard backs, in expandable body text, and at the top of the command cheat sheet — rather than only in a glossary section. The rationale: when a term appears in context (e.g. curl in the cheat sheet), that's the moment the explanation is most useful.

**Interactive quiz with score ring rather than static Q&A**
We chose active recall (multiple-choice quiz with feedback) over passive review (static list of answers) because the flashcards already cover the passive side. The quiz forces retrieval. The animated score ring gives immediate visual feedback that motivates finishing all 8 questions.

**Flashcard 3D flip over a simple show/hide**
CSS `rotateY` flip is more satisfying to interact with than toggling text visibility. It signals "front" and "back" kinesthetically — the flip itself communicates that you're seeing a different facet of the same card. No JS needed for the flip itself, just a class toggle on click.

**SVG diagrams built inline (no images)**
The plan specified pure CSS/SVG, no external images, must work offline. We built two: an API flow diagram (You → API waiter → Jamf kitchen → data returned) and a Webhook vs Polling side-by-side panel. Both fit on one row above the Day 2 expandable blocks so context is visual before the text explanation.

**Sticky nav with section anchors**
The page is long enough that without navigation, scrolling to a specific section is tedious. A sticky top nav with `scroll-behavior:smooth` solves this without JS. Labels kept short to fit on one row.

**Scroll reveal animation via IntersectionObserver**
`.reveal` class starts at `opacity:0; transform:translateY(20px)`. IntersectionObserver adds `.visible` when elements enter viewport. Threshold 0.08 so the animation triggers early — content appears before you're fully past it. Chose this over CSS-only scroll animation because IntersectionObserver is reliable across browsers and doesn't require Scroll Timeline API.

**Sarah's actual quotes in the Reflections section (not paraphrased)**
We pulled verbatim from day-1/sarah-log.md and day-2/sarah-log.md and paired each quote with a contextual callout. The rationale: paraphrasing loses the authenticity. The callouts add the "why it matters" layer without rewriting Sarah's voice.

**Day 2 log was sparse — we used what existed**
Several Day 2 sections were blank or minimal (Claude Code first impression, /init, Tart commands). We only quoted what Sarah actually wrote and chose not to fabricate entries. The Reflections section focuses on Day 1 (rich) and the Day 2 entries that do exist (VM, webhook, fuzzy terminal, end-of-day).

---

### Approaches Considered but Not Taken

**Separate pages per day** — rejected because the whole point is a single review reference. Navigating between files adds friction. One long page with anchor nav is faster to use.

**CSS framework (Tailwind, Bootstrap)** — rejected because the requirement is offline-only, no CDN. Also, the custom colour palette and card styles are specific enough that utility classes would generate as much boilerplate as the hand-written CSS.

**Animated SVG compound loop with moving arrows** — we built a static SVG with curved arrows instead of a fully animated loop. An animated `stroke-dashoffset` loop was considered but felt distracting on a reference page where you're trying to read text. Static arrows in phase colours (lavender/blue/yellow/green) communicate the flow clearly enough.

**Tabs instead of expandable blocks for Day 1/2 content** — expandable blocks were chosen because they let you read multiple sections at once (open several and compare). Tabs force you to close one before seeing another.

---

### Tradeoffs Made

**Comprehensiveness vs. load time** — the page is large (one HTML file, all content inline). Tradeoff accepted because offline-first was a hard requirement and the content genuinely needs to be there. The file is fast enough on any modern Mac.

**Quiz feedback: immediate vs. gated** — we chose immediate feedback per question (answer is revealed right after you click) rather than showing all answers only at the end. This is better for learning (you find out while the question is still in context) but means you can't go back and re-answer. Accepted tradeoff.

**Relatable analogies: added to some commands, not all** — the cheat sheet has plain-English descriptions for every command, but the longer analogies (waiter, wristband, conveyor belt) only appear where the concept is genuinely tricky. We didn't add analogies to straightforward commands like `node --version` or `echo $TOKEN` — over-explaining obvious things is noise.

---

### Commands Added in Session

The user asked to add the `claude` command to the cheat sheet. We added three new entries to the Claude Code Setup group:
- `claude` — start Claude Code interactively
- `claude "your question here"` — one-off inline question
- `/compound` — end-of-session distillation command

The `/compound` entry was added because the user had the compound.md file open and it's a natural companion to `/init` in the Claude Code workflow.

---

### Current State

- `day-3/site/planned/index.html` — complete and working
- All interactive features functional: flashcard flip, quiz with score ring, copy-to-clipboard, expandable blocks, scroll reveal, filter buttons
- Page works fully offline — no external dependencies
- Both pages now exist: one-shot (blue/minimalist, Day 1 only) vs. planned (lavender/dark, all 3 days, fully interactive)

---

### What the Next Session Should Focus On

If Sarah wants to iterate further:

1. **Fill in Day 3 log** — `day-3/sarah-log.md` is blank. Once she completes it, her Day 3 reflections could be added to the Reflections section.
2. **Review the page as a user** — open it, run through the quiz, flip all the flashcards. Anything that feels wrong or missing is the next iteration's target.
3. **The "fuzziest topic" was terminal/scripting** — check whether the plain-English callouts in the Command Cheat Sheet and API Bootcamp section actually resolved the confusion, or if more depth is needed anywhere.
4. **One-shot vs. planned comparison** — the contrast between the two pages is the demonstration artifact for the Compound Engineering Loop lesson. Both should be openable side by side.
