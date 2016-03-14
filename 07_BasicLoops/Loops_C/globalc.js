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