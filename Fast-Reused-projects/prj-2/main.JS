let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

function updateColor(color) {
  exp.style.backgroundColor = color;
  lis.forEach((li) => {
    li.classList.toggle("active", li.dataset.color === color);
  });
}

let saved = localStorage.getItem("color");

if (saved) updateColor(saved);

lis.forEach((li) => {
  li.addEventListener("click", () => {
    let color = li.dataset.color;
    localStorage.setItem("color", color);
    updateColor(color);
  });
});
