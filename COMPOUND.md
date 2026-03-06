# COMPOUND.md — Crown's Session History

Last updated: 2026-03-06 | Branch: `crown1`

---

## What We Built This Session

Four complete HTML pages, all self-contained (no frameworks, no CDN JS):

| File | Description | Status |
|------|-------------|--------|
| `day-3/site/one-shot/index.html` | Quick review page — Crown's 3-day journey, dark theme, card layout | Done |
| `day-3/site/planned/index.html` | Deep planned page — story-driven, Crown's voice, webhooks deep-dive, flashcards, Unsplash photos, screenshot slots | Done |
| `day-3/site/crowns/index.html` | "Crown's Crowns" — 6 famous royal crowns, owners, images, gold theme | Done |
| `day-3/site/apis-personas/index.html` | APIs & Personas at Jamf Pro — API flow diagram, HTTP methods, persona cards, dark overlay banner with quote | Done |

---

## Planning Decisions & Why

### Planned Page — Interview-Driven Design
Before writing a single line of code, we ran a structured interview (via `AskUserQuestion`) covering:
- **Learning style** → "Seeing a real example" — chose story-first structure, not bullet lists
- **Teaching style** → "Tell a story" — every section opens with a scenario ("Imagine you ordered pizza...")
- **Hardest topic** → Webhooks (all three layers: why, payload, end-to-end) — gave it its own deep-dive section with diagram + JSON + numbered steps
- **Study tools** → Visual diagrams + short summaries + flashcards — built all three into the page
- **Page purpose** → "Someone I'm teaching" — first-person voice throughout, "Let me tell you..."
- **Images** → "All of the above" — Unsplash photos per section, inline CSS diagrams, screenshot placeholder slots

**Why this mattered**: The one-shot page was a generic portfolio. The planned page is fundamentally different in tone — it reads like Crown explaining to a friend. That difference came entirely from the interview.

### Flashcards — CSS-Only Flip
Chose `transform: rotateY(180deg)` on click with no JavaScript — just toggling a `.flipped` class via `onclick`. Kept it dependency-free so the page works offline.

**Alternative considered**: A JS-based quiz with scoring. Rejected because Crown's preferred tool was just "test yourself" — scoring adds pressure that wasn't asked for.

### Screenshot Placeholder Slots
Built styled `<div>` placeholders with dashed borders and instructions ("Replace with your screenshot") for Jamf Pro dashboard, Postman API call, and webhook payload. This way the page looks complete even before Crown adds real screenshots.

### Dark Overlay Banner (APIs & Personas page)
Crown asked for "a dark that is drawn on top with a statement." Interpreted as a fixed overlay banner at the top of the page. Used `position: fixed`, `backdrop-filter: blur(8px)`, and an X button to dismiss. Quote: "There is no such thing as a stupid question."

---

## Approaches Considered but Not Taken

- **GitHub Pages deployment**: Attempted to push `crown1` to remote and enable Pages, but the `git push` was interrupted by the user. The `gh` CLI was not installed so we couldn't use `gh pages`. Files are committed locally but not pushed. Next session: run `git push origin crown1` then enable Pages in repo Settings → Pages → Source: `crown1` branch → `/` root.

- **JS frameworks for flashcards**: Considered a Svelte or Alpine.js approach for cleaner interactivity. Rejected to keep the pages self-contained and dependency-free — this is a training repo, not a production app.

- **Single page with anchor nav** (for the planned page): The planned page has no nav bar by design — the page tells a linear story, and a nav bar implies you should skip around. We prioritised the teaching flow over navigation convenience.

---

## Tradeoffs Made

| Decision | What We Gave Up | Why It Was Worth It |
|----------|----------------|---------------------|
| Unsplash photos (CDN) | Offline reliability for section images | Visual grounding for each topic was a stated user need; `loading="lazy"` minimises impact |
| No nav bar on planned page | Easy section jumping | Preserved the story-first reading experience |
| CSS-only diagrams | SVG precision | Zero dependencies, works anywhere, fast to build |
| First-person voice | Professional/resume tone | Crown's stated purpose was "teaching a friend" — recruiter tone would have been wrong |

---

## What the Review Step Surfaced

- The one-shot was built without any user input — it pulled directly from the learning logs. It came out as a standard portfolio page.
- The planned version was built after a 2-round interview. The structural difference is significant: story-driven sections, a dedicated webhook deep-dive, flashcards, and a "What I'm still figuring out" honest section.
- The interview revealed that webhooks were the hardest topic across all three layers (why use them, what the payload looks like, how to wire one up end-to-end) — the planned page addresses all three explicitly.

---

## Current State

### What's Working
- All 4 pages are complete and open correctly in browser
- Planned page fully reflects Crown's learning style (interview-driven design)
- Flashcards flip correctly with CSS-only animation
- Webhook section covers the topic end-to-end with diagram, annotated JSON, and numbered steps
- APIs & Personas page has the overlay banner with dismiss button

### What Still Needs Attention
- **Screenshot slots** in the planned page: Crown needs to add real Jamf Pro dashboard, Postman, and webhook payload screenshots
- **Git push**: `crown1` branch has new commits but was not pushed to remote — the `git push origin crown1` was interrupted
- **GitHub Pages**: Not yet enabled — needs push + Settings configuration
- **one-shot page**: Was built but never committed to git (only planned page was committed in the last commit `607c362`)

### Files Committed in This Session
```
607c362  add Crown's learning logs and planned review page
  - CLAUDE.md
  - Students/crown.txt
  - day-1/crown-learning-log.md
  - day-2/crown-learning-log.md
  - day-3/crown.learning-log.md
  - day-3/site/planned/index.html
```

### Files NOT Yet Committed
```
day-3/site/one-shot/index.html   ← built this session, not staged
day-3/site/crowns/index.html     ← built this session, not staged
day-3/site/apis-personas/index.html ← built this session, not staged
```

---

## Session Log

### 2026-03-06 — Orientation Only
No new builds. User ran `/compound` after a brief project overview. Session confirmed:
- All 4 pages still exist on disk
- Git status shows 3 untracked HTML files still not committed (`one-shot`, `crowns`, `apis-personas`)
- Learning logs for days 1–3 show as deleted in working tree (`D day-1/learning-log.md` etc.) — these may be unstaged deletes or renames; verify before next commit
- Branch `crown1` is still ahead of remote (push still pending)

---

## Next Session Should Start With

1. `git add day-3/site/one-shot/index.html day-3/site/crowns/index.html day-3/site/apis-personas/index.html`
2. `git commit -m "add one-shot, crowns, and apis-personas pages"`
3. `git push origin crown1`
4. Enable GitHub Pages: repo Settings → Pages → Source: `crown1` → `/` root → Save
5. Page will be live at: `https://robatjamf.github.io/learning-jamf-student/day-3/site/planned/`

---

## Crown's Learning Profile (for future sessions)

| Dimension | Preference |
|-----------|-----------|
| Learning style | Seeing a real example — not theory |
| Teaching style | Story-first ("Imagine you're at a restaurant...") |
| Study tools | Visual diagrams + short summaries + flashcards |
| Page purpose | Teaching a friend, not a recruiter |
| Hardest topic | Webhooks — all three layers |
| Still needs | More API practice, hands-on webhook wiring |
