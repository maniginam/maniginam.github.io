---
layout: post  
categories: blog  
tags: blog  
title:  Refactor, Refactor, Drop!
date: 2021-08-06
---

Refactor til you drop!

I have dropped!

Can you refactor too much?  I don’t know…

On the one hand, no--Refactor til you drop!

On the other hand, there has to be a time:benefit balance…right?  Also, could refactoring ever make a system too complex--to hard to follow?

I find this happens most when working with web requests, and simply put, it’s due to the fact that I’m not always entirely sure what the data is going to consist of, whether it is in the form of a request or a response.

This includes not only the data that I’m going to get, but also the format or type of the data, or where the sought data is actually residing (params, body, query, etc.).

Yes, reading the libraries does tell you—kind of, but it always seems to be somewhat unexpected.  So I end up resulting back to some trial and error.  Find the error, refactor, and then once, it’s working, go back and write the tests—but this is not test-driven, and that bothers me.  It also leaves me with a mess of code throughout which, i can’t ever remember what’s where.

All this to say, that then it must be refactored.  I refactored the crap out of a namespace today.  There was so much repeat-code, so i pulled it all out, and it seemed that my tests were actually good enough that after a couple of moves, i was pretty confident that they would offer a net.

All my tests called the same two functions over and over, because each one needed to check the params and requirements.  This led me to want to create a multifunction based on the uri—but now this is starting to sound a lot like the router.  This is already being done, but now there is another layer that needs to be filtered through.

It looks cleaner, but it too feels redundant or over-the-top…. Furthermore, it took a couple hours—as with all things code, I thought it would only take a few minutes, then it was suddenly almost 8PM…. Argh
