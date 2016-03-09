var secretNumber = 147;

var userInput = parseInt(prompt("Please enter the secret number"))
if (userInput === secretNumber) {
    alert("You got it right!")
} else { 
    alert("Nope, the secret number is " + secretNumber)
}