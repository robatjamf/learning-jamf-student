# Jamf Pro Workshop — Full Detailed Course Notes
### Pride's Complete Reference | 3-Day Hands-On Training

---

# DAY 1 — Foundations: Context, Empathy & Git

---

## Block 1 — Welcome & Cultural Exchange

### Icebreakers & Getting to Know the Cohort

The day opened with icebreakers that let everyone share what brought them into tech. The stories were genuinely interesting — people came from all different paths. Some were drawn in by movies or games, others by friends in the industry, and others by simple curiosity about how things work.

Key insight from the cohort:
> *It can be the smallest thing that gets you interested in a career — movies, friends, or just basic curiosity about why and how things operate the way they do.*

### Global Tech Traditions — Learning Resources Shared

The group shared tools and resources they use to learn and explore tech:

| Resource | What It's For |
|----------|--------------|
| **Mimo** | Learn almost all programming languages through short lessons |
| **YouTube** | Guided, explained tutorials — great for visual walkthroughs of building things |
| **roadmap.sh** | Structured learning paths for developer roles (Frontend, Backend, DevOps, etc.) |
| **Anthropic Prompt Engineering Guide** | How to write better prompts for Claude |
| **OpenAI Prompt Engineering Guide** | General strategies for getting better results from any LLM |
| **Prompting Guide (promptingguide.ai)** | Community resource — chain-of-thought, few-shot, role prompting |

---

## Block 2 — What Is Jamf?

### Jamf in Plain Language

**Jamf enables IT teams to manage, secure, and configure Apple devices through MDM (Mobile Device Management).**

MDM is a protocol — a set of rules Apple built into every device — that lets an IT team control many devices from one central place. Instead of physically walking to every Mac, iPhone, or iPad to install software or change a setting, an IT admin can push changes to thousands of devices at once.

Think of it like a school principal who can send rules to every classroom simultaneously, instead of walking to each room individually.

### What Makes Jamf Different

- **Apple-first, always:** Jamf is designed exclusively for Apple devices. It follows Apple's own guidelines and releases support for new Apple features as fast as any tool on the market.
- **Customer perspective:** Jamf doesn't just design for IT teams — they think about what the end user (the employee, the student, the person holding the device) experiences. This builds loyalty and trust.
- **Problem-solvers, not just salespeople:** They are focused on actually helping organisations solve real problems, not purely on maximising revenue. That was genuinely surprising.
- **Competitive advantage:** Because of their Apple focus, they go deeper on Apple-specific features than any general-purpose MDM platform.

### Zero Touch Deployment

One of Jamf's most powerful capabilities. When a new device arrives:

1. The employee takes it out of the box
2. They power it on and log in with their company account
3. **Everything configures itself automatically** — apps install, security settings apply, email connects

The IT admin never touches the device. This scales to thousands of devices and dramatically reduces IT workload during onboarding.

### Jamf's Products

| Product | What It Does |
|---------|-------------|
| **Jamf Pro** | Enterprise Apple device management — Mac, iPhone, iPad, Apple TV |
| **Jamf School** | Simplified management designed for K-12 education environments |
| **Jamf Connect** | Identity and authentication — ties Apple devices to cloud identity providers like Okta or Azure AD |
| **Jamf Protect** | Endpoint security and threat detection specifically for Apple devices |
| **Jamf Now** | Self-service MDM for small businesses — simpler than Pro |

---

## Block 3 — Persona Mapping

### What Is a Persona?

A persona is a fictional character that represents a real type of user. In IT and product design, personas help teams understand different people's needs, frustrations, and goals — so you build solutions that actually fit how people work, not how you imagine they work.

A **Journey Map** goes alongside a persona — it's a step-by-step visual of that person's workflow, showing where they get stuck, what tools they switch between, and where things could be better. Like drawing a map of someone's daily commute and marking every traffic jam.

### The Four Workshop Personas

#### 1. Enterprise IT Admin
- **Context:** Manages 10,000+ Apple devices across a large organisation
- **Tools:** Jamf Pro, scripting, asset management systems
- **Pain points:** Scale and consistency — making sure every device is configured correctly and stays that way
- **Needs:** Automation, reporting, reliable deployment pipelines

#### 2. K-12 IT Coordinator
- **Context:** Manages shared iPads and Macs across multiple schools
- **Tools:** Jamf School, Apple School Manager
- **Pain points:** Shared devices (many students, one iPad), budget constraints, teacher requests
- **Needs:** Simple bulk enrollment, easy app distribution, parental controls

#### 3. Security Analyst
- **Context:** Monitors threats and enforces compliance across the device fleet
- **Tools:** Jamf Protect, SIEM tools, endpoint detection
- **Pain points:** 1,000+ alerts per day, manual investigation, report generation, constant interruptions
- **Needs:** Automated triage, better filtering, faster incident response

