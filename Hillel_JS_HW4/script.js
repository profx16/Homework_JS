// -КаHкулятОр-

const operator = getOperator();
const operand = getOperand('Введите числа');

const result = calculate(operand, operator);
showResult(operator, operand, result);

// -Оператор-

function getOperator() {
  let operator = prompt('Введите оператор + - / *');
  while (isOperatorInvalid(operator)) {
    operator = prompt('Ошибка! Введите оператор + - / *');
  }
  return operator;
}

function isOperatorInvalid(value) {
  return value !== '+' && value !== '-' && value !== '/' && value !== '*';
}

// -Операнд-

function getOperand(message) {
  let operand;
  do {
    operand = prompt(message);
  } while (isOperandInvalid(operand));
  return operand.split(',');
}

function isOperandInvalid(value) {
  return value === '' || value === null;
}

// -Вычисления-

function calculate(array, operator) {
  let result = +array[0];
  for (let i = 1; i < array.length; i++) {
    if (operator === '-') {
      result -= +array[i];
    }
    if (operator === '+') {
      result += +array[i];
    }
    if (operator === '*') {
      result *= +array[i];
    }
    if (operator === '/') {
      result /= +array[i];
    }
  }
  return result;
}

// -Результат-

function showResult(operator, operand, result) {
  const expresion = operand.join(` ${operator} `);
  return console.log(expresion + ' = ' + result);
}
