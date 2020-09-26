---
layout: posts
title: It Works—sorta...
date: 2020-09-25
---

So all my tasks for the week are pretty much done, except that my customer would be very unhappy that while you can play a 4x4, or really any size board, not only can you win, the computer will also cheat and change all of your X’s to O’s after (*i think*) 9 turns.  I say 9 because it make sense and i know that i hard coded 9 in a few places when dealing with just a 3x3 board and am not completely confident that I’ve found them all.  Furthermore with a 2x2 game, which it plays fairly, i noticed in the GUI because of the ‘results box’ that it continues to play even though the game has been won.  Very weird.  

Anyway, the point is that the game works and you can play, but there are a few bugs…

Now, I am by no means saying that this has to happen as there might be more beneficial things for me to work on after TTT, but it would be interesting to write TTT over again from scratch.  I say this because, I’ve learned a lot in the last few months.  I was actually telling Keith the other day that this is probably the first time maybe not in my entire life certainly in the last 15 years or so that I can see or feel tangible learning progress.  I guess by that I mean that I can see my learning compounding and building upon itself—kind of like how college is probably supposed to be.

Honestly, i thought my mini-max would work fine on a 4x4 board with no updates, but clearly there is some stuff wrong, so maybe that’s what i do.  I just re-write the basic game from scratch.  I don’t know if that would find all the bugs though, and as someone who frequently watches ants and an assortment of yard bugs in her yard, i should be good at finding bugs… (pause for a moment of laughter and applause at the witty joke *haha*).  

Nonetheless, I’ve learned that it is not only possible, but also really important to keep things seperate and that it is not only necessary to write the main production code without reliance on the interface, printables, a GUI, or potentially a database, but also how to do it with tests.  

When i started TTT, i began it as I’m sure most novice programmers start writing—with the UI thinking that i needed this to begin, that it was necessary to write anything else, and to be able to see what I was doing.  I’ve since learned that, while it might feel blind at first, that the tests are your seeing-eye dog.  They guide you through the algorithms.  Today, i would start with a test.  I might create the board vector and then the win? algorithms, and then the mini-max without ever looking at printables or a GUI to check myself.  Once those were sturdy and in place, then i would start on implementing the UI.  

I’m eager for the next project to try this out—of course like with anything new, it’s easy to fall back on past practices and relying on what you know.  I like the katas for this.  They are short & simple snipits of code that allow you write them over and over checking yourself as you go with well-written and practiced tests.  They help to frame this practice into your mind and even into your fingers.  

Anyway, it’s not perfect, but it kind of works.

Also, Coin Changer: 

<video src="https://maniginam.github.io/blog/pics&vids/CoinChangerKata.mp4" width="600" height="400" controls></video>

Rex:  
Rex said *L*eo yesterday!  I told him, no, it’s ***M***eo!!
