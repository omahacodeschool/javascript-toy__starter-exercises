var input1 = prompt("Can this be a triangle? What is the length of the first side?")
var side1 = parseInt(input1)
//
var input2 = prompt("What is the length of the second side?")
var side2 = parseInt(input2)
//
var input3 = prompt("What is the length of the third side?")
var side3 = parseInt(input3)

if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) {
    alert("It's a valid triange!");
}  else {
    alert("Sorry I don't think that's a triangle");
}

console.log(side1 + " + " + side2 + " > " + side3 + " is " + (side1 + side2 > side3))
console.log(side2 + " + " + side3 + " > " + side1 + " is " + (side2 + side3 > side1))
console.log(side1 + " + " + side3 + " > " + side2 + " is " + (side1 + side3 > side2))