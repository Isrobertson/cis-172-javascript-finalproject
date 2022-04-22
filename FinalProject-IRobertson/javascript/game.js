/*
    This is where the game is programmed form input to animation control
*/

'use strict';

var scoreSection = document.getElementById("score");
var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var space_bar = 32; // spacebar key code
var score = -1; // set to -1 for pre-process
var highScore = 0;

function charDamage()
{
    // gets div positions for hitbox calculations
    var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));

    characterBottom -= characterBottom * 2;

    if(obstacleLeft > characterLeft && obstacleLeft < (characterLeft + 40))
    {
        console.log("Condition 1 met!");
        // checks if the character is low enough
        if(characterBottom > obstacleTop)
        {
            obstacle.classList.remove("oAnimate");
            if(highScore < score) {
                highScore = score;
                window.alert("You Lost. Highscore achieved!");
            } else {
                window.alert("You lost");
            }
            score = -1;
            processScore();
        }
    }
}

function removeJumpAnimation()
{
    character.classList.remove("animate");
}

function processScore()
{
    score++;
    scoreSection.innerHTML = "<h3>Highscore: " + highScore + "</br>" + "Score: " + score + "</h3></br>";

}

function jump() 
{
    // if statement prevents from adding again when animate exists.
    if(character.classList.item("animate") === null) {
        console.log("JUMP");
        processScore();
        character.classList.add("animate");
        setTimeout(removeJumpAnimation, 670);
    }
}

function checkKey(key)
{
    if(key.keyCode === space_bar) {
        jump();
    }
}

function game() 
{
    // gives the obstacle div its animation class to start moving
    obstacle.classList.add("oAnimate");
    // adds event listener for character jump when key is pressed

    window.onkeydown = checkKey;

    // checks if the obstacle has hit the player and ends accordingly

    console.log("Start");
}

function start()
{
     var play = document.getElementById("play-button");

     if(play.addEventListener) {
         play.addEventListener("click", game, false);
     } else if(play.attachEvent) {
         play.attachEvent("onclick", game);
     }
}

function createEventListeners()
{
    start();
    processScore();
}

if(window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
  
setInterval(charDamage, 5); // function that reads every 5 frames