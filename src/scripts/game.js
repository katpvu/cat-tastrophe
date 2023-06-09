import CriticalMoment from "./critical_moment"
import Mouse from "./mouse"


class Game {
    constructor(ctx, cat) {
        this.started = false;
        this.ctx = ctx;
        this.score = 0;
        this.lives = 9;
        this.cat = cat;
        this.numPointsPerKnock = 59;
        this.upEventTime = Date.now();
        this.mice = new Array(4).fill().map(()=>new Array().fill(null));;
        this.miceGenerator = [];
        this.crit = new CriticalMoment(this);
        this.paused = false;
        this.firstGame = true;
        // this.knockSound = document.querySelector('#cat-knock-audio')
        this.cat.renderNormalState(ctx);
        window.addEventListener('keydown', this.handlePause.bind(this))
    }

    startGame() {
        this.started = true;
        this.setUp();
        this.createMiceCanvas()
        this.generateMice(); //set interval
        this.executeMovingMice(); //set interval
        this.criticalMoment = setInterval(this.crit.startCrit.bind(this.crit),7000); //set interval
    }

    setUp() {
        this.enableKeyPresses();
    }

    handlers(e) {
        e = e || window.event;
        if (!this.paused) {
            setTimeout(() => this.delayed = false, 3000)
            if (e.keyCode === 38) {
                if (Date.now() - this.upEventTime > 500) {
                    this.upEventTime = Date.now();
                    this.handleUpKey(this.ctx);
                }
            } else if (e.keyCode === 37) { 
                if (Date.now() - this.upEventTime > 200) {
                    this.upEventTime = Date.now();
                    this.handleLeftKey(this.ctx);
                }
                // this.handleLeftKey(this.ctx);
            } else if (e.keyCode === 39) {
                if (Date.now() - this.upEventTime > 200) {
                    this.upEventTime = Date.now();
                    this.handleRightKey(this.ctx);
                }
                // this.handleRightKey(this.ctx);
            } 
            //need to revert back to normal state after every move
            let that = this;
            setTimeout( function() {
                that.revertNormalState(that.ctx);
            }, 300)
        }
    }
    enableKeyPresses() {
        let gameConsole = document.querySelector("body");
        gameConsole.addEventListener('keydown', this.handlers.bind(this));
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
    }

    generateMice() {
        for (let index = 0; index < this.mice.length; index++) {
            let createMouse = function(index) {
                if (!this.paused) {
                    this.mice[index].push(new Mouse(this.miceCtxes[index], index))
                }
            }
            let delay = index === 3 ? 3000 : 2000
            let that = this;

            let setMiceGenIntervals = function(index) {
                if (!this.paused) {
                    that.miceGenerator.push(setInterval(createMouse.bind(that,index), delay))
                }
            }
            let timeStart = index === 0 ? 0 : index === 1 ? 5000 : index === 2 ? 10000 : 15000;
            setTimeout(setMiceGenIntervals.bind(this, index), timeStart)
        }
        
    }

    stopGeneratingMice() {
        this.miceGenerator.forEach((gen) => clearInterval(gen))
    }

    executeMovingMice() {
        this.movingMice = setInterval(this.moveMice.bind(this), 20);
    }

    moveMice() {
        let flattenedMiceArray = this.mice.flat();
        flattenedMiceArray.forEach((mouse) => {
            if (!this.paused) {
                mouse.move();
                mouse.draw();
                this.checkCollision(mouse, this.cat.limits, this.ctx);
            }
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
        let flattenedMiceArray = this.mice.flat();
        flattenedMiceArray.forEach((mouse) => {
            if (mouse.pos[0] > 100) {
                this.successfulSmash(mouse, [150]);
            }
        })
    }

    //right smash - change img to smash state - if successful, remove mouse
    handleRightKey(ctx) {
        this.cat.smashRight(ctx);
        let flattenedMiceArray = this.mice.flat();
        flattenedMiceArray.forEach((mouse) => {
            if (mouse.pos[0] < 700) this.successfulSmash(mouse, [600]);
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
        if (this.lives <= 0) this.gameOver();
    }

    successfulSmash(mouse, smashLimit) {
        this.checkCollision(mouse, smashLimit, this.ctx, true)
    }

    checkCollision(mouse, catLimits, ctx) {
        let that = this;
        if ((catLimits[0] === 150 || catLimits[0] === 600) && mouse.isCollidedWith(catLimits)) {
            mouse.renderSmashedMouse();
            setTimeout( function() { mouse.removeDrawnMouse() }, 300)
            this.remove(mouse);
        } else if (catLimits.length === 2 && mouse.isCollidedWith(catLimits)) {
            this.cat.dizzy(ctx);
            mouse.renderSmashedMouse();
            setTimeout( function() {
                mouse.removeDrawnMouse()
                that.revertNormalState(ctx);
            }, 300)
            this.remove(mouse);
            this.decrementLives();
        }
    }

    remove(mouse) {
        let mouseArrayIndex = mouse.index;
        let index = this.mice[mouseArrayIndex].indexOf(mouse);
        this.mice[mouseArrayIndex].splice(index, 1);
    }

    clearIntervals() {
        clearInterval(this.movingMice);
        this.stopGeneratingMice();
        this.crit.stopCriticalMoment();
        clearInterval(this.criticalMoment);
    }

    gameOver() {
        this.clearIntervals();
        //render game over page
        this.renderGameOverPage();
        
        //update highest score if applicable 
        let currentHighestScore = document.querySelector("#session-highest-score");
        if (this.score > currentHighestScore.innerHTML) {
            currentHighestScore.innerHTML = `${this.score}`
        }

        this.started = false;
        this.firstGame = false;
        this.paused = true;
    }
    
    renderGameOverPage() {
        let gameOverPage = document.querySelector("#game-over");
        gameOverPage.classList.remove("hidden");
        gameOverPage.classList.add("start-game")
        let finalScore = document.querySelector("#final-score");
        finalScore.innerHTML = this.score;
        let playAgainButton = document.querySelector("#play-again-button")
        playAgainButton.classList.remove("hidden");
 

    }

    //called in PlayGame class
    reset() {
        this.score = 0;
        let currentScore = document.querySelector("#score");
        currentScore.innerHTML = `SCORE: ${this.score}`
        this.lives = 9;
        let currentLives = document.querySelector("#lives")
        currentLives.innerHTML = `LIVES: ${this.lives}`
        this.mice = new Array(4).fill(null).map(()=>new Array().fill(null));;
        this.miceGenerator = [];
        this.movingMice = null;
        this.criticalMoment = null;
        this.crit = new CriticalMoment(this);
        this.paused = false;
    }

    handlePause(e) {
        e = e || window.event;
        if (e.keyCode === 32) {
            if (this.started) {
                this.paused = this.paused === false ? true : false;
                this.renderPausePage();
            }
        }
    }

    renderPausePage() {
        let pausedPage = document.querySelector("#pause-page")
        if (this.paused) {
            pausedPage.classList.remove("hidden");
            pausedPage.classList.add("start-game");
        } else if (!this.paused) {
            pausedPage.classList.remove("start-game");
            pausedPage.classList.add("hidden")
        }
    }

}

export default Game;