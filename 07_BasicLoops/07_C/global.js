//7C: Fizzy Drink

//Implement the 99 Bottles of Beer on the Wall song using a loop. Make sure to account for having 1 bottle (instead of "1 bottles"). Use a `while` loop.

var i = 1;
while (i <= 99) {
  if (i == 1){
  var lyrics = " bottle of beer on the wall.";
  }
  else {
    var lyrics = " bottles of beer on the wall."
  }
  console.log(i + lyrics);
    i++;
};
