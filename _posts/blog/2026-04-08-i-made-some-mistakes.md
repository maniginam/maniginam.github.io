---
layout: post
title: "I Made some Mistakes. The Robot Made Them Faster."
date: 2026-04-08
categories: blog
---

Last week I committed a Secure cookie flag to production that only worked on localhost. The week before that, I restructured a data map and silently nuked three features that had nothing to do with what I was touching. And somewhere in between, I approved a test that was — technically — testing something. Just not anything that mattered.

The AI helped with all of it. Enthusiastically.

---

The Secure cookie thing started because c3suite has a development mode where everything runs over HTTP on localhost. The AI wired up session handling and included `Secure` in the cookie flags, which is the right thing to do in production. In development, it meant every login silently failed — the browser refused to set the cookie, no error, just nothing. I caught it and asked the AI to fix it. It added a check: strip the `Secure` flag when running locally.

That fix went in. I moved on.

What neither of us thought about was that the project connects two applications across origins — a ClojureScript frontend and a backend API, different ports, different hosts in production. The cookie domain scope wasn't set for that. I'd wired the CORS headers early on with `allow-all` in development mode and told myself I'd come back to it. I did not come back to it. The AI did not remind me. When we deployed, sessions worked fine on direct API calls and broke completely on anything cross-origin, with errors that pointed nowhere useful.

I had made this exact mistake before. By myself. Years ago. With a lot more confused Googling. The AI just got me there in about forty minutes, with cleaner variable names and a very helpful inline comment.

---

The disappearing features are the part I keep chewing on.

I was building out a dashboard that aggregates data by executive role — CEO gets one view, CMO gets another. There's a function called `enrich-dashboard-trends` that takes role data and adds enriched metrics to it. The AI wrote the enrichment step. I reviewed it. It looked right.

The commit message later read: *`fix: enrich-dashboard-trends was dropping action-items, anomalies, detail`*

What had happened: the enrichment used `assoc-in [role :metrics]`, which didn't add to the existing role map — it *replaced* it with a new map containing only metrics. Action items: gone. Anomalies: gone. Detail: gone. Every piece of data we'd added to that role map in prior sessions, quietly orphaned.

The tests passed because we hadn't written tests that verified action-items survived enrichment. We added those tests in the fix commit. They should have existed before.

What gets me is that this is a failure mode I know. I've been burned by `assoc-in` clobbering nested state before. I just wasn't holding that context when I reviewed the code because we were deep in a different problem and it *looked* like the obvious implementation. The AI produced the obvious implementation. I agreed it was obvious.

We were both looking at the same blind spot.

---

Then there are the tests.

I had a stretch where everything was green and I felt genuinely good about our test coverage. Then a change in how library carousels loaded caused a test to fail — not because carousels were broken, but because the stub was now recording more invocations than before. The original test was:

```clojure
(should= #{"White Album" "Revolver"} (set (map #(:title (first %)) (stub/invocations-of :series/carousel))))
```

Which seems fine until you realize it's testing that *exactly these two carousels and no others* got invoked. It wasn't testing that the library loaded correctly. It was testing an implementation detail of how many times a stub got called, and it broke every time we touched routing logic that had nothing to do with carousels.

The fix was to loosen it to `contains?` checks. The test still passes. It now tests less. And somewhere in the middle of the fix I approved it because we were in the middle of something else and I just wanted it green.

We also, separately, wrote the same database migration twice — once in `dev/` and once in `src/clj/`, in two different sessions, because neither of us remembered we'd already done it. CI caught it with `:db.error/unique-conflict`. The fix was deleting a hundred lines of perfectly correct code that shouldn't have existed.

The AI had no idea. I should have.

---

The annoying conclusion I keep arriving at is that none of this is the AI's fault.

It's more that the AI is a very fast, very capable version of exactly the shortcuts I take when I'm tired or moving too fast or convinced I already understand the problem. It doesn't stop and think *wait, did we handle this case two sessions ago?* It doesn't hold the whole picture. It's working on what's in front of it. So am I. And when both of us are doing that simultaneously, the gap in context doesn't split the difference — it stacks.

What I'm relearning — for what feels like the third or fourth time, which is its own kind of humbling — is that the disciplines I keep preaching about don't get optional when you move faster. They get *more* necessary. Writing tests that actually verify behavior, not just produce a green light. Reading the whole map, not just the key you're touching. Remembering what you already built before you build more of it.

The robot isn't inventing new mistakes. It's making my mistakes. Faster. With better posture. And I keep having to recognize myself in them.

Which is, honestly, kind of illuminating. In a deeply annoying way.
