# COMPOUND.md

Session history, decisions, tradeoffs, and reasoning for Day 3. Next session starts here.

---

## Session 1 — Day 3 Build (2026-03-06)

### What We Built

A complete multi-page personal review site at `day-3/site/planned/client/`. Five HTML pages, two CSS files, two JS files — no frameworks, no build step, fully self-contained.

```
client/
├── index.html          Home: hero, 3 day overview cards, expandable day summaries
├── quiz.html           Interactive quiz with topic selection and two modes
├── cheat-sheet.html    Git / Tart / curl / Claude Code reference with tabs
├── notes.html          18-topic knowledge base with sticky sidebar
├── resources.html      Linux VM hosting guides, API guide, tools, external links
├── css/
│   ├── style.css       Design tokens, CSS custom properties, typography, layout
│   └── components.css  All UI components: nav, cards, accordion, tabs, quiz UI, etc.
└── js/
    ├── main.js         Dark mode toggle, mobile nav, tab system, active nav state
    └── quiz.js         Full quiz engine: 27 questions, topic selector, two modes, scoring
```

Also built earlier in the session: `day-3/site/one-shot/index.html` — a single-page summary of the learning logs (no planning, no interactivity). Kept for comparison per CLAUDE.md.

---

### How We Got Here — The Interview

Before writing a line of code, Ron was interviewed across 4 rounds. Key findings that shaped every design decision:

**Learning style:**
- Multi-modal: things click through doing, teaching, drawing, and hearing
- Reads summaries to refresh memory; deep-reads only when searching for something specific
- Big picture first, then details — not bottom-up

**Technical baseline:**
- Already strong technically — came in with prior VM, API, and Git experience
- The page should not read like a beginner recap; it should be a reference for someone who thinks in systems

**Goals from the workshop:**
- Host sites and APIs on Linux VMs in a way other devices can access
- Remember everything, not just highlights — the page should cover the full 3 days

**Audience:**
- Colleagues, workshop facilitators, and people outside the workshop
- Needs to look professional, not like a student project

**Style:**
- Clean by default, detail where needed
- Light and dark mode

---

### Planning Decisions — What We Chose and Why

**Multi-page architecture instead of one long page**
Ron explicitly asked for this: "follow best practices and have different HTML files for the different pages." Allows the nav to feel like a real site rather than an anchor-scroll page. Each page has a clear purpose.

**`client/` subdirectory**
Ron's explicit instruction — "create a client directory and place everything in it." Keeps the planned build organised and separates it from any future backend.

**No backend**
Explicitly confirmed unnecessary. Everything — quiz logic, dark mode, tab switching, sidebar highlighting — runs in the browser. No server, no database, no build step.

**No settings page**
Confirmed unnecessary. The only persistent preference is dark/light mode, which lives in the nav bar toggle. A separate settings page would be over-engineering for one toggle.

**Dark/light mode via CSS custom properties**
All colours defined as CSS variables in `:root` and `[data-theme="dark"]`. One attribute on `<html>` switches the entire site. System preference detected via `prefers-color-scheme`; manual override persisted in `localStorage`. This is the correct approach — zero JS for colour switching after initial load.

**Quiz: two modes, three question types**
- Immediate feedback mode: wrong answer triggers explanation before moving on (best for learning)
- End review mode: complete everything first, then see results (best for self-testing)
- Three types: multiple choice, true/false, typed (keyword match) — because Ron said all three, and variety reduces the "I already know which button to press" effect
- Topic selector: chose tags/chips over dropdowns because they let you see and toggle all options at a glance without extra clicks

**Notes: same format for all 18 topics**
Ron confirmed "same format for all notes." Plain explanation → key concepts → expandable deeper dive. Consistent structure means you always know where to look — summary at the top, detail below the fold.

**18 topics in notes — ordered by proximity to workshop content**
Started with what Ron directly used (Jamf, APIs, Webhooks) then moved outward to ecosystem context (Networking, Linux, IAM, DevOps, AI, Security, Prompt Engineering). The order reflects the mental model: what I used → what surrounds it → broader context.

