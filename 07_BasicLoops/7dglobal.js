var i = 0
number = 25
var fizz = "fizz"
var buzz = "buzz"

while (i <= number) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
      console.log(fizz + buzz);
    } else if ((i % 3) == 0) {
      console.log(fizz)
    } else if ((i % 5) == 0) {
      console.log(buzz)
    } else {
      console.log(i)
    }
    i++
}