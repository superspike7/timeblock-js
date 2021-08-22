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

  const getDate = () => obj.date;

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

  const getJson = () => {
    const tasksJson = tasks.map(task => task.getJson());
    return {
      date: getDate(),
      tasks: tasksJson,
      wakeTime: obj.wakeTime,
      sleepTime: obj.sleepTime,
      range: range()
    }
  };

  return {
    range,
    getTasks,
    addTask,
    getDate,
    getJson
  };
  
};
// ADD local storage
const TimeBlockController = (() => {
  let currentBlock = '';
  const blocks = [];
  const jsonBlocks = JSON.parse(localStorage.getItem('blocks')) || [];


  const addBlock = obj => {
    blocks.push(obj);
    jsonBlocks.push(obj.getJson());
    localStorage["blocks"] = JSON.stringify(jsonBlocks);
  };

  const setCurrentBlock = date => {
    const found = jsonBlocks.find(block => block.date == date);
    currentBlock = found;
  };

  const getBlocks = () => blocks;

  const getCurrentBlock = () => currentBlock;

  const log = () => {
    console.log(currentBlock);
    console.log(currentBlock.getJson());
    console.log(JSON.stringify(currentBlock.getJson()));
  }

  return {
    addBlock,
    setCurrentBlock,
    getBlocks,
    getCurrentBlock,
    log
  };
})();


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
  const getType = () => {
    if (obj.type == "deepWork"){
      return "full";
    } else if (obj.type == "shallowWork"){
      return "1/2";
    }
  }; 
  const getDescription = () => obj.description; 
  const isComplete = () => obj.completed || false ; 

  const getJson = () =>  {
    return {
     time: getTime(),
     title: getTitle(),
     type: getType(),
     description: getDescription(),
     completed: isComplete()
    }
  };
  

  return {
    getTime,
    getTitle,
    getDescription,
    getType,
    isComplete,
    getJson
  }

};

const taskComponent = (obj) => {

  const getTaskElement = () => {
    const task = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');
    task.classList.add('bg-blue-100', 'flex', 'flex-col', 'justify-center', 'items-center', 'py-1', 'text-center');
    task.classList.add(`h-${obj.time}`, `w-${obj.type}`);

    title.classList.add('text-xl', 'font-semibold', 'text-gray-900', 'shadow-sm');

    description.classList.add('text-md', 'font-light', 'text-gray-700');

    title.textContent = obj.type;
    description.textContent = obj.description;

    task.appendChild(title);
    task.appendChild(description);

    return task;
  }


  return {
    getTaskElement
  };

};

var block1 = {
  wakeTime: 5,
  sleepTime: 21,
  date: 'August 21, 2021'
};

var block2 = {
  wakeTime: 9,
  sleepTime: 20,
  date: 'August 22, 2021'
};

var test1 = TimeBlock(block1);
var test2 = TimeBlock(block2);

localStorage.clear();

TimeBlockController.addBlock(test1);
TimeBlockController.addBlock(test2);
TimeBlockController.setCurrentBlock("August 21, 2021");


timeBlockComponent(TimeBlockController.getCurrentBlock()).renderGrids();

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

  // clear inputs 

  const newTask = Task(obj);
  TimeBlockController.getCurrentBlock().addTask(newTask);
  timeBlockComponent(TimeBlockController.getCurrentBlock()).renderTasks();
  TimeBlockController.log();

  taskModal.classList.toggle("hidden");
  document.querySelector('#task-form').reset();
});

document.querySelector('#side-nav-btn').addEventListener('click', function(){
  document.querySelector('#side-nav').classList.toggle('hidden');
});


