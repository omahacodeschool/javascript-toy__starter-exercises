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
if (userNumber == secretNumber) {
  alert("correct! " + userNumber + " is " + secretNumber)
}
else {
  alert ("wrong! " + userNumber + " is not " + secretNumber)
};