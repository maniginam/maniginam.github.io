---
layout: posts
Title: Sight without Site
date: 2021-03-09
---

Blog 2 for the day since i wrote yesterday’s this morning…  I feel like both a lot as well as hardly anything at all has happened since then.

I worked more on confetti.  I still haven’t been able to get anything to show in the browser upon a perfect estimate--not even a rectangle or a triangle or anything, but I think it’s because, nothing is actually calling update yet.  Then render function has certainly been called as I was able to log the entire component from that function, but have not been able to do so from the update function.  I’ve checked the rookie-mistakes lists as all the web guides listed those out as extremely common--it’s probably what it is.  

Around mid-mid-day, i finally gave up on trying to get anything to show up--i may need help--and decided to focus on the math and building the confetti--even if blind and unable to see the sparkles.  It’s okay, i can depend on my tests--or can I?!  

Argh, i was already to start working on the sparkles of the confetti (sparkles is a much more glamorous word than particles; though less nerdy), my tests kept failing because my main context function requires a component to be sent it, and if it’s not running, i don’t really have a component.  I found some functions in the helpers to help me render the page.  Those finally helped me get over one hurdle. 

In the end, i just worked out a way to make smaller functions that didn’t require a DOM node or component.  At that point, i was able to set a decent enough pace for progress.  I now have have a list of sparkles that are ready to be shot to the top of the browser screen and subsequently allow the force of gravity<sup><sup>1</sup></sup> to bring them back down to the bottom of the browser where they will disappear forever.

I went this route, because i realized that i don’t have to have visible animation to continue making progress.  This is something that i’ve allowed to hold me up in the past--I mean even tictactoe, i felt like i couldn’t get started on the game until i had a working gui, and i even wrote an alternative way to play in the terminal before I had a working gui, because I was so set on having ‘somewhere’ to play so that I could ‘see’ it.

I don’t need that now though.  Now I understand that my tests are my true eyes.  And, yes, with something like confetti that is very visual, i do in fact need to be able to run it in the brower to make sure that it actually happens as it seems this is nearly impossible to test, but i don’t need eyes into the browser to to test the math and the behavior of the confetti.  For that I do not need site (**ba-dump-bum**  Have i mentioned i love puns?).

<sup><sup>1 - In the case of this post, “gravity” is nothing more than a calculation based on the Earth’s true gravity.  The reader should not assume that the Earth’s gravity is the actual force pulling down these ‘sparkles’ nor that the gravity in this post is attempting to overcome the true gravity of the Earth in a conspiracy to pull down all the sparkles. The sparkles mentioned in this post are completely isolated from the real world and are simply programmed to fall at a calculated acceleration similar to that of the Earth’s gravity (9.8m/s<sup>2</sup>).  Sorry for any confusion.</sup></sup>


![Leo Dressed for School](https://maniginam.github.io/blog/pics&vids/LeoDressedForSchool.jpeg#thumbnail)


