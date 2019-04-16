module.exports = async (_shop, items) => {
  if (!Array.isArray(items)) {
    try {
      const item = items;
      await _shop.updateArticle(item.id, item.edits);
      console.log(`Finished! Updated 1 Article`);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      await _shop.updateArticles(items);
      console.log(`Finished! Updated ${items.length} Articles`);
    } catch (err) {
      console.log(err);
    }
  }
};