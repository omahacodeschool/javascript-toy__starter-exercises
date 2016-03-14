// Create a secret password (hard-code it as a string). 
// Prompt the user for the password. 
// Keep prompting until they correctly input the password, then congratulate them on a job well done.

var userNum = parseInt(prompt("Give me a number between 1 and 8."));

while(userNum >= 1 && userNum <=8){
  var userNum = parseInt(prompt("Good job, keep going!"))
};
alert(userNum + " is outside the range.");