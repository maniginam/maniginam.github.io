---
layout: post 
categories: apprenticeship
Title: Snickerdoodles
date: 2021-01-15
---

It happened again!  I mentioned yesterday that I had a task that I was a little intimidated by, but powered through it and learned that it wouldn’t be all that difficult afterall.  Ha!  The actual task of making a cookie is simple, however I set up ttt to only save the game once the user had input the entirety of the setup: users, player-piece, board size, etc.  

This doesn’t work for the server.  So now I’m at a crossroad.  Should i go back to ttt and rewrite some of—and really it’s a decent amount of code, to add a whole new table or at least initiate the table immediately upon start up and then save the info after each setup-submission or do i add a new table within the webttt or do i just create a map to carry all the games.  In reality, the map is probably not a good long term solution in the case one day, i have a billion users who all want to play ttt at the same time, but what if ttt weren’t mine and I didn’t have access to change it?

For the intent of my task, i think the map will work, but I’m not happy about this.  I worked really hard to make all my code re-usable and so that i wouldn’t have to change much of it in either ttt or the server as well as so that the database wouldn’t matter.  But now here I am, and while the database doesn’t matter, the way it is saving the game does.  I need it to do more.  I suppose, i could write a whole new class in webttt to save the game in MySQL, but yuck.  Maybe that’s not so bad or maybe I’ll start with the map to get the cookies working and then go back and fix the database.  For this, i think that is the best thing to do for now.  

Well, i guess I’d better get back to it now since this is all supposed to be done already.  I’m glad I understand how cookies work now though.  That was an interesting one to me.  I mentioned it to Keith a couple months ago that all of a sudden, I’m getting prompted a lot more about websites using cookies.  I mean, I’ve always seen that before, but suddenly within the last six months or so, it is happening more and more and the prompts are more obvious. 

It is possible, that I’m just noticing software things a little more frequently these days, but I think what I’m saying is true.  Regardless, it is obviously a law, which was confirmed to me today that Europe requires servers to inform users that they are using cookies, but then i thought about the poor little users who have no idea what cookies are—i mean this was, for the most part, me yesterday morning.  This is how it goes:

Server: “We use cookies to enhance your usage.  Do you accept?”  
User:  “um, yeah sure, I like cookies.  Who doesn’t?  Yes, I’ll accept some cookies!”

But the average user, and let’s be honest, probably the majority of users, do not have any idea what cookies actually are nor does the server give any obvious information about what they are storing in the cookies nor how much space they will be using or for how long.

Nevertheless, i do love a warm, soft, slightly undercooked snickerdoodle.  

