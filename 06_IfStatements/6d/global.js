var userInput = prompt("Please enter your age")

var userAge = Number(userInput)
debugger;
function givePermissions() {
debugger;
  if (userAge.isNaN()){
    alert("Sorry, but that's not a number");
  }
debugger;
  if (userAge >= 25){
    alert("You can rent a car!");
  }

  if (userAge >= 21){
    alert("Please don't drink and drive.");
  }

  if (userAge >= 16){
    alert("You're eligible for a driver's license!");
  }

  if (userAge <= 15 && userAge > 0){
    alert("You can't drive yet, but you'll be able to in a few years");
  }

  if (userAge <= 0){
    alert("You haven't been born yet");
  }
  
}

givePermissions()

// - **Age 25 and older**: "You can rent a car"
// - **Age 21 and older**: "Please don't drink and drive"
// - **Age 16 and older**: "You're eligible for a driver's license"
// - **Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
// - **Any negative number**: "You haven't been born yet"
// - **NaN**: "Sorry, but that's not a number"