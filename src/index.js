import "./style.css"

"use strict";

const timeBlock = (wakeTime, sleepTime) => {

  const range = () => {
    let arr = [];
    for(let i = Number(wakeTime); i <= Number(sleepTime); i++) {
      arr.push(i);
    }
    return arr;
  };

  const component = () => { 
    return timeBlockComponent(range());
  };

  return {
    component
  };
  
};


const timeBlockComponent = (range) => {
  const grid = document.createElement('div');

  const setRowTemplate = () => { 
    grid.classList.add('grid', 'gap-px', 'grid-cols-1', 'bg-gray-200');
  }; 

  const setTimes = () => {
    range.forEach( n => {
      const time = document.createElement('div');
      time.innerHTML = n;
      time.classList.add('bg-gray-800',
                         'text-gray-100', 'col-span-1',
                         'col-span-1', 'h-56', 'flex',
                         'items-center', 'justify-center',
                         'text-7xl');
      grid.appendChild(time);
    });
  }; 

  setRowTemplate();
  setTimes();


  return {
    grid
  };

};

const taskComponent = () => {
  const taskGrid = document.createElement('div');
  taskGrid.classList.add('bg-gray-400','border-blue-500',
                         'h-10', 'col-start-2', 'col-span-3',
                         'gap-px', 'grid');

  const createTask = (height, width) => {
    const task = document.createElement('div');
    task.classList.add('bg-blue-300');
    task.classList.add(`h-${height}`, `w-${width}`);
    taskGrid.appendChild(task);
  }


  createTask("1h", "full");
  createTask("10m", "1/2");
  createTask("1h", "1/2");
  createTask("1h", "full");

  return {
    taskGrid
  };

};

var test = timeBlock(4, 21);
document.querySelector('.main-grid').appendChild(test.component().grid);
document.querySelector('.main-grid').appendChild(taskComponent().taskGrid);

