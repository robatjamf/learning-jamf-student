# App Install Guide

Install software in the order listed below. Command line tools and Homebrew are required first since several tools depend on them.

A **USB stick** will be provided with the macOS command line tools installers (macOS 26 and macOS 15). No large downloads needed.

## Install Order

### 1. Command Line Tools (from USB)

Provides Git, compilers, and other developer utilities required by Homebrew and the course.

Install the `.dmg` for your macOS version from the USB stick:

- **macOS 26** — `Command_Line_Tools_for_Xcode_18.dmg`
- **macOS 15** — `Command_Line_Tools_for_Xcode_16.dmg`

### 2. Homebrew

Package manager for macOS — used to install Node.js, Tart, and Packer.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

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

## Day 3 — Imaging and Packaging

### Tart

Lightweight macOS VM tool — used to create and manage virtual machines for imaging workflows.

```bash
brew install cirruslabs/cli/tart
```

Quick start: [tart.run/quick-start](https://tart.run/quick-start/)

### Packer

Automated image builder — used to build reproducible macOS images from code.

```bash
brew tap hashicorp/tap && brew install hashicorp/tap/packer
```

Downloads: [developer.hashicorp.com/packer/downloads](https://developer.hashicorp.com/packer/downloads)
