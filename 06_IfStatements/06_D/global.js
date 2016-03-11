//6D: Driver's Ed

// //Prompt the user for their age and store it in a variable, then display any and all applicable messages below:

// - **Age 25 and older**: "You can rent a car"
// - **Age 21 and older**: "Please don't drink and drive"
// - **Age 16 and older**: "You're eligible for a driver's license"
// - **Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
// - **Any negative number**: "You haven't been born yet"
// - **NaN**: "Sorry, but that's not a number"

// For example, if I am 27, I should get the messages for 16, 21, and 25. If I am 23, I should get the messages for 16 and 21, but not 25, 0, or negative.

// These messages can be displayed as alerts or as logs to the console.

// You will not need to use `else` or `else if` in this exercise.

var userAge = prompt("Please enter your age");

var userAgeInteger = parseInt(userAge);

if (userAgeInteger >= 25) {
    alert("You can rent a car!");
  };

if (userAgeInteger >= 21) {
    alert("Please don't drink and drive.");
  };

if (userAgeInteger >= 16) {
    alert("You're eligible for a driver's license");
  };

if (userAgeInteger >= 0 && userAgeInteger <= 15) {
    alert("You can't drive yet, but you'll be able to in a few years.");
  };


if (userAgeInteger < 0) {
    alert("You haven't been born yet.");
  };

if (Number.isNaN(userAgeInteger)) {
     alert("Sorry, that's not a number.");
   };





