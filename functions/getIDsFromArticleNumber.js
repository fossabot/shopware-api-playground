const logger = require('../helper/logger');
const getItemIDs = require("./getItemIDs");

module.exports = async (_shop, _ItemCodes) => {
  const IDs = await getItemIDs(_shop);
  logger.info('Begin fetching item data. This may take a while!');
  const ItemData = [];
  for (const ID of IDs) {
    try {
      await logger.info(`Fetching Item Data for ID: ${ID}`);
      const resp = await _shop.getArticle(ID);
      const ItemCode = resp.mainDetail.number;
      ItemData.push({
        id: ID,
        ItemCode: ItemCode
      });
    } catch (err) {
      logger.error(err);
    }
  }

  const result = [];
  for (const ItemCode of _ItemCodes) {
    for (const Item of ItemData) {
      try {
        if (ItemCode.match(Item.ItemCode)) {
          result.push({
            id: Item.id,
            ItemCode: Item.ItemCode
          });
        }
      } catch (err) {
        logger.error(err);
      }
    }
  }

  return result;
}