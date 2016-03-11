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
else if (userAge >= 21 && userAge < 25) {
  alert("Please don't drink and drive.")
}
else if (userAge >= 16 && userAge < 21) {
  alert("You're eligible for a driver's license.")
}
else if (userAge < 16 && userAge > 0) {
  alert("You can't drive yet, but you'll be able to in a few years")
}
else if (userAge < 0) {
  alert("You haven't been born yet.")
}
else {
  alert("Sorry, " + userAge + " is not an age.")
}