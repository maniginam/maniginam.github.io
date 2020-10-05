---
layout: posts
title: Things That Are Things That Might Not Be Things That Are Also Bottle Openers
date: 2020-10-02
---

So i was wrong.  As i was putting together my presentation on the LSP, i was really struggling with a good example.  I was stuck on why this was a principle.  It seemed like common sense that a subtype should flawlessly fit into the super-type and that the OCP & DIP kind of covered everything about that, so i went back to read about the squares & the rectangles again. 

I concluded that i was wrong yesterday.  The LSP is not about things that are things that are also bottle openers and that they meet the requirements of a bottle opener.  No.  It’s about things that, in the ordinary world, would be classed as a subtype of a specific parent, that in a program, given the same inputs as their parents would have subtle enough differences that would ultimately cause the program to crash or require a modification to the parent class violating the OCP.  I think it’s circumstantial too, but that may just be the way that I am thinking about it.  

So for instance, in the normal world there is the class of Dog.  A Rottweiler is a dog, so is a chihuahua, and technically, a puppy is a dog.  The LSP implies that the class under which these different types of dog fit is dependent upon the user/caller of those types.  If the caller were to be asking for a comforter, any of those types might fit the use-cases.  If however, the caller was calling for a protector with the input being a type dog, a chihuahua might assert an error.  This feels like a stretch, but I’m trying to make it work.  

Ok. Scratch that thought.  I just took a ten minute break to explain the LSP to my dear husband who helped me think through it.  We talked about cars with fuel being the input, and that example was good.  Then we talked about Rex…

Mom: Rex, what do you want for dinner?  
Rex: Nuggets!

Ok.  So the user is Rex.  His function is eat(Food).  Food to you or me is an abundant class with many subclasses.  To Rex, however, Food has a limited number of subclasses, those being Cake, Cookies, Pizza, Squares (Life), Circles(Cheerios), Hexagons (Honeycomb), Soup, Nuggets, Sausage, and somehow Broccoli.  All of these and pretty much only these will substitute in without error and an assertion of “I can’t want to eat dinner!  I don’t like dinner!”  

So for the Rex as the user chicken is not food.  However, if chicken is cut up into small enough piece to hold and take bites of, it can be classed as type Nugget and implemented through the interface ‘dippable’ (we’ll get to the ISP next time).  Subclasses of Nugget are pieces of chicken, chicken fingers, breaded shrimp, and sometimes even steak.  If it meets his requirements, he will accept the subclass of the Nugget just as he would a Nugget and thus as Food, and so he will eat.  

The point here is that you or I might put Chicken in a class of its own as a subtype of food and under which Nugget might fall, but the LSP, like many of the others, is about the user, not about the programmer.  Rex does not class Chicken as Food, and thus it is not Food and will asset an error (and a difficult night).  The objective here is to substitute in a subclass of Food without altering Food itself and similarly substitute in a Nugget without modifying the class Nugget.  Thus we must alter the subclasses of Nugget to implement Nugget such that the function will still execute as expected with no undesired assertions. 

I probably still have not said this well…. In any case, I will forever now analyze the world in the mindset of a program, which is certainly enlightening but feels like it might also carry a tingle of a curse….  In a good way of course.

***
Rex:  
I mentioned Pizza.  Rex only likes pizza when it is in a full circle and prefers to pick off the sausage to leave it in circle form.  He gets upset otherwise. 

Leo:  
This week, Leo entered his eighth of ten developmental leaps, which is the leap of programs.  A program to a baby is essentially a sequence of events as one thing or task.  For instance, washing the dishes requires turning on the water, getting soap, scrubbing a dish, and rinsing it.  This also means that he too can follow very simple directions, for instance, the other day, i told him to put something down, and he looked at me and then put it down.
