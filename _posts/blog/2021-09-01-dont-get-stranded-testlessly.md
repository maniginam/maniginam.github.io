---
layout: post  
categories: blog  
tags: blog  
title:  Don’t Get Stranded Testlessly
date: 2021-09-01
---

Now that EPIC is pretty much just waiting on a few design components and drag-n-drop, I’ve been tasked with finishing up what Micah started with the dnd.

He walked me through it to start me off, and I think I gained a decent understanding pretty quickly, so I felt ready to get started on completing it--big life-pause for the hurricane--and I was off!

I actually made a little progress over the weekend and yesterday, such that I was able to nearly complete the single list dnd this morning and push forward to a multi-list dnd.

Now, because the expected results were not fully known, we started this without many (okay with no) tests--sometimes this is necessary when you just don’t know what the results should produce and thus don’t know what a passing test would call for.  I continued on as such, but got to an interesting point.

It had to do with re-ordering the list items.  It was redundantly time-consuming to write a little code, refresh the browser, & check the outcome.  It didn’t take long before I realized that writing a test for this would be faster--after all, i **did** know what the outcome for these functions should be--it was just list reorganization.

I began with the easiest--move the first element down one.  I was doing all of this with a linked-list of items as this is likely how I will implement it in Poker & EPIC.  Made it pass.  Then moved a middle element to a different location between first & last.  Passed it.

Then move the last element to a middle location.  Passed it.

Then move the first element to the last position--this one passed on it’s own--I wasn’t expecting that…

Then move the last element to the first location--this one passed after a single tweak--cool.

Suddenly, I had all possible variations passing.  So i tried it out in the brower--beautiful!  With the exception of the yucky html that I was struggling with.

The point here is that while i was coding on testlessly, I quickly recognized the power that testing can provide.  I’ve said before that tests are your eyes and ears into your code.  They are like your instrumentation for a vehicle or piece of machinery.

To not have tests would be to drive your car without a speedometer or fuel gauge.  Sure as any seasoned driver can get a feel for his or her car and drive without the instrumentation, doing so comes with additional risks.  Let your tests guide you, so you don’t find yourself empty and miles away from the nearest fuel.

But just as with instrumentation, you must have trust in the output of your tests.  A pressure gauge that reads up to 250psig, will do little good on a system that runs under vacuum perhaps to a max of 5 psia.  Similarly, using an odometer to measure something’s temperature is not going to get you very far (ooo--could that be a pun of some sort?).

You must first know what your instrumentation will tell you in order to know what it means when it sends you an alarm.

If the instrumentation is faulty, so can be your driving.  If your tests are faulty, so can be your code. 


