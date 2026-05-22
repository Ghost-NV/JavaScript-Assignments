function itsMe() {
  return `I'm A Normal Function`;
}

console.log(itsMe()); // I'm A Normal Function

let arrow_fn = () => {
  return `I'm An arrow Function`;
};

console.log(itsMe()); // I'm An arrow Function

// ==

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let arrow_fn_url = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(arrow_fn_url("https", "elzero", "org")); // https://www.elzero.org
