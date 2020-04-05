let letters = '';

//counter function receives one argument and outputs that argument to input element with id of counterNum
function counter(val) {
  document.getElementById('counterNum').value = val;
}

//change function store input element value to letters string and calls counter function with length of letters string as an argument
function change() {
  letters = document.getElementById('textField').value;
  counter(letters.length);
}
