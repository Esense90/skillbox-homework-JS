    let studentsArr = [{
            surname: 'Петров',
            fName: 'Иван',
            patronymic: 'Сергеевич',
            birthDate: new Date('2000-5-14'),
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
            label
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

    function validateForm() {
        let errors = form.querySelectorAll('.error')
        let dateArr = String(birth.value.trim());


        for (let i = 0; i < errors.length; i++) {
            errors[i].remove()
        }

        for (var i = 0; i < inputForm.fields.length; i++) {

            if (!inputForm.fields[i].value) {
                inputForm.label[i].innerHTML = 'Заполните поле';
            } else(
                inputForm.label[i].innerHTML = '');

            if (new Date(dateArr) <= new Date('01-01-1900')) {
                document.querySelector('label[for="birth"]').innerHTML = 'Дата от 01-01-1900 до сегодня';
            } else if (inputForm.sEducation.value < 2000) {
                document.querySelector('label[for="sEducation"]').innerHTML = 'Год от 2000 до сегодня';
            } else if (inputForm.sEducation.value > new Date().getFullYear()) {
                document.querySelector('label[for="sEducation"]').innerHTML = 'Год от 2000 до сегодня';
            }
        }
    }



    btnSub.addEventListener("click", (e) => {
        e.preventDefault();

        validateForm();

    });
