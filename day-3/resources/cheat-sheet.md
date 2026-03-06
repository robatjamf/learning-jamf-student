# Agent-Native Development Cheat Sheet

**The one thing to remember:** The quality of your output is determined by the quality of your context.

---

## The Compound Engineering Loop

```
    ┌─────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
    │  Plan   │ ──→ │   Work   │ ──→ │  Review  │ ──→ │ Compound │
    └─────────┘     └──────────┘     └──────────┘     └──────────┘
         ↑                                                   │
         └───────────────────────────────────────────────────┘
                    (session context feeds the next cycle)
```

| Phase | What You Do | Key Question |
|-------|------------|--------------|
| **Plan** | Define requirements, gather context, create specs | "Do I have enough context to build this?" |
| **Work** | Execute with AI assistance | "Am I staying within the plan?" |
| **Review** | Evaluate output against your plan, then ask the agent for gaps | "Does this match what I intended?" |
| **Compound** | Type `/compound` — distills the session into COMPOUND.md | "What decisions, tradeoffs, and discoveries should the next session inherit?" |

---

## What a Good Plan Covers

Before you move to Work, make sure your plan covers these four things:

| Quality | What It Means | Try Asking... |
|---------|--------------|---------------|
| **What are we working with?** | The agent knows the project — not just the task | "Look at my project and tell me what you see" |
| **What are we trying to build?** | The goal is specific enough to act on | "Here's what I want to build. Before you start, propose a plan." |
| **What questions came up?** | The agent surfaced unknowns and you answered them | "What questions do you have before we start?" |
| **What judgment calls need you?** | Decisions only a human can make have been made | "What could go wrong with this approach?" |

All four covered → move to Work. Something missing → keep planning or restart with better context.

---

## Prompts That Work Well

| When You Want To... | Try Saying... |
|---------------------|---------------|
| Build shared understanding | "Look at my projet and tell me what you see" |
| Explore the problem | "Walk me through how this works" |
| Surface risks early | "What could go wrong with this approach?" |
| Get the agent's questions | "What questions do you have before we start?" |
| Check understanding | "Explain back to me what we're trying to do" |
| Validate the plan | "Are there edge cases we're missing?" |
| Find gaps against the plan | "Based on our plan, what did we miss? What's not working as intended?" |
| Start fresh | "Let's start over. Here's what I've learned..." |
| Compound the session | Type `/compound` — the command handles the rest |

---

## The Review Process

You are the primary reviewer. The agent helps find what you missed.

| Step | What You Do | Key Question |
|------|------------|--------------|
| **1. Evaluate it yourself** | Open the output. Use it. Click buttons. Read content. | "Does this match the page I had in my head when I planned it?" |
| **2. Compare to the plan** | Check what's there against what you specified | "What's missing? What's different from what I intended?" |
| **3. Ask the agent for gaps** | Have the agent compare output to plan | "Based on our plan, what did we miss?" |

> You can also ask the agent to focus on specific concerns: accessibility, content accuracy, mobile layout, security. But always start with your own evaluation.

---

## Warning Signs: When to Quit

Stop and restart if you see:

| Signal | What It Looks Like |
|--------|-------------------|
| **Overcomplicated** | Solution keeps growing - more files, more steps, harder to follow |
| **Context filling up** | Conversation is long, agent repeats itself or forgets earlier details |
| **Approach keeps changing** | "Actually, let's try..." "On second thought..." - no confident direction |
| **You're confused** | You can't explain what the agent is doing or why |
| **Gut says "off"** | Something feels wrong, even if you can't articulate it |

**Remember:** Starting fresh with better context is faster than pushing through a bad path. Quitting isn't failure - it's the skill.

---

## The Paradigm Shift

**Before:** Planning was easy, coding was hard.
**Now:** Planning is hard, execution is trivial.

If you're spending most of your time watching the agent write code, you skipped the important part. The plan IS the work. Execution is confirmation.

---

## When Things Go Wrong

1. **Stop early** - Don't let it keep digging the hole
2. **Identify what went wrong** - Missing context? Wrong approach? Misunderstanding?
3. **Restart with what you learned** - "Let's start over. Here's what I now know..."

---

## Core Principles (These Apply to Any AI Tool)

1. **Context is everything** - The agent only knows what you tell it
2. **Planning > building** - Think before you build
3. **Share your mental model** - The agent doesn't have it automatically
4. **Review against your plan** - Your eyes and judgment come first
5. **Recognize when to quit** - Sunk cost is a trap
6. **It's a conversation** - Not a command line
7. **Compound your sessions** - Distill the full session so the next one inherits everything

---

*These principles will apply to whatever AI tools exist five years from now.*
