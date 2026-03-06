# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A 3-day hands-on Jamf Pro training workshop for students learning Apple device management, API automation, and AI-native development. All lab machines are Apple Silicon Macs.

Each student works on their own branch (named after them, e.g. `sarah`, `rob`, `nate`). The `main` branch is the shared facilitator branch.

## Repository Structure

```
apps/           # Software install guides (organized by training day)
cool-resources/ # Links and documentation references
day-2/          # Quick-reference terminal commands for API exercises
day-3/          # Day 3 exercise — AI-native development
  resources/    # Glossary, principles, cheat sheet
  site/
    one-shot/   # Round 1: quick build (no planning)
    planned/    # Round 2: planned build using compound engineering loop
Students/       # Student profile files
```

## Day 3 Exercise

The primary coding task is building a **personal review page** — a single-page HTML file the student can use to review workshop content.

- One-shot page: `day-3/site/one-shot/index.html`
- Planned page: `day-3/site/planned/index.html`

Open pages in browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## Current State (Sarah's Branch)

- `day-3/site/one-shot/index.html` — complete (Round 1, blue/minimalist, Day 1 only)
- `day-3/site/planned/index.html` — complete (Round 2, lavender/dark, all 3 days, fully interactive)
- `COMPOUND.md` — exists, read it for full session history, decisions, and next steps

## Compound Engineering Workflow

This repo uses the **Compound Engineering loop**: Plan → Work → Review → Compound.

Two files work together for session continuity:
- **CLAUDE.md** — Project setup and current state (read first, keep lean)
- **COMPOUND.md** — Rich session history: decisions, tradeoffs, dead ends, reasoning

At the end of each session, run `/compound` to distill session context into `COMPOUND.md`. The next session reads CLAUDE.md (which references COMPOUND.md) and inherits accumulated context.

## Key Workshop Commands

```bash
# Start Claude Code in project context
claude

# Initialize project context (creates CLAUDE.md)
claude /init

# Jamf Pro API — authenticate and get bearer token
TOKEN=$(curl -s -u "jamfpro_api:eap.zog.neek26" \
  -H "Content-Type: application/json" \
  -X POST \
  "https://projsadp.jamfcloud.com/api/v1/auth/token" \
  | jq -r '.token')

# List computers
curl -s -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/computers-inventory" | jq .

# Invalidate token when done
curl -X POST -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/auth/invalidate-token"
```

## Claude Code Tips (from day-3/README.md)

- `@path/to/file` — point Claude at a specific file for context
- `Shift+Tab` — cycle between normal, plan, and auto-accept modes
- `Ctrl+C` — stop Claude immediately
- Reference the resources: `@day-3/resources/glossary.md`, `@day-3/resources/principles.md`, `@day-3/resources/cheat-sheet.md`
