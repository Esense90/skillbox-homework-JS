(() => {
    let studentsArrow = [{
            fName: 'Петров',
            name: 'Иван',
            sName: 'Сергеевич',
            birth: new Date('2000-5-14'),
            sEducation: '2015',
            faculty: 'МКиС',
        },
        {
            fName: 'Кушаков',
            name: 'Петр',
            sName: 'Иванович',
            birth: new Date('2002-7-21'),
            sEducation: '2017',
            faculty: 'ЖБК',
        },
        {
            fName: 'Андрейченко',
            name: 'Максим',
            sName: 'Олегович',
            birth: new Date('2006-2-26'),
            sEducation: '2012',
            faculty: 'ТПМ',
        },
    ]

    function createContainer() {
        const form = document.createElement('form');
        const fName = document.createElement('input');
        const name = document.createElement('input');
        const sName = document.createElement('input');
        const dBirth = document.createElement('input');
        const dLearning = document.createElement('input');
        const faculty = document.createElement('input');
        const button = document.createElement('button');

        fName.type = 'text';
        name.type = 'text';
        sName.type = 'text';
        dBirth.type = 'date';
        dLearning.type = 'number';

        fName.placeholder = 'Фамилия';
        name.placeholder = 'Имя';
        sName.placeholder = 'Отчество'
        dBirth.placeholder = 'Дата рождения';
        dLearning.placeholder = 'Год начала обучения';
        faculty.placeholder = 'Факультет';

        form.classList = "form";
        fName.classList = "mb-3";
        name.classList = "mb-3";
        sName.classList = "mb-3";
        dBirth.classList = "mb-3";
        dLearning.classList = "mb-3";
        faculty.classList = "mb-3";
        button.classList = "btn, btn-primary";

        button.textContent = "Добавить студента";

        form.style.display = "flex";
        form.style.flexDirection = "column";
        form.style.width = "17%";



        form.append(fName, name, sName, dBirth, dLearning, faculty, button);
        document.getElementById('formWrapper').append(form);

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            studentsArrow.push(fName.value);
            studentsArrow.push(name.value);
            studentsArrow.push(sName.value);

            console.log(studentsArrow);
            form.reset();
        })
    };
    createContainer(document.getElementById('container'))
})();
