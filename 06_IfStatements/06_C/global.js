//6B: Password Game

//Pick a number and hardcode it into your program (like you did with the password above: `var secretNumber = 23;`). Prompt the user for a number, then display an alert letting the user know if their answer was correct or incorrect (much like you did with the "Password Game" atomic).

var secretNumber = 12;

var userNumber = prompt("Please enter a number");

var userInteger = parseInt(userNumber);

if (secretNumber === userNumber) {
    alert("Great job!");
  }

if (secretNumber !== userInteger) {
    alert("NOPE");
  }