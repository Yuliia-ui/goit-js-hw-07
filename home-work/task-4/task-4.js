let counterValue = 0;
const inputRef = document.querySelector(`button[data-action="decrement]`);
const btnRef = document.querySelector(`button[data-action="increment"]`);
const spanValue = document.querySelector('#value');

function increment() {
  spanValue += 1;
  spanValue.textContent = counterValue;
}
function decrement() {
  spanValue -= 1;
  spanValue.textContent = counterValue;
}

inputRef.addEventListener('click', decrement);
btnRef.addEventListener('click', increment);