#### 4. Help Desk Technician
- **Context:** First line of support — handles tickets from employees who need help
- **Tools:** Remote access tools, ticketing systems, Jamf Pro
- **Pain points:** Repetitive tasks, remote troubleshooting limitations, no visibility into device state
- **Needs:** Self-service capabilities, better remote tools, automation for common fixes

### My Group — Security Analyst

**Biggest pain points we identified:**
- Everything is manual — alerts, investigations, responses all require human action every step
- Email overload — no prioritisation, important alerts buried in noise
- Report generation is time-consuming and pulls analysts away from actual work
- Constant interruptions break concentration during deep investigation work

**What I would build for this persona:**
> An intelligent email and alert categorisation system that automatically separates critical security alerts from routine requests and informational messages. Analysts see the urgent stuff first — everything else is organised and waiting.

---

## Block 4 — Git Exercise

### Why Git Matters

Git is version control — a system for tracking every change made to a set of files over time. Every save is recorded, who made it, when, and why. You can go back to any previous state, compare versions, and work on changes without breaking anything that's already working.

In teams, Git lets multiple people work on the same project without overwriting each other's work.

### Core Git Concepts

| Concept | What It Means |
|---------|--------------|
| **Repository (repo)** | A folder tracked by Git — contains all your files and their full history |
| **Branch** | A separate, isolated copy of the code you can work on freely without affecting the main version |
| **Commit** | A saved snapshot — like a checkpoint with a message explaining what changed |
| **Push** | Upload your local commits to GitHub (the remote server) |
| **Pull** | Download the latest changes from GitHub to your local machine |
| **Pull Request (PR)** | A proposal to merge your branch into the main branch — triggers review |
| **Merge** | Combining changes from one branch into another |
| **Clone** | Download a copy of a remote repository to your computer |

### The Day 1 Git Exercise — Step by Step

Every student added themselves to the `Students/` folder in the repo:

```bash
# 1. Create your own branch
git checkout -b students/your-name

# 2. Create your file in the Students folder
# Add your name and favourite animal inside the file

# 3. Stage the file (tell Git to track it)
git add Students/your-name.txt

# 4. Commit with a message
git commit -m "add pride to students"

# 5. Push to GitHub
git push origin students/your-name

# 6. Open a Pull Request on GitHub to merge into main
```

This is the exact same flow used in professional software teams every day.

### Tools Used for Git

| Tool | What It's For |
|------|--------------|
| **Git** | The underlying version control system (command line) |
| **GitHub** | The online service where repositories are hosted and PRs are reviewed |
| **GitHub Desktop** | A visual GUI for Git — no command line needed for basic operations |
| **VS Code** | Code editor with built-in Git integration |

---

## Day 1 Key Takeaways

- Jamf is the leading Apple device management platform — Apple-first, customer-focused, problem-oriented
- **Zero Touch Deployment** removes the need for IT to physically touch devices during setup
- The four IT personas have very different pain points — good solutions are built for specific people, not for everyone in general
- Git is the industry standard for tracking code changes — branch, commit, PR, merge is the universal workflow
- roadmap.sh is an excellent resource for structured self-learning

---
---

# DAY 2 — Technical Foundations: Claude Code, VMs, APIs & Webhooks

---

## Block 1 — Claude Code Setup

### What Is Claude Code?

Claude Code is an AI coding assistant that lives in your terminal. Unlike ChatGPT in a browser, Claude Code:
- **Reads your actual files** — it sees your real codebase, not just what you paste in
- **Writes and edits code** directly in your project
- **Runs commands** in the terminal
- **Manages Git** — stages, commits, and checks status
- **Remembers project context** via CLAUDE.md

It's not just a chatbot. It's an agent — it can *do* things, not just *tell* you things.

### Installation & Setup

**Requirements:** Node.js 18 or higher (we use Node.js 20)

```bash
# Check if Node.js is installed
node --version
# Expected: v20.x.x

# Install Node.js via Homebrew (if needed)
brew install node@20

# Reload shell after install
source ~/.zshrc

# Install Claude Code
curl -fsSL https://claude.ai/install.sh | bash

# Reload shell again
source ~/.zshrc

# Verify Claude Code installed
claude --version

# Test with a simple question
claude "What is 2 + 2?"
```

### Setting Your API Key

Claude Code requires an API key to authenticate. Each student gets their own key:

```bash
# Set the API key for this Terminal session
export ANTHROPIC_API_KEY=sk-ant-api03-YOUR_ASSIGNED_KEY_HERE

# Verify it was set
echo $ANTHROPIC_API_KEY
```

> **Important:** This `export` command only lasts for the current Terminal session. If you close Terminal or open a new tab, you need to run it again. To make it permanent, add it to your `~/.zshrc` file.

### Initialising Claude Code in Your Project

