module.exports = async (_shop) => {
  let arr = [];
  try {
    let articles = await _shop.getArticles();
    for (const art of articles) {
      arr.push(art.id);
    }
  } catch (err) {
    console.log(err);
  }
  return arr;
}