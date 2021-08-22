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

const TimeBlockController = (() => {
  let currentBlock = '';
  // const blocks = [];
  const jsonBlocks = JSON.parse(localStorage.getItem('blocks')) || [];


  const addBlock = obj => {
    // blocks.push(obj);
    jsonBlocks.push(obj.getJson());
    localStorage["blocks"] = JSON.stringify(jsonBlocks);
  };

  const setCurrentBlock = date => {
    const found = jsonBlocks.find(block => block.date == date);
    currentBlock = found;
  };

  const getBlocks = () => jsonBlocks;

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

const sideNavComponent = (objs) => {
  const getListItems = () => {
    const list = document.createElement('ul');
    list.classList.add('flex', 'flex-col', 'text-gray-800', 'text-center', 'text-2xl', 'overflow-y-auto');
    objs.forEach(obj => {
      const item = document.createElement('li');
      const date = document.createElement('span');
      item.classList.add('my-1');
      date.classList.add('rounded-md', 'px-8', `${obj.date == TimeBlockController.getCurrentBlock().date ? 'selected' : 'not-selected'}`);
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
    console.log(getListItems());
  };

  return {
    renderList
  }

};


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

TimeBlockController.addBlock(test1);
TimeBlockController.addBlock(test2);
TimeBlockController.setCurrentBlock("August 21, 2021");

sideNavComponent(TimeBlockController.getBlocks()).renderList();
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

localStorage.clear();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLDRCQUE0QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHFGQUFxRjtBQUN2STtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUyxRQUFRLFNBQVM7O0FBRXREOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFRpbWVCbG9jayA9IChvYmopID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBjb25zdCBnZXREYXRlID0gKCkgPT4gb2JqLmRhdGU7XG5cbiAgY29uc3QgcmFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvcihsZXQgaSA9IE51bWJlcihvYmoud2FrZVRpbWUpOyBpIDw9IE51bWJlcihvYmouc2xlZXBUaW1lKTsgaSsrKSB7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3NcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2tPYmopID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2tPYmopO1xuICB9O1xuXG4gIGNvbnN0IGdldEpzb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3NKc29uID0gdGFza3MubWFwKHRhc2sgPT4gdGFzay5nZXRKc29uKCkpO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBnZXREYXRlKCksXG4gICAgICB0YXNrczogdGFza3NKc29uLFxuICAgICAgd2FrZVRpbWU6IG9iai53YWtlVGltZSxcbiAgICAgIHNsZWVwVGltZTogb2JqLnNsZWVwVGltZSxcbiAgICAgIHJhbmdlOiByYW5nZSgpXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmFuZ2UsXG4gICAgZ2V0VGFza3MsXG4gICAgYWRkVGFzayxcbiAgICBnZXREYXRlLFxuICAgIGdldEpzb25cbiAgfTtcbiAgXG59O1xuXG5jb25zdCBUaW1lQmxvY2tDb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRCbG9jayA9ICcnO1xuICAvLyBjb25zdCBibG9ja3MgPSBbXTtcbiAgY29uc3QganNvbkJsb2NrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2NrcycpKSB8fCBbXTtcblxuXG4gIGNvbnN0IGFkZEJsb2NrID0gb2JqID0+IHtcbiAgICAvLyBibG9ja3MucHVzaChvYmopO1xuICAgIGpzb25CbG9ja3MucHVzaChvYmouZ2V0SnNvbigpKTtcbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShqc29uQmxvY2tzKTtcbiAgfTtcblxuICBjb25zdCBzZXRDdXJyZW50QmxvY2sgPSBkYXRlID0+IHtcbiAgICBjb25zdCBmb3VuZCA9IGpzb25CbG9ja3MuZmluZChibG9jayA9PiBibG9jay5kYXRlID09IGRhdGUpO1xuICAgIGN1cnJlbnRCbG9jayA9IGZvdW5kO1xuICB9O1xuXG4gIGNvbnN0IGdldEJsb2NrcyA9ICgpID0+IGpzb25CbG9ja3M7XG5cbiAgY29uc3QgZ2V0Q3VycmVudEJsb2NrID0gKCkgPT4gY3VycmVudEJsb2NrO1xuXG4gIGNvbnN0IGxvZyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50QmxvY2spO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRCbG9jay5nZXRKc29uKCkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGN1cnJlbnRCbG9jay5nZXRKc29uKCkpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkQmxvY2ssXG4gICAgc2V0Q3VycmVudEJsb2NrLFxuICAgIGdldEJsb2NrcyxcbiAgICBnZXRDdXJyZW50QmxvY2ssXG4gICAgbG9nXG4gIH07XG59KSgpO1xuXG5jb25zdCBzaWRlTmF2Q29tcG9uZW50ID0gKG9ianMpID0+IHtcbiAgY29uc3QgZ2V0TGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICd0ZXh0LWdyYXktODAwJywgJ3RleHQtY2VudGVyJywgJ3RleHQtMnhsJywgJ292ZXJmbG93LXktYXV0bycpO1xuICAgIG9ianMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdteS0xJyk7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtbWQnLCAncHgtOCcsIGAke29iai5kYXRlID09IFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkuZGF0ZSA/ICdzZWxlY3RlZCcgOiAnbm90LXNlbGVjdGVkJ31gKTtcbiAgICAgIGRhdGUuaW5uZXJUZXh0ID0gb2JqLmRhdGU7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9ja3MtbGlzdCcpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG5hdi5hcHBlbmQoZ2V0TGlzdEl0ZW1zKCkpO1xuICAgIGNvbnNvbGUubG9nKGdldExpc3RJdGVtcygpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlckxpc3RcbiAgfVxuXG59O1xuXG5cbmNvbnN0IHRpbWVCbG9ja0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCB0aW1lR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd0aW1lLWdyaWQnLCAnZ3JpZCcsICdnYXAtcHgnLCAnZ3JpZC1jb2xzLTEnLCAnYmctZ3JheS0yMDAnKTtcblxuICAgIG9iai5yYW5nZS5mb3JFYWNoKCBuID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbWUuaW5uZXJIVE1MID0gbjtcbiAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS03MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMTAwJywgJ2NvbC1zcGFuLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdjb2wtc3Bhbi0xJywgJ2gtNTYnLCAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtN3hsJyk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHRpbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZ3JpZCcsICdib3JkZXItYmx1ZS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAnaC0xMCcsICdjb2wtc3RhcnQtMicsICdjb2wtc3Bhbi0zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ2dhcC1weCcsICdncmlkJyk7XG5cbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZ3JpZCcpO1xuICAgIGdyaWQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIG9iai50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSB0YXNrQ29tcG9uZW50KHRhc2spLmdldFRhc2tFbGVtZW50KCk7XG4gICAgICBncmlkLmFwcGVuZCh0YXNrRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgfTtcblxuICBjb25zdCByZW5kZXJHcmlkcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKTtcblxuICAgIG1haW5HcmlkLmFwcGVuZCh0aW1lR3JpZCgpKTtcbiAgICBtYWluR3JpZC5hcHBlbmQodGFza0dyaWQoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpbWVHcmlkLFxuICAgIHRhc2tHcmlkLFxuICAgIHJlbmRlclRhc2tzLFxuICAgIHJlbmRlckdyaWRzXG4gIH07XG5cbn07XG5cbmNvbnN0IFRhc2sgPSAob2JqKSA9PiB7XG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiBvYmoudGltZTsgXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gb2JqLnRpdGxlIHx8IFwibm8gdGl0bGVcIjsgXG4gIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgaWYgKG9iai50eXBlID09IFwiZGVlcFdvcmtcIil7XG4gICAgICByZXR1cm4gXCJmdWxsXCI7XG4gICAgfSBlbHNlIGlmIChvYmoudHlwZSA9PSBcInNoYWxsb3dXb3JrXCIpe1xuICAgICAgcmV0dXJuIFwiMS8yXCI7XG4gICAgfVxuICB9OyBcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBvYmouZGVzY3JpcHRpb247IFxuICBjb25zdCBpc0NvbXBsZXRlID0gKCkgPT4gb2JqLmNvbXBsZXRlZCB8fCBmYWxzZSA7IFxuXG4gIGNvbnN0IGdldEpzb24gPSAoKSA9PiAge1xuICAgIHJldHVybiB7XG4gICAgIHRpbWU6IGdldFRpbWUoKSxcbiAgICAgdGl0bGU6IGdldFRpdGxlKCksXG4gICAgIHR5cGU6IGdldFR5cGUoKSxcbiAgICAgZGVzY3JpcHRpb246IGdldERlc2NyaXB0aW9uKCksXG4gICAgIGNvbXBsZXRlZDogaXNDb21wbGV0ZSgpXG4gICAgfVxuICB9O1xuICBcblxuICByZXR1cm4ge1xuICAgIGdldFRpbWUsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0VHlwZSxcbiAgICBpc0NvbXBsZXRlLFxuICAgIGdldEpzb25cbiAgfVxuXG59O1xuXG5jb25zdCB0YXNrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IGdldFRhc2tFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTEwMCcsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdweS0xJywgJ3RleHQtY2VudGVyJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKGBoLSR7b2JqLnRpbWV9YCwgYHctJHtvYmoudHlwZX1gKTtcblxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQteGwnLCAnZm9udC1zZW1pYm9sZCcsICd0ZXh0LWdyYXktOTAwJywgJ3NoYWRvdy1zbScpO1xuXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tZCcsICdmb250LWxpZ2h0JywgJ3RleHQtZ3JheS03MDAnKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnR5cGU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGdldFRhc2tFbGVtZW50XG4gIH07XG5cbn07XG5cbnZhciBibG9jazEgPSB7XG4gIHdha2VUaW1lOiA1LFxuICBzbGVlcFRpbWU6IDIxLFxuICBkYXRlOiAnQXVndXN0IDIxLCAyMDIxJ1xufTtcblxudmFyIGJsb2NrMiA9IHtcbiAgd2FrZVRpbWU6IDksXG4gIHNsZWVwVGltZTogMjAsXG4gIGRhdGU6ICdBdWd1c3QgMjIsIDIwMjEnXG59O1xuXG52YXIgdGVzdDEgPSBUaW1lQmxvY2soYmxvY2sxKTtcbnZhciB0ZXN0MiA9IFRpbWVCbG9jayhibG9jazIpO1xuXG5UaW1lQmxvY2tDb250cm9sbGVyLmFkZEJsb2NrKHRlc3QxKTtcblRpbWVCbG9ja0NvbnRyb2xsZXIuYWRkQmxvY2sodGVzdDIpO1xuVGltZUJsb2NrQ29udHJvbGxlci5zZXRDdXJyZW50QmxvY2soXCJBdWd1c3QgMjEsIDIwMjFcIik7XG5cbnNpZGVOYXZDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRCbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xudGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlckdyaWRzKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwnKTtcbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEdXJhdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ0YXNrLWR1cmF0aW9uXCJdJykpLm1hcCh4ID0+IHgudmFsdWUucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKCcnKTtcbiAgY29uc3QgdGFza1R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2stdHlwZVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG5cblxuICBjb25zdCBvYmogPSB7XG4gICAgdGltZTogdGFza0R1cmF0aW9uLFxuICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcbiAgICB0eXBlOiB0YXNrVHlwZVxuICB9XG5cbiAgLy8gY2xlYXIgaW5wdXRzIFxuXG4gIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKG9iaik7XG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkuYWRkVGFzayhuZXdUYXNrKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkpLnJlbmRlclRhc2tzKCk7XG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIubG9nKCk7XG5cbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKS5yZXNldCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cblxuLy8gVE9ETzogXG5cbi8vIFB1YlN1YiBjb3BpZWQgZnJvbSBodHRwczovL3BhdWwua2lubGFuLm1lL2J1aWxkaW5nLWEtcHVic3ViLWFwaS1pbi1qYXZhc2NyaXB0L1xuXG52YXIgRXZlbnRNYW5hZ2VyID0gbmV3IChmdW5jdGlvbigpIHtcbiAgdmFyIGV2ZW50cyA9IHt9O1xuXG4gIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHtcbiAgICAgIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdID0gW107XG4gICAgfVxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH07XG5cbiAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBoYW5kbGVySWR4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcklkeCk7XG4gIH07XG59KTtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9