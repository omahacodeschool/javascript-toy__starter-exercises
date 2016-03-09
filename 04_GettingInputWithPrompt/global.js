// Making variables from the users input.
var name = prompt("Enter your name: ", "What is your name?");
var age = prompt("Enter your age: ", "How old are you, " + name + "?");
var hometown = prompt("Enter your hometown: ", "Where are you from, " + name + "?");
var favorite_number = prompt("Favorite Number: ", "What is your favorite number " + name + "?");

// Tell the users story through obnoxius popups.
alert("Your name is " + name);
alert("You are " + age + " years old!");
alert("You are from " + hometown + ".");
alert("Your favorite number is " + favorite_number + ".");
alert("Thanks " + name + ", we are now friends :)");

// Log all the variables.
console.log("Your name is " + name);
console.log("You are " + age + " years old!");
console.log("You are from " + hometown + ".");
console.log("Thanks " + name + ", we are now friends :)");