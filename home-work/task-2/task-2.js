const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const items = ingredients.map(item => {
  const element = document.createElement('li');
  element.textContent = item;
  return element;
});

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...items);
