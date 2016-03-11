var triangleLength1 = prompt("Please enter the length of side 1 of your triangle.")

var triangleLength2 = prompt("Please enter the length of side 2 of your triangle.")

var triangleLength3 = prompt("Please enter the length of side 3 of your triangle.")

function isTriangle() {

  comparisonSet = triangleLength1 + triangleLength2 

  if (comparisonSet > triangleLength3){
    alert("Your triangle is theoretically possible.");
  } 

  else {alert("Your triangle is an impossibility. You fail.");

  }
}


isTriangle()
