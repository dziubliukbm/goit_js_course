// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const deliverCountry = prompt('Enter your country').toLocaleLowerCase();
console.log(deliverCountry);
let deliveryPrice;

const priceForChina = 100;
const priceForChili = 250;
const priceForAustralia = 170;
const priceForIndia = 80;
const priceForYamayka = 120;

switch (deliverCountry) {
  case 'china':
    deliveryPrice = priceForChina;
    alert(`Доставка в ${deliverCountry} будет стоить ${deliveryPrice} кредитов`);
    break;
  case 'chili':
    deliveryPrice = priceForChili;
    alert(`Доставка в ${deliverCountry} будет стоить ${deliveryPrice} кредитов`);
    break;
  case 'australia':
    deliveryPrice = priceForAustralia;
    alert(`Доставка в ${deliverCountry} будет стоить ${deliveryPrice} кредитов`);
    break;
  case 'india':
    deliveryPrice = priceForIndia;
    alert(`Доставка в ${deliverCountry} будет стоить ${deliveryPrice} кредитов`);
    break;
  case 'yamayka':
    deliveryPrice = priceForYamayka;
    alert(`Доставка в ${deliverCountry} будет стоить ${deliveryPrice} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
    break;
}
