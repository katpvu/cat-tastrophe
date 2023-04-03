import Cat from "./cat";

class Game {
    constructor(ctx, cat) {
        this.ctx = ctx;
        this.score = 0;
        this.lives = 9;
        this.cat = cat;
        this.upEventTime = Date.now();
    }

    //add event listeners for up/left/right keys and generate mice
    startGame() {
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
                this.testBackgroundChange();
                this.handleRightKey(this.ctx);
            }
            //need to revert back to normal state after every move
            let that = this;
            setTimeout( function() {
                that.revertNormalState(that.ctx)
            }, 300)
        }
        gameConsole.addEventListener('keydown', handlers.bind(this))
    }

    revertNormalState(ctx) {
        this.cat.renderNormalState(ctx)
    }

    //this is working -- for critical moment - need to switch between normal and bright door
    testBackgroundChange() {
        let bg = document.querySelector("#bg-door")
        bg.src = "./assets/bright-door.jpg"
    }


    //knock - change img to knock state, increase score points 
    handleUpKey(ctx) {
        this.updateScore();
        // console.log(this.cat)
        this.cat.knock(ctx);
    }

    //left smash - change img to smash state - if successful, remove mouse
    handleLeftKey(ctx) {
        this.cat.smashLeft(ctx);
    }

    //right smash - change img to smash state - if successful, remove mouse
    handleRightKey(ctx) {
        this.collisionDetected(ctx)
        // this.cat.smashRight(ctx);
    }

    updateScore() {
        this.score = this.score + 59;
        let currentScore = document.querySelector("#score");
        currentScore.innerHTML = `SCORE: ${this.score}`
    }

    decrementLives() {
        this.lives = lives - 1
        let currentLives = document.querySelector("#lives")
        currentLives.innerHTML = `LIVES: ${this.lives}`
        if (this.lives === 0) {
            this.gameOver();
        }
    }

    collisionDetected(ctx) {
        this.cat.dizzy(ctx)
    }


    gameOver() {
        //render game over page


        //update highest score if applicable
        let currentHighestScore = document.querySelector("#session-highest-score");
        if (this.score > currentHighestScore) {
            currentHighestScore.innerHTML = `${this.score}`
        }
    }

}

export default Game;