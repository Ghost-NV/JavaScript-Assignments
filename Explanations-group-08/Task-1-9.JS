/*
  DOM [Deal With Elements]
    - before [Element || String]
    - after [Element || String]
    - append [Element || String] (better than appendChild)
    - prepend [Element || String]
    - remove []
    - removeChild [Child]
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

element.before(createdP);
element.before("Text before");
element.after(createdP);
element.after("Text after");

element.append(createdP);
element.append("Text append");
element.prepend(createdP);
element.prepend("Text prepend");

element.removeChild(createdP); // remove element child
element.children[0].remove(); // another way to remove element's child
createdP.remove(); // or remove child directly
element.remove(); // remove element
