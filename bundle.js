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
      item.classList.add('my-1');
      date.classList.add('rounded-md', 'px-8', `${obj.current ? 'selected' : 'not-selected'}`);
      date.innerText = obj.date;
      item.appendChild(date);
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
    range: range()
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
// import { DelegatedPlugin } from "webpack";


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
    let blocks = getBlocks() || [];
    blocks.push(block);
    localStorage["blocks"] = JSON.stringify(blocks);
  };

  const getCurrentBlock = function selectCurrentBlock() {
    let blocks = getBlocks();
    const found = blocks.find(block => block.current === true);
    return found;
  };

  const setCurrentBlock = function setCurrentToSelectedBlock(date) {
    let blocks = getBlocks();

    // unselect all first
    blocks.forEach(block => {
      block.current = false;
    });

    blocks.forEach(block => {
     if (block.date == date) {
       block.current = true;
     }
    });

    localStorage["blocks"] = JSON.stringify(blocks)
  };


  return {
    getList,
    getBlocks,
    addBlock,
    getCurrentBlock,
    setCurrentBlock,
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
  console.log(newTask);
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
  TimeBlockController.setCurrentBlock(newBlock.date);

  (0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getBlocks()).renderList();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderGrids();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlock()).renderTasks();

  blockModal.classList.toggle("hidden");
  document.querySelector('#block-form').reset();
});

