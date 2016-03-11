// ## 6E: Driver's Ed, Part 2

// This exercise is pretty similar to Part 1, but in this case you'll *only display one message* depending on the range your user's age falls into:

// - **Age 25 and older**: "You can rent a car"
// - **Age 21 - 24**: "Please don't drink and drive"
// - **Age 16 - 20**: "You're eligible for a driver's license"
// - **Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
// - **Any negative number**: "You haven't been born yet"
// - **NaN**: "Sorry, but that's not a number"

// All of your program logic (i.e. the part that decides which output to display) should be contained in a single `if` / `else if` / `else` block, rather than in separate `if` statements.

var age = prompt("Please provide your age");
age = parseInt(age);

rentCarAge = 25;
drinkAndDrive = 21;
driveOnly = 16;
tooYoung = 15;

var rentCarMessage = "You can rent a car";
var drinkAndDriveMessage = "Please don't drink and drive";
var driveOnlyMessage = "You're eligible for a driver's license";
var tooYoungMessage = "You can't drive yet, but you'll be able to in a few years";
var notBornYetMessage = "You haven't been born yet";
var NaNMessage = "Sorry, but that's not a number";

if (age >= rentCarAge){
  alert(rentCarMessage);
} 
else if (age >= drinkAndDrive && age < rentCarAge) {
  alert(drinkAndDriveMessage);
} 
else if (age >= driveOnly && age < drinkAndDrive) {
  alert(driveOnlyMessage);
} 
else if (age <= tooYoung && age > 0) {
  alert(tooYoungMessage);
}
else if (isNaN(age)){
  alert(NaNMessage);
}
else {
  alert(notBornYetMessage);
}
