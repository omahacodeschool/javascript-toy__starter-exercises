//prompts for numbers from user
var firstNum = prompt("Please type in a number");
firstNum = parseInt(firstNum);
var secondNum = prompt("Please type in another number");
secondNum = parseInt(secondNum);
var thirdNum = prompt("Please type another number (Last time. I promise!)");
thirdNum = parseInt(thirdNum);

// calculations of user input
var sumOfAll = (firstNum + secondNum + thirdNum);
var difference = (firstNum - secondNum - thirdNum);
var product = (firstNum * secondNum * thirdNum);
var divideFirstTwo = (firstNum / secondNum);


//alert() outputs
alert("The sum of all three numbers is " + sumOfAll + ".");

alert("The difference, when " + secondNum + " and " + thirdNum + " are subtracted from " + firstNum + " is " + difference + ".");

alert("The product of all three numbers is " + product + ".");

alert("The quotient of " + firstNum + " divided by " + secondNum + " is " +divideFirstTwo + ".");

alert("The result of incrementing " + firstNum + " is " + (firstNum+= 1) + ".");

alert("The result of decrementing " + secondNum + " is " + (secondNum-= 1) + ".");