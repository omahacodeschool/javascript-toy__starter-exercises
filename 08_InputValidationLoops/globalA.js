var password = "pow";
var params = prompt("Enter password:");

while (params != password) {
      params = prompt("Sorry, that password wasn't correct. Try again."); 
}

if (params == password) {
  alert("Good work.")
}