import Cat from "./cat";

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.score = 0;
        this.lives = 9;
        this.setUpGame();
    }

    //Place cat in normal state in center
    setUpGame() {
        let gameScore = document.createElement('h2');
        gameScore.innerHTML = this.score;

        const catState = new Image();
        catState.src = "./assets/cat_states.png";
        let draw = function() {
            this.ctx.drawImage(catState, 0, 0, 234, 940, 0, 0, 236, 336); 
        }
        catState.onload = draw.bind(this);

        this.cat = new Cat(this.ctx, catState);
    }


    //add event listeners for up/left/right keys and generate mice
    startGame() {
        console.log("called Game.startGame()")
        let gameConsole = document.querySelector("body")

        function handlers(e) {
            e = e || window.event;
            if (e.keyCode === 38) {
                console.log("up")
                this.handleUpKey();
            } else if (e.keyCode === 37) { 
                console.log("left")
                this.handleLeftKey();
            } else if (e.keyCode === 39) {
                console.log("right")
                this.handleRightKey();
            }
        }
        console.log(gameConsole)
        gameConsole.addEventListener('keydown', handlers.bind(this))
    }


    //knock - change img to knock state, increase score points 
    handleUpKey() {
        this.score = this.score + 59;
        let currentScore = document.querySelector("#score");
        currentScore.innerHTML = `SCORE: ${this.score}`
        console.log(this.cat)
        this.cat.knock();
    }

    //left smash - change img to smash state - if successful, remove mouse
    handleLeftKey() {
        this.cat.smashLeft();
    }

    //right smash - change img to smash state - if successful, remove mouse
    handleRightKey() {
        this.cat.smashRight();
    }

    updateScore() {

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