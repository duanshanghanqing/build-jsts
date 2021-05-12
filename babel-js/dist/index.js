"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var test = function test() {
  console.log('test');
  return Promise.reject(1);
};

test();