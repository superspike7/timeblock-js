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


TimeBlock.prototype.component = function() {
  return timeBlockComponent(this.range());
}

// const timeBlock = (wakeTime, sleepTime) => {

//   const range = () => {
//     let arr = [];
//     for(let i = Number(wakeTime); i <= Number(sleepTime); i++) {
//       arr.push(i);
//     }
//     return arr;
//   };

//   const component = () => { 
//    console.log(TimeBlockComponent(range())) ;

//   };

//   return {
//     range,
//     component
//   };
  
// };


const timeBlockComponent = (range) => {
  const grid = document.createElement('div');

  const setRowTemplate = () => { 
    grid.classList.add('grid', 'lg:grid-cols-4', 'lg:w-1/2', 'mx-auto', 'bg-gray-200');
  }; 

  const setTimes = () => {
    range.forEach( n => {
      const time = document.createElement('div');
      time.innerHTML = n;
      time.classList.add('bg-blue-500', 'text-white', 'col-span-1', 'col-start-1', 'h-20');
      grid.appendChild(time);
    });
  }; 

  setRowTemplate();
  setTimes();


  return {
    grid
  };

};

var test = new TimeBlock({});
document.body.appendChild(test.component().grid);