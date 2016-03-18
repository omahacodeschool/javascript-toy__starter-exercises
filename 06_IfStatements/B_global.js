var password = "spicecontrol";

var userGuess = prompt("Try to guess the password...");

if (userGuess === password)
  alert("Good job, you guessed correctly with '" + userGuess + "'!")
else
  alert("Uh uh uh, '" + userGuess + "'' is not the magic word. The correct password is '" + password + "' .");