
var password = "monkeybrains"; 
var input = prompt("Please enter a password"); 

while (password != input) {
	alert("Sorry, the password is actually monkeybrains.");
	var input = prompt("Please enter a password"); 

};

 if (password === input){
	alert("Good job!");
};

