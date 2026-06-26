// files should be like

/*
  > Explanations-group-14
    Task-1-5.JS
  main.JS
  index.html
*/

// =============================

// index.html : code

/*
  <script src="main.js" type="module"></script>
  <script src="Explanations-group-14/Task-1-5.JS" type="module"></script>
*/

// =============================

// Task-1-5.JS : code

// import * as allModule from "../main.js";
// console.log(allModule);
// console.log(allModule.a);
// console.log(allModule.bAliasEx);
// console.log(allModule.c);

import defaultFunction, {
  a,
  bAliasEx,
  c,
  d as dAlias,
  exFunc,
} from "../main.js";

console.log(a); // A
console.log(bAliasEx); // B
console.log(c); // C
console.log(dAlias); // D
console.log(exFunc()); // D, B, C, A
console.log(defaultFunction()); // I AM the default function

// =============================

// main.JS : code

// export let a = "A";
// let b = "B";
// let c = "C";
// let d = "D";

// function exFunc() {
//   return `${d}, ${b}, ${c}, ${a}`;
// }

// export default function () { // not required to be named
//   return `I AM the default function`;
// }

// export { b as bAliasEx, c, d, exFunc };
