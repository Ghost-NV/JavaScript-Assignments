/*
  - close()
  - open()

  - innerWidth
  - innerHeight

  - stop()
  - print()
  - focus()

  - scrollTo(x, y || Options) => same as scroll() --> move to position
  - scrollBy(x, y || Options) --> move by scrolling (not based on position)

  - scrollX => same as 'PageXOffset'
  - scrollY => same as 'PageYOffset'
*/

if (false) {
  window.close();
}

window.open(
  "https://google.com",
  "_blank",
  "width=400,height=400,left=200,top=10",
); // does't work (need an Event)

let W = window.innerWidth;
let H = window.innerHeight;
console.log(W, H);

window.scrollTo({
  left: W / 2,
  top: H / 2,
  behavior: "smooth", // "smooth" , "instant" , "auto"
});
// window.scrollTo(W / 2, H / 2); // same

window.scrollBy({
  left: W / 8,
  top: H / 8,
  behavior: "smooth",
});

// Todo : scrool to UP app
let btn = document.querySelector("#UP");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/*
  body {
  background-color: black;
  color: aliceblue;
  height: 5000px;
  width: 5000px;
  }
  #UP {
    background-color: red;
    border: none;
    color: white;
    font-weight: bold;
    padding: 6px;
    border-radius: 4px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    display: none;
  }
*/

/* <button id="UP">UP</button> */
