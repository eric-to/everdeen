export const fetchNews = ticker => {
  const domains = 'businessinsider.com,cnbc.com,engadget.com,mashable.com,techcrunch.com'
  if (!ticker) {
    return $.ajax(
      `https://newsapi.org/v2/everything?domains=${domains}&language=en&pageSize=30&apiKey=${window.newsAPIKey}`
    );
  }
  return $.ajax(
    `https://newsapi.org/v2/everything?q=${ticker}&language=en&apiKey=${window.newsAPIKey}`
  );
};
