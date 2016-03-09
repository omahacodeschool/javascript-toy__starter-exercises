//Ask the user (using `prompt()`) for their name, then assign that value to a well-named variable.

var name = prompt("Please enter your name");

//Ask the user (using `prompt()`) for their age, then assign that value to a well-named variable.

var age = prompt("Please enter your age");

//Ask the user (using `prompt()`) for their hometown, then assign that value to a well-named variable.

var hometown = prompt("Please enter your hometown");

//Ask the user (using `prompt()`) for their favorite number, then assign that value to a well-named variable.

var favoriteNumber = prompt("Please enter your favorite number");

//Output each of those values using both `console.log()` and `alert()`. You can output the value itself with no context around it, but it's a better decision to use each of those values in a sentence. For example: "Your name is Aloysius."


if (name != null) {
    console.log("Your name is " + name);
    alert("Your name is " + name);
  }

if (age != null) {
    console.log("Your age is " + age);
    alert("Your age is " + age);
  }

if (hometown != null) {
    console.log("Your hometown is " + hometown);
    alert("Your hometown is " + hometown);
  }

if (favoriteNumber != null) {
    console.log("Your favorite number is " + favoriteNumber);
    alert("Your favorite number is " + favoriteNumber);
  }


