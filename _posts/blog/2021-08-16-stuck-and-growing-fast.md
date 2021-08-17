---
layout: post  
categories: blog  
tags: blog  
title:  Stuck and Growing Fast
date: 2021-08-16
---

Well, I’m stuck…  I felt like I’d made great progress on the EPIC side and that I had things fairly nicely decoupled, but then I went to implement the same thing on the Poker side, and whoops, circular dependencies because of one function that I need in the room!

I’m actually taking this as a sign that it is not decoupled well, but if it’s not (and even if it is), I’m stuck without changing Poker.  The only other thing I can think of to do is have the client-side make all the calls through the websocket, but even that would be kind of ugly with poker code throughout several namespaces in EPIC and client-app code thoroughly throughout poker when it comes Poker’s turn to send data to EPIC.

---

Rex & Leo:

All my boys are back home now after their exciting & busy weekend up north.  They landed last night just before midnight and got home around 1am, so they were tired today.

They came home much more grown up than when they’d left.  It’s amazing how much change takes place in just four days when you’re in your toddler years.  Leo came back pronouncing words much more clearly and had picked up several new words--he got very frustrated with me this evening though, when I couldn’t understand a word he wanted me to draw on his chalkboard--that was an event.

And Rex’s speech fluidized tremendously over the four days.  To be able to see/hear a change in just those short days is very eye-opening as to how much they change each day.  

