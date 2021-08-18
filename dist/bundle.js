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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLDRCQUE0QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWMsUUFBUSxjQUFjO0FBQ2hFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHlCQUF5QjtBQUNqRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBUaW1lQmxvY2sgPSAob2JqKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgY29uc3QgcmFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvcihsZXQgaSA9IE51bWJlcihvYmoud2FrZVRpbWUpOyBpIDw9IE51bWJlcihvYmouc2xlZXBUaW1lKTsgaSsrKSB7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3NcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2tPYmopID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2tPYmopO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmFuZ2UsXG4gICAgZ2V0VGFza3MsXG4gICAgYWRkVGFza1xuICB9O1xuICBcbn07XG5cblxuY29uc3QgdGltZUJsb2NrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IHRpbWVHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3RpbWUtZ3JpZCcsICdncmlkJywgJ2dhcC1weCcsICdncmlkLWNvbHMtMScsICdiZy1ncmF5LTIwMCcpO1xuXG4gICAgb2JqLnJhbmdlKCkuZm9yRWFjaCggbiA9PiB7XG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aW1lLmlubmVySFRNTCA9IG47XG4gICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ2JnLWdyYXktNzAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ncmF5LTEwMCcsICdjb2wtc3Bhbi0xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnY29sLXNwYW4tMScsICdoLTU2JywgJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LTd4bCcpO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCB0YXNrR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWdyaWQnLCAnYmctZ3JheS00MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLWJsdWUtNTAwJywnaC0xMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICdjb2wtc3RhcnQtMicsICdjb2wtc3Bhbi0zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ2dhcC1weCcsICdncmlkJyk7XG5cbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZ3JpZCcpO1xuICAgIGdyaWQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIG9iai5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XG4gICAgICBjb25zdCB0YXNrRWxlbWVudCA9IHRhc2tDb21wb25lbnQodGFzaykuZ2V0VGFza0VsZW1lbnQoKTtcbiAgICAgIGdyaWQuYXBwZW5kKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcblxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpO1xuXG4gICAgbWFpbkdyaWQuYXBwZW5kKHRpbWVHcmlkKCkpO1xuICAgIG1haW5HcmlkLmFwcGVuZCh0YXNrR3JpZCgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGltZUdyaWQsXG4gICAgdGFza0dyaWQsXG4gICAgcmVuZGVyVGFza3MsXG4gICAgcmVuZGVyR3JpZHNcbiAgfTtcblxufTtcblxuY29uc3QgVGFzayA9IChvYmopID0+IHtcbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IG9iai50aW1lOyBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBvYmoudGl0bGUgfHwgXCJubyB0aXRsZVwiOyBcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBvYmouZGVzY3JpcHRpb24gfHwgXCJubyBkZXNjcmlwdGlvblwiOyBcbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IG9iai50eXBlOyBcbiAgXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaW1lLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldFR5cGVcbiAgfVxuXG59O1xuXG5jb25zdCB0YXNrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IGdldFRhc2tFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2JnLWJsdWUtMzAwJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKGBoLSR7b2JqLmdldFRpbWUoKX1gLCBgdy0ke29iai5nZXRUeXBlKCl9YCk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgZ2V0VGFza0VsZW1lbnRcbiAgfTtcblxufTtcblxudmFyIGJsb2NrID0ge1xuICB3YWtlVGltZTogNSxcbiAgc2xlZXBUaW1lOiAyMVxufTtcblxudmFyIG5ld1Rhc2sgPSBUYXNrKHtcbiAgdGltZTogXCIxaFwiLFxuICB0eXBlOiBcImZ1bGxcIlxufSlcblxudmFyIHRlc3QgPSBUaW1lQmxvY2soYmxvY2spO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpLmFwcGVuZENoaWxkKHRpbWVCbG9ja0NvbXBvbmVudCh0ZXN0KS50aW1lR3JpZCgpKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKS5hcHBlbmRDaGlsZCh0aW1lQmxvY2tDb21wb25lbnQodGVzdCkudGFza0dyaWQoKSk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ncmlkJykuYXBwZW5kQ2hpbGQodGFza0NvbXBvbmVudChuZXdUYXNrKS50YXNrKCkpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZ3JpZCcpLmFwcGVuZENoaWxkKHRhc2tDb21wb25lbnQodGFzayh7dGltZTogXCIzMG1cIiwgdHlwZTogXCIxLzJcIn0pKS50YXNrKCkpO1xudGltZUJsb2NrQ29tcG9uZW50KHRlc3QpLnJlbmRlckdyaWRzKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgdGVzdC5hZGRUYXNrKG5ld1Rhc2spO1xuICB0aW1lQmxvY2tDb21wb25lbnQodGVzdCkucmVuZGVyVGFza3MoKTtcbiAgY29uc29sZS5sb2codGVzdC5nZXRUYXNrcygpKTtcbn0pO1xuXG5cblxuLy8gVE9ETzogXG4vLyBhZGQgRE9NIGNvbnRyb2xsZXIgbW9kdWxlXG5cbi8vIFB1YlN1YiBjb3BpZWQgZnJvbSBodHRwczovL3BhdWwua2lubGFuLm1lL2J1aWxkaW5nLWEtcHVic3ViLWFwaS1pbi1qYXZhc2NyaXB0L1xuXG52YXIgRXZlbnRNYW5hZ2VyID0gbmV3IChmdW5jdGlvbigpIHtcbiAgdmFyIGV2ZW50cyA9IHt9O1xuXG4gIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHtcbiAgICAgIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdID0gW107XG4gICAgfVxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH07XG5cbiAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBoYW5kbGVySWR4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcklkeCk7XG4gIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=