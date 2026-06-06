/*
  DOM [Cloning]
  - cloneNode (Deep)
*/

let myP = document.querySelector("#par-1").cloneNode(true); // true takes children too, false doesn't (defalut is 'false')
let myDiv = document.querySelector("#divi");

myP.id = `${myP.id}-clone`;

myDiv.append(myP);

/* 
  <div id="divi">
    <p id="par-1">Hello there!</p>
  </div>
*/
