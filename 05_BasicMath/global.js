// I've added default numbers in order to quickly run through the JS in the browser._____________________________________________________________

var userNumberA = prompt("Please enter a number.", 53);

var userNumberB = prompt("One more number, please!", 11);

var userNumberC = prompt("Ok, nearly there. One last number, if you would?", 36);

alert("Your numbers are " + userNumberA + ", " + userNumberB + ", and " + userNumberC);

console.log("User's numbers are " + userNumberA + ", " + userNumberB + ", and " + userNumberC);


// The following is the inspecting of what is output from the prompt, and the conversion of Strings to Numbers.__________________________________

console.log(typeof userNumberA);
console.log(typeof userNumberB);
console.log(typeof userNumberC);

userNumberA = Number(userNumberA);
userNumberB = Number(userNumberB);
userNumberC = Number(userNumberC);

console.log(typeof userNumberA);
console.log(typeof userNumberB);
console.log(typeof userNumberC);

// Below are the operations. I have included alerts to User and console logs for each.

//________________________SUM____________________________________

numberSum = userNumberA + userNumberB + userNumberC;

alert("Your numbers have been added. " + userNumberA + " plus " + userNumberB + " plus " + userNumberC + " equals " + numberSum + " !");

console.log(userNumberA + " + " + userNumberB + " + " + userNumberC + " = " + numberSum);


//_________________________DIFF____________________________________

numberDifference = userNumberA - userNumberB - userNumberC;

alert("Your numbers have been subtracted. " + userNumberA + " minus " + userNumberB + " minus " + userNumberC + " equals " + numberDifference + " !");

console.log(userNumberA + " - " + userNumberB + " - " + userNumberC + " = " + numberDifference);


//__________________________PROD__________________________________

numberProduct = userNumberA * userNumberB * userNumberC;

alert("Your numbers have been multiplied. " + userNumberA + " times " + userNumberB + " times " + userNumberC + " equals " + numberProduct + " !");

console.log(userNumberA + " x " + userNumberB + " x " + userNumberC + " = " + numberProduct);


//__________________________QUO__________________________________

numberQuotient = userNumberA / userNumberB;

alert("Your first two numbers have been divided. " + userNumberA + " divided by " + userNumberB + " equals " + numberQuotient + " !");

console.log(userNumberA + " / " + userNumberB + " = " + numberQuotient);


//__________________________++__________________________________

numberIncrement = userNumberA++ ;

alert("Your first number has been incremented by 1. " + userNumberA + " becomes the more-desirable " + numberIncrement + " !");

console.log(userNumberA + " +1 = " + numberIncrement);







// - Prompt the user for three numbers (make sure to parse them to integers (In Ruby, this would be accomplished with `.to_i`.), and make sure to store each in a well-named variable)
// - Output the sum of the three numbers in a string like so: `7 + 4 + 12 = 23`
// - Output the difference when the second and third numbers are subtracted from the first: `7 - 4 - 12 = -9`
// - Output the product of the three numbers: `7 * 4 * 12 = 336`
// - Output the quotient of the first number divided by the second number: `7 / 4 = 1.75`
// - Output the result of incrementing the first number: `7++ = 8`
// - Output the result of decrementing the second number: `4-- = 3`
