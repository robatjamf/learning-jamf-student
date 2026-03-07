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

### Next Session — Where to Start (carried into Session 2)

1. **Review step**: Open the site in a browser and evaluate it against the plan. What matches? What is missing? What is unexpectedly good or bad?
2. **Quiz expansion**: Add questions for notes topics not yet covered (macOS management, IAM, DevOps, security, networking basics). ✅ Done in Session 2.
3. **Personalisation**: The notes are accurate but generic. Consider adding a personal "Ron's take" callout to each section — one sentence of Ron's own framing. ✅ Partially done in Session 2 (Claude Code section).
4. **Resources link verification**: Confirm all external links in resources.html are correct and live.
5. **Day 3 learning log**: `day-3/ron-learning-log.md` was filled in by Ron before Session 2.

---

## Session 2 — Quiz Expansion + Day 3 Personalisation (2026-03-06)

### What We Built

**Quiz expanded: 27 → 42 questions** in `day-3/site/planned/client/js/quiz.js`

New questions added by category:
- **Day 3 experience** (ids 28–31) — draws directly from `day-3/ron-learning-log.md`: one-shot vs planned comparison, planning phase as the longest step, context as the critical variable, architecture vs code-detail focus shift
- **macOS Management** (ids 32–34) — Gatekeeper, SIP, FileVault
- **Networking** (ids 35–36) — DNS, TCP vs UDP
- **IAM** (ids 37–38) — Identity Provider role, HR → IdP → Jamf flow
- **DevOps** (ids 39–40) — CI/CD definition, Infrastructure as Code
- **Security** (ids 41–42) — Principle of Least Privilege, CIA Triad

**New topic filters added** to the TOPICS array: macOS, Networking, IAM, DevOps, Security — now selectable in the quiz setup screen.

**Ron's take callout added** to the Claude Code section of `notes.html` — a styled block drawing directly from the learning log: planning felt excessive but paid off, the one-shot vs planned comparison as proof that context is the variable, and the shift from code details to architecture.

---

### How We Got Here

Ron filled in `day-3/ron-learning-log.md` before this session. Key reflections that shaped the work:

- The one-shot didn't look bad but wasn't what he wanted — showed the importance of context
- The planning process was the longest part — self-reflection questions, back-and-forth to refine the plan
- The biggest difference between one-shot and planned was the amount of information
- Everything matched the plan in the review step
- AI is highly efficient if used well; effort shifts from code details to architecture

These reflections were the direct source for the Day 3 quiz questions and the Ron's take callout. The goal was to make the site reflect his actual experience, not just generic AI/compound loop content.

---

### Decisions Made

**Day 3 quiz questions draw from the learning log, not generic theory**
The existing Day 3 questions (21–27) covered the Compound loop and Claude Code mechanics. The new questions (28–31) are grounded in what actually happened during the workshop — the one-shot result, the planning effort, the review outcome. This makes them more meaningful as self-review material.

**Ron's take added to Claude Code section only (not all 18 topics)**
The full ask from Session 1 COMPOUND.md was to add a Ron's take callout to every notes section. We only did the Claude Code section this session — the one where Ron had the most direct, specific reflections. The remaining 17 sections would benefit from the same treatment but would require Ron to provide his own framing for each topic.

**Styling the Ron's take callout inline rather than a CSS class**
The callout uses inline styles (accent-coloured left border, surface background) rather than adding a new `.ron-take` CSS class. Reason: one instance doesn't justify a new class, and the inline approach is readable and self-contained. If more callouts are added across notes sections, a dedicated class would be worth extracting.

---

### Tradeoffs

**New questions assigned to day: 1 or 2, not day: 3**
macOS, Networking, IAM, DevOps, and Security questions were tagged with their most relevant day (day 1 or 2) rather than day 3. This means selecting "Day 3" in the quiz will not show them. This is correct behaviour — those topics belong to Days 1 and 2 context. If selecting "Day 3" should also show broader ecosystem topics, a future change could revisit topic-to-day mapping.

