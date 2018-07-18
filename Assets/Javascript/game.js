


//display wins and losses
    var wins = 0;
    var losses = 0;

//display # of guesses left
    var guessesLeft = 9;
//the letters user has guessed so far
    var userGuesses = [];
//when user wins, game will start over again

//when user loses, game will start over again

//need to define options computer will guess from
    var computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

//run function when user presses and releases a key
    document.onkeyup = function(event) {
//need to let computer know to measure its guess against users guess when user touch/release key
    // Determines which key was pressed.
    var userGuess = event.key;
// Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//need to define what gets a point and what loses a point
    if(computerChoices && userGuesses){
        wins++;
    }
    else{
        losses--;
    };
//need to define how many guesses user will be allowed (loop)
    
//determine win value and loss value

//variable to have html info displayed
   document.write(
          "<p>You chose: " + userGuesses + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>"
   )
;

//reset game when the game is over
};

