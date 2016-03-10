// Get the lengths
var startNum = prompt("Where do you to start counting?");
startNum = parseInt(startNum);

var endNum = prompt("When do you want to stop counting?");
endNum = parseInt(endNum);

var countNum = prompt("How would you like to count by?");
countNum = parseInt(countNum);

var currentNum = startNum





// Counting

if (startNum < endNum){
  while(startNum <= endNum){
    startNum += countNum
    currentNum = startNum
    if((startNum % 5 === 0) == true && (startNum % 3 === 0) == true){ 
      currentNum = "FizzBuzz";
    }
    else if((startNum % 5 === 0) == true){ 
      currentNum = "Buzz";
    }
    else if((startNum % 3 === 0) == true){
      currentNum = "Fizz";
    }   
    console.log("The count is " + currentNum);
  }
}




