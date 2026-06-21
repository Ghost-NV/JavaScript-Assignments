let A = 20;
let B = 10;

let promptMsg = prompt(`Print Number From _ To _`, `${A}-${B}`);

if (promptMsg) {
  let numbers = promptMsg.split("-");
  // if NAN -> return Alt varibales
  A = parseInt(numbers[0]) || A;
  B = parseInt(numbers[1]) || B;
}

let current = A;

function to(end) {
  if (isNaN(current) || isNaN(end)) return clearInterval(counter);
  console.log(current);
  if (current === end) return clearInterval(counter);
  current > end ? --current : ++current;
}

let counter = setInterval(to, 1000, B);
