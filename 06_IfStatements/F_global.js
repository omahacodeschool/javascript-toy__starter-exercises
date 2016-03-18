inputArr = [];

for (var i = 0; i < 3; i++) {
  inputArr.push(parseInt(prompt("Give me a number, please.")));
  console.log(inputArr)
}

console.log(Math.pow(inputArr[0], 2) + Math.pow(inputArr[1], 2) === Math.pow(inputArr[2], 2) || Math.pow(inputArr[2], 2) + Math.pow(inputArr[0], 2) === Math.pow(inputArr[1], 2) || Math.pow(inputArr[1], 2) + Math.pow(inputArr[2], 2) === Math.pow(inputArr[0], 2))
console.log(inputArr[0] === inputArr[1] && inputArr[0] === inputArr[2])
console.log(inputArr[0] + inputArr[1] > inputArr[2])
console.log(inputArr[2] + inputArr[0] > inputArr[1])
console.log(inputArr[1] + inputArr[2] > inputArr[0])

equilateral = (inputArr[0] === inputArr[1] && inputArr[0] === inputArr[2])

scalene     = (inputArr[0] != inputArr[1] && inputArr[0] != inputArr[2] && 
  inputArr[1] != inputArr[2])

isosceles   = (inputArr[0] === inputArr[1] || inputArr[0] === inputArr[2] || inputArr[1] === inputArr[2])

valid       = (inputArr[0] + inputArr[1] > inputArr[2] && inputArr[2] + inputArr[0] > inputArr[1] && inputArr[1] + inputArr[2] > inputArr[0])

right       = (Math.pow(inputArr[0], 2) + Math.pow(inputArr[1], 2) === Math.pow(inputArr[2], 2) || Math.pow(inputArr[2], 2) + Math.pow(inputArr[0], 2) === Math.pow(inputArr[1], 2) || Math.pow(inputArr[1], 2) + Math.pow(inputArr[2], 2) === Math.pow(inputArr[0], 2))

if (right) {
  alert("This is a right triangle!")
} else if (equilateral) {
  alert("This is an equilateral triangle!")

} else if (scalene) {
  alert("This is a scalene triangle!")

} else if (isosceles) {
  alert("This is an isosceles triangle!")

} else if (valid) {
  alert("This IS a valid triangle.")

} else {
  alert("This is NOT a valid triangle.")
} 

