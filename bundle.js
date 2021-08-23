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
  // separate current block and blockprops 
  TimeBlockController.addBlock(newBlock);

  (0,_sidenav__WEBPACK_IMPORTED_MODULE_3__.sideNavComponent)(TimeBlockController.getJsonBlocks()).renderList();
  (0,_timeblockComponent__WEBPACK_IMPORTED_MODULE_4__.timeBlockComponent)(TimeBlockController.getCurrentBlockProps()).renderGrids();

  blockModal.classList.toggle("hidden");
  document.querySelector('#block-form').reset();
});

document.querySelector('#side-nav-btn').addEventListener('click', function(){
  document.querySelector('#side-nav').classList.toggle('hidden');
});


// TODO: 
// make a form for new block

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFEQUFTO0FBQzVCO0FBQ0E7O0FBRUEsRUFBRSwwREFBZ0I7QUFDbEIsRUFBRSx1RUFBa0I7O0FBRXBCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3NpZGVuYXYuanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3Rhc2tDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3RpbWVibG9jay5qcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvdGltZWJsb2NrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBzaWRlTmF2Q29tcG9uZW50ID0gKG9ianMpID0+IHtcbiAgY29uc3QgZ2V0TGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICd0ZXh0LWdyYXktODAwJywgJ3RleHQtY2VudGVyJywgJ3RleHQtMnhsJywgJ292ZXJmbG93LXktYXV0bycpO1xuICAgIG9ianMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdteS0xJyk7XG4gICAgICAvLyBkYXRlLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtbWQnLCAncHgtOCcsIGAke29iai5kYXRlID09IFRpbWVCbG9ja0NvbnRyb2xsZXIuZ2V0Q3VycmVudEJsb2NrKCkuZ2V0RGF0ZSgpID8gJ3NlbGVjdGVkJyA6ICdub3Qtc2VsZWN0ZWQnfWApO1xuICAgICAgZGF0ZS5pbm5lclRleHQgPSBvYmouZGF0ZTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2Nrcy1saXN0Jyk7XG4gICAgbmF2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbmF2LmFwcGVuZChnZXRMaXN0SXRlbXMoKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXJMaXN0XG4gIH1cblxufTtcblxuZXhwb3J0IHsgc2lkZU5hdkNvbXBvbmVudCB9IiwiY29uc3QgVGFzayA9IChvYmopID0+IHtcbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IG9iai50aW1lOyBcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBvYmoudGl0bGUgfHwgXCJubyB0aXRsZVwiOyBcbiAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICBpZiAob2JqLnR5cGUgPT0gXCJkZWVwV29ya1wiKXtcbiAgICAgIHJldHVybiBcImZ1bGxcIjtcbiAgICB9IGVsc2UgaWYgKG9iai50eXBlID09IFwic2hhbGxvd1dvcmtcIil7XG4gICAgICByZXR1cm4gXCIxLzJcIjtcbiAgICB9XG4gIH07IFxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IG9iai5kZXNjcmlwdGlvbjsgXG4gIGNvbnN0IGlzQ29tcGxldGUgPSAoKSA9PiBvYmouY29tcGxldGVkIHx8IGZhbHNlIDsgXG5cbiAgY29uc3QgZ2V0UHJvcHMgPSAoKSA9PiAge1xuICAgIHJldHVybiB7XG4gICAgIHRpbWU6IGdldFRpbWUoKSxcbiAgICAgdGl0bGU6IGdldFRpdGxlKCksXG4gICAgIHR5cGU6IGdldFR5cGUoKSxcbiAgICAgZGVzY3JpcHRpb246IGdldERlc2NyaXB0aW9uKCksXG4gICAgIGNvbXBsZXRlZDogaXNDb21wbGV0ZSgpXG4gICAgfVxuICB9O1xuICBcblxuICByZXR1cm4ge1xuICAgIGdldFRpbWUsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0VHlwZSxcbiAgICBpc0NvbXBsZXRlLFxuICAgIGdldFByb3BzXG4gIH1cblxufTtcblxuZXhwb3J0IHsgVGFzayB9IiwiY29uc3QgdGFza0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCBnZXRUYXNrRWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS0xMDAnLCAnZmxleCcsICdmbGV4LWNvbCcsICdqdXN0aWZ5LWNlbnRlcicsICdpdGVtcy1jZW50ZXInLCAncHktMScsICd0ZXh0LWNlbnRlcicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChgaC0ke29iai50aW1lfWAsIGB3LSR7b2JqLnR5cGV9YCk7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXhsJywgJ2ZvbnQtc2VtaWJvbGQnLCAndGV4dC1ncmF5LTkwMCcsICdzaGFkb3ctc20nKTtcblxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbWQnLCAnZm9udC1saWdodCcsICd0ZXh0LWdyYXktNzAwJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50eXBlO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUYXNrRWxlbWVudFxuICB9O1xuXG59O1xuXG5leHBvcnQgeyB0YXNrQ29tcG9uZW50IH0iLCJjb25zdCBUaW1lQmxvY2sgPSAob2JqKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IG9iai5kYXRlO1xuXG4gIGNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSBOdW1iZXIob2JqLndha2VUaW1lKTsgaSA8PSBOdW1iZXIob2JqLnNsZWVwVGltZSk7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzXG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrT2JqKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrT2JqKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9wcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrc1Byb3BzID0gdGFza3MubWFwKHRhc2sgPT4gdGFzay5nZXRQcm9wcygpKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZ2V0RGF0ZSgpLFxuICAgICAgdGFza3M6IHRhc2tzUHJvcHMsXG4gICAgICB3YWtlVGltZTogb2JqLndha2VUaW1lLFxuICAgICAgc2xlZXBUaW1lOiBvYmouc2xlZXBUaW1lLFxuICAgICAgcmFuZ2U6IHJhbmdlKClcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByYW5nZSxcbiAgICBnZXRUYXNrcyxcbiAgICBhZGRUYXNrLFxuICAgIGdldERhdGUsXG4gICAgZ2V0UHJvcHNcbiAgfTtcbiAgXG59O1xuXG5leHBvcnQgeyBUaW1lQmxvY2sgfSIsImltcG9ydCB7IHRhc2tDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrQ29tcG9uZW50XCI7XG5cbmNvbnN0IHRpbWVCbG9ja0NvbXBvbmVudCA9IChvYmopID0+IHtcblxuICBjb25zdCB0aW1lR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCd0aW1lLWdyaWQnLCAnZ3JpZCcsICdnYXAtcHgnLCAnZ3JpZC1jb2xzLTEnLCAnYmctZ3JheS0yMDAnKTtcblxuICAgIG9iai5yYW5nZS5mb3JFYWNoKCBuID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbWUuaW5uZXJIVE1MID0gbjtcbiAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS03MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMTAwJywgJ2NvbC1zcGFuLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdjb2wtc3Bhbi0xJywgJ2gtNTYnLCAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtN3hsJyk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHRpbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZ3JpZCcsICdib3JkZXItYmx1ZS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAnaC0xMCcsICdjb2wtc3RhcnQtMicsICdjb2wtc3Bhbi0zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ2dhcC1weCcsICdncmlkJyk7XG5cbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZ3JpZCcpO1xuICAgIGdyaWQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIG9iai50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSB0YXNrQ29tcG9uZW50KHRhc2spLmdldFRhc2tFbGVtZW50KCk7XG4gICAgICBncmlkLmFwcGVuZCh0YXNrRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgfTtcblxuICBjb25zdCByZW5kZXJHcmlkcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKTtcblxuICAgIG1haW5HcmlkLmFwcGVuZCh0aW1lR3JpZCgpKTtcbiAgICBtYWluR3JpZC5hcHBlbmQodGFza0dyaWQoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpbWVHcmlkLFxuICAgIHRhc2tHcmlkLFxuICAgIHJlbmRlclRhc2tzLFxuICAgIHJlbmRlckdyaWRzXG4gIH07XG5cbn07XG5cbmV4cG9ydCB7IHRpbWVCbG9ja0NvbXBvbmVudCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgeyBEZWxlZ2F0ZWRQbHVnaW4gfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGltZUJsb2NrIH0gZnJvbSBcIi4vdGltZWJsb2NrXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgc2lkZU5hdkNvbXBvbmVudCB9IGZyb20gXCIuL3NpZGVuYXZcIjtcbmltcG9ydCB7IHRpbWVCbG9ja0NvbXBvbmVudCB9IGZyb20gXCIuL3RpbWVibG9ja0NvbXBvbmVudFwiO1xuXG5jb25zdCBUaW1lQmxvY2tDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgYmxvY2tzID0gW107XG4gIGxldCBjdXJyZW50QmxvY2sgPSAgJyc7XG5cblxuICBjb25zdCBhZGRCbG9jayA9IG9iaiA9PiB7XG4gICAgYmxvY2tzLnB1c2gob2JqKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlW1wiYmxvY2tzXCJdID0gSlNPTi5zdHJpbmdpZnkoYmxvY2tzLm1hcChibG9jayA9PiBibG9jay5nZXRQcm9wcygpKSk7XG4gIH1cblxuICBjb25zdCBzZXRDdXJyZW50QmxvY2sgPSBkYXRlID0+IHtcbiAgICBjb25zdCBmb3VuZCA9IGJsb2Nrcy5maW5kKGJsb2NrID0+IGJsb2NrLmdldERhdGUoKSA9PSBkYXRlKTtcbiAgICBjdXJyZW50QmxvY2sgPSBmb3VuZDsgXG4gIH07XG5cbiAgY29uc3QgZ2V0SnNvbkJsb2NrcyA9ICgpID0+IHtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2Nrc1wiKSlcbiAgfTtcblxuICBjb25zdCBnZXRCbG9ja3MgPSAoKSA9PiBibG9ja3M7XG5cbiAgY29uc3QgZ2V0Q3VycmVudEJsb2NrID0gKCkgPT4gY3VycmVudEJsb2NrIHx8IGJsb2Nrc1swXTtcblxuICBjb25zdCBnZXRDdXJyZW50QmxvY2tQcm9wcyA9ICgpID0+IGdldEpzb25CbG9ja3MoKS5maW5kKGJsb2NrID0+IGJsb2NrLmRhdGUgPT0gZ2V0Q3VycmVudEJsb2NrKCkuZ2V0RGF0ZSgpKTtcblxuXG4gIHJldHVybiB7XG4gICAgYWRkQmxvY2ssXG4gICAgc2V0Q3VycmVudEJsb2NrLFxuICAgIGdldEJsb2NrcyxcbiAgICBnZXRDdXJyZW50QmxvY2ssXG4gICAgZ2V0SnNvbkJsb2NrcyxcbiAgICBnZXRDdXJyZW50QmxvY2tQcm9wcyxcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2VcblxuICB9O1xufSkoKTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS10YXNrLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbCcpO1xuICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJsb2NrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgY29uc3QgYmxvY2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1tb2RhbCcpO1xuICBibG9ja01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJsb2NrLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjb25zdCBibG9ja01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLW1vZGFsJyk7XG4gIGJsb2NrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsJyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEdXJhdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ0YXNrLWR1cmF0aW9uXCJdJykpLm1hcCh4ID0+IHgudmFsdWUucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKCcnKTtcbiAgY29uc3QgdGFza1R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2stdHlwZVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG5cblxuICBjb25zdCBvYmogPSB7XG4gICAgdGltZTogdGFza0R1cmF0aW9uLFxuICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcbiAgICB0eXBlOiB0YXNrVHlwZVxuICB9XG5cblxuICBjb25zdCBuZXdUYXNrID0gVGFzayhvYmopO1xuICAvLyBzZXBhcmF0ZSBjdXJyZW50IGJsb2NrIGFuZCBibG9ja3Byb3BzIFxuICBUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9jaygpLmFkZFRhc2sobmV3VGFzayk7XG4gIFRpbWVCbG9ja0NvbnRyb2xsZXIudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIHRpbWVCbG9ja0NvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEN1cnJlbnRCbG9ja1Byb3BzKCkpLnJlbmRlclRhc2tzKCk7XG5cbiAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKS5yZXNldCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGJsb2NrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stbW9kYWwnKTtcbiAgY29uc3QgYmxvY2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJibG9jay1kYXRlXCJdJykudmFsdWU7XG4gIGNvbnN0IGJsb2NrV2FrZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIndha2UtdGltZVwiXScpLnZhbHVlO1xuICBjb25zdCBibG9ja1NsZWVwVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2xlZXAtdGltZVwiXScpLnZhbHVlO1xuXG5cbiAgY29uc3Qgb2JqID0ge1xuICAgIGRhdGU6IGJsb2NrRGF0ZSxcbiAgICB3YWtlVGltZTogYmxvY2tXYWtlVGltZSxcbiAgICBzbGVlcFRpbWU6IGJsb2NrU2xlZXBUaW1lIFxuICB9XG5cbiAgY29uc3QgbmV3QmxvY2sgPSBUaW1lQmxvY2sob2JqKTtcbiAgLy8gc2VwYXJhdGUgY3VycmVudCBibG9jayBhbmQgYmxvY2twcm9wcyBcbiAgVGltZUJsb2NrQ29udHJvbGxlci5hZGRCbG9jayhuZXdCbG9jayk7XG5cbiAgc2lkZU5hdkNvbXBvbmVudChUaW1lQmxvY2tDb250cm9sbGVyLmdldEpzb25CbG9ja3MoKSkucmVuZGVyTGlzdCgpO1xuICB0aW1lQmxvY2tDb21wb25lbnQoVGltZUJsb2NrQ29udHJvbGxlci5nZXRDdXJyZW50QmxvY2tQcm9wcygpKS5yZW5kZXJHcmlkcygpO1xuXG4gIGJsb2NrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWZvcm0nKS5yZXNldCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW5hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cblxuLy8gVE9ETzogXG4vLyBtYWtlIGEgZm9ybSBmb3IgbmV3IGJsb2NrXG5cbi8vIFB1YlN1YiBjb3BpZWQgZnJvbSBodHRwczovL3BhdWwua2lubGFuLm1lL2J1aWxkaW5nLWEtcHVic3ViLWFwaS1pbi1qYXZhc2NyaXB0L1xuXG52YXIgRXZlbnRNYW5hZ2VyID0gbmV3IChmdW5jdGlvbigpIHtcbiAgdmFyIGV2ZW50cyA9IHt9O1xuXG4gIHRoaXMucHVibGlzaCA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHtcbiAgICAgIGhhbmRsZXJzID0gZXZlbnRzW25hbWVdID0gW107XG4gICAgfVxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH07XG5cbiAgdGhpcy51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKG5hbWUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG4gICAgaWYoISFoYW5kbGVycyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBoYW5kbGVySWR4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcklkeCk7XG4gIH07XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==