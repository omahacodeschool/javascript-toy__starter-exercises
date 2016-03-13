inputArr = []

for (var i = 0; i < 2; i++) {
  inputArr.push(parseInt(prompt("Give me a number, please.")));
}

if (inputArr[0] === inputArr[1]) {
  alert("I can't count! These numbers are equal!");
} else if (inputArr[0] < inputArr[1]) {
  var x = inputArr[0]
  var y = inputArr[1]
  console.log("Count up from " + x + " to " + y)
} else {
  var a = inputArr[0]
  var b = inputArr[1]
  console.log("Count down from " + a + " to " + b)
};

while (x <= y) {
  alert("Let's count to " + y + "! Count: " + x);
  console.log("Count: " + x);
  x++;
}

while (a >= b) {
  alert("Let's count to " + b + "! Count: " + a);
  console.log("Count: " + a);
  a--;
}