```bash
# Navigate to the project
cd ~/learning-jamf-student

# Initialise — Claude reads the project and creates CLAUDE.md
claude /init
```

`/init` makes Claude Code scan your repository and create a `CLAUDE.md` file with project context. Every future session starts by reading that file — so Claude always knows what your project is and how it works.

### Useful Claude Code Commands

| Command | What It Does |
|---------|-------------|
| `claude` | Start Claude Code in the current directory |
| `claude /init` | Initialise project — creates CLAUDE.md |
| `claude /compact` | Compress the conversation to save context space |
| `/compound` | Distill the session into COMPOUND.md (Day 3 exercise) |
| `Shift+Tab` | Cycle between Normal / Plan / Auto-accept modes |
| `Ctrl+C` | Stop Claude immediately if it's going the wrong direction |

---

## Block 2 — Virtual Machines (VMs)

### What Is a Virtual Machine?

A Virtual Machine (VM) is a computer running inside another computer. It's a software simulation of a full Mac — it has its own operating system, its own apps, its own files, and it behaves exactly like a real machine.

The best analogy is a snow globe: *it's a little world inside your world. You can shake it, reset it, or throw it away without affecting the room you're sitting in.*

### Why VMs Matter in IT

| Use Case | Why It Matters |
|----------|---------------|
| **Test Jamf configurations** | Apply policies to a VM without risking real devices |
| **Enrol test machines** | Enrol a VM into Jamf Pro and practice MDM commands |
| **Try new macOS versions** | Run macOS 26 in a VM while staying on macOS 15 on your real machine |
| **Restore from snapshots** | If something breaks, revert to a clean state instantly |
| **Training environments** | Disposable machines for workshop exercises |

### Tools Used

| Tool | What It Is |
|------|-----------|
| **VMware Fusion** | Full-featured VM software — more options, ~500 MB |
| **Virtual Buddy** | Lighter VM software — simpler interface, ~50 MB |
| **Tart** | Command-line VM tool for Apple Silicon Macs |
| **macOS IPSW** | The macOS installer image used to create the VM |

### Creating a VM — Step by Step

1. Copy the macOS IPSW file from the USB stick to your Desktop
2. Open VMware Fusion or Virtual Buddy
3. Create New VM → Install from IPSW → Select your IPSW file
4. Set resources:
   - **CPU:** 4 cores
   - **RAM:** 8 GB
   - **Disk:** 50 GB
5. Wait 15–20 minutes for macOS to install
6. **Take a Snapshot** — name it `"Clean install"` — this is your restore point

### Snapshots

A snapshot is a saved state of the VM at a specific moment. If you break something, you can restore to the snapshot and start fresh — like an undo button for an entire computer.

**Best practice:** Always take a snapshot before making changes to a VM, especially before enrolling it in Jamf Pro.

### Tart (Command Line VMs)

For more advanced work, Tart lets you manage VMs from the terminal:

```bash
tart clone <image>   # Copy a VM image
tart run <name>      # Start a VM
tart stop <name>     # Shut down a VM
tart ip <name>       # Get the VM's IP address
```

### Packer

Packer is a tool that builds VM images from a written template. You write a recipe once, and Packer creates the exact same VM image every time — like a cookie cutter where every cookie comes out identical. Used by IT teams to build standardised "golden images."

---

## Block 3 — API Bootcamp

### The Core Concept: What Is an API?

**API = Application Programming Interface.** It's a way for one piece of software to talk to another.

**The restaurant analogy:**
> You (the client) sit at the table. You tell the waiter (the API) what you want. The waiter goes to the kitchen (the server) and delivers your order. The kitchen prepares it and sends it back. You never enter the kitchen — you just know how to talk to the waiter.

You don't need to know how Jamf's database works internally. You just need to know the API — what requests it accepts and what data it returns.

### REST API — The Four Actions

| Method | What It Does | Real Example |
|--------|-------------|-------------|
| **GET** | Read / retrieve data | "Show me all computers in Jamf Pro" |
| **POST** | Create something new | "Create a new user account" |
| **PUT** | Update existing data | "Change the Extension Attribute on this computer" |
| **DELETE** | Remove something | "Delete this device record" |

### JSON — The Data Format

Most modern APIs return data in JSON (JavaScript Object Notation). It's structured, human-readable, and easy for code to parse.

```json
{
  "id": "abc-123",
  "name": "Pride's MacBook",
  "model": "MacBook Pro",
  "osVersion": "15.0",
  "serialNumber": "C02XYZ123"
}
```

Each item has a **key** (like `"name"`) and a **value** (like `"Pride's MacBook"`).

### XML — The Older Format

The Jamf Classic API uses XML instead of JSON. It's an older format that wraps data in tags:

