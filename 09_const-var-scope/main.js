(() => {

  const cardsArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16];

  let array = [];

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
        cardBackFace.classList.add('flipped')
        setTimeout(() => {
          card.classList.remove('is-flipped');
          cardBackFace.classList.remove('flipped')
        }, 9000)
      })
    }

    const cardBackFaceNumber = document.querySelectorAll('.card__back--face')

    function createNumber(cardsArray) {
      for (i = 0; i < 16; i++) {
        array.push(cardsArray[i]);
        cardBackFaceNumber[i].textContent = array[i];
      }
    }
    createNumber(cardsArray);

    const shuffleCard = document.querySelectorAll('.card');

    function shuffle() {
      shuffleCard.forEach(shuffleCard => {
        let randomPos = Math.floor(Math.random() * 12);
        shuffleCard.style.order = randomPos;
      })
    }
    shuffle();


  }

  window.createApp = createApp;
})();
