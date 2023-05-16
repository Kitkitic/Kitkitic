1. Функция, складывающая два числа и возвращающая результат:

function addNumbers(a, b) {
  return a + b;
}


2. Функция, определяющая, является ли заданное число простым (т.е. имеет только два делителя: 1 и само число):

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}


3. Функция, получающая массив и возвращающая его отсортированную копию:

function sortArray(array) {
  return array.slice().sort();
}


4. Функция, принимающая строку и возвращающая её в обратном порядке:

function reverseString(string) {
  return string.split('').reverse().join('');
}


5. Функция, проверяющая, является ли заданное слово палиндромом (т.е. читается одинаково как слева направо, так и справа налево):

function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}
