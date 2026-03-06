# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a 3-day Jamf Pro training course repository for students learning Apple device management. The repo contains learning logs, reference materials, and Day 3 hands-on exercises for building a personal review page using AI-native development.

## Repository Structure

| Folder | Contents |
|--------|----------|
| `Students/` | Student profile files (name + favorite animal) — used for the Day 1 Git exercise |
| `day-1/` | Learning logs from Day 1 (context, Jamf overview, persona mapping) |
| `day-2/` | Learning logs and quick-reference commands from Day 2 (VMs, APIs, webhooks) |
| `day-3/` | Day 3 exercise — build a personal review page using the Compound Engineering loop |
| `apps/` | Install guides for all required software, ordered by day |
| `cool-resources/` | Links to tools, docs, cheat sheets, and AI resources |

## Day 3 Exercise Structure

The main work for Day 3 happens in `day-3/site/`:

```
day-3/site/
├── one-shot/index.html    ← Round 1: quick build with no planning (keep for comparison)
└── planned/index.html     ← Round 2: planned build using the full Compound loop
```

To open pages in the browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## The Compound Engineering Loop

This repo uses the **Compound Engineering** framework for AI-native development:

1. **Plan** — Define requirements, gather context, ask the agent questions before building
2. **Work** — Execute with AI assistance, staying within the plan
3. **Review** — Evaluate output against the plan yourself first, then ask the agent for gaps
4. **Compound** — Type `/compound` to distill the session into `COMPOUND.md`

Two files work together across sessions:
- **CLAUDE.md** — Project setup and current state (this file). Keep it lean.
- **COMPOUND.md** — Rich session history: decisions, tradeoffs, dead ends, reasoning. Reference this for accumulated context.

## Git Workflow

Students work on personal branches (e.g., `Amanda`, `students/jane-doe`) and open PRs back to `main`. The Day 1 exercise covers creating a branch, adding a file to `Students/`, committing, and opening a PR.

## Jamf Pro Environment

- **Jamf Pro instance:** https://projsadp.jamfcloud.com
- **Swagger UI:** https://projsadp.jamfcloud.com/api/doc
- **API credentials:** username `jamfpro_api` (workshop use only — credentials are in `day-2/quick-reference.md`)

## Current Project State

Day 3 pages are built. The `planned/index.html` was fully rebuilt in Session 2 with a scrapbook theme. See `COMPOUND.md` for full history.

| File | Status |
|------|--------|
| `day-3/site/one-shot/index.html` | Complete — dark theme, static, kept for comparison |
| `day-3/site/planned/index.html` | Complete — scrapbook theme, expandable day notes, visual deeper dives, Permanent Marker font |
| `day-3/amanda-learning-log.md` | Complete — all 4 Day 3 checkpoints filled in |

**Planned page key features:**
- Scrapbook aesthetic: torn paper edges, sticky notes, tape strips, photo corners, page tags
- Cover: "This notebook belongs to: Amanda" ownership label
- 3 expandable day sections — "My notes" (Amanda's words) + "Deeper dive" (Claude-expanded visuals)
- Deeper dive visuals: icon grid (Day 1), comparison table (Day 2), loop step grid (Day 3)
- 20-card flashcard deck (index card style, 3D flip, keyboard/swipe nav)
- Curl cheat sheet with copy-to-clipboard
- Skills pill section + terracotta closing quote

## Key Reference Files

- `COMPOUND.md` — Full session history, design decisions, tradeoffs, and next steps
- `day-3/resources/cheat-sheet.md` — Compound Engineering quick reference and prompts
- `day-3/resources/glossary.md` — Plain-language definitions for all workshop terms
- `day-3/resources/principles.md` — 7 transferable principles for working with any AI tool
- `day-2/quick-reference.md` — curl/API commands for Jamf Pro

Point Claude at these with `@day-3/resources/cheat-sheet.md` for extra context.
