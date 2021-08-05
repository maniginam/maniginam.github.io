---
layout: post  
categories: blog  
tags: blog  
title:  Cats VS HTTP
date: 2021-08-04
---

When it comes to skinning a cat (what a terrible metaphor), there are apparently a lot of ways to do it.  For example, cats don’t sit still, they have sharp and irritating claws when they scratch, and they bite after only a moment of belly tickles, so the task is not easy.

HTTP & cats have a lot in common.

Although HTTP doesn’t seem to have skin; just a head and a body.  Still, there are a lot of ways to achieve the desired result.

Regardless, whether it be cats or HTTP, I have to imagine that with experience one learns the best, most efficient, and safest/most secure way to achieve said goal.

For the last week, I’ve been working on linking Poker & EPIC.  Last week, i began the process with the clientside of EPIC making a websocket call to the EPIC server, which then sent a request to the Poker server, which returned the data to the EPIC server, which finally gave the sorted data back to the clientside.

What?!

Yeah, that was a mouthful even just writing it out--trying to explain it today to Micah felt about the same, but he followed.

Later in the week, I felt that this was incorrect, so despite having it all working, i opened a new branch and went about it another way and then yet another way.  Finally, I got on a call with Micah today to tell him all about my trials and get his expert opinion on which way this cat should be skinned.

Turns out, it was the original way I’d done it with a little extra complexity.  Right in front of him (or rather over screen sharing), i stashed my branch, swapped back to my master branch--where I’d saved all my original work---and confirmed through that.  He seemed a little stunned with this possibly over confident move of mine, that I’d “deleted” all my work.  It was a weird feeling that not only was it not painful to stash my work with the possibility of not being able to retrieve it easily, as git sometimes makes stashing hard, but this move also felt really good that I was able to get rid of a bunch of bad messy code and go back to what had been working.  The work and effort didn’t bother me--nor had when I had to stash two months of work in Trello.

When something isn’t working, the best this to do is just stash/trash it away.

I spent the rest of the day focusing on the tests and building the connected interfaces that I needed, and suddenly, voila!  Everything was working again--but now even better and I had extra security checks in there.

This week I learned that there are a lot of ways to get the same desired outcome.  I was never blocked or stuck on the task I was doing, but I was stuck at a multi-tined fork in the road for which way to go.  This is where experience is very important.

For someone as novice as I am, it would be very easy to just go the easy route--the route with the least immediate resistance, and I could get the job done doing so.  But just because a path starts out “easy” or quick, doesn’t mean that it stays easy.  While it may be a shortcut, there could be some unforeseen, rough terrain ahead.

When it comes to those times, I think it is especially important to ask those who have walked the path before.

