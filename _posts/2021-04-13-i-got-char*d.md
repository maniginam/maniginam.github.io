---
layout: posts
Title: I got char*d
date: 2021-04-13
---

Ending a little earlier today--mostly because, I’m struggling to keep focus at this point, but I think I actually made some good progress today.  Am I caught up to where I’d like to be?  Absolutely not!  But, still, progress was made.

In fact, something weird happened this evening.  By no means am I a pro-C writer after--well I’m pretty sure everything I did yesterday was actually C++, so we’ll go with about, yikes, it’s still been like 16+ hrs all in C since yesterday at 11PM, so--16hrs of writing in C, but something weird happened.  All day I was, well not utterly lost, but I was struggling to organize. 

This afternoon, I think I was pretty much just a button pusher as my mind was melting and my eyes were glazing & starting to burn from staring into a light bulb for going on 10+hrs.  Finally at 730, i broke to see my boys.  

Rex wasn’t feeling great last night.  In fact, when I saw him, his eyes were very red and he was slow-moving--something was wrong.  I wasn’t sure if he’d been crying a lot or if he was tired.  I laid him down in my bed, and then felt him.  He was hot!  

Immediate panic of course sank in.

As soon as he saw me he asked to go to bed--my bed.  Then all he wanted to do was snuggle, and he curled in a ball that’s not normally like him--usually he sleeps sideways or in all angles at once if possible.  So yes, i panicked!  First out of concern for him--i mean i was going to take a 10-15 minute break yesterday to say hi to them, and then get back to it, but I ended up spending like an hour with him making sure he was comfortable & checking his temp.  And then I panicked that I might keep him home today and thus how I would explain that and if I would get that day back for unforeseen circumstances under which I would have promised to not even think about my challenges as that would be unfair.  If it were any other week, there’d have been no question.  But we decided to play it out, and by morning he was cool and back to normal--not sure what causes a 6 hr fever, but I triple checked him this morning.

Anyway, back to my point (if I had one--i’m pretty tired).  Oh right, 730, i broke to see the boys.  I gave them a bath, and I thought I was done at that point--staring at lights all day isn’t great for the head or eyes I imagine, but i just basing a that off of how I feel not true data.  

Once they were in bed, I decided “just a little more”; “just get the board & the wins done, because then the rest is, well, just the mini-max”.

So then go back to the first point, something weird happened when I got back to it.  I started to “C” straight.  I suddenly (kind of) understood the flow of the “C” (i’m not going to stop with the puns, so don’t ask).  My moves & edits started to become deliberate instead of purely “well, maybe if I put this asterisk here, and move this over here to this weird .h file, things might work--nope, okay, let’s add another #include and put everything back in the root directory!”.  

Nope, my moves had become deliberate, which in essence describes at least a little understanding.  I’m probably wrong, like I have been so many times, but .h files seem to be interfaces?  They are where I can put common functions that other namespaces(?)/classes(?)/CFiles(!) can use/implement(?).  Once I got that (among other things), I was able to make organized moves.  

I had a bunch of tests passing and was making decent progress.  Then i got burned by the strings--no, no, no, wait: I didn’t get burned by strings, I got char*d! (Ha! come on! That one’s pretty good!  Can’t be the first time it’s been used.).

A few hours ago (like 9), i decided “why not just let everything in my struct be an “X” or an “O”?  That would make things easier for sorting.”  

Ha!  Until you have to use the strcmp.  I don’t know why, but I don’t like it!  

Nope, I do know why.  “==” works just fine and works great for ints, floats, strs, chars, maps, seqs, anything your heart could desire if you had two that you could compare.  This is not the case in C.

In C, “x” != “x”, nope, they must be compared with strcmp.  Super annoying when I forget that I have strings in my board & not ints.  Ugly code too.  I wrote a whole ugly nested if statement all with “==” only to realize, “OMG!  I just got char*d again!”  (that’s a paraphrase since I didn’t come up with that pun until well after that actually happened).

So I changed everything to ints--ints don’t burn or char*--unless you light them on fire with quotes.  

Now, I have a segfault.  No clue why or where.  Everything compiles beautifully, and the program even runs [itself into an infinite loop], but the tests are angry and C’ing red--except they produce no color or information about memory failure for that matter.  Actually, I shouldn’t complain, and in fact, my complaints are really just in humor.  i’m glad I was able to find a test framework that I could get running and that does actually give me some insight into problems--i was about to test manually, which I’ve never done, but decided I felt confident enough to do if I had to.

Enough rambling for one night?  C you in the morning!


***

Rex:  
Rex was eating a peanut butter bagel for dinner.  I told him it looked delicious despite the fact that I do not like peanut butter.  As soon as I said this, he turned back around the couch to see Keith and said, “Hey, Daddy?  Can you make mommy a peanut butter bagel too?”  Such service!  I shouldn’t have lied to him--i really don’t like peanut butter!

Leo:  
Upon seeing me tonight, Leo grabbed my face in a full-on grip using all of his razor sharp nails and squeezed my cheeks until I cried out and pulled him off of me.  As I did and looked at him to say “Ow”, he full-open-mouthed, fully-indented-dimple, full 12 teeth showing, laughed!  So I did too.  

Rex, then asked if I could come closer so he could kiss it for me.  <3

I’m missing them this week--a lot, but it’s okay.  This will be better for them.  
