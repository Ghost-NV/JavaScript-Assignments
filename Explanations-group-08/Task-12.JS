let mainDiv = document.querySelector(".classes-list");
let currentDiv = document.querySelector("#divi");
let removeInp = document.querySelector(".classes-to-remove");
let addInp = document.querySelector(".classes-to-add");

// ! Completely Falied Solution
/*
  function main1() {
    let addVal = addInp.value;
    let element = document.createElement("p");
    element.classList.add(`${addVal}`);
    let text = document.createTextNode(addVal);
    element.appendChild(text);
    element.style.cssText =
      "font-weight: bold; color: white; background-color: red; padding: 8px; width: fit-content; margin-right: 5px";
    currentDiv.appendChild(element);
  }

  function main2() {
    let remVal = removeInp.value;
    let element = document.getElementsByClassName(remVal);
    currentDiv.forEach(function V(E) {
      if (remVal === currentDiv.children[E]) {
        currentDiv.children[E].remove();
      }
    });
  }

  addInp.addEventListener("blur", main1);
  removeInp.addEventListener("blur", main2);
*/

// ? true soultion

// function updateDisplay() {
//   let h4 = mainDiv.querySelector("h4");
//   mainDiv.innerHTML = "";
//   mainDiv.appendChild(h4);

//   let classes = Array.from(currentDiv.classList).sort();

//   if (classes.length === 0) {
//     let msg = document.createElement("p");
//     msg.textContent = "No Classes to show";
//     msg.style.color = "gray";
//     mainDiv.appendChild(msg);
//   } else {
//     classes.forEach(function (className) {
//       let span = document.createElement("span");
//       span.textContent = className;
//       span.style.cssText =
//         "background: #007bff; color: white; padding: 5px 10px; margin: 5px; border-radius: 5px; display: inline-block;";
//       mainDiv.appendChild(span);
//     });
//   }
// }

// function main1() {
//   let addVal = addInp.value.trim();
//   if (addVal === "") return;

//   let classesArray = addVal.split(/\s+/);
//   classesArray.forEach(function (className) {
//     if (!currentDiv.classList.contains(className)) {
//       currentDiv.classList.add(className);
//     }
//   });

//   addInp.value = "";
//   updateDisplay();
// }

// function main2() {
//   let remVal = removeInp.value.trim();
//   if (remVal === "") return;

//   let classesArray = remVal.split(/\s+/);
//   classesArray.forEach(function (className) {
//     currentDiv.classList.remove(className);
//   });

//   removeInp.value = "";
//   updateDisplay();
// }

// addInp.addEventListener("blur", main1);
// removeInp.addEventListener("blur", main2);

// updateDisplay();

// ? another short true solution

// function showClasses() {
//   let classes = [...currentDiv.classList].sort();
//   mainDiv.innerHTML = `<h4>Current Element Class Lists</h4>`;

//   if (classes.length === 0) {
//     mainDiv.innerHTML += `<p style="color:gray">No Classes to show</p>`;
//   } else {
//     classes.forEach(c => {
//       mainDiv.innerHTML += `<span style="background:#007bff;color:white;padding:5px 10px;margin:5px;border-radius:5px;display:inline-block">${c}</span>`;
//     });
//   }
// }

// function addClasses() {
//   let val = addInp.value.trim();
//   if (val) {
//     val.split(/\s+/).forEach(c => currentDiv.classList.add(c));
//     addInp.value = "";
//     showClasses();
//   }
// }

// function removeClasses() {
//   let val = removeInp.value.trim();
//   if (val) {
//     val.split(/\s+/).forEach(c => currentDiv.classList.remove(c));
//     removeInp.value = "";
//     showClasses();
//   }
// }

// addInp.addEventListener("blur", addClasses);
// removeInp.addEventListener("blur", removeClasses);
// showClasses();

// if user wrote 2 classes , delete/add them (depending on where they're wrotten)
// Do the event only after 'blur' the input
// if no classes remained in '#divi' => No Classes to show

// ? another solution

function showClasses() {
  mainDiv.innerHTML = `<h4>Current Element Class Lists</h4>`;
  let classes = Array.from(currentDiv.classList).sort();

  if (classes.length === 0) {
    mainDiv.innerHTML += `<p style="color: gray">No Classes to show</p>`;
  } else {
    classes.forEach((c) => {
      mainDiv.innerHTML += `<span style="background: #007bff; color: white; padding: 5px 10px; margin: 5px; border-radius: 5px; display: inline-block;">${c}</span>`;
    });
  }
}

function handleClasses(input, action) {
  let value = input.value.trim();
  if (value) {
    value.split(/\s+/).forEach((c) => currentDiv.classList[action](c));
    input.value = "";
    showClasses();
  }
}

addInp.addEventListener("blur", () => handleClasses(addInp, "add"));
removeInp.addEventListener("blur", () => handleClasses(removeInp, "remove"));
showClasses();

// todo : HTML
/*
  <div class="assign">
    <input type="text" class="classes-to-add" placeholder="Add Classes" />
    <input type="text" class="classes-to-remove" placeholder="Remove Classes" />
    <div class="element current" title="Current">Current Element</div>
    <div class="classes-list">
      <h4>Current Element Class Lists</h4>
      <div id="divi"></div>
    </div>
  </div>
*/
