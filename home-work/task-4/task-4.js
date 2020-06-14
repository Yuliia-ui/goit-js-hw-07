let counterValue = 0;
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]',
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]',
);

const spanValue = document.querySelector('#value');

buttonIncrement.addEventListener('click', e => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});

buttonDecrement.addEventListener('click', e => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});
