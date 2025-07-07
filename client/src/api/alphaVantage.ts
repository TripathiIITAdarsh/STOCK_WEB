// const API_KEY = 'W016BZE806U8P662'; // Replace with your actual API key

// export async function fetchDailyStock(symbol: string) {
//   const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error('Failed to fetch stock data');
//   }
//   const data = await response.json();
//   return data;
// }

const API_KEY = 'W016BZE806U8P662'; // Replace with your real Alpha Vantage API key
const BASE_URL = 'https://www.alphavantage.co/query';

export async function getDailyTimeSeries(symbol: string) {
  const url = `${BASE_URL}?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data['Time Series (Daily)'];
}
