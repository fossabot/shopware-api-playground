const getItemIDs = require('./getItemIDs');
it('Typeof `getItemIDs` has to be a function', done => {
  expect(typeof getItemIDs).toBe('function');
  done();
})