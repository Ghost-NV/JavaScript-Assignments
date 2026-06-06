document.addEventListener("click", function (event) {
  if (
    event.target.innerText !== "Elzero" ||
    !event.target.classList.contains("open")
  ) {
    event.preventDefault();
  }
});

/*
  <a class="open" href="https://google.com">Google</a>
  <a class="open" href="https://elzero.org">Elzero</a>
  <a class="not" href="https://facebook.com">Facebook</a>
  <a class="linked" href="https://linkedin.com">Elzero</a>
*/

// ---

// Todo: recognize element tag name
document.addEventListener("click", function (E) {
  console.log(`This is ${E.target.nodeName}`); // nodeName = tagName
});

// ---

// Todo: reach 'Elzero' text
let result = document.querySelector("div").lastChild.textContent.trim();
let result = document.querySelector("div").childNodes[3].textContent.trim();
let result = document.querySelector("div").lastChild.nodeValue.trim();

console.log(result);
/*
  <div>
    <span>Hello</span>
    <!-- We Need The Next Text Without Spaces -->
    Elzero
  </div>
*/
