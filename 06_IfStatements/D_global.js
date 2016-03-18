var userAge = parseInt(prompt("Whast is your age?"));
  responseArr = [];

if (userAge >= 25) { 
  responseArr.push("You can rent a car");
}

if (userAge >= 21) { 
  responseArr.push("Please don't drink and drive");
}

if (userAge >= 16) { 
  responseArr.push("You're eligible for a driver's license");
}

if (userAge <= 15 && userAge > 0) { 
  responseArr.push("You can't drive yet, but you'll be able to in a few years");
}

if (userAge <= 0) {
  responseArr.push("You haven't been born yet");
}

if (userAge === NaN) { 
  responseArr.push("Sorry, but that's not a number");
}

alert(responseArr.join(" \n "));