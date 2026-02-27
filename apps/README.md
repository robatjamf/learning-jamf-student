# App Install Guide

Install software in the order listed below. Command line tools and Homebrew are required first since several tools depend on them.

## USB Stick

A USB stick will be provided on Day 1 with the following:

| File | Description |
|------|-------------|
| `Command_Line_Tools_for_Xcode_18.dmg` | Command line tools for macOS 26 — **Install this FIRST** |
| `Command_Line_Tools_for_Xcode_16.dmg` | Command line tools for macOS 15 — **Install this FIRST** |
| `homebrew.pkg` | Homebrew package manager installer — **Install this SECOND** |
| `VMware-Fusion-[version].dmg` | VMware Fusion installer (one VM tool option) |
| `VirtualBuddy-[version].dmg` | Virtual Buddy installer (one VM tool option) |
| `macOS-15-[version].ipsw` | macOS 15 restore image for VM exercises |
| `macOS-26-[version].ipsw` | macOS 26 restore image for VM exercises |

> **Note:** Both VMware Fusion and Virtual Buddy will be on the USB stick, but you only need to install ONE. See the Day 2 section below for selection guidance.

## Install Order

### 1. Command Line Tools (from USB)

Provides Git, compilers, and other developer utilities required by Homebrew and the course.

**Install the `.dmg` for your macOS version from the USB stick:**
- macOS 26: `Command_Line_Tools_for_Xcode_18.dmg`
- macOS 15: `Command_Line_Tools_for_Xcode_16.dmg`

### 2. Homebrew (from USB)

Package manager for macOS — used to install Node.js and other tools.

**Install `homebrew.pkg` from the USB stick** (double-click to install).

After install, follow the on-screen instructions to add Homebrew to your PATH.

---

## Day 1 — Setup and Foundations

### Visual Studio Code

Code editor used for editing scripts, configuration profiles, and API payloads.

Download: [code.visualstudio.com/download](https://code.visualstudio.com/download)
- Select **Apple Silicon** (.zip)

### GitHub Desktop

GUI for Git — used to clone course repos and push changes without the command line.

Download: [desktop.github.com/download](https://desktop.github.com/download/)
- Select **Apple Silicon** (.zip)

### Node.js 20

JavaScript runtime — required for running automation scripts and local tooling.

```bash
brew install node@20
```

---

## Day 2 — API and Automation

### VMware Fusion OR Virtual Buddy (Choose ONE)

Virtual machine software — used to create and run macOS VMs for testing. Both tools will be on the USB stick, but you only need to install ONE.

**Install from USB stick:**
- **Virtual Buddy** (recommended for most users) — Lightweight (~50 MB), simple interface, fast setup
- **VMware Fusion** (advanced users) — More features (~500 MB), familiar to experienced VM users

**Selection guidance:**
1. **Disk space** — Virtual Buddy requires ~50 MB, VMware Fusion requires ~500 MB
2. **Familiarity** — If you've used either tool before, choose the one you know
3. **Default recommendation** — Virtual Buddy (simpler, lighter, sufficient for workshop needs)

> **Important:** Install your chosen VM tool AND copy both IPSW files from the USB stick before Day 2 Block 2 starts. Facilitators will confirm your setup at the beginning of the VM exercises.

### Postman

API client — used to explore and test the Jamf Pro API during hands-on exercises.

Download: [postman.com/downloads](https://www.postman.com/downloads/)
- Select **Mac Apple Chip**

### Claude Code

AI coding assistant — used for building and debugging scripts during labs.

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Setup guide: [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)

---

## Day 3 — AI-Native Development

Day 3 uses tools already installed on Days 1-2 (VMware Fusion or Virtual Buddy, Claude Code). No new installations required.

### Focus: Compound Engineering Loop

You'll use **Claude Code** (installed on Day 2) as the primary tool for Day 3. The day focuses on AI-native development practices:
- Planning with context
- Working with AI assistance
- Reviewing outputs critically
- Compounding learnings into persistent reference

> **Note:** Your chosen VM tool (VMware Fusion or Virtual Buddy) and Claude Code are already set up. Day 3 is about applying these tools using the Compound Engineering framework.
