inputArr = []

for (var i = 0; i < 2; i++) {
  inputArr.push(parseInt(prompt("Give me a number, please.")));
}

var counter = parseInt(prompt("And what would you like to count by?"));

if (inputArr[0] === inputArr[1]) {
  alert("I can't count! These numbers are equal!");
} else if (inputArr[0] < inputArr[1]) {
  var x = inputArr[0]
  var y = inputArr[1]
  console.log("Count up from " + x + " to " + y + " by " + counter)
} else {
  var a = inputArr[0]
  var b = inputArr[1]
  console.log("Count down from " + a + " to " + b + " by " + counter)
};

while (x <= y) {
  alert("Let's count up to " + y + " by " + counter + "! Count: " + x);
  console.log("Count: " + x);
  x = x + counter;
}

while (a >= b) {
  alert("Let's count down to " + b + " by " + counter + "! Count: " + a);
  console.log("Count: " + a);
  a = a - counter;
}