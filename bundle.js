/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sidenav.js":
/*!************************!*\
  !*** ./src/sidenav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sideNavComponent": () => (/* binding */ sideNavComponent)
/* harmony export */ });
const sideNavComponent = (objs) => {
  const getListItems = () => {
    const list = document.createElement('ul');
    list.classList.add('flex', 'flex-col', 'text-gray-800', 'text-center', 'text-2xl', 'overflow-y-auto');
    objs.forEach(obj => {
      const item = document.createElement('li');
      const date = document.createElement('span');
      const removeBtn = document.createElement('span');
      const editBtn = document.createElement('span');

      item.classList.add('my-1', 'flex', 'justify-between');
      date.classList.add('rounded-md', 'px-2', `${obj.current ? 'selected' : 'not-selected'}`);
      removeBtn.classList.add('remove-item-btn', 'rounded-md', 'px-2', 'bg-red-500', 'font-semibold', 'text-white', 'cursor-pointer', 'hover:bg-red-800'  );
      editBtn.classList.add('edit-item-btn', 'rounded-md', 'px-2', 'bg-blue-500', 'font-semibold', 'text-white', 'cursor-pointer', 'hover:bg-red-800'  );

      date.setAttribute('value', obj.id)
      removeBtn.setAttribute('value', obj.id)
      editBtn.setAttribute('value', obj.id)

      date.innerText = obj.date;
      removeBtn.innerText = 'x';
      editBtn.innerText = 'edit';

      item.appendChild(date);
      item.appendChild(editBtn);
      item.appendChild(removeBtn);
      list.appendChild(item);
    });
    return list;
  };

  const renderList = () => {
    const nav = document.querySelector('#blocks-list');
    nav.innerHTML = "";
    nav.append(getListItems());
  };

  return {
    renderList
  }

};



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });

const getID = () => {
  if (!localStorage["taskID"]) {
    localStorage["taskID"] = "0";
    console.log('taskID initiated to 0');
  }
  var id = (Number(localStorage["taskID"]) + 1);
  localStorage["taskID"] = id;
  return localStorage["taskID"]
}


const Task = function taskConstructor(obj){
  const getTime = () => obj.time; 
  const getTitle = () => obj.title || "no title"; 
  const getType = () => {
    if (obj.type == "deepWork"){
      return "full";
    } else if (obj.type == "shallowWork"){
      return "1/2";
    }
  }; 
  const getDescription = () => obj.description; 
  const isComplete = () => obj.completed || false ; 


  return {
    time: getTime(),
    title: getTitle(),
    type: getType(),
    description: getDescription(),
    completed: isComplete(),
    id: getID()
  };


};



/***/ }),

/***/ "./src/taskComponent.js":
/*!******************************!*\
  !*** ./src/taskComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskComponent": () => (/* binding */ taskComponent)
/* harmony export */ });
const taskComponent = (obj) => {

  const getTaskElement = () => {
    const task = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const removeBtn = document.createElement('span');
    const editBtn = document.createElement('span');
    const checkBtn = document.createElement('span');
    const btns = document.createElement('div');
    task.classList.add(`${obj.completed ? 'bg-green-200' : 'bg-blue-100'}`, 'flex', 'flex-col', 'justify-center', 'items-center', 'py-1', 'text-center', 'task-container', 'relative');
    task.classList.add(`h-${obj.time}`, `w-${obj.type}`);
    btns.classList.add('absolute', 'top-px', 'right-px', 'inline-flex', 'space-x-1');
    removeBtn.classList.add('p-1', 'text-red-500', 'text-white', 'cursor-pointer', 'hover:bg-red-800', 'hover:text-white', 'remove-task-btn');
    editBtn.classList.add('p-1', 'text-blue-500', 'text-white', 'cursor-pointer', 'hover:bg-blue-800', 'hover:text-white', 'edit-task-btn');
    checkBtn.classList.add('p-1', 'text-green-500', 'text-white', 'cursor-pointer', 'hover:bg-green-800', 'hover:text-white', 'check-task-btn');

    removeBtn.setAttribute('value', obj.id)
    editBtn.setAttribute('value', obj.id)
    checkBtn.setAttribute('value', obj.id)

    removeBtn.innerHTML = "X";
    editBtn.innerHTML = "Edit";
    checkBtn.innerHTML = "Done";

    title.classList.add('text-xl', 'font-semibold', 'text-gray-900', 'shadow-sm');

    description.classList.add('text-md', 'font-light', 'text-gray-700');

    title.textContent = obj.title;
    description.textContent = obj.description;

    btns.appendChild(checkBtn);
    btns.appendChild(editBtn);
    btns.appendChild(removeBtn);
    task.appendChild(btns)
    task.appendChild(title);
    task.appendChild(description);

    return task;
  }


  return {
    getTaskElement
  };

};



/***/ }),

