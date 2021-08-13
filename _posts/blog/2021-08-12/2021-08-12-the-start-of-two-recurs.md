---
layout: post  
categories: blog  
tags: blog  
title:   The Start of Two Recurs
date: 2021-08-12
---

Yesterday was a special day.  It was the very first time that my baby brother and I wrote lines of code as a pair.  We paired on the Prime Factors Kata and an episode of what we are calling Hot-Kata.  While I’m not looking forward to the actual performance of Hot-Kata, as it will be painful, I do think that it will be very funny--I hope so anyway.

It was fun pairing with Justin as right off the bat, he started the kata differently than I do.  First he wrote a forever long description that I thought was funny.  Then, he started with 2!

![Justin starts with 2!](https://raw.githubusercontent.com/maniginam/maniginam.github.io/master/_posts/blog/2021-08-12/img/01.png)

Whereas I write short descriptions, I start with 1.

![Gina starts with 1](https://raw.githubusercontent.com/maniginam/maniginam.github.io/master/_posts/blog/2021-08-12/img/02.png)

I did think it was very interesting how right off the bat he was thinking ahead about optimization, and then he showed me the many ways that he has performed the prime kata and described the different behaviors of each one.  We used them to compare ours against.

Then of course, especially for the purpose of this video, we gave each other several just ridiculous yet hilarious and also horribly ugly and difficult-to-correct solutions for each test.

Some of these included:

At (should= [2 2] (prime-factors 4)): nested-ifs--ahhhh!!  Why didn’t you just do a cond?!  “Because you have to fix it, not me”.

![nested-ifs](https://raw.githubusercontent.com/maniginam/maniginam.github.io/master/_posts/blog/2021-08-12/img/03.png)

At (should= [5] (prime-factors 5)): (odd? n)
  ![(odd? n)](https://raw.githubusercontent.com/maniginam/maniginam.github.io/master/_posts/blog/2021-08-12/img/04.png)


This was obviously payback for the ifs, but to my surprise

At (should= [2 3] (prime-factors 6)):  even this was paid back with evil and a ugly, yet functional for up to 6, vector.

![[n (/ n 2)]](https://raw.githubusercontent.com/maniginam/maniginam.github.io/master/_posts/blog/2021-08-12/img/05.png)

We finally completed it by means of recursion without a:

![Tails!](https://raw.githubusercontent.com/maniginam/maniginam.github.io/master/_posts/blog/2021-08-12/img/06.jpeg#thumbnail)
(this is Tails)

deliberately causing poor optimization, so that we could go on to optimize it.  Why not optimize right off the bat?  Well, first make it pass, then refactor.  Plus, for our episode, we were going to need a little bit more time, so we thought it would be fun to use our props as inspiration for a large number to factor.  We intended for this to blow the stack the first time around.

It’s going to be interesting!


---

Rex & Leo:

Oh man.  It was a weird day.  This morning, at the normal leave for school time, Keith packed the boys into the car and headed for the airport to visit Keith’s family for the weekend--*without me!*

I’ve left the boys overnight on one occasion since really either was born--i’ve actually been away from Leo twice, since Rex came with me on a trip last December.  Other than that this will take me to exactly 14 [2 7] nights away from Rex in the 187 [11 17], actually, it’s closer to 188 [2 2 47] weeks that he’s been in my world and 17 [17] nights away from Leo in the exactly 97 [97] weeks (come to think of it, he was born on a Thursday) that he’s been in my world.  But who’s counting right?

Today was weird though.  Today was the very first time that they left me.  I’ve left them a couple times as mentioned, and I’ve taken them away from home and away from Keith a number of times.

I guess I’ve never been this far away from them either.  Usually upon them leaving for school at 6:30/7AM, I get right into work mode (after a few household chores) and push buttons all day as my time is very limited to do so.  Today, I did push probably all the buttons, but the house was painfully quiet.

I’ve been nervously & selfishly looking forward to this weekend, but as it approached, I became more and more apprehensive about it.  And when they left, I almost wanted to ask Keith to not take them--or to change up my own plans and just jump in the car without a suitcase.

Even though morning took place as normal, the house felt everso silent and empty.  And then came 4, 5 & 6PM, and they never came home.  Now it’s dark and way past their bedtime, so once again things are like ‘normal’, but they’re not…

It’s weird how badly I can crave a break from this whole mom thing, but then when I get it, I’m just lost and lonely...

