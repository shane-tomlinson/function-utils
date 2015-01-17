/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Some utilities for working with function that are not available
 * in JavaScript by default.
 *
 * @method FunctionUtils
 */

// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.FunctionUtils = factory();
  }
}(this, function () { //jshint ignore: line
  'use strict';

  /**
   * Delay the invocation of a method. Does not return the return value of
   * the delayed method.
   *
   * @method delay
   * @param {Function} method
   * Method to call
   * @param {Number} delayMS
   * Milliseconds to delay, default is 0
   * @returns {Function}
   * A new function to call in place of `method`
   */
  function delay(method, delayMS) {
    return function () {
      var self = this;
      var args = [].slice.call(arguments, 0);
      setTimeout(function () {
        method.apply(self, args);
      }, delayMS || 0);
    };
  }

  /**
   * Partially apply a function by filling in any number of its arguments,
   * without changing its dynamic this value. A close cousin of
   * Function.prototype.bind.
   *
   * @example
   *     function add(a, b) {
   *       return a + b;
   *     }
   *
   *     var add1 = partial(add, 1);
   *     var result = add1(9);
   *     // result is 10
   *
   * @method partial
   * @param {Function} method
   * method to pass arguments to.
   * @returns {Function}
   */
  function partial(method) {
    var args = [].slice.call(arguments, 1);
    return function () {
      args = args.concat([].slice.call(arguments, 0));
      return method.apply(this, args);
    };
  }

  return {
    delay: delay,
    partial: partial
  };
}));
