# Day 2 Learning Log

Your personal reflections from Day 2. Fill in each section at the checkpoint — just a few sentences is plenty.

---

## After Block 1 — Coffee Chats & Claude Code

**What was your first impression of Claude Code?**

>

**When you ran `/init`, what did Claude create? Did anything surprise you?**

>

---

## After Block 2 — VMs & Infrastructure

**What did you do with your Tart VM? What commands did you run?**

>I used Tart to create and manage a macOS virtual machine. I ran commands such as tart list to view VMs, tart run <vm-name> to start the VM, and tart stop <vm-name> to stop it after use. These commands helped me manage and test the virtual machine environment.

**How would you explain "a computer inside a computer" to a friend?**

> it is a virtual machine. It means using software like tart to create a seperate computer enviroment that runs inside the main computer.The virtual machine behaves like a real computer with its own operating system, apps, and settings, but it actually runs using the resources of the main computer.

---

## After Block 3 — API Bootcamp

**What API calls did you make in Postman? What did you get back?**

> i used Postman to make API calls to Jamf Pro. I sent a POST request to authenticate and get a bearer token, and then used a GET request to retrieve information such as devices or inventory. The response I received back was JSON data containing the requested information.

**The API is like a restaurant — you (client) send an order through the waiter (API) to the kitchen (server) and get food (data) back. Does that analogy make sense to you? How would you explain it?**

>Yes, the analogy makes sense.So when you send a request (like a GET or POST request) through the API, the server processes it and sends back the information you asked for. The API simply acts as the middleman that makes communication between your application and the server possible. 

**What did you create using a POST request?**

> Using Postman, I made a POST request to the Jamf Pro API to create an authentication token. The server returned a bearer token, which I then used to authenticate and make additional API requests.

---

## After Block 4 — Webhooks

**Push vs pull — what is the difference in your own words?**

> Pull means the client asks the server for information when it needs it. For example, using Postman to send a GET request to Jamf Pro to check for device data.
Push means the server automatically sends information when something happens. For example, a webhook from Jamf Pro sending a notification to another service when a device is enrolled.

**What did the webhook payload look like when it arrived? What information was in it?**

> When the webhook arrived from Jamf Pro, the payload was in JSON format. It contained information about the event that triggered the webhook, such as the event type, device ID, device name, and timestamp.
This data was sent automatically to the endpoint, allowing the receiving system to know what action occurred and process the information.

---

## End of Day 2

**What clicked for you today?**

> different of personas working together meaning that working together helps and creates different amamzing ideas it also builds temawork

**What is still fuzzy or confusing?**

> how a post could be automatically in someone's macbook

**What do you want to explore on Day 3?**

> more on how to post and delete a post and am curious about claude console and to know more about jamf pro api
