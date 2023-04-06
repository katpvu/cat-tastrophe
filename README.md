# Cat-astrophe

## Background

A cat is very bored and wants to play with her owner. She knocks on the door aggressively. Each knock (up key) on the door increases your score by 59 points. Coming from the left and right of the screen are play mice coming to attack her. She must smash those mice, using the left and right keys, before it touches her. If it does touch her, she loses one of her 9 lives. If she misses the attack and smashes nothing, she will freeze for 1 - 1.5 seconds before being able to knock/smash again. There will be random critical moments (lasts 5 seconds) where the cat evolves into a big cat, in which every knock on the door is stronger thus increased to 250-400 points per knock. Once the critical moment has elapsed, she will transform back into a normal house cat and each knock is 100 points. However, the game gets more difficult over time because the number of mice will increase and there are 4 different colored mice traveling at different speeds. The game is over when all of her lives are lost. 

## Functionality & MVPs

In Cat-astrophe, users will be able to:
* See and read instructions on the home page and click "Start Game" once ready.
* Use up, left, right keys to:
  * Up: knock on the door
  * Left: smash attack mice on the left side of the cat
  * Right: smash attack mice on the right side of the cat
* Click "Play Again" button when the previous game is over.
  
In addition, this project will include:
* A production README

## Wireframes
[Link to Wireframes](https://www.figma.com/file/SDYybJ6L5S585wIjpIYE5B/Cat-astrophe-Wireframe?node-id=0%3A1&t=opDBz5HAaghEkgOK-1)
* Wireframes for the Home Page, Basic Gameplay, and Game Over Page.
* Elements that will persist: 
  * Links to this project's Github repo and LinkedIn
  * Controls display
  * Title of game
  * Highest Score
  
## Technologies, Libraries, APIs
* Canvas
* Vanilla DOM Manipulation

## Implementation Timeline
* Friday afternoon and weekend:
  * Setup project directory. 
  * Create Cat, Mouse, and Game classes.
  * Create/find visuals for these states:
    * Cat
      * Cat in normal sitting state
      * Cat in knocking state
      * Cat in smashing state (left and right)
      * Cat when touched by mouse
    * Mouse
      * Mouse in normal state
      * Mouse when smashed
  * Plan what containers, canvases, other HTML elements to create in index.html file
    * Plan content layout for these elements
  * Be able to render the basics of home page
  * Set up icons that link Github repo and LinkedIn, title of game, canvas for game, highest score display, controls legend, add some paw prints for decoration.
  * Export fonts
  
* Monday: 
  * Need render methods for start game and game over, that will be positioned on top of game canvas
  * Implementation of underlying game logic 
    * Cat = stays in center of game console 
      * Event: keydown where e.key === "ArrowUp" / "ArrowLeft" / "ArrowRight"
    * Mice = generated on a set time from either the left or right side of the console. 
  * Time between each knock will be fixed - not dependent on the speed at which the user is pressing the button.
  * Each smash not fixed - will smash right when user presses L/R key
  

* Tuesday:
  * Add sprite sheets and drawImage methods.

* Wednesday:
  * Focus on game pause and game reset. 
  * Debugging
  * 

* Thursday Morning: Deploy to GitHub pages and rewrite this proposal as a production README.
 
