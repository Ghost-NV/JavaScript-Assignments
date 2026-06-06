// ## addEventListener() ##
// Syntax: El.addEventListener(event, function, useCapture);
// 'useCapture' parameter is optional

// once: true => one event done
// once: false, undefined, null => all events done (default)

// capture: true => Event Capturing
// capture: fasle, undefined, null, default => Event Bubbling (default)

// passive: true => Don't Prevent Default
// passive: false,undefined, null, default => Can Prevent Default (default)

// signal: undefined, null => Can't Cancel Event
// signal: controller.signal => Can Cancel Event // require AbortController `let controller = new AbortController();`

let myP = document.querySelector("#par-1");
let myDiv = document.querySelector("#divi");

// only one event done (the last of them)
myP.onclick = one;
myP.onclick = two;
myP.onclick = three;

// addEventListener(), multiple events, only one function
myP.addEventListener(
  "click",
  () => {
    console.log("Message From OnClick 1 Event");
  },
  { once: true },
);

myP.addEventListener("click", function () {
  console.log(returntwo() + " Event");
});

myP.addEventListener("click", three);

// defining functions used

function one() {
  console.log("Message From OnClick 1");
}

function two() {
  console.log("Message From OnClick 2");
}

function returntwo() {
  return "Message From OnClick 2";
}

function three() {
  console.log("Message From OnClick 3");
}

function load() {
  console.log("Ghost");
}

window.onload = load;

// todo: mine
myP.addEventListener("click", function () {
  let newP = myP.cloneNode(true); // make clone and take content inside too
  newP.className = "clone";
  newP.removeAttribute("id");
  // ---
  newP.addEventListener("click", function (E) {
    // 'if' is optional here
    if (E.target.className == "clone") {
      console.log("I AM The ROOOOOOOOOOOOOOOOOOOCK");
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
    console.log("I AM THE ROOOOOOOOOOOOOOOOOOOCK");
  }
});
myP.addEventListener("click", function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  newP.removeAttribute("id");
  myDiv.appendChild(newP);
});

// removeEventListener
myP.addEventListener("click", sayHi);
myP.addEventListener("click", function sayHi(E) {
  console.log(E.currentTarget);
  console.log(E.currentTarget);
});
// function sayHi() {
//   console.log("Hi");
//   myP.removeEventListener("click", sayHi);
// }

// using optional parameter 'useCapture'
function sayHello() {
  console.log("Hello");
}
myP.addEventListener("click", sayHello, { once: true });

/*
  <div id="divi">
    <p id="par-1">Hello there!</p>
  </div>
*/
