## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

####Part 1: Optimize PageSpeed Insights score for index.html

####GENERAL STRATEGIES

#####1) Minimize the size of HTML, CSS and JavaScript files

	a) node.js gulp is used for this purpose. You can read the gulpfile.js under the project root directory <project-directory>

#####2) Minimize use of render blocking resources (CSS)

	a) Use media queries on <link> to unblock rendering where it is possible
	b) inline CSS
	c) async load of CSS google fonts


#####3) Minimize use of parser blocking resources (JS)

	a) Defer JavaScript execution
	b) Use async attribute on <script>  when it is possible


###TOOLS:

The source codes are in the <project directory>/src
The deployment ( minimiziing, inlining, optimizing of the source codes) from the <project-directory>/src  directory to <project-directory> is done via node.js gulp.

####1) convert Linux command line to resize  images size
####2) node.js gulp. The gulpfile.js contains all the tasks needed to implement the above general strategies


###GOOGLE PAGESPEED tests:

####index.html http://paulmatencio.github.io/frontend-nanodegree-mobile-portfolio/index.html
	92 / 100 Mobile Speed
	94 / 100 Deskzop Speed
####project-2048.html http://paulmatencio.github.io/frontend-nanodegree-mobile-portfolio/project-2048.html
	94 / 100 Mobile Speed
	96 / 100 Deskzop Speed
####project-2048.html http://paulmatencio.github.io/frontend-nanodegree-mobile-portfolio/project-mobile.html
	94 / 100 Mobile Speed
	96 / 100 Deskzop Speed
####project-2048.html http://paulmatencio.github.io/frontend-nanodegree-mobile-portfolio/project-webperf.html
	94 / 100 Mobile Speed
	96 / 100 Deskzop Speed


###Part 2: Optimize Frames per Second in pizza.html

Add viewport to improve user experience experience
Apply same stratgies for part 1

#####LOOP OPTIMZATION

#####Reduce the number of loop counts

	Reduce the number of loops when over looping is uncessary for better user eperience. As for instance, reduce the number of moving pizza from 200 to 50 or even less. The current main.js has 40 moving pizzas.

#####Reduce the cost of loop

	Move invariant  off the loop. As for instance, the computation for old size and new size of the pizza. This can be done ouside the resizePizza() loop once.

####Objectives
	60 fps or higher.
	Tome to resize pizzas < 5ms

	You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).


##### FPS and pizza resizing ( http://paulmatencio.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html)

Time to generate pizzas on load: 16.015ms <<<

main.js:1 10 Average time to generate last 10 frames: 6.298500000000135ms
main.js:1 20 Average time to generate last 10 frames: 4.834500000000207ms
main.js:1 30 Average time to generate last 10 frames: 4.370500000000175ms
main.js:1 40 Average time to generate last 10 frames: 4.839499999999862ms
main.js:1 50 Average time to generate last 10 frames: 4.640999999999986ms
main.js:1 60 Average time to generate last 10 frames: 4.798500000000058ms
main.js:1 70 Average time to generate last 10 frames: 4.597500000000037ms
main.js:1 80 Average time to generate last 10 frames: 4.682999999999902ms
main.js:1 90 Average time to generate last 10 frames: 5.227499999999873ms
main.js:1 100 Average time to generate last 10 frames: 5.172999999999865ms

Time to resize pizzas: 3.695000000006985ms

###SUPPORT DOCUMENTATION
####Udacity P4 supporting courses
* https://www.udacity.com/course/viewer#!/c-ud884-nd/l-3342528615
* https://www.udacity.com/course/viewer#!/c-ud860-nd/l-4127088573

####Udacity discussion forum
* https://discussions.udacity.com/categories

####Udacity team room
* https://www.udacity.com/teams/#/chat/nd001


### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
