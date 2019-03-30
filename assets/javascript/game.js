
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var playerPick = [];
var wrongLetters = [];



//put the computerGuess within the keyup function that way it will pick another calss 
document.onkeyup = function(event){
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("working", computerGuess);
    playerPick = event.key; 
    console.log("PLAYER PICK:",  playerPick);
    

    // for(var i=0; i < computerGuess.length; i++) { 

    //     if(computerGuess[i] === playerPick){
    //         computerGuess[i]= playerPick;

    //         }
    // }

    if (playerPick === computerGuess) {
        // location.reload(); //reloads the whole page so erasers the answers i need to keep it here
        wins++;
        guessLeft = 9;
        playerPick = [];
      
    } else {
        guessLeft--;
        wrongLetters.push(playerPick);
        // playerPick = event.key;
        // wrongLetters.push(playerPick); 
        // wrongLetters = wrongLetters.push(playerPick); didn't work
        // playerPick.push(wrongLetters); didn't work

        // also need to include the letters guess on the page up to either winning or when guessLeft is done
    }

    if (guessLeft === 0){
        losses++;
        guessLeft = 9;
    }


    document.getElementById('guess-far').innerHTML = playerPick;
    document.getElementById('win').innerHTML = wins;
    document.getElementById('loss').innerHTML =losses;
    document.getElementById('guess-left').innerHTML = guessLeft;

}


//.push 
// make a function that will print an array 
//.append() for the playerpick - go to classes exercises for append child
// re-assingn variables.



//tried this one before too: 
// var playerPick = document.getElementById("guess-far");
// console.log("Player Choice", playerPick);

// // //this is registering every key the user hit
//     document.onkeyup = function (event) {
//     playerPick.textContent = event.key;
//     console.log("is this working?", playerPick);





// var wins = 0;
// var losses = 0;
// var guessesLeft = 9;
// var playerPick = [];
// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"];
// var computerGuess = computerChoices[Math.random(Math.random() * computerChoices.length)];
// // (console.log(computerChoices.length));


// var playerPick = document.getElementById("guess-far");
// console.log("Player Choice", playerPick);

// var wins = document.getElementById("win");
// console.log("Wins", wins);

// var losses = document.getElementById("loss");
// console.log("Losses", loss);

// var guessesLeft = document.getElementById("guess-left");
// console.log("guesses", guessesLeft);


// //this is registering every key the user hit
// document.onkeyup = function (event) {
//     playerPick.textContent = event.key;
//     // console.log("is this working?", playerPick);

//     // run the following code block if the player presses any letter in computerChoices.
//     if (playerPick === computerGuess) {
//         console.log("it works");
//         // Alert the userPick  and computerGuess
//         alert("Player guess: " + playerPick);
//         alert("Computer guess: " + computerGuess);

//     }
// }





// things i have tried:
    //for loop bc the user only has 9 guesses - it made the numbers run like crazy!!!! and crashed my page

    // for (i=0; 1< computerChoices.length; i++){
    //     console.log(i);
    // }  



    // if playerOptions.indexOf(playerGuessed) > -1 {

    //     if (playerGuessed === computerGuess) {
    //         wins++;
    //         guessesLeft = 9;
    //         playerGuessed = [];

    //     } else if (playerGuessed !=== computerGuess){
    //         guessesLeft--;
    //         playerGuessed.push[playerGuessed];

    //     } else (guessesLeft === 0) {
    //         guessesLeft = 9;
    //         losses ++;
    //         playerGuessed = [];

    //     }

