'use strict';
const Operator = (function() {
  function Accumulate(init, acc, name, unit) {
    this.init = document.querySelector(init);
    this.acc = acc;
    this.name = name;
    this.unit = unit;
    this.convert(this.result);
  }
  Accumulate.prototype = {
    convert: function(callback) {
      let defaultDisplay = this.init.style.display;
      this.init.style.display = 'none';
      let bind = callback.bind(this),
          getValues = window.getComputedStyle(this.init, null).getPropertyValue(this.name),
          S2N = parseInt(getValues, 10);
      this.init.style.display = defaultDisplay;
      bind(S2N);
    },
    result: function(value) {
      let getNewValue = value + this.acc;
      this.init.style.left = getNewValue + this.unit;
    }
  }
  return {
    assemble: (init, acc, name, unit) => {
      new Accumulate(init, acc, name, unit);
    }
  }
}());

//==============================================

setInterval(() => {
  Operator.assemble('.content', 10, 'left', '%');
}, 1000);
