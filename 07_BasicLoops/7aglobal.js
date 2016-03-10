var startnumber = prompt("Counting! Where should I start?")
var inumber = parseInt(startnumber)
var endnumber = prompt("Where should I end?")
var number = parseInt(endnumber)
var bynumber = prompt("By what increments should i count?")
var countby = parseInt(bynumber)
if (i <= number) {
  for (i = inumber; i <= number; i += countby) {
    console.log(i)
  } 
} else {
  for (i = inumber; i >= number; i -= countby) {
    console.log(i)
  }
}

//if (i <= number) {
//  while (i <= number) {
//      console.log(i);
//      (i += countby);
//  }
//}  else {
//  while (i >= number) {
//      console.log(i);
//      (i -= countby);
//  }
//}