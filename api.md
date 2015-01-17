

<!-- Start src/function.js -->

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.

## FunctionUtils()

Some utilities for working with function that are not available
in JavaScript by default.

## delay(method, delayMS)

Delay the invocation of a method. Does not return the return value of
the delayed method.

### Params:

* **Function** *method* Method to call
* **Number** *delayMS* Milliseconds to delay, default is 0

### Return:

* **Function** A new function to call in place of `method`

## partial(method)

Partially apply a function by filling in any number of its arguments,
without changing its dynamic this value. A close cousin of
Function.prototype.bind.

### Params:

* **Function** *method* method to pass arguments to.

### Return:

* **Function** 

<!-- End src/function.js -->

