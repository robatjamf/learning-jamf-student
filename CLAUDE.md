# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A 3-day hands-on Jamf Pro training course for managing Apple devices at scale. Students work through git basics, API/webhook labs, and AI-native development using the Compound Engineering loop.

## Repository Structure

```
day-1/          Student learning logs — git basics, branch/PR exercise
day-2/          API and webhook labs with quick-reference terminal commands
day-3/          AI-native development day — build a personal review site
  resources/    cheat-sheet.md, glossary.md, principles.md (reference these with @)
  site/
    one-shot/   Round 1: quick build (index.html)
    planned/    Round 2: planned build (index.html)
Students/       Student profile files
apps/           Install guides organized by training day
cool-resources/ Links and docs
```

## Day 3: Building the Review Site

Students build a single-page HTML site using the Compound Engineering loop:

**Plan → Work → Review → Compound**

- Output goes to `day-3/site/one-shot/index.html` (Round 1) or `day-3/site/planned/index.html` (Round 2)
- Open in browser: `open day-3/site/one-shot/index.html` or `open day-3/site/planned/index.html`
- Two context files work together: **CLAUDE.md** (project setup, current state) + **COMPOUND.md** (session history, decisions, tradeoffs)
- At the end of each session, run the compound step to distill context into COMPOUND.md

## Current Project State (Prosperity — 2026-03-06)

Two sites are built and working. Read `COMPOUND.md` for full session history and decisions.

### FC Barcelona Match Day Dashboard
**File:** `day-3/site/planned/index.html`
**Open:** `open day-3/site/planned/index.html`
**Credentials:** `campnou` / `barca2026`

Single-file SPA with welcome, login, and dashboard pages. Dashboard has three sections: Player Details, Matchdays, Opposition Teams. All data stored in `localStorage`. Auth state in `sessionStorage`.

### Personal Learning Review Site
**File:** `day-3/site/one-shot/index.html`
**Open:** `open day-3/site/one-shot/index.html`

Prosperity's personal 3-day training review — Jamf API, Webhooks, AI/Claude. Clean dark single-page site.

## Key Commands

```bash
# Navigate to repo
cd ~/learning-jamf-student

# Start Claude Code
claude

# Initialize project context
claude /init

# Reload shell after install
source ~/.zshrc

# Check Node.js version (18+ required)
node --version

# Install Node.js if needed
brew install node@20
```

## Jamf Pro API (Day 2 Labs)

```bash
# Authenticate and save token
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

## Student Git Exercise (Day 1)

Students create a branch `students/<name>`, add a file in `Students/`, commit, push, and open a PR to `main`.

## Compound Engineering Principles

1. Context is everything — the agent only knows what you tell it
2. Planning > building — think before you build
3. Share your mental model — the agent doesn't have it automatically
4. Review against your plan — your eyes and judgment come first
5. Recognize when to quit — sunk cost is a trap
6. It's a conversation — not a command line
7. Compound your sessions — distill the full session so the next one inherits everything

Reference `@day-3/resources/cheat-sheet.md` for the full loop reference and warning signs.
