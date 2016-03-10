var start_at = prompt("What's the first number I should count?");
var end_at = prompt("What's the last number I should count?");
var increment_by = prompt("How many should I add each time?");

start_at = parseInt(start_at);
end_at = parseInt(end_at);
increment_by = parseInt(increment_by);

for (i = start_at; i <= end_at; i = i+increment_by) {
  console.log(i);
}
