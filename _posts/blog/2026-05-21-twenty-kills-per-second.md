---
layout: post
title: "Twenty Kills Per Second"
date: 2026-05-21
categories: blog
tags: blog
---

"Mom. MOM. We keep dying."

It was 7:15 on a Wednesday night. Keith was in the garage doing something unspeakable to a 3D printer. I was at my desk, three tabs deep in a deploy pipeline, when my oldest came skidding around the corner in socks on hardwood — which is its own kind of server crash waiting to happen — eyes wide, voice cracking with the particular urgency that only an eight-year-old whose Minecraft world is under siege can produce.

He always comes to me for computer stuff. I don't think he believes Keith knows how to turn one on. (Keith designs mesh radio networks in his spare time, but sure, come ask Mom.)

"Something keeps killing us. Over and over. We can't even move."

I pulled up the server logs. And there it was. Scrolling. Fast.

```
[@: Killed 9 entities]
[@: Killed 16 entities]
anonymousmoose2 was killed
[@: Killed 17 entities]
[@: Killed 26 entities]
anonymousmoose2 was killed
[@: Killed 12 entities]
TheReximum5 was killed
```

Hundreds of lines. Every second. Something was executing `/kill -e` — kill *every entity* — twenty times per second, on a loop. Both kids, every mob, every animal, every dropped item. Gone. Respawn. Gone again. The server was choking on it.

And I knew exactly what had gone wrong, because I'd been the one who decided to let the AI handle it.

---

Here's the thing. I didn't set up this Minecraft server. Not really.

The kids had been asking for weeks. They wanted their own world — private, just for them, maybe Bobby — that's what they call their grandpa. You might know him as Uncle Bob. And I had the skills to do it the right way: provision an EC2 instance, configure the server properties, lock down the permissions, set gamerules, test it, review it, deploy it. I've done harder things before breakfast.

But I'd also been wanting to test something. I work with AI agents every day, and I'd been curious: what happens when you give one full autonomy on a real deployment? Not a toy exercise — a real thing, deployed to real infrastructure, used by real people. The Minecraft server was perfect. Private, whitelisted, no public access, no stakes. The safest possible environment to find out what an unsupervised agent actually does.

So I opened Claude, turned on `--dangerously-skip-permissions`, and told it to build me a Minecraft server and deploy it to my personal AWS.

I use `--dangerously-skip-permissions` every day — but with guardrails I've built around it: skills that enforce TDD, hooks that catch dangerous operations, review checkpoints baked into the workflow. That's the craft.

And on this night, all of those guardrails were in place — they're global, they run on every session. Every checkpoint was there. Nothing to worry about. When I'm building for clients, I work deliberately — one thing at a time. I might have two or three agents running (five, tops), but each one is doing one thing, and before anyone gets a new task, everything gets reviewed. Often by my own eyes.

But this was the test. A Minecraft server. An open-source one, from a respected source. I wasn't really even coding — just pulling it down and deploying it. The whole point was to see what the agent would do on its own. So: go.

And it worked. Fifteen minutes later the kids were logged in, punching trees, screaming about creepers. I closed my laptop and didn't think about it again.

For several weeks. Bobby even played with Rex a few times without a glitch. Then this Wednesday night came along.

---

Buried in the configuration the agent generated, every player had been given operator permissions. Level four. Full admin. The same access I'd have. The digital equivalent of handing your eight-year-old the keys to a forklift because he promised he'd be careful, and let's face it, the AI said it would probably be okay.

I never would have done that if I'd been configuring that server by hand. Even half-asleep, even rushing — I would never have typed `/op` for a player account. And even if I'd used an AI agent the way I do every day at work — single features, tested, reviewed — this wouldn't have happened. That's AI-augmented craftsmanship. That's the craft.

But this wasn't the craft. This was a test. I knew a solo private Minecraft server was about the lowest-risk environment I could find to let the AI run unsupervised — to see what it would do with full autonomy on a real deployment. And it worked. And then it failed. And that failure is the proof in the pudding: the agent made a decision I never would have made, buried it in a configuration I never read, and the consequences showed up twenty times per second.

The kids had discovered command blocks. A command block in Minecraft is exactly what it sounds like — a block you place in the world that executes a server command. There are three flavors. The *impulse* block fires once. The *chain* block fires after another block triggers it. And then there's the *repeating* block. The purple one. The one that executes its command every single game tick — twenty times per second — forever, until someone stops it.

My eight-year-old's friend had placed a repeating command block. Typed `/kill -e` into it. Set it to "Always Active." And walked away. He didn't know what it would do. He was experimenting. That's what kids do when you give them tools without guardrails. And I'm proof that that's what we *all* do when given tools without guardrails.

They shouldn't have had those tools. And they wouldn't have, if I'd reviewed what the agent wrote. But that was the test — and the test had results.

---

I want to pause here because this is the part that actually matters.

The command block wasn't the problem. The `/kill` command wasn't the problem. The *repeating* wasn't even the problem. The problem was that I'd given an AI agent full autonomy over a real deployment — deliberately, as a test — and it made a security decision I never would have made. The agent didn't understand my intent. It didn't know these were kids. It didn't think about blast radius or least privilege or what happens when a curious child finds a tool they shouldn't have. It just… configured a server. And the configuration it chose was wrong in a way that wouldn't matter until it suddenly, catastrophically did.

