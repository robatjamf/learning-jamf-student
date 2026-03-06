# COMPOUND.md — Lucile's Day 3 Session

_Last updated: 2026-03-06_

---

## What We Built

Two HTML review pages summarising Lucile's 3-day Jamf training workshop:

### Round 1 — One-Shot (`day-3/site/one-shot/index.html`)
Built without upfront planning, as a baseline. Result: a warm, editorial page with a **buffalo spirit animal theme** — cream/brown palette (`#f5efe6`, `#5c3d2e`), Georgia serif typography, a giant ghost buffalo watermark, a 3-day vertical timeline, quote cards, a spirit animal spotlight section, and a key insights list. Entirely static HTML. Finished and working.

### Round 2 — Planned (`day-3/site/planned/index.html`)
Built after deliberate planning. Dramatically more polished and interactive:
- **Dark theme** (`#0f0f0f` bg, `#1a1a1a` surface, `#6ee7b7` green accent)
- **Sticky nav** with scroll-spy active state and backdrop blur
- **Animated hero**: floating buffalo emoji (CSS `float` keyframe), gradient-shift text on the name, pulsing badge, dot-grid background via `radial-gradient`
- **Hover cards** for the 3-day timeline (lift on hover with shadow + border glow)
- **Quote section**, **Key Insights**, and an **interactive Quiz** (knowledge check with score feedback)
- **Scanline shimmer** animation on cards
- Fully self-contained single-file HTML — no external dependencies

---

## Student Context (Lucile)

- **Spirit animal:** Buffalo — "part of the Big Five, and kinda fast"
- **Background interest:** AI/robotics evolution drew her into the field
- **Day 1 highlights:** Icebreakers (duck drawing, Dutch liquorice), persona mapping (Enterprise IT Admin), Git basics
- **Day 2 highlights:** Spun up a Tart VM, used Postman to POST a category to Jamf Pro, APIs clicked as "the waiter between frontend and backend", webhooks still fuzzy — event triggers payload to URL, wants more hands-on practice
- **Day 3:** Building with Claude Code using the Compound Engineering Loop

---

## Planning Decisions and Reasoning

### Why dark theme for the planned page?
The one-shot used warm/cream — felt personal and comfortable. For the planned page, we wanted to signal "intentional, technical, different." Dark + green accent reads as developer-tool aesthetic, which fits the AI-native development theme of Day 3.

### Why a quiz/knowledge check section?
Active recall beats passive reading. Flashcard-style felt too low-friction. A quiz with immediate score feedback creates a moment of honest self-assessment — did I actually retain this? Useful for end-of-workshop reflection and a good showcase of what planned building enables vs. one-shotting.

### Why keep the buffalo?
It's Lucile's own symbol. The planned page could have gone fully abstract/generic but grounding it in her chosen spirit animal keeps it personal. The floating animation and glow shadow give it more presence than the watermark version in Round 1.

### Why single-file HTML with no external deps?
Keeps it portable and shareable. No CDN dependencies means it works offline, opens directly from Finder, and can be committed as a clean artefact. The trade-off: verbose CSS in `<style>` — worth it for simplicity.

---

## Approaches Considered but Not Taken

- **Tailwind CSS**: Rejected — adds CDN dependency, fights with custom animations
- **Two separate CSS files**: Rejected — complicates the "single artefact" goal
- **Flashcard UI** instead of quiz: Rejected — passive, less compelling for a review page
- **Keeping the warm palette** in the planned page: Rejected to create a clear visual contrast between one-shot and planned builds (the contrast is the lesson)
- **External JS framework**: Rejected — vanilla JS is sufficient for quiz logic; frameworks would obscure the simplicity

---

## Tradeoffs Made

| Decision | What we gained | What we gave up |
|---|---|---|
| Dark theme for planned page | Sharp visual contrast vs. one-shot | Warm personality of the buffalo theme |
| Single-file HTML | Portability, zero deps | DRY CSS structure |
| Interactive quiz | Active recall, engagement | Simplicity of static page |
| Custom animations (CSS only) | No JS overhead, silky | Slightly verbose CSS |

---

## What the Review Would Surface (Anticipated)

The Day 3 learning log (`day-3/ Lucile - learning-log.md`) template is still blank — Lucile hasn't filled in her post-build reflections yet. That's the next natural step.

The planned page is substantially better than the one-shot in:
- Visual polish and depth
- Interactivity (quiz)
- Navigation structure
- Animation quality

The one-shot is not a failure — it's the control condition. Its warmth and personality are features. The planned page shows what structure + iteration produces.

---

## Current State

| File | Status |
|---|---|
| `day-3/site/one-shot/index.html` | Complete — warm buffalo theme, static |
| `day-3/site/planned/index.html` | Complete — dark/animated, interactive quiz |
| `day-3/ Lucile - learning-log.md` | Template only — not filled in |
| `Students/Lucile.txt` | Filled: "Buffalo — part of the Big Five, kinda fast" |
| Git branch | `Lucile` |

---

## What the Next Session Should Focus On

1. **Fill the learning log** — `day-3/ Lucile - learning-log.md` has blank prompts waiting for Lucile's reflections on each phase (one-shot, planned, review, end-of-day)
2. **PR to main** — when ready, open a pull request from `Lucile` branch into `main`
3. **Optional refinements to planned page** — quiz could track which questions were missed; principles section could be added (the 7 transferable AI principles from `day-3/resources/principles.md`)
4. **Compound the learning log** — once filled in, those reflections are rich source material for another compound pass

---

## Compound Engineering Loop — How This Session Used It

1. **Plan** — Identified: who is Lucile, what should the page convey, what's the difference between one-shot and planned
2. **Work** — Built both pages; planned page iterated on one-shot with more ambition
3. **Review** — Evaluated: planned page succeeds on interactivity, polish, and contrast; learning log still needs filling
4. **Compound** — This file

The loop works. The quality gap between one-shot and planned page is the demonstration.
