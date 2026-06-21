// Pracitce on removeEventListener():

let btn = document.querySelector("button");
let counter = 0;

function handleClick() {
  counter++;
  console.log(`Button clicked ${counter} times`);
  // removeEventListener()
  if (counter === 3) {
    btn.removeEventListener("click", handleClick);
    console.log("❌ Event removed! No more clicks work.");
  }
}

btn.addEventListener("click", handleClick);
