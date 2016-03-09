var age = parseInt(prompt("Please Enter Your Age: "));

var message25 = "You can rent a car";
var message21 = "Please don't drink and drive";
var message16 = "You're eligible for a driver's license";
var message15 = "You can't drive yet, but you'll be able to in a few years";
var messageNeg = "You haven't been born yet";
var messageNA = "Sorry, but that's not a number"; 

alert("Please open the JavaScript Console in order to review your messages.");

if (age >= 25) {
  console.log(message25);
}

if (age >= 21) {
  console.log(message21);
}

if (age >=16) {
  console.log(message16);
}

if (age <= 15 && age >= 0) {
  console.log(message15);
}

if (age < 0) {
  console.log(messageNeg);
}

if (age == undefined) {
  console.log(messageNA);
}