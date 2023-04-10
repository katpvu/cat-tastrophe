# Cat-astrophe
[Play Cat-astrophe!](https://katpvu.github.io/cat-tastrophe/)

Cat-astrophe is a simple and quick mini-game where you play as a cat, knocking on a door for points and smashing away incoming mice to avoid losing one of your 9 lives! In order to play, you only need to use 3 arrow keys. Up to knock, and left and right to smash mice.

![gameplay](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzljM2NjZWRhNWFjZDI3OWU5NWM3MmRmNTg5ZDA2NTMyZjZlOGU4MSZjdD1n/qi95Z7R8Y4MhxRQzi2/giphy.gif)

The number of mice as well as the speed in which the mice travels will increase, making the game more difficult over time. There is a critical moment that occurs, dictated by the flashing door, that increases the number of points per knock by a great amount. 

![crit-moment](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2FiY2IyMDdlNzkzNmRiNDY5Mzk5ZTIxOTNlMjJmYmY1MTQwYjNhYiZjdD1n/nKAaldr0AmF8xE20AN/giphy.gif)

### Approaches
#### Mice Generation
One of the goals of the game was to produce moving mice across the game console at various times and speeds. Originally, all the mice were being drawn on the same canvas as the cat, however, the transparent background became visible if two mice were overlapped after successful collision detection. As a solution, separate canvases were made to accomodate for each speed. Currently there are only four canvases for four speeds, but more can be added if desired. The contexts of the mice canvases were queried and stored in an array for indexing, allowing each canvas to be responsible for rendering Mouse objects with one specific speed. The size of the speeds array and miceCtxes array are directly proportional, therefore the index variable in the code snippet below links the relationship between a canvas and a speed. 

```JavaScript
createMiceCanvas() {
        this.miceCtxes = [];
        for (let index = 1; index < 5; index++) {
            let miceCanvas = document.querySelector(`#mice-canvas-${index}`)
            let catCanvas = document.querySelector("#cat-states")
            miceCanvas.width = catCanvas.width;
            miceCanvas.height = catCanvas.height;
            this.miceCtxes.push(miceCanvas.getContext('2d'));
        }
    }

    generateMice() {
        for (let index = 0; index < this.mice.length; index++) {
            let createMouse = function(index) {
                if (!this.paused) {
                    this.mice[index].push(new Mouse(this.miceCtxes[index], index))
                }
            }
            
            // Set up delay between each Mouse object creation
            let delay = index === 3 ? 3000 : 2000
            let that = this;

            let setMiceGenIntervals = function(index) {
                if (!this.paused) {
                    that.miceGenerator.push(setInterval(createMouse.bind(that,index), delay))
                }
            }
            
            // Determines when to start generating mice for each speed
            let timeStart = index === 0 ? 0 : index === 1 ? 5000 : index === 2 ? 10000 : 15000;
            setTimeout(setMiceGenIntervals.bind(this, index), timeStart)
        }
        
    }
```

#### Sprite Sheets
Originally, there were separate files for each of the cat and mice states, however, the canvas sizes for each file were too big and had differed from one another, making it difficult to render images at exactly locations, with the same resolution and size. Later, these files were merged into a singular sprite sheet. I was then able to render a cat or mouse state depending on the desired frame allocated for a specific situation. For example, the `drawState()` function from the Cat class below will draw a specific portion of an image based on the frame being passed in. 

``` JavaScript
    drawState(ctx, frame) { 
        ctx.drawImage(this.catStates, 234 * frame, 0, 234, 336, 355, 0, 234, 336)
    }
```

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

### Features on the Backlog
I would love to add more features to make the user experience much more smooth, and make the game more difficult than it seems. Here are some features that are being considered for the future:
* Delay between each keypress. Currently, the user is able to press all the keys at the same time and the program is able to execute handlers for each keypress. There will be restrictions and delays between each key press to prevent instant canvas drawing and clearing. In order to implement this, adding a condition where after each key press, the event listeners are removed for a certain amount of time before adding them again.
* Freezing the cat after failed mice attack. Currently, the player is able to make a attack and miss without any consequences. There will be an update to this where the player will be unable to produce any plays and is vulnerable to losing lives for 1 second.
