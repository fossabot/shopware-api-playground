const logger = require('../helper/logger');

module.exports = async (_shop) => {
  let arr = [];
  try {
    let articles = await _shop.getArticles();
    for (const art of articles) {
      arr.push(art.id);
    }
  } catch (err) {
    logger.error(err);
  }

  return arr;
}