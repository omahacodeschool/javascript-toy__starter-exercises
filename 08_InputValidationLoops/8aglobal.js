var password = "monkeybrains"
//it's a beautiful funny word and i want to keep using it.
var passwordattempt = prompt("What's the password, chump?")

while(passwordattempt !== password) {
  passwordattempt = prompt("NOPE! Try again, sucka")
}
alert("good job!")