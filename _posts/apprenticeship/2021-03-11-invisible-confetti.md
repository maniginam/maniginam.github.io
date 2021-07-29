---
layout: post 
tags: apprenticeship
categories: apprenticeship
Title: Invisible Confetti
date: 2021-03-11
---

I did what I said I’d do, which is read about and focus on learning about this create-class function right from the start today.  

I can’t remember at what point it was, but I got really sick of having to repeatedly enter two matching estimates in order to trigger the confetti push. I went forward to temporarily set the room to always call confetti, but even this was annoying.  Then I realized, hmmm, maybe I can create a sandbox for just the confetti effect.

I successfully did this and added a button on the screen that triggers the confetti so that I can make sure it’s working on demand.  This was an awesome thing to do and made things much easier.  

This function though, i still couldn’t get it to work. I’d actually gone back to try to write the component out manually just to get something to work.  I ended up adding a time-elapser to my sandbox back just to make sure things were rendering, then i continued on confetti. 

I worked for a little longer on the function and then suddenly, it was getting rendered--i had to move the canvas atom outside the function to be local in the namespace.  Now, i still don’t have any confetti pieces fluttering on the page, but my functions are being called which is exciting.  

