
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

const findLongestWord = function (string) {
  const wordsArray = string.split(' ');
  let longestWord;
  let temp = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > temp) {
      temp = wordsArray[i].length;
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
  // console.log(`this is${longestWord}`);
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
