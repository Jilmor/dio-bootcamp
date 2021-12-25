var currentNumber = 0;
var currentnumberjjr = document.getElementById("currentnumberjjr");

window.addEventListener("load",addEventos);
function incrementjjr() {
    currentNumber++;
    currentnumberjjr.innerHTML = currentNumber;
    if(currentNumber > 0){
        currentnumberjjr.style.color= "black";
    }else{currentnumberjjr.style.color = "red"};
}


function decrementjjr() {
    currentNumber--;
    currentnumberjjr.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentnumberjjr.style.color= "red";
    }else{currentnumberjjr.style.color = "black"};
}

function addEventos(){
    document.getElementById("subtrair").addEventListener("click", decrementjjr);
    document.getElementById("adicionar").addEventListener("click",incrementjjr);
}