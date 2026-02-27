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

### API Credentials

Use these credentials for all API calls:
- **Username:** `jamfpro_api`
- **Password:** `eap.zog.neek26`

### curl

#### Authenticate to Jamf Pro API (Step 1)

**What it does:** Authenticates to Jamf Pro API and shows the full JSON response with token

```bash
curl -s -u "jamfpro_api:eap.zog.neek26" \
  -H "Content-Type: application/json" \
  -X POST \
  "https://projsadp.jamfcloud.com/api/v1/auth/token"
```

### Shell

#### Save Token as Variable (Step 2)

**What it does:** Gets the token and extracts just the token value using jq, then saves it as $TOKEN variable

```bash
TOKEN=$(curl -s -u "jamfpro_api:eap.zog.neek26" \
  -H "Content-Type: application/json" \
  -X POST \
  "https://projsadp.jamfcloud.com/api/v1/auth/token" \
  | jq -r '.token')
```

#### Verify Token Saved

**What it does:** Displays your token to confirm it was saved correctly

```bash
echo $TOKEN
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

#### Update Extension Attribute (Workshop Status)

**What it does:** Updates the "Workshop Status" Extension Attribute on your computer using XML format (Classic API)

**Important:**
- Replace `YOUR_DEVICE_ID` with your device ID from the GET call above
- Replace `YourName` with your actual name (e.g., Rob, Sarah, Marcus)
- This update triggers the Smart Group webhook in Block 4!

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

#### Verify in Jamf Pro UI

After running the command above:
1. Open Jamf Pro web interface: https://projsadp.jamfcloud.com
2. Go to: Computers → Search for your device → General tab
3. Look for: **Extension Attributes** section
4. You should see: **Workshop Status: YourName**

### Claude Code

#### Ask About XML vs JSON

**What it does:** Asks Claude Code to explain the difference between XML and JSON APIs (companion moment)

```bash
claude "I just updated a computer's Extension Attribute using the Jamf Pro Classic API.
The XML body had: <id>1</id> and <value>Rob</value>
What does each element mean? Why does this API use XML instead of JSON?"
```

### curl

#### Invalidate Your Token (Security Best Practice)

**What it does:** Invalidates your bearer token when you're done using it - security best practice!

```bash
curl -X POST \
  -H "Authorization: Bearer $TOKEN" \
  "https://projsadp.jamfcloud.com/api/v1/auth/invalidate-token"
```

**Why this matters:**
- Tokens stay active for a while after you get them
- If someone finds your token in terminal history, they could use it
- Always invalidate tokens when you're done - especially in production environments
- Pattern: **Authenticate → Work → Invalidate** (like Login → Work → Logout)

---

## Block 4: Webhooks

### Connection to Block 3

The Extension Attribute you updated in Block 3 connects to this block! When you updated the EA, your computer joined the **"Workshop Participants"** Smart Group. The webhook watches that Smart Group for membership changes.

### curl

#### Test webhook.site URL (Optional)

**What it does:** Tests webhook.site URL with a POST request

```bash
curl -X POST https://webhook.site/YOUR_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from YOUR_NAME!"}'
```

### Trigger Smart Group Webhook

**What it does:** Run the Extension Attribute update command again (from Block 3) to trigger the Smart Group webhook. Watch the webhook.site URL on the projector to see your update appear in real-time!

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

**What happens:**
1. You update the EA via API →
2. Computer joins Smart Group →
3. Webhook fires →
4. JSON payload appears in webhook.site!

This is **event-driven integration** in action.

---

## Tips

- **Copy-paste is your friend:** Use Command+C to copy and Command+V to paste commands
- **Check your placeholders:** Make sure you've replaced all `YOUR_*` values before running commands
- **Token expires:** If you get authentication errors, your bearer token may have expired - re-run the authentication command
- **Ask for help:** If a command doesn't work, raise your hand - facilitators are here to help!
