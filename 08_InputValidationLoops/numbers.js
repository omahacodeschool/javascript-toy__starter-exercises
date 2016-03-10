var userGuess = prompt("Pick any number between 1 and 8!");

while (userGuess >= 1 && userGuess <= 8) {
  alert("Good job. Pick another number!");
  var userGuess = prompt("Pick any number between 1 and 8!");
}