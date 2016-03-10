//8A: What's the Password?
//Create a secret password (hard-code it as a string). Prompt the user for the password. Keep prompting until they correctly input the password, then congratulate them on a job well done. This is effectively a redo of Atomic JS-06B.

// set variables for the password, the user's guess, and the counter that tracks how many times the user guesses the password incorrectly.
var password = "meep",
    userGuess = prompt("What's the password?"),
    guessCount = 0;

//while loop continues as long as the user input does not match the password. 
while (userGuess.toLowerCase() != password) {
  ++guessCount
  alert(`Nope! Try again, sucka!`);
  userGuess = prompt("What's the password?");
  console.log(userGuess, typeof userGuess);
}

alert(`Lucky guess. It took you ${guessCount} tries to figure it out`);
