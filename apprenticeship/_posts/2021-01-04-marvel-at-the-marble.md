---
layout: post
Title: Marvel at the Marble
date: 2021-01-04
---

Back to single digit months!  Happy New Year!  It feels good to be in the new year, and I’m no doubt optimistic about this year.  

On the eve of this year, I was asked my new year’s resolution or my goals for this year.  As I’ve mentioned, there is a lot going on so I had to put some thought into it, but ultimately, my goals probably come as no surprise.

1.  Be a good mother.  For the most part, I believe that I am a good mother.  At times, i do get frustrated with the boys, and while I’m pretty sure that is normal, I try to exercise patience with them and do the things that are best for them and that they will enjoy and make them happy. 

2.  Become a software developer.  I’ve hit a few slowing challenge-bumps the last couple of months that have made me feel like my progress is slow or has slowed and that have caused me my first feelings of discouragement in this endeavor.  Every morning I get up and keep on trekking forward to overcome those feelings and push through to get back on track.  Today was an example of that.

This morning, I don’t know if I was discouraged or just felt like i couldn’t figure it out, but about mid-morning, i caught myself in a bout of procrastination due to avoidance of a task that I just has no clue on how to do—get my GUI to show in the browser.  It seemed an impossible task despite the fact that every website I’d been reading said it was possible and had examples of applications (not videos) running.  

I caught myself, immediately stopped my browsing, went outside to get a breath of fresh air, and think about the task in front of me in the most basic way while considering the lessons I’d learned from building the server.  I felt that I should probably just call my mentor and tell him i can’t figure it out—i am supposed to ask for help after all, but i wasn’t ready to throw the towel in use yet.  

What i knew is that websites are static, meaning that they are a moment in time, not a time-lapse.  Nothing happens on a single page even if it looks as though mad-calculations are being performed.  The internet is based on a series of requests and their responses which contain bytes of the information requested.  

I learned how to do multipart requests and forms as well as files.  Perhaps, it’s that easy, and I’m not meant to run the entire application within the browser—especially seeing as applets are even allowed in most browsers today.  

I went back to it.  First, I got my game to start and fully run from the server—though it ran in the original java GUI and seemed a separate process.  Then I had another idea.  Get a snapshot image of the GUI and post that in the browser…

I commented out pretty much everything I’d done last week and went back to having one request that returned only a file—ttt.html.  Within that I embedded an image—a tic-tac-toe board graphic created by the GUI every single iteration of the loop. 

That went horribly wrong and I kept getting exception errors that jogl or java or whoever couldn’t do it because “g” was null.  I read a little deeper on the function i was implementing and saw that I needed to run a macro with it so that the colors didn’t get messed up.  Now, why this happened with g and not with r or b, i don’t know, although it may have also been the PApplet thus proving that applets in today’s browsers are dead.  Even this may all be wrong, and I can’t help but to smile at the fact that I can see myself down the road when I’m an expert coder, reading this smiling then too and perhaps giving a little chuckle at how dumb & naive i currently am in this world.  

I figured the error out somehow, another one immediately came…. Got that one too—don’t ask me how.  Then I had an image.  But it wasn’t saving right.  I did some troubleshooting and found that one of my main functions wasn’t getting called.  Why? 

I’d made a change last week to have my board-setup go directly to a status of playing, so my board was never created thus the GUI was starting over every time it was called.  

Then i pulled up my blog site code and read through some of the html & markdown.  I had an idea.  It didn’t work…

I tweaked that idea for the next twenty minutes or so, and then finally when i changed the content-type back to text/html, i ran the server, and I almost fell over, when i saw it there!  My ttt board was there in the browser smiling at me.  I did it…. I got my board into the browser.  

Now to do this, i had to stop the game from running, but I think i can get that back going.  For now, I’m pleased that it is showing up, and even looks pretty—kind of.  

Tomorrow at stand up, I will ask my mentor for fine minutes to check my work and make sure that I am on track and doing this correctly.  I’d hate for Thursday’s iteration to come and for me to think i have everything working only to find that I’ve done it completely wrong—that’s happened before.  No sense working diligently on a task if you’re doing it wrong, so it’s probably good to touch base and make sure that I’m on the right track.

***
Rex:  
Rex will be 3 tomorrow!  I cannot believe this amazing kid has been in our lives for three years!  I also cannot believe what an awesome kid he is.  He is so sweet and so smart, and just a wonderful little boy.  Tonight he was using filler words (so…. um… mm…..) because he didn’t have anything to say, but desperately wanted to talk, so he went on to tell me that the kitchen has lights on.  Yes it does. 

He also got a marbleworks set for Christmas that I was very nervous about since Leo eats everything and would marvel at the opportunity to swallow a marble.  Rex asked me yesterday very pleadingly to set up a marble run for him.  With angst, i agreed to set up a small one for him—the set made me feel very dumb as it actually required a lot of thought to get the slopes right so that gravity could do it’s job.  But in the end i got him a small slide working to land a marble in a cup.  I explained to him how dangerous the marble would be for Leo and that he cannot let it go on the ground, and if it does he needs to get it or tell me he can’t find it right away (I’m never out of view of this set just in case).  The kid owned this job.  Any time the marble fell, “Mommy! The marble fell, but i got it.  I’m going to get it!”  He took his responsibility of not letting the marble stay on the ground seriously and with a lot of pride.  He surprised me with his attitude and responsibility for it and he made me very proud!

Leo:  
Leo has been awesome at blowing kisses to people.  Starting sometime last week or the week before, he suddenly started at random times and frequently, turning toward me, grabbing my face, pulling his mouth to mine, and making a loud and emphatic “mmmmmmmmmm Mwah!!!”.  It’s super cute and nothing is better than a baby kiss as slobbery as they may be.  

Leo also has earned a responsibility in the last week or so—throwing away his diapers.  After a diaper change, I give him his dirty diaper and tell him to throw it in the garbage.  He stands up, smiles at me, takes it to the trash, opens the trash, throws the diaper in it, closes the trash, looks at me, and claps while exclaiming “yay!!”  He also took it upon him self to pick up little bits of wrapping paper after opening presents and throwing those bits away all on his own without being prompted.  This kid too is very clever.  
