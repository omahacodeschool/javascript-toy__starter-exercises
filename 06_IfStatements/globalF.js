var sideOne = parseInt(prompt("Let's try to make a triangle. Give me a length for side number 1."))

var sideTwo = parseInt(prompt("Give me a length for side number 2."))

var sideThree = parseInt(prompt("Give me a length for side number 3."))

if ((sideOne + sideTwo > sideThree) && (sideTwo + sideThree > sideOne) && (sideOne + sideThree > sideTwo)) {
    alert("We made a triangle!")
}  else {
    alert("Those lengths don't form a real triangle.")
}