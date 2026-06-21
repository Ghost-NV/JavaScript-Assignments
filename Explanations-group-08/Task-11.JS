let A = document.querySelectorAll("p");
A[1].remove();
let B = document.createElement("div");
let C = document.createElement("div");

let D = document.querySelector(".our-element");

B.setAttribute("class", "start");
B.setAttribute("title", "Start Element");
B.setAttribute("data-value", "Start");
B.textContent = "Start";

C.setAttribute("class", "End");
C.setAttribute("title", "End Element");
C.setAttribute("data-value", "End");
C.textContent = "End";

// simple way
D.before(B);
D.after(C);

// ? another way
// D.parentNode.insertBefore(B, D.previousSibling);
// D.parentNode.insertBefore(C, D.nextSibling);

// ? another advanced way
// D.insertAdjacentElement("beforebegin", B);
// D.insertAdjacentElement("afterend", C);

/*
  <div class="our-element">Our Element</div>
  <p>Paragraph</p>
*/
/*
  <div class="start" title="Start Element" data-value="Start">Start</div>
  <div class="our-element">Our Element</div>
  <div class="end" title="End Element" data-value="End">End</div>
*/
