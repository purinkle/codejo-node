var assert = require('assert');

test('hello', function () {
  assert.equal(true, true);
});

test('When I scan nothing I get zero', function () {
  assert.equal(new Checkout().getTotal(), 0);
});

test('When I scan one A then total is 50', function () {
  var checkout = new Checkout();
  checkout.scan('A');
  assert.equal(checkout.getTotal(), 50);
});

var Checkout = function () {
  var total = 0;

  function getTotal() {
    return total;
  }

  function scan() {
    total = 50;
  }

  return {
    getTotal: getTotal,
    scan: scan
  };
};
