var password = "twiddlydinks";

var input = prompt("Please input the password...");

if (password === input) {
    alert("Good Job!");
} else {
    alert("Sorry, the password is actually " + password);
}