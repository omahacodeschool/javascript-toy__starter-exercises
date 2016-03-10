var startnumber = prompt("Counting! Where should I start?")
var i = parseInt(startnumber)
var endnumber = prompt("Where should I end?")
var number = parseInt(endnumber)
var bynumber = prompt("By what increments should i count?")
var countby = parseInt(bynumber)

if (i <= number) {
  while (i <= number) {
      console.log(i);
      (i += countby);
  }
}  else {
  while (i >= number) {
      console.log(i);
      (i -= countby);
  }
}