# COMPOUND.md — Amanda's Review Page

Session: Day 3 workshop build — March 2026
Branch: Amanda

---

## What We Built

Two HTML pages in `day-3/site/`:

| File | Status | Description |
|------|--------|-------------|
| `one-shot/index.html` | Complete | Quick build, no planning. Dark theme, static cards, summary-only. Kept for comparison. |
| `planned/index.html` | Complete | Planned build using the full Compound loop. Apple aesthetic, interactive flashcards, scroll animations, designed to show someone who wasn't at the workshop. |

---

## Current State of `planned/index.html`

### Section rhythm and backgrounds

| Section | Background | Notes |
|---------|-----------|-------|
| Hero | `#070c1a → #0d1b3e` deep navy gradient | Statement piece. Radial blue glow overlay. |
| Day 1 | `#f5f5f7` off-white | Clean, plain white cards |
| Day 2 | `#eef4ff` light blue tint | Tinted for variety without going dark |
| API vs Webhook | `#f5f5f7` off-white | |
| Commands | `#0c2d6b` deep blue | Dark section — code blocks in `#7dd3fc` light blue |
| Flashcards | `#f5f5f7` off-white | |
| Day 3 | `#eef4ff` light blue tint | |
| Skills | `#0050c8 → #0082ff` Apple blue gradient | Vibrant closing section |
| Footer | `#070c1a` | Matches hero |

### Visual system
- Font: `-apple-system, BlinkMacSystemFont, "SF Pro Display"` — Apple stack
- Border radius: `18px` cards, `12px` small elements — no harsh shapes
- Shadows: `0 2px 24px rgba(0,0,0,0.07)` — soft, not dramatic
- Accent: `#0071e3` (Apple blue) on interactive elements
- Scroll animations: Intersection Observer fade-up, `cubic-bezier(0.4,0,0.2,1)`, staggered delays

### Interactive elements
- **Flashcard deck**: 20 glossary terms, CSS 3D flip (`rotateY(180deg)`), keyboard nav (arrow keys), swipe support, prev/next buttons
- **Copy-to-clipboard** on all 4 curl commands
- **Smooth scroll nav**: fixed frosted-glass bar, dark background

### Content captured
- Day 1: What Jamf is (Amanda's own words), K-12 IT Coordinator persona pain points, rubber duck exercise quote
- Day 2: VM analogy ("house inside a house"), API 401 error story, webhooks as doorbells, Day 2 "what clicked" quote
- API vs Webhook: side-by-side comparison with coloured top borders (blue/green) — addresses Amanda's stated fuzzy area
- Commands: 4 actual curl commands from Day 2 quick-reference
- Day 3: Full Compound Engineering loop (4 steps), 7 transferable principles
- Skills: 19 pill tags covering everything learned across 3 days
- Hero stats: 3 days / 20+ concepts / 1 VM enrolled / Black Panther (spirit animal)

---

## Planning Decisions & Why

### Goal: "Show someone" (not study tool)
Amanda wants to share this with a colleague or friend who wasn't at the workshop. This shaped everything — content had to be self-explanatory, not assume workshop context, and look impressive. We chose **flashcards** over a quiz because a quiz is private/self-contained; flashcards are also visually interesting to watch someone else navigate.

### Apple aesthetic
Amanda specifically referenced Apple.com — not just dark mode, but the *rhythm* of Apple product pages: large hero, alternating dark/light sections, generous white space, rounded cards, subtle animations. The key insight from Apple's design: contrast comes from alternating section colors, not from making everything one consistent shade.

### Why all 4 Day 2 topics
Amanda selected all four when asked which topics to prioritize. She wanted a page that covers the full technical breadth, not just her weakest areas. This is consistent with the "show someone" goal — a comprehensive review reads better to an outside audience.

### API vs Webhook clarifier section
Amanda explicitly flagged this as "still fuzzy" in her Day 2 learning log — she understood the theory but couldn't tell them apart in practice. We gave this its own full section with a side-by-side comparison and a "practical tell" callout, because the fuzzy area deserved more than a card.

---

## Design Iterations & What We Learned

### Iteration 1: All light (initial build)
Plain off-white throughout. Feedback: "lacks color, too white, no contrast."

### Iteration 2: Heavy dark sections
Added `dark-section` class to hero, Day 2, commands, Day 3, skills — all using near-black `#0a0f1e`. Feedback: "looks like my unplanned page" — the dark aesthetic was too similar to the one-shot page, defeating the point of the comparison.

### Iteration 3: Lighter approach (current)
- Kept hero dark (statement piece) but made it clearly blue, not black
- Replaced dark Day 2 / Day 3 with light blue tint `#eef4ff`
- Commands kept deep blue `#0c2d6b` (code blocks on dark makes sense)
- Skills given vibrant Apple blue gradient (energetic close)
- Feedback on hero: "blues are too off from each other" — the hero `#0c3b8f` clashed with the rest. Reverted to deeper, more harmonious `#070c1a → #0d1b3e`.

### Spirit animal stat
Originally used a generic cat emoji. Feedback: "doesn't represent a black panther well." Replaced with text "Black Panther" but the inline font-size override broke visual alignment with the other three stats (3 / 20+ / 1). Fixed by using a `.text-stat` modifier class with `font-size: 1.25rem` and a fixed `height: 2.8rem` on `.hero-meta-num` so all four stats share the same row height and labels align at the bottom.

### Day 1 color experiments
Briefly made Day 1 dark (`dark-section` class). User requested it, then immediately reversed — wanted Day 1 to stay light/bright. The lesson: light sections as the default is the right call; dark sections are accents, not the rule.

---

## What's Working Well
- The alternating dark/light/tinted rhythm reads as polished and intentional
- Flashcard flip animation feels genuinely Apple-quality
- Hero stat bar with dividers is clean and balanced
- API vs Webhook comparison section directly addresses the fuzzy area
- Copy-to-clipboard on commands is practical and impressive to show someone
- Content uses Amanda's actual words from her learning logs — feels personal, not generic

## What Still Needs Attention (Next Session)
- **Day 3 learning log is blank** — Amanda hasn't filled in her Day 3 reflections yet. Once she does, the Day 3 section can be enriched with her actual quotes (same treatment as Days 1 & 2).
- **Nav bar** — currently always dark (works over the dark hero, but when scrolling over light sections the nav contrast could feel slightly off). Could add a scroll-aware class swap if she notices it.
- **Mobile layout** — not tested on actual mobile. The `@media (max-width: 640px)` breakpoints exist but haven't been verified on a real device.
- **Color cohesion** — the hero, commands, and footer are all different shades of dark blue. This is intentional but could be unified further if it bothers her on closer inspection.

---

## Dead Ends We Turned Back From

- **Quiz mode**: Considered a multiple-choice quiz for concepts. Rejected because Amanda's goal was "show someone" — a quiz is self-directed and less interesting to watch. Flashcards are interactive but also presentable.
- **Tabbed layout by day**: Considered tabs instead of a single scroll. Rejected — single scroll is more shareable and more Apple-like. Apple product pages don't use tabs.
- **Dark hero fading to light**: Considered adding a CSS gradient at the bottom of the hero that fades toward the off-white of Day 1 to smooth the transition. Didn't implement — the hard cut between sections is actually the Apple pattern.
- **Tart VM command block**: The quick-reference has Tart commands. Decided not to include them in the commands section — the curl commands were the active hands-on work; Tart was mostly GUI-driven in the workshop.
