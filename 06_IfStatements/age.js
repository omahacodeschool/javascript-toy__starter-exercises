var userAge = prompt("Please enter your age.");

var ageVerification;
if (userAge >= 25) {
  alert("You can rent a car!");
}
else if (userAge >= 21 && userAge <= 24) {
  alert("Please don't drink and drive!");
}
else if (userAge >= 16 && userAge <= 20) {
  alert("You're eligible for a driver's license!");
}

else if (userAge >= 0 && userAge <= 15) {
  alert("You can't drive yet, but you'll be able to in a few years");
}
else if (userAge <= -1) {
  alert("You're not born yet!");
}

else if (userAge == NaN) {
  alert("Sorry, but that's not a number!");
}


//attempt at building a function
// function between(userAge, min, max) {
//   return userAge >= min && userAge <= max;
// }

// if (between(userAge, 0, 15)) 
//   alert("You can't drive yet, but you'll be able to in a few years");

// else if (between(userAge, 16, 20)) 
//   alert("You're eligible for a driver's license!");

// else if (between(userAge, 21, 24)) 
//   alert("Please don't drink and drive!");

// else if (between(userAge, -1, -10)) 
//   alert("You're not born yet!");

// else if (between(userAge, 25, 100)) 
//   alert("You can rent a car!");
