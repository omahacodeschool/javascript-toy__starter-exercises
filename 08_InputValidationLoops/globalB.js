var secretNumber = 13;
var params = prompt("What's the secret number?");

while (params != secretNumber) {
  params = prompt("Sorry, that wasn't correct. Try again.");
}

if (params == secretNumber) {
  alert("Good work!");
}