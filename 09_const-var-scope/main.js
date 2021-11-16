(() => {

  const cardsArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16];

  let array = [];

  let counter = 0;
  let tmpCard = [];

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

      card.addEventListener('click', (event) => {
        console.log(event.currentTarget)
        console.log(counter)
        if (card.classList.contains('is-founded')) return false;
        if (counter >= 2) return false;
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
            counter = 0;
            tmpCard = [];
            return false;
          }
          setTimeout(() => {
            tmpCard.forEach((cardTogle) => {
              cardTogle.classList.remove('is-flipped');
              counter--;
            })
            tmpCard = [];
          }, 3000)
        }
        counter++;
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


  createApp(document.getElementById('container'));
})();
