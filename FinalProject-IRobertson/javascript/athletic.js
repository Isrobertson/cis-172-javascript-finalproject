// Athletic javascript file
// by: Ian Robertson

'use strict';

var distance;
var weight;
var duration;
var velocity;
var caloriesBurned = 0;
var inputFields = document.getElementsByClassName("athlete-input");
var outputFields = document.getElementsByClassName("outputFields");

function validateInput()
{
    var isValid = true;

    for(var i = 0; i < inputFields.length; i++) {
        if(inputFields[i].value === "") {
            isValid = false;
        }
    }

    console.log(inputFields); // debug

    // checks if all form
    if(isValid === true) {
        getInput();
        calculateData();
        outputData();
    } else {
        window.alert("Please enter all input fields correctly!");
    }
}

function getInput() 
{
    distance = inputFields[0].value;
    weight = inputFields[1].value;
    duration = inputFields[2].value;
    
}
function calculateData()
{
    // calculates based on what distance type is selected
    const MET = 11.5;
    var kilograms = weight / 2.2046; // converts from pounds to kilograms for formula

    velocity = distance / (duration / 60);
    console.log(velocity + " mph");

    // calculates how many calories have been burned
    caloriesBurned = (MET * 3.5 * kilograms) / 200;
    caloriesBurned *= velocity;
    caloriesBurned *= distance;

    velocity = velocity.toFixed(2);
    caloriesBurned = caloriesBurned.toFixed(2);
    
    outputData();
}

function outputData()
{
    var outputFields = document.getElementsByClassName("outputFields");
    outputFields[0].value = velocity + " mph";
    outputFields[1].value = caloriesBurned;
}

function clearFields()
{

    for(var i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
    }

    for(var i = 0; i < outputFields.length; i++) {
        outputFields[i].value = "";
    }
}

function submitEventListener()
{
    var submitForm = document.getElementById("submit-form");
    var clearButton = document.getElementById("clear-form");

    if(submitForm.addEventListener) {
        submitForm.addEventListener("click", validateInput, false);
    } else if(submitForm.attachEvent) {
        submitForm.attachEvent("onclick", validateInput, false);
    }

    if(clearButton.addEventListener) {
        clearButton.addEventListener("click", clearFields, false);
    } else if(clearButton.attachEvent) {
        clearButton.attachEvent("onclick", clearFields);
    }
}

// call functions

function createEventListeners()
{
    submitEventListener();
}

if(window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}