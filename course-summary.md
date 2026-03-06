# Jamf Pro Workshop — Course Summary
### Pride's Notes | 3-Day Hands-On Training

---

## Day 1 — Foundations: Jamf, Personas & Git

### What Is Jamf?

Jamf enables IT teams to **manage, secure, and configure Apple devices** through the MDM (Mobile Device Management) protocol. It is Apple-focused and follows Apple's guidelines closely, which lets it deliver top-tier services.

Key things that stand out about Jamf:
- They design from the **customer's point of view**, not just around profit
- They prioritise **problem-solving** over revenue
- **Zero Touch Deployment** — devices configure themselves automatically when a user first logs in. No IT person needs to be in the room

Jamf's main products and integrations are tightly aligned with Apple's own ecosystem, giving it a competitive advantage over broader MDM platforms.

---

### Persona Mapping

We explored four different IT personas and mapped their workflows, pain points, and needs:

| Persona | Role |
|---------|------|
| Enterprise IT Admin | Manages large corporate fleets |
| K-12 IT Coordinator | Manages school devices for students and staff |
| Security Analyst | Monitors threats and enforces compliance |
| Help Desk Technician | First line of support for end users |

**My group mapped: Security Analyst**

**Biggest pain points in their workflow:**
- Manual processes — everything requires human action
- Too many emails and interruptions
- Time spent creating and generating reports
- Constant context switching between tasks

**If I could build one thing for this persona:**
> An email categorisation system that automatically sorts incoming tickets by priority — separating urgent security alerts from routine requests — so analysts can focus on what actually matters.

---

### Git Exercise — Day 1 Hands-On

Students practiced the core git workflow:

1. Create a branch: `git checkout -b students/your-name`
2. Add a file to the `Students/` folder with your name and favourite animal
3. Commit and push the branch
4. Open a Pull Request to `main`

This exercise teaches the real-world flow used in software teams: **branch → change → PR → merge**.

---

### Key Takeaways from Day 1

- Jamf is focused on **quality service delivery**, not just feature counts
- **Zero Touch Deployment** is a game-changer for large organisations — users get fully configured devices with no IT intervention
- Career paths into tech come from the smallest things — movies, friends, curiosity about how things work
- Tools for self-learning: **roadmap.sh**, Mimo (coding), YouTube tutorials

---

## Day 2 — Claude Code, VMs, APIs & Webhooks

### Block 1 — Claude Code Setup

Claude Code is an AI coding assistant that runs in the terminal. It can:
- Read your codebase and understand the project
- Write and edit code based on your instructions
- Run commands, create files, and manage git

**Setup steps:**
```bash
# Install Claude Code
curl -fsSL https://claude.ai/install.sh | bash

# Set your API key (required each Terminal session)
export ANTHROPIC_API_KEY=sk-ant-api03-YOUR_KEY_HERE

# Test it works
claude "What is 2 + 2?"

# Initialise it in your project (creates CLAUDE.md with project context)
claude /init
```

---

### Block 2 — Virtual Machines (VMs)

A VM is a **computer inside a computer** — a software simulation of a full Mac that runs inside your real Mac. It behaves exactly like a real machine, but it's isolated.

We used **Tart VM / VMware Fusion** to:
- Create a macOS virtual machine (macOS 15 or 26 from an IPSW file)
- Configure it (4 CPU cores, 8 GB RAM, 50 GB disk)
- Take a snapshot called "Clean install" — a save point you can restore if something breaks

**Why VMs matter for IT:**
- Test configurations without touching real devices
- Enrol test machines into Jamf Pro safely
- Practice MDM commands without risking production devices

---

### Block 3 — API Bootcamp

**The Restaurant Analogy:**
> The API is like a messenger. You tell it what you want, it delivers your request to the server, then brings the response back to you. You don't need to know how the kitchen works — just how to place your order.

**API Request Types:**
| Method | What it does |
|--------|-------------|
| GET | Read / retrieve data |
| POST | Create something new |
| PUT | Update existing data |
| DELETE | Remove data |

**What we did:**

1. **Authenticated** to Jamf Pro API and got a Bearer Token
2. **Listed all computers** in Jamf Pro (GET request)
3. **Found our device ID** from the response
4. **Updated an Extension Attribute** on our computer (PUT request using XML)
5. **Invalidated the token** when finished (security best practice)

```bash
# Step 1: Authenticate and save token
TOKEN=$(curl -s -u "jamfpro_api:eap.zog.neek26" \
  -H "Content-Type: application/json" \
  -X POST \
  "https://projsadp.jamfcloud.com/api/v1/auth/token" \
  | jq -r '.token')

# Step 2: List all computers
curl -s \
  -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/computers-inventory" | jq .

# Step 3: Update Extension Attribute (triggers Smart Group + webhook)
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

# Step 4: Invalidate token (always do this when finished)
curl -X POST \
  -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/auth/invalidate-token"
```

**We used Swagger UI** (`https://projsadp.jamfcloud.com/api/doc`) to explore the API interactively — it shows all available endpoints and lets you test them in the browser.

**Security pattern:** Authenticate → Work → Invalidate (like Login → Work → Logout)

---

### Block 4 — Webhooks

**Push vs Pull:**
- **Pull** = You ask the server for data (you initiate, e.g., "do I have new emails?")
- **Push** = The server sends you data when something happens (server initiates, e.g., "you have a new email!")

Webhooks are **push notifications for systems**. When an event happens in Jamf Pro, it automatically sends a JSON payload to a URL you specify.

