//8B Tell the user that you're thinking of a number between 1 and 100 (go ahead and hard-code this number). Prompt the user to guess the number (and keep asking them if they get it wrong), then congratulate them when they guess correctly. This is a re-do of Atomic JS-06C.





var number = 12;

var userNumber = parseInt(prompt("Please enter a number")); 


while (userNumber !== number){
    alert("Guess again.");
    var userNumber = parseInt(prompt("Please enter a number"));
    }

if (userNumber === number) {
    alert("Great job!");
  }