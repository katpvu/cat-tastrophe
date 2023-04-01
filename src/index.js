import Game from "./scripts/game";
import PlayGame from "./scripts/play_game"
import Cat from "./scripts/cat"

//Cat Canvas
let canvas = document.getElementById('cat-state');
const ctx = canvas.getContext('2d');

let game = new Game(ctx)


//Selectors
let playGameButtonSelector = ".play-game-button"
document.querySelectorAll(playGameButtonSelector, game).forEach((el) => {
    new PlayGame(el, game);
});