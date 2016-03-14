// Create a secret password (hard-code it as a string). 
// Prompt the user for the password. 
// Keep prompting until they correctly input the password, then congratulate them on a job well done.

var num = 23;
var userNum = parseInt(prompt("Guess the number."));

while(num != userNum){
  var userNum = parseInt(prompt("Guess again."))
};
alert("That's correct, please proceed.");