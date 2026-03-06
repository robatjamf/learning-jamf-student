# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a 3-day hands-on training course repo for learning to manage Apple devices at scale using Jamf Pro — from enrollment and configuration to API-driven automation and AI-native development. All lab machines are Apple Silicon Macs (M-series).

There is no build system, test suite, or linting. The repo is primarily documentation, markdown learning logs, and HTML output files produced during Day 3 exercises.

## Repository Structure

| Folder | Contents |
|--------|----------|
| `Students/` | Per-student profile files; Day 1 exercise: create a branch and add your file here |
| `apps/` | Install guides for all required software, organized by day |
| `cool-resources/` | Reference links, docs, and cheat sheets |
| `day-1/` | Personal learning log for Day 1 (context, empathy, persona mapping) |
| `day-2/` | Personal learning log and quick reference for Day 2 (APIs, VMs, webhooks) |
| `day-3/` | AI-native development exercise — the main Day 3 working area |
| `day-3/resources/` | Cheat sheet, glossary, and principles reference files |
| `day-3/site/one-shot/` | Round 1 HTML page (single-page summary, built without planning — keep for comparison) |
| `day-3/site/planned/client/` | Round 2 — full multi-page site built using the Compound Engineering loop |

## Current State (as of Session 2)

The planned site is complete and working. Five pages, two CSS files, two JS files — no frameworks, no build step.

- `client/index.html` — Home: overview cards + expandable day summaries
- `client/quiz.html` — Quiz with topic selector, two modes, **42 questions**, 3 question types, **12 topic filters**
- `client/cheat-sheet.html` — Git / Tart / curl / Claude Code with tabs
- `client/notes.html` — 18-topic knowledge base with sticky sidebar; Claude Code section has a "Ron's take" callout
- `client/resources.html` — Linux VM hosting step-by-step, API guide, tools, links

Quiz topic filters: All Topics, Day 1, Day 2, Day 3, Jamf & MDM, Personas, APIs, VMs, Webhooks, Claude Code, AI & LLMs, macOS, Networking, IAM, DevOps, Security

See `COMPOUND.md` for full session history, decisions, and what to tackle next.

## Day 3 Workflow

Day 3 is about building a **personal review page** — a single HTML file — using the Compound Engineering loop:

```
Plan → Work → Review → Compound
```

To open pages in the browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

At the end of each session, type `/compound` to distill the session into `COMPOUND.md`. Two files work together for session continuity:

- **CLAUDE.md** — Project setup, structure, and current state. Keep it lean.
- **COMPOUND.md** — Rich session history: decisions, tradeoffs, dead ends, reasoning. This is where context accumulates.

## Branching Convention

Students work on their own branches. The branch naming convention used in this repo is the student's first name (e.g., `ron`). PRs are opened back into `main`.

## Key Reference Files

- `day-3/resources/cheat-sheet.md` — Compound Engineering loop quick reference and warning signs
- `day-3/resources/principles.md` — 7 transferable principles for working with AI tools
- `day-3/resources/glossary.md` — Plain-language definitions for all workshop terms
- `cool-resources/Links_and_docs.md` — Tool links, Jamf Pro API docs, and external references

Point Claude at these using `@` syntax, e.g. `@day-3/resources/cheat-sheet.md`.
