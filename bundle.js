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
      // date.classList.add('rounded-md', 'px-8', `${obj.date == TimeBlockController.getCurrentBlock().getDate() ? 'selected' : 'not-selected'}`);
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

  const getProps = () =>  {
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
    getProps
  }

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

  const getProps = () => {
    const tasksProps = tasks.map(task => task.getProps());
    return {
      date: getDate(),
      tasks: tasksProps,
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
    getProps
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






const TimeBlockController = (() => {
  const blocks = [];
  let currentBlock =  '';


  const addBlock = obj => {
    blocks.push(obj);
  };

  const updateLocalStorage = () => {
    localStorage["blocks"] = JSON.stringify(blocks.map(block => block.getProps()));
  }

  const setCurrentBlock = date => {
    const found = blocks.find(block => block.getDate() == date);
    currentBlock = found; 
  };

  const getJsonBlocks = () => {
    updateLocalStorage();
    return JSON.parse(localStorage.getItem("blocks"))
  };

  const getBlocks = () => blocks;

  const getCurrentBlock = () => currentBlock || blocks[0];

  const getCurrentBlockProps = () => getJsonBlocks().find(block => block.date == getCurrentBlock().getDate());


  return {
    addBlock,
    setCurrentBlock,
    getBlocks,
    getCurrentBlock,
    getJsonBlocks,
    getCurrentBlockProps,
    updateLocalStorage

  };
})();


const block1 = {
  wakeTime: 5,
  sleepTime: 21,
  date: 'August 21, 2021'
};

const test1 = (0,_timeblock__WEBPACK_IMPORTED_MODULE_1__.TimeBlock)(block1);

TimeBlockController.addBlock(test1);

(0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getJsonBlocks()).renderList();
(0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlockProps()).renderGrids();

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


  const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__.Task)(obj);
  // separate current block and blockprops 
  TimeBlockController.getCurrentBlock().addTask(newTask);
  TimeBlockController.updateLocalStorage();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlockProps()).renderTasks();

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvc2lkZW5hdi5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGFza0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGltZWJsb2NrLmpzIiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy90aW1lYmxvY2tDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IHNpZGVOYXZDb21wb25lbnQgPSAob2JqcykgPT4ge1xuICBjb25zdCBnZXRMaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ3RleHQtZ3JheS04MDAnLCAndGV4dC1jZW50ZXInLCAndGV4dC0yeGwnLCAnb3ZlcmZsb3cteS1hdXRvJyk7XG4gICAgb2Jqcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ215LTEnKTtcbiAgICAgIC8vIGRhdGUuY2xhc3NMaXN0LmFkZCgncm91bmRlZC1tZCcsICdweC04JywgYCR7b2JqLmRhdGUgPT0gVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2soKS5nZXREYXRlKCkgPyAnc2VsZWN0ZWQnIDogJ25vdC1zZWxlY3RlZCd9YCk7XG4gICAgICBkYXRlLmlubmVyVGV4dCA9IG9iai5kYXRlO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxvY2tzLWxpc3QnKTtcbiAgICBuYXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBuYXYuYXBwZW5kKGdldExpc3RJdGVtcygpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlckxpc3RcbiAgfVxuXG59O1xuXG5leHBvcnQgeyBzaWRlTmF2Q29tcG9uZW50IH0iLCJjb25zdCBUYXNrID0gKG9iaikgPT4ge1xuICBjb25zdCBnZXRUaW1lID0gKCkgPT4gb2JqLnRpbWU7IFxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IG9iai50aXRsZSB8fCBcIm5vIHRpdGxlXCI7IFxuICBjb25zdCBnZXRUeXBlID0gKCkgPT4ge1xuICAgIGlmIChvYmoudHlwZSA9PSBcImRlZXBXb3JrXCIpe1xuICAgICAgcmV0dXJuIFwiZnVsbFwiO1xuICAgIH0gZWxzZSBpZiAob2JqLnR5cGUgPT0gXCJzaGFsbG93V29ya1wiKXtcbiAgICAgIHJldHVybiBcIjEvMlwiO1xuICAgIH1cbiAgfTsgXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gb2JqLmRlc2NyaXB0aW9uOyBcbiAgY29uc3QgaXNDb21wbGV0ZSA9ICgpID0+IG9iai5jb21wbGV0ZWQgfHwgZmFsc2UgOyBcblxuICBjb25zdCBnZXRQcm9wcyA9ICgpID0+ICB7XG4gICAgcmV0dXJuIHtcbiAgICAgdGltZTogZ2V0VGltZSgpLFxuICAgICB0aXRsZTogZ2V0VGl0bGUoKSxcbiAgICAgdHlwZTogZ2V0VHlwZSgpLFxuICAgICBkZXNjcmlwdGlvbjogZ2V0RGVzY3JpcHRpb24oKSxcbiAgICAgY29tcGxldGVkOiBpc0NvbXBsZXRlKClcbiAgICB9XG4gIH07XG4gIFxuXG4gIHJldHVybiB7XG4gICAgZ2V0VGltZSxcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXRUeXBlLFxuICAgIGlzQ29tcGxldGUsXG4gICAgZ2V0UHJvcHNcbiAgfVxuXG59O1xuXG5leHBvcnQgeyBUYXNrIH0iLCJjb25zdCB0YXNrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IGdldFRhc2tFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTEwMCcsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdweS0xJywgJ3RleHQtY2VudGVyJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKGBoLSR7b2JqLnRpbWV9YCwgYHctJHtvYmoudHlwZX1gKTtcblxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQteGwnLCAnZm9udC1zZW1pYm9sZCcsICd0ZXh0LWdyYXktOTAwJywgJ3NoYWRvdy1zbScpO1xuXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tZCcsICdmb250LWxpZ2h0JywgJ3RleHQtZ3JheS03MDAnKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnR5cGU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiB0YXNrO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGdldFRhc2tFbGVtZW50XG4gIH07XG5cbn07XG5cbmV4cG9ydCB7IHRhc2tDb21wb25lbnQgfSIsImNvbnN0IFRpbWVCbG9jayA9IChvYmopID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBjb25zdCBnZXREYXRlID0gKCkgPT4gb2JqLmRhdGU7XG5cbiAgY29uc3QgcmFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvcihsZXQgaSA9IE51bWJlcihvYmoud2FrZVRpbWUpOyBpIDw9IE51bWJlcihvYmouc2xlZXBUaW1lKTsgaSsrKSB7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3NcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2tPYmopID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2tPYmopO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb3BzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzUHJvcHMgPSB0YXNrcy5tYXAodGFzayA9PiB0YXNrLmdldFByb3BzKCkpO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBnZXREYXRlKCksXG4gICAgICB0YXNrczogdGFza3NQcm9wcyxcbiAgICAgIHdha2VUaW1lOiBvYmoud2FrZVRpbWUsXG4gICAgICBzbGVlcFRpbWU6IG9iai5zbGVlcFRpbWUsXG4gICAgICByYW5nZTogcmFuZ2UoKVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJhbmdlLFxuICAgIGdldFRhc2tzLFxuICAgIGFkZFRhc2ssXG4gICAgZ2V0RGF0ZSxcbiAgICBnZXRQcm9wc1xuICB9O1xuICBcbn07XG5cbmV4cG9ydCB7IFRpbWVCbG9jayB9IiwiaW1wb3J0IHsgdGFza0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tDb21wb25lbnRcIjtcblxuY29uc3QgdGltZUJsb2NrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IHRpbWVHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3RpbWUtZ3JpZCcsICdncmlkJywgJ2dhcC1weCcsICdncmlkLWNvbHMtMScsICdiZy1ncmF5LTIwMCcpO1xuXG4gICAgb2JqLnJhbmdlLmZvckVhY2goIG4gPT4ge1xuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGltZS5pbm5lckhUTUwgPSBuO1xuICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdiZy1ncmF5LTcwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JheS0xMDAnLCAnY29sLXNwYW4tMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbC1zcGFuLTEnLCAnaC01NicsICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC03eGwnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH07XG5cbiAgY29uc3QgdGFza0dyaWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgndGFzay1ncmlkJywgJ2JvcmRlci1ibHVlLTUwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICdoLTEwJywgJ2NvbC1zdGFydC0yJywgJ2NvbC1zcGFuLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAnZ2FwLXB4JywgJ2dyaWQnKTtcblxuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ncmlkJyk7XG4gICAgZ3JpZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgb2JqLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICBjb25zdCB0YXNrRWxlbWVudCA9IHRhc2tDb21wb25lbnQodGFzaykuZ2V0VGFza0VsZW1lbnQoKTtcbiAgICAgIGdyaWQuYXBwZW5kKHRhc2tFbGVtZW50KTtcbiAgICB9KTtcblxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckdyaWRzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpO1xuXG4gICAgbWFpbkdyaWQuYXBwZW5kKHRpbWVHcmlkKCkpO1xuICAgIG1haW5HcmlkLmFwcGVuZCh0YXNrR3JpZCgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGltZUdyaWQsXG4gICAgdGFza0dyaWQsXG4gICAgcmVuZGVyVGFza3MsXG4gICAgcmVuZGVyR3JpZHNcbiAgfTtcblxufTtcblxuZXhwb3J0IHsgdGltZUJsb2NrQ29tcG9uZW50IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCB7IERlbGVnYXRlZFBsdWdpbiB9IGZyb20gXCJ3ZWJwYWNrXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUaW1lQmxvY2sgfSBmcm9tIFwiLi90aW1lYmxvY2tcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBzaWRlTmF2Q29tcG9uZW50IH0gZnJvbSBcIi4vc2lkZW5hdlwiO1xuaW1wb3J0IHsgdGltZUJsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZWJsb2NrQ29tcG9uZW50XCI7XG5cbmNvbnN0IFRpbWVCbG9ja0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBibG9ja3MgPSBbXTtcbiAgbGV0IGN1cnJlbnRCbG9jayA9ICAnJztcblxuXG4gIGNvbnN0IGFkZEJsb2NrID0gb2JqID0+IHtcbiAgICBibG9ja3MucHVzaChvYmopO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2VbXCJibG9ja3NcIl0gPSBKU09OLnN0cmluZ2lmeShibG9ja3MubWFwKGJsb2NrID0+IGJsb2NrLmdldFByb3BzKCkpKTtcbiAgfVxuXG4gIGNvbnN0IHNldEN1cnJlbnRCbG9jayA9IGRhdGUgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gYmxvY2tzLmZpbmQoYmxvY2sgPT4gYmxvY2suZ2V0RGF0ZSgpID09IGRhdGUpO1xuICAgIGN1cnJlbnRCbG9jayA9IGZvdW5kOyBcbiAgfTtcblxuICBjb25zdCBnZXRKc29uQmxvY2tzID0gKCkgPT4ge1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvY2tzXCIpKVxuICB9O1xuXG4gIGNvbnN0IGdldEJsb2NrcyA9ICgpID0+IGJsb2NrcztcblxuICBjb25zdCBnZXRDdXJyZW50QmxvY2sgPSAoKSA9PiBjdXJyZW50QmxvY2sgfHwgYmxvY2tzWzBdO1xuXG4gIGNvbnN0IGdldEN1cnJlbnRCbG9ja1Byb3BzID0gKCkgPT4gZ2V0SnNvbkJsb2NrcygpLmZpbmQoYmxvY2sgPT4gYmxvY2suZGF0ZSA9PSBnZXRDdXJyZW50QmxvY2soKS5nZXREYXRlKCkpO1xuXG5cbiAgcmV0dXJuIHtcbiAgICBhZGRCbG9jayxcbiAgICBzZXRDdXJyZW50QmxvY2ssXG4gICAgZ2V0QmxvY2tzLFxuICAgIGdldEN1cnJlbnRCbG9jayxcbiAgICBnZXRKc29uQmxvY2tzLFxuICAgIGdldEN1cnJlbnRCbG9ja1Byb3BzLFxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZVxuXG4gIH07XG59KSgpO1xuXG5cbmNvbnN0IGJsb2NrMSA9IHtcbiAgd2FrZVRpbWU6IDUsXG4gIHNsZWVwVGltZTogMjEsXG4gIGRhdGU6ICdBdWd1c3QgMjEsIDIwMjEnXG59O1xuXG5jb25zdCB0ZXN0MSA9IFRpbWVCbG9jayhibG9jazEpO1xuXG5UaW1lQmxvY2tDb250cm9sbGVyLmFkZEJsb2NrKHRlc3QxKTtcblxuc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEpzb25CbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xudGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrUHJvcHMoKSkucmVuZGVyR3JpZHMoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwnKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgdGFza0R1cmF0aW9uID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cInRhc2stZHVyYXRpb25cIl0nKSkubWFwKHggPT4geC52YWx1ZS5wYWRTdGFydCgyLCBcIjBcIikpLmpvaW4oJycpO1xuICBjb25zdCB0YXNrVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGFzay10eXBlXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcblxuXG4gIGNvbnN0IG9iaiA9IHtcbiAgICB0aW1lOiB0YXNrRHVyYXRpb24sXG4gICAgdGl0bGU6IHRhc2tUaXRsZSxcbiAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLFxuICAgIHR5cGU6IHRhc2tUeXBlXG4gIH1cblxuXG4gIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKG9iaik7XG4gIC8vIHNlcGFyYXRlIGN1cnJlbnQgYmxvY2sgYW5kIGJsb2NrcHJvcHMgXG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkuYWRkVGFzayhuZXdUYXNrKTtcbiAgVGltZUJsb2NrQ29udHJvbGxlci51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgdGltZUJsb2NrQ29tcG9uZW50KFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrUHJvcHMoKSkucmVuZGVyVGFza3MoKTtcblxuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpLnJlc2V0KCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbmF2LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuXG4vLyBUT0RPOiBcblxuLy8gUHViU3ViIGNvcGllZCBmcm9tIGh0dHBzOi8vcGF1bC5raW5sYW4ubWUvYnVpbGRpbmctYS1wdWJzdWItYXBpLWluLWphdmFzY3JpcHQvXG5cbnZhciBFdmVudE1hbmFnZXIgPSBuZXcgKGZ1bmN0aW9uKCkge1xuICB2YXIgZXZlbnRzID0ge307XG5cbiAgdGhpcy5wdWJsaXNoID0gZnVuY3Rpb24obmFtZSwgZGF0YSkge1xuICAgIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXTtcbiAgICBpZighIWhhbmRsZXJzID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuc3Vic2NyaWJlID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXTtcbiAgICBpZighIWhhbmRsZXJzID09PSBmYWxzZSkge1xuICAgICAgaGFuZGxlcnMgPSBldmVudHNbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfTtcblxuICB0aGlzLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXTtcbiAgICBpZighIWhhbmRsZXJzID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIGhhbmRsZXJJZHggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGhhbmRsZXJzLnNwbGljZShoYW5kbGVySWR4KTtcbiAgfTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9