This is the vibe-coding trap. It's not that the code doesn't work. It's that the code works *fine* — right up until the moment it doesn't, and by then you've lost the thread of what it actually did. You can't debug decisions you never reviewed. You can't scope permissions you never read. You can't anticipate failure modes in code you didn't write and didn't examine.

I've seen this same pattern in production systems, wearing different clothes. An AI-generated Terraform config that opens port 22 to the world because the prompt said "make it accessible." A generated database migration that drops a column constraint because the model optimized for simplicity. An agent-written deploy script that skips the staging environment because nobody said not to. The mechanism changes. The mistake doesn't: *someone trusted generated output without reviewing it, because the context felt safe.*

The context always feels safe. That's the trap.

---

In manufacturing — my old world, before software — there's a principle that's so fundamental it's barely even discussed: you don't skip quality checks on the routine stuff. You *especially* don't skip quality checks on the routine stuff. Because the dangerous failures never come from the thing everyone's watching. They come from the thing nobody thought to check because it seemed too simple to go wrong.

The Minecraft server was my test environment. Private. Internal. Low stakes. Deliberately chosen *because* the stakes were low. And it was exactly where the failure lived — which is exactly why you run tests. I found what unsupervised AI does with a real deployment, and the answer was: it makes plausible decisions that a human with context would never make.

---

The fix took about fifteen minutes. Pulled the operator list. Found two usernames with Level 4 access — full admin. Removed both. Disabled command blocks at the server level. Restarted the server. Confirmed the kill loop stopped.

Then I went further. Set gamerules so fire can't spread. Mobs can't grief blocks. Inventory persists through death. (That last one is just good parenting. Nothing ends a play session faster than a kid losing a diamond sword to lava.) Added a world border so nobody wanders out to chunk 30,000 and generates enough new terrain to melt the server's CPU.

Layers. Not one lock — many. Because the lesson from the factory floor was never "put a better lock on the door." It was: *assume the door will be opened by someone who doesn't know what's behind it, and make sure what's behind it can't kill anyone.*

And then I did what the test was always supposed to lead to. I read the configuration. All of it. Every file the agent had generated. I reviewed it the way I'd review a pull request from a junior developer — not because I don't trust them, but because review is how you catch the things that reasonable people miss.

---

Here's the part I keep coming back to.

The flag is called `--dangerously-skip-permissions`. It literally has the word *dangerously* in it. I use it every day — with guardrails. This time I used it without them, on purpose, to see what would happen.

Now I know.

An AI agent writing a Minecraft config and an AI agent writing a production deploy are using the exact same process: generating plausible output based on a prompt, without understanding the consequences of what it chose. The difference isn't the tool. The difference is whether a human looks at the output before it runs. That's what the guardrails enforce. That's what the craft is for. And that's what this test proved — my kids died twenty times per second in the gap between "it works" and "someone reviewed it."

---

The server's been running clean for hours now. The kids are building something enormous out of cobblestone and glass that defies both architectural convention and gravity. Bobby logged in and immediately asked why he couldn't blow things up with TNT anymore. (Sorry, Bobby.)

I've got the logs tailing in a terminal window. Force of habit. Old manufacturing instinct — if the board was red an hour ago, you watch the board a little closer for the rest of the shift.

And somewhere in a chunk I haven't visited yet, there's a purple block sitting in the dirt, powered down, dormant, with `/kill -e` still typed inside it — doing absolutely nothing, because the system no longer lets it.

That's the whole lesson, really. Not "don't use AI to write code." Use it. I do, every day. But *read what it writes.* Every time. Even when the context feels safe. *Especially* when the context feels safe. Because the code that runs without review is the code that fails without warning — continuously, catastrophically, twenty times per second.

---

## FAQ

**What is vibe-coding?**
Vibe-coding is the practice of using AI coding agents to generate code based on natural language prompts, often with minimal or no human review of the output. It can be remarkably productive for prototyping and scaffolding, but it carries real risk when the generated code makes security, access control, or infrastructure decisions that the developer never examines.

**What is the principle of least privilege?**
Least privilege means giving users, systems, and processes only the minimum access they need to do their job — nothing more. It's a foundational security principle in both software engineering and industrial operations. When something goes wrong, the damage is limited to the scope of the permissions that were granted. AI agents don't naturally apply this principle — they optimize for "working," not for "safe."

**Why is code review important for AI-generated code?**
AI-generated code is structurally identical to code written by a developer you've never met, who doesn't know your requirements, your users, or your threat model. It produces plausible output, not necessarily correct output. Review catches the gap between "it runs" and "it does what I actually need, safely." Skipping review for AI-generated code is the same mistake as skipping review for human-written code — except the AI won't flag its own bad assumptions.

**How do you secure a Minecraft server for kids?**
Start with a whitelist so only approved players can join (this part I actually got right). Never give operator (admin) permissions to players who don't need them. Disable command blocks unless you specifically need them. Set gamerules to prevent griefing — disable fire spread and mob griefing. Use a world border to limit exploration range and reduce server load. And if you used an AI agent to set it up — read every line of configuration it generated before you let your kids log in.
