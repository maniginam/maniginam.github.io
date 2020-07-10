---
layout: posts
title: "The Box Knows!"
date: 2020-07-06
---

What I am finding interesting is just how literally one must think about what he or she is coding.  I’m working on Tic Tac Toe.  I kept getting stuck on placing a played piece.  You see, I’ve set the game up so that initially, the piece in play floats above the board, so that the player can position it where he or she would like to make the play before actually committing to the play.  

When played, it was my intent to have the object ‘stick’ to that block of the game, but I couldn’t change the parameters of the game piece--that object had already been created, and so i would need a not only a new game piece object, but possibly a whole new object type--playedGamePiece.  Argh.  That felt ugly & complicated just thinking about it.  

So I tried to think about it more literally.  Alright, “who knows that a piece has been played?”.  Well, a gamePiece itself knows that it has been played--kind of...  More literally, a gamePiece knows that it has not yet been played--this is not who decides if it is played.  The board knows what gamePiece is in play, or more literally, whose turn it is and what piece is created with that turn, but it doesn’t know or care what type of piece is created, or really even that a single piece is played.  The board only knows whose turn it is, and thus what piece is in play, and it I want it to know which boxes are filled.

Ok, so the boxes!  So do i create a new object, or ugh… a new object type called PlayedBox? Ah-ha!  The boxes can have states!  Just like the board!  I don’t need a new object; i need a new state for the box & an event for said box.  Suddenly, my X’s were sticking.  Then I worked on the O’s, but oh no!  They would replace each other on already played boxes!  The board--no the boxes were allowing cheating!  

That was actually an easy fix--but I did it through the Board, which I didn’t much like, so that might need a little more work to clean it up.  

Nonetheless, I have a working game that allows a player(s) to alternate laying down x’s & o’s in the boxes of a tic-tac-toe board!  That’s all it does--well, it also notes which boxes have been played and what played piece they own, but there is no logic to that yet.  You can just fill 9 boxes with alternated x’s & o’s and then continue to click on the board until you get bored.  

Doesn’t seem like much, but I’m feeling pretty proud of that progress...

***
Rex:  
Rex is officially 2 and a half yesterday!  We took him to the zoo, and he had a blast!  He also built little puzzles all on his own, which was awesome!  And he calls things “Awesome”, which is pretty cute.

Leo:  
Leo is officially 9 months old!  While he can crawl, he still prefers his desperate wounded warrior crawl to get around.  He’s also pulling himself up on anything he can reach.
