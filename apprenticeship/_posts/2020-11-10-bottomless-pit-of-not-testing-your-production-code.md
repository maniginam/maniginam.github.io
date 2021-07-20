---
layout: post
Title: Bottomless Pit of Not Testing Your Production Code 
date: 2020-11-10
---

So there I was, fixing all the TODOs in TTT.  I finished converting all the :refer :all’s to :as some-nickname and got all the specs modifying some core game-model from ttt.core.  Then I began the task of maybe getting the terminal game to play similarly to the GUI game by repeatedly updating the game-map.  

All of a sudden, i found myself moving all of my GUI specific update functions to the game-master namespace.  I was kind of blown away by this.  At first I wasn’t convinced that it would actually work (even though I kind of knew that it would), and it required me to move a lot of GUI specs that involved update & setup to the game-master-specs.  Then I saved.

GREEN GREEN GREEN!!!!  All the tests passed, and I now had ‘pre-written’ functions to use to setup and update the terminal game!

I think I got a little too excited because i kept on going under the impression that I already had tests for all of this, so may not need more, but dun-dun-dun… As several of my terminal tests as well as unrelated tests began to fail for no good reason, I realized I’d fallen into the bottomless pit of not testing your production code.  Once in this pit, there’s no end and there’s certainly no easy way out, except to write your tests and maybe even start over.

Unfortunately, this is where I needed to bail to go get the kids, but I’m still excited about what happened there.  All these functions that I’d believed were supposed to be owned by the GUI, were actually supposed to be owned by the game master all along, which makes complete sense now by the way!  Furthermore, now the terminal game should be able to control it’s flow with one recursive setup function instead of relying on many functions to dictate where to go next.  That probably doesn’t make any sense, but a lot my terminal functions have order-dependent nested ifs.  For instance if there are two users, then return a nil level, but now, I have the function assigning the number of users to update the status of the state appropriately, which will guide the game to go to the next appropriate function without having to actually call each function.  Did that make more sense?  Maybe not…. But it’s still pretty exciting!

I should be able to finish all of that up tomorrow and in the end, have a pretty clean game (not perfect, but much better than it was and than I thought I was going to get it).  Yay!

***
Rex:  
Rex is currently in dance class.  They pick him up from school, take him to dance, and then bring him back.  Each day when I pick him up on the days he goes to dance, he reports out with such excitement and enthusiasm “Mommy!  I went to dance!  I stood on a bump and went through a tunnel and jumped on the dots!  It was fun!  I want to do that again!”  I just love his excitement! 

Leo:  
How can a kid be 100% asleep (like passed out with limp limbs), and then when ever so lightly set down into his crib, he jolts awake screaming and refuses to go back to sleep?!

