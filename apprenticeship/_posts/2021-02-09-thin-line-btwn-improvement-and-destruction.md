---
layout: post
Title: The Thin Line Between Improvement & Destruction
date: 2021-02-09
---

I would think that most, if not all, programmers would agree that the most frustrating issue in developing is vague errors.  I also realize that any indication of what might be causing is probably also a blessing, as I imagine there was a time when no indication or cause of failure was ever reported leaving the programmer to have to troubleshoot without any kind of map.

Nonetheless error messages indicating a failure to compile without any notice of when or where or why is super frustrating.  I had this happen yesterday, and then when it was ready to report out with a fully executing program *and* 100% test passes, my mentor pulled my repository and upon a lein spec command it failed to compile due to the java environment.  Argh—at least that one was spelled out a little and he pointed me in the right direction.  Once it was fixed and i knew the cause, i recalled when that first happened months ago as I was starting on my first ttt GUI that I’d googled & googled & googled the problem to finally find, what I hadn’t realized at the time was, a hack to get it to work.  At that time, i had no idea that I was cheating to make it go, but i can tell you that I was annoyed that the little java app would run every time i ran my tests and every time I ran the app even if i wasn’t running the GUI.  Today I learned why.

Later today, i got to move on from ttt, but this of course doesn’t mean that the little problems go away.  I pulled our CC repository as well as the poker repository.  I did the correct installs, ran the specs, but when it came time to connect to the database, i kept getting a connection failure—-with no true indication of what was failing other than “Failure to Connect to Localhost”.  

We both set out to troubleshoot what was going on.  I came across a datomic log in the repository.  I opened it, and it gave a much more detailed stack trace than the original failure did.  It pointed me to some deprecated function that was being called.  Aha!  (Well not me, but I told my mentor what i found).  “What version of java are you using?”  Um…. 8?  Nope, i was using 15, in which there were deprecated functions that would not run with datomic.  

Got that to kind of work, but had a new error.  Had to switch the JRE for the database too… argh!!!  That might be my least favorite or the error that I find most annoying.  Granted i probably don’t understand it all to 100% completeness yet, but i can’t imagine that even experienced developers don’t find that one annoying.  I mean if everyone is using 8, why put out a new version every 6 months?  There’s a thin line between continuous improvement and total destruction, and I wonder if Java is sitting on the line.

In my former plant-life, I got to know all too well, an old saying that was frequently spoken by my long-term plant-cultured co-workers whenever some new change or improvement caused an issue: “if it ain’t broke, don’t fix it!”.  It’s a very easy motto to live by, and there were days when perhaps it was the right thing to do.  In the long-term, however, we must improve, and thus things must change or ‘be fixed’.   That being said, maybe Java 15 is way better than 8, but everyone is already set up on 8 such that it’s just too hard, cumbersome, and risky(?) to change.  Change is hard and it takes time to change a culture—is this a cultural thing?  I’m not sure yet…    

After everything was working and it was nearly 10PM UTC (i won’t get started on timezones or, even worse, daylight savings, which I’m already not a fan of in general), we finally got to pair program.  By that point, when the fun was about to begin, my mind was nothing more than mush.  I couldn’t think through simple, obvious tests and was writing ridiculous solutions to pass them—though, i hadn’t refactored it yet.  

It’s kind of intimidating writing code with someone watching you, but i do like the idea of ping-ponging tests & code.  We did that for the next hour or so.  Despite my lack of brain power, it was actually kind of fun, and I liked & appreciated the immediate feedback.  Immediate feedback is not something that you really get when you’re working all on your own—functioning code is not really immediate feedback, because you code, while it works, might suck.  And when you’ve been writing for a week, and finally show it off, there’s really only so much coaching that can be done about the code and none about the method of how you wrote it.  

The first experience i had with this was for Euler 1 or maybe it was Euler 2.  Micah was teaching me how to use speclj and how to practice TDD.  We wrote our test, then i had to math—i got all flustered and my brain cells became chaotic with the pressure of doing math quickly & correctly while someone was waiting on me to do it, but I got it (even if i was surprised).  

I’d always kind of thought that learning to code was something that you could do on your own with a little bit (or a lot) of guidance, but there definitely is value and a place for working directly with someone who knows what they are doing.  Now to relax a little on performing under pressure...

***

Rex:  
Whenever Rex sees a T-Rex, he exclaims, “Mommy, look!  That’s me as a T-Rex!”  Similarly, if he sees a lion, “Mommy, look!  That’s Leo as a T-Rex!”

Today when i handed him dinner (ham & cheese sandwich), he asked, “is it yellow cheese?”  “Yeah, there’s some yellow cheese on here”.  “Hooray!!  I **love** cheese!

I also had him read me a numeric code off the TV today so that I could re-setup Disney+.  The numbers were something like 4611 5905 (i think that’s exactly what they were actually).  I pointed to them and asked him to read them to me so that I could put them into my phone.  He did really well—“Four, **Six!!!**, **Eeeeleven!!** (“yeah, okay—not what i would have said, but you’re not wrong”), **Five!**, Six(?) (“that’s an upside down 6, Rex, which is 9”), **Zero!!**, another Five!!!  Two fives, mommy!”

Leo:  
Tonight, I was giving Leo high-fives.  After about twenty high-fives, so equivalently 100 (see i can do math!), he grabbed my hand with both of his little hands, pulled the backside to his mouth and gave a big “mmmmmmmmmmm-whah!”  He’s such a little gentleman.  

