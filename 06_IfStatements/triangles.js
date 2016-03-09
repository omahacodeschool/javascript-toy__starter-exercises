//Variables

var n1 = prompt("Give me a number.", "Put number here.");
var num1 = parseInt(n1);
var n2 = prompt("Give me another number.", "Put number here.");
var num2 = parseInt(n2);
var n3 = prompt("Give me another number.", "Put number here.");
var num3 = parseInt(n3);


if (num1 + num2 > num3 && num2 + num3 > num1 && num3 + num1 > num2 ) 
{
  alert("This is a valid triangle");
} 
else {
  alert("This is not a valid triangle");
}