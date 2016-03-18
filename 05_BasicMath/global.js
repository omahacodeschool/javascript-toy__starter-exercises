// First number prompt
var firstNum = parseInt(prompt("Please supply a number, any (whole) number."));
console.log("First user input: " + firstNum);

// Second number prompt
var secondNum = parseInt(prompt("Now another number, please."));
console.log("Second user input: " + secondNum);

// Third number prompt
var thirdNum = parseInt(prompt("Any one last number."));
console.log("Third user input: " + thirdNum);

// Define arithmetic functions
function add(numOne, numTwo, numThree) { 
  return numOne + numTwo + numThree; 
}
function subtract(numOne, numTwo, numThree) { 
  return numOne - numTwo - numThree; 
}
function multiply(numOne, numTwo, numThree) { 
  return numOne * numTwo * numThree; 
}
function divide(numOne, numTwo) { 
  return numOne / numTwo; 
}
function increment(numOne) { 
  return numOne = numOne++; 
}
function decrement(numTwo) { 
  return numTwo = numTwo--; 
}

// Alert the user to the results
alert(firstNum + " + " + secondNum + " + " + thirdNum + " = " + add(firstNum, secondNum, thirdNum));

alert(firstNum + " - " + secondNum + " - " + thirdNum + " = " + subtract(firstNum, secondNum, thirdNum));

alert(firstNum + " x " + secondNum + " x " + thirdNum + " = " + multiply(firstNum, secondNum, thirdNum));

alert(firstNum + " / " + secondNum + " = " + divide(firstNum, secondNum, thirdNum));

alert(firstNum + "++ = " + increment(firstNum));

alert(secondNum + "-- = " + decrement(secondNum));