const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  event.target.value.length === Number(inputRef.dataset.length)
    ? inputRef.setAttribute('class', 'valid')
    : inputRef.setAttribute('class', 'invalid');
});
console.log(inputRef);
