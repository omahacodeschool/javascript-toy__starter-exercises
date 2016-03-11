// 6D: Driver's Ed, Part 1

// Prompt the user for their age and store it in a variable, then display any and all applicable messages below:

// - **Age 25 and older**: "You can rent a car"
// - **Age 21 and older**: "Please don't drink and drive"
// - **Age 16 and older**: "You're eligible for a driver's license"
// - **Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
// - **Any negative number**: "You haven't been born yet"
// - **NaN**: "Sorry, but that's not a number"

// For example, if I am 27, I should get the messages for 16, 21, and 25. If I am 23, I should get the messages for 16 and 21, but not 25, 0, or negative.

// These messages can be displayed as alerts or as logs to the console.

// You will not need to use `else` or `else if` in this exercise.

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

if (age >= rentCarAge){
  alert(driveOnlyMessage);
  alert(drinkAndDriveMessage);
  alert(rentCarMessage);
}

if (age >= drinkAndDrive && age < rentCarAge) {
  alert(driveOnlyMessage);
  alert(drinkAndDriveMessage);
}

if (age >= driveOnly && age < drinkAndDrive) {
  alert(driveOnlyMessage);
}

if (age <= tooYoung) {
  alert(tooYoungMessage);
}

