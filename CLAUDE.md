# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A 3-day hands-on Jamf Pro training course repo for students. No build system, no tests, no package manager — it's a documentation and exercises repo with HTML files built during Day 3.

## Repository Structure

- `day-1/` — Student learning logs for Day 1 (Git/GitHub basics, Jamf personas)
- `day-2/` — Student learning logs for Day 2 (APIs, VMs, webhooks); `quick-reference.md` has all curl commands used in exercises
- `day-3/` — Day 3 exercise directory
  - `resources/` — Reference docs: `cheat-sheet.md` (compound engineering loop), `glossary.md`, `principles.md`
  - `site/one-shot/` — Round 1 quick-build HTML page (keep for comparison)
  - `site/planned/` — Round 2 planned HTML page (the main deliverable)
- `Students/` — Student identity files (name + favorite animal), one file per student
- `apps/` — Software install instructions organized by day
- `cool-resources/` — Links and docs

## Day 3 Primary Task

Students build a **single-page HTML review site** (`day-3/site/planned/index.html`) using the Compound Engineering loop: Plan → Work → Review → Compound.

To open pages in browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## Compound Engineering Workflow

Two files carry context across sessions:
- **CLAUDE.md** — Project setup and current state (this file, kept lean)
- **COMPOUND.md** — Session history: decisions, tradeoffs, dead ends, findings

At end of each session, type `/compound` to distill everything into `COMPOUND.md`. The next session reads CLAUDE.md (which references COMPOUND.md) and inherits accumulated context.

## Student Branch Convention

Each student works on their own branch. Branch names follow the pattern `<student-name>` or `students/<student-name>`. The `main` branch is the target for pull requests.

## Key Context for Day 3 Builds

When helping students build their review page, read their learning logs first:
- `day-1/<name>-learning-log.md` or `day-1/learning-log.md`
- `day-2/<name>-learning-log.md` or `day-2/learning-log.md`

Reference `@day-3/resources/cheat-sheet.md`, `@day-3/resources/glossary.md`, or `@day-3/resources/principles.md` for workshop content context.
