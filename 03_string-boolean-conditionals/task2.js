let name = 'коНСТАнтиН';
let surname = 'оЛеГОвиЧ';

let correct_name = ((name.substr(0, 1)).toUpperCase()) + ((name.substr(1)).toLowerCase());
let correct_surname = ((surname.substr(0, 1)).toUpperCase()) + ((surname.substr(1)).toLowerCase());

console.log(`${correct_name} \n${correct_surname}`);

name === correct_name ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
surname === correct_surname ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была преобразована');
