---
layout: post
title: "We Build Software with Responsible AI — Here's Why Discipline Still Matters"
date: 2026-04-16
categories: blog
tags: blog
---

Last week my six-year-old asked me, "Mommy, in your job, do you get to tell robots what to do?"

Me: "Umm... kind of, yeah... Actually, yes! That's exactly what i do!"

Leo: "Do they ever tell *you* what to do?"

With great defeat: "Yup. More than I'd like to admit."

Leo: "When you tell the robots what to do, do they ever do it wrong? Like you tell them to mine diamonds, and they craft diamond boots for you instead?"

*Sigh.*

Yeah, dude. That's kind of the whole problem.

---

Everyone's building with AI right now. Every startup pitch deck has "AI-powered" somewhere on slide two. Every enterprise roadmap has an "AI integration initiative" that someone in a boardroom greenlit because a competitor announced theirs first.

And look — I'm not here to be the grumpy person who says AI is overhyped. We use AI. We build AI into the applications we ship at CCStudio. I genuinely think it's one of the most interesting shifts in how software gets built in my lifetime.

But here's what I keep seeing that makes my stomach hurt a little:

Teams are building AI features with none of the discipline they'd apply to literally any other part of their system.

No tests around the AI integration. No clean interface between the model and the business logic. No fallback behavior when the model hallucinates. No monitoring to know when it's quietly getting worse. Just vibes and a prayer and a demo that worked great in staging.

---

I came to software through chemical manufacturing. (I know. It's a whole thing.) But one of the things that stuck with me from that world is: you don't build a system that handles dangerous materials and then skip the safety checks because "because it worked in the Aspen model."

You instrument everything. You test the failure modes. You build containment around vessels that *could* spill or overflow. You install vacuum breakers on your exothermic reactors that might require rapid cooling, because — well, have you ever seen a collapsed reactor? The one I saw resembled a crushed soda can. You install redundant pressure relief valves in case a reactor over-pressures. You have and train your employees how to use the mitigation towers in case those relief valves pop. Not because you think they will — because you know they might.

AI in software is the same. The model is a component. A powerful, occasionally unpredictable component. And like every other component in a well-built system, it needs boundaries. It needs tests. It needs an interface clean enough that when you swap GPT-4 for whatever comes next (and you will), the rest of your application doesn't come along for the ride.

---

At CCStudio, when we integrate AI into a client's system, we treat it like we treat everything else: with TDD, clean architecture, and an almost annoying insistence on separation of concerns.

The AI layer gets its own boundary. We write adapter interfaces so the model is pluggable — not welded into the business logic. We write tests that verify behavior, not just output. (Because "the model returned something" is not a useful assertion.) We build monitoring so that when model performance degrades — and it will, because data drifts and models age — someone knows about it before the users do.

Is this slower than just throwing a ChatGPT call into your controller and shipping it? Yeah. A little. For about two weeks. After that it's dramatically faster, because you can actually change things without the whole system falling over.

I keep thinking about this thing Uncle Bob says: "The only way to go fast is to go well." I used to think that was aspirational. Now I think it's just physics. Every shortcut in AI integration shows up as a bug report three months later, wearing a trench coat and pretending to be a "data issue."

---

The thing about responsible AI isn't that it's a moral imperative (though, I mean, it kind of is). It's that it's a *practical* imperative. The teams that build AI responsibly — with tests, with clean boundaries, with real engineering discipline — are the ones whose AI features will still be working in two years. The ones who shipped without discipline will be rewriting from scratch, if they're lucky, or debugging hallucination bugs in production at 2am, if they're not.

I know "discipline" isn't a sexy AI word. Nobody's putting "disciplined AI integration" on their pitch deck. But the companies that hire us aren't looking for sexy. They're looking for software that works. Software they can maintain. Software that doesn't do something unhinged when the model has a bad day.

That's what we build. Custom software with AI baked in — the same way we bake in everything else. With tests. With clean code. With architecture that assumes the world is going to change — because, well, if there's one thing I'm certain of, it's not that the world is *going* to change. It's that the world is already changing. It always has been. Continuously. Forever.

So now, the question is: was your software built to change with it?

---

Oh! And a little later that day, Leo asked me if my robots could help him build a time machine.

I told him we're working on it.

He asked if it would have tests.

I smiled at him and said, "Of course!"

I don't think I could have been prouder.

→ [cleancoders.com/studio](https://cleancoders.com/studio)
