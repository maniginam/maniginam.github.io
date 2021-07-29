---
layout: post 
categories: apprenticeship
Title: Handle Your Handler!
date: 2021-03-02
---

Well here I am building yet again.  It was about 1PM today when i was surprised that i only had one thing left to do--secure the authorization of who was accessing the admin page.  That seemed easy enough, and I was excited that i might actually finish something with a little time left in the day to perhaps pick up the boys a little early (or finish unpacking my closet--or make a home-cooked meal; any of those).  All my tests were passing with breezy colors, afterall, and I’d committed several times, so things were looking good.  Then i realized, i’d forgotten to run the browser...

Before one of my previous commits, i know everything had been working, but i’d done a lot since then--mostly just refactoring, but what did i refactor that that maybe my user count wrong & my stories not show!  Argh!  Why would anyone ever refactor?!?!?!?!?  If it ain’t broke; don’t fix it!!!  I’m saying that out of frustration not true belief--ugh...refactor til you drop!

Ah-ha!! Found the problem!!  It was in my refactoring of the handler.  One must handle his/her handler!  This handler doesn’t like doseq!  Can’t really blame him--so many side effects!

Ok, i’m committing.  There’s still an auth problem, but i’ve got it recleaned up after checking out a previous commit and kind of manually merging them…  Yike!  It--i won’t say what time it is, but it’s well past 3PM when i thought I’d be done and the boys are home, fed, & in bed.  This auth thing will finish in the morning.

***

Rex:  
We got Rex like a 9x5’ city run with a construction site building skyscrapers and a farm & school & store & gas station & mechanic’s shop--this kid could not stop!  He was in carpet heaven!

Leo:  
Leo had a nice steak dinner and then to show me how much he enjoyed it, he helped himself to some dog food as a nightcap… (\*\*eye-roll**)

***

Nope, handler was not the problem!  It’s the authorization--or some combination of both--i know, finish in the morning, but i had to try it… NullPointer--i don’t think the parameter i need are recorded in the database as I’m expecting them to be…  tomorrow!

