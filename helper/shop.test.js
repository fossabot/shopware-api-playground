const shop = require('./shop');
it('Typeof `shop` has to be an object', done => {
  expect(typeof shop).toBe('object');
  done();
})