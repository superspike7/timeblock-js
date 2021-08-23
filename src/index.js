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
    return JSON.parse(localStorage.getItem("blocks"))
  };

  const getBlocks = () => blocks;

  const getCurrentBlock = () => currentBlock || blocks[0];

  const getCurrentBlockProps = () => getJsonBlocks()[0];

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


document.querySelector('.task-btn').addEventListener('click', function(){
  const taskModal = document.querySelector('.task-modal');
  taskModal.classList.toggle("hidden");
});

document.querySelector('.close-task-modal').addEventListener('click', function(){
  const taskModal = document.querySelector('.task-modal');
  taskModal.classList.toggle("hidden");
});

document.querySelector('.add-block-btn').addEventListener('click', function(){
  const blockModal = document.querySelector('.block-modal');
  blockModal.classList.toggle("hidden");
});

document.querySelector('.close-block-modal').addEventListener('click', function(){
  const blockModal = document.querySelector('.block-modal');
  blockModal.classList.toggle("hidden");
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

document.querySelector('.block-submit').addEventListener('click', function(){
  const blockModal = document.querySelector('.block-modal');
  const blockDate = document.querySelector('[name="block-date"]').value;
  const blockWakeTime = document.querySelector('[name="wake-time"]').value;
  const blockSleepTime = document.querySelector('[name="sleep-time"]').value;


  const obj = {
    date: blockDate,
    wakeTime: blockWakeTime,
    sleepTime: blockSleepTime 
  }

  const newBlock = TimeBlock(obj);
  TimeBlockController.addBlock(newBlock);
  TimeBlockController.updateLocalStorage();

  sideNavComponent(TimeBlockController.getJsonBlocks()).renderList();
  timeBlockComponent(TimeBlockController.getCurrentBlockProps()).renderGrids();

  blockModal.classList.toggle("hidden");
  document.querySelector('#block-form').reset();
});

document.querySelector('#side-nav-btn').addEventListener('click', function(){
  document.querySelector('#side-nav').classList.toggle('hidden');
});


 sideNavComponent(TimeBlockController.getJsonBlocks()).renderList();
 console.log(TimeBlockController.getJsonBlocks())
 console.log(TimeBlockController.getCurrentBlockProps())
 console.log(TimeBlockController.getCurrentBlock())

// TODO: 
// make a form for new block

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
