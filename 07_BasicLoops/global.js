function fizzBuzz() {

  var i = 0
  
  while(i < 1000){
    i++
    var fizz = false
    var buzz = false

    if (i % 3 == 0){
      fizz = true
    }

    if (i % 5 == 0){
      buzz = true
    }
    
    if (fizz == true){console.log("fizz")};
    if (buzz == true){console.log("buzz")};

    if (fizz == false && buzz == false){
    console.log(i)};

  }
}

  fizzBuzz()

