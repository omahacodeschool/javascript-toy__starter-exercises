// Implement the 99 Bottles of Beer on the Wall song using a loop. Make sure to account for having 1 bottle (instead of "1 bottles"). Use a while loop.

var i = 99;

while (i > 2) {
  console.log(i + " Bottles of beer on the wall...")
  i--;
  console.log("Take one down... " + i + " Bottles of beer on the wall.")
};
while (i > 1) {
  console.log(i + " Bottles of beer on the wall...")
  i--;
  console.log("Take one down... " + i + " Bottle of beer on the wall.")
};
while (i > 0 ) {
  console.log(i + " Bottle of beer on the wall...")
  i--;
  console.log("Take it down... " + i + " Bottles of beer on the wall!")
};
