(() => {

  let cardsArray = [];

  let counter = 0;

  let tmpCard = [];


  function createRestartButton() {
    resetButton = document.createElement('button');
    resetButton.classList.add('resetButton');
    resetButton.textContent = "Сыграть еще раз";
    wrapper.append(resetButton);
    wrapper.style.padding.bottom = '40px';
  };

  function createArray(value) {
    const size = value * value;
    const array = [];

    for (let s = 1; s <= size / 2; s++) {
      array.push(s);
      array.push(s);
    };

    const newArray = shuffleArr(array);

    return {
      newArray,
      value,
      size,
    };
  };

  function shuffleArr(array) {
    const newArray = [];

    while (array.length > 0) {
      const randomIndex = Math.round(Math.random() * (array.length - 1));
      const randomItem = array[randomIndex];

      newArray.push(randomItem);
      array.splice(randomIndex, 1);
    };

    return newArray;
  };


  function startGame(container, input) {
    let value = input.value;

    if (value < 2 || value > 10 || value % 2 != 0) {
      value = 4;
    };

    const wrapper = document.createElement('div');
    const array = createArray(value).newArray;

    wrapper.className = 'wrapper__cards';
    wrapper.id = "wrapper";
    wrapper.style.width = 79 * value + 'px';

    document.getElementById('container').append(wrapper, gameTimer);

    for (let i of array) {
      const card = document.createElement('div');
      const cardFrontFace = document.createElement('div')
      const cardBackFace = document.createElement('div');

      card.classList.add('card');
      cardFrontFace.classList.add('card__front--face', 'card__face');
      cardBackFace.classList.add('card__back--face', 'card__face');

      card.append(cardFrontFace, cardBackFace);
      wrapper.append(card);
      cardBackFace.textContent = i;

      function createNumber(cardsArray) {
        const cardBackFaceNumber = document.querySelectorAll('.card__back--face')
        for (i = 0; i < array; i++) {
          array.push(cardsArray[i]);
          cardBackFaceNumber[i].textContent = array[i];
        }
      }
      createNumber(cardsArray);

      card.addEventListener('click', (event) => {
        if (card.classList.contains('is-founded')) {
          return false;
        }
        if (counter >= 2) {
          return false;
        }
        card.classList.add('is-flipped');
        tmpCard.push(card);
        if (tmpCard.length >= 2) {
          let tmpContent = [
            tmpCard[0].querySelector('.card__back--face').textContent,
            tmpCard[1].querySelector('.card__back--face').textContent
          ]
          if (Number(tmpContent[0]) == Number(tmpContent[1])) {
            tmpCard[0].classList.add('is-founded');
            tmpCard[1].classList.add('is-founded');

            const founded = document.querySelectorAll('.is-founded');

            if (founded.length === value * value) {
              createRestartButton();
              resetButton.addEventListener('click', () => {
                wrapper.style.display = 'none';
                createApp();
              })
            };
            counter = 0;
            tmpCard = [];
            return false;
          };
          setTimeout(() => {
            tmpCard.forEach((cardTogle) => {
              cardTogle.classList.remove('is-flipped');
              counter--;
            });
            tmpCard = [];
          }, 3000)
        }
        counter++;
      })
    }
  }

  function createApp(container) {
    const title = document.createElement('h2');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');

    title.classList.add('title');
    title.textContent = "Выберите размер поля";

    form.classList.add('form');
    input.classList.add('input');
    input.type = 'number';
    button.classList.add('button');
    button.textContent = 'Start';

    form.append(title, button, input);
    document.getElementById('container').append(form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      startGame(container, input);
    });

  };

  createApp(document.getElementById('container'))
})();
