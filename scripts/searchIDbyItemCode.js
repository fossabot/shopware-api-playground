const shop = require('../helper/shop');

const getIDsFromArticleNumber = require('../functions/getIDsFromArticleNumber');

(async () => {
  const data = await getIDsFromArticleNumber(shop, ['SW10007', 'SW10019', 'SW10025']);
  console.log(data);
})();