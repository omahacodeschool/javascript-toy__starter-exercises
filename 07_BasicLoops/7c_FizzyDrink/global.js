// Get the lengths
var startNum = 5

var drank = " bottles"





// Counting
while(startNum > 0){
  console.log(startNum + drank + " of beer on the wall, take one down, pass it around...")

  startNum--

  if(startNum == 1){
  drank = " bottle"
}
  if(startNum == 0){
  drank = " bottles"
}
  console.log(startNum + drank + " of beer on the wall.")
}





