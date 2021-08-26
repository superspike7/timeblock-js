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
      item.classList.add('my-1', 'flex', 'justify-between');
      date.classList.add('rounded-md', 'px-2', `${obj.current ? 'selected' : 'not-selected'}`);
      removeBtn.classList.add('remove-item-btn', 'rounded-md', 'px-2', 'bg-red-500', 'font-semibold', 'text-white', 'cursor-pointer', 'hover:bg-red-800'  );
      date.setAttribute('value', obj.id)
      removeBtn.setAttribute('value', obj.id)
      date.innerText = obj.date;
      removeBtn.innerText = 'x';
      item.appendChild(date);
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
    task.classList.add('bg-blue-100', 'flex', 'flex-col', 'justify-center', 'items-center', 'py-1', 'text-center', 'task-container', 'relative');
    task.classList.add(`h-${obj.time}`, `w-${obj.type}`);
    btns.classList.add('absolute', 'top-px', 'right-px', 'inline-flex', 'space-x-1');
    removeBtn.classList.add('p-1', 'text-red-500', 'text-white', 'cursor-pointer', 'hover:bg-red-800', 'hover:text-white', 'remove-task-btn');
    editBtn.classList.add('p-1', 'text-blue-500', 'text-white', 'cursor-pointer', 'hover:bg-blue-800', 'hover:text-white');
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






