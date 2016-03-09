// Get the lengths
var firstNum = prompt("Give me the length of one side");
firstNum = parseInt(firstNum);

var secondNum = prompt("Give me the  length of another side");
secondNum = parseInt(secondNum);

var thirdNum = prompt("Give me the length of the last side");
thirdNum = parseInt(thirdNum);

// Do math
var a_b = (firstNum + secondNum);
var b_c = (secondNum + thirdNum);
var a_c = (firstNum + thirdNum);



// Alerts
if (a_b > thirdNum && b_c > firstNum && a_c > secondNum){
  alert("Yep, you got yourself a triangle right there.")
} 
else{
  alert("That is a sad traingle.")
} 


console.log("First Number is " + firstNum)
console.log("Second Number is " + secondNum)
console.log("Third Number is " + thirdNum)
console.log("a_b " + a_b)
console.log("b_c " + b_c)
console.log("a_c " + a_c)





