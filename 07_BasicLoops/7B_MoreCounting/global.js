var start = parseInt(prompt("Please enter the start number: "));
var end = parseInt(prompt("Please enter the ending number: "));
var increment = parseInt(prompt("What number would you like to count by? "));

alert("Please open the JavaScript Console in order to see results. ");

if (start <= end) {
    while (start <= end) {
      console.log("Count: " + start);
      start+=increment;
  }
}else {
    while (start >= end) {
      console.log("Count: " + start);
      start-=increment;
    }
}