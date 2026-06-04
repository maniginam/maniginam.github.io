---
layout: post
title: "Bland Confidence"
date: 2026-04-17
categories: blog
tags: blog
---

Last week one of our AI agents rewrote a function, ran the tests, watched them pass, and shipped it. Clean. Fast. Impressive. Except the function was wrong. Not wrong in a "missed an edge case" way — wrong in a "this looks plausible but does not actually do what was asked" way. The tests passed because the agent had also written the tests, and the tests were checking for the wrong thing. Confidently. Beautifully formatted.

Alex caught it in a code review. A human, reading the code, who knew what the function was supposed to do. And that right there is the whole argument for why peer review still matters — not as ceremony, but as a safety net with actual eyes. I sat there afterward staring at this perfectly structured, entirely incorrect code thinking: *how does something so smart get something so wrong and not notice?*

Turns out there's a paper for that.

---

## The Kitchen Timer Problem

A research paper came across my desk recently that finally gave me language for something I've been feeling in my gut for a year. The core idea is deceptively simple, so I'm going to explain it with a kitchen timer.

If you've never been to a crawfish boil, here's the deal: you dump forty pounds of live crawfish into a massive pot of seasoned, boiling water along with corn, potatoes, sausage, garlic, and enough cayenne to make your eyes water from across the yard. Newspaper on the table. No plates. You eat with your hands and you argue about seasoning the entire time. It's chaos, and it's perfect.

Now imagine you have a chef running this boil. Talented, fast, well-trained. But there's a catch: for every ingredient you hand them, they get a fixed number of seconds to cook. Not total seconds — seconds *per ingredient*. A small batch? No problem. But a real boil — forty pounds of crawfish, timed against the corn and potatoes, seasoning ratios that shift with batch size, heat that has to be managed differently when the pot is full versus half-full — the coordination steps don't just grow. They *explode*. Double the crawfish doesn't mean double the time and spice. The proportions shift in non-obvious ways. And your chef still gets the same fixed ratio of seconds per ingredient.

They'll serve something. It'll look like a crawfish boil. But the crawfish are mush, the potatoes are raw, and the seasoning is so far off that nobody's arguing about it because nobody's eating it.

That's what's happening inside an LLM.

For every token the model reads, it does a fixed amount of computation. Same amount, every time, no matter what you asked. Simple question? It's got cycles to spare. But some problems — combining things in every possible order, multiplying big matrices, figuring out the shortest route through a bunch of cities — require work that grows *way* faster than that fixed budget allows. Cubically. Exponentially. Factorially.

The model doesn't know it's out of budget. It doesn't throw an error. It doesn't say "this is beyond me." It just... dumps the pot out on the table. Confidently. With extra lemon wedges.

---

## The Part That Made Me Put My Coffee Down

Here's what got me. The paper argues that you can't fix this by having a *second* LLM check the first one's work.

I'll admit — this was my instinct for a while. Agent writes code, second agent reviews it, problems caught, everybody's happy. And sometimes that works! For the easy stuff, it works great. But the paper's point is almost painfully obvious once you hear it: the second chef has the same kitchen timer. If the boil was too complex for Chef #1 to get right, it's too complex for Chef #2 to verify. They'll both stand there nodding at the mushy crawfish like it's a masterpiece.

> The failure mode isn't "the AI said *I don't know*." The failure mode is "the AI said *here you go!* with a smiley face and a green checkmark."

Now here's the thing — there's a nuance the paper doesn't quite explore. You don't *have* to ask the second chef "is this the best possible boil?" That's the hard problem. That's the one that requires evaluating every possible combination of timing and seasoning. But you *can* ask: "are the crawfish cooked through?" That's a simpler question. A pass/fail check against a known standard, not an open-ended evaluation of perfection. And that distinction matters a lot in practice, because most of the time we don't need the mathematically optimal answer. We need the answer that meets the spec.

