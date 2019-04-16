const shop = require('./helper/shop');

const getIDs = require('./functions/getIDs');
const updateLongDesc = require('./functions/updateLongDesc');

(async () => {
  const IDs = await getIDs(shop);
  const arr = [];
  for (const ID of IDs) {
    arr.push({
      id: ID,
      text: 'Test'
    })
  }
  updateLongDesc(shop, arr);
})();