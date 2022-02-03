var nameChange = document.querySelector(".name");

function changename(){
    nameChange.innerText = "Vishal Punjabi"
}

var requestone = document.querySelector("#request1");
var requesttwo = document.querySelector("#request2");
var requestnum = document.querySelector(".request-number");
var requesticon1 = document.querySelector(".request1");
var rejecticon1 = document.querySelector(".reject1");
var requesticon2 = document.querySelector(".request2");
var rejecticon2 = document.querySelector(".reject2");
var count = 2;
var social = document.querySelector(".connections");

function reject1(){
    requestone.remove();
    count--;
    requestnum.innerText = count;
}

function reject2(){
    requesttwo.remove();
    count--;
    requestnum.innerText = count;
}

function addShade(element){
    element.classList.add("circleshadow");
}

function removeShade (element){
    element.classList.remove("circleshadow");
}
function accept1(){
    count--;
    requestnum.innerText = count;
    requesticon1.remove();
    rejecticon1.remove();
    social.append(requestone);
}

function accept2(){
    count--;
    requestnum.innerText = count;
    requesticon2.remove();
    rejecticon2.remove();
    social.append(requesttwo);
}