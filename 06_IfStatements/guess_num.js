var secretNumber = 4;

var guess = prompt("Guess the number.", "Enter number here.");
var guess2 = parseInt(guess);

if (secretNumber === guess2) {
  alert("Good job!");
} else {
  alert("Sorry the password is 4.");
}