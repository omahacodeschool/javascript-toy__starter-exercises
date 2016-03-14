// Create a secret password (hard-code it as a string). 
// Prompt the user for the password. 
// Keep prompting until they correctly input the password, then congratulate them on a job well done.

var sideA = parseInt(prompt("Enter length of side A"));
var sideB = parseInt(prompt("Enter length of side B"));
var sideC = parseInt(prompt("Enter length of side C"));

while (((sideA + sideB) <= sideC) || ((sideA + sideC) <= sideB) || ((sideB + sideC) <= sideA)) {
  alert("That's not a valid triangle! Try again.")
  var sideA = parseInt(prompt("Enter length of side A"));
  var sideB = parseInt(prompt("Enter length of side B"));
  var sideC = parseInt(prompt("Enter length of side C"));
};
alert("Now that's a valid triangle!");