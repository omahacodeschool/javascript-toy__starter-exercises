
  // Prompt the user for three numbers (make sure to parse them to integers
  var firstNum = prompt("What is your first number?");
  firstNum = parseInt(firstNum)
  var secondNum = prompt("What is your second number?");
  secondNum = parseInt(secondNum)
  var thirdNum = prompt("What is your third number?");
  thirdNum = parseInt(thirdNum)

  // Output the sum of the three numbers in a string like so: 7 + 4 + 12 = 23
  alert(firstNum " + " secondNum " + " thirdNum " = " (firstNum + secondNum + thirdNum));

  // Output the difference when the second and third numbers are subtracted from the first: 7 - 4 - 12 = -9
  alert(firstNum " - " secondNum " - " thirdNum " = " (firstNum - secondNum - thirdNum));

