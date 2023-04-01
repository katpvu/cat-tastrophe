import Cat from "./cat";

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.score = 0;
        this.lives = 9;
        this.upEventTime = Date.now();
        this.setUpGame();
    }

    //Place cat in normal state in center
    setUpGame() {
        const catState = new Image();
        catState.src = "./assets/cat_states.png";
        let draw = function() {
            this.ctx.drawImage(catState, 0, 0, 234, 940, 0, 0, 236, 336); 
        }
        catState.onload = draw.bind(this);

        this.cat = new Cat(catState);
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
                    let that = this;
                    setTimeout( function() {
                        that.revertNormalState(that.ctx)
                    }, 200)
                }
            } else if (e.keyCode === 37) { 
                
                this.handleLeftKey(this.ctx);
            } else if (e.keyCode === 39) {
                this.testBackgroundChange();
                this.handleRightKey(this.ctx);
            }
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
        this.cat.smashRight(ctx);
    }

    updateScore() {
        this.score = this.score + 59;
        let currentScore = document.querySelector("#score");
        currentScore.innerHTML = `SCORE: ${this.score}`
    }

    decrementLives() {
        this.lives = lives - 1
        if (this.lives === 0) {
            this.gameOver();
        }
    }

    gameOver() {

    }

}

export default Game;