var password = "love";

var userPassword = prompt("Figure out the password.", "password goes here");

while (userPassword != password) {
  alert("Password incorrect. Try again");
  userPassword = prompt("Figure out the password.", "password goes here");
} 

alert("Job well done.");
