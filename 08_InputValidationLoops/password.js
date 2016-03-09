var password = "asdf";
var inputPass = prompt("Please enter your password");



while (inputPass.toUpperCase() != password.toUpperCase()) {
  alert("Password incorrect! Press OK to try again.");
  var inputPass = prompt("Please enter your password"); 
}

if (inputPass.toUpperCase() == password.toUpperCase()) {
  alert("Password correct! Press OK to continue.");
}