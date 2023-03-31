let startPage = document.querySelector(".start-game")
let gameOverPage = document.querySelector("#game-over")
let canvas = document.getElementById('game-canvas');

const ctx = canvas.getContext('2d');

//Setting game-console background image
const background = new Image();
background.src = "./src/assets/room-g7ec8543d0_1920.jpg";
background.onload = function(){
    ctx.drawImage(background,0,0);   
}

let game = new Game(startPage, gameOverPage, ctx)

