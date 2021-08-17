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

const timeBlock = (obj) => {

  const range = () => {
    let arr = [];
    for(let i = Number(obj.wakeTime); i <= Number(obj.sleepTime); i++) {
      arr.push(i);
    }
    return arr;
  };

  const component = () => { 
    return timeBlockComponent(range());
  };

  return {
    component,
    range
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

  return {
    timeGrid,
    taskGrid
  };

};

const task = (obj) => {
  const getTime = () => obj.time; 
  const getTitle = () => obj.title; 
  const getDescription = () => obj.description; 
  const getType= () => obj.type; 
  

  return {
    getTime,
    getTitle,
    getDescription,
    getType
  }

};

const taskComponent = (time, width) => {

  const createTask = () => {
    const task = document.createElement('div');
    task.classList.add('bg-blue-300');
    task.classList.add(`h-${time}`, `w-${width}`);
    taskGrid.appendChild(task);
  }


  return {
    taskGrid,
    createTask
  };

};

var block = {
  wakeTime: 5,
  sleepTime: 21
};

var test = timeBlock(block);
document.querySelector('.main-grid').appendChild(timeBlockComponent(test).timeGrid());
document.querySelector('.main-grid').appendChild(timeBlockComponent(test).taskGrid());


// document.querySelector('.main-grid').appendChild(test.component().grid);
// document.querySelector('.main-grid').appendChild(taskComponent().taskGrid);
// taskComponent().createTask("1h", "full");

// TODO: 
// refactor components to recieve objects as parameters.
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyw0QkFBNEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSyxRQUFRLE1BQU07QUFDL0M7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbWVibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdGltZUJsb2NrID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSBOdW1iZXIob2JqLndha2VUaW1lKTsgaSA8PSBOdW1iZXIob2JqLnNsZWVwVGltZSk7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgY29tcG9uZW50ID0gKCkgPT4geyBcbiAgICByZXR1cm4gdGltZUJsb2NrQ29tcG9uZW50KHJhbmdlKCkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50LFxuICAgIHJhbmdlXG4gIH07XG4gIFxufTtcblxuXG5jb25zdCB0aW1lQmxvY2tDb21wb25lbnQgPSAob2JqKSA9PiB7XG5cbiAgY29uc3QgdGltZUdyaWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgndGltZS1ncmlkJywgJ2dyaWQnLCAnZ2FwLXB4JywgJ2dyaWQtY29scy0xJywgJ2JnLWdyYXktMjAwJyk7XG5cbiAgICBvYmoucmFuZ2UoKS5mb3JFYWNoKCBuID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbWUuaW5uZXJIVE1MID0gbjtcbiAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS03MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMTAwJywgJ2NvbC1zcGFuLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdjb2wtc3Bhbi0xJywgJ2gtNTYnLCAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtN3hsJyk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHRpbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBncmlkO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZ3JpZCcsICdiZy1ncmF5LTQwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItYmx1ZS01MDAnLCdoLTEwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ2NvbC1zdGFydC0yJywgJ2NvbC1zcGFuLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAnZ2FwLXB4JywgJ2dyaWQnKTtcbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRpbWVHcmlkLFxuICAgIHRhc2tHcmlkXG4gIH07XG5cbn07XG5cbmNvbnN0IHRhc2sgPSAob2JqKSA9PiB7XG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiBvYmoudGltZTsgXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gb2JqLnRpdGxlOyBcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBvYmouZGVzY3JpcHRpb247IFxuICBjb25zdCBnZXRUeXBlPSAoKSA9PiBvYmoudHlwZTsgXG4gIFxuXG4gIHJldHVybiB7XG4gICAgZ2V0VGltZSxcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXRUeXBlXG4gIH1cblxufTtcblxuY29uc3QgdGFza0NvbXBvbmVudCA9ICh0aW1lLCB3aWR0aCkgPT4ge1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS0zMDAnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoYGgtJHt0aW1lfWAsIGB3LSR7d2lkdGh9YCk7XG4gICAgdGFza0dyaWQuYXBwZW5kQ2hpbGQodGFzayk7XG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgdGFza0dyaWQsXG4gICAgY3JlYXRlVGFza1xuICB9O1xuXG59O1xuXG52YXIgYmxvY2sgPSB7XG4gIHdha2VUaW1lOiA1LFxuICBzbGVlcFRpbWU6IDIxXG59O1xuXG52YXIgdGVzdCA9IHRpbWVCbG9jayhibG9jayk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuYXBwZW5kQ2hpbGQodGltZUJsb2NrQ29tcG9uZW50KHRlc3QpLnRpbWVHcmlkKCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpLmFwcGVuZENoaWxkKHRpbWVCbG9ja0NvbXBvbmVudCh0ZXN0KS50YXNrR3JpZCgpKTtcblxuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuYXBwZW5kQ2hpbGQodGVzdC5jb21wb25lbnQoKS5ncmlkKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKS5hcHBlbmRDaGlsZCh0YXNrQ29tcG9uZW50KCkudGFza0dyaWQpO1xuLy8gdGFza0NvbXBvbmVudCgpLmNyZWF0ZVRhc2soXCIxaFwiLCBcImZ1bGxcIik7XG5cbi8vIFRPRE86IFxuLy8gcmVmYWN0b3IgY29tcG9uZW50cyB0byByZWNpZXZlIG9iamVjdHMgYXMgcGFyYW1ldGVycy4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=