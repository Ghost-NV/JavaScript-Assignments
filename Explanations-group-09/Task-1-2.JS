/*
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
  ---
  - setInterval(Function, Timeout, Additional Params)
  - clearInterval(Identifier) // same as clearTimeout
*/

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter_A = setTimeout(sayMsg, 3000, "Osama", 38);

let btn = document.querySelector("#btn");

btn.onclick = function () {
  clearTimeout(counter_A);
  clearInterval(counter_B);
};

// ========================================

let div = document.querySelector("#divi");

function countdown(user) {
  div.innerHTML -= 1;
  console.log("you have " + div.innerHTML + " seconds left");
  if (div.innerHTML == 0) {
    clearInterval(counter_B);
    console.log(`you are done, "${user}"`);
  }
}

let counter_B = setInterval(countdown, 1000, "New User");

/*
  <button id="btn">Stop</button>
  <div id="divi">10</div>
*/
