# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A 3-day, hands-on Jamf Pro training course repository for students. It covers Apple device management, API automation, and AI-native development. No build system, no tests — this is a documentation and exercise repo.

## Repository Structure

| Folder | Purpose |
|--------|---------|
| `day-1/` | Student learning logs for Day 1 (Git exercise, personas, context) |
| `day-2/` | Student learning logs for Day 2 (APIs, webhooks, VMs) |
| `day-3/` | Day 3 exercise — students build a personal review page using AI |
| `day-3/site/one-shot/` | Round 1 build (quick, no planning) |
| `day-3/site/planned/` | Round 2 build (planned, using the Compound loop) |
| `day-3/resources/` | Cheat sheet, glossary, and principles reference files |
| `Students/` | Student identity files (name + favorite animal) |
| `apps/` | Install guides organized by training day |
| `cool-resources/` | Links and documentation references |

## Day 3: Building the Review Page

Students build a single-page HTML site (`index.html`) using Claude Code. Two rounds:

1. **One-shot** — Quick build with no planning, saved to `day-3/site/one-shot/`
2. **Planned** — Full Compound Engineering loop, saved to `day-3/site/planned/`

To open in browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## The Compound Engineering Loop

This repo teaches the **Plan → Work → Review → Compound** loop:

- **Plan** — Define requirements, gather context before any code
- **Work** — Execute with AI assistance, staying within the plan
- **Review** — Evaluate output against the plan (student first, then ask Claude for gaps)
- **Compound** — Type `/compound` to distill the session into `COMPOUND.md`

Two files work together across sessions:
- **CLAUDE.md** — Project setup, structure, current state (keep lean)
- **COMPOUND.md** — Accumulated session history: decisions, tradeoffs, dead ends

## Git Workflow for Students

Students work on personal branches (e.g., `crown1`, `students/<name>`). Learning logs follow the naming pattern `<name>-learning-log.md` or `<name>.learning-log.md`. Pull requests target `main`.

## Key Claude Code Shortcuts

- `Shift+Tab` — Cycle between normal, plan, and auto-accept modes
- `Ctrl+C` — Stop Claude immediately
- `@path/to/file` — Reference a specific file for context (e.g., `@day-3/resources/cheat-sheet.md`)
- `/compound` — Distill session into COMPOUND.md
