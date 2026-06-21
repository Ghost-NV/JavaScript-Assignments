/*
  <form action="">
    <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
    <input type="text" name="texts" class="input" placeholder="Elements Text" />
    <select name="type" class="input">
      <option value="Div">Div</option>
      <option value="Section">Section</option>
    </select>
    <input type="submit" name="create" value="Create" />
    <div class="results"></div>
  </form>
*/

// ! failed way :
/*
  let inpnum = document.querySelector('[type="number"]');
  let inptext = document.querySelector('[type="text"]');
  let inpsupm = document.querySelector('[type="submit"]');
  let creation = createElement("div.divi", amount);
  let result = document.querySelector(".result");
  
  inpsupm.addEventListener("submit", function () {
    inpnum.addEventListener("input", function () {
      let amount = parseFloat(this.value);
      if (!isNaN(amount) && amount > 0) {
        result.appendChild(creation);
      } else {
        result.innerHTML = `required a positive integer`;
      }
    });
    let creator = document.querySelector(".divi");
  
    inptext.addEventListener("input", function () {
      creator.innerHTML = this.value;
    });
  });
*/

// ? true way

let inpnum = document.querySelector('[type="number"]');
let inptext = document.querySelector('[type="text"]');
let selectType = document.querySelector("select");
let form = document.querySelector("form");
let result = document.querySelector(".results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let amount = parseInt(inpnum.value);
  let text = inptext.value;
  let type = selectType.value.toLowerCase();

  result.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    let element = document.createElement(type);
    element.className = "divi";
    element.textContent = text;
    result.appendChild(element);
  }
});

// CSS code
/*
  .input {
    display: block;
    margin: 10px 0;
    padding: 8px;
  }
  
  .divi {
    background-color: #dd1111;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
  }
  
  .results {
    margin-top: 20px;
  }
*/
