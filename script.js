'use strict';
const Operator = (function() {
  function Accumulate(init, acc, name) {
    this.init = init;
    this.acc = acc;
    this.name = (this.name === 'undefined' || this.name instanceof String) ?
    console.error(`${this.name} is curretly undefined or is not a String.`) : name;
    this.array = [];
    this.convert(this.result);
  }
  Accumulate.prototype = {
    convert: function(callback) {
      let bind = callback.bind(this),
          getStyle = window.getComputedStyle(this.init),
          getValue = getStyle.getPropertyValue(this.name),
          S2N = parseInt(getValue, 10);
      bind(S2N);
    },
    result: function(initVal) {
      let getNewValue = initVal + this.acc;
      this.init.style.top = getNewValue + 'px';
    }
  }
  return {
    assemble: (init, acc, name) => {
      new Accumulate(init, acc, name);
    }
  }
}());

let target = document.querySelector('.text');
setInterval(() => {
  Operator.assemble(target, 20, 'top');
}, 1000);
