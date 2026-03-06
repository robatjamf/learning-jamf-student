# COMPOUND.md

Session history for Tana's workshop repo. Read this after CLAUDE.md for full context.

---

## Session 1 — Day 3 Build Session

### What We Built

Two HTML pages, both complete and working:

**1. Workshop Review Page** — `day-3/site/planned/index.html`
- Full single-page review of all 3 days of the Jamf Pro + AI workshop
- Sections: My Journey (personal reflections), The Compound Engineering Loop, Glossary (Days 1–3 terms), 7 Transferable Principles, Prompt Reference
- Dark theme matching the course design language (`--bg: #0f1117`, purple/blue accents)
- Sticky nav, responsive grid layout, table-based glossary with analogies
- Content sourced from: `day-3/resources/cheat-sheet.md`, `day-3/resources/glossary.md`, `day-3/resources/principles.md`, `day-1/tana-learning-log.md`, `day-2/tana-learning-log.md`

**2. Personal "About Me" Page** — `day-3/site/about-me/index.html`
- Built via a structured interview (5 questions across Identity, Interests, Strengths/Blind Spots, Values, Goals)
- Final design: dark theme (same palette as review page) — Tana's chosen final version
- Sections: Hero (name, tagline, location pulse dot), Who I Am, What I Love, How I Work, My Anchor (Values), The Goal, Workshop Insight (quote)

---

### The Interview — Tana's Answers

These are the source-of-truth answers that power the About Me page:

| Question | Answer |
|----------|--------|
| Where are you from / based? | Victoria Falls, Zimbabwe |
| How would you describe yourself? | A dark thick girl |
| What do you love doing? | Watching Korean movies/series (could spend hours), reading novels |
| What do people come to you for? | Listening, helping with things (mostly non-tech) |
| What do you struggle with? | Keeping someone engaged in a conversation |
| What do you value deeply? | Family — wouldn't compromise on it |
| Where do you want to be in 2–3 years? | An independent girl who can support her family financially. Success = achieving even the smallest things |

---

### Design Decisions & Why

**Review page — dark theme from the start**
Chose dark theme (`#0f1117` bg, `#6c7bff` accent) to match the course design language. No alternative was seriously considered — consistency with workshop materials was the clear priority.

**About Me page — went through 3 design iterations:**

1. **First version** (dark, matching review page) — built without asking for style preference
2. **Second version** (soft & elegant, light mode) — Tana chose "Soft & Elegant" from three options (Bold & Magazine-style, Soft & Elegant, Vibrant & Colourful). Used Cormorant Garamond serif font, warm creams and blush pinks, animated rotating rings in hero, `font-family: 'Inter'` for body.
3. **Dark mode variant** — applied dark mode to the elegant design (deep purple-black `#141018`, rose-pink accents). Tana decided she preferred the original dark design (version 1), not the dark-mode elegant variant.

**Final decision:** Reverted to version 1 — the original dark theme matching the review page. Tana's preference was the simpler, crisper dark design over the more ornate elegant aesthetic.

**Goal answer was updated mid-session:**
- Original answer: "I want to be a tech girl who has her own company"
- Tana asked to change it before the page was built but the message arrived late — page was already built
- Updated to: "I want to be an independent girl who can support her family mostly with finances. Success is when I have achieved even the smallest things."
- The updated answer is more personal and more honest — captured in the final page.

---

### Approaches Considered But Not Taken

- **Soft & Elegant dark mode** — applied dark colours to the elegant layout, but the result wasn't what Tana wanted. The elegant design relied on warm light backgrounds to feel soft; dark mode made it feel heavy rather than refined.
- **Magazine-style layout** — offered as an option, not chosen. Would have been asymmetric with large editorial typography.
- **Vibrant & Colourful** — offered as an option, not chosen.

---

### Files Created This Session

| File | Status |
|------|--------|
| `day-3/site/planned/index.html` | Complete |
| `day-3/site/about-me/index.html` | Complete |

---

### What's Working

- Both pages open and render correctly in browser
- Review page content is accurate to the resource files and learning logs
- About Me page content is accurate to Tana's interview answers
- Dark theme is consistent across both pages

### What the Next Session Should Focus On

~~- **Commit and PR**: Neither page has been committed to the `Tana` branch yet. Next step is `git add`, `git commit`, and open a PR into `main`.~~
~~- **Day 3 learning log**: `day-3/tana-learning-log.md` exists as an untracked file — check if it needs content added and commit it.~~
- **Review the pages together**: Tana hasn't done a formal review pass (Plan → Work → **Review** → Compound). A good next step would be opening both pages and checking them against the original goals.
- **One-shot page**: `day-3/site/one-shot/index.html` — unclear if this was built or is still empty. Check and potentially build it for the comparison exercise.

---

## Session 2 — Day 3 Learning Log Update

### What Happened

Tana filled in and saved `day-3/tana-learning-log.md` — the Day 3 personal reflection log which had previously been an empty template. Once confirmed saved, the content was pulled into the workshop review page.

### Tana's Day 3 Reflections (Source of Truth)

| Question | Answer |
|----------|--------|
| One-shot page — what did you notice? | Cool, had lots of info including Day 1 & 2 content. Added info based on what I was doing. |
| How did it compare to expectations? | Exceeded expectations. Very content with it. |
| Planning process — what was it like? | Interesting. Had to answer questions no one had ever asked me. Trickiest: describing myself in one sentence. |
| Planned vs one-shot difference? | Planned page had interview content; one-shot had more general info from all days. |
| What matched / didn't match your plan? | Grouped information and concluded in a very nice way. |
| What did the agent catch that you missed? | The tech part of how I spend my time — something she also needs to work on. |
| What surprised you about working with AI? | Different from other AIs, fun to use, very fast at creating things, designs pages. |
| What would you tell a friend? | Working with AI is fun and easy — you just need to know the right way to ask questions. |
| Which principle will you remember? | Mental model is the framework in your mind. |

### What Changed

**`day-3/site/planned/index.html` — My Journey section updated**

Added 6 new Day 3 log cards to the grid (previously only covered Days 1 & 2):
- Day 3 — One-Shot: exceeded expectations
- Day 3 — Planned Build: hardest question was describing herself in one sentence
- Day 3 — Review: agent caught the tech side of how she spends her time
- Day 3 — Working with AI: different, fun, fast
- Day 3 — Principle to remember: mental model is the framework in your mind

### Confusion to Note

During this session, Tana briefly pointed to the `#prompts` anchor when she meant the Journey section — clarified immediately as a mistake. No change was made to the Prompts section.

### What's Still Pending

- **Git commit & PR**: `day-3/site/planned/index.html`, `day-3/site/about-me/index.html`, and `day-3/tana-learning-log.md` are all untracked/uncommitted. Next step: `git add`, `git commit`, open a PR into `main`.
- **One-shot page**: `day-3/site/one-shot/` — still unclear if built. Check and potentially build for the comparison exercise.
- **About Me page**: Not updated this session. If Tana wants Day 3 reflections added there too, that's a possible next step.
