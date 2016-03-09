var age = prompt("How old are you?");

if (age < 0){
  alert("You haven't been born yet.");
} if (isNaN(age) == true) {
  alert("That's not a number");
} if (age <= 15 && age >= 0) {
  alert("You can't drive yet, but you'll be able to in a few years.");
} if (age >= 16) {
  alert("You're eligible for a drivers' license.");
} if (age >= 21) {
  alert("Please don't drink and drive.");
} if (age >= 25) {
  alert("You can rent a car.");
}