# Claude API Planning Guide — Day 3 Workshop

This document captures API usage planning for running Day 3 (AI-Native Development) with 20 simultaneous students using Claude Code.

---

## The Challenge

20 students using Claude Code simultaneously will hit Anthropic API rate limits if using a single account. This guide documents the solution and logistics.

---

## Solution: 4 Accounts × 5 Students

Split students across 4 separate Anthropic accounts to distribute the rate limit load.

| Group | Students | Account |
|-------|----------|---------|
| A | 1-5 | workshop-a |
| B | 6-10 | workshop-b |
| C | 11-15 | workshop-c |
| D | 16-20 | workshop-d |

---

## Token Usage — Simulated Actuals

The estimates below were validated by simulating a full student day through all 14 exercise steps (morning loop + afternoon loop). See `day-3-simulation/` for the full run and output artifact.

### Per Student (Full Day) — Simulated

| Step | Input Tokens | Output Tokens |
|------|-------------:|-------------:|
| `/init` → CLAUDE.md | 105 | 312 |
| One-shot (no context) | 334 | 723 |
| Plan: analyze repo content | 1,424 | 286 |
| Plan: propose structure | 2,051 | 346 |
| Plan: iterate | 2,798 | 245 |
| Build | 3,300 | 2,004 |
| Review | 5,336 | 246 |
| Fix | 5,610 | 2,047 |
| `/compound` (morning) | 7,872 | 745 |
| Start fresh (afternoon) | 1,149 | 222 |
| Plan improvements | 1,407 | 261 |
| Build improvements | 1,680 | 2,603 |
| Review | 4,311 | 221 |
| `/compound` (afternoon) | 4,747 | 776 |
| **Total** | **42,124** | **11,037** |

### Original Estimates vs. Actuals

| Metric | Simulated actual | Original estimate | Notes |
|--------|----------------:|------------------:|-------|
| Input tokens | 42,124 | 25,000–50,000 | Within range |
| Output tokens | 11,037 | 17,000–38,000 | Well under — plan-mode responses are concise (200–350 tokens each, not 2K–5K) |
| Cost per student | $0.29 | $0.50–$1.50 | Lower than expected |
| Cost for 20 students | $5.84 | $10–$30 | Budget has significant headroom |

### Key finding: input tokens accumulate, output tokens don't

The original estimates treated each step independently. In practice, Claude Code carries the full conversation history — so by the `/compound` step, input context includes two full HTML pages worth of code from earlier in the session. That's why `/compound` has 7,872 input tokens vs. the 1,000–2,000 originally estimated.

Output tokens are lower than expected because plan-mode responses are short and focused. The build steps (generating HTML) drive output, not the conversations around them.

**The afternoon session is cheaper than the morning.** Starting fresh with a distilled COMPOUND.md (~745 tokens) instead of the full morning conversation keeps afternoon input lean — that's compounding working as intended.

### Per Account (5 Students)

| Metric | Per Account | Tier 1 Limit | Status |
|--------|-------------|--------------|--------|
| Daily input tokens | ~210K | No daily cap | ✓ |
| Daily output tokens | ~55K | No daily cap | ✓ |
| Peak RPM (simultaneous) | 5-10 | 60 | ✓ Safe |
| Peak output TPM | 8-15K | 16K | ⚠️ Tight |

---

## Cost Estimates

### Sonnet (Recommended)

| Scope | Simulated actual | Original estimate |
|-------|----------------:|------------------:|
| Per student | $0.29 | $0.50–$1.50 |
| Per account (5 students) | $1.46 | $2.50–$7.50 |
| **Total (20 students)** | **$5.84** | **$10–$30** |

### Other Models

| Model | Per Student | 20 Students |
|-------|-------------|-------------|
| Opus | $2.50–$7.50 | $50–150 |
| Haiku | $0.05–$0.15 | $1–3 |

**Budget recommendation:** $20–30 total (Sonnet with buffer for troubleshooting, debugging, and students who iterate heavily). The original $30–50 recommendation is safe but conservative.

---

## Anthropic API Rate Limits

### Tier Structure

| Tier | Requests/min | Input TPM | Output TPM |
|------|--------------|-----------|------------|
| Tier 1 (new accounts) | 60 | 60K | 16K |
| Tier 2 | 1,000 | 80K | 32K |
| Tier 3 | 2,000 | 160K | 64K |
| Tier 4 | 4,000 | 400K | 80K |

### Why 4 Accounts?

A single account with 20 students would see:
- 40-60 RPM during simultaneous iteration
- 30-50K output TPM during "build" moments