/***/ "./src/timeblock.js":
/*!**************************!*\
  !*** ./src/timeblock.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeBlock": () => (/* binding */ TimeBlock)
/* harmony export */ });
const getID = () => {
  if (!localStorage["blockID"]) {
    localStorage["blockID"] = "0";
    console.log('blockID initiated to 0');
  }
  var id = (Number(localStorage["blockID"]) + 1);
  localStorage["blockID"] = id;
  return localStorage["blockID"]
}

const TimeBlock = function timeBlockConstructor(obj) {
  const tasks = [];

  const getDate = () => obj.date;

  const range = () => {
    let arr = [];
    for(let i = Number(obj.wakeTime); i <= Number(obj.sleepTime); i++) {
      arr.push(i);
    }
    return arr;
  };

  const tasksProps = tasks.map(task => task.getProps());


  return {
    current: false,
    date: getDate(),
    tasks: tasksProps,
    wakeTime: obj.wakeTime,
    sleepTime: obj.sleepTime,
    range: range(),
    id: getID()
  };
  
};



/***/ }),

/***/ "./src/timeblockComponent.js":
/*!***********************************!*\
  !*** ./src/timeblockComponent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeBlockComponent": () => (/* binding */ timeBlockComponent)
/* harmony export */ });
/* harmony import */ var _taskComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskComponent */ "./src/taskComponent.js");


