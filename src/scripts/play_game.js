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
        
        this.game.startGame();
    }

    playAgain(e) {
        e.preventDefault();
        this.game.reset();
    }

}

export default PlayGame