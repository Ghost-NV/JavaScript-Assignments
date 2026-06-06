/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let main = document.querySelector("#V-1");
let span = document.querySelector(".p");

console.log(span.parentElement);

span.onclick = function () {
  let parent = span.parentElement;
  let next = parent.nextElementSibling;

  parent.remove();
  next?.remove(); // if (next) { next.remove(); }
};

/*
  <div id="V-1">
    <p class = "p">Hello </p>
    <!-- Hello -->
    <p>Hello </p>
    <!-- Hello -->
    <p>Hello</p>
  </div>
  <div id="V-2" style="font-weight: bold">Hello, too</div>
*/
