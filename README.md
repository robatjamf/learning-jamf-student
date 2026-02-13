# Class Resources

Setup guide for the SADP training in Zimbabwe. All machines are **Apple Silicon Macs (M-series)**.

> **Facilitators:** Work through this list before travel. Anything marked `[ ] TODO` still needs a decision or confirmation.

---

## Apps to Install

### Day 1 onwards

| App | What it's for | Install method | Link |
|-----|--------------|----------------|------|
| **GitHub Desktop** | Visual Git client — students clone and sync the training repo on Day 1 | Download (Apple Silicon .zip) | [desktop.github.com/download](https://desktop.github.com/download/) |
| **Visual Studio Code** | Code editor used across all 3 days | Download (Apple Silicon .zip) | [code.visualstudio.com/download](https://code.visualstudio.com/download) |
| **Git** (CLI) | Underlying version control — GitHub Desktop installs this, but also available via Xcode CLI tools or Homebrew | `xcode-select --install` or `brew install git` | — |
| **Homebrew** | Package manager — used to install other tools | Terminal: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` | [brew.sh](https://brew.sh/) |

### Day 2 (technical hands-on)

| App | What it's for | Install method | Link |
|-----|--------------|----------------|------|
| **Postman** | API testing — used in the Jamf Pro API bootcamp | Download (Mac Apple Chip) | [postman.com/downloads](https://www.postman.com/downloads/) |
| **Tart** | macOS/Linux VM management on Apple Silicon | `brew install cirruslabs/cli/tart` | [tart.run](https://tart.run/quick-start/) |
| **Packer** | Infrastructure-as-code — building VM images from IPSW. Theory + understanding on Day 2, not necessarily hands-on build. | `brew tap hashicorp/tap && brew install hashicorp/tap/packer` | [developer.hashicorp.com/packer](https://developer.hashicorp.com/packer/downloads) |

> [x] DECIDED: Packer is covered as theory — understanding what it does, how it works with Tart, and the IaC concept. Students will either create a VM from IPSW or use a pre-built Tart VM. Not a full Packer hands-on build.

### Day 3 (agentic coding)

| App | What it's for | Install method | Link |
|-----|--------------|----------------|------|
| **Claude Code** | AI-native development CLI — core tool for Day 3 | `curl -fsSL https://claude.ai/install.sh \| bash` | [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup) |

> Claude Code requires Node.js 18+ on the machine. Install via Homebrew if not present: `brew install node@20`

---

## Web Services & Accounts

| Service | What it's for | Day needed | Link | Notes |
|---------|--------------|------------|------|-------|
| **GitHub** (account) | Repo access, collaboration | Day 1+ | [github.com](https://github.com/) | [ ] TODO: Do students already have GitHub accounts? Need to confirm. |
| **Jamf Pro** (training instance) | MDM platform — API exercises, enrollment, webhooks | Day 2 | [ ] TODO: URL TBD | [ ] TODO: Confirm training instance is set up. API client credentials needed per student or shared? |
| **Webhook.site** | Catch and inspect webhooks during integration demo | Day 2 | [webhook.site](https://webhook.site/) | Free tier — each student gets a unique URL, no account needed. Limit: 50 requests, expires after 7 days. |
| **Apple Freeform** | Collaborative whiteboard for exercises | Day 1 | Built into macOS | [x] DECIDED: Freeform — zero setup, works offline, no accounts needed. |

---

## Files & Media

| Item | What it's for | Day needed | Notes |
|------|--------------|------------|-------|
| **macOS IPSW** | Needed to create VMs from scratch with Tart. Also have a pre-built Tart VM as fallback. | Day 2 | [ ] TODO: Which macOS version? 15 Sequoia? Pre-download — these are large files (~13GB). |
| **Pre-built Tart VM** | Fallback if IPSW build is too slow or fails during the session | Day 2 | [ ] TODO: Build and test a Tart VM image ahead of time. Host on USB or local share. |
| **Training repo** (new, student-facing) | Shared repo students clone on Day 1 via GitHub Desktop | Day 1 | [ ] TODO: Rob is creating this. URL TBD. |
| **USB drives** | Backup install method if internet is unreliable | All days | [ ] TODO: Confirm with Kelly Watkins Conrad — how many? Pre-loaded with which installers? |

---

## Pre-Training Checklist

> [ ] TODO: Assign owners to each item below.

- [ ] All apps tested on an Apple Silicon Mac matching student hardware
- [ ] Training Jamf Pro instance is live and accessible from Zimbabwe
- [ ] API client credentials created (one per student or shared — decide)
- [ ] Training repo created and populated with Day 1–3 resources
- [ ] GitHub accounts confirmed for all 20 students
- [ ] USB drives prepared as offline backup
- [ ] Internet connectivity confirmed at venue (bandwidth for 20 simultaneous users)
- [ ] macOS IPSW pre-downloaded onto USB drives or local server
- [x] Whiteboard tool: Apple Freeform (built into macOS)
- [ ] Node.js 18+ available on all machines (for Claude Code on Day 3)

---

## Network & Infrastructure Notes

- 20 students + facilitators all need stable internet simultaneously
- Day 2 API exercises hit a Jamf Pro cloud instance — confirm it's not geo-blocked in Zimbabwe
- Webhook.site requires outbound HTTPS — should work on any network without a restrictive proxy
- [ ] TODO: Is there a fallback plan if internet is unreliable? Offline exercises? Local Jamf Pro instance?
