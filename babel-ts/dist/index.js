"use strict";

require("core-js/modules/es6.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var test = function test(num) {
  console.log('test');
  return new Promise(function (resolve, reject) {
    if (num > 5) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

var _default = test;
exports["default"] = _default;

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var num;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return test(10);

        case 2:
          num = _context.sent;
          console.log('num', num);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();