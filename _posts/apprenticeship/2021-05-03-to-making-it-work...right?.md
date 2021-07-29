---
layout: post 
categories: apprenticeship
Title: To Making it Work...right?
date: 2021-05-03
---

After last week of a sick boy followed by source code updates, I was finally back at some progress today.  Except it didn’t go as smoothly as I’d been planning on it.  The welcome page is up, the trello token is auth’d, the login to poker opens…  Except there was a bug!  I’d set it so that when the user logs in, it saves a status of some sort so that trello knows that the user is logged in.  When I went to try it out this morning, it worked according to that status, but I never set the status to change when the user logs out or is logged out, so trello believed I was logged in even though I was not.

This took me right up to what I knew would be the biggest hurdle with the room list--requesting the info from poker based on the user.  Now I’ve made requests through a poker-window through trello, but this was a little different.  I need the request to be made in javascript and poker to respond with the answer.

The request is being made, and I can see it on the server-side.  So what my dilemma comes down to is making it work or making it work right.

Obviously, making it work right is the correct answer, but one of my reviewers the other week mentioned something to me.  The customer’s point of view.  What the customer cares about most--at least in the now--is ‘does it work’?  I came across that lesson a couple times during my final.  Should I make it work or should I make it work right?

I get very hung up on making things work right to the extent that when it comes time to turn things in, nothing works.  I have every confidence that I’ll be able to make things work by wednesday, but not that they will work right…

Perhaps at this point it’s best to make them work, and then come back around and make them work right?  But in the real world, is there ever an opportunity to do that?  I mean isn’t that the whole mantra behind tdd and clean code--make it work right?  Because, you’ll never come back to it, and someone else will be left with your mess.

Take tic-tac-toc, I could have and probably should have, just made it work.  I could have abandoned the evil minimax and just manually plugged in what should work, but I would have felt terrible about that and would have been criticized--ehrhmm--constructively critiqued on that as well--don’t get me wrong; critique is what a learner needs most, so I welcome all critique.

I should also add that these added libraries, while overall, I do believe they are for the best and I understand their value, but they’ve added another challenging learning code--i can’t mess with those to see what is actually being output--this is not all that big of a deal, it’s really just an added learning curve to it all.

Tomorrow, I’m going to bite the bullet and try it differently than I have in the past--I’m going to make it work, because I know I can and I know how to make it work.  From there, I can circle back and try to make it work better

PS Javascript is a horribly ugly language;



