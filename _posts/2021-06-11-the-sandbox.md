---
layout: post
Title:  The Sandbox
date: 2021-06-11
---

Another relatively successful day, which I have to admit, feels really good after the last several weeks...months.

I was for the most part fully ready to show off the web-app template, now being called the CC Web Sandbox, to Micah.  For the show, i deleted a button I really wanted to have working.  I showed him everything and he seemed pretty pleased.

Once I felt like it was acceptable, I showed him the button & the lein command I wanted to implement.  I was having issues with getting repeating 404’s due to no users because there is in fact no database.  Micah pointed out that they were all websocket calls--doh--this doesn’t require websockets and it is merely serving static files.

I think he really liked the button idea, but probably moreso (similarly to me) the command line command to make a new file in the sandbox that includes the correct namespace, page requirements, and the render defmethod--i recalled a while back Micah mentioning that the render function was often forgotten in the sandbox causing some mild frustration.  So I figured an easy command to fully set up the static page would be useful.

Things left to do are:
1. Allow a user to type in their new page name directly into the browser opposed to setting a default name which they would then have to refactor to the name they actually want.
2. Somehow require all the newly added pages into main.cljs.  This one actually feels impossible--though, i’m sure there’s away.  Requires have to be made at the top of a namespace, so writing a function to request all the files and then requires the files in the response probably won’t work.  But I wonder if I can write a macro to make the request and run that macro in the ns function…  I’ve asked


And shoot!  I just remembered, i totally forgot to mock out my file creation & deletion in the tests. Ugh!  I’ll have to get back on that.

But yeah, i’m feeling good again--granted most of what i’ve done the last week is copy paste & delete, but even this took a little bit of knowledge about what was actually going on, and I got it all to work and without all that much help, so yeah.  That feels good.

On another note, I’ve gotten to continue working on my mentoring skills in this new arena.  I consider myself a pretty strict socratic-type teacher/mentor.  I don’t freely give answer, and instead try to coax them out of the student with both general and when necessary more pointed questions. This has been both fun for me and frustrating in the sense that I can see danger ahead, but don’t want to give too much away.  The most productive learning comes from mistakes, so in order to learning really well, you must make mistakes and thus be allowed to make mistakes.  If I were to guide too much or instruct on how to do or how to design to make things easier for a student later, then they would only learn by memorization of what I said, and not truly learn the essence of why.

I was allowed to make many mistakes, and i refactored and drove myself into many holes.  I even started over a few times.  But each of those experiences allowed me to learn not to do it again.

This is how children learn as they grow.  For instance, i’ve mentioned both my boys recently went through swimming lessons.  The first few days were rough, because they hadn’t yet learned to hold their breath.  There was coughing and gasping the first couple days as they were learning from their mistakes.  But by the end and even by day 3, they were both holding their bubble.  It was so pleasing to watch Leo, look at his instructor counting to three and then hold his bubble even if he was in the middle of a crying protest.

You learn quickly when you are allowed to make mistakes, and so they are a critical part of learning, but man, it’s hard sometimes to watch it happen both with helping a fellow apprentice and with watching my kids learn the hard way.
