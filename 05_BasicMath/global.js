//Prompt the user for three numbers (make sure to parse them to integers (In Ruby, this would be accomplished with `.to_i`.), and make sure to store each in a well-named variable)

var numberOne = prompt("Please enter a number");
var integerOne = parseInt(numberOne);

var numberTwo = prompt("Please enter another number");
var integerTwo = parseInt(numberTwo);

var numberThree = prompt("Please enter yet another number");
var integerThree = parseInt(numberThree);

//Output variables to console with their type

if (numberOne != null) {
    console.log("Number 1 is " + integerOne + typeof integerOne);
  }

if (numberTwo != null) {
    console.log("Number 2 is " + integerTwo + typeof integerTwo);
  }

if (numberThree != null) {
    console.log("Number 3 is " + integerThree + typeof integerThree);
  }

//Output the sum of the three numbers in a string like so: `7 + 4 + 12 = 23`

console.log("The sum of those is " + (integerOne + integerTwo + integerThree));

//Output the difference when the second and third numbers are subtracted from the first: `7 - 4 - 12 = -9`

console.log("The difference when the second and third numbers are subtracted from the first is " + (integerOne - (integerTwo + integerThree)));

//Output the product of the three numbers: `7 * 4 * 12 = 336`

console.log("The product of the three numbers is " + (integerOne * integerTwo * integerThree));

//Output the quotient of the first number divided by the second number: `7 / 4 = 1.75`

console.log("The quotient of the first number divided by the second number " + (integerOne / integerTwo));

//Output the result of incrementing the first number: `7++ = 8`

console.log("The result of incrementing the first number is " + (++integerOne));

//Output the result of decrementing the second number: `4-- = 3`

console.log("The result of decrementing the second number is " + (--integerTwo));

var parseTest = parseInt("9,I a,m 9 $years old");
console.log("Parse test is " + parseTest);










