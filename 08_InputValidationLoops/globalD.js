//prompt user for input
var one = prompt("What's the first number?");
var two = prompt("What's the second number?");
var three = prompt("What's the third number?");

//convert inputs to integers
one = parseInt(one);
two = parseInt(two);
three = parseInt(three);

while (one + two <= three || two + three <= one || one + three <= two) {
  one = prompt("Sorry, that's not a valid triangle. Try again. What's the first number?");
  two = prompt("Sorry, that's not a valid triangle. Try again. What's the second number?");
  three = prompt("Sorry, that's not a valid triangle. Try again. What's the third number?");
}

if (one + two > three && two + three > one && one + three > two) {
  alert("This is a valid triangle.")
}