// 7C: A Fizzy Drink

// Implement the *99 Bottles of Beer on the Wall* song using a loop. Make sure to account for having 1 bottle (instead of "1 bottles"). Use a `while` loop.

var beers = 99;
while (beers >= 1){
  if (beers > 1) {
  console.log(beers + " bottles of beer on the wall; " + beers + " bottles of beer! Take one down and pass it around; " + beers + " bottles of beer on the wall!" );
    beers-- ;
  }
  if (beers === 1){
  console.log(beers + " bottle of beer on the wall; " + beers + " bottle of beer! Take one down and pass it around; " + beers + " bottle of beer on the wall!" );
    beers-- ;
  }
}