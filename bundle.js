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
    completed: isComplete()
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
    task.classList.add('bg-blue-100', 'flex', 'flex-col', 'justify-center', 'items-center', 'py-1', 'text-center');
    task.classList.add(`h-${obj.time}`, `w-${obj.type}`);

    title.classList.add('text-xl', 'font-semibold', 'text-gray-900', 'shadow-sm');

    description.classList.add('text-md', 'font-light', 'text-gray-700');

    title.textContent = obj.title;
    description.textContent = obj.description;

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


  return {
    getList,
    getBlocks,
    addBlock,
    getCurrentBlock,
    setCurrentBlock,
    addTask,
    removeBlock
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

// on load
(0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
(0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
(0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLHVFQUFrQjtBQUNwQixFQUFFLHVFQUFrQjs7QUFFcEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscURBQVM7QUFDNUI7QUFDQTs7QUFFQSxFQUFFLDBEQUFnQjtBQUNsQixFQUFFLHVFQUFrQjtBQUNwQixFQUFFLHVFQUFrQjs7QUFFcEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwwREFBZ0I7QUFDbEIsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx1RUFBa0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRSwyREFBZ0I7QUFDbEIsRUFBRSx1RUFBa0I7QUFDcEIsRUFBRSx1RUFBa0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsMERBQWdCO0FBQ2hCLHVFQUFrQjtBQUNsQix1RUFBa0I7O0FBRWxCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvc2lkZW5hdi5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGFza0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGltZWJsb2NrLmpzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy90aW1lYmxvY2tDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IHNpZGVOYXZDb21wb25lbnQgPSAob2JqcykgPT4ge1xuICBjb25zdCBnZXRMaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ3RleHQtZ3JheS04MDAnLCAndGV4dC1jZW50ZXInLCAndGV4dC0yeGwnLCAnb3ZlcmZsb3cteS1hdXRvJyk7XG4gICAgb2Jqcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ215LTEnLCAnZmxleCcsICdqdXN0aWZ5LWJldHdlZW4nKTtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgncm91bmRlZC1tZCcsICdweC0yJywgYCR7b2JqLmN1cnJlbnQgPyAnc2VsZWN0ZWQnIDogJ25vdC1zZWxlY3RlZCd9YCk7XG4gICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWl0ZW0tYnRuJywgJ3JvdW5kZWQtbWQnLCAncHgtMicsICdiZy1yZWQtNTAwJywgJ2ZvbnQtc2VtaWJvbGQnLCAndGV4dC13aGl0ZScsICdjdXJzb3ItcG9pbnRlcicsICdob3ZlcjpiZy1yZWQtODAwJyAgKTtcbiAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9iai5pZClcbiAgICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2JqLmlkKVxuICAgICAgZGF0ZS5pbm5lclRleHQgPSBvYmouZGF0ZTtcbiAgICAgIHJlbW92ZUJ0bi5pbm5lclRleHQgPSAneCc7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9ja3MtbGlzdCcpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG5hdi5hcHBlbmQoZ2V0TGlzdEl0ZW1zKCkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyTGlzdFxuICB9XG5cbn07XG5cbmV4cG9ydCB7IHNpZGVOYXZDb21wb25lbnQgfSIsImNvbnN0IFRhc2sgPSBmdW5jdGlvbiB0YXNrQ29uc3RydWN0b3Iob2JqKXtcbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IG9iai50aW1lOyBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBvYmoudGl0bGUgfHwgXCJubyB0aXRsZVwiOyBcbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICBpZiAob2JqLnR5cGUgPT0gXCJkZWVwV29ya1wiKXtcbiAgICAgIHJldHVybiBcImZ1bGxcIjtcbiAgICB9IGVsc2UgaWYgKG9iai50eXBlID09IFwic2hhbGxvd1dvcmtcIil7XG4gICAgICByZXR1cm4gXCIxLzJcIjtcbiAgICB9XG4gIH07IFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IG9iai5kZXNjcmlwdGlvbjsgXG4gIGNvbnN0IGlzQ29tcGxldGUgPSAoKSA9PiBvYmouY29tcGxldGVkIHx8IGZhbHNlIDsgXG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lOiBnZXRUaW1lKCksXG4gICAgdGl0bGU6IGdldFRpdGxlKCksXG4gICAgdHlwZTogZ2V0VHlwZSgpLFxuICAgIGRlc2NyaXB0aW9uOiBnZXREZXNjcmlwdGlvbigpLFxuICAgIGNvbXBsZXRlZDogaXNDb21wbGV0ZSgpXG4gIH07XG5cblxufTtcblxuZXhwb3J0IHsgVGFzayB9IiwiY29uc3QgdGFza0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCBnZXRUYXNrRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS0xMDAnLCAnZmxleCcsICdmbGV4LWNvbCcsICdqdXN0aWZ5LWNlbnRlcicsICdpdGVtcy1jZW50ZXInLCAncHktMScsICd0ZXh0LWNlbnRlcicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChgaC0ke29iai50aW1lfWAsIGB3LSR7b2JqLnR5cGV9YCk7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ2ZvbnQtc2VtaWJvbGQnLCAndGV4dC1ncmF5LTkwMCcsICdzaGFkb3ctc20nKTtcblxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbWQnLCAnZm9udC1saWdodCcsICd0ZXh0LWdyYXktNzAwJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgZ2V0VGFza0VsZW1lbnRcbiAgfTtcblxufTtcblxuZXhwb3J0IHsgdGFza0NvbXBvbmVudCB9IiwidmFyIGlkID0gMDtcblxuY29uc3QgVGltZUJsb2NrID0gZnVuY3Rpb24gdGltZUJsb2NrQ29uc3RydWN0b3Iob2JqKSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IG9iai5kYXRlO1xuXG4gIGNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSBOdW1iZXIob2JqLndha2VUaW1lKTsgaSA8PSBOdW1iZXIob2JqLnNsZWVwVGltZSk7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgdGFza3NQcm9wcyA9IHRhc2tzLm1hcCh0YXNrID0+IHRhc2suZ2V0UHJvcHMoKSk7XG5cbiAgY29uc3QgZ2V0SUQgPSBmdW5jdGlvbiBpbmNyZW1lbnRJZCgpIHtcbiAgICByZXR1cm4gaWQrKztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3VycmVudDogZmFsc2UsXG4gICAgZGF0ZTogZ2V0RGF0ZSgpLFxuICAgIHRhc2tzOiB0YXNrc1Byb3BzLFxuICAgIHdha2VUaW1lOiBvYmoud2FrZVRpbWUsXG4gICAgc2xlZXBUaW1lOiBvYmouc2xlZXBUaW1lLFxuICAgIHJhbmdlOiByYW5nZSgpLFxuICAgIGlkOiBnZXRJRCgpXG4gIH07XG4gIFxufTtcblxuZXhwb3J0IHsgVGltZUJsb2NrIH0iLCJpbXBvcnQgeyB0YXNrQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza0NvbXBvbmVudFwiO1xuXG5jb25zdCB0aW1lQmxvY2tDb21wb25lbnQgPSAob2JqKSA9PiB7XG5cbiAgY29uc3QgdGltZUdyaWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd0aW1lLWdyaWQnLCAnZ3JpZCcsICdnYXAtcHgnLCAnZ3JpZC1jb2xzLTEnLCAnYmctZ3JheS0yMDAnKTtcblxuICAgIG9iai5yYW5nZS5mb3JFYWNoKCBuID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbWUuaW5uZXJIVE1MID0gbjtcbiAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS03MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMTAwJywgJ2NvbC1zcGFuLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdjb2wtc3Bhbi0xJywgJ2gtNTYnLCAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtN3hsJyk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHRpbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZ3JpZCcsICdib3JkZXItYmx1ZS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAnaC0xMCcsICdjb2wtc3RhcnQtMicsICdjb2wtc3Bhbi0zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ2dhcC1weCcsICdncmlkJyk7XG5cbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZ3JpZCcpO1xuICAgIGdyaWQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIG9iai50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSB0YXNrQ29tcG9uZW50KHRhc2spLmdldFRhc2tFbGVtZW50KCk7XG4gICAgICBncmlkLmFwcGVuZCh0YXNrRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgfTtcblxuICBjb25zdCByZW5kZXJHcmlkcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKTtcbiAgICBtYWluR3JpZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbWFpbkdyaWQuYXBwZW5kKHRpbWVHcmlkKCkpO1xuICAgIG1haW5HcmlkLmFwcGVuZCh0YXNrR3JpZCgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGltZUdyaWQsXG4gICAgdGFza0dyaWQsXG4gICAgcmVuZGVyVGFza3MsXG4gICAgcmVuZGVyR3JpZHNcbiAgfTtcblxufTtcblxuZXhwb3J0IHsgdGltZUJsb2NrQ29tcG9uZW50IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRpbWVCbG9jayB9IGZyb20gXCIuL3RpbWVibG9ja1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IHNpZGVOYXZDb21wb25lbnQgfSBmcm9tIFwiLi9zaWRlbmF2XCI7XG5pbXBvcnQgeyB0aW1lQmxvY2tDb21wb25lbnQgfSBmcm9tIFwiLi90aW1lYmxvY2tDb21wb25lbnRcIjtcblxuLy8gVE9ETzpcbi8vIG1ha2UgZHluYW1pYyBldmVudCBsaXN0ZW5lcnNcblxuY29uc3QgVGltZUJsb2NrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCBnZXRMaXN0ID0gZnVuY3Rpb24gbGlzdE9mTG9jYWxTdG9yYWdlVGltZUJsb2NrcygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9ja3NcIiwgXCJbXVwiKTtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl07XG4gICAgfSBcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdO1xuICB9O1xuXG4gIGNvbnN0IGdldEJsb2NrcyA9IGZ1bmN0aW9uIExpc3RPZlBhcnNlZFRpbWVCbG9ja3MoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0TGlzdCgpKTtcbiAgfTtcblxuICBjb25zdCBhZGRCbG9jayA9IGZ1bmN0aW9uIGFkZEJsb2NrVG9Mb2NhbFN0b3JhZ2UoYmxvY2spIHtcbiAgICB2YXIgYmxvY2tzID0gZ2V0QmxvY2tzKCkgfHwgW107XG4gICAgYmxvY2tzLnB1c2goYmxvY2spO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKTtcbiAgfTtcblxuICBjb25zdCBnZXRDdXJyZW50QmxvY2sgPSBmdW5jdGlvbiBzZWxlY3RDdXJyZW50QmxvY2soKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuICAgIHZhciBmb3VuZCA9IGJsb2Nrcy5maW5kKGJsb2NrID0+IGJsb2NrLmN1cnJlbnQgPT09IHRydWUpO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICBjb25zdCBzZXRDdXJyZW50QmxvY2sgPSBmdW5jdGlvbiBzZXRDdXJyZW50VG9TZWxlY3RlZEJsb2NrKGlkKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuXG4gICAgLy8gdW5zZWxlY3QgYWxsIGZpcnN0XG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgYmxvY2suY3VycmVudCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICBpZiAoYmxvY2suaWQgPT0gaWQpIHtcbiAgICAgICBibG9jay5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUJsb2NrID0gZnVuY3Rpb24gcmVtb3ZlQmxvY2tGcm9tTGlzdChpZCkge1xuICAgIHZhciBibG9ja3MgPSBnZXRCbG9ja3MoKTtcblxuICAgIHZhciBmaWx0ZXJlZCA9IGJsb2Nrcy5maWx0ZXIoYmxvY2sgPT4gYmxvY2suaWQgIT0gaWQpO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWQpO1xuICB9XG5cbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uIGFkZFRhc2tUb0N1cnJlbnRCbG9jayh0YXNrKSB7XG4gICAgdmFyIGJsb2NrcyA9IGdldEJsb2NrcygpO1xuXG4gICAgYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgaWYgKGJsb2NrLmN1cnJlbnQgPT0gdHJ1ZSkge1xuICAgICAgICBibG9jay50YXNrcy5wdXNoKHRhc2spXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKVxuICB9O1xuXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0LFxuICAgIGdldEJsb2NrcyxcbiAgICBhZGRCbG9jayxcbiAgICBnZXRDdXJyZW50QmxvY2ssXG4gICAgc2V0Q3VycmVudEJsb2NrLFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlQmxvY2tcbiAgfTtcbn0pKCk7XG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtdGFzay1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwnKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ibG9jay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGJsb2NrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stbW9kYWwnKTtcbiAgYmxvY2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1ibG9jay1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgYmxvY2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1tb2RhbCcpO1xuICBibG9ja01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlO1xuICBjb25zdCB0YXNrRHVyYXRpb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwidGFzay1kdXJhdGlvblwiXScpKS5tYXAoeCA9PiB4LnZhbHVlLnBhZFN0YXJ0KDIsIFwiMFwiKSkuam9pbignJyk7XG4gIGNvbnN0IHRhc2tUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrLXR5cGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpLnZhbHVlO1xuXG5cbiAgY29uc3Qgb2JqID0ge1xuICAgIHRpbWU6IHRhc2tEdXJhdGlvbixcbiAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb24sXG4gICAgdHlwZTogdGFza1R5cGVcbiAgfVxuXG5cbiAgY29uc3QgbmV3VGFzayA9IFRhc2sob2JqKTtcbiAgVGltZUJsb2NrQ29udHJvbGxlci5hZGRUYXNrKG5ld1Rhc2spO1xuXG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyVGFza3MoKTtcblxuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpLnJlc2V0KCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbmF2LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgYmxvY2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1tb2RhbCcpO1xuICBjb25zdCBibG9ja0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImJsb2NrLWRhdGVcIl0nKS52YWx1ZTtcbiAgY29uc3QgYmxvY2tXYWtlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwid2FrZS10aW1lXCJdJykudmFsdWU7XG4gIGNvbnN0IGJsb2NrU2xlZXBUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJzbGVlcC10aW1lXCJdJykudmFsdWU7XG5cblxuICBjb25zdCBvYmogPSB7XG4gICAgZGF0ZTogYmxvY2tEYXRlLFxuICAgIHdha2VUaW1lOiBibG9ja1dha2VUaW1lLFxuICAgIHNsZWVwVGltZTogYmxvY2tTbGVlcFRpbWUgXG4gIH1cblxuICBjb25zdCBuZXdCbG9jayA9IFRpbWVCbG9jayhvYmopO1xuICBUaW1lQmxvY2tDb250cm9sbGVyLmFkZEJsb2NrKG5ld0Jsb2NrKTtcbiAgVGltZUJsb2NrQ29udHJvbGxlci5zZXRDdXJyZW50QmxvY2sobmV3QmxvY2suaWQpO1xuXG4gIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG5cbiAgYmxvY2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stZm9ybScpLnJlc2V0KCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2Nrcy1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50QmxvY2tUb1NlbGVjdGVkSXRlbShlKXtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbm90LXNlbGVjdGVkJykpIHtcbiAgICBcbiAgVGltZUJsb2NrQ29udHJvbGxlci5zZXRDdXJyZW50QmxvY2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcblxuICBzaWRlTmF2Q29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0QmxvY2tzKCkpLnJlbmRlckxpc3QoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICB9O1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9ja3MtbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21MaXN0KGUpe1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUtaXRlbS1idG4nKSkge1xuXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcblxuICAgIFRpbWVCbG9ja0NvbnRyb2xsZXIucmVtb3ZlQmxvY2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuXG4gIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG4gIH07XG59KTtcblxuLy8gb24gbG9hZFxuc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEJsb2NrcygpKS5yZW5kZXJMaXN0KCk7XG50aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbnRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuXG4vLyBUT0RPOiBcbi8vIFB1YlN1YiBjb3BpZWQgZnJvbSBodHRwczovL3BhdWwua2lubGFuLm1lL2J1aWxkaW5nLWEtcHVic3ViLWFwaS1pbi1qYXZhc2NyaXB0L1xuXG4vLyB2YXIgRXZlbnRNYW5hZ2VyID0gbmV3IChmdW5jdGlvbigpIHtcbi8vICAgdmFyIGV2ZW50cyA9IHt9O1xuXG4vLyAgIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcbi8vICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbi8vICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcbi8vICAgICB9KTtcbi8vICAgfTtcblxuLy8gICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHtcbi8vICAgICAgIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdID0gW107XG4vLyAgICAgfVxuLy8gICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4vLyAgIH07XG5cbi8vICAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcblxuLy8gICAgIHZhciBoYW5kbGVySWR4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbi8vICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcklkeCk7XG4vLyAgIH07XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==