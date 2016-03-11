var sideA = parseInt(prompt("Side A length:"));
console.log(sideA);
var sideB = parseInt(prompt("Side B length:"));
console.log(sideB);
var sideC = parseInt(prompt("Side C length:"));
console.log(sideC);

if (((sideA + sideB) > sideC) && ((sideB + sideC) > sideA) && ((sideA + sideC) > sideB)) {
  console.log((sideA + sideB) > sideC);
  console.log((sideB + sideC) > sideA);
  console.log((sideA + sideC) > sideB);
  alert("That is a real triangle!")
}
else {
  alert("That is not a real triangle!")
};