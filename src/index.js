import Game from "./scripts/game";
import PlayGame from "./scripts/play_game"

//Canvas
let canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const background = new Image();
background.src = "./assets/room-g7ec8543d0_1920.jpg";
const catState = new Image();
catState.src = "./assets/cat_states.png";
background.onload = function(){
    ctx.drawImage(background,0,0);   
    ctx.drawImage(catState, 234, 0, 234, 336, 270, 100, 236, 336); 
}

// let cat = new Cat(catState);
let game = new Game(ctx)

//Selectors
let playGameButtonSelector = ".play-game-button"
document.querySelectorAll(playGameButtonSelector, game).forEach((el) => {
    new PlayGame(el);
});