let random = [];

let n = -3;

let m = -10;

let count = 42;

for (i = 0, m; i < count; i++) {
    random.push(Math.round(Math.min(n, m) + (Math.random() * Math.abs(m - n))))
}

console.log(random)
