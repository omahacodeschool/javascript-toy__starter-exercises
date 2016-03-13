inputArr = [];

for (var i = 0; i < 3; i++) {
  inputArr.push(parseInt(prompt("Give me a number, please.")));
}

console.log(inputArr[0] + inputArr[1] > inputArr[2])
console.log(inputArr[2] + inputArr[0] > inputArr[1])
console.log(inputArr[1] + inputArr[2] > inputArr[0])

if (inputArr[0] + inputArr[1] > inputArr[2] && inputArr[2] + inputArr[0] > inputArr[1] && inputArr[1] + inputArr[2] > inputArr[0]) {
  alert("This IS a valid triangle.")
} else {
  alert("This is NOT a valid triangle.")
} 

