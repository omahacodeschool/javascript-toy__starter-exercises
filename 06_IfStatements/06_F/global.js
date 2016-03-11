//6F: Triangles

// For all triangles, the sum of the lengths of any two sides must be greater than the length of the third side. For example: a triangle of 3, 4, 5 (in whatever units you want) is valid (since `3 + 4 > 5`, `3 + 5 > 4`, and `4 + 5 > 3`), whereas a triangle of 3, 4, 7 is not (since `3 + 4` is not greater than `7`).

//Write a program which prompts your user for the lengths of the 3 legs of a triangle (this input can be an integer or a floating point number, but it can't be a string), and which then reports whether this is a valid triangle. It's probably worthwhile to output the results of your behind-the-scenes calculations to the console, but the ultimate output ("This is a valid triangle" or "This is not a valid triangle" should be handled with an alert).

var userNumberOne = prompt("Please enter a tringle leg length");

var userNumberTwo = prompt("Please enter another triangle leg length");

var userNumberThree = prompt("Please enter a final triangle leg length");

var numberOne = parseFloat(userNumberOne);

var numberTwo = parseFloat(userNumberTwo);

var numberThree = parseFloat(userNumberThree);

  var comboOne = (numberOne + numberTwo)
  var comboTwo = (numberOne + numberThree)
  var comboThree = (numberTwo + numberThree)

  if ((comboOne > numberThree) && (comboTwo > numberTwo) && (comboThree > numberOne)) {

    alert("That's a valid Triangle!");

  } else {
    alert("That's NOT a valid Triangle!");
    }    




