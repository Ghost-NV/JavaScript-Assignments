// div
// class: product
// childs: h3 , p
// copy it 10 times

for (let i = 0; i <= 10; i++) {
  let myElement = document.createElement("div");
  let p = document.createElement("p");
  let h3 = document.createElement("h3");
  let texth3 = document.createTextNode(`Product ${[i + 1]}`);
  let textP = document.createTextNode(`Product ${[i + 1]} description`);
  myElement.className = "product"; // make a class called product
  myElement.setAttribute("class", "product"); // another way
  h3.appendChild(texth3);
  p.appendChild(textP);
  myElement.appendChild(h3);
  myElement.appendChild(p);
  document.body.appendChild(myElement);
}
