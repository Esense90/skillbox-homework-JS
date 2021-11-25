(() => {

  let studentsArray = [];

  function createForm() {
    const form = document.createElement('form');
    const fName = document.createElement('input');
    const dBirth = document.createElement('input');
    const dLearning = document.createElement('input');
    const faculty = document.createElement('input');
    const button = document.createElement('button');

    fName.type = 'text';
    dBirth.type = 'text';
    dLearning.type = 'number';

    function focus() {
      dBirth.addEventListener('focus', () => {
        dBirth.type = 'date';
        dBirth.addEventListener('blur', () => {
          dBirth.type = 'text';
        })
      })
    }
    focus();

    fName.placeholder = 'ФИО студента';
    dBirth.placeholder = 'Дата рождения';
    dLearning.placeholder = 'Год начала обучения';
    faculty.placeholder = 'Факультет';

    form.classList = "form";
    fName.classList = "full__name, field";
    dBirth.classList = "date__birth, field";
    dLearning.classList = "date__start-training, field";
    faculty.classList = "faculty, field";
    button.classList = "button";

    button.textContent = "Добавить студента";

    form.append(fName, dBirth, dLearning, faculty, button);
    document.getElementById('formWrapper').append(form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fields = form.querySelectorAll('.field')
      const errors = form.querySelectorAll('.error')

      for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
      }

      for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
          console.log('field is blank', fields[i])
          const error = document.createElement('div')
          error.className = 'error'
          error.style.color = 'red'
          error.innerHTML = 'Cannot be blank'
          form.append(error)
        }
      }

    });
  };

  createForm(document.getElementById('formWrapper'))
})();
