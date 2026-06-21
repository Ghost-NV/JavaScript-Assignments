/*
  - input.match(Pattern)
  - input.search(Pattern)
  - input.replace(Pattern, Replacement)
  - input.replaceAll(Pattern, Replacement)
  - pattern.test(input)
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replace(/@/, "JavaScript"));

console.log(txt.replace(/@/gi, "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));
