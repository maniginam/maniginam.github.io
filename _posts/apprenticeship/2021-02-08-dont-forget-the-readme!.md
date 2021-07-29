---
layout: post 
tags: apprenticeship
categories: apprenticeship
Title: Don’t Forget the ReadMe!
date: 2021-02-08
---

The key take away today is that producing a working program alone is not sufficient and will not qualify as complete—this much for the most part I knew, but for the record and for my own recollection I’ve created a checklist of minimum requirements to have completed prior to submitting & showing off your masterpiece:

*	Must have tests to prove function
	*	Tests are equally as important as production code.
		*	They must compile
		*	They must pass
	*	Tests are equally as important as production code.
		*	They must compile
		*	They must pass
*	No duplicate code! 
	*	To be more specific, ***ALL*** tests must pass
		* 	if composing with lein spec -a, do not forget to run lein spec!!
		*	If even only one test fails, your program is ***not*** complete!
			*	Tests are equally as important as production code!
	*	no tests should depend on external dependencies (i.e. MySQL)
		*	if there are any that are required to prove the chosen database or interaction with the external software, those should be commented out so that specs can be run without that dependency.
*	All code must compile
	*	Well, duh!!!
*	Nope!  For whatever reason, weird things sometimes happen, so, if all tests are passing & program is executing perfectly, but there’s still a compile time error, your program is not done!  Fix it and try to understand it.
		*	Do not assume anything is an IntelliJ (or whatever IDE) error!
		*	Just because it works, doesn’t mean it’s working—or doesn’t mean it is complete rather.
*	***Don’t forget the README!***
	*	README should describe all dependencies, how to compile the code, how to run the app, and how to run the tests.
	*	Upon reading, user should be able to pull your repository, follow instructions, and be thrilled to see a plethora of green passing tests and no red—after all, your program is not complete if you have failing tests, because
		*	Tests are equally as important as production code!
	*	Once complete, pull the repository into a fresh repository and follow your README to ensure that it is correct and that the program functions outside of the one in which it was created.
*	LOC your code!
*	*L* *O*ption *C*ommand 
		*	All code should look pretty
		*	Don’t forget to alphabetize the :requires!
*	When troubleshooting, focus on the namespace at hand.
	*	This means that once you have commented the entire namespace out line by line, don’t get distracted by a newly failing or non-compiling namespace.  It’s probably the same issue, so focus on the one you’ve just commented out.  
	*	It is easy to troubleshoot through one namespace, comment the whole thing out (line-by-line), know the culprit, but then be flabbergasted that a new namespace failed when you hadn’t even touched it!
		Don’t!  Focus on the namespace at hand!
*	And last but not least
	*	Tests are equally as important as production code
		*	They must compile
		*	They must pass

Oh!  And don’t forget to update the README!  

Ok, i think I’ve drilled that into my own brain enough.

It’s so easy to think, well, everything is working just as I want it to on the production side—i mean *you* can now play tic tac toe on my blog site, so why do i need to fix the compile error or those three failing tests—i mean the tests are obviously failing because of some error in the test not the production code, and does it really matter that the tests aren’t compiling if the app runs?

Yes.  It does.  The tests are a huge part of your credibility.  Who is going to trust you if your code—your tests—don’t compile?

 And besides, if your production code is perfect, it shouldn’t be too hard to fix those failing tests—Ha! I’m going to choke on that for a second—it’s all true, but if you’re new like me and your tests are fragile and rigid, fixing your tests might be a huge pain, but it’s a requirement.  You are not done if your tests do not both pass and compile—it’s silly to say both words every time, but this morning, all my tests were passing, despite having a compile error.  Sometimes it can seem like they are passing when they are not even compiling!

Anyway, for any future apprentices, remember to fully understand all expectations prior to submitting (ask for a checklist to keep on hand or use this one), remember that tests are equally as important as production code, and ***don’t forget the README!!***

