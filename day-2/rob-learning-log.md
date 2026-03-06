# Day 2 Learning Log

Your personal reflections from Day 2. Fill in each section at the checkpoint — just a few sentences is plenty.

---

## After Block 1 — Coffee Chats & Claude Code

**What was your first impression of Claude Code?**

> Okay, I was not prepared for this. I expected a fancy autocomplete. What I got felt like having a co-pilot in my flying car who actually knows how to navigate AND makes jokes. It understood context, wrote real code, and explained what it was doing. As someone who makes music, the closest thing I can compare it to is jamming with a musician who can play every instrument.

**When you ran `/init`, what did Claude create? Did anything surprise you?**

> It read through the whole project, understood what was going on, and wrote a CLAUDE.md file that summarised it better than I could have. I was surprised it didn't just dump a generic template — it actually looked at the real files and gave useful context. Chomps my honey badger could never do that. He just chews things.

---

## After Block 2 — VMs & Infrastructure

**What did you do with your Tart VM? What commands did you run?**

> I spun up a macOS VM using Tart, SSHed into it, poked around the file system, and ran a few basic commands to get my bearings. It felt like landing a second flying car inside the hangar of the first flying car. Commands like `tart run`, `tart list`, and SSH were the main ones — nothing too wild, but satisfying.

**How would you explain "a computer inside a computer" to a friend?**

> Okay, imagine your flying car has a miniature flying car inside the glove box. The mini car runs independently — it has its own engine, its own GPS, its own playlist. You can crash the mini car and your real car keeps flying. That's a VM. It's a fully isolated machine that lives inside another machine, and they don't mess each other up.

---

## After Block 3 — API Bootcamp

**What API calls did you make in Postman? What did you get back?**

> I made GET requests to pull back device and computer info from the Jamf API. Got back JSON with all kinds of details — device names, serial numbers, OS versions. It was like asking a question and getting a perfectly organised answer instead of a messy spreadsheet. Very satisfying.

**The API is like a restaurant — you (client) send an order through the waiter (API) to the kitchen (server) and get food (data) back. Does that analogy make sense to you? How would you explain it?**

> That analogy is solid. I would add a music spin: the API is like a streaming service. I (the fan) request a song (data). The platform (API) goes to the music catalogue (server) and brings back exactly the track I asked for. I don't need to know how the studio recorded it or where the servers are — I just get the song. POST requests are like submitting a demo — you're sending something new into the system and hoping it gets accepted.

**What did you create using a POST request?**

> I created a new record in Jamf using a POST request — basically adding a new catagory. Watching something I typed in Postman show up as real data in the system felt like magic. Or like naming a new unicorn and watching it appear in the stable.

---

## After Block 4 — Webhooks

**Push vs pull — what is the difference in your own words?**

> Pull is when I go check if something happened — like refreshing my music feed every 5 minutes hoping a new album dropped. Push is when the service texts me the second the album goes live. Webhooks are push — Jamf says "hey, something just happened" and fires the message at you in real time without you having to ask.

**What did the webhook payload look like when it arrived? What information was in it?**

> It arrived as a JSON blob with event details — what happened, which device was involved, a timestamp, and some metadata. It looked like a little story: "At 14:32, device XYZ just enrolled." Clean, structured, and instant. Chomps delivers messages faster but with significantly more bite marks.

---

## End of Day 2

**What clicked for you today?**

> APIs and webhooks finally make sense to me as a pair. APIs are "I'll ask when I need to know." Webhooks are "I'll tell you the moment it happens." Together they cover basically every way two systems might need to talk to each other. That clicked hard.

**What is still fuzzy or confusing?**

> Authentication and tokens still feel a bit wobbly. I understand the concept — prove who you are before you get access — but the different types (Basic, Bearer, OAuth) feel like a lot of similar-sounding things that probably have important differences I haven't fully absorbed yet.

**What do you want to explore on Day 3?**

> I want to build something real. Not just poke APIs and read JSON but actually make a page or a thing that does something useful. Also curious how AI fits into the Jamf world — can Claude help automate IT workflows? That feels like where this is all heading.
