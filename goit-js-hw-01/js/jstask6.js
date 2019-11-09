let input;
let total = 0;

while (true) {
  input = prompt('Введите число больше нуля');
  if (input === null) {
    break;
  }
  input = Number(input);

  if (input <= 0) {
    break;
  }

  total += input;
}

console.log(`Общая сумма чисел равна ${total}`);
