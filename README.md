# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

Project #1: The Game
__
GAME CONCEPT: MAZE RACER
beat the clock by navigating your character through a maze using the arrow keys and try and beat your best time or take turns trying to out navigate your opponent and beat their time.

__
STRETCH GOAL 1: ANIMATIONS AND BOUNCE
Animate the transitions as the character moves through the game. if top down view of character, have them turn and face the direction they are being guided by the player. if the player navigates into a wall, "bounce" the player back one space.

__
STRETCH GOAL 2: MULTIPLE LEVELS
once the logic has been created for navigating the maze, create level 2 with a slightly more complicated maze and build in the ability to continue to add new levels.

__
STRETCH GOAL 3: LEADERBOARD
if you get a best time, be able to enter your initials and append a leader board of best times.

__
TECHNOLOGIES:
html, css, javascript or jquery?,
considering using canvas to create gameboard
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
https://www.w3schools.com/graphics/canvas_intro.asp

/////
__
WIREFRAMES:
![alt text](http://i.imgur.com/g8ownJO.jpg)

/////
__
TRELLO BOARD LINK:
https://trello.com/b/rnuIu1fc/project-1-maze-racer

/////
__
JOURNAL:

__
07/17/17
- fix win state to display winning player
- color instructions to match player icons
- present project
- issue: change configuration of key inputs for p1 to be w=up, s=down, a=left, d=right 
- issue: working on design of pages: add characters and background image to landing, ads background image to game
- issue: add 2 additional levels based on array model
__
07/16/17
- working on displaying winning player in win state
- research and working on how to score game
__
07/15/17
- working on colision detection
- found resourse on builing mazes based on arrays
- refactor code based on array positioning
- set win state
__
07/14/17
- working on error of clearing entire board
- 1:1 with nick, unblocked on clearing board
- working on collision detection on edges of canvas and board
__
07/13/17
- set key functions to move character
- error on clear, either clears whole gameboard or leaves trail of circles
- add reset button, player badges, and placeholder for timers 
__
07/12/17
create start and finish labels and create characters
- set up html boilerplate, link css and js files
- place canvas on html page, size and center
- design maze and create maze in canvas
__
07/11/17:
- write user stories and set up trello board
- review project with tight beans and get feedback
__
7/10/17:
- wireframe stetches
- set up git repo and gh-pages branch
- write out game concept

/////
__
### Overview

Let's start out with something fun - **a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – since you've already gotten your feet wet with Tic Tac Toe, it's up to you to come up with a fun and interesting game to build.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!


---

### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Include** two players (either two humans, or human and computer)
* **Design logic for winning** & **visually display which player won**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Javascript** *or* **jQuery** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables

* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your GitHub repo
* A **git repository hosted on GitHub**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

### Potential Project Ideas

##### Blackjack
Make a one player game where people down on their luck can lose all their money by guessing which card the computer will deal next!

##### Self-scoring Trivia
Test your wits & knowledge with whatever-the-heck you know about (so you can actually win). Guess answers, have the computer tell you how right you are!

---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Total__: Your instructors will give you a total score on your project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, you wonderful creature, you!_

 This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!
