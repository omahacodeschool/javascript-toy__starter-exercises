// While loops
// counts from 0 to 10
x = 0
while (x <= 10){
  alert("The current number is " + x);
  x++;
}


// More counting
// Counts from users starting number to users ending number in intervals of users increment number
var starting_num = prompt("Pick as starting number", "I pick...");
var starting_num = parseInt(starting_num);

var ending_num = prompt("Pick an end number", "I pick...");
var ending_num = parseInt(ending_num);

var increment_num = prompt("Pick a number to increment by", "I pick...");
var increment_num = parseInt(increment_num);

i = starting_num;
if (starting_num <= ending_num){
  while (i <= ending_num){
    alert("The incremented number is now " + i);
    i += increment_num;
  }
} else {
  while (i >= ending_num){
    alert("The decremented number is now " + i);
    i -= increment_num;
  }
}

//A Fizzy Drink
//99 bottles of beer on the wall

var bottles = 4

while(bottles > 0){
  if (bottles == 1){
    alert(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer! Take one down pass it around " + (bottles-1) + " bottles of beer on the wall!")
  bottles -= 1

  }else{
    alert(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer! Take one down pass it around " + (bottles-1) + " bottles of beer on the wall!")
  bottles -= 1
  }  
}




  

