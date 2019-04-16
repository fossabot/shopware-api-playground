const getIDs = require('./getIDs');
it('Typeof `getIDS` has to be a function', done => {
  expect(typeof getIDs).toBe('function');
  done();
})