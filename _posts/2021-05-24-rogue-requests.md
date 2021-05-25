---
layout: posts
Title:  Rogue Requests
date: 2021-05-24
---

Ok.  So I’m not discouraged in the sense that maybe I don’t have the capacity to even be able to do this.  I’m frustrated right now, and perhaps I’m discouraged in the sense that I feel super slow.

I know I suck at estimating.  We’ve talked about that immensely.  I know that when I’m estimating, I consider all foreseeable tasks that may or may not arise and I consider what I think would be a ‘reasonable’ time-frame for said task.  I don’t try to act like superman, because, well, one I’m not him, and two, I have two kids at home for whom I actually need to be super-mom--I’m failing at that too by the way in case you were wondering.

I mean, the story is: Do this seemingly little task.

Okay.  I agree it seems seemingly little, and ya know, it probably is little.  Now there might be a little javascript involved (maybe) or some weird responses from the T server, but even with those things considered, the task is agreeably, pretty small.

My first task this week was to re-do/refactor last’s weeks work.  I didn’t know that it would be poor practice to use the given information from the trello requests, and so it was requested that I refactor it by receiving the request, kindly thanking trello for their request, and then requesting back all the information they’d just given me plus more.  I don’t think this is absurd.  I think it is safe & much more secure--i will think about these kinds of things going forward.  However, this was a ‘freebie’ add-on to the additional work to be done this week, which I also understand, and it should have been easy.

I knew what the request looked like.  I knew what the response looked like.  I just had to parse & compare those.  So I did.  I think it was Wednesday night that i did the first iteration.  I got most of it all working again, but I’d made an assumption--that trello would give me the old name of the card.  That was actually dumb, so while that worked for adding & deleteing; not so much for updating.

I could use the id’s.  This required a schema change, because why would the room have the card-ids?  It wouldn’t.  Ugh.

Ok.  Got that situated.  Funny stuff started happening…

Exhibit A: One story add--all good.  Two stories--stories were gone.  Three stories--somes stories add were added twice.  Four stories--gone again.  Five-stories, well, suddenly, I had like 18 stories.

Back up.  Let’s get it working and then let’s test.

Got it working.  Confirmed it was working!

Worked off of that working information to write the newest code based off of the card id’s.  Tried it.  It worked, but I had a terribly ugly function!

Tests running.  Refactored for like an hour, because it was really a yucky & massive function.

Tests passed.  Cool!  And it looks good!

Let’s try it!

I’d copy & paste, but repeat code is frowned upon, so please reread Exhibit A.

Of course, because I’m working within a system that requires commits, I’ve refrained from committing as I might normally.  Undo, couldn’t get me back far enough.  Even if I had committed, this task requires so many commits just to try everything that I never would have been able to found where I was, so…  git hub, find the one where it worked, copy, paste, and, start over--yay!

I’ve learned since that it is the equality that it doesn’t like--well, i kinda learned that earlier, but this time, all my tests were passing **and** I was deleting all webhooks everytime so that I wasn’t getting rogue requests messing up my game--elimination of variables really.

Go back a little to get rid of the equality lines--ugh!!!!  It won’t go back that far.  I’m stuck with equality!!!!!  ***eeerrrr***

Work to get it back to where it might have been last working.  Test passing.   Try it.  All works.  Okay.  Cool!

Passed life reiterating in my head: “If it ain’t broke; don’t fix it!”

But I have to!  It’s so ugly.

Practice tries more often.  All works.  It’s a little better, but I still hate it, but just leave it, because I have two other stories I need to complete and it’s already late tonight!

Ugh!

I don’t know.  Maybe I do suck at this.  I don’t think I do, but i do think I’m slow.  It’s not that i can’t figure things out; it’s just that it takes me a little while longer than I think it should.  This is frustrating.


---

Rex:

We took Rex to the zoo yesterday with a friend of his from school.  Oh man, these kids went hard!  I seriously think they ran like 3 miles a piece--Leo too. Rex did okay at listening, but got really upset when he hadn’t listened and I had to talk with him about it.

A lot of running around can make a kid need to poop!  So that evening when we were home, Rex asked to go outside to poop, because that’s where he poops at home--i know; totally not ideal, but it’s a step out of the diaper.

Then I asked him if I could put the potty outside, and dad was very encouraging of this.  Rex said no, but i set it out there anyway.  I guess he decided to sit on it, and when he produced, he called us over excited!  He recalled very well that if he went poop in the potty, he would get to go to walmart to get a new toy!

Keith & I ran over all excited to see a very small turd in the potty.  Nonetheless, this was progress and, we had not set a specific quantity or size of poop that would earn a trip to walmart, so we praised Rex, and told him he was a big boy now and so could wear big boy underwear as Rex & I went to walmart.  I hedged us a little bit and told him we would get him three small toys--one that he could have tonight, and one for each of the next two times he pooped in the potty again.

You might be expecting the big-boy underwear to be a disaster.  It almost was, but Rex did awesome!  I saw him wanting to go, and reminded him that he’s wearing big boy pant and can’t go in those.  He nodded with understanding.  When we got back home, he was clean(!), and he asked to sit on the potty outside again.

I won’t go into the details…  I’ll just say that he did a ***very*** good job.  And of course, earned another toy…  I’m feeling a little cheated on this, but we are very proud of him and I think he’s proud of himself also.

This was a big accomplishment for him, and he knows that he has one more toy (a bigger more awesome one) waiting for him for the next time he dumps his dump truck (sorry...he loves trucks).

Also, he made me laugh tonight as he was eating just the bun of a hamburger.  I told him that if he wanted any more blueberries (these kids are obsessed with blueberries--and really any berries of any kind), he needed to eat some of the ‘sausage’ of the hamburger.

He kind of picked up the 1oz patty, set it down, and told me “But I actually just can’t lift it.  It’s too heavy for me.”

Leo:

Leo Leo Leo.  So attached right now.  He wants to be held, so I hold him. Then he desperately wants to get down and do his own thing, so (perhaps to my relief) I put him down.  He immediately regrets this decision, and blocks me from doing anything else, because he has realized that he actually does just want to be held!

This kid had a blast at the zoo yesterday. He loves Rex’s friend from school, and just follows the two of them around. It’s very cute.

Whenever we’d get a little behind the group, I’d encourage him to run--because, at zoo, he did ***not*** want to be held and carried quickly at all. No, he wanted to walk/run regardless of putting us a half mile behind the group. So yeah, I’d encourage him to run faster, but saying “Let’s Blaze!”. Once I did that, he just went! Every seven steps or so “Ayyyyye Bayzee!!!” and then he’d do this tiny adorable run/fast walk with head first--over & over & over.

I also wore him out with this friend of Rex’s on Saturday. We went to their house in the late afternoon after they’d both refused naps. We were there for maybe two hours so they could play in the kiddie-pool.

On our two minute drive home, Leo passed out! And I don’t mean, lightly fell asleep. I mean, he was out! Like I took him to bed, got him out of his wet clothes, put new clothes on him, and he did not budge! Unlike his nap only hours earlier where I tried to put him to bed already asleep, and upon being set down every so lightly, he woke up with a vengeance against me for trying to put him in his bed. 

