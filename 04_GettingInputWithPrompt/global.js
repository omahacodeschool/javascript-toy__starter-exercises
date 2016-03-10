//name, age, hometown, favorite number
var name = prompt("What is your name?");
var age = prompt("How old are you, " + name + "?");
var hometown = prompt("What's your hometown?");
var favoritenumber = prompt("What is your favorite number?");

console.log("User is named " + name);
console.log("User CLAIMS to be " + age + " years old but who can say.");
console.log("User is from " + hometown);
console.log("User's favorite number is " + favoritenumber + "???");

alert(name + "! You were born in " + hometown + " " + age + " years ago, and your favorite number is " + favoritenumber + ". I feel like I know so much about you already!");
