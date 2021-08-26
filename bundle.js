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
var id = 0;

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

  const getID = function incrementId() {
    return id++;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdEIsSUFBSSx1RUFBa0I7QUFDdEI7Ozs7QUFJQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3NpZGVuYXYuanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3Rhc2tDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3RpbWVibG9jay5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGltZWJsb2NrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBzaWRlTmF2Q29tcG9uZW50ID0gKG9ianMpID0+IHtcbiAgY29uc3QgZ2V0TGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICd0ZXh0LWdyYXktODAwJywgJ3RleHQtY2VudGVyJywgJ3RleHQtMnhsJywgJ292ZXJmbG93LXktYXV0bycpO1xuICAgIG9ianMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdteS0xJywgJ2ZsZXgnLCAnanVzdGlmeS1iZXR3ZWVuJyk7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtbWQnLCAncHgtMicsIGAke29iai5jdXJyZW50ID8gJ3NlbGVjdGVkJyA6ICdub3Qtc2VsZWN0ZWQnfWApO1xuICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1pdGVtLWJ0bicsICdyb3VuZGVkLW1kJywgJ3B4LTInLCAnYmctcmVkLTUwMCcsICdmb250LXNlbWlib2xkJywgJ3RleHQtd2hpdGUnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6YmctcmVkLTgwMCcgICk7XG4gICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvYmouaWQpXG4gICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iai5pZClcbiAgICAgIGRhdGUuaW5uZXJUZXh0ID0gb2JqLmRhdGU7XG4gICAgICByZW1vdmVCdG4uaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2tzLWxpc3QnKTtcbiAgICBuYXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBuYXYuYXBwZW5kKGdldExpc3RJdGVtcygpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlckxpc3RcbiAgfVxuXG59O1xuXG5leHBvcnQgeyBzaWRlTmF2Q29tcG9uZW50IH0iLCJcbmNvbnN0IGdldElEID0gKCkgPT4ge1xuICBpZiAoIWxvY2FsU3RvcmFnZVtcInRhc2tJRFwiXSkge1xuICAgIGxvY2FsU3RvcmFnZVtcInRhc2tJRFwiXSA9IFwiMFwiO1xuICAgIGNvbnNvbGUubG9nKCd0YXNrSUQgaW5pdGlhdGVkIHRvIDAnKTtcbiAgfVxuICB2YXIgaWQgPSAoTnVtYmVyKGxvY2FsU3RvcmFnZVtcInRhc2tJRFwiXSkgKyAxKTtcbiAgbG9jYWxTdG9yYWdlW1widGFza0lEXCJdID0gaWQ7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2VbXCJ0YXNrSURcIl1cbn1cblxuXG5jb25zdCBUYXNrID0gZnVuY3Rpb24gdGFza0NvbnN0cnVjdG9yKG9iail7XG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiBvYmoudGltZTsgXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gb2JqLnRpdGxlIHx8IFwibm8gdGl0bGVcIjsgXG4gIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgaWYgKG9iai50eXBlID09IFwiZGVlcFdvcmtcIil7XG4gICAgICByZXR1cm4gXCJmdWxsXCI7XG4gICAgfSBlbHNlIGlmIChvYmoudHlwZSA9PSBcInNoYWxsb3dXb3JrXCIpe1xuICAgICAgcmV0dXJuIFwiMS8yXCI7XG4gICAgfVxuICB9OyBcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBvYmouZGVzY3JpcHRpb247IFxuICBjb25zdCBpc0NvbXBsZXRlID0gKCkgPT4gb2JqLmNvbXBsZXRlZCB8fCBmYWxzZSA7IFxuXG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lOiBnZXRUaW1lKCksXG4gICAgdGl0bGU6IGdldFRpdGxlKCksXG4gICAgdHlwZTogZ2V0VHlwZSgpLFxuICAgIGRlc2NyaXB0aW9uOiBnZXREZXNjcmlwdGlvbigpLFxuICAgIGNvbXBsZXRlZDogaXNDb21wbGV0ZSgpLFxuICAgIGlkOiBnZXRJRCgpXG4gIH07XG5cblxufTtcblxuZXhwb3J0IHsgVGFzayB9IiwiY29uc3QgdGFza0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCBnZXRUYXNrRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGNoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2JnLWJsdWUtMTAwJywgJ2ZsZXgnLCAnZmxleC1jb2wnLCAnanVzdGlmeS1jZW50ZXInLCAnaXRlbXMtY2VudGVyJywgJ3B5LTEnLCAndGV4dC1jZW50ZXInLCAndGFzay1jb250YWluZXInLCAncmVsYXRpdmUnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoYGgtJHtvYmoudGltZX1gLCBgdy0ke29iai50eXBlfWApO1xuICAgIGJ0bnMuY2xhc3NMaXN0LmFkZCgnYWJzb2x1dGUnLCAndG9wLXB4JywgJ3JpZ2h0LXB4JywgJ2lubGluZS1mbGV4JywgJ3NwYWNlLXgtMScpO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwLTEnLCAndGV4dC1yZWQtNTAwJywgJ3RleHQtd2hpdGUnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6YmctcmVkLTgwMCcsICdob3Zlcjp0ZXh0LXdoaXRlJywgJ3JlbW92ZS10YXNrLWJ0bicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncC0xJywgJ3RleHQtYmx1ZS01MDAnLCAndGV4dC13aGl0ZScsICdjdXJzb3ItcG9pbnRlcicsICdob3ZlcjpiZy1ibHVlLTgwMCcsICdob3Zlcjp0ZXh0LXdoaXRlJyk7XG4gICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgncC0xJywgJ3RleHQtZ3JlZW4tNTAwJywgJ3RleHQtd2hpdGUnLCAnY3Vyc29yLXBvaW50ZXInLCAnaG92ZXI6YmctZ3JlZW4tODAwJywgJ2hvdmVyOnRleHQtd2hpdGUnLCAnY2hlY2stdGFzay1idG4nKTtcblxuICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2JqLmlkKVxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iai5pZClcbiAgICBjaGVja0J0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2JqLmlkKVxuXG4gICAgcmVtb3ZlQnRuLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGVkaXRCdG4uaW5uZXJIVE1MID0gXCJFZGl0XCI7XG4gICAgY2hlY2tCdG4uaW5uZXJIVE1MID0gXCJEb25lXCI7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ2ZvbnQtc2VtaWJvbGQnLCAndGV4dC1ncmF5LTkwMCcsICdzaGFkb3ctc20nKTtcblxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbWQnLCAnZm9udC1saWdodCcsICd0ZXh0LWdyYXktNzAwJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcblxuICAgIGJ0bnMuYXBwZW5kQ2hpbGQoY2hlY2tCdG4pO1xuICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgYnRucy5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoYnRucylcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGdldFRhc2tFbGVtZW50XG4gIH07XG5cbn07XG5cbmV4cG9ydCB7IHRhc2tDb21wb25lbnQgfSIsInZhciBpZCA9IDA7XG5cbmNvbnN0IFRpbWVCbG9jayA9IGZ1bmN0aW9uIHRpbWVCbG9ja0NvbnN0cnVjdG9yKG9iaikge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiBvYmouZGF0ZTtcblxuICBjb25zdCByYW5nZSA9ICgpID0+IHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yKGxldCBpID0gTnVtYmVyKG9iai53YWtlVGltZSk7IGkgPD0gTnVtYmVyKG9iai5zbGVlcFRpbWUpOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tzUHJvcHMgPSB0YXNrcy5tYXAodGFzayA9PiB0YXNrLmdldFByb3BzKCkpO1xuXG4gIGNvbnN0IGdldElEID0gZnVuY3Rpb24gaW5jcmVtZW50SWQoKSB7XG4gICAgcmV0dXJuIGlkKys7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgIGRhdGU6IGdldERhdGUoKSxcbiAgICB0YXNrczogdGFza3NQcm9wcyxcbiAgICB3YWtlVGltZTogb2JqLndha2VUaW1lLFxuICAgIHNsZWVwVGltZTogb2JqLnNsZWVwVGltZSxcbiAgICByYW5nZTogcmFuZ2UoKSxcbiAgICBpZDogZ2V0SUQoKVxuICB9O1xuICBcbn07XG5cbmV4cG9ydCB7IFRpbWVCbG9jayB9IiwiaW1wb3J0IHsgdGFza0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tDb21wb25lbnRcIjtcblxuY29uc3QgdGltZUJsb2NrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IHRpbWVHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgndGltZS1ncmlkJywgJ2dyaWQnLCAnZ2FwLXB4JywgJ2dyaWQtY29scy0xJywgJ2JnLWdyYXktMjAwJyk7XG5cbiAgICBvYmoucmFuZ2UuZm9yRWFjaCggbiA9PiB7XG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aW1lLmlubmVySFRNTCA9IG47XG4gICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ2JnLWdyYXktNzAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ncmF5LTEwMCcsICdjb2wtc3Bhbi0xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnY29sLXNwYW4tMScsICdoLTU2JywgJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LTd4bCcpO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCB0YXNrR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWdyaWQnLCAnYm9yZGVyLWJsdWUtNTAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ2gtMTAnLCAnY29sLXN0YXJ0LTInLCAnY29sLXNwYW4tMycsXG4gICAgICAgICAgICAgICAgICAgICAgICdnYXAtcHgnLCAnZ3JpZCcpO1xuXG4gICAgcmV0dXJuIGdyaWQ7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWdyaWQnKTtcbiAgICBncmlkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBvYmoudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gdGFza0NvbXBvbmVudCh0YXNrKS5nZXRUYXNrRWxlbWVudCgpO1xuICAgICAgZ3JpZC5hcHBlbmQodGFza0VsZW1lbnQpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR3JpZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJyk7XG4gICAgbWFpbkdyaWQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIG1haW5HcmlkLmFwcGVuZCh0aW1lR3JpZCgpKTtcbiAgICBtYWluR3JpZC5hcHBlbmQodGFza0dyaWQoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpbWVHcmlkLFxuICAgIHRhc2tHcmlkLFxuICAgIHJlbmRlclRhc2tzLFxuICAgIHJlbmRlckdyaWRzXG4gIH07XG5cbn07XG5cbmV4cG9ydCB7IHRpbWVCbG9ja0NvbXBvbmVudCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUaW1lQmxvY2sgfSBmcm9tIFwiLi90aW1lYmxvY2tcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBzaWRlTmF2Q29tcG9uZW50IH0gZnJvbSBcIi4vc2lkZW5hdlwiO1xuaW1wb3J0IHsgdGltZUJsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZWJsb2NrQ29tcG9uZW50XCI7XG5cbi8vIFRPRE86XG4vLyBtYWtlIGR5bmFtaWMgZXZlbnQgbGlzdGVuZXJzXG5cbmNvbnN0IFRpbWVCbG9ja0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgZ2V0TGlzdCA9IGZ1bmN0aW9uIGxpc3RPZkxvY2FsU3RvcmFnZVRpbWVCbG9ja3MoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvY2tzXCIsIFwiW11cIik7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdO1xuICAgIH0gXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXTtcbiAgfTtcblxuICBjb25zdCBnZXRCbG9ja3MgPSBmdW5jdGlvbiBMaXN0T2ZQYXJzZWRUaW1lQmxvY2tzKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGdldExpc3QoKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQmxvY2sgPSBmdW5jdGlvbiBhZGRCbG9ja1RvTG9jYWxTdG9yYWdlKGJsb2NrKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpIHx8IFtdO1xuICAgIGJsb2Nrcy5wdXNoKGJsb2NrKTtcblxuICAgIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSA9IEpTT04uc3RyaW5naWZ5KGJsb2Nrcyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q3VycmVudEJsb2NrID0gZnVuY3Rpb24gc2VsZWN0Q3VycmVudEJsb2NrKCkge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcbiAgICB2YXIgZm91bmQgPSBibG9ja3MuZmluZChibG9jayA9PiBibG9jay5jdXJyZW50ID09PSB0cnVlKTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q3VycmVudEJsb2NrID0gZnVuY3Rpb24gc2V0Q3VycmVudFRvU2VsZWN0ZWRCbG9jayhpZCkge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcblxuICAgIC8vIHVuc2VsZWN0IGFsbCBmaXJzdFxuICAgIGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgIGJsb2NrLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgaWYgKGJsb2NrLmlkID09IGlkKSB7XG4gICAgICAgYmxvY2suY3VycmVudCA9IHRydWU7XG4gICAgIH1cbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSA9IEpTT04uc3RyaW5naWZ5KGJsb2NrcylcbiAgfTtcblxuICBjb25zdCByZW1vdmVCbG9jayA9IGZ1bmN0aW9uIHJlbW92ZUJsb2NrRnJvbUxpc3QoaWQpIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG5cbiAgICB2YXIgZmlsdGVyZWQgPSBibG9ja3MuZmlsdGVyKGJsb2NrID0+IGJsb2NrLmlkICE9IGlkKTtcblxuICAgIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSA9IEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbiBhZGRUYXNrVG9DdXJyZW50QmxvY2sodGFzaykge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcblxuICAgIGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgIGlmIChibG9jay5jdXJyZW50ID09IHRydWUpIHtcbiAgICAgICAgYmxvY2sudGFza3MucHVzaCh0YXNrKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSA9IEpTT04uc3RyaW5naWZ5KGJsb2NrcylcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21DdXJyZW50QmxvY2soaWQpIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgaWYgKGJsb2NrLmN1cnJlbnQgPT0gdHJ1ZSkge1xuICAgICAgICBibG9jay50YXNrcyA9IGJsb2NrLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT0gaWQpXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKVxuICB9O1xuXG4gIGNvbnN0IGRvbmVUYXNrID0gZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVUYXNrRnJvbUN1cnJlbnRCbG9jayhpZCkge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICBpZiAoYmxvY2suY3VycmVudCA9PSB0cnVlKSB7XG4gICAgICAgIGJsb2NrLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgaWYgKHRhc2suaWQgPT0gaWQpIHtcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coaWQpXG5cbiAgICAvLyBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShibG9ja3MpXG4gIH07XG5cblxuICByZXR1cm4ge1xuICAgIGdldExpc3QsXG4gICAgZ2V0QmxvY2tzLFxuICAgIGFkZEJsb2NrLFxuICAgIGdldEN1cnJlbnRCbG9jayxcbiAgICBzZXRDdXJyZW50QmxvY2ssXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVCbG9jayxcbiAgICByZW1vdmVUYXNrLFxuICAgIGRvbmVUYXNrXG4gIH07XG59KSgpO1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwnKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRhc2stbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYmxvY2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCBibG9ja01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLW1vZGFsJyk7XG4gIGJsb2NrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYmxvY2stbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGJsb2NrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stbW9kYWwnKTtcbiAgYmxvY2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwnKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgdGFza0R1cmF0aW9uID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInRhc2stZHVyYXRpb25cIl0nKSkubWFwKHggPT4geC52YWx1ZS5wYWRTdGFydCgyLCBcIjBcIikpLmpvaW4oJycpO1xuICBjb25zdCB0YXNrVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGFzay10eXBlXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcblxuXG4gIGNvbnN0IG9iaiA9IHtcbiAgICB0aW1lOiB0YXNrRHVyYXRpb24sXG4gICAgdGl0bGU6IHRhc2tUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLFxuICAgIHR5cGU6IHRhc2tUeXBlXG4gIH1cblxuXG4gIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKG9iaik7XG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuYWRkVGFzayhuZXdUYXNrKTtcblxuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG5cbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKS5yZXNldCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGJsb2NrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stbW9kYWwnKTtcbiAgY29uc3QgYmxvY2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJibG9jay1kYXRlXCJdJykudmFsdWU7XG4gIGNvbnN0IGJsb2NrV2FrZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIndha2UtdGltZVwiXScpLnZhbHVlO1xuICBjb25zdCBibG9ja1NsZWVwVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2xlZXAtdGltZVwiXScpLnZhbHVlO1xuXG5cbiAgY29uc3Qgb2JqID0ge1xuICAgIGRhdGU6IGJsb2NrRGF0ZSxcbiAgICB3YWtlVGltZTogYmxvY2tXYWtlVGltZSxcbiAgICBzbGVlcFRpbWU6IGJsb2NrU2xlZXBUaW1lIFxuICB9XG5cbiAgY29uc3QgbmV3QmxvY2sgPSBUaW1lQmxvY2sob2JqKTtcbiAgVGltZUJsb2NrQ29udHJvbGxlci5hZGRCbG9jayhuZXdCbG9jayk7XG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuc2V0Q3VycmVudEJsb2NrKG5ld0Jsb2NrLmlkKTtcblxuICBzaWRlTmF2Q29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2tzKCkpLnJlbmRlckxpc3QoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuXG4gIGJsb2NrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWZvcm0nKS5yZXNldCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9ja3MtbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2hhbmdlQ3VycmVudEJsb2NrVG9TZWxlY3RlZEl0ZW0oZSl7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC1zZWxlY3RlZCcpKSB7XG4gICAgXG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuc2V0Q3VycmVudEJsb2NrKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG5cbiAgc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEJsb2NrcygpKS5yZW5kZXJMaXN0KCk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyVGFza3MoKTtcbiAgfTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2tzLWxpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tTGlzdChlKXtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlLWl0ZW0tYnRuJykpIHtcblxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG5cbiAgICBUaW1lQmxvY2tDb250cm9sbGVyLnJlbW92ZUJsb2NrKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcblxuICAgIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICAgIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICAgIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICB9O1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHJlbW92ZVRhc2soZSl7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS10YXNrLWJ0bicpKSB7XG4gICAgVGltZUJsb2NrQ29udHJvbGxlci5yZW1vdmVUYXNrKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG5cbiAgICBzaWRlTmF2Q29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2tzKCkpLnJlbmRlckxpc3QoKTtcbiAgICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyVGFza3MoKTtcbiAgfTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiB0b2dnbGVDb21wbGV0ZVRhc2soZSl7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrLXRhc2stYnRuJykpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgVGltZUJsb2NrQ29udHJvbGxlci5kb25lVGFzayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuXG4gICAgLy8gc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEJsb2NrcygpKS5yZW5kZXJMaXN0KCk7XG4gICAgLy8gdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG4gICAgLy8gdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG4gIH07XG59KTtcblxuLy8gb24gbG9hZFxuKGZ1bmN0aW9uIG9uTG9hZCgpe1xuICBpZighIWxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSkge1xuICAgIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICAgIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICAgIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICB9XG5cblxuXG59KSgpO1xuXG5cbi8vIFRPRE86IFxuLy8gUHViU3ViIGNvcGllZCBmcm9tIGh0dHBzOi8vcGF1bC5raW5sYW4ubWUvYnVpbGRpbmctYS1wdWJzdWItYXBpLWluLWphdmFzY3JpcHQvXG5cbi8vIHZhciBFdmVudE1hbmFnZXIgPSBuZXcgKGZ1bmN0aW9uKCkge1xuLy8gICB2YXIgZXZlbnRzID0ge307XG5cbi8vICAgdGhpcy5wdWJsaXNoID0gZnVuY3Rpb24obmFtZSwgZGF0YSkge1xuLy8gICAgIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXTtcbi8vICAgICBpZighIWhhbmRsZXJzID09PSBmYWxzZSkgcmV0dXJuO1xuLy8gICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuLy8gICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGRhdGEpO1xuLy8gICAgIH0pO1xuLy8gICB9O1xuXG4vLyAgIHRoaXMuc3Vic2NyaWJlID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuLy8gICAgIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXTtcbi8vICAgICBpZighIWhhbmRsZXJzID09PSBmYWxzZSkge1xuLy8gICAgICAgaGFuZGxlcnMgPSBldmVudHNbbmFtZV0gPSBbXTtcbi8vICAgICB9XG4vLyAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbi8vICAgfTtcblxuLy8gICB0aGlzLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuLy8gICAgIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXTtcbi8vICAgICBpZighIWhhbmRsZXJzID09PSBmYWxzZSkgcmV0dXJuO1xuXG4vLyAgICAgdmFyIGhhbmRsZXJJZHggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuLy8gICAgIGhhbmRsZXJzLnNwbGljZShoYW5kbGVySWR4KTtcbi8vICAgfTtcbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9