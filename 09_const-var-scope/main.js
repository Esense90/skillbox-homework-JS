function createMenuGame() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    let inputValue = input.value;

    button.textContent = "Начать игру";
    button.type = "submit";

    form.appendChild(button);
    form.appendChild(input);

    document.body.append(form);

    return input, button, inputValue, form;
}
