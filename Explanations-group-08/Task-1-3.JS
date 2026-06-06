// - childnodes
// - children
// - firstchild
// - firstelementchild
// - lastchild
// - lastelementchild

/* <div class="div-1">Hello</div> */
let myElement = document.querySelector(".div-1");
let Plement = document.createElement("p");
let text = document.createTextNode("Hello there");
Plement.appendChild(text);
myElement.appendChild(Plement);

console.log(myElement);
console.log(myElement.children[0]); // childeren only
console.log(myElement.firstElementChild); // first child element only
console.log(myElement.childNodes[0]); // all children (text , element..)
console.log(myElement.firstChild); // first child element , text...
// same with lastChild , lastElementChild
