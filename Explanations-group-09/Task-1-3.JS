/*
  location properties
  -- location.protocol   ===>  http: or https:
  -- location.host       ===>  hostname + port // www.google.com:80
  -- location.hostname   ===>  hostname only // www.google.com
  -- location.port       ===>  port // 80 or 5500...
  -- location.pathname   ===>  path after hostname
  -- location.search     ===>  data after '?'
  -- location.hash       ===>  #id
  -- location.href       ===>  full url, if you changed url, original remains in history as 'assign()' // http://127.0.0.1:5500 
  -- location.origin     ===>  Same as href (read only), Base/Root URL (protocol + hostname + port) // http://127.0.0.1:5500 
  -- location.reload()   ===>  Reload(refresh window)
  -- location.replace()  ===>  change url, don't keep history
  -- location.assign()   ===>  change url, keep history
*/

console.log(location.origin); // origin
console.log(location.protocol); // protocol
console.log(location.host); // host
console.log(location.hostname); // hostname
console.log(location.port); // port
console.log(location.pathname); // pathname
console.log(location.search); // search
console.log(location.hash); // hash
console.log(location.href); // href
// console.log(location.reload());
// console.log(location.replace("https://www.google.com"));
// console.log(location.assign("https://www.google.com"));
