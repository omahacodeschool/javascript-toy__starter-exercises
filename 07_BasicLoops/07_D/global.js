//7D: Fizz Buzz
//Implement [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz). This program counts numbers as normal, except that when the number is divisible by 3, you output "Fizz", when it's divisible by 5, you output "Buzz", and when it's divisible by both 3 and 5 (e.g. 15, 30, etc.), output "FizzBuzz". Thus, you should have something that looks like this:


var i = 1;
while (i <= 100) {
  if ((i % 3 == 0) && (i % 5 ==0)){
    var output = "fizzbuzz"
  }
  else if (i % 3 == 0){
  var output = "fizz";
  }
  else if (i % 5 == 0){
  var output = "buzz";
  }
  else {
    var output = i;
  }
  console.log(output);
    i++;
};
