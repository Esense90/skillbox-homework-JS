let a = 13.8901233343;
let b = 2.89156423234;
let n = 6;

let num1 = Math.floor(a % 1 * Math.pow(10, n));

let num2 = Math.floor(b % 1 * Math.pow(10, n));




console.log(num1 === num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 !== num2);
