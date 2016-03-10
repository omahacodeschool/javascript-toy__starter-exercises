//prompt user for input
var one = prompt("What's the first number?");
var two = prompt("What's the second number?");
var three = prompt("What's the third number?");

//convert inputs to integers
one = parseInt(one);
two = parseInt(two);
three = parseInt(three);

if (one + two > three && two + three > one && one + three > two) {
  alert("This is a valid triangle.")
} else {
  alert("This is not a valid triangle.")
}