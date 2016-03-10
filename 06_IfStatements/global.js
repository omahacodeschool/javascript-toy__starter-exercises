//6A: Relational and Equality Operators

console.log( "5 == '5' is " + (5 == '5') ); // true
console.log( "5 == 'five' is " + (5 == 'five') ); // false
console.log( "5 == '6' is " + (5 == '6') ); //false
console.log( "5 === '5' is " + (5 === '5') ); //false
console.log( "5 == 2 + 3 is " + (5 == 2 + 3) ); // true
console.log( "5 == 5 is " + (5 == 5) ); //true
console.log( "5 === 5 is " + (5 === 5) ); //true
console.log( "true == 'true' is " + (true == 'true') ); //false
console.log( "true === 'true' is " + (true === 'true') ); //false
console.log( "true == false is " + (true == false) ); //false
console.log( "5 == 12 is " + (5 == 12) ); //false
console.log( "5 != 12 is " + (5 != 12) ); //true
console.log( "5 < 12 is " + (5 < 12) ); //true
console.log( "5 <= 12 is " + (5 <= 12) ); //true
console.log( "5 > 12 is " + (5 > 12)); //false
console.log( "5 >= 12 is " + (5 >= 12)); //false
//-------------------------------------------


//6B: Password Game

var password = "meep",
    userGuess = prompt("What's the password?");

if (password === userGuess) {
  alert("Lucky guess.");
} else {
    alert(`Nope! The password was ${password}.`);
}
//--------------------------------------

//6C: Guess a Number
var secretNum = 18,
    userNum = prompt("I'm thinking of a number between 1 & 20...");

if (secretNum == userNum) {
  alert("Lucky guess.");
} else {
    alert(`Nope! It was ${secretNum}!`);
}
//---------------------------------------


//6D: Driver's Ed, Part 1
var userAge = parseInt(prompt("How old are you?")),
    driversEdArray = [];

//console to check user output
console.log(userAge, typeof userAge)

//if statements to determine messages to give user
if (isNaN(userAge)) {
  driversEdArray.push(`Sorry, but that's not a number.`);
}

if (userAge >= 25) {
  driversEdArray.push(`You can rent a car!`);
}

if (userAge >= 21) {
  driversEdArray.push(`Please don't drink and drive`);
}

if (userAge >= 16) {
  driversEdArray.push(`You're eligible for a driver's license`);
}

if (userAge >= 0 && userAge <= 15) {
  driversEdArray.push(`You can't drive yet, but you'll be able to in a few years`);
}

if (userAge < 0) {
  driversEdArray.push(`Come back when you've been born!`);
}

// returns single alert with applicable messages
alert(driversEdArray.join(" \n "));
//-----------------------------------------------



//6E: Driver's Ed, Part 2
var userAge2 = parseInt(prompt("How old are you?")),
    driversEdArray2 = [];

//console to check user output
console.log(userAge, typeof userAge)

//if statements to determine messages to give user
if (userAge2 >= 25) {
  driversEdArray2.push(`You can rent a car!`);
} else if (userAge2 >= 21) {
     driversEdArray2.push(`Please don't drink and drive`);
} else if (userAge2 >= 16) {
     driversEdArray2.push(`You're eligible for a driver's license`);
} else if (userAge2 >= 0 && userAge <= 15) {
     driversEdArray2.push(`You can't drive yet, but you'll be able to in a few years`);
} else if (userAge2 < 0) {
     driversEdArray2.push(`Come back when you've been born!`);
} else if (isNaN(userAge2)) {
     driversEdArray2.push(`Sorry, but that's not a number.`);
}

// returns single alert with applicable messages
alert(driversEdArray2.join(" \n "));
//----------------------------------------------------


//6F: Triangles
var sideOne = parseFloat(prompt("What is the length of the first side of the triangle?")),
sideTwo = parseFloat(prompt("What is the length of the second side of the triangle?")),
sideThree = parseFloat(prompt("What is the length of the third side of the triangle?")),
triangleIdentifier = [],
invalidCount = 0;

if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
   alert("All parameters must be valid numbers.");
    invalidCount++
} else if (sideOne === 0 || sideTwo === 0 || sideThree === 0) {
    alert("No side of a triangle can have a length of 0.");
    invalidCount++
} else if (sideOne < 0 || sideTwo < 0 || sideThree < 0) {
    alert("The length of a traingle cannot be expressed with imaginary numbers.");
    invalidCount++
} 

if (sideOne === sideThree && sideOne === sideTwo) {
  triangleIdentifier.push("This is an equilateral triangle.");
} else if ((sideOne * sideOne) + (sideTwo * sideTwo) === (sideThree * sideThree) || (sideOne * sideOne) + (sideThree * sideThree) > (sideTwo * sideTwo) || (sideTwo * sideTwo) + (sideThree * sideThree) > (sideOne *sideOne)) {
   triangleIdentifier.push("This is a right triangle"); 
} 

if (sideOne != sideTwo && sideOne != sideThree && sideTwo != sideThree) {
  triangleIdentifier.push("This is a scalene triangle.");
} 

if (sideOne === sideThree || sideOne === sideTwo || sideTwo === sideThree) {
  triangleIdentifier.push("This is an isosceles triangle.");   
} 

if (invalidCount <= 0) {
  alert(triangleIdentifier.join("\n"))
}

//---------------------------------------------


