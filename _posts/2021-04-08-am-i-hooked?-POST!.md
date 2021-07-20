---
layout: post
Title: Am I Hooked? POST!
date: 2021-04-08
---

Nope nope nope.  I spent the day trying to get this hook to work, and the frustrating part is that i am hooked!  I sent the post with no errors, and I get the initial response back.  

I’d originally tried to do this through an ajax route, btu my handler kept returning nil even when i forced it, so then i went back to the web-route.  Now I was getting the correct requests back, but only the original.  

The API guide & reference all says that once hooked, Trello will automatically send POST requests whenever something relative to the idModel changes.  I was using the list id, but then i thought i’d change to the board just to have some more breadth to play with. 

I changed this.  I added cards.  I deleted cards.  I added lists.  I changed lists & cards.  No requests were coming through.  Perhaps it has to do with anti-forgery or tokens & security, but the websocket should still see the request come through.  

I’m missing something.  I will figure out what that is tomorrow.  For now, I think I’m off to bed.
