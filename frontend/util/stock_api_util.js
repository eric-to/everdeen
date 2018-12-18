export const fetchLatestPrice = (ticker) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${ticker}/quote/1d`
  })
);
