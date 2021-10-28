let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let date = [];
let day = "Понедельник";
let indexWeek = week.indexOf(day);

for (let i = 1; i < 32; i++) {
    date.push(i);
}
for (let i = 0; i < week.length; i++) {
    if (week[i] === day) {
        indexWeek = i;
    }
}
for (let i of date) {
    let y = (indexWeek + i - 1) % 7;
    console.log(`${i} января, ${week[y]}`);
}
