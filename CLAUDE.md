# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a 3-day hands-on training course repository for learning Apple device management with Jamf Pro. Students work through Git basics (Day 1), API/automation with Jamf Pro (Day 2), and AI-native development using the Compound Engineering loop (Day 3).

## Repository Structure

```
apps/          — Software install guides organized by training day
day-1/         — Learning log and student Git exercise (branch/PR workflow)
day-2/         — Learning log and quick reference for APIs/VMs
day-3/         — Main Day 3 exercise (building a personal review page)
  resources/   — Cheat sheet, glossary, and principles reference docs
  site/
    one-shot/  — Round 1 quick-build output (index.html)
    planned/   — Round 2 planned-build output (index.html)
Students/      — Student profile files from Day 1 Git exercise
cool-resources/ — Links and documentation references
```

## Day 3 Workflow

The core exercise is building a single-page HTML review site using the **Compound Engineering loop**:

1. **Plan** — Define requirements, gather context, surface unknowns
2. **Work** — Build with AI assistance, staying within the plan
3. **Review** — Evaluate output against the plan yourself first, then ask Claude for gaps
4. **Compound** — Type `/compound` to distill the session into `COMPOUND.md`

Two files work together across sessions:
- **CLAUDE.md** — Project setup and current state (lean, read first)
- **COMPOUND.md** — Rich session history: decisions, tradeoffs, dead ends, reasoning

Open built pages in the browser:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## Key Principles (Compound Engineering)

1. Context is everything — point Claude at relevant files before asking it to build
2. Planning > building — 80% plan, 20% execute
3. Share your mental model — explain the "why", not just the "what"
4. Review against your plan — evaluate yourself first, then ask Claude for gaps
5. Recognize when to quit — starting fresh with better context beats pushing through
6. It's a conversation — back-and-forth collaboration, not command delegation
7. Compound your sessions — distill reasoning, not just outcomes, into COMPOUND.md

## Git Workflow

Students work on personal branches (e.g., `students/<name>`) and open PRs into `main`. The main branch is `main`.

## Useful File References

- `@day-3/resources/cheat-sheet.md` — Compound engineering quick reference and warning signs
- `@day-3/resources/glossary.md` — Plain-language definitions for all workshop terms
- `@day-3/resources/principles.md` — 7 transferable principles for working with AI tools
