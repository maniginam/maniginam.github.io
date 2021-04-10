---
layout: posts
Title: Keep Calm and Code On
date: 2021-04-09
---

Do you have a ring doorbell?  We got one several months back.  In fact, Keith had like just installed in in October right before I went out of town, which was followed up after Thanksgiving with the conversation about moving, so I never got sync’d with the doorbell.

I am sync’d now, and man, that thing is weird.  I mean it’s great, but anytime I go out the front door, I’m being watched.  I saw the whole day happen, and by day, i mean the rising, movement, & setting of the sun through the eye of my doorbell.  Not to mention the clouds moving overhead.  

Fortunately, anytime I go out through the front door--so long as I have my phone on me--I get a nice little chime that there is movement detected.  But still, then I can watch myself through the eye of the ring.  It’s very weird--I highly recommend it, but make sure to put it on silent if you ever have people coming over to do your lawn and you have important stuff to work on.  

Speaking of important stuff, i was about to give up a few minutes ago (it’s not 8:40PM).  On Monday: “This webhook should be easy,” I thought; “I should finish the webhook, and clean up the js by Friday at the latest, but probably by wednesday,” I thought (and documented in my monday post).

Once again, I am terrible at estimating!  I mean, in my defense, i had one request going.  I knew that POSTs were a little more complicated than GETs & HEAD’s, but the GET went through.  I did wonder why I wasn’t seeing the HEAD when Trello said that they’d send a HEAD request, but I figured maybe that guide was a little outdated and they were now sending GET’s, because I got a GET.  There was no reason, at least in my knowledge, why a POST wouldn’t come through.

Well, I talked to Micah this morning, and he confirmed that ajax was a dumb thought--i hope i wrote that in my previous posts when I said that I was pretty sure I needed ajax, because I know I thought it--that my convinced mindset was pretty sure that it would backfire and I’d just be embarrassed that I’d even thought that it was necessary.  Because, that’s what happened…

Now, when I thought I needed ajax, i’d read up on it, and was pretty convinced.  I need ajax, because I want it to do background stuff and don’t want my client to be payload rich.  I don’t know why the obvious always escapes me, but I **always** seem to skip the details, which is where the devils lie (or is it lay?  I suppose in this matter, either works).   

The first thing Micah asked me is “What does ajax stand for?”  Me: {deer in headlights}...[scramble to look it up--why isn’t my computer working faster?!] “umm… I read about it, but i can’t remember exactly.”

“Asynchronous *JAVASCRIPT* and XML”  

  I wasn’t doing anything with javascript for this, so why would i need ajax?!  As soon as he said “javascript”, i was again an {embarassed} deer in headlights thinking, “OMG! I’m such an idiot!”  Had I just read the acronym, I’d have known all along, but I skipped that for whatever reason, and when on to read the bold print.  Blah!

Anyway, he also gave me a path forward to seeing the request--and it was there!  So I was definitely hooked, but our server wasn’t allowing it through.

I got to work.  With no success.  But… I have an idea.  

I worked all day to try to get the request to come through, but on the poker server, it would not pass.  Okay, okay, i didn’t spend all day doing that.  I actually started the day refactoring some ugliness that had been driving me crazy.  No doubt, despite the tests still passing, Trello no longer liked my idModel, so I had to troubleshoot and fix that for a bit. Then I worked on the webhook.

With no success…I thought all day that the cleancoders.com project was in front of Poker like a wall that I couldn’t break down.  I felt like I needed to add a line to it, but one I don’t have permission, and two I really didn’t want to from a comfort zone stand point, so i left it alone and tried to puzzle things together with what I had.

Then, a few minutes ago (ya know, after I had a break from staring at the screen), I had a thought:  “Open for implementation; Closed for modification”--the open-closed principle.  Because poker is built on top of CCs, CC should be pretty clean, and I should be able to call whatever I need from it without having to modify it…  A true test for how well we follow our “Uncle’s” principles. 

I shall find out a week from Monday--unless I fail my final challenge which I will head up this coming Monday.   Am I ready?  I don’t know.  As I pointed out a few posts ago, every task seems to take me on average 8-14 days.  For this I will have 7, and I think there are multiple (probably pretty difficult) tasks, so I’m a little nervous, and I’m not sure what happens if I fail…

I mean it’s weird.  There’s no doubt that I’ve learned an immense amount in the last 6-8 months.  So much that it’s actually very scary to know this world, and to be honest, I’ve probably put in the same if not more hours of learning than if I were getting a degree in this--and let’s be honest, if it were me in college doing this at age 18-22, I’ve definitely put in more hours than I would have then.  

So am I ready?  I feel like there’s still so much to learn and to know.  Granted, I know I won’t be released to the world upon completion, but yikes, i’ve been looking through the poker & cleancoders code so much lately, and there are still so many aspects of it that make me think, “OMG! I have no idea what is going on here!!!”  Follow the code; it shows you the path--sockets weird; threads are weirder, but in the end, it’s all manual.  Throughout it all, some one has told the computer to do something, and so, the path is traceable.  Just breathe: Keep Calm and Code On.

