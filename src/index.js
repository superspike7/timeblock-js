import "./style.css"

"use strict";

function TimeBlock(options){

    this.wakingHour = options.wakingHour || 5;
    this.sleepingHour = options.sleepingHour || 21;

};

TimeBlock.prototype.range = function() {
      let first = Number(this.wakingHour);
      let last = Number(this.sleepingHour);
      let arr = [];
      for(let i = first; i <= last; i++){
        arr.push(i);
      }
      return arr;
};


var test = new TimeBlock({});
console.log(test.range());

