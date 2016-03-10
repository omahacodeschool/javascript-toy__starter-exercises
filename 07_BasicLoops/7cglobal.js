var i = 10
var b = "bottles"
while (i > 0) {
  if (i == 1){
    b = "bottle"
  } else { 
    b = "bottles"
  }
  alert(i + b + " of beer on the wall!");
  console.log(i + b + "of beer!");
  console.log("take one down! pass it around!");
  console.log((i - 1) + b + "of beer on the waaaaaaaall")
  i--
}
