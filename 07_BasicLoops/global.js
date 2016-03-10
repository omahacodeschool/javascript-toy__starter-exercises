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

function highCount (start, end, count){
  console.log(start, typeof start)
  console.log(end, typeof end)
  console.log(count, typeof count)
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

function lowCount(start, end, count){
    console.log(start, typeof start)
  console.log(end, typeof end)
  console.log(count, typeof count)
  var countArray = [start];
  while (start >= end) {
    start = start - count
    if (start >= end) {
        countArray.push(start);
    }
  }
  console.log(countArray, typeof countArray)
  return countArray;
}

if (setStart <= setEnd) {
  determineDirection = true;
} else {
  determineDirection = false;
}

if (determineDirection == true) {
  var highResult = highCount(setStart, setEnd, setUserCount);
  alert(highResult.join("\n"));
} else {
  var lowResult = lowCount(setStart, setEnd, setUserCount);
  alert(lowResult.join("\n"));

}