var flattenlev = require('./index'),
  assert = require('assert');

[
  [ [1, [ 2, 3]], [1, 2, 3]],
].forEach(function (t) {
  assert.deepEqual(flattenlev(t[0]), t[1]);
});

