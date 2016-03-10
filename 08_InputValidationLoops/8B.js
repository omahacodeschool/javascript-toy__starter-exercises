//## 8B: Guess the Number
//Tell the user that you're thinking of a number between 1 and 100 (go ahead and hard-code this number). Prompt the user to guess the number (and keep asking them if they get it wrong), then congratulate them when they guess correctly. This is a re-do of Atomic JS-06C.

// alert notifies user of the game
alert("I'm thinking of a number between 1 & 20...")

//variables here. secretNum is a bonus piece of work, as it randomly selects a number between 1-20 for each game (did 20 because it's random and i didn't want to take forever guessing this whiel testing)
// user guess gets user input
//guess correct is a boolean flag that helps determine when a user has guessed the correct number. this will break out of the loop
// past guesses stores previous incorrect guesses made by the user
//guessCount stores the number of times a user has guessed incorrectly
var secretNum = Math.floor(Math.random()*20+1),
    userGuess = prompt("What do you think it is?"),
    guessCorrect = false,
    pastGuesses = [],
    guessCount = 0;

//while loop continues until guessCorrect is not false. This only triggers when userGuess is like secretNum.
//Otherwise method goes to else statement, which increases the guess count by 1, stores the previous guess in an array,
// tells the user they got it wrong via alert and displays all past guesses,
// and then prompts them to guess again. I also printed guesses in the console to make sure the loop was working as intended. 
while (guessCorrect === false) {
  if (userGuess == secretNum) {
    guessCorrect = true;
  } else { 
      ++guessCount
      console.log(userGuess, typeof userGuess);
      pastGuesses.push(userGuess)
      alert(`Nope! Try again, sucka! \n Guesses so far: ${pastGuesses.sort().join(", ")}`);
      userGuess = prompt(`Guess Again!`);
  }
}

//alerts user that the guess was correct. also tells them how many times it took for them to figure it out.
alert(`Yeah, the number was ${secretNum}. \n Lucky guess. It took you ${guessCount} tries to figure it out`);
