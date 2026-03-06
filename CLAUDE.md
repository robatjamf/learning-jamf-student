# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A 3-day, hands-on Jamf Pro training course for Apple device management. Students learn to manage Apple devices using Jamf Pro — from enrollment and configuration to API-driven automation and AI-native development. All lab machines are Apple Silicon Macs (M-series).

## Repository Structure

```
day-1/          Learning log — connections and context (Git basics, personas)
day-2/          Learning log — technical foundations (VMs, APIs, webhooks)
day-3/          AI-native development exercises
  resources/    Cheat sheets, glossary, and principles for reference
  site/
    one-shot/   Round 1 quick-build index.html (no planning)
    planned/    Round 2 planned-build index.html (the real one)
Students/       Student profile files (one .txt per student)
apps/           Install guides organized by training day
cool-resources/ Links and documentation references
```

## Day 3 Site Builds

Students build a personal review page using the Compound Engineering loop. Two builds are kept for comparison:

- `day-3/site/one-shot/index.html` — **complete** — warm cream/terracotta palette, Days 1–3 content, Key Concepts, Glossary, Quiz, 7 Principles
- `day-3/site/planned/index.html` — **not started** — placeholder only

To open pages in browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

See `COMPOUND.md` for full session history, decisions, and what to tackle next.

## The Compound Engineering Loop

This course teaches the Compound Engineering method. At the end of each session, `/compound` distills the session into `COMPOUND.md`. Two files work together:

- **CLAUDE.md** — Project setup and current state. Read first every session. Keep lean.
- **COMPOUND.md** — Rich session history: decisions, tradeoffs, dead ends, review findings.

## Student Branch Convention

Students work on their own branches. The branch naming follows the student's name (e.g., `wadzie`). Student profile files go in `Students/<name>.txt`.

## Key Tools Used in This Course

- **Jamf Pro** — MDM platform for hands-on API practice
- **Postman** — API testing
- **Claude Code** — AI pair programming (this tool)
- **VMware Fusion or Virtual Buddy** — macOS VM tool (students choose one)
- **Node.js 20** — For automation scripts (`brew install node@20`)