**Quiz now has 42 questions but no explicit progress indicator of new vs old**
The setup screen shows the count of questions in the selected filter ("X questions ready") — that number updates automatically. No other UI changes needed.

---

### Current State

**Working:**
- All 5 pages render correctly
- Quiz: 42 questions, 12 topic filters (including 5 new: macOS, Networking, IAM, DevOps, Security)
- Notes: Claude Code section has Ron's take callout
- All Session 1 functionality unchanged

**Still to do:**
- Ron's take callouts for the other 17 notes sections — requires Ron's own framing per topic
- Resources page external link verification
- Git hygiene: three deleted learning-log.md files (`day-1/learning-log.md`, `day-2/learning-log.md`, `day-3/learning-log.md`) are unstaged deletions — decide whether to commit or restore

---

### Next Session — Where to Start

1. **Ron's take for remaining notes sections** — 17 sections still have no personal callout. Most impactful candidates: Jamf & MDM, APIs, Webhooks, VMs, Prompt Engineering. Requires Ron's own words.
2. **Resources link verification** — Open `resources.html` and check every external link.
3. **Git commit** — Stage and commit the Session 2 changes (quiz.js and notes.html). Decide on the three deleted learning-log.md files.
4. **PR to main** — When satisfied, open a PR from branch `ron` into `main`.

---

## Session 3 — Mobile UX Fixes + Nav Dropdown Bug (2026-03-08)

### What We Fixed

Two commits in this session, both CSS-only, no HTML or JS changes.

**Commit 1: Mobile UX improvements across all five pages** (`4678615`)
Implemented a 14-bug Mobile UX Improvement Plan. All changes in `style.css` and `components.css`.

| ID | Problem | Fix |
|----|---------|-----|
| G1 | Nav hamburger breakpoint was 700px — nav links overflowed on landscape phones | Raised breakpoint to 768px |
| G2 | Mobile dropdown appeared behind page content | Added `z-index: 99` to `.nav-links` inside the 768px media query |
| G3 | Too much dead space at top of pages on mobile | Reduced `.page-content` padding-top from `nav + 48px` to `nav + 24px` at ≤ 768px |
| G4 | Side padding too wide on very small phones | `.container` padding reduced to `--space-md` (16px) at ≤ 480px |
| H1 | Hero section too tall on mobile | Reduced hero padding at ≤ 600px |
| H2 | Accordion tap targets too wide-padded | Reduced summary/body padding at ≤ 600px |
| H3 | Day cards used 32px padding on mobile | Reduced to 24px (`--space-lg`) at ≤ 600px |
| Q1 | Quiz mode radio cards overflowed horizontally | Changed `.radio-group` to `flex-direction: column` at ≤ 600px |
| Q2 | Question card padding too large on mobile | Reduced to `--space-lg` at ≤ 600px |
| C1 | Cheatsheet section padding too large on mobile | Reduced to `--space-lg` at ≤ 600px |
| N1 | Notes sidebar was an 18-item vertical wall on mobile | Converted to horizontal scrollable pill strip with hidden scrollbar at ≤ 768px |
| N2 | Note section padding too large on mobile | Reduced to `--space-lg` at ≤ 600px |
| R1 | Code blocks in Resources overflowed card boundaries | Added `min-width: 0` to `.step-content` (allows flex child to shrink below content width) |
| R2 | Resource card padding too large on mobile | Reduced to `--space-lg` at ≤ 600px |

Three media query blocks were added/extended:
- `style.css`: extended `@media (max-width: 768px)` + new `@media (max-width: 480px)`
- `components.css`: updated `@media (max-width: 768px)` (nav breakpoint, z-index, pill strip) + new `@media (max-width: 600px)` (all padding reductions, radio stack, min-width fix)

**Commit 2: Fix closed nav dropdown overlapping navbar** (follow-up bug)

