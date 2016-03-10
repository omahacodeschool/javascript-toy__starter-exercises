//------------------------------------------------------
//7A: While Loops
var setCount = 0,
setCountArray = [];

while (setCount < 10) {
  setCountArray.push(++setCount);
}

alert(setCountArray.join("\n"));
//---------------------------------------------------------

//------------------------------------------------------
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

//------------------------------------------------------
//7C: A Fizzy Drink
var setBeer = 100;

while (setBeer >= 0) {
  --setBeer
  if (setBeer == 0) {
    console.log("No more bottles of beer on the wall!");
  } else if (setBeer > 0) {
    console.log(`${setBeer} Bottles of beer on the wall. \n ${setBeer} Bottles of beer! \n Take one down, pass it around...\n`)
  }
}
//--------------------------------------------------------------

//------------------------------------------------------
//7D: More Fizz
var setUserBeer = parseInt(prompt("Set a starting number:")),
setBeerEnd = parseInt(prompt("Set an end goal:")),
determineBeerDirection = false;

function highBeer(setUserBeer, setBeerEnd, determineBeerDirection) {
  while (setUserBeer > setBeerEnd) {
    --setUsetUserBeer
    if (setUserBeer % 3 === 0 && setUserBeer % 5 === 0) {
      console.log("FizzBuzz", setUserBeer, typeof setUserBeer);
    } else if (setUserBeer % 3 === 0) {
        console.log("Fizz", setUserBeer, typeof setUserBeer);
    } else if (setUserBeer % 5 === 0) {
        console.log("Buzz", setUserBeer, typeof setUserBeer);
    } else {
       console.log(setUserBeer, typeof setUserBeer);
    }
  }
}

function lowBeer(setUserBeer, setBeerEnd, determineBeerDirection) {
  while (setUserBeer < setBeerEnd) {
    ++setUserBeer
    if (setUserBeer % 3 === 0 && setUserBeer % 5 === 0) {
      console.log("FizzBuzz", setUserBeer, typeof setUserBeer);
    } else if (setUserBeer % 3 === 0) {
        console.log("Fizz", setUserBeer, typeof setUserBeer);
    } else if (setUserBeer % 5 === 0) {
        console.log("Buzz", setUserBeer, typeof setUserBeer);
    } else {
       console.log(setUserBeer, typeof setUserBeer);
    }
  }
}

if (setUserBeer >= setBeerEnd) {
  determineBeerDirection = false;
} else {
  determineBeerDirection = true;
}

if (determineBeerDirection === false) {
  var BeerDirection = highBeer(setUserBeer, setBeerEnd, determineBeerDirection);
  console.log(BeerDirection);
} else {
  var BeerDirection = lowBeer(setUserBeer, setBeerEnd, determineBeerDirection);
  console.log(BeerDirection);
}
//----------------------------------------------------

//-----------------------------------------------------
//7A-2: For Loops
var setForCountArray = [];


for (i = 1; i <= 10; ++i) {
    setForCountArray.push(i);
}

alert(setForCountArray.join("\n"));
//------------------------------------------------------


//7B: More Counting w/ FOR
var setForStart = parseInt(prompt("Set a starting number:")),
setForEnd = parseInt(prompt("Set an ending number:")),
setForUserCount = parseInt(prompt("Set a number to count by:")),
determineFoDirection = false;

// method to increment positively using count to get from start to end
function highCount (start, end, count){
  var countArray = [];
  for (start; start<= end; start += count) {
    if (start <= end) {
        countArray.push(start);
    }
  }
  console.log(countArray, typeof countArray)
  return countArray;
}

// method to increment negatively using count to get from start to end
function lowCount(start, end, count){
  var countArray = [];
   for (start; start<= end; start -= count) {
    if (start >= end) {
        countArray.push(start);
    }
  }
  return countArray;
}

// method to set boolean flag depending on whether setStart variable is less than or equal to the setEnd veriable OR greater than the setEnd variable
if (setForStart <= setForEnd) {
  determineForDirection = true;
} else {
  determineForDirection = false;
}

//method calls desired function and triggers an alert based on determinedirection variable boolean value.
if (determineForDirection == true) {
  var highResult = highCount(setForStart, setForEnd, setForUserCount);
  alert(highResult.join("\n"));
} else {
  var lowResult = lowCount(setForStart, setForEnd, setForUserCount);
  alert(lowResult.join("\n"));

}
//-------------------------------------------------------

//------------------------------------------------------
//7C: A Fizzy Drink w/ FOR
var setBeer = 99;

for (setBeer; setBeer >= 0; --setBeer) {
  if (setBeer == 0) {
    console.log("No more bottles of beer on the wall!");
  } else if (setBeer > 0) {
    console.log(`${setBeer} Bottles of beer on the wall. \n ${setBeer} Bottles of beer! \n Take one down, pass it around...\n`);
  }
}
//--------------------------------------------------------------

//------------------------------------------------------
//7D: More Fizz - w/ FOR
var setUserBeer = parseInt(prompt("Set a starting number:")),
setBeerEnd = parseInt(prompt("Set an end goal:")),
determineBeerDirection = false;

function highBeer(setUserBeer, setBeerEnd, determineBeerDirection) {
  for (setUserBeer; setUserBeer > setBeerEnd; --setUserBeer) {
    if (setUserBeer % 3 === 0 && setUserBeer % 5 === 0) {
      console.log("FizzBuzz", setUserBeer, typeof setUserBeer);
    } else if (setUserBeer % 3 === 0) {
        console.log("Fizz", setUserBeer, typeof setUserBeer);
    } else if (setUserBeer % 5 === 0) {
        console.log("Buzz", setUserBeer, typeof setUserBeer);
    } else {
       console.log(setUserBeer, typeof setUserBeer);
    }
  }
}

function lowBeer(setUserBeer, setBeerEnd, determineBeerDirection) {
  for (setUserBeer; setUserBeer < setBeerEnd; ++setUserBeer) {
    if (setUserBeer % 3 === 0 && setUserBeer % 5 === 0) {
      console.log("FizzBuzz", setUserBeer, typeof setUserBeer);
    } else if (setUserBeer % 3 === 0) {
        console.log("Fizz", setUserBeer, typeof setUserBeer);
    } else if (setUserBeer % 5 === 0) {
        console.log("Buzz", setUserBeer, typeof setUserBeer);
    } else {
       console.log(setUserBeer, typeof setUserBeer);
    }
  }
}

if (setUserBeer >= setBeerEnd) {
  determineBeerDirection = false;
} else {
  determineBeerDirection = true;
}

if (determineBeerDirection === false) {
  var BeerDirection = highBeer(setUserBeer, setBeerEnd, determineBeerDirection);
  console.log(BeerDirection);
} else {
  var BeerDirection = lowBeer(setUserBeer, setBeerEnd, determineBeerDirection);
  console.log(BeerDirection);
}


