// Https response status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#successful_responses

// - Informational responses --> (100 – 199)
// - Successful responses    --> (200 – 299)
// - Redirection messages    --> (300 – 399)
// - Client error responses  --> (400 – 499)
// - Server error responses  --> (500 – 599)

// check from inspect -> Network -> Headers -> Status

let xhr = new XMLHttpRequest();
// xhr.open(method, url(API Endpoint), async(optional true/false, default is true));
xhr.open("GET", "https://api.github.com/users/Ghost-NV/repos", true);
xhr.send();
console.log(xhr);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(xhr.responseText);
    let JSData = JSON.parse(xhr.responseText);
    console.log(JSData);
    JSData.forEach((element) => {
      let el = document.createElement("P");
      el.append(element.name); // or 'full_name'
      document.body.append(el);
    });
  }
};

setTimeout(() => {
  console.log("Web API method");
}, 0);
