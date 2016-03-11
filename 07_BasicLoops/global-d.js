//  7D: More Fizz

// Implement [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz). This program counts numbers as normal, except that when the number is divisible by 3, you output "Fizz", when it's divisible by 5, you output "Buzz", and when it's divisible by both 3 and 5 (e.g. 15, 30, etc.), output "FizzBuzz". Thus, you should have something that looks like this:

// ```
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// 12
// 13
// 14
// FizzBuzz
// 16
// ```

// Extend this by prompting the user for a start value and an end value. Use a `while` loop.

var start = prompt("Please provide a start number");
var end = prompt("Please provide an end number larger than the start number");

function fizzBuzz (start, end) {
  var i = start;
  while (i <= end) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
      i ++;
    }
    else if (i % 3 === 0){
      console.log("Fizz");
      i ++;
    }
    else if (i % 5 === 0){
      console.log("Buzz");
      i ++;
    } else {
      console.log(i)
      i ++
    }
  }
}

fizzBuzz(start, end);