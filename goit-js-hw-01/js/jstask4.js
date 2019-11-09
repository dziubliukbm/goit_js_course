const credits = 23580;
const pricePerDroid = 3000;

const droidQuery = prompt('make your order');
if (droidQuery === null) {
  alert('Отменено пользователем!');
} else {
  const totalPrice = pricePerDroid * droidQuery;
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    const balance = credits - totalPrice;
    console.log(`Вы купили  ${droidQuery}, на счету осталось ${balance} кредитов`);
  }
}
