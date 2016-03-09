// Write Javascript that accomplishes the following tasks, in order:

// 1. Ask the user (using `prompt()`) for their name, then assign that value to a well-named variable.
// 2. Ask the user (using `prompt()`) for their age, then assign that value to a well-named variable.
// 3. Ask the user (using `prompt()`) for their hometown, then assign that value to a well-named variable.
// 4. Ask the user (using `prompt()`) for their favorite number, then assign that value to a well-named variable.
// 5. Output each of those values using both `console.log()` and `alert()`. You can output the value itself with no context around it, but it's a better decision to use each of those values in a sentence. For example: "Your name is Aloysius."


var userName = prompt("What is your name?", "D.A.R.R.Y.L.")

var userAge = prompt("What is your age?", "13")

var userHomeTown = prompt("What is your hometown?", "Salem, Oregon")

var userFavoriteNumber = prompt("What is your favorite number?", "101100101")

alert(userName + " is from " + userHomeTown + ", is " + userAge + " years old, and LOVES the number " + userFavoriteNumber)

console.log(userName + " is from " + userHomeTown + ", is " + userAge + " years old, and LOVES the number " + userFavoriteNumber)
console.log(typeof userAge)
console.log(typeof userName)
console.log(typeof userFavoriteNumber)
console.log(typeof userHomeTown)