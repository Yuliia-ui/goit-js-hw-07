const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

categories.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${element.lastElementChild.children.length}`,
  );
});
