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

// function TimeBlock(options){

//     this.wakingHour = options.wakingHour || 5;
//     this.sleepingHour = options.sleepingHour || 21;

// };

// TimeBlock.prototype.range = function() {
//       let first = Number(this.wakingHour);
//       let last = Number(this.sleepingHour);
//       let arr = [];
//       for(let i = first; i <= last; i++){
//         arr.push(i);
//       }
//       return arr;
// };


// TimeBlock.prototype.component = function() {
//   return timeBlockComponent(this.range());
// }

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
    grid.classList.add('grid', 'gap-px', 'lg:grid-cols-4', 'mx-auto', 'bg-gray-200');
  }; 

  const setTimes = () => {
    range.forEach( n => {
      const time = document.createElement('div');
      time.innerHTML = n;
      time.classList.add('bg-blue-500',
                         'text-white', 'col-span-1',
                         'col-start-1', 'h-32', 'flex',
                         'items-center', 'justify-center',
                         'w-32', 'text-5xl');
      grid.appendChild(time);
    });
  }; 

  setRowTemplate();
  setTimes();


  return {
    grid
  };

};

var test = timeBlock(4, 21);
document.querySelector('.block').appendChild(test.component().grid);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyx3QkFBd0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBmdW5jdGlvbiBUaW1lQmxvY2sob3B0aW9ucyl7XG5cbi8vICAgICB0aGlzLndha2luZ0hvdXIgPSBvcHRpb25zLndha2luZ0hvdXIgfHwgNTtcbi8vICAgICB0aGlzLnNsZWVwaW5nSG91ciA9IG9wdGlvbnMuc2xlZXBpbmdIb3VyIHx8IDIxO1xuXG4vLyB9O1xuXG4vLyBUaW1lQmxvY2sucHJvdG90eXBlLnJhbmdlID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICBsZXQgZmlyc3QgPSBOdW1iZXIodGhpcy53YWtpbmdIb3VyKTtcbi8vICAgICAgIGxldCBsYXN0ID0gTnVtYmVyKHRoaXMuc2xlZXBpbmdIb3VyKTtcbi8vICAgICAgIGxldCBhcnIgPSBbXTtcbi8vICAgICAgIGZvcihsZXQgaSA9IGZpcnN0OyBpIDw9IGxhc3Q7IGkrKyl7XG4vLyAgICAgICAgIGFyci5wdXNoKGkpO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIGFycjtcbi8vIH07XG5cblxuLy8gVGltZUJsb2NrLnByb3RvdHlwZS5jb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbi8vICAgcmV0dXJuIHRpbWVCbG9ja0NvbXBvbmVudCh0aGlzLnJhbmdlKCkpO1xuLy8gfVxuXG5jb25zdCB0aW1lQmxvY2sgPSAod2FrZVRpbWUsIHNsZWVwVGltZSkgPT4ge1xuXG4gIGNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSBOdW1iZXIod2FrZVRpbWUpOyBpIDw9IE51bWJlcihzbGVlcFRpbWUpOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9ICgpID0+IHsgXG4gICAgcmV0dXJuIHRpbWVCbG9ja0NvbXBvbmVudChyYW5nZSgpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNvbXBvbmVudFxuICB9O1xuICBcbn07XG5cblxuY29uc3QgdGltZUJsb2NrQ29tcG9uZW50ID0gKHJhbmdlKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBzZXRSb3dUZW1wbGF0ZSA9ICgpID0+IHsgXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgJ2dhcC1weCcsICdsZzpncmlkLWNvbHMtNCcsICdteC1hdXRvJywgJ2JnLWdyYXktMjAwJyk7XG4gIH07IFxuXG4gIGNvbnN0IHNldFRpbWVzID0gKCkgPT4ge1xuICAgIHJhbmdlLmZvckVhY2goIG4gPT4ge1xuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGltZS5pbm5lckhUTUwgPSBuO1xuICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTUwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnLCAnY29sLXNwYW4tMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbC1zdGFydC0xJywgJ2gtMzInLCAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3ctMzInLCAndGV4dC01eGwnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgfSk7XG4gIH07IFxuXG4gIHNldFJvd1RlbXBsYXRlKCk7XG4gIHNldFRpbWVzKCk7XG5cblxuICByZXR1cm4ge1xuICAgIGdyaWRcbiAgfTtcblxufTtcblxudmFyIHRlc3QgPSB0aW1lQmxvY2soNCwgMjEpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrJykuYXBwZW5kQ2hpbGQodGVzdC5jb21wb25lbnQoKS5ncmlkKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9