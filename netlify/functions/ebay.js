import fetch from 'node-fetch';

export async function handler(event, context) {
  const query = event.queryStringParameters.q || 'ordinateur';
  const clientId = process.env.EBAY_CLIENT_ID;
  const response = await fetch(`https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(query)}&limit=10`, {
    headers: {
      'Authorization': `Bearer ${process.env.EBAY_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    }
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}