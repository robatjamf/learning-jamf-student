# Glossary

Simple definitions for terms used throughout the workshop — covering all three days.

---

## Days 1-2 Terms

---

**Integration**
Code that makes two software systems talk to each other automatically.

*Like online shopping — the cart talks to the payment system, the payment system talks to shipping. You don't have to copy information between them by hand.*

---

**MDM (Mobile Device Management)**
A system for managing many devices from one place — pushing settings, installing apps, enforcing security rules.

*Like a school principal who can set rules for every classroom at once, instead of walking to each room individually.*

---

**Persona**
A fictional character that represents a real type of user. Used to understand different people's needs and pain points.

*Four personas from Day 1: Enterprise IT Admin (10,000+ devices), K-12 IT Coordinator (shared iPads, multiple schools), Security Analyst (1,000 alerts/day), Help Desk Technician (remote troubleshooting).*

---

**Journey Map**
A visual walkthrough of a user's workflow — showing the steps they take, the tools they use, where they get stuck, and where things could be better.

*Like drawing a map of someone's daily commute, marking every traffic jam and shortcut.*

---

**API (Application Programming Interface)**
A way for software to talk to other software. You send a request, and get data back.

*A restaurant: you (the client) tell the waiter (the API) what you want, the waiter tells the kitchen (the server), and the kitchen sends back your food (the data).*

---

**REST**
A style of API where you use simple actions (GET, POST, PUT, DELETE) to work with data over the web.

*GET = read something. POST = create something. PUT = update something. DELETE = remove something.*

---

**JSON (JavaScript Object Notation)**
A structured way to format data so both humans and computers can read it. Uses curly braces, colons, and quotes.

*Like filling out a form: each field has a label and a value. `{"name": "Alex", "role": "admin"}` is JSON.*

---

**Bearer Token**
A code that proves you've already logged in. You get it once, then use it for all your requests.

*A wristband at an event. You show your ID at the door (authenticate), get a wristband (token), and flash it everywhere else without showing your ID again.*

---

**Postman**
A tool for testing APIs — like a web browser, but for API requests instead of web pages.

*You type in the address (URL), pick the action (GET, POST), and see what comes back.*

---

**Virtual Machine (VM)**
A computer running inside another computer. It has its own operating system and behaves like a separate machine.

*A snow globe — it's a little world inside your world. You can shake it, reset it, or throw it away without affecting the room you're sitting in.*

---

**Tart**
A tool for running macOS virtual machines on Apple Silicon Macs.

*Key commands: `tart clone` (copy an image), `tart run` (start it), `tart stop` (shut it down), `tart ip` (find its address).*

---

**Packer**
A tool that builds VM images from a written recipe (template). Same recipe = same image every time.

*Like a cookie cutter — the template is the shape, Packer is the cutter, and the image is the cookie. Every cookie comes out the same.*

---

**Webhook**
A URL that receives data when something happens. Instead of you asking "anything new?" over and over, the server tells you when there's news.

*A doorbell. You don't check the door every five minutes — the doorbell rings when someone arrives.*

---

**Polling vs. Pushing**
Two ways to get updates. Polling = you keep asking. Pushing = the system tells you.

*Polling: "Are we there yet? Are we there yet?" Pushing: "I'll tell you when we get there."*

---

## Day 3 Terms

---

**Agent**
A helper that doesn't just talk — it can actually do things for you, like read your files, write code, and run commands.

*Like a really smart assistant who can type on your keyboard, not just give you advice.*

---

**Context**
Everything the agent knows about what you're trying to do. The more you tell it, the better it understands.

*If you ask a stranger to grab your jacket from your house, they need to know where you live, what the jacket looks like, and where you left it. That's context.*

---

**Prompt**
What you say to the agent to tell it what you want.

*Like placing an order. "Make me food" gets you something random. "Make me a grilled cheese with tomato on sourdough" gets you exactly what you want.*

---

**Plan Mode**
When the agent stops to think and shows you what it's going to do *before* it does it. You can say "yes," "no," or "change this part."

*Like looking at the blueprint before building the house.*

---

**Mental Model**
The picture in your head of what you're trying to build. It includes how things should look, how they should work, and what "done" means to you.

*Before a builder starts construction, they have a clear picture of the finished house. Your mental model is that picture. Review is comparing what was built to the picture you had in your head.*

---

**Review**
Evaluating the output yourself first — open it, use it, compare it to what you planned — then asking the agent to help identify gaps you missed.

*Like taste-testing the dish yourself before asking someone else for their opinion. Your judgment comes first.*

---

**Compounding**
Distilling everything from a session — decisions, tradeoffs, dead ends, discoveries — into a reference that future sessions build on. Not just "what I learned" but the full picture of what happened and why.

*Think of a pilot's logbook. After every flight, they don't just write "good flight." They record the route, the weather decisions, the turbulence they encountered, what they'd do differently. The next pilot who flies that route starts with all of that context instead of figuring it out from scratch.*

---

**Token**
A small chunk of text the agent reads and writes in. Roughly one token is about one word.

*Think of it like puzzle pieces. The agent builds sentences out of tiny pieces, and it can only hold so many pieces at once.*

---

**Context Window**
How much the agent can remember in one conversation. When it fills up, it starts forgetting the earlier stuff.

*A whiteboard. You can keep writing on it, but eventually you run out of space and have to erase something.*

---

**Hallucination**
When the agent says something that sounds right but isn't. It's not trying to trick you — it's just guessing and doesn't know it's wrong.

*Like asking someone for directions and they confidently say "turn left at the big tree" — but there's no tree. They're not lying, they just filled in the blank.*

---

**One-Shot Prompting**
Telling the agent what you want in one go and expecting a finished result. No planning, no back-and-forth. Usually doesn't end well.

*Like texting a friend "get me a birthday present for mom" with no other info. They'll get *something*, but probably not what you had in mind.*

---

**Iteration**
Going back and forth with the agent. Refining, adjusting, improving together.

*Like working on a group project where you actually talk to each other instead of one person just doing the whole thing alone.*

---

**Quit / Restart**
Stopping and starting over when things aren't working. This is smart, not giving up.

*You took a wrong turn. It's faster to turn around now than to keep driving and hope for the best.*
