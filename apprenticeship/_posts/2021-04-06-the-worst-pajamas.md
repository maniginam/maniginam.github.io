---
layout: post
Title: The Worst Pajamas
date: 2021-04-06
---

This morning, I showed Micah the progress that I’d made on trello integration.  It was a good proof of concept that it can be done.  He’d made one suggestion that I knew was coming as it was how i’d originally tried to design it.  Do all the background work with the first request to the server instead of having the server request from Trello and then give that raw data of stories back to the client side to let the client parse it just so that it could turn around and request from the server again.  

I knew this was bad, and it was not how I’d wanted to do it, but the json, while pretty easy to parse in the clojurescript world, had colons : on the backside of all the keys, as json would.  Well, the edn couldn’t read this and walk wouldn’t keywordize it--in cljs i was able to just .parse it as a js/json, then read and finally keywordize it with js->clj.  But this wouldn’t work in clj, so it came down to--you know my favorite activity {eye roll}--parsing the string.  

The colons were the first problem, but that shouldn’t have been difficult. The next problem was that clj believed that the curly braces were part of the string and tied to the first should-be-keywords in each map.  I split that string, i escaped that string, i keywordized it, I read it, i split it again, i walked it all over, i even flattened it--nothing would parse this string to the format i needed.  

I got lunch and then deleted everything I’d done.  

Then I had a clever idea: split it at the colons as I’d originally done, then join it back together.  Then read it.  Then keywordize it.  

That worked, and thus I finally had a maneuverable map to use.  Got it all working.  Got it to not duplicate stories in the rooms--or so I thought because my tests were passing, but, in fact, it was still duplicating.  Fixed that for real--unfortunately I opted to use sets to do so, but while expensive, it seemed cleanest.  

Finally, i got to start on the webhook.  “This should be easy,” i thought.  I mean all i had to do was make a request, and I was already comfortable with this.  “404! 404! 404!”  didn’t work.

Tried a few more things; got more 404’s, and that’s where I had to leave it.


***
Leo:
The other night we went to get Pizza.  Leo became obsessed with the parmesan shaker and would repeatedly shake it a couple times (sometimes nothing came out), then put it down, and pinch a couple granules to eat.  Over & over.  Then he got a lesson about lights from the best science teacher I know:
![Leo Learning from Bobby!](https://maniginam.github.io/blog/pics&vids/LeoLearnsFromBobby.jpeg#thumbnail)

Today, I saw a very disappointing pajama set in my endeavor to get Rex some new pajamas that actually fit him.  It’s below.  It’s embarrassing as I hope the makers feel.  It’s just so wrong! 
![They should be embarrassed!](https://maniginam.github.io/blog/pics&vids/embarassingPjs.jpg#thumbnail)


