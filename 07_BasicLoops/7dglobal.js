var startnumber = prompt("Where should we start, FizzBuzzer?")
var inumber = parseInt(startnumber)
var endnumber = prompt("And where shall we end?")
number = parseInt(endnumber)
var fizz = "fizz"
var buzz = "buzz"

for (i = inumber; i <= number; i++) {
  if (((i % 3) == 0) && ((i % 5) == 0)) {
    console.log(fizz + buzz);
  } else if ((i % 3) == 0) {
    console.log(fizz)
  } else if ((i % 5) == 0) {
    console.log(buzz)
  } else {
    console.log(i)
  }
}


//while (i <= number) {
//    if (((i % 3) == 0) && ((i % 5) == 0)) {
//      console.log(fizz + buzz);
//    } else if ((i % 3) == 0) {
//      console.log(fizz)
//    } else if ((i % 5) == 0) {
//      console.log(buzz)
//    } else {
//      console.log(i)
//    }
//    i++
//}