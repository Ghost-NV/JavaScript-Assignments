/*
  <div class="one" title="two">Two</div>
  <div class="two" title="one">One</div>
*/
// ==>
/*
  <div class="one" title="one">One</div>
  <div class="two" title="two">Two 2</div>
*/

let A = document.querySelector('[class="one"]');
let B = document.querySelector('[class="two"]');

let titA = A.getAttribute(["title"]);
let titB = B.getAttribute(["title"]);
let innA = A.innerHTML;
let innB = B.innerHTML;

A.setAttribute("title", titB);
B.setAttribute("title", titA);

A.innerHTML = innB;
B.innerHTML = `${innA} 2`;
