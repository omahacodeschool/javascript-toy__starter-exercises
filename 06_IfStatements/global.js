var password = "loggins";
var userPassword = prompt("enter a password");
if (userPassword === password) {
  alert("correct")
}
else { 
  alert ("wrong, the password is 'loggins'")
};

var secretNumber = 23;
var userNumber = parseInt(prompt("enter a number"));
if (userNumber === secretNumber) {
  alert("correct! " + userNumber + " is " + secretNumber)
}
else {
  alert ("wrong! " + userNumber + " is not " + secretNumber)
};

var userAge = parseInt(prompt("enter your age"));
if (userAge >= 25) {
  alert("You can rent a car.")
}
if (userAge >= 21) {
  alert("Please don't drink and drive.")
}
if (userAge >= 16) {
  alert("You're eligible for a driver's license.")
}
if (userAge < 16) {
  alert("You can't drive yet, but you'll be able to in a few years")
}
if (userAge < 0) {
  alert("You haven't been born yet.")
}
if (userAge == NaN) {
  alert("Sorry, that's not a number.")
}