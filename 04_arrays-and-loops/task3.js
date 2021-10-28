let roadMines = [false, false, false, true, false, false, false, true, false, false];

let lives = 2;

for (let a in roadMines) {
    console.log(`➡️  Танк переместился на ${parseInt(a) + 1}`);
    if (roadMines[a]) {
        lives--;
        if (lives < 1) {
            console.log(`🧨 Танк уничтожен!`);
            break;
        }
        console.log(`🧨 Танк повреждён!`);
    }
}
