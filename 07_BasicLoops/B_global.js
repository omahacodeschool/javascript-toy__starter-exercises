inputArr = []

for (var i = 0; i < 2; i++) {
  inputArr.push(parseInt(prompt("Give me a number, please.")));
}

while (inputArr[0] <= inputArr[1]) {
  alert("Let's count to ten! Count: " + inputArr[0]);
  console.log("Count: " + inputArr[0]);
  inputArr[0]++;
}