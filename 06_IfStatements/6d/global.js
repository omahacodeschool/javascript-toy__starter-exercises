var input = prompt("Please enter age"); 


var age_25 = "You can rent a car";
var age_21_and_older = "Please don't drink and drive";
var age_16_and_older = "You're eligible for a driver's license";
var age_0_to_15 = "You can't drive yet, but you'll be able to in a few years";
var negative_num = "You haven't been born yet";
var not_a_num = "Sorry, but that's not a number";

if (input == 25) {
	console.log(age_25);
	console.log(age_21_and_older);
	console.log(age_16_and_older);
};

if (input >= 21) {
	console.log(age_21_and_older);
	console.log(age_16_and_older);
};

if (input >= 16) {
	console.log(age_16_and_older);
};

if (input >= 0 && input < 16) {
	console.log(age_0_to_15);
};

if (input < 0) {
	console.log(negative_num);
};

if (input == NaN) {
	console.log(not_a_num);
};