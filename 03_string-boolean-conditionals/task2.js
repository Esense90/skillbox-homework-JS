let name = 'консТАНтиН';
let surname = 'оЛегОВич'

// Получаем 1 и последующие строки
let fearstLetterName = name.substr(0, 1);
let nextLetterName = name.substr(1);

let fearstLetterSur = surname.substr(0, 1);
let nextLetterSur = surname.substr(1);

// Преобразуем строки в нужный регистр
let regLetterName = fearstLetterName.toUpperCase();
let regNextLetterName = nextLetterName.toLowerCase();
let regName = regLetterName + regNextLetterName;

let regLetterSur = fearstLetterSur.toUpperCase();
let regNextLetterSur = nextLetterSur.toLowerCase();
let regSur = regLetterSur + regNextLetterSur;

console.log(regName, regSur)

//  Сравниваем и выводим значение "true" или "false"
if (regName !== name && regSur !== surname) {
  console.log('Имя было изменено')
} else {
  console.log('Имя осталось без изменений')
}
