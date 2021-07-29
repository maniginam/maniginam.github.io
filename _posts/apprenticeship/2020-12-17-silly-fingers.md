---
layout: post 
tags: apprenticeship
categories: apprenticeship
title: Silly Fingers
date: 2020-12-17
---

I was watching my katas the other night reflecting on the effort put into learning the algorithm, vocabulary, and flow of TDD as well as the effort put into making them publishable.  As I was watching them, i was actually kind of admiring my work.  The constant and smooth flow is kind of soothing in a way—but then it’s really just another one of those ways to admire your own narcissism similar to listening to your own recorded songs over and over.  

Anyway, the point I was actually trying to get to with that is that as I was watching, despite the hours of practice i put into those, I was almost struggling to remember some of the language.  It’s been a little over a month now that I’ve been coding in java and haven’t really touched clojure since.  I do like clojure better than java—the brackets and white space/new-lines are driving me kind of nuts—not to mention having to initialize every variable to avoid null pointers that shouldn’t ever happen.

I guess it’s been nice not having to carry variables from function to function, however while that does make writing the individual functions maybe a little easier, it makes tracking the variables pretty challenging—by the time every function has touched one variable, what is it?!  Who touched it last?  ...Who was supposed to touch it last?  How many are returning it?  What variables are available in this class?

I think that computer languages are actually a lot like spoken languages.  For instance, i speak broken Spanish—i can understand it pretty well; speaking is harder, but the more i use it, the more vocabulary i haven’t used in forever, I start to remember.  There’s a lot of muscle memory involved in both types of language.  

In high school, i took both Spanish and french at the same time—and in fact i would often walk from Spanish class into French.  That was always a little challenging because my mind would be set in one and I’d have to switch—i made silly mistakes all the time.  

With this server that I’ve now passed again (yay!!), i had to use the clojure specs as a guide for what i was supposed to have the server perform, and there were times I would need to write out a couple of prints or comment tests out in order to proceed.  When i did, my mind was stuck in java, and i would make those same silly mistakes because my fingers knew what i wanted to do and were using only the most recent stack of muscle memory and so would spit out java code in a clojure namespace.  Silly fingers.  Oddly, when I’d go back to java, for the first line or two, i would make the same but opposite mistakes as they wanted to start everything with parentheses.  Silly fingers.  

Powerful fingers in that it’s pretty cool that our bodies do that—they remember.

Anyway, as i mentioned, i finished the server again today, and it is a lot better than the first go-around even though i did rush toward the end and make a mess of my parser and connector.  I have a few clean ups to do and then it’s done.

When i went to package it into a general server pkg and the http specific inputs & outputs, i was happy to see that they were for the most part separate.  I had to make a couple changes with the thought of the ‘owner’—who is going to ask these to change…. If HTTP suddenly develops a new method, i don’t want to have to go into every class or even more than one of them to enter a new method.  And there is one big change that i will need to make to separate them more, but for the most part, i was pretty pleased that the http side was pretty independent of the server side in that the server side could in theory be used by a different style of server.  

