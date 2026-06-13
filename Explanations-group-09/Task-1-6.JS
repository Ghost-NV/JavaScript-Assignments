/*
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key
  session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key
  Info:
    - new tap -> new session
    - close tap -> end session
    - reload / dublicate tap -> same session
*/

// Set
window.localStorage.setItem("color", "#F00");
window.sessionStorage.setItem("color", "blue");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Get Key
console.log(window.localStorage.key(0));

// remove():
// window.localStorage.removeItem("color");

// clear():
// window.localStorage.clear();

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);

// ----

document.querySelector(".name").onblur = function () {
  window.sessionStorage.setItem("input-name", this.value);
};

console.log(window.sessionStorage);
console.log(typeof window.sessionStorage);

/*
  <form action="">
    <input type="text" class="name" />
  </form>
*/
