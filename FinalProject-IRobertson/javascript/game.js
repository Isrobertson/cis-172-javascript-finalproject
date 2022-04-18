/*
    This is where the game is programmed form input to animation control
*/

'use strict';

var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var space_bar = 32; // spacebar key code

function charDamageAnimation()
{
    
}

function removeJumpAnimation()
{
    character.classList.remove("animate");
}

function jump() 
{
    console.log("JUMP");
    // if statement prevents from adding again when animate exists.
    if(character.classList.item("animate") === null) {

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
}

if(window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}