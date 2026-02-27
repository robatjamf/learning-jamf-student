# Learning Jamf — Student Guide

This is a 3-day, hands-on training course where you'll learn to manage Apple devices at scale using Jamf Pro — from enrollment and configuration to API-driven automation and AI-native development.

All lab machines are **Apple Silicon Macs (M-series)**.

## Required Software

Install these tools before Day 1. See [apps/](apps/) for detailed install instructions organized by day.

> **⚠️ IMPORTANT:** Install Command Line Tools **FIRST** (from USB stick) before installing Homebrew. This avoids a 500+ MB download during Homebrew installation.

**Command Line Tools** — Developer utilities including Git and compilers
> Provided on USB stick — **Install this FIRST before Homebrew**

**Homebrew** — Package manager for macOS &#8594; [brew.sh](https://brew.sh/)
> `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

**Node.js 20** — JavaScript runtime for automation scripts
> `brew install node@20`

**Visual Studio Code** — Code editor &#8594; [Download](https://code.visualstudio.com/download)

**GitHub Desktop** — Git GUI for managing repos &#8594; [Download](https://desktop.github.com/download/)

**Postman** — API client for testing Jamf Pro APIs &#8594; [Download](https://www.postman.com/downloads/)

**VMware Fusion OR Virtual Buddy** — macOS VM tool (choose ONE) &#8594; Provided on USB sticks
> Students choose one tool based on disk space and familiarity. See [apps/README.md](apps/README.md) for selection guidance.

**macOS IPSW files** — VM source images (macOS 15 and 26) &#8594; Provided on USB sticks
> Too large for GitHub, distributed via USB during workshop

**Claude Code** — AI coding assistant &#8594; [Setup guide](https://code.claude.com/docs/en/setup)
> `curl -fsSL https://claude.ai/install.sh | bash`

## Repository Contents

| Folder | Description |
|--------|-------------|
| [apps/](apps/) | Detailed install guides organized by training day |
| [day-1/](day-1/) | Day 1 learning log — connections and context |
| [day-2/](day-2/) | Day 2 learning log — technical foundations |
| [day-3/](day-3/) | Day 3 exercise directory — AI-native development with Claude Code |
| [resources/](resources/) | Reference materials, cheat sheets, and useful links |
