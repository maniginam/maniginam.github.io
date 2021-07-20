---
layout: post
title: Barking at Neighbors
date: 2020-12-18
---

Well, i goofed…

I had a super productive morning refactoring and cleaning up my server.  I saved the ping & the reg exps for last, which might have been a mistake…. Oh and i forgot to commit before i moved on to those, so I’m in a bit of a pickle now…

I tackled the ping first, and I’ll be honest, i didn’t make it to the reg exps.  I feel like i need to add another thread to the responders to allow them to respond to simultaneous requests, but I got lost in doing this.  I shouldn’t have, but i did and may still be.  

The run method in the threads don’t return anything, so I’m stuck on how to get the information out of them.  All the other threads I have don’t return anything to the thread creator and instead act completely linearly despite each being a branch.  This one branches—i think—and plays leap frog and returns a value. 

I tried to make start return, but that didn’t really work either.  And it’s weird, because within the thread, it’s performing correctly (i checked with prints), but the response is not getting back to the responder.

***
Brusly: 
Brusly had a great day today!  She’s still having trouble eating & walking, but today was a much better day than the last two.  She even barked/howled/coughed(?) at a neighbor, after which i praised her as a good girl out of excitement at her energy and natural desire to then realize that the neighbor probably thought it as crazy for praising her for barking at him.  Whoops.  

