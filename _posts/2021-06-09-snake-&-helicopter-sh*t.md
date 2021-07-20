---
layout: post
Title:  Snake & Helicopter Sh*t
date: 2021-06-09
---

Finally!  After seemingly months of slow progress and non-productivity and feeling like I was failing and falling behind, today I felt productive and like I accomplished something.  I’m not done, and even though I had actually been thinking i might finish today, it was still a progressive day.  And I honestly think that there is no reason I can’t finish this web-app template tomorrow--certainly by friday, but i’m optimistic that it might happen tomorrow.

This feels good.

So, i escalated in stand up that I was a little blocked and thus hopped on a quick tuple with Micah shortly after the meeting.  He immediately found an error that I’d known about--but wasn’t completely sure about. He eliminated my doubts and helped me to know that I did need that line.  Further, he also mentioned that anything I do should include a dev, staging, & production--for this project, I was casting everything to dev due to the nature of the project, but I’m perfectly okay including the rest also.

After that, I explained to him further that everything is where it should be, but when the server runs, none of the files are found.  He asked to see all of my handlers, and I almost immediately knew--like “Oh!  You idiot!  You totally need all those handlers!”, and then I was embarrassed to even go there.  I’d eliminated all of the handlers, again, due to the nature of the project, but the moment he asked and I re-looked at the handlers I’d eliminated, it was obvious.  I mean, of course you need a context-wrapper & just like you would want your oreos wrapped at the supermarket, you should always wrap your browser cookies.

I’d forgotten I’d eliminated those, and as soon as they were back wrapping, I was back on track!

Then I came across the issue of the user, but this app shouldn’t have a user, so while I’m still working out those details, everything works well enough that I should be able to get to a ‘show’ status and then ask about how to more ethically(?)/responsibly(?) handle the ‘user’ that isn’t sign in.  It’s going to have to be more with the connection, I think.

For a long chunk of the day, I spent time on the session.  This was unfortunate, but also kind of fun.  This app doesn’t use a database, so all the calls to the db wouldn’t work.  I had to modify all the tests to handle that differently, and that was actually fun.  Thinking through a ‘mock’ for lack of a better term, database.  Applying confident tests, which would obviously fail at first, and then figuring out how to pass them.  I used an atom, as that seemed the best way to handle it, and in the end, I got them all to pass.  This took a lot longer than I’d hoped, but I felt pretty good about it.

Tomorrow, i plan to put back in the multiple environments and then make a pretty home page with instructions like a README on how to create your own page within the app.

I also want to write a function that grabs everything in the folder containing the custom pages to wrap all of the uri’s.  All of that seems very do-able, and so I don’t see any reason, I can’t get this done tomorrow--unless, I spend too much time trying to be creative with the homepage, but I can manage that.

So yeah, it felt like a good day, and it feels good to have something worth showing within a week.  Next, I need to think about the design of a planning tool.  That will be fun too as it won’t be so socketed across the unknown.

You see, I understand the techniques behind sockets and how they interact with each other on a functional basis, but how the info gets from here to there across the port is still a little complexing to me.  Like, I understand how the server works, and I think I have a good understanding of how a browser works, but they are not physically connected, and even locally, they are not any dependencies, so it’s weird.  Making calls in the terminal is both amazingly cool but also helps to make sense of it, but I still can’t see the path of how a request gets to where it wants to go.

Nonetheless, i can work the data, and I’m increasingly understanding how all the functions work together.

---

Rex:
For the last week, Rex has been doing awesome at potty training.  There’s one big problem though.  He likes to poop first thing in the morning.  Not really a life problem, but it is a sleep problem for me and keith.

See, Rex will wake up at 5/530AM, come into our room and ask if he can go poop.  Of course we tell him yes.  So he runs all the way across the whole house to the potty he prefers, and then excitedly runs back to tell us that he pooped--sometimes he just tells “Mommy!!” or “Daddy!!” “I pooped!!”.

For obvious reasons, we want to reinforce this good behavior, so one of us, each morning, gets the honor of getting out of bed much earlier than we’d have liked in order to go look at another human being’s poop, and then applaud him on it.  It’s wonderful…

I think it was sunday morning, that I zombied over to the kitchen, and was greeted by a super proud Rex greeting me with “Mommy, I did a snake poop!”  It certainly was…  Another time, it was a “helicopter poo”.  To my motherly proudness/disgust, yup, I could see it--helicopter poop.

Leo:
Leo’s favorite nighttime task is “eeee-ahhh”.  Translated, this means “teeth” or more specifically, the brushing of teeth.  Every night, when it’s time to do “eeee-ahhh”, i mention it to Leo, and he gets up out of his seat and with all the excitement scurries to his bathroom shouting “eeee-ahhh!!!” as if “eeee-ahhh!!” were an exciting destination.  It’s very cute.  Sometimes he brushes his teeth twice, and by bushes, I mean sucks the toothpaste off of his vibrating toothbrush followed by either Keith or I forcing him to actually scrub a little bit…

We are lucky that both our kids actually enjoy the task of brushing their teeth.

Oh!  And back to the topic of poop, Leo is now required to wear onesies to school again, because he has decided that his poop is worth reaching into his diaper for and handing to someone or painting with.


my kids are going to hate me one day if they ever read this...
