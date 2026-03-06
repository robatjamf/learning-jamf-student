# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A 3-day Jamf Pro training workshop for students learning to manage Apple devices at scale. The repo contains learning logs, reference materials, and a Day 3 hands-on project.

## Repository Structure

| Folder | Purpose |
|--------|---------|
| `day-1/` | Personal learning log — Jamf context, personas, Day 1 reflections |
| `day-2/` | Learning log + quick-reference terminal commands for API/VM exercises |
| `day-3/` | Day 3 project: build a personal review HTML page |
| `day-3/site/one-shot/` | Round 1 build (quick, no planning — keep for comparison) |
| `day-3/site/planned/` | Round 2 build (planned build — the main deliverable) |
| `day-3/resources/` | Glossary, cheat sheet, and principles for the Compound Engineering loop |
| `apps/` | Install guides for all workshop software |
| `Students/` | Student info files from the Day 1 Git exercise |

## Day 3 Project — Current State

Sean has built a **7-tab single-page HTML review site** (`day-3/site/planned/index.html`). The page is complete — content, features, polish, and animations are all in place.

**Tabs:** Day 01 | Day 02 | Day 03 | Glossary | Quiz | Cheat Sheet | Notes

**Interactive features:** Tab switching (keyboard 1–7), CMD+K search, quiz with topic picker + mastery tracker + streak counter + confetti, glossary accordion + flashcard mode, copy buttons on code blocks, reading progress bar.

**Visual polish:** Luxury surface upgrade (card gradients, layered shadows, gold restraint, hero gradient text), direction-aware panel slide transitions, sliding gold tab indicator, section scroll-entrance animations, card hover lift.

**Content:** All tabs populated with Sean's actual words. Day 03 panel includes "One-Shot vs Planned" and "In His Words" reflection sections using quotes from his learning log.

**The page is complete. No pending priorities.** See COMPOUND.md for full build history and possible next directions.

Open the built pages with:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

> **Read `COMPOUND.md` before starting any new session.** It contains the full build history, design decisions, tradeoffs, and what needs to happen next.

## Compound Engineering Workflow

The project follows a **Plan → Work → Review → Compound** loop.

At the end of each session, run `/compound` to generate a `COMPOUND.md` file capturing decisions, tradeoffs, and session history. Future sessions read `CLAUDE.md` + `COMPOUND.md` to resume with full context.

- **CLAUDE.md** — Project setup, structure, current state (keep lean)
- **COMPOUND.md** — Rich session history, decisions, dead ends, reasoning

## Git Workflow

- Student branch: `Sean1` (branched from `main`)
- Upstream remotes include other students' branches (`nate`, `rob`)
- Learning log files follow the pattern `<day>/sean-learning-log.md`
