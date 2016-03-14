// Prompt the user for three numbers (make sure to parse them to integers)
var firstNum = prompt("What is your first number?");
firstNum = parseInt(firstNum);
var secondNum = prompt("What is your second number?");
secondNum = parseInt(secondNum);
var thirdNum = prompt("What is your third number?");
thirdNum = parseInt(thirdNum);

// Output the sum of the three numbers in a string.
// Example: 7 + 4 + 12 = 23
alert(firstNum + " + " + secondNum + " + " + thirdNum + " = " + (firstNum + secondNum + thirdNum))

// Output the difference when the second and third numbers are subtracted from the first.
// Example: 7 - 4 - 12 = -9
alert(firstNum + " - " + secondNum + " - " + thirdNum + " = " + (firstNum - secondNum - thirdNum));

// Output the product of the three numbers.
// Example: 7 * 4 * 12 = 336
alert(firstNum + " * " + secondNum + " * " + thirdNum + " = " + (firstNum * secondNum * thirdNum));

// Output the quotient of the first number divided by the second number.
// Example: 7 / 4 = 1.75
alert(firstNum + " / " + secondNum + " = " + (firstNum / secondNum));

// Output the result of incrementing the first number.
// Example: 7++ = 8
alert( "Incrementing: " + firstNum + "++" );
firstNum++;
alert( "After incrementing: " + firstNum );

// Output the result of decrementing the second number.
// Example 4-- = 3
alert( "Decrementing: " + secondNum + "--");
secondNum--;
alert( "After decrementing: " + secondNum );