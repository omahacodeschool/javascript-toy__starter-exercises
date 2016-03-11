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
start = parseInt(start);
var end = prompt("Please provide an end number larger than the start number");
end = parseInt(end);

function fizzBuzz (start, end) {
  for (i = start; i <= end; i ++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
      console.log("Fizz");
    }
    else if (i % 5 === 0){
      console.log("Buzz");
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(start, end);