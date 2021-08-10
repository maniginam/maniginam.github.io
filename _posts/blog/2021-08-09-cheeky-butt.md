---
layout: post  
categories: blog  
tags: blog  
title:  Cheeky Butt
date: 2021-08-09
---

It feels like I got nothing done today, because I feel like I didn’t get much done today.  For some reason, I keep focusing on refactoring the sequence of my server requests from epic to poker.  I have it set up and fully working with the epic client-side making individual requests to the epic server side, which then calls the poker server side, which responds accordingly.

It’s all working!  But it’s ugly, and bothers me.

This weekend, i refactored the poker side, and if i may say so myself, it is be-U-tiful!.  It feels clean.  I can find the functions I’m looking for almost immediately.  There aren’t a billion repetitive tests.  And i works.

This took a lot of work, and to be honest, while I like the flow and feel like it’s pretty clean, I’m honestly not sure if it’s executed in the best way.  I have all “linked-requests” routing to one function which then dispurses/routes them throughout the client-app namespace through a multimethod.  This actually doesn’t sit all that well with me, but it’s much better than it was.  It eliminated the redundancy security calls, by putting them all into one function and then routing from there.

I need to do the same with epic,and in fact, they are now both exhibiting similar codes.

It needs to be done, but it doesn’t feel like progress and it’s repetitive and annoyingly breaks stuff that shouldn’t break.  But now i’m at the point where I really want to move on and do the new stuff, but every time I go to write something new, the evil ugly code laughs at me--for I cannot remember if I sent it a map or just an id or if it’s a dereferenced variable, and that’s gross.  And every time I do something new, I have to start out with the same dumb credentials tests, which could all be put into one function.

They actually are all in one function, but this function is called for every new thing I do, which makes me, once again, want to have one core function that calls the rest, but that would be ugly on this side as I would have to have the client side more intricately specify where it wants to go.  Perhaps that’s not a bad thing, but I hate to pass around another argument.  But on the epic side, i can’t find my functions--they are all lost in a sea of functions, and the tests are all concise, but long and repetitive, so refactoring must be done.

---

Rex:
If i had the opportunity to be three years old for a day, I don’t know for sure that I would take the opportunity.  Life for a three year old is so frustrating and it doesn’t make a lot of sense.  They have so many functions going on around them that they know how to call, but can’t always find them, which leads to adults responding unexpectedly.

Rex got frustrated last night after his bath because he wanted to be a Rex-burrito.  Once he was, he then got upset because he wanted mommy to take a bite before being unwrapped, but then mommy took a big bite which was even more upsetting because she was only allowed a little bite.  Mommy put some of her bite back, and that seemed to make the problem go away.

Leo:
Being just under two, however, while still frustrating at times, it seems easier to be content so long as your needs are met with a few extra wants.  But that time is quickly passing for my little Leo-taquito.

Tonight, Rex either called or said to Leo “Cheeky Butt” to which, Leo got **very** upset.  I’m not sure if he understood the name calling part, but he responded as if he did.

Though this does not stop him from calling me “Cheeky Butt” in an imitation of his big brother.  Not sure where “Cheeky Butt” came from, but I think it’s from the show Bluey, in which they frequently say “cheeky” and then Rex just adds “butt” or “poop” to all words.  
