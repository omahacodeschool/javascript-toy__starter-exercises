var secretNum = 13;

var userGuess = prompt("Guess the secret number and win the prize...");
userInt = parseInt(userGuess)

if (userInt === secretNum)
  alert("Well done, oh wise one. You guess correctly with '" + userGuess + "'.")
else
  alert("Wrong, wrong, wrong. The correct answer is '" + secretNum + "'. Dummy.")