```xml
<computer>
  <extension_attributes>
    <extension_attribute>
      <id>1</id>
      <value>Pride</value>
    </extension_attribute>
  </extension_attributes>
</computer>
```

Both JSON and XML are just ways to structure data — different formats, same idea.

### Bearer Tokens — Authentication

Before making any API call, you need to prove you're allowed to. You authenticate once and get back a **Bearer Token** — a temporary code that proves your identity.

*Like a wristband at an event: you show your ID at the door (authenticate), get the wristband (token), and flash it everywhere else without showing your ID again.*

The token expires after a while. When you're done, you should invalidate it — this is a security best practice.

### The Full API Exercise — Step by Step

**Step 1: Authenticate and save your token**
```bash
TOKEN=$(curl -s -u "jamfpro_api:eap.zog.neek26" \
  -H "Content-Type: application/json" \
  -X POST \
  "https://projsadp.jamfcloud.com/api/v1/auth/token" \
  | jq -r '.token')

# Verify it saved
echo $TOKEN
```

**Step 2: List all computers (GET)**
```bash
curl -s \
  -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/computers-inventory" \
  | jq .
```
This returns a JSON list of every computer in Jamf Pro. Find your device and copy its ID.

**Step 3: Get a single device by ID (GET)**
```bash
curl -s \
  -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/computers-inventory/YOUR_DEVICE_ID" \
  | jq .
```

**Step 4: Update an Extension Attribute (PUT — Classic API, uses XML)**
```bash
curl -X PUT \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/xml" \
  "https://projsadp.jamfcloud.com/JSSResource/computers/id/YOUR_DEVICE_ID" \
  -d '<computer>
  <extension_attributes>
    <extension_attribute>
      <id>1</id>
      <value>YourName</value>
    </extension_attribute>
  </extension_attributes>
</computer>'
```

After running this:
1. Go to `https://projsadp.jamfcloud.com`
2. Computers → Find your device → General tab
3. Look in Extension Attributes — you should see **Workshop Status: YourName**

This was the moment where everything clicked — you could *see* something you added appear on the live Jamf Pro dashboard in real time.

**Step 5: Invalidate your token (security best practice)**
```bash
curl -X POST \
  -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/auth/invalidate-token"
```

**Security pattern: Authenticate → Work → Invalidate** (like Login → Work → Logout)

Why it matters: tokens stay active for a while after you get them. If someone finds your token in terminal history, they could use it. Always invalidate when finished — especially in production.

### Swagger UI

Jamf Pro has built-in interactive API documentation at `https://projsadp.jamfcloud.com/api/doc`

It shows:
- Every available API endpoint, organised by category
- What parameters each endpoint accepts
- What responses look like
- **"Try it out" buttons** — test API calls directly in the browser without writing any code

We used Swagger UI instead of Postman for the API exercises. It's built right into Jamf Pro and requires no extra setup.

### Extension Attributes

An Extension Attribute (EA) is a custom data field you add to computers in Jamf Pro. They extend the default information Jamf collects to include anything your organisation needs to track — like "Department", "Workshop Status", "Asset Tag", "Office Location", etc.

---

## Block 4 — Webhooks

### Push vs Pull

| Concept | What It Means | Real-World Analogy |
|---------|--------------|-------------------|
| **Polling (Pull)** | You keep asking "is there anything new?" on a schedule | Checking your phone for messages every 5 minutes |
| **Pushing (Webhooks)** | The system notifies you the moment something happens | Your phone buzzes when a message arrives |

Polling wastes resources — you're making requests constantly even when nothing has changed. Webhooks are efficient — the server only sends data when there's actually something to send.

### What Is a Webhook?

A webhook is a URL that receives data when an event happens in another system. You give Jamf Pro a URL, and it automatically sends a JSON payload to that URL whenever a specified event occurs — like a device enrolling, a policy running, or a Smart Group changing.

*Like a doorbell: you don't check the door every five minutes — the doorbell rings when someone arrives.*

### Smart Groups

A Smart Group in Jamf Pro is a dynamic group that updates automatically based on rules you define. When a device meets the criteria (like having a specific Extension Attribute value), it joins the group. When it no longer meets the criteria, it leaves.

In the workshop exercise:
- We set the Extension Attribute to our name in Block 3
- This caused our computer to **automatically join the "Workshop Participants" Smart Group**
- The Smart Group membership change **triggered the webhook**
- A JSON payload appeared on **webhook.site** in real time for the whole class to see

### The Webhook Event Chain

```
You update Extension Attribute via API
          ↓
Computer joins "Workshop Participants" Smart Group
          ↓
Jamf Pro detects the Smart Group membership change
          ↓
Webhook fires → sends JSON payload to webhook.site URL
          ↓
The whole class sees it appear on the projector in real time
```

This is **event-driven integration** — systems talking to each other automatically, without a human polling or checking.

### Testing Webhooks

