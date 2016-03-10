// First number prompt
var firstNum = prompt("Please supply a number, any (whole) number.");
console.log("First user input: " + firstNum);

// Second number prompt
var secondNum = prompt("Now another number, please.");
console.log("Second user input: " + secondNum);

// Third number prompt
var thirdNum = prompt("Any one last number.");
console.log("Third user input: " + thirdNum);

// Define arithmetic functions
function add(numOne, numTwo, numThree) { return numOne + numTwo + numThree; }
function subtract(numOne, numTwo, numThree) { return numOne - numTwo - numThree; }
function multiply(numOne, numTwo, numThree) { return numOne * numTwo * numThree; }
function divide(numOne, numTwo) { return numOne / numTwo; }
function increment(numOne) { return numOne + 1; }
function decrement(numTwo) { return numTwo - 1; }

// Convert number strings to integers
firstInt  = parseInt(firstNum)
secondInt = parseInt(secondNum)
thirdInt  = parseInt(thirdNum)

// Alert the user to the results
alert(firstNum + " + " + secondNum + " + " + thirdNum + " = " + add(firstInt, secondInt, thirdInt));

alert(firstNum + " - " + secondNum + " - " + thirdNum + " = " + subtract(firstInt, secondInt, thirdInt));

alert(firstNum + " x " + secondNum + " x " + thirdNum + " = " + multiply(firstInt, secondInt, thirdInt));

alert(firstNum + " / " + secondNum + " = " + divide(firstInt, secondInt, thirdInt));

alert(firstNum + "++ = " + increment(firstInt));

alert(secondNum + "-- = " + decrement(secondInt));