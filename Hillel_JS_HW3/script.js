let operator = '';
let a = '';
let b = '';

do {
  operator = getOperator();
} while (operator === false);

do {
  a = getOperand('Введите первое число');
} while (a === false);

do {
  b = getOperand('Введите второе число');
} while (b === false);

let result = calculate(a, b, operator);


function getOperator() {
  const operator = prompt('Введите символы + - / *');
  if (
    operator == '+' ||
    operator == '-' ||
    operator == '/' ||
    operator == '*'
  ) {
    return operator;
  }
  return false;
}

function getOperand(message) {
  const operand = +prompt(message);
  if (operand && !isNaN(operand)) {
    return operand;
  }
  return false;
}

function calculate(a, b, operator) {
  let result = '';
  switch (operator) {
    case '+':
      result = alert(`${a} ${operator} ${b} = ${a + b}`);
      break;
    case '-':
      result = alert(`${a} ${operator} ${b} = ${a - b}`);
      break;
    case '*':
      result = alert(`${a} ${operator} ${b} = ${a * b}`);
      break;
    case '/':
      result = alert(`${a} ${operator} ${b} = ${a / b}`);
      break;
  }
  return result;
}
