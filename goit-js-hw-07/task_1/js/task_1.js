
const list = document.querySelector('#categories');
const listItems = list.querySelectorAll('.item');
listItems.forEach(item => console.log(` Категория: ${item.children[0].textContent} Количество вложенных li: ${item.children[1].childElementCount}`));
