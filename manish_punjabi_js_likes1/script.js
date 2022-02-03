function addShade(element){
    element.classList.add("boxshade");
}

function removeShade(element){
    element.classList.remove("boxshade");
}
var count = 1;
var countLike = document.querySelector("#likes");

function addLike(){
    count++;
    countLike.innerText = count + " Likes";
}