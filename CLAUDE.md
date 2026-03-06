# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Repository

A 3-day hands-on Jamf Pro training course repo for Tana (student branch: `Tana`). The course covers Apple device management, Jamf Pro APIs, and AI-native development using the Compound Engineering loop.

## Repository Structure

| Folder | Purpose |
|--------|---------|
| `day-1/` | Learning logs — context, empathy, persona mapping |
| `day-2/` | Learning logs — VMs, Jamf Pro API, webhooks |
| `day-3/` | Day 3 exercise: build a personal review page |
| `day-3/site/one-shot/` | Round 1 quick-build HTML page (keep for comparison) |
| `day-3/site/planned/` | Round 2 planned-build HTML page — **complete** |
| `day-3/site/about-me/` | Personal "About Me" page built from interview — **complete** |
| `day-3/resources/` | Cheat sheet, glossary, and principles reference files |
| `Students/` | Git exercise — student file submissions via PR |
| `cool-resources/` | Links and documentation references |

## Day 3 Task: Personal Review Page

Build a single-page HTML site to review workshop content. Two rounds:

1. **One-shot** (`day-3/site/one-shot/index.html`) — quick build, no planning
2. **Planned** (`day-3/site/planned/index.html`) — full Compound Engineering loop

To open pages in browser:
```
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## The Compound Engineering Loop

**Plan → Work → Review → Compound**

- Before building, plan: "Do I have enough context to build this?"
- After building, review against the plan
- End every session with `/compound` — this distills context into `COMPOUND.md`
- `CLAUDE.md` stays lean (project state); `COMPOUND.md` accumulates session history

If `COMPOUND.md` exists in this repo, read it after this file for full session history.

## Git Workflow

- Student work goes on branch `Tana` (current branch)
- Main branch is `main`
- Students submit work via pull requests into `main`
- Learning logs follow the pattern: `day-N/tana-learning-log.md`

## Key Tools Used in This Course

- **Jamf Pro**: `https://projsadp.jamfcloud.com` — MDM platform for API practice
- **Jamf Pro Swagger UI**: `https://projsadp.jamfcloud.com/api/doc`
- **Node.js 20**: `brew install node@20`
- **Claude Code**: `claude` (start from repo root in VS Code terminal)

## Reference Files

Point Claude at these for extra context during Day 3:
- `@day-3/resources/cheat-sheet.md` — Compound Engineering quick reference
- `@day-3/resources/glossary.md` — Workshop term definitions
- `@day-3/resources/principles.md` — 7 transferable AI principles
