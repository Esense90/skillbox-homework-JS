let studentsArr = [{
        surname: 'Петров',
        fName: 'Петр',
        patronymic: 'Сергеевич',
        birth: new Date('2000-5-14'),
        sEducation: '2019',
        faculty: 'Математики',
    },
    {
        surname: 'Кушаков',
        fName: 'Антон',
        patronymic: 'Иванович',
        birth: new Date('2002-7-21'),
        sEducation: '2017',
        faculty: 'Информатики',
    },
    {
        surname: 'Андрейченко',
        fName: 'Максим',
        patronymic: 'Олегович',
        birth: new Date('2006-2-26'),
        sEducation: '2021',
        faculty: 'Экономики',
    },
]

const form = document.getElementById('form');
let btnSub = document.getElementById('btnSub');
const errorsWrapper = document.getElementById('errorsWrapper');
let span = document.createElement('span');
const btnFilterReset = document.getElementById('btnFilter');
const table = document.getElementById('sortable');
const tbody = document.getElementById('tbody');
const filter = document.getElementById('filter');
const fullnameF = document.getElementById('fullnameF');
const birthF = document.getElementById('birthF');
const sEducationF = document.getElementById('sEducationF');
const facultyF = document.getElementById('facultyF');

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

const addNewStudent = () => {
    let dateArr = String(inputForm.birth.value.trim());
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

function createTableBody(arr) {
    let tbody;
    let td;

    if (document.querySelector('.tbody')) {
        tbody = document.querySelector('.tbody')
        tbody.innerHTML = '';
    } else {
        tbody = document.createElement('tbody');
        tbody.classList.add('tbody');
    }
    for (const student of arr) {
        td = addStudentToTable(student);
        tbody.append(td);
    }
}
createTableBody(studentsArr);

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

const getSort = ({ target }) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);
    const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
    const comparator = (index, order) => (a, b) => order * collator.compare(
        a.children[index].innerHTML,
        b.children[index].innerHTML
    );

    for (const tBody of target.closest('table').tBodies)
        tBody.append(...[...tBody.rows].sort(comparator(index, order)));

    for (const cell of target.parentNode.cells)
        cell.classList.toggle('sorted', cell === target);
};
document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));


function filterFullName() {

    let fullNameInptVal = fullnameF.value;

    let filterValName;

    let filterArr = studentsArr.filter(function(obj) {

        let copyObj = JSON.parse(JSON.stringify(obj));

        filterValName = fullNameInptVal.toLowerCase().split(' ').join('');
        copyObj.fullName = function() {
            let fullName = copyObj.surname + copyObj.fName + ' ' + copyObj.patronymic;
            return fullName.toLowerCase();
        }
        if (copyObj.fullName().includes(filterValName)) {
            return copyObj.fullName();
        }
    });
    createTableBody(filterArr);
    return filterArr;
};

function filterFaculty() {

    let facultyFVal = facultyF.value;

    let filterArr = studentsArr.filter(function(obj) {

        if (obj.faculty.toLowerCase().includes(facultyFVal.toLowerCase()))
            return obj.faculty
    })
    createTableBody(filterArr);
    return filterArr;
};

function filterSeducation() {

    let sEducationFVal = sEducationF.value;

    let filterArr = studentsArr.filter(function(obj) {

        if (obj.sEducation.includes(sEducationFVal))
            return obj.sEducation;
    })

    createTableBody(filterArr);
    return filterArr;
};

// function filterBirth() {

//     let birthFVal = birthF.value;

//     let filterArr = studentsArr.filter(function(obj) {




//     })
//     createTableBody(filterArr);
//     return filterArr;
// }



fullnameF.addEventListener('keyup', () => {
    filterFullName()
})

facultyF.addEventListener('keyup', () => {
    filterFaculty()
})

sEducationF.addEventListener('keyup', () => {
    filterSeducation()
})

// birthF.addEventListener('keyup', () => {
//     filterBirth()
// })



btnSub.addEventListener('click', (e) => {
    e.preventDefault();

    let validateDate = validateDates();
    let validResult = validateForm();
    let validBirth = validateBirth();

    if (validResult == true) {
        span.innerHTML = "Заполните все поля!";
        errorsWrapper.append(span);
        let bordInp = document.querySelectorAll('.form__input');
        for (i of bordInp) {
            i.classList.add('border')
        }
    } else if (validateDate == false) {
        span.innerHTML = "Введите коректную дату рождения (от 01-01-1900 до сегодня)!";
        errorsWrapper.append(span);
    } else if (validBirth == false) {
        span.innerHTML = "Введите коректную дату начала обучения (от 2000г - до сегодня)!";
        errorsWrapper.append(span);
    } else {
        span.innerHTML = "";
        let bordInp = document.querySelectorAll('.form__input');
        for (i of bordInp) {
            i.classList.remove('border')
        }
        studentsArr.push(addNewStudent());
        form.reset();
        createTableBody(studentsArr);
        console.log(studentsArr);
    }

})