But here's where it gets interesting. Not everything *has* a clean spec. A turkey, sure — stick a thermometer in it, check for 165°F. But crawfish? There's no thermometer for a crawfish boil. You know it's right by the color, the curl of the tail, the way the shell pulls. It's feel. It's experience. Did you know that senior operators at paper plants can detect a problem with their pulping process before the instrumentation catches it, just by the smell of the black liquor? Heck, anyone two towns over can tell you when something's off at the mill. My point is, some things are really hard to reduce to a number.

And that's the part that keeps me up at night with AI. For the problems that have a clear, measurable spec, we can build checks. Write the test first, define "done," let the machine verify against it. But for the problems that require taste, intuition, domain wisdom — the ones where "correct" is something a human *recognizes* more than *measures* — there's no shortcut. You need the person who knows what a good boil smells like.

Which brings me back to staring at the wall.

Because I've *seen* the other version of this. We've had review agents approve code that a human later flagged. We've had agents generate test suites that test the wrong behavior and then pass their own tests. (That one still haunts me.) The failure mode isn't "the AI said I don't know." The failure mode is "the AI said here you go! with a smiley face and a green checkmark."

---

## What the Kitchen Timer Can't Cook

The paper talks about reasoning models — the newer ones that "think step by step" — and basically says: each step still has the same timer. Chain-of-thought doesn't give the model more computational power per token. It's like telling the chef they can write out a plan before firing the burner. Great, that helps with organization. But if the boil needs an hour of careful heat management and you've got ninety seconds, no amount of planning changes the physics.

I want to be really clear here: I'm not dunking on AI. We use agents every day where I work. They write code, manage tasks, coordinate with each other. They're genuinely good at a shocking number of things. When the problem fits within that computational budget — and *most* everyday programming problems do — they're fast, reliable, and frankly better than me at remembering syntax.

But I came to software from chemical manufacturing. And on a factory floor, you learn something fast: every material has a failure point. Every single one. Steel fatigues. Concrete cracks. Gaskets degrade. The question is never "does this material fail?" The question is *"under what conditions does it fail, and what happens when it does?"*

That's the question we should be asking about LLMs. Not "are they useful" — obviously yes. Not "will they get better" — obviously yes. But: *what's the failure mode, and what's the plan for it?*

---

## Garnish Isn't a Guardrail

This is why I'm so stubborn about craftsmanship disciplines. TDD. Code review. *Human* code review. Not because I don't trust the AI — I work with it every single day — but because I understand what the kitchen timer means.

When an agent writes code, it needs to be tested against specifications that a *human* defined. Not tests the agent wrote to match its own output. That's the chef eating their own mushy crawfish and saying "yep, that's how crawfish taste." The test has to come from outside the system. Red-green-refactor isn't just a methodology preference anymore. It's a computational necessity. The red test — the one written *before* the code, by someone who knows what correct looks like — is the only thing standing between you and a confident, well-formatted, completely wrong answer.

And verification can't just be "ask another LLM." It has to involve something with a different computational model. An actual algorithm. A compiler. A type checker. A human who knows the domain. Something that doesn't have the same kitchen timer limitation.

I think about this every time someone tells me AI will replace developers. Maybe. Someday. But right now, today, in the actual work we do? The AI is the world's fastest, most confident junior developer. It needs code review. It needs guardrails. It needs someone who knows what a good boil tastes like.

---

## The Part Where I Get Tender About It

Here's what I'm actually learning, underneath all the computational complexity stuff: *trust has to be earned at every level of difficulty.* I trust our agents with straightforward tasks because they've proven reliable there. I don't trust them with architectural decisions because I've watched them dump mushy crawfish on the table and call it done. That's not pessimism. That's paying attention.

The paper gave me math for something I already knew from working a factory floor: understand your materials, know their limits, build systems that account for failure. The AI isn't magic. It's a material. A really, really good one. With a kitchen timer that never changes.

So we keep writing the tests first. We keep reviewing the code. We keep the humans in the loop — not because we're Luddites, but because we read the spec sheet.

The crawfish have got to actually be cooked.
