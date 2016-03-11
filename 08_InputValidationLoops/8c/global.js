var input = (prompt("Please enter a number")); 
var avg_num = 0
var all_inputs = [];
all_inputs.push(input);
var avg_num = (avg_num + parseInt(input))

while (input.match(/^(1|2|3|4|5|6|7|8)$/))
 {
	var input = (prompt("Please enter another number"));
	all_inputs.push(input);
	var avg_num = (avg_num + parseInt(input))
};

	alert("Sorry, wrong number.");

	alert(avg_num/(all_inputs.length));