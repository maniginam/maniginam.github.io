---
layout: post 
tags: apprenticeship
categories: apprenticeship
title: Idiot to Genius!
date: 2020-12-01
---

Welcome to December 2020!  

Today while I was working I had a really interesting and actually rather technical thought about the work that I was doing that I wanted to share.  I can’t remember what that was.  It’s too bad too, because I was actually rather impressed with myself for coming to that conclusion.  Oh well.  It will come to me at some point.  I think it had something to do with test or maybe java in general.

Speaking of tests, while writing this server, i noticed today that I’ve actually been doing much better at writing my tests.  Every time I started writing production code, I’d catch myself with the realization that I didn’t have a test yet, so I’d stop and write a test.

This was good, because as I was refactoring a bunch today and making changes and adding to my server, I was relying on my tests a lot even though they didn’t always lead to the specs passing.  I was happy to see that this practice has started to become a habit.  

As for the server, well there was actually decent progress today.  Again, i was hoping to finish it, but at least I got some specs to pass.

At about 11:30, i was about to give up on the jpg spec and call my mentor, but i had to pee, so I came in side to do that first.  While that was going on, i had a thought—i keep trying to buffer the image and get the binary, maybe I’m supposed to just keep it as a file.  “Alright,” i thought, “I’ll try this one last thing, and if it doesn’t work, I’ll admit to my brother that I’m an idiot and too dumb to figure this out.”  

I went back to the trailer, was about to ping my brother as I’d forgotten my plan in the ten second walk from the house to the trailer, and then remembered to try this new plan.  It took about 3 minutes to write, my tests were failing horribly, because I still wasn’t sure what the correct output was, but i went forward with running the specs anyway.  I was shocked when i saw all green and no weird foreign characters on my screen!

“What?!  That worked?!  Cool!  Let’s move on to the png!”  That one passed immediately after I modified the code to swap out the file type.  The pdf gave me a little trouble as it wasn’t quite working with the code I had as it should have, but I pretty quickly realized the problem there—it was just a path issue.  Fixed that and it too passed!

I finished the file specs.  On to the form.  I was very confused as to why the form was already populating in the browser—I’d actually noticed this last week while I was showing my server to my dad, but I didn’t really think too much of it and kind of passed it off as an automatic thing with HTTP.  Of course, that wasn’t the case.  The fact was that the code I’d written days ago to get the index.html file to work, allowed the form.html file to work also.  I was pretty happy with this discovery and took back my early thought about being an idiot to instead believe that in fact I am a true genius.  

I even got the first forms test to pass, but to be honest it’s crap.  It passes, but without any real logic in there.  I found that I’d made the specs pass, but there’s no room for an variability in them, so I’ll need to improve that and make it actually usable tomorrow.  

Seems like a big gap in time there form 1130 when i solved the jpg to ending the day with the form.  I’m really not sure what happened to the day, as I was working pretty hard the whole time, but I did spend a little while refactoring a lot of my production code as well as the tests—getting rid of unused items, extracting recurring functions, etc.  

While I’ve had this hope everyday this week, i think it’s more realistic this time that I should be able to finish everything up tomorrow.  I think I only have 3 more specs to pass, so yay!