const timeBlockComponent = (obj) => {

  const timeGrid = () => {
    const grid = document.createElement('div');

    grid.classList.add('time-grid', 'grid', 'gap-px', 'grid-cols-1', 'bg-gray-200');

    obj.range.forEach( n => {
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
    grid.classList.add('task-grid', 'border-blue-500',
                       'h-10', 'col-start-2', 'col-span-3',
                       'gap-px', 'grid');

    return grid;
  };

  const renderTasks = () => {
    const grid = document.querySelector('.task-grid');
    grid.innerHTML = "";

    obj.tasks.forEach(task => {
      const taskElement = (0,_taskComponent__WEBPACK_IMPORTED_MODULE_0__.taskComponent)(task).getTaskElement();
      grid.append(taskElement);
    });

  };

  const renderGrids = () => {
    const mainGrid = document.querySelector('.main-grid');
    mainGrid.innerHTML = "";

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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _timeblock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeblock */ "./src/timeblock.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav */ "./src/sidenav.js");
/* harmony import */ var _timeblockComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeblockComponent */ "./src/timeblockComponent.js");


"use strict";







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
  const taskDuration = Array.from(document.querySelectorAll('[name="task-duration"]')).map(x => x.value.padStart(2, "0")).join('');
  const taskType = document.querySelector('[name="task-type"]:checked').value;
  const taskDescription = document.querySelector('#task-description').value;


  const obj = {
    time: taskDuration,
    title: taskTitle,
    description: taskDescription,
    type: taskType
  }


  const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__.Task)(obj);
  TimeBlockController.addTask(newTask);

  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();

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

  const newBlock = (0,_timeblock__WEBPACK_IMPORTED_MODULE_1__.TimeBlock)(obj);
  TimeBlockController.addBlock(newBlock);
  TimeBlockController.setCurrentBlock(newBlock.id);

  (0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();

  blockModal.classList.toggle("hidden");
  document.querySelector('#block-form').reset();
});

document.querySelector('#blocks-list').addEventListener('click', function changeCurrentBlockToSelectedItem(e){
  if (e.target.classList.contains('not-selected')) {
    
  TimeBlockController.setCurrentBlock(e.target.getAttribute('value'));

  (0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();
  };
});

document.querySelector('#blocks-list').addEventListener('click', function removeItemFromList(e){
  if (e.target.classList.contains('remove-item-btn')) {

    console.log(e.target.getAttribute('value'));

    TimeBlockController.removeBlock(e.target.getAttribute('value'))

    ;(0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
    (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
    (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();
  };
});

document.querySelector('.main-grid').addEventListener('click', function removeTask(e){
  if (e.target.classList.contains('remove-task-btn')) {
    TimeBlockController.removeTask(e.target.getAttribute('value'));

    (0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
    (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
    (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();
  };
});

document.querySelector('.main-grid').addEventListener('click', function toggleCompleteTask(e){
  if (e.target.classList.contains('check-task-btn')) {
    TimeBlockController.doneTask(e.target.getAttribute('value'));

    (0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
    (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
    (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();
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

  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();
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

  (0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();
  blockModal.classList.toggle("hidden");
});

document.querySelector('.close-block-edit-modal').addEventListener('click', function closeblockEditForm(){
  const blockModal = document.querySelector('.block-edit-modal');
  blockModal.classList.toggle("hidden");
});

// on load
(function onLoad(){
  if(!!localStorage["blocks"]) {
    (0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
    (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
    (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCwwQ0FBMEM7QUFDNUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQStDO0FBQ3pFLDRCQUE0QixTQUFTLFFBQVEsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLDRCQUE0QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2dEOztBQUVoRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsNkRBQWE7QUFDdkM7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRXdDO0FBQ1Y7QUFDZTtBQUNhOzs7QUFHMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrQkFBa0IsMkNBQUk7QUFDdEI7O0FBRUEsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx1RUFBa0I7O0FBRXBCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFEQUFTO0FBQzVCO0FBQ0E7O0FBRUEsRUFBRSwwREFBZ0I7QUFDbEIsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx1RUFBa0I7O0FBRXBCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsMERBQWdCO0FBQ2xCLEVBQUUsdUVBQWtCO0FBQ3BCLEVBQUUsdUVBQWtCO0FBQ3BCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQUksMkRBQWdCO0FBQ3BCLElBQUksdUVBQWtCO0FBQ3RCLElBQUksdUVBQWtCO0FBQ3RCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwwREFBZ0I7QUFDcEIsSUFBSSx1RUFBa0I7QUFDdEIsSUFBSSx1RUFBa0I7QUFDdEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDBEQUFnQjtBQUNwQixJQUFJLHVFQUFrQjtBQUN0QixJQUFJLHVFQUFrQjtBQUN0QjtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxJQUFJO0FBQ2hEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx1RUFBa0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSwwREFBZ0I7QUFDbEIsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx1RUFBa0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBZ0I7QUFDcEIsSUFBSSx1RUFBa0I7QUFDdEIsSUFBSSx1RUFBa0I7QUFDdEI7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3NpZGVuYXYuanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3Rhc2tDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3RpbWVibG9jay5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGltZWJsb2NrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBzaWRlTmF2Q29tcG9uZW50ID0gKG9ianMpID0+IHtcbiAgY29uc3QgZ2V0TGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICd0ZXh0LWdyYXktODAwJywgJ3RleHQtY2VudGVyJywgJ3RleHQtMnhsJywgJ292ZXJmbG93LXktYXV0bycpO1xuICAgIG9ianMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdteS0xJywgJ2ZsZXgnLCAnanVzdGlmeS1iZXR3ZWVuJyk7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtbWQnLCAncHgtMicsIGAke29iai5jdXJyZW50ID8gJ3NlbGVjdGVkJyA6ICdub3Qtc2VsZWN0ZWQnfWApO1xuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1pdGVtLWJ0bicsICdyb3VuZGVkLW1kJywgJ3B4LTInLCAnYmctcmVkLTUwMCcsICdmb250LXNlbWlib2xkJywgJ3RleHQtd2hpdGUnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6YmctcmVkLTgwMCcgICk7XG4gICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtaXRlbS1idG4nLCAncm91bmRlZC1tZCcsICdweC0yJywgJ2JnLWJsdWUtNTAwJywgJ2ZvbnQtc2VtaWJvbGQnLCAndGV4dC13aGl0ZScsICdjdXJzb3ItcG9pbnRlcicsICdob3ZlcjpiZy1yZWQtODAwJyAgKTtcblxuICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2JqLmlkKVxuICAgICAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvYmouaWQpXG4gICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvYmouaWQpXG5cbiAgICAgIGRhdGUuaW5uZXJUZXh0ID0gb2JqLmRhdGU7XG4gICAgICByZW1vdmVCdG4uaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSAnZWRpdCc7XG5cbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9ja3MtbGlzdCcpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG5hdi5hcHBlbmQoZ2V0TGlzdEl0ZW1zKCkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyTGlzdFxuICB9XG5cbn07XG5cbmV4cG9ydCB7IHNpZGVOYXZDb21wb25lbnQgfSIsIlxuY29uc3QgZ2V0SUQgPSAoKSA9PiB7XG4gIGlmICghbG9jYWxTdG9yYWdlW1widGFza0lEXCJdKSB7XG4gICAgbG9jYWxTdG9yYWdlW1widGFza0lEXCJdID0gXCIwXCI7XG4gICAgY29uc29sZS5sb2coJ3Rhc2tJRCBpbml0aWF0ZWQgdG8gMCcpO1xuICB9XG4gIHZhciBpZCA9IChOdW1iZXIobG9jYWxTdG9yYWdlW1widGFza0lEXCJdKSArIDEpO1xuICBsb2NhbFN0b3JhZ2VbXCJ0YXNrSURcIl0gPSBpZDtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZVtcInRhc2tJRFwiXVxufVxuXG5cbmNvbnN0IFRhc2sgPSBmdW5jdGlvbiB0YXNrQ29uc3RydWN0b3Iob2JqKXtcbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IG9iai50aW1lOyBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBvYmoudGl0bGUgfHwgXCJubyB0aXRsZVwiOyBcbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICBpZiAob2JqLnR5cGUgPT0gXCJkZWVwV29ya1wiKXtcbiAgICAgIHJldHVybiBcImZ1bGxcIjtcbiAgICB9IGVsc2UgaWYgKG9iai50eXBlID09IFwic2hhbGxvd1dvcmtcIil7XG4gICAgICByZXR1cm4gXCIxLzJcIjtcbiAgICB9XG4gIH07IFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IG9iai5kZXNjcmlwdGlvbjsgXG4gIGNvbnN0IGlzQ29tcGxldGUgPSAoKSA9PiBvYmouY29tcGxldGVkIHx8IGZhbHNlIDsgXG5cblxuICByZXR1cm4ge1xuICAgIHRpbWU6IGdldFRpbWUoKSxcbiAgICB0aXRsZTogZ2V0VGl0bGUoKSxcbiAgICB0eXBlOiBnZXRUeXBlKCksXG4gICAgZGVzY3JpcHRpb246IGdldERlc2NyaXB0aW9uKCksXG4gICAgY29tcGxldGVkOiBpc0NvbXBsZXRlKCksXG4gICAgaWQ6IGdldElEKClcbiAgfTtcblxuXG59O1xuXG5leHBvcnQgeyBUYXNrIH0iLCJjb25zdCB0YXNrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IGdldFRhc2tFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2hlY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChgJHtvYmouY29tcGxldGVkID8gJ2JnLWdyZWVuLTIwMCcgOiAnYmctYmx1ZS0xMDAnfWAsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdweS0xJywgJ3RleHQtY2VudGVyJywgJ3Rhc2stY29udGFpbmVyJywgJ3JlbGF0aXZlJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKGBoLSR7b2JqLnRpbWV9YCwgYHctJHtvYmoudHlwZX1gKTtcbiAgICBidG5zLmNsYXNzTGlzdC5hZGQoJ2Fic29sdXRlJywgJ3RvcC1weCcsICdyaWdodC1weCcsICdpbmxpbmUtZmxleCcsICdzcGFjZS14LTEnKTtcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncC0xJywgJ3RleHQtcmVkLTUwMCcsICd0ZXh0LXdoaXRlJywgJ2N1cnNvci1wb2ludGVyJywgJ2hvdmVyOmJnLXJlZC04MDAnLCAnaG92ZXI6dGV4dC13aGl0ZScsICdyZW1vdmUtdGFzay1idG4nKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3AtMScsICd0ZXh0LWJsdWUtNTAwJywgJ3RleHQtd2hpdGUnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6YmctYmx1ZS04MDAnLCAnaG92ZXI6dGV4dC13aGl0ZScsICdlZGl0LXRhc2stYnRuJyk7XG4gICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgncC0xJywgJ3RleHQtZ3JlZW4tNTAwJywgJ3RleHQtd2hpdGUnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6YmctZ3JlZW4tODAwJywgJ2hvdmVyOnRleHQtd2hpdGUnLCAnY2hlY2stdGFzay1idG4nKTtcblxuICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2JqLmlkKVxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iai5pZClcbiAgICBjaGVja0J0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2JqLmlkKVxuXG4gICAgcmVtb3ZlQnRuLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGVkaXRCdG4uaW5uZXJIVE1MID0gXCJFZGl0XCI7XG4gICAgY2hlY2tCdG4uaW5uZXJIVE1MID0gXCJEb25lXCI7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ2ZvbnQtc2VtaWJvbGQnLCAndGV4dC1ncmF5LTkwMCcsICdzaGFkb3ctc20nKTtcblxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbWQnLCAnZm9udC1saWdodCcsICd0ZXh0LWdyYXktNzAwJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcblxuICAgIGJ0bnMuYXBwZW5kQ2hpbGQoY2hlY2tCdG4pO1xuICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgYnRucy5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoYnRucylcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGdldFRhc2tFbGVtZW50XG4gIH07XG5cbn07XG5cbmV4cG9ydCB7IHRhc2tDb21wb25lbnQgfSIsImNvbnN0IGdldElEID0gKCkgPT4ge1xuICBpZiAoIWxvY2FsU3RvcmFnZVtcImJsb2NrSURcIl0pIHtcbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja0lEXCJdID0gXCIwXCI7XG4gICAgY29uc29sZS5sb2coJ2Jsb2NrSUQgaW5pdGlhdGVkIHRvIDAnKTtcbiAgfVxuICB2YXIgaWQgPSAoTnVtYmVyKGxvY2FsU3RvcmFnZVtcImJsb2NrSURcIl0pICsgMSk7XG4gIGxvY2FsU3RvcmFnZVtcImJsb2NrSURcIl0gPSBpZDtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZVtcImJsb2NrSURcIl1cbn1cblxuY29uc3QgVGltZUJsb2NrID0gZnVuY3Rpb24gdGltZUJsb2NrQ29uc3RydWN0b3Iob2JqKSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IG9iai5kYXRlO1xuXG4gIGNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSBOdW1iZXIob2JqLndha2VUaW1lKTsgaSA8PSBOdW1iZXIob2JqLnNsZWVwVGltZSk7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgdGFza3NQcm9wcyA9IHRhc2tzLm1hcCh0YXNrID0+IHRhc2suZ2V0UHJvcHMoKSk7XG5cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgIGRhdGU6IGdldERhdGUoKSxcbiAgICB0YXNrczogdGFza3NQcm9wcyxcbiAgICB3YWtlVGltZTogb2JqLndha2VUaW1lLFxuICAgIHNsZWVwVGltZTogb2JqLnNsZWVwVGltZSxcbiAgICByYW5nZTogcmFuZ2UoKSxcbiAgICBpZDogZ2V0SUQoKVxuICB9O1xuICBcbn07XG5cbmV4cG9ydCB7IFRpbWVCbG9jayB9IiwiaW1wb3J0IHsgdGFza0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tDb21wb25lbnRcIjtcblxuY29uc3QgdGltZUJsb2NrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IHRpbWVHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgndGltZS1ncmlkJywgJ2dyaWQnLCAnZ2FwLXB4JywgJ2dyaWQtY29scy0xJywgJ2JnLWdyYXktMjAwJyk7XG5cbiAgICBvYmoucmFuZ2UuZm9yRWFjaCggbiA9PiB7XG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aW1lLmlubmVySFRNTCA9IG47XG4gICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ2JnLWdyYXktNzAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ncmF5LTEwMCcsICdjb2wtc3Bhbi0xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnY29sLXNwYW4tMScsICdoLTU2JywgJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LTd4bCcpO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCB0YXNrR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWdyaWQnLCAnYm9yZGVyLWJsdWUtNTAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ2gtMTAnLCAnY29sLXN0YXJ0LTInLCAnY29sLXNwYW4tMycsXG4gICAgICAgICAgICAgICAgICAgICAgICdnYXAtcHgnLCAnZ3JpZCcpO1xuXG4gICAgcmV0dXJuIGdyaWQ7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWdyaWQnKTtcbiAgICBncmlkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBvYmoudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gdGFza0NvbXBvbmVudCh0YXNrKS5nZXRUYXNrRWxlbWVudCgpO1xuICAgICAgZ3JpZC5hcHBlbmQodGFza0VsZW1lbnQpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR3JpZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJyk7XG4gICAgbWFpbkdyaWQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIG1haW5HcmlkLmFwcGVuZCh0aW1lR3JpZCgpKTtcbiAgICBtYWluR3JpZC5hcHBlbmQodGFza0dyaWQoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpbWVHcmlkLFxuICAgIHRhc2tHcmlkLFxuICAgIHJlbmRlclRhc2tzLFxuICAgIHJlbmRlckdyaWRzXG4gIH07XG5cbn07XG5cbmV4cG9ydCB7IHRpbWVCbG9ja0NvbXBvbmVudCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUaW1lQmxvY2sgfSBmcm9tIFwiLi90aW1lYmxvY2tcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBzaWRlTmF2Q29tcG9uZW50IH0gZnJvbSBcIi4vc2lkZW5hdlwiO1xuaW1wb3J0IHsgdGltZUJsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZWJsb2NrQ29tcG9uZW50XCI7XG5cblxuY29uc3QgVGltZUJsb2NrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCBnZXRMaXN0ID0gZnVuY3Rpb24gbGlzdE9mTG9jYWxTdG9yYWdlVGltZUJsb2NrcygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9ja3NcIiwgXCJbXVwiKTtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl07XG4gICAgfSBcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdO1xuICB9O1xuXG4gIGNvbnN0IGdldEJsb2NrcyA9IGZ1bmN0aW9uIExpc3RPZlBhcnNlZFRpbWVCbG9ja3MoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0TGlzdCgpKTtcbiAgfTtcblxuICBjb25zdCBhZGRCbG9jayA9IGZ1bmN0aW9uIGFkZEJsb2NrVG9Mb2NhbFN0b3JhZ2UoYmxvY2spIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCkgfHwgW107XG4gICAgYmxvY2tzLnB1c2goYmxvY2spO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKTtcbiAgfTtcblxuICBjb25zdCBnZXRDdXJyZW50QmxvY2sgPSBmdW5jdGlvbiBzZWxlY3RDdXJyZW50QmxvY2soKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuICAgIHZhciBmb3VuZCA9IGJsb2Nrcy5maW5kKGJsb2NrID0+IGJsb2NrLmN1cnJlbnQgPT09IHRydWUpO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICBjb25zdCBzZXRDdXJyZW50QmxvY2sgPSBmdW5jdGlvbiBzZXRDdXJyZW50VG9TZWxlY3RlZEJsb2NrKGlkKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuXG4gICAgLy8gdW5zZWxlY3QgYWxsIGZpcnN0XG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgYmxvY2suY3VycmVudCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICBpZiAoYmxvY2suaWQgPT0gaWQpIHtcbiAgICAgICBibG9jay5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUJsb2NrID0gZnVuY3Rpb24gcmVtb3ZlQmxvY2tGcm9tTGlzdChpZCkge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcblxuICAgIHZhciBmaWx0ZXJlZCA9IGJsb2Nrcy5maWx0ZXIoYmxvY2sgPT4gYmxvY2suaWQgIT0gaWQpO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWQpO1xuICB9XG5cbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uIGFkZFRhc2tUb0N1cnJlbnRCbG9jayh0YXNrKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuXG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgaWYgKGJsb2NrLmN1cnJlbnQgPT0gdHJ1ZSkge1xuICAgICAgICBibG9jay50YXNrcy5wdXNoKHRhc2spXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUN1cnJlbnRCbG9jayhpZCkge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICBpZiAoYmxvY2suY3VycmVudCA9PSB0cnVlKSB7XG4gICAgICAgIGJsb2NrLnRhc2tzID0gYmxvY2sudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPSBpZClcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShibG9ja3MpXG4gIH07XG5cbiAgY29uc3QgZG9uZVRhc2sgPSBmdW5jdGlvbiB0b2dnbGVDb21wbGV0ZVRhc2tGcm9tQ3VycmVudEJsb2NrKGlkKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuICAgIGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgIGlmIChibG9jay5jdXJyZW50ID09IHRydWUpIHtcbiAgICAgICAgYmxvY2sudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICBpZiAodGFzay5pZCA9PSBpZCkge1xuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG5cblxuICAgIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSA9IEpTT04uc3RyaW5naWZ5KGJsb2NrcylcbiAgfTtcblxuICBjb25zdCBnZXRDdXJyZW50VGFzayA9IGZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrQnlJZChpZCkge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcbiAgICB2YXIgY3VycmVudFRhc2s7XG5cbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICBpZiAoYmxvY2suY3VycmVudCA9PSB0cnVlKSB7XG4gICAgICAgY3VycmVudFRhc2sgPSBibG9jay50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PSBpZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3VycmVudFRhc2s7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSBmdW5jdGlvbiBFZGl0Q3VycmVudFRhc2tCeUlkKGlkLCBwcm9wcykge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcblxuICAgIGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgIGlmIChibG9jay5jdXJyZW50ID09IHRydWUpIHtcbiAgICAgICAgYmxvY2sudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICBpZiAodGFzay5pZCA9PSBpZCkge1xuICAgICAgICAgICAgdGFzay50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgICAgICAgICAgdGFzay50eXBlID0gcHJvcHMudHlwZTtcbiAgICAgICAgICAgIHRhc2sudGltZSA9IHByb3BzLnRpbWU7XG4gICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pXG5cbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShibG9ja3MpXG4gIH07XG5cbiAgY29uc3QgZ2V0QmxvY2sgPSBmdW5jdGlvbiByZXR1cm5CbG9ja09iamVjdEJ5SWQoaWQpIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG4gICAgdmFyIHNlbGVjdGVkQmxvY2s7XG5cbiAgICBzZWxlY3RlZEJsb2NrID0gYmxvY2tzLmZpbmQoYmxvY2sgPT4gYmxvY2suaWQgPT0gaWQpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkQmxvY2s7XG4gIH07XG5cbiAgY29uc3QgZWRpdEJsb2NrID0gZnVuY3Rpb24gZWRpdEJsb2NrQnlJZChpZCwgcHJvcHMpIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG5cbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICBpZiAoYmxvY2suaWQgPT0gaWQpIHtcbiAgICAgICAgYmxvY2suZGF0ZSA9IHByb3BzLmRhdGVcbiAgICAgICAgYmxvY2sud2FrZVRpbWUgPSBwcm9wcy53YWtlVGltZVxuICAgICAgICBibG9jay5zbGVlcFRpbWUgPSBwcm9wcy5zbGVlcFRpbWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKVxuICB9O1xuXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0LFxuICAgIGdldEJsb2NrcyxcbiAgICBhZGRCbG9jayxcbiAgICBnZXRDdXJyZW50QmxvY2ssXG4gICAgc2V0Q3VycmVudEJsb2NrLFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlQmxvY2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICBkb25lVGFzayxcbiAgICBnZXRDdXJyZW50VGFzayxcbiAgICBlZGl0VGFzayxcbiAgICBnZXRCbG9jayxcbiAgICBlZGl0QmxvY2tcbiAgfTtcbn0pKCk7XG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtdGFzay1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwnKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ibG9jay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGJsb2NrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stbW9kYWwnKTtcbiAgYmxvY2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1ibG9jay1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgYmxvY2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1tb2RhbCcpO1xuICBibG9ja01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlO1xuICBjb25zdCB0YXNrRHVyYXRpb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwidGFzay1kdXJhdGlvblwiXScpKS5tYXAoeCA9PiB4LnZhbHVlLnBhZFN0YXJ0KDIsIFwiMFwiKSkuam9pbignJyk7XG4gIGNvbnN0IHRhc2tUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrLXR5cGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpLnZhbHVlO1xuXG5cbiAgY29uc3Qgb2JqID0ge1xuICAgIHRpbWU6IHRhc2tEdXJhdGlvbixcbiAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb24sXG4gICAgdHlwZTogdGFza1R5cGVcbiAgfVxuXG5cbiAgY29uc3QgbmV3VGFzayA9IFRhc2sob2JqKTtcbiAgVGltZUJsb2NrQ29udHJvbGxlci5hZGRUYXNrKG5ld1Rhc2spO1xuXG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyVGFza3MoKTtcblxuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpLnJlc2V0KCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbmF2LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgYmxvY2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1tb2RhbCcpO1xuICBjb25zdCBibG9ja0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImJsb2NrLWRhdGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgYmxvY2tXYWtlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwid2FrZS10aW1lXCJdJykudmFsdWU7XG4gIGNvbnN0IGJsb2NrU2xlZXBUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJzbGVlcC10aW1lXCJdJykudmFsdWU7XG5cblxuICBjb25zdCBvYmogPSB7XG4gICAgZGF0ZTogYmxvY2tEYXRlLFxuICAgIHdha2VUaW1lOiBibG9ja1dha2VUaW1lLFxuICAgIHNsZWVwVGltZTogYmxvY2tTbGVlcFRpbWUgXG4gIH1cblxuICBjb25zdCBuZXdCbG9jayA9IFRpbWVCbG9jayhvYmopO1xuICBUaW1lQmxvY2tDb250cm9sbGVyLmFkZEJsb2NrKG5ld0Jsb2NrKTtcbiAgVGltZUJsb2NrQ29udHJvbGxlci5zZXRDdXJyZW50QmxvY2sobmV3QmxvY2suaWQpO1xuXG4gIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG5cbiAgYmxvY2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stZm9ybScpLnJlc2V0KCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2Nrcy1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50QmxvY2tUb1NlbGVjdGVkSXRlbShlKXtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbm90LXNlbGVjdGVkJykpIHtcbiAgICBcbiAgVGltZUJsb2NrQ29udHJvbGxlci5zZXRDdXJyZW50QmxvY2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcblxuICBzaWRlTmF2Q29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2tzKCkpLnJlbmRlckxpc3QoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICB9O1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9ja3MtbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21MaXN0KGUpe1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUtaXRlbS1idG4nKSkge1xuXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcblxuICAgIFRpbWVCbG9ja0NvbnRyb2xsZXIucmVtb3ZlQmxvY2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuXG4gICAgc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEJsb2NrcygpKS5yZW5kZXJMaXN0KCk7XG4gICAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG4gICAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG4gIH07XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gcmVtb3ZlVGFzayhlKXtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlLXRhc2stYnRuJykpIHtcbiAgICBUaW1lQmxvY2tDb250cm9sbGVyLnJlbW92ZVRhc2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcblxuICAgIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICAgIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICAgIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICB9O1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlVGFzayhlKXtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stdGFzay1idG4nKSkge1xuICAgIFRpbWVCbG9ja0NvbnRyb2xsZXIuZG9uZVRhc2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcblxuICAgIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICAgIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICAgIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICB9O1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHNob3dUYXNrRWRpdEZvcm0oZSl7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdGFzay1idG4nKSkge1xuXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRUYXNrKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICBjb25zdCB0aW1lID0gKGN1cnJlbnRUYXNrLnRpbWUubWF0Y2goLy57MSwyfS9nKSk7XG4gICAgY29uc3QgaG91ciA9IHRpbWVbMF0uc3Vic3RyaW5nKDEpO1xuICAgIGNvbnN0IG1pbnV0ZSA9IHRpbWVbMV0gPT0gXCIzMFwiID8gMSA6IDA7XG5cbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLW1vZGFsJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJykudGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay50aXRsZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay5kZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cicpLm9wdGlvbnNbaG91cl0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGUnKS5vcHRpb25zW21pbnV0ZV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIFxuICAgIGlmIChjdXJyZW50VGFzay50eXBlID09IFwiZnVsbFwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlZXBXb3JrXCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFRhc2sudHlwZSA9PSBcIjEvMlwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NoYWxsb3dXb3JrXCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKVxuICAgIGNvbnNvbGUubG9nKHRpbWUpXG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2staWQnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRUYXNrLmlkO1xuICAgIFxuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gc3VibWl0VGFza0VkaXRGb3JtKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stbW9kYWwnKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgdGFza0hvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cicpLnZhbHVlLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgdGFza01pbnV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGUnKS52YWx1ZTtcbiAgY29uc3QgdGFza1R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2stdHlwZS1lZGl0XCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgY29uc3QgdGFza0lkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1pZCcpLnRleHRDb250ZW50XG4gIHZhciB0YXNrRHVyYXRpb24gPSBbdGFza0hvdXIsIHRhc2tNaW51dGVdLmpvaW4oJycpO1xuXG4gIHZhciBlZGl0ZWRUYXNrID0ge1xuICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcbiAgICB0eXBlOiB0YXNrVHlwZSxcbiAgICB0aW1lOiB0YXNrRHVyYXRpb25cbiAgfVxuXG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuZWRpdFRhc2sodGFza0lkLCBlZGl0ZWRUYXNrKTtcblxuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lZGl0LXRhc2stbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlVGFza0VkaXRGb3JtKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stbW9kYWwnKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2Nrcy1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBzaG93QmxvY2tFZGl0Rm9ybUJ5SWQoZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LWl0ZW0tYnRuJykpIHtcbiAgICBjb25zdCBibG9ja01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLWVkaXQtbW9kYWwnKTtcbiAgICB2YXIgc2VsZWN0ZWRCbG9jayA9IFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1kYXRlLWVkaXQnKS52YWx1ZSA9IHNlbGVjdGVkQmxvY2suZGF0ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2FrZS10aW1lLWVkaXQnKS5vcHRpb25zW3NlbGVjdGVkQmxvY2sud2FrZVRpbWVdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtdGltZS1lZGl0Jykub3B0aW9uc1tzZWxlY3RlZEJsb2NrLnNsZWVwVGltZV0uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgLy8gZGF0ZS52YWx1ZSA9IHNlbGVjdGVkQmxvY2suZGF0ZVxuICAgIC8vIGRheVN0YXJ0Lm9wdGlvbnNbc2VsZWN0ZWRCbG9jay53YWtlVGltZV0uc2VsZWN0ZWQgPSB0cnVlXG4gICAgLy8gZGF5RW5kLm9wdGlvbnNbc2VsZWN0ZWRCbG9jay5zbGVlcFRpbWVdLnNlbGVjdGVkID0gdHJ1ZVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYmxvY2staWQnKS50ZXh0Q29udGVudCA9IHNlbGVjdGVkQmxvY2suaWQ7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRCbG9jay5pZClcblxuICAgIGJsb2NrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1lZGl0LXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gZWRpdFNlbGVjdGVkQmxvY2soKSB7XG4gIGNvbnN0IGJsb2NrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stZWRpdC1tb2RhbCcpO1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stZGF0ZS1lZGl0JykudmFsdWU7XG4gIGNvbnN0IGRheVN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dha2UtdGltZS1lZGl0JykudmFsdWU7XG4gIGNvbnN0IGRheUVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC10aW1lLWVkaXQnKS52YWx1ZTtcbiAgY29uc3QgYmxvY2tJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJsb2NrLWlkJykudGV4dENvbnRlbnQ7XG4gIFxuICB2YXIgZWRpdGVkQmxvY2sgPSB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICB3YWtlVGltZTogZGF5U3RhcnQsXG4gICAgc2xlZXBUaW1lOiBkYXlFbmRcbiAgfVxuXG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuZWRpdEJsb2NrKGJsb2NrSWQsIGVkaXRlZEJsb2NrKTtcblxuICBzaWRlTmF2Q29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2tzKCkpLnJlbmRlckxpc3QoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICBibG9ja01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJsb2NrLWVkaXQtbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlYmxvY2tFZGl0Rm9ybSgpe1xuICBjb25zdCBibG9ja01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLWVkaXQtbW9kYWwnKTtcbiAgYmxvY2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbi8vIG9uIGxvYWRcbihmdW5jdGlvbiBvbkxvYWQoKXtcbiAgaWYoISFsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0pIHtcbiAgICBzaWRlTmF2Q29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2tzKCkpLnJlbmRlckxpc3QoKTtcbiAgICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyVGFza3MoKTtcbiAgfVxufSkoKTtcblxuXG4vLyBUT0RPOiBcbi8vIFB1YlN1YiBjb3BpZWQgZnJvbSBodHRwczovL3BhdWwua2lubGFuLm1lL2J1aWxkaW5nLWEtcHVic3ViLWFwaS1pbi1qYXZhc2NyaXB0L1xuXG4vLyB2YXIgRXZlbnRNYW5hZ2VyID0gbmV3IChmdW5jdGlvbigpIHtcbi8vICAgdmFyIGV2ZW50cyA9IHt9O1xuXG4vLyAgIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcbi8vICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbi8vICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcbi8vICAgICB9KTtcbi8vICAgfTtcblxuLy8gICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHtcbi8vICAgICAgIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdID0gW107XG4vLyAgICAgfVxuLy8gICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4vLyAgIH07XG5cbi8vICAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcblxuLy8gICAgIHZhciBoYW5kbGVySWR4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbi8vICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcklkeCk7XG4vLyAgIH07XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==