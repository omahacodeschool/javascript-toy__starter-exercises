//8A: What's the Password?
//Create a secret password (hard-code it as a string). Prompt the user for the password. Keep prompting until they correctly input the password, then congratulate them on a job well done. This is effectively a redo of Atomic JS-06B.


var password = "meep",
    userGuess = prompt("What's the password?"),
    guessCount = 0;

while (userGuess.toLowerCase() != password) {
  ++guessCount
  alert(`Nope! Try again, sucka!`);
  userGuess = prompt("What's the password?");
}

alert(`Lucky guess. It took you ${guessCount} tries to figure it out`);
