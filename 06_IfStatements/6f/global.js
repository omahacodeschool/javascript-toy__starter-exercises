var a = parseInt(prompt("please input the first number"));
var b = parseInt(prompt("please input the second number"));
var c = parseInt(prompt("please input the third number"));

if ((a + b > c) && (a + c > b) && (c + b > a)) {
	alert("great triangle");
}
else {
	alert("sad triangle");
}


