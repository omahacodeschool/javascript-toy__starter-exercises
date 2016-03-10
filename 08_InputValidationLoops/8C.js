
//8C: Home on the Range

var userNum = parseInt(prompt("Give me a number between 1-8")),
isInvalid = false,
userNumSum = 0,
userNumCount = 0;

while (isInvalid === false) {
  if (userNum >= 1 && userNum <= 8) {
    ++userNumCount;
    userNumSum += userNum
    userNum = parseInt(prompt("Give me a number between 1-8"));
  } else {
    isInvalid = true;
  }
}

alert(`You gave me a valid number ${userNumCount} times! \n The total score was: ${userNumSum}, with an average of ${userNumSum / userNumCount}`);
