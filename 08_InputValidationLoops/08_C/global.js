//8D Re-do Atomic JS-06F. Prompt the user for all 3 legs of a triangle, then prompt again (for all three legs) if the triangle is not valid.



var userNumber = parseInt(prompt("Please enter a number between 1 and 8")); 


while ((userNumber >= 1) && (userNumber <= 8)){
    alert("Great job.");
    var userNumber = parseInt(prompt("Please enter a number between 1 and 8"));
    }

if ((userNumber < 1) || (userNumber > 8)) {
    alert("You screwed up. You don't get to keep guessing.");
  }