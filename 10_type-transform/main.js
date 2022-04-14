    // let studentsArr = [{
    //         surname: 'Петров',
    //         fName: 'Иван',
    //         patronymic: 'Сергеевич',
    //         birthDate: new Date('2000-5-14'),
    //         sEducation: '2015',
    //         faculty: 'МКиС',
    //     },
    //     {
    //         surname: 'Кушаков',
    //         name: 'Петр',
    //         patronymic: 'Иванович',
    //         birth: new Date('2002-7-21'),
    //         sEducation: '2017',
    //         faculty: 'ЖБК',
    //     },
    //     {
    //         surname: 'Андрейченко',
    //         fName: 'Максим',
    //         patronymic: 'Олегович',
    //         birth: new Date('2006-2-26'),
    //         sEducation: '2012',
    //         faculty: 'ТПМ',
    //     },
    // ]



    let studentsArr = [];



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

        studentsArr.push(student);
        addStudentToTable(student);
        console.log(studentsArr);
        form.reset();
    };


    function validateForm() {

        let dateArr = String(birth.value.trim());

        for (var i = 0; i < inputForm.fields.length; i++) {

            if (!inputForm.fields[i].value) {
                inputForm.label[i].innerHTML = 'Заполните поле';
                inputForm.label[i].classList.add('invalid');
            } else {
                inputForm.label[i].innerHTML = '',
                    inputForm.label[i].classList.remove('invalid')
            };
            if (new Date(dateArr) <= new Date('01-01-1900')) {
                document.querySelector('label[for="birth"]').innerHTML = 'Дата от 01-01-1900 до сегодня';
                document.querySelector('label[for="birth"]').classList.add('invalid');
            } else if (inputForm.sEducation.value < 2000) {
                document.querySelector('label[for="sEducation"]').innerHTML = 'Год от 2000 до сегодня';
                document.querySelector('label[for="sEducation"]').classList.add('invalid');
            } else if (inputForm.sEducation.value > new Date().getFullYear()) {
                document.querySelector('label[for="sEducation"]').innerHTML = 'Год от 2000 до сегодня';
                document.querySelector('label[for="sEducation"]').classList.add('invalid');
            }
        }

        if (document.querySelector('label[for="surname"]').classList.contains('invalid')) {

        } else if (document.querySelector('label[for="fName"]').classList.contains('invalid')) {

        } else if (document.querySelector('label[for="patronymic"]').classList.contains('invalid')) {

        } else if (document.querySelector('label[for="birth"]').classList.contains('invalid')) {

        } else if (document.querySelector('label[for="sEducation"]').classList.contains('invalid')) {

        } else if (document.querySelector('label[for="faculty"]').classList.contains('invalid')) {

        } else(addStudent());
    };



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
        let tbody = document.querySelector('tbody');

        let newStudent = {
            fullName: `${student.surname} ${student.fName} ${student.patronymic}`,
            birth: birth(),
            startDate: `${student.sEducation} - ${Number(student.sEducation) + StudyYears} (${course(student.sEducation)})`,
            faculty: student.faculty
        };

        for (let data of Object.values(newStudent)) {
            let td = document.createElement('td');
            td.textContent = data;
            tr.append(td);
            tbody.append(tr);
        }

        return tr;
    };


    function sortArr() {

        let sortBtn = document.querySelectorAll('.sort');

        sortBtn.forEach(function(btnClick) {

            btnClick.addEventListener('click', () => {

                let sortedRows = Array.from(inputForm.table.rows)
                    .slice(1)
                    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

                inputForm.table.tBodies[0].append(...sortedRows);
            })
        })
    }
    sortArr();


    btnSub.addEventListener("click", (e) => {
        e.preventDefault();

        validateForm();



    });
