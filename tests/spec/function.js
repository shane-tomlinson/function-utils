/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var assert = chai.assert;

describe('function-utils', function () {
  describe('delay', function () {
    it('delays the invocation of a function', function (done) {
      var arg;
      function callLater(_arg) {
        arg = _arg;
      }

      var delayBy10 = FunctionUtils.delay(callLater, 10);
      delayBy10('an argument');
      assert.isUndefined(arg);

      setTimeout(function() {
        assert.equal(arg, 'an argument');
        done();
      }, 15);
    });
  });

  describe('partial', function () {
    it('partially applies a function', function () {
      function adder(a, b) {
        return a + b;
      }

      var add10 = FunctionUtils.partial(adder, 10);
      var result = add10(9);
      assert.equal(result, 19);
    });
  });
});

