
var age = prompt("Please give me your age.", "Age here");



if (age >= 25) {
  alert("You can rent a car");
}

else if (age >= 21 && age <= 24) {
  alert("Please don't drink and drive");
}

else if (age >= 16 && age <= 20) {
  alert("You're eligible for a driver's license");
}

else if (age <= 15 && age >= 0) {
  alert("You can't drive yet, but you'll be able to in a few years");
}

else if  (age < 0 ) {
  alert("You haven't been born yet");
}

else if (age == NaN) {
  alert("That's not a number.")
}
