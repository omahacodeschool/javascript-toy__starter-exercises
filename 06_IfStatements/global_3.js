var secretNumber = 13;

var userNumber = prompt("What's the secret number?");
userNumber = parseInt(userNumber);

if (secretNumber === userNumber) {
  alert("Good job!")
}
else {
  alert("Nope, that's not it.")
};
