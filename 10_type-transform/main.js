    let studentsArr = [{
            surname: 'Петров',
            fName: 'Иван',
            patronymic: 'Сергеевич',
            birthDate: new Date('2000-5-14'),
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



    btnSub.addEventListener("click", (e) => {
        e.preventDefault();

        validateForm();







    });
