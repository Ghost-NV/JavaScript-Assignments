// index.html : <script src="Explanations-group-14/Task-5.JS" type="module"></script>

// Task-5.JS (main file):
import calc, * as modOne from "./mod-one.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-one.js

import { a as numOne, b as numTwo, c as numThree } from "./mod-two.js";
export { numOne, numTwo, numThree };

export default function (a, b, c) {
  return a + b + c;
}

// mod-two.js

let a = 10;
let b = 20;
let c = 30;

export { a, b, c };
