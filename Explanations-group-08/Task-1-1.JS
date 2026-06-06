// ## DOM Intro ##
let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[0]);
console.log(myQueryElement);
console.log(myQueryAllElement[0]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

// HTML code :
/*
  <span class="my-span">My Span</span>
  <p>Hello Paragraph 1</p>
  <p>Hello Paragraph 2</p>
  <div id="my-div">Hello Div</div>
  <form action="">
    <input type="text" name="one" value="Hello" />
  </form>
  <form action="">
    <input type="text" name="two" value="Hello" />
  </form>
  <a href="https://google.com">Google</a>
  <a href="https://facebook.com">Facebook</a>
*/
