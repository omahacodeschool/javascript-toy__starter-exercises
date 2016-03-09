var firstNum = prompt("Please give me your first number.");
var secondNum = prompt("Please give me your second number.");
var thirdNum = prompt("Please give me your third number.");
var totalAdd = +firstNum + +secondNum + +thirdNum
var totalSubtract = +firstNum - +secondNum - +thirdNum
var totalMultiply = +firstNum * +secondNum * +thirdNum
var totalDivide = +firstNum / +secondNum / +thirdNum
var increment = +firstNum
var decrement = +firstNum

alert(firstNum + " " + "+" + " " + secondNum + " " + "+" + " " + thirdNum + " " + "=" + " " + totalAdd);

alert(firstNum + " " + "-" + " " + secondNum + " " + "-" + " " + thirdNum + " " + "=" + " " + totalSubtract);

alert(firstNum + " " + "*" + " " + secondNum + " " + "*" + " " + thirdNum + " " + "=" + " " + totalMultiply);

alert(firstNum + " " + "/" + " " + secondNum + " " + "/" + " " + thirdNum + " " + "=" + " " + totalDivide);

alert( firstNum + " " + "Will be incremented. Hit Ok." );firstNum++;
alert( "After incrementing, the number is now: " + firstNum );
alert( secondNum + " " + "Will be decremented. Hit Ok.");secondNum--;
alert( "After decrementing, the number is now: " + secondNum );