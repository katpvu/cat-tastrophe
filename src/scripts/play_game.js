class PlayGame {
    constructor(playGameButton, game) {
        this.playGameButton = playGameButton
        this.game = game;
        this.playGameButton.addEventListener('click', this.handleStartGame.bind(this));
    }

    //DOCUMENT QUERIES
    // let startPage = document.querySelector(".start-game");
    // let gameOverPage = document.querySelector("#game-over");

    handleStartGame(e) {
        e.preventDefault();
        let startPage = document.querySelector(".start-game");
        startPage.classList.add("hidden");
        this.playGameButton.classList.add("hidden");
        startPage.classList.remove("start-game");

        // this.game.startGame
    }
}

export default PlayGame