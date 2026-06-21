/*
  - target: element that triggered the event
  - currentTarget: element that is currently handling the event
*/

let myP = document.querySelector("#par-1");

myP.addEventListener("click", function sayHi(E) {
  // When click on p, target is p and currentTarget is p
  // When click on span, target is span, but currentTarget is still p

  console.log(E.target);
  console.log(this);
  console.log(E.currentTarget);

  // this: if function is arrow function, 'this' is window.
  // E.currentTarget: same as 'this' in regular functions, but in arrow functions it still refers to the element.
  // Crucial memory detail: E.currentTarget becomes 'null' immediately after event execution finishes, 'this' remains in memory
});

/*
<div id="divi">
  <p id="par-1">Hello <span id="my-span">there!</span></p>
</div>
*/
