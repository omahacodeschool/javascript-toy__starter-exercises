//collecting 3 numbers from prompt and converting to integers
var firstNum = parseInt(prompt("Give me a number."));

var secondNum = parseInt(prompt("Give me a second number."));

var thirdNum = parseInt(prompt("Give me a third number."));

console.log( firstNum + " + " + secondNum + " + " + thirdNum + " = " + (firstNum + secondNum + thirdNum) );
console.log( firstNum + " - " + secondNum + " - " + thirdNum + " = " + (firstNum - secondNum - thirdNum) );
console.log( firstNum + " * " + secondNum + " * " + thirdNum + " = " + (firstNum * secondNum * thirdNum) );
console.log( firstNum + " / " + secondNum + " = " + (firstNum / secondNum) );
console.log( "Incrementing the first number: " + firstNum + "++" );
firstNum++;
console.log( "Result: " + firstNum )
console.log( "Decrementing the second number: " + secondNum + "--" );
secondNum--;
console.log( "Result: " + secondNum )