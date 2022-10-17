'use strict';
class Calculator {
  operation;
  value;
  constructor(val = 0.0){
    this.value = val;
    this.operation = null;
  }
  oper(arg){
    if (arg == 'null') { this.operation = null; }
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
let dispVal = calc.value;
const btns = document.querySelectorAll('button');
const display = document.getElementsByClassName("display")[0];

for (let item of btns) {
  if (item.classList.contains("oper")) {
    item.addEventListener("click", clickOper);
  }
  else if (item.classList.contains("option")) {
    item.addEventListener("click", clickOption);
  }
  else {
  item.addEventListener('click', clickNum);
  }
}
function updateDisplay(val) {
  dispVal = 0;
  if (String(val).length > 10){
    display.textContent = Math.round((val + Number.EPSILON) * 1e8) / 1e8;
  }
  else {
    display.textContent = val;
  }    
}
function clickNum(e) {
  let val = e.target.value;
  if (String(dispVal).length > 8 && dispVal != 0) {return}
  dispVal *= 10;
  dispVal += Number(val)
  display.textContent = dispVal;
}
function clickOper(e) {
  let oper = e.target.value;
  calc.update(dispVal);
  calc.oper(oper);
  updateDisplay(calc.value);
}
function clickOption(e) {
  let opt = e.target.value;
  if (opt == "Clear") {
    calc = new Calculator();
    updateDisplay(0);
  }
  if (opt == "Equals") {
    if (calc.operation == 'null') { return; }
    calc.update(dispVal);
    updateDisplay(calc.value);
    dispVal = calc.value;
    calc = new Calculator(calc.value);
  }
  if (opt == "Delete") {
    dispVal -= dispVal % 10;
    dispVal /= 10;
    updateDisplay(dispVal);
  }
  if (opt == "+/-") {
    dispVal *= -1;
    updateDisplay(dispVal);
  }
}
