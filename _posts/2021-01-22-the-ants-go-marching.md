---
layout: posts
Title: The Ants Go Marching
date: 2021-01-22
---

I put a lot of thought into how to go about this client-side ttt this morning.  Now that I’m mildly familiar with scripting and how it works, I was ready to get started on writing the code to do it, but I was a little confused on where to start.  It made sense to start with ttt and i was told to do everything in ttt, but who was going to start the server?  I suppose I could have webttt start the server and call ttt which could then open a socket to connect to webttt and then use webttt’s set up code—

***--bright white flash of light as i saw grim images of the future: The world had exploded into devastation and the end of mankind because this route would result in ttt depending on webttt when webttt already depends on ttt!***.

Whoo! That was a close one!  Let’s think about a different way of doing this...

About midday, I took a break to make some lunch.  I’ve mentioned these breaks before and how miracles of thought happen during them, and this one was no different.  Funny how getting away from the computer screen can actually be extremely productive and at times way moreso than just staring the computer down in a dual match consisting of pushing buttons hoping to defeat the computer—but the computer doesn’t even realize that you are there...

As I made my lunch, i recalled Micah coaching me that this app might be usable in say a blog.  Speaking of, i mentioned that to him months ago that I really wanted to get ttt on my blog, because well, who doesn’t love playing a game of X’s & O’s?  Anyway, as i watched my pizza spin around on the pizzas, I thought about how that would work, and it occurred to me:  If it were on my blog, a server would already be running.  

I don’t need to start a server!  I just need files of instructions (i.e. code) to tell the client’s computer through the browser what to do.  Huh…. Okay, so upon the first request to the ‘home’ page, ttt appears.  After that, there is script written in the files that have already been served that allow the user to play the game.  Its completely independent of the server, the database, or where it’s playing.  This game needs to run independently of everything.  I can use my server or the figwheel server to build it, but after that, it can’t rely on either of those.  It must live in a little bubble all on its own—no, it must be a little seed that is nothing but a seed unless given the input to grow.  Upon receiving that input (ah! Water again…), this already contains all the code it needs to grow, and so it grows.  It doesn’t care who’s pot or where it is growing, it just grows according to its code.

This is client-side application.  The server serves seeds to be nurtured and given inputs to help them grow.

Ok, so it must be done in ttt, because the pot (aka server—grow with me here…(oh man, two puns in one!!  That’s a new win!  ps i love puns!)) doesn’t matter.  I don’t even need to touch webttt, which i proved by starting my server from within my ttt directory, and then running figwheel, and voila!  The homepage came up.  

Ok.  Cool!  Very cool!  Alright, now that i have a path forward and a plan, i need to write a test.  What does this test look like?  I guess it could be the slurp of index.html or maybe just the :waiting status of the game?  “Just write something—it’s gonna fail any way until i figure out what to do.”  

Woah!  The specs are not working in cljs..  Actually, while IntelliJ knows about ttt while I’m typing the namespaces, it doesn’t know how to compile the ttt even though it’s in the same src file… Oh no!  Another roadblock—and I had plan!!! 

Detour!!!  Google this—“why doesn’t clojurescript recognize existing clojure namespaces”?!!!  Find a thing on it and go to make changes...wait wait!  Let’s commit before we break it all by changing the project.clj!  Okay.  Committed.  

Rearranged project.clj and refactored/repackaged all of ttt according to the article I found, and after a little tweaking, my original tests still passed—phew!  Figwheel still ran too!

For the test, let’s go with slurp.  Cljs doesn’t know slurp…  makes sense i guess.  Okay, let’s go with :status of game.   Run the tests, everything passes! 

But hey...!  It didn’t run my cljs test!  Let’s try to force just that test to run.  

Blank space…

Argh…. Let’s pull up speclj.  Read the README.  Oh man (as I’m sure they said too as they were building), cljs *is* different than clj, and in fact, cljs needs to be compiled into c files before it can be ran and then gets run off of those!  

I spent the rest of the day, digging through and modifying project.clj.  At the end of the day, i was regretting not having called Micah to ask for help on getting project.clj set up to compile correctly.  The whole way to picking up the boys from school, i was kicking myself for not calling him.  I should have called him for help.  I mean, i was stuck just trying to get tests to **run** not even to pass!  I felt like I’d had a completely unproductive day.  

Then, as i pulled up the drive to school, i rethought that.  Had I called Micah, he would have helped me and I would have lost, what I believe now is, a really important opportunity to learn something necessary to be productive later.

No.  I might not have written much (read any) production (or tests) today, but I learned a ton today.  And I think what I learned today might be more important than a lot of what I’ve learned along this whole journey.  Let me explain.

Early this afternoon, I was essentially copying and pasting other people’s configurations into the project.clj and getting things to work while mildly under the impression that “yeah yeah, i know the project.clj is ”important”, but it’s not **real** code, so why waste precious time dealing with this when i can learn how to write clojurescript, which **is** real code and thus what I’m supposed to be learning?”.

But by the end of the day, using figwheel, leiningen, & speclj as my guides, i was reconfiguring the :cljsbuild of project.clj all on my own, and understanding what I was doing with it.  I suppose it could be said, that this is more important than the production code, because project.clj is kind of the heart of it all.  Or perhaps it’s the brain.  The production code won’t function without project.clj, but project.clj won’t do much without the production code, so they need each other to function.  Maybe there’s no brain at all in software (hahahaha!), but seriously!  Perhaps there’s no brain—i mean the most efficient and productive little programs that I know of don’t have brains and execute almost flawlessly on a daily basis doing hard, difficult, and dangerous labor—ants!  They just do, and they do exactly as they are supposed to do, and when they don’t (usually due to some kind of parasitic fungus), the other ants kill or exile them as if they are a bug (ha!  I’m on a roll tonight!) in their mass program.

So yeah, maybe there’s no brain.  Perhaps project.clj is the dna for the program, and the production code is the blood that transfers the data from place to place across the interfaces of the body (do ants have blood?!)  Okay, maybe I’m getting too into my own silly metaphors, but i think it helps me think through it all.  Afterall, as I’m learning more and more, I’ve realized that software is abstractly, in some way, alive and simply responding to inputs—just as we do—just as ants do.

Anyway…. Once i rethought the day, i didn’t feel so unproductive.  I learned something that I’d been putting off, and even while knowing it was important, I’d been neglecting and writing-off project.clj as something that could be learned later and that I didn’t need to know now because *Production Code* is important and the only thing that matters!!!!  

Okay, okay, I’m still no expert, but i think i understand the build…. at least a little bit more than I had this morning…. It might not feel like immense productivity, but at the core dna of it all, it’s probably been one of the more important days of learning thus far.  The importance of the things that you think just don’t matter...



