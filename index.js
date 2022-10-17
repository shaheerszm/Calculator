'use strict';
class Calculator {
  operation;
  value;

  constructor(){
    this.value = 0;
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



