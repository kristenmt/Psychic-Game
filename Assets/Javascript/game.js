


//display wins and losses
    var wins = 0;
    var losses = 0;
//display # of guesses left
    var guessesLeft = 9;
//the letters user has guessed so far
    var userGuesses = [];

//need to define options computer will guess from
    var computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

//run function when user presses and releases a key
    document.onkeyup = function(event) {
 // Determines which key was pressed.
    var userGuess = event.key;
    console.log("user Guess" + userGuess);
// Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//need to let computer know to measure its guess against users guess when user touch/release key
   console.log("computer guess" + computerGuess);

//need to define what gets a point and what loses a point
    if(computerGuess === userGuess){
        wins++;
        updatePage();
    }
    else{
        //push user guess to the printed array
        userGuesses.push(userGuess);
        //lower # of guesses left by 1
        guessesLeft = 9;
        updatePage();
    }
    // if(computerGuess != userGuess){
    //     guessesLeft--;
    //     updatePage();
    // }
    if (guessesLeft = 0){
        losses++;
        updatePage();
    }
//determine win value and loss value
//when user wins, game will start over again

//when user loses, game will start over again

//variable to have html info displayed
function updatePage(){
    // document.write(
        var html = "<h1>Guess what letter I'm thinking of!</h1>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + userGuesses + "</p>"
//  );

 document.querySelector("#game").innerHTML = html;

//reset game when the game is over
}
    }

