function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(2010, 2026, 2024);

// default parameters
// return usage
// ES6 method:
function sayHello(username = "Unknown", age = "Unknown") {
  // oldway 1:
  if (age === undefined) {
    age = "Unknown";
  }
  // oldway 2:
  age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());

// rest parameters (muts be last or only parameter in fn)
// "...numbers" is an array

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome,${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    if (sk.length > 0) {
      document.write(`<p>Skills Is Hidden</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Saged", 38, 20, "Yes", "skill2", "skill1");
