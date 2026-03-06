# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a 3-day hands-on training repo for learning Apple device management with Jamf Pro. Students work through Git basics (Day 1), Jamf Pro API and VM exercises (Day 2), and AI-native development with Claude Code (Day 3).

## Repository Structure

```
day-1/          Learning log for Day 1 (Git, context, personas)
day-2/          Learning log + quick-reference.md for Day 2 (APIs, VMs, webhooks)
day-3/          Day 3 exercise directory
  resources/    Cheat sheets, glossary, principles
  site/
    one-shot/   Round 1: quick build (index.html — keep for comparison)
    planned/    Round 2: planned build (index.html — the real deliverable)
Students/       Student profile files (.txt)
apps/           Software install guides
cool-resources/ Links and documentation references
```

## Day 3 Workflow

Students build a personal HTML review page using the **Compound Engineering Loop**:

1. **Plan** — Define requirements, gather context
2. **Work** — Build with Claude Code assistance
3. **Review** — Evaluate output against plan
4. **Compound** — Type `/compound` to distill session into `COMPOUND.md`

Pages go in:
- `day-3/site/one-shot/index.html` — Round 1 (no-plan build, keep for comparison)
- `day-3/site/planned/index.html` — Round 2 (planned build, the main deliverable)

Open pages in browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## Key Context Files

- `day-3/resources/cheat-sheet.md` — Compound Engineering loop reference
- `day-3/resources/glossary.md` — All workshop terms (Days 1-3)
- `day-3/resources/principles.md` — 7 transferable AI principles
- `day-2/quick-reference.md` — Jamf Pro API curl commands and credentials

## Jamf Pro Environment

- **Instance:** `https://projsadp.jamfcloud.com`
- **API docs:** `https://projsadp.jamfcloud.com/api/doc`
- **API credentials:** `jamfpro_api` / `eap.zog.neek26`

Authenticate and store token:
```bash
TOKEN=$(curl -s -u "jamfpro_api:eap.zog.neek26" \
  -H "Content-Type: application/json" \
  -X POST \
  "https://projsadp.jamfcloud.com/api/v1/auth/token" \
  | jq -r '.token')
```

## Git Conventions

- Student branches are named after the student (e.g., `Lucile`)
- Student files go in `Students/<Name>.txt`
- Student learning logs follow the pattern `day-N/ <Name> - learning-log.md`
- PRs merge from student branch back into `main`

## Compound Session Files

When using `/compound`, Claude writes or updates:
- **`CLAUDE.md`** — Project setup, structure, current state (keep lean)
- **`COMPOUND.md`** — Rich session history: decisions, tradeoffs, dead ends, reasoning
