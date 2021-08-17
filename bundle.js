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
    grid.classList.add('grid', 'gap-px', 'grid-cols-1', 'bg-gray-200');

    obj.range().forEach( n => {
      const time = document.createElement('div');
      time.innerHTML = n;
      time.classList.add('bg-gray-800',
                         'text-gray-100', 'col-span-1',
                         'col-span-1', 'h-56', 'flex',
                         'items-center', 'justify-center',
                         'text-7xl');
      grid.appendChild(time);
    });
  };

  return {
    timeGrid
  };

};

const task = (time, title, description, type) => {
  const getTime = () => time; 
  const getTitle = () => title; 
  const getDescription = () => description; 
  const getType= () => type; 
  

  return {
    getTime,
    getTitle,
    getDescription,
    getType
  }

};

const taskComponent = (time, width) => {
  const taskGrid = document.createElement('div');
  taskGrid.classList.add('bg-gray-400','border-blue-500',
                         'h-10', 'col-start-2', 'col-span-3',
                         'gap-px', 'grid');

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
document.querySelector('.main-grid').appendChild(timeBlockComponent(test).timeGrid);


// document.querySelector('.main-grid').appendChild(test.component().grid);
// document.querySelector('.main-grid').appendChild(taskComponent().taskGrid);
// taskComponent().createTask("1h", "full");

// TODO: 
// refactor components to recieve objects as parameters.
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyw0QkFBNEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSyxRQUFRLE1BQU07QUFDL0M7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpbWVibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aW1lYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHRpbWVCbG9jayA9IChvYmopID0+IHtcblxuICBjb25zdCByYW5nZSA9ICgpID0+IHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yKGxldCBpID0gTnVtYmVyKG9iai53YWtlVGltZSk7IGkgPD0gTnVtYmVyKG9iai5zbGVlcFRpbWUpOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9ICgpID0+IHsgXG4gICAgcmV0dXJuIHRpbWVCbG9ja0NvbXBvbmVudChyYW5nZSgpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNvbXBvbmVudCxcbiAgICByYW5nZVxuICB9O1xuICBcbn07XG5cblxuY29uc3QgdGltZUJsb2NrQ29tcG9uZW50ID0gKG9iaikgPT4ge1xuXG4gIGNvbnN0IHRpbWVHcmlkID0gKCkgPT4ge1xuXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCAnZ2FwLXB4JywgJ2dyaWQtY29scy0xJywgJ2JnLWdyYXktMjAwJyk7XG5cbiAgICBvYmoucmFuZ2UoKS5mb3JFYWNoKCBuID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbWUuaW5uZXJIVE1MID0gbjtcbiAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS04MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMTAwJywgJ2NvbC1zcGFuLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdjb2wtc3Bhbi0xJywgJ2gtNTYnLCAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtN3hsJyk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHRpbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGltZUdyaWRcbiAgfTtcblxufTtcblxuY29uc3QgdGFzayA9ICh0aW1lLCB0aXRsZSwgZGVzY3JpcHRpb24sIHR5cGUpID0+IHtcbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IHRpbWU7IFxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlOyBcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjsgXG4gIGNvbnN0IGdldFR5cGU9ICgpID0+IHR5cGU7IFxuICBcblxuICByZXR1cm4ge1xuICAgIGdldFRpbWUsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0VHlwZVxuICB9XG5cbn07XG5cbmNvbnN0IHRhc2tDb21wb25lbnQgPSAodGltZSwgd2lkdGgpID0+IHtcbiAgY29uc3QgdGFza0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0dyaWQuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS00MDAnLCdib3JkZXItYmx1ZS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdoLTEwJywgJ2NvbC1zdGFydC0yJywgJ2NvbC1zcGFuLTMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdnYXAtcHgnLCAnZ3JpZCcpO1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS0zMDAnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoYGgtJHt0aW1lfWAsIGB3LSR7d2lkdGh9YCk7XG4gICAgdGFza0dyaWQuYXBwZW5kQ2hpbGQodGFzayk7XG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgdGFza0dyaWQsXG4gICAgY3JlYXRlVGFza1xuICB9O1xuXG59O1xuXG52YXIgYmxvY2sgPSB7XG4gIHdha2VUaW1lOiA1LFxuICBzbGVlcFRpbWU6IDIxXG59O1xuXG52YXIgdGVzdCA9IHRpbWVCbG9jayhibG9jayk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuYXBwZW5kQ2hpbGQodGltZUJsb2NrQ29tcG9uZW50KHRlc3QpLnRpbWVHcmlkKTtcblxuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJykuYXBwZW5kQ2hpbGQodGVzdC5jb21wb25lbnQoKS5ncmlkKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdyaWQnKS5hcHBlbmRDaGlsZCh0YXNrQ29tcG9uZW50KCkudGFza0dyaWQpO1xuLy8gdGFza0NvbXBvbmVudCgpLmNyZWF0ZVRhc2soXCIxaFwiLCBcImZ1bGxcIik7XG5cbi8vIFRPRE86IFxuLy8gcmVmYWN0b3IgY29tcG9uZW50cyB0byByZWNpZXZlIG9iamVjdHMgYXMgcGFyYW1ldGVycy4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=