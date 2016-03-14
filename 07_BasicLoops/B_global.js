inputArr = []

for (var i = 0; i < 2; i++) {
  inputArr.push(parseInt(prompt("Give me a number, please.")));
}

var counter = parseInt(prompt("And what would you like to count by?"));
var start   = inputArr[0]
var finish  = inputArr[1]

if (start === finish) {
  alert("Does not compute. These numbers are equal.");

} else if (start < finish) {
  var countTo = (start <= finish)

  console.log("Count up from " + start + " to " + finish + " by " + counter)

} else {
  var countTo = (start >= finish)
  function countBy(start, counter) {
    start - counter;
  }
  console.log("Count down from " + start + " to " + finish + " by " + counter)
};

while (countTo) {
  alert("Let's count from " + start + " to " + finish + " by " + counter + "! Count: " + start);
  // console.log("Count: " + x);
  start = (countBy(start, counter));
}