const firstNumbEl = document.getElementById('firstNumb');
const secndNumbEl = document.getElementById('secndNumb');
let result = document.getElementById('result');
const buttonEl = document.getElementById('actionBtn');
const errorMsgEL = document.getElementById ('errorMsg');

buttonEl.addEventListener('click', showResult);

function showResult() {
  result.textContent = calculate();
}

function calculate() {
  return +firstNumbEl.value + +secndNumbEl.value;
}

function isOperandInvalid(value) {
  return value === '' && value === null;
}
