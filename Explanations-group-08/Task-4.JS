// ### Simple currency converter using "addEventListener()" method
/*
  let A = document.querySelector("p");
  A.addEventListener(Event, function () {}); // new method
  A.onclick = function () {}; // old method(use the event directly)
*/

let inpdoll = document.querySelector('[name="dollar"]');
let result = document.querySelector(".result");
let ex = 52.22;

inpdoll.addEventListener("input", function () {
  let dollar = parseFloat(this.value);
  if (!isNaN(dollar) && dollar > 0) {
    let egyptian = parseFloat(dollar * ex).toFixed(2);
    result.innerHTML = `{${dollar}} USD Dollar = {${egyptian}} Egyptian Pound`;
  } else {
    result.innerHTML = `required a positive integer`;
  }
});

/*
  <form action="">
    <input type="number" name="dollar" placeholder="USD Dollar" />
    <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
  </form>
*/
