/* <div id="elzero" class="element" name="js">JavaScript</div> */
let A = document.getElementById("elzero");
let B = document.querySelector("#elzero");
let C = document.querySelectorAll("#elzero")[0];

let D = document.getElementsByClassName("element")[0];
let E = document.querySelector(".element");
let F = document.querySelectorAll(".element")[0];

let G = document.getElementsByTagName("div")[0];
let H = document.querySelector("div");
let I = document.querySelectorAll("div")[0];

let J = document.getElementsByName("js")[0];
let K = document.querySelector("[name = 'js']");
let L = document.querySelectorAll("[name = 'js']")[0];

// pretending element is the first child
let M = document.body.firstElementChild;
let N = document.body.children[0];

console.log(`A : ${A} (1)`);
console.log(`B : ${B} (2)`);
console.log(`C : ${C} (3)`);

console.log(`D : ${D} (4)`);
console.log(`E : ${E} (5)`);
console.log(`F : ${F} (6)`);

console.log(`G : ${G} (7)`);
console.log(`H : ${H} (8)`);
console.log(`I : ${I} (9)`);

console.log(`J : ${J} (10)`);
console.log(`K : ${K} (11)`);
console.log(`L : ${L} (12)`);
