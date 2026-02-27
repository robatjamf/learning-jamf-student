# Transferable Principles

These concepts apply to **any AI coding tool** - Claude Code, GitHub Copilot, Cursor, ChatGPT, or whatever comes next. Tools will change; these principles won't.

---

## 1. Context Is Everything

**The quality of your output is determined by the quality of your context.**

AI agents only know what you tell them. They don't have:
- Your mental model of the codebase
- The history of why things are built a certain way
- The constraints you're working within
- What "done" looks like to you

Your job is to share that context. The more relevant context you provide, the better the output.

**In practice:**
- Point the agent to relevant files before asking it to build
- Explain the "why" behind requirements, not just the "what"
- Share constraints upfront (performance needs, existing patterns, etc.)

---

## 2. Planning > Building

**80% planning, 20% building.**

If you're spending most of your time watching the agent write code, you skipped the important part. The plan IS the work. Execution is confirmation.

A good plan:
- Identifies what needs to change and why
- Surfaces edge cases and risks before they become problems
- Creates shared understanding between you and the agent

**In practice:**
- Ask the agent to explain its approach before it starts coding
- Poke holes in the plan: "What could go wrong?"
- Iterate on the plan until you're confident

---

## 3. Share Your Mental Model

**The agent doesn't have it automatically.**

You've been thinking about this problem. You know the codebase. You have opinions about how things should work. The agent starts from zero every time.

The fastest way to get good output is to transfer your mental model to the agent.

**In practice:**
- "Here's how I'm thinking about this..."
- "The pattern we use in this codebase is..."
- "The most important thing is..."

---

## 4. Recognize When to Quit

**Sunk cost is a trap.**

Sometimes the best move is to start over. Recognizing "this isn't working" and restarting with better context is faster than pushing through a bad path.

Warning signs:
- Solution is getting more complicated, not clearer
- Agent keeps changing approaches
- You can't explain what's happening
- Something feels off

**In practice:**
- Give yourself permission to stop
- Starting fresh isn't failure - it's the skill
- "Let's start over. Here's what I've learned..."

---

## 5. It's a Conversation, Not a Command

**This is collaboration, not delegation.**

You're not typing commands into a machine. You're having a conversation with a capable partner who doesn't have your context.

The best results come from back-and-forth:
- You share context, agent explores
- Agent proposes, you refine
- You ask questions, agent explains
- Together you build understanding

**In practice:**
- Ask the agent questions: "What do you see?" "What could go wrong?"
- Let the agent ask YOU questions
- Treat it like pairing with a smart colleague who just joined the project

---

## 6. Review Against Your Plan

**Your eyes and judgment are the primary review tool.**

Open the output. Use it. Click the buttons. Read the content. The real question isn't "is this good?" — it's "does this match what I intended when I planned it?" After you've evaluated it yourself, ask the agent to help find gaps against the plan.

**In practice:**
- Open the output and use it like a real user would
- Compare what's there to what you specified in the plan
- "Based on our plan, what did we miss? What's not working as intended?"
- You can ask the agent to focus on specific concerns (security, accessibility, usability) — but you evaluate first

---

## 7. Compound Your Sessions

**Distill the full session. Make the next one start smarter.**

Every session with an AI agent is rich with context — planning decisions, implementation tradeoffs, dead ends explored, review findings, approaches rejected and why. When the session closes, all of that context disappears.

The compound step is about distilling that entire session into a persistent reference. Not a diary entry or a bullet list of takeaways — a complete briefing that any future session can build on. The reasoning matters as much as the outcomes: *why* you chose this approach, *what* you weighed, *where* you left off.

This reference has two audiences: future-you and future-AI. The agent reads your CLAUDE.md first in every new session. The richer that briefing, the smarter it starts. Over time, each session's compound output becomes the next session's starting context — so understanding accumulates instead of resetting.

**In practice:**
- At the end of a session, distill the full context: decisions, tradeoffs, dead ends, findings, and next steps
- Distill into COMPOUND.md (rich session history) and keep CLAUDE.md lean (project setup and current state) — the agent reads CLAUDE.md first and follows the reference to COMPOUND.md
- Capture the *reasoning* behind decisions, not just the decisions themselves — "We chose X because Y, and rejected Z because..." is compound context

---

## The Meta-Principle

These seven principles are really one thing:

**AI agents are powerful collaborators who lack your context. Your job is to bridge that gap — through thoughtful planning, clear communication, expert review, and the discipline to distill every session so the next one inherits everything you figured out.**

The tools will keep getting better. The underlying dynamic won't change.

---

*Keep these principles. They'll serve you for years.*
