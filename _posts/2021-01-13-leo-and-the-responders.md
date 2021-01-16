---
layout: posts
title: 'Leo & the Responders: One Responsibility'
date: 2021-01-13
---

Yesterday, I ended the day confused as to why java would not work with my map.  I suppose it would have helped if I’d in fact sent it the correct map—that being the response-map instead of the ttt game-map…. dumb dumb dumb…

Anyway, i figured that our first thing this morning—it’s amazing what a fresh mind can rapidly do.  Then I took the serverName out of all the responders and now have the connection adding it.  This required several tests to require changes, so i maintained those with the modifications.  

Then i worked on taking out the server connection that had originally existed in all my webttt tests.  That required some more mods to just about everything.  Then I had to think about how to make the FileResponder of the HttpServer work for me when I needed to serve files.  It stung me to even consider having the ttt-responder call the FileResponder, so i pushed that out of mind immediately.  I also wiped out the idea of extending the FileReponder—that too would be ugly, but there’s no way to send it to another responder.  Unless, and I’m not sure if this is the best way to do it, you return a new request-map to the router with an indicator that it is a request and not a response thus should not be sent forward to the connection as an output.  Then within the router, there exists an auto-recursive(?) loop that upon receiving the response-request-indicator, re-calls ‘route’ with the new request map, thus sending it to the FileResponder, so that no responders need know about any others—it’s a lonely world for a Responder; surrounded by friends whom they know not exist, but they have a job to do.  One job, and that is to respond.

Alright, I’m off to bed.  It’s been a long day of working & cleaning & packing.

***

Rex:  
Yesterday, Rex told me that his favorite friend at school is Archer—thanks to COVID, i did not know which child archer is…. Today, he told me that Archer was crying at school and that he did not know why, but did say “but, I wiped his tears away”.  

Have I mentioned Tuesday?  Whenever, I ask Rex to do something that he doesn’t want to do, he tells me “no!  Later!”  “When?” “On Tuesday!”  Or simply, “no, not today!  On Tuesday!”.   Sometimes it is Tuesday…

This stemmed from dance being on Tuesday, because I explained to him that he goes to dance on Tuesdays.  Now everything happens on Tuesdays, but to him, it is never Tuesday.  

Leo:  
I need to watch Leo closely these days.  Obviously this is true of any one year old, however, Leo has taken upon himself a responsibility.  It started with diapers.  After changing his diaper, i would had it to him and tell him to throw it away.  He would smile with glee, take the diaper with both hands, walk it to the garbage, figure out how to hold the diaper with one hand so that he could open the garbage, put the diaper in it, close the garbage, look at me, smile, clap, and say “ahhhhhay”.  He’s very good at his job, and he takes his responsibility very seriously.  

I was impressed the other day when i saw him find a dirty diaper that had been left on the floor in the angst to get out the door (don’t kid yourself, it happens…), he walked up to it, picked it up, and through it away without any direction.  Similarly he has done this with other garbage that he’s found on the floor—paper, envelopes, tape that he got very mad at because he could not get it off his hand, but now he’s throwing away more than just garbage…. He threw away one of my favorite pairs of chopsticks.  He’s thrown away toys and who knows what else!  Like i said, i need to watch him closely.  

