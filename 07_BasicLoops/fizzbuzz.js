var start = prompt("What number do you want to start at?");
start = parseInt(start);

var end = prompt("What number do you want to end at?");
end = parseInt(end);

var i = start

do {
 if (i % 3===0 && i % 5===0) {
   console.log("FizzBuzz")
   i = i + 1
 } else if (i % 3===0) {
   console.log("Fizz")
   i = i + 1
 } else if (i % 5===0) {
   console.log("Buzz")
   i = i + 1
 } else {
   console.log(i)
   i = i + 1;
 } 
} while (i<=end);