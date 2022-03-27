const calc = prompt('+ - / *');
const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');

if (!isNaN(a) && !isNaN(b)) {
  switch (calc) {
    case '+':
      alert(`${a} ${calc} ${b} = ${a + b}`);
      break;
    case '-':
      alert(`${a} ${calc} ${b} = ${a - b}`);
      break;
    case '*':
      alert(`${a} ${calc} ${b} = ${a * b}`);
      break;
    case '/':
      alert(`${a} ${calc} ${b} = ${a / b}`);
      break;

    default:
      alert('Введите символы + - / *');
      break;
  }
} else {
  alert('Введите ЧИСЛО!');
}
