import Game from "./scripts/game";
import PlayGame from "./scripts/play_game"
import Cat from "./scripts/cat"
import CriticalMoment from "./scripts/critical_moment"


//Cat Canvas
let catStates = document.querySelector("#cat-states")
let catSmashes = document.querySelector("#smash-states")
let canvas = document.getElementById('cat-state');
canvas.width = catStates.width;
canvas.height = catStates.height;
const ctx = canvas.getContext('2d');
catStates.addEventListener('load', (e) => {
    ctx.drawImage(catStates, 0, 0, 234, 336, 355, 0, 234, 336)
})
let cat = new Cat(catStates, catSmashes)
let game = new Game(ctx, cat)




//Selectors
let playGameButtonSelector = ".play-game-button"
document.querySelectorAll(playGameButtonSelector, game).forEach((el) => {
    new PlayGame(el, game);
});