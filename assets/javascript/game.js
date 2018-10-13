//Variables

var emptyWord = ["-","-","-","-","-","-","-","-","-","-"];
var answerWord = ["h","a","m","b","u","r","g","e","r","s"];
var guessLeft = 13;
var result = " ";


//display empty word on screen

for (i=0; i < emptyWord.length; i++){
    var result = result+ emptyWord[i];
    console.log(result)
    document.getElementById("mysteryWord").innerHTML = result.toString();
}

//Display Counter
document.getElementById("guessCounter").innerHTML = ("# of Guesses Left:" + guessLeft);
document.getElementById("keysPressed").innerHTML = ("Letters Guessed: ");

// Correct Input Replacements
document.onkeyup = function(event) {
var userGuess = event.key;
console.log(event)
document.getElementById("keysPressed").innerHTML = ("Letters Guessed: " + userGuess);


if (userGuess === "h") {
    emptyWord.splice(0,1,"h");
 
} else if 
    (userGuess === "a") {
    emptyWord.splice(1,1,"a");
}
else if 
    (userGuess === "m") {
    emptyWord.splice(2,1,"m");
}
else if 
    (userGuess === "b") {
    emptyWord.splice(3,1,"b");
}
else if 
    (userGuess === "u") {
    emptyWord.splice(4,1,"u");
}
else if 
    (userGuess === "r") {
    emptyWord.splice(5,1,"r") && emptyWord.splice(8,1,"r")
}
else if 
    (userGuess === "g") {
    emptyWord.splice(6,1,"g");
}
else if 
    (userGuess === "e") {
    emptyWord.splice(7,1,"e");
}
else if 
    (userGuess === "s") {
    emptyWord.splice(9,1,"s");
} 
else{
    guessLeft--;
    console.log(guessLeft);
}

//Displays Results 
document.getElementById("mysteryWord").innerHTML = (emptyWord.join(""));
document.getElementById("guessCounter").innerHTML = ("# of Guesses Left:" + guessLeft);

// Alert Correct! Lets Eat!
if
(emptyWord.toString() === answerWord.toString()) {
    alert("CORRECT!!! LETS EAT!!!");
}

// Alert Loss
if (guessLeft === 0) {
    alert("NO FOOD FOR YOU!");
    document.location.reload(true)

}
}



  




