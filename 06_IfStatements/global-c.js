// secret number variable
var secretNumber = 42;

// prompt message
var userInput = prompt("Please type in the secret number");

// alert messages
if (parseInt(userInput) === secretNumber) {
  alert("Good job! " + secretNumber + " is the secret Number!")
} else { 
  alert("Sorry, the secretNumber is actually " + secretNumber + ".")
}