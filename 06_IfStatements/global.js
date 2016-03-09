var secretnumber = 23
var inputnumber = prompt("Guess what number I'm thinking of!")
secretnumberattempt = parseInt(inputnumber)
if (secretnumberattempt === secretnumber) {
    alert("good job!")
} else { 
    alert("sorry the secret number is " + secretnumber)
}

 