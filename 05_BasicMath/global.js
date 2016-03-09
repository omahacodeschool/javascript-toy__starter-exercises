

// user input variable parsed out into integers
var firstNum = parseInt(prompt("First Number: Please submit a positive, whole number:")),
    secondNum = parseInt(prompt("Second Number: Please submit a positive, whole number:")),
    thirdNum = parseInt(prompt("Third Number: Please submit a positive, whole number:"));

//equation sums based on user input variables
var additionSum = firstNum + secondNum + thirdNum,
  subtractionSum = firstNum - secondNum - thirdNum,
  multiplicationSum = firstNum * secondNum * thirdNum,
  divisionSum = firstNum / secondNum,
  tobeIncremented = firstNum,
  tobeDeincremented = secondNum;

// equation sums variables for incremented/deincremented values
var incrementSum = ++tobeIncremented,
    deincrementSum = --tobeDeincremented;

// alert for user showing calculations based on his/her initial inputs
alert(`Here are a few calculations: \n
  ${firstNum} + ${secondNum} + ${thirdNum} = ${additionSum} \n
  ${firstNum} - ${secondNum} - ${thirdNum} = ${subtractionSum} \n
  ${firstNum} * ${secondNum} * ${thirdNum} = ${multiplicationSum}\n
  ${firstNum} / ${secondNum} = ${divisionSum}\n
  ${firstNum}++ = ${incrementSum} \n
  ${secondNum}-- = ${deincrementSum}`)

// console output for each variable value
console.log("firstNum:", firstNum, typeof firstNum);
console.log("secondNum:", secondNum, typeof secondNum);
console.log("thirdNum:", thirdNum, typeof thirdNum);
console.log("additionSum", additionSum, typeof additionSum);
console.log("subtractionSum:", subtractionSum, typeof subtractionSum);
console.log("multiplicationSum:", multiplicationSum, typeof multiplicationSum);
console.log("divisionSum:", divisionSum, typeof divisionSum);
console.log("incrementSum:", incrementSum, typeof incrementSum);
console.log("deincrementSum:", deincrementSum, typeof deincrementSum);