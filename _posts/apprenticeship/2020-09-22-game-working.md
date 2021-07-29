---
layout: post 
tags: apprenticeship
categories: apprenticeship
title: game-working
date: 2020-09-22
---

Where do these days go?  Honestly, when i first thought about leaving my job, i wondered how i would spend the days and if they would drag at all since I’d be locked away in a trailer all day, but they don’t.  Not for a second.  By 11am, I’m usually already fretting that the day is almost over—I still have a max of 6 hours left to work at that point, so it’s actually not even half over.  It’s just so easy to get sucked into the code and lose track of time and the rest of the world, which by the way, i keep forgetting to do research on.  Not the world in itself, just what’s actually go on in the world.  I need to better understand the accomplishments of the current president so that i can be just a little more informed.

Anyway, today was a great day!  First, I recorded a first take on coin changer.  It went pretty well except for a couple moves, but all in all, it was a good take.  Then, wait for it… I got TTT ***fully functional!!!***  Remember, yesterday i had human v human working and had just gotten computer v computer working at the end of the day, but computer v human still had a bug.  

At first i thought it was a timing bug—or order dependency rather—in the order in which it was calculating each iteration of the map, but i think now that it’s actually that when it calculates through the map, it uses the input map for each item within the map.  

In other words, if there were a key called :game-over which would switch to ‘true’ after the game is won or the board is full, then on the next iteration of the map calculations, it would set the :status key of the game to :over based on (:game-over state) now being true.  The problem in my case was that i had a key called :ai-turn which depended on :game-over.  So while the game was actually over due to a full board in iteration 0, :game-over wasn’t set to true until iteration 1, then :ai-turn, which waited for :game-over to be true, stayed true until iteration 2, which meant that in iteration 1, :ai-turn was still true and thus called make-move with a full board resulting in a null pointer--actually it was an error on applying min to an empty list.  In any case, make-move should not have been called after iteration 0, and so as soon as I got that straightened out, everything worked!

That was very exciting!  Additionally, i have it looping—or rather resetting the GUI state back to setup mode if the button to play-again is clicked, so that you can play over & over without having to restart the program.  I also have it working to call main with either a default or terminal argument from the command line to run either of those versions.  Getting GUI into the command line is a little harder though.  If i require the GUI in the namespace of the main function, it automatically runs the GUI even if i have it set to terminal—it actually runs both game, but if i take the require out of the namespace, it wont’ run the GUI at all, so i need to figure that out.  I also need to clean up my game now that i have it working.  Figuring out how to get something to work leads to a little bit of a mess.  I know that I can combine a couple of my namespaces and that a few functions can either be deleted or moved to more appropriate spaces.

All in all, great progress and a good day!

