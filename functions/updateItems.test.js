const updateItems = require('./updateItems');
it('Typeof `updateItems` has to be a function', done => {
  expect(typeof updateItems).toBe('function');
  done();
})