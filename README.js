function add() {
  var firstNumber = parseFloat(document.getElementById("firstNumber").value);
  var secondNumber = parseFloat(document.getElementById("secondNumber").value);
  var result = firstNumber + secondNumber;
  document.getElementById("result").value = result;
}

function subtract() {
  var firstNumber = parseFloat(document.getElementById("firstNumber").value);
  var secondNumber = parseFloat(document.getElementById("secondNumber").value);
  var result = firstNumber - secondNumber;
  document.getElementById("result").value = result;
}

function multiply() {
  var firstNumber = parseFloat(document.getElementById("firstNumber").value);
  var secondNumber = parseFloat(document.getElementById("secondNumber").value);
  var result = firstNumber * secondNumber;
  document.getElementById("result").value = result;
}

function divide() {
  var firstNumber = parseFloat(document.getElementById("firstNumber").value);
  var secondNumber = parseFloat(document.getElementById("secondNumber").value);
  var result = firstNumber / secondNumber;
  document.getElementById("result").value = result;
}
