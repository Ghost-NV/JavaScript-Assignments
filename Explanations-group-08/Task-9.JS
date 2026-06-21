// todo: mine
myP.addEventListener("click", function () {
  let newP = myP.cloneNode(true); // make clone and take content inside too
  newP.className = "clone";
  newP.removeAttribute("id");
  // ---
  newP.addEventListener("click", function (E) {
    // 'if' is optional here
    if (E.target.className == "clone") {
      console.log("I AM The ROOOOOOOOOOOOOOOOOOOOK");
    }
  });
  // ---
  myDiv.appendChild(newP);
});

// ? another solution (Event Delegation)
// parent instead
myDiv.addEventListener("click", function (E) {
  if (E.target.classList.contains("clone")) {
    // better than 'E.target.className == "clone"
    console.log("I AM THE ROOOOOOOOOOOOOOOOOOOOK");
  }
});
myP.addEventListener("click", function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  newP.removeAttribute("id");
  myDiv.appendChild(newP);
});

/*
  <div id="divi">
    <p id="par-1">Hello there!</p>
  </div>
*/
