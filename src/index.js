import "./style.css"

"use strict";

const timeBlock = (obj) => {

  const range = () => {
    let arr = [];
    for(let i = Number(obj.wakeTime); i <= Number(obj.sleepTime); i++) {
      arr.push(i);
    }
    return arr;
  };

  const component = () => { 
    return timeBlockComponent(range());
  };

  return {
    component,
    range
  };
  
};


const timeBlockComponent = (obj) => {

  const timeGrid = () => {
    const grid = document.createElement('div');
    grid.classList.add('time-grid', 'grid', 'gap-px', 'grid-cols-1', 'bg-gray-200');

    obj.range().forEach( n => {
      const time = document.createElement('div');
      time.innerHTML = n;
      time.classList.add('bg-gray-700',
                         'text-gray-100', 'col-span-1',
                         'col-span-1', 'h-56', 'flex',
                         'items-center', 'justify-center',
                         'text-7xl');
      grid.appendChild(time);
    });
    return grid;
  };

  const taskGrid = () => {
    const grid = document.createElement('div');
    grid.classList.add('task-grid', 'bg-gray-400',
                       'border-blue-500','h-10',
                       'col-start-2', 'col-span-3',
                       'gap-px', 'grid');
    return grid;
  };

  return {
    timeGrid,
    taskGrid
  };

};

const task = (obj) => {
  const getTime = () => obj.time; 
  const getTitle = () => obj.title; 
  const getDescription = () => obj.description; 
  const getType= () => obj.type; 
  

  return {
    getTime,
    getTitle,
    getDescription,
    getType
  }

};

const taskComponent = (time, width) => {

  const createTask = () => {
    const task = document.createElement('div');
    task.classList.add('bg-blue-300');
    task.classList.add(`h-${time}`, `w-${width}`);
    taskGrid.appendChild(task);
  }


  return {
    taskGrid,
    createTask
  };

};

var block = {
  wakeTime: 5,
  sleepTime: 21
};

var test = timeBlock(block);
document.querySelector('.main-grid').appendChild(timeBlockComponent(test).timeGrid());
document.querySelector('.main-grid').appendChild(timeBlockComponent(test).taskGrid());


// document.querySelector('.main-grid').appendChild(test.component().grid);
// document.querySelector('.main-grid').appendChild(taskComponent().taskGrid);
// taskComponent().createTask("1h", "full");

// TODO: 
// refactor components to recieve objects as parameters.