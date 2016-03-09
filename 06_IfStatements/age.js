var userAge = prompt("Please enter your age.");

var ageVerification;
if (userAge >= 25) {
    alert("You can rent a car!");
}
if (userAge >= 21) {
    alert("Please don't drink and drive!");
}
if (userAge >= 16) {
    alert("You're eligible for a driver's license!");
}

if (userAge >= 0 && userAge <= 15) {
    alert("You can't drive yet, but you'll be able to in a few years");
}
if (userAge <= -1) {
    alert("You're not born yet!");
}

if (userAge == NaN) {
    alert("Sorry, but that's not a number!");
}