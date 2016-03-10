//6B: Password Game

//In your Javascript file, hardcode a password (e.g. `var password = "monkeybrains";` but pick your own password) Prompt the user for a password; if it matches your stored password, give them an `alert()` that says "Good job!" If it doesn't match, give them an `alert()` that says something to the effect of `"Sorry, the password is actually monkeybrains."` Make sure to use the variable storing the password instead of the string-literal that represents the password text so your program can easily change.

var password = "123password!";

var userPassword = prompt("Please enter a password");

if (userPassword === password) {
    alert("Great job!");
  }

if (userPassword != password) {
    alert("NOPE");
  }