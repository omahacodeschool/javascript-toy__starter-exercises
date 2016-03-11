// Get numbers
var first_num = prompt("Give me a number.");
first_num = parseInt(first_num);

var second_num = prompt("Give me a number."); 
second_num = parseInt(second_num);

var third_num = prompt("Give me a number.");
third_num = parseInt(third_num)

// Do math
var sum = (first_num + second_num + third_num);
var difference = (first_num - second_num - third_num);
var product = (first_num * second_num * third_num);
var quotient = (first_num / second_num);


// Educate user
alert( "The sum of " + first_num + ", " + second_num + ", and " + third_num
  + " is " + sum +".");
alert("The difference of " + first_num + " from " + second_num + " and " + third_num + " is " + difference + ".");
alert("The product of " + first_num + ", " + second_num + ", and " + third_num + " is " + product +".");
alert("The quotient of " + first_num + " divided by " + second_num +
 " is " + quotient + ".");
alert(first_num + " increased by 1 is... ");
first_num++;
alert(first_num)
alert(second_num + " decreased by 1 is... ");
second_num--
alert(second_num)

// Log Stuff
console.log("first_num is " + first_num);
console.log("second_num is " + second_num);
console.log("third_num is " + third_num);
console.log("sum is " + sum);
console.log("difference is " + difference);
console.log("quotient is " + quotient);