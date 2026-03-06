# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

A 3-day hands-on training course for learning Apple device management with Jamf Pro. All lab machines are Apple Silicon Macs (M-series).

## Repository Structure

| Folder | Purpose |
|--------|---------|
| `apps/` | Software install guides organized by training day |
| `day-1/` | Learning log — context and empathy (Git/GitHub exercises) |
| `day-2/` | Learning log + quick-reference — API and automation exercises |
| `day-3/` | AI-native development day — build a personal review page |
| `Students/` | Student profile files (one file per student) |
| `cool-resources/` | Links and documentation references |

## Day 3 Site Structure

Students build a single-page HTML review site using the Compound Engineering loop:

```
day-3/site/
├── one-shot/index.html        <- Round 1: quick build (no planning)
├── planned/index.html         <- Round 2: planned build (the real one)
└── full-review/index.html     <- Naishe's post-workshop 7-page interactive review
```

Open pages in browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
open day-3/site/full-review/index.html
```

**`full-review/` contains:** 7 per-section pages (Home, Day 1, Day 2, Day 3, Flashcards ×20, Quiz ×10, Gratitude). Green/beige palette. See `COMPOUND.md` for full session history and design decisions.

## Key Workflow: Compound Engineering Loop

Plan -> Work -> Review -> Compound (repeat)

- `/compound` distills the session into `COMPOUND.md` (accumulated context across sessions)
- **CLAUDE.md** — lean project setup and current state (this file)
- **COMPOUND.md** — rich session history: decisions, tradeoffs, dead ends

Reference the loop details: `@day-3/resources/cheat-sheet.md`

## Jamf Pro API (Day 2)

- **Jamf Pro instance:** `https://projsadp.jamfcloud.com`
- **API docs (Swagger):** `https://projsadp.jamfcloud.com/api/doc`
- **Auth pattern:** POST to `/api/v1/auth/token` -> use Bearer token -> invalidate when done
- The Jamf Pro API uses both JSON (modern API) and XML (Classic API at `/JSSResource/`)

## Student Branch Convention

Each student works on their own branch (e.g., `naishe`, `students/jane-doe`) and opens PRs into `main`.

## Day 3 Resources

- `day-3/resources/cheat-sheet.md` — Compound engineering quick reference
- `day-3/resources/glossary.md` — Term definitions for all 3 days
- `day-3/resources/principles.md` — 7 transferable AI principles
