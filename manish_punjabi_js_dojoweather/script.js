//Navbar hyperlink alert box
function cityalert(element){
    alert("Loading weather report..")
}

//Dropdown temperature change

function tempscale(){
var dropdown = document.querySelector(".scale").selectedIndex;
var d1h1 = document.querySelector(".d1hot");
var d1c1 = document.querySelector(".d1cold");
var d2h2 = document.querySelector(".d2hot");
var d2c2 = document.querySelector(".d2cold");
var d3h3 = document.querySelector(".d3hot");
var d3c3 = document.querySelector(".d3cold");
var d4h4 = document.querySelector(".d4hot");
var d4c4 = document.querySelector(".d4cold");
if(dropdown == 1){
d1h1.innerText = "75";
d1c1.innerText = "65";
d2h2.innerText = "80";
d2c2.innerText = "66";
d3h3.innerText = "69";
d3c3.innerText = "61";
d4h4.innerText = "78";
d4c4.innerText = "70";
}
else{
    d1h1.innerText = "24";
    d1c1.innerText = "18";
    d2h2.innerText = "27";
    d2c2.innerText = "19";
    d3h3.innerText = "21";
    d3c3.innerText = "16";
    d4h4.innerText = "26";
    d4c4.innerText = "21";
    }
}



//Cookies pop up window
var popupwindow = document.querySelector(".cookiespopup");
var acceptbut = document.querySelector("button");

function popupremove(){
    popupwindow.remove();
}