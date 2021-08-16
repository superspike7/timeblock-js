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

const TimeBlockComponent = () => {
  const grid = document.createElement('div');
  const time = document.createElement('div');

  grid.classList.add('grid', 'lg:grid-cols-4', 'lg:w-1/2', 'mx-auto', 'bg-gray-200');
  time.classList.add('bg-blue-500', 'text-white', 'col-span-2', 'row-start-1');

  const setRowTemplate = n => { grid.classList.add(`lg:grid-rows-${n * 2}`)};

  return {
    grid,
    setRowTemplate
  };

};

document.body.appendChild(TimeBlockComponent.grid);
TimeBlockComponent.setRowTemplate(test.range().length);