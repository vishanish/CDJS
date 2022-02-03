function addShade(element){
    element.classList.add("boxshade");
}

function removeShade(element){
    element.classList.remove("boxshade");
}
var neil = 9;
var nicole = 12;
var jim = 9;
var countLikene = document.querySelector("#likesne");
var countLikeni = document.querySelector("#likesni");
var countLikeji = document.querySelector("#likesji");
function addLikene(){
    neil++;
    countLikene.innerText = neil + " Like(s)";
}
function addLikeni(){
    nicole++;
    countLikeni.innerText = nicole + " Like(s)";
}
function addLikeji(){
    jim++;
    countLikeji.innerText = jim + " Like(s)";
}