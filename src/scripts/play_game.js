import Game from "./game"
class PlayGame {
    constructor(playGameButton, game) {
        this.playGameButton = playGameButton
        this.game = game;
        this.playGameButton.addEventListener('click', this.handleStartGame.bind(this));
    }

    handleStartGame(e) {
        e.preventDefault();
        let startPage = document.querySelector(".start-game");
        startPage.classList.add("hidden");
        this.playGameButton.classList.add("hidden");
        startPage.classList.remove("start-game");
        if (this.game.firstGame) {
            this.game.startGame();
        } else {
            this.game.reset();
            this.game.startGame();
        }
    }
}

export default PlayGame