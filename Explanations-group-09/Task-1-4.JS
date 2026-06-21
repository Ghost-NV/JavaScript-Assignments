/*
  History API
    Properties:
      - length => Number Of States In History
    Methods:
      - back()
      - forward()
      - go(Delta) => Position In History
    Change URL without refresh
      - pushState(state, title(""), pathname(optional)) => Add New State, keep original state in histroy
      - replaceState() => Replace Current State, doesn't keep original state in histroy
*/

// todo : open about 4 windows before using code

console.log(history.length);
history.go(-1);
history.go(-2);
history.go(2);
history.back();
history.forward();

let btn1 = document.querySelector("#featuresBtn");
let btn2 = document.querySelector("#transferBtn");
let contentDiv = document.querySelector("#content");

// pushState()
btn1.onclick = function () {
  history.pushState({ section: "features" }, "", "/features");
  contentDiv.innerHTML = "<h2>Hello From pushState</h2>";
  console.log("URL changed");
};

// replaceState()
btn2.onclick = function () {
  history.replaceState({ section: "transfer" }, "", "/transfer");
  contentDiv.innerHTML = "<h2>Hello From replaceState</h2>";
  console.log("All URL changed");
};
