let password = '_-25';

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
  console.log('Пароль надёжный')
} else(console.log('Пароль недостаточно надёжный'))