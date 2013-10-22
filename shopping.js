var assert = require('assert');

test('hello', function () {
  assert.equal(true, true);
});

test('When I scan nothing I get zero', function () {
  assert.equal(new Checkout().total(), 0);
});

// test('When I scan one A then total is 50', function () {
//   var checkout = new Checkout();
//   checkout.scan('A');
//   assert.equal(checkout.total(), 50);
// });

var Checkout = function () {
  var rolf = 0;

  function total() {
    return rolf;
  }

  return {
    total: total
  };
};
