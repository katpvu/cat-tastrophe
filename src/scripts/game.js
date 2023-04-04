import Cat from "./cat";
import Mouse from "./mouse"

class Game {

    constructor(ctx, cat) {
        this.ctx = ctx;
        this.score = 0;
        this.lives = 9;
        this.cat = cat;
        this.numPointsPerKnock = 59;
        this.upEventTime = Date.now();
        this.mice = [];
        this.miceGenerator;
        this.movingMice;
        this.criticalMoment;
    }

    //add event listeners for up/left/right keys and generate mice
    startGame() {
        this.createMiceCanvas()
        this.generateMice();

        let gameConsole = document.querySelector("body")

        function handlers(e) {
            e = e || window.event;
            if (e.keyCode === 38) {
                if (Date.now() - this.upEventTime > 500) {
                    this.upEventTime = Date.now();
                    this.handleUpKey(this.ctx);
                }
            } else if (e.keyCode === 37) { 
                this.handleLeftKey(this.ctx);
            } else if (e.keyCode === 39) {
                this.handleRightKey(this.ctx);
            }
            //need to revert back to normal state after every move
            let that = this;
            setTimeout( function() {
                that.revertNormalState(that.ctx);
            }, 300)
        }

        gameConsole.addEventListener('keydown', handlers.bind(this));

        this.executeMovingMice();
        this.initiateCritMoment();
    }

    createMiceCanvas() {
        let miceCanvas = document.querySelector("#mice-canvas");
        let catCanvas = document.querySelector("#cat-states")
        miceCanvas.width = catCanvas.width;
        miceCanvas.height = catCanvas.height;
        this.miceCtx = miceCanvas.getContext('2d');
    }

    executeMovingMice() {
        function fcn() {
            this.moveMice();
        }

        this.movingMice = setInterval(fcn.bind(this), 20);
    }

    stopMovingMice() {
        clearInterval(this.movingMice);
    }

    generateMice() {
        let createMouse = function() {
            this.mice.push(new Mouse(Math.floor(Math.random() * 2)))
            console.log(this.mice)
        }
        this.miceGenerator = setInterval(createMouse.bind(this), 2000)
    }

    stopGeneratingMice() {
        clearInterval(this.miceGenerator)
    }

    moveMice() {
        this.mice.forEach((mouse) => {
            mouse.move();
            console.log(this.mice)
            this.checkCollision(mouse, this.cat.limits, this.ctx, this.miceCtx);
            mouse.draw(this.miceCtx);
        })
    }

    revertNormalState(ctx) {
        this.cat.renderNormalState(ctx)
    }

    //this is working -- for critical moment - need to switch between normal and bright door
    criticalMoment() {
        this.numPointsPerKnock = 289;
        let bg = document.querySelector("#bg-door");
        let flash = function() {
            bg.src = "./assets/bright-door.jpg";
            setTimeout(function() {
                bg.src = "./assets/room-door.jpg";
            }, 300)
        }
        this.criticalMoment = setInterval(flash(), 600)
        let that = this;
        setTimeout( function() {
            that.numPointsPerKnock = 59;
            that.stopCriticalMoment();
        }, 5000)
    }

    stopCriticalMoment() {
        clearInterval(this.criticalMoment);
    }

    initiateCritMoment() {
        setInterval(this.criticalMoment, 10000)
    }


    //knock - change img to knock state, increase score points 
    handleUpKey(ctx) {
        this.updateScore();
        this.cat.knock(ctx);
    }

    //left smash - change img to smash state - if successful, remove mouse
    handleLeftKey(ctx) {
        this.cat.smashLeft(ctx);
        this.mice.forEach((mouse) => {
            this.successfulSmash(mouse);
        })
    }

    //right smash - change img to smash state - if successful, remove mouse
    handleRightKey(ctx) {
        this.cat.smashRight(ctx);
        this.mice.forEach((mouse) => {
            this.successfulSmash(mouse);
        })
    }

    updateScore() {
        this.score += this.numPointsPerKnock;
        let currentScore = document.querySelector("#score");
        currentScore.innerHTML = `SCORE: ${this.score}`
    }

    decrementLives() {
        this.lives -= 1
        let currentLives = document.querySelector("#lives")
        currentLives.innerHTML = `LIVES: ${this.lives}`
        if (this.lives === 0) {
            this.gameOver();
        }
    }

    successfulSmash(mouse) {
        let smashLimits = [150, 600];
        this.checkCollision(mouse, smashLimits, this.ctx, this.miceCtx)
    }

    checkCollision(mouse, catLimits, ctx, miceCtx) {
        let that = this;
        console.log("checking collision")
        if (catLimits[0] === 300 && mouse.isCollidedWith(catLimits)) {
            this.cat.dizzy(ctx);
            mouse.renderSmashedMouse(miceCtx)
            mouse.dir = 0;
            setTimeout( function() {
                mouse.removeDrawnMouse(that.miceCtx)
                that.revertNormalState(ctx);
            }, 300)
            this.mice.shift();
            this.decrementLives();
        } else if (catLimits[0] === 150 && mouse.isCollidedWith(catLimits)) {
            mouse.renderSmashedMouse(miceCtx);
            mouse.dir = 0;
            setTimeout( function() {
                mouse.removeDrawnMouse(that.miceCtx)
            }, 300)
            this.mice.shift();
        }
    }

    remove(mouse) {

    }

    gameOver() {
        this.stopMovingMice();
        this.stopGeneratingMice();

        //render game over page
        let gameOverPage = document.querySelector("#game-over");
        gameOverPage.classList.remove("hidden");
        gameOverPage.classList.add("start-game")
        let finalScore = document.querySelector("#final-score");
        finalScore.innerHTML = this.score;

        //stop critical moments interval
        // clearInterval(criticalMoments)

        //update highest score if applicable 
        let currentHighestScore = document.querySelector("#session-highest-score");
        if (this.score > currentHighestScore.innerHTML) {
            currentHighestScore.innerHTML = `${this.score}`
        }

        //reset game
        this.reset();
    }

    reset() {
        this.score = 0;
        this.lives = 9;
    }

}

export default Game;