const fetch = require("node-fetch");

exports.handler = async () => {
  const EBAY_ACCESS_TOKEN = process.env.EBAY_ACCESS_TOKEN; // à stocker sur Netlify

  const res = await fetch(
    'https://api.ebay.com/buy/browse/v1/item_summary/search?seller_username=lafabriquedupixel',
    {
      headers: {
        'Authorization': `Bearer ${EBAY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data.itemSummaries || [])
  };
};