// TODO:
// make dynamic event listeners

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
            task.completed = true;
            console.log(task);
          }
        });
      };
    });

    console.log(id)

    // localStorage["blocks"] = JSON.stringify(blocks)
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
    doneTask
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
    console.log(e.target.getAttribute('value'))
    TimeBlockController.doneTask(e.target.getAttribute('value'));

    // sideNavComponent(TimeBlockController.getBlocks()).renderList();
    // timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();
    // timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwwQ0FBMEM7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUyxRQUFRLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyw0QkFBNEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENnRDs7QUFFaEQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDZEQUFhO0FBQ3ZDO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7VUN6REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7O0FBRXBCOztBQUV3QztBQUNWO0FBQ2U7QUFDYTs7QUFFMUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtCQUFrQiwyQ0FBSTtBQUN0Qjs7QUFFQSxFQUFFLHVFQUFrQjtBQUNwQixFQUFFLHVFQUFrQjs7QUFFcEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscURBQVM7QUFDNUI7QUFDQTs7QUFFQSxFQUFFLDBEQUFnQjtBQUNsQixFQUFFLHVFQUFrQjtBQUNwQixFQUFFLHVFQUFrQjs7QUFFcEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwwREFBZ0I7QUFDbEIsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx1RUFBa0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSSwyREFBZ0I7QUFDcEIsSUFBSSx1RUFBa0I7QUFDdEIsSUFBSSx1RUFBa0I7QUFDdEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDBEQUFnQjtBQUNwQixJQUFJLHVFQUFrQjtBQUN0QixJQUFJLHVFQUFrQjtBQUN0QjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWdCO0FBQ3BCLElBQUksdUVBQWtCO0FBQ3RCLElBQUksdUVBQWtCO0FBQ3RCOzs7O0FBSUEsQ0FBQzs7O0FBR0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9zaWRlbmF2LmpzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy90YXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy90aW1lYmxvY2suanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3RpbWVibG9ja0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3Qgc2lkZU5hdkNvbXBvbmVudCA9IChvYmpzKSA9PiB7XG4gIGNvbnN0IGdldExpc3RJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1jb2wnLCAndGV4dC1ncmF5LTgwMCcsICd0ZXh0LWNlbnRlcicsICd0ZXh0LTJ4bCcsICdvdmVyZmxvdy15LWF1dG8nKTtcbiAgICBvYmpzLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbXktMScsICdmbGV4JywgJ2p1c3RpZnktYmV0d2VlbicpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkLW1kJywgJ3B4LTInLCBgJHtvYmouY3VycmVudCA/ICdzZWxlY3RlZCcgOiAnbm90LXNlbGVjdGVkJ31gKTtcbiAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtaXRlbS1idG4nLCAncm91bmRlZC1tZCcsICdweC0yJywgJ2JnLXJlZC01MDAnLCAnZm9udC1zZW1pYm9sZCcsICd0ZXh0LXdoaXRlJywgJ2N1cnNvci1wb2ludGVyJywgJ2hvdmVyOmJnLXJlZC04MDAnICApO1xuICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2JqLmlkKVxuICAgICAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvYmouaWQpXG4gICAgICBkYXRlLmlubmVyVGV4dCA9IG9iai5kYXRlO1xuICAgICAgcmVtb3ZlQnRuLmlubmVyVGV4dCA9ICd4JztcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2Nrcy1saXN0Jyk7XG4gICAgbmF2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbmF2LmFwcGVuZChnZXRMaXN0SXRlbXMoKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXJMaXN0XG4gIH1cblxufTtcblxuZXhwb3J0IHsgc2lkZU5hdkNvbXBvbmVudCB9IiwiXG5jb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2VbXCJ0YXNrSURcIl0pIHtcbiAgICBsb2NhbFN0b3JhZ2VbXCJ0YXNrSURcIl0gPSBcIjBcIjtcbiAgICBjb25zb2xlLmxvZygndGFza0lEIGluaXRpYXRlZCB0byAwJyk7XG4gIH1cbiAgdmFyIGlkID0gKE51bWJlcihsb2NhbFN0b3JhZ2VbXCJ0YXNrSURcIl0pICsgMSk7XG4gIGxvY2FsU3RvcmFnZVtcInRhc2tJRFwiXSA9IGlkO1xuICByZXR1cm4gbG9jYWxTdG9yYWdlW1widGFza0lEXCJdXG59XG5cblxuY29uc3QgVGFzayA9IGZ1bmN0aW9uIHRhc2tDb25zdHJ1Y3RvcihvYmope1xuICBjb25zdCBnZXRUaW1lID0gKCkgPT4gb2JqLnRpbWU7IFxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IG9iai50aXRsZSB8fCBcIm5vIHRpdGxlXCI7IFxuICBjb25zdCBnZXRUeXBlID0gKCkgPT4ge1xuICAgIGlmIChvYmoudHlwZSA9PSBcImRlZXBXb3JrXCIpe1xuICAgICAgcmV0dXJuIFwiZnVsbFwiO1xuICAgIH0gZWxzZSBpZiAob2JqLnR5cGUgPT0gXCJzaGFsbG93V29ya1wiKXtcbiAgICAgIHJldHVybiBcIjEvMlwiO1xuICAgIH1cbiAgfTsgXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gb2JqLmRlc2NyaXB0aW9uOyBcbiAgY29uc3QgaXNDb21wbGV0ZSA9ICgpID0+IG9iai5jb21wbGV0ZWQgfHwgZmFsc2UgOyBcblxuXG4gIHJldHVybiB7XG4gICAgdGltZTogZ2V0VGltZSgpLFxuICAgIHRpdGxlOiBnZXRUaXRsZSgpLFxuICAgIHR5cGU6IGdldFR5cGUoKSxcbiAgICBkZXNjcmlwdGlvbjogZ2V0RGVzY3JpcHRpb24oKSxcbiAgICBjb21wbGV0ZWQ6IGlzQ29tcGxldGUoKSxcbiAgICBpZDogZ2V0SUQoKVxuICB9O1xuXG5cbn07XG5cbmV4cG9ydCB7IFRhc2sgfSIsImNvbnN0IHRhc2tDb21wb25lbnQgPSAob2JqKSA9PiB7XG5cbiAgY29uc3QgZ2V0VGFza0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTEwMCcsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdweS0xJywgJ3RleHQtY2VudGVyJywgJ3Rhc2stY29udGFpbmVyJywgJ3JlbGF0aXZlJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKGBoLSR7b2JqLnRpbWV9YCwgYHctJHtvYmoudHlwZX1gKTtcbiAgICBidG5zLmNsYXNzTGlzdC5hZGQoJ2Fic29sdXRlJywgJ3RvcC1weCcsICdyaWdodC1weCcsICdpbmxpbmUtZmxleCcsICdzcGFjZS14LTEnKTtcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncC0xJywgJ3RleHQtcmVkLTUwMCcsICd0ZXh0LXdoaXRlJywgJ2N1cnNvci1wb2ludGVyJywgJ2hvdmVyOmJnLXJlZC04MDAnLCAnaG92ZXI6dGV4dC13aGl0ZScsICdyZW1vdmUtdGFzay1idG4nKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3AtMScsICd0ZXh0LWJsdWUtNTAwJywgJ3RleHQtd2hpdGUnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6YmctYmx1ZS04MDAnLCAnaG92ZXI6dGV4dC13aGl0ZScpO1xuICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ3AtMScsICd0ZXh0LWdyZWVuLTUwMCcsICd0ZXh0LXdoaXRlJywgJ2N1cnNvci1wb2ludGVyJywgJ2hvdmVyOmJnLWdyZWVuLTgwMCcsICdob3Zlcjp0ZXh0LXdoaXRlJywgJ2NoZWNrLXRhc2stYnRuJyk7XG5cbiAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iai5pZClcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvYmouaWQpXG4gICAgY2hlY2tCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iai5pZClcblxuICAgIHJlbW92ZUJ0bi5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBlZGl0QnRuLmlubmVySFRNTCA9IFwiRWRpdFwiO1xuICAgIGNoZWNrQnRuLmlubmVySFRNTCA9IFwiRG9uZVwiO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGV4dC14bCcsICdmb250LXNlbWlib2xkJywgJ3RleHQtZ3JheS05MDAnLCAnc2hhZG93LXNtJyk7XG5cbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW1kJywgJ2ZvbnQtbGlnaHQnLCAndGV4dC1ncmF5LTcwMCcpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICBidG5zLmFwcGVuZENoaWxkKGNoZWNrQnRuKTtcbiAgICBidG5zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGJ0bnMuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGJ0bnMpXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUYXNrRWxlbWVudFxuICB9O1xuXG59O1xuXG5leHBvcnQgeyB0YXNrQ29tcG9uZW50IH0iLCJjb25zdCBnZXRJRCA9ICgpID0+IHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2VbXCJibG9ja0lEXCJdKSB7XG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tJRFwiXSA9IFwiMFwiO1xuICAgIGNvbnNvbGUubG9nKCdibG9ja0lEIGluaXRpYXRlZCB0byAwJyk7XG4gIH1cbiAgdmFyIGlkID0gKE51bWJlcihsb2NhbFN0b3JhZ2VbXCJibG9ja0lEXCJdKSArIDEpO1xuICBsb2NhbFN0b3JhZ2VbXCJibG9ja0lEXCJdID0gaWQ7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2VbXCJibG9ja0lEXCJdXG59XG5cbmNvbnN0IFRpbWVCbG9jayA9IGZ1bmN0aW9uIHRpbWVCbG9ja0NvbnN0cnVjdG9yKG9iaikge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiBvYmouZGF0ZTtcblxuICBjb25zdCByYW5nZSA9ICgpID0+IHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yKGxldCBpID0gTnVtYmVyKG9iai53YWtlVGltZSk7IGkgPD0gTnVtYmVyKG9iai5zbGVlcFRpbWUpOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tzUHJvcHMgPSB0YXNrcy5tYXAodGFzayA9PiB0YXNrLmdldFByb3BzKCkpO1xuXG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50OiBmYWxzZSxcbiAgICBkYXRlOiBnZXREYXRlKCksXG4gICAgdGFza3M6IHRhc2tzUHJvcHMsXG4gICAgd2FrZVRpbWU6IG9iai53YWtlVGltZSxcbiAgICBzbGVlcFRpbWU6IG9iai5zbGVlcFRpbWUsXG4gICAgcmFuZ2U6IHJhbmdlKCksXG4gICAgaWQ6IGdldElEKClcbiAgfTtcbiAgXG59O1xuXG5leHBvcnQgeyBUaW1lQmxvY2sgfSIsImltcG9ydCB7IHRhc2tDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrQ29tcG9uZW50XCI7XG5cbmNvbnN0IHRpbWVCbG9ja0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCB0aW1lR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3RpbWUtZ3JpZCcsICdncmlkJywgJ2dhcC1weCcsICdncmlkLWNvbHMtMScsICdiZy1ncmF5LTIwMCcpO1xuXG4gICAgb2JqLnJhbmdlLmZvckVhY2goIG4gPT4ge1xuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGltZS5pbm5lckhUTUwgPSBuO1xuICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdiZy1ncmF5LTcwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JheS0xMDAnLCAnY29sLXNwYW4tMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbC1zcGFuLTEnLCAnaC01NicsICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC03eGwnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH07XG5cbiAgY29uc3QgdGFza0dyaWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgndGFzay1ncmlkJywgJ2JvcmRlci1ibHVlLTUwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICdoLTEwJywgJ2NvbC1zdGFydC0yJywgJ2NvbC1zcGFuLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAnZ2FwLXB4JywgJ2dyaWQnKTtcblxuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ncmlkJyk7XG4gICAgZ3JpZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgb2JqLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICBjb25zdCB0YXNrRWxlbWVudCA9IHRhc2tDb21wb25lbnQodGFzaykuZ2V0VGFza0VsZW1lbnQoKTtcbiAgICAgIGdyaWQuYXBwZW5kKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcblxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpO1xuICAgIG1haW5HcmlkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBtYWluR3JpZC5hcHBlbmQodGltZUdyaWQoKSk7XG4gICAgbWFpbkdyaWQuYXBwZW5kKHRhc2tHcmlkKCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lR3JpZCxcbiAgICB0YXNrR3JpZCxcbiAgICByZW5kZXJUYXNrcyxcbiAgICByZW5kZXJHcmlkc1xuICB9O1xuXG59O1xuXG5leHBvcnQgeyB0aW1lQmxvY2tDb21wb25lbnQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGltZUJsb2NrIH0gZnJvbSBcIi4vdGltZWJsb2NrXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgc2lkZU5hdkNvbXBvbmVudCB9IGZyb20gXCIuL3NpZGVuYXZcIjtcbmltcG9ydCB7IHRpbWVCbG9ja0NvbXBvbmVudCB9IGZyb20gXCIuL3RpbWVibG9ja0NvbXBvbmVudFwiO1xuXG4vLyBUT0RPOlxuLy8gbWFrZSBkeW5hbWljIGV2ZW50IGxpc3RlbmVyc1xuXG5jb25zdCBUaW1lQmxvY2tDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IGdldExpc3QgPSBmdW5jdGlvbiBsaXN0T2ZMb2NhbFN0b3JhZ2VUaW1lQmxvY2tzKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2Nrc1wiLCBcIltdXCIpO1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXTtcbiAgICB9IFxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl07XG4gIH07XG5cbiAgY29uc3QgZ2V0QmxvY2tzID0gZnVuY3Rpb24gTGlzdE9mUGFyc2VkVGltZUJsb2NrcygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShnZXRMaXN0KCkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEJsb2NrID0gZnVuY3Rpb24gYWRkQmxvY2tUb0xvY2FsU3RvcmFnZShibG9jaykge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKSB8fCBbXTtcbiAgICBibG9ja3MucHVzaChibG9jayk7XG5cbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShibG9ja3MpO1xuICB9O1xuXG4gIGNvbnN0IGdldEN1cnJlbnRCbG9jayA9IGZ1bmN0aW9uIHNlbGVjdEN1cnJlbnRCbG9jaygpIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG4gICAgdmFyIGZvdW5kID0gYmxvY2tzLmZpbmQoYmxvY2sgPT4gYmxvY2suY3VycmVudCA9PT0gdHJ1ZSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gIGNvbnN0IHNldEN1cnJlbnRCbG9jayA9IGZ1bmN0aW9uIHNldEN1cnJlbnRUb1NlbGVjdGVkQmxvY2soaWQpIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG5cbiAgICAvLyB1bnNlbGVjdCBhbGwgZmlyc3RcbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICBibG9jay5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgIGlmIChibG9jay5pZCA9PSBpZCkge1xuICAgICAgIGJsb2NrLmN1cnJlbnQgPSB0cnVlO1xuICAgICB9XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShibG9ja3MpXG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQmxvY2sgPSBmdW5jdGlvbiByZW1vdmVCbG9ja0Zyb21MaXN0KGlkKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuXG4gICAgdmFyIGZpbHRlcmVkID0gYmxvY2tzLmZpbHRlcihibG9jayA9PiBibG9jay5pZCAhPSBpZCk7XG5cbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZCk7XG4gIH1cblxuICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24gYWRkVGFza1RvQ3VycmVudEJsb2NrKHRhc2spIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG5cbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICBpZiAoYmxvY2suY3VycmVudCA9PSB0cnVlKSB7XG4gICAgICAgIGJsb2NrLnRhc2tzLnB1c2godGFzaylcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShibG9ja3MpXG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9IGZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tQ3VycmVudEJsb2NrKGlkKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuICAgIGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgIGlmIChibG9jay5jdXJyZW50ID09IHRydWUpIHtcbiAgICAgICAgYmxvY2sudGFza3MgPSBibG9jay50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9IGlkKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSA9IEpTT04uc3RyaW5naWZ5KGJsb2NrcylcbiAgfTtcblxuICBjb25zdCBkb25lVGFzayA9IGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlVGFza0Zyb21DdXJyZW50QmxvY2soaWQpIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgaWYgKGJsb2NrLmN1cnJlbnQgPT0gdHJ1ZSkge1xuICAgICAgICBibG9jay50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgIGlmICh0YXNrLmlkID09IGlkKSB7XG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKGlkKVxuXG4gICAgLy8gbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKVxuICB9O1xuXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0LFxuICAgIGdldEJsb2NrcyxcbiAgICBhZGRCbG9jayxcbiAgICBnZXRDdXJyZW50QmxvY2ssXG4gICAgc2V0Q3VycmVudEJsb2NrLFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlQmxvY2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICBkb25lVGFza1xuICB9O1xufSkoKTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS10YXNrLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJsb2NrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgYmxvY2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1tb2RhbCcpO1xuICBibG9ja01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJsb2NrLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCBibG9ja01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLW1vZGFsJyk7XG4gIGJsb2NrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEdXJhdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ0YXNrLWR1cmF0aW9uXCJdJykpLm1hcCh4ID0+IHgudmFsdWUucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKCcnKTtcbiAgY29uc3QgdGFza1R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2stdHlwZVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG5cblxuICBjb25zdCBvYmogPSB7XG4gICAgdGltZTogdGFza0R1cmF0aW9uLFxuICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcbiAgICB0eXBlOiB0YXNrVHlwZVxuICB9XG5cblxuICBjb25zdCBuZXdUYXNrID0gVGFzayhvYmopO1xuICBUaW1lQmxvY2tDb250cm9sbGVyLmFkZFRhc2sobmV3VGFzayk7XG5cbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuXG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJykucmVzZXQoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS1uYXYtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS1uYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCBibG9ja01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLW1vZGFsJyk7XG4gIGNvbnN0IGJsb2NrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYmxvY2stZGF0ZVwiXScpLnZhbHVlO1xuICBjb25zdCBibG9ja1dha2VUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ3YWtlLXRpbWVcIl0nKS52YWx1ZTtcbiAgY29uc3QgYmxvY2tTbGVlcFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInNsZWVwLXRpbWVcIl0nKS52YWx1ZTtcblxuXG4gIGNvbnN0IG9iaiA9IHtcbiAgICBkYXRlOiBibG9ja0RhdGUsXG4gICAgd2FrZVRpbWU6IGJsb2NrV2FrZVRpbWUsXG4gICAgc2xlZXBUaW1lOiBibG9ja1NsZWVwVGltZSBcbiAgfVxuXG4gIGNvbnN0IG5ld0Jsb2NrID0gVGltZUJsb2NrKG9iaik7XG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuYWRkQmxvY2sobmV3QmxvY2spO1xuICBUaW1lQmxvY2tDb250cm9sbGVyLnNldEN1cnJlbnRCbG9jayhuZXdCbG9jay5pZCk7XG5cbiAgc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEJsb2NrcygpKS5yZW5kZXJMaXN0KCk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyVGFza3MoKTtcblxuICBibG9ja01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1mb3JtJykucmVzZXQoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2tzLWxpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRCbG9ja1RvU2VsZWN0ZWRJdGVtKGUpe1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3Qtc2VsZWN0ZWQnKSkge1xuICAgIFxuICBUaW1lQmxvY2tDb250cm9sbGVyLnNldEN1cnJlbnRCbG9jayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuXG4gIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG4gIH07XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2Nrcy1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUxpc3QoZSl7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1pdGVtLWJ0bicpKSB7XG5cbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuXG4gICAgVGltZUJsb2NrQ29udHJvbGxlci5yZW1vdmVCbG9jayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG5cbiAgICBzaWRlTmF2Q29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2tzKCkpLnJlbmRlckxpc3QoKTtcbiAgICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyVGFza3MoKTtcbiAgfTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiByZW1vdmVUYXNrKGUpe1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUtdGFzay1idG4nKSkge1xuICAgIFRpbWVCbG9ja0NvbnRyb2xsZXIucmVtb3ZlVGFzayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuXG4gICAgc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEJsb2NrcygpKS5yZW5kZXJMaXN0KCk7XG4gICAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG4gICAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG4gIH07XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVUYXNrKGUpe1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay10YXNrLWJ0bicpKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgIFRpbWVCbG9ja0NvbnRyb2xsZXIuZG9uZVRhc2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcblxuICAgIC8vIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICAgIC8vIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICAgIC8vIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICB9O1xufSk7XG5cbi8vIG9uIGxvYWRcbihmdW5jdGlvbiBvbkxvYWQoKXtcbiAgaWYoISFsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0pIHtcbiAgICBzaWRlTmF2Q29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2tzKCkpLnJlbmRlckxpc3QoKTtcbiAgICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyVGFza3MoKTtcbiAgfVxuXG5cblxufSkoKTtcblxuXG4vLyBUT0RPOiBcbi8vIFB1YlN1YiBjb3BpZWQgZnJvbSBodHRwczovL3BhdWwua2lubGFuLm1lL2J1aWxkaW5nLWEtcHVic3ViLWFwaS1pbi1qYXZhc2NyaXB0L1xuXG4vLyB2YXIgRXZlbnRNYW5hZ2VyID0gbmV3IChmdW5jdGlvbigpIHtcbi8vICAgdmFyIGV2ZW50cyA9IHt9O1xuXG4vLyAgIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcbi8vICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbi8vICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcbi8vICAgICB9KTtcbi8vICAgfTtcblxuLy8gICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHtcbi8vICAgICAgIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdID0gW107XG4vLyAgICAgfVxuLy8gICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4vLyAgIH07XG5cbi8vICAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcblxuLy8gICAgIHZhciBoYW5kbGVySWR4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbi8vICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcklkeCk7XG4vLyAgIH07XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==