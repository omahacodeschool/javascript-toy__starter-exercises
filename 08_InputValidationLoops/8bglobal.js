var secretnumber = 23
var maxnumber = 100
var minnumber = 1
var inputnumber = prompt("I'm thinking of a number between " + minnumber + " and " + maxnumber + ". Guess what it is!")
var secretnumberattempt = parseInt(inputnumber)
var kickedOut = false;

while((secretnumberattempt !== secretnumber) && !kickedOut) {
  if ((secretnumberattempt < minnumber) || (secretnumberattempt > maxnumber)) {
    alert("You're cheating! You don't get to guess anymore!")
    kickedOut = true;
  }
  else {
    secretnumberattempt = parseInt(prompt("NOPE! Try again, sucka"))
  } 
}

if (secretnumberattempt === secretnumber) {
  alert("good job!")
}