```bash
# Test your webhook.site URL manually
curl -X POST https://webhook.site/YOUR_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from Pride!"}'
```

### webhook.site

A free tool at [webhook.site](https://webhook.site) that gives you a temporary URL and shows every HTTP request that hits it in real time. Used to inspect what payload Jamf Pro sends when an event fires.

---

## Day 2 Key Takeaways

- **APIs are just messengers** — you don't need to understand internal systems, just how to place an order
- **Bearer tokens are temporary passwords** — always authenticate → work → invalidate
- **VMs are disposable, real machines aren't** — test everything dangerous in a VM first
- **Webhooks are doorbells** — event-driven is more efficient than constant polling
- The step-by-step approach made everything manageable. APIs seemed intimidating at first but became genuinely fun once you could see data appearing in the live Jamf Pro dashboard
- **Security pattern to always follow:** Invalidate API tokens when you're done

---
---

# DAY 3 — AI-Native Development

---

## The Big Idea

Before AI coding tools, planning was *easy* and writing code was *hard*. Now, execution is trivial — AI can generate working code in seconds. That means the hard part has shifted.

**Before:** Planning was easy, coding was hard.
**Now:** Planning is hard, execution is trivial.

The question isn't "can I build this?" anymore. The question is "do I know exactly what I want to build and why?" The quality of what you get out of AI is determined entirely by the quality of what you put in. Context is everything.

---

## What You Built on Day 3

A **personal review page** — a single-page HTML site that:
- Reviews everything from Days 1 and 2 (personas, APIs, webhooks, VMs, git, Jamf)
- Includes at least one interactive element (quiz, flashcards, expandable notes)
- Has a section for Day 3 process notes
- Reflects you personally — not a generic template

You built it **twice** — once as a one-shot (no planning), once using the full Compound Engineering Loop — so you could compare the results directly.

---

## The Compound Engineering Loop

The loop is a deliberate process for building with AI. It has four phases:

```
    ┌─────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
    │  Plan   │ ──→ │   Work   │ ──→ │  Review  │ ──→ │ Compound │
    └─────────┘     └──────────┘     └──────────┘     └──────────┘
         ↑                                                   │
         └───────────────────────────────────────────────────┘
                    (session context feeds the next cycle)
```

### Phase 1: Plan

Before writing a single line of code, you and Claude work together to design the solution.

A good plan covers four things:

| Quality | What It Means | Key Question |
|---------|--------------|--------------|
| **What are we working with?** | Claude knows the project, not just the task | "Look at my project and tell me what you see" |
| **What are we trying to build?** | The goal is specific enough to act on | "Before you start, propose a plan" |
| **What questions came up?** | Claude surfaced unknowns, you answered them | "What questions do you have before we start?" |
| **What judgment calls need me?** | Decisions only a human can make have been made | "What could go wrong with this approach?" |

All four covered → move to Work. Something missing → keep planning.

**80% planning, 20% building.** If you're spending most of your time watching Claude write code, you skipped the important part.

### Phase 2: Work

Claude builds. You guide, steer, and correct direction.

- Stay within the plan
- If Claude drifts, redirect: "Let's come back to the plan"
- If something feels wrong, stop — don't let it keep going

### Phase 3: Review

**You are the primary reviewer. Claude helps find what you missed.**

| Step | What You Do | Key Question |
|------|------------|--------------|
| **1. Evaluate yourself first** | Open the output. Use it. Click buttons. Read content. | "Does this match what I had in my head when I planned it?" |
| **2. Compare to the plan** | Check what's there against what you specified | "What's missing? What's different from what I intended?" |
| **3. Ask Claude for gaps** | Have Claude compare output to plan | "Based on our plan, what did we miss?" |

You can also ask Claude to focus on specific concerns (accessibility, mobile layout, content accuracy) — but always start with your own evaluation. Your judgment comes first.

### Phase 4: Compound

At the end of every session, type `/compound`. This distills the full session into a `COMPOUND.md` file.

This isn't a diary entry or a list of bullet points. It's a **project briefing** — a complete record of:
- What you built and its current state
- Planning decisions and *why* you made them
- Approaches you considered but rejected — and why
- What the review found — gaps between plan and output
- Where you left off — what's working, what needs improvement

Two files work together:

| File | Purpose |
|------|---------|
| **CLAUDE.md** | Project setup, structure, current state. Claude reads this first every session. Keep it lean. |
| **COMPOUND.md** | Rich session history — decisions, tradeoffs, dead ends, review findings, reasoning. |

The next time you start Claude Code, it reads CLAUDE.md (which references COMPOUND.md) and inherits all your accumulated context instead of starting from zero. Context accumulates instead of resetting.

Think of a pilot's logbook: after every flight, a pilot doesn't just write "good flight." They record the route, the weather decisions, the turbulence encountered, what they'd do differently. The next pilot who flies that route starts with all of that context.

---

## One-Shot vs Planned Build

### Round 1: One-Shot

**How it works:** Give Claude one prompt with no planning. Get output fast.

**The problem:** Without context about what you actually want, Claude makes assumptions. The result might be technically functional but probably doesn't match your mental model — wrong sections, generic content, style you didn't want, features you didn't ask for or are missing ones you needed.

*Like texting a friend "get me a birthday present for mom" with no other info. They'll get something — but probably not what you had in mind.*

### Round 2: Planned Build

**How it works:** Spend time upfront. Work with Claude to design the solution before any code is written. Answer its questions. Make decisions about design, content, and structure. Then build.

**The result:** Output that matches what you actually intended, because you told Claude exactly what you wanted — not just what you said in one sentence.

The comparison between these two outputs is the most direct demonstration of why planning matters.

---

## The 7 Transferable Principles

These apply to **any AI tool** — Claude Code, GitHub Copilot, Cursor, or whatever exists in five years. Tools change. These principles don't.

---

### Principle 1 — Context Is Everything

**The quality of your output is determined by the quality of your context.**

AI agents only know what you tell them. They don't have:
- Your mental model of the project
- The history of why things are built a certain way
- The constraints you're working within
- What "done" looks like to you

Your job is to share that context. The more relevant context you provide, the better the output.

**In practice:**
- Point Claude at relevant files before asking it to build
- Explain the *why* behind requirements, not just the *what*
- Share constraints upfront (performance needs, existing patterns, etc.)

---

### Principle 2 — Planning > Building

**80% planning, 20% building.**

If you're spending most of your time watching Claude write code, you skipped the important part. The plan IS the work. Execution is confirmation.

A good plan:
- Identifies what needs to change and why
- Surfaces edge cases and risks before they become problems
- Creates shared understanding between you and Claude

**In practice:**
- Ask Claude to explain its approach before it starts coding
- Poke holes in the plan: "What could go wrong?"
- Iterate on the plan until you're confident

---

### Principle 3 — Share Your Mental Model

**Claude doesn't have it automatically.**

You've been thinking about this problem. You know the codebase. You have opinions about how things should work. Claude starts from zero every time.

The fastest way to get good output is to transfer your mental model to Claude.

**In practice:**
- "Here's how I'm thinking about this..."
- "The pattern we use in this project is..."
- "The most important thing is..."

---

### Principle 4 — Recognize When to Quit

**Sunk cost is a trap.**

Sometimes the best move is to start over. Recognising "this isn't working" and restarting with better context is faster than pushing through a bad path.

Warning signs:
- Solution is getting more complicated, not clearer
- Claude keeps changing approaches: "Actually, let's try..."
- You can't explain what's happening
- Something feels off, even if you can't articulate it

**In practice:**
- Give yourself permission to stop
- "Let's start over. Here's what I've learned..."
- Starting fresh isn't failure — it's the skill

---

### Principle 5 — It's a Conversation, Not a Command

**This is collaboration, not delegation.**

You're not typing commands into a machine. You're having a conversation with a capable partner who doesn't have your context.

The best results come from back-and-forth:
- You share context → Claude explores
- Claude proposes → you refine
- You ask questions → Claude explains
- Together you build understanding

**In practice:**
- Ask Claude questions: "What do you see?" "What could go wrong?"
- Let Claude ask YOU questions
- Treat it like pairing with a smart colleague who just joined the project

---

### Principle 6 — Review Against Your Plan

**Your eyes and judgment are the primary review tool.**

Open the output. Use it. Click the buttons. Read the content. The real question isn't "is this good?" — it's "does this match what I intended when I planned it?"

After you've evaluated it yourself, ask Claude to help find gaps against the plan.

**In practice:**
- Open the output and use it like a real user would
- Compare what's there to what you specified in the plan
- "Based on our plan, what did we miss? What's not working as intended?"
- You evaluate first. Claude helps find what you missed.

---

### Principle 7 — Compound Your Sessions

**Distill the full session. Make the next one start smarter.**

Every session with an AI agent is rich with context — planning decisions, implementation tradeoffs, dead ends, review findings, approaches rejected and why. When the session closes, all of that disappears.

The compound step distills that entire session into a persistent reference. Not a diary or a bullet list — a complete briefing. The reasoning matters as much as the outcomes: *why* you chose this approach, *what* you weighed, *where* you left off.

**In practice:**
- At the end of a session: type `/compound`
- Distill into COMPOUND.md (rich history) and keep CLAUDE.md lean (project setup)
- Capture the *reasoning* behind decisions: "We chose X because Y, and rejected Z because..."

---

### The Meta-Principle

> **AI agents are powerful collaborators who lack your context. Your job is to bridge that gap — through thoughtful planning, clear communication, expert review, and the discipline to distill every session so the next one inherits everything you figured out.**

The tools will keep getting better. The underlying dynamic won't change.

---

## Prompts That Work Well

| When You Want To... | Try Saying... |
|---------------------|---------------|
| Build shared understanding | "Look at my project and tell me what you see" |
| Explore the problem | "Walk me through how this works" |
| Surface risks early | "What could go wrong with this approach?" |
| Get Claude's questions | "What questions do you have before we start?" |
| Check understanding | "Explain back to me what we're trying to do" |
| Validate the plan | "Are there edge cases we're missing?" |
| Find gaps after review | "Based on our plan, what did we miss? What's not working as intended?" |
| Start fresh | "Let's start over. Here's what I've learned..." |
| Compound the session | Type `/compound` — the command handles the rest |

## Warning Signs — When to Quit and Restart

| Signal | What It Looks Like |
|--------|-------------------|
| **Overcomplicated** | Solution keeps growing — more files, more steps, harder to follow |
| **Context filling up** | Long conversation, Claude repeats itself or forgets earlier details |
| **Approach keeps changing** | "Actually, let's try..." "On second thought..." — no confident direction |
| **You're confused** | You can't explain what Claude is doing or why |
| **Gut says "off"** | Something feels wrong even if you can't articulate it |

**Remember:** Starting fresh with better context is faster than pushing through a bad path.

---

## Day 3 Key Takeaways

- The shift from "coding is hard" to "planning is hard" is the fundamental change AI brings to development
- One-shot builds produce generic output. Planned builds produce what you actually wanted.
- The Compound Engineering Loop isn't just for AI — it's a general framework for deliberate, iterative work
- CLAUDE.md + COMPOUND.md together create accumulated intelligence across sessions
- Knowing when to stop and restart is a skill, not a failure

---
---

# Complete Glossary — All 3 Days

---

**Agent**
A helper that doesn't just talk — it can actually do things for you, like read your files, write code, and run commands. *Like a really smart assistant who can type on your keyboard, not just give you advice.*

**API (Application Programming Interface)**
A way for software to talk to other software. You send a request and get data back. *A restaurant: you tell the waiter what you want, the waiter tells the kitchen, the kitchen sends back your food.*

**Bearer Token**
A code that proves you've already logged in. You get it once, then use it for all your requests. *A wristband at an event — show ID at the door, get wristband, flash it everywhere else.*

**Branch**
A separate, isolated copy of code you can work on without affecting the main version. *Your own workspace that doesn't disturb anyone else's work.*

**Commit**
A saved snapshot in Git — like a checkpoint with a message explaining what changed.

**Compound (Compounding)**
Distilling everything from a session — decisions, tradeoffs, dead ends, discoveries — into a reference that future sessions build on. *Like a pilot's logbook — the next pilot who flies that route starts with all previous context instead of figuring it out from scratch.*

**COMPOUND.md**
A file that accumulates rich session history — decisions, tradeoffs, dead ends, review findings, reasoning. Written by the `/compound` command at the end of each session.

**CLAUDE.md**
A file Claude Code reads at the start of every session to understand your project. Keep it lean — project setup and current state only.

**Context**
Everything the agent knows about what you're trying to do. The more you tell it, the better it understands. *If you ask a stranger to grab your jacket from your house, they need to know where you live, what it looks like, and where you left it. That's context.*

**Context Window**
How much the agent can remember in one conversation. When it fills up, it starts forgetting earlier content. *A whiteboard — eventually you run out of space and have to erase something.*

**Extension Attribute (EA)**
A custom data field added to computers in Jamf Pro. Used to track organisation-specific information beyond what Jamf collects by default.

**Git**
Version control system — tracks every change made to files over time. Every save is recorded, who made it, when, and why.

**GitHub**
The online service where Git repositories are hosted, shared, and reviewed. Where Pull Requests live.

**Hallucination**
When an AI says something that sounds right but isn't. It's not trying to trick you — it's filling in a gap confidently without knowing it's wrong. *Like someone giving directions confidently pointing to a tree that doesn't exist.*

**Integration**
Code that makes two software systems talk to each other automatically. *Like online shopping — the cart talks to payment, payment talks to shipping, automatically.*

**Iteration**
Going back and forth with the agent — refining, adjusting, improving together. *Like a real group project where you actually talk to each other.*

**Jamf Pro**
Jamf's enterprise Apple device management platform. Used to manage, secure, and configure Apple devices at scale via MDM.

**JSON (JavaScript Object Notation)**
A structured way to format data so both humans and computers can read it. Uses `{"key": "value"}` pairs. *Like filling out a form — each field has a label and a value.*

**Journey Map**
A step-by-step visual of a user's workflow — showing tools, steps, pain points, and improvement opportunities. *Like drawing a map of someone's daily commute and marking every traffic jam.*

**MDM (Mobile Device Management)**
A system for managing many devices from one place — pushing settings, installing apps, enforcing security rules. *Like a school principal who can set rules for every classroom at once.*

**Mental Model**
The picture in your head of what you're trying to build — how it should look, how it should work, what "done" means to you. *The blueprint before building the house.*

**Merge**
Combining changes from one branch into another in Git. Typically done after a Pull Request is approved.

**One-Shot Prompting**
Telling the agent what you want in one message and expecting a finished result. No planning, no back-and-forth. Usually doesn't produce what you actually wanted.

**Packer**
A tool that builds VM images from a written template. Same recipe = same image every time. *Like a cookie cutter.*

**Persona**
A fictional character representing a real type of user. Used to understand different people's needs and pain points.

**Plan Mode**
When Claude stops to show you what it's going to do *before* it does it. You can say yes, no, or change this part. *Looking at the blueprint before building the house.*

**Polling (Pull)**
Repeatedly asking a system "is there anything new?" on a schedule. Less efficient than push/webhooks.

**Postman**
A tool for testing APIs — like a web browser but for API requests instead of web pages.

**Prompt**
What you say to the agent to tell it what you want. *Like placing an order — "make me food" gets something random; "grilled cheese on sourdough" gets exactly what you want.*

**Pull Request (PR)**
A proposal in Git to merge your branch changes into the main branch. Triggers review before merging.

**Repository (Repo)**
A folder tracked by Git — contains all your files and their full change history.

**REST**
A style of API that uses simple actions over HTTP. GET = read. POST = create. PUT = update. DELETE = remove.

**Review**
Evaluating output yourself first — open it, use it, compare to your plan — then asking Claude to help find gaps you missed. Your judgment comes first.

**Smart Group**
A dynamic group in Jamf Pro that updates automatically when devices meet or leave a defined set of criteria.

**Snapshot**
A saved state of a VM at a specific moment. If something breaks, restore to the snapshot. *An undo button for an entire computer.*

**Swagger UI**
An interactive API documentation interface built into Jamf Pro. Browse all endpoints and test them directly in the browser.

**Tart**
A command-line tool for running macOS VMs on Apple Silicon Macs.

**Token (API)**
A small temporary password that proves you've authenticated. Get it once, use it for API calls, invalidate when done.

**Token (AI)**
A small chunk of text the AI reads and writes in. Roughly one token ≈ one word. *Like puzzle pieces the agent builds sentences from.*

**Virtual Machine (VM)**
A computer running inside another computer — its own OS, its own apps, fully isolated. *A snow globe — a little world inside your world.*

**Webhook**
A URL that receives data when an event happens in another system. Push notification for systems. *A doorbell — you don't check the door every five minutes.*

**XML (Extensible Markup Language)**
An older format for structuring data using tags. Used by the Jamf Classic API. `<key>value</key>`

**Zero Touch Deployment**
Devices configure themselves automatically when powered on and logged into. No IT intervention required.

---

# Tools Reference

| Tool | Day | What It Does |
|------|-----|-------------|
| **Homebrew** | Setup | Package manager for macOS — installs developer tools |
| **Git** | 1 | Version control — tracks file changes |
| **GitHub Desktop** | 1 | Visual GUI for Git |
| **VS Code** | 1+ | Code editor with built-in Git and terminal |
| **Apple Freeform** | 1 | Whiteboard app for persona mapping |
| **Node.js 20** | 2 | JavaScript runtime (required for Claude Code) |
| **Claude Code** | 2+ | AI coding assistant in the terminal |
| **VMware Fusion / Virtual Buddy** | 2 | Run macOS VMs on your Mac |
| **Tart** | 2 | Command-line macOS VM management |
| **Jamf Pro** | 2 | Apple MDM platform — `https://projsadp.jamfcloud.com` |
| **Swagger UI** | 2 | Interactive Jamf Pro API docs — `https://projsadp.jamfcloud.com/api/doc` |
| **curl** | 2 | Command-line tool for making HTTP requests |
| **jq** | 2 | Command-line tool for parsing and formatting JSON |
| **Postman** | 2 | GUI tool for testing APIs |
| **webhook.site** | 2 | Free tool for inspecting webhook payloads in real time |

---

# Workshop Environment

| Item | Value |
|------|-------|
| Jamf Pro instance | `https://projsadp.jamfcloud.com` |
| Swagger UI | `https://projsadp.jamfcloud.com/api/doc` |
| API username | `jamfpro_api` |
| API password | `eap.zog.neek26` |
| Node.js version | 20 |
| Lab machines | Apple Silicon Macs (M-series) |

---

*Pride's full course notes — Jamf Pro Workshop 2026*
*All 3 days: Day 1 (Foundations & Git) · Day 2 (APIs & VMs) · Day 3 (AI-Native Dev)*