The G2 fix (adding `z-index: 99` to `.nav-links`) introduced a new visual bug: a black rectangle covering most of the navbar, with only the bottom few pixels of nav content visible below it.

Root cause (CSS stacking context deep-dive):
- `.navbar` has `position: fixed; z-index: 100` — this creates its own stacking context
- `.nav-links` is a child of `.navbar` and has `position: fixed; z-index: 99` (from the G2 fix)
- `z-index: 99` inside `.navbar`'s stacking context means `.nav-links` paints ON TOP of navbar siblings (brand text, toggle) — not on top of page content as intended
- The closed dropdown uses `transform: translateY(-110%)`, which is not enough to push the element fully off-screen: with a ~216px dropdown and `top: 60px`, the bottom edge sits at y≈38px — inside the navbar area
- Result: the bottom ~38px of the closed dropdown (solid dark background in dark mode) painted over the top portion of the navbar

The math for `-110%`: for `translateY(-110%)` to fully push the dropdown above y=0, the dropdown would need to be **600px tall**. A 5-item mobile menu is ~216px. `-110%` was always insufficient — the z-index change just made the overlap newly visible.

Fix: changed `transform: translateY(-110%)` to `transform: translateY(calc(-100% - var(--nav-height) - 1px))`.

This guarantees: `top + height - (100% + nav-height + 1px) = 60 + h - h - 60 - 1 = -1px`. The bottom edge is always 1px above the top of the viewport, regardless of dropdown height.

---

### Decisions Made

**Only CSS changes — no HTML or JS**
The Mobile UX plan was scoped to CSS from the start. All layout issues were solvable at the presentation layer. This keeps the fix focused and makes it easy to revert.

**Notes sidebar pill strip rather than a separate mobile layout**
The alternative was to just collapse or hide the sidebar on mobile. The pill strip is better: it preserves navigation affordance (you can still jump between topics) while using horizontal space efficiently. The scrollbar is hidden but the strip is scrollable — common pattern on mobile.

**`min-width: 0` for code overflow (R1), not `overflow-x: scroll` on the pre**
The issue was that `.step-content` (a flex child) can't shrink below its content width by default. Adding `overflow-x: auto` to the `<pre>` won't help if the flex child itself doesn't shrink. `min-width: 0` fixes it at the correct level — the flex child can now compress, and the pre's existing `overflow-x: auto` handles the scroll.

**`calc(-100% - var(--nav-height) - 1px)` over a fixed large value like `-200%`**
A large fixed percentage would work for typical content but is a magic number. The calc approach is semantically clear: "move the element up by exactly its own height plus the navbar height plus a 1px buffer." It will remain correct even if the dropdown grows with more nav items.

---

### Tradeoffs

**z-index: 99 on `.nav-links` stays, despite the stacking context issue**
The original reason for z-index: 99 was to ensure the open dropdown appears above page content. That requirement is still valid. The fix targets the root cause (transform not moving element fully off-screen) rather than removing the z-index and accepting that the open dropdown might render under other positioned elements.

**No `pointer-events: none` added to the closed state**
Was considered as an additional guard — if the element is in the viewport area when closed, pointer events would hit it. But with the calc fix, the element is guaranteed off-screen, making this unnecessary. Prefer the minimum change.

---

### Current State

**Working:**
- All 5 pages render correctly on desktop and mobile
- Mobile nav hamburger collapses at 768px breakpoint (covers all standard phones and small tablets)
- Nav dropdown slides down cleanly, no black rectangle artifact
- Notes sidebar converts to horizontal pill strip on mobile
- Quiz mode selector stacks vertically on narrow screens
- Code blocks in Resources scroll within their cards
- All padding scales down appropriately on ≤ 600px screens
- All Session 1 and 2 functionality unchanged

**Still to do:**
- Ron's take callouts for the other 17 notes sections
- Resources page external link verification
- PR from branch `ron` into `main`
