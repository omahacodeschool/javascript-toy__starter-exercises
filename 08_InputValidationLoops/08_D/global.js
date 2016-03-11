//8D:Re-do Atomic JS-06F. Prompt the user for all 3 legs of a triangle, then prompt again (for all three legs) if the triangle is not valid.

while ((message == "INVALID") || (message == undefined)){

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
    var message = "VALID";

  } 

  else {
    alert("That's NOT a valid Triangle!");
    message = "INVALID";
    }    
}



