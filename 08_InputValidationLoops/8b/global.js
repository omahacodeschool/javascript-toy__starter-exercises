var password = 23; 
var input = prompt("Please enter a number"); 



while (password != input) {
	alert("Sorry, wrong number.");
	var input = prompt("Please enter another number"); 
};

 if (password == input){
	alert("Good job!");
};
