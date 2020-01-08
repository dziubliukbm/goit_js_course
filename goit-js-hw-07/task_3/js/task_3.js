
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ref = {
  list: document.querySelector('#gallery'),
};
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

const elements = images.map((e, i) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('alt', images[i].alt);
  img.setAttribute('src', images[i].url);
  ref.list.insertAdjacentElement('afterend', img);
});
// ref.list.insertAdjacentElement('afterend', ...elements);
// const img = document.createElement('img');
// img.setAttribute('alt', images[0].alt);
// img.setAttribute('src', images[0].url);
// ref.list.insertAdjacentElement('afterend', img);
