function logoff(element){
    if(element.innerText == "Logout"){
        element.innerText = "Login"
    }
    else{
        element.innerText = "Logout";
    }
}

function pop(element){
    alert("Ninja was liked");
}

function def(element){
    element.remove();
}