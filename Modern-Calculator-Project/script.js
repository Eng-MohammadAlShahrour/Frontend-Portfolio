
function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
  }
  
  function deleteLastCharacter() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.toString().slice(0, -1);
  }
  

  function appendDot() {
    document.getElementsByName('display')[0].value += '.';
  }
  

  function appendOperator(operator) {
    document.getElementsByName('display')[0].value += operator;
  }
  

  function appendDigit(digit) {
    document.getElementsByName('display')[0].value += digit;
  }
  
  function calculateResult() {
    var display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
  }
  