**What happened in the exercise:**
1. We updated the Extension Attribute on our computer via API
2. This caused our computer to join the **"Workshop Participants" Smart Group**
3. The Smart Group membership change **triggered the webhook**
4. A JSON payload appeared on **webhook.site** in real time for the whole class to see

This is **event-driven integration** — systems talking to each other automatically, without a human polling or checking.

---

### Key Takeaways from Day 2

- The step-by-step walkthrough made everything click — APIs felt overwhelming at first but became fun once things started working
- Seeing your own data appear in Jamf Pro right after a POST request is one of those moments where it all becomes real
- **XML vs JSON:** The Jamf Classic API uses XML (older format); the newer Jamf Pro API uses JSON. Both are ways to structure data — just different formats
- Tokens expire — if you get authentication errors, re-authenticate

---

## Day 3 — AI-Native Development

### The Compound Engineering Loop

Day 3 is about building with AI using a deliberate process instead of just typing prompts and hoping.

**The 4-step loop:**

```
Plan → Work → Review → Compound
```

| Step | What you do |
|------|-------------|
| **Plan** | Work with Claude to design the solution before writing any code |
| **Work** | Claude builds; you guide and steer |
| **Review** | Open the output and use it. Compare it to your plan. Ask Claude to find gaps |
| **Compound** | Distill the full session into COMPOUND.md so the next session inherits everything |

---

### One-Shot vs Planned Build

**One-shot:** You give Claude a single prompt with no planning. You get output fast, but it may not match what you actually wanted.

**Planned build:** You spend time upfront — asking Claude to propose a plan, poking holes in it, making decisions about design and content — before a single line of code is written.

The comparison between these two outputs shows you the value of planning.

---

### The 7 Transferable Principles

These apply to **any AI tool** — Claude Code, GitHub Copilot, Cursor, or whatever comes next.

| # | Principle | What it means |
|---|-----------|---------------|
| 1 | **Context Is Everything** | AI only knows what you tell it. Share your mental model, constraints, and what "done" looks like |
| 2 | **Planning > Building** | 80% planning, 20% building. The plan IS the work |
| 3 | **Share Your Mental Model** | "Here's how I'm thinking about this…" is the fastest way to get good output |
| 4 | **Recognize When to Quit** | If the solution is getting more complicated, not clearer — start over with better context |
| 5 | **It's a Conversation, Not a Command** | Back-and-forth collaboration beats one-shot delegation |
| 6 | **Review Against Your Plan** | Open the output. Use it like a real user. Then ask: does this match what I planned? |
| 7 | **Compound Your Sessions** | Distill every session into COMPOUND.md so context accumulates instead of resetting |

**The Meta-Principle:**
> AI agents are powerful collaborators who lack your context. Your job is to bridge that gap — through thoughtful planning, clear communication, expert review, and the discipline to distill every session so the next one inherits everything you figured out.

---

### Useful Claude Code Commands

```bash
claude              # Start Claude Code in the current directory
claude /init        # Initialise project — creates CLAUDE.md
claude /compact     # Compress the conversation to save context
/compound           # Distill the session into COMPOUND.md
Shift+Tab           # Cycle between normal / plan / auto-accept modes
Ctrl+C              # Stop Claude immediately
```

---

## Key Concepts Glossary

| Term | Definition |
|------|-----------|
| **MDM** | Mobile Device Management — a protocol that lets IT remotely manage devices |
| **Zero Touch Deployment** | Devices configure themselves automatically on first login |
| **Jamf Pro** | Jamf's enterprise Apple device management platform |
| **API** | Application Programming Interface — a messenger between your app and a server |
| **REST API** | A standard type of API that uses HTTP methods (GET, POST, PUT, DELETE) |
| **Bearer Token** | A temporary password that proves you are authenticated to an API |
| **JSON** | JavaScript Object Notation — a format for structuring data (key-value pairs) |
| **XML** | Extensible Markup Language — an older format for structuring data (used in Jamf Classic API) |
| **Webhook** | A push notification between systems — server sends data to a URL when an event happens |
| **Smart Group** | A dynamic group in Jamf Pro that updates automatically based on rules |
| **Extension Attribute** | A custom data field you add to computers in Jamf Pro |
| **VM** | Virtual Machine — a software-simulated computer running inside a real computer |
| **Snapshot** | A saved state of a VM you can restore to if something goes wrong |
| **Git** | Version control system for tracking changes to files |
| **Branch** | A separate copy of code you can work on without affecting the main version |
| **Pull Request (PR)** | A proposal to merge your branch changes into the main branch |
| **Claude Code** | Anthropic's AI coding assistant that runs in the terminal |
| **CLAUDE.md** | A file Claude reads at the start of every session to understand your project |
| **COMPOUND.md** | A file that accumulates rich session history — decisions, tradeoffs, dead ends |
| **Compound Engineering Loop** | Plan → Work → Review → Compound — a deliberate AI development process |
| **Swagger UI** | An interactive API documentation interface built into Jamf Pro |

---

## Workshop Environment

| Item | Value |
|------|-------|
| Jamf Pro instance | `https://projsadp.jamfcloud.com` |
| Swagger UI | `https://projsadp.jamfcloud.com/api/doc` |
| API username | `jamfpro_api` |
| Node.js version | 20 (installed via Homebrew) |
| Machines | Apple Silicon Macs (M-series) |

---

*Generated from Pride's learning logs and course materials — Jamf Pro Workshop 2026*
