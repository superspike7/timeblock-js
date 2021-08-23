// import { DelegatedPlugin } from "webpack";
import "./style.css"

"use strict";

import { TimeBlock } from "./timeblock";
import { Task } from "./task";
import { sideNavComponent } from "./sidenav";
import { timeBlockComponent } from "./timeblockComponent";

const TimeBlockController = (() => {
  const blocks = [];
  let currentBlock =  '';


  const addBlock = obj => {
    blocks.push(obj);
  };

  const updateLocalStorage = () => {
    localStorage["blocks"] = JSON.stringify(blocks.map(block => block.getProps()));
  }

  const setCurrentBlock = date => {
    const found = blocks.find(block => block.getDate() == date);
    currentBlock = found; 
  };

  const getJsonBlocks = () => {
    updateLocalStorage();
    return JSON.parse(localStorage.getItem("blocks"))
  };

  const getBlocks = () => blocks;

  const getCurrentBlock = () => currentBlock || blocks[0];

  const getCurrentBlockProps = () => getJsonBlocks().find(block => block.date == getCurrentBlock().getDate());


  return {
    addBlock,
    setCurrentBlock,
    getBlocks,
    getCurrentBlock,
    getJsonBlocks,
    getCurrentBlockProps,
    updateLocalStorage

  };
})();


const block1 = {
  wakeTime: 5,
  sleepTime: 21,
  date: 'August 21, 2021'
};

const test1 = TimeBlock(block1);

TimeBlockController.addBlock(test1);

sideNavComponent(TimeBlockController.getJsonBlocks()).renderList();
timeBlockComponent(TimeBlockController.getCurrentBlockProps()).renderGrids();

document.querySelector('.task-btn').addEventListener('click', function(){
  const taskModal = document.querySelector('.task-modal');
  taskModal.classList.toggle("hidden");
});

document.querySelector('.close-modal').addEventListener('click', function(){
  const taskModal = document.querySelector('.task-modal');
  taskModal.classList.toggle("hidden");
});

document.querySelector('.task-submit').addEventListener('click', function(){
  const taskModal = document.querySelector('.task-modal');
  const taskTitle = document.querySelector('#task-title').value;
  const taskDuration = Array.from(document.querySelectorAll('[name="task-duration"]')).map(x => x.value.padStart(2, "0")).join('');
  const taskType = document.querySelector('[name="task-type"]:checked').value;
  const taskDescription = document.querySelector('#task-description').value;


  const obj = {
    time: taskDuration,
    title: taskTitle,
    description: taskDescription,
    type: taskType
  }


  const newTask = Task(obj);
  // separate current block and blockprops 
  TimeBlockController.getCurrentBlock().addTask(newTask);
  TimeBlockController.updateLocalStorage();
  timeBlockComponent(TimeBlockController.getCurrentBlockProps()).renderTasks();

  taskModal.classList.toggle("hidden");
  document.querySelector('#task-form').reset();
});

document.querySelector('#side-nav-btn').addEventListener('click', function(){
  document.querySelector('#side-nav').classList.toggle('hidden');
});


// TODO: 

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
