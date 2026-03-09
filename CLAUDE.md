# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A 3-day Jamf Pro training workshop for students learning Apple device management. All lab machines are Apple Silicon Macs. The repo is primarily Markdown documentation and student exercise files — there is no build system or test suite.

## Repository Structure

| Folder | Purpose |
|--------|---------|
| `apps/` | Software install guides organized by training day |
| `day-1/` | Student learning logs and Git exercise (branch + PR) |
| `day-2/` | Quick-reference terminal commands for API/VM/webhook exercises |
| `day-3/` | Day 3 exercise — students build a personal HTML review page |
| `Students/` | Student intro files added via PR exercise |
| `cool-resources/` | Links and documentation references |

## Day 3 Site Exercise

The Day 3 exercise demonstrates the Compound Engineering loop (Plan → Work → Review → Compound) by building a personal HTML page. Two rounds:

- **Round 1 (one-shot):** `day-3/site/one-shot/index.html` — quick build, no planning, low context
- **Round 2 (planned):** `day-3/site/planned/index.html` — planned build using the full loop

**Note:** Nate (branch `nate`) is the **facilitator**, not a student. His Round 2 page is a personal showcase page for himself, not a student review artifact. Students build their own versions on `students/<name>` branches.

Open pages locally:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## Compound Engineering Loop

At the end of each session, `/compound` distills the session into `COMPOUND.md`. Two files work together:

- **CLAUDE.md** — Project setup, structure, current state. Keep it lean.
- **COMPOUND.md** — Session history: decisions, tradeoffs, dead ends, review findings.

See [`COMPOUND.md`](./COMPOUND.md) for full session history and next-session context.

## Git Workflow

Students work on personal branches named `students/<name>` or their first name (e.g., `nate`). Changes are submitted via PR back to `main`.

## Jamf Pro API (Day 2 Reference)

- **Jamf Pro instance:** `https://projsadp.jamfcloud.com`
- **API credentials:** username `jamfpro_api` / password `eap.zog.neek26` (workshop-only)
- **Auth flow:** POST to `/api/v1/auth/token` → use Bearer token → invalidate when done
- **Classic API** (XML) used for Extension Attributes; **Jamf Pro API** (JSON) for inventory
