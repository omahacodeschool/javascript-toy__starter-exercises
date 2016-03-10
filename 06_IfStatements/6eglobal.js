var inputnumber = prompt("What is your age?")
var age = parseInt(inputnumber)

if (age < 0) {
    alert("You haven't been born!");
} else if ((age >= 0) && (age <= 15)) {
    alert("You can't drive yet, but maybe someday!");
} else if ((age >= 16) && (age <= 20)) {
    console.log("You're eligible for a driver's license");
} else if ((age >= 21) && (age <= 24)) {
    console.log("Please don't drink and drive");
} else if (age >= 25) {
    console.log("You can rent a car!");
}  else {
    alert("Sorry I don't think that's a number");
}