// input: variables w/ value set to user response via prompt method
var name = prompt("What is your name?"),
    age = prompt("How old are you?"),
    hometown = prompt("What is the name of your hometown?"),
    favoriteNumber = prompt("What is your favorite number?");
    

// console log info displaying variables generated form user prompt responses
console.log(name, typeof name);
console.log(age, typeof age);
console.log(hometown, typeof hometown);
console.log(favoriteNumber, typeof favoriteNumber);

// alert listing back prompt values stored in variables
alert(`This is what we have: \n \n Your name is ${name}. \n You are ${age}. \n You are from ${hometown} \n Your favorite number is ${favoriteNumber}`);