var i = 99

do {
  console.log(i + " bottles of beer on the wall; " + i + " bottles of beer. Take one down; pass it around; " + (i - 1) + " bottles of beer on the wall.");
  i = i - 1;
} while (i > 2);

console.log("2 bottles of beer on the wall; 2 bottles of beer. Take one down; pass it around; 1 bottle of beer on the wall.");

console.log("1 bottle of beer on the wall; 1 bottle of beer. Take one down; pass it around; no more bottles of beer on the wall.");