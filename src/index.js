import "./style.css"

"use strict";

import { TimeBlock } from "./timeblock";
import { Task } from "./task";
import { sideNavComponent } from "./sidenav";
import { timeBlockComponent } from "./timeblockComponent";


const TimeBlockController = (function() {

  const getList = function listOfLocalStorageTimeBlocks() {
    if (localStorage["blocks"] == undefined) {
      localStorage.setItem("blocks", "[]");
      return localStorage["blocks"];
    } 
    return localStorage["blocks"];
  };

  const getBlocks = function ListOfParsedTimeBlocks() {
    return JSON.parse(getList());
  };

  const addBlock = function addBlockToLocalStorage(block) {
    var blocks = getBlocks() || [];
    blocks.push(block);

    localStorage["blocks"] = JSON.stringify(blocks);
  };

  const getCurrentBlock = function selectCurrentBlock() {
    var blocks = getBlocks();
    var found = blocks.find(block => block.current === true);
    return found;
  };

  const setCurrentBlock = function setCurrentToSelectedBlock(id) {
    var blocks = getBlocks();

    // unselect all first
    blocks.forEach(block => {
      block.current = false;
    });

    blocks.forEach(block => {
     if (block.id == id) {
       block.current = true;
     }
    });

    localStorage["blocks"] = JSON.stringify(blocks)
  };

  const removeBlock = function removeBlockFromList(id) {
    var blocks = getBlocks();

    var filtered = blocks.filter(block => block.id != id);

    localStorage["blocks"] = JSON.stringify(filtered);
  }

  const addTask = function addTaskToCurrentBlock(task) {
    var blocks = getBlocks();

    blocks.forEach(block => {
      if (block.current == true) {
        block.tasks.push(task)
      };
    });

    localStorage["blocks"] = JSON.stringify(blocks)
  };

  const removeTask = function removeTaskFromCurrentBlock(id) {
    var blocks = getBlocks();
    blocks.forEach(block => {
      if (block.current == true) {
        block.tasks = block.tasks.filter(task => task.id != id)
      };
    });

    localStorage["blocks"] = JSON.stringify(blocks)
  };

  const doneTask = function toggleCompleteTaskFromCurrentBlock(id) {
    var blocks = getBlocks();
    blocks.forEach(block => {
      if (block.current == true) {
        block.tasks.forEach(task => {
          if (task.id == id) {
            if (task.completed == false) {
              task.completed = true;
            } else {
              task.completed = false;
            }
          }
        });
      };
    });


    localStorage["blocks"] = JSON.stringify(blocks)
  };

  const getCurrentTask = function getCurrentTaskById(id) {
    var blocks = getBlocks();
    var currentTask;

    blocks.forEach(block => {
      if (block.current == true) {
       currentTask = block.tasks.find(task => task.id == id);
      }
    });

    return currentTask;
  };

  const editTask = function EditCurrentTaskById(id, props) {
    var blocks = getBlocks();

    blocks.forEach(block => {
      if (block.current == true) {
        block.tasks.forEach(task => {
          if (task.id == id) {
            task.title = props.title;
            task.type = props.type;
            task.time = props.time;
            task.description = props.description;
          };
        });
      };
    })

    localStorage["blocks"] = JSON.stringify(blocks)
  };

  const getBlock = function returnBlockObjectById(id) {
    var blocks = getBlocks();
    var selectedBlock;

    selectedBlock = blocks.find(block => block.id == id);

    return selectedBlock;
  };

  const editBlock = function editBlockById(id, props) {
    var blocks = getBlocks();

    blocks.forEach(block => {
      if (block.id == id) {
        block.date = props.date
        block.wakeTime = props.wakeTime
        block.sleepTime = props.sleepTime
      }
    })

    localStorage["blocks"] = JSON.stringify(blocks)
  };


  return {
    getList,
    getBlocks,
    addBlock,
    getCurrentBlock,
    setCurrentBlock,
    addTask,
    removeBlock,
    removeTask,
    doneTask,
    getCurrentTask,
    editTask,
    getBlock,
    editBlock
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
  const hour = document.querySelector('#duration-hour').value;
  const minute = document.querySelector('#duration-minute').value;
  const taskType = document.querySelector('[name="task-type"]:checked').value;
  const taskDescription = document.querySelector('#task-description').value;
  const taskDuration = [hour, minute].join('')


  const obj = {
    time: taskDuration,
    title: taskTitle,
    description: taskDescription,
    type: taskType
  }


  const newTask = Task(obj);
  TimeBlockController.addTask(newTask);

  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();

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
  TimeBlockController.setCurrentBlock(newBlock.id);

  sideNavComponent(TimeBlockController.getBlocks()).renderList();
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();

  blockModal.classList.toggle("hidden");
  document.querySelector('#block-form').reset();
});

document.querySelector('#blocks-list').addEventListener('click', function changeCurrentBlockToSelectedItem(e){
  if (e.target.classList.contains('not-selected')) {
    
  TimeBlockController.setCurrentBlock(e.target.getAttribute('value'));

  sideNavComponent(TimeBlockController.getBlocks()).renderList();
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  };
});

document.querySelector('#blocks-list').addEventListener('click', function removeItemFromList(e){
  if (e.target.classList.contains('remove-item-btn')) {

    console.log(e.target.getAttribute('value'));

    TimeBlockController.removeBlock(e.target.getAttribute('value'))

    sideNavComponent(TimeBlockController.getBlocks()).renderList();
    timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
    timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  };
});

document.querySelector('.main-grid').addEventListener('click', function removeTask(e){
  if (e.target.classList.contains('remove-task-btn')) {
    TimeBlockController.removeTask(e.target.getAttribute('value'));

    sideNavComponent(TimeBlockController.getBlocks()).renderList();
    timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
    timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  };
});

document.querySelector('.main-grid').addEventListener('click', function toggleCompleteTask(e){
  if (e.target.classList.contains('check-task-btn')) {
    TimeBlockController.doneTask(e.target.getAttribute('value'));

    sideNavComponent(TimeBlockController.getBlocks()).renderList();
    timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
    timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  };
});

document.querySelector('.main-grid').addEventListener('click', function showTaskEditForm(e){
  if (e.target.classList.contains('edit-task-btn')) {

    const currentTask = TimeBlockController.getCurrentTask(e.target.getAttribute('value'))
    const time = (currentTask.time.match(/.{1,2}/g));
    const hour = time[0].substring(1);
    const minute = time[1] == "30" ? 1 : 0;

    const taskModal = document.querySelector('.edit-task-modal');

    document.querySelector('#edit-task-title').textContent = currentTask.title;
    document.querySelector('#edit-task-description').textContent = currentTask.description;
    document.querySelector('#hour').options[hour].selected = true;
    document.querySelector('#minute').options[minute].selected = true;
    
    if (currentTask.type == "full") {
      document.querySelector("#deepWork").checked = true;
    } else if (currentTask.type == "1/2") {
      document.querySelector("#shallowWork").checked = true;
    }

    console.log(currentTask)
    console.log(time)


    document.querySelector('.edit-task-id').textContent = currentTask.id;
    
    taskModal.classList.toggle('hidden');
  };
});

document.querySelector('.task-edit-submit').addEventListener('click', function submitTaskEditForm(){
  const taskModal = document.querySelector('.edit-task-modal');

  const taskTitle = document.querySelector('#edit-task-title').value;
  const taskDescription = document.querySelector('#edit-task-description').value;
  const taskHour = document.querySelector('#hour').value.padStart(2, "0");
  const taskMinute = document.querySelector('#minute').value;
  const taskType = document.querySelector('[name="task-type-edit"]:checked').value;
  const taskId = document.querySelector('.edit-task-id').textContent
  var taskDuration = [taskHour, taskMinute].join('');

  var editedTask = {
    title: taskTitle,
    description: taskDescription,
    type: taskType,
    time: taskDuration
  }

  TimeBlockController.editTask(taskId, editedTask);

  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  taskModal.classList.toggle("hidden");
});

document.querySelector('.close-edit-task-modal').addEventListener('click', function closeTaskEditForm(){
  const taskModal = document.querySelector('.edit-task-modal');
  taskModal.classList.toggle("hidden");
});

document.querySelector('#blocks-list').addEventListener('click', function showBlockEditFormById(e) {
  if (e.target.classList.contains('edit-item-btn')) {
    const blockModal = document.querySelector('.block-edit-modal');
    var selectedBlock = TimeBlockController.getBlock(e.target.getAttribute('value'));

    document.querySelector('#block-date-edit').value = selectedBlock.date;
    document.querySelector('#wake-time-edit').options[selectedBlock.wakeTime].selected = true;
    document.querySelector('#sleep-time-edit').options[selectedBlock.sleepTime].selected = true;

    // date.value = selectedBlock.date
    // dayStart.options[selectedBlock.wakeTime].selected = true
    // dayEnd.options[selectedBlock.sleepTime].selected = true

    document.querySelector('.edit-block-id').textContent = selectedBlock.id;
    console.log(selectedBlock.id)

    blockModal.classList.toggle("hidden");
  }
});

document.querySelector('.block-edit-submit').addEventListener('click', function editSelectedBlock() {
  const blockModal = document.querySelector('.block-edit-modal');

  const date = document.querySelector('#block-date-edit').value;
  const dayStart = document.querySelector('#wake-time-edit').value;
  const dayEnd = document.querySelector('#sleep-time-edit').value;
  const blockId = document.querySelector('.edit-block-id').textContent;
  
  var editedBlock = {
    date: date,
    wakeTime: dayStart,
    sleepTime: dayEnd
  }

  TimeBlockController.editBlock(blockId, editedBlock);

  sideNavComponent(TimeBlockController.getBlocks()).renderList();
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  blockModal.classList.toggle("hidden");
});

document.querySelector('.close-block-edit-modal').addEventListener('click', function closeblockEditForm(){
  const blockModal = document.querySelector('.block-edit-modal');
  blockModal.classList.toggle("hidden");
});

// on load
(function onLoad(){
  if(!!localStorage["blocks"]) {
    sideNavComponent(TimeBlockController.getBlocks()).renderList();
    timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
    timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  }
})();


// TODO: 
// PubSub copied from https://paul.kinlan.me/building-a-pubsub-api-in-javascript/

// var EventManager = new (function() {
//   var events = {};

//   this.publish = function(name, data) {
//     var handlers = events[name];
//     if(!!handlers === false) return;
//     handlers.forEach(function(handler) {
//       handler.call(this, data);
//     });
//   };

//   this.subscribe = function(name, handler) {
//     var handlers = events[name];
//     if(!!handlers === false) {
//       handlers = events[name] = [];
//     }
//     handlers.push(handler);
//   };

//   this.unsubscribe = function(name, handler) {
//     var handlers = events[name];
//     if(!!handlers === false) return;

//     var handlerIdx = handlers.indexOf(handler);
//     handlers.splice(handlerIdx);
//   };
// });
