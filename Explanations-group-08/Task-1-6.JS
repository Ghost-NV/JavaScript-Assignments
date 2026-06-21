/*
DOM [Events Simulation]: 
  -- click
  -- focus
  -- blur
*/
// usual example : verification code [X] [X] [X] [X] [X] [X]

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  one.focus();
};

one.onblur = function () {
  // document.links[0].click();
  two.focus();
};

two.onblur = function () {
  one.focus();
};

/*
  <form action="">
    <input class="one" type="text" />
    <input class="two" type="text" />
    <input type="submit" value="Submit Data" />
  </form>
*/
