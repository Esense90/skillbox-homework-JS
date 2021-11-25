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

        button.addEventListener('click', () => {
            if (fName.value.length != 0 || dBirth.value.length != 0 || dLearning.value.length != 0 || faculty.value.length != 0) {
                studentsArray.push(fName.value, dBirth.value, dLearning.value, faculty.value);
            }
            if (fName.value.length <= 0 || dBirth.value.length <= 0 || dLearning.value.length <= 0 || faculty.value.length <= 0) {

            }
            console.log(studentsArray);
        });
    };

    createForm(document.getElementById('formWrapper'))
})();
