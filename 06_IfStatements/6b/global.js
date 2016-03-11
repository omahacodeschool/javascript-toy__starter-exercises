var password = "paranoid"

var userPassWord = prompt("Please enter the password to continue")

function checkPassWord() {
  if (password == userPassWord){
    alert("That is correct, carry on!");
  }
  else {
    alert("No, that is incorrect. Please try again")
  }
}

checkPassWord()