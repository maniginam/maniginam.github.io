---
layout: post 
categories: apprenticeship
title: \Cuddle Rex; Leo Feed Inputstream Byte by Byte by Byte
date: 2020-12-02
---

I still haven’t recalled what that interesting thing I thought of yesterday was, but i think something else clicked today!  Either that, or I’m going about this server all wrong.

Of course all my epiphanies happen in the last 30 minutes of my work day, so i don’t get much time to apply it.  Anyway, I got my form to submit correctly today—remember yesterday, I had the spec passing, but it’s as doing so in a weasley, yucky way, so I fixed that today, and I’m much happier with it.  I’ve also figured out how to manipulate strings and vectors and even maps in java, which is nice.

But what I figured out at the end of the day today came from the post spec.  I couldn’t manually get my jpeg to upload through my test, but still, in working with the data and the fact that this request likely contains both a string part & a byte[] part, I thought, “Can I just manipulate everything with the original byte[] that I’m reading in instead of translating/converting (parsing? What’s the word here) everything into a string and manipulating the string?”

Against my better judgment since it was in fact already after 5pm, i opted to make some quick changes to everything, after a quick commit of course, to change all my inputs to byte arrays.  I knew i was going to break something by doing this.  I ran my tests.  Horrible failure—nope, wait, i forgot to change the input type in one of my tests.  Alright, try again.  

Green!  Everything green (except the post, which I’m not done with!  No way!  It should not have been that easy!  That should have failed if for any reason that just for the reason that I really needed to shut down and go get the boys.  Just to be sure, I ran the specs; Green!

Amazing!  My code was fully set up to manipulate the byte[]—granted in my core method, i converted the request into a string, so all the downstream methods still worked as originally designed, but i was surprised.  So now, to get this post to work, i already know how to feed in a byte array to set my test up properly, and so from there, I just have to figure out how to read through the byte[], find the double carriage-return\line-feed, read the content-size in the header, and then read everything downstream of the CRLF as a byte array into a jpeg.  Yay!  

PS that is not a sentence I ever expected myself to say, let alone actually understand it…. cool!


***
Rex:  
Rex had a pancake in the car this morning on our way to school.  He was mad at it, so I gave him a baby cookie.  He was mad at that too.  He said, “i want to leave my cookie here so that it gets yucky.  And I want to leave my pancake in the car forever!”

Leo:  
Just as Rex did at Leo’s age, Leo loves to show you up as he tells you “Up!” with so much enthusiasm and excitement.  He loves even more when you point up and say “Up!” also.  He can also almost say “down” as well as “ball”.

One of my favorite Rex stories actually is about “Up!”.  I think it was just before Leo was born a picture of the top of Rex’s face looking through his nostrils and the ceiling fan in our living room came up on our tv (don’t ask me why such a weird picture showed up.  I have no idea.  It just did).  I point to the picture and asked Rex (who happened to like ceiling fans), what that was a picture of.  He replied, “um… Up!”.  “Huh.  Well, yes, i guess that’s true.”
