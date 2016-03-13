inputArr = []

for (var i = 0; i < 2; i++) {
  inputArr.push(parseInt(prompt("Give me a number, please.")));
}

if (inputArr[0] === inputArr[1]) {
  alert("I can't count! Both of these numbers are equal!");
} else if (inputArr[0] < inputArr[1]) {
  var x = inputArr[0]
  var y = inputArr[1]
} else {
  var x = inputArr[1]
  var y = inputArr[0]  
};

while (x <= y) {
  alert("Let's count from " + y + "! Count: " + x);
  console.log("Count: " + x);
  x++;
}