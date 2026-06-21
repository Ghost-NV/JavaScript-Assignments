let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

// Output
// 10;
// 20;
// 30;
// 50;
// 60;
// 70;
// 80;
// 90;
// 100;

let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i > end; i--) {
  if (i < stop) {
    break;
  }
  if (i < start) {
    console.log("0" + i);
  } else {
    console.log(i);
  }
}

// Output
// 10;
// 09;
// 08;
// 07;
// 06;
// 05;
// 04;
// 03;
