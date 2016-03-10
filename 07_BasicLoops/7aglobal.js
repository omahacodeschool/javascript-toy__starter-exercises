var startnumber = prompt("Counting! Where should I start?")
var i = parseInt(startnumber)
var endnumber = prompt("Where should I end?")
var number = parseInt(endnumber)

if (i <= number) {
  while (i <= number) {
      console.log(i);
      i++;
  }
}  else {
  while (i >= number) {
      console.log(i);
      i--;
  }
}