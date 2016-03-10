var params = prompt("Give me a number within 1 and 8:");

while (params <= 8 && params >= 1) {
  params = prompt("Good job! Give me another number within 1 and 8.");
}

if (params > 8 || params < 1) {
  alert("Sorry, that number wasn't within 1 and 8.");
}