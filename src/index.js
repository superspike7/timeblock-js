import "./style.css"

"use strict";

function TimeBlock(options){

    this.wakingHour = options.wakingHour || 5;
    this.sleepingHour = options.sleepingHour || 21;

    this.timeRange = () => {
      let arr = [];
      for(let i = this.wakingHour; i <= this.sleepingHour; i++){
        arr.push(i);
      }
      return arr;
    }
 
};



