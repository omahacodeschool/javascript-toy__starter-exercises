// Get the lengths
var startNum = prompt("Where do you to start counting?")
startNum = parseInt(startNum)

var endNum = prompt("When do you want to stop counting?")
endNum = parseInt(endNum)

var countNum = prompt("How would you like to count by?")
countNum = parseInt(countNum)


// Counting
if (startNum < endNum){
  while(startNum <= endNum){
    console.log("The count is " + startNum)
    startNum += countNum}
}
if (endNum < startNum){
  while(startNum >= endNum){
    console.log("The count is " + startNum)
    startNum -= countNum}
}




