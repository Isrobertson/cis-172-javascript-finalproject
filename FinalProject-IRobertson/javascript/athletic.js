// Athletic javascript file
// by: Ian Robertson

var milesRan = 0;
var totalMiles = 0;
var caloriesBurned = 0;
var isPR = 0;   // PR (Personal Record)

function getUserData()
{
    milesRan = document.getElementById("miles").value;
    
    console.log(milesRan);
}

function calculateTotalMiles()
{

}

// call functions
getUserData();
calculateTotalMiles();