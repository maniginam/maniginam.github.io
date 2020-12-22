
---
layout: posts
title: Test Maintenance
date: 2020-12-15
---

Today was productive yet also frustrating in a repetitive way.  

So there I was sitting in my trailer-office working on my server and continuing to re-use previously written code, when i found myself getting annoyed with having to write very similar tests over and over with the same recurring lines of code.  I refactored here and there, but still as the tests got more detailed they used more and more recurring code, and each test was becoming like twenty+ lines.  

It was getting ugly.

So once i got all my basics specs to pass, i spent some time refactoring all my tests.  I refactored long enough that i was ready to move on to more production code—after writing my next failing test with my newly refactored test-helper, and what happened?

Everything was broken!!!  

Yes, everything was broken, but not because of my test refactoring.  It was my fault actually.  I had been only running one test while i was refactoring some of the production code, and of course forgot about that change I’d made for the next hour and a half.  So i spent that hour and a half trying to figure out why the one new test i wrote started failing all of my tests.  It didn’t make sense…. or it was the RegEx’s i was trying to incorrectly use—those are so much more complicated than they should be…

Anyway, then i figured out what i did—apparently interfaces that have default functions don’t carry those functions forward to the classes who implement them quite as easily as i would have hoped.  

I sorted all of that out, and in my haste of the end of the day, I got all the files specs passing—though i have to say, I’m not thrilled with how i got some of those to pass, so i put todo’s in there to go back to once i have the server fully functioning tomorrow!  Yes, tomorrow.  That is my goal, and even with the multipart request ahead of me, i so actually think it might be feasible—granted, I’m going to skip the posts for now and get the pings situated before going back to those.  That way i will have a better idea of what the remaining time will require.  If i don’t, I’ve already learned that i will spend hours and hours and hours on the difficult stuff, when i could accomplish and show more accomplished by doing the stuff i know can get done in a matter of minutes before tackling the hard stuff.

As Rex says after counting to eleventeen: {sigh} Yay!
 

