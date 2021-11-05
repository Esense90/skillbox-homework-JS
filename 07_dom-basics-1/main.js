let input = document.createElement("input");
document.body.append(input);
input.style.margin = "50px";
input.value = '0';
input.min = '0';
input.type = 'number';
let button = document.createElement("button");
button.className = "btn";
button.innerHTML = "Start-Stop";
document.body.append(button);

let timer = null;

function btn_startStop() {
    if (timer === null) timer = setInterval(timer_start, 1000)
    else timer_stop()
};


function timer_start() {
    if (input.value < 1) return timer_stop();
    input.value--;
    console.log(input.value);
}

function timer_stop() {
    clearInterval(timer);
    timer = null;
    input.value = 0;
}




document.querySelector('.btn').addEventListener("click", btn_startStop);
