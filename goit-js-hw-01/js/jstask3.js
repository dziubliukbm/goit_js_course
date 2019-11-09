const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const password = prompt('enter the password');

password === null
  ? alert('Отменено пользователем!')
  : password === ADMIN_PASSWORD
    ? alert('Добро пожаловать!')
    : alert('Доступ запрещен, неверный пароль!');
