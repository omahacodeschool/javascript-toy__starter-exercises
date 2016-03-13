// Prompt the user for a start value and an end value. 
// Count from the start value to the end value using a while loop. 
// Make sure to account for the start-value being equal to or greater than the end-value (should it not count? Should it count down instead of up in such cases?).
// Extend this by asking the user what increment they want to count by.

var numA = parseInt(prompt("enter your first number:"));
var numB = parseInt(prompt("enter your second number:"));
var increment = parseInt(prompt("at what increment would you like to count by?"));

if (numA > numB) {
  for(i = numA; i > numB -1; i -= increment) {
    console.log("The number is: " + i);
  }
}
else if (numA < numB) {
  for(i = numA; i < numB +1; i += increment ) {
    console.log("The number is: " + i);
  }
}
else {
  console.log(numA + " = " + numB)
};