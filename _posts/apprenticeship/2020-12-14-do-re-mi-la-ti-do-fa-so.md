---
layout: post 
tags: apprenticeship
categories: apprenticeship
title: Do-Re-Mi-La-Ti-Do-Fa-So...
date: 2020-12-14
hide: true
---

So something weird happened as I was developing my server today.  Actually, i think i noticed it yesterday, but it became more evident today.  

I started in the beginning—you know, a very good place to start.  I got the first specs to pass.  Then it was on to connecting the sockets.  I got the server socket going and wrote a test to connect to it and make it do stuff.  Those worked. 

So then what?  Well, I needed a request—or i needed to parse a request of bytes into something more usable.  So i did the request parser with its own tests.  After that I needed to respond to the test, but how was i going to get the request to the responders without violating any SOLID principles?  I knew the flow already, but I couldn’t write tests for it yet, because in order to have those tests perform correctly, I needed to build the response case first and test the response builder to make sure that whatever transformer the request went through already had a tested and working output.

I commented out my transformer tests, skipped that part, and jumped forward to write the response builder to ensure i had working parts.  That was weird, but it was necessary.  Finally, i got all the parts of the currently required response output builders passing so that I knew exactly what both my requests & responses would look like.

The other weird part of this was that to build my response tests, i actually used my already passing request builders to build the requests within the response tests.  That was a lot of words, but it was very cool and felt very natural and obvious.  It also seemed more controlled in the sense that by building the requests using the code, i ensured that the response inputs would be exactly as they would be during run time.  Very cool.  

Then i went back to finally connect everything through a router.  I did the middle last and again when writing the router tests, i used the already tested, and thus accurate and functioning, code to write the tests.  It was kind of amazing and a lot less work than trying to write them all out by hand and then having to change them later as the production code evolved—i wouldn’t have to because the same functions would be called with the same inputs, so there would be no need to change the test.  This is very unlike how i did it the first time and super unlike how I’d gone about tic tac toe.  

It was a lot of fun too.  The whole testing code, then using it with confidence that it already worked to test later code.  Maybe I’m overly excited about it all, but it certainly was eye-opening and just made sense.   

After all of this, i got three more of the specs to pass through the connection.  So cool!  

So I’m making good progress, and honestly, the rest should be easier since the core is written and now i just need to add on classes for that core to process.

***
Rex:  
Yesterday at the airport, American Pie came on the radio.  Naturally I started singing the chorus as it came over the speaker, but then i heard someone else singing along.  I looked down in amazement that Rex was singing the entire chorus (in his own similarly sounding words).  The chorus ended and he continued singing the next verse.  Then i hear the “bartender” say, also in amazement, “is that him singing?!”

I told him that I think so.  Then the girl at the counter exclaimed that it was the cutest thing she’d ever seen.

I was very pleased and impressed.

Leo:  
We had Taco Bell for dinner.  I went to give Leo a bite of my burrito.  He took it from and proceeded to eat the rest of my dinner—he’d already eaten all of his.  That boy can eat!  He ate three pieces of pizza the other night.  
