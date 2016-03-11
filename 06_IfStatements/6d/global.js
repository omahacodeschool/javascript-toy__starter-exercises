var userInput = prompt("Please enter your age")

parseInt(userInput);

var userAge = Number(userInput)

function givePermissions() {

  if (isNaN(userAge)){
    alert("Sorry, but that's not a number");
  }

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
