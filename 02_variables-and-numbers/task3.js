let n = 100;
let m = -5;

let number = (Math.random() * Math.abs(m - n));

let range = Math.min(n, m) + number;

let x = Math.round((range - 1) / 2);

let y = x * 2;

console.log(++y);
