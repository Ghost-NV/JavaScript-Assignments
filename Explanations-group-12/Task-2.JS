let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/2001:db8(:\d{4}){6}/gi));
// ====
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(specialNames.match(/Os(1?0*)O/gi)); // ["Os10O", "OsO", "Os100O"];
// ====
let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3} \(\d{4}\)/gis));
// ====
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
  - https?:         =>  https: / http:
  - \/\/            =>  //
  - (?:[-\w]+\.)?   =>  (www. / blog. / ar.) , (?: Does Not store Group in memory for better performance and ingoring indexing by delete index of it so that Website name index is 1 not 2 after www.)
  - ([-\w]+)\.      =>  Website name
  - \w+             =>  .com / .org / .net (TLD)
  - (?:\.\w+)?      =>  .eg / .sa / .uk (ccTLDs)
  - \/?.*           =>  /index-H (Subdirectories)
*/

// https://ar.wikipedia.org/wiki/
// https://www.wikipedia.ar/wiki/
