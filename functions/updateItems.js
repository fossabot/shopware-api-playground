const logger = require('../helper/logger');

module.exports = async (_shop, items) => {
  if (!Array.isArray(items)) {
    try {
      const item = items;
      await _shop.updateArticle(item.id, item.edits);
      logger.info(`Finished! Updated 1 Article`);
    } catch (err) {
      logger.error(err);
    }
  } else {
    try {
      await _shop.updateArticles(items);
      logger.info(`Finished! Updated ${items.length} Articles`);
    } catch (err) {
      logger.error(err);
    }
  }
};