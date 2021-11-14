(() => {

  const cardsArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16];


  function createApp() {

    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper__cards';
    wrapper.id = "wrapper";
    document.getElementById('container').append(wrapper);

    for (let i = 0; i < 16; i++) {
      const card = document.createElement('div');
      card.classList.add('card', 'upper__card');


      document.getElementById('wrapper').append(card);

      card.addEventListener('click', () => {
        card.classList.remove('upper__card');
        card.classList.add('down__card');
      })

      let array = [];

      for (let i = 1; i <= cardsArray.length / 2; i++) {
        array.push(i);
        array.push(i);
      }

      for (let x = 1; x < array; i++) {
        const back = document.getElementsByClassName('down__card');
        back.textContent = x;
        console.log(x)
      }
    }

  }










  window.createApp = createApp;
})();
