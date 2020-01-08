
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ref = {
  list: document.querySelector('#ingredients'),
};

function createTable(arr, parent) {
  arr.map((e) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.textContent = e;
    ref.list.appendChild(li);
  });
}
createTable(ingredients, ref.list);
