# COMPOUND.md — Amanda's Review Page

Session history across all build sessions. Most recent session at top.

---

## Session 2 — March 2026: Scrapbook Rebuild

### What We Built

Full rebuild of `day-3/site/planned/index.html` from scratch. The previous Apple-aesthetic page was replaced with a scrapbook theme. Same filename, entirely new design and structure.

**What triggered the rebuild:**
- Amanda's Day 3 learning log was now complete with real reflections
- She saw a peer's page at the gallery walk that used expandable notes with Claude-expanded knowledge — wanted the same
- She wanted a more distinctive visual style, different from the Apple aesthetic of the first session

### Current State of `planned/index.html`

**Theme:** Warm scrapbook — cream/white background, torn paper edges between sections, sticky notes, tape strips, photo corners, page number tags per day.

**Font:** `Permanent Marker` (Google Fonts) for all titles, day headings, sticky note quotes, flashcard terms, cover stats. `Inter` for all body text, notes, labels, badges — keeps readability at small sizes.

**Colors:**
| Element | Value |
|---------|-------|
| Cover background | `#F0E8CC` (richer, deeper cream — intentionally warmer than rest of page) |
| Page background | `#F7F5F2` cream / `#EEF6F0` sage (alternating sections) |
| Cards | `#FFFFFF` white |
| Sticky yellow | `#FFE566` |
| Sticky green | `#95E06C` |
| Sticky coral | `#FF6B6B` |
| Sticky blue | `#5BC8F5` |
| Tape amber | `rgba(255,185,0,0.50)` — cover uses `rgba(255,185,0,0.72)` (bolder) |
| Tape sage | `rgba(100,190,120,0.50)` — cover uses `rgba(60,180,140,0.68)` (bolder) |
| Accent / terracotta | `#E8472A` |
| Dark sections | `#1E1E1E` (flashcard section) |

**Section order:**
1. Cover — title, stats, ownership label ("This notebook belongs to: Amanda")
2. Day 1 — torn edge, sticky note (yellow), day card with photo corners + tape + page tag
3. Day 2 — sticky note (coral), day card
4. Day 3 — sticky note (blue), day card
5. Flashcards — dark section, index card style, 20 cards, 3D flip, keyboard/swipe nav
6. Curl Cheat Sheet — ruled paper look, tape strip at top, copy-to-clipboard
7. Skills — sage background, pill tags that wobble on hover
8. Closing quote — terracotta section, Amanda's Day 3 key quote large
9. Footer

**Scrapbook elements per day card:**
- Photo corners (CSS L-brackets in all 4 corners)
- Extra tape strips at different angles per day, each day a different colour
- Page number tag hanging off bottom-right corner (pg. 01 / 02 / 03)
- Tape strip holding the card's top edge
- Card lifts on hover (`translateY(-4px)`)

**Expandable sections (all 3 days):**
- Closed: teaser text + tape-style expand button with animated chevron
- Open: two panels animate in sequentially —
  1. "My notes" — sticky-coloured panel slides in from left with slight rotation
  2. "Deeper dive" — white card fades up from below with 150ms delay
- Collapse is smooth, reverses the animation

**Deeper dive visuals (key decision — moved away from paragraphs):**
- Day 1 (MDM): 6-tile icon grid of what MDM can do + yellow stat callout ("75,000+ orgs") + dive-fact box
- Day 2 (APIs vs Webhooks): direction indicator cards (YOU→SERVER / SERVER→YOU) + proper comparison table with 4 rows + practical tell callout
- Day 3 (Compound loop): one-shot vs planned bullet comparison (red/green) + 2×2 loop step grid (Plan/Work/Review/Compound)

**Animations:**
- Page load: cover elements fade up sequentially (0.2s, 0.4s, 0.6s, 0.8s, 1.0s delays)
- Scroll entrance: `.anim` class — `translateY(36px) rotate(-0.8deg)` → reset, `cubic-bezier(0.34,1.2,0.64,1)` spring easing
- Sticky notes wobble on hover (`@keyframes wobble` ±3deg)
- Skill pills lift + rotate on hover
- Expand/collapse: `max-height` transition with `cubic-bezier(0.16,1,0.3,1)` ease

### Planning Decisions & Why

**Scrapbook over other themes:**
Amanda reviewed 6 theme options (Terminal/Hacker, Editorial/Magazine, Glassmorphism, Notebook/Handcrafted, Retro/Y2K, Scrapbook, Blueprint, Newspaper, Neon/Cyberpunk). Scrapbook won because it felt personal and warm without being too childish — and the layered, tactile quality of scrapbook elements (tape, sticky notes, photo corners) maps naturally onto the "notes from a workshop" concept.

**Permanent Marker for headings, Inter for body:**
Permanent Marker was chosen because it's bold and readable at large sizes — unlike Caveat (first attempt) which felt inconsistent at small sizes. However, Permanent Marker at small sizes gets hard to read, so all body text, notes content, labels, and badges use Inter. This split is intentional and important to maintain.

**Expandable notes with two zones:**
The gallery walk peer's page used expandable notes, and Amanda wanted the same. We structured each expand into two distinct zones — "My notes" (her actual words from learning logs, on a sticky-coloured panel) and "Deeper dive" (Claude-expanded knowledge, on a white card). The visual separation makes clear which is Amanda's voice and which is additional context.

**Deeper dives as visuals, not paragraphs:**
First attempt at deeper dives was dense paragraphs. User asked for "more easy to read visuals." Replaced with:
- Icon grids for MDM capabilities (scannable at a glance)
- Direction indicators + comparison table for API vs Webhook (the most important concept to get right)
- Shot comparison + loop grid for Day 3 (the loop steps need to be individually digestible)
Tables and grids work here because the content is genuinely comparative — paragraphs were hiding the structure.

