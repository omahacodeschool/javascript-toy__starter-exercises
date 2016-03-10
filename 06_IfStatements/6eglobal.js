var inputnumber = prompt("What is your age?")
var age = parseInt(inputnumber)
var drivingage = 16
var drinkingage = 21
var carrentalage = 25

if (age < 0) {
    alert("You haven't been born!");
} else if ((age >= 0) && (age <= (drivingage - 1))) {
    alert("You can't drive yet, but maybe someday!");
} else if ((age >= drivingage) && (age <= (drinkingage - 1))) {
    console.log("You're eligible for a driver's license");
} else if ((age >= drinkingage) && (age <= (carrentalage - 1))) {
    console.log("Please don't drink and drive");
} else if (age >= carrentalage) {
    console.log("You can rent a car!");
}  else {
    alert("Sorry I don't think that's a number");
}