// Athletic javascript file
// by: Ian Robertson

'use strict';

var totalDistance = 0;
var caloriesBurned = 0;
var isPR = 0;   // PR (Personal Record)
var voTwoMax = 0;
var radioBtns = document.getElementsByClassName("radio_btn");
radioBtns[0].checked = true; // auto checks default at start

function validateInput()
{
    var form = document.getElementsByTagName("form")[0];
    var inputFields = form.getElementsByTagName("input");
    var isValid = true;

    if(inputFields[0].value === "" || inputFields[2].value === "" || inputFields[3].value === "") {
        isValid = false;
    }

    console.log(isValid); // debug

    // checks if all form
    if(isValid === true) {
        calculateData();
        outputData();
    } else {
        window.alert("Please enter all input fields!");
    }
}

function calculateData()
{
    // calculates based on what distance type is selected
    if(radioBtns[0].checked === true) {
        totalDistance = calculateMiles();
    } else if(radioBtns[1].checked === true) {
        totalDistance = calculateKilometers();
    }
}

function calculateMiles()
{
    // calculates for if miles is selected

    return 0;
}

function calculateKilometers()
{
    // calculate if kilometers is selected
    return 0;
}

function outputData()
{

}

function clearFields()
{
    var inputFields = document.getElementsByClassName("athlete-input");

    for(var i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
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