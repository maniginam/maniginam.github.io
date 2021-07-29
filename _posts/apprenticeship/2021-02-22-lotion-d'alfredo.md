---
layout: post 
categories: apprenticeship
Title: Lotion D'Alfredo
date: 2021-02-22
---

After feeling impressed & accomplished on Friday for navigating the database so efficiently such that
I already had the rooms listed in the browser, it was disappointing today when I discovered a bug
in my work--and just before I was about to move on to the fun stuff: the clicks!  

On Friday, while I was signed into two different browsers simultaneously to ensure that the count
was updating correctly, i noticed that rooms were leaving the list when i exited a room in one browser.
So I went ahead and checked the other browser--it said two rooms were active still.  This was wrong.

It took me a few minutes, but i pretty quickly realized that because I was pulling the data in
the cljs file on the client side, it was only pulling the information that the client had locally.
This was not right.  I needed to pull all the data in regardless of who was logged in.  I decided
that this should be done on the server side.  I think this *can* be done on the clientside, but I wouldn't
want that code so available such that unauthorized users would have the commands to pull all the sensitive
data, so i set out to pull it on the clientside.  

That was easy enough.  A couple lines of code and a few passing tests.  Viola!  But shoot, the server has the
info, and I need to give it to the client.  This must be served now--over the socket...  I spent the rest of the day
reading through all the code to figure the exact path of all the requests & responses & their turnover.

This was complicated--and frustrating, I could see all the data in the log.  Like it was right there, i just didn't know
how to get to it.  It's frustrating like when you lock your keys in your car (with the car running of course), and
you can see the keys.  They are right there on the driver's seat right where you left them, but you can't have them.  Or like
the feeling when you're at a restaurant where the hostess tells you it's going to be a thirty minute wait, but there are
like a thousand open tables, but she won't seat you.  

But, even in these cases, eventually, you figure out a solution, and after having taken a break, I think i know how to proceed.

***

Rex:
Rex is growing a vast imagination and is constantly telling stories.  He told Lolly (his grandmother)
the other day that when he was a baby, he jumped over ten giraffes.  As she laughed and appropriately responding with an
 impressed "You did?!", she looked my way, so I confirmed that this was in fact true and that sadly, i missed the photo op!
 darn!

Leo:
Leo likes lotion.  And goop, but I can't spell how he says goop.  It's like "mmph" said int he back of your throat as a grunt.
Anyway, he's always asking for lotion.  I've taught him how to rub it on his hands, but mostly he just eats it.  

The other night we had pizza for dinner and breadsticks with alfredo dipping sauce.  Leo kept pointing to the bread & sauce
and signing for more.  I let me hold the lid of the alfredo sauce, and he dipped his finger in it.  I was relieved in that
at least this was actually food that he could eat, but no.  Not this time.  He finally understood lotion, so he rubbed his hands
together and rubbed the sauce all over his face.  "Oh, sweetie, that's food.  That's not lotion."  He did it again, so I went and
got the lotion.  I gave him a little bit of lotion pleased that he now understood its purpose, and the little twerp ate it!