var i = prompt("What's the first number I should FizzBuzz?");
var end_at = prompt("What's the last number I should FizzBuzz?");

i = parseInt(i);
end_at = parseInt(end_at);

for (i = i; i <= end_at; i = i + 1) {
  if (i % 3===0 && i % 5===0) {
    console.log("FizzBuzz")
  } else if (i % 3===0) {
    console.log("Fizz")
  } else if (i % 5===0) {
    console.log("Buzz")
  } else {
    console.log(i)
  } 
}