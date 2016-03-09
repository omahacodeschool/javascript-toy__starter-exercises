var input1 = prompt("Let's so some math! Please input a number.");
var input2 = prompt("Input another number, please.");
var input3 = prompt("One more number!");

num1 = Number(input1)
num2 = Number(input2)
num3 = Number(input3)

alert("CLICK OK FOR MATH!");
alert(input1 + " + " + input2  + " + " + input3 + " = " + (num1 + num2 + num3));
alert(input1 + " - " + input2  + " - " + input3 + " = " + (num1 - num2 - num3));
alert(input1 + " * " + input2  + " * " + input3 + " = " + (num1 * num2 * num3));
alert(input1 + " / " + input2 + " = " + (num1 / num2));
alert(input1 + "++ = " + (++num1));
alert(input2 + "-- = " + (--num2));
