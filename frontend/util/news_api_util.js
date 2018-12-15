export const fetchNews = () => {
  const url = 'https://newsapi.org/v2/everything?' +
              'q=Apple&' +
              'from=2018-12-14&' +
              'sortBy=popularity&' +
              'pageSize=30&apiKey=' +
              window.newsAPIKey;
  return $.ajax(url)
}
