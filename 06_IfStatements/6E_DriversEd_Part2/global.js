var age = parseInt(prompt("Please Enter Your Age: "));

var message25 = "You can rent a car";
var message21 = "Please don't drink and drive";
var message16 = "You're eligible for a driver's license";
var message15 = "You can't drive yet, but you'll be able to in a few years";
var messageNeg = "You haven't been born yet";
var messageNA = "Sorry, but that's not a number"; 

/*
if (isNaN(age)) {
  alert(messageNA);
}else if (age < 0) {
  alert(messageNeg);
}else if (age <= 15 && age >= 0) {
  alert(message15);
}else if (age >=16) {
  alert(message16);
}else if (age >= 21) {
  alert(message21);
}else if (age >= 25) {
  alert(message25);
}
*/

if (age >= 25) {
  alert(message25);
}else if (age >= 21) {
  alert(message21);
}else if (age >=16) {
  alert(message16);
}else if (age <= 15 && age >= 0) {
  alert(message15);
}else if (age < 0) {
  alert(messageNeg);
}else {
   alert(messageNA);
}
