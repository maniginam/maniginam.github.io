---
layout: posts
Title: Dirt but No Imagination
date: 2021-01-06
---

I still can’t believe it’s 2021.  Today there were a bunch of riots in Atlanta over the election.  I don’t think there was any way around that no matter who was elected.  Everybody is pissed and there’s no way to please everyone.  So yeah.  It doesn’t make it okay.  An election is not a good reason for or an excuse to riot. I live in a whole-hearted red-state, so while I do believe it is important to vote, I was in AZ during the election, and so did not.  I won’t say here who I had been planning to vote for, because regardless, I do have some hope that just maybe this next president might be able to build some unity if he plays moderately enough.  I do believe that our country needs someone who can bring us together, but then again, maybe that’s wishful thinking…

 Anyway, we’ll see where the year and this next administration takes us—either way, it’s only 4 years.  

As for web-ttt, it works!  The GUI takes the user through the entire setup then displays a board based on the user-input.  Then the game runs.  This was my iteration for the week.  Despite the fact that the pieces are currently skewed and the boxes are out of order, i can prove that the game runs with my tests in that my populated tests for the next move pass.  Yay!

That being said, i probably should have asked my customer to further define “display GUI in browser”.  If he is expecting all the pieces to be perfect he might be disappointed, but if he was only expecting a GUI to appear, then he should be happy.  Lesson learned on clarification, i suppose.

Similarly, while you can’t view the game running in the GUI, it does in fact run, which is what I understood that task to be.  

I’m also going to reiterate just how much i really don’t like string parsing—string parsing is something worth guns-out rioting over!  I knew this even back when I was dealing with small-time vba-excel programs before any of this.  I hated strings.  I would do anything possible to force my operators to use integers in any input over a string, and I would try to force drop downs if a string was necessary. Nonetheless, just as dirty dishes exist and must be washed in order to use them (i suppose…(kidding)), strings exist and must be parsed in order to use them.  And so while the dishes sat, i parsed the strings.

I’ve noticed that my tests have gotten bigger—maybe more general?  Or perhaps more specific?  I used to test pretty much every function.  This was the first time, that I actually started a test not about a function, but instead about what I wanted to application to output overall with a given input.

My first test was start the server.  A few months ago, it would have been about parsing the options-vector, but starting the server and getting it’s output was sufficient to give me confidence that the test would pass.

Similarly, i didn’t test that each request was correct, but instead, fed the program a request and made sure that the body of the output was correct.  Perhaps this is an effect of an application growing with already passed tests, but perhaps also, it is an effect understanding that I can test the specifics within the desired outcome tests.  

With all that said, i also feel like I’ve missed some tests…. For instance, my atom isn’t working.  I have the console set within the atom, but for some reason, it wasn’t taking.  I found this by troubleshooting why my ttt.html file wasn’t updating with a println.  So then i had to reset! my atom within the namespace that define it.  I thought this was weird and it is on my ask-list.

Regardless of my pleasure in completing my iteration (to my understanding), i can’t help but feel slow.  I feel like I should have been able to do more than what i accomplished in the time i estimated.  Granted, i actually got more working, i think, than my iteration expected, i still feel short.  One of these days, must be the day when i figure out how estimating accurately works and furthermore, how to break things up accurately.  

***
Rex:  
For his birthday, Rex got a new construction site toy.  Repeatedly, he has asked me to give him some pretend dirt.  In response I’ve told him that for pretend dirt, he can use his imagination.  His reply is “but i can’t!  I don’t have one!”  A 3 year-old with no imagination would be the saddest thing.  Fortunately, this too has been tested by him asking “what if it were pink?  That would be silly!”.  This kid loves pink and thinks it’s silly.

Leo:  
Leo deliberately calls me these days, by crying “mummummumumm!”  He also loves to wear my shoes, despite his frustration that they don’t stay on his feet.  He will work for several minutes to get them on (not understanding shoe sizes), then will attempt to stand, and exclaim in utter frustration that they come off as he takes a step.  It is really quite comical!
