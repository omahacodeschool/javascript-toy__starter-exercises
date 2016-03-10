//prompt user for three numbers
var one = prompt("What's the first number?");
var two = prompt("What's the second number?");
var three = prompt("What's the third number?");

//convert inputs to integers
one = parseInt(one);
two = parseInt(two);
three = parseInt(three);

//display mathematical operations
console.log(one + " + " + two + " + " + three + " = " + (one + two + three));
console.log(one + " - " + two + " - " + three + " = " + (one - two - three));
console.log(one + " * " + two + " * " + three + " = " + (one * two * three));
console.log(one + " / " + two + " = " + (one / two));
console.log(two + " incremented is " + (++ two));
console.log(two + " decremented is " + (-- two));