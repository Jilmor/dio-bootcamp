var currentNumber = 0;
var currentnumberjjr = document.getElementById("currentnumberjjr");

function incrementjjr() {
    currentNumber++;
    currentnumberjjr.innerHTML = currentNumber;
}

function decrementjjr() {
    currentNumber--;
    currentnumberjjr.innerHTML = currentNumber;
}