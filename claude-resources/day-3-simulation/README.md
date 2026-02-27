# Day 3 Simulation

A simulated run of the full Day 3 student experience, used to validate the token and cost estimates in `../api-planning-guide.md`.

## What This Is

`index.html` is the review page a student named "Alex" would produce by the end of Day 3 after completing two full Compound Engineering loops — morning and afternoon.

It was built by simulating every exercise step in sequence:

| Step | Phase |
|------|-------|
| `/init` → CLAUDE.md | Morning setup |
| One-shot "Draw a Thingamado" | Morning Plan 1A |
| Plan: analyze day-1 & day-2 content | Morning Plan 1B |
| Plan: propose page structure | Morning Plan 1B |
| Plan: iterate and personalize | Morning Plan 1B |
| Build: execute the plan | Morning Work |
| Review: compare output to plan | Morning Review |
| Fix: apply review findings | Morning Review |
| `/compound` | Morning Compound |
| Start fresh with compounded context | Afternoon setup |
| Plan improvements | Afternoon Plan |
| Build improvements | Afternoon Work |
| Review | Afternoon Review |
| `/compound` | Afternoon Compound |

## What the Page Contains

Alex's student repo was based on Days 1–2 content: an IT Admin persona (Maria), a device enrollment journey map, a macOS VM built from IPSW, Jamf API calls via curl, and a `webhook-listener.py` Flask script. The final page reflects that specific work:

- **Maria's device journey** — 9-step enrollment flow, bottleneck highlighted
- **Command reference** — VM operations (VMware Fusion / Virtual Buddy) + Jamf API curl examples
- **webhook-listener.py** — syntax-highlighted with copy button
- **Self-quiz** — 8 questions, answers hidden until clicked
- **Compound Engineering reference card** — the loop diagram + 4 principles

## Token Findings

| Metric | Simulation result | Planning guide estimate |
|--------|------------------:|------------------------:|
| Input tokens (full day) | 42,124 | 25,000–50,000 |
| Output tokens (full day) | 11,037 | 17,000–38,000 |
| Cost per student (Sonnet) | $0.29 | $0.50–$1.50 |
| Cost for 20 students | $5.84 | $10–$30 |

**Key finding:** The planning guide's output estimate is high — real plan-mode responses are concise (200–350 tokens each), not 2K–5K. The $30–50 budget has significant headroom; the simulation puts actual spend closer to $6–12 for 20 students with a realistic variance buffer.

The 4-account split is still the right call — the risk is peak TPM during simultaneous builds, not daily cost.
