import Game from "./scripts/game";

let canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

//Setting game-console background image
const background = new Image();
background.src = "./assets/room-g7ec8543d0_1920.jpg";
background.onload = function(){
    ctx.drawImage(background,0,0);   
}

let game = new Game(ctx)

