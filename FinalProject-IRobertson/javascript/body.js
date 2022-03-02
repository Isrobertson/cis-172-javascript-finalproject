// simple javascript for adding text between pages
var footer = document.getElementById("footer");

const liTag = ["<li>", "</li>"];
var text = "";

// sets text between all footers
function setFooters()
{
    footer.innerHTML = "Hello Footer";
}

setFooters();
