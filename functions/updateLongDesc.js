module.exports = async (_shop, options) => {
  for (const option of options) {
    try {
      const resp = await _shop.updateArticle(option.id, {
        descriptionLong: option.text
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  }
};