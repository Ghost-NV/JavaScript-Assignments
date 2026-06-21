let Tasks = document.getElementById("tasksContainer");
let Input = document.getElementById("taskInput");
let Add = document.querySelector(".add");
let container = document.querySelector(".container");
let form = document.querySelector(".form");

function showTasks() {
  for (let index = 0; index < window.localStorage.length; index++) {
    let savedTask = window.localStorage.key(index);

    let newElement = document.createElement("div");
    newElement.setAttribute("class", "Task");
    let del = document.createElement("button");
    del.setAttribute("class", "delete");
    del.textContent = "delete";
    let p = document.createElement("p");
    p.textContent = savedTask;
    newElement.appendChild(p);
    newElement.appendChild(del);

    del.onclick = function () {
      newElement.remove();
      window.localStorage.removeItem(savedTask);
    };

    Tasks.appendChild(newElement);
  }
}

function submit(B) {
  B.preventDefault();

  if (Input.value.trim() == "") {
    return alert("Please Enter a Task");
  }
  let taskKey = Input.value;
  window.localStorage.setItem(taskKey, taskKey);

  let newElement = document.createElement("div");
  newElement.setAttribute("class", "Task");
  let del = document.createElement("button");
  del.setAttribute("class", "delete");
  del.textContent = "delete";
  let p = document.createElement("p");
  p.textContent = Input.value;
  newElement.appendChild(p);
  newElement.appendChild(del);

  del.onclick = function () {
    newElement.remove();
    window.localStorage.removeItem(taskKey);
  };

  Tasks.appendChild(newElement);
  Input.value = "";
}

Add.addEventListener("click", submit);

showTasks();

// B
/*
  <div class="element">
    <p>Text</p>
    <button class="delete">delete<button>
  <div>
*/

// write down a Task
// Add Task (submit)
// Task added as an element, element saved in localStorage
// onclick delete -> delete Task
