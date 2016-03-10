//Take in information.
var firstNumber = parseInt(prompt("Please enter your first number "));
var secondNumber = parseInt(prompt("Please enter your second number "));
var thirdNumber = parseInt(prompt("Please enter your third number "));

//Calculate Math
var sum = (firstNumber + secondNumber + thirdNumber);
var difference = (firstNumber - secondNumber - thirdNumber);
var product = (firstNumber * secondNumber * thirdNumber);
var quotient = (firstNumber / secondNumber);

//Output Information
alert(firstNumber + " + " + secondNumber + " + " + thirdNumber + " = " + sum );
alert(firstNumber + " - " + secondNumber + " - " + thirdNumber + " = " + difference );
alert(firstNumber + " * " + secondNumber + " * " + thirdNumber + " * " + 
  product );
alert(firstNumber + " / " + secondNumber + " = " + quotient );
alert("Incrementing: " + firstNumber + "++");
firstNumber++;
alert("After incrementing: " + firstNumber);
alert("Decrementing: " + secondNumber + "--");
secondNumber--;
alert("After decrementing: " + secondNumber);
