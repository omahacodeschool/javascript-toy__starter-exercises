// For all triangles, the sum of the lengths of any two sides must be greater than the length of the third side. For example: a triangle of 3, 4, 5 (in whatever units you want) is valid (since `3 + 4 > 5`, `3 + 5 > 4`, and `4 + 5 > 3`), whereas a triangle of 3, 4, 7 is not (since `3 + 4` is not greater than `7`).

// ![](http://cl.ly/brne/triangle-inequality-demonstration2.png)

// ![](http://cl.ly/brHB/tumblr_inline_mlryndqmmW1qio24w.png)

// Write a program which prompts your user for the lengths of the 3 legs of a triangle (this input can be an integer or a floating point number, but it can't be a string), and which then reports whether this is a valid triangle. It's probably worthwhile to output the results of your behind-the-scenes calculations to the console, but the ultimate output ("This is a valid triangle" or "This is not a valid triangle" should be handled with an alert).

//prompts for user's triangle legs
var firstLeg = prompt("Please type a length for the first leg of your triangle");
firstLeg = parseInt(firstLeg);

var secondLeg = prompt("Please type a length for the second leg of your triangle");
secondLeg = parseInt(secondLeg);

var thirdLeg = prompt("Please type a length for the third leg of your triangle");
thirdLeg = parseInt(thirdLeg);

var validTriangleMessage = "This is a valid triangle";

var invalidTriangleMessage = "This is not a valid triangle";

function isTriangle(firstLeg, secondLeg, thirdLeg){
  if ((firstLeg + secondLeg > thirdLeg) && (secondLeg + thirdLeg > firstLeg)
    && (firstLeg + thirdLeg > secondLeg)) {
    return true;
  } else {
    return false;
  }
}

if (isTriangle(firstLeg, secondLeg, thirdLeg)){
  alert(validTriangleMessage);
} else {
  alert(invalidTriangleMessage);
}