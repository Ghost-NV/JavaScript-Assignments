/*
  <img decoding="async" src="#" alt="One" />
  <img decoding="async" src="#" />
  <img decoding="async" src="#" alt="Three" />
  <img decoding="async" src="#" />
  <img decoding="async" src="#" />
*/

let attribute = "alt";
for (let i = 0; i < 5; i++) {
  let image = document.querySelectorAll("img")[i];
  if (image.hasAttribute(attribute)) {
    image.setAttribute(attribute, "Old");
  } else {
    image.setAttribute(attribute, "New");
  }
}
