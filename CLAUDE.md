# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a 3-day hands-on training repository for learning Jamf Pro (Apple device management at scale) with a focus on API-driven automation and AI-native development. Students work through exercises on enrollment, configuration, APIs, webhooks, and AI-assisted development practices.

**Lab environment:** All machines are Apple Silicon Macs (M-series) running macOS.

## Repository Structure

```
├── apps/                      # Software installation guides organized by training day
├── day-1/                     # Day 1: Connections and context (Git, PRs, personas)
│   └── learning-log.md        # Student notes from day 1
├── day-2/                     # Day 2: Technical foundations (APIs, VMs, automation)
│   ├── quick-reference.md     # Terminal commands for exercises
│   └── learning-log.md        # Student notes from day 2
├── day-3/                     # Day 3: AI-native development with Claude Code
│   ├── README.md              # Day 3 instructions and starter prompts
│   ├── resources/             # Framework documentation
│   │   ├── cheat-sheet.md     # Compound engineering quick reference
│   │   ├── glossary.md        # Workshop terminology (all 3 days)
│   │   └── principles.md      # 7 transferable AI development principles
│   └── site/                  # Student HTML projects (Day 3 exercises)
│       ├── one-shot/          # Round 1: Quick build with no planning
│       └── planned/           # Round 2: Planned build using compound engineering loop
├── gallery/                   # Student gallery showcase (polaroid-style)
│   ├── index.html             # Main gallery page with student previews
│   └── [student-name]/        # Individual student project directories
│       └── index.html         # Student's review page
├── Students/                  # Day 1 Git exercise submissions
│   └── README.md              # Instructions for first branch/PR exercise
└── cool-resources/            # External links and documentation
    └── Links_and_docs.md
```

## Day 3 Development Workflow (Compound Engineering Loop)

Day 3 exercises follow a 4-phase cycle: **Plan → Work → Review → Compound**

### The Four Phases

1. **Plan** — Define requirements, gather context, create specs. Students explore their learning-log.md files to understand what they learned.
2. **Work** — Execute with Claude Code assistance, staying within the plan.
3. **Review** — Student evaluates output first (opens HTML, uses features), then asks Claude to find gaps against the plan.
4. **Compound** — Type `/compound` to distill session context into persistent COMPOUND.md file.

### Key Files in Day 3 Workflow

- **CLAUDE.md** (this file) — Project setup and structure. Read first in every session.
- **COMPOUND.md** — Rich session history. Decisions, tradeoffs, dead ends, review findings. Accumulates context across sessions.
- **day-3/resources/** — Framework documentation students reference during development.

### Day 3 Student Projects

Students build a personal review page (single HTML file) covering:
- What they learned in days 1 and 2
- At least one interactive element (quiz, flashcards, expandable notes)
- Day 3 process notes
- Personalized design (not generic templates)

**Output locations:**
- `day-3/site/one-shot/index.html` — Quick build without planning (kept for comparison)
- `day-3/site/planned/index.html` — Planned build using compound engineering loop

To preview student pages:
```bash
open day-3/site/one-shot/index.html
open day-3/site/planned/index.html
```

## Gallery Structure

The `gallery/` directory contains student review pages built during Day 3. Each student has their own subdirectory with at least an `index.html` file. Some students created multi-page sites with separate CSS, JavaScript, and additional HTML pages.

**Gallery index:** `gallery/index.html` displays a polaroid-style showcase with:
- Student name and preview image (polaroid format)
- Links to individual student pages
- Honey badger image in footer
- Password-protected entry ("compound" is the password)

**Student subdirectories:** Each follows the pattern `gallery/[student-name]/` and contains their Day 3 final project.

## Required Software Stack

Students install these tools across the 3 days:

**Day 1:**
- Command Line Tools (from USB)
- Homebrew (from USB)
- Node.js 20 (`brew install node@20`)
- VS Code
- GitHub Desktop

**Day 2:**
- VMware Fusion OR Virtual Buddy (one VM tool, from USB)
- macOS IPSW files (15 and 26, from USB)
- Postman
- Claude Code (`curl -fsSL https://claude.ai/install.sh | bash`)

**Day 3:** Uses tools from Days 1-2 (primarily Claude Code)

## Working with Day 3 Projects

When helping with Day 3 exercises:

1. **Read context first:** Check `day-1/learning-log.md` and `day-2/learning-log.md` to understand what the student learned.
2. **Reference the framework:** Point to `day-3/resources/` files when discussing principles or process.
3. **Follow the loop:** Encourage Plan → Work → Review → Compound cycle. Don't skip planning.
4. **Personal over generic:** Projects should reflect the student's experience, not templated content.
5. **Interactive required:** At least one interactive element (quiz, flashcards, expandable sections) must be included.

## Key Principles to Emphasize

From `day-3/resources/principles.md`:
1. **Context is everything** — Quality of output depends on quality of context provided
2. **Planning > Building** — 80% planning, 20% building
3. **Share your mental model** — Transfer understanding to the agent explicitly
4. **Recognize when to quit** — Starting over with better context beats forcing a bad path
5. **It's a conversation** — Collaboration, not delegation
6. **Review against your plan** — Use it yourself before asking agent to find gaps
7. **Compound your sessions** — Distill full session context into COMPOUND.md for next time

## Git Workflow

- **Main branch:** `main`
- **Current branch:** `feature/student-gallery` (polaroid showcase implementation)
- Students create branches following pattern: `students/[name]` or `feature/[feature-name]`

## Important Notes

- All HTML projects are single-file or multi-file but self-contained (no build process)
- Students have varying technical backgrounds — some are new to HTML/CSS/JS
- The focus is on the AI-assisted development process, not advanced web development
- Day 3 is about learning to work effectively with AI coding tools using the compound engineering framework
- `.gitignore` excludes `GEMINI.md` files (competitor AI tool documentation)
