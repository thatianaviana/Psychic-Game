
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computer pick 1", computerGuess);
// console.log(Math.random()); //showing what it does (decimal times 26)

var wins = 0;
var losses = 0;
var guessLeft = 9;
var playerPick;
var wrongLetters = [];



//put the computerGuess within the keyup function that way it will pick another calss 
document.onkeyup = function(event){
    playerPick = event.key; 
    console.log("player pick",  playerPick);
   

    // console.log(event); //show us the process behind the event object
    

    if (playerPick === computerGuess) {
        wins++;
        guessLeft = 9;
        playerPick = "";
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // console.log("computer pick 2", computerGuess);
        

      
    } else {
        guessLeft--;
        wrongLetters.push(playerPick);

    }

    if (guessLeft === 0){
        losses++;
        guessLeft = 9;
        wrongLetters = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // console.log("computer pick 1", computerGuess);


    }


    document.getElementById('guess-far').innerHTML = wrongLetters;
    document.getElementById('win').innerHTML = wins;
    document.getElementById('loss').innerHTML =losses;
    document.getElementById('guess-left').innerHTML = guessLeft;

}






