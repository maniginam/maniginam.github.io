---
layout: post
Title:  Potty Talk
date: 2021-05-14
---

Guess who went both pee pee & poop in the potty today?!

Go ahead.  Take a guess.

That’s right!  My little Leo-Meo went peepee several times in the potty this evening--over & over, he just kept wanting to sit on the potty and put more pee pee in it, and of course, every time, we all cheered for him.  Then he came back again, sat himself down--he doesn’t want help getting on the potty--and started intently concentrating and making little grunts.  I let him be.  Then he got up, turned around, bent over, and waited for me to wipe him--he does this every time he pees--he just wants to be wiped afterward.

I checked out his work in the potty, and sure enough, there sat a giant Leo turd!  I called Keith over, and we cheered him and looked at each other with knowing understanding of the white elephant that now sits in the house.

We made sure to praise Leo abundantly, but we were careful to not make Rex feel bad.  Rex has been doing really well at going pee pee in the potty several times a day now, but continues to have concerns or maybe fears that I cannot determine about going poop in the potty.  He just really does not want to.  There’s no doubt that Rex using the potty everyday has played the major role in inspiring Leo to want to follow the lead of his big brother; plus Leo hates being in a dirty diaper.  He will always come to me immediately to be changed, nonetheless, without shaming him, we are definitely hoping that Leo doing the two, might help inspire Rex that it’s not so bad.

Anyway, enough potty talk.  This morning, I escalated to Micah that I was blocked on the trello post handler.  He, pretty quickly, put me in the right direction.  There were still a few issues to figure out, but then using curl as my main tool, I was able to get my post requests through and receive back a 200 response.  So, I pushed it remotely to try it with the real thing.  The requests were being received, but the syntax of the json is not the same…

That was a whole thing to begin with anyway. Despite everything else being in good map-string form, the body came through as a ByteInputStream.  I’m fairly certain from my research that this is the fault of an upstream handler.  I was able to work through it with the curl requests, but had one failing test that I”m not sure how to feed.  Regardless, what is working with my curl requests, is not having the same result with the actual requests coming from trello.

Nonetheless, good progress.  I probably am slightly at risk of finishing all my tasks for wednesday, especially because I’m not sure how much time I will get to put into any thing this weekend, so I will get this escalated as well.

I spent a small portion of the afternoon then working on ricracroe.  Late last night, as I was working through the minimax, i had one of those bowling-kata epiphanies that my father has mentioned in so many of his classes.

I was allowing the tests to drive.  I started with the easiest--which, I’d always thought I’d done before, but i always started too vague.  In the past, i’ve also tested each player separately, but when you play a game backwards, the players swap and have equal opportunity for mistakes, so the tests can just flip.  And then it happened.  Six boxes left.  There were too many options.  I now needed the main minimax, so I set that initial test up.  Passed it.  Set the second one up.

Shoot, now I need a function to tell me if the game is over.  Set that test up, and that’s where I left off this afternoon.

The flow of all of this was pretty amazing though.  The tests told me what I needed to do next.  I even caught myself as I was writing the game-over? function while trying to pass the minimax test.  I reluctantly because it was time to start closing up, stopped myself, backtracked, and wrote the test for game-over.

What’s been amazing & epiphanizing about this though, is how much cleaner everything is coming out.  It’s much more direct, and I haven’t even written the game yet!  So based on this, i will develop the game, on what the main algorithm needs as opposed to making the algorithm fit the flow of the game and take whatever the game gives it.

I will say that swapping from clojure to class-based ruby, is tough on my fingers.  They just don’t catch up very quickly…  It’s a lot like going to french class right after spanish class.  You have to recalibrate.  

