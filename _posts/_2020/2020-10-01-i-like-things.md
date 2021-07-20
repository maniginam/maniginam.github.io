---
layout: post
title: i like things that are things that are also bottle-openers
date: 2020-10-01
---

Yikes!  It’s October.  It was already a month ago that I started a post about how this year is flying by (but i deleted that entry to save it for another time).

Anyway…. 

Let’s see…  Today I watched a couple of my dad’s videos on the Liskov Substitution Principle.  This is the principle that intimidated me the most, probably just because i didn’t understand what it was and its name doesn’t really give many clues, but after reading about it some this week and watching his videos, i think i get it:  A thing that is a thing, but be able to be fed to any functions calling the first thing with no issues while still upholding the rules of the OCP.

Several years ago, i made a facebook post upon seeing a very cool bottle opener that was also a key and a lighter or something.  It said “I like things that are things that are also bottle openers.”  The main factor here is that the thing must be a bottle opener, and so under all circumstances it must be able to perform the task of removing a bottle cap at the very least.  So a thing that is a thing that is also a bottle opener is by definition of the type bottle-opener.  I can substitute in a generic bottle opener to do the job or I could use this specialized thing.  The reverse is true also—i can substitute in a thing that is a thing that is also a bottle opener for a generic bottle opener.  It will perform the duties required of a bottle opener just as the generic while having other enhancements.  Imagine if you went to open a hoppy micro brewed beverage with this enhanced thing, and the function of open-beer didn’t know how to handle the enhancements that ultimately had nothing to do with it, and it exploded because it was expecting a generic bottle opener.  This would be sad.  Similarly, if say your thing was a flashlight and also a bottle opener, upon turning on its light, all the beers in your fridge should not open upon its use.  

This is the LSP: a function that requires type bottle-opener must be able to handle a subtype of bottle opener, and this is difficult sometimes, because it can be tempting to change the functions of a generic bottle-opener to withstand the enhancements of the thing that is a thing that is also a bottle-opener, which would be a violation of the OPC principle: A class should be open for extension, but closed for modification.  

I also worked on saving and pulling my ttt game.  This was a lot of fun.  Honestly, while I was excited to do this task, i found it a little daunting—and maybe in java it would have been a little more complicated, but after doing it in clojure, it was actually really easy.  I still have to get my GUI fully functional with it, but it was very cool to start up my terminal game and have it ask me if I wanted to start where I left off in my last game, and then have it pull up the exact place i left off.  All with a single map—a single input (and really it was a single output).  Very cool.  


