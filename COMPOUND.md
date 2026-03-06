# COMPOUND.md
> Project briefing for the next session. Read this first. Last updated: 2026-03-06.

---

## What We Built

### 1. FC Barcelona Match Day Dashboard
**File:** `day-3/site/planned/index.html`
**Status:** Working. All three pages functional.

A single-file SPA (no build tools) with three pages toggled via JavaScript:

- **Welcome page** — Full-screen hero with blue/red diagonal stripes, big football SVG (white/grey classic ball with gold ring border and glow), "FC Barcelona / Mes que un Club / Match Day Verification Portal" branding, "Verify Access" button
- **Login page** — Gradient-bordered card, hardcoded credentials, error state on wrong input
- **Dashboard (home)** — Navbar + three card sections: Player Details, Matchdays, Opposition Teams. All data persists in `localStorage`. Delete buttons on every item.

**Credentials:** `campnou` / `barca2026`

**Auth flow:** sessionStorage tracks login state. Direct URL load to `#home` without being logged in redirects to login.

---

### 2. Personal Learning Review Site
**File:** `day-3/site/one-shot/index.html`
**Status:** Complete. Built from Prosperity's answers.

Clean dark single-page review site covering:
- 3 days: Jamf API, Webhooks, AI/Claude
- Quote: "Tech is good." — Prosperity
- Hardest thing: Presentations
- Tool going forward: Amazon Q
- Built with: Claude Code

---

## Key Decisions & Why

### CSS specificity bug (fixed)
**Problem:** `showPage()` toggled a CSS class (`section.active { display: block }`) but ID selectors (`#welcome { display: flex }`) have higher specificity (1,0,0 vs 0,1,1), so sections couldn't be hidden.
**Fix:** Switched to inline `style.display` in JS — inline styles always win over any CSS selector. `showPage()` now sets `el.style.display` directly.

### Single HTML file architecture
Chose no build tools, pure HTML/CSS/JS. Everything in one file. Easy to open directly in a browser with `open`, no server needed.

### Football SVG over Messi silhouette
Started with a Messi player silhouette SVG (hand-drawn with paths). User preferred a big football instead. Replaced with a classic black/white pentagon-patch ball with radial gradient, gold ring, and gold glow. Used `radialGradient` for 3D effect and `clipPath` to keep patches inside the ball boundary.

### Credentials simplified
Original: `prosperity` / `barca2026`
Changed to: `campnou` / `ViscaBarca10` — then simplified again to `campnou` / `barca2026` because mixed-case passwords caused login failures (user was mistyping).
**Lesson:** Keep hardcoded demo credentials all-lowercase.

---

## Approaches Considered But Not Taken

- **Messi silhouette** — Built it fully with SVG paths, head/torso/legs/boots/ball. User preferred just a big ball. Code was removed.
- **Class-based page toggling** — Initial approach used `.active` CSS class. Hit specificity issues, switched to inline styles.
- **External image for Messi** — Could not use external URLs per instructions. SVG silhouette was the right call anyway (no network dependency).

---

## Current State — What's Working

- Welcome → Login → Dashboard flow works
- Wrong credentials shows error message
- Correct credentials (`campnou` / `barca2026`) logs in
- Add Player form → appends styled card with jersey number, position, nationality, age
- Add Match form → appends timeline row with venue badge (Home/Away), date, competition
- Add Team form → appends badge-style card with league, country, notes
- Delete buttons on all items
- `localStorage` persistence — data survives page reload
- Logout clears sessionStorage, returns to welcome
- Direct `#home` URL without login → redirected to login

---

## What the Next Session Should Focus On

Things not yet done that could make it better:

1. **Edit existing entries** — currently can only add or delete, not edit a player/match/team in place
2. **Match result tracking** — add a score field to matchday entries after the game is played
3. **Player search/filter** — roster could get long, a search box would help
4. **Export/print** — a "print squad sheet" or export to CSV for the player roster
5. **Mobile polish** — the dashboard cards stack on mobile but the forms could be tighter
6. **Visual flair** — the dashboard is functional but could use more Barcelona energy (subtle animations, better empty states)

---

## File Map

```
day-3/site/planned/index.html   ← Barcelona Match Day Dashboard (main project)
day-3/site/one-shot/index.html  ← Prosperity's personal learning review site
.claude/compound.md             ← The /compound prompt instructions
COMPOUND.md                     ← This file
CLAUDE.md                       ← Project setup and repo structure
```
