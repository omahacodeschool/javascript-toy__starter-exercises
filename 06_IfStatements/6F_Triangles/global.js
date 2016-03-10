//Get User Input
var firstSide = parseInt(prompt("Please enter the first side: "));
var secondSide =  parseInt(prompt("Please enter the second side: "));
var thirdSide = parseInt(prompt("Please enter the third side: "));

//Test Input with Console Output

var test1 = ((firstSide + secondSide) > thirdSide);
console.log(firstSide + " + " + secondSide + " > " + thirdSide + "; " + test1);

var test2 = ((secondSide + thirdSide) > firstSide);
console.log(secondSide + " + " + thirdSide + " > " + firstSide + "; " + test2);

var test3 = ((firstSide + thirdSide) > secondSide);
console.log(firstSide + " + " + thirdSide + " > " + secondSide + "; " + test3);

//Alert Message Based on Tests

if (test1 === true && test2 === true && test3 === true) {
  alert("This is a valid triangle");
}else {
  alert("This is not a valid triangle");
}