**Cover: richer cream + bolder tape:**
The cover background is deliberately different from the rest of the page (`#F0E8CC` vs `#F7F5F2`) to make it feel like a distinct "cover page." Tape on the cover is more opaque than on day sections (0.72 and 0.68 vs 0.50) so it reads clearly as a design element on the cover.

**"This notebook belongs to: Amanda" label:**
Added to cover as a dashed-border label with tape strip above it. Position: below the stats, bottom of cover. Styled with Inter for the label line (readable at small size) and Permanent Marker for "Amanda" (the name should look handwritten). Feels like a real notebook someone has claimed.

**Per-day colour coding:**
- Day 1: yellow sticky + amber tape + terracotta badge
- Day 2: coral sticky + sage tape + olive badge
- Day 3: blue sticky + blue tape + steel blue badge
Each day has a consistent colour thread running through sticky note, expand button, notes panel, and page tag.

### Approaches Considered but Not Taken

- **Notebook/Handcrafted theme** — also on the shortlist, but scrapbook is richer and more layered. Notebook felt too minimal.
- **Glassmorphism** — vivid gradient + frosted cards. Interesting but felt disconnected from the "notes from a real workshop" narrative.
- **Caveat font** — used in the first draft, replaced with Permanent Marker. Caveat at small sizes is inconsistent; Permanent Marker has more personality at headings scale but needs Inter as a backup for body text.
- **Single `font-family: var(--hand)` throughout** — tried this briefly, the panel labels and note questions were very hard to read in Permanent Marker at sub-1rem sizes.
- **Retaining the Apple-aesthetic page** as the main page — rejected. The scrapbook is a full rebuild, not a skin. The Apple page's structure (nav, hero, alternating dark sections) didn't translate.
- **Adding navigation bar** — not included in the scrapbook rebuild. The original page had a fixed frosted-glass nav. Dropped because the scrapbook aesthetic is scroll-first, and a dark nav bar would break the warm paper feel.

### What Still Needs Attention

- **Mobile layout** — not tested on a real device. The grid layouts (mdm-grid, loop-grid, shot-compare, direction-row) may need `flex-direction: column` at narrow widths. The `@media (max-width: 580px)` block currently only handles card padding, not the inner visual grids.
- **Compare table on mobile** — the two-column comparison table will likely overflow or wrap awkwardly on small screens. Needs a `display:block` or stacking treatment below ~500px.
- **Day 3 section** previously had 7 Transferable Principles (from the original Apple page). These were dropped in the rebuild because the Compound loop grid already covers the core ideas. If Amanda wants them back, they could be added as an expandable inside the Day 3 deeper dive.
- **Page tag overlap** — the `pg. 01/02/03` tags are positioned `bottom: -12px` on the cards. On some viewport sizes they may be clipped by the section's overflow. Worth checking if they're fully visible.

---

## Session 1 — March 2026: Apple Aesthetic Build (original)

### What We Built

Two HTML pages in `day-3/site/`:

| File | Status | Description |
|------|--------|-------------|
| `one-shot/index.html` | Complete | Quick build, no planning. Dark theme, static cards, summary-only. Kept for comparison. |
| `planned/index.html` | Complete (now rebuilt — see Session 2) | Apple aesthetic, interactive flashcards, scroll animations. |

### Original `planned/index.html` Design (for reference)

**Theme:** Apple product page aesthetic — alternating dark navy / off-white / light blue tint sections, frosted-glass nav, hero with radial blue glow, large section titles.

**Font:** `-apple-system, BlinkMacSystemFont, "SF Pro Display"` — Apple system stack

**Section rhythm:**
| Section | Background |
|---------|-----------|
| Hero | `#070c1a → #0d1b3e` deep navy gradient |
| Day 1 | `#f5f5f7` off-white |
| Day 2 | `#eef4ff` light blue tint |
| API vs Webhook | `#f5f5f7` off-white |
| Commands | `#0c2d6b` deep blue |
| Flashcards | `#f5f5f7` off-white |
| Day 3 | `#eef4ff` light blue tint |
| Skills | `#0050c8 → #0082ff` Apple blue gradient |
| Footer | `#070c1a` |

**Interactive elements retained in Session 2 rebuild:**
- Flashcard deck: 20 glossary terms, CSS 3D flip, keyboard nav, swipe support
- Copy-to-clipboard on 4 curl commands

### Planning Decisions (Session 1)

**Goal: "Show someone"** — not a study tool. Content had to be self-explanatory to an outside viewer, which shaped section order, content depth, and why flashcards beat a quiz.

**API vs Webhook clarifier** — Amanda flagged this as "still fuzzy" in her Day 2 log. Got its own full section with side-by-side comparison.

**Day 3 content was placeholder** — Amanda's Day 3 learning log was blank when the page was first built. The Day 3 section had "Fill this in after the session" placeholders. These are now populated in Session 2.

### Design Iterations (Session 1)

- Iteration 1: All light — too white, no contrast
- Iteration 2: Heavy dark sections — too similar to one-shot page
- Iteration 3 (final): Hero dark blue, days tinted, commands dark, skills gradient

### Dead Ends (Session 1)

- Quiz mode (rejected — not shareable, less interesting to watch)
- Tabbed layout by day (rejected — single scroll more Apple-like)
- Dark hero fading to light (not implemented — hard cuts are the Apple pattern)
- Tart VM commands (excluded — curl was the hands-on work)