// TODO: 
// local storage

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLDRCQUE0QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTLFFBQVEsU0FBUzs7QUFFdEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3QgVGltZUJsb2NrID0gKG9iaikgPT4ge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiBvYmouZGF0ZTtcblxuICBjb25zdCByYW5nZSA9ICgpID0+IHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yKGxldCBpID0gTnVtYmVyKG9iai53YWtlVGltZSk7IGkgPD0gTnVtYmVyKG9iai5zbGVlcFRpbWUpOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrc1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFza09iaikgPT4ge1xuICAgIHRhc2tzLnB1c2godGFza09iaik7XG4gIH07XG5cbiAgY29uc3QgZ2V0SnNvbiA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrc0pzb24gPSB0YXNrcy5tYXAodGFzayA9PiB0YXNrLmdldEpzb24oKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGdldERhdGUoKSxcbiAgICAgIHRhc2tzOiB0YXNrc0pzb24sXG4gICAgICB3YWtlVGltZTogb2JqLndha2VUaW1lLFxuICAgICAgc2xlZXBUaW1lOiBvYmouc2xlZXBUaW1lLFxuICAgICAgcmFuZ2U6IHJhbmdlKClcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByYW5nZSxcbiAgICBnZXRUYXNrcyxcbiAgICBhZGRUYXNrLFxuICAgIGdldERhdGUsXG4gICAgZ2V0SnNvblxuICB9O1xuICBcbn07XG4vLyBBREQgbG9jYWwgc3RvcmFnZVxuY29uc3QgVGltZUJsb2NrQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50QmxvY2sgPSAnJztcbiAgY29uc3QgYmxvY2tzID0gW107XG4gIGNvbnN0IGpzb25CbG9ja3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9ja3MnKSkgfHwgW107XG5cblxuICBjb25zdCBhZGRCbG9jayA9IG9iaiA9PiB7XG4gICAgYmxvY2tzLnB1c2gob2JqKTtcbiAgICBqc29uQmxvY2tzLnB1c2gob2JqLmdldEpzb24oKSk7XG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoanNvbkJsb2Nrcyk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q3VycmVudEJsb2NrID0gZGF0ZSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSBqc29uQmxvY2tzLmZpbmQoYmxvY2sgPT4gYmxvY2suZGF0ZSA9PSBkYXRlKTtcbiAgICBjdXJyZW50QmxvY2sgPSBmb3VuZDtcbiAgfTtcblxuICBjb25zdCBnZXRCbG9ja3MgPSAoKSA9PiBibG9ja3M7XG5cbiAgY29uc3QgZ2V0Q3VycmVudEJsb2NrID0gKCkgPT4gY3VycmVudEJsb2NrO1xuXG4gIGNvbnN0IGxvZyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50QmxvY2spO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRCbG9jay5nZXRKc29uKCkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGN1cnJlbnRCbG9jay5nZXRKc29uKCkpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkQmxvY2ssXG4gICAgc2V0Q3VycmVudEJsb2NrLFxuICAgIGdldEJsb2NrcyxcbiAgICBnZXRDdXJyZW50QmxvY2ssXG4gICAgbG9nXG4gIH07XG59KSgpO1xuXG5cbmNvbnN0IHRpbWVCbG9ja0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCB0aW1lR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd0aW1lLWdyaWQnLCAnZ3JpZCcsICdnYXAtcHgnLCAnZ3JpZC1jb2xzLTEnLCAnYmctZ3JheS0yMDAnKTtcblxuICAgIG9iai5yYW5nZS5mb3JFYWNoKCBuID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbWUuaW5uZXJIVE1MID0gbjtcbiAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS03MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMTAwJywgJ2NvbC1zcGFuLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdjb2wtc3Bhbi0xJywgJ2gtNTYnLCAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtN3hsJyk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHRpbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZ3JpZCcsICdib3JkZXItYmx1ZS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAnaC0xMCcsICdjb2wtc3RhcnQtMicsICdjb2wtc3Bhbi0zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ2dhcC1weCcsICdncmlkJyk7XG5cbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZ3JpZCcpO1xuICAgIGdyaWQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIG9iai50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSB0YXNrQ29tcG9uZW50KHRhc2spLmdldFRhc2tFbGVtZW50KCk7XG4gICAgICBncmlkLmFwcGVuZCh0YXNrRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgfTtcblxuICBjb25zdCByZW5kZXJHcmlkcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKTtcblxuICAgIG1haW5HcmlkLmFwcGVuZCh0aW1lR3JpZCgpKTtcbiAgICBtYWluR3JpZC5hcHBlbmQodGFza0dyaWQoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpbWVHcmlkLFxuICAgIHRhc2tHcmlkLFxuICAgIHJlbmRlclRhc2tzLFxuICAgIHJlbmRlckdyaWRzXG4gIH07XG5cbn07XG5cbmNvbnN0IFRhc2sgPSAob2JqKSA9PiB7XG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiBvYmoudGltZTsgXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gb2JqLnRpdGxlIHx8IFwibm8gdGl0bGVcIjsgXG4gIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgaWYgKG9iai50eXBlID09IFwiZGVlcFdvcmtcIil7XG4gICAgICByZXR1cm4gXCJmdWxsXCI7XG4gICAgfSBlbHNlIGlmIChvYmoudHlwZSA9PSBcInNoYWxsb3dXb3JrXCIpe1xuICAgICAgcmV0dXJuIFwiMS8yXCI7XG4gICAgfVxuICB9OyBcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBvYmouZGVzY3JpcHRpb247IFxuICBjb25zdCBpc0NvbXBsZXRlID0gKCkgPT4gb2JqLmNvbXBsZXRlZCB8fCBmYWxzZSA7IFxuXG4gIGNvbnN0IGdldEpzb24gPSAoKSA9PiAge1xuICAgIHJldHVybiB7XG4gICAgIHRpbWU6IGdldFRpbWUoKSxcbiAgICAgdGl0bGU6IGdldFRpdGxlKCksXG4gICAgIHR5cGU6IGdldFR5cGUoKSxcbiAgICAgZGVzY3JpcHRpb246IGdldERlc2NyaXB0aW9uKCksXG4gICAgIGNvbXBsZXRlZDogaXNDb21wbGV0ZSgpXG4gICAgfVxuICB9O1xuICBcblxuICByZXR1cm4ge1xuICAgIGdldFRpbWUsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0VHlwZSxcbiAgICBpc0NvbXBsZXRlLFxuICAgIGdldEpzb25cbiAgfVxuXG59O1xuXG5jb25zdCB0YXNrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IGdldFRhc2tFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTEwMCcsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdweS0xJywgJ3RleHQtY2VudGVyJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKGBoLSR7b2JqLnRpbWV9YCwgYHctJHtvYmoudHlwZX1gKTtcblxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQteGwnLCAnZm9udC1zZW1pYm9sZCcsICd0ZXh0LWdyYXktOTAwJywgJ3NoYWRvdy1zbScpO1xuXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tZCcsICdmb250LWxpZ2h0JywgJ3RleHQtZ3JheS03MDAnKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnR5cGU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGdldFRhc2tFbGVtZW50XG4gIH07XG5cbn07XG5cbnZhciBibG9jazEgPSB7XG4gIHdha2VUaW1lOiA1LFxuICBzbGVlcFRpbWU6IDIxLFxuICBkYXRlOiAnQXVndXN0IDIxLCAyMDIxJ1xufTtcblxudmFyIGJsb2NrMiA9IHtcbiAgd2FrZVRpbWU6IDksXG4gIHNsZWVwVGltZTogMjAsXG4gIGRhdGU6ICdBdWd1c3QgMjIsIDIwMjEnXG59O1xuXG52YXIgdGVzdDEgPSBUaW1lQmxvY2soYmxvY2sxKTtcbnZhciB0ZXN0MiA9IFRpbWVCbG9jayhibG9jazIpO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuVGltZUJsb2NrQ29udHJvbGxlci5hZGRCbG9jayh0ZXN0MSk7XG5UaW1lQmxvY2tDb250cm9sbGVyLmFkZEJsb2NrKHRlc3QyKTtcblRpbWVCbG9ja0NvbnRyb2xsZXIuc2V0Q3VycmVudEJsb2NrKFwiQXVndXN0IDIxLCAyMDIxXCIpO1xuXG5cbnRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJHcmlkcygpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwnKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlO1xuICBjb25zdCB0YXNrRHVyYXRpb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwidGFzay1kdXJhdGlvblwiXScpKS5tYXAoeCA9PiB4LnZhbHVlLnBhZFN0YXJ0KDIsIFwiMFwiKSkuam9pbignJyk7XG4gIGNvbnN0IHRhc2tUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrLXR5cGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpLnZhbHVlO1xuXG5cbiAgY29uc3Qgb2JqID0ge1xuICAgIHRpbWU6IHRhc2tEdXJhdGlvbixcbiAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb24sXG4gICAgdHlwZTogdGFza1R5cGVcbiAgfVxuXG4gIC8vIGNsZWFyIGlucHV0cyBcblxuICBjb25zdCBuZXdUYXNrID0gVGFzayhvYmopO1xuICBUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpLmFkZFRhc2sobmV3VGFzayk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpKS5yZW5kZXJUYXNrcygpO1xuICBUaW1lQmxvY2tDb250cm9sbGVyLmxvZygpO1xuXG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJykucmVzZXQoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS1uYXYtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS1uYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG5cbi8vIFRPRE86IFxuLy8gbG9jYWwgc3RvcmFnZVxuXG4vLyBQdWJTdWIgY29waWVkIGZyb20gaHR0cHM6Ly9wYXVsLmtpbmxhbi5tZS9idWlsZGluZy1hLXB1YnN1Yi1hcGktaW4tamF2YXNjcmlwdC9cblxudmFyIEV2ZW50TWFuYWdlciA9IG5ldyAoZnVuY3Rpb24oKSB7XG4gIHZhciBldmVudHMgPSB7fTtcblxuICB0aGlzLnB1Ymxpc2ggPSBmdW5jdGlvbihuYW1lLCBkYXRhKSB7XG4gICAgdmFyIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdO1xuICAgIGlmKCEhaGFuZGxlcnMgPT09IGZhbHNlKSByZXR1cm47XG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5zdWJzY3JpYmUgPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgdmFyIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdO1xuICAgIGlmKCEhaGFuZGxlcnMgPT09IGZhbHNlKSB7XG4gICAgICBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXSA9IFtdO1xuICAgIH1cbiAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9O1xuXG4gIHRoaXMudW5zdWJzY3JpYmUgPSBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgdmFyIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdO1xuICAgIGlmKCEhaGFuZGxlcnMgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB2YXIgaGFuZGxlcklkeCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaGFuZGxlcnMuc3BsaWNlKGhhbmRsZXJJZHgpO1xuICB9O1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9