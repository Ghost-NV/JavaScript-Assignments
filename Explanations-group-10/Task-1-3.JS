// ----

const object = {
  name: "Ghost",
  country: "Egypt",
  skills: {
    css: "css",
    // js: "js",
  },
};

function destructioning({
  name: N,
  country = "Unknown",
  skills: { js: second = "Unknown" },
}) {
  console.log(N);
  console.log(country);
  console.log(second);
}

destructioning(object);

console.log("===================");
// todo: print name age one of skills and one of these addresses
// ---------------

const user = {
  theName: "Osama",
  theAge: 41,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

function destruction({
  theName: N = "Name",
  theAge: A = "Age",
  skills: [one, two, three],
  addresses: { egypt: E = "country" } = {},
} = {}) {
  console.log(`your name is ${N}`);
  console.log(`your age is ${A}`);
  console.log(`your skills ${one}, ${two}, ${three}`);
  console.log(`your egypt address is ${E}`);
}

destruction(user);
