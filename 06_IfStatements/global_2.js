//JS atomics 06

//sets our password
var password = "pickles"

//input
var userPassword = prompt("What's the password?")

//compares the password to the user's attempt
if (password === userPassword) {
  alert("Good job!")
}
else {
  alert("Nope, sorry.  The password is " + password  + "...D'oh! Wait, er, I probably shouldn't have said that.")
}