document.querySelector('#side-nav-btn').addEventListener('click', function(){
  document.querySelector('#side-nav').classList.toggle('hidden');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNsQixFQUFFLHVFQUFrQjtBQUNwQixFQUFFLHVFQUFrQjs7QUFFcEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSwwREFBZ0I7QUFDaEIsdUVBQWtCO0FBQ2xCLHVFQUFrQjs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9zaWRlbmF2LmpzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy90YXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy90aW1lYmxvY2suanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3RpbWVibG9ja0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3Qgc2lkZU5hdkNvbXBvbmVudCA9IChvYmpzKSA9PiB7XG4gIGNvbnN0IGdldExpc3RJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1jb2wnLCAndGV4dC1ncmF5LTgwMCcsICd0ZXh0LWNlbnRlcicsICd0ZXh0LTJ4bCcsICdvdmVyZmxvdy15LWF1dG8nKTtcbiAgICBvYmpzLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbXktMScpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkLW1kJywgJ3B4LTgnLCBgJHtvYmouY3VycmVudCA/ICdzZWxlY3RlZCcgOiAnbm90LXNlbGVjdGVkJ31gKTtcbiAgICAgIGRhdGUuaW5uZXJUZXh0ID0gb2JqLmRhdGU7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9ja3MtbGlzdCcpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG5hdi5hcHBlbmQoZ2V0TGlzdEl0ZW1zKCkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyTGlzdFxuICB9XG5cbn07XG5cbmV4cG9ydCB7IHNpZGVOYXZDb21wb25lbnQgfSIsImNvbnN0IFRhc2sgPSBmdW5jdGlvbiB0YXNrQ29uc3RydWN0b3Iob2JqKXtcbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IG9iai50aW1lOyBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBvYmoudGl0bGUgfHwgXCJubyB0aXRsZVwiOyBcbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICBpZiAob2JqLnR5cGUgPT0gXCJkZWVwV29ya1wiKXtcbiAgICAgIHJldHVybiBcImZ1bGxcIjtcbiAgICB9IGVsc2UgaWYgKG9iai50eXBlID09IFwic2hhbGxvd1dvcmtcIil7XG4gICAgICByZXR1cm4gXCIxLzJcIjtcbiAgICB9XG4gIH07IFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IG9iai5kZXNjcmlwdGlvbjsgXG4gIGNvbnN0IGlzQ29tcGxldGUgPSAoKSA9PiBvYmouY29tcGxldGVkIHx8IGZhbHNlIDsgXG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lOiBnZXRUaW1lKCksXG4gICAgdGl0bGU6IGdldFRpdGxlKCksXG4gICAgdHlwZTogZ2V0VHlwZSgpLFxuICAgIGRlc2NyaXB0aW9uOiBnZXREZXNjcmlwdGlvbigpLFxuICAgIGNvbXBsZXRlZDogaXNDb21wbGV0ZSgpXG4gIH07XG5cblxufTtcblxuZXhwb3J0IHsgVGFzayB9IiwiY29uc3QgdGFza0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCBnZXRUYXNrRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS0xMDAnLCAnZmxleCcsICdmbGV4LWNvbCcsICdqdXN0aWZ5LWNlbnRlcicsICdpdGVtcy1jZW50ZXInLCAncHktMScsICd0ZXh0LWNlbnRlcicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChgaC0ke29iai50aW1lfWAsIGB3LSR7b2JqLnR5cGV9YCk7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ2ZvbnQtc2VtaWJvbGQnLCAndGV4dC1ncmF5LTkwMCcsICdzaGFkb3ctc20nKTtcblxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbWQnLCAnZm9udC1saWdodCcsICd0ZXh0LWdyYXktNzAwJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgZ2V0VGFza0VsZW1lbnRcbiAgfTtcblxufTtcblxuZXhwb3J0IHsgdGFza0NvbXBvbmVudCB9IiwiY29uc3QgVGltZUJsb2NrID0gZnVuY3Rpb24gdGltZUJsb2NrQ29uc3RydWN0b3Iob2JqKSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IG9iai5kYXRlO1xuXG4gIGNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSBOdW1iZXIob2JqLndha2VUaW1lKTsgaSA8PSBOdW1iZXIob2JqLnNsZWVwVGltZSk7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgdGFza3NQcm9wcyA9IHRhc2tzLm1hcCh0YXNrID0+IHRhc2suZ2V0UHJvcHMoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50OiBmYWxzZSxcbiAgICBkYXRlOiBnZXREYXRlKCksXG4gICAgdGFza3M6IHRhc2tzUHJvcHMsXG4gICAgd2FrZVRpbWU6IG9iai53YWtlVGltZSxcbiAgICBzbGVlcFRpbWU6IG9iai5zbGVlcFRpbWUsXG4gICAgcmFuZ2U6IHJhbmdlKClcbiAgfTtcbiAgXG59O1xuXG5leHBvcnQgeyBUaW1lQmxvY2sgfSIsImltcG9ydCB7IHRhc2tDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrQ29tcG9uZW50XCI7XG5cbmNvbnN0IHRpbWVCbG9ja0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCB0aW1lR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3RpbWUtZ3JpZCcsICdncmlkJywgJ2dhcC1weCcsICdncmlkLWNvbHMtMScsICdiZy1ncmF5LTIwMCcpO1xuXG4gICAgb2JqLnJhbmdlLmZvckVhY2goIG4gPT4ge1xuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGltZS5pbm5lckhUTUwgPSBuO1xuICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdiZy1ncmF5LTcwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JheS0xMDAnLCAnY29sLXNwYW4tMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbC1zcGFuLTEnLCAnaC01NicsICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC03eGwnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH07XG5cbiAgY29uc3QgdGFza0dyaWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgndGFzay1ncmlkJywgJ2JvcmRlci1ibHVlLTUwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICdoLTEwJywgJ2NvbC1zdGFydC0yJywgJ2NvbC1zcGFuLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAnZ2FwLXB4JywgJ2dyaWQnKTtcblxuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ncmlkJyk7XG4gICAgZ3JpZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgb2JqLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICBjb25zdCB0YXNrRWxlbWVudCA9IHRhc2tDb21wb25lbnQodGFzaykuZ2V0VGFza0VsZW1lbnQoKTtcbiAgICAgIGdyaWQuYXBwZW5kKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcblxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpO1xuICAgIG1haW5HcmlkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBtYWluR3JpZC5hcHBlbmQodGltZUdyaWQoKSk7XG4gICAgbWFpbkdyaWQuYXBwZW5kKHRhc2tHcmlkKCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lR3JpZCxcbiAgICB0YXNrR3JpZCxcbiAgICByZW5kZXJUYXNrcyxcbiAgICByZW5kZXJHcmlkc1xuICB9O1xuXG59O1xuXG5leHBvcnQgeyB0aW1lQmxvY2tDb21wb25lbnQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHsgRGVsZWdhdGVkUGx1Z2luIH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRpbWVCbG9jayB9IGZyb20gXCIuL3RpbWVibG9ja1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IHNpZGVOYXZDb21wb25lbnQgfSBmcm9tIFwiLi9zaWRlbmF2XCI7XG5pbXBvcnQgeyB0aW1lQmxvY2tDb21wb25lbnQgfSBmcm9tIFwiLi90aW1lYmxvY2tDb21wb25lbnRcIjtcblxuLy8gVE9ETzpcbi8vIG1ha2UgZHluYW1pYyBldmVudCBsaXN0ZW5lcnNcblxuY29uc3QgVGltZUJsb2NrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCBnZXRMaXN0ID0gZnVuY3Rpb24gbGlzdE9mTG9jYWxTdG9yYWdlVGltZUJsb2NrcygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9ja3NcIiwgXCJbXVwiKTtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl07XG4gICAgfSBcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdO1xuICB9O1xuXG4gIGNvbnN0IGdldEJsb2NrcyA9IGZ1bmN0aW9uIExpc3RPZlBhcnNlZFRpbWVCbG9ja3MoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0TGlzdCgpKTtcbiAgfTtcblxuICBjb25zdCBhZGRCbG9jayA9IGZ1bmN0aW9uIGFkZEJsb2NrVG9Mb2NhbFN0b3JhZ2UoYmxvY2spIHtcbiAgICBsZXQgYmxvY2tzID0gZ2V0QmxvY2tzKCkgfHwgW107XG4gICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgIGxvY2FsU3RvcmFnZVtcImJsb2Nrc1wiXSA9IEpTT04uc3RyaW5naWZ5KGJsb2Nrcyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q3VycmVudEJsb2NrID0gZnVuY3Rpb24gc2VsZWN0Q3VycmVudEJsb2NrKCkge1xuICAgIGxldCBibG9ja3MgPSBnZXRCbG9ja3MoKTtcbiAgICBjb25zdCBmb3VuZCA9IGJsb2Nrcy5maW5kKGJsb2NrID0+IGJsb2NrLmN1cnJlbnQgPT09IHRydWUpO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICBjb25zdCBzZXRDdXJyZW50QmxvY2sgPSBmdW5jdGlvbiBzZXRDdXJyZW50VG9TZWxlY3RlZEJsb2NrKGRhdGUpIHtcbiAgICBsZXQgYmxvY2tzID0gZ2V0QmxvY2tzKCk7XG5cbiAgICAvLyB1bnNlbGVjdCBhbGwgZmlyc3RcbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICBibG9jay5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgIGlmIChibG9jay5kYXRlID09IGRhdGUpIHtcbiAgICAgICBibG9jay5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzKVxuICB9O1xuXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0LFxuICAgIGdldEJsb2NrcyxcbiAgICBhZGRCbG9jayxcbiAgICBnZXRDdXJyZW50QmxvY2ssXG4gICAgc2V0Q3VycmVudEJsb2NrLFxuICB9O1xufSkoKTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS10YXNrLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJsb2NrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgYmxvY2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1tb2RhbCcpO1xuICBibG9ja01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJsb2NrLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCBibG9ja01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLW1vZGFsJyk7XG4gIGJsb2NrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEdXJhdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ0YXNrLWR1cmF0aW9uXCJdJykpLm1hcCh4ID0+IHgudmFsdWUucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKCcnKTtcbiAgY29uc3QgdGFza1R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2stdHlwZVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG5cblxuICBjb25zdCBvYmogPSB7XG4gICAgdGltZTogdGFza0R1cmF0aW9uLFxuICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcbiAgICB0eXBlOiB0YXNrVHlwZVxuICB9XG5cblxuICBjb25zdCBuZXdUYXNrID0gVGFzayhvYmopO1xuICBjb25zb2xlLmxvZyhuZXdUYXNrKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKS5yZXNldCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGJsb2NrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stbW9kYWwnKTtcbiAgY29uc3QgYmxvY2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJibG9jay1kYXRlXCJdJykudmFsdWU7XG4gIGNvbnN0IGJsb2NrV2FrZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIndha2UtdGltZVwiXScpLnZhbHVlO1xuICBjb25zdCBibG9ja1NsZWVwVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2xlZXAtdGltZVwiXScpLnZhbHVlO1xuXG5cbiAgY29uc3Qgb2JqID0ge1xuICAgIGRhdGU6IGJsb2NrRGF0ZSxcbiAgICB3YWtlVGltZTogYmxvY2tXYWtlVGltZSxcbiAgICBzbGVlcFRpbWU6IGJsb2NrU2xlZXBUaW1lIFxuICB9XG5cbiAgY29uc3QgbmV3QmxvY2sgPSBUaW1lQmxvY2sob2JqKTtcbiAgVGltZUJsb2NrQ29udHJvbGxlci5hZGRCbG9jayhuZXdCbG9jayk7XG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuc2V0Q3VycmVudEJsb2NrKG5ld0Jsb2NrLmRhdGUpO1xuXG4gIHNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG5cbiAgYmxvY2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2stZm9ybScpLnJlc2V0KCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbmF2LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuLy8gb24gbG9hZFxuc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEJsb2NrcygpKS5yZW5kZXJMaXN0KCk7XG50aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKSkucmVuZGVyR3JpZHMoKTtcbnRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuXG4vLyBUT0RPOiBcbi8vIFB1YlN1YiBjb3BpZWQgZnJvbSBodHRwczovL3BhdWwua2lubGFuLm1lL2J1aWxkaW5nLWEtcHVic3ViLWFwaS1pbi1qYXZhc2NyaXB0L1xuXG4vLyB2YXIgRXZlbnRNYW5hZ2VyID0gbmV3IChmdW5jdGlvbigpIHtcbi8vICAgdmFyIGV2ZW50cyA9IHt9O1xuXG4vLyAgIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcbi8vICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbi8vICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcbi8vICAgICB9KTtcbi8vICAgfTtcblxuLy8gICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHtcbi8vICAgICAgIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdID0gW107XG4vLyAgICAgfVxuLy8gICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4vLyAgIH07XG5cbi8vICAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbi8vICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4vLyAgICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcblxuLy8gICAgIHZhciBoYW5kbGVySWR4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbi8vICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcklkeCk7XG4vLyAgIH07XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==