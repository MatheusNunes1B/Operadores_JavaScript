let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);

console.log(z);

console.log("Primeiro o Computador faz o que está dentro dos parênteses\n x-- * --y     = 5++ * --10\n 5 * 9 = 45 \n\n y % 3\n 9 % 3   = 0\n 45 / 2 + 0\n\n22.5 + 0");