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

const timeBlock = (wakeTime, sleepTime) => {

  const range = () => {
    let arr = [];
    for(let i = Number(wakeTime); i <= Number(sleepTime); i++) {
      arr.push(i);
    }
    return arr;
  };

  const component = () => { 
    return timeBlockComponent(range());
  };

  return {
    component
  };
  
};


const timeBlockComponent = (range) => {
  const grid = document.createElement('div');

  const setRowTemplate = () => { 
    grid.classList.add('grid', 'gap-px', 'grid-cols-1', 'bg-gray-200');
  }; 

  const setTimes = () => {
    range.forEach( n => {
      const time = document.createElement('div');
      time.innerHTML = n;
      time.classList.add('bg-blue-500',
                         'text-white', 'col-span-1',
                         'col-span-1', 'h-56', 'flex',
                         'items-center', 'justify-center',
                         'text-5xl');
      grid.appendChild(time);
    });
  }; 

  setRowTemplate();
  setTimes();


  return {
    grid
  };

};

const taskComponent = () => {
  const taskGrid = document.createElement('div');
  taskGrid.classList.add('bg-gray-400','border-blue-500',
                         'h-10', 'col-start-2', 'col-span-3',
                         'gap-px', 'grid');

  const createTask = (height, prio) => {
    const task = document.createElement('div');
    task.classList.add('bg-blue-300');
    task.classList.add(`h-${height}`, `col-span-${prio}`)
    taskGrid.appendChild(task);
  }

  createTask("52");

  return {
    taskGrid
  };

};

var test = timeBlock(4, 21);
document.querySelector('.main-grid').appendChild(test.component().grid);
document.querySelector('.main-grid').appendChild(taskComponent().taskGrid);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyx3QkFBd0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPLGVBQWUsS0FBSztBQUN2RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHRpbWVCbG9jayA9ICh3YWtlVGltZSwgc2xlZXBUaW1lKSA9PiB7XG5cbiAgY29uc3QgcmFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvcihsZXQgaSA9IE51bWJlcih3YWtlVGltZSk7IGkgPD0gTnVtYmVyKHNsZWVwVGltZSk7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgY29tcG9uZW50ID0gKCkgPT4geyBcbiAgICByZXR1cm4gdGltZUJsb2NrQ29tcG9uZW50KHJhbmdlKCkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50XG4gIH07XG4gIFxufTtcblxuXG5jb25zdCB0aW1lQmxvY2tDb21wb25lbnQgPSAocmFuZ2UpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHNldFJvd1RlbXBsYXRlID0gKCkgPT4geyBcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCAnZ2FwLXB4JywgJ2dyaWQtY29scy0xJywgJ2JnLWdyYXktMjAwJyk7XG4gIH07IFxuXG4gIGNvbnN0IHNldFRpbWVzID0gKCkgPT4ge1xuICAgIHJhbmdlLmZvckVhY2goIG4gPT4ge1xuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGltZS5pbm5lckhUTUwgPSBuO1xuICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTUwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnLCAnY29sLXNwYW4tMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbC1zcGFuLTEnLCAnaC01NicsICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC01eGwnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgfSk7XG4gIH07IFxuXG4gIHNldFJvd1RlbXBsYXRlKCk7XG4gIHNldFRpbWVzKCk7XG5cblxuICByZXR1cm4ge1xuICAgIGdyaWRcbiAgfTtcblxufTtcblxuY29uc3QgdGFza0NvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgdGFza0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0dyaWQuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS00MDAnLCdib3JkZXItYmx1ZS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdoLTEwJywgJ2NvbC1zdGFydC0yJywgJ2NvbC1zcGFuLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdnYXAtcHgnLCAnZ3JpZCcpO1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAoaGVpZ2h0LCBwcmlvKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS0zMDAnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoYGgtJHtoZWlnaHR9YCwgYGNvbC1zcGFuLSR7cHJpb31gKVxuICAgIHRhc2tHcmlkLmFwcGVuZENoaWxkKHRhc2spO1xuICB9XG5cbiAgY3JlYXRlVGFzayhcIjUyXCIpO1xuXG4gIHJldHVybiB7XG4gICAgdGFza0dyaWRcbiAgfTtcblxufTtcblxudmFyIHRlc3QgPSB0aW1lQmxvY2soNCwgMjEpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpLmFwcGVuZENoaWxkKHRlc3QuY29tcG9uZW50KCkuZ3JpZCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuYXBwZW5kQ2hpbGQodGFza0NvbXBvbmVudCgpLnRhc2tHcmlkKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9