**Resources page: step-by-step, not just links**
Ron's clearest stated goal for the workshop was hosting sites/APIs on Linux VMs. The Resources page directly addresses this with numbered steps — not just "here are some links." The "what I want to learn" becomes an actionable guide.

**Cheat sheet: tabs for the four tools**
Git / Tart / curl / Claude Code. Ron replaced Postman with curl (correct — curl is terminal-native and what he actually used). Claude Code is the terminal CLI version, not the API. Each section: concept explanation → command table → worked examples. This matches Ron's stated reading pattern: summary first, details available below.

---

### Approaches Considered But Not Taken

**Single `index.html` with everything**
Was the initial assumption from CLAUDE.md ("a single HTML file"). Dropped when Ron said "follow best practices and have different HTML files." Correct call — a 5000-line index would be unusable as a reference.

**Settings page**
Proposed, then cut. Ron agreed it was unnecessary — dark mode belongs in the nav, quiz preferences belong on the quiz page itself.

**Postman in the cheat sheet**
Initially proposed. Ron replaced it with curl — the actual terminal tool used. Postman is GUI-driven; curl is command-line and belongs with the other terminal tools.

**Flashcard-style quiz**
Not proposed, but considered. Rejected because passive recognition (see a card, flip it) is weaker than active retrieval (see a question, produce an answer under slight pressure). The quiz format forces recall; flashcards reward recognition.

**External CSS frameworks (Bootstrap, Tailwind)**
Not proposed. No build step, no CDN dependency, no class-name memorisation required. A custom design system with CSS variables is more coherent, loads faster, and is entirely readable without framework knowledge.

**Tabs in notes sidebar**
Not needed — the sidebar with scroll-spy highlighting (IntersectionObserver) is more usable than tabs for 18 topics. Tabs work for 4-5 items; a scrollable sidebar works for any number.

---

### Tradeoffs

**Typed answer quiz questions use keyword matching, not exact match**
Tradeoff: accepting any answer containing a keyword is more forgiving than it should be for some questions, but exact matching would reject correct answers phrased differently. For open-ended reflective questions (like "name a pain point"), keyword matching is the right call. For factual questions with precise answers (/init), the keyword list is tight enough to function as exact match.

**Content written by Claude, not Ron**
The notes and quiz explanations are based on the learning logs and workshop content, but Ron did not write them himself. Tradeoff: the page is immediately usable and comprehensive, but it does not carry Ron's own voice in the notes. Next session could add personal annotation sections if desired.

**27 quiz questions — good baseline, not exhaustive**
Coverage is solid across all days and all main topics. Tradeoff: some topics (macOS management, IAM, security) have no quiz questions yet because they were not covered hands-on in the workshop. A future session could expand the question bank for topics covered in the notes that went beyond the workshop.

---

### Current State

**Working:**
- All 5 pages render correctly
- Dark/light mode toggle works with system preference detection and localStorage persistence
- Quiz: topic selection, both modes, all 3 question types, scoring, results review, retake/new quiz
- Notes sidebar highlights the active section on scroll
- Tabs on cheat sheet and resources pages
- Mobile nav hamburger
- All internal links between pages

**Not yet done / next iteration candidates:**
- No review of the built site against the plan (the Review step of the loop) — session ended before that
- Quiz question bank could be expanded, especially for topics covered in notes but not in the workshop hands-on activities
- Notes content is reference-level but not personalised — Ron's own reflections and observations are in the learning logs but not in the notes page
- Resources page external links are real domains but were not verified live during the session
- The one-shot page (`day-3/site/one-shot/index.html`) was built early in the session as a simple single-page summary — it could be opened alongside the planned site for comparison (that was the original CLAUDE.md intent)

---

### Next Session — Where to Start

1. **Review step**: Open the site in a browser and evaluate it against the plan. What matches? What is missing? What is unexpectedly good or bad?
2. **Quiz expansion**: Add questions for notes topics not yet covered (macOS management, IAM, DevOps, security, networking basics).
3. **Personalisation**: The notes are accurate but generic. Consider adding a personal "Ron's take" callout to each section — one sentence of Ron's own framing.
4. **Resources link verification**: Confirm all external links in resources.html are correct and live.
5. **Day 3 learning log**: `day-3/ron-learning-log.md` is empty — fill it in as part of the compound step.
