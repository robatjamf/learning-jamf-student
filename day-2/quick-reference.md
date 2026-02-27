# Day 2 Quick Reference

Terminal commands for Day 2 hands-on exercises. Copy and execute these commands during the workshop.

**Note:** Replace placeholder values (shown as `YOUR_PLACEHOLDER_HERE`) with your actual values.

---

## Block 1: Claude Code Setup

### Node.js

#### Check Node.js Version

**What it does:** Verifies Node.js is installed (version 18 or higher required)

```bash
node --version
```

#### Install Node.js (if needed)

**What it does:** Installs Node.js version 20 using Homebrew

```bash
brew install node@20
```

### Claude Code

#### Install Claude Code

**What it does:** Downloads and installs Claude Code CLI tool

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Shell

#### Reload Shell Configuration

**What it does:** Reloads shell configuration after Claude Code install (alternative to closing and reopening Terminal)

```bash
source ~/.zshrc
```

#### Set API Key

**What it does:** Sets up API key for Claude Code authentication

```bash
export ANTHROPIC_API_KEY=YOUR_API_KEY
```

### Claude Code

#### Test Claude Code

**What it does:** Verifies Claude Code works with a simple question

```bash
claude "What is 2 + 2?"
```

#### Verify Installation

**What it does:** Confirms Claude Code is installed correctly

```bash
claude --version
```

### Shell

#### Navigate to Training Repo

**What it does:** Changes directory to the training repository folder

```bash
cd ~/agent-native-workshop
```

### Claude Code

#### Initialize Project Context

**What it does:** Initializes Claude Code in the context of the project - creates CLAUDE.md with project context

```bash
claude /init
```

---

## Block 3: API Bootcamp

### curl

#### Check curl Installation

**What it does:** Confirms curl is installed (comes with macOS)

```bash
curl --version
```

#### Authenticate to Jamf Pro API

**What it does:** Authenticates to Jamf Pro API and gets bearer token

```bash
curl -s -u "YOUR_USERNAME:YOUR_PASSWORD" \
  -H "Content-Type: application/json" \
  -X POST \
  "https://projsadp.jamfcloud.com/api/v1/auth/token"
```

### Shell

#### Save Token as Variable

**What it does:** Saves token as shell variable for reuse in API calls

```bash
TOKEN="paste-your-token-here"
```

### curl

#### List All Computers

**What it does:** Lists all computers in Jamf Pro (GET request with jq formatting)

```bash
curl -s \
  -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/computers-inventory" \
  | jq .
```

#### Get Single Device by ID

**What it does:** Gets a single device by ID (replace YOUR_DEVICE_ID with device ID from previous response)

```bash
curl -s \
  -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/computers-inventory/YOUR_DEVICE_ID" \
  | jq .
```

#### Create a Category

**What it does:** Creates a category in Jamf Pro (POST request with JSON body)

```bash
curl -s \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"name": "Training - YOUR_NAME", "priority": 5}' \
  "https://projsadp.jamfcloud.com/api/v1/categories"
```

### Claude Code

#### Ask About API Fields

**What it does:** Asks Claude Code to explain API request fields (companion moment)

```bash
claude "I just made a POST request to the Jamf Pro API to create a category.
The JSON body was: {\"name\": \"Training - Rob\", \"priority\": 5}
What does each field mean? What other fields could I add?"
```

---

## Block 4: Webhooks

### curl

#### Test webhook.site URL

**What it does:** Tests webhook.site URL with a POST request

```bash
curl -X POST https://webhook.site/YOUR_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from YOUR_NAME!"}'
```

### Jamf

#### Trigger Webhook Event

**What it does:** Forces a check-in from enrolled Mac to trigger webhook event

```bash
sudo jamf recon
```

---

## Tips

- **Copy-paste is your friend:** Use Command+C to copy and Command+V to paste commands
- **Check your placeholders:** Make sure you've replaced all `YOUR_*` values before running commands
- **Token expires:** If you get authentication errors, your bearer token may have expired - re-run the authentication command
- **Ask for help:** If a command doesn't work, raise your hand - facilitators are here to help!
