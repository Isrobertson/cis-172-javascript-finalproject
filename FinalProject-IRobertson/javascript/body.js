// simple javascript for adding text between pages
const pTag = ["<p>", "</p>"];
const liTag = ["<li>", "</li>"];

var footer = document.getElementById("footer");
var stringBuilder = [];

// sets text between all footers
function setFooters()
{
    footer.innerHTML = "<p>" + "Hello Footer" + "</p>";
}

setFooters();