This exceeds Tier 1 limits. With 4 accounts, each sees 5 students = safe margins.

The cost is low enough that you could also make a case for a single Tier 2 account — but 4 accounts provides redundancy if one hits an issue on the day.

---

## Risk Moments & Mitigation

| Moment | Risk | Mitigation |
|--------|------|------------|
| Everyone does `/init` | Low | Natural stagger as students set up |
| "Now build your page" | **High** | Stagger: "Groups A+B now... C+D in 30 sec" |
| Afternoon iteration | Medium | Natural variation in pace |

The "build" command generates 2–3K output tokens per student (lower than the original 3–8K estimate, but still the spike moment). 5 students × 3K = 15K TPM — right at Tier 1's 16K limit. The 30-second stagger between groups remains the right call.

---

## Account Setup

### How Claude Code authentication works

Claude Code does **not** prompt students to enter an API key interactively. Authentication happens one of two ways:

**Option A — API key via environment variable (recommended for workshops)**

Set the key before starting Claude Code:

```bash
export ANTHROPIC_API_KEY=sk-ant-api03-...
claude
```

Claude Code picks up the key automatically. No browser, no login flow. This is the simplest approach for a shared workshop environment — facilitator distributes keys per group, students paste one command and they're in.

**Option B — Console login (OAuth)**

Students run `claude`, then `/login`, which opens a browser to authenticate with Console account credentials. Works fine but requires a browser flow and shared Console credentials per group, which is more friction on the day.

**Recommendation:** Use Option A. Generate one API key per Console account and distribute at setup time.

### Account ownership

The most reliable setup is genuine accounts owned by facilitators:

**Suggested owners:** Josh, Rob, Nate, + one backup.

Avoid email aliases (`+workshop-a@...`) — Anthropic may detect shared root addresses and link or reject the accounts. If you test this approach, verify both accounts have independent rate limits before the workshop. When in doubt, use real separate email addresses.

### Setup Checklist

- [ ] Create 4 Console accounts at console.anthropic.com (real email addresses)
- [ ] Add billing to each (same credit card works)
- [ ] Generate one API key per account
- [ ] Name keys clearly in console (e.g., "Workshop Group A")
- [ ] Set spend limits ($10/account as safety cap — actual spend is ~$1.50/account)
- [ ] Test each key: `ANTHROPIC_API_KEY=<key> claude -p "say hello"` — confirm it responds
- [ ] Verify accounts have independent rate limits (run test requests from each simultaneously)

### Distribute on the Day

**Option A — Key Cards (recommended):**
Print one card per student with their group letter and the API key. Students run one `export` command and they're done.

```
Group A (Students 1-5):  export ANTHROPIC_API_KEY=sk-ant-api03-...
Group B (Students 6-10): export ANTHROPIC_API_KEY=sk-ant-api03-...
```

**Option B — Projected:**
Show the `export` commands on screen by group during setup.

**Option C — Pre-configured:**
If you control the student machines (e.g., Tart VMs), bake the keys into `.zshrc` or the VM image before the workshop.

---

## Day-Of Logistics

### Student Onboarding Flow

1. Assign students to groups A–D (by seating or number)
2. Distribute/display API keys by group
3. Students run `export ANTHROPIC_API_KEY=<their-group-key>`
4. Students run `claude` — should see the welcome screen
5. Verify everyone is running before proceeding

### If Rate Limits Hit

1. Students in affected group pause — limits reset per minute
2. Can temporarily pair up with a student from a different group
3. Facilitator staggers the next activity to prevent recurrence

---

## Anthropic Contact (If Needed)

| Channel | Contact | Use For |
|---------|---------|---------|
| Support | support@anthropic.com | Rate limit issues, account help |
| Sales | sales@anthropic.com | Temporary tier bump, volume pricing |
| Console | console.anthropic.com → Help | General questions |

**Note:** Contact 2+ weeks before workshop if requesting tier increases. Given the actual cost is ~$6 for 20 students, a single Tier 2 account may be the cleanest option — worth asking about.

---

## Summary

| Item | Value |
|------|-------|
| Students | 20 |
| Accounts | 4 |
| Students per account | 5 |
| Auth method | `export ANTHROPIC_API_KEY=...` |
| Model | Sonnet (recommended) |
| Simulated cost (20 students) | ~$6 |
| Budget (with buffer) | $20–30 |
| Key risk moment | Simultaneous "build" commands |
| Mitigation | 30-second stagger between groups |
