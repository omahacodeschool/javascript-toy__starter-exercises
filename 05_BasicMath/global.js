//Variables
var firstNumber = prompt("Give me number.", "Type the number here");
var secondNumber = prompt("Give me another number.", "Type the number here");
var thirdNumber = prompt("Give me a third number.", "Type the number here");
var num1 = parseInt(firstNumber);
var num2 = parseInt(secondNumber);
var num3 = parseInt(thirdNumber);


//Alerts
alert( num1 + "+" + num2 + "+" + num3 + "=" + (num1 + num2 + num3) );
alert( num1 + "-" + num2 + "-" + num3 + "=" + (num1 - num2 - num3) );
alert( num1 + "*" + num2 + "*" + num3 + "=" + (num1 * num2 * num3) );
alert( num1 + "/" + num2 + "=" + (num1 / num2) );
alert( num1 + "++"); num1++;
alert( "=" + num1 );
alert( num2 + "--"); num2--;
alert( "=" + num2 );

