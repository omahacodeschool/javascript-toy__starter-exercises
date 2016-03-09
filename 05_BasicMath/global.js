// I've added default numbers in order to quickly run through the JS in the browser._____________________________________________________________

var userNumberA = prompt("Please enter a number.", 53);

var userNumberB = prompt("One more number, please!", 11);

var userNumberC = prompt("Ok, nearly there. One last number, if you would?", 36);


// The following is the inspecting of what is output from the prompt, the parsing out of non-number characters, and the conversion of the resulting Strings into Numbers.__________________________________

console.log(typeof userNumberA);
console.log(typeof userNumberB);
console.log(typeof userNumberC);

userNumberA = userNumberA.replace ( /[^\d.]/g, '' );
userNumberB = userNumberB.replace ( /[^\d.]/g, '' );
userNumberC = userNumberC.replace ( /[^\d.]/g, '' );

userNumberA = Number(userNumberA);
userNumberB = Number(userNumberB);
userNumberC = Number(userNumberC);

console.log(typeof userNumberA);
console.log(typeof userNumberB);
console.log(typeof userNumberC);


// Below is the alert and the log that shows the corrected input.

alert("Your numbers are " + userNumberA + ", " + userNumberB + ", and " + userNumberC);

console.log("User's numbers are " + userNumberA + ", " + userNumberB + ", and " + userNumberC);



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

numberIncrement = userNumberA;
numberIncrement++;

alert("Your first number has been incremented by 1. " + userNumberA + " becomes the more-desirable " + numberIncrement + " !");

console.log(userNumberA + " +1 = " + numberIncrement);


//__________________________--__________________________________

numberDecrement = userNumberB;
numberDecrement--;

alert("Your second number has been decremented by 1. " + userNumberB + " becomes the less-desirable " + numberDecrement + " !");

console.log(userNumberB + " -1 = " + numberDecrement);
