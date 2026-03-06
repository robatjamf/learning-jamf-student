# PLAN.md

The plan agreed on before building the Day 3 planned site.

---

## File Structure

```
day-3/site/planned/
└── client/
    ├── index.html
    ├── quiz.html
    ├── cheat-sheet.html
    ├── notes.html
    ├── resources.html
    ├── css/
    │   ├── style.css
    │   └── components.css
    └── js/
        ├── main.js
        └── quiz.js
```

---

## Shared Elements

- Nav bar on every page — site name left, page links centre, dark/light toggle right
- CSS custom properties for all colours — one switch changes the entire site
- System dark mode respected by default, manual toggle saved to `localStorage`
- Consistent components defined once in `components.css`, used everywhere

---

## `index.html` — Home

- Hero with name and one-line framing
- 3 overview cards (Day 1, Day 2, Day 3) — big picture at a glance
- Day summaries expandable — collapsed by default, open on click

---

## `quiz.html` — Quiz

- **Step 1 — Select topics:** Day 1, Day 2, Day 3, or specific topics (Jamf, APIs, VMs, Webhooks, Personas, Claude Code, AI/LLMs)
- **Step 2 — Select mode:**
  - *Immediate feedback* — wrong answer shows explanation + correct answer instantly
  - *End review* — complete the full quiz, then see all results with explanations
- **Question types:** multiple choice, true/false, typed answer — mixed throughout
- Score displayed at the end in both modes

---

## `cheat-sheet.html` — Cheat Sheet

Four sections, each structured as: **concept explanation → command table → worked example**

| Section | Coverage |
|---|---|
| Git | Full workflow + concepts (branches, repos, remotes, rebase, reset, stash) |
| Tart | Full useful set (create, run, list, delete, clone, pull) |
| curl | Scoped to Jamf Pro API (GET, POST, auth headers, reading responses) |
| Claude Code | Slash commands, CLAUDE.md, memory, hooks, key workflows |

---

## `notes.html` — Knowledge Base

Every topic follows the same format: **plain-language explanation → key concepts → expandable deeper dive**

18 topics in order:

1. Jamf & MDM
2. APIs & REST
3. Webhooks
4. Authentication & Authorization
5. JSON & XML
6. HTTP Fundamentals
7. VMs & Infrastructure
8. Linux & Shell Basics
9. Networking Basics
10. macOS Management
11. Git & Version Control
12. Automation & Scripting
13. Identity & Access Management
14. DevOps Fundamentals
15. Claude Code
16. AI & LLMs
17. Security
18. Prompt Engineering

Sidebar navigation to jump directly to any topic.

---

## `resources.html` — What's Next

- Step-by-step: host a site on a Linux VM (nginx, LAN access from other devices)
- Step-by-step: expose an API from a VM
- Useful tools section (ngrok, curl, Tart, webhook.site, SSH)
- Curated external links per topic

---

## What Was Cut

- **No backend** — everything runs in the browser (quiz logic, dark mode, tabs, sidebar)
- **No settings page** — dark mode lives in the nav toggle, saved to `localStorage`; quiz preferences live on the quiz page itself
