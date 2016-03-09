//7B: More Counting

var count = "";
var start = prompt("Give me a starting value", "enter number");
var end = prompt("Now give me an ending value", "enter number");
var increment = prompt("What increment would you like to count by?", "enter number");

start_at = parseInt(start);
end_at = parseInt(end);
increment_by = parseInt(increment);


while (start_at < end_at) {
    alert(count += start_at + ",");
    start_at += increment_by;
}




