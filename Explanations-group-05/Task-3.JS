// using condition
function checkStatus_alt(a, b, c) {
  let Name, Age, Status;
  if (typeof a === "string") {
    Name = a;
  } else if (typeof b === "string") {
    Name = b;
  } else {
    Name = c;
  }

  if (typeof a === "number") {
    Age = a;
  } else if (typeof b === "number") {
    Age = b;
  } else {
    Age = c;
  }

  if (typeof a === "boolean") {
    Status = a;
  } else if (typeof b === "boolean") {
    Status = b;
  } else {
    Status = c;
  }
  return `Hello ${Name}, Your Age Is ${Age}, You Are ${Status ? "" : "Not"} Available For Hire"`;
}

function checkStatus(...data) {
  let a = 0,
    b = 0,
    c = 0;
  for (let i = 0; i < 3; i++) {
    typeof data[i] === "string" // str
      ? (a = data[i])
      : typeof data[i] === "number" // num
        ? (b = data[i])
        : data[i] === false
          ? (c = "Not Availble") // fls
          : (c = "Availble"); // tr
  }
  return console.log(`Hi ${a}, Your Age Is ${b} ,You Are ${c} For Hire`);
}

// Needed Output
checkStatus("Mohamed", true, 38);
checkStatus_alt("Saged", true, 38);
