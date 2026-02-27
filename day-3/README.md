# Day 3: AI-Native Development

Today you'll build a **personal review page** — a site you can revisit after the workshop to review, explore, and quiz yourself on everything you've learned.

You'll build it using the Compound Engineering loop: **Plan → Work → Review → Compound**.

---

## What You're Building

A single-page HTML site that:

- Reviews what you learned in days 1 and 2 — personas, journey maps, VMs, APIs, webhooks, and more
- Includes at least one interactive element (quiz, flashcards, expandable notes — your choice)
- Has a section for your day 3 process notes
- Reflects YOU — not a generic template

---

## Getting Started

1. Open your workshop repo in VS Code
2. Open the integrated terminal (Ctrl+backtick)
3. Start Claude Code: `claude`
4. Follow along with the facilitator

---

## Structure

```
day-3/
├── README.md              ← you are here
├── resources/
│   ├── cheat-sheet.md     ← compound engineering quick reference
│   ├── glossary.md        ← term definitions for all 3 days
│   └── principles.md      ← 7 transferable principles
└── site/
    ├── one-shot/
    │   └── index.html     ← Round 1: quick build (keep for comparison)
    └── planned/
        └── index.html     ← Round 2: planned build (the real one)
```

### Where your pages go

| Round | Directory | What goes here |
|-------|-----------|---------------|
| One-shot (Round 1) | `day-3/site/one-shot/` | The quick build with no planning. Keep this — you'll compare it later. |
| Planned (Round 2) | `day-3/site/planned/` | The planned build using the full loop. This is the real one. |

**Important:** Your one-shot page goes in `site/one-shot/`. Your planned page goes in `site/planned/`. Keep both — you'll compare them later.

To open your pages in the browser:
- One-shot: `open day-3/site/one-shot/index.html`
- Planned: `open day-3/site/planned/index.html`

---

## Morning Starter Prompts

Pick whichever feels natural, or make it your own.

### Option A — Conversational

```
I want to build a page that helps me review what I learned in this
workshop. I'm not sure exactly what it should look like yet. Can you
look at what I worked on in days 1 and 2, and suggest what the page
should include? Ask me questions about what would be most useful.
```

### Option B — Structured

```
I want to build a single-page HTML site I can revisit after the workshop
to review what I learned. Before you write any code, I want you to:

- Propose what sections the page should have based on what you found in my repo
- Suggest interactive elements that would help me actually review
  (quizzes, flashcards, expandable notes, etc.)
- Tell me what decisions I need to make about the design and content
- List what information you'd need from me to make this personal
```

### Option C — Specific

```
I want to build a review page with these sections:
- A quiz that tests me on [topic from day 1 — e.g., Jamf personas and their pain points]
- An expandable notes section for [topic from day 2 — e.g., APIs, webhooks, or VMs]
- A cheat sheet with the key commands I learned (Tart, Postman, Claude Code, Git)

Use a dark theme. Make it a single HTML file with Tailwind.
Before you build, walk me through your plan.
```

### Option D — Interview me

```
Before we plan anything, interview me. Ask me questions about how I
learn best, what topics I found hardest, what I want to remember most
from this workshop, and what kind of study tools actually work for me.
Use my answers to design a page that fits how I think — not just what
I studied. Do not write any code yet.
```

---

## Afternoon Creative Prompts

Going beyond fixes? Try one of these as a starting point — fill in the details that make it yours.

```
I'm a visual learner who likes seeing how things interconnect.
Help me restructure my page so the sections show relationships
between [topic A] and [topic B] instead of just listing them.
```

```
I want to give my page a [style] aesthetic — think [reference].
Plan a full UI overhaul that keeps all my content but transforms
the look and feel. Use [color preference] as the primary color.
```

```
I want to add a new section that covers the compound engineering
method itself — the 4-step loop, the principles, how I experienced
it today. Make it interactive so I can quiz myself on the framework.
```

```
I saw something on someone else's page during the gallery walk
that I want to adapt: [describe what you liked].
Help me plan how to add something similar to my page.
```

**Style ideas:** neon, retro Macintosh, 90s web, minimalist, brutalist, magazine layout, dark mode, terminal/hacker, notebook/sketchbook

---

## The Compound Step

At the end of each session, type `/compound` to distill everything — your planning decisions, what you built, what the review found, dead ends you explored — into a `COMPOUND.md` file. This isn't notes; it's a project briefing.

Two files work together:

- **CLAUDE.md** — Project setup, structure, and current state. Claude reads this first every session. Keep it lean.
- **COMPOUND.md** — Rich session history. Decisions, tradeoffs, dead ends, review findings, reasoning. This is where context accumulates across sessions.

The next time you start Claude Code, it reads CLAUDE.md (which references COMPOUND.md) and inherits all your accumulated context instead of starting from zero.

---

## Resources

These files are available in the `resources/` directory for reference throughout the day:

- **[cheat-sheet.md](resources/cheat-sheet.md)** — Quick reference for the compound engineering loop, good prompts, and warning signs
- **[glossary.md](resources/glossary.md)** — Plain-language definitions for all workshop terms (days 1-3)
- **[principles.md](resources/principles.md)** — 7 transferable principles that apply to any AI tool

**Tip:** You can point Claude at these files using `@day-3/resources/cheat-sheet.md` (or glossary, or principles) to give it extra context about the framework.

---

## Tips

- **Plan before you build.** The quality of your plan determines the quality of your page.
- **Be specific about what you want.** Claude can't read your mind — but it CAN read your descriptions.
- **Make it personal.** The more you tell Claude about what YOU learned, the more useful the page will be.
- **It's okay to start over.** If something isn't working, that's a signal, not a failure.
- **Compound your sessions.** Type `/compound` before closing. The next session starts smarter.
- **Use @ to reference files.** Type `@` followed by a file path to point Claude at a specific file (e.g., `@day-3/resources/cheat-sheet.md`).
- **Shift+Tab** cycles between normal, plan, and auto-accept modes.
- **Ctrl+C** stops Claude immediately if it's going the wrong direction.
