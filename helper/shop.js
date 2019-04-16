require('dotenv').config();
const Shopware = require('shopware-api-client');
module.exports = new Shopware({
  host: process.env.SHOP_URL,
  user: process.env.SHOP_USER,
  apiKey: process.env.API_KEY
});