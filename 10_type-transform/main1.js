let studentsArr = [{
        surname: 'Петров',
        fName: 'Петр',
        patronymic: 'Сергеевич',
        birth: new Date('2000-5-14'),
        sEducation: '2019',
        faculty: 'МКиС',
    },
    {
        surname: 'Кушаков',
        fName: 'Антон',
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
        sEducation: '2021',
        faculty: 'ТПМ',
    },
]

const form = document.getElementById('form');
let btnSub = document.getElementById('btnSub');
const errorsWrapper = document.getElementById('errorsWrapper');
let span = document.createElement('span');
// let spanBirth = document.createElement('span');
// let spanEducat = document.createElement('span');
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

function inputsValue() {
    let surnameVal = surname.value;
    let fNameVal = fName.value;
    let patronymicVal = patronymic.value;
    let birthVal = birth.value;
    let sEducationVal = sEducation.value;
    let facultyVal = faculty.value;

    return {
        surnameVal,
        fNameVal,
        patronymicVal,
        birthVal,
        sEducationVal,
        facultyVal
    }
}
let inputsVal = inputsValue();


const addNewStudent = () => {
    let dateArr = String(birth.value.trim());
    let student = {
        surname: inputForm.surname.value.trim(),
        fName: inputForm.fName.value.trim(),
        patronymic: inputForm.patronymic.value.trim(),
        birth: new Date(dateArr),
        sEducation: inputForm.sEducation.value.trim(),
        faculty: inputForm.faculty.value.trim()
    };
    return student
};
let inputs = addNewStudent();


function addStudentToTable(student) {
    const StudyYears = 4;

    let course = (year) => {
        let nowYear = new Date().getFullYear();
        let nowMonth = new Date().getMonth() + 1;
        if (nowYear - year > 4 || (nowYear - year === StudyYears && nowMonth > 8)) {
            return 'закончил';
        } else {
            return `${nowYear - year} курс`;
        }
    }

    let birth = () => {
        let birth = new Date(student.birth);
        let year = birth.getFullYear();
        let month = birth.getMonth() + 1 < 10 ?
            '0' + String(birth.getMonth() + 1) :
            birth.getMonth() + 1;

        let day = birth.getDate() < 10 ?
            '0' + String(birth.getDate()) :
            birth.getDate();

        let getAge = (birth) => {
            let now = new Date();
            let age = now.getFullYear() - birth.getFullYear();
            return now.setFullYear(1972) < birth.setFullYear(1972) ? age - 1 : age;
        };

        return `${day}.${month}.${year} (${getAge(birth)} лет)`;
    }

    let tr = document.createElement('tr');

    let newStudent = {
        surname: `${student.surname} ${student.fName} ${student.patronymic}`,
        birth: birth(),
        sEducation: `${student.sEducation} - ${Number(student.sEducation) + StudyYears} (${course(student.sEducation)})`,
        faculty: student.faculty
    };

    for (let data of Object.values(newStudent)) {
        let td = document.createElement('td');
        td.textContent = data;
        tr.append(td);
    }

    return tr;
};

function createTableBody() {
    let tbody;
    let td;

    if (document.querySelector('.tbody')) {
        tbody = document.querySelector('.tbody')
        tbody.innerHTML = '';
    } else {
        tbody = document.createElement('tbody');
        tbody.classList.add('tbody');
    }

    for (const student of studentsArr) {
        td = addStudentToTable(student);
        tbody.append(td);
    }
}
createTableBody();





function validateForm() {

    let validateVal = (inputForm.surname.value && inputForm.fName.value && inputForm.patronymic.value && inputForm.birth.value && inputForm.sEducation.value && inputForm.faculty.value) ?
        false : true;

    return validateVal;
};

function validateDates() {

    let validDates = (new Date(inputForm.birth.valueAsDate) < new Date('01-01-1900') || new Date(inputForm.birth.valueAsDate) > new Date()) ?
        false : true;

    return validDates;
}

function validateBirth() {

    let validBirth = (inputForm.sEducation.value < new Date(2000) || inputForm.sEducation.value > new Date().getFullYear()) ?
        false : true;

    return validBirth;
}
let validBirth = validateBirth();



btnSub.addEventListener('click', (e) => {
    e.preventDefault();
    let validateDate = validateDates();
    let validResult = validateForm();
    let validBirth = validateBirth();


    if (validResult == true) {
        span.innerHTML = "Заполните все поля!";
        errorsWrapper.append(span);
    } else if (validateDate == false) {
        span.innerHTML = "Введите коректную дату рождения (от 01-01-1900 до сегодня)!";
        errorsWrapper.append(span);
    } else if (validBirth == false) {
        span.innerHTML = "Введите коректную дату начала обучения (от 2000г - до сегодня)!";
        errorsWrapper.append(span);
    } else {
        span.innerHTML = "";
        studentsArr.push(addNewStudent());
        form.reset();
        createTableBody(studentsArr);
    }

})
