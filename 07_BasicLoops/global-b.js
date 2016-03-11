// 7B: More Counting

// Prompt the user for a start value and an end value. Count from the start value to the end value using a `while` loop. Make sure to account for the start-value being equal to or greater than the end-value (should it not count? Should it count down instead of up in such cases?).

// Extend this by asking the user what increment they want to count by.

var startValue = prompt("Provide a start value");
var endValue = prompt("Provide an end value");

function countThis(startValue, endValue){
  if (startValue < endValue) {
    var i = startValue;
    while (i <= endValue) {
      console.log(i);
      i++;
    }
  } else if (startValue > endValue) {
    var i = startValue;
    while (i >= endValue) {
      console.log(i);
      i--;
    }
  } else {
    console.log("The start and end values cannot be the same")
  }
}

countThis(startValue, endValue);