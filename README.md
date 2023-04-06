# Cat-astrophe
[Play Cat-astrophe!](https://katpvu.github.io/cat-tastrophe/)

Cat-astrophe is a simple and quick mini-game where you play as a cat, knocking on a door for points and smashing away incoming mice to avoid losing one of your 9 lives! In order to play, you only need to use 3 arrow keys. Up to knock, and left and right to smash mice.

![gameplay](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzljM2NjZWRhNWFjZDI3OWU5NWM3MmRmNTg5ZDA2NTMyZjZlOGU4MSZjdD1n/qi95Z7R8Y4MhxRQzi2/giphy.gif)

The number of mice as well as the speed in which the mice travels will increase, making the game more difficult over time. There is a critical moment that occurs, dictated by the flashing door, that increases the number of points per knock by a great amount. 

![crit-moment](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2FiY2IyMDdlNzkzNmRiNDY5Mzk5ZTIxOTNlMjJmYmY1MTQwYjNhYiZjdD1n/nKAaldr0AmF8xE20AN/giphy.gif)

### Features
* One of my challenges was generating mice of varying speeds at specific times of gameplay. Using a single canvas to render and clear overlapping mice was an issue early into my development. I figured that creating multiple canvases and stacking them on top of each other solves this issue. Additionally, implementing several setIntervals and setTimeouts allowed me to generate mice of differing speeds all at the same time!
* Before learning about sprite sheets, I unknowingly created my very own. I drew out all the cat and mice states on separate files before discovering the efficiency of combining them all into a singular file with all of them being equal frame size. With this, it condensed my code and made it easier to render specific states if their corresponding conditions were met.

### Features on the Backlog
I would love to add more features to make the user experience much more smooth, and make the game more difficult than it seems. Here are some features that are being considered for the future:
* Delay between each keypress. Currently, the user is able to press all the keys at the same time and the program is able to execute handlers for each keypress. There will be restrictions and delays between each key press to prevent instant canvas drawing and clearing. In order to implement this, adding a condition where after each key press, the event listeners are removed for a certain amount of time before adding them again.
* Freezing the cat after failed mice attack. Currently, the player is able to make a attack and miss without any consequences. There will be an update to this where the player will be unable to produce any plays and is vulnerable to losing lives for 1 second.

### Tools
This project was created purely using JavaScript Vanilla DOM and Canvas.
* Multiple canvases were created and used to accomodate for mice being moved and drawn at different speeds. 
* Vanilla DOM was used to render start, pause, and gameover pages, handle click events, and keypresses.

### Attributions
#### Graphics
* [Orange Cat Background](https://www.freepik.com/free-vector/cat-lover-pattern-background-design_15080931.htm#query=cat%20wallpaper&position=0&from_view=keyword&track=ais)
* [Blue Paws Background](https://stock.adobe.com/uk/images/cat-paws-background-vector/175787075) by shoo_arts
* Special thanks to Amy Nguyen for drawing the door for the background!

#### Fonts
* Codigra by Prioritype Co
