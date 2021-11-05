let newInput = document.createElement("input");
newInput.setAttribute('id', 'new-input');
document.body.append(newInput);
newInput.style.marginLeft = "200px";
newInput.style.marginRight = "50px";

let newH2 = document.createElement("h2");
newH2.setAttribute('id', 'new-h2');
document.body.append(newH2);
newH2.style.minWidth = "50px"
newH2.style.height = "25px"
newH2.style.border = "1px solid black";

let inp = document.getElementById('new-input');
let h2 = document.getElementById('new-h2');

function