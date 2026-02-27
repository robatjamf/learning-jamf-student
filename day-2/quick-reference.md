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

#### Set API Key (Each Student Gets Their Own Key)

**What it does:** Sets up API key for Claude Code authentication

**IMPORTANT:** Each student receives their own individual API key. Check the projector during Block 1B for your assigned key (Student 1, Student 2, etc.).

```bash
export ANTHROPIC_API_KEY=sk-ant-api03-YOUR_ASSIGNED_KEY_HERE
```

**Note:** This export command only lasts for the current Terminal session. If you close Terminal or open a new tab, you'll need to run this command again.

#### Verify API Key is Set

**What it does:** Confirms your API key was set correctly (should display your key starting with sk-ant-api03-)

```bash
echo $ANTHROPIC_API_KEY
```

### Claude Code

#### Test Claude Code

**What it does:** Verifies Claude Code works with a simple question

```bash
claude "What is 2 + 2?"
```

**Expected result:** Claude should respond with information about the answer being 4.

#### Verify Installation

**What it does:** Confirms Claude Code is installed correctly

```bash
claude --version
```

**Expected result:** Shows version number (e.g., claude v1.0.0)

### Shell

#### Navigate to Training Repo

**What it does:** Changes directory to the training repository folder

```bash
cd ~/learning-jamf-student
```

**Note:** This assumes you cloned the repo to your home directory. If you cloned it elsewhere, adjust the path accordingly.

### Claude Code

#### Initialize Project Context

**What it does:** Initializes Claude Code in the context of the project - creates CLAUDE.md with project context

```bash
claude /init
```

---

## Block 2: VMs & Infrastructure

**Note:** Block 2 uses GUI applications (VMware Fusion or Virtual Buddy) - no command-line commands. Reference the slides and facilitator instructions for VM creation steps.

### VM Configuration Settings

When creating your VM, use these settings:

- **CPU:** 4 cores
- **RAM:** 8 GB
- **Disk Space:** 50 GB
- **Source:** macOS IPSW file from USB stick (macOS 15 or 26)

### VM Operations

**Create VM:**
1. Copy IPSW file from USB stick to your Desktop
2. Open VMware Fusion or Virtual Buddy
3. Create new VM → Install from IPSW → Select your IPSW file
4. Set resources (4 CPU, 8 GB RAM, 50 GB disk)
5. Wait 15-20 minutes for macOS to install

**Take Snapshot:**
- **VMware Fusion:** VM menu → Snapshots → Take Snapshot
- **Virtual Buddy:** Click snapshot button in toolbar
- Name it "Clean install" before making changes

---

## Block 3: API Bootcamp

### API Credentials

Use these credentials for all API calls:
- **Username:** `jamfpro_api`
- **Password:** `eap.zog.neek26`

### Jamf Pro Swagger UI

#### Open Swagger UI (API Documentation)

**What it does:** Opens the interactive API documentation built into Jamf Pro where you can browse all available endpoints

**Open this URL in your browser:**
```
https://projsadp.jamfcloud.com/api/doc
```

This is the full Jamf Pro API reference with:
- All available endpoints organized by category
- Request/response examples
- Interactive "Try it out" buttons to test API calls directly in your browser

**Tip:** Keep this tab open during the API exercises - it's helpful to see what endpoints are available and what data they return.

---

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
