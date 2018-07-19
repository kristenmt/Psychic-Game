


//display wins and losses
var wins = 0;
var losses = 0;
//display # of guesses left
var guessesLeft = 9;
//the letters user has guessed so far
var userGuesses = [];

//need to define options computer will guess from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//what the computer randomly chooses
//to be stored in order to match against user choices
var computerFinalGuess = [computerGuess];
//need to let computer know to measure its guess against users guess when user touch/release key
console.log("computer guess" + computerGuess);


//run function when user presses and releases a key
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log("user Guess" + userGuess);



    //need to define what gets a point and what loses a point
    //if user guesses correctly
    if ((computerGuess === userGuess) && (guessesLeft > 0)){
        wins++;
        //resets game
        guessesLeft = 9;
        userGuesses.length = 0;
        computerGuess.length = 0;
        // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("you win!");
        updatePage();
    }
    else if ((userGuess !== computerGuess) && (guessesLeft > 0)){
        //push user guess to the printed array
        userGuesses.push(userGuess);
        guessesLeft--;
        console.log("try again...");
        // guessesLeft = guessesLeft;
        updatePage();
    }
    //lower # of guesses left by 1
    // for (let guessesLeft = 9; guessesLeft > -1; guessesLeft--) {
    //     console.log("guesses left");
    // }
    // if (computerGuess != userGuess) {
    //     guessesLeft--;
    //     updatePage();
    // }
    //if user loses after trying 9 times to guess
    else{
        losses++;
        //resets game
        guessesLeft = 9;
        userGuesses.length = 0;
        computerFinalGuess.length = 0;
        // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("you lose!");
        updatePage();
    }

    //determine win value and loss value
    //when user wins, game will start over again

    //when user loses, game will start over again

    //variable to have html info displayed
    function updatePage() {
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

