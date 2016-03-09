var i = prompt("What's the first number I should FizzBuzz?");
var end_at = prompt("What's the last number I should FizzBuzz?");

i = parseInt(i);
end_at = parseInt(end_at);

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
} while (i<=end_at);
