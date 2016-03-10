//7A: While Loops
var setCount = 0,
setCountArray = [];

while (setCount < 10) {
  setCountArray.push(++setCount);
}

alert(setCountArray.join("\n"));
//--------------------------

//7B: More Counting
var setStart = parseInt(prompt("Set a starting number:")),
setEnd = parseInt(prompt("Set an ending number:")),
setUserCount = parseInt(prompt("Set a number to count by:")),
determineDirection = false;

// method to increment positively using count to get from start to end
function highCount (start, end, count){
  var countArray = [start];
  while (start<= end) {
    start = start + count;
    if (start <= end) {
        countArray.push(start);
    }
  }
  console.log(countArray, typeof countArray)
  return countArray;
}

// method to increment negatively using count to get from start to end
function lowCount(start, end, count){
  var countArray = [start];
  while (start >= end) {
    start = start - count
    if (start >= end) {
        countArray.push(start);
    }
  }
  return countArray;
}

// method to set boolean flag depending on whether setStart variable is less than or equal to the setEnd veriable OR greater than the setEnd variable
if (setStart <= setEnd) {
  determineDirection = true;
} else {
  determineDirection = false;
}

//method calls desired function and triggers an alert based on determinedirection variable boolean value.
if (determineDirection == true) {
  var highResult = highCount(setStart, setEnd, setUserCount);
  alert(highResult.join("\n"));
} else {
  var lowResult = lowCount(setStart, setEnd, setUserCount);
  alert(lowResult.join("\n"));

}
//-------------------------------------------------------

//7C: A Fizzy Drink
//7A: While Loops
var setBeer = 100,
setBeerArray = [];

while (setBeer >= 0) {
  --setBeer
  if (setBeer == 0) {
    console.log("No more bottles of beer on the wall!");
  } else if (setBeer > 0) {
    console.log(`${setBeer} Bottles of beer on the wall. \n ${setBeer} Bottles of beer! \n Take one down, pass it around...\n`)
  }
}

