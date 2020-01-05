/*
  Напиши функцию countTotalSalary(salaries).

  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.

  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

const countTotalSalary = function (salaries) {
  let total = 0;
  for (const salary in salaries) {
    console.log('this is', salaries[salary]);
    total += salaries[salary];
  }
  return total;
};

// Вызовы функции для проверки
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
