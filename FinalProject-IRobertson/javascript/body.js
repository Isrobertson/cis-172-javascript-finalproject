// simple javascript for adding text between pages

var currentDate = new Date();
var footer = document.getElementsByTagName("footer")[0];
var navbarList = ["home.html", "athletic.html", "game.html", "contact_me.html"];
var navbarContent = ["Home", "Athletic", "Game", "Contact Me"];

// function adds each li child node to ul tag
function setNavbar()
{
    var navbar = document.getElementsByClassName("navbar")[0];
    var listContent;

    for(var i = 0; i < navbarList.length; i++)
    {
        listContent = document.createElement("li"); 
        listContent.innerHTML = "<a href=" + navbarList[i] + ">" + navbarContent[i] + "</a>";
        navbar.appendChild(listContent);
    }
}

function getCurrentDate()
{
    var cDay = currentDate.getDate();
    var cMonth = currentDate.getMonth() + 1;
    var cYear = currentDate.getFullYear();

    return "Date: " + cMonth + "/" + cDay + "/" + cYear;
}

function getCurrentTime()
{
    var time = currentDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    return time;
}

// gets date and time. sets text between all footers
function setFooters()
{
    var buildFooter = ["", ""];
    buildFooter[0] = getCurrentDate();
    buildFooter[1] = getCurrentTime();
    footer.innerHTML = "<b>" + buildFooter[0] + "<br>" + buildFooter[1] + "<b>";
}

// page loader handler for functions
if(window.addEventListener) {
    window.addEventListener("load", setNavbar, false);
    window.addEventListener("load", setFooters, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", setNavbar);
    window.attachEvent("onload", setFooters);
}
