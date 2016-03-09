// The secret number
var secret_word = 11


// Make variable for what the user puts in
var user_guess = prompt("Guess a number between 1 and 20")
//user_guess = parseInt(user_guess)

// Alerts
if (secret_word === user_guess){
  alert("Lucky guess.")
} else {
  alert("WRONG!!! Hahaha what a pathetic loser.")
}

console.log("Number is " + secret_word)
console.log("user_guess is " + user_guess)
