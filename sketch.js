var gameState, playerCount, form, game, player, allPlayers;

function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();
}

function draw(){
    background("white");
    drawSprites();
}