# COMPOUND.md — Naishe's Session History

Accumulated context across all sessions. The next session starts here.

---

## Session 1 — Full Review Page Build

### What We Built

A comprehensive 7-page interactive HTML review site at `day-3/site/full-review/index.html` that covers the entire 3-day Jamf Pro workshop. This is a *third* page beyond the course-defined one-shot and planned builds — Naishe built it post-workshop to consolidate everything she learned.

**Current state: complete and working.**

```
day-3/site/
├── one-shot/          ← Round 1 (quick build, no planning)
├── planned/           ← Round 2 (planned build, green/beige, per-section nav)
└── full-review/
    └── index.html     ← THIS — 7-page interactive review (built this session)
```

---

### The 7 Pages

| # | Page | What's in it |
|---|------|--------------|
| 1 | Home / Cover | Stats (3 days, 20 flashcards, 10 quiz Qs, 4 people to thank), tags, nav hint |
| 2 | Day 1 | Jamf discovery, cultural exchange (roadmap.sh, DaVinci Resolve), Security Analyst persona, key quote |
| 3 | Day 2 | VM "house inside a house" analogy, API restaurant analogy, POST request, webhook push/pull |
| 4 | Day 3 | One-shot vs planned build, the review step (ocean blue → green/beige), core AI principle banner |
| 5 | Flashcards | All 20 course terms as a **scrollable grid** — click any card to flip (front = term, back = definition + analogy) |
| 6 | Quiz | 10 questions across all 3 days, instant right/wrong feedback, progress bar, score + restart |
| 7 | Gratitude | Personal thank-you cards for Kelly, Rob, Josh, and Nate |

---

### Design Language

Inherited from `planned/index.html`:
- **Colors:** `--green: #62b856`, `--green-dk: #4a9a3f`, `--beige: #b8894a`, `--bg: #fdf6e8`
- **Fonts:** Playfair Display (headings), Inter (body)
- **Navigation:** sticky top bar (brand + page title + counter), bottom nav (prev/next arrows + dot indicators), keyboard arrow key support
- **Per-section pages:** `display: none / flex` toggled via `.active` class — no scrolling between sections

---

### Planning Decisions & Why

**Why a separate `full-review/` page instead of modifying `planned/`?**
The planned page was Naishe's Day 3 artefact — the output of the Compound Engineering loop exercise itself. Overwriting it would lose the artefact. The full-review is a *new thing* built on top of the workshop, not a revision.

**Why flashcards as a scrollable grid instead of one-at-a-time navigation?**
Initially built with prev/next arrows and a counter (one card visible). Naishe asked to make them scrollable — meaning she wanted to see all 20 at once and browse freely, not be locked into a linear sequence. The grid layout lets her scan for terms she wants to review rather than clicking through 20 cards in order. Active recall on demand > forced linear progression.

**Why include a quiz?**
Flashcards are passive recognition (you see the term, you remember the definition). A quiz forces active recall under slight pressure — you have to commit to an answer. The combination covers both ends of the memory spectrum.

**Why personal gratitude cards for Kelly, Rob, Josh, Nate?**
Naishe requested this explicitly. It also reinforces the "people-first" theme of Day 1 (persona empathy, cultural exchange). The page wouldn't feel complete without acknowledging the humans who built the experience.

**Why the principle banner on Day 3?**
"AI will use what we told it and not use what we didn't" is the sharpest thing Naishe wrote in her learning log. Making it a full-width green gradient banner elevates it from a quote to a *statement* — appropriate for the core takeaway of the whole workshop.

---

### Approaches Considered but Not Taken

- **Modifying `planned/index.html` directly** — rejected to preserve the workshop artefact
- **Single scrollable page** — rejected because Naishe explicitly wanted per-section pages (she changed from scrollable to paged on her planned build and liked the result)
- **One-at-a-time flashcard navigator** — built first, then replaced with scrollable grid at Naishe's request. The navigator (prev/next + counter) felt like a constraint, not a study tool.
- **Separate HTML files per section** — rejected in favour of a single file with JS page switching (simpler, no server needed, works from `file://`)

---

### Tradeoffs Made

| Decision | What we gained | What we gave up |
|----------|---------------|-----------------|
| 7-page single-file | No server, works offline, easy to share | All logic in one file (~650 lines) |
| Scrollable flashcard grid | Browse freely, see all terms at once | Can't keyboard-navigate between cards |
| JS-rendered flashcards & quiz | Content lives in data arrays, easy to update | Slightly more complex than static HTML |
| Green gradient principle banner | Visual impact, memorable | Takes up significant vertical space |

---

### What the Review Surfaced

- **First draft:** flashcards were one-at-a-time with arrows — felt like a carousel, not a study tool. Fixed immediately.
- **Learning log was initially empty** — Naishe had opened the file but hadn't saved content yet. Once filled, the reflections were strong and personal.
- **One blank field** in the learning log ("What did the agent catch?") — surfaced in review, Naishe filled it with the ocean blue vs. green/beige colour story. That answer became one of the strongest in the log.

---

### Naishe's Personal Identity (always include this context)

- **Name:** Naishe Rowland
- **Identity:** Afro-beats artist, singer
- **Favourite colours:** green and beige (always use these — the one-shot failure was ocean blue)
- **Branch:** `naishe`
- **Key insight she landed on:** "AI will use what we told it and not use what we didn't"

---

### Files Committed This Session

- `day-3/Naishe-learning-log.md` — committed on branch `naishe` (commit `cf517c6`)
- `day-3/site/full-review/index.html` — created but **not yet committed**

---

### Where We Left Off

**Working well:**
- All 7 pages render correctly
- Flashcard grid scrolls, all 20 cards flip individually
- Quiz tracks score, gives instant feedback, progress bar, restart
- Gratitude page is personal and complete
- Keyboard arrow navigation works across all pages

**Next iteration should consider:**
- Committing `full-review/index.html` to the `naishe` branch
- Opening a PR into `main` if Naishe wants to share it
- Adding a "reset all flashcards" button (some may stay flipped if you scroll back)
- The quiz could randomise question order on restart for more challenge
- Could add a Day 2 quick-reference section pulling from `day-2/quick-reference.md`
