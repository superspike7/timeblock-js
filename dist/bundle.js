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
    grid.classList.add('task-grid', 'border-blue-500',
                       'h-10', 'col-start-2', 'col-span-3',
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
  const isComplete = () => obj.completed || false ; 
  

  return {
    getTime,
    getTitle,
    getDescription,
    getType,
    isComplete
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
  const taskModal = document.querySelector('.task-modal');
  taskModal.classList.toggle("hidden");
});

document.querySelector('.close-modal').addEventListener('click', function(){
  const taskModal = document.querySelector('.task-modal');
  taskModal.classList.toggle("hidden");
});

document.querySelector('.task-submit').addEventListener('click', function(){
  const taskTitle = document.querySelector('#task-title').value;
  const taskDuration = Array.from(document.querySelectorAll('[name="task-duration"]')).map(x => x.value);
  const taskType = document.querySelector('[name="task-type"]:checked').value;
  const taskDescription = document.querySelector('#task-description').value;

  console.log(taskTitle);
  console.log(taskDuration);
  console.log(taskType);
  console.log(taskDescription);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLDRCQUE0QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYyxRQUFRLGNBQWM7QUFDaEU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UseUJBQXlCO0FBQ2pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3QgVGltZUJsb2NrID0gKG9iaikgPT4ge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIGNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSBOdW1iZXIob2JqLndha2VUaW1lKTsgaSA8PSBOdW1iZXIob2JqLnNsZWVwVGltZSk7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzXG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrT2JqKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrT2JqKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJhbmdlLFxuICAgIGdldFRhc2tzLFxuICAgIGFkZFRhc2tcbiAgfTtcbiAgXG59O1xuXG5cbmNvbnN0IHRpbWVCbG9ja0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCB0aW1lR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd0aW1lLWdyaWQnLCAnZ3JpZCcsICdnYXAtcHgnLCAnZ3JpZC1jb2xzLTEnLCAnYmctZ3JheS0yMDAnKTtcblxuICAgIG9iai5yYW5nZSgpLmZvckVhY2goIG4gPT4ge1xuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGltZS5pbm5lckhUTUwgPSBuO1xuICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdiZy1ncmF5LTcwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JheS0xMDAnLCAnY29sLXNwYW4tMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbC1zcGFuLTEnLCAnaC01NicsICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC03eGwnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH07XG5cbiAgY29uc3QgdGFza0dyaWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgndGFzay1ncmlkJywgJ2JvcmRlci1ibHVlLTUwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICdoLTEwJywgJ2NvbC1zdGFydC0yJywgJ2NvbC1zcGFuLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAnZ2FwLXB4JywgJ2dyaWQnKTtcblxuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ncmlkJyk7XG4gICAgZ3JpZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgb2JqLmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gdGFza0NvbXBvbmVudCh0YXNrKS5nZXRUYXNrRWxlbWVudCgpO1xuICAgICAgZ3JpZC5hcHBlbmQodGFza0VsZW1lbnQpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgY29uc3QgcmVuZGVyR3JpZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJyk7XG5cbiAgICBtYWluR3JpZC5hcHBlbmQodGltZUdyaWQoKSk7XG4gICAgbWFpbkdyaWQuYXBwZW5kKHRhc2tHcmlkKCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aW1lR3JpZCxcbiAgICB0YXNrR3JpZCxcbiAgICByZW5kZXJUYXNrcyxcbiAgICByZW5kZXJHcmlkc1xuICB9O1xuXG59O1xuXG5jb25zdCBUYXNrID0gKG9iaikgPT4ge1xuICBjb25zdCBnZXRUaW1lID0gKCkgPT4gb2JqLnRpbWU7IFxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IG9iai50aXRsZSB8fCBcIm5vIHRpdGxlXCI7IFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IG9iai5kZXNjcmlwdGlvbiB8fCBcIm5vIGRlc2NyaXB0aW9uXCI7IFxuICBjb25zdCBnZXRUeXBlID0gKCkgPT4gb2JqLnR5cGU7IFxuICBjb25zdCBpc0NvbXBsZXRlID0gKCkgPT4gb2JqLmNvbXBsZXRlZCB8fCBmYWxzZSA7IFxuICBcblxuICByZXR1cm4ge1xuICAgIGdldFRpbWUsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0VHlwZSxcbiAgICBpc0NvbXBsZXRlXG4gIH1cblxufTtcblxuY29uc3QgdGFza0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCBnZXRUYXNrRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTMwMCcpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChgaC0ke29iai5nZXRUaW1lKCl9YCwgYHctJHtvYmouZ2V0VHlwZSgpfWApO1xuICAgIHJldHVybiB0YXNrO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGdldFRhc2tFbGVtZW50XG4gIH07XG5cbn07XG5cbnZhciBibG9jayA9IHtcbiAgd2FrZVRpbWU6IDUsXG4gIHNsZWVwVGltZTogMjFcbn07XG5cbnZhciBuZXdUYXNrID0gVGFzayh7XG4gIHRpbWU6IFwiMWhcIixcbiAgdHlwZTogXCJmdWxsXCJcbn0pXG5cbnZhciB0ZXN0ID0gVGltZUJsb2NrKGJsb2NrKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKS5hcHBlbmRDaGlsZCh0aW1lQmxvY2tDb21wb25lbnQodGVzdCkudGltZUdyaWQoKSk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuYXBwZW5kQ2hpbGQodGltZUJsb2NrQ29tcG9uZW50KHRlc3QpLnRhc2tHcmlkKCkpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZ3JpZCcpLmFwcGVuZENoaWxkKHRhc2tDb21wb25lbnQobmV3VGFzaykudGFzaygpKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWdyaWQnKS5hcHBlbmRDaGlsZCh0YXNrQ29tcG9uZW50KHRhc2soe3RpbWU6IFwiMzBtXCIsIHR5cGU6IFwiMS8yXCJ9KSkudGFzaygpKTtcbnRpbWVCbG9ja0NvbXBvbmVudCh0ZXN0KS5yZW5kZXJHcmlkcygpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwnKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlO1xuICBjb25zdCB0YXNrRHVyYXRpb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwidGFzay1kdXJhdGlvblwiXScpKS5tYXAoeCA9PiB4LnZhbHVlKTtcbiAgY29uc3QgdGFza1R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2stdHlwZVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG5cbiAgY29uc29sZS5sb2codGFza1RpdGxlKTtcbiAgY29uc29sZS5sb2codGFza0R1cmF0aW9uKTtcbiAgY29uc29sZS5sb2codGFza1R5cGUpO1xuICBjb25zb2xlLmxvZyh0YXNrRGVzY3JpcHRpb24pO1xufSk7XG5cblxuLy8gVE9ETzogXG4vLyBhZGQgRE9NIGNvbnRyb2xsZXIgbW9kdWxlXG5cbi8vIFB1YlN1YiBjb3BpZWQgZnJvbSBodHRwczovL3BhdWwua2lubGFuLm1lL2J1aWxkaW5nLWEtcHVic3ViLWFwaS1pbi1qYXZhc2NyaXB0L1xuXG52YXIgRXZlbnRNYW5hZ2VyID0gbmV3IChmdW5jdGlvbigpIHtcbiAgdmFyIGV2ZW50cyA9IHt9O1xuXG4gIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHtcbiAgICAgIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdID0gW107XG4gICAgfVxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH07XG5cbiAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBoYW5kbGVySWR4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcklkeCk7XG4gIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=