// Implement FizzBuzz. This program counts numbers as normal, except that when the number is divisible by 3, you output "Fizz", when it's divisible by 5, you output "Buzz", and when it's divisible by both 3 and 5 (e.g. 15, 30, etc.), output "FizzBuzz". 

// Extend this by prompting the user for a start value and an end value. Use a while loop.

var numA = parseInt(prompt("Enter your first number:"));
var numB = parseInt(prompt("Enter your last number:"));

if (numA > numB) {
  while (numA >= numB) {
    if (numA % 15 == 0) {
      console.log("FizzBuzz")
    }
    else if (numA % 5 == 0) {
      console.log("Buzz")
    }
    else if (numA % 3 == 0) {
      console.log("Fizz")
    }
    else {
      console.log(numA)
    };
    numA--;
  }
}
else if (numA < numB) {
  while (numA <= numB) {
    if (numA % 15 == 0) {
      console.log("FizzBuzz")
    }
    else if (numA % 5 == 0) {
      console.log("Buzz")
    }
    else if (numA % 3 == 0) {
      console.log("Fizz")
    }
    else {
      console.log(numA)
    };
    numA++;
  }
}
else {
  console.log("try again")
};