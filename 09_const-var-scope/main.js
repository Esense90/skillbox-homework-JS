(() => {

  const cardsArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16];

  let array = [];

  let counter = 0;

  function createApp() {

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper__cards';
    wrapper.id = "wrapper";
    document.getElementById('container').append(wrapper);

    for (let i = 0; i < 16; i++) {
      const card = document.createElement('div');
      const cardFrontFace = document.createElement('div')
      const cardBackFace = document.createElement('div');

      card.classList.add('card');
      cardFrontFace.classList.add('card__front--face', 'card__face');
      cardBackFace.classList.add('card__back--face', 'card__face');

      card.append(cardFrontFace);
      card.append(cardBackFace);
      document.getElementById('wrapper').append(card);

      card.addEventListener('click', () => {
        card.classList.add('is-flipped');
        setTimeout(() => {
          card.classList.remove('is-flipped');
        }, 3000)
        counter++

        if (counter === 2) {
          const notFlipped = document.querySelectorAll('div:not(.is-flipped)');
          for (const n of notFlipped) {
            n.style.pointerEvents = 'none';
          };
        };
      });



    }

    function createNumber(cardsArray) {
      const cardBackFaceNumber = document.querySelectorAll('.card__back--face')
      for (i = 0; i < 16; i++) {
        array.push(cardsArray[i]);
        cardBackFaceNumber[i].textContent = array[i];
      }
    }
    createNumber(cardsArray);



    function shuffle() {
      const shuffleCard = document.querySelectorAll('.card');
      shuffleCard.forEach(shuffleCard => {
        let randomPos = Math.floor(Math.random() * 12);
        shuffleCard.style.order = randomPos;
      })
    }
    shuffle();











  }

  window.createApp = createApp;
})();
