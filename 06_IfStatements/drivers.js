
var driverAge = prompt("Please give me your age.", "Age here");
var age = parseInt(driverAge);

if (age >= 16) {
  alert("You're eligible for a driver's license");
}

if (age >= 25) {
  alert("You can rent a car");
}

if (age >= 21) {
  alert("Please don't drink and drive");
}


if (age <= 15) {
  alert("You can't drive yet, but you'll be able to in a few years");
}

if (age < 0 ) {
  alert("You haven't been born yet");
}

if (age === NaN) {
  alert("Sorry, but that's not a number");
}

