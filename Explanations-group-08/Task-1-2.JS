// ## Explanations for methods below ##

// - setAttribute(name, value); // add or update attribute
// - getAttribute(name)        // get attribute
// - removeAttribute(name);   // remove attribute

// - hasAttribute(name);    // check if attribute exists
// - appendChild(element); // add element or text at the end

// - createAttribute()   // create attribute
// - createTextNode()   // create text
// - createComment()   // create comment
// - createElement()  // create element

let element = document.querySelector(".js");

console.log(element.innerHTML);
console.log(element.textContent);

// update
element.innerHTML = "Text From <span>Main.js</span> File";
element.textContent = "Text From <span>Main.js</span> File"; // better than innerText

document.images[0].src = "https://google.com";
document.images[0].alt = "A";
document.images[0].title = "Pic";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log("Not Found");
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`P Has No Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);

// HTML Code :
/* 
  <div class="js">JavaScript &lt<span>Div</span>&gt</div>
  <img src="#" />
  <a href="#" class="link">Google</a>
  <p data-src="Hello">Hello there!</p>
*/
