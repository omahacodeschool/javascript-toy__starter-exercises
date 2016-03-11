var i = 1;
var number = parseInt(prompt("give me a number"));

while (i < number) {

	if ((Number.isInteger(i / 5) == true) && (Number.isInteger(i / 3) == true)) {
		console.log("fizz buzz");
		i++;
	}

	else if (Number.isInteger(i / 3) == true) {
		console.log ("fizz");
		i++;
	}

	else if (Number.isInteger(i / 5) == true) {
		console.log("buzz");
		i++;
	}

	else {
	console.log(i);
	i++;
	}
};
