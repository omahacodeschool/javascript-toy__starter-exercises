var age = parseInt(prompt("Please enter your age"))

if ( age >= 16 && age <= 20 ) { 
    alert("You're eligible for a driver's license")
}
  else if ( age >= 0 && age <= 15 ) { 
    alert("You can't drive yet, but you'll be able to in a few years")
}
  else if ( age < 0 ) { 
    alert("You haven't been born yet")
}
  else if ( age >= 25 ) {
    alert("You can rent a car")
} 
  else if ( age >= 21 && age <= 24  ) { 
    alert("Please don't drink and drive")
}
  else if ( isNaN ( age ) === true ) { 
    alert("Sorry but that's not a number")
}

