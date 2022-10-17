'use strict';
class Calculator {
  operation;
  value;

  constructor(){
    this.value = 0.0;
    this.operation = null;
  }

  oper(arg){
    this.operation = String(arg);
  }

  update(arg){
    if (this.operation == null){
      this.value = Number(arg);
    }
    else {
    this.value = this.calculate(this.value, Number(arg), this.operation)
    }
  }

  get value(){
    return this.value
  }

  calculate(a, b, operation){
    switch(operation){
      case 'add':
        return a + b;
      case 'sub':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
  }
}

let calc = new Calculator();
const btns = document.querySelectorAll('button');
const display = document.getElementsByClassName("display");

for (let item of btns) {
  if (item.classList.contains("oper")) {
    item.addEventListener("click", clickOper);
  }
  else if (item.classList.contains("options")) {
    item.addEventListener("click", clickOption);
  }
  else {
  item.addEventListener('click', clickNum);
  }
}

function clickOper(e) {
  let oper = e.target.value;
  calc.oper(oper);
  document.querySelectorAll('.display').innerText = calc.value;
}
function clickOption(e) {
  let opt = e.target.value;

}
function clickNum(e) {
  let val = e.target.value;
  calc.update(val)
  display.textContent = calc.value;
}