/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const findBestEmployee = (obj) => {
  const entries = Object.entries(obj);
  // console.log(entries);
  let [name, tasks] = ['', 0];
  for (const value of entries) {
    // console.log(value);
    [name, tasks] = value[1] > tasks ? [value[0], value[1]] : [name, tasks];
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
