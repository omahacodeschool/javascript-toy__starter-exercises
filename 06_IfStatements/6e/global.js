
// Make variable for what the user puts in
var user_age = prompt("How old are you in human years, acording to the Gregorian Calendar")
user_age = parseInt(user_age)
//user_guess = parseInt(user_guess)

// Alerts
if (user_age >= 25){
  alert("You can rent a car!")
} 
else if (user_age >= 21 && user_age < 25){
  alert("Please don't drink and drive")
} 
else if (user_age >= 16 && user_age < 21){
  alert("You can legally drive a motorized vehicle!")
} 
else if (user_age >= 0 && user_age <= 15){
  alert("You can't drive yet.'")
} 
else if (user_age < 0 ){
  alert("You haven't been born yet!")
} 
else if (isNaN(user_age) == true ){
  alert("Thats not a number.")
} 


console.log("user_age is " + user_age)