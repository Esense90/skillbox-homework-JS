(() => {

  const form = document.createElement('form');
  const fName = document.createElement('input');
  const dBirth = document.createElement('input');
  const dLearning = document.createElement('input');
  const faculty = document.createElement('input');
  const button = document.createElement('button');



  let studentsArray = [];







  function createForm() {
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
    fName.classList = "full__name";
    dBirth.classList = "date__birth";
    dLearning.classList = "date__start-training";
    faculty.classList = "faculty";
    button.classList = "button";

    button.textContent = "Добавить студента";

    form.append(fName, dBirth, dLearning, faculty, button);
    document.getElementById('formWrapper').append(form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
    })
  };

  createForm(document.getElementById('formWrapper'))
})();
