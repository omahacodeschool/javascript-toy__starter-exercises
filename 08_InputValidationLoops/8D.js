//8D: Triangles, Pt 2

// variables set empty array to store messages regarding the type of triangle the user has submitted (if measurements are valid)
//invalid flag is set to true by default. Will flag as false when encountering valid triangle measurements. Will flag false at the end of the if statements if there are any invalid parameters.
//Loop wil begin again if measurements are invalid. Will prompt user for new side parameters.
var triangleIdentifier = [],
invalidFlag = true;


while (invalidFlag === true) {
  var sideOne = parseFloat(prompt("What is the length of the first side of the triangle?")),
  sideTwo = parseFloat(prompt("What is the length of the second side of the triangle?")),
  sideThree = parseFloat(prompt("What is the length of the third side of the triangle?"));

  if (sideOne === sideThree && sideOne === sideTwo) {
    triangleIdentifier.push("This is an equilateral triangle.");
    invalidFlag = false
  } else if ((sideOne * sideOne) + (sideTwo * sideTwo) === (sideThree * sideThree) || (sideOne * sideOne) + (sideThree * sideThree) > (sideTwo * sideTwo) || (sideTwo * sideTwo) + (sideThree * sideThree) > (sideOne *sideOne)) {
     triangleIdentifier.push("This is a right triangle"); 
     invalidFlag = false
  } 

  if (sideOne != sideTwo && sideOne != sideThree && sideTwo != sideThree) {
    triangleIdentifier.push("This is a scalene triangle.");
    invalidFlag = false
  } 

  if (sideOne === sideThree || sideOne === sideTwo || sideTwo === sideThree) {
    triangleIdentifier.push("This is an isosceles triangle.");  
    invalidFlag = false 
  } 

  if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
     alert("All parameters must be valid numbers.");
      invalidFlag = true
  } else if (sideOne === 0 || sideTwo === 0 || sideThree === 0) {
      alert("No side of a triangle can have a length of 0.");
      invalidFlag = true
  } else if (sideOne < 0 || sideTwo < 0 || sideThree < 0) {
      alert("The length of a traingle cannot be expressed with imaginary numbers.");
      invalidFlag = true
  } 

}

//if the triangle is valid, user will get an alert with details regarding the categories the traingle falls under
alert(triangleIdentifier.join("\n"));
  