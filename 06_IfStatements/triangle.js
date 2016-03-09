var firstNum = prompt("Please give me your first number.");
firstNum = parseInt(firstNum);

var secondNum = prompt("Please give me your second number.");
secondNum = parseInt(secondNum);

var thirdNum = prompt("Please give me your third number.");
thirdNum = parseInt(thirdNum);


var triangleVerification;
if (firstNum + secondNum > thirdNum && firstNum + thirdNum > secondNum) {
  alert("This is a valid triangle!");
}
else {
    alert("That's not a valid triangle!");
}

console.log(firstNum + secondNum + " " + "compared to" + " " + thirdNum);
console.log(firstNum + thirdNum + " " + "compared to" + " " + secondNum);