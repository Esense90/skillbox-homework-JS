let studentsArr = [{
        surname: 'Петров',
        fName: 'Петр',
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

const form = document.getElementById('form');
const btnSub = document.getElementById('btnSub');
const errorWrapper = document.getElementById('errorWrapper');
const table = document.getElementById('table');
const tbody = document.getElementById('tbody');
const filter = document.getElementById('filter');

function inputsForm() {
    let surname = document.getElementById('surname');
    let fName = document.getElementById('fName');
    let patronymic = document.getElementById('patronymic');
    let birth = document.getElementById('birth');
    let sEducation = document.getElementById('sEducation');
    let faculty = document.getElementById('faculty');

    return {
        surname,
        fName,
        patronymic,
        birth,
        sEducation,
        faculty
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

    studentsArr.push(student);
    console.log(studentsArr);
};




btnSub.addEventListener('click', (e) => {
    e.preventDefault();



})
