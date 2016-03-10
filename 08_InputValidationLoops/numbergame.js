var number = 56;
var userGuess = prompt("Guess any number between 1 and 100!");

while (number != userGuess) {
  alert("Oh incorrect guess! So close! Press OK to try again.");
  var userGuess = prompt("Guess any number between 1 and 100!"); 
}

if (userGuess == number) {
  alert("You guessed it! Press OK to continue.");
}