/*
  Regular Expression
  Quantifiers
  n+ => One Or More
  n* => zero or more
  n? => zero or one
  ----
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
  n{,y}  => At Max y // in JS there must be x (n{x,y}) 
  ----
  Asserts
  $  =>  End With ..
  ^  => Start With ..
  ?= => Followed By ..
  ?! => Not Followed By ..
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let mailsRe = /\w+@\w+.(com|net)/gi;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

// ======

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,8}s/gi)); // S[Four To Eight Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S
console.log(serials.match(/s\d{0,5}s/gi)); // S[At Max Five]S

// ======

let MyString = "Hello there";

console.log(/ere$/gi.test(MyString));
console.log(/^Hell/gi.test(MyString));
console.log(/Hell/gi.test(MyString));

let names = "10samaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(names.match(/\d\w{5}(?=Z)/gi));
console.log(names.match(/\d\w{8}(?!z)/gi));
