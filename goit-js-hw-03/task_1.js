// *
//   Напиши скрипт, который, для объекта user, последовательно:

//     - добавляет поле mood со значением 'happy'

//     - заменяет значение hobby на 'javascript'

//     - заменяет значение premium на false

//     - выводит содержимое объекта user в формате ключ:значение
//       используя Object.keys и for...of

//     - выводит содержимое объекта user в формате ключ:значение
//       используя Object.entries и for...of
// */
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
console.log(user.mood);
user.hobby = 'Skydiving';
console.log(user.hobby);
user.premium = false;
console.log(user);

const keys = Object.keys(user);

const entries = Object.entries(user);
console.log('OBject entiries :', entries);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}:${value}`);
}
