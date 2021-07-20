---
layout: post
Title: All the Users Show
date: 2021-02-25
---

Once I got the server serving and the client receiving data, I really thought I could get the rest done in like a day, maybe 2, but then again, i’m terrible at estimating.  As i mentioned yesterday, the tests took a couple hours away from me yesterday.  This was not as true today as I’m still kind of manually testing the functions, if that makes sense.  

Today, i didn’t really have any hang ups actually, just got stuck in the data for a bit.  Originally, i’d fed what I thought to be all the relevant data forward to the client.  Then I can to the point where I needed to show the stories, so that meant more data, but wait!  I haven’t the display is not showing and thus I have not tested an non-active users who belong to the rooms.  I have all the info necessary at the client and could manipulate it there, but for some reason, i went back to the server (probably because my mind was already set on going back there to get the stories).

Some of the database functions are acting a little funny and won’t find “id’s” in the entities, so i had to mine through the data and sort that out, at least for the time being.  Got that worked out and got all my test passing on both the clj & the cljs files, so i wanted to run it in the browser to see my craft in action.  But….

Nothing would run.  I kept getting thread & null exception errors, but that didn’t make sense, because if that were the case, my tests wouldn’t be passing.  Additionally, my computer fan was blowing non-stop at max rate and everything started working really really slowly.  

It was toward the end of the day, and I really wanted to get the stories sorted out, so i refused to do what I ultimately had to do--restart the computer…

Fortunately i hadn’t recently updated, so the reboot only look about 5 minutes, but this was after I restarted intelliJ and the servers & the databases at a snails pace due to the processors being at capacity, so by the time that finished, i truly didn’t have enough time to run it, but i did it anyway.

All users show in the display as either actively in the room or not currently in the room.  Cool.  



