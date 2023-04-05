import CriticalMoment from "./critical_moment"
import Mouse from "./mouse"

class Game {

    constructor(ctx, cat) {
        this.ctx = ctx;
        this.score = 0;
        this.lives = 9;
        this.cat = cat;
        this.numPointsPerKnock = 59;
        this.upEventTime = Date.now();
        this.mice = new Array(4).fill(null).map(()=>new Array().fill(null));;
        // console.log(this.mice)
        this.miceGenerator = [];
        this.movingMice;
        this.criticalMoment;
        this.crit = new CriticalMoment(this);
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
        this.criticalMoment = setInterval(this.crit.startCrit.bind(this.crit),7000);
    }

    createMiceCanvas() {
        this.miceCtxes = [];
        for (let index = 1; index < 5; index++) {
            let miceCanvas = document.querySelector(`#mice-canvas-${index}`)
            let catCanvas = document.querySelector("#cat-states")
            miceCanvas.width = catCanvas.width;
            miceCanvas.height = catCanvas.height;
            this.miceCtxes.push(miceCanvas.getContext('2d'));
        }
        // console.log(this.miceCtxes)
    }

    generateMice() {
        for (let index = 0; index < 4; index++) {
            let createMouse = function(index) {
                this.mice[index].push(new Mouse(this.miceCtxes[index], index))
            }
            let delay = index === 3 ? 3000 : 2000
            let that = this;
            let setMiceGenIntervals = function(index) {
                console.log(index)
                that.miceGenerator.push(setInterval(createMouse.bind(that,index), delay))
            }
            let timeStart = index === 0 ? 0 : index === 1 ? 5000 : index === 2 ? 10000 : 15000;
            setTimeout(setMiceGenIntervals.bind(this, index), timeStart)
        }
        
    }

    stopGeneratingMice() {
        this.miceGenerator.forEach((gen) => clearInterval(gen))
        // clearInterval(this.miceGenerator)
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

    moveMice() {
        this.mice.forEach((mouseArray) => {
            mouseArray.forEach((mouse) => {
                mouse.move();
                this.checkCollision(mouse, this.cat.limits, this.ctx, mouse.mouseCtx);
                mouse.draw(mouse.mouseCtx);
            })
        })
    }

    revertNormalState(ctx) {
        this.cat.renderNormalState(ctx)
    }

    //knock - change img to knock state, increase score points 
    handleUpKey(ctx) {
        this.updateScore();
        this.cat.knock(ctx);
    }

    //left smash - change img to smash state - if successful, remove mouse
    handleLeftKey(ctx) {
        this.cat.smashLeft(ctx);
        this.mice.forEach((mouseArray) => {
            mouseArray.forEach((mouse) => {
                this.successfulSmash(mouse, [150]);
            })
        })
    }

    //right smash - change img to smash state - if successful, remove mouse
    handleRightKey(ctx) {
        this.cat.smashRight(ctx);
        this.mice.forEach((mouseArray) => {
            mouseArray.forEach((mouse) => {
                this.successfulSmash(mouse, [600]);
            })
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

    successfulSmash(mouse, smashLimit) {
        // let smashLimits = [150, 600];
        console.log(mouse)
        this.checkCollision(mouse, smashLimit, this.ctx, mouse.mouseCtx)
    }

    checkCollision(mouse, catLimits, ctx, mouseCtx) {
        console.log(mouse)
        let that = this;
        if (catLimits[0] === 300 && mouse.isCollidedWith(catLimits)) {
            this.cat.dizzy(ctx);
            mouse.renderSmashedMouse(mouseCtx);
            mouse.dir = 0;
            setTimeout( function() {
                
                mouse.removeDrawnMouse(mouse.mouseCtx)
                that.revertNormalState(ctx);
            }, 300)
            this.remove(mouse);
            this.decrementLives();
        } else if ((catLimits[0] === 150 || catLimits[0] === 600) && mouse.isCollidedWith(catLimits)) {
            mouse.renderSmashedMouse(mouse.mouseCtx);
            mouse.dir = 0;
            setTimeout( function() {
                mouse.removeDrawnMouse(mouse.mouseCtx)
            }, 300)
            this.remove(mouse);
        }
    }

    remove(mouse) {
        let mouseArrayIndex = mouse.index
        let index = this.mice[mouseArrayIndex].indexOf(mouse);
        this.mice[mouseArrayIndex].splice(index)
    }

    gameOver() {
        this.stopMovingMice();
        this.stopGeneratingMice();
        this.crit.stopCriticalMoment();
        clearInterval(this.criticalMoment);

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