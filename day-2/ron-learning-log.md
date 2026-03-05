# Day 2 Learning Log

Your personal reflections from Day 2. Fill in each section at the checkpoint — just a few sentences is plenty.

---

## After Block 1 — Coffee Chats & Claude Code

**What was your first impression of Claude Code?**

>Seems to be a decent AI so far

**When you ran `/init`, what did Claude create? Did anything surprise you?**

>

---

## After Block 2 — VMs & Infrastructure

**What did you do with your Tart VM? What commands did you run?**

>We used Virtual Buddy to create a macOS virtual machine then we enrolled it to a jamf pro instance. After that we logged into that instance with the credentials inorder to view the device. We then created a webhook that reacted whenever a device's ... changed and it sent the information to a site that tests webhooks and displays the information sent with it.

**How would you explain "a computer inside a computer" to a friend?**

>If i was explaining to a tech savy friend I'd mention how its like running a completly different computer on your computer and having it share the same hardware. If it were a non tech savy friend I'd use an analogy of having a model house within your actual house, the model house uses the space/storage within your physical house.

---

## After Block 3 — API Bootcamp

**What API calls did you make in Postman? What did you get back?**

>We sent post requests through the jamf pro api, what this did was create new categories within the jamf pro server.

**The API is like a restaurant — you (client) send an order through the waiter (API) to the kitchen (server) and get food (data) back. Does that analogy make sense to you? How would you explain it?**

>Yes, interestingly enough I explain it the same way.

**What did you create using a POST request?**

>We created a new category in the jamf pro instance.

---

## After Block 4 — Webhooks

**Push vs pull — what is the difference in your own words?**

>Push and pull are git concepts. Push basically sends changes from your local repository to the remote one while pull fetches changes from the remote reposiory to the local repository.

**What did the webhook payload look like when it arrived? What information was in it?**

>Since we sent the information using xml, the payload looked a bit like html. One thing I clearly remember is that the id of the device was also contained within the payload.

---

## End of Day 2

**What clicked for you today?**

>How xml looks like and how it differs from json

**What is still fuzzy or confusing?**

>At this point in time, nothing

**What do you want to explore on Day 3?**

>I really want to learn how to host my own sites on a linux vm in way that other people can access them.
