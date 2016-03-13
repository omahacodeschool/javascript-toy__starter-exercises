// Create a secret password (hard-code it as a string). 
// Prompt the user for the password. 
// Keep prompting until they correctly input the password, then congratulate them on a job well done.

var password = "Loggins";
var userPassword = prompt("Enter your password.");

while(userPassword != password){
  var userPassword = prompt("That's not correct, try again.")
};
alert("That's correct, please proceed.");