const getIDsFromArticleNumber = require('./getIDsFromArticleNumber');
it('Typeof `getIDsFromArticleNumber` has to be a function', done => {
  expect(typeof getIDsFromArticleNumber).toBe('function');
  done();
})