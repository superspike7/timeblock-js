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

function TimeBlock(options){

    this.wakingHour = options.wakingHour || 5;
    this.sleepingHour = options.sleepingHour || 21;

};

TimeBlock.prototype.range = function() {
      let first = Number(this.wakingHour);
      let last = Number(this.sleepingHour);
      let arr = [];
      for(let i = first; i <= last; i++){
        arr.push(i);
      }
      return arr;
};


TimeBlock.prototype.component = function() {
  return timeBlockComponent(this.range());
}

// const timeBlock = (wakeTime, sleepTime) => {

//   const range = () => {
//     let arr = [];
//     for(let i = Number(wakeTime); i <= Number(sleepTime); i++) {
//       arr.push(i);
//     }
//     return arr;
//   };

//   const component = () => { 
//    console.log(TimeBlockComponent(range())) ;

//   };

//   return {
//     range,
//     component
//   };
  
// };


const timeBlockComponent = (range) => {
  const grid = document.createElement('div');

  const setRowTemplate = () => { 
    grid.classList.add('grid', 'lg:grid-cols-4', 'lg:w-1/2', 'mx-auto', 'bg-gray-200');
  }; 

  const setTimes = () => {
    range.forEach( n => {
      const time = document.createElement('div');
      time.innerHTML = n;
      time.classList.add('bg-blue-500', 'text-white', 'col-span-1', 'col-start-1', 'h-20');
      grid.appendChild(time);
    });
  }; 

  setRowTemplate();
  setTimes();


  return {
    grid
  };

};

var test = new TimeBlock({});
document.body.appendChild(test.component().grid);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQjs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyx3QkFBd0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCO0FBQzNCLGlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aW1lYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGltZWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBUaW1lQmxvY2sob3B0aW9ucyl7XG5cbiAgICB0aGlzLndha2luZ0hvdXIgPSBvcHRpb25zLndha2luZ0hvdXIgfHwgNTtcbiAgICB0aGlzLnNsZWVwaW5nSG91ciA9IG9wdGlvbnMuc2xlZXBpbmdIb3VyIHx8IDIxO1xuXG59O1xuXG5UaW1lQmxvY2sucHJvdG90eXBlLnJhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgZmlyc3QgPSBOdW1iZXIodGhpcy53YWtpbmdIb3VyKTtcbiAgICAgIGxldCBsYXN0ID0gTnVtYmVyKHRoaXMuc2xlZXBpbmdIb3VyKTtcbiAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgIGZvcihsZXQgaSA9IGZpcnN0OyBpIDw9IGxhc3Q7IGkrKyl7XG4gICAgICAgIGFyci5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycjtcbn07XG5cblxuVGltZUJsb2NrLnByb3RvdHlwZS5jb21wb25lbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRpbWVCbG9ja0NvbXBvbmVudCh0aGlzLnJhbmdlKCkpO1xufVxuXG4vLyBjb25zdCB0aW1lQmxvY2sgPSAod2FrZVRpbWUsIHNsZWVwVGltZSkgPT4ge1xuXG4vLyAgIGNvbnN0IHJhbmdlID0gKCkgPT4ge1xuLy8gICAgIGxldCBhcnIgPSBbXTtcbi8vICAgICBmb3IobGV0IGkgPSBOdW1iZXIod2FrZVRpbWUpOyBpIDw9IE51bWJlcihzbGVlcFRpbWUpOyBpKyspIHtcbi8vICAgICAgIGFyci5wdXNoKGkpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gYXJyO1xuLy8gICB9O1xuXG4vLyAgIGNvbnN0IGNvbXBvbmVudCA9ICgpID0+IHsgXG4vLyAgICBjb25zb2xlLmxvZyhUaW1lQmxvY2tDb21wb25lbnQocmFuZ2UoKSkpIDtcblxuLy8gICB9O1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcmFuZ2UsXG4vLyAgICAgY29tcG9uZW50XG4vLyAgIH07XG4gIFxuLy8gfTtcblxuXG5jb25zdCB0aW1lQmxvY2tDb21wb25lbnQgPSAocmFuZ2UpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHNldFJvd1RlbXBsYXRlID0gKCkgPT4geyBcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCAnbGc6Z3JpZC1jb2xzLTQnLCAnbGc6dy0xLzInLCAnbXgtYXV0bycsICdiZy1ncmF5LTIwMCcpO1xuICB9OyBcblxuICBjb25zdCBzZXRUaW1lcyA9ICgpID0+IHtcbiAgICByYW5nZS5mb3JFYWNoKCBuID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbWUuaW5uZXJIVE1MID0gbjtcbiAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS01MDAnLCAndGV4dC13aGl0ZScsICdjb2wtc3Bhbi0xJywgJ2NvbC1zdGFydC0xJywgJ2gtMjAnKTtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgfSk7XG4gIH07IFxuXG4gIHNldFJvd1RlbXBsYXRlKCk7XG4gIHNldFRpbWVzKCk7XG5cblxuICByZXR1cm4ge1xuICAgIGdyaWRcbiAgfTtcblxufTtcblxudmFyIHRlc3QgPSBuZXcgVGltZUJsb2NrKHt9KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVzdC5jb21wb25lbnQoKS5ncmlkKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=