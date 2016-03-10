//JS atomics 05
var firstNum= prompt("Give me a number:");
var secondNum= prompt("Give me another number:");
var thirdNum= prompt("Give me yet another number:");

//converting prompt output to integers
firstNum = parseInt(firstNum);
secondNum = parseInt(secondNum);
thirdNum = parseInt(thirdNum);

//The following lines introduce a bit of extra code, but they make the actual
//alerts look a bit tidier in my opinion.  So, let's call it an addition for 
//readability.
var sum = firstNum + secondNum + thirdNum;
var difference = firstNum - secondNum - thirdNum;
var product = firstNum * secondNum * thirdNum;
var quotient = firstNum / secondNum;

//output
alert(firstNum + " + " + secondNum + " + " + thirdNum + " = " + sum );
alert(firstNum + " - " + secondNum + " - " + thirdNum + " = " + difference);
alert(firstNum + " * " + secondNum + " * " + thirdNum + " = " + product);
alert(firstNum + " / " + secondNum + " = " + quotient);

alert( "Incrementing: " + firstNum + "++" );
firstNum++;
alert( "After incrementing: " + firstNum );

alert( "Decrementing: " + secondNum + "--");
secondNum--;
alert( "After decrementing: " + secondNum );

var parseString = parseInt("I am 9 years old.")
var parseStringAgain = parseInt("9 is my age.")
var parseYetAnotherString = parseInt("1,2,$3")

alert(parseString)
alert(parseStringAgain)
alert(parseYetAnotherString)