//8A: What's the Password
//Create a secret password (hard-code it as a string). Prompt the user for the password. Keep prompting until they correctly input the password, then congratulate them on a job well done. This is effectively a redo of Atomic JS-06B.




var password = "123password!";



for (var userPassword = prompt("Please enter a password"); userPassword !== password;){
    alert("Try again.");
    var userPassword = prompt("Please enter a password");
    }

if (userPassword === password) {
    alert("Great job!");
  }