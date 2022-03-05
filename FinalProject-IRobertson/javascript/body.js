// simple javascript for adding text between pages
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

// sets text between all footers
function setFooters()
{
    footer.innerHTML = "Website by: Ian Robertson";
}

//setNavbar();
//setFooters();

// page loader handler for functions
if(window.addEventListener) {
    window.addEventListener("load", setNavbar, false);
    window.addEventListener("load", setFooters, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", setNavbar);
    window.attachEvent("onload", setFooters);
}
