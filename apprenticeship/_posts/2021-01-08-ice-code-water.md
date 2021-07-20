---
layout: post
Title: Ice Code Water
date: 2021-01-08
---

Have i mentioned my dislike of parsing strings?  I’m kidding—i know i have.  What i think i dislike more than specifically parsing strings, is refactoring ‘smelly’ code that involves string parsing, which then requires more intricate parsing of said strings.  Ugh!  

I mentioned yesterday that there were a few things about my app that i did not like the flow of, so today, after getting a fully functioning web game, i took the time to refactor.  In doing so, I inevitably broke everything!  

You see, i had multiple namespaces in turn parsing a string into more specific usages.  This was ugly.  I wanted one function to parse a string completely into a usable map, which could then be given to the game-manager to deal with all the game requirements.  Instead, I’d had one big parser that fed a semi-parsed string and other portions of it to a multimethod responder which parsed the string down further.  This was ugly because i had fed the semi-parsed string to one namespace, which handed portions of it to the game manager, which then gave it back to the former namespace.  Then at other times, I’d been giving a different semi-parsed string to a similar namespace of the other, which had been depending on the output of the manager and pulling info from this.  See?  It doesn’t even flow well to talk about how it all flowed, so all this felt like a huge violation of the DIP as well as the OCP and probably even the SRP.  Honestly, it probably did a good job of just melting down all of SOLID into an unstable, corrosive, and likely volatile liquid that would require specialized materials to contain.  Too far?  

Perhaps that’s the irony of it all though.  Solids are not supposed to flow.  Similarly, when the SOLID principles are followed, everything is compartmentalized and compiled into segregated boxes that don’t actually touch one another but lie next to an interface between them.  Then during run time, everything gets excited and thus heats up and melts a little in a way, allowing the interface to act as a membrane or a path of some sort that allows bits of information to reach their deliberate destination, resulting in a flow.  

I’ve also found irony in the fact that writing your code in a SOLID way, allows for an Agile practice.  Solids are the least agile of the phases, but perhaps my above metaphor makes some sense of that.  Or perhaps, I need to leave chemistry behind me and not bring it into my software analogies.  Oh well, it’s in my nature.  

In the chemical industry, solids handling was actually my least favorite phase to deal with.  Likely because they do not flow and they cause pluggage, plus, I’m not  good at the mechanics, and solids handling always required a lot of mechanical expertise.  Liquids & gases flow.  Then again, they often caused leaks, and ya know, water is the most detrimental material to everything!  Water could throw off quality, corrode piping, freeze in the pneumatics, cause a full shutdown due to environmental permitting issues, and even the cooling caused by rain could cause swings.  Water is the worst of them all.  

Well, now I’m thirsty, so I’ll wrap up now so I can grab a glass of compartmentalized, solidly compiled water chunks to excite under some running liquid water.  Yum!  Or maybe I’ll just grab a beer...

