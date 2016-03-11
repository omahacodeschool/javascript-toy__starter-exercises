//password variable
var password = "rivendell";

// prompt message
var userInput = prompt("Please type in the password");

// alert messages
if (userInput === password) {
  alert("Good job!")
} else { 
  alert("Sorry, the password is actually " + password + ".")
}
