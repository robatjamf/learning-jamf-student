# Learning Jamf — Student Guide

This is a 3-day, hands-on training course where you'll learn to manage Apple devices at scale using Jamf Pro — from enrollment and configuration to packaging, imaging, and API-driven automation.

All lab machines are **Apple Silicon Macs (M-series)**.

## Required Software

Install these tools before Day 1. See [apps/](apps/) for detailed install instructions organized by day.

**Command Line Tools** — Developer utilities including Git and compilers
> Provided on USB stick

**Homebrew** — Package manager for macOS &#8594; [brew.sh](https://brew.sh/)
> `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

**Node.js 20** — JavaScript runtime for automation scripts
> `brew install node@20`

**Visual Studio Code** — Code editor &#8594; [Download](https://code.visualstudio.com/download)

**GitHub Desktop** — Git GUI for managing repos &#8594; [Download](https://desktop.github.com/download/)

**Postman** — API client for testing Jamf Pro APIs &#8594; [Download](https://www.postman.com/downloads/)

**Tart** — macOS VM tool for imaging workflows &#8594; [tart.run](https://tart.run/quick-start/)
> `brew install cirruslabs/cli/tart`

**Packer** — Automated image builder &#8594; [hashicorp.com](https://developer.hashicorp.com/packer/downloads)
> `brew tap hashicorp/tap && brew install hashicorp/tap/packer`

**Claude Code** — AI coding assistant &#8594; [Setup guide](https://code.claude.com/docs/en/setup)
> `curl -fsSL https://claude.ai/install.sh | bash`

## Repository Contents

| Folder | Description |
|--------|-------------|
| [apps/](apps/) | Detailed install guides organized by training day |
| [resources/](resources/) | Reference materials, cheat sheets, and useful links |
