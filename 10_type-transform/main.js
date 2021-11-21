(() => {

  let studentsArray = [];










  function createForm() {
    const form = document.createElement('form');
    const fullName = document.createElement('input');
    const dateBirth = document.createElement('input');
    const dateStartTraining = document.createElement('input');
    const faculty = document.createElement('input');
    const button = document.createElement('button');

    fullName.type = 'text';
    dateBirth.type = 'text';
    dateStartTraining.type = 'number';

    function focus() {
      dateBirth.addEventListener('focus', () => {
        dateBirth.type = 'date';
        dateBirth.addEventListener('blur', () => {
          dateBirth.type = 'text';
        })
      })
    }
    focus();

    fullName.placeholder = 'ФИО студента';
    dateBirth.placeholder = 'Дата рождения';
    dateStartTraining.placeholder = 'Год начала обучения';
    faculty.placeholder = 'Факультет';

    form.classList = "form";
    fullName.classList = "full__name";
    dateBirth.classList = "date__birth";
    dateStartTraining.classList = "date__start-training";
    faculty.classList = "faculty";
    button.classList = "button";

    button.textContent = "Добавить студента";

    form.append(fullName, dateBirth, dateStartTraining, faculty, button);
    document.getElementById('formWrapper').append(form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
    })
  };

  createForm(document.getElementById('formWrapper'))
})();
