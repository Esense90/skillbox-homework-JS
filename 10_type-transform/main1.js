let studentsArr = [{
        surname: 'Петров',
        fName: 'Иван',
        patronymic: 'Сергеевич',
        birth: new Date('2000-5-14'),
        sEducation: '2015',
        faculty: 'МКиС',
    },
    {
        surname: 'Кушаков',
        name: 'Петр',
        patronymic: 'Иванович',
        birth: new Date('2002-7-21'),
        sEducation: '2017',
        faculty: 'ЖБК',
    },
    {
        surname: 'Андрейченко',
        fName: 'Максим',
        patronymic: 'Олегович',
        birth: new Date('2006-2-26'),
        sEducation: '2012',
        faculty: 'ТПМ',
    },
]

function inputsForm() {
    const surname = document.getElementById('surname');
    const fName = document.getElementById('fName');
    const patronymic = document.getElementById('patronymic');
    const birth = document.getElementById('birth');
    const sEducation = document.getElementById('sEducation');
    const faculty = document.getElementById('faculty');
    const btnSub = document.getElementById('btnSub');
    const form = document.getElementById('form');
    const fields = form.querySelectorAll('.form__input');
    const label = form.querySelectorAll('.label')
    const table = document.getElementById('table');

    return {
        surname,
        fName,
        patronymic,
        birth,
        sEducation,
        faculty,
        btnSub,
        form,
        fields,
        label,
        table
    }
};
let inputForm = inputsForm();

function addStudent() {
    let dateArr = String(birth.value.trim());

    let student = {
        surname: inputForm.surname.value.trim(),
        fName: inputForm.fName.value.trim(),
        patronymic: inputForm.patronymic.value.trim(),
        birth: new Date(dateArr),
        sEducation: inputForm.sEducation.value.trim(),
        faculty: inputForm.faculty.value.trim()
    };
    return student;
};
let student = addStudent();

function studentsTable() {
    let rowHeader = table.insertRow();
    for (let prop in studentsArr[0]) {
        let cell = rowHeader.insertCell();
        cell.innerText = prop;
        console.log(prop);
    }

    for (let i = 0; i < studentsArr.length; i++) {
        let row = table.insertRow();
        for (let prop in studentsArr[i]) {
            let cell = row.insertCell();
            cell.innerText = studentsArr[i][prop];
        }
    }
};
studentsTable();


btnSub.addEventListener('click', () => {

})