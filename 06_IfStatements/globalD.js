var age = parseInt(prompt("Please enter your age"))

if ( age >= 25 ) {
    alert("You can rent a car")
} 
if ( age >= 21 ) { 
    alert("Please don't drink and drive")
}
if ( age >= 16 ) { 
    alert("You're eligible for a driver's license")
}
if ( age >= 0 && age <= 15 ) { 
    alert("You can't drive yet, but you'll be able to in a few years")
}
if ( age < 0 ) { 
    alert("You haven't been born yet")
}
if ( isNaN ( age ) === true ) { 
    alert("Sorry but that's not a number")
}

