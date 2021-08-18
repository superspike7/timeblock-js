import "./style.css"

"use strict";

const TimeBlock = (obj) => {
  const tasks = [];

  const range = () => {
    let arr = [];
    for(let i = Number(obj.wakeTime); i <= Number(obj.sleepTime); i++) {
      arr.push(i);
    }
    return arr;
  };

  const getTasks = () => {
    return tasks
  };

  const addTask = (taskObj) => {
    tasks.push(taskObj);
  };

  return {
    range,
    getTasks,
    addTask
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

  const renderTasks = () => {
    const grid = document.querySelector('.task-grid');
    grid.innerHTML = "";

    obj.getTasks().forEach(task => {
      const taskElement = taskComponent(task).getTaskElement();
      grid.append(taskElement);
    });

  };

  const renderGrids = () => {
    const mainGrid = document.querySelector('.main-grid');

    mainGrid.append(timeGrid());
    mainGrid.append(taskGrid());
  }

  return {
    timeGrid,
    taskGrid,
    renderTasks,
    renderGrids
  };

};

const Task = (obj) => {
  const getTime = () => obj.time; 
  const getTitle = () => obj.title || "no title"; 
  const getDescription = () => obj.description || "no description"; 
  const getType = () => obj.type; 
  

  return {
    getTime,
    getTitle,
    getDescription,
    getType
  }

};

const taskComponent = (obj) => {

  const getTaskElement = () => {
    const task = document.createElement('div');
    task.classList.add('bg-blue-300');
    task.classList.add(`h-${obj.getTime()}`, `w-${obj.getType()}`);
    return task;
  }


  return {
    getTaskElement
  };

};

var block = {
  wakeTime: 5,
  sleepTime: 21
};

var newTask = Task({
  time: "1h",
  type: "full"
})

var test = TimeBlock(block);
// document.querySelector('.main-grid').appendChild(timeBlockComponent(test).timeGrid());
// document.querySelector('.main-grid').appendChild(timeBlockComponent(test).taskGrid());
// document.querySelector('.task-grid').appendChild(taskComponent(newTask).task());
// document.querySelector('.task-grid').appendChild(taskComponent(task({time: "30m", type: "1/2"})).task());
timeBlockComponent(test).renderGrids();

document.querySelector('.task-btn').addEventListener('click', function(){
  test.addTask(newTask);
  timeBlockComponent(test).renderTasks();
  console.log(test.getTasks());
});



// TODO: 
// add DOM controller module

// PubSub copied from https://paul.kinlan.me/building-a-pubsub-api-in-javascript/

var EventManager = new (function() {
  var events = {};

  this.publish = function(name, data) {
    var handlers = events[name];
    if(!!handlers === false) return;
    handlers.forEach(function(handler) {
      handler.call(this, data);
    });
  };

  this.subscribe = function(name, handler) {
    var handlers = events[name];
    if(!!handlers === false) {
      handlers = events[name] = [];
    }
    handlers.push(handler);
  };

  this.unsubscribe = function(name, handler) {
    var handlers = events[name];
    if(!!handlers === false) return;

    var handlerIdx = handlers.indexOf(handler);
    handlers.splice(handlerIdx);
  };
});