    let studentsArr = [{
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

    function inputs() {
        const fName = document.getElementById('fName');
        const name = document.getElementById('name');
        const sName = document.getElementById('sName');
        const birth = document.getElementById('birth');
        const sEducation = document.getElementById('sEducation');
        const faculty = document.getElementById('faculty');
        const btnSub = document.getElementById('btnSub');
        const form = document.getElementById('form');

        return {
            fName,
            name,
            sName,
            birth,
            sEducation,
            faculty,
            btnSub,
            form
        }
    };

    let inputForm = inputs();


    inputForm.btnSub.addEventListener('click', (e) => {
        e.preventDefault();

        let dateArr = String(inputForm.birthValue);

        let student = {
            fName: inputForm.fName.value.trim(),
            name: inputForm.name.value.trim(),
            sName: inputForm.sName.value.trim(),
            birth: new Date(dateArr[0] - dateArr[2] - dateArr[3]),
            sEducation: inputForm.sEducation.value.trim(),
            faculty: inputForm.faculty.value.trim()
        };

        studentsArr.push(student);

    })
