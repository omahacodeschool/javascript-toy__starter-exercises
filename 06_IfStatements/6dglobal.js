var inputnumber = prompt("What is your age?")
var age = parseInt(inputnumber)
if ( IsNaN(age) === true ){
    alert("Sorry I don't think that's a number");
}
if (age < 0) {
    alert("You haven't been born!");
}
if ((age >= 0) && (age <= 15)) {
    alert("You can't drive yet, but maybe someday!");
}
if (age >= 16) {
    console.log("You're eligible for a driver's license");
}
if (age >= 25) {
    console.log("You can rent a car!");
}
if (age >= 21) {
    console.log("Please don't drink and drive");
}
console.log("inputnumber = " + inputnumber)
console.log("age = " + age)

//*Age 25 and older**: "You can rent a car"
//*Age 21 and older**: "Please don't drink and drive"
//*Age 16 and older**: "You're eligible for a driver's license"
//*Age 0 - 15**: "You can't drive yet, but you'll be able to in a few years"
//*Any negative number**: "You haven't been born yet"
//*NaN**: "Sorry, but that's not a number"